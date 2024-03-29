export * from './vfx/VFXRenderer';
export * from './vfx/VFXRenderer2';
export * from './vfx/pipeline/RenderPass';
export * from './vfx/pipeline/BlurPass';
export * from './vfx/pipeline/GlowPass';
export * from './vfx/pipeline/FinalPass';
export * from './vfx/pipeline/DoFPass';
export * from './vfx/pipeline/FXAAPass';
export * from './vfx/pipeline/LutPass';
export * from './vfx/pipeline/RetroPass';
export * from './vfx/CommonVFXPipeline';
export * from './vfx/VFXPipeline';
export * from './vfx/materials/MaterialUtils';
export * from './vfx/materials/VFXBasicMaterials';

import rgb from './glsl/lib/rgbSplit.glsl';
import dither from './glsl/lib/dither.glsl';
import depth from './glsl/lib/depth.glsl';
import lut from './glsl/lib/lut.glsl';
import luma from './glsl/lib/luma.glsl';
import dither2 from './glsl/lib/dither2.glsl';
import glow from './glsl/vfx/material/glow.frag';

const vfxShaders = {
	rgbSplit: rgb,
	dithering: dither,
	depth,
	lut,
	luma,
	dither2,
	oGlow: glow
}

export {
	vfxShaders
}