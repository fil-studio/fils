"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEDScreenTile = exports.BASE_GEO = exports.BASE_MAT = exports.SCREEN_MAT = void 0;
var math_1 = require("@fils/math");
var three_1 = require("three");
exports.SCREEN_MAT = new three_1.MeshBasicMaterial({
    map: new three_1.Texture(),
    color: 0xffffff
});
exports.SCREEN_MAT.onBeforeCompile = function (shader) {
    shader.vertexShader = shader.vertexShader.replace('#include <uv2_pars_vertex>', "#include <uv2_pars_vertex>\n        attribute vec2 cuv;\n        varying vec2 vCUv;");
    shader.vertexShader = shader.vertexShader.replace('#include <fog_vertex>', "vCUv = cuv;");
    shader.fragmentShader = shader.fragmentShader.replace('#include <clipping_planes_pars_fragment>', "#include <clipping_planes_pars_fragment>\n        varying vec2 vCUv;");
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', "diffuseColor.rgb = texture2D(map, vCUv).rgb;");
};
var SCREEN_MAT_2 = new three_1.MeshBasicMaterial({
    map: exports.SCREEN_MAT.map,
    color: 0xffffff,
    opacity: 1,
    transparent: true
});
exports.BASE_MAT = new three_1.MeshStandardMaterial({
    color: 0x333333,
    roughness: .6,
    metalness: .4
});
exports.BASE_GEO = new three_1.BoxGeometry(1, 1, 1);
var tmp = new three_1.Vector3();
/**
 * Screen LED tile has a width x height in cm,
 * rows and cols of pixels
 * a pitch (sep between pixels)
 */
var LEDScreenTile = /** @class */ (function () {
    function LEDScreenTile(width, height, pitch, cols, crop) {
        var s = width / cols;
        this.container = new three_1.Object3D();
        var base = new three_1.Mesh(exports.BASE_GEO, exports.BASE_MAT);
        base.scale.set(width, height, .1);
        this.add(base);
        var pos = [];
        var uv = [];
        var x = -width / 2 + s / 2;
        var y = -height / 2 + s / 2;
        var j = 0;
        var h = cols * height / width;
        while (y < height / 2) {
            for (var i = 0; i < cols; i++) {
                pos.push(x, y, 0);
                x += s;
                var u = crop.u + crop.width * i / (cols - 1);
                var v = crop.v + j * crop.height;
                uv.push(u, v);
            }
            x = -width / 2 + s / 2;
            y += s;
            j += 1 / h;
        }
        // Pixels
        // const rs = s;
        var geo = new three_1.PlaneGeometry(s, s);
        this.pixels = new three_1.InstancedMesh(geo, exports.SCREEN_MAT, pos.length / 3);
        var uvatt = new three_1.InstancedBufferAttribute(new Float32Array(uv), 2);
        geo.setAttribute("cuv", uvatt);
        var matrix = new three_1.Matrix4();
        var scale = new three_1.Vector3(1 - pitch, 1 - pitch, 1);
        for (var i = 0; i < pos.length / 3; i++) {
            matrix.identity();
            matrix.scale(scale);
            matrix.setPosition(pos[i * 3], pos[i * 3 + 1], 0);
            this.pixels.setMatrixAt(i, matrix);
        }
        var sgeo = new three_1.PlaneGeometry(width, height);
        var suv = sgeo.attributes.uv;
        var suvA = suv.array;
        suvA[0] = crop.u;
        suvA[1] = crop.v + crop.height;
        suvA[2] = crop.u + crop.width;
        suvA[3] = crop.v + crop.height;
        suvA[4] = crop.u;
        suvA[5] = crop.v;
        suvA[6] = crop.u + crop.width;
        suvA[7] = crop.v;
        suv.needsUpdate = true;
        this.screen = new three_1.Mesh(sgeo, SCREEN_MAT_2.clone());
        this.pixels.position.z = base.scale.z / 2 + .01;
        this.screen.position.copy(this.pixels.position);
        this.add(this.pixels);
        this.add(this.screen);
        this.base = base;
    }
    Object.defineProperty(LEDScreenTile.prototype, "thickness", {
        set: function (val) {
            this.base.scale.z = val;
            this.pixels.position.z = this.base.scale.z / 2 + .01;
            this.screen.position.copy(this.pixels.position);
        },
        enumerable: false,
        configurable: true
    });
    LEDScreenTile.prototype.add = function (o) {
        this.container.add(o);
    };
    LEDScreenTile.prototype.update = function (camera) {
        camera.getWorldPosition(tmp);
        var d = tmp.sub(this.container.position).length();
        var o = math_1.MathUtils.smoothstep(1, 2, d);
        this.pixels.visible = o < 1;
        this.screen.material.opacity = o;
    };
    return LEDScreenTile;
}());
exports.LEDScreenTile = LEDScreenTile;
