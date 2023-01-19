import { EventsHandler } from "../core/Events";
import dom, { RowTypes } from "../utils/dom";

export interface ButtonOptions {
	title?: string;
	callback?: Function;
}

export class Button extends EventsHandler {
	dom: HTMLElement;
	button: HTMLButtonElement;

	title: string;
	callback: Function;

	constructor(parent, { title, callback }: ButtonOptions = {}) {
		super(parent);

		this.title = title || 'Button';
		this.callback = callback || function(){};

		this.dom = dom.createRow(RowTypes.button, this.title);

		this.createDom();
		this.addEventListeners();

	}

	createDom() {
		this.button = document.createElement('button');
		const title = document.createElement('h3');
		title.innerText = this.title;
		this.button.appendChild(title);
		this.dom.appendChild(this.button);
	}

	addEventListeners(){
		this.button.addEventListener('click', (e) => {
			this.callback(e);
			this.__onChange();
		});
	}
}