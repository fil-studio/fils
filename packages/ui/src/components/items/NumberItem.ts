import { Item } from "../Item";


export class NumberItem extends Item {
	input:HTMLInputElement;

	addEventListeners(): void {

		this.input.addEventListener('change', () => {
			console.log('NumberItem - onChange');
			this.value = this.input.value;
			this.refresh();
			this.__onChange();
		});

	}

	createDom(): void {

		const wrapper = this.dom.querySelector('div');
		this.input = document.createElement('input');
		this.input.type = 'number';

		this.input.value = this.value as string;

		wrapper.appendChild(this.input);

	}
}