"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextureUtils = exports.TextureOptions = void 0;
var three_1 = require("three");
var TextureOptions = /** @class */ (function () {
    function TextureOptions() {
    }
    return TextureOptions;
}());
exports.TextureOptions = TextureOptions;
var TextureUtils = /** @class */ (function () {
    function TextureUtils() {
    }
    TextureUtils.applyTextureOptions = function (tex, opts) {
        var d = TextureUtils.TextureDefaults;
        tex.format = opts.format ? opts.format : d.format;
        tex.wrapS = opts.wrapS ? opts.wrapS : d.wrapS;
        tex.wrapT = opts.wrapT ? opts.wrapT : d.wrapT;
        tex.repeat = opts.repeat ? opts.repeat : d.repeat;
        tex.magFilter = opts.magFilter ? opts.magFilter : d.magFilter;
        tex.minFilter = opts.minFilter ? opts.minFilter : d.minFilter;
        tex.flipY = opts.flipY != undefined ? opts.flipY : d.flipY;
    };
    TextureUtils.TextureDefaults = {
        format: three_1.RGBAFormat,
        wrapS: three_1.ClampToEdgeWrapping,
        wrapT: three_1.ClampToEdgeWrapping,
        repeat: new three_1.Vector2(1, 1),
        magFilter: three_1.LinearFilter,
        minFilter: three_1.LinearMipmapLinearFilter,
        flipY: true
    };
    return TextureUtils;
}());
exports.TextureUtils = TextureUtils;
