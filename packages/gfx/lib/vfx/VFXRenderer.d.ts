import { OrthographicCamera, PerspectiveCamera, Scene, ShaderMaterial, UniformsGroup, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from "../main";
export declare type VFXCompSettings = {
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
    showGlow: boolean;
    showScene: boolean;
    exposure: number;
    gamma: number;
    shader: ShaderMaterial;
    constructor(renderer: WebGLRenderer, width: number, height: number, settings?: VFXCompSettings);
    setSize(width: number, height: number): void;
    private updateUniforms;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera, target?: WebGLRenderTarget): void;
}
