import { BoxGeometry, CylinderGeometry, DirectionalLight, Mesh, MeshPhongMaterial, ShaderChunk, SphereGeometry, TorusKnotGeometry } from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { initMaterial, VFXRenderer, vfxShaders } from '@fils/vfx';
import { WebGLSketch } from '@fils/gfx';

const BOX_GEO = new BoxGeometry(1, 1, 1);
const BALL_GEO = new SphereGeometry(1);
const CYL_GEO = new CylinderGeometry(.1, .1, 1, 32, 8);
const TOR_GEO = new TorusKnotGeometry(10, 2, 64, 32, 2, 3);

export class App extends WebGLSketch {
	customRenderer: VFXRenderer;
	meshes: Mesh[] = [];

	constructor() {
		super(window.innerWidth, window.innerHeight, {
			alpha: false,
			antialias: true
		});

		this.renderer.setClearColor(0x000000, 1);
		document.body.appendChild(this.domElement);
		this.domElement.className = 'view';

		ShaderChunk['rgbSplit'] = vfxShaders.rgbSplit;

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
		ball1.position.z = -2;
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
		cyl.position.z = 2;
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
		torus.position.z = 4;
		torus.scale.setScalar(.1);
		this.scene.add(torus);
		this.meshes.push(torus);

		window.addEventListener('resize', (event) => {
			this.resize(window.innerWidth, window.innerHeight);
		});

		this.camera.position.z = 15;

		this.customRenderer = new VFXRenderer(
			this.renderer,
			window.innerWidth,
			window.innerHeight,
			{
				exposure: .1,
				gamma: 1.8,
				samples: 4,
				glowSettings: {
					scale: .5,
					radius: 1,
					iterations: 8,
					quality: 2
				}
			}
		);

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
		gui.add(
			this.customRenderer,
			'showGlow'
		);
		gui.add(
			this.customRenderer,
			'showScene'
		);
		gui.add(this.customRenderer, 'exposure', 0, 1, .1);
		gui.add(this.customRenderer, 'gamma', 1, 3.2, .1);

		const blur = gui.addFolder('Blur Options');
		blur.add(this.customRenderer.glow, 'iterations', 2, 32, 1);
		blur.add(this.customRenderer.glow, 'quality', {
			BLUR5: 0,
			BLUR9: 1,
			BLUR13: 2,
		});
		blur.add(this.customRenderer.glow, 'radius', {
			'1': 1,
			'1/2': 0.5,
			'1/4': 0.25,
		});
		blur.add(this.customRenderer.glow, 'scale', {
			'100%': 1,
			'50%': 0.5,
			'25%': 0.25,
		}).onFinishChange(()=>{
			this.customRenderer.glow.setSize(window.innerWidth, window.innerHeight);
		});

		this.start(customRaf);
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
	}
}