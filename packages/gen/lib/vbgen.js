"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vba2InstancedMesh = exports.vba2BufferGeometry = exports.vb2TypedArray = exports.ArrayTypes = void 0;
var three_1 = require("three");
var ArrayTypes;
(function (ArrayTypes) {
    ArrayTypes[ArrayTypes["FLOAT32"] = 0] = "FLOAT32";
    ArrayTypes[ArrayTypes["UINT8"] = 1] = "UINT8";
    ArrayTypes[ArrayTypes["UINT16"] = 2] = "UINT16";
    ArrayTypes[ArrayTypes["UINT32"] = 3] = "UINT32";
})(ArrayTypes = exports.ArrayTypes || (exports.ArrayTypes = {}));
function vb2TypedArray(vb) {
    if (vb.type == ArrayTypes.UINT8)
        return new Uint8Array(vb.array);
    if (vb.type == ArrayTypes.UINT16)
        return new Uint16Array(vb.array);
    if (vb.type == ArrayTypes.UINT32)
        return new Uint32Array(vb.array);
    return new Float32Array(vb.array); // default
}
exports.vb2TypedArray = vb2TypedArray;
function vba2BufferGeometry(vba) {
    var geo = new three_1.BufferGeometry();
    for (var _i = 0, _a = vba.attributes; _i < _a.length; _i++) {
        var vb = _a[_i];
        var attr = new three_1.BufferAttribute(vb2TypedArray(vb), vb.size);
        geo.setAttribute(vb.id, attr);
    }
    if (vba.index != null)
        geo.setIndex(vba.index);
    if (vba.instancedAttributes) {
        for (var _b = 0, _c = vba.attributes; _b < _c.length; _b++) {
            var vb = _c[_b];
            var attr = new three_1.InstancedBufferAttribute(vb2TypedArray(vb), vb.size);
            geo.setAttribute(vb.id, attr);
        }
    }
    return geo;
}
exports.vba2BufferGeometry = vba2BufferGeometry;
function vba2InstancedMesh(vba, mat) {
    if (!vba.instances || vba.instances.length === 0) {
        console.warn('There is no instance information!');
        return null;
    }
    var geo = vba2BufferGeometry(vba);
    var count = vba.instances.length;
    var im = new three_1.InstancedMesh(geo, mat, count);
    var dummy = new three_1.Object3D();
    var tmp = new three_1.Vector3();
    var tmp2 = new three_1.Vector3();
    for (var i = 0; i < count; i++) {
        var f = vba.instances[i];
        dummy.matrix.identity();
        dummy.position.set(f.v.x, f.v.y, f.v.z);
        tmp2.set(f.n.x, f.n.y, f.n.z);
        tmp.copy(dummy.position).add(tmp2);
        dummy.lookAt(tmp);
        im.setMatrixAt(i, dummy.matrix);
    }
    return im;
}
exports.vba2InstancedMesh = vba2InstancedMesh;
