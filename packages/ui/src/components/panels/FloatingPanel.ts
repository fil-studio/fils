import { CSS_UI } from "../../partials/cssClasses";
import { Panel } from "./Panel";

const MARGIN = 5;

export class FloatingPanel extends Panel {
	position: 'right' | 'left';

	positionPanel(): void {
		if (!this.created) return;

		this.dom.el.classList.add(CSS_UI.panel.floating);

		const uiR = this.dom.parent.el.closest(`.${CSS_UI.wrapper}`).getBoundingClientRect();
		const r = this.dom.parent.el.getBoundingClientRect();

		// For transition
		let position = r.left + (r.width * .5) < window.innerWidth * .5 ? 'right' : 'left';
		this.dom.el.classList.add(`_ui-panel-${position}`);

		const offset = position === 'right' ? uiR.width + MARGIN : -uiR.width - MARGIN;

		this.dom.el.style.top = `${r.top + (r.height * .5)}px`;
		this.dom.el.style.left = `${r.left + (r.width * .5) + offset}px`;

		const checkRect = this.dom.el.getBoundingClientRect();
		console.log(checkRect);



	}

}