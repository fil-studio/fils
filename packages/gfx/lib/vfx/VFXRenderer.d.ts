import { OrthographicCamera, PerspectiveCamera, Scene, ShaderMaterial, Vector2, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from "../main";
export declare type VFXCompSettings = {
    blurSettings?: BlurSettings;
    rgbStrength?: number;
    rgbDelta?: Vector2;
    maxRGBDisp?: Vector2;
    rgbRadial?: boolean;
    exposure?: number;
    gamma?: number;
};
export declare class VFXRenderer {
    rnd: WebGLRenderer;
    sceneRT: WebGLMultipleRenderTargets;
    glow: BlurPass;
    showGlow: boolean;
    showScene: boolean;
    exposure: number;
    gamma: number;
    constructor(renderer: WebGLRenderer, width: number, height: number, settings?: VFXCompSettings);
    get shader(): ShaderMaterial;
    resize(width: number, height: number): void;
    private updateUniforms;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, target?: WebGLRenderTarget): void;
}
