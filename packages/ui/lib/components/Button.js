"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const dom_1 = require("../utils/dom");
const UIElement_1 = require("./UIElement");
class Button extends UIElement_1.UIElement {
    constructor({ title } = {}) {
        const _title = title || 'Button';
        super(dom_1.RowTypes.button, _title);
    }
    createDom() {
        super.createDom();
        this.button = this.el.querySelector('button');
    }
    addEventListeners() {
        this.button.addEventListener('click', () => {
            this.emit('click');
        });
    }
}
exports.Button = Button;
