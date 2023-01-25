import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from 'three';
export declare type FinalPassSettings = {
    caAmount?: number;
    enableCA?: boolean;
};
export declare class FinalPass extends RenderPass {
    shader: RawShaderMaterial;
    constructor(params?: FinalPassSettings);
}
