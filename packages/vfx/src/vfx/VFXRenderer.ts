import { HalfFloatType, OrthographicCamera, PerspectiveCamera, Scene, TextureDataType, WebGLRenderTarget, WebGLRenderer } from "three";
import { DoFPass, DoFSettings, FXAAPass, FinalPass, FinalPassSettings, GlowPass, GlowSettings } from "../main";
import { VFXPipeline } from "./VFXPipeline";

export type VFXRendererParameters = {
    dof?:DoFSettings;
    final?:FinalPassSettings;
    glow?:GlowSettings;
    enableGlow?:boolean;
    enableFXAA?:boolean;
    enableDOF?:boolean;
    enableFinal?:boolean;
    pixelRatioCap?:number;
    samples?:number;
    scale?:number;
    /**
     * Data type for the pipeline's intermediate render targets.
     * Defaults to 8-bit (UnsignedByteType). Use HalfFloatType for
     * HDR-quality glow/blur/DoF without banding or clipped highlights.
     */
    type?:TextureDataType;
}

const DEFAULTS:VFXRendererParameters = {
    samples: 4,
    scale: 1,
    pixelRatioCap: 2,
    enableGlow: true,
    enableDOF: false,
    enableFinal: true,
    enableFXAA: false
}

/**
 * Batteries-included renderer: wraps a WebGLRenderer with a VFXPipeline
 * and a common post-processing stack (glow → dof → final → fxaa).
 *
 * Works best with a black clear color and 0 clear alpha when using glow,
 * so the emissive pre-pass composites cleanly. Set your scene background
 * via `scene.background` and leave the renderer clear color at (0x000000, 0).
 */
export class VFXRenderer {
    rnd:WebGLRenderer;
    glowRT?:WebGLRenderTarget;
    vfxPipeline:VFXPipeline;

    protected scale:number = 1;
    pixelRatio:number = 1;

    protected glowScale:number = .25;
    protected params:VFXRendererParameters;

    final?:FinalPass;
    glow?:GlowPass;
    dof?:DoFPass;
    fxaa?:FXAAPass;

    constructor(renderer:WebGLRenderer, width:number, height:number, params:VFXRendererParameters=DEFAULTS) {
        this.rnd = renderer;
        this.pixelRatio = window.devicePixelRatio || 1;
        if(params && params.pixelRatioCap) this.pixelRatio = Math.min(this.pixelRatio, params.pixelRatioCap);
        // Render targets run at device-pixel resolution (times an optional
        // supersampling `scale`). Sizes below are in physical pixels.
        this.scale = (params.scale ? params.scale : 1) * this.pixelRatio;

        this.params = params;

        const w = width * this.scale;
        const h = height * this.scale;

        this.vfxPipeline = new VFXPipeline(renderer, {
            samples: params.samples ? params.samples : 4,
            width: w,
            height: h,
            useDepth: params && params.enableDOF,
            type: params.type
        });

        if(params.enableGlow) {
            const gScale = params.glow && params.glow.blurSettings && params.glow.blurSettings.scale ? params.glow.blurSettings.scale : .25;
            this.glowScale = gScale;
            this.glowRT = new WebGLRenderTarget(
                w * gScale,
                h * gScale,
                {
                    count: 2,
                    samples: 1,
                    type: params.type || HalfFloatType
                }
            );

            this.glow = new GlowPass(
                w,
                h,
                // MRT attachment 1 (the emissive/glow buffer). In modern three
                // (>=0.162) the attachments live on `.textures`; `.texture` is
                // just an alias for `.textures[0]`.
                this.glowRT.textures[1],
                params.glow
            );
            this.vfxPipeline.addPass(this.glow);
        }

        if(params.enableDOF) {
            this.dof = new DoFPass(
                w,
                h,
                params && params.dof ? params.dof : null
            );
            this.vfxPipeline.addPass(this.dof);
        }

        if(params.enableFinal) {
            this.final = new FinalPass(
                params && params.final ? params.final : null
            );
            this.vfxPipeline.addPass(this.final);
        }

        if(params.enableFXAA) {
            this.fxaa = new FXAAPass(
                w,
                h
            );
            this.vfxPipeline.addPass(this.fxaa);
        }
    }

    setSize(width:number, height:number) {
        const w = width * this.scale;
        const h = height * this.scale;
        if(this.params.enableGlow && this.glowRT) {
            this.glowRT.setSize(w * this.glowScale, h * this.glowScale);
        }
        this.vfxPipeline.setSize(w, h);
    }

    render(scene:Scene, camera:PerspectiveCamera|OrthographicCamera) {
        if(this.params.enableGlow && this.glow && this.glow.enabled && this.glowRT) {
            const bg = scene.background;
            scene.background = null;
            const alpha = this.rnd.getClearAlpha();
            this.rnd.setClearAlpha(0);
            this.rnd.setRenderTarget(this.glowRT);
            this.rnd.render(scene, camera);
            this.rnd.setRenderTarget(null);
            this.rnd.setClearAlpha(alpha);
            scene.background = bg;
        }
        this.vfxPipeline.render(scene, camera);
    }

    dispose() {
        if(this.glowRT) this.glowRT.dispose();
        this.vfxPipeline.dispose();
    }
}
