import { MathUtils } from "@fils/math";

export interface CursorParameters {
	normalized?: boolean
	decimals?: number
	ease?: number
}

interface Position {
	x: number,
	y: number
}


export class Cursor {
	// Params
	decimals: number
	ease: number
	normalized: boolean

	// Positions
	position: Position;
	positionNormalized: Position;
	target: Position;

	constructor(params?: CursorParameters ){

		this.decimals = 3;
		this.ease = 0.3;
		this.normalized = false;

		// Override with provided parameters
		if (params) {
			Object.assign(this, params);
		}

		this.position = {
			x: 0,
			y: 0
		}
		this.positionNormalized = {
			x: 0,
			y: 0
		}
		this.target = {
			x: 0,
			y: 0
		}

		this.addEventListeners()

	}

	addEventListeners(){

		window.addEventListener('mousemove', (e:MouseEvent) => {
			this.target.x = e.clientX;
			this.target.y = e.clientY;
		})

	}

	toDecimals(num:number):number {
		return parseFloat(num.toFixed(this.decimals))
	}

	update(){

		this.position.x = MathUtils.lerp(this.position.x, this.target.x, this.ease)
		this.position.y = MathUtils.lerp(this.position.y, this.target.y, this.ease)

		this.position.x = this.toDecimals(this.position.x)
		this.position.y = this.toDecimals(this.position.y)

		if(this.normalized){

			this.positionNormalized.x = MathUtils.map(this.position.x, 0, window.innerWidth, 0 , 1)
			this.positionNormalized.y = MathUtils.map(this.position.y, 0, window.innerHeight, 0 , 1)

			this.positionNormalized.x = this.toDecimals(this.positionNormalized.x)
			this.positionNormalized.y = this.toDecimals(this.positionNormalized.y)

		}

	}

}