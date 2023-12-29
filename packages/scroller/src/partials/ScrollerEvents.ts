import { Scroller } from "../Scroller";

const touchWheel = {
	delta: 0,
	startY: 0,
	amp: 10,
	startDrag: 0
}

export class ScrollerEvents {
	private scroller: Scroller;
	private blocked: boolean = false;

	constructor(scroller:Scroller){
		this.scroller = scroller;
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

		target.addEventListener('wheel', (e: WheelEvent) => {
			if (this.blocked) return;

			let delta = e.deltaY;
			if (s.config.scrollDirection.horizontal && s.config.scrollDirection.vertical) {
				const d = Math.abs(e.deltaX) > Math.abs(e.deltaY);
				delta = d ? e.deltaX : e.deltaY;
			} else if (s.config.scrollDirection.horizontal) {
				delta = e.deltaX;
			}

			s.updateExternalByType(delta, 'wheel')
		})

		target.addEventListener('touchstart', (e: TouchEvent) => {
			if (this.blocked) return;

			const e1 = e.touches[0];
			touchWheel.startY = e1.clientY;
			touchWheel.startDrag = performance.now();
		}, {
			passive: false
		})

		target.addEventListener('touchend', (e: TouchEvent) => {
			if (this.blocked) return;

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
}