import { VideoTexture } from 'three';
import { TextureOptions } from '../utils/TextureUtils';
import { Asset } from "./Asset";
export declare class VideoTextureAsset extends Asset {
    loop: boolean;
    content: VideoTexture;
    options: TextureOptions;
    vRef: HTMLVideoElement;
    constructor(url: string, loop?: boolean, videoRef?: HTMLVideoElement, options?: TextureOptions);
    load(callback?: Function): void;
    destroy(): void;
}
