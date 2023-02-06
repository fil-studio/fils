import { Panel } from "./Panel";

export class FloatingPanel extends Panel {
	position: 'right' | 'left';

	positionPanel(): void {
		if (!this.created) return;

		const r = this.dom.parent.el.getBoundingClientRect();
		this.dom.el.style.top = `${r.top}px`;
		this.dom.el.style.left = `${r.left}px`;
		this.dom.el.style.width = `${r.width}px`;
		this.dom.el.style.height = `${r.height}px`;
	}

}