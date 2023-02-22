/*
 * Verlet Physics package for web
 * Based in and ported from FieldKit
 * https://github.com/marcuswendt/FieldKit.js
 * Implementation in TypeScript
 *
 */
import { Vec } from "@fils/math";
/*
 * Verlet Particle Base Class
 * Ignore Z values (default 0) if 2D
 */
export class Particle {
    constructor(id = 0, drag = 0.03, lifetime = -1) {
        this.id = id;
        this.age = 0;
        this.lifetime = lifetime; // -1 > infinite by default
        this.drag = drag;
        this.state = 0 /* State.ALIVE */;
        this.position = new Vec();
        this.prev = new Vec();
        this.force = new Vec();
        this.tmp = new Vec();
    }
    get locked() {
        return this.state === 1 /* State.LOCKED */;
    }
    get dead() {
        return this.state === 3 /* State.DEAD */;
    }
    get idle() {
        return this.state === 2 /* State.IDLE */;
    }
    lock() {
        this.state = 1 /* State.LOCKED */;
    }
    unlock() {
        this.state = 2 /* State.IDLE */;
    }
    die() {
        this.state = 3 /* State.DEAD */;
    }
    setPosition(x, y, z = 0) {
        this.position.set(x, y, z);
        this.prev.set(x, y, z);
    }
    copyPosition(v) {
        this.setPosition(v.x, v.y, v.z);
    }
    update() {
        if (this.lifetime > 0 && this.age === this.lifetime)
            this.state = 3 /* State.DEAD */;
        if (this.state > 0 /* State.ALIVE */)
            return;
        this.age++;
        this.tmp.copy(this.position);
        this.position.x += ((this.position.x - this.prev.x) + this.force.x);
        this.position.y += ((this.position.y - this.prev.y) + this.force.y);
        this.position.z += ((this.position.z - this.prev.z) + this.force.z);
        this.force.set(0, 0, 0);
        this.prev.copy(this.tmp);
        this.prev.lerp(this.position, this.drag);
    }
}
/*
 * Verlet Spring
 */
export class Spring {
    constructor(a, b, strength = 0.5) {
        this.restLength = 0;
        this.a = a;
        this.b = b;
        this.strength = strength;
        this.restLength = this.a.position.distanceTo(this.b.position);
    }
    update() {
        const delta = this.b.position.clone().sub(this.a.position);
        const dist = delta.length() + Number.MIN_VALUE;
        const normDistStrength = (dist - this.restLength) / dist * this.strength;
        if (normDistStrength === 0)
            return;
        delta.scale(normDistStrength);
        if (!this.a.locked) {
            this.a.position.add(delta);
        }
        if (!this.b.locked) {
            this.b.position.sub(delta);
        }
    }
}
