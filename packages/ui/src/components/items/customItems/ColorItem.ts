import { el } from "@fils/utils";
import check from "../../../utils/check";
import { Item } from "../Item";

export class ColorItem extends Item {
	input: HTMLInputElement;

	protected addEventListeners(): void {

		this.input.addEventListener('change', () => {
			this.setValue(this.input.value);
		});

	}

	protected createContent(): void {
		this.input = el('input') as HTMLInputElement;
		this.input.placeholder = 'Color';
		this.input.type = 'color';
		this.dom.content.appendChild(this.input);
	}

	setValue(_value: any): void {
		let value = _value;

		if (check.isNull(value) || check.isUndefined(value)) {
			value = 'Color';
		}

		super.setValue(value);
	}
}

