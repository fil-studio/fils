import { Shader } from "three";

export interface VFXMaterial {
    injectShaderCode(shader:Shader):Shader;
}