// import { WebGLSketch, initMaterial, VFXRenderer, gfxShaders } from '@fils/gfx'
// import { WebGLSketch, initMaterial, VFXRenderer, gfxShaders } from '../../../../packages/gfx/lib/main'
import { BoxGeometry, CylinderGeometry, DirectionalLight, EquirectangularReflectionMapping, Mesh, MeshPhongMaterial, RawShaderMaterial, ShaderChunk, SphereGeometry, TextureLoader, TorusKnotGeometry, WebGLRenderTarget } from 'three';
import { initMaterial } from '../../../../packages/gfx/src/vfx/MaterialUtils';
import { VFXRenderer } from '../../../../packages/gfx/src/vfx/VFXRenderer';
import { WebGLSketch, gfxShaders } from '../../../../packages/gfx';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FXAAPass, RTUtils, VFXPipeline } from '../../../../packages/gfx/src/main';
import { FinalPass } from '../../../../packages/gfx/src/vfx/pipeline/FinalPass';
import { DoFPass } from '../../../../packages/gfx/src/vfx/pipeline/DoFPass';
import { LutPass } from '../../../../packages/gfx/src/vfx/pipeline/LutPass';
import { RetroPass } from '../../../../packages/gfx/src/vfx/pipeline/RetroPass';

import vert from '../../../../packages/gfx/src/glsl/fbo.vert';
import frag from '../../../../packages/gfx/src/glsl/vfx/draw-depth.frag';

const BOX_GEO = new BoxGeometry(1, 1, 1);
const BALL_GEO = new SphereGeometry(1);
const CYL_GEO = new CylinderGeometry(.1, .1, 1, 32, 8);
const TOR_GEO = new TorusKnotGeometry(10, 2, 64, 32, 2, 3);

const loader = new TextureLoader();

const debugSettings = {
	showTextures: true
}

const SHOW_DEPTH = new RawShaderMaterial({
	vertexShader: vert,
	fragmentShader: frag,
	uniforms: {
		tDepth: {value: null},
		cameraNear: {value: 0},
		cameraFar: {value: 0}
	}
})

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
	depthRT:WebGLRenderTarget;

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 100
		});
		document.body.appendChild(this.domElement);
		this.domElement.className = 'view';

		this.background = new WebGLRenderTarget(1024, 512);
		this.renderer.setClearColor(0x666666, 1);
		this.renderer.setRenderTarget(this.background);
		this.renderer.render(this.scene, this.camera);
		this.renderer.setRenderTarget(null);
		this.renderer.setClearColor(0x000000, 0);

		this.background.texture.mapping = EquirectangularReflectionMapping;
		this.scene.background = this.background.texture;

		ShaderChunk['rgbSplit'] = gfxShaders.rgbSplit;
		ShaderChunk['dithering'] = gfxShaders.dithering;

		const L = new DirectionalLight(0xffffff, .35);
		L.position.set(-1, 1, 1);
		this.scene.add(L);

		this.depthRT = new WebGLRenderTarget(256, 256);

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
		SHOW_DEPTH.uniforms.cameraNear.value = this.camera.near;
		SHOW_DEPTH.uniforms.cameraFar.value = this.camera.far;

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
				useDepth: true
			}
		);

		this.rnd = rnd;

		const lut = new LutPass(loader.load('/assets/textures/table.png'));
		lut.enabled = false;

		const dof = new DoFPass(
			window.innerWidth,
			window.innerHeight,
			{
				blur: {
					scale: 1,
					iterations: 8,
					quality: 2,
					radius: 1
				},
				camNear: this.camera.near,
				camFar: this.camera.far,
				focalDistance: 15,
				aperture: 3
			}
		);

		const fxaa = new FXAAPass(
			window.innerWidth,
			window.innerHeight,
		);

		// this.customRenderer = new VFXPipeline(this.renderer);
		this.customRenderer = new VFXPipeline(rnd,{
			width: window.innerWidth,
			height: window.innerHeight,
			useDepth: true,
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
		retro.enabled = false;

		this.customRenderer.addPass(fxaa);
		this.customRenderer.addPass(lut);
		this.customRenderer.addPass(dof);
		this.customRenderer.addPass(final);
		this.customRenderer.addPass(retro);

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

		const f3 = gui.addFolder("FXAA").close();
		f3.add(fxaa, 'enabled');

		const f4 = gui.addFolder("LUT").close();
		f4.add(lut, 'enabled');

		const f2 = gui.addFolder("Depth of Field").close();
		f2.add(dof, 'enabled');
		f2.add(dof.shader.uniforms.debug, 'value').name('Debug');
		f2.add(dof.shader.uniforms.focalDistance, 'value', 0, 30).name("Focal Distance");
		f2.add(dof.shader.uniforms.aperture, 'value', 0.1, 10).name("Aperture");

		const f21 = f2.addFolder("Blur Settings");
		f21.add(dof.blurPass, 'iterations', 1, 32, 1);
		f21.add(dof.blurPass, 'radius', .1, 5);

		const f1 = gui.addFolder("Final Pass").close();
		f1.add(final, 'enabled');
		// f1.add(final.shader.uniforms.enableLut, 'value').name('LUT');
		f1.add(final.shader.uniforms.enableCA, 'value').name('Chromatic Aberration');
		f1.add(final.shader.uniforms.chromatic_aberration, 'value', 0, .05).name('Intensity');
		f1.add(final.shader.uniforms.enableDithering, 'value').name('Dithering');
		f1.add(final.shader.uniforms.dither, 'value', 0, 100).name('Intensity');
		f1.add(final.shader.uniforms.enableVignette, 'value').name('Vignette');
		f1.add(final.shader.uniforms.vIntensity, 'value', 0, 1).name('Intensity');

		const f5 = gui.addFolder("Retro Pass").close();
		f5.add(retro, 'enabled');
		f5.add(retro.shader.uniforms.pixelate, 'value').name('Pixelate');
		f5.add(retro.shader.uniforms.gridSize, 'value', 1, 20, 1).name('Pixel Size');
		f5.add(retro.shader.uniforms.dithering, 'value', {
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
			SHOW_DEPTH.uniforms.tDepth.value = this.rnd.depthTexture;
			RTUtils.renderToRT(this.depthRT, this.renderer, SHOW_DEPTH);
			this.renderer.autoClear = false;
			this.renderer.clearDepth();
			RTUtils.drawRT(this.depthRT, this.renderer, 0, window.innerHeight-266);
			RTUtils.drawTexture(this.rnd.sceneRT.texture[1], this.renderer, 266, window.innerHeight-266);
			// RTUtils.drawRT(this.depthRT, this.renderer, 266, window.innerHeight-266);
			this.renderer.autoClear = true;
		}
	}
}