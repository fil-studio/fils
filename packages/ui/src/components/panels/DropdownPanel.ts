import { el } from "@fils/utils";
import { CSS_UI } from "../../partials/cssClasses";
import { SelectItem } from "../items/customItems/SelectItem";
import { TextureItem } from "../items/customItems/TextureItem";
import { Panel, PanelDom } from "./Panel";

interface DropdownPanelDom extends PanelDom {
	options: Array<HTMLElement>;
}

export class DropdownPanel extends Panel {
	parent: SelectItem | TextureItem;
	options: Array<any>;

	dom: DropdownPanelDom;

	constructor(parent: SelectItem | TextureItem) {
		super(parent);
		this.dom = this.dom as DropdownPanelDom;
		this.dom.options = [];
	}

	positionPanel(): void {
		if (!this.created) return;

		this.dom.el.classList.add(CSS_UI.panel.dropdown);

		const r = this.dom.parent.content.getBoundingClientRect();
		this.dom.el.style.top = `${r.top + r.height}px`;
		this.dom.el.style.width = `${r.width}px`;
		this.dom.el.style.left = `${r.left}px`;
	}


	createPanelContent(): void {

		this.options = this.parent.options.options as Array<Object>;
		this.createSearch();
		this.createOptions();

		this.addEventListeners();

	}

	addEventListeners(): void {

	}

	createSearch(): void {

		const search = el('div', 'search');
		const p = el('p');
		p.innerHTML = 'Search';
		search.appendChild(p);
		this.dom.el.appendChild(search);

		if(this.options.length < 10) {
			search.classList.add(`.${CSS_UI.utility.hidden}`);
		}

	}

	createOption(value: Object) {
	}

	private createOptions(): void {

		for(let i = 0; i < this.options.length; i++) {
			this.createOption(this.options[i]);
		}

	}

}