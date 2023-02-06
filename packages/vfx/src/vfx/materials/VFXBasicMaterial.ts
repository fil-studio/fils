import { Color, MeshBasicMaterial, MeshBasicMaterialParameters, Shader } from "three";
import { VFXMaterial } from "./VFXMaterial";

/**
 * Mesh Basic Material + emissive channel
 */
export class VFXBasicMaterial extends MeshBasicMaterial implements VFXMaterial {
    emissive:Color;

    constructor(params?:MeshBasicMaterialParameters) {
        super(params);
    }

    injectShaderCode(shader: Shader): Shader {
        return shader;
    }
}