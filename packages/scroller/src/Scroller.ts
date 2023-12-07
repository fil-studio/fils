import { MathUtils } from "@fils/math";
import { Section } from "./Section";
import { VirtualScrollBar } from "./VirtualScrollBar";
import { style } from "./partials/ScrollerStyles";
import { DEFAULT_EASING, FilScrollerParameters } from "./partials/ScrollerConfig";
import { ScrollerEvents } from "./partials/ScrollerEvents";

interface position {
	current: number,
	target: number,
}

export enum D {
	TOP,
	BOTTOM,
	LEFT,
	RIGHT
}

export class Scroller {
	container:HTMLElement;
	content:HTMLElement;

	sectionsWrapper: HTMLElement;
	virtualScrollBar:VirtualScrollBar;
	isBody:boolean = false;

	progress: number = 0;

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
		target: 0,
	};

	overScrolling: boolean = false;

	private _direction: D = D.TOP;

	sections:Section[] = [];

	loaded: boolean = false;
	// paused: boolean = false;
	disabled: boolean = false;

	distance: number = 0;
	private _ease: number;

	delta: number = 0;

	w:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	edges:number[] = [0,0];
	loop: boolean = false;
	loopAvailable: boolean = true;

	useNative:boolean = false;

	events: ScrollerEvents;

	constructor(params?:FilScrollerParameters){
		if(params.customContainer) {
			this.container = params.customContainer;
		} else this.container = document.querySelector('[fil-scroller]') as HTMLElement;

		if(params.customContent) {
			this.content = params.customContent;
		} else this.content = this.container.querySelector('[fil-scroller-content]') as HTMLElement;

		if(params.loop) this.loop = params.loop;

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

		this.events = new ScrollerEvents(this);
		this.addEventListeners(this.container);
	}

	// --------------------------------------------------- EVENTS
	private addEventListeners(target?: HTMLElement) {
		if (this.useNative) return;
		this.events.addEventListeners(target)
	}
	// Block - Unblock
	block() {		this.events.block();	}
	unblock() {	this.events.unblock(); }

	// get enabled(): boolean {
	// 	return !this.disabled;
	// }

	// Disable - enable
	// disable(){
	// 	if(this.disabled) return;
	// 	this.disabled = true;
	// 	for(const section of this.sections) section.disabled = this.disabled;
	// 	const b = document.body;
	// 	if(this.container != b) this.container.setAttribute('fil-scroller', 'disabled');
	// 	else document.documentElement.classList.add('fil-scroller-disabled');
	// 	if(this.virtualScrollBar) {
	// 		this.virtualScrollBar.dom.style.display = 'none';
	// 	}
	// }
	// enable(){
	// 	if(!this.disabled) return;
	// 	this.disabled = false;
	// 	for(const section of this.sections) section.disabled = this.disabled;

	// 	const b = document.body;
	// 	if (this.container != b) this.container.setAttribute('fil-scroller', '');
	// 	else document.documentElement.classList.remove('fil-scroller-disabled');
	// 	if(this.virtualScrollBar) {
	// 		this.virtualScrollBar.dom.style.display = 'block';
	// 	}
	// }



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

	restore(){
		if(this.disabled) return;
		console.log('Restore');

		const containerRect = this.container.getBoundingClientRect();

		const vertical = !this.isHorizontal();

		this.w.w = containerRect.width;
		this.w.h = containerRect.height;

		for(const section of this.sections) {
			section.w = this.w;
			section.restore();
		}

		let w = 0;
		for(let section of this.sections) {
			if(section.disabled) continue;
			section.widthOffset = w;
			w += vertical ? section.rect.height : section.rect.width;
		}

		this.updateSections();
		this.updateCheckHeight();
	}

	// contentChanged() {
	// 	this.restore();
	// 	this.update();
	// }

	updateExternal(delta:number){

		if(this.loop && this.loopAvailable)	this.position.target += delta;
		else this.position.target = MathUtils.clamp(this.position.target + delta, this.edges[0], this.edges[1]);

	}

	dispose(){
		this.loaded = false;
		this.sections = [];
		this.create();
	}

	refresh(forceTop:boolean = true) {

		if(forceTop){
			this.position.current = 0;
			if(this.useNative) {
				this.container.scrollTop = 0;
			}
		}
		this.position.target = this.position.current;

		this.dispose();

		this.restore();
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
			if(section.disabled) continue;
			if(vertical) this.distance += section.rect.height;
			else this.distance += section.sticky.length ? section.rect.height : section.rect.width;
		}

		this.content.style.height = `${this.distance}px`;
		if(!this.useNative && this.virtualScrollBar) {
			this.virtualScrollBar.contentHeight = this.distance;
		}

		const d = vertical ? this.w.h : this.w.w;
		this.edges[0] = 0;
		this.edges[1] = this.distance - d;
		this.loopAvailable = this.distance >= d * 2;

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
			this.virtualScrollBar.progress = MathUtils.clamp(this.position.current / this.edges[1], 0, 1);
		}

		if(!this.loop || !this.loopAvailable){
			this.position.current = MathUtils.clamp(this.position.current, this.edges[0], this.edges[1]);
		}

		const newDelta = (this.position.current - previous) * 0.01;
		this.delta = MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1);

	}

	// This will seameless restart the loop in both directions
	updateLoop(){
		if(!this.loop) return;
		if(!this.loopAvailable) return;

		const vertical = !this.isHorizontal();
		const d = vertical ? this.w.h : this.w.w;
		const distanceBetweenCurrentAndTarget = this.position.target - this.position.current;

		// Todo canviar aixo amb this.distance
		if (this.position.current < this.edges[0] - d) {
			this.position.current = this.distance - d;
			this.position.target = this.position.current + distanceBetweenCurrentAndTarget;
		}

		if (this.position.current > this.distance) {
			this.position.current = this.edges[0];
			this.position.target = this.position.current + distanceBetweenCurrentAndTarget;
		}
	}

	updateSections(){

		for(let i = 0, len = this.sections.length; i < len; i++) {
			const section = this.sections[i];
			section.scroll = this.position.current;
			section.delta = this.delta;
			section.update();
		}

		// This will make sections believe they are active if the current position is between edges and loop restart
		if(!this.loop) return;
		if(!this.loopAvailable) return;


		const vertical = !this.isHorizontal();
		const d = vertical ? this.w.h : this.w.w;

		let p = 0;

		// Make last sections believe it's their turn
		if(this.position.current < this.edges[0]) {
			let l = this.sections.length - 1;
			for(let i = l; i > 0; i--){
				if (p > d) break;
				const section = this.sections[i];
				section.scroll = this.position.current + this.distance;
				section.delta = this.delta;
				section.update();
				p += vertical ? section.rect.height : section.rect.width;
			}
		}



		if(this.position.current > this.distance - d){

			let l = this.sections.length - 1;
			for (let i = 0; i < l; i++) {
				if (p > d) break;

				const section = this.sections[i];
				section.scroll = this.position.current - this.distance;
				section.delta = this.delta;
				section.update();
				p += vertical ? section.rect.height : section.rect.width;
			}

		}



	}


	update(){
		if(!this.loaded) return;

		this.updateTarget();
		this.updateScrollValues();
		this.updateLoop();

		if(Math.abs(this.delta) > .001) {
			this.updateSections();
		}

		// Update container classes
		this.container.classList.toggle('fil-scroller__top', this.position.current <= this.edges[0] + 0.5);
		this.container.classList.toggle('fil-scroller__bottom', this.position.current >= this.edges[1] - 0.5);

		this.progress = MathUtils.truncateDecimals(MathUtils.map(this.position.current, this.edges[0], this.edges[1], 0, 1), 3);

	}

	/**
	 * Scrolls to a given position
	 * @param k index of section to scroll to
	 * @returns
	 */
	scrollTo(k:number){
		const _k = MathUtils.clamp(k, this.edges[0], this.edges[1]);
		this.position.target = _k;

		if(this.useNative){
			this.container.scrollTop = k;
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