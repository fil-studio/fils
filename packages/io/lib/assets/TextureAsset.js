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
exports.TextureAsset = void 0;
var three_1 = require("three");
var TextureUtils_1 = require("../utils/TextureUtils");
var Asset_1 = require("./Asset");
var loader = new three_1.TextureLoader();
var TextureAsset = /** @class */ (function (_super) {
    __extends(TextureAsset, _super);
    function TextureAsset(url, opts) {
        if (opts === void 0) { opts = null; }
        var _this = _super.call(this, url) || this;
        _this.options = opts;
        return _this;
    }
    TextureAsset.prototype.load = function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        // console.log( "Loading", this.url );
        loader.load(this.url, function (texture) {
            _this.content = texture;
            if (_this.options)
                TextureUtils_1.TextureUtils.applyTextureOptions(texture, _this.options);
            if (callback != null)
                callback();
            _this._loaded = true;
            if (_this._destroying)
                _this.destroy();
        }, function (event) { }, function (event) {
            console.warn('Error Loading Image Asset');
            _this._failed = true;
        });
    };
    TextureAsset.prototype.destroy = function () {
        this._destroying = true;
        if (!this.loaded)
            return;
        this.content.dispose();
        _super.prototype.destroy.call(this);
    };
    return TextureAsset;
}(Asset_1.Asset));
exports.TextureAsset = TextureAsset;
