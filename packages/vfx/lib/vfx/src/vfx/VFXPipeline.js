"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VFXPipeline = void 0;
var three_1 = require("three");
var fbo_frag_1 = require("../glsl/fbo.frag");
var fbo_vert_1 = require("../glsl/fbo.vert");
var TO_SCREEN = new three_1.RawShaderMaterial({
    vertexShader: fbo_vert_1.default,
    fragmentShader: fbo_frag_1.default,
    uniforms: {
        tInput: {
            value: null
        }
    }
});
/**
 * This class replaces the deprecated RenderComposer
 * It is meant to be used with either a WebGLRenderer
 * or a VFXRebderer and create a post-processing stack
 * on top of it.
 */
var VFXPipeline = /** @class */ (function () {
    function VFXPipeline(rnd, params) {
        if (params === void 0) { params = {
            width: window.innerWidth,
            height: window.innerHeight
        }; }
        this.stack = [];
        this.firstPass = false;
        this.renderer = rnd;
        var w = params.width;
        var h = params.height;
        this.width = w;
        this.height = h;
        this.blockScreen = params.neverToScreen === true;
        this.front = new three_1.WebGLRenderTarget(w, h);
        if (rnd['isWebGLRenderer']) {
            // this.front.samples = params.samples || 4;
            this.type = "WebGLRenderer";
        }
        else {
            var r = rnd;
            r.setSize(w, h);
            this.type = "VFXRenderer";
        }
        this.back = this.front.clone();
        this.sceneRT = this.front.clone();
        this.sceneRT.samples = params.samples || 4;
        if (params.useDepth) {
            this.sceneRT.depthTexture = new three_1.DepthTexture(w, h, three_1.FloatType);
            this.sceneRT.depthTexture.format = three_1.DepthFormat;
        }
        this.scene = new three_1.Scene();
        var cw = w / 2;
        var ch = h / 2;
        this.camera = new three_1.OrthographicCamera(-cw, cw, ch, -ch, 0, 100);
        this.camera.position.z = 1;
        this.scene.add(this.camera);
        this.quad = new three_1.Mesh(new three_1.PlaneGeometry(1, 1), null);
        this.quad.scale.set(w, h, 1);
        this.scene.add(this.quad);
    }
    Object.defineProperty(VFXPipeline.prototype, "rendererType", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    VFXPipeline.prototype.addPass = function (pass) {
        this.stack.push(pass);
        pass.setSize(this.width, this.height);
    };
    VFXPipeline.prototype.removePass = function (pass) {
        this.stack.splice(this.stack.indexOf(pass), 1);
    };
    VFXPipeline.prototype.setRenderer = function (rnd) {
        this.renderer = rnd;
        this.type = rnd['isWebGLRenderer'] ? "WebGLRenderer" : "VFXRenderer";
    };
    VFXPipeline.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
        this.front.setSize(width, height);
        this.quad.scale.set(width, height, 1);
        var w = width / 2;
        var h = height / 2;
        this.camera.left = -w;
        this.camera.right = w;
        this.camera.top = h;
        this.camera.bottom = -h;
        this.camera.updateProjectionMatrix();
        for (var _i = 0, _a = this.stack; _i < _a.length; _i++) {
            var pass = _a[_i];
            pass.setSize(width, height);
        }
    };
    VFXPipeline.prototype.swapBuffers = function () {
        var tmp = this.front;
        this.front = this.back;
        this.back = tmp;
    };
    Object.defineProperty(VFXPipeline.prototype, "read", {
        get: function () {
            if (this.firstPass && this.type === "WebGLRenderer") {
                return this.sceneRT;
            }
            return this.front;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VFXPipeline.prototype, "write", {
        get: function () {
            return this.back;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VFXPipeline.prototype, "texture", {
        get: function () {
            return this.front.texture;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VFXPipeline.prototype, "depthTexture", {
        get: function () {
            if (this.type === "WebGLRenderer") {
                return this.sceneRT.depthTexture;
            }
            var rnd = this.renderer;
            return rnd.depthTexture;
        },
        enumerable: false,
        configurable: true
    });
    VFXPipeline.prototype.getRenderer = function () {
        if (this.type === "WebGLRenderer") {
            return this.renderer;
        }
        var rnd = this.renderer;
        return rnd.rnd;
    };
    VFXPipeline.prototype.renderPass = function (pass, toScreen) {
        if (toScreen === void 0) { toScreen = false; }
        var renderer = this.getRenderer();
        pass.render(renderer, this, toScreen && !this.blockScreen ? null : this.write);
        this.swapBuffers();
    };
    VFXPipeline.prototype.render = function (scene, camera) {
        var stack = this.stack.filter(function (obj) { return obj.enabled; });
        if (!stack.length && !this.blockScreen) {
            if (this.type === "WebGLRenderer") {
                var rnd = this.renderer;
                rnd.setRenderTarget(null);
                rnd.render(scene, camera);
            }
            else
                this.renderer.render(scene, camera, null);
        }
        else {
            this.firstPass = true;
            if (this.type === "WebGLRenderer") {
                var rnd = this.renderer;
                rnd.setRenderTarget(this.sceneRT);
                rnd.render(scene, camera);
            }
            else
                this.renderer.render(scene, camera, this.write);
            this.swapBuffers();
            for (var k = 0; k < stack.length; k++) {
                if (stack[k].shader.uniforms['cameraNear']) {
                    stack[k].shader.uniforms['cameraNear'].value = camera.near;
                }
                if (stack[k].shader.uniforms['cameraFar']) {
                    stack[k].shader.uniforms['cameraFar'].value = camera.far;
                }
                this.renderPass(stack[k], k === stack.length - 1);
                this.firstPass = false;
            }
        }
    };
    return VFXPipeline;
}());
exports.VFXPipeline = VFXPipeline;
