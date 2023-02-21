"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSizeViewportRect = exports.getTextureViewportRect = exports.fitRectToViewport = exports.getTextureRatio = exports.getTextureSize = exports.getWindowSize = exports.getRatio = exports.frustumHeight = exports.perspectiveFov = exports.createTextureFromFile = void 0;
var three_1 = require("three");
var RAD2DEG = 180 / Math.PI;
var DEG2RAD = Math.PI / 180;
function createTextureFromFile(file, handler) {
    if (handler === void 0) { handler = null; }
    if (file.type.indexOf("image") === -1)
        console.warn("File is not an Image!");
    var reader = new FileReader();
    var img = new Image();
    reader.addEventListener("load", function () {
        img.onload = function () {
            var tex = new three_1.Texture(img);
            handler(tex);
        };
        img.src = reader.result.toString();
    }, false);
    reader.readAsDataURL(file);
}
exports.createTextureFromFile = createTextureFromFile;
/**
 * Get perspective's FOV at a given depth
 * @param z Perspective's depth (usually camera.position.z)
 * @param viewportHeight Viewport's Height (default: window.innerHeight)
 * @returns FOV in degrees
 */
function perspectiveFov(z, viewportHeight) {
    if (viewportHeight === void 0) { viewportHeight = window.innerHeight; }
    return 2 * Math.atan(viewportHeight * .5 / z) * RAD2DEG;
}
exports.perspectiveFov = perspectiveFov;
/**
 * Get viewport's height at any given depth.
 * @param fov camera's FOV
 * @param depth distance to camera. usually object.z - cam.z
 * @returns height of frustum
 */
function frustumHeight(fov, depth) {
    return 2 * (depth * Math.tan((fov * .5) * DEG2RAD));
}
exports.frustumHeight = frustumHeight;
/**
 * Gets a rect's ratio
 * @param size size of rect. Note: A Vector2 of THREE should work since it implements this type
 * @returns ratio of rect
 */
function getRatio(size) {
    return size.width / size.height;
}
exports.getRatio = getRatio;
/**
 * Gets Window size
 * @returns Window's size
 */
function getWindowSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}
exports.getWindowSize = getWindowSize;
/**
 * Returns Texture Size (width x height)
 * @param texture Input texture
 * @returns texture's Size
 */
function getTextureSize(texture) {
    return texture.image;
}
exports.getTextureSize = getTextureSize;
/**
 * Calculates the ratio of a given texture
 * @param texture imput texture
 * @returns texture's ratio
 */
function getTextureRatio(texture) {
    return getRatio(texture.image);
}
exports.getTextureRatio = getTextureRatio;
/**
 * Returns a scale factor to fit a given rect into viewport.
 * @param rect size of the rect (possible a plane with an image)
 * @param viewport size of viewport (usually window)
 * @returns scale factor you need to apply
 */
function fitRectToViewport(rect, viewport, fit) {
    if (viewport === void 0) { viewport = getWindowSize(); }
    if (fit === void 0) { fit = 'cover'; }
    var vratio = getRatio(viewport);
    var ratio = getRatio(rect);
    if (ratio > vratio) {
        return fit == 'cover' ? viewport.height / rect.height : viewport.width / rect.width;
    }
    return fit == 'cover' ? viewport.width / rect.width : viewport.height / rect.height;
}
exports.fitRectToViewport = fitRectToViewport;
/**
 * Returns a Size (width, height) to fit a texture into
 * a given orthographic viewport.
 * @param texture Input texture
 * @param viewport Viewport's Size
 * @returns Target Size
 */
function getTextureViewportRect(texture, viewport, fit) {
    if (viewport === void 0) { viewport = getWindowSize(); }
    if (fit === void 0) { fit = 'cover'; }
    var scl = fitRectToViewport(texture.image, viewport, fit);
    var tSize = texture.image;
    return {
        width: tSize.width * scl,
        height: tSize.height * scl
    };
}
exports.getTextureViewportRect = getTextureViewportRect;
/**
 * Returns a Size (width, height) to fit a Size into
 * a given orthographic viewport.
 * @param texture Input texture
 * @param viewport Viewport's Size
 * @returns Target Size
 */
function getSizeViewportRect(rect, viewport, fit) {
    if (viewport === void 0) { viewport = getWindowSize(); }
    if (fit === void 0) { fit = 'cover'; }
    var scl = fitRectToViewport(rect, viewport, fit);
    return {
        width: rect.width * scl,
        height: rect.height * scl
    };
}
exports.getSizeViewportRect = getSizeViewportRect;
