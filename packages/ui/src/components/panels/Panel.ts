import { el } from "@fils/utils";
import { CSS_UI } from "../../partials/cssClasses";
import { Item } from "../items/Item";
import { Dom } from "../UIElement";

export interface PanelDom extends Dom {
	parent: HTMLElement;
}

export class Panel {
	parent: Item;
	dom: PanelDom;

	created: boolean = false;

	constructor(parent: Item) {
		this.dom = {
			el: null,
			parent: null
		}

		this.parent = parent;

		this.addEventListeners();
	}

	addEventListeners(): void {
		// Override this
	}

	positionPanel(): void {
		if (!this.created) return;

		const r = this.dom.parent.getBoundingClientRect();
		console.log(r);

		this.dom.el.style.top = `${r.top + r.height}px`;
		this.dom.el.style.width = `${r.width}px`;
		this.dom.el.style.left = `${r.left}px`;
	}

	createPanelContent(){
		// Override this
	}

	create(): void {

		if (this.created) return;
		this.created = true;

		// This needs to be provided by the parent each time as the dom changes
		const parentDomStyle = getComputedStyle(this.dom.parent.closest('section'));
		const bg0 = parentDomStyle.getPropertyValue('--section-bg-0');
		const bg1 = parentDomStyle.getPropertyValue('--section-bg-1');

		this.dom.el = el('div', CSS_UI.panel.baseClass);
		this.dom.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent.params.view}`)

		this.dom.el.style.setProperty('--section-bg-0', bg0);
		this.dom.el.style.setProperty('--section-bg-1', bg1);

		this.positionPanel();

		this.createPanelContent();

		document.body.appendChild(this.dom.el);

		this.dom.el.classList.add(CSS_UI.utility.loaded);

		// This little trick allows transitions to work
		setTimeout(() => this.dom.el.classList.add(CSS_UI.utility.active), 10);
	}

	destroy(): void {
		if (!this.created) return;
		this.dom.el.remove();
		this.created = false;
	}

	onResize(): void {
		this.positionPanel();
	}

	onChange(): void {
	}
}