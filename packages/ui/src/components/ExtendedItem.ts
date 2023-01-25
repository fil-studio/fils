import { slugify } from "../../../utils/lib/Utils";
import { BASE_CLASS } from "../utils/dom";
import { InputController } from "./inputControllers/InputController";
import { Item, ItemOptions, ItemParams } from "./Item";
import { ItemRegisterOptions } from "./ItemFactory";

export class ExtendedItem extends Item {
	extendedHTML: string;
	parseValue: (v: any) => any;
	refreshFunction: () => void;
	inputController: InputController;

	constructor(registerOptions: ItemRegisterOptions, itemParams: ItemParams, options?: ItemOptions) {
		super(itemParams, options);

		this.extendedHTML = registerOptions.extendedHTML;
		this.parseValue = registerOptions.parseValue || ((v) => { return v });
		this.addEventListeners = registerOptions.addEventListeners || (() => {});
		this.refreshFunction = registerOptions.refresh || (() => {});

		this.dom.classList.add(`${BASE_CLASS}-${slugify(registerOptions.view) }`);

		// InputController
		this.inputController = registerOptions.inputController ? new registerOptions.inputController(this) : null || null;

		this.createDom();
		this.setValue(this.object[this.key]);
		this.addEventListeners();
		this.created = true;
	}

	setValue(value: any) {
		let v = this.parseValue(value);
		super.setValue(v);
	}

	createDom() {
		this.inputWrapper.innerHTML = this.extendedHTML;
		super.createDom();
	}

	refresh() {
		super.refresh();
		this.refreshFunction();
	}
}