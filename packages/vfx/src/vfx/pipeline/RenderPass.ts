import { RawShaderMaterial, ShaderMaterial, WebGLRenderer, WebGLRenderTarget } from "three";
import { VFXPipeline } from "../VFXPipeline";

/**
 * Base class for a post-processing pass.
 *
 * Contract — a pass can be implemented in one of two ways:
 *
 * 1. Simple (recommended): provide a `shader` with a `tInput` uniform
 *    (and optionally `tDepth`) and rely on the default `render()` below,
 *    which binds the pipeline's current read texture and draws the
 *    fullscreen quad into `target`.
 *
 * 2. Custom: override `render()` entirely and manage your own targets
 *    (see BlurPass, which does its own multi-pass ping-pong). When you
 *    override it, you own everything and the `tInput` convention no
 *    longer applies.
 *
 * Note: VFXPipeline only calls `render()` on passes whose `enabled`
 * flag is true (it pre-filters the stack), so `render()` does not need
 * to re-check `enabled`.
 */
export class RenderPass {
	shader: RawShaderMaterial|ShaderMaterial
	enabled:boolean = true;
	constructor () {

	}

	render(renderer:WebGLRenderer, composer:VFXPipeline, target:WebGLRenderTarget = null) {
		renderer.setRenderTarget(target);
		composer.quad.material = this.shader;
		if(this.shader.uniforms.tInput) this.shader.uniforms.tInput.value = composer.read.texture;
		if(this.shader.uniforms.tDepth) this.shader.uniforms.tDepth.value = composer.depthTexture;
		renderer.render(composer.scene, composer.camera);
	}

	setSize(width:number, height:number) {
		
	}

	dispose() {}
}