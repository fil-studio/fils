import { el } from "@fils/utils";
import { SelectItem } from "../../items/customItems/SelectItem";
import { DropdownPanel } from "../DropdownPanel";

export class SelectPanel extends DropdownPanel {
	parent: SelectItem;

	addOptionListener(option: HTMLElement): void {
		option.addEventListener('click', (e) => {
			e.stopPropagation();
			this.parent.setValue(option.innerHTML);
			this.parent.destroyPanel();
		});
	}

	createOption(value:string) {
		const option = el('p');
		option.innerHTML = value;
		this.dom.el.appendChild(option);
		this.addOptionListener(option);
		this.dom.options.push(option);
	}

}