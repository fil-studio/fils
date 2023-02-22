import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from "three";
import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/lut.frag';
/**
 * LUT color correction render pass
 */
export class LutPass extends RenderPass {
    constructor(table) {
        super();
        this.shader = new RawShaderMaterial({
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
        this.lookupTable = table;
        this.shader.uniforms.lookupTable.value = table;
    }
}
