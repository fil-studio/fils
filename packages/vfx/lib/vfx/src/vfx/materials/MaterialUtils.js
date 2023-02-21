"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMaterial = exports.injectVFXBasics = void 0;
var output_frag_1 = require("../../glsl/vfx/material/output.frag");
var pars_frag_1 = require("../../glsl/vfx/material/pars.frag");
function injectVFXBasics(shader, emissive) {
    if (emissive === void 0) { emissive = false; }
    if (!emissive) {
        var fs = shader.fragmentShader;
        fs = fs.replace("#include <clipping_planes_pars_fragment>", "#include <clipping_planes_pars_fragment>\n    layout(location = 1) out vec4 oGlow;");
        fs = fs.replace("#include <output_fragment>", "#include <output_fragment>\n    oGlow = vec4(0.);");
        shader.fragmentShader = fs;
    }
    else {
        // has emissive
        var fs = shader.fragmentShader;
        fs = fs.replace('#include <clipping_planes_pars_fragment>', pars_frag_1.default);
        fs = fs.replace('#include <output_fragment>', output_frag_1.default);
        shader.fragmentShader = fs;
    }
}
exports.injectVFXBasics = injectVFXBasics;
function initMaterial(mat) {
    mat.onBeforeCompile = function (shader, renderer) {
        injectVFXBasics(shader, mat['emissive'] !== undefined);
    };
    return mat;
}
exports.initMaterial = initMaterial;
