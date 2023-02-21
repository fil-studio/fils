"use strict";
/**
 * Final Shader Pass combines a few things together
 * 1. Chromatic Aberration
 * 2. Dithering and grain
 * 3. Vignetting
 */
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
exports.FinalPass = void 0;
var fbo_vert_1 = require("../../glsl/fbo.vert");
var final_frag_1 = require("../../glsl/vfx/final.frag");
var lut_glsl_1 = require("../../glsl/lib/lut.glsl");
var RenderPass_1 = require("./RenderPass");
var three_1 = require("three");
var main_1 = require("../../main");
var SHADER = new three_1.RawShaderMaterial({
    vertexShader: fbo_vert_1.default,
    fragmentShader: final_frag_1.default,
    uniforms: {
        tInput: { value: null },
        enableCA: {
            value: true
        },
        chromatic_aberration: {
            value: .001
        },
        enableDithering: {
            value: false
        },
        dither: {
            value: 10
        },
        enableVignette: {
            value: false
        },
        vIntensity: {
            value: 1
        },
        enableLut: {
            value: false
        },
        lookupTable: {
            value: null
        }
    }
});
var FinalPass = /** @class */ (function (_super) {
    __extends(FinalPass, _super);
    function FinalPass(params) {
        var _this = _super.call(this) || this;
        _this.shader = SHADER;
        three_1.ShaderChunk.lut = lut_glsl_1.default;
        three_1.ShaderChunk['rgbSplit'] = main_1.vfxShaders.rgbSplit;
        three_1.ShaderChunk['dithering'] = main_1.vfxShaders.dithering;
        if (params) {
            if (params.caAmount !== undefined) {
                SHADER.uniforms.chromatic_aberration.value = params.caAmount;
            }
            if (params.enableCA !== undefined) {
                SHADER.uniforms.enableCA.value = params.enableCA;
            }
            if (params.dither !== undefined) {
                SHADER.uniforms.dither.value = params.dither;
            }
            if (params.enableDithering !== undefined) {
                SHADER.uniforms.enableDithering.value = params.enableDithering;
            }
            if (params.vignette !== undefined) {
                SHADER.uniforms.vIntensity.value = params.vignette;
            }
            if (params.enableVignette !== undefined) {
                SHADER.uniforms.enableVignette.value = params.enableVignette;
            }
            if (params.enableLut !== undefined) {
                SHADER.uniforms.enableLut.value = params.enableLut;
            }
        }
        return _this;
    }
    return FinalPass;
}(RenderPass_1.RenderPass));
exports.FinalPass = FinalPass;
