import { RowTypes } from "../utils/dom";
import { Dom, UIElement } from "./UIElement";

export interface ButtonOptions {
	title?: string;
}

interface ButtonDom extends Dom {
	button: HTMLButtonElement
}

export class Button extends UIElement {
	dom: ButtonDom;

	constructor({ title }: ButtonOptions = {}) {
		const _title = title || 'Button'
		super(RowTypes.button, _title);
	}

	protected createDom(): void {
		super.createDom();

		this.dom = {
			...this.dom,
			button: null
		}

		this.dom.button = this.dom.el.querySelector('button');

	}

	protected addEventListeners(){
		this.dom.button.addEventListener('click', (e) => {
			this.emit('click');
		});
	}
}