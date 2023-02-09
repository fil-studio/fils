import { Color, Material, MeshBasicMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, ShaderLib, Vector2 } from "three";
import emissive_frag from '../../glsl/vfx/material/emissive.frag';
import emissive_vert from '../../glsl/vfx/material/emissive.vert';
import { injectVFXBasics } from "./MaterialUtils";
const vfxBasic = {
    vertexShader: ShaderLib["basic"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["basic"].fragmentShader.split('').join(''),
    uniforms: null
};
injectVFXBasics(vfxBasic, false);
const vfxPhong = {
    vertexShader: ShaderLib["phong"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["phong"].fragmentShader.split('').join(''),
    uniforms: null
};
injectVFXBasics(vfxPhong, true);
const vfxStandard = {
    vertexShader: ShaderLib["standard"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["standard"].fragmentShader.split('').join(''),
    uniforms: null
};
injectVFXBasics(vfxStandard, true);
const vfxPhysical = {
    vertexShader: ShaderLib["physical"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["physical"].fragmentShader.split('').join(''),
    uniforms: null
};
injectVFXBasics(vfxPhysical, true);
export class VFXEmissiveMaterial extends Material {
    constructor(params) {
        super();
        this.emissive = new Color(0xffffff);
        this.emissiveIntensity = 1;
        this.emissiveMap = null;
        this.isVFXEmissiveMaterial = true;
        this.type = "VFXEmissiveMaterialParameters";
        this.setValues(params);
    }
    setValues(values) {
        super.setValues(values);
    }
    copy(source) {
        super.copy(source);
        this.emissive.copy(source.emissive);
        this.emissiveMap = source.emissiveMap;
        this.emissiveIntensity = source.emissiveIntensity;
        return this;
    }
    injectShaderCode(shader, renderer) {
        shader.vertexShader = emissive_vert;
        shader.fragmentShader = emissive_frag;
        shader.uniforms = {
            emissive: { value: this.emissive },
            emissiveMap: { value: this.emissiveMap },
            emissiveIntensity: { value: this.emissiveIntensity },
            clippingPlanes: { value: new Vector2() }
        };
        return shader;
    }
    onBeforeCompile(shader, renderer) {
        this.injectShaderCode(shader, renderer);
        this.shaderRef = shader;
    }
    onBeforeRender() {
        if (!this.shaderRef)
            return;
        this.shaderRef.uniforms.emissiveMap.value = this.emissiveMap;
        this.shaderRef.uniforms.emissiveIntensity.value = this.emissiveIntensity;
    }
}
export class VFXBasicMaterial extends MeshBasicMaterial {
    constructor(params) {
        super(params);
        this.isVFXBasicMaterial = true;
    }
    onBeforeCompile(shader, renderer) {
        shader.vertexShader = vfxBasic.vertexShader;
        shader.fragmentShader = vfxBasic.fragmentShader;
        this.shaderRef = shader;
    }
}
export class VFXPhongMaterial extends MeshPhongMaterial {
    constructor(params) {
        super(params);
        this.isVFXPhongMaterial = true;
    }
    onBeforeCompile(shader, renderer) {
        shader.vertexShader = vfxPhong.vertexShader;
        shader.fragmentShader = vfxPhong.fragmentShader;
        this.shaderRef = shader;
    }
}
export class VFXStandardMaterial extends MeshStandardMaterial {
    constructor(params) {
        super(params);
        this.isVFXStandardMaterial = true;
    }
    onBeforeCompile(shader, renderer) {
        shader.vertexShader = vfxStandard.vertexShader;
        shader.fragmentShader = vfxStandard.fragmentShader;
        this.shaderRef = shader;
    }
}
export class VFXPhysicalMaterial extends MeshPhysicalMaterial {
    constructor(params) {
        super(params);
        this.isVFXPhysicalMaterial = true;
    }
    onBeforeCompile(shader, renderer) {
        shader.vertexShader = vfxPhysical.vertexShader;
        shader.fragmentShader = vfxPhysical.fragmentShader;
        this.shaderRef = shader;
    }
}
