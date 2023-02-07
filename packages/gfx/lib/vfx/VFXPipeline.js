import { DepthFormat, DepthTexture, FloatType, Mesh, OrthographicCamera, PlaneGeometry, RawShaderMaterial, Scene, WebGLRenderTarget } from "three";
import frag from '../glsl/fbo.frag';
import vert from '../glsl/fbo.vert';
const TO_SCREEN = new RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
        tInput: {
            value: null
        }
    }
});
export class VFXPipeline {
    constructor(rnd, params = {
        width: window.innerWidth,
        height: window.innerHeight
    }) {
        this.stack = [];
        this.renderer = rnd;
        const w = params.width;
        const h = params.height;
        this.width = w;
        this.height = h;
        this.blockScreen = params.neverToScreen === true;
        this.front = new WebGLRenderTarget(w, h);
        if (rnd['isWebGLRenderer']) {
            this.front.samples = params.samples || 4;
            this.type = "WebGLRenderer";
        }
        else {
            const r = rnd;
            r.setSize(w, h);
            this.type = "VFXRenderer";
        }
        this.back = this.front.clone();
        if (params.useDepth) {
            this.front.depthTexture = new DepthTexture(w, h, FloatType);
            this.front.depthTexture.format = DepthFormat;
            this.back.depthTexture = new DepthTexture(w, h, FloatType);
            this.back.depthTexture.format = DepthFormat;
        }
        this.scene = new Scene();
        const cw = w / 2;
        const ch = h / 2;
        this.camera = new OrthographicCamera(-cw, cw, ch, -ch, 0, 100);
        this.camera.position.z = 1;
        this.scene.add(this.camera);
        this.quad = new Mesh(new PlaneGeometry(1, 1), null);
        this.quad.scale.set(w, h, 1);
        this.scene.add(this.quad);
    }
    addPass(pass) {
        this.stack.push(pass);
        pass.setSize(this.width, this.height);
    }
    removePass(pass) {
        this.stack.splice(this.stack.indexOf(pass), 1);
    }
    setRenderer(rnd) {
        this.renderer = rnd;
        this.type = rnd['isWebGLRenderer'] ? "WebGLRenderer" : "VFXRenderer";
    }
    setSize(width, height) {
        this.width = width;
        this.height = height;
        this.front.setSize(width, height);
        this.quad.scale.set(width, height, 1);
        const w = width / 2;
        const h = height / 2;
        this.camera.left = -w;
        this.camera.right = w;
        this.camera.top = h;
        this.camera.bottom = -h;
        this.camera.updateProjectionMatrix();
        for (const pass of this.stack)
            pass.setSize(width, height);
    }
    swapBuffers() {
        const tmp = this.front;
        this.front = this.back;
        this.back = tmp;
    }
    get read() {
        return this.front;
    }
    get write() {
        return this.back;
    }
    get texture() {
        return this.front.texture;
    }
    get depthTexture() {
        if (this.type === "WebGLRenderer") {
            return this.read.depthTexture;
        }
        const rnd = this.renderer;
        return rnd.depthTexture;
    }
    getRenderer() {
        if (this.type === "WebGLRenderer") {
            return this.renderer;
        }
        const rnd = this.renderer;
        return rnd.rnd;
    }
    renderPass(pass, toScreen = false) {
        const renderer = this.getRenderer();
        pass.render(renderer, this, toScreen && !this.blockScreen ? null : this.write);
        this.swapBuffers();
    }
    render(scene, camera) {
        const stack = this.stack.filter(obj => obj.enabled);
        if (!stack.length && !this.blockScreen) {
            this.renderer.render(scene, camera, null);
        }
        else {
            if (this.type === "WebGLRenderer") {
                const rnd = this.renderer;
                rnd.setRenderTarget(this.write);
                rnd.render(scene, camera);
            }
            else
                this.renderer.render(scene, camera, this.write);
            this.swapBuffers();
            for (let k = 0; k < stack.length; k++) {
                this.renderPass(stack[k], k === stack.length - 1);
            }
        }
    }
}
