import { Texture, TextureEncoding, ToneMapping, WebGLRenderer } from "three";
export type ToneMappingOptions = {
    toneMapping?: ToneMapping;
    exposure?: number;
    outputEncoding?: TextureEncoding;
};
export declare function getHDRI(env: Texture, renderer: WebGLRenderer, opts?: ToneMappingOptions): Texture;
