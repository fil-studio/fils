import { ExtendedItem } from "../ExtendedItem";

export class ColorItem extends ExtendedItem {

	protected addEventListeners(): void {

		const input = this.dom.querySelector('input');
		input.value = this.value;
		input.addEventListener('change', () => {
			this.refresh();
		});

	}

	protected createDom(): void {
		this.inputWrapper.innerHTML = `<input type="string" />`;
	}

	refresh(): void {
		const input = this.dom.querySelector('input');
		this.value = input.value;
		super.refresh();
	}
}

