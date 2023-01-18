import check from "../utils/check";
import { BooleanItem } from "./items/BooleanItem";
import { Item, ItemParams } from "./items/Item";


const ItemFactory = (params:ItemParams, options) => {

	if(!params.parent) throw new Error('ItemFactory - parent is required');
	if(!params.object) throw new Error('ItemFactory - object is required');
	if(!params.key) throw new Error('ItemFactory - key is required');

	const value = params.object[params.key];

	if(check.isBoolean(value)){
		return new BooleanItem(params, options);
	}

	// For testing purposes
	return new Item(params, options);

}

export default ItemFactory;