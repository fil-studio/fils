/**
 * Final Shader Pass combines a few things together
 * 1. Chromatic Aberration
 * 2. Dithering and grain
 * 3. Vignetting
 */
import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from 'three';
export type FinalPassSettings = {
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
