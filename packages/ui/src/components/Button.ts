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

	constructor(parent, { title }: ButtonOptions = {}) {
		super();

		this.depth = parent.depth + 1;

		this.dom = {
			el: null,
			button: null
		}

		this.dom.el = dom.createRow( {
			type: RowTypes.button,
			depth: this.depth,
			title: title || 'Button'
		});
		this.dom.button = this.dom.el.querySelector('button');

		this.addEventListeners();
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