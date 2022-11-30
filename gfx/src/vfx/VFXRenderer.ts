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
        exposure: {value: 1.2},
        gamma: {value: 1.8},
        rgbStrength: {value: 0.5},
        maxRGBDisp: {value: new Vector2(1,1)},
        rgbDelta: {value: new Vector2()},
        rgb: {value: false},
        renderGlow: {value: true},
        rgbRadial: {value: true},
        renderScene: {value: true}
    },
    transparent: true
});

export type VFXCompSettings = {
    blurSettings?:BlurSettings;
    rgbStrength?:number;
    rgbDelta?:Vector2;
    maxRGBDisp?:Vector2;
    rgbRadial?:boolean;
    exposure?:number;
    gamma?:number;
}

export class VFXRenderer {
    rnd:WebGLRenderer;
    sceneRT:WebGLMultipleRenderTargets;
    glow:BlurPass;
    showGlow:boolean = true;
    showScene:boolean = true;
    exposure:number = COMP.uniforms.exposure.value;
    gamma:number =  COMP.uniforms.gamma.value;

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

        const bs:BlurSettings = settings && settings.blurSettings ?
        settings.blurSettings : {
            scale: .3,
            radius: 1,
            iterations: 8,
            quality: 0
        }

        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);

        if(settings && settings.exposure) {
            this.exposure = settings.exposure;
        }

        if(settings && settings.gamma) {
            this.gamma = settings.gamma;
        }

        if(settings && settings.rgbStrength) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbStrength.value = settings.rgbStrength;
        }
        if(settings && settings.rgbDelta) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbDelta.value.copy(settings.rgbDelta);
        }

        if(settings && settings.maxRGBDisp) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbDelta.value.copy(settings.maxRGBDisp);
        }

        if(settings && settings.rgbRadial != undefined) {
            COMP.uniforms.rgb.value = true;
            COMP.uniforms.rgbRadial.value = settings.rgbRadial;
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

    private updateUniforms() {
        const u = COMP.uniforms;
        u.exposure.value = this.exposure;
        u.gamma.value = this.gamma;
        u.renderGlow.value = this.showGlow;
        u.renderScene.value = this.showScene;

        u.tScene.value = this.sceneRT.texture[0];
        u.tGlow.value = this.glow.texture;
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
        this.updateUniforms();

        if(target) {
            RTUtils.renderToRT(target, this.rnd, COMP);
        } else RTUtils.renderToViewport(this.rnd, COMP);
        // FboUtils.drawTexture(this.glow.texture, this.rnd, 0, 0, window.innerWidth, window.innerHeight);

        this.rnd.setRenderTarget(null);
    }
}