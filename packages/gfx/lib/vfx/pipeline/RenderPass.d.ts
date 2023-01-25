import { RawShaderMaterial, WebGLRenderer, WebGLRenderTarget } from "three";
import { VFXPipeline } from "../VFXPipeline";
export declare class RenderPass {
    shader: RawShaderMaterial;
    constructor();
    render(renderer: WebGLRenderer, composer: VFXPipeline, target?: WebGLRenderTarget): void;
}
