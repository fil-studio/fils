import { Texture, TextureEncoding, ToneMapping, WebGLRenderer } from "three";
export type ToneMappingOptions = {
    toneMapping?: ToneMapping;
    exposure?: number;
    outputEncoding?: TextureEncoding;
};
/**
 * Gets HDRI env from a spherical map
 * @param env source spherical map
 * @param renderer ThreeJS WebGLRenderer
 * @param opts ToneMappingOptions to apply to renderer
 * @returns EnvMap HDRI Texture
 */
export declare function getHDRI(env: Texture, renderer: WebGLRenderer, opts?: ToneMappingOptions): Texture;
