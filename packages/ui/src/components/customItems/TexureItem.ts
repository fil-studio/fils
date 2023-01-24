import dom, { BASE_CLASS, VERTICAL_ROW } from "../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { Item, ItemOptions, ItemParams } from "../Item";
import { ItemClassRegisterOptions, ItemRegisterOptions } from "../ItemFactory";

export class TextureItem extends Item {
	emptyButton: HTMLButtonElement;
	constructor(itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.dom.classList.add(`${BASE_CLASS}-texture`);
		this.dom.classList.add(VERTICAL_ROW);


		this.emptyButton = dom.createButton('Add');
		this.inputWrapper.appendChild(this.emptyButton);
	}


}