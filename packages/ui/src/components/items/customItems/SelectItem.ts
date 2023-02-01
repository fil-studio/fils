import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from '../../../partials/cssClasses';
import check from "../../../utils/check";
import { ExtendedItem } from "../ExtendedItem";
import { SelectItemOptions } from "../ItemOptions";


export class SelectItem extends ExtendedItem {
	options: SelectItemOptions;

	protected activeOption: HTMLElement;
	protected optionsList: HTMLElement;

	protected addEventListeners(): void {

		window.addEventListener('click', (e) => {

			const target = e.target as HTMLElement;
			if(this.inputPanel.dom?.contains(target)) return;

			if(!this.inputPanel.created) return;

			this.destroyPanel();
		});

		this.activeOption.addEventListener('click', (e) => {
			if(this.inputPanel.created) return;

			e.stopPropagation();

			this.dom.classList.add(`${CSS_UI.baseClass}-select-open`);
			this.inputPanel.create();
		});

	}

	onResize(e?: CustomEvent<any>): void {
		this.destroyPanel();
	}

	destroyPanel(): void {
		this.dom.classList.remove(`${CSS_UI.baseClass}-select-open`);
		this.inputPanel.destroy();
	}

	protected createDom(): void {

		this.inputWrapper.innerHTML = `
			<div class="${CSS_UI.baseClass}-select-input">
				<p></p>
				${uiDownarrowHlt}
			</div>
		`;

		this.activeOption = this.inputWrapper.querySelector(`.${CSS_UI.baseClass}-select-input`);
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