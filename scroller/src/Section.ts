import { MathUtils } from "@fils/math"
import { Vector2 } from "three"

export class Section {
	id: string;
	dom: HTMLElement;
	
	rect: DOMRect;
	wh: number = window.innerHeight;
	
	progress: number;
	direction: Vector2;

	scroll: number = 0;
	delta: number = 0;

	visible: boolean = true;
	disabled: boolean = false;


	constructor(id: string, dom: HTMLElement){

		this.id = id;
		this.dom = dom;
		
	}

	restore(){
		this.dom.style.transform = 'none';
		this.visible = true;
		this.rect = this.dom.getBoundingClientRect();		
		this.wh = window.innerHeight;
	}

	animationIn(){

	}
	animationOut(){

	}

	update(){
		const top = this.rect.top;
		const bottom = this.rect.top + this.rect.height;

		if(this.scroll + this.wh >= top && this.scroll <= bottom ) {

			if(!this.visible) this.animationIn();

			this.visible = true;
			this.dom.classList.add('fil-scroller-visible')
			this.dom.style.setProperty('--fil-scroller-delta', `${this.delta}`);
			this.progress = MathUtils.map(this.scroll, top - this.wh, bottom, 0, 1);
			this.dom.style.setProperty('--fil-scroller-progress', `${this.progress}`);

			if(!this.disabled) this.dom.style.transform = `translate3d(0, ${-this.scroll}px, 0)`;

			return
		}


		if(!this.visible) return;

		this.animationOut();

		this.visible = false;
		this.dom.classList.remove('fil-scroller-visible');
		this.dom.style.setProperty('--fil-scroller-delta', '0');
		this.progress = 0;

		if(!this.disabled) this.dom.style.transform = `translate3d(0, ${-this.wh}px, 0)`;
	}
}