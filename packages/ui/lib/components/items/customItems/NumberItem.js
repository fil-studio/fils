"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberItem = void 0;
const utils_1 = require("@fils/utils");
const check_1 = __importDefault(require("../../../utils/check"));
const ui_icons_1 = require("@fils/ui-icons");
const cssClasses_1 = require("../../../partials/cssClasses");
const Item_1 = require("../Item");
const c = {
    type: 'number',
    input: '_ui-number-input',
    buttons: '_ui-number-buttons',
    btnIncrease: '_ui-number-btn-increase',
    btnDecrease: '_ui-number-btn-decrease',
};
class NumberItem extends Item_1.Item {
    constructor() {
        super(...arguments);
        this.inputElements = [];
        this.max = null;
        this.min = null;
        this.step = 0.01;
        this.decimals = 2;
        this.originalDataType = 'number';
        this.limitNumber = (value) => {
            let tmp = value;
            if (this.max)
                tmp = Math.min(tmp, this.max);
            if (this.min)
                tmp = Math.max(tmp, this.min);
            tmp = Math.round(tmp * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals);
            return tmp;
        };
    }
    addEventListeners() {
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
    setValue(_value) {
        if (_value)
            this.originalDataType = check_1.default.getType(_value);
        let inputsValue = [];
        for (const inputElement of this.inputElements)
            inputsValue.push(inputElement.value);
        this.value = inputsValue;
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
            }
        }
        this.object[this.key] = valueForOutput;
        this.refreshDom();
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
        return inputElement;
    }
    createInputs(value) {
        this.inputElements = [];
        if (check_1.default.isNumber(value))
            this.inputElements.push(this.createInput(value));
        else if (check_1.default.isArray(value)) {
            for (const item of value) {
                this.inputElements.push(this.createInput(item));
            }
        }
        else if (check_1.default.isObject(value)) {
            for (const key in value) {
                const item = this.createInput(value[key]);
                item.placeholder = key;
                this.inputElements.push(item);
            }
        }
    }
    createInputContent(inputElement) {
        inputElement.wrapper = (0, utils_1.el)('div', c.input);
        inputElement.input = (0, utils_1.el)('input');
        ;
        inputElement.input.type = 'number';
        inputElement.input.placeholder = inputElement.placeholder;
        if (this.min)
            inputElement.input.min = this.min.toString();
        if (this.max)
            inputElement.input.max = this.max.toString();
        if (this.step)
            inputElement.input.step = this.step.toString();
        inputElement.wrapper.appendChild(inputElement.input);
        const btns = (0, utils_1.el)('div', c.buttons);
        inputElement.buttonIncrease = (0, utils_1.el)('button', c.btnIncrease);
        inputElement.buttonIncrease.innerHTML = ui_icons_1.uiDownarrowHlt;
        inputElement.buttonDecrease = (0, utils_1.el)('button', c.btnDecrease);
        inputElement.buttonDecrease.innerHTML = ui_icons_1.uiDownarrowHlt;
        btns.appendChild(inputElement.buttonIncrease);
        btns.appendChild(inputElement.buttonDecrease);
        inputElement.wrapper.appendChild(btns);
        if (this.inputElements.length > 2) {
            inputElement.buttonIncrease.classList.add(`.${cssClasses_1.CSS_UI.utility.hidden}`);
            inputElement.buttonDecrease.classList.add(`.${cssClasses_1.CSS_UI.utility.hidden}`);
        }
        this.content.appendChild(inputElement.wrapper);
    }
    createContent() {
        this.max = this.params.max ? this.params.max : null;
        this.min = this.params.min ? this.params.min : null;
        this.step = this.params.step ? this.params.step : this.step;
        this.decimals = this.params.decimals ? this.params.decimals : this.decimals;
        this.createInputs(this.object[this.key]);
        for (const inputElement of this.inputElements) {
            this.createInputContent(inputElement);
        }
    }
}
exports.NumberItem = NumberItem;
