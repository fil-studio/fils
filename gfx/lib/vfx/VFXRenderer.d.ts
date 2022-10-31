import { OrthographicCamera, PerspectiveCamera, Scene, ShaderMaterial, Vector2, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from "../main";
export declare type VFXCompSettings = {
    glowSettings?: BlurSettings;
    rgbStrength?: number;
    rgbDelta?: Vector2;
    glowStrength?: number;
};
export declare class VFXRenderer {
    rnd: WebGLRenderer;
    sceneRT: WebGLMultipleRenderTargets;
    glow: BlurPass;
    constructor(renderer: WebGLRenderer, width: number, height: number, settings?: VFXCompSettings);
    get shader(): ShaderMaterial;
    resize(width: number, height: number): void;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, target?: WebGLRenderTarget): void;
}
