import { el } from "@fils/utils";

export const BASE_CLASS = '_ui';
export const ICON_HEADER = '_ui-icon';
export const CONTENT_WRAPPER = '_ui-content-wrapper';
export const VERTICAL_ROW = '_ui-vertical-row';
export const FOLDABLE = '_ui-foldable';
export const FOLDABLE_ELEMENT = '_ui-foldable-el';

export const WRAPPER_CLASS = `${BASE_CLASS}-wrapper`;
export const EMBED_WRAPPER_CLASS = `${BASE_CLASS}-embed-wrapper`;

export enum RowTypes {
	ui,
	group,
	item,
	button
}

interface DomOptions {
	type: RowTypes;
	depth: number;
	title?: string;
	icon?: string;
}

const dom = {
	createButton: (title:string) => {
		const button = document.createElement('button');
		const h3 = document.createElement('h3');
		h3.innerText = title;
		button.appendChild(h3);

		return button;
	},
	createRow: ({
		type,
		depth,
		title,
		icon
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

		const row = document.createElement(domEl);
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

			if(icon){
				const iconWrapper = el('div');
				iconWrapper.classList.add(ICON_HEADER);
				iconWrapper.innerHTML = icon;
				titleTab.appendChild(iconWrapper);
			}

			const h3 = el('h3');
			h3.innerText = title;
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
			const h4 = el('h4');
			h4.innerText = title;
			row.appendChild(h4);

			const contentWrapper = el('div');
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Button Row
		 */
		if(type === RowTypes.button) {
			const button = dom.createButton(title);
			row.appendChild(button);
		}

		return row;
	}
}


export default dom;