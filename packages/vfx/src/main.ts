export * from './vfx/VFXRenderer';
export * from './vfx/pipeline/RenderPass';
export * from './vfx/pipeline/BlurPass';
export * from './vfx/pipeline/FinalPass';
export * from './vfx/pipeline/DoFPass';
export * from './vfx/pipeline/FXAAPass';
export * from './vfx/pipeline/LutPass';
export * from './vfx/pipeline/RetroPass';
export * from './vfx/CommonVFXPipeline';
export * from './vfx/VFXPipeline';
export * from './vfx/materials/MaterialUtils';

import rgb from './glsl/lib/rgbSplit.glsl';
import dither from './glsl/lib/dither.glsl';
import depth from './glsl/lib/depth.glsl';
import lut from './glsl/lib/lut.glsl';
import luma from './glsl/lib/luma.glsl';
import dither2 from './glsl/lib/dither2.glsl';

const vfxShaders = {
	rgbSplit: rgb,
	dithering: dither,
	depth: depth,
	lut: lut,
	luma: luma,
	dither2: dither2
}

export {
	vfxShaders
}