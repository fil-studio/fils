"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlurPass = void 0;
var three_1 = require("three");
var RenderPass_1 = require("./RenderPass");
var fbo_vert_1 = require("../../glsl/fbo.vert");
var blur_frag_1 = require("../../glsl/vfx/blur.frag");
var BlurDefaults = {
    scale: 1,
    radius: 1,
    iterations: 4,
    quality: 0
};
var BlurPass = /** @class */ (function (_super) {
    __extends(BlurPass, _super);
    function BlurPass(src, width, height, settings) {
        if (settings === void 0) { settings = BlurDefaults; }
        var _this = _super.call(this) || this;
        _this.radius = 2;
        _this.iterations = 4;
        _this.quality = 0;
        _this.source = src;
        var scale = settings.scale || BlurDefaults.scale;
        var radius = settings.radius || BlurDefaults.radius;
        var iterations = settings.iterations || BlurDefaults.iterations;
        var quality = settings.quality || BlurDefaults.quality;
        _this.read = new three_1.WebGLRenderTarget(width, height);
        _this.write = _this.read.clone();
        _this.radius = radius;
        _this.iterations = iterations;
        _this.scale = scale;
        _this.quality = quality;
        _this.shader = new three_1.RawShaderMaterial({
            vertexShader: fbo_vert_1.default,
            fragmentShader: blur_frag_1.default,
            uniforms: {
                resolution: {
                    value: new three_1.Vector2(width, height)
                },
                direction: {
                    value: new three_1.Vector2()
                },
                scale: {
                    value: scale
                },
                tMap: {
                    value: null
                },
                mode: {
                    value: quality
                },
                isGlow: {
                    value: settings.isGlow === true
                }
            }
        });
        _this.scene = new three_1.Scene();
        var w = scale * width / 2;
        var h = scale * height / 2;
        _this.camera = new three_1.OrthographicCamera(-w, w, h, -h, 0, 100);
        _this.camera.position.z = 1;
        _this.scene.add(_this.camera);
        _this.quad = new three_1.Mesh(new three_1.PlaneGeometry(1, 1), _this.shader);
        _this.quad.scale.set(width * scale, height * scale, 1);
        _this.scene.add(_this.quad);
        return _this;
    }
    BlurPass.prototype.swapBuffers = function () {
        var tmp = this.write;
        this.write = this.read;
        this.read = tmp;
    };
    BlurPass.prototype.setSize = function (width, height) {
        this.read.setSize(width * this.scale, height * this.scale);
        this.write.setSize(width * this.scale, height * this.scale);
        var w = this.scale * width / 2;
        var h = this.scale * height / 2;
        this.camera.left = -w;
        this.camera.right = w;
        this.camera.top = h;
        this.camera.bottom = -h;
        this.camera.updateProjectionMatrix();
        this.quad.scale.set(width * this.scale, height * this.scale, 1);
        this.shader.uniforms.resolution.value.set(width, height);
    };
    BlurPass.prototype.blurPass = function (renderer, src, dst, dx, dy) {
        renderer.setRenderTarget(dst);
        this.shader.uniforms.mode.value = this.quality;
        this.shader.uniforms.direction.value.set(dx, dy);
        this.shader.uniforms.tMap.value = src;
        renderer.render(this.scene, this.camera);
    };
    BlurPass.prototype.render = function (renderer, composer, target) {
        if (target === void 0) { target = null; }
        this.blurPass(renderer, this.source != null ? this.source : composer.read.texture, this.write, this.radius, 0);
        this.swapBuffers();
        for (var i_1 = 1; i_1 < this.iterations - 1; i_1++) {
            this.blurPass(renderer, this.read.texture, this.write, i_1 % 2 == 0 ? this.radius : 0, i_1 % 2 == 0 ? 0 : this.radius);
            this.swapBuffers();
        }
        var i = this.iterations - 1;
        this.blurPass(renderer, this.read.texture, target, i % 2 == 0 ? this.radius : 0, i % 2 == 0 ? 0 : this.radius);
    };
    // render internal
    BlurPass.prototype.renderInternal = function (renderer) {
        if (this.source == null)
            return console.warn("Internal rendering needs a source texture!");
        this.blurPass(renderer, this.source, this.write, this.radius, 0);
        this.swapBuffers();
        for (var i = 1; i < this.iterations; i++) {
            this.blurPass(renderer, this.read.texture, this.write, i % 2 == 0 ? this.radius : 0, i % 2 == 0 ? 0 : this.radius);
            this.swapBuffers();
        }
    };
    Object.defineProperty(BlurPass.prototype, "texture", {
        get: function () {
            return this.read.texture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlurPass.prototype, "target", {
        get: function () {
            return this.read;
        },
        enumerable: false,
        configurable: true
    });
    return BlurPass;
}(RenderPass_1.RenderPass));
exports.BlurPass = BlurPass;
