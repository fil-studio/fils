import { DepthFormat, DepthTexture, FloatType, OrthographicCamera, PerspectiveCamera, RGBAFormat, Scene, ShaderMaterial, UniformsGroup, UnsignedByteType, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from "../main";



/**
 * This class encapsulates MRT renderer with
 * scene + glow pass (output location 1).
 * Typical use when extending threejs materials
 * to get selective glow:
 * 1 - Inject: layout(location = 1) out vec4 gGlow;
 * 2 - gGlow = vec4(totalEmissiveRadiance, 1.0);
 */

/**
 * UPDATE: Removing RGB split from the base renderer.
 * Integrating VFX Renderer with new VFXPipeline
 * When aiming at having a more complex renderer with
 * a single pass, we must provide a custom shader
 * as explained below.
*/

import { RTUtils } from "@fils/gfx";
import frag from '../glsl/vfx/comp.frag';
import vert from '../glsl/vfx/comp.vert';

const COMP = new ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tBackground: {value: null},
        tScene: {value: null},
        tGlow: {value: null},
        glowStrength: {value: 1},
        renderBackground: {value: true},
        renderGlow: {value: true},
        renderScene: {value: true}
    },
    transparent: true
});

export type VFXCompSettings = {
    glowSettings?:BlurSettings;
    glowStrength?:number;
    samples?:number;
    useDepth?:boolean;
    customFargment?:string;
    customUniforms?:UniformsGroup
}

const GLOW_DEFAULTS:BlurSettings = {
    scale: .3,
    radius: 1,
    iterations: 8,
    quality: 0
}

export class VFXRenderer {
    rnd:WebGLRenderer;
    sceneRT:WebGLRenderTarget;
    glow:BlurPass;
    showBackground:boolean = true;
    showGlow:boolean = true;
    showScene:boolean = true;
    shader:ShaderMaterial = COMP.clone();
    bgScene:Scene;
    bgRT:WebGLRenderTarget;

    constructor(renderer:WebGLRenderer, width:number, height:number, settings?:VFXCompSettings) {
        this.rnd = renderer;
        const pr = this.rnd.pixelRatio || window.devicePixelRatio;

        const w = width * pr;
        const h = height * pr;

        console.warn('VFXRenderer is deprecated and no longer maintained! use VFXRenderer2 instead');

        this.sceneRT = new WebGLRenderTarget(w, h, {
            count: 2,
            format: RGBAFormat,
            type: UnsignedByteType,
            samples: settings && settings.samples ? settings.samples : 4
        });


        this.sceneRT.texture[ 0 ].name = 'scene';
        this.sceneRT.texture[ 1 ].name = 'glow';

        if(settings.useDepth) {
            this.sceneRT['depthTexture'] = new DepthTexture(w, h, FloatType);
            this.sceneRT['depthTexture'].format = DepthFormat;
        }

        if(settings.glowStrength !== undefined) {
            console.log(`setting glow strength to`, settings.glowStrength);
            this.shader.uniforms.glowStrength.value = settings.glowStrength;
        }

        const bs:BlurSettings = settings && settings.glowSettings ?
        settings.glowSettings : GLOW_DEFAULTS;
        bs.isGlow = true;

        this.glow = new BlurPass(this.sceneRT.texture[1], w, h, bs);

        // custom shader injection
        if(settings.customFargment !== undefined) {
            this.shader.fragmentShader = settings.customFargment;
            if(settings.customUniforms !== undefined) {
                const u = settings.customUniforms;
                for(const key in u) {
                    this.shader.uniforms[key] = u[key];
                }
            }
        }

        // BG stuff
        this.bgRT = new WebGLRenderTarget(width, height);
        this.bgScene = new Scene();
    }

    get depthTexture():DepthTexture {
        return this.sceneRT['depthTexture'];
    }

    setSize(width:number, height:number) {
        const pr = this.rnd.pixelRatio || window.devicePixelRatio;
        const w = width * pr;
        const h = height * pr;

        this.sceneRT.setSize(w, h);
        this.bgRT.setSize(w, h);
        this.glow.setSize(w, h);
    }

    private updateUniforms() {
        const u = this.shader.uniforms;
        u.renderBackground.value = this.showBackground;
        u.renderGlow.value = this.showGlow;
        u.renderScene.value = this.showScene;

        u.tScene.value = this.sceneRT.texture[0];
        u.tGlow.value = this.glow.texture;
    }

    render(scene:Scene, camera:PerspectiveCamera|OrthographicCamera, target:WebGLRenderTarget=null) {
        this.rnd.autoClear = true;

        const bg = scene.background;
        scene.background = null;

        if(bg) {
            // render background
            this.rnd.setRenderTarget(this.bgRT);
            this.bgScene.background = bg;
            this.rnd.render(this.bgScene, camera);
            this.rnd.setRenderTarget(null);
            this.shader.uniforms.tBackground.value = this.bgRT.texture;
        } else {
            this.shader.uniforms.tBackground.value = null;
        }

        this.rnd.setRenderTarget(this.sceneRT);
        this.rnd.render(scene, camera);

        scene.background = bg;

        // glow
        this.glow.renderInternal(this.rnd);
        this.rnd.setRenderTarget(null);

        // final comp
        this.updateUniforms();

        if(target) {
            RTUtils.renderToRT(target, this.rnd, this.shader);
        } else RTUtils.renderToViewport(this.rnd, this.shader);

        this.rnd.setRenderTarget(null);
    }

    dispose () {
        this.sceneRT.dispose();
        this.bgRT.dispose();
        this.glow.dispose();
        this.shader.dispose();
    }
}