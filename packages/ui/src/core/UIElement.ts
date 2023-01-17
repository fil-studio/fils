import { Group } from "../components/Group";

export class UIElement {
	dom: HTMLElement;
	parent: Group;

	depth: number = 0;

	constructor(parent: Group ) {
		this.parent = parent;
		this.dom = document.createElement('div');
		if(parent) {
			parent.dom.appendChild(this.dom);
			this.depth = parent.depth + 1;
		}

		// this.dom.style.setProperty('--depth', this.depth.toString());
	}
}