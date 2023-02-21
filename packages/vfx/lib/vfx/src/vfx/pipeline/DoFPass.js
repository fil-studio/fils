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
exports.DoFPass = void 0;
var three_1 = require("three");
var BlurPass_1 = require("./BlurPass");
var RenderPass_1 = require("./RenderPass");
var fbo_vert_1 = require("../../glsl/fbo.vert");
var dof_frag_1 = require("../../glsl/vfx/dof.frag");
var depth_glsl_1 = require("../../glsl/lib/depth.glsl");
var SHADER = new three_1.RawShaderMaterial({
    vertexShader: fbo_vert_1.default,
    fragmentShader: dof_frag_1.default,
    uniforms: {
        tInput: { value: null },
        tBlur: { value: null },
        tDepth: { value: null },
        cameraNear: { value: 0 },
        cameraFar: { value: 100 },
        aperture: { value: 1.5 },
        focalDistance: { value: 1 },
        debug: { value: false }
    }
});
var DEFAULTS = {
    blur: {
        scale: 1,
        radius: 1,
        iterations: 4,
        quality: 2
    },
    camNear: 0,
    camFar: 100,
    focalDistance: 1,
    aperture: 5
};
var DoFPass = /** @class */ (function (_super) {
    __extends(DoFPass, _super);
    function DoFPass(width, height, settings) {
        var _this = _super.call(this) || this;
        _this.blurPass = new BlurPass_1.BlurPass(null, width, height, settings && settings.blur ? settings.blur : DEFAULTS.blur);
        three_1.ShaderChunk.depth = depth_glsl_1.default;
        var s = settings ? settings : DEFAULTS;
        _this.shader = SHADER.clone();
        for (var key in DEFAULTS) {
            if (!_this.shader.uniforms[key])
                continue;
            _this.shader.uniforms[key].value = s[key] === undefined ? DEFAULTS[key] : s[key];
        }
        return _this;
    }
    DoFPass.prototype.setSize = function (width, height) {
        this.blurPass.setSize(width, height);
    };
    DoFPass.prototype.render = function (renderer, composer, target) {
        if (target === void 0) { target = null; }
        if (!this.enabled)
            return;
        this.blurPass.source = composer.read.texture;
        this.blurPass.renderInternal(renderer);
        this.shader.uniforms.tBlur.value = this.blurPass.texture;
        _super.prototype.render.call(this, renderer, composer, target);
    };
    return DoFPass;
}(RenderPass_1.RenderPass));
exports.DoFPass = DoFPass;
