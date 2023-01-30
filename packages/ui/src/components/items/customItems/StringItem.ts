import { ExtendedItem } from "../ExtendedItem";

export class StringItem extends ExtendedItem {

	protected addEventListeners(): void {

		const input = this.dom.querySelector('input');
		input.value = this.value;
		input.addEventListener('change', () => {
			this.refresh();
		});

	}

	protected createDom(): void {
		this.inputWrapper.innerHTML = `<input type="text" placeholder="String" />`;
	}

	refresh(): void {
		const input = this.dom.querySelector('input');
		this.value = input.value;
		super.refresh();
	}
}