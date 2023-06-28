import { el, getType, isArray, isNumber, isObject } from "@fils/utils";
import { NumberItemParameters } from "../ItemParameters";
import { uiDownarrowHlt } from '@fils/ui-icons';
import { CSS_UI } from "../../../partials/cssClasses";
import { Item } from "../Item";
import { UIEventListener } from "../../../main";


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

	isIncreasing:boolean = false;
	isDecreasing:boolean = false;

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

	addEventListeners(): void {

		for (const inputElement of this.inputElements) {

			const change:UIEventListener = {
				target: inputElement.input,
				type: 'change',
				callback: (e) => {
					let val = inputElement.input.valueAsNumber;
					val = isNaN(val) ? 0 : val;
					inputElement.value = val;
					this.setValue();
				}
			}
			this.addEventListener(change);

			const clickIncrease:UIEventListener = {
				target: inputElement.buttonIncrease,
				type: 'click',
				callback: (e) => {
					inputElement.value += this.step;
					this.setValue();
				}
			}
			this.addEventListener(clickIncrease);

			const clickDecrease:UIEventListener = {
				target: inputElement.buttonDecrease,
				type: 'click',
				callback: (e) => {
					inputElement.value -= this.step;
					this.setValue();
				}
			}
			this.addEventListener(clickDecrease);

		}

	}

	setValue(_value?: string | Array<number> | Object): void {


		// If value is not set, update this value to the current value
		if(_value) {
			this.originalDataType = getType(_value) as string;
			super.setValue(_value);
			return;
		}


		// Update this value to the current value
		const valueForOutput = this.convertArrayToOriginal();
		super.setValue(valueForOutput);
	}

	refreshDom(): void {

		const values = this.convertOriginalToArray();

		for(let i = 0; i < this.inputElements.length; i++) {
			this.inputElements[i].value = values[i];
			this.inputElements[i].input.valueAsNumber = this.limitNumber(values[i]);
		}

	}

	protected createInputs(value: number | number[] | Object): void {

		this.inputElements = [];

		// If value is a number, create one input
		if (isNumber(value)) this.inputElements.push(this.createInput(value as number));

		// If value is an array, create one input for each item
		else if (isArray(value)) {
			for (const item of value as number[]) {
				this.inputElements.push(this.createInput(item));
			}
		}

		// If value is an object, create one input for each key
		else if (isObject(value)) {

			for (const key in value as Object) {

				if(!isNumber(value[key])) continue;

				const item = this.createInput(value[key]);
				item.placeholder = key;
				this.inputElements.push(item);
			}


		}

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
		this.createInputContent(inputElement);
		return inputElement;
	}

	protected createInputContent(inputElement:any): void {

		// Create wrapper
		inputElement.wrapper = el('div', c.input);

		// Create input
		inputElement.input = el('input') as HTMLInputElement;;
		inputElement.input.type = 'number';
		inputElement.input.setAttribute('tabindex', '1');
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
		inputElement.buttonIncrease.setAttribute('tabindex', '-1');
		inputElement.buttonIncrease.innerHTML = uiDownarrowHlt;

		inputElement.buttonDecrease = el('button', c.btnDecrease) as HTMLButtonElement;
		inputElement.buttonIncrease.setAttribute('tabindex', '-1');
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
	}

	convertOriginalToArray(): any {

		switch(this.originalDataType) {
			case 'number':
				return [this.object[this.key]];
			case 'array':
				return this.object[this.key];
			case 'object':
				const values = [];
				for (const key in this.object[this.key]) {
					if(!isNumber(this.object[this.key][key])) continue;
					values.push(this.object[this.key][key]);
				}
				return values;
			}
	}

	convertArrayToOriginal(): any {

		let inputsValue = [];
		for (const inputElement of this.inputElements) inputsValue.push(inputElement.value);

		// Translate from array to the original data type
		let valueForOutput = null;
		if (this.originalDataType === 'number') valueForOutput = inputsValue[0];
		else if (this.originalDataType === 'array') valueForOutput = inputsValue;
		else if (this.originalDataType === 'object') {
			valueForOutput = {} as Object;

			let i = 0;
			for (const key in this.object[this.key]) {
				if(!isNumber(this.object[this.key][key])) continue;
				valueForOutput[key] = inputsValue[i];
				i++;
			}
		}

		return valueForOutput;
	}

}

