import { Item } from "../Item";

export class ColorItem extends Item {

	protected addEventListeners(): void {

		const input = this.dom.el.querySelector('input');
		input.addEventListener('change', () => {
			this.setValue(input.value);
		});

	}

	protected createContent(): void {
		this.dom.content.innerHTML = `<input type="string" />`;
	}
}

