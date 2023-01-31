import { el } from "@fils/utils";
import check from "../../../utils/check";
import dom, { BASE_CLASS } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { NumberItemOptions } from "../ItemOptions";


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

	protected addEventListeners(): void {

		for(const item of this.items) {

			item.input.valueAsNumber = item.value;

			item.input.addEventListener('change', () => {
				item.value = item.input.valueAsNumber;
				this.refresh();
			});

			item.buttonIncrease.addEventListener('click', () => {
				item.value++;
				item.input.valueAsNumber = item.value;
				this.refresh();
			});

			item.buttonDecrease.addEventListener('click', () => {
				item.value--;
				item.input.valueAsNumber = item.value;
				this.refresh();
			});

		}

	}

	refresh(): void {

		if (check.isNumber(this.value)) {
			this.value = this.items[0].value;
		} else if (check.isArray(this.value)) {
			for (let i = 0; i < this.items.length; i++) {
				this.value[i] = this.items[i].value;
			}
		} else if (check.isObject(this.value)) {
			let i = 0;
			for (const key in this.value as Object) {
				this.value[key] = this.items[i].value;
				i++;
			}
		}
		console.log(this.value);

		super.refresh();
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

		this.createItems(this.object[this.key]);

		const svg = dom.getChevron();

		for(const item of this.items) {

			item.wrapper = el('div', `${BASE_CLASS}-number-input`);

			item.wrapper.innerHTML = `<input type="number" placeholder="${item.placeholder}"/>`;
			item.input = item.wrapper.querySelector('input');

			const btns = el('div', `${BASE_CLASS}-number-btns`);

			item.buttonIncrease = el('button', `${BASE_CLASS}-btn-increase`) as HTMLButtonElement;
			item.buttonIncrease.innerHTML = svg;

			item.buttonDecrease = el('button', `${BASE_CLASS}-btn-decrease`) as HTMLButtonElement;
			item.buttonDecrease.innerHTML = svg;

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

