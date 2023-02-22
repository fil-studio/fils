export class RenderPass {
    constructor() {
        this.enabled = true;
    }
    render(renderer, composer, target = null) {
        if (!this.enabled)
            return;
        renderer.setRenderTarget(target);
        composer.quad.material = this.shader;
        if (this.shader.uniforms.tInput)
            this.shader.uniforms.tInput.value = composer.read.texture;
        if (this.shader.uniforms.tDepth)
            this.shader.uniforms.tDepth.value = composer.depthTexture;
        renderer.render(composer.scene, composer.camera);
    }
    setSize(width, height) {
    }
}
