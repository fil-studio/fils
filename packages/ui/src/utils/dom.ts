import { el } from "@fils/utils";

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
				dom.addIcon(titleTab, chevron);
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

		return row;
	},
	addIcon: (header:HTMLElement, icon:string) => {
		const iconWrapper = header.querySelector(`.${ICON_HEADER}`) ? header.querySelector(`.${ICON_HEADER}`) : el('div', ICON_HEADER);
		iconWrapper.innerHTML = icon;
		header.prepend(iconWrapper);
	},
	getChevron: ():string => {
		return `
			<svg viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.35552 5.0016C7.43452 5.00208 7.51185 4.9786 7.57753 4.93418C7.64321 4.88976 7.69424 4.82644 7.72402 4.75239C7.7538 4.67834 7.76096 4.59696 7.7446 4.51875C7.72824 4.44053 7.68909 4.36908 7.6322 4.3136L4.47007 1.1136C4.43336 1.07635 4.38974 1.04679 4.34172 1.02663C4.2937 1.00646 4.24222 0.996085 4.19023 0.996085C4.13824 0.996085 4.08675 1.00646 4.03873 1.02663C3.99071 1.04679 3.94709 1.07635 3.91038 1.1136L0.748248 4.3136C0.674027 4.3886 0.632289 4.49037 0.632215 4.59652C0.632141 4.70266 0.673736 4.80449 0.747852 4.8796C0.821968 4.95471 0.922532 4.99695 1.02742 4.99702C1.13231 4.9971 1.23293 4.955 1.30715 4.88L4.19023 1.9624L7.07251 4.88C7.10926 4.91837 7.15324 4.9489 7.20185 4.96979C7.25046 4.99067 7.30271 5.00149 7.35552 5.0016Z" fill="currentColor"/>
			</svg>`;
	}
}


export default dom;