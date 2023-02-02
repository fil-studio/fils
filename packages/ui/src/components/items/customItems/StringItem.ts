import { ExtendedItem } from "../ExtendedItem";

export class StringItem extends ExtendedItem {

	protected addEventListeners(): void {

		const input = this.dom.el.querySelector('input');
		input.value = this.value;
		input.addEventListener('change', () => {
			this.refresh();
		});

	}

	protected createDom(): void {
		this.dom.content.innerHTML = `<input type="text" placeholder="String" />`;
	}

	refresh(): void {
		const input = this.dom.el.querySelector('input');
		this.value = input.value;
		super.refresh();
	}
}