import { Material, ShaderChunk, WebGLProgramParametersWithUniforms, WebGLRenderer } from "three";

import output from '../../glsl/vfx/material/output.frag';
import pars from '../../glsl/vfx/material/pars.frag';

import oGlow from "../../glsl/vfx/material/glow.frag";
import { Shader } from "./VFXBasicMaterials";

ShaderChunk['oGlow'] = oGlow;

export function injectVFXBasics(shader:Shader, emissive:boolean=false) {
    if(!emissive) {
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

export function initMaterial(mat:Material) {
    mat.onBeforeCompile = (shader:WebGLProgramParametersWithUniforms, renderer:WebGLRenderer) => {
        injectVFXBasics(shader, mat['emissive'] !== undefined);
    }

    return mat;
}