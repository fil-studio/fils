import { el } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { Item } from "./items/Item";

export class Panel {
	el!: HTMLElement;
	appendTo!: HTMLElement;

	parent: Item | null = null;
	created: boolean = false;

	constructor(parent: Item, appendTo?: HTMLElement) {

		this.parent = parent;

		this.appendTo = appendTo ? appendTo : parent.content;

		this.addEventListeners();
	}

	addEventListeners(): void {

		window.addEventListener('resize', () => this.onResize());

	}

	positionPanel(): void {
		if (!this.created) return;

		const r = this.appendTo.getBoundingClientRect();

		this.el.style.top = `${r.top + r.height}px`;
		this.el.style.width = `${r.width}px`;
		this.el.style.left = `${r.left}px`;
	}

	createPanelContent(){
		// Override this
	}

	create(): void {

		if (this.created) return;
		this.created = true;

		// This needs to be provided by the parent each time as the dom changes
		const parentDomStyle = getComputedStyle(this.appendTo.closest('section') as HTMLElement);
		const bg0 = parentDomStyle.getPropertyValue('--section-bg-0');
		const bg1 = parentDomStyle.getPropertyValue('--section-bg-1');

		this.el = el('div', CSS_UI.panel.baseClass);

		// this.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent!.params.view}`)

		this.el.style.setProperty('--section-bg-0', bg0);
		this.el.style.setProperty('--section-bg-1', bg1);

		this.positionPanel();

		this.createPanelContent();

		document.body.appendChild(this.el);

		this.el.classList.add(CSS_UI.utility.loaded);

		// This little trick allows transitions to work
		setTimeout(() => this.el.classList.add(CSS_UI.utility.active), 10);
	}

	destroy(): void {
		if (!this.created) return;
		this.el.remove();
		this.created = false;
	}

	onResize(): void {
		this.positionPanel();
	}

	onChange(): void {
	}
}