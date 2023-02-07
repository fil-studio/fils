// Import CSS
import { el, generateUniqueId } from '../../../utils/lib/Utils';
import styles from '../bundle/bundle.min.css';
import { CSS_UI } from '../partials/cssClasses';
import { RegisterBaseComponents } from '../partials/RegisterBaseItems';
import css from '../utils/css';
import dom, { RowTypes } from '../utils/dom';
import { Group, GroupDom, GroupParams } from './Group';

RegisterBaseComponents();
// const mergedCss = css.merge(styles, AvailableItems.items);
css.inject(styles);


interface UIParams extends GroupParams {
	resizable?: boolean;
	embed?: HTMLElement,
	icon?: string;
}

interface UIDom extends GroupDom {
	wrapper: HTMLElement
}

export class UI extends Group {

	id: string;

	dom: UIDom;

	resizable: boolean;
	depth: number = 0;

	constructor({
		resizable = true,
		embed,
		icon,
	}: UIParams) {
		super({...arguments[0] });

		this.id = generateUniqueId('ui');

		this.parent = null;

		this.dom = {
			wrapper: null,
			...this.dom
		};

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

		this.resizable = embed ? false : resizable;
		this.addDragListeners();
	}

	addDragListeners(){
		if(!this.resizable) return;

		// Create resizer element
		const resizer = el('div', CSS_UI.resizer);
		this.dom.wrapper.appendChild(resizer);


		const resize = (w, x) => {

			if(x < 0 && w + x < 300) return;
			this.dom.wrapper.style.setProperty('--wrapper-width', `${w + x}px`);

			this.emit('resize');
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

}