import { MathUtils } from "@fils/math";
import { Section } from "./Section";

interface position {
	current: number,
	target: number
}

export enum D {
	TOP,
	BOTTOM,
	LEFT,
	RIGHT
}

const style = `
	html {
		overscroll-behavior: none;
	}
	[fil-scroller]{
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		position: fixed;
	}
	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
		will-change: auto;
	}
	[fil-scroller-sticky]{
		position: sticky;
	}
	[fil-scroller-section].fil-scroller__visible {
		opacity: 1;
		visibility: visible;
		will-change: transform, scroll-position;
	}
	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
	}
	[fil-scroller-section].fil-scroller__visible [fil-scroller-sticky] {
		will-change: transform;
	}
`;

const touchWheel = {
	delta: 0,
	startY: 0,
	amp: 10,
	startDrag: 0
}

export type FilScrollerParameters = {
	useNative?:boolean;
	easing?:number;
	direction?:D;
}

const DEFAULT_EASING = 0.16;

export class Scroller {
	container:HTMLDivElement;
	content:HTMLDivElement;

	position:position = {
		current: 0,
		target: 0
	};

	private _direction: D = D.TOP;

	sections:Section[] = [];

	private loaded: boolean = false;
	// private paused: boolean = false;
	private disabled: boolean = false;

	distance: number = 0;
	private _ease: number;

	delta: number = 0;

	w:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	edges:number[] = [0,0];

	pointerElements:NodeListOf<HTMLElement>;

	private useNative:boolean = false;

	constructor(params?:FilScrollerParameters){
		this.container = document.querySelector('[fil-scroller]') as HTMLDivElement;
		this.content = this.container.querySelector('[fil-scroller-content]') as HTMLDivElement;

		if(!this.container){
			console.warn('Fil Scroller - No `[fil-scroller]` element');
			return;
		}

		this.ease = params?.easing || DEFAULT_EASING;
		this.useNative = params?.useNative === true;
		this._direction = params?.direction || D.TOP;

		if(this.useNative) {
			if(this._direction !== D.TOP) {
				console.warn('Native scrolling supports only D.TOP vertical direction! Forcing D.TOP...');
				this._direction = D.TOP;
			}
			this.ease = 1; // force no easing
		}

		console.log(this.ease);

		if(this.useNative) {
			console.log('Using Native Scroll');
			this.container.style.overflow = 'auto';
		}

		this.addStyles();
		this.refresh();
		this.addEventListeners();
	}

	// Disable - enable
	disable(){
		if(this.disabled) return;
		this.disabled = true;
		for(const section of this.sections) section.disabled = this.disabled;
		this.container.setAttribute('fil-scroller', 'disabled');
	}
	enable(){
		if(!this.disabled) return;
		this.disabled = false;
		for(const section of this.sections) section.disabled = this.disabled;
		this.container.setAttribute('fil-scroller', '');
	}

	set direction(val: D | number){
		if(this.useNative && val !== D.TOP) {
			console.warn('Native scrolling supports only D.TOP vertical direction! Forcing D.TOP...');
			this._direction = D.TOP;
		} else {
			this._direction = MathUtils.clamp(val, 0, 3);
		}
		for(const section of this.sections) section.direction = this.direction;
		this.restore();
	}
	get direction(){
		return this._direction;
	}

	set ease(newEase:number) {
		this._ease = newEase;
	}
	get ease(){
		return this._ease;
	}

	addStyles(){

		document.documentElement.setAttribute('fil-scroller-parent', '')

		const _styles = document.createElement('style');
		_styles.textContent = style;
		document.head.append(_styles);

	}

	addSections(){

		const sections:NodeListOf<HTMLElement> = this.container.querySelectorAll('[fil-scroller-section]');

		for(let i = 0, len = sections.length; i<len; i++){
			const _section = sections[i];
			const id = _section.getAttribute('fil-scroller-section') ? _section.getAttribute('fil-scroller-section') : `section-${i}`;
			const section = new Section(id, _section, this.direction, this.useNative);
			this.sections.push(section);
		}
	}

	isHorizontal() {
		return this.direction === D.LEFT || this.direction === D.RIGHT;
	}

	restore(resizing:boolean=false){
		this.w.w = window.innerWidth;
		this.w.h = window.innerHeight;
		for(const section of this.sections) {
			section.w = this.w;
			section.restore(resizing);
		}

		this.updateSections();

		// this.pointerElements = this.html.scroller.querySelectorAll('[fil-scroller-pointer]');

		let w = 0;
		for(let section of this.sections) {
			section.widthOffset = w;
			w += section.sticky.length ? section.rect.height : window.innerWidth;
		}

		this.updateCheckHeight();
	}

	contentChanged() {
		this.restore();
		this.update();
	}

	resize(){
		this.restore(true);
	}

	updateExternal(delta:number){
		this.position.target = MathUtils.clamp(this.position.target+delta, this.edges[0], this.edges[1]);
	}

	addEventListeners(){
		if(this.useNative) return;

		this.container.addEventListener('wheel', (e) => {
			this.updateExternal(e.deltaY);
		})

		this.container.addEventListener('touchstart', (e) => {

			const e1 = e.touches[0];
			touchWheel.startY = e1.clientY;
			touchWheel.startDrag = performance.now();
		}, {
			passive: false
		})

		this.container.addEventListener('touchend', (e) => {
			if(performance.now() - touchWheel.startDrag < 1000) {
				this.updateExternal(-touchWheel.delta * 25);
			}

			touchWheel.delta = 0;
		}, {
			passive: false
		})

		this.container.addEventListener('touchmove', (e) => {
			const e1 = e.touches[0];
			touchWheel.delta = e1.clientY - touchWheel.startY;
			touchWheel.startY = e1.clientY;

			this.updateExternal(-touchWheel.delta);
		}, {
			passive: false
		})
	}

	refresh(forceTop:boolean = true) {

		this.loaded = false;

		if(forceTop){
			// this.html.scroller.scrollTop = 0;
			this.position.current = 0;
		}
		// this.position.current = this.html.scroller.scrollTop;
		this.position.target = this.position.current;

		this.sections = [];

		this.create();

	}

	create(){

		this.addSections();

		this.restore();

		if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

		console.log('Fil Scroller - Loaded');

		this.loaded = true;

	}

	updateTarget(){
		if(this.useNative) {
			this.position.target = this.container.scrollTop;
		}
	}

	updateCheckHeight(){
		this.distance = 0;

		const vertical = !this.isHorizontal();

		for(let i = 0, len = this.sections.length; i < len; i++) {
			const section = this.sections[i];
			if(vertical) this.distance += section.rect.height;
			else this.distance += section.sticky.length ? section.rect.height : section.rect.width;
		}

		// If horizontal the difference between height and width must be taken care of.
		const dw = this.w.h - this.w.w;
		if(!vertical) this.distance += dw;

		this.content.style.height = `${this.distance}px`;

		this.edges[1] = vertical ? this.distance - this.w.h : this.distance - this.w.w - dw;
	}

	updateScrollValues() {

		const previous = this.position.current;

		if(this.disabled) {
			this.position.current = this.position.target;
		} else {

			this.position.current = MathUtils.lerp(
				this.position.current,
				this.position.target,
				this.ease
			);

			if(Math.abs(this.position.target-this.position.current) < 1) {
				this.position.current = this.position.target;
			}

		}

		const newDelta = (this.position.current - previous) * 0.01;
		this.delta = MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1)
	}

	updateSections(){

		const scroll = this.position.current;
		for(let i = 0, len = this.sections.length; i < len; i++) {
			const section = this.sections[i];
			section.scroll = scroll;
			section.delta = this.delta;
			section.update();
		}

	}

	update(){
		if(!this.loaded) return;

		// console.log(this.position.current);

		this.updateTarget();
		this.updateScrollValues();

		if(Math.abs(this.delta) > .01) {
			this.updateSections();
		}
		
	}
}