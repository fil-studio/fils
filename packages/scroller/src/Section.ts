import { MathUtils } from "@fils/math";
import { D } from "./Scroller";

export interface ScrollerSectionListener {
	onAnimationIn?();
	onAnimationOut?();
	onBeforeRestore?();
	onAfterRestore?();
}

const PRECISION = 5;

export class Section {
	id: string;
	dom: HTMLElement;

	rect: DOMRect;
	widthOffset: number;

	w:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	progress: number = 0;

	protected _direction: D = D.LEFT;
	threshold:number[] = [];

	scroll: number = 0;
	delta: number = 0;

	_position = {
		x: 0,
		y: 0
	}

	visible: boolean = false;
	closeToVisible: boolean = false;
	disabled: boolean = false;

	protected listeners:ScrollerSectionListener[] = [];

	sticky:HTMLElement[] = [];

	nativeScrolling:boolean = false;

	constructor(id: string, dom: HTMLElement, direction: D, useNative?:boolean){

		this.id = id;
		this.dom = dom;
		this._direction = direction;

		this.nativeScrolling = useNative === true;

		const s = dom.querySelectorAll('[fil-scroller-sticky]');

		s.forEach(value=> {
			this.sticky.push(value as HTMLElement);
		})

	}

	set direction(value:D) {
		if(this._direction === value) return;
		this._direction = value;

	}

	get direction():D {
		return this._direction;
	}

	calculateDims() {

		if(this.disabled)	return;

		this.rect = this.dom.getBoundingClientRect();

		// VERTICAL SCROLL THRESHOLDS
		if(this.direction === D.TOP || this.direction === D.BOTTOM) {
			this.threshold = [
				this.rect.top - this.w.h,
				this.rect.top + this.rect.height
			];
			if(this.nativeScrolling) {
				this.threshold[0] += this.scroll;
				this.threshold[1] += this.scroll;
			}

		} else {
			this.threshold = [
				this.widthOffset - this.w.w,
				this.widthOffset + this.rect.width
			];
		}

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

	restore(){
		for(const lis of this.listeners) {
			lis?.onBeforeRestore();
		}
		this.dom.style.transform = '';

		this.progress = 0;

		this.calculateDims();

		for(const lis of this.listeners) {
			lis?.onAfterRestore();
		}

		this.updateTransform();
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

	// Disabled sections won't be accounted for
	disable(){
		if(this.disabled) return;
		this.disabled = true;
		this.dom.classList.add('fil-scroller__section-disabled');
		this.threshold = [0, 0];
	}

	enable(){
		if(!this.disabled) return;
		this.disabled = false;
		this.dom.classList.remove('fil-scroller__section-disabled')
	}

	get position() {

		if(!this.visible){
			this._position.x = 0;
			this._position.y = -this.w.h;
		}
		if(this.direction === D.TOP){
			this._position.x = 0;
			this._position.y = -this.scroll;
		}
		if(this.direction === D.BOTTOM){
			this._position.x = 0;
			this._position.y = this.scroll + (this.w.h - this.rect.height) - this.rect.top * 2;
		}
		if(this.direction === D.LEFT){
			this._position.x = this.widthOffset - this.scroll;
			this._position.y = -this.rect.top;
		}
		if(this.direction === D.RIGHT){
			this._position.x = this.scroll + (this.w.w - this.rect.width) - this.widthOffset;
			this._position.y = -this.rect.top;
		}

		return this._position;
	}

	updateTransform(){
		if(this.nativeScrolling) return;

		const wH = this.w.h;
		const wW = this.w.w;
		let px = this.position.x;
		let py = this.position.y;

		for(const s of this.sticky) {
			let tY, sY;
			switch(this.direction) {
				case D.TOP:
					tY = 1 - MathUtils.smoothstep(-this.threshold[1] + wH, -this.threshold[0] - wH, py);
					sY = tY * (this.threshold[1] - this.threshold[0] - 2*wH);
					s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(PRECISION)},0,1)`;
					break;
				case D.BOTTOM:
					// console.log(-this.threshold[1]+ wH, -this.threshold[0]-wH, py);
					tY = 1 - MathUtils.smoothstep(-this.threshold[1]+ wH, -this.threshold[0]-wH, py);
					sY = tY * (this.threshold[1] - this.threshold[0] - 2*wH);
					s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(PRECISION)},0,1)`;
					break;
				// case D.RIGHT:
				// 	tY = 1 - MathUtils.smoothstep(-this.threshold[1]+ wW, -this.threshold[0]-wW, px);
				// 	sY = tY * (this.threshold[1] - this.threshold[0] - 2*wW);
				// 	s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(PRECISION)},0,0,1)`;
				// 	break;
				case D.LEFT:
					tY = 1 - MathUtils.smoothstep(-this.threshold[1]+ wW, -this.threshold[0]-wW, px);
					sY = tY * (this.threshold[1] - this.threshold[0] - 2*wW);
					s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(PRECISION)},0,0,1)`;
					break;
			}
		}

		this.dom.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${px.toFixed(PRECISION)},${py.toFixed(PRECISION)},0,1)`;
	}

	protected show() {
		if(this.visible) return;

		this.animationIn();
		// this.dom.classList.remove('fil-scroller__disabled');
		this.dom.classList.add('fil-scroller__visible');
		this.visible = true;
	}

	protected hide() {
		if(!this.visible) return;

		this.animationOut();
		this.visible = false;
		this.progress = 0;
		// this.progressIn = 0;
		// this.progressOut = 0;
		this.delta = 0;
		this.dom.classList.remove('fil-scroller__visible');
		// this.dom.classList.add('fil-scroller__disabled');
		this.dom.style.setProperty('--fil-scroller-delta', '0');
		this.dom.style.setProperty('--fil-scroller-progress', '0');
	}

	update(){
		if(this.disabled) return;

		if(!this.visible){
			const margin = this.w.w;
			if (this.scroll + margin > this.threshold[0] && this.scroll + margin < this.threshold[1]) {
				this.closeToVisible = true;
			} else {
				this.closeToVisible = false;
			}
		}

		if(this.scroll > this.threshold[0] && this.scroll < this.threshold[1] ) {

			if(!this.visible) {
				this.show();
			}

			this.dom.style.setProperty('--fil-scroller-delta', `${this.delta.toFixed(PRECISION)}`);
			this.progress = MathUtils.smoothstep(this.threshold[0], this.threshold[1], this.scroll);
			this.dom.style.setProperty('--fil-scroller-progress', `${this.progress.toFixed(PRECISION)}`);

			this.updateTransform();

			return
		}


		if(!this.visible) return;

		this.hide();

		this.updateTransform();
	}
}