import { EventsHandler } from "../core/Events";
import { ALL_CLASS, ITEM_CLASS, ITEM_TITLE_CLASS } from "../core/globals";

interface ButtonOptions {
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

		this.createDom();
		this.addEventListeners();

	}

	createDom() {
		// Create basic structure
		this.dom = document.createElement('div');
		this.dom.classList.add(ALL_CLASS, ITEM_CLASS);

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