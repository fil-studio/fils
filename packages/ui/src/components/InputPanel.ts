import { BASE_CLASS, WRAPPER_CLASS } from "../utils/dom";
import { Item } from "./Item";

export class InputPanel  {
	parent: Item;
	uiDom: HTMLElement;

	dom: HTMLElement;

	created: boolean = false;

	constructor(parent: Item) {
		this.parent = parent;
		this.addEventListeners();
	}

	addEventListeners(): void {
		console.log('InputPanel - addEventListeners');

		window.addEventListener('resize', () => {
			this.positionPanel();
		});

		this.parent.inputWrapper.addEventListener('click', () => {
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

	positionPanel(): void {
		if (!this.created) return;
		const r = this.parent.inputWrapper.getBoundingClientRect();
		this.dom.style.top = `${r.top + r.height}px`;
		this.dom.style.width = `${r.width}px`;
		this.dom.style.left = `${r.left}px`;
		console.log('resize');

	}


	create(): void {

		if (this.created) return;
		this.created = true;

		this.uiDom = this.parent.dom.closest(`.${WRAPPER_CLASS}`);

		this.dom = document.createElement('div');
		this.dom.classList.add(`${BASE_CLASS}-input-panel`);

		this.positionPanel();

		console.log(this.uiDom);

		this.uiDom.appendChild(this.dom);


	}

	destroy(): void {
		if (!this.created) return;
		this.created = false;
		this.dom.remove();
		this.dom = null;
	}

	onChange(): void {
	}
}