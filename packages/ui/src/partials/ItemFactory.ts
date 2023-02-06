import { Item, ItemParams } from "../components/items/Item";
import { ExtendedItem } from "../components/items/ExtendedItem";
import { ItemOptions } from "../components/items/ItemOptions";
import { Panel } from "../components/Panel";

// Available items array
export interface AvailableItem {
	view: string,
	create: (params: ItemParams, options) => Item,
	getCSS: () => string
}
export const AvailableItems = {
	items: [] as AvailableItem[],
}
export interface ItemRegisterOptions {
	view: string,
	extendedCSS?: string,
	extendedHTML?: string,
	panel?: typeof Panel,
	parseValue?: (value: any) => any,
	addEventListeners?: () => void,
	refresh?: () => void,
	item: typeof ExtendedItem,
}

// export interface ItemClassRegisterOptions extends ItemRegisterOptions {
// 	view: string,
// 	type: string,
// }

// export const ItemRegister = (registerOptions:ItemRegisterOptions) => {

// 	const createExtendedItem = (itemParams: ItemParams, options:ItemOptions) => {
// 		return new ExtendedItem(registerOptions, itemParams, options) as ExtendedItem;
// 	}

// 	const getCSS = () => {
// 		return registerOptions.extendedCSS;
// 	}

// 	AvailableItems.items.push({
// 		view: registerOptions.view,
// 		type: registerOptions.type,
// 		create: createExtendedItem,
// 		getCSS: getCSS
// 	});
// }

export const ItemRegister = (registerOptions:ItemRegisterOptions) => {

		const createItem = (itemParams: ItemParams, options: ItemOptions) => {
			return new registerOptions.item(registerOptions, itemParams, options) as ExtendedItem;
		}

		const getCSS = () => {
			return '';
		}

		AvailableItems.items.push({
			view: registerOptions.view,
			create: createItem,
			getCSS: getCSS
		});
}

export const ItemFactory = (itemParams:ItemParams, options:ItemOptions) => {

	if(!itemParams.object) throw new Error('ItemFactory - object is required');
	if(!itemParams.key) throw new Error('ItemFactory - key is required');
	if(!options.view) throw new Error('ItemFactory - view is required');

	// Force item type
	if(options.view){
		const item = AvailableItems.items.find(item => item.view === options.view);
		if(!item) throw new Error('ItemFactory - unknown view');
		return item.create(itemParams, options);
	}

	// const aItems = AvailableItems.items;

	// const value = itemParams.object[itemParams.key];

	// if(check.isBoolean(value)) {
	// 	const item = aItems.find(item => item.type === 'boolean');
	// 	return item.create(itemParams, options);
	// }
	// if(check.isString(value)) {
	// 	const item = aItems.find(item => item.type === 'string');
	// 	return item.create(itemParams, options);
	// }
	// if(check.isNumber(value)) {
	// 	const item = aItems.find(item => item.type === 'number');
	// 	return item.create(itemParams, options);
	// }

	throw new Error('ItemFactory - unknown type');
}
