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
exports.VFXPhysicalMaterial = exports.VFXStandardMaterial = exports.VFXPhongMaterial = exports.VFXBasicMaterial = exports.VFXEmissiveMaterial = void 0;
var three_1 = require("three");
var emissive_frag_1 = require("../../glsl/vfx/material/emissive.frag");
var emissive_vert_1 = require("../../glsl/vfx/material/emissive.vert");
var MaterialUtils_1 = require("./MaterialUtils");
/**
 * Inject Materials to Library
 */
var vfxBasic = {
    vertexShader: three_1.ShaderLib["basic"].vertexShader.split('').join(''),
    fragmentShader: three_1.ShaderLib["basic"].fragmentShader.split('').join(''),
    uniforms: null
};
(0, MaterialUtils_1.injectVFXBasics)(vfxBasic, false);
var vfxPhong = {
    vertexShader: three_1.ShaderLib["phong"].vertexShader.split('').join(''),
    fragmentShader: three_1.ShaderLib["phong"].fragmentShader.split('').join(''),
    uniforms: null
};
(0, MaterialUtils_1.injectVFXBasics)(vfxPhong, true);
var vfxStandard = {
    vertexShader: three_1.ShaderLib["standard"].vertexShader.split('').join(''),
    fragmentShader: three_1.ShaderLib["standard"].fragmentShader.split('').join(''),
    uniforms: null
};
(0, MaterialUtils_1.injectVFXBasics)(vfxStandard, true);
var vfxPhysical = {
    vertexShader: three_1.ShaderLib["physical"].vertexShader.split('').join(''),
    fragmentShader: three_1.ShaderLib["physical"].fragmentShader.split('').join(''),
    uniforms: null
};
(0, MaterialUtils_1.injectVFXBasics)(vfxPhysical, true);
/**
 * VFX Mesh Emissive Only Material
 */
var VFXEmissiveMaterial = /** @class */ (function (_super) {
    __extends(VFXEmissiveMaterial, _super);
    function VFXEmissiveMaterial(params) {
        var _this = _super.call(this) || this;
        _this.emissive = new three_1.Color(0xffffff);
        _this.emissiveIntensity = 1;
        _this.emissiveMap = null;
        _this.isVFXEmissiveMaterial = true;
        _this.type = "VFXEmissiveMaterialParameters";
        _this.setValues(params);
        return _this;
    }
    VFXEmissiveMaterial.prototype.setValues = function (values) {
        _super.prototype.setValues.call(this, values);
    };
    VFXEmissiveMaterial.prototype.copy = function (source) {
        _super.prototype.copy.call(this, source);
        this.emissive.copy(source.emissive);
        this.emissiveMap = source.emissiveMap;
        this.emissiveIntensity = source.emissiveIntensity;
        return this;
    };
    VFXEmissiveMaterial.prototype.injectShaderCode = function (shader, renderer) {
        shader.vertexShader = emissive_vert_1.default;
        shader.fragmentShader = emissive_frag_1.default;
        shader.uniforms = {
            emissive: { value: this.emissive },
            emissiveMap: { value: this.emissiveMap },
            emissiveIntensity: { value: this.emissiveIntensity },
            clippingPlanes: { value: new three_1.Vector2() }
        };
        return shader;
    };
    VFXEmissiveMaterial.prototype.onBeforeCompile = function (shader, renderer) {
        this.injectShaderCode(shader, renderer);
        this.shaderRef = shader;
    };
    VFXEmissiveMaterial.prototype.onBeforeRender = function () {
        if (!this.shaderRef)
            return;
        this.shaderRef.uniforms.emissiveMap.value = this.emissiveMap;
        this.shaderRef.uniforms.emissiveIntensity.value = this.emissiveIntensity;
    };
    return VFXEmissiveMaterial;
}(three_1.Material));
exports.VFXEmissiveMaterial = VFXEmissiveMaterial;
var VFXBasicMaterial = /** @class */ (function (_super) {
    __extends(VFXBasicMaterial, _super);
    function VFXBasicMaterial(params) {
        var _this = _super.call(this, params) || this;
        _this.isVFXBasicMaterial = true;
        return _this;
        // this.type = "VFXBasicMaterial"; --> This doesn't work
    }
    VFXBasicMaterial.prototype.onBeforeCompile = function (shader, renderer) {
        shader.vertexShader = vfxBasic.vertexShader;
        shader.fragmentShader = vfxBasic.fragmentShader;
        this.shaderRef = shader;
    };
    return VFXBasicMaterial;
}(three_1.MeshBasicMaterial));
exports.VFXBasicMaterial = VFXBasicMaterial;
var VFXPhongMaterial = /** @class */ (function (_super) {
    __extends(VFXPhongMaterial, _super);
    function VFXPhongMaterial(params) {
        var _this = _super.call(this, params) || this;
        _this.isVFXPhongMaterial = true;
        return _this;
    }
    VFXPhongMaterial.prototype.onBeforeCompile = function (shader, renderer) {
        shader.vertexShader = vfxPhong.vertexShader;
        shader.fragmentShader = vfxPhong.fragmentShader;
        this.shaderRef = shader;
    };
    return VFXPhongMaterial;
}(three_1.MeshPhongMaterial));
exports.VFXPhongMaterial = VFXPhongMaterial;
var VFXStandardMaterial = /** @class */ (function (_super) {
    __extends(VFXStandardMaterial, _super);
    function VFXStandardMaterial(params) {
        var _this = _super.call(this, params) || this;
        _this.isVFXStandardMaterial = true;
        return _this;
    }
    VFXStandardMaterial.prototype.onBeforeCompile = function (shader, renderer) {
        shader.vertexShader = vfxStandard.vertexShader;
        shader.fragmentShader = vfxStandard.fragmentShader;
        this.shaderRef = shader;
    };
    return VFXStandardMaterial;
}(three_1.MeshStandardMaterial));
exports.VFXStandardMaterial = VFXStandardMaterial;
var VFXPhysicalMaterial = /** @class */ (function (_super) {
    __extends(VFXPhysicalMaterial, _super);
    function VFXPhysicalMaterial(params) {
        var _this = _super.call(this, params) || this;
        _this.isVFXPhysicalMaterial = true;
        return _this;
    }
    VFXPhysicalMaterial.prototype.onBeforeCompile = function (shader, renderer) {
        shader.vertexShader = vfxPhysical.vertexShader;
        shader.fragmentShader = vfxPhysical.fragmentShader;
        this.shaderRef = shader;
    };
    return VFXPhysicalMaterial;
}(three_1.MeshPhysicalMaterial));
exports.VFXPhysicalMaterial = VFXPhysicalMaterial;
