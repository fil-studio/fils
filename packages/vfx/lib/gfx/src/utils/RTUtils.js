"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTUtils = void 0;
var three_1 = require("three");
var RTHelper_1 = require("./RTHelper");
var RTUtils = /** @class */ (function () {
    function RTUtils() {
    }
    RTUtils.getRenderTarget = function (width, height, settings, depth) {
        if (settings === void 0) { settings = {}; }
        if (depth === void 0) { depth = false; }
        var target = new three_1.WebGLRenderTarget(width, height, {
            minFilter: settings.minFilter !== undefined ? settings.minFilter : three_1.LinearFilter,
            magFilter: settings.magFilter !== undefined ? settings.magFilter : three_1.LinearFilter,
            wrapS: settings.wrapS !== undefined ? settings.wrapS : three_1.ClampToEdgeWrapping,
            wrapT: settings.wrapT !== undefined ? settings.wrapT : three_1.ClampToEdgeWrapping,
            format: settings.format ? settings.format : three_1.RGBAFormat,
            type: settings.type !== undefined ? settings.type : three_1.UnsignedByteType,
            stencilBuffer: settings.stencilBuffer !== undefined ? settings.stencilBuffer : true
        });
        if (depth) {
            target.depthTexture = new three_1.DepthTexture(width, height, three_1.UnsignedShortType);
        }
        return target;
    };
    RTUtils.drawRT = function (rt, renderer, x, y, width, height, opacity) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (opacity === void 0) { opacity = 1; }
        RTUtils.helper.render(rt, renderer, x, y, width, height, opacity);
    };
    RTUtils.drawMRT = function (mrt, renderer, index, x, y, width, height) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        RTUtils.helper.renderMRT(mrt, renderer, index, x, y, width, height);
    };
    RTUtils.drawTexture = function (texture, renderer, x, y, width, height, opacity) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (opacity === void 0) { opacity = 1; }
        RTUtils.helper.drawTexture(texture, renderer, x, y, width, height, opacity);
    };
    RTUtils.renderToRT = function (rt, renderer, material) {
        RTUtils.helper.renderToTarget(rt, renderer, material);
    };
    RTUtils.renderToViewport = function (renderer, material) {
        RTUtils.helper.renderToViewport(renderer, material);
    };
    RTUtils.helper = new RTHelper_1.RTHelper();
    return RTUtils;
}());
exports.RTUtils = RTUtils;
