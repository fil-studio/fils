import { ITEM_BOOLEAN } from "../../core/globals";
import { Item } from "./Item";


export class BooleanItem extends Item {
	value: boolean;
	constructor(params, options) {
		super(params, options);

		this.value = params.object[params.key];

		this.addEventListeners();
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
		super.createDom();

		this.dom.classList.add(ITEM_BOOLEAN);

		const wrapper = document.createElement('div');
		const toggle = document.createElement('div');
		wrapper.appendChild(toggle);
		this.dom.appendChild(wrapper);

	}
}