import { el } from "@fils/utils";
import { CSS_UI } from "../../partials/cssClasses";
import { Panel } from "./Panel";

export class DropdownPanel extends Panel {


	positionPanel(): void {
		if (!this.created) return;

		this.dom.el.classList.add(CSS_UI.panel.dropdown);

		const r = this.dom.parent.content.getBoundingClientRect();
		this.dom.el.style.top = `${r.top + r.height}px`;
		this.dom.el.style.width = `${r.width}px`;
		this.dom.el.style.left = `${r.left}px`;
	}

}