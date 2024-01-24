import { Scroller } from "../Scroller";

const touchWheel = {
	delta: 0,
	startY: 0,
	amp: 10,
	startDrag: 0
}

export interface FilScrollerUserEventsListener {
	userInputStart?()
	userInputInProgress?()
	userInputStop?()
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
	addSectionListener(lis: FilScrollerUserEventsListener) {
		if (this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}
	removeSectionListener(lis: FilScrollerUserEventsListener) {
		this.listeners.splice(this.listeners.indexOf(lis), 1);
	}
	userInputStart(){
		for (const lis of this.listeners) {
      lis?.userInputStart();
    }
	}
	userInputInProgress(){
		for (const lis of this.listeners) {
      lis?.userInputInProgress();
    }
	}
	userInputStop(){
		for (const lis of this.listeners) {
      lis?.userInputStop();
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

			if(!this.userInput) this.userInputStart();
			this.userInput = true;
			this.userInputInProgress();

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
					this.userInputStop();
					this.userInput = false;
			}, 100);
		})

		target.addEventListener('touchstart', (e: TouchEvent) => {
			if (this.blocked) return;

			this.userInput = true;
			this.userInputStart();

			const e1 = e.touches[0];
			touchWheel.startY = e1.clientY;
			touchWheel.startDrag = performance.now();
		}, {
			passive: false
		})

		target.addEventListener('touchend', (e: TouchEvent) => {
			if (this.blocked) return;

			this.userInput = false;
			this.userInputStop();

			if (performance.now() - touchWheel.startDrag < 100) {
				s.updateExternalByType(-touchWheel.delta * 10, 'touch')
			}

			touchWheel.delta = 0;
		}, {
			passive: false
		})

		target.addEventListener('touchmove', (e: TouchEvent) => {
			if (this.blocked) return;

			this.userInputInProgress();

			e.preventDefault();
			const e1 = e.touches[0];
			touchWheel.delta = e1.clientY - touchWheel.startY;
			touchWheel.startY = e1.clientY;

			s.updateExternalByType(-touchWheel.delta, 'touch')
		}, {
			passive: false
		})
	}
}