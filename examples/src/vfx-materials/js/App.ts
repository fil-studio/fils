import { BoxGeometry, CanvasTexture, DirectionalLight, Mesh, PlaneGeometry, SphereGeometry, TextureLoader, TorusKnotGeometry, WebGLRenderTarget } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import { getHDRI, WebGLSketch } from '@fils/gfx';

import { el } from '@fils/utils';
import { VFXBasicMaterial, VFXEmissiveMaterial, VFXRenderer, VFXStandardMaterial } from '../../../../packages/vfx/src/main';
import { MathUtils } from '@fils/math';

const tLoader = new TextureLoader();

/**
 * VFX Materials 
 * replace initMaterial with a ThreeJS Material API.
 * It also includes a pure emissive material (unlit emissive)
 * for cheaper emissive only render.
 * 
 * VFX Materials are a good approach if you need to extend
 * them with more custom functionalities. See example
 * "vfx-custom-material"
 */

export class App extends WebGLSketch {
	rnd:VFXRenderer;
	background:WebGLRenderTarget;
	sMatRef:VFXStandardMaterial;

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 50,
			fov: 45
		});
		document.body.appendChild(this.domElement);

		console.log('VFX Materials');

		/* this.background = new WebGLRenderTarget(1024, 512);
		this.renderer.setClearColor(0xcccccc, 1);
		this.renderer.setRenderTarget(this.background);
		this.renderer.render(this.scene, this.camera);
		this.renderer.setRenderTarget(null); */
		this.renderer.setClearColor(0x000000, 0);

		/* this.background.texture.mapping = EquirectangularReflectionMapping;
		this.scene.background = this.background.texture; */

		const L = new DirectionalLight(0xffffff, .35);
		L.position.set(-1, 1, 1);
		this.scene.add(L);

		const quad = new Mesh(
			new PlaneGeometry(4,2),
			new VFXBasicMaterial({
				color: 0x999999
			})
		)
		quad.position.z = -1;
		// this.scene.add(quad);

		const emissiveMat = new VFXEmissiveMaterial({
			emissive: 0xff0000,
			emissiveIntensity: 1
		});

		const ball = new Mesh(
			new SphereGeometry(.15, 64, 32),
			emissiveMat
		);
		this.scene.add(ball);

		const can1 = el('canvas') as HTMLCanvasElement;
		const ctx1 = can1.getContext('2d');
		can1.width = can1.height = 256;

		const checker = 64;
	
		for(let i=0; i<checker; i++) {
			for(let j=0; j<checker; j++) {
				const x = j*checker;
				const y = i*checker;
				ctx1.moveTo(x, y);
				ctx1.fillStyle = (j%2==0 && i%2==0) || (j%2==1 && i%2==1) ? "#fff" : "#000";
				ctx1.fillRect(x,y,checker,checker);
			}
		}

		const eMap = new CanvasTexture(can1);

		// wrapper for standard material with emissive glow
		// also available in phong
		const emissiveMat2 = new VFXEmissiveMaterial({
			emissive: 0x00ff00,
			emissiveIntensity: 1,
			emissiveMap: eMap
		});

		const box = new Mesh(
			new BoxGeometry(.2, .2, .2),
			emissiveMat2
		);
		this.scene.add(box);
		box.position.set(.4,.2,0);
		box.rotateY(.5);
		box.rotateX(-.5);

		const sMat = new VFXStandardMaterial({
			color: 0x0000ff,
			roughness: .1,
			metalness: 1,
			emissive: 0x22eeff,
			emissiveIntensity: .5
		});

		tLoader.load("/assets/textures/hdri-test.jpg", (texture)=>{
			const env = getHDRI(texture, this.renderer);
			sMat.envMap = env;
			sMat.emissiveMap = texture;
			this.scene.background = texture;
		});

		const torus = new Mesh(
			new TorusKnotGeometry(.5, .05, 128, 32, 2, 3),
			sMat
		);
		torus.position.x = -1;
		this.scene.add(torus);
		this.sMatRef = sMat;

		window['info'] = this.renderer.info;

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

		this.camera.position.z = 2;

		const controls = new OrbitControls(this.camera, this.domElement);
		// controls.target.set(0.3,1.5,0);

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
		
		const f0 = gui.addFolder("Render Options");
		f0.add(rnd, "showBackground").name("Render Background");
		f0.add(rnd, "showScene").name("Render Scene");
		f0.add(rnd, "showGlow").name("Render Glow");

		const f1 = gui.addFolder("Ball");
		f1.add(emissiveMat, "emissiveIntensity", 0, 1, .01);
		f1.addColor(emissiveMat, "emissive");

		const f2 = gui.addFolder("Cube");
		f2.add(emissiveMat2, "emissiveIntensity", 0, 5, .01);
		f2.addColor(emissiveMat2, "emissive");

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
		const d = MathUtils.smoothstep(-1, 1, Math.sin(t));
		this.sMatRef.emissiveIntensity = d;
	}

	render(): void {
		this.rnd.render(this.scene, this.camera);
		// super.render();
	}
}