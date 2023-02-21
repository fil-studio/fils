"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQuad = exports.getQuad = exports.addTri = exports.getTri = exports.getNormal = exports.getUV = exports.getVertex = exports.getV2FromVA = exports.getV3FromVA = void 0;
function getV3FromVA(geo, id, i) {
    if (i === void 0) { i = 0; }
    var attr = geo.getAttribute(id);
    var a = attr.array;
    if (!attr.data && !attr.data.stride) {
        return {
            x: a[i * 3],
            y: a[i * 3 + 1],
            z: a[i * 3 + 2]
        };
    }
    var stride = attr.data.stride;
    var offset = attr.offset;
    return {
        x: a[i * stride + offset],
        y: a[i * stride + offset + 1],
        z: a[i * stride + offset + 2]
    };
}
exports.getV3FromVA = getV3FromVA;
function getV2FromVA(geo, id, i) {
    if (i === void 0) { i = 0; }
    var attr = geo.getAttribute(id);
    var a = attr.array;
    if (!attr.data && !attr.data.stride) {
        return {
            x: a[i * 2],
            y: a[i * 2 + 1]
        };
    }
    var stride = attr.data.stride;
    var offset = attr.offset;
    return {
        x: a[i * stride + offset],
        y: a[i * stride + offset + 1]
    };
}
exports.getV2FromVA = getV2FromVA;
function getVertex(geo, i) {
    if (i === void 0) { i = 0; }
    return getV3FromVA(geo, 'position', i);
}
exports.getVertex = getVertex;
function getUV(geo, i) {
    if (i === void 0) { i = 0; }
    return getV2FromVA(geo, 'uv', i);
}
exports.getUV = getUV;
function getNormal(geo, i) {
    if (i === void 0) { i = 0; }
    return getV3FromVA(geo, 'normal', i);
}
exports.getNormal = getNormal;
function getTri(p1, p2, width) {
    if (width === void 0) { width = .1; }
    var a = Math.atan2(p2.z - p1.z, p2.x - p1.x);
    var b = a + Math.PI / 2;
    var c = a - Math.PI / 2;
    var hlw = width * .5;
    var p11 = {
        x: p1.x + hlw * Math.sin(b),
        y: p1.y,
        z: p1.z + hlw * Math.cos(b)
    };
    var p12 = {
        x: p1.x + hlw * Math.sin(c),
        y: p1.y,
        z: p1.z + hlw * Math.cos(c)
    };
    return {
        p1: p11,
        p2: p12,
        p3: p2
    };
}
exports.getTri = getTri;
/**
 * This function is used to generate a triangle along two 3D points
 * @param pos Positions array to add vertices to
 * @param index indices array
 * @param p1 first point
 * @param p2 second point
 * @param width Triangle's width
 * @param addP12 wether to add p1 and p1 to the buffer
 */
function addTri(pos, index, p1, p2, width, addP12) {
    if (width === void 0) { width = .1; }
    if (addP12 === void 0) { addP12 = true; }
    var tri = getTri(p1, p2, width);
    if (addP12) {
        pos.push(tri.p1.x, tri.p1.y, tri.p1.z);
        pos.push(tri.p2.x, tri.p2.y, tri.p2.z);
    }
    pos.push(tri.p3.x, tri.p3.y, tri.p3.z);
    var ilen = pos.length / 3;
    index.push(ilen - 3, ilen - 2, ilen - 1);
}
exports.addTri = addTri;
function getQuad(p1, p2, width) {
    if (width === void 0) { width = .1; }
    var a = Math.atan2(p2.z - p1.z, p2.x - p1.x);
    var b = a + Math.PI / 2;
    var c = a - Math.PI / 2;
    var hlw = width * .5;
    var p11 = {
        x: p1.x + hlw * Math.sin(b),
        y: p1.y,
        z: p1.z + hlw * Math.cos(b)
    };
    var p12 = {
        x: p1.x + hlw * Math.sin(c),
        y: p1.y,
        z: p1.z + hlw * Math.cos(c)
    };
    var p21 = {
        x: p2.x + hlw * Math.sin(b),
        y: p2.y,
        z: p2.z + hlw * Math.cos(b)
    };
    var p22 = {
        x: p2.x + hlw * Math.sin(c),
        y: p2.y,
        z: p2.z + hlw * Math.cos(c)
    };
    return {
        p1: p11,
        p2: p12,
        p3: p21,
        p4: p22
    };
}
exports.getQuad = getQuad;
/**
 * This function is used to generate a quad along two 3D points
 * @param pos Positions array to add vertices to
 * @param index indices array
 * @param p1 first point
 * @param p2 second point
 * @param width Quad's width
 * @param addP1 wether to add p11 and p12 to the buffer
 */
function addQuad(pos, index, p1, p2, width, addP1) {
    if (width === void 0) { width = .1; }
    if (addP1 === void 0) { addP1 = true; }
    var quad = getQuad(p1, p2, width);
    if (addP1) {
        pos.push(quad.p1.x, quad.p1.y, quad.p1.z);
        pos.push(quad.p2.x, quad.p2.y, quad.p2.z);
    }
    pos.push(quad.p3.x, quad.p3.y, quad.p3.z);
    pos.push(quad.p4.x, quad.p4.y, quad.p4.z);
    var ilen = pos.length / 3;
    index.push(ilen - 3, ilen - 1, ilen - 2);
    index.push(ilen - 3, ilen - 2, ilen - 4);
}
exports.addQuad = addQuad;
