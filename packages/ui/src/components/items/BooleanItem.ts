import { ITEM_BOOLEAN } from "../../utils/dom";
import { Item } from "./Item";


export class BooleanItem extends Item {
	value: boolean;
	constructor(params, options) {
		super(params, options);

		this.value = params.object[params.key];
	}

	addEventListeners(): void {

		this.dom.addEventListener('click', () => {
			this.value = !this.value;
			this.refresh();
			this.__onChange();

			this.dom.classList.toggle('active');
		});

	}

	createDom(): void {

		const wrapper = this.dom.querySelector('div');
		const toggle = document.createElement('div');
		wrapper.appendChild(toggle);

	}
}