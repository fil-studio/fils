import { el } from "@fils/utils";
import check from "../../../utils/check";
import { Item } from "../Item";

export class StringItem extends Item {
	input: HTMLInputElement = el('input') as HTMLInputElement;

	protected addEventListeners(): void {
		this.input.addEventListener('change', () => {
			this.setValue(this.input.value);
		});
	}

	protected createContent(): void {
		this.input = el('input') as HTMLInputElement;
		this.input.placeholder = 'String';
		this.input.type = 'text';
		this.content.appendChild(this.input);
	}

	setValue(_value: any): void {
		let value = _value;

		if (check.isNull(value) || check.isUndefined(value)) {
			value = 'String';
		}
		super.setValue(value);
	}

	refreshDom(): void {
		this.input.value = this.value;
		super.refreshDom();
	}

}