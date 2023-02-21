"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringItem = void 0;
const utils_1 = require("@fils/utils");
const main_1 = require("../../../main");
const check_1 = require("../../../utils/check");
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
        this.input.classList.add(main_1.CSS_UI.item);
        this.content.appendChild(this.input);
    }
    setValue(value) {
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
