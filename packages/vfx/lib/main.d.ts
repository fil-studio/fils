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
export * from './vfx/materials/VFXBasicMaterials';
declare const vfxShaders: {
    rgbSplit: string;
    dithering: string;
    depth: string;
    lut: string;
    luma: string;
    dither2: string;
};
export { vfxShaders };
