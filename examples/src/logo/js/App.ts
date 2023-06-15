import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { Vec } from "@fils/math";
import { UI } from '@fils/ui';


gsap.registerPlugin(DrawSVGPlugin);


const COORDINATES:Vec[] = [
	new Vec( -59, 176 ),
	new Vec( -80, 268 ),
	new Vec( 213, 268 ),
	new Vec( 274, -267 ),
	new Vec( 178, 85 ),
	new Vec( -31, 85 ),
	new Vec( 62, -267 ),
	new Vec( -232, 268 ),
	new Vec( -89, -267 ),
	new Vec( -275, -126 ),
];

const DURATIONS:number[] = [];

const TOTAL_DURATION = () => {
	let total = 0;

	for(let i = 1; i<COORDINATES.length; i++){
		const v1 = COORDINATES[i];
		const v2 = COORDINATES[i + 1] ? COORDINATES[i + 1] : new Vec(0,0);
		const d = v1.distanceTo(v2);
		total += d;
		DURATIONS.push(d);
	}

	return total;
}

export class App {
	path: SVGPathElement;
	g: SVGElement;

	tl: GSAPTimeline;
	ui: UI;

	constructor() {
		console.log('APP');

		this.path = document.querySelector('path') as SVGPathElement;
		this.g = document.querySelector('svg g') as SVGElement;


		this.createTl();

		window.addEventListener('click', () => {
			// this.tl.play(0)
		})

		this.ui = new UI({
			title: 'Paths',
		})



		const circle = document.querySelector('circle') as SVGElement;
		const circlePosition = new Vec(500,500);
		circle.setAttribute('cx', `${circlePosition.x}`)
		circle.setAttribute('cy', `${circlePosition.y}`)

		for(let i = 0; i<DURATIONS.length; i++){
			const val = {
				d: DURATIONS[i]
			}
			this.ui.add(val, 'd', {
				title: 'Time' + val.d
			}).on('change', () => {
				DURATIONS[i] = val.d;
			})
		}


		const p = {
			progress: 0,
		}
		this.ui.add(p, 'progress', {
			view: 'range',
			min: 0,
			max: 1000,
			step: 1,
		}).on('change', () => {
			this.tl.progress(p.progress * 0.001)
			// this.g.style.transform = `translate(${circlePosition.x}px, ${circlePosition.y}px)`;
			// circle.setAttribute('cx', `${circlePosition.x}`)
		})
		// this.ui.add(circlePosition, 'y', {
		// 	view: 'range',
		// 	min: -1000,
		// 	max: 1000,
		// 	step: 1,
		// }).on('change', () => {
		// 	this.g.style.transform = `translate(${circlePosition.x}px, ${circlePosition.y}px)`;
		// 	// circle.setAttribute('cy', `${circlePosition.y}`)
		// })

		this.ui.addButton('Reset TL', () => {
			this.tl.pause(0);
			this.createTl();
			this.tl.play();
		})

	}

	createTl(){

		this.tl = gsap.timeline({
			paused: true,
			default: {
				ease: 'linear'
			},
			onUpdate: () => {
				console.log(this.tl.time());

			}
		})

		gsap.set(this.path, {
			drawSVG: '0%'
		})
		gsap.set(this.g, {
			x: COORDINATES[0].x,
			y: COORDINATES[0].y,
		})


		this.tl.addLabel('start');

		for(let i = 1; i<COORDINATES.length; i++){

			const coord = COORDINATES[i];

			const tween = gsap.to(
				this.g,
				{
					duration: DURATIONS[i - 1],
					ease: 'none',
					x: coord.x,
					y: coord.y
				}
			);

			this.tl.add(tween, i === 0 ? 'start' : '>')
		}



		this.tl
			.to(this.path, {
				duration: TOTAL_DURATION,
				drawSVG: '0% 100%',
				ease: 'none'
			}, 'start')
			// .to(this.g, {
			// 	duration: 1,
			// 	x: 0,
			// 	y: 0,
			// 	ease: 'none'
			// }, 'start')




	}
}