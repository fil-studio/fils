import { Asset } from "./Asset";
import { CubeTexture } from 'three';
import { TextureOptions } from "../utils/TextureUtils";
type ImgExt = 'jpg' | 'png';
export declare class CubeTextureAsset extends Asset {
    content: CubeTexture;
    format: ImgExt;
    options: TextureOptions;
    constructor(url: string, frmt: ImgExt, opts: TextureOptions);
    load(callback?: Function): void;
    destroy(): void;
}
export {};
