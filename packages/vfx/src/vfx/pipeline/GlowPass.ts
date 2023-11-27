import { RawShaderMaterial, Texture, WebGLRenderTarget, WebGLRenderer } from "three";
import { VFXPipeline } from "../VFXPipeline";
import { BlurPass, BlurSettings } from "./BlurPass";
import { RenderPass } from "./RenderPass";

import vert from '../../glsl/fbo.vert';
import frag from '../../glsl/vfx/glow.frag';

const SHADER = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        strength: {
            value: 1
        },
        tInput: {
            value: null
        },
        glow: {
            value: null
        }
    }
});

export type GlowSettings = {
    blurSettings:BlurSettings;
    strength:number;
}

const DEFAULTS:GlowSettings = {
    strength: 1,
    blurSettings: {
        quality: 2,
        iterations: 4,
        scale: .25,
        radius: 2
    }
}

export class GlowPass extends RenderPass {
    blur:BlurPass;

    constructor(width:number, height:number, src:Texture, settings:GlowSettings=DEFAULTS) {
        super();

        this.blur = new BlurPass(src, width, height, settings.blurSettings);

        this.shader = SHADER.clone();
        this.shader.uniforms.strength.value = settings.strength;
        this.shader.uniforms.glow.value = this.blur.texture;
    }
    setSize(width: number, height: number): void {
        this.blur.setSize(width, height);
    }

    render(renderer: WebGLRenderer, composer: VFXPipeline, target?: WebGLRenderTarget): void {
        this.blur.renderInternal(renderer);
        this.shader.uniforms.glow.value = this.blur.texture;
        super.render(renderer, composer, target);
    }
}