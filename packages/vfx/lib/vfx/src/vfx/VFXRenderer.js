import { DepthFormat, DepthTexture, FloatType, RawShaderMaterial, RGBAFormat, Scene, UnsignedByteType, WebGLMultipleRenderTargets, WebGLRenderTarget } from "three";
import { BlurPass } from "../main";
import vert from '../glsl/vfx/comp.vert';
import frag from '../glsl/vfx/comp.frag';
import { RTUtils } from '../../../gfx/src/main';
const COMP = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tBackground: { value: null },
        tScene: { value: null },
        tGlow: { value: null },
        exposure: { value: 1 },
        gamma: { value: 1 },
        renderBackground: { value: true },
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
        this.showBackground = true;
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
            type: UnsignedByteType,
            samples: settings && settings.samples ? settings.samples : 4
        });
        this.sceneRT.texture[0].name = 'diffuse';
        this.sceneRT.texture[1].name = 'glow';
        if (settings.useDepth) {
            this.sceneRT['depthTexture'] = new DepthTexture(w, h, FloatType);
            this.sceneRT['depthTexture'].format = DepthFormat;
        }
        const bs = settings && settings.glowSettings ?
            settings.glowSettings : GLOW_DEFAULTS;
        bs.isGlow = true;
        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);
        if (settings && settings.exposure !== undefined) {
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
        this.bgRT = new WebGLRenderTarget(width, height);
        this.bgScene = new Scene();
    }
    get depthTexture() {
        return this.sceneRT['depthTexture'];
    }
    setSize(width, height) {
        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;
        this.sceneRT.setSize(w, h);
        this.bgRT.setSize(w, h);
        this.glow.setSize(w, h);
    }
    updateUniforms() {
        const u = this.shader.uniforms;
        u.exposure.value = this.exposure;
        u.gamma.value = this.gamma;
        u.renderBackground.value = this.showBackground;
        u.renderGlow.value = this.showGlow;
        u.renderScene.value = this.showScene;
        u.tScene.value = this.sceneRT.texture[0];
        u.tGlow.value = this.glow.texture;
    }
    render(scene, camera, target = null) {
        this.rnd.autoClear = true;
        const bg = scene.background;
        scene.background = null;
        if (bg) {
            this.rnd.setRenderTarget(this.bgRT);
            this.bgScene.background = bg;
            this.rnd.render(this.bgScene, camera);
            this.rnd.setRenderTarget(null);
            this.shader.uniforms.tBackground.value = this.bgRT.texture;
        }
        else {
            this.shader.uniforms.tBackground.value = null;
        }
        this.rnd.setRenderTarget(this.sceneRT);
        this.rnd.render(scene, camera);
        scene.background = bg;
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
