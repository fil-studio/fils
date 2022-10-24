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
	rect: DOMRect
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

	sections:Array<Section>;

	private loaded: boolean = false;

	paused: boolean = false;
	disabled: boolean = false;

	height: number = 0;
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

	disable(){
		if(this.disabled) return;
		this.disabled = true;
		this.html.content.style.transform = `translate3d(0, 0, 0)`;
		this.html.scroller.classList.add('disabled');
	}

	enable(){
		if(!this.disabled) return;
		this.disabled = false;
		this.html.scroller.classList.remove('disabled');
	}


	addStyles(){

		document.documentElement.setAttribute('fil-scroller-parent', '')

		const _styles = document.createElement('style');
		_styles.textContent = style;
		document.head.append(_styles);
		

	}

	create(){

		this.addStyles();

		if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

		const dom = this.html.scroller;
		this.html.holder = dom.querySelector('[fil-scroller-holder]');
		this.html.container = dom.querySelector('[fil-scroller-container]');
		this.html.content = dom.querySelector('[fil-scroller-content]');

		this.loaded = true;

	}

	updateCheckHeight(){
		if(this.height === this.html.content.offsetHeight) return;

		this.height = this.html.content.offsetHeight;
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

		this.html.content.style.transform = `translate3d(0, ${-this.position.current}px, 0)`;
	}

	update(){
		if(!this.loaded) return;

		this.position.target = this.html.scroller.scrollTop;

		if(this.paused) this.html.scroller.scrollTop = this.position.current;

		this.updateCheckHeight();

		this.updateScrollValues();

	}
}