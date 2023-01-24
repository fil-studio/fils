export const BASE_CLASS = '_ui'
export const VERTICAL_ROW = '_ui-vertical-row'

const WRAPPER_CLASS = `${BASE_CLASS}-wrapper`;

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
		if(type === RowTypes.ui) row.classList.add(WRAPPER_CLASS);


		/**
		 * Create a Group Row
		 */
		if(type === RowTypes.group) {

			const titleTab = document.createElement('header');
			const h3 = document.createElement('h3');
			h3.innerText = title;
			titleTab.appendChild(h3);
			row.appendChild(titleTab);

			const contentWrapper = document.createElement('div');
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Item Row
		 */
		if(type === RowTypes.item) {
				const h4 = document.createElement('h4');
				h4.innerText = title;
				row.appendChild(h4);

				const contentWrapper = document.createElement('div');
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
}


export default dom;