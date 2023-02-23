import { DirectionalLight, EquirectangularReflectionMapping, Mesh, MeshNormalMaterial, TextureLoader } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { getHDRI, WebGLSketch } from '@fils/gfx';

import { MathUtils } from '@fils/math';
import { VFXRenderer } from '@fils/vfx';
import { CustomMaterial } from './CustomMaterial';

const tLoader = new TextureLoader();
const gltfLoader = new GLTFLoader();

const settings = {
	debug: false,
	mesh: null
}

/**
 * VFX Custom Material
 * Extending VFX Materials with custom stuff
 */

export class App extends WebGLSketch {
	rnd:VFXRenderer;
	sMatRef:CustomMaterial;
	debugMat:MeshNormalMaterial = new MeshNormalMaterial();

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 150,
			fov: 45
		});
		document.body.appendChild(this.domElement);

		console.log('VFX Custom Material');

		this.renderer.setClearColor(0x000000, 0);

		const L = new DirectionalLight(0xffffff, .35);
		L.position.set(-1, 1, 1);
		this.scene.add(L);

		const sMat = new CustomMaterial({
			color: 0xffffff,
			roughness: 1,
			metalness: 0
		});

		tLoader.load("/assets/textures/hdri-test.jpg", (texture)=>{
			const env = getHDRI(texture, this.renderer);
			sMat.envMap = env;
			// this.scene.background = texture;
		});

		/* tLoader.load("/assets/textures/hdri2.jpg", (texture)=>{
			texture.mapping = EquirectangularReflectionMapping;
			this.scene.background = texture;
		}); */

		gltfLoader.load("/assets/scenes/test-scene-02.glb", (gltf) => {
			const scene = gltf.scene;
			scene.traverse((child) => {
				if(child['isMesh']) {
					const mesh = child as Mesh;
					settings.mesh = child;
					mesh.material = sMat;
				}
			});
			this.scene.add(scene);
		});


		this.sMatRef = sMat;

		window.addEventListener('resize', (event) => {
			this.resize(window.innerWidth, window.innerHeight);
		});

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
					radius: 1,
					iterations: 8,
					quality: 2
				},
				useDepth: false
			}
		);

		this.rnd = rnd;

		const stats = Stats();
		document.body.appendChild(stats.domElement);

		this.camera.position.set(0,2,6);

		const controls = new OrbitControls(this.camera, this.domElement);
		controls.target.set(0,1.5,0);

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
		gui.add(settings, "debug");
		gui.add(sMat, "flatCalc").name("Calculate on VS");

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
	}

	resize(width: number, height: number): void {
		super.resize(width, height);
		this.rnd.setSize(width, height);
	}

	update() {
		super.update();
		const t = this.clock.getElapsedTime();
		const p = MathUtils.smoothstep(-1, 1, Math.sin(t));
		this.sMatRef.progress = p;
	}

	render(): void {
		if(!settings.mesh) return;
		if(!settings.debug) {
			settings.mesh.material = this.sMatRef;
			this.rnd.render(this.scene, this.camera);
		} else {
			settings.mesh.material = this.debugMat;
			super.render();
		}
	}
}