"use strict";
/**
 * Ported from https://github.com/spite/THREE.EquirectangularToCubemap
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquirectangularToCubemap = void 0;
var three_1 = require("three");
var GEO = new three_1.SphereGeometry(100, 64, 64);
var EquirectangularToCubemap = /** @class */ (function () {
    function EquirectangularToCubemap(renderer, _size) {
        if (_size === void 0) { _size = 256; }
        this.scene = new three_1.Scene();
        this.renderer = renderer;
        this.scene = new three_1.Scene();
        var gl = this.renderer.getContext();
        var maxSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
        var size = Math.min(_size, maxSize / 4);
        this.rt = new three_1.WebGLCubeRenderTarget(size);
        this.camera = new three_1.CubeCamera(1, 100000, this.rt);
        this.material = new three_1.MeshBasicMaterial({
            map: null,
            side: three_1.BackSide
        });
        this.mesh = new three_1.Mesh(GEO, this.material);
        this.scene.add(this.mesh);
    }
    EquirectangularToCubemap.prototype.convert = function (source) {
        this.material.map = source;
        this.camera.update(this.renderer, this.scene);
        return this.texture;
    };
    Object.defineProperty(EquirectangularToCubemap.prototype, "texture", {
        get: function () {
            return this.camera.renderTarget.texture;
        },
        enumerable: false,
        configurable: true
    });
    return EquirectangularToCubemap;
}());
exports.EquirectangularToCubemap = EquirectangularToCubemap;
