import { DepthTexture, Mesh, OrthographicCamera, PerspectiveCamera, Scene, Texture, WebGLRenderer, WebGLRenderTarget } from "three";
import { RenderPass } from "./pipeline/RenderPass";
import { VFXRenderer } from "./VFXRenderer";
export type VFXPipelineSettings = {
    samples?: number;
    useDepth?: boolean;
    width: number;
    height: number;
    neverToScreen?: boolean;
};
export type SupportedRenderer = WebGLRenderer | VFXRenderer;
export type RendererType = "WebGLRenderer" | "VFXRenderer";
/**
 * This class replaces the deprecated RenderComposer
 * It is meant to be used with either a WebGLRenderer
 * or a VFXRebderer and create a post-processing stack
 * on top of it.
 */
export declare class VFXPipeline {
    protected sceneRT: WebGLRenderTarget;
    protected front: WebGLRenderTarget;
    protected back: WebGLRenderTarget;
    protected renderer: SupportedRenderer;
    protected stack: RenderPass[];
    protected firstPass: boolean;
    scene: Scene;
    quad: Mesh;
    camera: OrthographicCamera;
    width: number;
    height: number;
    protected type: RendererType;
    protected blockScreen: boolean;
    constructor(rnd: SupportedRenderer, params?: VFXPipelineSettings);
    get rendererType(): RendererType;
    addPass(pass: RenderPass): void;
    removePass(pass: RenderPass): void;
    setRenderer(rnd: SupportedRenderer): void;
    setSize(width: number, height: number): void;
    swapBuffers(): void;
    get read(): WebGLRenderTarget;
    get write(): WebGLRenderTarget;
    get texture(): Texture;
    get depthTexture(): DepthTexture;
    protected getRenderer(): WebGLRenderer;
    protected renderPass(pass: RenderPass, toScreen?: boolean): void;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera): void;
}
