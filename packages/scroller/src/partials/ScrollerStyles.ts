import { Scroller } from "../Scroller";

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

	[fil-scroller-section].fil-scroller__section-disabled {
		display: none;
	}
`;


const START_END_OFFSET = 10;
export class ScrollerStyles {
	private scroller: Scroller;
	private isAtStart:boolean = false;
	private isAtEnd:boolean = false;

	constructor(scroller: Scroller){
		this.scroller = scroller;
		this.addStyles();
	}

	addStyles() {
		document.documentElement.setAttribute('fil-scroller-parent', '')
		const _styles = document.createElement('style');
		_styles.textContent = style;
		document.head.append(_styles);
	}

	update(){
		const s = this.scroller;

		// If it has loop this makes no sense
		if(s.loop && s.loopAvailable) return;

		// Check isAtStart
		const isAtStart = s.position.current <= s.edges[0] + START_END_OFFSET;
		if (isAtStart && !this.isAtStart){
			this.isAtStart = true;
			s.container.classList.add('fil-scroller__top');
			return;
		}
		if (!isAtStart && this.isAtStart) {
			this.isAtStart = false;
			s.container.classList.remove('fil-scroller__top');
			return;
		}

		// Check isAtEnd
		const isAtEnd = s.position.current >= s.edges[1] - START_END_OFFSET;
		if (isAtEnd && !this.isAtEnd){
			this.isAtEnd = true;
			s.container.classList.add('fil-scroller__bottom');
			return;
		}
		if(!isAtEnd && this.isAtEnd) {
			this.isAtEnd = false;
			s.container.classList.remove('fil-scroller__bottom');
			return;
		}
	}

}