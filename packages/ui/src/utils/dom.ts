const BASE_CLASS = '_ui'

const WRAPPER_CLASS = `${BASE_CLASS}-wrapper`;
// const ALL_CLASS = `${BASE_CLASS}-el`;
// const GROUP_CLASS = `${BASE_CLASS}-group`;
// export const FIRST_GROUP_CLASS = `${BASE_CLASS}-first-group`;
// const TAB_CLASS = `${BASE_CLASS}-tab`;
const CONTENT_WRAPPER_CLASS = `${BASE_CLASS}-content`;
// const TITLE_CLASS = `${BASE_CLASS}-title`;

// const ITEM_CLASS = `${BASE_CLASS}-item`;
// export const ITEM_BOOLEAN = `${ITEM_CLASS}-boolean`;
// export const ITEM_STRING = `${ITEM_CLASS}-string`;
// export const ITEM_NUMBER = `${ITEM_CLASS}-number`;
// const ITEM_SPECIAL_DOM = `${ITEM_CLASS}-special-dom`;

// const FOLDABLE_CLASS = `${BASE_CLASS}-foldable`;
// const FOLDED_CLASS = `${BASE_CLASS}-folded`;


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

const createTitle = (title: string) => {
	if (!title) return;
	const h3 = document.createElement('h3');
	h3.innerText = title;
	return h3;
}

// const addFoldListener = (row: HTMLElement) => {
// 	const tab = row.querySelector(`.${TAB_CLASS}`);
// 	const contentWrapper = row.querySelector(`.${CONTENT_WRAPPER_CLASS}`);

// 	tab.addEventListener('click', () => {
// 		row.classList.toggle(FOLDED_CLASS);
// 	})

// }

// const setHeight = () => {
// 	contentWrapper.style.height = 'auto';
// 	const { height } = contentWrapper.getBoundingClientRect();
// 	console.log(height);

// 	contentWrapper.style.setProperty('--h', `${height}px`);
// 	contentWrapper.style.height = '';
// }

const dom = {
	foldableItems: [],
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
		// row.classList.add(ALL_CLASS);
		if(type === RowTypes.ui) row.classList.add(WRAPPER_CLASS);
		// if(type === RowTypes.group) row.classList.add(GROUP_CLASS);
		// if(type === RowTypes.item) row.classList.add(ITEM_CLASS);
		// if(type === RowTypes.button) row.classList.add(ITEM_CLASS);


		/**
		 * Create a Group Row
		 */
		if(type === RowTypes.group || type === RowTypes.item) {

			const domEl = type === RowTypes.group ? 'header' : 'legend';

			const titleTab = document.createElement(domEl);
			const h3 = createTitle(title);
			titleTab.appendChild(h3);

			const contentWrapper = document.createElement('div');
			row.appendChild(titleTab);
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Item Row
		 */
		if(type === RowTypes.item) {

		}

		/**
		 * Create a Button Row
		 */
		if(type === RowTypes.button) {
			const button = document.createElement('button');
			const h3 = createTitle(title);
			button.appendChild(h3);
			row.appendChild(button);
		}

		console.log(row);

		return row;
	},
	// refresh(){
	// 	for(const item of this.foldableItems){
	// 		setHeight(item)
	// 	}
	// }
}


export default dom;