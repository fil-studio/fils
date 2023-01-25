import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/final.frag';
import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from 'three';
const SHADER = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tInput: { value: null },
        enableCA: {
            value: true
        },
        chromatic_aberration: {
            value: .001
        }
    }
});
export class FinalPass extends RenderPass {
    constructor(params = {}) {
        super();
        this.shader = SHADER;
        if (params.caAmount !== undefined) {
            SHADER.uniforms.chromatic_aberration.value = params.caAmount;
        }
        if (params.enableCA !== undefined) {
            SHADER.uniforms.enableCA.value = params.enableCA;
        }
    }
}
