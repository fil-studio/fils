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
exports.CubeTextureAsset = void 0;
var Asset_1 = require("./Asset");
var three_1 = require("three");
var TextureUtils_1 = require("../utils/TextureUtils");
var loader = new three_1.CubeTextureLoader();
var CubeTextureAsset = /** @class */ (function (_super) {
    __extends(CubeTextureAsset, _super);
    function CubeTextureAsset(url, frmt, opts) {
        if (frmt === void 0) { frmt = "jpg"; }
        var _this = _super.call(this, url) || this;
        _this.format = frmt;
        _this.options = opts;
        return _this;
    }
    CubeTextureAsset.prototype.load = function (callback) {
        var _this = this;
        // console.log("Loading", this.url);
        loader.setPath(this.url);
        loader.load([
            'px.' + this.format,
            'nx.' + this.format,
            'py.' + this.format,
            'ny.' + this.format,
            'pz.' + this.format,
            'nz.' + this.format
        ], function (texture) {
            _this.content = texture;
            TextureUtils_1.TextureUtils.applyTextureOptions(texture, _this.options);
            if (callback != null)
                callback();
            _this._loaded = true;
        }, function (event) { }, function (event) {
            _this._failed = true;
        });
    };
    CubeTextureAsset.prototype.destroy = function () {
        this.content.dispose();
        _super.prototype.destroy.call(this);
    };
    return CubeTextureAsset;
}(Asset_1.Asset));
exports.CubeTextureAsset = CubeTextureAsset;
