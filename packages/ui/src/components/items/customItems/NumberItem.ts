import { el } from "@fils/utils";
import check from "../../../utils/check";
import { NumberItemParameters } from "../ItemParameters";
import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from "../../../partials/cssClasses";
import { Item } from "../Item";

type inputElement = {
	value: number;
	placeholder: string;
	wrapper: HTMLElement;
	input: HTMLInputElement;
	buttonIncrease: HTMLButtonElement;
	buttonDecrease: HTMLButtonElement;
}

CSS_UI.items.push({
	type: 'number',
	input: '_ui-number-input',
	buttons: '_ui-number-buttons',
	btnIncrease: '_ui-number-btn-increase',
	btnDecrease: '_ui-number-btn-decrease',
});
const c = CSS_UI.getItemClasses('number');

export class NumberItem extends Item {
	params: NumberItemParameters;

	private inputElements: inputElement[];

	max: number;
	min: number;
	step: number;
	decimals: number;

	originalDataType: string;

	limitNumber = (value: number):number => {

		let tmp = value;
		if(this.max) tmp = Math.min(tmp, this.max);
		if(this.min) tmp = Math.max(tmp, this.min);

		// Round to decimals
		tmp = Math.round(tmp * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals);

		return tmp;
	}

	protected addEventListeners(): void {

		for (const inputElement of this.inputElements) {

			inputElement.input.valueAsNumber = inputElement.value;

			inputElement.input.addEventListener('change', () => {
				inputElement.value = inputElement.input.valueAsNumber;
				inputElement.value = this.limitNumber(inputElement.value);
				inputElement.input.valueAsNumber = inputElement.value;
				this.setValue();
			});

			inputElement.buttonIncrease.addEventListener('click', () => {
				inputElement.value += this.step;
				inputElement.value = this.limitNumber(inputElement.value);
				inputElement.input.valueAsNumber = inputElement.value;
				this.setValue();
			});

			inputElement.buttonDecrease.addEventListener('click', () => {
				inputElement.value -= this.step;
				inputElement.value = this.limitNumber(inputElement.value);
				inputElement.input.valueAsNumber = inputElement.value;
				this.setValue();
			});

		}

	}


	setValue(_value?:any): void {

		// Only first setValue will have a value
		if(_value) this.originalDataType = check.getType(_value);

		// Update this value to the current value
		let inputsValue = [];
		for(const inputElement of this.inputElements) inputsValue.push(inputElement.value);
		this.value = inputsValue;

		// Translate from array to the original data type
		let valueForOutput = null;
		if(this.originalDataType === 'number') valueForOutput = inputsValue[0];
		else if(this.originalDataType === 'array') valueForOutput = inputsValue;
		else if(this.originalDataType === 'object') {
			valueForOutput = {};
			let i = 0;
			for (const [key, value] of Object.entries(this.object[this.key])) {
				valueForOutput[key] = inputsValue[i];
			}
		}

		this.object[this.key] = valueForOutput;
		this.refreshDom();
	}

	protected createInput(value: number): inputElement {
		const inputElement = {
			value,
			placeholder: 'Value',
			wrapper: null,
			input: null,
			buttonIncrease: null,
			buttonDecrease: null
		}
		return inputElement;
	}

	protected createInputs(value: number | number[] | Object): void {

		this.inputElements = [];

		// If value is a number, create one input
		if (check.isNumber(value)) this.inputElements.push(this.createInput(value as number));

		// If value is an array, create one input for each item
		else if (check.isArray(value)) {
			for (const item of value as number[]) {
				this.inputElements.push(this.createInput(item));
			}
		}

		// If value is an object, create one input for each key
		else if (check.isObject(value)) {
			for (const key in value as Object) {
				const item = this.createInput(value[key]);
				item.placeholder = key;
				this.inputElements.push(item);
			}
		}

	}

	protected createInputContent(inputElement: inputElement): void {

		// Create wrapper
		inputElement.wrapper = el('div', c.input);

		// Create input
		inputElement.input = el('input') as HTMLInputElement;;
		inputElement.input.type = 'number';
		inputElement.input.placeholder = inputElement.placeholder;
		if(this.min) inputElement.input.min = this.min.toString();
		if(this.max) inputElement.input.max = this.max.toString();
		if(this.step) inputElement.input.step = this.step.toString();

		// Append input to wrapper
		inputElement.wrapper.appendChild(inputElement.input);

		// Create buttons
		const btns = el('div', c.buttons);

		inputElement.buttonIncrease = el('button', c.btnIncrease) as HTMLButtonElement;
		inputElement.buttonIncrease.innerHTML = uiDownarrowHlt;

		inputElement.buttonDecrease = el('button', c.btnDecrease) as HTMLButtonElement;
		inputElement.buttonDecrease.innerHTML = uiDownarrowHlt;

		btns.appendChild(inputElement.buttonIncrease);
		btns.appendChild(inputElement.buttonDecrease);
		inputElement.wrapper.appendChild(btns);

		if (this.inputElements.length > 2) {
			inputElement.buttonIncrease.classList.add(`.${CSS_UI.utility.hidden}`);
			inputElement.buttonDecrease.classList.add(`.${CSS_UI.utility.hidden}`);
		}

		this.dom.content.appendChild(inputElement.wrapper);
	}

	protected createContent(): void {

		this.max = this.params.max || undefined;
		this.min = this.params.min || undefined;
		this.step = this.params.step || 0.01;
		this.decimals = this.params.decimals || 2;

		this.createInputs(this.object[this.key]);

		for(const inputElement of this.inputElements) {
			this.createInputContent(inputElement);
		}
	}


}

