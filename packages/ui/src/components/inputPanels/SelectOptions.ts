import { el } from "@fils/utils";
import check from "../../utils/check";
import { SelectItem } from "../items/customItems/SelectItem";
import { InputPanel } from "../InputPanel";

export class SelectOptions extends InputPanel {
	parent: SelectItem;

	protected options: Array<string> | Object;

	addEventListeners(): void {
		super.addEventListeners();
	}

	create(): void {
		if (this.created) return;
		super.create();
		this.options = this.parent.options.options;

		console.log('Select - create');

	}

	// destroy(): void {
	// 	super.destroy();

	// }

	protected createOptions(): void {
		const options = this.options;

		const createOption = (value: string) => {
			console.log('value:', value);
			const option = el('p');
			option.innerHTML = value;
			this.dom.appendChild(option);
		}

		if(check.isArray(options)) {
			let optionsArray = options as Array<string>;
			for (let i = 0; i < optionsArray.length; i++) createOption(optionsArray[i]);
		}

		if(check.isObject(options)) {
			let optionsObject = options as Object;

			Object.keys(optionsObject).forEach((key) => {
				createOption(optionsObject[key]);
			});
		}
	}

}