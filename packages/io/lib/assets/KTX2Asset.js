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
exports.KTX2Asset = void 0;
var KTX2Loader_js_1 = require("three/examples/jsm/loaders/KTX2Loader.js");
var TextureUtils_1 = require("../utils/TextureUtils");
var TextureAsset_1 = require("./TextureAsset");
var ktx2Loader = new KTX2Loader_js_1.KTX2Loader();
var KTX2Asset = /** @class */ (function (_super) {
    __extends(KTX2Asset, _super);
    function KTX2Asset(url, opts) {
        if (opts === void 0) { opts = null; }
        return _super.call(this, url, opts) || this;
    }
    KTX2Asset.setupBasisLoader = function (basisPath, renderer) {
        ktx2Loader.setTranscoderPath(basisPath);
        ktx2Loader.detectSupport(renderer);
    };
    KTX2Asset.prototype.load = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (this._loaded)
            return;
        ktx2Loader.load(this.url, function (texture) {
            if (_this.options)
                TextureUtils_1.TextureUtils.applyTextureOptions(texture, _this.options);
            _this.content = texture;
            if (callback != null)
                callback();
            _this._loaded = true;
        });
    };
    return KTX2Asset;
}(TextureAsset_1.TextureAsset));
exports.KTX2Asset = KTX2Asset;
