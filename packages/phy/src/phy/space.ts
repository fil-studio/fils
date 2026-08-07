/*
 * Verlet Physics package for web
 * Spatial hash grid for broad-phase neighbor queries — fulfils the
 * "To-Do: Space optimization" note that used to sit above Physics.update().
 *
 * A naive all-pairs neighbor check (e.g. a separation/collision Constraint
 * comparing every particle against every other one) is O(n²). For anything
 * beyond a couple hundred particles that gets expensive fast, and almost
 * always unnecessarily so: two particles further apart than the
 * interaction's own radius can never affect each other, so most of those
 * n² checks are wasted work.
 *
 * Space buckets particles into a uniform 3D grid, keyed by cell coordinates
 * (position divided by cellSize, floored). As long as cellSize is set to (or
 * above) the interaction radius you actually care about, checking just the
 * 3x3x3 block of cells immediately around a particle's own cell is
 * guaranteed to include every other particle within that radius — nothing
 * closer than cellSize can be further away than one cell in any axis. This
 * turns an O(n²) scan into roughly O(n * k), k = particles per local
 * neighborhood, typically far smaller than n.
 *
 * Usage — inside a Constraint (prepare() is called once per frame, apply()
 * once per living particle, see Physics.applyEffectors):
 *
 *   class MyConstraint extends Constraint {
 *     space = new Space(interactionRadius)
 *     particles: Array<Particle> = []
 *
 *     prepare() {
 *       this.space.build(this.particles)
 *     }
 *
 *     apply(p: Particle) {
 *       this.space.forEachNeighbor(p, (other) => {
 *         if (other === p) return
 *         // ... distance check + response against other, same as before
 *       })
 *     }
 *   }
 *
 * Rebuilding every frame (build()) is intentional, not an oversight: this
 * package's particles move every frame, so any grid assignment computed on
 * a previous frame would already be stale by the time it's queried. The
 * rebuild itself is O(n) — cheap relative to the O(n²) it replaces.
 *
 * Not a silver bullet: pick cellSize too small and a particle's real
 * neighbors spill outside the 3x3x3 search block (misses); too large and
 * each cell holds most of the simulation anyway (degenerates back toward
 * O(n²)). Matching cellSize to the actual interaction radius (e.g. a
 * separation Constraint's minDistance) is what makes the 3x3x3 guarantee
 * hold while keeping buckets small.
 */

import { Particle } from "./particle";

class Space {
	cellSize: number
	private cells: Map<string, Array<Particle>>

	constructor(cellSize: number) {
		this.cellSize = cellSize;
		this.cells = new Map();
	}

	private key(x: number, y: number, z: number): string {
		const s = this.cellSize;
		return `${Math.floor(x / s)}_${Math.floor(y / s)}_${Math.floor(z / s)}`;
	}

	/*
	 * Empties every bucket, keeping the Space itself (and its cellSize)
	 * around to be rebuilt next frame — call build() instead in the common
	 * case, this is exposed mainly for callers managing insertion themselves.
	 */
	clear() {
		this.cells.clear();
	}

	/*
	 * Buckets a single particle by its CURRENT position. Safe to call
	 * multiple times per frame for particles that move (e.g. re-inserting
	 * after a position correction) as long as you clear() first — this
	 * package's own Constraint/Behaviour effectors don't need that though,
	 * since a fresh build() already reflects this frame's latest positions.
	 */
	insert(p: Particle) {
		const k = this.key(p.position.x, p.position.y, p.position.z);
		let bucket = this.cells.get(k);
		if (bucket === undefined) {
			bucket = [];
			this.cells.set(k, bucket);
		}
		bucket.push(p);
	}

	/*
	 * clear() + insert() every particle in one call — the normal way to
	 * (re)build a Space once per frame, typically from a Constraint's
	 * prepare() (called once per frame, before its per-particle apply()
	 * loop runs — see Physics.applyEffectors).
	 */
	build(particles: Array<Particle>) {
		this.clear();
		const pl = particles.length;
		for (let i = 0; i < pl; i++) {
			this.insert(particles[i]);
		}
	}

	/*
	 * Calls fn once for every particle sharing p's own cell or one of the 26
	 * cells immediately surrounding it (a 3x3x3 block) — see the module
	 * doc-comment above for why that block is exactly what's needed to
	 * guarantee catching everything within cellSize of p, no more, no less.
	 *
	 * Includes p ITSELF if it was inserted into this Space (it shares its
	 * own cell, after all) — callers that need to skip self-interaction
	 * should check for it, e.g. `if (other === p) return`.
	 */
	forEachNeighbor(p: Particle, fn: (other: Particle) => void) {
		const s = this.cellSize;
		const cx = Math.floor(p.position.x / s);
		const cy = Math.floor(p.position.y / s);
		const cz = Math.floor(p.position.z / s);

		for (let x = cx - 1; x <= cx + 1; x++) {
			for (let y = cy - 1; y <= cy + 1; y++) {
				for (let z = cz - 1; z <= cz + 1; z++) {
					const bucket = this.cells.get(`${x}_${y}_${z}`);
					if (bucket === undefined) continue;

					const bl = bucket.length;
					for (let i = 0; i < bl; i++) {
						fn(bucket[i]);
					}
				}
			}
		}
	}

	/*
	 * Number of OCCUPIED cells (not particles) — mainly useful for tuning
	 * cellSize during development: very few, densely-packed cells means
	 * cellSize is too large (heading back toward O(n²) per cell); a huge
	 * number of near-empty cells means it's too small (more map lookups than
	 * necessary, and risks the "neighbor in a 4th cell over" miss case).
	 */
	size(): number {
		return this.cells.size;
	}
}

export {
	Space
}
