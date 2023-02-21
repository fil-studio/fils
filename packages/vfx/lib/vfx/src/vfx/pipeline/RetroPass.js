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
exports.RetroPass = void 0;
var RenderPass_1 = require("./RenderPass");
var fbo_vert_1 = require("../../glsl/fbo.vert");
var retro_frag_1 = require("../../glsl/vfx/retro.frag");
var luma_glsl_1 = require("../../glsl/lib/luma.glsl");
var dither2_glsl_1 = require("../../glsl/lib/dither2.glsl");
var three_1 = require("three");
var VFX = new three_1.RawShaderMaterial({
    vertexShader: fbo_vert_1.default,
    fragmentShader: retro_frag_1.default,
    uniforms: {
        resolution: {
            value: new three_1.Vector2()
        },
        tInput: { value: null },
        pixelate: { value: true },
        dithering: { value: 2 },
        gridSize: { value: 5 }
    }
});
/**
 * Retro Pass created for fil's Hellow World
 */
var RetroPass = /** @class */ (function (_super) {
    __extends(RetroPass, _super);
    function RetroPass(params) {
        if (params === void 0) { params = {}; }
        var _this = _super.call(this) || this;
        _this.shader = VFX.clone();
        three_1.ShaderChunk.luma = luma_glsl_1.default;
        three_1.ShaderChunk.dither2 = dither2_glsl_1.default;
        for (var key in params) {
            _this.shader.uniforms[key].value = params[key];
        }
        return _this;
    }
    RetroPass.prototype.setSize = function (width, height) {
        this.shader.uniforms.resolution.value.set(width, height);
    };
    return RetroPass;
}(RenderPass_1.RenderPass));
exports.RetroPass = RetroPass;
