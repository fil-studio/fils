// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group, GroupParams } from './Group';
import { AvailableItems } from '../partials/ItemFactory';
import { RegisterBaseComponents } from '../partials/RegisterBaseItems';
import css from '../utils/css';
import dom, { BASE_CLASS, EMBED_WRAPPER_CLASS, RowTypes } from '../utils/dom';
import { el } from '@fils/utils';

RegisterBaseComponents();
const mergedCss = css.merge(styles, AvailableItems.items);
css.inject(mergedCss);


interface UIParams extends GroupParams {
	resizable?: boolean;
	embed?: HTMLElement,
	onChangeCallback?: Function;
	icon?: string;
}
export class UI extends Group {
	resizable: boolean;
	domWrapper: HTMLElement;
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
		this.domWrapper = dom.createRow({
			type: RowTypes.ui,
			depth: this.depth,
		});
		this.domWrapper.appendChild(this.dom);

		if(icon){
			dom.addIcon(this.dom.querySelector('header'), icon);
		}

		if(embed){
			this.domWrapper.classList.add(EMBED_WRAPPER_CLASS);
			embed.appendChild(this.domWrapper);
		} else {
			document.body.appendChild(this.domWrapper);
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
		const resizer = el('div', `${BASE_CLASS}-ui-resizer`);
		this.domWrapper.appendChild(resizer);


		const resize = (w, x) => {

			if(x < 0 && w + x < 300) return;

			this.domWrapper.style.setProperty('--wrapper-width', `${w + x}px`);

		}


		// Handle resize events
		let dragging = false;
		let x = 0;
		let distance = 0;

		let width = 0;

		resizer.addEventListener('mousedown', (e) => {
			dragging = true;
			x = e.clientX;
			width = this.domWrapper.getBoundingClientRect().width;
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