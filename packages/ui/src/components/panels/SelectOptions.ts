import { el } from "@fils/utils";
import { CSS_UI } from "../../partials/cssClasses";
import check from "../../utils/check";
import { Panel } from "../Panel";
import { SelectItem } from "../items/customItems/SelectItem";

export class SelectOptions extends Panel {
	parent: SelectItem;

	protected options: Array<string> | Object;

	createPanelContent(): void {

		this.dom.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent.options.view}`)

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

	protected createOptions(): void {
		const options = this.options;

		const createOption = (value: string) => {
			const option = el('p');
			option.innerHTML = value;
			this.dom.el.appendChild(option);
			this.addOptionListener(option);
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