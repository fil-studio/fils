import { el } from "@fils/utils";
import check from "../../../utils/check";
import { SelectItem } from "../../items/customItems/SelectItem";
import { DropdownPanel } from "../DropdownPanel";

export class SelectPanel extends DropdownPanel {
	parent: SelectItem;

	protected options: Array<string> | Object;

	createPanelContent(): void {

		this.options = this.parent.options.options;

		this.createOptions();
	}

	addOptionListener(option: HTMLElement): void {
		option.addEventListener('click', (e) => {
			e.stopPropagation();
			this.parent.setValue(option.innerHTML);
			this.parent.destroyPanel();
		});
	}

	protected createOption(value:string) {
		const option = el('p');
		option.innerHTML = value;
		this.dom.el.appendChild(option);
		this.addOptionListener(option);
	}

	protected createOptions(): void {
		const options = this.options;

		if(check.isArray(options)) {
			let optionsArray = options as Array<string>;
			for (let i = 0; i < optionsArray.length; i++) this.createOption(optionsArray[i]);
		}

		if(check.isObject(options)) {
			let optionsObject = options as Object;

			Object.keys(optionsObject).forEach((key) => {
				this.createOption(optionsObject[key]);
			});
		}
	}

}