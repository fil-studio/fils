import { BoxGeometry, CylinderGeometry, DirectionalLight, EquirectangularReflectionMapping, Mesh, MeshPhongMaterial, SphereGeometry, TextureLoader, TorusKnotGeometry, WebGLRenderTarget } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

import { RTUtils, WebGLSketch } from '@fils/gfx';
// import { DoFPass, FinalPass, FXAAPass, initMaterial, LutPass, RetroPass, VFXPipeline, VFXRenderer } from '@fils/vfx';
import { FinalPass, initMaterial, LutPass, RetroPass, VFXPipeline, VFXRenderer } from '../../../../packages/vfx/src/main';

// import { FinalPass } from '../../../../packages/vfx/src/main';

const BOX_GEO = new BoxGeometry(1, 1, 1);
const BALL_GEO = new SphereGeometry(1);
const CYL_GEO = new CylinderGeometry(.1, .1, 1, 32, 8);
const TOR_GEO = new TorusKnotGeometry(10, 2, 64, 32, 2, 3);

const loader = new TextureLoader();

const debugSettings = {
	showTextures: false
}

const passMap = {
	lut: null
}

/**
 * VFXRenderer works best with black clear color and 0 clear alpha 
 * if we want to render color + glow passes in one MRT.
 * We recommend using a Scene background and leave renderer with
 * clear color 0x000000, 0 and set the background to
 * the scene as is done in this example. VFXRenderer will take
 * care of compositing things correctly.
 */

export class App extends WebGLSketch {
	customRenderer: VFXPipeline;
	rnd:VFXRenderer;
	meshes: Mesh[] = [];
	background:WebGLRenderTarget;

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 100,
			fov: 60
		});
		document.body.appendChild(this.domElement);
		this.domElement.className = 'view';

		console.log('VFX Custom Pipeline');

		this.background = new WebGLRenderTarget(1024, 512);
		this.renderer.setClearColor(0x666666, 1);
		this.renderer.setRenderTarget(this.background);
		this.renderer.render(this.scene, this.camera);
		this.renderer.setRenderTarget(null);
		this.renderer.setClearColor(0x000000, 0);

		this.background.texture.mapping = EquirectangularReflectionMapping;
		this.scene.background = this.background.texture;

		const L = new DirectionalLight(0xffffff, .35);
		L.position.set(-1, 1, 1);
		this.scene.add(L);

		const box1 = new Mesh(
			BOX_GEO,
			initMaterial(
				new MeshPhongMaterial({
					color: 0xff0000
				})
			)
		);
		box1.rotation.set(-.2, .2, .1);
		box1.scale.x = 1.5;
		box1.position.z = -4;
		this.scene.add(box1);
		this.meshes.push(box1);

		const ball1 = new Mesh(
			BALL_GEO,
			initMaterial(
				new MeshPhongMaterial({
					color: 0x0000ff,
					emissive: 0x1111ff,
					emissiveIntensity: 1.7
				})
			)
		);
		ball1.position.z = -8;
		ball1.position.y = .75;
		ball1.scale.setScalar(.75);
		this.scene.add(ball1);
		this.meshes.push(ball1);

		const cyl = new Mesh(
			CYL_GEO,
			initMaterial(
				new MeshPhongMaterial({
					color: 0x00ff00,
					emissive: 0x22ff22,
					emissiveIntensity: 2.2
				})
			)
		);
		cyl.rotation.z = Math.PI / 4;
		cyl.position.z = 0;
		cyl.scale.y = 5;
		this.scene.add(cyl);
		this.meshes.push(cyl);

		const torus = new Mesh(
			TOR_GEO,
			initMaterial(
				new MeshPhongMaterial({
					color: 0x000000
				})
			)
		)
		torus.position.z = 8;
		torus.scale.setScalar(.1);
		this.scene.add(torus);
		this.meshes.push(torus);

		window.addEventListener('resize', (event) => {
			this.resize(window.innerWidth, window.innerHeight);
		});

		this.camera.position.z = 15;

		const rnd = new VFXRenderer(
			this.renderer,
			window.innerWidth,
			window.innerHeight,
			{
				exposure: 0.1,
				gamma: 1.2,
				samples: 1,
				glowSettings: {
					scale: .5,
					radius: 2,
					iterations: 8,
					quality: 2
				},
				useDepth: false
			}
		);

		this.rnd = rnd;

		const lut = new LutPass(loader.load('/assets/textures/table.png'));
		// lut.enabled = false;

		// this.customRenderer = new VFXPipeline(this.renderer);
		this.customRenderer = new VFXPipeline(this.renderer,{
			width: window.innerWidth,
			height: window.innerHeight,
			useDepth: false,
			samples: 1
		});
		const final = new FinalPass({
			caAmount: .0025,
			enableDithering: true,
			dither: 8,
			enableVignette: true,
			vignette: .16
		});

		const retro = new RetroPass({
			gridSize: 8,
			dithering: 3
		});
		retro.enabled = true;

		this.customRenderer.addPass(lut);
		this.customRenderer.addPass(final);
		this.customRenderer.addPass(retro);

		passMap.lut = lut;

		/* dof.enabled = false;
		fxaa.enabled = false;
		final.enabled = false; */

		const stats = Stats();
		document.body.appendChild(stats.domElement);

		const controls = new OrbitControls(this.camera, this.domElement);

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
			type: 0 
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

		const f0 = gui.addFolder("LUT").close();
		f0.add(lut, 'enabled');

		const f1 = gui.addFolder("Final Pass").close();
		f1.add(final, 'enabled');
		// f1.add(final.shader.uniforms.enableLut, 'value').name('LUT');
		f1.add(final.shader.uniforms.enableCA, 'value').name('Chromatic Aberration');
		f1.add(final.shader.uniforms.chromatic_aberration, 'value', 0, .05).name('Intensity');
		f1.add(final.shader.uniforms.enableDithering, 'value').name('Dithering');
		f1.add(final.shader.uniforms.dither, 'value', 0, 100).name('Intensity');
		f1.add(final.shader.uniforms.enableVignette, 'value').name('Vignette');
		f1.add(final.shader.uniforms.vIntensity, 'value', 0, 1).name('Intensity');

		const f2 = gui.addFolder("Retro Pass").close();
		f2.add(retro, 'enabled');
		f2.add(retro.shader.uniforms.pixelate, 'value').name('Pixelate');
		f2.add(retro.shader.uniforms.gridSize, 'value', 1, 20, 1).name('Pixel Size');
		f2.add(retro.shader.uniforms.dithering, 'value', {
			'None': 0,
			'2x2': 1,
			'4x4': 2,
			'8x8': 3
		}).name('Pixel Size');

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
		this.customRenderer.setSize(width, height);
	}

	update() {
		super.update();
		const t = this.clock.getElapsedTime();

		this.meshes[3].rotation.set(
			t * .2,
			t * .16,
			0
		);

		this.meshes[2].rotation.set(
			0,
			0,
			Math.PI / 4 - t * .1
		);
	}

	render(): void {
		this.customRenderer.render(this.scene, this.camera);
		if(debugSettings.showTextures) {
			this.renderer.autoClear = false;
			this.renderer.clearDepth();
			RTUtils.drawTexture(passMap.lut.lookupTable, this.renderer, 0, window.innerHeight-266, 256, 256);
			/* if(this.customRenderer.rendererType === "VFXRenderer") {
				RTUtils.drawTexture(this.rnd.glow.texture, this.renderer, 512, window.innerHeight-266, 256, 256);
			} */
			// RTUtils.drawRT(this.depthRT, this.renderer, 266, window.innerHeight-266);
			this.renderer.autoClear = true;
		}
	}
}