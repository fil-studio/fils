import { AssetsBundle, GLTFAsset } from '@fils/io';
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer, WebGLRenderTarget } from 'three';
import { BlurPass } from '../main';
export declare const Figures: {
    boy: GLTFAsset;
    girl: GLTFAsset;
    female: GLTFAsset;
    male: GLTFAsset;
    male2: GLTFAsset;
};
/**
 * Simulator is a scene used for rendering simultions
 * of installations done in Canvas/WebGL.
 * It contains a reflective floor, shortcuts to
 * staring figures and Screen Utils for simulating
 * screen panels.
 */
export declare class Simulator {
    scene: Scene;
    protected blur: BlurPass;
    protected rt: WebGLRenderTarget;
    private isLoading;
    camera: PerspectiveCamera;
    constructor(renderer: WebGLRenderer);
    load(renderer: WebGLRenderer, onLoaded?: Function, onProgress?: Function): void;
    setSize(width: number, height: number): void;
    get floor(): Mesh;
    get bundle(): AssetsBundle;
    setFloorSize(s: number): void;
    render(renderer: WebGLRenderer): void;
}
