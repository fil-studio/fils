import { Item } from "../components/items/Item";
import { ItemParameters } from "../components/items/ItemParameters";

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

	console.log('ItemFactory', createParams);

	const params = createParams.params;

	if(!createParams.object) throw new Error('ItemFactory - object is required');
	if(!createParams.key) throw new Error('ItemFactory - key is required');
	if(!params.view) throw new Error('ItemFactory - view is required');


	// Force item type
	if(params.view){
		const item = AvailableItems.items.find(item => item.view === params.view);
		if(!item) throw new Error('ItemFactory - unknown view');
		console.log();

		return item.create(createParams);
	}


	throw new Error('ItemFactory - unknown type');
}
