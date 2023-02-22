import { EquirectangularReflectionMapping, LinearFilter, PMREMGenerator } from "three";
/**
 * Gets HDRI env from a spherical map
 * @param env source spherical map
 * @param renderer ThreeJS WebGLRenderer
 * @param opts ToneMappingOptions to apply to renderer
 * @returns EnvMap HDRI Texture
 */
export function getHDRI(env, renderer, opts = {}) {
    env.mapping = EquirectangularReflectionMapping;
    env.magFilter = LinearFilter;
    env.needsUpdate = true;
    const pmrem = new PMREMGenerator(renderer);
    const envMap = pmrem.fromEquirectangular(env).texture;
    pmrem.dispose();
    if (opts.toneMapping != undefined)
        renderer.toneMapping = opts.toneMapping;
    if (opts.exposure != undefined)
        renderer.toneMappingExposure = opts.exposure;
    if (opts.outputEncoding != undefined)
        renderer.outputEncoding = opts.outputEncoding;
    return envMap;
}
