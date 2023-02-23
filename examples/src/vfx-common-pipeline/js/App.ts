import { DirectionalLight, EquirectangularReflectionMapping, MeshBasicMaterial, PlaneGeometry, RawShaderMaterial, Raycaster, ShaderChunk, TextureLoader, Vector3, WebGLRenderTarget } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { RTUtils, WebGLSketch } from '@fils/gfx';

// Todo arreglar aquests imports per build
import vert from '../../../../packages/vfx/lib/glsl/fbo.vert';
import frag from '../../../../packages/vfx/lib/glsl/vfx/draw-depth.frag';

import { CommonPipelineSettings, CommonVFXPipeline, VFXRenderer } from '@fils/vfx';
import { Mesh } from 'three';
import { initMaterial, vfxShaders } from '@fils/vfx';

const debugSettings = {
	showTextures: false
}

frag
const SHOW_DEPTH = new RawShaderMaterial({
	vertexShader: vert,
	fragmentShader: frag,
	uniforms: {
		tDepth: {value: null},
		cameraNear: {value: 0},
		cameraFar: {value: 0}
	}
});

const gltfLoader = new GLTFLoader();
const tLoader = new TextureLoader();

const raycaster = new Raycaster();
const tmp = new Vector3();

/**
 * CommonVFXPipeline wraps a common post-processing stack
 * without needing to include common passes manually
 *
 * VFXRenderer works best with black clear color and 0 clear alpha
 * if we want to render color + glow passes in one MRT.
 * We recommend using a Scene background and leave renderer with
 * clear color 0x000000, 0 and set the background to
 * the scene as is done in this example. VFXRenderer will take
 * care of compositing things correctly.
 */

export class App extends WebGLSketch {
	customRenderer:CommonVFXPipeline;
	rnd:VFXRenderer;
	background:WebGLRenderTarget;
	depthRT:WebGLRenderTarget;

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 50,
			fov: 60
		});
		document.body.appendChild(this.domElement);
		this.domElement.className = 'view';
		ShaderChunk['dithering'] = vfxShaders.dithering;

		console.log('VFX Common Pipeline');

		this.background = new WebGLRenderTarget(1024, 512);
		this.renderer.setClearColor(0xcccccc, 1);
		this.renderer.setRenderTarget(this.background);
		this.renderer.render(this.scene, this.camera);
		this.renderer.setRenderTarget(null);
		this.renderer.setClearColor(0x000000, 0);

		gltfLoader.load("/assets/scenes/test-scene.glb", (gltf) => {
			const scene = gltf.scene;
			const map = tLoader.load("/assets/textures/diffuse.jpg");
			map.flipY = false;
			const mat = initMaterial(
				new MeshBasicMaterial({
					color: 0xffffff,
					map: map
				})
			)
			scene.traverse((child) => {
				if(child['isMesh']) {
					const mesh = child as Mesh;
					mesh.material = mat;
				}
			});
			this.scene.add(scene);
		});

		window['camera'] = this.camera;

		this.background.texture.mapping = EquirectangularReflectionMapping;
		this.scene.background = this.background.texture;

		const L = new DirectionalLight(0xffffff, .35);
		L.position.set(-1, 1, 1);
		this.scene.add(L);

		this.depthRT = new WebGLRenderTarget(256, 256);

		/* const dummy = new Mesh(
			new PlaneGeometry(1,1),
			initMaterial(
				new MeshBasicMaterial({
					color: 0xff0000
				})
			)
		)

		dummy.position.y = 2;
		dummy.position.z = -1;
		this.scene.add(dummy); */

		window.addEventListener('resize', (event) => {
			this.resize(window.innerWidth, window.innerHeight);
		});

		this.camera.position.set(0.5527206749354661, 1.35, 1.263465532006498);
		SHOW_DEPTH.uniforms.cameraNear.value = this.camera.near;
		SHOW_DEPTH.uniforms.cameraFar.value = this.camera.far;

		const rnd = new VFXRenderer(
			this.renderer,
			window.innerWidth,
			window.innerHeight,
			{
				exposure: 0,
				gamma: 1.2,
				samples: 4,
				glowSettings: {
					scale: .5,
					radius: 2,
					iterations: 8,
					quality: 2
				},
				useDepth: true
			}
		);

		this.rnd = rnd;

		const settings:CommonPipelineSettings = {
			final: {
				enableCA: true,
				enableDithering: false,
				enableVignette: true,
				vignette: .25,
				dither: 5,
				caAmount: .0015
			},
			dof: {
				focalDistance: 0.99,
				aperture: 1,
				blur: {
					iterations: 32,
					quality: 2,
					scale: 1,
					radius: 1
				}
			},
			enableFXAA: false
		}

		// this.customRenderer = new CommonVFXPipeline(this.renderer);
		this.customRenderer = new CommonVFXPipeline(rnd,{
			width: window.innerWidth,
			height: window.innerHeight,
			useDepth: true,
			samples: 1
		}, settings);

		const stats = Stats();
		document.body.appendChild(stats.domElement);

		const controls = new OrbitControls(this.camera, this.domElement);
		controls.target.set(0.3,1.5,0);

		const customRaf = () => {
			requestAnimationFrame(customRaf);
			stats.begin();
			this.update();
			controls.update();
			this.render();
			stats.end();
		}

		// GUI
		const gui = new GUI();

		const r = {
			type: 1
		}

		gui.add(r, "type", {
			"WebGLRenderer": 0,
			"VFXRenderer": 1
		}).name("Renderer").onFinishChange(()=>{
			this.customRenderer.setRenderer(
				r.type === 0 ? this.renderer : rnd
			)
		});
		gui.add(debugSettings, 'showTextures');

		const dof = this.customRenderer.dof;
		const fxaa = this.customRenderer.fxaa;
		const final = this.customRenderer.final;

		const f2 = gui.addFolder("Depth of Field").close();
		f2.add(dof, 'enabled');
		f2.add(dof.shader.uniforms.debug, 'value').name('Debug');
		f2.add(dof.shader.uniforms.focalDistance, 'value', 0.1, 5).name("Focal Distance");
		f2.add(dof.shader.uniforms.aperture, 'value', 0.5, 5).name("Aperture");

		const f21 = f2.addFolder("Blur Settings");
		f21.add(dof.blurPass, 'iterations', 1, 32, 1);
		f21.add(dof.blurPass, 'radius', .1, 5);

		const f3 = gui.addFolder("FXAA").close();
		f3.add(fxaa, 'enabled');

		const f1 = gui.addFolder("Final Pass").close();
		f1.add(final, 'enabled');
		// f1.add(final.shader.uniforms.enableLut, 'value').name('LUT');
		f1.add(final.shader.uniforms.enableCA, 'value').name('Chromatic Aberration');
		f1.add(final.shader.uniforms.chromatic_aberration, 'value', 0, .05).name('Intensity');
		f1.add(final.shader.uniforms.enableDithering, 'value').name('Dithering');
		f1.add(final.shader.uniforms.dither, 'value', 0, 100).name('Intensity');
		f1.add(final.shader.uniforms.enableVignette, 'value').name('Vignette');
		f1.add(final.shader.uniforms.vIntensity, 'value', 0, 1).name('Intensity');

		this.start(customRaf);

		let cTime = 0;

		window.addEventListener('keydown', (event)=>{
			if(event.key === ' ') {
				if(this.clock.running) {
					cTime = this.clock.getElapsedTime();
					this.clock.stop();
				}
				else {
					this.clock.start();
					this.clock.elapsedTime = cTime;
				}
			}
		})

		/* window.addEventListener("click", (event)=>{
			const coords = {
				x: -1 + 2 * event.clientX / window.innerWidth,
				y:  1 - 2 * event.clientY / window.innerHeight
			}

			raycaster.setFromCamera(coords, this.camera);

			const i = raycaster.intersectObjects(this.scene.children);
			if(i.length) {
				const p = i[0].point;
				const depth = tmp.copy(p).distanceTo(this.camera.position);
				console.log(depth);

				dof.shader.uniforms.focalDistance.value = depth;
			}
		}); */
	}

	resize(width: number, height: number): void {
		super.resize(width, height);
		this.customRenderer.setSize(width, height);
	}

	update() {
		super.update();
		const t = this.clock.getElapsedTime();
	}

	render(): void {
		this.customRenderer.render(this.scene, this.camera);
		if(debugSettings.showTextures) {
			SHOW_DEPTH.uniforms.tDepth.value = this.customRenderer.depthTexture;
			RTUtils.renderToRT(this.depthRT, this.renderer, SHOW_DEPTH);
			this.renderer.autoClear = false;
			this.renderer.clearDepth();
			RTUtils.drawRT(this.depthRT, this.renderer, 0, window.innerHeight-266);
			RTUtils.drawTexture(this.rnd.sceneRT.texture[1], this.renderer, 266, window.innerHeight-266);
			this.renderer.autoClear = true;
		}
	}
}