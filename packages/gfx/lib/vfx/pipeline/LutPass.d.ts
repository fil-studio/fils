import { RenderPass } from "./RenderPass";
import { RawShaderMaterial, Texture } from "three";
export declare class LutPass extends RenderPass {
    shader: RawShaderMaterial;
    constructor(table: Texture);
}
