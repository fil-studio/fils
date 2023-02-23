import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";



export class Button extends UIElement {
	button!: HTMLButtonElement;
	clickCallback: Function;

	constructor(title:string = 'Button', clickCallback: Function) {
		super(RowTypes.button, title);
		this.clickCallback = clickCallback;
	}

	protected createDom(): void {
		super.createDom();
		this.button = this.el.querySelector('button') as HTMLButtonElement;
		this.button.classList.add(CSS_UI.item)
	}

	protected addEventListeners(){
		this.button.addEventListener('click', () => {
			this.clickCallback();
			this.emit('click');
		});
	}
}