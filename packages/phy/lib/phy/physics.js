/*
 * Verlet Physics package for web
 * Based in and ported from FieldKit
 * https://github.com/marcuswendt/FieldKit.js
 * Implementation in TypeScript
 *
 */
import { Particle } from "./particle";
/*
 * Base Behaviour Class
 */
class Behaviour {
    constructor() { }
    // called once per frame
    prepare() { }
    // called per particle on each frame
    apply(p) { }
}
/*
 * Base Constraint Class
 */
class Constraint {
    constructor() { }
    // called once per frame
    prepare() { }
    // called per particle on each frame
    apply(p) { }
}
class Emitter {
    constructor(physics, options = {}) {
        this.id = 0;
        this.physics = physics;
        this.rate = options.rate != undefined ? options.rate : 1;
        this.interval = options.interval != undefined ? options.interval : 1;
        this.max = options.max != undefined ? options.max : 1;
        this.timer = -1;
    }
    update() {
        if (this.timer === -1 || this.timer === this.interval) {
            // add particles
            this.timer = 0;
            for (let i = 0; i < this.rate; i++) {
                if (this.physics.size() >= this.max)
                    return;
                let p = this.create();
                this.init(p);
                this.physics.addParticle(p);
            }
        }
        this.timer++;
    }
    // extend this if required
    create() {
        return new Particle(this.id++);
    }
    // you shall override this
    init(p) {
        // init your particle
    }
}
class Physics {
    constructor(emitter = null, options = {}) {
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
    addParticle(particle) {
        this.particles.push(particle);
    }
    addSpring(spring) {
        this.springs.push(spring);
    }
    addBehaviour(behaviour) {
        this.behaviours.push(behaviour);
    }
    addConstraint(constraint) {
        this.constraints.push(constraint);
    }
    update() {
        // shoot new particles?
        if (this.emitter !== null)
            this.emitter.update();
        // To-Do : Spaces optimisation
        this.applyEffectors(this.behaviours, this.particles);
        let sl = this.springs.length;
        for (let i = 0; i < this.constraintIterations; i++) {
            this.applyEffectors(this.constraints, this.particles);
            for (let j = 0; j < this.springIterations; j++) {
                for (let k = 0; k < sl; k++) {
                    this.springs[k].update();
                }
            }
        }
        // update all particles
        let dead = [];
        let pl = this.particles.length;
        for (let pi = 0; pi < pl; pi++) {
            let p = this.particles[pi];
            p.update();
            if (p.dead)
                dead.push(p);
        }
        // remove dead particles
        let dl = dead.length;
        for (let di = 0; di < dl; di++) {
            this.particles.splice(this.particles.indexOf(dead[di]), 1);
        }
    }
    applyEffectors(effectors, particles) {
        let el = effectors.length;
        let pl = particles.length;
        for (let i = 0; i < el; i++) {
            effectors[i].prepare();
            for (let k = 0; k < pl; k++) {
                if (particles[k].state === 0 /* State.ALIVE */) {
                    effectors[i].apply(particles[k]);
                }
            }
        }
    }
    size() {
        return this.particles.length;
    }
}
export { Behaviour, Constraint, Emitter, Physics };
