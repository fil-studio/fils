import { MeshBasicMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, Shader, WebGLRenderer } from "three";

import output from '../glsl/vfx/material/output.frag';
import pars from '../glsl/vfx/material/pars.frag';

type SupportedMaterial = MeshBasicMaterial|MeshPhongMaterial|MeshStandardMaterial|MeshPhysicalMaterial;

export function initMaterial(mat:SupportedMaterial) {
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