import { slugify } from "../../../../utils/lib/Utils";
import { CSS_UI } from "../../partials/cssClasses";
import { ItemRegisterOptions } from "../../partials/ItemFactory";
import check from "../../utils/check";
import { Panel } from "../panels/Panel";
import { Item, ItemParams } from "./Item";
import { ItemOptions } from "./ItemOptions";

export class ExtendedItem extends Item {
	panels: Array<typeof Panel>;

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.dom.el.classList.add(`${CSS_UI.baseClass}-${slugify(registerOptions.view)}`);

		this.panels = check.isArray(registerOptions.panels) ? registerOptions.panels : [registerOptions.panels];

		this.beforeCreate();
		this.createDom();
		this.setValue(this.object[this.key]);
		this.addEventListeners();
		this.created = true;
		this.afterCreate();
	}


	afterCreate(): void {
		// Override this method
	}

	beforeCreate(): void {
		// Override this method
	}
}