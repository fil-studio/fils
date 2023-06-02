import { UI } from '../../../../packages/ui/src/main.js';


export class App {
	constructor() {
		console.log('APP');

		const tl = gsap.timeline({
			paused: true,
		})

		window.addEventListener('click', () => {
			tl.pause();
			tl.play(0)
		})

		const line = document.querySelector('.logo');
		gsap.set(line, {
			// drawSVG: '0%'
		})

		const w = document.querySelector('.logo-wrapper');
		gsap.set(w, {
			transformOrigin: 'center',
			scale: 5,
			xPercent: 50
		})

		// Draw
		const drawTween = gsap.to(line, {
			duration: 10,
			drawSVG: '0% 100%',
			ease: 'linear'
		})

		// Move logo


		// Put tl together
		tl.add(drawTween, '<');



	}
}