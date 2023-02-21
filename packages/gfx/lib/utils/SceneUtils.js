"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHDRI = void 0;
var three_1 = require("three");
/**
 * Gets HDRI env from a spherical map
 * @param env source spherical map
 * @param renderer ThreeJS WebGLRenderer
 * @param opts ToneMappingOptions to apply to renderer
 * @returns EnvMap HDRI Texture
 */
function getHDRI(env, renderer, opts) {
    if (opts === void 0) { opts = {}; }
    env.mapping = three_1.EquirectangularReflectionMapping;
    env.magFilter = three_1.LinearFilter;
    env.needsUpdate = true;
    var pmrem = new three_1.PMREMGenerator(renderer);
    var envMap = pmrem.fromEquirectangular(env).texture;
    pmrem.dispose();
    if (opts.toneMapping != undefined)
        renderer.toneMapping = opts.toneMapping;
    if (opts.exposure != undefined)
        renderer.toneMappingExposure = opts.exposure;
    if (opts.outputEncoding != undefined)
        renderer.outputEncoding = opts.outputEncoding;
    return envMap;
}
exports.getHDRI = getHDRI;
