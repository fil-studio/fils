import { Item } from "./Item";

export class StringItem extends Item {
	input:HTMLInputElement;

	addEventListeners(): void {

		this.input.addEventListener('change', () => {
			console.log('StringItem - onChange');
			this.value = this.input.value;
			this.refresh();
			this.__onChange();
		});

	}

	createDom(): void {

		const wrapper = document.createElement('div');
		this.input = document.createElement('input');
		this.input.type = 'text';

		this.input.value = this.value as string;

		wrapper.appendChild(this.input);
		this.dom.appendChild(wrapper);

	}
}