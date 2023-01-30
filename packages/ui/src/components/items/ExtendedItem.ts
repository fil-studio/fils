import { BASE_CLASS } from "../../utils/dom";
import { ItemRegisterOptions } from "../../partials/ItemFactory";
import { Item, ItemOptions, ItemParams } from "../Item";
import { slugify } from "../../../../utils/lib/Utils";
import { InputPanel } from "../inputPanels/InputPanel";

export class ExtendedItem extends Item {
	inputPanel: InputPanel;

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.dom.classList.add(`${BASE_CLASS}-${slugify(registerOptions.view) }`);

		// InputController
		this.inputPanel = registerOptions.inputPanel ? new registerOptions.inputPanel(this) : null || null;

		this.createDom();
		this.setValue(this.object[this.key]);
		this.addEventListeners();
		this.created = true;
	}
}