import { el } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { Dom, Item, ItemDom } from "./Item";

interface PanelDom extends Dom {
	ui: HTMLElement,
	parent: ItemDom
}

export class Panel {
	parent: Item;
	dom: PanelDom;

	created: boolean = false;

	constructor(parent: Item) {
		this.dom = {
			el: null,
			ui: null,
			parent: null
		}

		this.parent = parent;
		this.dom.parent = parent.dom;
		this.addEventListeners();
	}

	addEventListeners(): void {

		window.addEventListener('resize', () => {
			this.positionPanel();
		});
	}

	positionPanel(): void {
		if (!this.created) return;

		const r = this.dom.parent.content.getBoundingClientRect();
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

		this.dom.ui = this.parent.dom.el.closest(`.${CSS_UI.wrapper}`);

		const parentDomStyle = getComputedStyle(this.dom.parent.content);
		const bg0 = parentDomStyle.getPropertyValue('--section-bg-0');
		const bg1 = parentDomStyle.getPropertyValue('--section-bg-1');

		this.dom.el = el('div', CSS_UI.panel.baseClass);
		this.dom.el.style.setProperty('--section-bg-0', bg0);
		this.dom.el.style.setProperty('--section-bg-1', bg1);

		this.positionPanel();

		this.createPanelContent();

		this.dom.ui.appendChild(this.dom.el);
	}

	destroy(): void {
		if (!this.created) return;
		this.created = false;
		this.dom.remove();
		this.dom = null;
	}

	onResize(): void {
	}

	onChange(): void {
	}
}