import check from "../utils/check";
import { ExtendedItem } from "./ExtendedItem";
import { InputController } from "./inputControllers/InputController";
import { Item, ItemOptions, ItemParams } from "./Item";

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
	extendedCSS?: string,
	extendedHTML?: string,
	inputController?: typeof InputController,
	parseValue?: (value: any) => any,
	addEventListeners?: () => void,
	refresh?: () => void,
}

export interface ItemClassRegisterOptions extends ItemRegisterOptions {
	view: string,
	type: string,
	item: typeof Item,
	inputController?: typeof InputController,
}

export const ItemRegister = (registerOptions:ItemRegisterOptions) => {

	const createExtendedItem = (itemParams: ItemParams, options:ItemOptions) => {
		return new ExtendedItem(registerOptions, itemParams, options) as ExtendedItem;
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

export const ItemClassRegister = (registerOptions:ItemClassRegisterOptions) => {

		const createItem = (itemParams: ItemParams, options: ItemOptions) => {
			return new registerOptions.item(registerOptions, itemParams, options) as Item;
		}

		const getCSS = () => {
			return '';
		}

		AvailableItems.items.push({
			view: registerOptions.view,
			type: registerOptions.type,
			create: createItem,
			getCSS: getCSS
		});
}

export const ItemFactory = (itemParams:ItemParams, options:ItemOptions) => {

	if(!itemParams.parent) throw new Error('ItemFactory - parent is required');
	if(!itemParams.object) throw new Error('ItemFactory - object is required');
	if(!itemParams.key) throw new Error('ItemFactory - key is required');

	// Force item type
	if(options.view){
		const item = AvailableItems.items.find(item => item.view === options.view);
		return item.create(itemParams, options);
	}

	const aItems = AvailableItems.items;

	const value = itemParams.object[itemParams.key];

	if(check.isBoolean(value)) {
		const item = aItems.find(item => item.type === 'boolean');
		return item.create(itemParams, options);
	}
	if(check.isString(value)) {
		const item = aItems.find(item => item.type === 'string');
		return item.create(itemParams, options);
	}
	if(check.isNumber(value)) {
		const item = aItems.find(item => item.type === 'number');
		return item.create(itemParams, options);
	}

	throw new Error('ItemFactory - unknown type');
}
