import { el } from "@fils/utils";
import check from "../../../utils/check";
import dom, { BASE_CLASS } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { SelectItemOptions } from "../ItemOptions";

export class SelectItem extends ExtendedItem {
	options: SelectItemOptions;

	protected activeOption: HTMLElement;
	protected optionsList: HTMLElement;

	protected addEventListeners(): void {

		window.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;

			if(target === this.activeOption) return;
			if(target === this.inputPanel.dom) return;
			if(this.inputPanel.dom?.contains(target)) return;

			this.destroyPanel();
		});

		this.activeOption.addEventListener('click', (e) => {
			this.dom.classList.add(`${BASE_CLASS}-select-open`);
			this.inputPanel.create();
		});

	}

	onResize(e?: CustomEvent<any>): void {
		this.destroyPanel();
	}

	destroyPanel(): void {
		this.dom.classList.remove(`${BASE_CLASS}-select-open`);
		this.inputPanel.destroy();
	}

	protected createDom(): void {

		const svg = dom.getChevron();

		this.inputWrapper.innerHTML = `
			<div class="${BASE_CLASS}-select-input">
				<p></p>
				${svg}
			</div>
		`;

		this.activeOption = this.inputWrapper.querySelector(`.${BASE_CLASS}-select-input`);
	}

	setValue(_value: any): void {
		let value = _value;

		// If it's null set it to the first option
		if(check.isNull(value) || check.isUndefined(value)) {
			value = check.isArray(this.options.options) ? this.options.options[0] : this.options.options[Object.keys(this.options.options)[0]];
		}

		super.setValue(value);
	}

	afterCreate(): void {
		this.setValue(this.value);
	}

	refresh(): void {
		this.activeOption.querySelector('p').innerText = this.value;
		super.refresh();
	}
}