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
exports.ImageAsset = exports.XHttpReqAsset = exports.Asset = void 0;
var io_1 = require("../io");
/**
 * Core Asset + Basic Asset Types
 */
var Asset = /** @class */ (function () {
    function Asset(url) {
        this._loaded = false;
        this._failed = false;
        this._destroying = false;
        this.content = null;
        this.url = url;
    }
    Asset.prototype.load = function (callback) { };
    Asset.prototype.destroy = function () {
        this.content = null;
        this._loaded = false;
        this._failed = false;
        this._destroying = false;
    };
    Object.defineProperty(Asset.prototype, "loaded", {
        get: function () {
            return this._loaded;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Asset.prototype, "failed", {
        get: function () {
            return this._failed;
        },
        enumerable: false,
        configurable: true
    });
    return Asset;
}());
exports.Asset = Asset;
var XHttpReqAsset = /** @class */ (function (_super) {
    __extends(XHttpReqAsset, _super);
    function XHttpReqAsset(url, type) {
        if (type === void 0) { type = "text"; }
        var _this = _super.call(this, url) || this;
        _this.type = type;
        return _this;
    }
    XHttpReqAsset.prototype.load = function (callback) {
        var _this = this;
        if (this.loaded)
            return;
        // console.log( "loading", this.url );
        var onError = function (res) {
            _this._failed = true;
            console.warn("Failed loading Asset", res.status);
        };
        return io_1.io.load(this.url, function (res) {
            _this.content = res;
            _this._loaded = true;
            if (callback != undefined)
                callback();
        }, onError, {
            responseType: this.type
        });
    };
    return XHttpReqAsset;
}(Asset));
exports.XHttpReqAsset = XHttpReqAsset;
var ImageAsset = /** @class */ (function (_super) {
    __extends(ImageAsset, _super);
    function ImageAsset(url, type) {
        if (type === void 0) { type = "text"; }
        return _super.call(this, url) || this;
    }
    ImageAsset.prototype.load = function (callback) {
        var _this = this;
        if (this.loaded)
            return;
        // console.log( "loading", this.url );
        var img = new Image();
        this.content = img;
        img.onerror = function () {
            _this._failed = true;
            console.warn("Failed loading Asset");
        };
        img.onload = function () {
            _this._loaded = true;
            if (callback != undefined)
                callback();
        };
        img.src = this.url;
    };
    return ImageAsset;
}(Asset));
exports.ImageAsset = ImageAsset;
