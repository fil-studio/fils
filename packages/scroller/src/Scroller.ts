import { MathUtils } from "@fils/math";
import { Section } from "./Section";
import { VirtualScrollBar } from "./VirtualScrollBar";

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
		width: 100%;
		height: 100%;
		position: absolute;
	}
	[fil-scroller][fil-scroller-native]{
		position: relative;
		height: auto;
		overflow: unset;
	}
	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
		will-change: auto;
	}
	[fil-scroller-sticky]{
		position: sticky;
		top: 0;
	}
	[fil-scroller-section].fil-scroller__visible {
		opacity: 1;
		visibility: visible;
		will-change: transform, scroll-position;
	}
	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
	}

	.fil-scroller-disabled,
	.fil-scroller-disabled body {
		overflow: hidden !important;
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
	showVirtualScrollBar?:boolean;
	customScrollBar?:VirtualScrollBar;
	touchForce?:number;
	wheelForce?:number;
	customContainer?:HTMLElement;
	customContent?:HTMLElement;
	allowVerticalScrolling?:boolean;
	allowHorizontalScrolling?:boolean;
}

const DEFAULT_EASING = 0.16;

export class Scroller {
	container:HTMLElement;
	content:HTMLElement;

	sectionsWrapper: HTMLElement;
	virtualScrollBar:VirtualScrollBar;
	isBody:boolean = false;

	scrollDirection = {
		vertical: true,
		horizontal: false
	}

	force = {
		touch: 1,
		wheel: 1
	}

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

	useNative:boolean = false;

	constructor(params?:FilScrollerParameters){
		if(params.customContainer) {
			this.container = params.customContainer;
		} else this.container = document.querySelector('[fil-scroller]') as HTMLElement;
		if(params.customContent) {
			this.content = params.customContent;
		} else this.content = this.container.querySelector('[fil-scroller-content]') as HTMLElement;

		this.isBody = this.container === document.body;

		// Allow scroll events
		this.scrollDirection.vertical = !(params.allowVerticalScrolling === false);
		this.scrollDirection.horizontal = params.allowHorizontalScrolling === true;

		if(!this.container){
			console.warn('Fil Scroller - No `[fil-scroller]` element');
			return;
		}

		this.sectionsWrapper = this.container.querySelector('[fil-scroller-sections-wrapper]');
		if (!this.sectionsWrapper) {
			console.log(`Fil Scroller - No '[fil-scroller-sections-wrapper]' element, using [fil-scroller-content] as wrapper`);
			this.sectionsWrapper = this.content;
		}

		this.ease = params?.easing || DEFAULT_EASING;
		this.useNative = params?.useNative === true;
		this._direction = params?.direction || D.TOP;

		if(params.touchForce) this.force.touch = params.touchForce;
		if(params.wheelForce) this.force.wheel = params.wheelForce;

		if(this.useNative) {
			console.log('Using Native Scroll');
			document.querySelector('[fil-scroller]').setAttribute('fil-scroller-native', '');

			if (this._direction !== D.TOP) {
				console.warn('Native scrolling supports only D.TOP vertical direction! Forcing D.TOP...');
				this._direction = D.TOP;
			}
			this.ease = 1; // force no easing

		} else if(params?.showVirtualScrollBar){
			this.virtualScrollBar = params?.customScrollBar || new VirtualScrollBar(0);
		}

		this.addStyles();
		this.refresh();
		this.addEventListeners();
	}

	get enabled(): boolean {
		return !this.disabled;
	}

	// Disable - enable
	disable(){
		if(this.disabled) return;
		this.disabled = true;
		for(const section of this.sections) section.disabled = this.disabled;
		const b = document.body;
		if(this.container != b) this.container.setAttribute('fil-scroller', 'disabled');
		else document.documentElement.classList.add('fil-scroller-disabled');
		if(this.virtualScrollBar) {
			this.virtualScrollBar.dom.style.display = 'none';
		}
	}
	enable(){
		if(!this.disabled) return;
		this.disabled = false;
		for(const section of this.sections) section.disabled = this.disabled;

		const b = document.body;
		if (this.container != b) this.container.setAttribute('fil-scroller', '');
		else document.documentElement.classList.remove('fil-scroller-disabled');
		if(this.virtualScrollBar) {
			this.virtualScrollBar.dom.style.display = 'block';
		}
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

		// Get only first level child sections
		const sections:NodeListOf<HTMLElement> = this.sectionsWrapper.querySelectorAll(':scope > [fil-scroller-section]');

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
		const ww = window.innerWidth;
		const wh = window.innerHeight; // this.useNative ? window.outerHeight : window.innerHeight;
		// if(this.w.w === ww && this.w.h === wh) return;
		// console.log('resize');

		this.w.w = ww;
		this.w.h = wh;
		for(const section of this.sections) {
			section.w = this.w;
			section.restore(resizing);
		}

		this.updateSections();

		let w = 0;
		for(let section of this.sections) {
			section.widthOffset = w;
			w += section.sticky.length ? section.rect.width : section.rect.width;
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
		if(this.position.target <= this.edges[0] && delta > 0) {
			this.position.target = this.edges[0];
		}
		if(this.position.target >= this.edges[1] && delta < 0) {
			this.position.target = this.edges[1];
		}

		this.position.target = this.position.target+delta;
	}

	addEventListeners(){
		if(this.useNative) return;

		window.addEventListener('wheel', (e) => {
			if(this.disabled) return;

			let delta = e.deltaY;
			if(this.scrollDirection.horizontal && this.scrollDirection.vertical){
				const d = Math.abs(e.deltaX) > Math.abs(e.deltaY);
				delta = d ? e.deltaX : e.deltaY;
			} else if(this.scrollDirection.horizontal){
				delta = e.deltaX;
			}

			this.updateExternal(delta * this.force.wheel);
		})

		window.addEventListener('touchstart', (e) => {
			if(this.disabled) return;
			const e1 = e.touches[0];
			touchWheel.startY = e1.clientY;
			touchWheel.startDrag = performance.now();
		}, {
			passive: false
		})

		window.addEventListener('touchend', (e) => {
			if(this.disabled) return;
			if(performance.now() - touchWheel.startDrag < 100) {
				this.updateExternal(-touchWheel.delta * 10 * this.force.touch);
			}

			touchWheel.delta = 0;
		}, {
			passive: false
		})

		window.addEventListener('touchmove', (e) => {
			if(this.disabled) return;
			e.preventDefault();
			const e1 = e.touches[0];
			touchWheel.delta = e1.clientY - touchWheel.startY;
			touchWheel.startY = e1.clientY;

			this.updateExternal(-touchWheel.delta * this.force.touch);
		}, {
			passive: false
		})
	}

	refresh(forceTop:boolean = true) {
		this.loaded = false;

		if(forceTop){
			this.position.current = 0;
			if(this.useNative) {
				this.container.scrollTop = 0;
			}
		}
		this.position.target = this.position.current;

		this.sections = [];
		this.create();

		// Fix a weird bug in horizontal scrolling
		// by forcing restore once more (To-Do: Look at it!!)
		if(this.isHorizontal()) {
			this.restore();
		}
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
			this.position.target = this.isBody ? window.scrollY : this.container.scrollTop;
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
		if(!this.useNative && this.virtualScrollBar) {
			this.virtualScrollBar.contentHeight = this.distance;
		}

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

		if(!this.useNative && this.virtualScrollBar) {
			this.virtualScrollBar.progress = this.position.current / this.edges[1];
		}

		this.position.current = MathUtils.clamp(this.position.current, this.edges[0], this.edges[1]);

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

		if(Math.abs(this.delta) > .001) {
			this.updateSections();
		}

	}

	/**
	 * Scrolls to a given section
	 * @param k index of section to scroll to
	 * @returns
	 */
	scrollToSection(k:number) {
		if(k<0 || k>this.sections.length-1) {
			return console.warn('Section Out of bounds!');
		}

		const sec = this.sections[k];

		if(this.useNative) {
			// NOTE: If you are in native mode you might just
			// want to animate using gsap or raf lerp instead
			const top = Math.min(sec.rect.top, this.distance-this.w.h);
			this.container.scrollTop = top;
		} else {
			if(!this.isHorizontal()) {
				const top = Math.min(sec.rect.top, this.distance-this.w.h);
				this.position.target = top;
			} else {
				const l = Math.min(sec.widthOffset, this.distance);
				this.position.target = l;
			}
		}
	}

	/**
	 * Scrolls to next section
	 * @param section Section from where you are scrolling from
	 */
	scrollToNextSection(section:Section) {
		this.scrollToSection(this.sections.indexOf(section)+1);
	}

	/**
	 * Scrolls to previous section
	 * @param section Section from where you are scrolling from
	 */
	scrollToPrevSection(section:Section) {
		this.scrollToSection(this.sections.indexOf(section)-1);
	}
}