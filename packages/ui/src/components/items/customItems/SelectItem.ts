import check from "../../../utils/check";
import dom, { BASE_CLASS } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { SelectItemOptions } from "../ItemOptions";

export class SelectItem extends ExtendedItem {
	protected options: SelectItemOptions;

	protected activeOption: HTMLElement;
	protected optionsList: HTMLElement;

	protected addEventListeners(): void {

		window.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			if(target === this.activeOption) return;
			if(target.closest(`.${BASE_CLASS}-select-option`)) return;

			this.dom.classList.remove(`${BASE_CLASS}-select-open`);
		});

		this.activeOption.addEventListener('click', (e) => {
			this.dom.classList.add(`${BASE_CLASS}-select-open`);
		});

		this.optionsList.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;
			const option = target.closest('div');
			console.log('option:', option);
		});



	}

	protected createDom(): void {

		const svg = dom.getChevron();

		this.inputWrapper.innerHTML = `
			<div class="${BASE_CLASS}-select-input">
				<p></p>
				${svg}
			</div>
			<div class="${BASE_CLASS}-select-options">
			</div>
		`;

		this.activeOption = this.inputWrapper.querySelector(`.${BASE_CLASS}-select-input`);
		this.optionsList = this.inputWrapper.querySelector(`.${BASE_CLASS}-select-options`);

	}

	setValue(_value: any): void {
		let value = _value;

		// If it's null set it to the first option
		if(check.isNull(value) || check.isUndefined(value)) {
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