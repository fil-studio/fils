import { Color, ColorRepresentation, Material, MaterialParameters, MeshBasicMaterial, MeshBasicMaterialParameters, MeshPhongMaterial, MeshPhongMaterialParameters, MeshPhysicalMaterial, MeshPhysicalMaterialParameters, MeshStandardMaterial, MeshStandardMaterialParameters, Shader, Texture, WebGLRenderer } from "three";
export interface VFXEmissiveMaterialParameters extends MaterialParameters {
    emissive?: ColorRepresentation;
    emissiveIntensity?: number;
    emissiveMap?: Texture;
}
export declare class VFXEmissiveMaterial extends Material {
    emissive: Color;
    emissiveIntensity: number;
    emissiveMap: Texture;
    isVFXEmissiveMaterial: boolean;
    type: string;
    protected shaderRef: Shader;
    constructor(params?: VFXEmissiveMaterialParameters);
    setValues(values: MaterialParameters): void;
    copy(source: VFXEmissiveMaterial): this;
    injectShaderCode(shader: Shader, renderer: WebGLRenderer): Shader;
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;
    onBeforeRender(): void;
}
export declare class VFXBasicMaterial extends MeshBasicMaterial {
    isVFXBasicMaterial: boolean;
    shaderRef: Shader;
    constructor(params?: MeshBasicMaterialParameters);
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;
}
export declare class VFXPhongMaterial extends MeshPhongMaterial {
    isVFXPhongMaterial: boolean;
    shaderRef: Shader;
    constructor(params?: MeshPhongMaterialParameters);
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;
}
export declare class VFXStandardMaterial extends MeshStandardMaterial {
    isVFXStandardMaterial: boolean;
    shaderRef: Shader;
    constructor(params?: MeshStandardMaterialParameters);
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;
}
export declare class VFXPhysicalMaterial extends MeshPhysicalMaterial {
    isVFXPhysicalMaterial: boolean;
    shaderRef: Shader;
    constructor(params?: MeshPhysicalMaterialParameters);
    onBeforeCompile(shader: Shader, renderer: WebGLRenderer): void;
}
