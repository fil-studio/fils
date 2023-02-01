import { slugify } from "../../../../utils/lib/Utils";
import { CSS_UI } from "../../partials/cssClasses";
import { ItemRegisterOptions } from "../../partials/ItemFactory";
import { InputPanel } from "../InputPanel";
import { Item, ItemParams } from "../Item";
import { ItemOptions } from "./ItemOptions";

export class ExtendedItem extends Item {
	inputPanel: InputPanel;

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.dom.classList.add(`${CSS_UI.baseClass}-${slugify(registerOptions.view)}`);

		// InputController
		this.inputPanel = registerOptions.inputPanel ? new registerOptions.inputPanel(this) : null || null;

		this.createDom();
		this.setValue(this.object[this.key]);
		this.addEventListeners();
		this.created = true;
		this.afterCreate();
	}
}