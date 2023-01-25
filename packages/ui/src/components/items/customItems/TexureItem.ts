import dom, { VERTICAL_ROW } from "../../../utils/dom";
import { CustomExtendedItem } from "../CustomExtendedItem";
import { InputController } from "../../inputControllers/InputController";
import { ItemOptions, ItemParams } from "../../Item";
import { ItemClassRegisterOptions } from "../../../partials/ItemFactory";

export class TextureItem extends CustomExtendedItem {
	emptyButton: HTMLButtonElement;
	inputController: InputController;

	test: string = 'empty string test';
	test2: number = 15;

	constructor(registerOptions: ItemClassRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(registerOptions, itemParams, options);

		this.dom.classList.add(VERTICAL_ROW);

		this.emptyButton = dom.createButton('Add');
		this.inputWrapper.appendChild(this.emptyButton);

		this.inputController = registerOptions.inputController ? new registerOptions.inputController(this) : null || null;

	}
}