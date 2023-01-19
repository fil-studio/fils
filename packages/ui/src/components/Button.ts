import { EventsHandler } from "../core/Events";
import dom, { RowTypes } from "../utils/dom";

export interface ButtonOptions {
	title?: string;
	callback?: Function;
}

export class Button extends EventsHandler {
	dom: HTMLElement;
	button: HTMLButtonElement;
	callback: Function;

	constructor(parent, { title, callback }: ButtonOptions = {}) {
		super(parent);

		this.callback = callback || function(){};

		this.dom = dom.createRow(RowTypes.button, {
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
}