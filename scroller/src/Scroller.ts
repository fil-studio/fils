import { MathUtils } from '../../math/src/MathUtils'

interface position {
	current: number,
	target: number
}

interface html {
	scroller: HTMLElement,
	holder: HTMLElement,
	container: HTMLElement,
	content: HTMLElement
}

interface Section {
	id: string,
	dom: HTMLElement,
	rect: DOMRect,
	visible: boolean,
	range: number,
	animationIn: Function,
	animationOut: Function
}

const style = `
	[fil-scroller-parent],
	[fil-scroller-parent] body { 
		overscroll-behavior: none;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		position: fixed;
		pointer-events: none;
	}
	[fil-scroller]{
		position: relative;
		width: 100%;
		height: 100vh;
		pointer-events: all;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}
	[fil-scroller-holder] {
		pointer-events: none;
	}
	[fil-scroller-container]{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		pointer-events: none;
	}
	[fil-scroller-content] {
		position: relative;
		width: 100%;
		height: auto;
		will-change: transform;
		pointer-events: none;
	}
	[fil-scroller-content] * {
		pointer-events: none;
	}
	[fil-scroller-content] [fil-scroller-pointer] {
		pointer-events: all;
	}

	.scrolling [fil-scroller-content] [fil-scroller-pointer] {
		pointer-events: none;
	}

	[fil-scroller].fil-scroller-disabled [fil-scroller-container]{
		position: relative;
		overflow: auto;
		top: unset;
		left: unset;
	}

	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
	}
	[fil-scroller-section].fil-scroller-visible {
		opacity: 1;
		visibility: visible;
	}
`;

export default class Scroller {
	html:html = {
		scroller: null,
		holder: null,
		container: null,
		content: null,
	};

	position:position = {
		current: 0,
		target: 0
	};

	sections:Array<Section> = [];

	private loaded: boolean = false;
	private paused: boolean = false;
	private disabled: boolean = false;

	height: number = 0;
	private wh: number = 0;
	private _ease: number = 0.1;

	private _delta: number = 0;

	pointerElements:NodeListOf<HTMLElement>;

	constructor(){

		this.position.current = 0;
		this.position.target = 0;

		this.html.scroller = document.querySelector('[fil-scroller]');

		if(!this.html.scroller){
			console.warn('Fil Scroller - No `fil-scroller` element');
			return;
		}

		this.create();
	}

	// Pause - resume
	pause(){
		this.paused = true;
	}
	resume(){
		this.paused = false;
	}

	// Disable - enable
	disable(){
		if(this.disabled) return;
		this.disabled = true;
		this.html.content.style.transform = `translate3d(0, 0, 0)`;
		this.html.holder.style.height = `auto`;
		this.html.scroller.classList.add('fil-scroller-disabled');
	}
	enable(){
		if(!this.disabled) return;
		this.disabled = false;
		this.html.scroller.classList.remove('fil-scroller-disabled');
	}

	set ease(newEase:number) {
		this._ease = newEase;
	}

	get ease(){
		return this._ease;
	}

	get delta(){
		return this._delta;
	}

	addStyles(){

		document.documentElement.setAttribute('fil-scroller-parent', '')

		const _styles = document.createElement('style');
		_styles.textContent = style;
		document.head.append(_styles);

	}

	addHTML(){

		const dom = this.html.scroller;
		this.html.holder = dom.querySelector('[fil-scroller-holder]');
		this.html.container = dom.querySelector('[fil-scroller-container]');
		this.html.content = dom.querySelector('[fil-scroller-content]');

		this.pointerElements = dom.querySelectorAll('[fil-scroller-pointer]');

	}

	addSections(){

		const sections:NodeListOf<HTMLElement> = this.html.content.querySelectorAll('[fil-scroller-section]');

		for(let i = 0, len = sections.length; i<len; i++){
			const _section = sections[i];
			const id = _section.getAttribute('fil-scroller-section') ? _section.getAttribute('fil-scroller-section') : `section-${i}`;
			const section:Section = {
				id,
				dom: _section,
				rect: null,
				visible: false,
				range: 0,
				animationIn: () => {
					console.log(`Fil Scroller - Section ${id} IN`);
				},
				animationOut: () => {
					console.log(`Fil Scroller - Section ${id} OUT`);
				}
			}
		
			this.sections.push(section);
		}

		console.log(this.sections);

	}

	restore(){
		for(const section of this.sections) {
			section.dom.classList.remove('visible');
			section.dom.style.transform = 'none';
			section.rect = section.dom.getBoundingClientRect();			
		}
		this.wh = window.innerHeight;
	}

	onResize(){
		this.restore();
	}
	addEventListeners(){

		window.addEventListener('resize', () => {
			this.onResize();
		})
		
		let timeout; 
		const disableScroll = () => {
			if(timeout) clearTimeout(timeout);
			document.documentElement.classList.add('scrolling')
			timeout = setTimeout(() => {
				document.documentElement.classList.remove('scrolling')
			}, 20)
		}
		window.addEventListener('wheel', () => {
			disableScroll();
		})
		window.addEventListener('touchmove', () => {
			disableScroll();
		})
	}

	create(){

		this.addStyles();

		this.addHTML();

		this.addSections();

		this.addEventListeners();

		this.restore();

		if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

		console.log('Fil Scroller - Loaded');
		
		this.loaded = true;

	}

	updateTarget(){
		this.position.target = this.html.scroller.scrollTop;
		if(this.paused) this.html.scroller.scrollTop = this.position.current;
	}

	updateCheckHeight(){
		this.height = 0;
		for(let i = 0, len = this.sections.length; i < len; i++) this.height += this.sections[i].rect.height;

		if(this.disabled) return;
		
		this.html.holder.style.height = `${this.height}px`;    
	}

	updateScrollValues(){

		if(this.disabled) {
			this.position.current = this.position.target;
			return
		}

		const previous = this.position.current;

		this.position.current = MathUtils.lerp(
			this.position.current, 
			this.position.target,
			this.ease
		);

		const newDelta = (this.position.current - previous) * 0.01;	
		this._delta = 	MathUtils.clamp(MathUtils.lerp(this._delta, newDelta, 0.3), -1, 1)
	}

	updateSections(){
		
		const scroll = this.position.current;	
		
		for(let i = 0, len = this.sections.length; i < len; i++){
			const section = this.sections[i];
			const top = section.rect.top;
			const bottom = section.rect.top + section.rect.height;
			
			if(scroll + this.wh >= top && scroll <= bottom ) {
				
				if(!section.visible) section.animationIn();
				
				section.visible = true;
				section.dom.classList.add('fil-scroller-visible')
				section.dom.style.transform = `translateY(${-scroll}px)`;

				section.dom.style.setProperty('--fil-scroller-delta', `${this._delta.toFixed(5)}`);
				section.range = MathUtils.map(scroll, top - this.wh, bottom, 0, 1);
				section.dom.style.setProperty('--fil-scroller-range', `${section.range.toFixed(5)}`);

				continue;
			}

			if(!section.visible) continue;

			section.animationOut();

			section.visible = false;
			section.dom.classList.remove('fil-scroller-visible');
			section.dom.style.transform = `translateY(${-this.wh}px)`;
			
			section.dom.style.setProperty('--fil-scroller-delta', '0');

		}
	}

	update(){
		if(!this.loaded) return;

		this.updateTarget();

		this.updateCheckHeight();

		this.updateScrollValues();

		this.updateSections();
	}
}