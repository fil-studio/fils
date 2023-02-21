"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFOnTriangle = exports.randomPointOnTriangle = exports.uvInTriangle = exports.pointInTriangle = void 0;
var math_1 = require("@fils/math");
var utils_1 = require("./utils");
function pointInTriangle(p1, p2, p3, a, b) {
    if (a + b > 1) {
        a = 1 - a;
        b = 1 - b;
    }
    var c = 1 - a - b;
    var pX = (a * p1.x) + (b * p2.x) + (c * p3.x);
    var pY = (a * p1.y) + (b * p2.y) + (c * p3.y);
    var pZ = (a * p1.z) + (b * p2.z) + (c * p3.z);
    return {
        x: pX,
        y: pY,
        z: pZ
    };
}
exports.pointInTriangle = pointInTriangle;
function uvInTriangle(p1, p2, p3, a, b) {
    if (a + b > 1) {
        a = 1 - a;
        b = 1 - b;
    }
    var c = 1 - a - b;
    var pX = (a * p1.x) + (b * p2.x) + (c * p3.x);
    var pY = (a * p1.y) + (b * p2.y) + (c * p3.y);
    return {
        x: pX,
        y: pY
    };
}
exports.uvInTriangle = uvInTriangle;
function randomPointOnTriangle(geo, i1, i2, i3) {
    var p1 = (0, utils_1.getVertex)(geo, i1);
    var p2 = (0, utils_1.getVertex)(geo, i2);
    var p3 = (0, utils_1.getVertex)(geo, i3);
    var a = math_1.Random.randf(0, 1);
    var b = math_1.Random.randf(0, 1);
    return pointInTriangle(p1, p2, p3, a, b);
}
exports.randomPointOnTriangle = randomPointOnTriangle;
function randomFOnTriangle(geo, i1, i2, i3, withUV) {
    if (withUV === void 0) { withUV = false; }
    var p1 = (0, utils_1.getVertex)(geo, i1);
    var p2 = (0, utils_1.getVertex)(geo, i2);
    var p3 = (0, utils_1.getVertex)(geo, i3);
    var n1 = (0, utils_1.getNormal)(geo, i1);
    var n2 = (0, utils_1.getNormal)(geo, i2);
    var n3 = (0, utils_1.getNormal)(geo, i3);
    var a = math_1.Random.randf(0, 1);
    var b = math_1.Random.randf(0, 1);
    if (withUV) {
        var uv1 = (0, utils_1.getUV)(geo, i1);
        var uv2 = (0, utils_1.getUV)(geo, i2);
        var uv3 = (0, utils_1.getUV)(geo, i3);
        return {
            v: pointInTriangle(p1, p2, p3, a, b),
            n: pointInTriangle(n1, n2, n3, a, b),
            uv: uvInTriangle(uv1, uv2, uv3, a, b)
        };
    }
    return {
        v: pointInTriangle(p1, p2, p3, a, b),
        n: pointInTriangle(n1, n2, n3, a, b)
    };
}
exports.randomFOnTriangle = randomFOnTriangle;
