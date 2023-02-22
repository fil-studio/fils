import { Mesh, OrthographicCamera, Scene, Texture, WebGLRenderer, WebGLRenderTarget } from "three";
import { RenderPass } from "./RenderPass";
import { VFXPipeline } from "../VFXPipeline";
export type BlurQuality = 0 | 1 | 2;
export type BlurSettings = {
    scale?: number;
    radius?: number;
    iterations?: number;
    quality?: BlurQuality;
    isGlow?: boolean;
};
export declare class BlurPass extends RenderPass {
    radius: number;
    iterations: number;
    quality: BlurQuality;
    scale: number;
    read: WebGLRenderTarget;
    write: WebGLRenderTarget;
    scene: Scene;
    camera: OrthographicCamera;
    quad: Mesh;
    source: Texture;
    constructor(src: Texture | null, width: number, height: number, settings?: BlurSettings);
    private swapBuffers;
    setSize(width: number, height: number): void;
    blurPass(renderer: WebGLRenderer, src: Texture, dst: WebGLRenderTarget, dx: number, dy: number): void;
    render(renderer: WebGLRenderer, composer: VFXPipeline, target?: WebGLRenderTarget): void;
    renderInternal(renderer: WebGLRenderer): void;
    get texture(): Texture;
    get target(): WebGLRenderTarget;
}
