import { MathUtils } from "@fils/math";
import { D } from "./Scroller";

export interface ScrollerSectionListener {
	onAnimationIn?();
	onAnimationOut?();
	onBeforeRestore?(resizing:boolean);
	onAfterRestore?(resizing:boolean);
}

export class Section {
	id: string;
	dom: HTMLElement;

	rect: DOMRect;
	widthOffset: number;

	w:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	progress: number;
	direction: D = D.LEFT;

	scroll: number = 0;
	delta: number = 0;

	visible: boolean = true;
	disabled: boolean = false;

	protected listeners:ScrollerSectionListener[] = [];

	sticky:HTMLElement[] = [];


	constructor(id: string, dom: HTMLElement, direction: D){

		this.id = id;
		this.dom = dom;
		this.direction = direction;

		const s = dom.querySelectorAll('[fil-scroller-sticky]');

		s.forEach(value=> {
			this.sticky.push(value as HTMLElement);
		})
		// console.log(this.sticky);
		
	}

	addSectionListener(lis:ScrollerSectionListener) {
		if(this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}

	removeSectionListener(lis:ScrollerSectionListener) {
		this.listeners.splice(
			this.listeners.indexOf(lis),
			1
		);
	}

	restore(resizing:boolean=false){
		for(const lis of this.listeners) {
			lis?.onBeforeRestore(resizing);
		}
		this.dom.style.transform = 'none';
		this.visible = true;
		this.rect = this.dom.getBoundingClientRect();
		for(const lis of this.listeners) {
			lis?.onAfterRestore(resizing);
		}
	}

	animationIn(){
		for(const lis of this.listeners) {
			lis?.onAnimationIn();
		}
	}
	animationOut(){
		for(const lis of this.listeners) {
			lis?.onAnimationOut();
		}
	}

	get threshold(){

		// VERTICAL SCROLL THRESHOLDS
		if(this.direction === D.TOP || this.direction === D.BOTTOM) return [
			this.rect.top - this.w.h,
			this.rect.top + this.rect.height
		];

		// HORIZONTAL SCROLL THRESHOLDS
		if(this.direction === D.LEFT || this.direction === D.RIGHT) return [
			this.widthOffset - this.w.w,
			this.widthOffset + this.rect.width
		]

	}

	get position() {

		if(!this.visible) return {x: 0, y: -this.w.h};
		if(this.direction === D.TOP) return {x: 0, y: -this.scroll};
		if(this.direction === D.BOTTOM) return {x: 0, y: this.scroll + (this.w.h - this.rect.height) - this.rect.top * 2};
		if(this.direction === D.LEFT) return {x: this.widthOffset - this.scroll, y: -this.rect.top};
		if(this.direction === D.RIGHT) return {x: this.scroll + (this.w.w - this.rect.width) - this.widthOffset, y: -this.rect.top};

	}

	updateTransform(){
		if(this.disabled) return;
		let px = this.position.x, py = this.position.y;

		const wH = window.innerHeight;

		for(const s of this.sticky) {
			let tY, sY;
			switch(this.direction) {
				case D.TOP:0
					// console.log(-this.threshold[1]+ wH, -this.threshold[0]-wH, py);
					tY = 1 - MathUtils.smoothstep(-this.threshold[1]+ wH, -this.threshold[0]-wH, py);
					sY = tY * (this.threshold[1] - this.threshold[0] - 2*wH);
					s.style.transform = `translateY(${sY.toFixed(5)}px)`;
					break;
				case D.BOTTOM:
					// console.log(-this.threshold[1]+ wH, -this.threshold[0]-wH, py);
					tY = 1 - MathUtils.smoothstep(-this.threshold[1]+ wH, -this.threshold[0]-wH, py);
					sY = tY * (this.threshold[1] - this.threshold[0] - 2*wH);
					s.style.transform = `translateY(${sY.toFixed(5)}px)`;
					break;
				case D.LEFT:
					break;
				case D.RIGHT:
					break;
			}
		}

		this.dom.style.transform = `translate3d(${px.toFixed(5)}px, ${py.toFixed(5)}px, 0)`;
	}

	update(){

		if(this.scroll >= this.threshold[0] && this.scroll <= this.threshold[1] ) {

			if(!this.visible) this.animationIn();

			this.visible = true;
			this.dom.classList.add('fil-scroller__visible')
			this.dom.style.setProperty('--fil-scroller-delta', `${this.delta.toFixed(5)}`);
			this.progress = MathUtils.map(this.scroll, this.threshold[0], this.threshold[1], 0, 1);
			this.dom.style.setProperty('--fil-scroller-progress', `${this.progress.toFixed(5)}`);

			this.updateTransform();

			return
		}


		if(!this.visible) return;

		this.animationOut();

		this.visible = false;
		this.dom.classList.remove('fil-scroller__visible');
		this.dom.style.setProperty('--fil-scroller-delta', '0');
		this.progress = 0;

		this.updateTransform();
	}
}