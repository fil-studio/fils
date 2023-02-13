"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringItem = void 0;
const utils_1 = require("@fils/utils");
const check_1 = __importDefault(require("../../../utils/check"));
const Item_1 = require("../Item");
class StringItem extends Item_1.Item {
    constructor() {
        super(...arguments);
        this.input = (0, utils_1.el)('input');
    }
    addEventListeners() {
        this.input.addEventListener('change', () => {
            this.setValue(this.input.value);
        });
    }
    createContent() {
        this.input = (0, utils_1.el)('input');
        this.input.placeholder = 'String';
        this.input.type = 'text';
        this.content.appendChild(this.input);
    }
    setValue(_value) {
        let value = _value;
        if (check_1.default.isNull(value) || check_1.default.isUndefined(value)) {
            value = 'String';
        }
        super.setValue(value);
    }
    refreshDom() {
        this.input.value = this.value;
        super.refreshDom();
    }
}
exports.StringItem = StringItem;
