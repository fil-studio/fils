import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";



export class Button extends UIElement {
	button!: HTMLButtonElement;
	clickCallback: Function;

	view:string = 'button';

	buttonType: string;

	constructor(title:string = 'Button', clickCallback: Function, type: string) {
		super(RowTypes.button, title);
		this.buttonType = type;
		this.clickCallback = clickCallback;
	}

	protected createDom(): void {
		super.createDom();
		this.button = this.el.querySelector('button') as HTMLButtonElement;
		this.button.classList.add(CSS_UI.item)

		if(this.buttonType === 'happy') this.button.classList.add(CSS_UI.button.happy);
		if(this.buttonType === 'warning') this.button.classList.add(CSS_UI.button.warning);
		if(this.buttonType === 'danger') this.button.classList.add(CSS_UI.button.danger);

	}

	protected addEventListeners(){
		this.button.addEventListener('click', () => {
			this.button.classList.add(CSS_UI.utility.active);
			setTimeout(() => {
				this.button.classList.remove(CSS_UI.utility.active);
			}, 50);
			this.clickCallback();
			this.emit('click');
			this.emit('__childrenChange');
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