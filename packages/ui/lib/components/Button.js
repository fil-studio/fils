import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export class Button extends UIElement {
    constructor(title = 'Button', clickCallback) {
        super(RowTypes.button, title);
        this.clickCallback = clickCallback;
    }
    createDom() {
        super.createDom();
        this.button = this.el.querySelector('button');
        this.button.classList.add(CSS_UI.item);
    }
    addEventListeners() {
        this.button.addEventListener('click', () => {
            this.clickCallback();
            this.emit('click');
        });
    }
}
