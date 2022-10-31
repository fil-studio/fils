import { RawShaderMaterial, RGBAFormat, UnsignedByteType, Vector2, WebGLMultipleRenderTargets } from "three";
import { BlurPass, RTUtils } from "../main";
import vert from '../glsl/fbo.vert';
import frag from '../glsl/vfx/comp.frag';
const COMP = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tScene: { value: null },
        tGlow: { value: null },
        glowStrength: { value: 1.8 },
        rgbStrength: { value: 0.5 },
        rgbDelta: { value: new Vector2() },
        rgb: { value: false }
    },
    transparent: true
});
export class VFXRenderer {
    constructor(renderer, width, height, settings) {
        this.rnd = renderer;
        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;
        this.sceneRT = new WebGLMultipleRenderTargets(w, h, 2, {
            format: RGBAFormat,
            type: UnsignedByteType
        });
        this.sceneRT['samples'] = 4;
        this.sceneRT.texture[0].name = 'diffuse';
        this.sceneRT.texture[1].name = 'glow';
        const bs = settings && settings.glowSettings ?
            settings.glowSettings : {
            scale: .3,
            radius: 1,
            iterations: 8,
            quality: 0
        };
        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);
        if (settings && settings.glowStrength) {
            COMP.uniforms.glowStrength.value = settings.glowStrength;
        }
        if (settings && settings.rgbStrength) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbStrength.value = settings.rgbStrength;
        }
        if (settings && settings.rgbDelta) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbDelta.value.copy(settings.rgbDelta);
        }
    }
    get shader() {
        return COMP;
    }
    resize(width, height) {
        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;
        this.sceneRT.setSize(w, h);
        this.glow.setSize(w, h);
    }
    render(scene, camera, target = null) {
        this.rnd.autoClear = true;
        this.rnd.setRenderTarget(this.sceneRT);
        this.rnd.render(scene, camera);
        this.glow.renderInternal(this.rnd);
        this.rnd.setRenderTarget(null);
        COMP.uniforms.tScene.value = this.sceneRT.texture[0];
        COMP.uniforms.tGlow.value = this.glow.texture;
        if (target) {
            RTUtils.renderToRT(target, this.rnd, COMP);
        }
        else
            RTUtils.renderToViewport(this.rnd, COMP);
        this.rnd.setRenderTarget(null);
    }
}
