"use strict";
/*
 * WebGL / THREE Sketch Base Class
 */
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
exports.WebGLSketch = void 0;
var three_1 = require("three");
var Sketch_1 = require("./Sketch");
var WebGLSketch = /** @class */ (function (_super) {
    __extends(WebGLSketch, _super);
    function WebGLSketch(width, height, opts, autoStart) {
        if (width === void 0) { width = window.innerWidth; }
        if (height === void 0) { height = window.innerHeight; }
        if (opts === void 0) { opts = {}; }
        if (autoStart === void 0) { autoStart = false; }
        var _this = _super.call(this) || this;
        _this.vrMode = false;
        _this.size = new three_1.Vector2();
        _this.scene = new three_1.Scene();
        if (opts.ortho) {
            _this.camera = new three_1.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, opts.near != undefined ? opts.near : .1, opts.far != undefined ? opts.far : 1000);
        }
        else {
            _this.camera = new three_1.PerspectiveCamera(opts.fov != undefined ? opts.fov : 35, width / height, opts.near != undefined ? opts.near : .1, opts.far != undefined ? opts.far : 1000);
        }
        _this.scene.add(_this.camera);
        _this.renderer = new three_1.WebGLRenderer({
            antialias: opts.antialias != undefined ? opts.antialias : true,
            alpha: opts.alpha != undefined ? opts.alpha : true
        });
        _this.renderer.setSize(width, height);
        if (autoStart)
            _this.start();
        return _this;
    }
    WebGLSketch.prototype.start = function (customRaf) {
        var _this = this;
        if (customRaf === void 0) { customRaf = null; }
        if (this.started)
            return;
        this.clock = new three_1.Clock(true);
        if (this.vrMode) {
            this._started = true;
            this._raf = customRaf ? customRaf : function () {
                _this.update();
                _this.render();
            };
            this.renderer.setAnimationLoop(this._raf);
            return 1;
        }
        return _super.prototype.start.call(this, customRaf);
    };
    WebGLSketch.prototype.pause = function () {
        if (!this._started)
            return;
        if (this._paused)
            return;
        this._paused = true;
        if (!this.vrMode)
            cancelAnimationFrame(this._rafId);
        else {
            this.renderer.setAnimationLoop(null);
        }
    };
    WebGLSketch.prototype.resume = function () {
        if (!this._started)
            return;
        if (!this._paused)
            return;
        this._paused = false;
        if (!this.vrMode)
            this._rafId = requestAnimationFrame(this._raf);
        else
            this.renderer.setAnimationLoop(this._raf);
    };
    Object.defineProperty(WebGLSketch.prototype, "domElement", {
        get: function () {
            return this.renderer.domElement;
        },
        enumerable: false,
        configurable: true
    });
    WebGLSketch.prototype.resize = function (width, height) {
        if (width === this.size.x && height === this.size.y)
            return;
        this.size.set(width, height);
        this.renderer.setSize(this.size.x, this.size.y);
        if (this.camera.type == "PerspectiveCamera") {
            this.camera.aspect = this.size.x / this.size.y;
        }
        else {
            this.camera.left = -width / 2;
            this.camera.right = width / 2;
            this.camera.top = height / 2;
            this.camera.bottom = -height / 2;
        }
        this.camera.updateProjectionMatrix();
    };
    WebGLSketch.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    return WebGLSketch;
}(Sketch_1.Sketch));
exports.WebGLSketch = WebGLSketch;
