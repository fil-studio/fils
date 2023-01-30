import dom, { VERTICAL_ROW } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { InputPanel } from "../../inputPanels/InputPanel";
import { ItemOptions, ItemParams } from "../../Item";
import { ItemRegisterOptions } from "../../../partials/ItemFactory";

export class TextureItem extends ExtendedItem {
	emptyButton: HTMLButtonElement;
	inputPanel: InputPanel;

	test: string = 'empty string test';
	test2: number = 15;

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(registerOptions, itemParams, options);

		this.dom.classList.add(VERTICAL_ROW);

		this.emptyButton = dom.createButton('Add');
		this.inputWrapper.appendChild(this.emptyButton);

		this.inputPanel = registerOptions.inputPanel ? new registerOptions.inputPanel(this) : null || null;

	}
}