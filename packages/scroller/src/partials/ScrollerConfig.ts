import { D, Scroller } from "../Scroller";
import { VirtualScrollBar } from "../VirtualScrollBar";

export type FilScrollerParameters = {
	allowHorizontalScrolling?: boolean;
	allowVerticalScrolling?: boolean;
	container?: HTMLElement;
	content?: HTMLElement;
	scrollbar?: VirtualScrollBar;
	direction?: D;
	easing?: number;
	loop?: boolean;
	showVirtualScrollBar?: boolean;
	touchForce?: number;
	useNative?: boolean;
	wheelForce?: number;
};

export const DEFAULT_EASING = 0.16;

export class ScrollerConfig {

	// FilScrollerParams
	allowHorizontalScrolling: boolean;
	allowVerticalScrolling: boolean;
	container: HTMLElement;
	content: HTMLElement;
	scrollbar: VirtualScrollBar;
	direction: D;
	easing: number;
	loop: boolean;
	showVirtualScrollBar: boolean;
	touchForce: number;
	useNative: boolean;
	wheelForce: number;

	// Other config
	force = {
		touch: 1,
		wheel: 1
	};

	// Touch and scroll directions (not related to the actual Scroller D direction)
	scrollDirection = {
		vertical: true,
		horizontal: false
	}

	// Check if it's possible to do a full loop
	loopPossible: boolean = false;

	constructor(params?: FilScrollerParameters){

		// Default values
		this.allowHorizontalScrolling = false;
		this.allowVerticalScrolling = true;
		this.container = null;
		this.content = null;
		this.direction = D.TOP; // Set a default direction or modify as needed
		this.easing = DEFAULT_EASING;
		this.loop = false;
		this.showVirtualScrollBar = false;
		this.touchForce = 1;
		this.scrollbar = null;
		this.useNative = false;
		this.wheelForce = 1;

		// Override with provided parameters
		if (params) {
			Object.assign(this, params);
		}

		this.scrollDirection.vertical = this.allowVerticalScrolling;
		this.scrollDirection.horizontal = this.allowHorizontalScrolling;

		if (this.touchForce) this.force.touch = this.touchForce;
		if (this.wheelForce) this.force.wheel = this.wheelForce;

		this.container = this.container ? this.container : document.querySelector('[fil-scroller]') as HTMLElement;
		this.content = this.content ? this.content : this.container.querySelector('[fil-scroller-content]') as HTMLElement;

		if (!this.container) {
			console.warn('Fil Scroller - No `[fil-scroller]` element');
			return;
		}

		if(this.useNative){
			console.log('Fil Scroller - Using Native Scroll');
			this.container.setAttribute('fil-scroller-native', '');

			console.log('Fil Scroller - Easing set to 1 (native scroll)');
			this.easing = 1;
		}

		// Set initial direction
		this.setDirection(this.direction);

	}

	// Set scroll direction
	setDirection(d:D){
		this.direction = d;

		if (this.useNative && this.direction !== D.TOP){
			console.warn('Fil Scroller - Native scrolling supports only D.TOP vertical direction. Forcing D.TOP...');
			this.direction = D.TOP;
		}
	}

	// Get scroll direction
	isHorizontal(){
		return this.direction === D.LEFT || this.direction === D.RIGHT;
	}
	isVertical(){
		return this.direction === D.TOP || this.direction === D.BOTTOM;
	}

	// Returns true if the loop is wanted and possible
	canLoop(){
		return this.loop && this.loopPossible;
	}

}