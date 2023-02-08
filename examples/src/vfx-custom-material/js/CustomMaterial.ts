import { MeshStandardMaterialParameters, Shader, WebGLRenderer } from "three";
import { VFXStandardMaterial } from "../../../../packages/vfx/src/main";

const vert_params = `
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
varying float vDepth;
uniform bool flatCalc;

const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
const vec2 mys = vec2(1e4, 1e6);

vec2 rhash(vec2 uv) {
  uv *= myt;
  uv *= mys;
  return fract(fract(uv / mys) * uv);
}

vec3 hash(vec3 p) {
  return fract(
      sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)),
               dot(p, vec3(113.0, 1.0, 57.0)))) *
      43758.5453);
}

vec3 voronoi3d(const in vec3 x) {
  vec3 p = floor(x);
  vec3 f = fract(x);

  float id = 0.0;
  vec2 res = vec2(100.0);
  for (int k = -1; k <= 1; k++) {
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec3 b = vec3(float(i), float(j), float(k));
        vec3 r = vec3(b) - f + hash(p + b);
        float d = dot(r, r);

        float cond = max(sign(res.x - d), 0.0);
        float nCond = 1.0 - cond;

        float cond2 = nCond * max(sign(res.y - d), 0.0);
        float nCond2 = 1.0 - cond2;

        id = (dot(p + b, vec3(1.0, 57.0, 113.0)) * cond) + (id * nCond);
        res = vec2(d, res.x) * cond + res * nCond;

        res.y = cond2 * d + nCond2 * res.y;
      }
    }
  }

  return vec3(sqrt(res), abs(id));
}
`;

const vert = `
#include <fog_vertex>
if(flatCalc) {
  vDepth = smoothstep(
    -0.9,
    0.9,
    voronoi3d(worldPosition.xyz * 10.5).x
  );
}
vPos = worldPosition.xyz;
`;

const frag_params = `
#include <clipping_planes_pars_fragment>
varying float vDepth;
varying vec3 vPos;
uniform float progress;
uniform bool flatCalc;

const mat2 myt = mat2(.12121212, .13131313, -.13131313, .12121212);
const vec2 mys = vec2(1e4, 1e6);

vec2 rhash(vec2 uv) {
  uv *= myt;
  uv *= mys;
  return fract(fract(uv / mys) * uv);
}

vec3 hash(vec3 p) {
  return fract(
      sin(vec3(dot(p, vec3(1.0, 57.0, 113.0)), dot(p, vec3(57.0, 113.0, 1.0)),
               dot(p, vec3(113.0, 1.0, 57.0)))) *
      43758.5453);
}

vec3 voronoi3d(const in vec3 x) {
  vec3 p = floor(x);
  vec3 f = fract(x);

  float id = 0.0;
  vec2 res = vec2(100.0);
  for (int k = -1; k <= 1; k++) {
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec3 b = vec3(float(i), float(j), float(k));
        vec3 r = vec3(b) - f + hash(p + b);
        float d = dot(r, r);

        float cond = max(sign(res.x - d), 0.0);
        float nCond = 1.0 - cond;

        float cond2 = nCond * max(sign(res.y - d), 0.0);
        float nCond2 = 1.0 - cond2;

        id = (dot(p + b, vec3(1.0, 57.0, 113.0)) * cond) + (id * nCond);
        res = vec2(d, res.x) * cond + res * nCond;

        res.y = cond2 * d + nCond2 * res.y;
      }
    }
  }

  return vec3(sqrt(res), abs(id));
}
`;

const frag = `
#include <clipping_planes_fragment>
float depth;
if(!flatCalc) {
  depth = smoothstep(
      -0.9,
      0.9,
      voronoi3d(vPos * 1.5).x
  );
} else depth = vDepth;
if(progress > depth) discard;
`;

const frag2 = `
#include <output_fragment>
gl_FragColor.rgb *= 1.0 - smoothstep(0., depth, progress);
`;

export class CustomMaterial extends VFXStandardMaterial {
    progress:number = 0;
    flatCalc:boolean = true;
    constructor(params?:MeshStandardMaterialParameters) {
        super(params);
    }

    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void {
        super.onBeforeCompile(shader, renderer);
        let vs = shader.vertexShader.replace(`#include <clipping_planes_pars_vertex>`, vert_params);

        vs = vs.replace(`#include <fog_vertex>`, vert);

        let fs = shader.fragmentShader.replace(`#include <clipping_planes_pars_fragment>`, frag_params);
        fs = fs.replace(`#include <clipping_planes_fragment>`, frag);
        fs = fs.replace(`#include <output_fragment>`, frag2);

        shader.vertexShader = vs;
        shader.fragmentShader = fs;

        shader.uniforms['progress'] = {
            value: 0
        }

        shader.uniforms['flatCalc'] = {
          value: this.flatCalc
      }
    }

    onBeforeRender() {
        if(!this.shaderRef) return;
        this.shaderRef.uniforms.progress.value = this.progress;
        this.shaderRef.uniforms.flatCalc.value = this.flatCalc;
    }
}