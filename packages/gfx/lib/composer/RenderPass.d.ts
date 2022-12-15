import { RawShaderMaterial, WebGLRenderer } from "three";
import { RenderComposer } from "./RenderComposer";
export declare class RenderPass {
    shader: RawShaderMaterial;
    constructor();
    render(renderer: WebGLRenderer, composer: RenderComposer, toScreen?: Boolean): void;
}
