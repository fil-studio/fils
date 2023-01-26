import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from 'three';
export declare type FinalPassSettings = {
    caAmount?: number;
    enableCA?: boolean;
    dither?: number;
    enableDithering?: boolean;
    vignette?: number;
    enableVignette?: boolean;
    enableLut?: boolean;
};
export declare class FinalPass extends RenderPass {
    shader: RawShaderMaterial;
    constructor(params?: FinalPassSettings);
}
