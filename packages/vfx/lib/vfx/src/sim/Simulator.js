"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulator = exports.Figures = void 0;
var io_1 = require("@fils/io");
var three_1 = require("three");
var main_1 = require("../main");
var Reflector_js_1 = require("three/examples/jsm/objects/Reflector.js");
var gfx_1 = require("@fils/gfx");
var floor = new three_1.Mesh(new three_1.PlaneGeometry(1, 1), new three_1.MeshPhysicalMaterial({
    color: 0x999999,
    roughness: .3,
    metalness: .1,
    envMapIntensity: .1
}));
var floorShaderRef = {
    value: null
};
var groundMirror = new Reflector_js_1.Reflector(new three_1.PlaneGeometry(1, 1), {
    clipBias: 0.003,
    textureWidth: window.innerWidth,
    textureHeight: window.innerHeight,
    color: 0x333333
});
var RT_SCALE = .25;
var bundle = new io_1.AssetsBundle();
bundle.add(new io_1.TextureAsset('https://assets.eduprats.com/textures/sim/env/hdri.jpg'));
bundle.add(new io_1.TextureAsset('https://assets.eduprats.com/textures/sim/floor/noise2.png'));
exports.Figures = {
    boy: new io_1.GLTFAsset('https://assets.eduprats.com/models/sim/figures/boy.glb'),
    girl: new io_1.GLTFAsset('https://assets.eduprats.com/models/sim/figures/girl.glb'),
    female: new io_1.GLTFAsset('https://assets.eduprats.com/models/sim/figures/female.glb'),
    male: new io_1.GLTFAsset('https://assets.eduprats.com/models/sim/figures/male.glb'),
    male2: new io_1.GLTFAsset('https://assets.eduprats.com/models/sim/figures/male2.glb')
};
var BLUR_DEF = {
    scale: .25,
    radius: 1,
    iterations: 4,
    quality: 2
};
/**
 * Simulator is a scene used for rendering simultions
 * of installations done in Canvas/WebGL.
 * It contains a reflective floor, shortcuts to
 * staring figures and Screen Utils for simulating
 * screen panels.
 */
var Simulator = /** @class */ (function () {
    function Simulator(renderer) {
        var _this = this;
        this.isLoading = false;
        this.scene = new three_1.Scene();
        this.setFloorSize(20);
        var _size = new three_1.Vector2();
        renderer.getSize(_size);
        this.camera = new three_1.PerspectiveCamera(35, _size.width / _size.height, .01, 1000);
        this.scene.add(this.camera);
        this.camera.position.z = 12;
        this.camera.position.y = 8;
        this.rt = gfx_1.RTUtils.getRenderTarget(_size.width * RT_SCALE, _size.height * RT_SCALE, {}, true);
        this.blur = new main_1.BlurPass(groundMirror.getRenderTarget().texture, _size.width, _size.height, BLUR_DEF);
        floor.rotateX(-Math.PI / 2);
        groundMirror.rotateX(-Math.PI / 2);
        this.scene.add(floor);
        this.scene.add(groundMirror);
        floor.material.onBeforeCompile = function (shader) {
            var fShader = three_1.ShaderLib.physical.fragmentShader;
            var frag = fShader.replace('uniform float opacity;', 'uniform float opacity;uniform sampler2D mirror;uniform vec2 resolution;');
            frag = frag.replace('vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;', "vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n            // add mirror\n            vec2 _uv = gl_FragCoord.xy / resolution;\n            _uv.x = 1.0 - _uv.x;\n            totalDiffuse += (roughnessFactor) * texture2D(mirror, _uv).rgb;");
            shader.uniforms.mirror = { value: _this.blur.texture };
            shader.uniforms.resolution = { value: new three_1.Vector2(_size.width, _size.height) };
            shader.fragmentShader = frag;
            floorShaderRef.value = shader;
        };
    }
    Simulator.prototype.load = function (renderer, onLoaded, onProgress) {
        var _this = this;
        if (onLoaded === void 0) { onLoaded = null; }
        if (onProgress === void 0) { onProgress = null; }
        if (this.isLoading)
            return console.warn('Simulator is already loading assets!');
        this.isLoading = true;
        bundle.loadAll(function () {
            floor.material.roughnessMap = bundle.assets[1].content;
            floor.material.map = bundle.assets[1].content;
            var env = (0, gfx_1.getHDRI)(bundle.assets[0].content, renderer, {
                toneMapping: three_1.ACESFilmicToneMapping,
                exposure: 1
            });
            // this.background = env;
            _this.scene.environment = env;
            if (onLoaded != null)
                onLoaded();
        }, onProgress);
    };
    Simulator.prototype.setSize = function (width, height) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.rt.setSize(width * RT_SCALE, height * RT_SCALE);
        this.blur.setSize(width, height);
        if (floorShaderRef.value) {
            floorShaderRef.value.uniforms.resolution.value.set(width, height);
        }
    };
    Object.defineProperty(Simulator.prototype, "floor", {
        get: function () {
            return floor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Simulator.prototype, "bundle", {
        get: function () {
            return bundle;
        },
        enumerable: false,
        configurable: true
    });
    Simulator.prototype.setFloorSize = function (s) {
        floor.scale.setScalar(s);
        groundMirror.scale.setScalar(s);
    };
    Simulator.prototype.render = function (renderer) {
        renderer.autoClear = true;
        renderer.setRenderTarget(this.rt);
        floor.visible = false;
        groundMirror.visible = true;
        renderer.render(this.scene, this.camera);
        this.blur.renderInternal(renderer);
        renderer.setRenderTarget(null);
        floor.visible = true;
        groundMirror.visible = false;
        renderer.autoClear = true;
        renderer.render(this.scene, this.camera);
    };
    return Simulator;
}());
exports.Simulator = Simulator;
