const BASE_CLASS = '_ui'

const WRAPPER_CLASS = `${BASE_CLASS}-wrapper`;
const ALL_CLASS = `${BASE_CLASS}-element`;
const GROUP_CLASS = `${BASE_CLASS}-group`;
export const FIRST_GROUP_CLASS = `${BASE_CLASS}-first-group`;
const TAB_CLASS = `${BASE_CLASS}-tab`;
const TITLE_CLASS = `${BASE_CLASS}-title`;

const ITEM_CLASS = `${BASE_CLASS}-item`;
export const ITEM_BOOLEAN = `${ITEM_CLASS}-boolean`;
export const ITEM_STRING = `${ITEM_CLASS}-string`;
export const ITEM_NUMBER = `${ITEM_CLASS}-number`;
const ITEM_SPECIAL_DOM = `${ITEM_CLASS}-special-dom`;

const FOLDABLE_CLASS = `${BASE_CLASS}-foldable`;
const FOLDED_CLASS = `${BASE_CLASS}-folded`;


export enum RowTypes {
	ui,
	group,
	item,
	button
}

interface DomOptions {
	depth?: number;
	title?: string;
	foldable?: boolean;
	folded?: boolean;
}

const createTitle = (title: string) => {
	if (!title) return;
	const h3 = document.createElement('h3');
	h3.innerText = title;
	return h3;
}

const createTab = (title: string) => {
	if (!title) return;

	const tab = document.createElement('div');
	tab.classList.add(TAB_CLASS)

	const h3 = createTitle(title);
	tab.appendChild(h3);
	tab.classList.add(TITLE_CLASS);

	return tab;
}

const addFoldListener = (tab: HTMLElement) => {
	if(!tab.classList.contains(FOLDABLE_CLASS)) return;

	tab.addEventListener('click', () => {
		tab.classList.toggle(FOLDED_CLASS);
	})

}

const dom = {
	createRow: (type: RowTypes, {
		title,
		foldable,
		folded,
		depth
	}:DomOptions = {}) => {
		const row = document.createElement('div');
		row.classList.add(`${BASE_CLASS}-depth-${depth}`);

		/**
		 * Add Classes to Row
		 */
		row.classList.add(ALL_CLASS);
		if(type === RowTypes.ui) row.classList.add(WRAPPER_CLASS);
		if(type === RowTypes.group) row.classList.add(GROUP_CLASS);
		if(type === RowTypes.item) row.classList.add(ITEM_CLASS);
		if(type === RowTypes.button) row.classList.add(ITEM_CLASS);


		/**
		 * Create a Group Row
		 */
		if(type === RowTypes.group) {
			const tab = createTab(title);
			tab.classList.add(`${BASE_CLASS}-depth-${depth}`);
			row.appendChild(tab);

			if(folded) tab.classList.add(FOLDABLE_CLASS, FOLDED_CLASS);
			if(foldable) tab.classList.add(FOLDABLE_CLASS);
			addFoldListener(tab);
		}

		/**
		 * Create a Item Row
		 */
		if(type === RowTypes.item) {
			if(title){
				const h3 = createTitle(title);
				row.appendChild(h3);
			}
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

		return row;
	}
}


export default dom;