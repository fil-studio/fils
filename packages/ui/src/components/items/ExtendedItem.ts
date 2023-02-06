import { slugify } from "../../../../utils/lib/Utils";
import { CSS_UI } from "../../partials/cssClasses";
import { ItemRegisterOptions } from "../../partials/ItemFactory";
import { Panel } from "../panels/Panel";
import { Item, ItemParams } from "./Item";
import { ItemOptions } from "./ItemOptions";

export class ExtendedItem extends Item {
	panel: Panel;

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.dom.el.classList.add(`${CSS_UI.baseClass}-${slugify(registerOptions.view)}`);

		// InputController

		this.createDom();
		this.setValue(this.object[this.key]);
		this.addEventListeners();
		this.created = true;
		this.afterCreate();

		this.panel = registerOptions.panel ? new registerOptions.panel(this) : null || null;
	}
}