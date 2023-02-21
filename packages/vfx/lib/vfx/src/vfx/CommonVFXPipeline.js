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
exports.CommonVFXPipeline = void 0;
var main_1 = require("../main");
var VFXPipeline_1 = require("./VFXPipeline");
var CommonVFXPipeline = /** @class */ (function (_super) {
    __extends(CommonVFXPipeline, _super);
    function CommonVFXPipeline(rnd, params, pipelineParams) {
        if (params === void 0) { params = {
            width: window.innerWidth,
            height: window.innerHeight
        }; }
        var _this = _super.call(this, rnd, params) || this;
        _this.dof = new main_1.DoFPass(params.width, params.height, pipelineParams && pipelineParams.dof ? pipelineParams.dof : null);
        _this.fxaa = new main_1.FXAAPass(params.width, params.height);
        _this.final = new main_1.FinalPass(pipelineParams && pipelineParams.final ? pipelineParams.final : null);
        if (pipelineParams) {
            _this.dof.enabled = pipelineParams.enableDOF !== undefined ? pipelineParams.enableDOF : true;
            _this.fxaa.enabled = pipelineParams.enableFXAA !== undefined ? pipelineParams.enableFXAA : true;
            _this.final.enabled = pipelineParams.enableFinal !== undefined ? pipelineParams.enableFinal : true;
        }
        _this.addPass(_this.dof);
        _this.addPass(_this.fxaa);
        _this.addPass(_this.final);
        return _this;
    }
    return CommonVFXPipeline;
}(VFXPipeline_1.VFXPipeline));
exports.CommonVFXPipeline = CommonVFXPipeline;
