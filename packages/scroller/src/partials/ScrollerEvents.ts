import { Scroller } from "../Scroller";

const touchWheel = {
	delta: 0,
	startY: 0,
	amp: 10,
	startDrag: 0
}

export interface FilScrollerUserEventsListener {
	onUserInputStart?()
	onUserInputInProgress?()
	onUserInputStop?()
}

export class ScrollerEvents {
	private scroller: Scroller;
	private blocked: boolean = false;

	protected userInput:boolean = false;
	protected listeners: FilScrollerUserEventsListener[] = [];

	constructor(scroller:Scroller){
		this.scroller = scroller;
	}

	// Listeners
	addUserInputListener(lis: FilScrollerUserEventsListener) {
		if (this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}
	removeUserInputListener(lis: FilScrollerUserEventsListener) {
		this.listeners.splice(this.listeners.indexOf(lis), 1);
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
			if (this.blocked) return;

			if(!this.userInput) this.onUserInputStart();
			this.userInput = true;

			let delta = e.deltaY;
			if (s.config.scrollDirection.horizontal && s.config.scrollDirection.vertical) {
				const d = Math.abs(e.deltaX) > Math.abs(e.deltaY);
				delta = d ? e.deltaX : e.deltaY;
			} else if (s.config.scrollDirection.horizontal) {
				delta = e.deltaX;
			}

			s.updateExternalByType(delta, 'wheel')

			if (userInputTimer) {
        clearTimeout(userInputTimer);
    	}
			userInputTimer = setTimeout(() => {
					this.onUserInputStop();
					this.userInput = false;
			}, 100);
		})

		target.addEventListener('touchstart', (e: TouchEvent) => {
			if (this.blocked) return;

			this.userInput = true;
			this.onUserInputStart();

			const e1 = e.touches[0];
			touchWheel.startY = e1.clientY;
			touchWheel.startDrag = performance.now();
		}, {
			passive: false
		})

		target.addEventListener('touchend', (e: TouchEvent) => {
			if (this.blocked) return;

			this.userInput = false;
			this.onUserInputStop();

			if (performance.now() - touchWheel.startDrag < 100) {
				s.updateExternalByType(-touchWheel.delta * 10, 'touch')
			}

			touchWheel.delta = 0;
		}, {
			passive: false
		})

		target.addEventListener('touchmove', (e: TouchEvent) => {
			if (this.blocked) return;


			e.preventDefault();
			const e1 = e.touches[0];
			touchWheel.delta = e1.clientY - touchWheel.startY;
			touchWheel.startY = e1.clientY;

			s.updateExternalByType(-touchWheel.delta, 'touch')
		}, {
			passive: false
		})
	}

	update(){
		if(this.userInput){
			this.onUserInputInProgress();
		}
	}
}