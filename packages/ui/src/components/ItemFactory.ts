import check from "../utils/check";
import { Item, ItemOptions, ItemParams } from "./Item";


const AvailableItems = {
	items: []
}

export interface ItemRegisterOptions {
	name: string,
	type: string,
	createDom: () => void,
	addEventListeners: () => void
}

export const RegisterItem = (registerOptions:ItemRegisterOptions) => {
	class ExtendedItem extends Item {
		constructor({ parent, object, key }: ItemParams = {}, options?: ItemOptions) {
			super({ parent, object, key }, options);

			this.name = registerOptions.name;
			this.canHandle = registerOptions.type;
			this.createDom = registerOptions.createDom;
			this.addEventListeners = registerOptions.addEventListeners;

			this.createDom();
			this.addEventListeners();
		}
	}

	const createExtendedItem = (params: ItemParams, options) => {
		console.log('create', params.parent);
		return new ExtendedItem(params, options);
	}

	AvailableItems.items.push({
		name: registerOptions.name,
		type: registerOptions.type,
		create: createExtendedItem
	});
}

const ItemFactory = (params:ItemParams, options) => {

	if(!params.parent) throw new Error('ItemFactory - parent is required');
	if(!params.object) throw new Error('ItemFactory - object is required');
	if(!params.key) throw new Error('ItemFactory - key is required');


	const aItems = AvailableItems.items;

	const value = params.object[params.key];

	// Todo s'ha de poder forçar per nom

	if(check.isBoolean(value)) {
		const item = aItems.find(item => item.type === 'boolean');
		return item.create(params, options);
	}

	throw new Error('ItemFactory - unknown type');
}

export default ItemFactory;