import { BoxGeometry, CylinderGeometry, DirectionalLight, HalfFloatType, Mesh, MeshPhongMaterial, SphereGeometry, TorusKnotGeometry } from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initMaterial, VFXRenderer } from '@fils/vfx';
import { WebGLSketch } from '@fils/gfx';

const BOX_GEO = new BoxGeometry(1, 1, 1);
const BALL_GEO = new SphereGeometry(1);
const CYL_GEO = new CylinderGeometry(.1, .1, 1, 32, 8);
const TOR_GEO = new TorusKnotGeometry(10, 2, 64, 32, 2, 3);

/**
 * Consolidated VFXRenderer example.
 *
 * VFXRenderer wraps the WebGLRenderer + a VFXPipeline and wires the
 * common stack (glow → dof → final → fxaa). Every pass is created up
 * front and toggled live via its `.enabled` flag.
 *
 * Notes:
 *  - `type: HalfFloatType` runs the pipeline's intermediate targets in
 *    HDR so glow doesn't band or clip.
 *  - Selective glow comes from MRT: `initMaterial()` injects the glow
 *    output so a material's emissive lands in the glow buffer.
 *  - Works best with a dark clear color; the renderer zeroes clear alpha
 *    during the glow pre-pass automatically.
 */
export class App extends WebGLSketch {
	customRenderer: VFXRenderer;
	meshes: Mesh[] = [];

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true,
			near: .1,
			far: 50,
			fov: 60
		});

		this.renderer.setClearColor(0x05050a, 1);
		document.body.appendChild(this.domElement);
		this.domElement.className = 'view';

		const L = new DirectionalLight(0xffffff, .35);
		L.position.set(-1, 1, 1);
		this.scene.add(L);

		const box1 = new Mesh(
			BOX_GEO,
			initMaterial(new MeshPhongMaterial({ color: 0xff0000 }))
		);
		box1.rotation.set(-.2, .2, .1);
		box1.scale.x = 1.5;
		this.scene.add(box1);
		this.meshes.push(box1);

		const ball1 = new Mesh(
			BALL_GEO,
			initMaterial(new MeshPhongMaterial({
				color: 0x0000ff,
				emissive: 0x1111ff,
				emissiveIntensity: 1.7
			}))
		);
		ball1.position.set(0, .75, -2);
		ball1.scale.setScalar(.75);
		this.scene.add(ball1);
		this.meshes.push(ball1);

		const cyl = new Mesh(
			CYL_GEO,
			initMaterial(new MeshPhongMaterial({
				color: 0x00ff00,
				emissive: 0x22ff22,
				emissiveIntensity: 2.2
			}))
		);
		cyl.rotation.z = Math.PI / 4;
		cyl.position.z = 2;
		cyl.scale.y = 5;
		this.scene.add(cyl);
		this.meshes.push(cyl);

		const torus = new Mesh(
			TOR_GEO,
			initMaterial(new MeshPhongMaterial({ color: 0x000000 }))
		);
		torus.position.z = 4;
		torus.scale.setScalar(.1);
		this.scene.add(torus);
		this.meshes.push(torus);

		this.camera.position.z = 15;

		// All passes enabled up front so they exist and can be toggled live.
		this.customRenderer = new VFXRenderer(
			this.renderer,
			window.innerWidth,
			window.innerHeight,
			{
				samples: 4,
				type: HalfFloatType,
				enableGlow: true,
				enableDOF: true,
				enableFinal: true,
				enableFXAA: true,
				glow: {
					strength: 1.4,
					blurSettings: { scale: .5, radius: 1, iterations: 8, quality: 2 }
				},
				dof: { aperture: 2, focalDistance: .35 },
				final: { enableCA: true, caAmount: .0015, enableVignette: true, vignette: 1 }
			}
		);

		window.addEventListener('resize', () => {
			this.resize(window.innerWidth, window.innerHeight);
		});

		// Demonstrate the dispose chain (pipeline disposes its passes, the
		// renderer disposes its render targets) — no leaks on teardown.
		window.addEventListener('beforeunload', () => this.customRenderer.dispose());

		this.buildGUI();

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
		this.start(customRaf);
	}

	buildGUI() {
		const r = this.customRenderer;
		const gui = new GUI();

		const glow = gui.addFolder('Glow');
		glow.add(r.glow, 'enabled').name('enabled');
		glow.add(r.glow.shader.uniforms.strength, 'value', 0, 4, .05).name('strength');
		glow.add(r.glow.blur, 'iterations', 2, 32, 1).name('blur iterations');
		glow.add(r.glow.blur, 'quality', { BLUR5: 0, BLUR9: 1, BLUR13: 2 }).name('blur quality');

		const dof = gui.addFolder('Depth of Field');
		dof.add(r.dof, 'enabled').name('enabled');
		dof.add(r.dof.shader.uniforms.aperture, 'value', 0, 10, .05).name('aperture');
		dof.add(r.dof.shader.uniforms.focalDistance, 'value', 0, 1, .005).name('focal distance');

		const fin = gui.addFolder('Final');
		fin.add(r.final, 'enabled').name('enabled');
		fin.add(r.final.shader.uniforms.enableCA, 'value').name('chromatic aberration');
		fin.add(r.final.shader.uniforms.chromatic_aberration, 'value', 0, .01, .0005).name('CA amount');
		fin.add(r.final.shader.uniforms.enableVignette, 'value').name('vignette');
		fin.add(r.final.shader.uniforms.enableDithering, 'value').name('dithering');

		gui.add(r.fxaa, 'enabled').name('FXAA');
	}

	resize(width: number, height: number): void {
		super.resize(width, height);
		this.customRenderer.setSize(width, height);
	}

	update() {
		super.update();
		const t = this.clock.getElapsedTime();
		this.meshes[3].rotation.set(t * .2, t * .16, 0);
		this.meshes[2].rotation.set(0, 0, Math.PI / 4 - t * .1);
	}

	render(): void {
		this.customRenderer.render(this.scene, this.camera);
	}
}
