import Stats from 'stats.js';
import { ScrollerDemo } from "../demos/ScrollerDemo";

const stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

export class App {
	demo: ScrollerDemo;

	constructor(){

		const demo = document.querySelector('main').getAttribute('data-template');
		
		if(demo === 'scroller'){
			this.demo = new ScrollerDemo();
		}
		
		const animate = () => {

			stats.begin();
			this.update();
			stats.end();

			requestAnimationFrame(animate);
		}
		animate();
	}

	update(){

		this.demo.update();

	}
}
