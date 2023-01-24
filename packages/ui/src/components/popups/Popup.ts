import { BASE_CLASS } from "../../utils/dom";
import { Item } from "../Item";

export interface _Popup {
	create(): void;
	destroy(): void;
	onChange(): void;
}

export class Popup implements _Popup {
	parent: Item;

	dom: HTMLElement;

	created: boolean = false;

	constructor(parent: Item) {
		this.parent = parent;
		console.log('Popup - init');

		this.addEventListeners();
	}

	addEventListeners(): void {
		this.parent.dom.addEventListener('click', () => {
			this.create();
		});

		document.addEventListener('click', (e) => {
			const target = e.target;
			if (this.parent.dom.contains(target as Node)) return;
			if (this.dom.contains(target as Node)) return;

			this.destroy();
		});
	}

	create(): void {

		if (this.created) return;
		this.created = true;

		// const position = this.parent.dom.getBoundingClientRect();
		this.dom = document.createElement('div');
		this.dom.classList.add(`${BASE_CLASS}-popup`);

		this.parent.dom.appendChild(this.dom);

		// console.log(position);


	}
	destroy(): void {
		if (!this.created) return;
		this.created = false;
		this.dom.remove();
	}
	onChange(): void {
	}
}