import { BASE_CLASS } from "../../utils/dom";
import { Item } from "../Item";

export class InputController  {
	parent: Item;

	dom: HTMLElement;

	created: boolean = false;

	constructor(parent: Item) {
		this.parent = parent;
		console.log('InputController - init');

		this.addEventListeners();
	}

	addEventListeners(): void {
		console.log('InputController - addEventListeners');

		this.parent.dom.addEventListener('click', () => {
			this.create();
		});

		document.addEventListener('click', (e) => {
			if(!this.created) return;
			const target = e.target;
			if (this.parent.dom.contains(target as Node)) return;
			if (this.dom.contains(target as Node)) return;

			this.destroy();
		});
	}

	create(): void {

		if (this.created) return;
		this.created = true;

		this.dom = document.createElement('div');
		this.dom.classList.add(`${BASE_CLASS}-input-controller`);

		this.parent.dom.appendChild(this.dom);
	}

	destroy(): void {
		if (!this.created) return;
		this.created = false;
		this.dom.remove();
	}

	onChange(): void {
	}
}