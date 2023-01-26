import { slugify } from "../../../../utils/lib/Utils";
import { ItemRegisterOptions } from "../../partials/ItemFactory";
import { BASE_CLASS } from "../../utils/dom";
import { Item, ItemOptions, ItemParams } from "../Item";


export class CustomExtendedItem extends Item {
	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);
		this.dom.classList.add(`${BASE_CLASS}-${slugify(registerOptions.view)}`);
	}
}