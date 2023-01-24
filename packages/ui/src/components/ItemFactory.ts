import check from "../utils/check";
import { Item, ItemOptions, ItemParams } from "./Item";
import { slugify }from '../../../utils'
import { BASE_CLASS } from "../utils/dom";
import { Popup } from "./popups/Popup";

// Available items array
export interface AvailableItem {
	view: string,
	type: string,
	create: (params: ItemParams, options) => Item,
	getCSS: () => string
}
export const AvailableItems = {
	items: [] as AvailableItem[],
}
export interface ItemRegisterOptions {
	view: string,
	type: string,
	extendedCSS: string,
	extendedHTML: string,
	popup?: typeof Popup,
	addEventListeners?: () => void,
	refresh?: () => void,
}

export const ItemRegister = (registerOptions:ItemRegisterOptions) => {
	class ExtendedItem extends Item {
		extendedHTML: string;
		refreshFunction: () => void;
		popup: Popup;
		constructor({ parent, object, key }: ItemParams = {}, options?: ItemOptions) {
			super({ parent, object, key }, options);

			//
			this.view = registerOptions.view;
			this.canHandle = registerOptions.type;
			this.extendedHTML = registerOptions.extendedHTML;
			this.addEventListeners = registerOptions.addEventListeners;
			this.refreshFunction = registerOptions.refresh || (() => {});

			this.dom.classList.add(`${BASE_CLASS}-${slugify(this.view) }`);

			// Popup
			this.popup = registerOptions.popup ? new registerOptions.popup(this) : null || null;

			this.createDom();
			this.addEventListeners();
			this.refresh();
		}

		createDom() {
			this.inputWrapper.innerHTML = this.extendedHTML;
		}

		refresh(){
			super.refresh();
			this.refreshFunction();
		}
	}

	const createExtendedItem = (params: ItemParams, options) => {
		return new ExtendedItem(params, options) as Item;
	}

	const getCSS = () => {
		return registerOptions.extendedCSS;
	}

	AvailableItems.items.push({
		view: registerOptions.view,
		type: registerOptions.type,
		create: createExtendedItem,
		getCSS: getCSS
	});
}

export const ItemFactory = (params:ItemParams, options) => {

	if(!params.parent) throw new Error('ItemFactory - parent is required');
	if(!params.object) throw new Error('ItemFactory - object is required');
	if(!params.key) throw new Error('ItemFactory - key is required');

	// Force item type
	if(options.view){
		const item = AvailableItems.items.find(item => item.view === options.view);
		return item.create(params, options);
	}

	const aItems = AvailableItems.items;

	const value = params.object[params.key];

	if(check.isBoolean(value)) {
		const item = aItems.find(item => item.type === 'boolean');
		return item.create(params, options);
	}
	if(check.isString(value)) {
		const item = aItems.find(item => item.type === 'string');
		return item.create(params, options);
	}
	if(check.isNumber(value)) {
		const item = aItems.find(item => item.type === 'number');
		return item.create(params, options);
	}

	throw new Error('ItemFactory - unknown type');
}
