import { el } from "@fils/utils";
import { uiTriaDown } from '../../../ui-icons/lib/Icons';
import { SpacerSize } from "../components/Spacer";


export const BASE_CLASS = '_ui';
export const ICON_HEADER = '_ui-icon';
export const CONTENT_WRAPPER = '_ui-content-wrapper';
export const VERTICAL_ROW = '_ui-vertical-row';
export const FOLDED = '_ui-folded';
export const NOT_FOLDED = '_ui-not-folded';
export const FOLDABLE = '_ui-foldable';
export const FOLDABLE_ELEMENT = '_ui-foldable-el';
export const BUTTON_CLASS = '_ui-btn';
export const BUTTON_ICON_CLASS = '_ui-btn-icon';
export const BUTTON_ICON_ITEM_CLASS = '_ui-btn-icon-item';

export const WRAPPER_CLASS = `${BASE_CLASS}-wrapper`;
export const EMBED_WRAPPER_CLASS = `${BASE_CLASS}-embed-wrapper`;



export enum RowTypes {
	ui,
	group,
	item,
	button,
	spacer
}

interface DomOptions {
	type: RowTypes;
	depth: number;
	title?: string;
	foldable?: boolean;
	line?: boolean;
	size?: SpacerSize;
}

const dom = {
	createButton: (title:string, icon?:string) => {
		const button = document.createElement('button');
		button.classList.add(BUTTON_CLASS);

		const h3 = document.createElement('h3');
		h3.innerText = title;
		button.appendChild(h3);

		if(icon){
			const iconWrapper = document.createElement('div');
			iconWrapper.innerHTML = icon;
			iconWrapper.classList.add(BUTTON_ICON_ITEM_CLASS);
			button.appendChild(iconWrapper);
			button.classList.add(BUTTON_ICON_CLASS);
		}

		return button;
	},
	createRow: ({
		type,
		depth,
		title,
		foldable,
		line,
		size,
	}:DomOptions = {
		type: RowTypes.ui,
		depth: 0
	}) => {

		// Create Row
		let domEl = 'div';
		if(type === RowTypes.ui) domEl = 'div';
		if(type === RowTypes.group) domEl = 'section';
		if(type === RowTypes.item) domEl = 'fieldset';
		if(type === RowTypes.button) domEl = 'fieldset';
		if(type === RowTypes.spacer) domEl = 'div';

		const row = el(domEl);
		row.setAttribute('ui-depth', `${depth}`);

		/**
		 * Add Classes to Row
		 */
		if(type === RowTypes.ui) {
			row.classList.add(WRAPPER_CLASS);
		}

		/**
		 * Create a Group Row
		 */
		if(type === RowTypes.group) {

			const titleTab = el('header');

			if(foldable){
				dom.addIcon(titleTab);
			}

			const h3 = el('h3');
			h3.innerText = title;
			h3.title = title;
			titleTab.appendChild(h3);

			row.appendChild(titleTab);

			const contentWrapper = el('div');
			contentWrapper.classList.add(CONTENT_WRAPPER);
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Item Row
		 */
		if(type === RowTypes.item) {

			if(title){
				const h4 = el('h4');
				h4.innerText = title;
				h4.title = title;
				row.appendChild(h4);
			}

			const contentWrapper = el('div');
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Button Row
		 */
		if(type === RowTypes.button) {
			const button = dom.createButton(title);
			row.appendChild(button);
			row.classList.add(`${BASE_CLASS}-button-fieldset`);
		}

		/**
		 * Create a Spacer Row
		 */
		if(type === RowTypes.spacer) {
			row.classList.add(`${BASE_CLASS}-spacer`);
			if(line) row.classList.add(`${BASE_CLASS}-spacer-line`);
			row.classList.add(`${BASE_CLASS}-spacer-${size}`);
		}

		return row;
	},
	addIcon: (header:HTMLElement, icon?:string) => {
		const iconWrapper = header.querySelector(`.${ICON_HEADER}`) ? header.querySelector(`.${ICON_HEADER}`) : el('div', ICON_HEADER);
		iconWrapper.innerHTML = icon ? icon : uiTriaDown;
		header.prepend(iconWrapper);
	},
}


export default dom;