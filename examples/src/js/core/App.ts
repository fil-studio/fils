import { ScrollerDemo } from "../demos/ScrollerDemo";
import { SelectiveGlowDemo } from "../demos/SelectiveGlowDemo";

export class App {
	constructor(){		

		const dom = document.querySelector('[data-template]')
		if(!dom) return;
		const demo = dom.getAttribute('data-template');
		if(demo === 'scroller') new ScrollerDemo();
		if(demo === 'selective-glow') new SelectiveGlowDemo();
		// if(demo === 'nomad') new NomadDemo();

	}
}
