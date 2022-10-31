import { OrthographicCamera, PerspectiveCamera, RawShaderMaterial, RGBAFormat, Scene, ShaderMaterial, UnsignedByteType, Vector2, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings, RTUtils } from "../main";

/**
 * This class encapsulates MRT renderer with
 * scene + glow pass (output location 1).
 * It also includes rgb split (requires
 * RGB_SPLIT define).
 * Typical use when extending threejs materials
 * to get selective glow:
 * 1 - Inject: layout(location = 1) out vec4 gGlow;
 * 2 - gGlow = vec4(totalEmissiveRadiance, 1.0);
 */

import vert from '../glsl/fbo.vert';
import frag from '../glsl/vfx/comp.frag';

const COMP = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tScene: {value: null},
        tGlow: {value: null},
        glowStrength: {value: 1.8},
        rgbStrength: {value: 0.5},
        rgbDelta: {value: new Vector2()},
        rgb: {value: false}
    },
    transparent: true
});

export type VFXCompSettings = {
    glowSettings?:BlurSettings;
    rgbStrength?:number;
    rgbDelta?:Vector2;
    glowStrength?:number;
}

export class VFXRenderer {
    rnd:WebGLRenderer;
    sceneRT:WebGLMultipleRenderTargets;
    glow:BlurPass;

    constructor(renderer:WebGLRenderer, width:number, height:number, settings?:VFXCompSettings) {
        this.rnd = renderer;

        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;

        this.sceneRT = new WebGLMultipleRenderTargets(w, h, 2, {
            format: RGBAFormat,
            type: UnsignedByteType
        });

        this.sceneRT['samples'] = 4;
        this.sceneRT.texture[ 0 ].name = 'diffuse';
        this.sceneRT.texture[ 1 ].name = 'glow';

        /* this.sceneRT['depthTexture'] = new DepthTexture(w, h, FloatType);
        this.sceneRT['depthTexture'].format = DepthFormat; */

        const bs:BlurSettings = settings && settings.glowSettings ?
        settings.glowSettings : {
            scale: .3,
            radius: 1,
            iterations: 8,
            quality: 0
        }

        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);

        if(settings && settings.glowStrength) {
            COMP.uniforms.glowStrength.value = settings.glowStrength;
        }

        if(settings && settings.rgbStrength) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbStrength.value = settings.rgbStrength;
        }
        if(settings && settings.rgbDelta) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbDelta.value.copy(settings.rgbDelta);
        }
    }

    // expose shader material
    get shader():ShaderMaterial {
        return COMP;
    }

    resize(width:number, height:number) {
        const w = width * window.devicePixelRatio;
        const h = height * window.devicePixelRatio;

        this.sceneRT.setSize(w, h);
        this.glow.setSize(w, h);
    }

    render(scene:Scene, camera:PerspectiveCamera|OrthographicCamera, target:WebGLRenderTarget=null) {
        this.rnd.autoClear = true;
        // this.rnd.setClearColor(0x000000, 1);

        this.rnd.setRenderTarget(this.sceneRT);
        this.rnd.render(scene, camera);

        // glow
        // this.rnd.setClearColor(0x000000, 1);
        this.glow.renderInternal(this.rnd);
        this.rnd.setRenderTarget(null);

        // final comp
        COMP.uniforms.tScene.value = this.sceneRT.texture[0];
        COMP.uniforms.tGlow.value = this.glow.texture;

        if(target) {
            RTUtils.renderToRT(target, this.rnd, COMP);
        } else RTUtils.renderToViewport(this.rnd, COMP);
        // FboUtils.drawTexture(this.glow.texture, this.rnd, 0, 0, window.innerWidth, window.innerHeight);

        this.rnd.setRenderTarget(null);
    }
}