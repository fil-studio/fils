import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/final.frag';
import lut from '../../glsl/lib/lut.glsl';
import { RenderPass } from "./RenderPass";
import { RawShaderMaterial, ShaderChunk } from 'three';
import { vfxShaders } from '../../main';
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
        },
        enableDithering: {
            value: false
        },
        dither: {
            value: 10
        },
        enableVignette: {
            value: false
        },
        vIntensity: {
            value: 1
        },
        enableLut: {
            value: false
        },
        lookupTable: {
            value: null
        }
    }
});
export class FinalPass extends RenderPass {
    constructor(params) {
        super();
        this.shader = SHADER;
        ShaderChunk.lut = lut;
        ShaderChunk['rgbSplit'] = vfxShaders.rgbSplit;
        ShaderChunk['dithering'] = vfxShaders.dithering;
        if (params) {
            if (params.caAmount !== undefined) {
                SHADER.uniforms.chromatic_aberration.value = params.caAmount;
            }
            if (params.enableCA !== undefined) {
                SHADER.uniforms.enableCA.value = params.enableCA;
            }
            if (params.dither !== undefined) {
                SHADER.uniforms.dither.value = params.dither;
            }
            if (params.enableDithering !== undefined) {
                SHADER.uniforms.enableDithering.value = params.enableDithering;
            }
            if (params.vignette !== undefined) {
                SHADER.uniforms.vIntensity.value = params.vignette;
            }
            if (params.enableVignette !== undefined) {
                SHADER.uniforms.enableVignette.value = params.enableVignette;
            }
            if (params.enableLut !== undefined) {
                SHADER.uniforms.enableLut.value = params.enableLut;
            }
        }
    }
}
