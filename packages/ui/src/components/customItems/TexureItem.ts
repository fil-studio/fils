import dom, { BASE_CLASS, VERTICAL_ROW } from "../../utils/dom";
import { InputController } from "../inputControllers/InputController";
import { Item, ItemOptions, ItemParams } from "../Item";
import { ItemClassRegisterOptions } from "../ItemFactory";

export class TextureItem extends Item {
	emptyButton: HTMLButtonElement;
	inputController: InputController;

	constructor(registerOptions: ItemClassRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.dom.classList.add(`${BASE_CLASS}-texture`);
		this.dom.classList.add(VERTICAL_ROW);


		this.emptyButton = dom.createButton('Add');
		this.inputWrapper.appendChild(this.emptyButton);

		this.inputController = registerOptions.inputController ? new registerOptions.inputController(this) : null || null;

	}
}