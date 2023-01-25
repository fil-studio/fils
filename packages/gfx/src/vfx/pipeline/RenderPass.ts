import { RawShaderMaterial, WebGLRenderer, WebGLRenderTarget } from "three";
import { VFXPipeline } from "../VFXPipeline";

export class RenderPass {
	shader: RawShaderMaterial
	constructor () {

	}

	render(renderer:WebGLRenderer, composer:VFXPipeline, target:WebGLRenderTarget = null) {
		renderer.setRenderTarget(target);
		composer.quad.material = this.shader;
		if(this.shader.uniforms.tInput) this.shader.uniforms.tInput.value = composer.read.texture;
		if(this.shader.uniforms.tDepth) this.shader.uniforms.tDepth.value = composer.read.depthTexture;
		renderer.render(composer.scene, composer.camera);
	}

	setSize(width:number, height:number) {
		
	}
}