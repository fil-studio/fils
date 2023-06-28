// Import CSS
import { el, remove } from '@fils/utils';
import { EventsManager, InitUI, UIEventListener } from '../main';
import { CSS_UI } from '../partials/cssClasses';
import dom, { RowTypes } from '../utils/dom';
import { Group, GroupParams } from './Group';

export interface UIParams extends GroupParams {
	parentElement?: HTMLElement;
	resizable?: boolean;
	icon?: string;
	width?: number;
	minimal?: boolean;
}

InitUI();


export class UI extends Group {
	wrapper: HTMLElement = el('div');

	minimal: boolean;
	resizable: boolean;

	constructor({
		resizable = true,
		parentElement,
		icon,
		width,
		minimal = false
	}: UIParams = {}) {
		super({...arguments[0] });

		this.resizable = parentElement ? false : resizable;
		this.resizable = minimal ? false : resizable;
		this.minimal = minimal;

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

		this.wrapper = dom.createRow({
			type: RowTypes.ui,
			depth: this.depth,
		})

		super.createDom();

		if(this.minimal){
			this.wrapper.classList.add(CSS_UI.minimal);
		}

		this.wrapper.appendChild(this.el);
	}

	addEventListeners(){
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

		const mouseDownEvent:UIEventListener = {
			target: resizer,
			type: 'mousedown',
			callback: (e:MouseEvent) => {
				dragging = true;
				x = e.clientX;
				width = this.wrapper!.getBoundingClientRect().width;
			}
		}
		const mouseMoveEvent:UIEventListener = {
			target: resizer,
			type: 'mousemove',
			callback: (e:MouseEvent) => {
				if(!dragging) return;
				e.preventDefault();
				distance = x - e.clientX;
				resize(width, distance);
			}
		}
		const mouseUpEvent:UIEventListener = {
			target: resizer,
			type: 'mouseup',
			callback: (e:MouseEvent) => {
				if(!dragging) return;
				e.preventDefault();
				dragging = false;
			}
		}
		this.addEventListener(mouseDownEvent);
		this.addEventListener(mouseMoveEvent);
		this.addEventListener(mouseUpEvent);
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

	change(target: EventsManager): void {
		super.change(target);
	}

	destroy(): void {
		super.destroy();
		remove(this.wrapper);
	}
}