import pars from '../glsl/vfx/material/pars.frag';
import output from '../glsl/vfx/material/output.frag';
export function initMaterial(mat) {
    mat.onBeforeCompile = (shader, renderer) => {
        let fs = shader.fragmentShader;
        fs = fs.replace('#include <clipping_planes_pars_fragment>', pars);
        fs = fs.replace('#include <output_fragment>', output);
        shader.fragmentShader = fs;
    };
    return mat;
}
