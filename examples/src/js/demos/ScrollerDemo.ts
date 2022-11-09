
import Scroller from '../../../../scroller/src/Scroller';
import Stats from 'three/examples/jsm/libs/stats.module.js';

export class ScrollerDemo {
	scroller:Scroller;

	cssVariablesElements: NodeListOf<HTMLElement>;

	constructor(){
		
		this.scroller = new Scroller();
		this.scroller.ease = 0.16;

		if(window.innerWidth < 768) this.scroller.disable();

		this.cssVariablesElements = document.querySelectorAll('[css-var]');

		const stats = Stats();
		stats.showPanel(0);
		document.body.appendChild(stats.dom);

		const animate = () => {

			stats.begin();
			this.update();
			stats.end();

			requestAnimationFrame(animate);
		}
		animate();
	}

	update(){
		this.scroller.update();
			
		const section = this.scroller.sections.find(x => x.id === 'css-var-section');
		for(let i = 0, len = this.cssVariablesElements.length; i<len; i++){
			const el = this.cssVariablesElements[i];
			const type = el.getAttribute('css-var');
			if(type === 'delta') el.innerText = `${this.scroller.delta.toFixed(5)}`;
			if(type === 'progress') el.innerText = `${section.progress.toFixed(5)}`;
		}
	}
}