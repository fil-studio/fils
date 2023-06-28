import { el, isNull, isUndefined, remove } from "@fils/utils";
import { CSS_UI, UIEventListener } from "../../../main";
import { Item } from "../Item";

export class StringItem extends Item {
	input: HTMLInputElement = el('input') as HTMLInputElement;

	addEventListeners(): void {
		const change:UIEventListener = {
			target: this.input,
			type: 'change',
			callback: () => {
				this.setValue(this.input.value);
			}
		}
		this.addEventListener(change);
	}

	protected createContent(): void {
		this.input = el('input') as HTMLInputElement;
		this.input.setAttribute('tabindex', '1');
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