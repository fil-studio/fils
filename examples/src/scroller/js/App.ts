
// import { D, Scroller } from '../../../../packages/scroller/src/Scroller';
import { D, Scroller } from '@fils/scroller';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { UI } from '@fils/ui';
import { isMobile } from "@fils/utils";

export class App {
	scroller:Scroller;

	cssVariablesElements: NodeListOf<HTMLElement>;
	constructor() {

		this.scroller = new Scroller({
			useNative: isMobile(),
			easing: .1,
			showVirtualScrollBar: true,
			touchForce: 2,
			wheelForce: 1
			// direction: D.LEFT
		});
		
		this.cssVariablesElements = document.querySelectorAll('[css-var]');

		const stats = new Stats();
		stats.showPanel(0);
		document.body.appendChild(stats.dom);

		const animate = () => {
			stats.begin();
			this.update();
			stats.end();
			requestAnimationFrame(animate);
		}
		animate();

		const gui = new UI();
		gui.add(
			this.scroller,
			'direction',
			{
				options: { Top: 0, Bottom: 1, Left: 2, Right: 3 }
			}
		);

		gui.add(
			this.scroller,
			'ease',
			{
				min: 0.001,
				max: 1,
				step: 0.001
			}
		)

		gui.addButton('Scroll to last', () => {
			this.scroller.scrollToSection(this.scroller.sections.length-1);
		})

		gui.addButton('Disable/Enable', () => {
			if(this.scroller.enabled) this.scroller.disable();
			else this.scroller.enable();
		})

		gui.addButton('Refresh', () => {
			this.scroller.refresh();
		})

		window.addEventListener('resize', () => {
			this.scroller.resize();
		})

	}

	update() {
		this.scroller.update();

		const section = this.scroller.sections.find(x => x.id === 'css-var-section');
		if(!section) return;

		for (let i = 0, len = this.cssVariablesElements.length; i < len; i++) {
			const el = this.cssVariablesElements[i];
			const type = el.getAttribute('css-var');
			if(type === 'delta') el.innerText = `${this.scroller.delta.toFixed(3)}`;
			if(type === 'progress' && section) el.innerText = `${section.progress.toFixed(3)}`;
		}
	}
}
