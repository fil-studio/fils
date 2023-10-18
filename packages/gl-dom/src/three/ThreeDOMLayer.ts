import { Camera, Scene, WebGLRenderTarget, WebGLRenderer, WebGLRendererParameters } from "three";
import { GLDOMLayer, GLRenderParameters } from "../gl/GLDOMLayer";
import { ThreeLayer } from "./ThreeLayer";

/**
 * ThreeJS render parameters
 */
export interface ThreeRenderParameters extends GLRenderParameters {
    scene:Scene;
    camera:Camera;
    target?:WebGLRenderTarget;  
}

/**
 * ThreeJS DOM GL Layer interface
 */
export class ThreeDOMLayer extends GLDOMLayer {
    renderer:WebGLRenderer;
    protected layers: ThreeLayer[];

    constructor(_dom:HTMLElement, params:WebGLRendererParameters={}) {
        super(_dom);

        this.renderer = new WebGLRenderer(params);
        this.resize();
        this.dom.appendChild(this.renderer.domElement);
    }

    resize(): void {
        super.resize();
        this.renderer.setSize(this.rect.width, this.rect.height);
    }

    externalResize(width: number, height: number): void {
        super.externalResize(width, height);
        this.renderer.setSize(this.rect.width, this.rect.height);
    }

    /**
     * Standard render pass
     */
    render(params:ThreeRenderParameters) {
        // if(GLOBALS.clock.paused) return;
        this.renderer.setRenderTarget(params.target || null);
        this.renderer.render(params.scene, params.camera);
    }

    dispose(): void {
        super.dispose();
        this.renderer.dispose();
    }
}