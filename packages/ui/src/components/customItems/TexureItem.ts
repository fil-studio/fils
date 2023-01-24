import dom from "../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { Item, ItemOptions, ItemParams } from "../Item";
import { ItemClassRegisterOptions, ItemRegisterOptions } from "../ItemFactory";

export class TextureItem extends Item {
	emptyButton: HTMLButtonElement;
	constructor(itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.emptyButton = dom.createButton('Add');
	}


}