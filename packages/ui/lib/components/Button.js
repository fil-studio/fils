import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export class Button extends UIElement {
    constructor({ title } = {}) {
        const _title = title || 'Button';
        super(RowTypes.button, _title);
    }
    createDom() {
        super.createDom();
        this.button = this.el.querySelector('button');
        this.button.classList.add(CSS_UI.item);
    }
    addEventListeners() {
        this.button.addEventListener('click', () => {
            this.emit('click');
        });
    }
}
