# @fils/phy

Verlet Physics Package written in TypeScript.

This is part of a series of packages that I use in my studio for personal and commercial web & [THREEjs](https://threejs.org) based work. It might remain undocumented for a long while but feel free to try it out!

## `Space` — broad-phase neighbor queries (new in v0.1.1)

Any `Behaviour`/`Constraint` that needs to compare particles against *each other* (separation, collision, flocking/boids-style cohesion, anything neighbor-based) tends to reach for the obvious approach: loop over every other particle for each one. That's O(n²) — fine at a few dozen particles, a real cost at a few hundred, and the dominant cost of the whole simulation well before a thousand.

`Space` is a uniform 3D grid (spatial hash) that turns that into roughly O(n · k), k = particles actually nearby, by only checking the 27 cells (3×3×3) immediately around a particle's own cell instead of every particle in the simulation. That 3×3×3 block is a guarantee, not a heuristic — as long as `cellSize` is set to (or above) the interaction radius you actually care about, nothing within that radius of a particle can fall outside its own cell or an immediate neighbor.

```ts
import { Behaviour, Constraint, Particle, Physics, Space } from '@fils/phy'

class SeparationConstraint extends Constraint {
	space = new Space(minDistance) // cellSize = your interaction radius
	particles: Array<Particle> = []
	minDistance = 0.1
	strength = 0.5

	// prepare() runs once per frame, before apply() runs per particle —
	// rebuild the grid here so it reflects this frame's latest positions.
	prepare() {
		this.space.build(this.particles)
	}

	apply(p: Particle) {
		this.space.forEachNeighbor(p, (other) => {
			if (other === p) return // Space includes p itself — it shares its own cell

			// ...distance check + position correction against `other`,
			// exactly like an all-pairs loop, just over far fewer candidates
		})
	}
}
```

Tuning notes:
- **`cellSize` too small** → a particle's real neighbors spill outside the 3×3×3 search block and get missed. **Too large** → each cell holds most of the simulation anyway, and you're back to something close to O(n²) per cell. Matching `cellSize` to the actual interaction radius (e.g. a separation constraint's `minDistance`) is what keeps the 3×3×3 guarantee correct while keeping buckets small.
- `Space.build()` rebuilds from scratch every call — intentional, not an oversight. Particles move every frame in this package, so a grid computed on a stale frame's positions would already be wrong by the time it's queried; the rebuild itself is O(n), cheap relative to the O(n²) scan it replaces.
- `Space.size()` (occupied cell count) is handy for eyeballing whether `cellSize` is in a sane range during development — very few, dense cells means it's too large; a huge number of near-empty cells means it's too small.

See `src/phy/space.ts`'s own doc comment for the full reasoning and API.

## ⚠️ v0.1.0 — constraint/spring ordering change (read before upgrading)

**Existing projects pinned to `^0.0.x` are not affected automatically** — npm's semver range for a `0.0.z` version (`^0.0.7` ⇒ `>=0.0.7 <0.0.8`) is exact-patch-only, so nothing currently installed will pick this up on its own. This note is for when you deliberately bump a project to `0.1.0+`.

**What changed:** `Physics.update()` used to run `Constraint`/`Spring` effectors *before* each particle's own `Particle.update()` (Verlet integration) for the frame. As of `0.1.0` it runs them *after* — integrate first, then relax constraints/springs against the newly-integrated positions (optionally over several passes via `constraintIterations`/`springIterations`). This matches the standard Jakobsen-style Verlet+constraints technique and is almost certainly what you actually want, but it changes the simulation's numeric behavior, not just internal bookkeeping.

**Why it changed:** with the old (pre-`0.1.0`) ordering, any position correction a `Constraint`/`Spring` made was read back into that *same* particle's own implicit velocity term (`position - prev`) by the integration step that ran right after it, within the same frame. For soft/gentle constraints this is easy to not notice. For a stiff or hard constraint — e.g. a collision/wall-type constraint that snaps a particle back out of solid geometry — it's an undamped feedback loop: this frame's correction becomes part of next frame's "velocity", which gets corrected again, compounding frame over frame. This is exactly what happened building a particle system against this library: a hard z-axis clamp constraint caused the whole simulation to blow up (particles flying apart) within a couple of seconds, purely from this ordering — moving the same clamp logic to run after integration instead fixed it immediately, with no other change.

**If you upgrade an existing project:** re-check the *feel* of anything using `Spring` or a custom `Constraint`, especially stiff/high-strength ones — cloth, rope, or any hard positional constraint. Softer/low-strength constraints will likely look identical or even more stable than before; stiffer ones may now settle faster/calmer than they used to (that's the fix working), so strength/damping values tuned against the old ordering may want re-tuning rather than assuming something broke.

### License
© Copyright 2022, fil studio

[fil](https://fil.studio) is a studio with a creative tech soul. We build bespoke interactive journeys primarily using modern web technologies. We deliver tailored solutions for installations and on-line experiences using our internal toolkit + [ThreeJS](https://threejs.org).

fil is the Catalan word for thread. We love threads cause we often talk about them when building applications and, at the same time, threads are something so organic, colourful and playful.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.