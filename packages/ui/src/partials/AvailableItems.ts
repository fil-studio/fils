import { Item } from "../main";
import { CreateItemParams } from "./ItemFactory";

export interface AvailableItem {
	view: string,
	create: (params: CreateItemParams) => Item,
}

const AvailableItems = {
	items: [] as Array<AvailableItem>,
}

export interface ItemRegisterOptions {
	view: string,
	item: typeof Item,
}

export const ItemRegister = (registerOptions: ItemRegisterOptions) => {

	const createItem = (createParams: CreateItemParams) => {
		return new registerOptions.item(createParams) as Item;
	}

	AvailableItems.items.push({
		view: registerOptions.view,
		create: createItem,
	});

}

export default AvailableItems;