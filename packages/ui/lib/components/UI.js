// Import CSS
import { el } from '@fils/utils';
import { InitUI } from '../main';
import { CSS_UI } from '../partials/cssClasses';
import dom, { RowTypes } from '../utils/dom';
import { Group } from './Group';
InitUI();
export class UI extends Group {
    constructor({ resizable = true, parentElement, icon, width } = {}) {
        super(Object.assign({}, arguments[0]));
        this.wrapper = el('div');
        this.resizable = parentElement ? false : resizable;
        this.init(0);
        this.addIcon(icon);
        this.appendTo(parentElement);
        if (width) {
            this.wrapper.style.setProperty('--wrapper-width', `${width}px`);
        }
    }
    appendTo(parentElement) {
        if (parentElement) {
            this.wrapper.classList.add(CSS_UI.parent);
            parentElement.appendChild(this.wrapper);
        }
        else {
            document.body.appendChild(this.wrapper);
        }
    }
    addIcon(icon) {
        if (!icon)
            return;
        dom.addIcon(this.el.querySelector('header'), icon);
    }
    createDom() {
        super.createDom();
        this.wrapper = dom.createRow({
            type: RowTypes.ui,
            depth: this.depth,
        });
        this.wrapper.appendChild(this.el);
    }
    addEventListeners() {
        super.addEventListeners();
        if (!this.resizable)
            return;
        // Create resizer element
        const resizer = el('div', CSS_UI.resizer);
        this.wrapper.appendChild(resizer);
        const resize = (w, x) => {
            if (x < 0 && w + x < 300)
                return;
            this.wrapper.style.setProperty('--wrapper-width', `${w + x}px`);
            this.emit('resize');
        };
        // Handle resize events
        let dragging = false;
        let x = 0;
        let distance = 0;
        let width = 0;
        resizer.addEventListener('mousedown', (e) => {
            dragging = true;
            x = e.clientX;
            width = this.wrapper.getBoundingClientRect().width;
        });
        window.addEventListener('mousemove', (e) => {
            if (!dragging)
                return;
            e.preventDefault();
            distance = x - e.clientX;
            resize(width, distance);
        });
        window.addEventListener('mouseup', (e) => {
            if (!dragging)
                return;
            e.preventDefault();
            dragging = false;
        });
    }
    /**
    * @typedef {'resize'| EventType } UIEventType
    *
    * @description Available event types:
    * - change: Triggered when the value of the item or one of its children changes.
    * - resize: Triggered when the UI is resized.
    *
    * @param {UIEventType} eventType - The type of event to listen for.
    * @param {Function} callback - The callback function to call when the event occurs.
    * @returns {void}
    */
    on(event, callback) {
        super.on(event, callback);
    }
    change(target) {
        super.change(target);
    }
}
