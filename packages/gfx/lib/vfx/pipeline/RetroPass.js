import { RenderPass } from "./RenderPass";
import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/retro.frag';
import luma from '../../glsl/lib/luma.glsl';
import dither2 from '../../glsl/lib/dither2.glsl';
import { RawShaderMaterial, ShaderChunk, Vector2 } from "three";
const VFX = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        resolution: {
            value: new Vector2()
        },
        tInput: { value: null },
        pixelate: { value: true },
        dithering: { value: 2 },
        gridSize: { value: 5 }
    }
});
export class RetroPass extends RenderPass {
    constructor(params = {}) {
        super();
        this.shader = VFX.clone();
        ShaderChunk.luma = luma;
        ShaderChunk.dither2 = dither2;
        for (const key in params) {
            this.shader.uniforms[key].value = params[key];
        }
    }
    setSize(width, height) {
        this.shader.uniforms.resolution.value.set(width, height);
    }
}
