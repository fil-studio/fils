import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

type lineType = {
	distance: number,
	x: number,
	y: number
}

type bezierType = {
	distance: number,
	x: number,
	y: number
	controls: Array<{
		x: number,
		y: number
	}>
}

function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
	const xDistance = x2 - x1;
	const yDistance = y2 - y1;

	// Using Pythagorean theorem to calculate the distance
	const distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

	return distance;
}

type Point = {
	x: number;
	y: number;
}

function calculateEndPoint(origin: Point, control1: Point, control2: Point): Point {
	const P3 = {
		x: (3 * control2.x) - (3 * control1.x) + origin.x,
		y: (3 * control2.y) - (3 * control1.y) + origin.y
	};
	return P3;
}


const TOTAL_DURATION = 10;

export class App {
	path: SVGPathElement;
	g: SVGElement;

	tl: GSAPTimeline;

	positions: Array<lineType | bezierType> = [];
	totalDistance: number = 0;
	constructor() {
		console.log('APP');

		this.path = document.querySelector('path') as SVGPathElement;
		this.g = document.querySelector('svg g') as SVGElement;


		this.preparePath();
		this.createTl();

		window.addEventListener('click', () => {
			this.tl.play(0)
		})

	}

	preparePath(){

		const d = this.path.getAttribute('d')?.split(/[lcm]/i).filter(Boolean) as Array<string>;

		let lastPoint:lineType = {
			distance: 0,
			x: 0,
			y: 0
		}

		for(let i = 0; i < d?.length; i++){
			const item = d[i];

			const separe = item.split(',') as Array<string>;
			const values = separe.map( val => parseFloat(val))

			const line:lineType = {
				distance: 0,
				x: values[0],
				y: values[1]
			}

			if(lastPoint.x == 0 && lastPoint.y == 0 && lastPoint.distance === 0) {
				lastPoint = line;
			}

			if(values.length === 2){
				line.distance = calculateDistance(lastPoint.x, lastPoint.y, line.x, line.y);
				this.positions.push(line);
			} else {
				const controls:Point[] = [
					{
						x: values[2],
						y: values[3]
					},
					{
						x: values[4],
						y: values[5]
					},
				]
				const endpoint:Point = calculateEndPoint(line, controls[0], controls[1])
				line.distance = calculateDistance(lastPoint.x, lastPoint.y, endpoint.x, endpoint.y);

				const bezier:bezierType = {
					...line,
					controls,
				}
				this.positions.push(bezier);
			}

			this.totalDistance += line.distance;
			lastPoint = line;


		}

		console.log(this.positions);
	}


	createTl(){

		this.tl = gsap.timeline({
			paused: false,
			default: {
				ease: 'linear'
			}
		})

		// gsap.set(this.path, {
		// 	drawSVG: '0%'
		// })


		this.tl.addLabel('start');

		for(let i = 0; i<this.positions.length; i++){

			const p = this.positions[i];

			let duration = (p.distance / this.totalDistance) * TOTAL_DURATION;
			console.log(duration, p.distance);


			const tween = gsap.to(
				this.g,
				{
					duration: duration,
					ease: 'none',
					x: p.x - 500,
					y: p.y - 500
				}
			);

			this.tl.add(tween, '>')
		}



		this.tl
			.to(this.path, {
				duration: 9,
				drawSVG: '0% 100%',
				ease: 'none'
			}, 'start')
			.to(this.g, {
				duration: 1,
				x: 0,
				y: 0,
				ease: 'none'
			})




	}
}