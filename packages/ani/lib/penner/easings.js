"use strict";
/**
 * Robert Penner's Easing Functions: http://robertpenner.com/easing/
 * Implementation in TypeScript ported from GLSL implementation here:
 * https://github.com/glslify/glsl-easings
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sineOut = exports.sineIn = exports.sineInOut = exports.qinticOut = exports.qinticIn = exports.qinticInOut = exports.quarticOut = exports.quarticIn = exports.quarticInOut = exports.quadraticOut = exports.quadraticIn = exports.quadraticInOut = exports.exponentialOut = exports.exponentialIn = exports.exponentialInOut = exports.elasticOut = exports.elasticIn = exports.elasticInOut = exports.cubicOut = exports.cubicIn = exports.cubicInOut = exports.circularOut = exports.circularIn = exports.circularInOut = exports.bounceInOut = exports.bounceIn = exports.bounceOut = exports.backInOut = exports.backOut = exports.backIn = exports.linear = void 0;
var PI = Math.PI;
var HALF_PI = PI / 2;
function linear(t) {
    return t;
}
exports.linear = linear;
function backIn(t) {
    return Math.pow(t, 3) - t * Math.sin(t * PI);
}
exports.backIn = backIn;
function backOut(t) {
    var f = 1 - t;
    return 1 - (Math.pow(f, 3) - f * Math.sin(f * PI));
}
exports.backOut = backOut;
function backInOut(t) {
    var f = t < 0.5 ? 2 * t : 1 - (2 * t - 1);
    var g = Math.pow(f, 3) - f * Math.sin(f * PI);
    return t < 0.5 ? 0.5 * g : 0.5 * (1 - g) + 0.5;
}
exports.backInOut = backInOut;
function bounceOut(t) {
    var a = 4 / 11;
    var b = 8 / 11;
    var c = 9 / 10;
    var ca = 4356 / 361;
    var cb = 35442 / 1805;
    var cc = 16061 / 1805;
    var t2 = t * t;
    return t < a ? 7.5625 * t2
        : t < b ? 975 * t2 - 9.9 * t + 3.4
            : t < c ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
}
exports.bounceOut = bounceOut;
function bounceIn(t) {
    return 1 - bounceOut(1 - t);
}
exports.bounceIn = bounceIn;
function bounceInOut(t) {
    return t < 0.5 ? 0.5 * (1 - bounceOut(1 - t * 2))
        : 0.5 * bounceOut(t * 2 - 1) + 0.5;
}
exports.bounceInOut = bounceInOut;
function circularInOut(t) {
    return t < 0.5 ? 0.5 * (1 - Math.sqrt(1 - 4 * t * t))
        : 0.5 * (Math.sqrt((3 - 2 * t) * (2 * t - 1)) + 1);
}
exports.circularInOut = circularInOut;
function circularIn(t) {
    return 1 - Math.sqrt(1 - t * t);
}
exports.circularIn = circularIn;
function circularOut(t) {
    return Math.sqrt((2 - t) * t);
}
exports.circularOut = circularOut;
function cubicInOut(t) {
    return t < 0.5 ? 4 * t * t * t
        : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
exports.cubicInOut = cubicInOut;
function cubicIn(t) {
    return t * t * t;
}
exports.cubicIn = cubicIn;
function cubicOut(t) {
    var f = t - 1;
    return f * f * f + 1;
}
exports.cubicOut = cubicOut;
function elasticInOut(t) {
    return t < 0.5 ? 0.5 * Math.sin(+13 * HALF_PI * 2 * t) * Math.pow(2, 10 * (2 * t - 1))
        : 0.5 * Math.sin(-13 * HALF_PI * ((2 * t - 1) + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
}
exports.elasticInOut = elasticInOut;
function elasticIn(t) {
    return Math.sin(13 * t * HALF_PI) * Math.pow(2, 10 * (t - 1));
}
exports.elasticIn = elasticIn;
function elasticOut(t) {
    return Math.sin(-13 * (t + 1) * HALF_PI) * Math.pow(2, -10 * t) + 1;
}
exports.elasticOut = elasticOut;
function exponentialInOut(t) {
    return t == 0 || t == 1 ? t : t < 0.5
        ? +0.5 * Math.pow(2, (20 * t) - 10)
        : -0.5 * Math.pow(2, 10 - (t * 20)) + 1;
}
exports.exponentialInOut = exponentialInOut;
function exponentialIn(t) {
    return t == 0 ? t : Math.pow(2, 10 * (t - 1));
}
exports.exponentialIn = exponentialIn;
function exponentialOut(t) {
    return t == 1 ? t : 1 - Math.pow(2, -10 * t);
}
exports.exponentialOut = exponentialOut;
function quadraticInOut(t) {
    var p = 2 * t * t;
    return t < 0.5 ? p : -p + (4 * t) - 1;
}
exports.quadraticInOut = quadraticInOut;
function quadraticIn(t) {
    return t * t;
}
exports.quadraticIn = quadraticIn;
function quadraticOut(t) {
    return -t * (t - 2);
}
exports.quadraticOut = quadraticOut;
function quarticInOut(t) {
    return t < 0.5
        ? +8 * Math.pow(t, 4)
        : -8 * Math.pow(t - 1, 4) + 1;
}
exports.quarticInOut = quarticInOut;
function quarticIn(t) {
    return Math.pow(t, 4);
}
exports.quarticIn = quarticIn;
function quarticOut(t) {
    return Math.pow(t - 1, 3) * (1 - t) + 1;
}
exports.quarticOut = quarticOut;
function qinticInOut(t) {
    return t < 0.5
        ? +16 * Math.pow(t, 5)
        : -0.5 * Math.pow(2 * t - 2, 5) + 1;
}
exports.qinticInOut = qinticInOut;
function qinticIn(t) {
    return Math.pow(t, 5);
}
exports.qinticIn = qinticIn;
function qinticOut(t) {
    return 1 - (Math.pow(t - 1, 5));
}
exports.qinticOut = qinticOut;
function sineInOut(t) {
    return -0.5 * (Math.cos(PI * t) - 1);
}
exports.sineInOut = sineInOut;
function sineIn(t) {
    return Math.sin((t - 1) * HALF_PI) + 1;
}
exports.sineIn = sineIn;
function sineOut(t) {
    return Math.sin(t * HALF_PI);
}
exports.sineOut = sineOut;
