import { Material, MeshBasicMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, Shader, WebGLRenderer } from "three";

import pars from '../glsl/vfx/material/pars.frag';
import output from '../glsl/vfx/material/output.frag';

export function initMaterial(mat:Material) {
    mat.onBeforeCompile = (shader:Shader, renderer:WebGLRenderer) => {
        if(!mat['emissive']) {
            let fs = shader.fragmentShader;

            fs = fs.replace(`#include <clipping_planes_pars_fragment>`, `#include <clipping_planes_pars_fragment>
layout(location = 1) out vec4 oGlow;`);

            fs = fs.replace(`#include <output_fragment>`, `#include <output_fragment>
oGlow = vec4(0.);`);

            shader.fragmentShader = fs;
        } else {
            // has emissive

            let fs = shader.fragmentShader;

            fs = fs.replace('#include <clipping_planes_pars_fragment>', pars);
            fs = fs.replace('#include <output_fragment>', output);

            shader.fragmentShader = fs;
        }
    }

    return mat;
}