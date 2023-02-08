import { EventsManager } from "../partials/EventsManager";
import dom, { RowTypes } from "../utils/dom";
import { Dom } from "./items/Item";

export interface ButtonOptions {
	title?: string;
}

interface ButtonDom extends Dom {
	button: HTMLButtonElement
}

export class Button extends EventsManager {
	type: RowTypes = RowTypes.button;

	dom: ButtonDom;

	depth: number;

	title: string;

	constructor({ title }: ButtonOptions = {}) {
		super();

		this.title = title || 'Button';
	}

	init(depth: number = 0): void {
		this.depth = depth;
		this.createDom();
		this.addEventListeners();

	}

	createDom(): void {
		this.dom = {
			el: null,
			button: null
		}

		this.dom.el = dom.createRow( {
			type: RowTypes.button,
			depth: this.depth,
			title: this.title
		});

		this.dom.button = this.dom.el.querySelector('button');

	}

	private addEventListeners(){
		this.dom.button.addEventListener('click', (e) => {
			this.emit('click');
		});
	}

	destroy(){
		this.dom.el.remove();
	}
}