import { MathUtils } from "@fils/math";
import { D } from "./Scroller";
import { ScrollerConfig } from "./partials/ScrollerConfig";

export interface ScrollerSectionListener {
	onAnimationIn?();
	onAnimationOut?();
	onBeforeRestore?();
	onAfterRestore?();
}

const PRECISION = 5;

// Todo
// -- treure lo de this.containerSize, que ho miri de config
// -- bug disabled i restore

export class Section {
	id: string;
	dom: HTMLElement;
	config: ScrollerConfig;

	// Section rect
	rect: DOMRect;
	// Section offset in relation to the other sections
	offset: number;

	containerSize:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	progress: number = 0;
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

	constructor(i:number, dom: HTMLElement, config: ScrollerConfig){

		// Set ID
		this.dom = dom;

		const id = this.dom.getAttribute('fil-scroller-section');
		if(id) this.id = id;
		else this.id = `section-${i}`;

		this.config = config;

		const s = dom.querySelectorAll('[fil-scroller-sticky]');
		s.forEach(value=> {
			this.sticky.push(value as HTMLElement);
		})

		this.calculateThreshold();

	}

	restore() {
		this.onBeforeRestore();

		this.dom.style.transform = '';

		this.progress = 0;

		// Section offset in relation to the other sections
		// todo aqui el offset ha d'estar 100% canviat abans de fer restore, mirar que estigui bé aixo
		this.calculateThreshold();

		this.updateTransform();

		this.onAfterRestore();

	}
	calculateThreshold() {

		this.rect = this.dom.getBoundingClientRect();

		// VERTICAL SCROLL THRESHOLDS
		if(this.config.isVertical()) {

			this.threshold = [
				this.rect.top - this.containerSize.h,
				this.rect.top + this.rect.height
			];

			if(this.config.useNative) {
				this.threshold[0] += this.scroll;
				this.threshold[1] += this.scroll;
			}

		} else {

			this.threshold = [
				// Section offset in relation to the other sections
				this.offset - this.containerSize.w,
				// Section offset in relation to the other sections
				this.offset + this.rect.width
			];
		}

	}

	// Listeners
	addSectionListener(lis: ScrollerSectionListener) {
		if (this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}
	removeSectionListener(lis: ScrollerSectionListener) {
		this.listeners.splice(
			this.listeners.indexOf(lis),
			1
		);
	}
	onBeforeRestore(){
		for (const lis of this.listeners) {
			lis?.onBeforeRestore();
		}
	}
	onAfterRestore(){
		for (const lis of this.listeners) {
			lis?.onAfterRestore();
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

	// Disabled sections won't be accounted for
	disable(){
		if(this.disabled) return;
		this.disabled = true;
		this.dom.classList.add('fil-scroller__section-disabled');
	}
	enable(){
		if(!this.disabled) return;
		this.disabled = false;
		this.dom.classList.remove('fil-scroller__section-disabled')
	}

	// Show - Hide
	protected show() {
		if(this.visible) return;

		this.animationIn();

		this.dom.classList.add('fil-scroller__visible');
		this.visible = true;
	}
	protected hide() {
		if(!this.visible) return;

		this.animationOut();

		this.visible = false;
		this.progress = 0;
		this.delta = 0;
		this.dom.classList.remove('fil-scroller__visible');
		this.dom.style.setProperty('--fil-scroller-delta', '0');
		this.dom.style.setProperty('--fil-scroller-progress', '0');
	}

	// ------------------------- UPDATE
	updateCloseToVisible(){
		if(this.visible) return;

		const margin = this.containerSize.w;
		const close1 = this.scroll + margin > this.threshold[0];
		const close2 = this.scroll + margin < this.threshold[1];
		const inRange = close1 && close2;
		if (inRange != this.closeToVisible){
			this.dom.classList.toggle('fil-scroller__section-close-to-visible', inRange);
			this.closeToVisible = inRange;
		}
	}
	updateVisible(){

		// If its visible then
		if (this.scroll > this.threshold[0] && this.scroll < this.threshold[1]) {

			if (!this.visible) {
				this.show();
			}

			this.dom.style.setProperty('--fil-scroller-delta', `${this.delta.toFixed(PRECISION)}`);
			this.progress = MathUtils.smoothstep(this.threshold[0], this.threshold[1], this.scroll);
			this.dom.style.setProperty('--fil-scroller-progress', `${this.progress.toFixed(PRECISION)}`);

			this.updateTransform();

			return;
		}

		// if it's not between thresholds and its visible, hide it
		if (this.visible) {
			this.hide();
			this.updateTransform();
		}
	}
	updateSticky(){
		const cH = this.containerSize.h;
		const cW = this.containerSize.w;
		const t0 = this.threshold[0];
		const t1 = this.threshold[1];
		let px = this.position.x;
		let py = this.position.y;

		for (const s of this.sticky) {
			let tY, sY;
			switch (this.config.direction) {
				case D.TOP:
					tY = 1 - MathUtils.smoothstep(-t1 + cH, -t0 - cH, py);
					sY = tY * (t1 - t0 - 2 * cH);
					s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(PRECISION)},0,1)`;
					break;
				case D.BOTTOM:
					tY = 1 - MathUtils.smoothstep(-t1 + cH, -t0 - cH, py);
					sY = tY * (t1 - t0 - 2 * cH);
					s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(PRECISION)},0,1)`;
					break;
				// case D.RIGHT:
				// 	tY = 1 - MathUtils.smoothstep(-t1+ cW, -t0-cW, px);
				// 	sY = tY * (t1 - t0 - 2*cW);
				// 	s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(PRECISION)},0,0,1)`;
				// 	break;
				case D.LEFT:
					tY = 1 - MathUtils.smoothstep(-t1 + cW, -t0 - cW, px);
					sY = tY * (this.threshold[1] - t0 - 2 * cW);
					s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(PRECISION)},0,0,1)`;
					break;
			}
		}
	}
	updateTransform() {
		if (this.config.useNative) return;

		this.updateSticky();

		let px = this.position.x;
		let py = this.position.y;
		this.dom.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${px.toFixed(PRECISION)},${py.toFixed(PRECISION)},0,1)`;
	}
	get position() {

		// if (!this.visible) {
		// 	this._position.x = 0;
		// 	this._position.y = -this.containerSize.h;
		// }

		if (this.config.direction === D.TOP) {
			this._position.x = 0;
			this._position.y = -this.scroll;
		}
		if (this.config.direction === D.BOTTOM) {
			this._position.x = 0;
			this._position.y = this.scroll + (this.containerSize.h - this.rect.height) - this.rect.top * 2;
		}
		if (this.config.direction === D.LEFT) {
			// Section offset in relation to the other sections
			this._position.x = this.offset - this.scroll;
			this._position.y = -this.rect.top;
		}
		if (this.config.direction === D.RIGHT) {
			// Section offset in relation to the other sections
			this._position.x = this.scroll + (this.containerSize.w - this.rect.width) - this.offset;
			this._position.y = -this.rect.top;
		}


		return this._position;
	}

	update(){

		// Toggle closeToVisible if it's close
		this.updateCloseToVisible();
		this.updateVisible();

	}
}