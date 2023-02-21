"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VFXRenderer = void 0;
var three_1 = require("three");
var main_1 = require("../main");
/**
 * This class encapsulates MRT renderer with
 * scene + glow pass (output location 1).
 * Typical use when extending threejs materials
 * to get selective glow:
 * 1 - Inject: layout(location = 1) out vec4 gGlow;
 * 2 - gGlow = vec4(totalEmissiveRadiance, 1.0);
 */
/**
 * UPDATE: Removing RGB split from the base renderer.
 * Integrating VFX Renderer with new VFXPipeline
 * When aiming at having a more complex renderer with
 * a single pass, we must provide a custom shader
 * as explained below.
*/
var comp_vert_1 = require("../glsl/vfx/comp.vert");
var comp_frag_1 = require("../glsl/vfx/comp.frag");
var main_2 = require("../../../gfx/src/main");
var COMP = new three_1.RawShaderMaterial({
    vertexShader: comp_vert_1.default,
    fragmentShader: comp_frag_1.default,
    uniforms: {
        tBackground: { value: null },
        tScene: { value: null },
        tGlow: { value: null },
        exposure: { value: 1 },
        gamma: { value: 1 },
        renderBackground: { value: true },
        renderGlow: { value: true },
        renderScene: { value: true }
    },
    transparent: true
});
var GLOW_DEFAULTS = {
    scale: .3,
    radius: 1,
    iterations: 8,
    quality: 0
};
var VFXRenderer = /** @class */ (function () {
    function VFXRenderer(renderer, width, height, settings) {
        this.showBackground = true;
        this.showGlow = true;
        this.showScene = true;
        this.exposure = COMP.uniforms.exposure.value;
        this.gamma = COMP.uniforms.gamma.value;
        this.shader = COMP.clone();
        this.rnd = renderer;
        var w = width * window.devicePixelRatio;
        var h = height * window.devicePixelRatio;
        this.sceneRT = new three_1.WebGLMultipleRenderTargets(w, h, 2, {
            format: three_1.RGBAFormat,
            type: three_1.UnsignedByteType,
            samples: settings && settings.samples ? settings.samples : 4
        });
        this.sceneRT.texture[0].name = 'diffuse';
        this.sceneRT.texture[1].name = 'glow';
        if (settings.useDepth) {
            this.sceneRT['depthTexture'] = new three_1.DepthTexture(w, h, three_1.FloatType);
            this.sceneRT['depthTexture'].format = three_1.DepthFormat;
        }
        var bs = settings && settings.glowSettings ?
            settings.glowSettings : GLOW_DEFAULTS;
        bs.isGlow = true;
        this.glow = new main_1.BlurPass(this.sceneRT.texture[1], w, h, bs);
        if (settings && settings.exposure !== undefined) {
            this.exposure = settings.exposure;
        }
        if (settings && settings.gamma) {
            this.gamma = settings.gamma;
        }
        // custom shader injection
        if (settings.customFargment !== undefined) {
            this.shader.vertexShader = settings.customFargment;
            if (settings.customUniforms !== undefined) {
                var u = settings.customUniforms;
                for (var key in u) {
                    this.shader.uniforms[key] = u[key];
                }
            }
        }
        // BG stuff
        this.bgRT = new three_1.WebGLRenderTarget(width, height);
        this.bgScene = new three_1.Scene();
    }
    Object.defineProperty(VFXRenderer.prototype, "depthTexture", {
        get: function () {
            return this.sceneRT['depthTexture'];
        },
        enumerable: false,
        configurable: true
    });
    VFXRenderer.prototype.setSize = function (width, height) {
        var w = width * window.devicePixelRatio;
        var h = height * window.devicePixelRatio;
        this.sceneRT.setSize(w, h);
        this.bgRT.setSize(w, h);
        this.glow.setSize(w, h);
    };
    VFXRenderer.prototype.updateUniforms = function () {
        var u = this.shader.uniforms;
        u.exposure.value = this.exposure;
        u.gamma.value = this.gamma;
        u.renderBackground.value = this.showBackground;
        u.renderGlow.value = this.showGlow;
        u.renderScene.value = this.showScene;
        u.tScene.value = this.sceneRT.texture[0];
        u.tGlow.value = this.glow.texture;
    };
    VFXRenderer.prototype.render = function (scene, camera, target) {
        if (target === void 0) { target = null; }
        this.rnd.autoClear = true;
        var bg = scene.background;
        scene.background = null;
        if (bg) {
            // render background
            this.rnd.setRenderTarget(this.bgRT);
            this.bgScene.background = bg;
            this.rnd.render(this.bgScene, camera);
            this.rnd.setRenderTarget(null);
            this.shader.uniforms.tBackground.value = this.bgRT.texture;
        }
        else {
            this.shader.uniforms.tBackground.value = null;
        }
        this.rnd.setRenderTarget(this.sceneRT);
        this.rnd.render(scene, camera);
        scene.background = bg;
        // glow
        this.glow.renderInternal(this.rnd);
        this.rnd.setRenderTarget(null);
        // final comp
        this.updateUniforms();
        if (target) {
            main_2.RTUtils.renderToRT(target, this.rnd, this.shader);
        }
        else
            main_2.RTUtils.renderToViewport(this.rnd, this.shader);
        this.rnd.setRenderTarget(null);
    };
    return VFXRenderer;
}());
exports.VFXRenderer = VFXRenderer;
