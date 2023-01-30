import { EventsHandler } from "../partials/Events";
import dom, { RowTypes } from "../utils/dom";

export interface ButtonOptions {
	title?: string;
	onChangeCallback?: Function;
}

export class Button extends EventsHandler {
	type: RowTypes = RowTypes.button;

	dom: HTMLElement;
	button: HTMLButtonElement;
	depth: number;
	onChangeCallback: Function;

	constructor(parent, { title, onChangeCallback }: ButtonOptions = {}) {
		super(parent);

		this.onChangeCallback = onChangeCallback || function(e){
			// console.log('Button - onChangeCallback:', e);
		};

		this.depth = parent.depth + 1;

		this.dom = dom.createRow( {
			type: RowTypes.button,
			depth: this.depth,
			title: title || 'Button'
		});
		this.button = this.dom.querySelector('button');

		this.addEventListeners();
	}

	private addEventListeners(){
		this.button.addEventListener('click', (e) => {
			this.onChangeCallback(e);
			this.__onChange();
		});
	}

	destroy(){
		this.button.remove();
	}
}