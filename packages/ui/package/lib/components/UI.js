"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
// Import CSS
const utils_1 = require("@fils/utils");
const init_1 = require("../init");
const cssClasses_1 = require("../partials/cssClasses");
const dom_1 = require("../utils/dom");
const Group_1 = require("./Group");
// Injects styles and registers base components
(0, init_1.InitUI)();
class UI extends Group_1.Group {
    constructor({ resizable = true, parentElement, icon, width } = {}) {
        super(Object.assign({}, arguments[0]));
        this.wrapper = (0, utils_1.el)('div');
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
            this.wrapper.classList.add(cssClasses_1.CSS_UI.parent);
            parentElement.appendChild(this.wrapper);
        }
        else {
            document.body.appendChild(this.wrapper);
        }
    }
    addIcon(icon) {
        if (!icon)
            return;
        dom_1.default.addIcon(this.el.querySelector('header'), icon);
    }
    createDom() {
        super.createDom();
        this.wrapper = dom_1.default.createRow({
            type: dom_1.RowTypes.ui,
            depth: this.depth,
        });
        this.wrapper.appendChild(this.el);
    }
    addEventListeners() {
        super.addEventListeners();
        if (!this.resizable)
            return;
        // Create resizer element
        const resizer = (0, utils_1.el)('div', cssClasses_1.CSS_UI.resizer);
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
}
exports.UI = UI;
