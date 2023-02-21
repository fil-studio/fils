"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTHelper = void 0;
var three_1 = require("three");
var fbo_frag_1 = require("../glsl/fbo.frag");
var fbo_vert_1 = require("../glsl/fbo.vert");
var TMP = new three_1.Vector2();
var MAT = new three_1.RawShaderMaterial({
    vertexShader: fbo_vert_1.default,
    fragmentShader: fbo_frag_1.default,
    uniforms: {
        tInput: { value: null },
        opacity: { value: 1 }
    }
});
var RTHelper = /** @class */ (function () {
    function RTHelper() {
        this.camera = new three_1.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.material = MAT;
        var postPlane = new three_1.PlaneGeometry(1, 1);
        this.quad = new three_1.Mesh(postPlane, this.material);
        this.scene = new three_1.Scene();
        this.scene.add(this.quad);
    }
    RTHelper.prototype.render = function (target, renderer, x, y, width, height, opacity) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (opacity === void 0) { opacity = 1; }
        // render FBO to screen
        if (width == 0 || height == 0) {
            width = target.width;
            height = target.height;
        }
        this.drawTexture(target.texture, renderer, x, y, width, height, opacity);
    };
    RTHelper.prototype.renderMRT = function (target, renderer, index, x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        // render FBO to screen
        if (width == 0 || height == 0) {
            width = target.width;
            height = target.height;
        }
        this.drawTexture(target.texture[index], renderer, x, y, width, height);
    };
    RTHelper.prototype.drawTexture = function (texture, renderer, x, y, width, height, opacity) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (opacity === void 0) { opacity = 1; }
        var s = new three_1.Vector2();
        renderer.getSize(s);
        this.camera.left = -s.width / 2;
        this.camera.right = s.width / 2;
        this.camera.top = s.height / 2;
        this.camera.bottom = -s.height / 2;
        this.camera.updateProjectionMatrix();
        this.quad.scale.set(width, height, 1);
        this.quad.position.set(-s.width / 2 + width / 2 + x, s.height / 2 - height / 2 - y, 0);
        this.quad.material = this.material;
        this.material.uniforms.tInput.value = texture;
        this.material.transparent = texture.format == three_1.RGBAFormat;
        this.material.uniforms.opacity.value = opacity;
        //renderer.clearDepth();
        renderer.render(this.scene, this.camera);
    };
    RTHelper.prototype.renderToTarget = function (target, renderer, material) {
        var s = new three_1.Vector2(target.width, target.height);
        this.camera.left = -s.width / 2;
        this.camera.right = s.width / 2;
        this.camera.top = s.height / 2;
        this.camera.bottom = -s.height / 2;
        this.camera.updateProjectionMatrix();
        this.quad.scale.set(s.width, s.height, 1);
        this.quad.position.set(0, 0, 0);
        this.quad.material = material;
        renderer.setRenderTarget(target);
        //renderer.clearDepth();
        renderer.render(this.scene, this.camera);
        renderer.setRenderTarget(null);
    };
    RTHelper.prototype.renderToViewport = function (renderer, material) {
        renderer.getSize(TMP);
        this.camera.left = -TMP.x / 2;
        this.camera.right = TMP.x / 2;
        this.camera.top = TMP.y / 2;
        this.camera.bottom = -TMP.y / 2;
        this.camera.updateProjectionMatrix();
        this.quad.scale.set(TMP.x, TMP.y, 1);
        this.quad.position.set(0, 0, 0);
        this.quad.material = material;
        renderer.setRenderTarget(null);
        //renderer.clearDepth();
        renderer.render(this.scene, this.camera);
    };
    RTHelper.prototype.dispose = function () {
        this.quad.geometry.dispose();
    };
    return RTHelper;
}());
exports.RTHelper = RTHelper;
