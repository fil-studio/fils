import { ColorSpace, EquirectangularReflectionMapping, LinearFilter, PMREMGenerator, Texture, ToneMapping, WebGLRenderer } from "three";

export type ToneMappingOptions = {
	toneMapping?:ToneMapping,
	exposure?:number,
	outputColorSpace?:ColorSpace
}

/**
 * Gets HDRI env from a spherical map
 * @param env source spherical map
 * @param renderer ThreeJS WebGLRenderer
 * @param opts ToneMappingOptions to apply to renderer
 * @returns EnvMap HDRI Texture
 */

export function getHDRI(env:Texture, renderer:WebGLRenderer, opts:ToneMappingOptions={}):Texture {
	env.mapping = EquirectangularReflectionMapping;
	env.magFilter = LinearFilter;
	env.needsUpdate = true;

	const pmrem = new PMREMGenerator(renderer);
	const envMap = pmrem.fromEquirectangular(env).texture;
	pmrem.dispose();

	if(opts.toneMapping != undefined) renderer.toneMapping = opts.toneMapping;
	if(opts.exposure != undefined) renderer.toneMappingExposure = opts.exposure;
	if(opts.outputColorSpace != undefined) renderer.outputColorSpace = opts.outputColorSpace;

	return envMap;
}