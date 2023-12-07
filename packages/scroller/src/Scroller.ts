import { MathUtils } from "@fils/math";
import { Section } from "./Section";
import { VirtualScrollBar } from "./VirtualScrollBar";
import { DEFAULT_EASING, FilScrollerParameters, ScrollerConfig } from "./partials/ScrollerConfig";
import { ScrollerEvents } from "./partials/ScrollerEvents";
import { ScrollerStyles } from "./partials/ScrollerStyles";

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

	virtualScrollBar:VirtualScrollBar;

	progress: number = 0;

	position:position = {
		current: 0,
		target: 0,
	};

	sections:Section[] = [];

	loaded: boolean = false;

	distance: number = 0;

	delta: number = 0;

	w:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	edges:number[] = [0,0];
	loopAvailable: boolean = true;

	config: ScrollerConfig;
	styles: ScrollerStyles;
	events: ScrollerEvents;

	constructor(params?:FilScrollerParameters){

		if(params?.showVirtualScrollBar){
			this.virtualScrollBar = params?.scrollbar || new VirtualScrollBar(0);
		}

		// Init config
		this.config = new ScrollerConfig(params);

		// Init Styles
		this.styles = new ScrollerStyles(this);

		// Init Events
		this.events = new ScrollerEvents(this);
		this.addEventListeners(this.config.container);

		this.refresh();
	}

	// --------------------------------------------------- EVENTS
	private addEventListeners(target?: HTMLElement) {
		if (this.config.useNative) return;
		this.events.addEventListeners(target)
	}
	// Block - Unblock
	block() {		this.events.block();	}
	unblock() {	this.events.unblock(); }

	// Setters - Getters
	set direction(d: D | number){
		this.config.setDirection(d);
		for(const section of this.sections) section.direction = this.config.direction;
		this.restore();
	}
	get direction(){
		return this.config.direction;
	}
	set ease(newEase:number) {
		this.config.easing = newEase;
	}
	get ease(){
		return this.config.easing;
	}

	// Get scroller direction
	isHorizontal() {
		return this.config.isHorizontal();
	}
	isVertical() {
		return this.config.isVertical();
	}


	addSections(){

		// Get only first level child sections
		const sections:NodeListOf<HTMLElement> = this.config.content.querySelectorAll(':scope > [fil-scroller-section]');

		for(let i = 0, len = sections.length; i<len; i++){
			const _section = sections[i];
			const id = _section.getAttribute('fil-scroller-section') ? _section.getAttribute('fil-scroller-section') : `section-${i}`;
			const section = new Section(id, _section, this.direction, this.config.useNative);
			this.sections.push(section);
		}
	}


	restore(){

		const containerRect = this.config.container.getBoundingClientRect();

		const vertical = this.isVertical();

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

	updateExternal(delta:number){

		if(this.config.loop && this.loopAvailable)	this.position.target += delta;
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
			if(this.config.useNative) {
				this.config.container.scrollTop = 0;
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
		if(this.config.useNative) {
			this.position.target = this.config.container.scrollTop;
		}
	}

	updateCheckHeight(){
		this.distance = 0;

		const vertical = this.isVertical();

		for(let i = 0, len = this.sections.length; i < len; i++) {
			const section = this.sections[i];
			if(section.disabled) continue;
			if(vertical) this.distance += section.rect.height;
			else this.distance += section.sticky.length ? section.rect.height : section.rect.width;
		}

		this.config.content.style.height = `${this.distance}px`;
		if(!this.config.useNative && this.virtualScrollBar) {
			this.virtualScrollBar.contentHeight = this.distance;
		}

		const d = vertical ? this.w.h : this.w.w;
		this.edges[0] = 0;
		this.edges[1] = this.distance - d;
		this.loopAvailable = this.distance >= d * 2;

	}

	updateScrollValues() {

		const previous = this.position.current;

		this.position.current = MathUtils.lerp(
			this.position.current,
			this.position.target,
			this.config.easing
		);

		if(Math.abs(this.position.target-this.position.current) < 1) {
			this.position.current = this.position.target;
		}

		if(!this.config.useNative && this.virtualScrollBar) {
			this.virtualScrollBar.progress = MathUtils.clamp(this.position.current / this.edges[1], 0, 1);
		}

		if(!this.config.loop || !this.loopAvailable){
			this.position.current = MathUtils.clamp(this.position.current, this.edges[0], this.edges[1]);
		}

		const newDelta = (this.position.current - previous) * 0.01;
		this.delta = MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1);

	}

	// This will seameless restart the loop in both directions
	updateLoop(){
		if(!this.config.loop) return;
		if(!this.loopAvailable) return;

		const vertical = this.isVertical();
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
		if(!this.config.loop) return;
		if(!this.loopAvailable) return;


		const vertical = this.isVertical();
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

		this.styles.update();

		this.updateTarget();
		this.updateScrollValues();
		this.updateLoop();

		if(Math.abs(this.delta) > .001) {
			this.updateSections();
		}

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

		if(this.config.useNative){
			this.config.container.scrollTop = k;
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

		if(this.config.useNative) {
			// NOTE: If you are in native mode you might just
			// want to animate using gsap or raf lerp instead
			const top = Math.min(sec.rect.top, this.distance-this.w.h);
			this.config.container.scrollTop = top;
		} else {
			if(this.isVertical()) {
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