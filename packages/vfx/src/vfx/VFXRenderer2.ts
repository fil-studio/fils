import { OrthographicCamera, PerspectiveCamera, Scene, WebGLMultipleRenderTargets, WebGLRenderer } from "three";
import { DoFPass, DoFSettings, FXAAPass, FinalPass, FinalPassSettings, GlowPass, GlowSettings } from "../main";
import { VFXPipeline } from "./VFXPipeline";

export type VFXRenderer2Parameters = {
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
}

const DEFAULTS:VFXRenderer2Parameters = {
    samples: 4,
    scale: 1,
    pixelRatioCap: 2,
    enableGlow: true,
    enableDOF: false,
    enableFinal: true,
    enableFXAA: false
}

export class VFXRenderer2 {
    rnd:WebGLRenderer;
    glowRT:WebGLMultipleRenderTargets;
    vfxPipeline:VFXPipeline;

    protected scale:number = 1;
    pixelRatio:number = 1;

    protected glowScale:number = .25;
    protected params:VFXRenderer2Parameters;

    final:FinalPass;
    glow:GlowPass;
    dof:DoFPass;
    fxaa:FXAAPass;
    
    constructor(renderer:WebGLRenderer, width:number, height:number, params:VFXRenderer2Parameters=DEFAULTS) {
        this.rnd = renderer;
        this.pixelRatio = window.devicePixelRatio || 1;
        if(params && params.pixelRatioCap) this.pixelRatio = Math.min(this.pixelRatio, params.pixelRatioCap);
        this.scale = (params.scale ? params.scale : 1) * this.pixelRatio;

        this.vfxPipeline = new VFXPipeline(renderer, {
            samples: params.samples ? params.samples : 4,
            width,
            height,
            useDepth: params && params.enableDOF
        });

        this.params = params;

        if(params.enableGlow) {
            const gScale = params.glow && params.glow.blurSettings && params.glow.blurSettings.scale ? params.glow.blurSettings.scale : .25;
            this.glowScale = gScale;
            this.glowRT = new WebGLMultipleRenderTargets(
                width * gScale,
                height * gScale,
                2,
                {
                    samples: 1
                }
            );

            this.glow = new GlowPass(
                width,
                height,
                this.glowRT.texture[1],
                params.glow
            );
            this.vfxPipeline.addPass(this.glow);
        }

        if(params.enableDOF) {
            this.dof = new DoFPass(
                width,
                height,
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
                width,
                height
            );
            this.vfxPipeline.addPass(this.fxaa);
        }
    }

    setSize(width:number, height:number) {
        if(this.params.enableGlow) {
            this.glowRT.setSize(width * this.glowScale, height * this.glowScale);
        }
        this.vfxPipeline.setSize(width, height);
    }

    render(scene:Scene, camera:PerspectiveCamera|OrthographicCamera) {
        const bg = scene.background;
        scene.background = null;
        const alpha = this.rnd.getClearAlpha();
        this.rnd.setClearAlpha(0);
        this.rnd.setRenderTarget(this.glowRT);
        this.rnd.render(scene, camera);
        this.rnd.setRenderTarget(null);
        this.rnd.setClearAlpha(alpha);
        scene.background = bg;
        this.vfxPipeline.render(scene, camera);
    }
}