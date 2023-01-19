const ALL_CLASS = 'fil__ui-element';

const WRAPPER_CLASS = 'fil__ui';

const GROUP_CLASS = 'fil__ui-group';
const TAB_CLASS = 'fil__ui-tab';
const TITLE_CLASS = 'fil__ui-title';

const ITEM_CLASS = 'fil__ui-item';

const ITEM_BOOLEAN = 'fil__ui-boolean';
const ITEM_STRING = 'fil__ui-string';
const ITEM_NUMBER = 'fil__ui-number';


export enum RowTypes {
	ui,
	group,
	item,
	button
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

const dom = {
	createRow: (type: RowTypes, title?:string) => {
		const row = document.createElement('div');
		row.classList.add(ALL_CLASS);

		if(type === RowTypes.ui) row.classList.add(WRAPPER_CLASS);
		if(type === RowTypes.group) row.classList.add(GROUP_CLASS);
		if(type === RowTypes.item) row.classList.add(ITEM_CLASS);
		if(type === RowTypes.button) row.classList.add(ITEM_CLASS);

		if(type === RowTypes.group) {
			const tab = createTab(title);
			row.appendChild(tab);
		}

		if(type === RowTypes.item) {
			const h3 = createTitle(title);
			row.appendChild(h3);
		}

		return row;
	}
}


export default dom;