import { MathUtils } from '@jocabola/math';

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
	dom: HTMLElement,
	rect: DOMRect,
	visible: boolean
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
		overflow-y: auto;
		pointer-events: all;
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

		top: 100%;

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
	[fil-scroller].fil-scroller-disabled [fil-scroller-container]{
		position: relative;
		overflow: auto;
		top: unset;
		left: unset;
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

	paused: boolean = false;
	disabled: boolean = false;

	height: number = 0;
	wh: number = 0;
	ease: number = 0.1

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

	}

	addSections(){

		const sections:NodeListOf<HTMLElement> = this.html.content.querySelectorAll('[fil-scroller-section]');

		for(const _section of sections){
			const section:Section = {
				dom: _section,
				rect: null,
				visible: false
			}

			this.sections.push(section);
		}

	}

	restore(){
		for(const section of this.sections) section.rect = section.dom.getBoundingClientRect();
		this.wh = window.innerHeight;
	}

	onResize(){
		this.restore();
	}
	addEventListeners(){
		window.addEventListener('resize', () => {
			this.onResize();
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
		if(this.height === this.html.content.offsetHeight) return;

		this.height = this.html.content.offsetHeight;

		if(this.disabled) return;
		
		this.html.holder.style.height = `${this.height}px`;    
	}

	updateScrollValues(){

		if(this.disabled) {
			this.position.current = this.position.target;
			return
		}

		this.position.current = MathUtils.lerp(
			this.position.current, 
			this.position.target,
			this.ease
		);
	}

	updateSections(){
		console.log(this.position.target + this.wh, this.sections[3].rect.top + this.sections[3].rect.height);
		
		for(let i = 0, len = this.sections.length; i < len; i++){
			const section = this.sections[i];
			const rect = section.rect;

			if(this.position.current > rect.top && this.position.current < rect.top + rect.height) section.dom.classList.add('visible');
			else section.dom.classList.remove('visible');

			
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