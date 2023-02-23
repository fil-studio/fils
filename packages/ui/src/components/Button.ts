import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";



export class Button extends UIElement {
	button!: HTMLButtonElement;

	constructor(title:string = 'Button') {
		const _title = title || 'Button'
		super(RowTypes.button, _title);
	}

	protected createDom(): void {
		super.createDom();
		this.button = this.el.querySelector('button') as HTMLButtonElement;
		this.button.classList.add(CSS_UI.item)
	}

	protected addEventListeners(){
		this.button.addEventListener('click', () => {
			this.emit('click');
		});
	}
}