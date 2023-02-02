import { EventsHandler } from "../partials/Events";
import dom, { RowTypes } from "../utils/dom";
import { Dom } from "./Item";

export interface ButtonOptions {
	title?: string;
	onChangeCallback?: Function;
}

interface ButtonDom extends Dom {
	button: HTMLButtonElement
}

export class Button extends EventsHandler {
	type: RowTypes = RowTypes.button;

	dom: ButtonDom;

	depth: number;
	onChangeCallback: Function;

	constructor(parent, { title, onChangeCallback }: ButtonOptions = {}) {
		super(parent);

		this.onChangeCallback = onChangeCallback || function(e){
			// console.log('Button - onChangeCallback:', e);
		};

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
			this.onChangeCallback(e);
			this.__onChange();
		});
	}

	destroy(){
		this.button.remove();
	}
}