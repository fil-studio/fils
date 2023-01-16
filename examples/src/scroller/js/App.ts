<<<<<<< HEAD:examples/src/js/demos/ScrollerDemo.ts

import { Scroller } from '@fils/scroller';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';


export class ScrollerDemo {
	scroller:Scroller;
=======
import Scroller from '../../../../scroller/src/Scroller';

export class App {
	scroller: Scroller;
>>>>>>> 9bc6d85 (Refactor WIP):examples/src/scroller/js/App.ts

	cssVariablesElements: NodeListOf<HTMLElement>;
	constructor() {

		this.scroller = new Scroller();
<<<<<<< HEAD:examples/src/js/demos/ScrollerDemo.ts
		this.scroller.direction = 0;
		this.scroller.ease = 0.05;
=======
		this.scroller.ease = 0.16;

		if (window.innerWidth < 768) this.scroller.disable();
>>>>>>> 9bc6d85 (Refactor WIP):examples/src/scroller/js/App.ts

		this.cssVariablesElements = document.querySelectorAll('[css-var]');

		const stats = Stats();
		stats.showPanel(0);
		document.body.appendChild(stats.dom);

		const animate = () => {
			this.update();
			requestAnimationFrame(animate);
		}
		animate();

		const gui = new GUI();
		gui.domElement.style.pointerEvents = 'all';
		gui.add(
			this.scroller,
			'direction',
			{ Top: 0, Bottom: 1, Left: 2, Right: 3}
		);

		gui.add(
			this.scroller,
			'ease',
			0.001, 0.99
		)
		
	}

	update() {
		this.scroller.update();

		const section = this.scroller.sections.find(x => x.id === 'css-var-section');
		for (let i = 0, len = this.cssVariablesElements.length; i < len; i++) {
			const el = this.cssVariablesElements[i];
			const type = el.getAttribute('css-var');
<<<<<<< HEAD:examples/src/js/demos/ScrollerDemo.ts
			if(type === 'delta') el.innerText = `${this.scroller.delta.toFixed(5)}`;
			if(type === 'progress' && section) el.innerText = `${section.progress.toFixed(5)}`;
=======
			if (type === 'delta') el.innerText = `${this.scroller.delta.toFixed(5)}`;
			if (type === 'progress') el.innerText = `${section.progress.toFixed(5)}`;
>>>>>>> 9bc6d85 (Refactor WIP):examples/src/scroller/js/App.ts
		}
	}
}
