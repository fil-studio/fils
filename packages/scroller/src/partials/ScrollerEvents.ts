import { Scroller } from "../Scroller";

const touchWheel = {
	delta: 0,
	startY: 0,
	amp: 10,
	startDrag: 0
}

const SWIPE_TIME = 300;
const SWIPE_THRESHOLD = 10;

export interface FilScrollerUserEventsListener {
	onSwipe?(direction: 'up' | 'down' | 'left' | 'right')
	onUserInputStart?()
	onUserInputInProgress?()
	onUserInputStop?()
}

export class ScrollerEvents {
	private scroller: Scroller;
	private blocked: boolean = false;

	protected userInput:boolean = false;
	protected listeners: FilScrollerUserEventsListener[] = [];

	protected swipeStart: {
		x: number,
		y: number,
	}
	protected swipeTime: number
	swipe: {
		time: number,
		threshold: number
	}



	constructor(scroller:Scroller){
		this.scroller = scroller;

		this.swipeStart = {
			x: 0,
			y: 0
		}

		this.swipe = {
			time: SWIPE_TIME,
			threshold: SWIPE_THRESHOLD
		}

		this.swipeTime = 0;
	}

	// Listeners
	addUserInputListener(lis: FilScrollerUserEventsListener) {
		if (this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}
	removeUserInputListener(lis: FilScrollerUserEventsListener) {
		this.listeners.splice(this.listeners.indexOf(lis), 1);
	}

	onSwipe(direction: 'up' | 'down' | 'left' | 'right') {
		for (const lis of this.listeners) {
			if (lis && typeof lis.onSwipe === 'function') {
				lis.onSwipe(direction);
			}
		}
	}
	onUserInputStart(){
		for (const lis of this.listeners) {
			if (lis && typeof lis.onUserInputStart === 'function') {
				lis.onUserInputStart();
			}
		}
	}
	onUserInputInProgress(){
		for (const lis of this.listeners) {
			if (lis && typeof lis.onUserInputInProgress === 'function') {
				lis.onUserInputInProgress();
			}
		}
	}
	onUserInputStop(){
		for (const lis of this.listeners) {
			if (lis && typeof lis.onUserInputStop === 'function') {
				lis.onUserInputStop();
			}
		}
	}

	// Block - Unblock
	block() {
		if (this.blocked) return;
		this.blocked = true;
	}
	unblock() {
		if (!this.blocked) return;
		this.blocked = false;
	}

	addEventListeners(_target?:HTMLElement){

		const target = _target || window;

		const s = this.scroller;

		let userInputTimer;

		target.addEventListener('wheel', (e: WheelEvent) => {
			if(!this.userInput) this.onUserInputStart();
			this.userInput = true;

			if (userInputTimer) {
        clearTimeout(userInputTimer);
    	}
			userInputTimer = setTimeout(() => {
					this.onUserInputStop();
					this.userInput = false;
			}, 100);

			if (this.blocked) return;

			let delta = e.deltaY;
			if (s.config.scrollDirection.horizontal && s.config.scrollDirection.vertical) {
				const d = Math.abs(e.deltaX) > Math.abs(e.deltaY);
				delta = d ? e.deltaX : e.deltaY;
			} else if (s.config.scrollDirection.horizontal) {
				delta = e.deltaX;
			}

			s.updateExternalByType(delta, 'wheel')

		}, { passive: true })

		target.addEventListener('touchstart', (e: TouchEvent) => {

			// Input start
			this.userInput = true;
			this.onUserInputStart();

			// Swipe values
			this.swipeStart.x = e.changedTouches[0].pageX;
			this.swipeStart.y = e.changedTouches[0].pageY;
			this.swipeTime = performance.now();

			if (this.blocked) return;
			const et = e.touches[0];
			touchWheel.startY = et.clientY;
			touchWheel.startDrag = performance.now();
		}, {
			passive: true
		})

		target.addEventListener('touchend', (e: TouchEvent) => {

			// Swipe
			const et = e.changedTouches[0];
			const dx = et.pageX - this.swipeStart.x;
			const dy = et.pageY - this.swipeStart.y;
			const dt = performance.now() - this.swipeTime;
			const absX = Math.abs(dx);
			const absY = Math.abs(dy);

			// Swipe time check
			if(dt < this.swipe.time){

				// Swipe threshold check
				if(absX > this.swipe.threshold || absY > this.swipe.threshold){

					// Horizontal swipe
					if(absX > absY){
						if(dx > 0){
							this.onSwipe('right');
						}else{
							this.onSwipe('left');
						}
					// Vertical swipe
					} else {
						if(dy > 0){
							this.onSwipe('down');
						}else{
							this.onSwipe('up');
						}
					}
				}
			}

			// User input stop
			this.userInput = false;
			this.onUserInputStop();

			if (this.blocked) return;

			if (performance.now() - touchWheel.startDrag < 100) {
				s.updateExternalByType(-touchWheel.delta * 10, 'touch')
			}

			touchWheel.delta = 0;
		}, {
			passive: true
		})

		target.addEventListener('touchmove', (e: TouchEvent) => {
			if (this.blocked) return;
			const e1 = e.touches[0];
			touchWheel.delta = e1.clientY - touchWheel.startY;
			touchWheel.startY = e1.clientY;

			s.updateExternalByType(-touchWheel.delta, 'touch')
		})
	}

	update(){
		if(this.userInput){
			this.onUserInputInProgress();
		}
	}
}