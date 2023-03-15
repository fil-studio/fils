import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export class Button extends UIElement {
    constructor(title = 'Button', clickCallback) {
        super(RowTypes.button, title);
        this.view = 'button';
        this.clickCallback = clickCallback;
    }
    createDom() {
        super.createDom();
        this.button = this.el.querySelector('button');
        this.button.classList.add(CSS_UI.item);
    }
    addEventListeners() {
        this.button.addEventListener('click', () => {
            this.button.classList.add(CSS_UI.utility.active);
            setTimeout(() => {
                this.button.classList.remove(CSS_UI.utility.active);
            }, 50);
            this.clickCallback();
            this.emit('click');
            this.emit('__childrenChange');
        });
    }
    /**
    * @typedef {'click'} ButtonEventType
    *
    * @description Available event types:
    * - click: Triggered when the button is clicked.
    *
    * @param {ButtonEventType} eventType - The type of event to listen for.
    * @param {Function} callback - The callback function to call when the event occurs.
    * @returns {void}
    */
    on(event, callback) {
        super.on(event, callback);
    }
}
