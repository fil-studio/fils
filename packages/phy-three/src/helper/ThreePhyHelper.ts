/**
 * Phy Three Helper
 * A ThreeJS helper for @fils/phy
 * Supporting particles and springs
 * To-Do: Move to @fils/phy-three
 */

import { Physics, Spring } from "@fils/phy";
import { BufferAttribute, BufferGeometry, Color, InstancedMesh, LineBasicMaterial, LineSegments, MeshBasicMaterial, Object3D, SphereGeometry } from "three";

const dummy:Object3D = new Object3D();

const ParticleMat = new MeshBasicMaterial({
    color: 0xffffff
});

const color1 = new Color(0xee3333);
const color2 = new Color(0x3333ee);

export interface PhyThreeHelperParameters {
    particleRadius?:number;
}

export class PhyThreeHelper extends Object3D {
    particles:InstancedMesh;
    physics:Physics;

    springs:LineSegments;

    constructor(phy:Physics, _params:PhyThreeHelperParameters={}) {
        super();
        this.physics = phy;

        const ParticleGeo = new SphereGeometry(_params.particleRadius || .02, 32, 16);

        this.particles = new InstancedMesh(
            ParticleGeo,
            ParticleMat,
            phy.particles.length
        );

        let i = 0;
        for(const p of phy.particles) {
            this.particles.setColorAt(i++, p.locked ? color1 : color2)
        }

        this.add(this.particles);

        const pos = [];
        const col = [];

        for(const s of phy.springs) {
            const a = s.a.position;
            const b = s.b.position;
            pos.push(a.x, a.y, a.z);
            pos.push(b.x, b.y, b.z);

            if(s.a.locked) col.push(color1.r, color1.g, color1.b);
            else col.push(color2.r, color2.g, color2.b);

            if(s.b.locked) col.push(color1.r, color1.g, color1.b);
            else col.push(color2.r, color2.g, color2.b);
        }

        const geo = new BufferGeometry();
        geo.setAttribute('position', new BufferAttribute(
            new Float32Array(pos),
            3
        ));
        geo.setAttribute('color', new BufferAttribute(
            new Float32Array(col),
            3
        ));

        this.springs = new LineSegments(geo, new LineBasicMaterial({
            color: 0xffffff,
            vertexColors: true
        }));
        this.add(this.springs);

        this.update();
    }

    update() {
        const particles = this.physics.particles;
        for(let i=0,len=particles.length; i<len; i++) {
            const p = particles[i];
            dummy.position.copy(p.position);
            dummy.updateMatrix();
            this.particles.setMatrixAt(i, dummy.matrix);
            this.particles.setColorAt(i, p.locked ? color1 : color2);
        }

        this.particles.instanceMatrix.needsUpdate = true;
        this.particles.instanceColor.needsUpdate = true;

        const pos = this.springs.geometry.attributes.position;
        const color = this.springs.geometry.attributes.color;
        let k = 0;

        function updateSpringColor(s:Spring) {
            const i1 = k;
            const i2 = k+1;

            const c1 = s.a.locked ? color1 : color2;
            const c2 = s.b.locked ? color1 : color2;

            color.array[i1*3] = c1.r;
            color.array[i1*3 + 1] = c1.g;
            color.array[i1*3 + 2] = c1.b;

            color.array[i2*3] = c2.r;
            color.array[i2*3 + 1] = c2.g;
            color.array[i2*3 + 2] = c2.b;
        }

        for(let i=0, len=this.physics.springs.length; i<len; i++) {
            const s = this.physics.springs[i];
            updateSpringColor(s);
            const i1 = k;
            const i2 = k+1;

            pos.array[i1*3] = s.a.position.x;
            pos.array[i1*3+1] = s.a.position.y;
            pos.array[i1*3+2] = s.a.position.z;
            pos.array[i2*3] = s.b.position.x;
            pos.array[i2*3+1] = s.b.position.y;
            pos.array[i2*3+2] = s.b.position.z;
            k+=2;
        }

        pos.needsUpdate = true;
        color.needsUpdate = true;
    }
}