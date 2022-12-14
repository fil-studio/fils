import { NomadDemo } from "../demos/NomadDemo";
import { ScrollerDemo } from "../demos/ScrollerDemo";
import { SelectiveGlowDemo } from "../demos/SelectiveGlowDemo";

export class App {
	constructor(){		

		const dom = document.querySelector('[template]')
		if(!dom) return;
		const demo = dom.getAttribute('template');
		if(demo === 'scroller') new ScrollerDemo();
		if(demo === 'selective-glow') new SelectiveGlowDemo();
		if(demo === 'nomad') new NomadDemo();

	}
}
