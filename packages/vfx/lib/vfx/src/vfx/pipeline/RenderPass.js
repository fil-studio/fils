"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderPass = void 0;
var RenderPass = /** @class */ (function () {
    function RenderPass() {
        this.enabled = true;
    }
    RenderPass.prototype.render = function (renderer, composer, target) {
        if (target === void 0) { target = null; }
        if (!this.enabled)
            return;
        renderer.setRenderTarget(target);
        composer.quad.material = this.shader;
        if (this.shader.uniforms.tInput)
            this.shader.uniforms.tInput.value = composer.read.texture;
        if (this.shader.uniforms.tDepth)
            this.shader.uniforms.tDepth.value = composer.depthTexture;
        renderer.render(composer.scene, composer.camera);
    };
    RenderPass.prototype.setSize = function (width, height) {
    };
    return RenderPass;
}());
exports.RenderPass = RenderPass;
