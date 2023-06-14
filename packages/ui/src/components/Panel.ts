import { el, isNull, remove } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { UIElement } from "./UIElement";

const c = {
	left: "_ui-panel-left",
	right: "_ui-panel-right",
	dropdown: "_ui-panel-dropdown",
};

export interface HasPanel {
	el:HTMLElement;
	panel: Panel<UIElement>;
	close(): void;
	open(): void;
	refresh(): void
}

export class Panel<T extends UIElement> {
	el: HTMLElement;
	dropdownFrom!: HTMLElement;

	parent: T;
	created: boolean = false;

	uiWrapper:HTMLElement;
	spacing:number = 0;

	constructor(parent: T, dropdownFrom?: HTMLElement) {

		this.parent = parent;
		this.dropdownFrom = dropdownFrom ? dropdownFrom : null;

		this.spacing = 3;
	}

	addEventListeners(): void {
		window.addEventListener('keydown', (e: KeyboardEvent) => {
			if (!this.created) return;
			if (e.key === 'Escape') {
				this.parent.close();
			}
		});
	}

	createPanelContent(): void {}

	positionPanel(): void {

		const panelRect = this.el.getBoundingClientRect();
		const uiRect = this.uiWrapper.getBoundingClientRect();


		// Panel is droppdown
		if(!isNull(this.dropdownFrom)){

			this.el.classList.add(c.dropdown);

			const dropdownFromRect = this.dropdownFrom.getBoundingClientRect();

			const top = (dropdownFromRect.top + dropdownFromRect.height) - uiRect.top;
			const left = dropdownFromRect.left - uiRect.left;

			this.el.style.top = `${top + this.spacing}px`;
			this.el.style.left = `${left}px`;
			this.el.style.width = `${dropdownFromRect.width}px`;

			return;
		}

		// Lateral Panels
		const parentRect = this.parent.el.getBoundingClientRect();
		const top = Math.max(parentRect.top - uiRect.top - panelRect.height * .5, 0);

		this.el.style.top = `${top}px`;

		// Panel is on the left
	  if(uiRect.left > window.innerWidth * .5) {
			this.el.classList.add(c.left);
			this.el.style.left = `-${uiRect.width + this.spacing}px`;

		// Panel is on the right
		}	else {
			this.el.classList.add(c.right);
			this.el.style.right = `-${uiRect.width + this.spacing}px`;
		}


	}

	create(): void {

		// This is the wrapper for the UI, has to be added here, is not ready on constructor
		this.uiWrapper = this.parent.el.closest(`.${CSS_UI.wrapper}`) as HTMLElement;

		// Get parent z-index
		const parentZIndex = getComputedStyle(this.uiWrapper).getPropertyValue('z-index');
		this.uiWrapper.style.zIndex = `${parseInt(parentZIndex) + 1}`;


		if (this.created) return;
		this.created = true;

		this.el = el('div', CSS_UI.panel.baseClass, this.uiWrapper);

		this.createPanelContent();

		// Append to for dropdowns, else append to wrapper and positioning is required
		this.positionPanel();

		// This needs to be provided by the parent each time as the dom changes
		const parentDomStyle = getComputedStyle(this.parent.el.closest('section') as HTMLElement);
		const bg0 = parentDomStyle.getPropertyValue('--section-bg-0');
		const bg1 = parentDomStyle.getPropertyValue('--section-bg-1');
		this.el.style.setProperty('--section-bg-0', bg0);
		this.el.style.setProperty('--section-bg-1', bg1);

		this.el.classList.add(CSS_UI.utility.loaded);

		// This little trick allows transitions to work
		setTimeout(() => this.el.classList.add(CSS_UI.utility.active), 10);

		this.addEventListeners();
	}

	destroy(): void {
		if (!this.created) return;
		this.uiWrapper.style.zIndex = ``;
		remove(this.el)
		this.created = false;
	}

	onChange(): void {}

	refresh(): void {}
}