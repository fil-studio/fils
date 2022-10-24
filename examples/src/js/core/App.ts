import { ScrollerDemo } from "../demos/ScrollerDemo";

export class App {
	demo: ScrollerDemo;

	constructor(){

		const demo = document.querySelector('main').getAttribute('data-template');
		
		if(demo === 'scroller'){
			this.demo = new ScrollerDemo();
		}
		
		const animate = () => {
			this.update();
			requestAnimationFrame(animate)
		}
		animate();
	}

	update(){

		this.demo.update();

	}
}
