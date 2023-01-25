import { DepthFormat, DepthTexture, FloatType, RawShaderMaterial, RGBAFormat, UnsignedByteType, WebGLMultipleRenderTargets } from "three";
import { BlurPass, RTUtils } from "../main";
import vert from '../glsl/fbo.vert';
import frag from '../glsl/vfx/comp.frag';
const COMP = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tScene: { value: null },
        tGlow: { value: null },
        exposure: { value: 1 },
        gamma: { value: 1 },
        renderGlow: { value: true },
        renderScene: { value: true }
    },
    transparent: true
});
const GLOW_DEFAULTS = {
    scale: .3,
    radius: 1,
    iterations: 8,
    quality: 0
};
export class VFXRenderer {
    constructor(renderer, width, height, settings) {
        this.showGlow = true;
        this.showScene = true;
        this.exposure = COMP.uniforms.exposure.value;
        this.gamma = COMP.uniforms.gamma.value;
        this.shader = COMP.clone();
        this.rnd = renderer;
        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;
        this.sceneRT = new WebGLMultipleRenderTargets(w, h, 2, {
            format: RGBAFormat,
            type: UnsignedByteType
        });
        this.sceneRT['samples'] = settings.samples || 4;
        this.sceneRT.texture[0].name = 'diffuse';
        this.sceneRT.texture[1].name = 'glow';
        if (settings.useDepth) {
            this.sceneRT['depthTexture'] = new DepthTexture(w, h, FloatType);
            this.sceneRT['depthTexture'].format = DepthFormat;
        }
        const bs = settings && settings.glowSettings ?
            settings.glowSettings : GLOW_DEFAULTS;
        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);
        if (settings && settings.exposure) {
            this.exposure = settings.exposure;
        }
        if (settings && settings.gamma) {
            this.gamma = settings.gamma;
        }
        if (settings.customFargment !== undefined) {
            this.shader.vertexShader = settings.customFargment;
            if (settings.customUniforms !== undefined) {
                const u = settings.customUniforms;
                for (const key in u) {
                    this.shader.uniforms[key] = u[key];
                }
            }
        }
    }
    setSize(width, height) {
        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;
        this.sceneRT.setSize(w, h);
        this.glow.setSize(w, h);
    }
    updateUniforms() {
        const u = this.shader.uniforms;
        u.exposure.value = this.exposure;
        u.gamma.value = this.gamma;
        u.renderGlow.value = this.showGlow;
        u.renderScene.value = this.showScene;
        u.tScene.value = this.sceneRT.texture[0];
        u.tGlow.value = this.glow.texture;
    }
    render(scene, camera, target = null) {
        this.rnd.autoClear = true;
        this.rnd.setRenderTarget(this.sceneRT);
        this.rnd.render(scene, camera);
        this.glow.renderInternal(this.rnd);
        this.rnd.setRenderTarget(null);
        this.updateUniforms();
        if (target) {
            RTUtils.renderToRT(target, this.rnd, this.shader);
        }
        else
            RTUtils.renderToViewport(this.rnd, this.shader);
        this.rnd.setRenderTarget(null);
    }
}
