import check from "../utils/check";
import { Item, ItemOptions, ItemParams } from "./Item";
import { slugify }from '../../../utils'


const AvailableItems = {
	items: []
}

export interface ItemRegisterOptions {
	name: string,
	type: string,
	extendedHTML: string,
	addEventListeners: () => void
}

export const RegisterItem = (registerOptions:ItemRegisterOptions) => {
	class ExtendedItem extends Item {
		extendedHTML: string;
		uid: string;
		constructor({ parent, object, key }: ItemParams = {}, options?: ItemOptions) {
			super({ parent, object, key }, options);

			this.name = registerOptions.name;
			this.uid = slugify(this.name);
			this.canHandle = registerOptions.type;
			this.extendedHTML = registerOptions.extendedHTML;
			this.addEventListeners = registerOptions.addEventListeners;

			this.createDom();
			this.addEventListeners();
		}

		createDom() {
			this.inputWrapper.innerHTML = this.extendedHTML;
		}
	}

	const createExtendedItem = (params: ItemParams, options) => {
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