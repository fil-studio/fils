import { slugify } from "../../../utils/lib/Utils";
import { BASE_CLASS } from "../utils/dom";
import { Item, ItemOptions, ItemParams } from "./Item";
import { ItemRegisterOptions } from "./ItemFactory";

export class CustomExtendedItem extends Item {
	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);
		this.dom.classList.add(`${BASE_CLASS}-${slugify(registerOptions.view)}`);
	}
}