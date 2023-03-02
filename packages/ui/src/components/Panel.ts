import { el, isNull } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { Button } from "./Button";
import { Item } from "./items/Item";

export interface ItemWithPanel extends Item {
	panel: Panel;
	close(): void;
	open(): void;
}
export interface ButtonWithPanel extends Button {
	panel: Panel;
	close(): void;
	open(): void;
}
export class ItemPanel extends Item implements ItemWithPanel {
	panel: Panel;
	close() {}
	open() {}
}
export class ButtonPanel extends Button implements ButtonWithPanel {
	panel: Panel;
	close() {}
	open() {}
}
export class Panel {
	el!: HTMLElement;
	dropdownFrom!: HTMLElement;

	parent: ItemPanel | ButtonPanel;
	created: boolean = false;

	uiWrapper:HTMLElement;
	spacing:number = 0;

	constructor() {
		this.uiWrapper = document.querySelector(`.${CSS_UI.wrapper}`) as HTMLElement;
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

	createPanelContent(){
		// Override this
	}

	positionPanel(): void {

		this.uiWrapper.appendChild(this.el);
		const panelRect = this.el.getBoundingClientRect();
		const uiRect = this.uiWrapper.getBoundingClientRect();

		// Panel is droppdown
		if(!isNull(this.dropdownFrom)){

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
			this.el.style.left = `-${uiRect.width + this.spacing}px`;

		// Panel is on the right
		}	else {
			this.el.style.right = `-${uiRect.width + this.spacing}px`;
		}


	}

	create(parent: ItemPanel | ButtonPanel, dropdownFrom?: HTMLElement): void {

		if (this.created) return;
		this.created = true;

		this.parent = parent;

		this.el = el('div', CSS_UI.panel.baseClass);

		this.createPanelContent();

		// Append to for dropdowns, else append to wrapper and positioning is required
		this.dropdownFrom = dropdownFrom ? dropdownFrom : null;
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
		this.el.remove();
		this.created = false;
	}

	onChange(): void {
	}
}