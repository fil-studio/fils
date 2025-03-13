import { Vec } from "@fils/math";
import { Particle, Physics, Spring } from "@fils/phy";
import { Mesh, Vector3 } from "three";

/**
 * Mesh Particle
 */
export interface MeshParticleParameters {
    x:number;
    y:number;
    z:number;
}

export class MeshParticle extends Particle {
    restPosition:Vec;
    
    constructor(_params:MeshParticleParameters, id?:number, drag?:number) {
        super(id, drag);
        this.setPosition(_params.x, _params.y, _params.z);
        this.restPosition = new Vec(_params.x, _params.y, _params.z);
    }
}

export interface PhyMeshParameters {
    dragGen?():number;
    springStrGen?():number;
    useQuad?:boolean;
}

const DEFAULT_DRAG = .5;
const DEFAULT_SPRING_STRENGTH = .5;

const tmp = new Vector3();

/**
 * Wrapper to create a phy mesh
 * with particles and springs given a ThreeJS Mesh
 */
export class PhyThreeMesh extends Physics {
    particles:MeshParticle[];
    
    constructor(mesh:Mesh, _params:PhyMeshParameters={}) {
        super();

        mesh.updateMatrix();

        const geo = mesh.geometry;
        const pos = geo.attributes.position;

        // add particles
        for(let i=0; i< pos.count; i++) {
            tmp.set(pos.array[i*3],
                pos.array[i*3+1],
                pos.array[i*3+2]).applyMatrix4(mesh.matrix);

            const p = new MeshParticle({
                x: tmp.x,
                y: tmp.y,
                z: tmp.z
            }, i, _params.dragGen ? _params.dragGen() : DEFAULT_DRAG);

            this.addParticle(p);
        }

        // add springs
        const index = geo.index;
        const part = this.particles;
        for(let i=0; i< index.count/3; i++) {
            const s1 = new Spring(
                part[index.array[i*3]],
                part[index.array[i*3+1]],
                _params.springStrGen ? _params.springStrGen() : DEFAULT_SPRING_STRENGTH
            );
            this.addSpring(s1);
            
            if(_params.useQuad !== true) {
                const s2 = new Spring(
                    part[index.array[i*3+1]],
                    part[index.array[i*3+2]],
                    _params.springStrGen ? _params.springStrGen() : DEFAULT_SPRING_STRENGTH
                );
                this.addSpring(s2);

                const s3 = new Spring(
                    part[index.array[i*3+2]],
                    part[index.array[i*3]],
                    _params.springStrGen ? _params.springStrGen() : DEFAULT_SPRING_STRENGTH
                );
                this.addSpring(s3);
            }
        }
    }
}