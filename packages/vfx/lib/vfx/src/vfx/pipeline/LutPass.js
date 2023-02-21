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
exports.LutPass = void 0;
var RenderPass_1 = require("./RenderPass");
var three_1 = require("three");
var fbo_vert_1 = require("../../glsl/fbo.vert");
var lut_frag_1 = require("../../glsl/vfx/lut.frag");
/**
 * LUT color correction render pass
 */
var LutPass = /** @class */ (function (_super) {
    __extends(LutPass, _super);
    function LutPass(table) {
        var _this = _super.call(this) || this;
        _this.shader = new three_1.RawShaderMaterial({
            vertexShader: fbo_vert_1.default,
            fragmentShader: lut_frag_1.default,
            uniforms: {
                tInput: {
                    value: null
                },
                lookupTable: {
                    value: null
                }
            }
        });
        _this.lookupTable = table;
        _this.shader.uniforms.lookupTable.value = table;
        return _this;
    }
    return LutPass;
}(RenderPass_1.RenderPass));
exports.LutPass = LutPass;
