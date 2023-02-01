import { Material, Texture, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget, WebGLRenderTargetOptions } from "three";
import { RTHelper } from "./RTHelper";
export declare class RTUtils {
    static helper: RTHelper;
    static getRenderTarget(width: number, height: number, settings?: WebGLRenderTargetOptions, depth?: boolean): WebGLRenderTarget;
    static drawRT(rt: WebGLRenderTarget, renderer: WebGLRenderer, x?: number, y?: number, width?: number, height?: number, opacity?: number): void;
    static drawMRT(mrt: WebGLMultipleRenderTargets, renderer: WebGLRenderer, index: number, x?: number, y?: number, width?: number, height?: number): void;
    static drawTexture(texture: Texture, renderer: WebGLRenderer, x?: number, y?: number, width?: number, height?: number, opacity?: number): void;
    static renderToRT(rt: WebGLRenderTarget | WebGLMultipleRenderTargets, renderer: WebGLRenderer, material: Material): void;
    static renderToViewport(renderer: WebGLRenderer, material: Material): void;
}
