import { RenderPass } from "./RenderPass";

import { RawShaderMaterial, Texture } from "three";
import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/lut.frag';

/**
 * LUT color correction render pass
 */
export class LutPass extends RenderPass {
    shader: RawShaderMaterial = new RawShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            tInput: {
                value: null
            },
            lookupTable: {
                value: null
            }
        }
    });

    lookupTable:Texture;

    constructor(table:Texture) {
        super();
        this.lookupTable = table;
        this.shader.uniforms.lookupTable.value = table;
    }
}