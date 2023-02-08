import { Item } from "../Item";

export class StringItem extends Item {

	protected addEventListeners(): void {
		const input = this.dom.el.querySelector('input');
		input.value = this.value;
		input.addEventListener('change', () => {
			this.setValue(input.value);
		});
	}

	protected createContent(): void {
		this.dom.content.innerHTML = `<input type="text" placeholder="String" />`;
	}

}