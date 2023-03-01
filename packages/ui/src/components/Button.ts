import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";



export class Button extends UIElement {
	button!: HTMLButtonElement;
	clickCallback: Function;

	view:string = 'button';

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
			this.emit('__childrenChange');
			this.emit('click');
		});
	}

	/**
	* @typedef {'click'} ButtonEventType
	*
	* @description Available event types:
	* - click: Triggered when the button is clicked.
	*
	* @param {ButtonEventType} eventType - The type of event to listen for.
	* @param {Function} callback - The callback function to call when the event occurs.
	* @returns {void}
	*/
	on(event: string, callback: Function): void {
		super.on(event, callback);
	}
}