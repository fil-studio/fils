// Import CSS
import { el } from '@fils/utils';
import { InitUI } from '../init';
import { CSS_UI } from '../partials/cssClasses';
import check from '../utils/check';
import dom, { RowTypes } from '../utils/dom';
import { Group, GroupParams } from './Group';

interface UIParams extends GroupParams {
	parentElement?: HTMLElement;
	resizable?: boolean;
	icon?: string;
	width?: number;
}

// Injects styles and registers base components
InitUI();
export class UI extends Group {
	wrapper: HTMLElement = el('div');

	resizable: boolean;

	constructor({
		resizable = true,
		parentElement,
		icon,
		width
	}: UIParams = {}) {
		super({...arguments[0] });

		this.resizable = parentElement ? false : resizable;

		this.init(0);

		this.addIcon(icon as string);
		this.appendTo(parentElement as HTMLElement);

		if(width){
			this.wrapper.style.setProperty('--wrapper-width', `${width}px`);
		}
	}

	protected appendTo(parentElement: HTMLElement){

		if(parentElement){
			this.wrapper.classList.add(CSS_UI.parent);
			parentElement.appendChild(this.wrapper);
		} else {
			document.body.appendChild(this.wrapper);
		}
	}

	protected addIcon(icon: string){
		if(!icon) return;
		dom.addIcon(this.el.querySelector('header') as HTMLElement, icon);
	}

	createDom(): void {
		super.createDom();

		this.wrapper = dom.createRow({
			type: RowTypes.ui,
			depth: this.depth,
		})

		this.wrapper.appendChild(this.el);

	}

	protected addEventListeners(){
		super.addEventListeners();

		if(!this.resizable) return;

		// Create resizer element
		const resizer = el('div', CSS_UI.resizer);
		this.wrapper.appendChild(resizer);


		const resize = (w:number, x:number) => {

			if(x < 0 && w + x < 300) return;
			this.wrapper!.style.setProperty('--wrapper-width', `${w + x}px`);

			this.emit('resize');
		}


		// Handle resize events
		let dragging = false;
		let x = 0;
		let distance = 0;

		let width = 0;

		resizer.addEventListener('mousedown', (e:MouseEvent) => {
			dragging = true;
			x = e.clientX;
			width = this.wrapper!.getBoundingClientRect().width;
		});

		window.addEventListener('mousemove', (e: MouseEvent) => {
			if(!dragging) return;
			e.preventDefault();
			distance = x - e.clientX;
			resize(width, distance);
		});

		window.addEventListener('mouseup', (e: MouseEvent) => {
			if(!dragging) return;
			e.preventDefault();
			dragging = false;
		});

	}

	/**
	* @typedef {'resize'| EventType } UIEventType
	*
	* @description Available event types:
	* - change: Triggered when the value of the item or one of its children changes.
	* - resize: Triggered when the UI is resized.
	*
	* @param {UIEventType} eventType - The type of event to listen for.
	* @param {Function} callback - The callback function to call when the event occurs.
	* @returns {void}
	*/
	on(event: string, callback: Function): void {
		super.on(event, callback);
	}

}