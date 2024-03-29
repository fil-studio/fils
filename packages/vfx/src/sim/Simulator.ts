import { AssetsBundle, GLTFAsset, TextureAsset } from '@fils/io';
import { ACESFilmicToneMapping, Mesh, MeshPhysicalMaterial, PerspectiveCamera, PlaneGeometry, Scene, ShaderLib, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';
import { BlurPass } from '../main';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import { BlurSettings } from '../vfx/pipeline/BlurPass';
import { getHDRI, RTUtils } from '@fils/gfx';

const floor = new Mesh(
	new PlaneGeometry(1, 1),
	new MeshPhysicalMaterial({
		color: 0x999999,
		roughness: .3,
		metalness: .1,
		envMapIntensity: .1
	})
);

const floorShaderRef = {
    value: null
}

const groundMirror = new Reflector(new PlaneGeometry(1, 1), {
	clipBias: 0.003,
	textureWidth: window.innerWidth,
	textureHeight: window.innerHeight,
	color: 0x333333
} );

const RT_SCALE = .25;

const bundle = new AssetsBundle();
bundle.add(new TextureAsset('https://assets.eduprats.com/textures/sim/env/hdri.jpg'));
bundle.add(new TextureAsset('https://assets.eduprats.com/textures/sim/floor/noise2.png'));

export const Figures = {
    boy: new GLTFAsset('https://assets.eduprats.com/models/sim/figures/boy.glb'),
    girl: new GLTFAsset('https://assets.eduprats.com/models/sim/figures/girl.glb'),
    female: new GLTFAsset('https://assets.eduprats.com/models/sim/figures/female.glb'),
    male: new GLTFAsset('https://assets.eduprats.com/models/sim/figures/male.glb'),
    male2: new GLTFAsset('https://assets.eduprats.com/models/sim/figures/male2.glb')
}

const BLUR_DEF:BlurSettings = {
    scale: .25,
    radius: 1,
    iterations: 4,
    quality: 2
}

/**
 * Simulator is a scene used for rendering simultions
 * of installations done in Canvas/WebGL.
 * It contains a reflective floor, shortcuts to
 * staring figures and Screen Utils for simulating
 * screen panels.
 */

export class Simulator {
    scene:Scene;
    protected blur:BlurPass;
    protected rt:WebGLRenderTarget;
    private isLoading:boolean = false;
    camera:PerspectiveCamera;

    constructor(renderer:WebGLRenderer) {
        this.scene = new Scene();

        this.setFloorSize(20);

        const _size = new Vector2();
        renderer.getSize(_size);

        this.camera = new PerspectiveCamera(35, _size.width/_size.height, .01, 1000);
        this.scene.add(this.camera);
        this.camera.position.z = 12;
        this.camera.position.y = 8;

        this.rt = RTUtils.getRenderTarget(_size.width * RT_SCALE, _size.height * RT_SCALE, {}, true);

        this.blur = new BlurPass(
            groundMirror.getRenderTarget().texture,
            _size.width,
            _size.height,
            BLUR_DEF
        );

        floor.rotateX( - Math.PI / 2 );
        groundMirror.rotateX( - Math.PI / 2 );
        this.scene.add( floor );
        this.scene.add( groundMirror );

        floor.material.onBeforeCompile = (shader) => {
            const fShader = ShaderLib.physical.fragmentShader;
            let frag = fShader.replace('uniform float opacity;', 'uniform float opacity;uniform sampler2D mirror;uniform vec2 resolution;');
            frag = frag.replace('vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;', `vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
            // add mirror
            vec2 _uv = gl_FragCoord.xy / resolution;
            _uv.x = 1.0 - _uv.x;
            totalDiffuse += (roughnessFactor) * texture2D(mirror, _uv).rgb;`);
            shader.uniforms.mirror = { value: this.blur.texture };
            shader.uniforms.resolution = { value: new Vector2(_size.width, _size.height) };
            shader.fragmentShader = frag;

            floorShaderRef.value = shader;
        };
    }

    load(renderer:WebGLRenderer, onLoaded:Function=null, onProgress:Function=null) {
        if(this.isLoading) return console.warn('Simulator is already loading assets!');
        this.isLoading = true;
        bundle.loadAll(()=> {
            floor.material.roughnessMap = bundle.assets[1].content;
            floor.material.map = bundle.assets[1].content;
            const env = getHDRI(bundle.assets[0].content, renderer, {
                toneMapping: ACESFilmicToneMapping,
                exposure: 1
            });

            // this.background = env;
            this.scene.environment = env;

            if(onLoaded!= null) onLoaded();
        }, onProgress);
    }

    setSize(width:number, height:number) {
        this.camera.aspect = width/height;
        this.camera.updateProjectionMatrix();
        this.rt.setSize(width * RT_SCALE, height * RT_SCALE);
        this.blur.setSize(width, height);

        if(floorShaderRef.value) {
            floorShaderRef.value.uniforms.resolution.value.set(width, height);
        }
    }

    get floor():Mesh {
        return floor;
    }

    get bundle(): AssetsBundle {
        return bundle;
    }

    setFloorSize(s:number) {
        floor.scale.setScalar(s);
        groundMirror.scale.setScalar(s);
    }

    render(renderer:WebGLRenderer) {
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
    }
}