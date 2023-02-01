import { el } from "@fils/utils";
import check from "../../../utils/check";
import { ExtendedItem } from "../ExtendedItem";
import { NumberItemOptions } from "../ItemOptions";
import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from "../../../partials/cssClasses";



type item = {
	value: number;
	placeholder: string;
	wrapper: HTMLElement;
	input: HTMLInputElement;
	buttonIncrease: HTMLButtonElement;
	buttonDecrease: HTMLButtonElement;
}
export class NumberItem extends ExtendedItem {
	protected options: NumberItemOptions;

	private items: item[];

	max: number;
	min: number;
	step: number;
	decimals: number;

	limitNumber = (value: number):number => {

		let tmp = value;
		if(this.max) tmp = Math.min(tmp, this.max);
		if(this.min) tmp = Math.max(tmp, this.min);

		// Round to decimals
		tmp = Math.round(tmp * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals);

		return tmp;
	}

	protected addEventListeners(): void {

		for(const item of this.items) {

			item.input.valueAsNumber = item.value;

			item.input.addEventListener('change', () => {
				item.value = item.input.valueAsNumber;
				item.value = this.limitNumber(item.value);
				item.input.valueAsNumber = item.value;
				this.setValue();
			});

			item.buttonIncrease.addEventListener('click', () => {
				item.value += this.step;
				item.value = this.limitNumber(item.value);
				item.input.valueAsNumber = item.value;
				this.setValue();
			});

			item.buttonDecrease.addEventListener('click', () => {
				item.value -= this.step;
				item.value = this.limitNumber(item.value);
				item.input.valueAsNumber = item.value;
				this.setValue();
			});

		}

	}

	setValue(_value?:any): void {

		let value;

		if(this.created){

			if (check.isNumber(this.value)) {
				value = this.items[0].value;
			} else if (check.isArray(this.value)) {
				value = [];
				for (let i = 0; i < this.items.length; i++) {
					value.push(this.items[i].value);
				}
			} else if (check.isObject(this.value)) {
				let i = 0;
				value = {};
				for (const key in this.value as Object) {
					value[key] = this.items[i].value;
					i++;
				}
			}

		} else {
			value = _value;
		}

		super.setValue(value);
	}

	protected createItem(value:number): item {
		const item = {
			value,
			placeholder: 'Value',
			wrapper: null,
			input: null,
			buttonIncrease: null,
			buttonDecrease: null
		}
		return item;
	}

	protected createItems(value: number | number[] | Object): void {

		this.items = [];

		if (check.isNumber(value)) {
			this.items.push(this.createItem(value as number));
		} else if (check.isArray(value)) {
			for (const item of value as number[]) {
				this.items.push(this.createItem(item));
			}
		} else if (check.isObject(value)) {
			for (const key in value as Object) {
				const item = this.createItem(value[key]);
				item.placeholder = key;
				this.items.push(item);
			}
		}

	}

	protected createDom(): void {

		this.max = this.options.max || undefined;
		this.min = this.options.min || undefined;
		this.step = this.options.step || 0.01;
		this.decimals = this.options.decimals || 2;

		this.createItems(this.object[this.key]);

		for(const item of this.items) {

			item.wrapper = el('div', `${CSS_UI.baseClass}-number-input`);

			item.wrapper.innerHTML = `<input type="number" placeholder="${item.placeholder}" />`;
			item.input = item.wrapper.querySelector('input');
			if(this.min) item.input.setAttribute('min', this.min.toString());
			if(this.max) item.input.setAttribute('max', this.max.toString());
			if(this.step) item.input.setAttribute('step', this.step.toString());

			const btns = el('div', `${CSS_UI.baseClass}-number-btns`);

			item.buttonIncrease = el('button', `${CSS_UI.baseClass}-btn-increase`) as HTMLButtonElement;
			item.buttonIncrease.innerHTML = uiDownarrowHlt;

			item.buttonDecrease = el('button', `${CSS_UI.baseClass}-btn-decrease`) as HTMLButtonElement;
			item.buttonDecrease.innerHTML = uiDownarrowHlt;

			btns.appendChild(item.buttonIncrease);
			btns.appendChild(item.buttonDecrease);
			item.wrapper.appendChild(btns);

			if(this.items.length > 2) {
				item.buttonIncrease.style.display = 'none';
				item.buttonDecrease.style.display = 'none';
			}

			this.inputWrapper.appendChild(item.wrapper);
		}
	}


}
