import { RawShaderMaterial, WebGLRenderer, WebGLRenderTarget } from "three";
import { VFXPipeline } from "../VFXPipeline";
export declare class RenderPass {
    shader: RawShaderMaterial;
    enabled: boolean;
    constructor();
    render(renderer: WebGLRenderer, composer: VFXPipeline, target?: WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
}
