import { Mesh, OrthographicCamera, PerspectiveCamera, Scene, Texture, WebGLRenderer, WebGLRenderTarget } from "three";
import { RenderPass } from "./pipeline/RenderPass";
import { VFXRenderer } from "./VFXRenderer";
export declare type VFXPipelineSettings = {
    samples?: number;
    useDepth?: boolean;
    width: number;
    height: number;
    neverToScreen?: boolean;
};
export declare type SupportedRenderer = WebGLRenderer | VFXRenderer;
export declare type RendererType = "WebGLRenderer" | "VFXRenderer";
export declare class VFXPipeline {
    protected front: WebGLRenderTarget;
    protected back: WebGLRenderTarget;
    protected renderer: SupportedRenderer;
    protected stack: RenderPass[];
    scene: Scene;
    quad: Mesh;
    camera: OrthographicCamera;
    width: number;
    height: number;
    protected type: RendererType;
    protected blockScreen: boolean;
    constructor(rnd: SupportedRenderer, params?: VFXPipelineSettings);
    addPass(pass: RenderPass): void;
    removePass(pass: RenderPass): void;
    setRenderer(rnd: SupportedRenderer): void;
    setSize(width: number, height: number): void;
    swapBuffers(): void;
    get read(): WebGLRenderTarget;
    get write(): WebGLRenderTarget;
    get texture(): Texture;
    protected getRenderer(): WebGLRenderer;
    protected renderPass(pass: RenderPass, toScreen?: boolean): void;
    render(scene: Scene, camera: PerspectiveCamera | OrthographicCamera): void;
}
