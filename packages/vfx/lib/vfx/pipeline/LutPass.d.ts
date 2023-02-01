import { RenderPass } from "./RenderPass";
import { RawShaderMaterial, Texture } from "three";
export declare class LutPass extends RenderPass {
    shader: RawShaderMaterial;
    lookupTable: Texture;
    constructor(table: Texture);
}
