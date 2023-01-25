import { EventsHandler } from "../core/Events";
import dom, { RowTypes } from "../utils/dom";

export interface ButtonOptions {
	title?: string;
	callback?: Function;
}

export class Button extends EventsHandler {
	type: RowTypes = RowTypes.button;

	dom: HTMLElement;
	button: HTMLButtonElement;
	depth: number;
	callback: Function;

	constructor(parent, { title, callback }: ButtonOptions = {}) {
		super(parent);

		this.callback = callback || function(){};

		this.depth = parent.depth + 1;

		this.dom = dom.createRow( {
			type: RowTypes.button,
			depth: this.depth,
			title: title || 'Button'
		});
		this.button = this.dom.querySelector('button');

		this.addEventListeners();
	}

	addEventListeners(){
		this.button.addEventListener('click', (e) => {
			this.callback(e);
			this.__onChange();
		});
	}

	destroy(){
		this.button.remove();
	}
}