import { ExtendedItem } from "../ExtendedItem";

export class ColorItem extends ExtendedItem {

	protected addEventListeners(): void {

		const input = this.dom.el.querySelector('input');
		input.value = this.value;
		input.addEventListener('change', () => {
			this.refresh();
		});

	}

	protected createDom(): void {
		this.dom.content.innerHTML = `<input type="string" />`;
	}

	refresh(): void {
		const input = this.dom.el.querySelector('input');
		this.value = input.value;
		super.refresh();
	}
}

