import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from "three";
export declare type DitherType = 0 | 1 | 2 | 3;
export declare type RetroPassSettings = {
    pixelate?: boolean;
    gridSize?: number;
    dithering?: DitherType;
};
export declare class RetroPass extends RenderPass {
    shader: RawShaderMaterial;
    constructor(params?: RetroPassSettings);
    setSize(width: number, height: number): void;
}
