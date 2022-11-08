
import { zip } from 'rxjs';
import Scroller from '../../../../scroller/src/Scroller';

export class ScrollerDemo {
	scroller:Scroller;

	cssVariablesElements: NodeListOf<HTMLElement>;

	constructor(){
		this.scroller = new Scroller();
		this.scroller.ease = window.innerWidth > 768 ? 0.16 : 0.3;

		this.cssVariablesElements = document.querySelectorAll('[css-var]');
	}

	update(){
		this.scroller.update();
			
		const section = this.scroller.sections.find(x => x.id === 'css-var-section');
		for(let i = 0, len = this.cssVariablesElements.length; i<len; i++){
			const el = this.cssVariablesElements[i];
			const type = el.getAttribute('css-var');
			if(type === 'delta') el.innerText = `${this.scroller.delta.toFixed(5)}`;
			if(type === 'range') el.innerText = `${section.range.toFixed(5)}`;
		}
	}
}