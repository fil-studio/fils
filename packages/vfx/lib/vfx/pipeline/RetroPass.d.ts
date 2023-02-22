import { RenderPass } from "./RenderPass";
import { RawShaderMaterial } from "three";
export type DitherType = 0 | 1 | 2 | 3;
export type RetroPassSettings = {
    pixelate?: boolean;
    gridSize?: number;
    dithering?: DitherType;
};
/**
 * Retro Pass created for fil's Hellow World
 */
export declare class RetroPass extends RenderPass {
    shader: RawShaderMaterial;
    constructor(params?: RetroPassSettings);
    setSize(width: number, height: number): void;
}
