import output from '../../glsl/vfx/material/output.frag';
import pars from '../../glsl/vfx/material/pars.frag';
export function injectVFXBasics(shader, emissive = false) {
    if (!emissive) {
        let fs = shader.fragmentShader;
        fs = fs.replace(`#include <clipping_planes_pars_fragment>`, `#include <clipping_planes_pars_fragment>
    layout(location = 1) out vec4 oGlow;`);
        fs = fs.replace(`#include <output_fragment>`, `#include <output_fragment>
    oGlow = vec4(0.);`);
        shader.fragmentShader = fs;
    }
    else {
        let fs = shader.fragmentShader;
        fs = fs.replace('#include <clipping_planes_pars_fragment>', pars);
        fs = fs.replace('#include <output_fragment>', output);
        shader.fragmentShader = fs;
    }
}
export function initMaterial(mat) {
    mat.onBeforeCompile = (shader, renderer) => {
        injectVFXBasics(shader, mat['emissive'] !== undefined);
    };
    return mat;
}