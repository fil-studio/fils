// Import CSS
import { el } from '@fils/utils';
import styles from '../bundle/bundle.min.css';
import { CSS_UI } from '../partials/cssClasses';
import { AvailableItems } from '../partials/ItemFactory';
import { RegisterBaseComponents } from '../partials/RegisterBaseItems';
import css from '../utils/css';
import dom, { RowTypes } from '../utils/dom';
import { Group, GroupDom, GroupParams } from './Group';

RegisterBaseComponents();
const mergedCss = css.merge(styles, AvailableItems.items);
css.inject(mergedCss);


interface UIParams extends GroupParams {
	resizable?: boolean;
	embed?: HTMLElement,
	onChangeCallback?: Function;
	icon?: string;
}

interface UIDom extends GroupDom {
	wrapper: HTMLElement
}

export class UI extends Group {
	dom: UIDom;

	resizable: boolean;
	depth: number = 0;

	onChangeCallback: Function;

	constructor({
		resizable = true,
		embed,
		onChangeCallback,
		icon,
	}: UIParams) {
		super({...arguments[0] });

		this.parent = null;

		/*
		 * Main UI requires an extra wrapper
		 */
		this.dom.wrapper = dom.createRow({
			type: RowTypes.ui,
			depth: this.depth,
		});

		this.dom.wrapper.appendChild(this.dom.el);

		if(icon){
			dom.addIcon(this.dom.el.querySelector('header'), icon);
		}

		if(embed){
			this.dom.wrapper.classList.add(CSS_UI.embed);
			embed.appendChild(this.dom.wrapper);
		} else {
			document.body.appendChild(this.dom.wrapper);
		}

		this.resizable = resizable;
		this.addDragListeners();

		/**
		 * onChangeCallback is called when a value is changed
		 * todo - everything needs a callback
		 */
		this.onChangeCallback = onChangeCallback ? onChangeCallback : function(e?:CustomEvent){
			console.log('UI onChangeCallback', e);
		};
	}

	addDragListeners(){
		if(!this.resizable) return;

		// Create resizer element
		const resizer = el('div', CSS_UI.resizer);
		this.dom.wrapper.appendChild(resizer);


		const resize = (w, x) => {

			if(x < 0 && w + x < 300) return;

			this.dom.wrapper.style.setProperty('--wrapper-width', `${w + x}px`);

		}


		// Handle resize events
		let dragging = false;
		let x = 0;
		let distance = 0;

		let width = 0;

		resizer.addEventListener('mousedown', (e) => {
			dragging = true;
			x = e.clientX;
			width = this.dom.wrapper.getBoundingClientRect().width;
			this.__onResize();
		});

		window.addEventListener('mousemove', (e) => {
			if(!dragging) return;
			e.preventDefault();
			distance = x - e.clientX;
			resize(width, distance);
		});

		window.addEventListener('mouseup', (e) => {
			if(!dragging) return;
			e.preventDefault();
			dragging = false;
		});

	}

	onChange(e?: CustomEvent): void {
		this.onChangeCallback(e);
	}


}