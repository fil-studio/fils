// Import CSS
import { el } from '../../../utils/lib/Utils';
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
	parentElement?: HTMLElement;
	resizable?: boolean;
	icon?: string;
}

interface UIDom extends GroupDom {
	wrapper: HTMLElement
}

export class UI extends Group {
	dom: UIDom;

	resizable: boolean;

	constructor({
		resizable = true,
		parentElement,
		icon,
	}: UIParams) {
		super({...arguments[0] });

		this.resizable = parentElement ? false : resizable;

		this.init(0);

		this.addIcon(icon);
		this.appendTo(parentElement);

	}

	appendTo(parentElement: HTMLElement){
		if(parentElement){
			this.dom.wrapper.classList.add(CSS_UI.parent);
			parentElement.appendChild(this.dom.wrapper);
		} else {
			document.body.appendChild(this.dom.wrapper);
		}
	}

	addIcon(icon: string){
		if(!icon) return;
		dom.addIcon(this.dom.el.querySelector('header'), icon);
	}

	createDom(): void {
		super.createDom();

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
	}

	protected addEventListeners(){
		super.addEventListeners();

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