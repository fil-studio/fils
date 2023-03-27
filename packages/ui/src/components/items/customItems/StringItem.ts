import { el, isNull, isUndefined, remove } from "@fils/utils";
import { CSS_UI } from "../../../main";
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
		this.input.classList.add(CSS_UI.item);
		this.content.appendChild(this.input);
	}

	setValue(value: string): void {
		if (isNull(value) || isUndefined(value)) {
			value = 'String';
		}
		super.setValue(value);
	}

	refreshDom(): void {
		this.input.value = this.value;
		super.refreshDom();
	}

	destroy(): void {
		remove(this.input);
		super.destroy();
	}

}