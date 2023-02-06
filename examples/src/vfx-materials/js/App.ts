import { DirectionalLight, SphereGeometry, TextureLoader, WebGLRenderTarget } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';


import { WebGLSketch } from '@fils/gfx';

import { Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { initMaterial, VFXBasicMaterial, VFXEmissiveMaterial, VFXPhongMaterial, VFXRenderer } from '../../../../packages/vfx/src/main';


const tLoader = new TextureLoader();

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
	rnd:VFXRenderer;
	background:WebGLRenderTarget;

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 50,
			fov: 60
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
		// this.scene.add(L);

		const quad = new Mesh(
			new PlaneGeometry(4,2),
			new VFXBasicMaterial({
				color: 0x999999
			})
		)
		quad.position.z = -1;
		this.scene.add(quad);

		const emissiveMat = new VFXEmissiveMaterial({
			emissive: 0xff0000,
			emissiveIntensity: 1
		});

		const ball = new Mesh(
			new SphereGeometry(.15, 64, 32),
			emissiveMat
		);
		this.scene.add(ball);

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
					scale: .25,
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
		const f1 = gui.addFolder("Emissive");
		f1.add(emissiveMat, "emissiveIntensity", 0, 1, .01);

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
	}

	render(): void {
		this.rnd.render(this.scene, this.camera);
	}
}