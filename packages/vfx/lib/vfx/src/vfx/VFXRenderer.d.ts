import { DepthTexture, OrthographicCamera, PerspectiveCamera, Scene, ShaderMaterial, UniformsGroup, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from "../main";
export type VFXCompSettings = {
    glowSettings?: BlurSettings;
    exposure?: number;
    gamma?: number;
    samples?: number;
    useDepth?: boolean;
    customFargment?: string;
    customUniforms?: UniformsGroup;
};
export declare class VFXRenderer {
    rnd: WebGLRenderer;
    sceneRT: WebGLMultipleRenderTargets;
    glow: BlurPass;
    showBackground: boolean;
    showGlow: boolean;
    showScene: boolean;
    exposure: number;
    gamma: number;
    shader: ShaderMaterial;
    bgScene: Scene;
    bgRT: WebGLRenderTarget;
    constructor(renderer: WebGLRenderer, width: number, height: number, settings?: VFXCompSettings);
    get depthTexture(): DepthTexture;
    setSize(width: number, height: number): void;
    private updateUniforms;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, target?: WebGLRenderTarget): void;
}
