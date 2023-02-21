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
exports.VideoTextureAsset = void 0;
var three_1 = require("three");
var TextureUtils_1 = require("../utils/TextureUtils");
var Asset_1 = require("./Asset");
var VideoTextureAsset = /** @class */ (function (_super) {
    __extends(VideoTextureAsset, _super);
    function VideoTextureAsset(url, loop, videoRef, options) {
        if (loop === void 0) { loop = false; }
        if (videoRef === void 0) { videoRef = null; }
        if (options === void 0) { options = null; }
        var _this = _super.call(this, url) || this;
        _this.loop = loop;
        _this.vRef = videoRef;
        _this.options = options;
        return _this;
    }
    VideoTextureAsset.prototype.load = function (callback) {
        var _this = this;
        // console.log( "Loading", this.url );
        var video = this.vRef ? this.vRef : document.createElement('video');
        video.loop = this.loop;
        video.crossOrigin = 'anonymous';
        video.autoplay = true;
        video.muted = true;
        // video.style.display = 'none';
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkitPlaysInline', 'true');
        // video.style.opacity = '0';
        if (!this.vRef)
            document.body.appendChild(video);
        var finish = function () {
            if (_this.loaded)
                return;
            // To-Do: implement custom video texture with update routine
            _this.content = new three_1.VideoTexture(video);
            if (_this.options)
                TextureUtils_1.TextureUtils.applyTextureOptions(_this.content, _this.options);
            if (callback != null)
                callback();
            _this._loaded = true;
        };
        video.addEventListener('error', function (event) {
            console.warn('Error loading Video Asset');
            console.log(event);
            _this._failed = true;
        });
        video.src = this.url;
        var loaded = function () {
            if (!_this.loaded && video.readyState > 3) {
                return finish();
            }
            requestAnimationFrame(loaded);
        };
        loaded();
    };
    VideoTextureAsset.prototype.destroy = function () {
        this.content.dispose();
        _super.prototype.destroy.call(this);
    };
    return VideoTextureAsset;
}(Asset_1.Asset));
exports.VideoTextureAsset = VideoTextureAsset;
