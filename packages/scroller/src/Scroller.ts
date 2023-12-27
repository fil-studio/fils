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

export const PRECISION = 5;
const SNAP_THRESHOLD = 0.005;


export class Scroller {

	virtualScrollBar:VirtualScrollBar;
	sections: Section[] = [];

	loaded: boolean = false;

	progress: number = 0;
	position:position = {
		current: 0,
		target: 0,
	};
	distance: number = 0;
	delta: number = 0;

	containerSize:{w:number, h:number} = {
		w: 0,
		h: 0
	};

	edges:number[] = [0,0];

	config: ScrollerConfig;
	styles: ScrollerStyles;
	events: ScrollerEvents;

	constructor(params?:FilScrollerParameters){

		// Init config
		this.config = new ScrollerConfig(params);
		if(this.config.showVirtualScrollBar) {
			this.virtualScrollBar = this.config.scrollbar || new VirtualScrollBar(0);
		}

		// Init Styles
		this.styles = new ScrollerStyles(this);

		// Init Events
		this.events = new ScrollerEvents(this);
		if(!this.config.useNative) this.events.addEventListeners(this.config.container);

		this.refresh();
	}

	// --------------------------------------------------- EVENTS
	// Block - Unblock
	block() {		this.events.block();	}
	unblock() {	this.events.unblock(); }

	// Setters - Getters
	set direction(d: D | number){
		this.config.setDirection(d);
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

	getSectionIndex(s:Section){
		for(let i = 0; i < this.sections.length; i++){
			if(this.sections[i] === s) return i;
		}
		return 0;
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
			const dom = sections[i];
			const section = new Section(i, dom, this.config);
			this.sections.push(section);
		}
	}

	restore(){

		const containerRect = this.config.container.getBoundingClientRect();

		const vertical = this.isVertical();

		this.containerSize.w = containerRect.width;
		this.containerSize.h = containerRect.height;

		let w = 0;
		for(let section of this.sections) {
			section.containerRect = containerRect;
			section.offset = w;
			if(section.disabled) continue;
			w += vertical ? section.rect.height : section.rect.width;
		}

		for (const section of this.sections) {
			section.restore();
		}

		this.updateSections();
		this.updateCheckHeight();
	}

	dispose(){
		this.loaded = false;
		this.sections = [];
		this.create();
	}

	stop(){
		this.delta = 0;
		this.position.target = this.position.current;
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

	}

	create(){
		this.addSections();
		this.restore();

		if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

		console.log('Fil Scroller - Loaded');

		this.loaded = true;
	}

	updateExternalByType(_delta:number, type: 'touch' | 'wheel'){
		const force = type === 'touch' ? this.config.force.touch : this.config.force.wheel;
		const delta = _delta * force;
		this.updateExternal(delta);
	}

	updateExternal(delta: number) {

		if (this.config.canLoop()) this.position.target += delta;
		else this.position.target = MathUtils.clamp(this.position.target + delta, this.edges[0], this.edges[1]);

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

		const containerSize = vertical ? this.containerSize.h : this.containerSize.w;
		this.edges[0] = 0;
		this.edges[1] = MathUtils.clamp(this.distance - containerSize, 0, this.distance);

		this.config.loopPossible = this.distance >= containerSize * 2;

	}
	updateTarget() {
		if (this.config.useNative) {
			this.position.target = this.config.container.scrollTop;
		}
	}
	updateScrollValues() {

		const previous = this.position.current;

		this.position.current = MathUtils.lerp(
			this.position.current,
			this.position.target,
			this.config.easing
		);

		if(!this.config.useNative && this.virtualScrollBar) {
			this.virtualScrollBar.progress = MathUtils.clamp(this.position.current / this.edges[1], 0, 1);
		}

		if(!this.config.canLoop()){
			this.position.current = MathUtils.clamp(this.position.current, this.edges[0], this.edges[1]);
		}

		const newDelta = (this.position.current - previous) * 0.01;
		const previousDelta = parseFloat(this.delta.toFixed(PRECISION));
		this.delta = parseFloat((MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1)).toFixed(PRECISION));

		this.snapCheck(previousDelta, this.delta);

	}
	// This will seameless restart the loop in both directions
	updateLoop(){
		if(!this.config.canLoop()) return;

		const vertical = this.isVertical();
		const containerSize = vertical ? this.containerSize.h : this.containerSize.w;
		const distanceBetweenCurrentAndTarget = this.position.target - this.position.current;

		if (this.position.current < this.edges[0] - containerSize) {
			this.position.current = this.distance - containerSize;
			this.position.target = this.position.current + distanceBetweenCurrentAndTarget;
		}

		if (this.position.current > this.distance) {
			this.position.current = this.edges[0];
			this.position.target = this.position.current + distanceBetweenCurrentAndTarget;
		}
	}
	updateSection(section: Section, scroll:number, delta:number){
		section.scroll = scroll;
		section.delta = delta;
		section.update();
	}
	updateSections(){

		// Default Update
		for(let i = 0, len = this.sections.length; i < len; i++) {
			const section = this.sections[i];
			this.updateSection(section, this.position.current, this.delta)
		}

		// This will make sections believe they are active if the current position is between edges and loop restart
		if(!this.config.canLoop()) return;

		const vertical = this.isVertical();
		// Container size
		const containerSize = vertical ? this.containerSize.h : this.containerSize.w;

		let p = 0;
		const l = this.sections.length - 1;

		// Make last sections believe it's their turn
		if(this.position.current < this.edges[0]) {

			for(let i = l; i > 0; i--){
				if (p > containerSize) break;

				const section = this.sections[i];
				const current = this.position.current + this.distance;
				this.updateSection(section, current, this.delta);

				p += vertical ? section.rect.height : section.rect.width;
			}
		}

		if(this.position.current > this.distance - containerSize){

			for (let i = 0; i < l; i++) {
				if (p > containerSize) break;

				const section = this.sections[i];
				const current = this.position.current - this.distance;
				this.updateSection(section, current, this.delta);

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
		this.updateSections();

		this.progress = MathUtils.truncateDecimals(MathUtils.map(this.position.current, this.edges[0], this.edges[1], 0, 1), 3);

	}

	// Trigger snapping
	// Todo
	// - snap to center
	// - snap mirant el loop, ara si estas en el tros aquest entre un i altre encara creu que es mes propera la primera o ultima que la loopejada
	snapCheck(previousDelta, delta){
		if (!this.config.snapping) return;

		const absDelta = Math.abs(delta);
		const absPrevDelta = Math.abs(previousDelta);

		// Reset one snap if the user has scrolled
		if (absDelta > absPrevDelta && absDelta > SNAP_THRESHOLD) this.config.snappingPossible = true;

		// If can snap, delta is decreasing and delta is really small, then snap
		if (absDelta < absPrevDelta && this.config.snappingPossible && absDelta < SNAP_THRESHOLD) {
			this.config.snappingPossible = false;
			this.snap();
		}

	}
	snap(){

		let section = this.sections[0];
		for(let i = 0; i < this.sections.length; i++){

			const s = this.sections[i];
			const currentDiff = Math.abs(s.offset - this.position.current);
			const closestDiff = Math.abs(section.offset - this.position.current);

			if (currentDiff < closestDiff) {
				section = s;
			}
		}

		console.log(`Fil Scroller - Snap to Section ${this.getSectionIndex(section)}`);
		this.scrollToSection(section as Section);

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
	 * @param k index of section or Section to scroll to
	 * @returns
	 */
	scrollToSection(s:number | Section) {

		const k = typeof s === 'number' ? s : this.getSectionIndex(s);

		if(k < 0 || k > this.sections.length - 1) {
			return console.warn('Fil Scroller - Section Out of bounds');
		}

		const section = this.sections[k];

		if(this.config.useNative) {
			const top = Math.min(section.rect.top, this.distance-this.containerSize.h);
			this.config.container.scrollTop = top;

		} else {

			if(this.isVertical()) {
				const top = Math.min(section.rect.top, this.distance-this.containerSize.h);
				this.position.target = top;
			} else {
				const l = Math.min(section.offset, this.distance);
				this.position.target = l;
			}

		}
	}

	/**
	 * Scrolls to next section
	 * @param section Section from where you are scrolling from
	 */
	scrollToNextSection(section:Section) {
		this.scrollToSection(this.sections.indexOf(section) + 1);
	}

	/**
	 * Scrolls to previous section
	 * @param section Section from where you are scrolling from
	 */
	scrollToPrevSection(section:Section) {
		this.scrollToSection(this.sections.indexOf(section) - 1);
	}
}