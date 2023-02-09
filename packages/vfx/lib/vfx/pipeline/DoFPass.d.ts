import { WebGLRenderer, WebGLRenderTarget } from "three";
import { BlurPass, BlurSettings } from './BlurPass';
import { RenderPass } from './RenderPass';
import { VFXPipeline } from "../VFXPipeline";
export declare type DoFSettings = {
    blur?: BlurSettings;
    camNear?: number;
    camFar?: number;
    focalDistance?: number;
    aperture?: number;
};
export declare class DoFPass extends RenderPass {
    blurPass: BlurPass;
    constructor(width: number, height: number, settings?: DoFSettings);
    setSize(width: number, height: number): void;
    render(renderer: WebGLRenderer, composer: VFXPipeline, target?: WebGLRenderTarget): void;
}
