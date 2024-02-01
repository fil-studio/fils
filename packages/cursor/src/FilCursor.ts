import { MathUtils } from "@fils/math";

export interface CursorParameters {
	decimals?: number
	ease?: number
	normalized?: boolean
	states?: boolean
}

interface Position {
	x: number,
	y: number
}

interface States {
	current: string,
	previous: string
}

interface FilCursorListener {
	onStateChange?(toState:string, fromState:string)
}

export class FilCursor {
	listeners: FilCursorListener[]

	// Params
	decimals: number
	ease: number
	normalized: boolean
	states: boolean

	// Positions
	position: Position;
	positionNormalized: Position;
	target: Position;

	// State
	state: States

	constructor(params?: CursorParameters ){

		this.decimals = 3;
		this.ease = 0.3;
		this.normalized = false;
		this.states = false;

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

		this.state = {
			current: '',
			previous: ''
		}

		this.addEventListeners()

	}

	// Listeners
	addCursorListener(lis: FilCursorListener) {
		if (this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}
	removeCursorListener(lis: FilCursorListener) {
		this.listeners.splice(this.listeners.indexOf(lis), 1);
	}

	addEventListeners(){

		window.addEventListener('mousemove', (e:MouseEvent) => {
			this.target.x = e.clientX;
			this.target.y = e.clientY;
		})

	}

	onStateChange(){
		for(const lis of this.listeners){
			if(lis && lis.onStateChange) lis.onStateChange(this.state.current, this.state.previous)
		}
	}

	toDecimals(num:number):number {
		return parseFloat(num.toFixed(this.decimals))
	}

	changeState(state: string){
		if(state === this.state.current) return;
		this.state.previous = this.state.current;
		this.state.current = state;

		this.onStateChange();
	}

	updatePosition(){
		this.position.x = MathUtils.lerp(this.position.x, this.target.x, this.ease)
		this.position.y = MathUtils.lerp(this.position.y, this.target.y, this.ease)

		this.position.x = this.toDecimals(this.position.x)
		this.position.y = this.toDecimals(this.position.y)
	}

	updateNormalized(){
		if(!this.normalized) return

		this.positionNormalized.x = MathUtils.map(this.position.x, 0, window.innerWidth, 0 , 1)
		this.positionNormalized.y = MathUtils.map(this.position.y, 0, window.innerHeight, 0 , 1)

		this.positionNormalized.x = this.toDecimals(this.positionNormalized.x)
		this.positionNormalized.y = this.toDecimals(this.positionNormalized.y)

	}

	updateStates(){
		if(!this.states) return;

		if (document.elementsFromPoint) {
			let elements = document.elementsFromPoint(this.position.x, this.position.y);
			for(const el of elements){
				if(el.hasAttribute('fil-cursor')){
					const state = el.getAttribute('fil-cursor');
					this.changeState(state)
				}
			}
		}

	}

	update(){

		this.updatePosition();

		this.updateNormalized();

		this.updateStates();

	}

}