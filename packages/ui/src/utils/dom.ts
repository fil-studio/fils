import { el } from "@fils/utils";

export const BASE_CLASS = '_ui';
export const ICON_HEADER = '_ui-icon';
export const CONTENT_WRAPPER = '_ui-content-wrapper';
export const VERTICAL_ROW = '_ui-vertical-row';
export const FOLDED = '_ui-folded';
export const NOT_FOLDED = '_ui-not-folded';
export const FOLDABLE = '_ui-foldable';
export const FOLDABLE_ELEMENT = '_ui-foldable-el';

export const WRAPPER_CLASS = `${BASE_CLASS}-wrapper`;
export const EMBED_WRAPPER_CLASS = `${BASE_CLASS}-embed-wrapper`;

const chevron = `
	<svg class="_ui-chevron" viewBox="0 0 9 7" xmlns="http://www.w3.org/2000/svg">
		<path d="M0 0.505002C0 0.227002 0.22 1.6295e-06 0.5 1.6295e-06H7.5C7.5917 -0.000232455 7.68171 0.0247583 7.76016 0.0722401C7.83862 0.119722 7.9025 0.187866 7.94483 0.269217C7.98716 0.350569 8.0063 0.441994 8.00015 0.533493C7.99401 0.624991 7.96282 0.713038 7.91 0.788002L4.41 5.788C4.36392 5.85402 4.30258 5.90793 4.2312 5.94515C4.15982 5.98238 4.08051 6.00182 4 6.00182C3.91949 6.00182 3.84018 5.98238 3.7688 5.94515C3.69742 5.90793 3.63608 5.85402 3.59 5.788L0.0900002 0.788002C0.0318597 0.705045 0.000457382 0.606303 0 0.505002Z" fill="currentColor"/>
	</svg>`;

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
	foldable?: boolean;
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
		foldable
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

			if(foldable){
				dom.addIcon(titleTab, chevron);
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
	},
	addIcon: (header:HTMLElement, icon:string) => {
		const iconWrapper = header.querySelector(`.${ICON_HEADER}`) ? header.querySelector(`.${ICON_HEADER}`) : el('div', ICON_HEADER);
		iconWrapper.innerHTML = icon;
		header.prepend(iconWrapper);
	}
}


export default dom;