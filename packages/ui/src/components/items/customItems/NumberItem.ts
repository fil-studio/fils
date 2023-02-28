import { el } from "@fils/utils";
import check from "../../../utils/check";
import { NumberItemParameters } from "../ItemParameters";
import { uiDownarrowHlt } from '@fils/ui-icons';
import { CSS_UI } from "../../../partials/cssClasses";
import { Item } from "../Item";


const c = {
	type: 'number',
	input: '_ui-number-input',
	buttons: '_ui-number-buttons',
	btnIncrease: '_ui-number-btn-increase',
	btnDecrease: '_ui-number-btn-decrease',
};
export class NumberItem extends Item {
	params!: NumberItemParameters;

	private inputElements:Array<any> = [];

	max: number | null = null;
	min: number | null = null;
	step: number = 0.01

	originalDataType: string = 'number';

	getDecimals(): number {
		const decimals = this.step.toString().split('.')[1];
		return decimals ? decimals.length : 0;
	}

	limitNumber = (value: number):number => {

		let tmp = value;
		if(this.max) tmp = Math.min(tmp, this.max);
		if(this.min) tmp = Math.max(tmp, this.min);

		// Round to decimals
		const decimals = this.getDecimals();
		tmp = parseFloat(tmp.toFixed(decimals));

		return tmp;
	}

	protected addEventListeners(): void {

		for (const inputElement of this.inputElements) {

			inputElement.input.valueAsNumber = this.limitNumber(inputElement.value);

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

	setValue(_value?: string | Array<number> | Object): void {

		// Only first setValue will have a value
		if(_value) this.originalDataType = check.getType(_value) as string;

		// Update this value to the current value
		let inputsValue = [];
		for(const inputElement of this.inputElements) inputsValue.push(this.limitNumber(inputElement.value));

		// Translate from array to the original data type
		let valueForOutput = null;
		if(this.originalDataType === 'number') valueForOutput = inputsValue[0];
		else if(this.originalDataType === 'array') valueForOutput = inputsValue;
		else if(this.originalDataType === 'object') {
			valueForOutput = {} as Object;
			let i = 0;
			for (const key in this.object[this.key]) {
				valueForOutput[key] = inputsValue[i];
			}
		}

		super.setValue(valueForOutput);
	}

	protected createInput(value: number) {
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

	protected createInputContent(inputElement:any): void {

		// Create wrapper
		inputElement.wrapper = el('div', c.input);

		// Create input
		inputElement.input = el('input') as HTMLInputElement;;
		inputElement.input.type = 'number';
		inputElement.input.placeholder = inputElement.placeholder;
		inputElement.input.classList.add(CSS_UI.item);
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

		this.content.appendChild(inputElement.wrapper);
	}

	protected createContent(): void {

		this.max = this.params.max ? this.params.max : null;
		this.min = this.params.min ? this.params.min : null;
		this.step = this.params.step ? this.params.step : this.step;

		this.createInputs(this.object[this.key]);

		for(const inputElement of this.inputElements) {
			this.createInputContent(inputElement);
		}
	}


}

