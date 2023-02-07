import { Panel } from "./Panel";

export class FloatingPanel extends Panel {
	position: 'right' | 'left';

	positionPanel(): void {
		if (!this.created) return;

		const r = this.dom.parent.el.getBoundingClientRect();

		let postition = r.left + r.width * .5 > window.innerWidth * .5 ? 'right' : 'left';

		this.dom.el.classList.add(`_ui-panel-${postition}`);

		this.dom.el.style.top = `${r.top}px`;
		this.dom.el.style.left = `${r.left}px`;
		this.dom.el.style.width = `${r.width}px`;
		this.dom.el.style.height = `${r.height}px`;
	}

}