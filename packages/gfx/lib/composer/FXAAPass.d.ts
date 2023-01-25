import { RenderPass } from "../vfx/pipeline/RenderPass";
export declare class FXAAPass extends RenderPass {
    constructor(width: number, height: number);
    resize(width: any, height: any): void;
}
