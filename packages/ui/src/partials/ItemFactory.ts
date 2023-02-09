import { Item } from "../components/items/Item";
import { ItemParameters } from "../components/items/ItemParameters";
import check from "../utils/check";

// Available items array
export interface AvailableItem {
	view: string,
	create: (params: CreateItemParams) => Item,
}
export const AvailableItems = {
	items: [] as AvailableItem[],
}
export interface ItemRegisterOptions {
	view: string,
	item: typeof Item,
}

export interface CreateItemParams {
	object: any,
	key: string,
	params?: ItemParameters
}

export const ItemRegister = (registerOptions:ItemRegisterOptions) => {

	const createItem = (createParams: CreateItemParams) => {
		return new registerOptions.item(createParams) as Item;
	}

	AvailableItems.items.push({
		view: registerOptions.view,
		create: createItem,
	});
}

export const ItemFactory = (createParams:CreateItemParams) => {

	const params = createParams.params;

	if(!createParams.object) throw new Error('ItemFactory - object is required');
	if(!createParams.key) throw new Error('ItemFactory - key is required');
	if(!params.view) throw new Error('ItemFactory - view is required');

	// Force item type
	if(params.view){
		const item = AvailableItems.items.find(item => item.view === params.view);
		if(!item) throw new Error('ItemFactory - unknown view');
		return item.create(createParams);
	}

	const item = getItemByValue(createParams.object[createParams.key], createParams.params);

	if(item) return item.create(createParams);

	throw new Error('ItemFactory - unknown type');
}

const getItemByValue = (value, params): AvailableItem => {

	if(check.isObject(value)) {

		let keys = Object.keys(value);

		const c1 = ['r', 'g', 'b'];
		const c2 = ['h', 's', 'b'];
		const c3 = ['h', 's', 'l'];
		if(keys === c1 || keys === c2 || keys === c3) return AvailableItems.items.find(item => item.view === 'color');

		const n1 = ['x', 'y'];
		const n2 = ['x', 'y', 'z'];
		const n3 = ['x', 'y', 'z', 'w'];
		if(keys === n1 || keys === n2 || keys === n3) return AvailableItems.items.find(item => item.view === 'number');

	}

	// If min max or step use range
	if (check.isNumber(value)) {
		if(params){
			if(params.min || params.max || params.step) return AvailableItems.items.find(item => item.view === 'range');
		}
		return AvailableItems.items.find(item => item.view === 'number');
	}

	if (check.isString(value)) {
		if(value.substring(0,1) === '#') return AvailableItems.items.find(item => item.view === 'color');
		if(value.substring(0,2) === '0x') return AvailableItems.items.find(item => item.view === 'color');
		return AvailableItems.items.find(item => item.view === 'string');
	}

	if(check.isBoolean(value)) return AvailableItems.items.find(item => item.view === 'boolean');

	return null;

}