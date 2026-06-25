import { DepthFormat, DepthTexture, FloatType, Mesh, OrthographicCamera, PerspectiveCamera, PlaneGeometry, Scene, Texture, TextureDataType, WebGLRenderer, WebGLRenderTarget } from "three";
import { RenderPass } from "./pipeline/RenderPass";

export type VFXPipelineSettings = {
    samples?:number; // useful for MSAA when using WebGLRenderer
    useDepth?:boolean;
    width:number,
    height:number,
    neverToScreen?:boolean;
    /**
     * Data type for the intermediate ping-pong render targets.
     * Defaults to 8-bit (UnsignedByteType). Use HalfFloatType for
     * HDR-quality blur/glow/DoF without banding or clipped highlights.
     */
    type?:TextureDataType;
}

/**
 * This class replaces the deprecated RenderComposer.
 * It wraps a WebGLRenderer and builds a post-processing
 * stack on top of it: the scene is rendered into an offscreen
 * target, then an ordered stack of RenderPasses is applied by
 * ping-ponging two intermediate buffers.
 */
export class VFXPipeline {
    protected sceneRT:WebGLRenderTarget;
    protected front:WebGLRenderTarget;
    protected back:WebGLRenderTarget;
    protected renderer:WebGLRenderer;
    protected stack:RenderPass[] = [];

    protected firstPass:boolean = false;

    scene: Scene;
    quad: Mesh;
    camera: OrthographicCamera;
    width:number;
    height:number;

    protected blockScreen:boolean;

    constructor(rnd:WebGLRenderer, params:VFXPipelineSettings={
        width: window.innerWidth,
        height: window.innerHeight
    }) {
        this.renderer = rnd;
        const w = params.width;
        const h = params.height;

        this.width = w;
        this.height = h;
        this.blockScreen = params.neverToScreen === true;

        this.front = new WebGLRenderTarget(w, h, {
            type: params.type
        });
        this.back = this.front.clone();
        this.sceneRT = this.front.clone();
        this.sceneRT.samples = params.samples || 4;
        if(params.useDepth) {
            this.sceneRT.depthTexture = new DepthTexture(w, h, FloatType);
            this.sceneRT.depthTexture.format = DepthFormat;
        }

        this.scene = new Scene()
        const cw = w/2;
        const ch = h/2;
        this.camera = new OrthographicCamera(-cw,cw,ch,-ch,0,100);
        this.camera.position.z = 1;
        this.scene.add(this.camera);

        this.quad = new Mesh(
            new PlaneGeometry(1,1),
            null
        );
        this.quad.scale.set(w,h,1);
        this.scene.add(this.quad);
    }

    addPass(pass:RenderPass) {
        this.stack.push(pass);
        pass.setSize(this.width, this.height);
    }

    removePass(pass:RenderPass) {
        this.stack.splice(this.stack.indexOf(pass), 1);
    }

    setSize(width:number, height:number) {
        this.width = width;
        this.height = height;
        this.front.setSize(width, height);
        this.back.setSize(width, height);
        this.quad.scale.set(width, height, 1);
        this.sceneRT.setSize(width, height);

        const w = width/2;
        const h = height/2;
        this.camera.left = -w;
        this.camera.right = w;
        this.camera.top = h;
        this.camera.bottom = -h;
        this.camera.updateProjectionMatrix();

        for(const pass of this.stack) pass.setSize(width, height);
    }

    swapBuffers() {
        const tmp = this.front;
        this.front = this.back;
        this.back = tmp;
    }

    get read():WebGLRenderTarget {
        // The first pass reads the freshly rendered scene; every
        // subsequent pass reads the previous pass' output (front).
        return this.firstPass ? this.sceneRT : this.front;
    }

    get write():WebGLRenderTarget {
        return this.back;
    }

    get texture():Texture {
        return this.front.texture;
    }

    get depthTexture():DepthTexture {
        return this.sceneRT.depthTexture;
    }

    protected renderPass(pass:RenderPass, toScreen:boolean=false) {
        pass.render(this.renderer, this, toScreen && !this.blockScreen ? null : this.write);
        this.swapBuffers();
    }

    render(scene:Scene, camera:PerspectiveCamera|OrthographicCamera) {
        const stack = this.stack.filter(obj=>obj.enabled);

        if(!stack.length && !this.blockScreen) {
            this.renderer.setRenderTarget(null);
            this.renderer.render(scene, camera);
            return;
        }

        this.renderer.setRenderTarget(this.sceneRT);
        this.renderer.render(scene, camera);

        this.firstPass = true;
        for(let k=0;k<stack.length;k++) {
            if(stack[k].shader.uniforms['cameraNear']) {
                stack[k].shader.uniforms['cameraNear'].value = camera.near;
            }
            if(stack[k].shader.uniforms['cameraFar']) {
                stack[k].shader.uniforms['cameraFar'].value = camera.far;
            }
            this.renderPass(stack[k], k === stack.length-1);
            this.firstPass = false;
        }
    }

    dispose() {
        this.front.dispose();
        this.back.dispose();
        this.sceneRT.dispose();
        for(const pass of this.stack) pass.dispose();
        this.stack.length = 0;
    }
}
