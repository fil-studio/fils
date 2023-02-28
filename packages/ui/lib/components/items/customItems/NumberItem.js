import { el } from "@fils/utils";
import check from "../../../utils/check";
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
    constructor() {
        super(...arguments);
        this.inputElements = [];
        this.max = null;
        this.min = null;
        this.step = 0.01;
        this.originalDataType = 'number';
        this.limitNumber = (value) => {
            let tmp = value;
            if (this.max)
                tmp = Math.min(tmp, this.max);
            if (this.min)
                tmp = Math.max(tmp, this.min);
            // Round to decimals
            const decimals = this.getDecimals();
            tmp = parseFloat(tmp.toFixed(decimals));
            return tmp;
        };
    }
    getDecimals() {
        const decimals = this.step.toString().split('.')[1];
        return decimals ? decimals.length : 0;
    }
    addEventListeners() {
        for (const inputElement of this.inputElements) {
            inputElement.input.addEventListener('change', () => {
                inputElement.value = inputElement.input.valueAsNumber;
                this.setValue();
            });
            inputElement.buttonIncrease.addEventListener('click', () => {
                inputElement.value += this.step;
                this.setValue();
            });
            inputElement.buttonDecrease.addEventListener('click', () => {
                inputElement.value -= this.step;
                this.setValue();
            });
        }
    }
    setValue(_value) {
        // If value is not set, update this value to the current value
        if (_value) {
            this.originalDataType = check.getType(_value);
            super.setValue(_value);
            return;
        }
        // Update this value to the current value
        const valueForOutput = this.convertArrayToOriginal();
        super.setValue(valueForOutput);
    }
    refreshDom() {
        const values = this.convertOriginalToArray();
        for (let i = 0; i < this.inputElements.length; i++) {
            this.inputElements[i].value = values[i];
            this.inputElements[i].input.valueAsNumber = this.limitNumber(values[i]);
        }
    }
    createInputs(value) {
        this.inputElements = [];
        // If value is a number, create one input
        if (check.isNumber(value))
            this.inputElements.push(this.createInput(value));
        // If value is an array, create one input for each item
        else if (check.isArray(value)) {
            for (const item of value) {
                this.inputElements.push(this.createInput(item));
            }
        }
        // If value is an object, create one input for each key
        else if (check.isObject(value)) {
            for (const key in value) {
                const item = this.createInput(value[key]);
                item.placeholder = key;
                this.inputElements.push(item);
            }
        }
    }
    createInput(value) {
        const inputElement = {
            value,
            placeholder: 'Value',
            wrapper: null,
            input: null,
            buttonIncrease: null,
            buttonDecrease: null
        };
        this.createInputContent(inputElement);
        return inputElement;
    }
    createInputContent(inputElement) {
        // Create wrapper
        inputElement.wrapper = el('div', c.input);
        // Create input
        inputElement.input = el('input');
        ;
        inputElement.input.type = 'number';
        inputElement.input.placeholder = inputElement.placeholder;
        inputElement.input.classList.add(CSS_UI.item);
        if (this.min)
            inputElement.input.min = this.min.toString();
        if (this.max)
            inputElement.input.max = this.max.toString();
        if (this.step)
            inputElement.input.step = this.step.toString();
        // Append input to wrapper
        inputElement.wrapper.appendChild(inputElement.input);
        // Create buttons
        const btns = el('div', c.buttons);
        inputElement.buttonIncrease = el('button', c.btnIncrease);
        inputElement.buttonIncrease.innerHTML = uiDownarrowHlt;
        inputElement.buttonDecrease = el('button', c.btnDecrease);
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
    createContent() {
        this.max = this.params.max ? this.params.max : null;
        this.min = this.params.min ? this.params.min : null;
        this.step = this.params.step ? this.params.step : this.step;
        this.createInputs(this.object[this.key]);
    }
    convertOriginalToArray() {
        switch (this.originalDataType) {
            case 'number':
                return [this.object[this.key]];
            case 'array':
                return this.object[this.key];
            case 'object':
                const values = [];
                for (const key in this.object[this.key]) {
                    values.push(this.object[this.key][key]);
                }
                return values;
        }
    }
    convertArrayToOriginal() {
        let inputsValue = [];
        for (const inputElement of this.inputElements)
            inputsValue.push(inputElement.value);
        // Translate from array to the original data type
        let valueForOutput = null;
        if (this.originalDataType === 'number')
            valueForOutput = inputsValue[0];
        else if (this.originalDataType === 'array')
            valueForOutput = inputsValue;
        else if (this.originalDataType === 'object') {
            valueForOutput = {};
            let i = 0;
            for (const key in this.object[this.key]) {
                valueForOutput[key] = inputsValue[i];
                i++;
            }
        }
        return valueForOutput;
    }
}
