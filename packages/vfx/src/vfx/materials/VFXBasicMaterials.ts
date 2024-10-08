import { Color, ColorRepresentation, Material, MaterialParameters, MeshBasicMaterial, MeshBasicMaterialParameters, MeshPhongMaterial, MeshPhongMaterialParameters, MeshPhysicalMaterial, MeshPhysicalMaterialParameters, MeshStandardMaterial, MeshStandardMaterialParameters, ShaderLib, Texture, Vector2, WebGLProgramParametersWithUniforms, WebGLRenderer } from "three";

export interface VFXEmissiveMaterialParameters extends MaterialParameters {
    emissive?:ColorRepresentation;
    emissiveIntensity?:number;
    emissiveMap?:Texture;
}

import emissive_frag from '../../glsl/vfx/material/emissive.frag';
import emissive_vert from '../../glsl/vfx/material/emissive.vert';
import { injectVFXBasics } from "./MaterialUtils";

export interface Shader {
    vertexShader:string,
    fragmentShader:string
}

/**
 * Inject Materials to Library
 */
const vfxBasic:Shader = {
    vertexShader: ShaderLib["basic"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["basic"].fragmentShader.split('').join(''),
}
injectVFXBasics(vfxBasic, false);

const vfxPhong:Shader = {
    vertexShader: ShaderLib["phong"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["phong"].fragmentShader.split('').join(''),
}
injectVFXBasics(vfxPhong, true);

const vfxStandard:Shader = {
    vertexShader: ShaderLib["standard"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["standard"].fragmentShader.split('').join(''),
}
injectVFXBasics(vfxStandard, true);

const vfxPhysical:Shader = {
    vertexShader: ShaderLib["physical"].vertexShader.split('').join(''),
    fragmentShader: ShaderLib["physical"].fragmentShader.split('').join(''),
}
injectVFXBasics(vfxPhysical, true);


/**
 * VFX Mesh Emissive Only Material
 */
export class VFXEmissiveMaterial extends Material {
    emissive:Color = new Color(0xffffff);
    emissiveIntensity:number = 1;
    emissiveMap:Texture = null;
    isVFXEmissiveMaterial = true;
    type:string;
    protected shaderRef:WebGLProgramParametersWithUniforms;

    constructor(params?:VFXEmissiveMaterialParameters) {
        super();
        this.type = "VFXEmissiveMaterialParameters";
        this.setValues(params);
    }

    setValues(values: MaterialParameters): void {
        super.setValues(values);
    }

    copy(source: VFXEmissiveMaterial): this {
        super.copy(source);
        this.emissive.copy(source.emissive);
        this.emissiveMap = source.emissiveMap;
        this.emissiveIntensity = source.emissiveIntensity;
        return this;
    }

    injectShaderCode(shader: WebGLProgramParametersWithUniforms, renderer:WebGLRenderer): Shader {
        shader.vertexShader = emissive_vert;
        shader.fragmentShader = emissive_frag;
        shader.uniforms = {
            emissive: { value: this.emissive },
            emissiveMap: { value: this.emissiveMap},
            emissiveIntensity: { value: this.emissiveIntensity },
            clippingPlanes: {value: new Vector2()}
        }
        return shader;
    }

    onBeforeCompile(shader: WebGLProgramParametersWithUniforms, renderer: WebGLRenderer): void {
        this.injectShaderCode(shader, renderer);
        this.shaderRef = shader;
    }

    onBeforeRender() {
        if(!this.shaderRef) return;
        this.shaderRef.uniforms.emissiveMap.value = this.emissiveMap;
        this.shaderRef.uniforms.emissiveIntensity.value = this.emissiveIntensity;
    }
}


export class VFXBasicMaterial extends MeshBasicMaterial {
    isVFXBasicMaterial = true;
    shaderRef:WebGLProgramParametersWithUniforms;

    constructor(params?:MeshBasicMaterialParameters) {
        super(params);
        // this.type = "VFXBasicMaterial"; --> This doesn't work
    }

    onBeforeCompile (shader:WebGLProgramParametersWithUniforms, renderer:WebGLRenderer):void {
        shader.vertexShader = vfxBasic.vertexShader;
        shader.fragmentShader = vfxBasic.fragmentShader;
        this.shaderRef = shader;
    }
}

export class VFXPhongMaterial extends MeshPhongMaterial {
    isVFXPhongMaterial = true;
    shaderRef:WebGLProgramParametersWithUniforms;

    constructor(params?:MeshPhongMaterialParameters) {
        super(params);
    }

    onBeforeCompile (shader:WebGLProgramParametersWithUniforms, renderer:WebGLRenderer):void {
        shader.vertexShader = vfxPhong.vertexShader;
        shader.fragmentShader = vfxPhong.fragmentShader;
        this.shaderRef = shader;
    }
}

export class VFXStandardMaterial extends MeshStandardMaterial {
    isVFXStandardMaterial = true;
    shaderRef:WebGLProgramParametersWithUniforms;

    constructor(params?:MeshStandardMaterialParameters) {
        super(params);
    }

    onBeforeCompile (shader:WebGLProgramParametersWithUniforms, renderer:WebGLRenderer):void {
        shader.vertexShader = vfxStandard.vertexShader;
        shader.fragmentShader = vfxStandard.fragmentShader;
        this.shaderRef = shader;
    }
}

export class VFXPhysicalMaterial extends MeshPhysicalMaterial {
    isVFXPhysicalMaterial = true;
    shaderRef:WebGLProgramParametersWithUniforms;

    constructor(params?:MeshPhysicalMaterialParameters) {
        super(params);
    }

    onBeforeCompile (shader:WebGLProgramParametersWithUniforms, renderer:WebGLRenderer):void {
        shader.vertexShader = vfxPhysical.vertexShader;
        shader.fragmentShader = vfxPhysical.fragmentShader;
        this.shaderRef = shader;
    }
}