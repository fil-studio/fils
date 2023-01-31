import { el } from "@fils/utils";
import dom, { BASE_CLASS } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";

export class NumberItem extends ExtendedItem {
	protected buttonIncrease: HTMLButtonElement;
	protected buttonDecrease: HTMLButtonElement;

	protected addEventListeners(): void {

		const input = this.dom.querySelector('input');
		input.value = this.value;
		input.addEventListener('change', () => {
			this.value = input.valueAsNumber;
			this.refresh();
		});

		this.buttonIncrease.addEventListener('click', () => {
			this.value++;
			input.valueAsNumber = this.value;
			this.refresh();
		});

		this.buttonDecrease.addEventListener('click', () => {
			this.value--;
			input.valueAsNumber = this.value;
			this.refresh();
		});

	}

	protected createDom(): void {
		this.inputWrapper.innerHTML = `<input type="number" placeholder="Value"/>`;
		const svg = dom.getChevron();

		const btns = el('div', `${BASE_CLASS}-btns`);

		this.buttonIncrease = el('button', `${BASE_CLASS}-btn-increase`) as HTMLButtonElement;
		this.buttonIncrease.innerHTML = svg;

		this.buttonDecrease = el('button', `${BASE_CLASS}-btn-decrease`) as HTMLButtonElement;
		this.buttonDecrease.innerHTML = svg;

		btns.appendChild(this.buttonIncrease);
		btns.appendChild(this.buttonDecrease);

		this.inputWrapper.appendChild(btns);
	}

}

