"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsBundle = void 0;
/**
 * AssetsBundle class
 * This is designed for applications like
 * games where you want to preload a bunch of
 * things in advance. It supports a few formats
 */
var AssetsBundle = /** @class */ (function () {
    function AssetsBundle() {
        this.assets = [];
    }
    AssetsBundle.prototype.add = function (asset) {
        this.assets.push(asset);
    };
    /**
     *
     * @param onLoaded Callback to be called when all assets are loaded
     * @param onProgress Callback for loading progress. Receives float between 0 and 1.
     */
    AssetsBundle.prototype.loadAll = function (onLoaded, onProgress) {
        var _this = this;
        if (onLoaded === void 0) { onLoaded = null; }
        if (onProgress === void 0) { onProgress = null; }
        for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
            var a = _a[_i];
            a.load();
        }
        if (onLoaded != null || onProgress != null) {
            var prog_1 = function () {
                if (_this.loaded) {
                    onProgress(1);
                    return onLoaded();
                }
                if (onProgress != null)
                    onProgress(_this.getProgress());
                window.setTimeout(prog_1, 100 / 3);
            };
            prog_1();
        }
    };
    AssetsBundle.prototype.load = function (i) {
        var asset = this.assets[i];
        if (this.assets.indexOf(asset) === -1)
            return console.warn('Asset out of range!');
        if (asset.loaded)
            return console.warn('Asset already loaded!');
        asset.load();
    };
    AssetsBundle.prototype.getProgress = function () {
        var p = 0;
        var k = 0;
        for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.loaded) {
                k++;
                p += 1 / this.assets.length;
            }
        }
        if (k === this.assets.length)
            p = 1;
        return p;
    };
    AssetsBundle.prototype.get = function (i) {
        if (i < 0 || i > this.assets.length - 1)
            return null;
        return this.assets[i];
    };
    AssetsBundle.prototype.getByURL = function (url) {
        for (var i = 0; i < this.assets.length; i++) {
            if (this.assets[i].url == url)
                return this.assets[i];
        }
        return null;
    };
    AssetsBundle.prototype.getIndexByURL = function (url) {
        for (var i = 0; i < this.assets.length; i++) {
            if (this.assets[i].url == url)
                return i;
        }
        return -1;
    };
    AssetsBundle.prototype.destroy = function () {
        for (var i = 0; i < this.assets.length; i++) {
            this.assets[i].destroy();
        }
        this.assets.splice(0, this.assets.length);
    };
    Object.defineProperty(AssetsBundle.prototype, "failed", {
        get: function () {
            for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a.failed)
                    return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AssetsBundle.prototype, "loaded", {
        get: function () {
            for (var _i = 0, _a = this.assets; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a.failed || !a.loaded)
                    return false;
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return AssetsBundle;
}());
exports.AssetsBundle = AssetsBundle;
