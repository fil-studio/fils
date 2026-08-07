/*
 * Verlet Physics package for web
 * Based in and ported from FieldKit
 * https://github.com/marcuswendt/FieldKit.js
 * Implementation in TypeScript
 * 
 */

import { Particle, Spring, State } from "./particle";

/*
 * Base Behaviour Class
 */

class Behaviour {
	constructor(){}
	
	// called once per frame
	prepare(){}
	
	// called per particle on each frame
	apply(p:Particle){}
}

/*
 * Base Constraint Class
 */

class Constraint {
	constructor(){}
	
	// called once per frame
	prepare(){}
	
	// called per particle on each frame
	apply(p:Particle){}
}

/*
 * Emitter Class
 */

type EmitterOptions = {
	rate?:number
	interval?:number
	max?:number
}

class Emitter {
	physics:Physics
	rate:number
	interval:number
	max:number
	timer:number
	id:number = 0

	constructor(physics:Physics, options:EmitterOptions={}) {
		this.physics = physics;
		this.rate = options.rate != undefined ? options.rate : 1;
		this.interval = options.interval != undefined ? options.interval : 1;
		this.max = options.max != undefined ? options.max : 1;
		this.timer = -1;
	}

	update() {
		if(this.timer === -1 || this.timer === this.interval) {
			// add particles
			this.timer = 0;

			for(let i=0;i<this.rate;i++) {
				if (this.physics.size() >= this.max) return;
				let p = this.create();
				this.init(p);
				this.physics.addParticle(p);
			}
		}
		this.timer++;
	}
	
	// extend this if required
	create():Particle {
		return new Particle(this.id++);
	}
	
	// you shall override this
	init(p:Particle) {
		// init your particle
	}
}

/*
 * Physics Class
 */

type Iterations = 1|2|3|4|5|6|7|8|9|10;

type PhysicsOptions = {
	constraintIterations?:Iterations
	springIterations?:Iterations
}

class Physics {
	particles:Array<Particle>
	springs:Array<Spring>
	behaviours:Array<Behaviour>
	constraints:Array<Constraint>
	emitter:Emitter|null
	constraintIterations:Iterations
	springIterations:Iterations

	constructor(emitter:Emitter|null=null, options:PhysicsOptions={}) {
		// list of particles in simulation
		this.particles = [];

		// list of springs in simulation
		this.springs = [];

		// list of behaviours & constraints
		this.behaviours = [];
		this.constraints = [];

		// Particle emitter
		this.emitter = emitter;

		// Settings
		this.constraintIterations = options.constraintIterations != undefined ? options.constraintIterations : 1;
		this.springIterations = options.springIterations != undefined ? options.springIterations : 1;
	}

	addParticle(particle:Particle) {
		this.particles.push(particle);
	}

	addSpring(spring:Spring) {
		this.springs.push(spring);
	}

	addBehaviour(behaviour:Behaviour) {
		this.behaviours.push(behaviour);
	}

	addConstraint(constraint:Constraint) {
		this.constraints.push(constraint);
	}

	update() {
		// shoot new particles?
		if (this.emitter !== null) this.emitter.update();

		// Broad-phase neighbor queries (an all-pairs O(n²) scan is the usual
		// bottleneck for a Behaviour/Constraint that compares particles
		// against each other, e.g. separation/collision) are the individual
		// effector's own concern, not Physics' — see the Space class for a
		// spatial hash any Behaviour/Constraint can build in prepare() and
		// query in apply() to avoid that O(n²) scan.
		this.applyEffectors(this.behaviours, this.particles);

		// Integrate BEFORE constraints/springs, not after (see v0.1.0 note
		// below) — this matches the standard Verlet-integration technique
		// (apply forces, integrate position, THEN relax constraints against
		// the newly-integrated position, optionally over several iterations
		// via constraintIterations/springIterations). Doing it the other way
		// around — as this method used to, up to v0.0.x — fed any position
		// correction a constraint/spring made straight into that SAME
		// particle's own implicit velocity term (position - prev), which
		// Particle.update() below then reads and re-applies again on top of
		// the correction, within the very same frame. For a hard/stiff
		// constraint (e.g. a collision wall) that's an undamped feedback
		// loop: each frame's correction becomes part of next frame's
		// "velocity", which gets corrected again, compounding — in testing
		// this was enough to blow a particle system up within a couple of
		// seconds. See the @fils/phy README's "v0.1.0 — constraint/spring
		// ordering change" section for the full writeup and what to check in
		// projects still pinned to <0.1.0.
		let dead = [];
		let pl = this.particles.length;
		for(let pi=0; pi<pl; pi++) {
			let p = this.particles[pi];
			p.update();
			if(p.dead) dead.push(p);
		}

		let sl = this.springs.length;

		for(let i=0; i<this.constraintIterations; i++) {
			this.applyEffectors(this.constraints, this.particles);
			for (let j=0; j<this.springIterations; j++) {
				for(let k=0; k<sl; k++) {
					this.springs[k].update();
				}
			}
		}

		// remove dead particles
		let dl = dead.length;
		for(let di=0; di<dl; di++) {
			this.particles.splice(this.particles.indexOf(dead[di]), 1);
		}
	}

	applyEffectors(effectors:Array<Behaviour|Constraint>, particles:Array<Particle>) {
		let el = effectors.length;
		let pl = particles.length;
		for(let i=0;i<el;i++) {
			effectors[i].prepare();
			for(let k=0;k<pl;k++) {
				if(particles[k].state === State.ALIVE) {
					effectors[i].apply(particles[k]);
				}
			}
		}
	}

	size():number {
		return this.particles.length;
	}
}

export {
	Behaviour,
	Constraint,
	EmitterOptions,
	Emitter,
	PhysicsOptions,
	Physics
}