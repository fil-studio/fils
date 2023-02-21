import { RenderPass } from "./RenderPass";
import { RawShaderMaterial, Vector2 } from "three";
import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/fxaa.frag';
export class FXAAPass extends RenderPass {
    constructor(width, height) {
        super();
        this.shader = new RawShaderMaterial({
            vertexShader: vert,
            fragmentShader: frag,
            uniforms: {
                tInput: {
                    value: null
                },
                resolution: {
                    value: new Vector2(width, height)
                }
            }
        });
    }
    setSize(width, height) {
        super.setSize(width, height);
        this.shader.uniforms.resolution.value.set(width, height);
    }
}