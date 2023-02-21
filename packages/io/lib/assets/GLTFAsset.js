"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLTFAsset = void 0;
var Asset_1 = require("./Asset");
var GLTFLoader_js_1 = require("three/examples/jsm/loaders/GLTFLoader.js");
var loader = new GLTFLoader_js_1.GLTFLoader();
var GLTFAsset = /** @class */ (function (_super) {
    __extends(GLTFAsset, _super);
    function GLTFAsset(url) {
        return _super.call(this, url) || this;
    }
    GLTFAsset.prototype.load = function (callback) {
        var _this = this;
        // console.log("Loading", this.url);
        var url = this.url;
        loader.load(
        // resource URL
        this.url, 
        // called when the resource is loaded
        function (gltf) {
            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene; // THREE.Scene
            gltf.scenes; // Array<THREE.Scene>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object
            //console.log( gltf.scene );
            _this.content = gltf;
            _this._loaded = true;
            if (_this._destroying)
                _this.destroy();
            if (callback != null)
                callback();
        }, 
        // called when loading is in progresses
        function (xhr) {
            // console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        }, 
        // called when loading has errors
        function (error) {
            console.warn('Error loading', url);
            _this._failed = true;
            //if (callback != null) callback();
        });
    };
    GLTFAsset.prototype.destroy = function () {
        this._destroying = true;
        if (!this.loaded)
            return;
        var dispose = function (scene) {
            for (var _i = 0, _a = scene.children; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c.geometry)
                    c.geometry.dispose();
                if (c.material)
                    c.material.dispose();
                dispose(c);
            }
        };
        dispose(this.content.scene);
        this.content.scene = null;
        _super.prototype.destroy.call(this);
    };
    return GLTFAsset;
}(Asset_1.Asset));
exports.GLTFAsset = GLTFAsset;
