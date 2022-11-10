import { LifeCycleDemo } from "../demos/LifeCycleDemo";
import { ScrollerDemo } from "../demos/ScrollerDemo";
import { SelectiveGlowDemo } from "../demos/SelectiveGlowDemo";

export class App {
	constructor(){

		const demo = document.querySelector('main').getAttribute('data-template');
		if(demo === 'scroller') new ScrollerDemo();
		if(demo === 'selective-glow') new SelectiveGlowDemo();
		if(demo === 'lifecycle') new LifeCycleDemo();

	}
}
