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
        exposure: { value: 1.2 },
        gamma: { value: 1.8 },
        rgbStrength: { value: 0.5 },
        maxRGBDisp: { value: new Vector2(1, 1) },
        rgbDelta: { value: new Vector2() },
        rgb: { value: false },
        renderGlow: { value: true },
        rgbRadial: { value: true },
        renderScene: { value: true }
    },
    transparent: true
});
export class VFXRenderer {
    constructor(renderer, width, height, settings) {
        this.showGlow = true;
        this.showScene = true;
        this.exposure = COMP.uniforms.exposure.value;
        this.gamma = COMP.uniforms.gamma.value;
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
        const bs = settings && settings.blurSettings ?
            settings.blurSettings : {
            scale: .3,
            radius: 1,
            iterations: 8,
            quality: 0
        };
        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);
        if (settings && settings.exposure) {
            this.exposure = settings.exposure;
        }
        if (settings && settings.gamma) {
            this.gamma = settings.gamma;
        }
        if (settings && settings.rgbStrength) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbStrength.value = settings.rgbStrength;
        }
        if (settings && settings.rgbDelta) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbDelta.value.copy(settings.rgbDelta);
        }
        if (settings && settings.maxRGBDisp) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbDelta.value.copy(settings.maxRGBDisp);
        }
        if (settings && settings.rgbRadial != undefined) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbRadial.value = settings.rgbRadial;
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
    updateUniforms() {
        const u = COMP.uniforms;
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
            RTUtils.renderToRT(target, this.rnd, COMP);
        }
        else
            RTUtils.renderToViewport(this.rnd, COMP);
        this.rnd.setRenderTarget(null);
    }
}
