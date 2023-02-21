"use strict";
/*
 * Verlet Physics package for web
 * Based in and ported from FieldKit
 * https://github.com/marcuswendt/FieldKit.js
 * Implementation in TypeScript
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Physics = exports.Emitter = exports.Constraint = exports.Behaviour = void 0;
var particle_1 = require("./particle");
/*
 * Base Behaviour Class
 */
var Behaviour = /** @class */ (function () {
    function Behaviour() {
    }
    // called once per frame
    Behaviour.prototype.prepare = function () { };
    // called per particle on each frame
    Behaviour.prototype.apply = function (p) { };
    return Behaviour;
}());
exports.Behaviour = Behaviour;
/*
 * Base Constraint Class
 */
var Constraint = /** @class */ (function () {
    function Constraint() {
    }
    // called once per frame
    Constraint.prototype.prepare = function () { };
    // called per particle on each frame
    Constraint.prototype.apply = function (p) { };
    return Constraint;
}());
exports.Constraint = Constraint;
var Emitter = /** @class */ (function () {
    function Emitter(physics, options) {
        if (options === void 0) { options = {}; }
        this.id = 0;
        this.physics = physics;
        this.rate = options.rate != undefined ? options.rate : 1;
        this.interval = options.interval != undefined ? options.interval : 1;
        this.max = options.max != undefined ? options.max : 1;
        this.timer = -1;
    }
    Emitter.prototype.update = function () {
        if (this.timer === -1 || this.timer === this.interval) {
            // add particles
            this.timer = 0;
            for (var i = 0; i < this.rate; i++) {
                if (this.physics.size() >= this.max)
                    return;
                var p = this.create();
                this.init(p);
                this.physics.addParticle(p);
            }
        }
        this.timer++;
    };
    // extend this if required
    Emitter.prototype.create = function () {
        return new particle_1.Particle(this.id++);
    };
    // you shall override this
    Emitter.prototype.init = function (p) {
        // init your particle
    };
    return Emitter;
}());
exports.Emitter = Emitter;
var Physics = /** @class */ (function () {
    function Physics(emitter, options) {
        if (emitter === void 0) { emitter = null; }
        if (options === void 0) { options = {}; }
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
    Physics.prototype.addParticle = function (particle) {
        this.particles.push(particle);
    };
    Physics.prototype.addSpring = function (spring) {
        this.springs.push(spring);
    };
    Physics.prototype.addBehaviour = function (behaviour) {
        this.behaviours.push(behaviour);
    };
    Physics.prototype.addConstraint = function (constraint) {
        this.constraints.push(constraint);
    };
    Physics.prototype.update = function () {
        // shoot new particles?
        if (this.emitter !== null)
            this.emitter.update();
        // To-Do : Spaces optimisation
        this.applyEffectors(this.behaviours, this.particles);
        var sl = this.springs.length;
        for (var i = 0; i < this.constraintIterations; i++) {
            this.applyEffectors(this.constraints, this.particles);
            for (var j = 0; j < this.springIterations; j++) {
                for (var k = 0; k < sl; k++) {
                    this.springs[k].update();
                }
            }
        }
        // update all particles
        var dead = [];
        var pl = this.particles.length;
        for (var pi = 0; pi < pl; pi++) {
            var p = this.particles[pi];
            p.update();
            if (p.dead)
                dead.push(p);
        }
        // remove dead particles
        var dl = dead.length;
        for (var di = 0; di < dl; di++) {
            this.particles.splice(this.particles.indexOf(dead[di]), 1);
        }
    };
    Physics.prototype.applyEffectors = function (effectors, particles) {
        var el = effectors.length;
        var pl = particles.length;
        for (var i = 0; i < el; i++) {
            effectors[i].prepare();
            for (var k = 0; k < pl; k++) {
                if (particles[k].state === 0 /* State.ALIVE */) {
                    effectors[i].apply(particles[k]);
                }
            }
        }
    };
    Physics.prototype.size = function () {
        return this.particles.length;
    };
    return Physics;
}());
exports.Physics = Physics;
