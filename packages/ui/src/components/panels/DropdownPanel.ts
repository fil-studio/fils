import { el } from "@fils/utils";
import { CSS_UI } from "../../partials/cssClasses";
import { SelectItem } from "../items/customItems/_SelectItem";
import { Panel, PanelDom } from "./Panel";

interface DropdownPanelDom extends PanelDom {
	options: Array<HTMLElement>;
}

export class DropdownPanel extends Panel {
	parent: SelectItem;
	options: Array<any>;

	dom: DropdownPanelDom;

	constructor(parent: SelectItem) {
		super(parent);

		this.dom = {
			...this.dom,
			options: []
		}
	}


	createPanelContent(): void {

		this.options = this.parent.options.options as Array<Object>;
		this.createSearch();
		this.createOptions();

		this.addEventListeners();

	}

	createSearch(): void {

		const search = el('div', CSS_UI.panel.search);
		const p = el('p');
		p.innerHTML = 'Search';
		search.appendChild(p);
		this.dom.el.appendChild(search);

		if(this.options.length < 10) {
			search.classList.add(`.${CSS_UI.utility.hidden}`);
		}

	}

	createOption(_value: Object | string | Array<any>): void {

		const option = el('div', CSS_UI.panel.option);
		const p = el('p');
		p.innerHTML = this.parent.getLabel(_value);
		option.appendChild(p);

		this.dom.el.appendChild(option);
		this.dom.options.push(option);
	}

	private createOptions(): void {

		for(let i = 0; i < this.options.length; i++) {
			this.createOption(this.options[i]);
		}

	}

}