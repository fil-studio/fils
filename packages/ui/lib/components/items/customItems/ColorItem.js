"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorItem = exports.ColorPanel = void 0;
const utils_1 = require("@fils/utils");
const color_1 = require("@fils/color");
const check_1 = __importDefault(require("../../../utils/check"));
const Panel_1 = require("../../Panel");
const Item_1 = require("../Item");
const c = {
    type: 'color',
    input: '_ui-color-input',
    box: '_ui-color-box',
    view: '_ui-color-view',
    info: '_ui-color-info',
    canvas: '_ui-color-canvas',
    target: '_ui-color-target',
    dragger: '_ui-color-dragger',
};
class ColorPanel extends Panel_1.Panel {
    constructor() {
        super(...arguments);
        this.view = (0, utils_1.el)('div');
        this.info = (0, utils_1.el)('div');
        this.canvas1 = (0, utils_1.el)('canvas');
        this.canvas2 = (0, utils_1.el)('canvas');
        this.width = 0;
        this.color = { h: 0, s: 0, b: 0 };
        this.target = (0, utils_1.el)('div');
        this.dragger = (0, utils_1.el)('div');
        this.dragging1 = false;
        this.dragging2 = false;
    }
    createPanelContent() {
        this.view = (0, utils_1.el)('div', c.view, this.el);
        this.info = (0, utils_1.el)('div', c.info, this.el);
        this.target = (0, utils_1.el)('div', c.target, this.view);
        this.dragger = (0, utils_1.el)('div', c.dragger, this.info);
        this.canvas1 = (0, utils_1.el)('canvas', c.canvas, this.view);
        this.canvas2 = (0, utils_1.el)('canvas', c.canvas, this.info);
        this.canvas1.width = this.canvas1.height = 200;
        this.canvas2.width = 200;
        this.canvas2.height = 20;
        setTimeout(() => this.reverseUpdate(), 10);
    }
    addEventListeners() {
        super.addEventListeners();
        window.addEventListener('mouseup', (e) => {
            var _a;
            if (!this.created)
                return;
            if (this.dragging1 || this.dragging2) {
                this.dragging1 = false;
                this.dragging2 = false;
                return;
            }
            const target = e.target;
            if ((_a = this.el) === null || _a === void 0 ? void 0 : _a.contains(target))
                return;
            if (this.parent.el.contains(target))
                return;
            this.destroy();
        });
        window.addEventListener('mousedown', (e) => {
            if (!this.created)
                return;
            const t = e.target;
            if (t === this.canvas1 || t === this.target)
                this.dragging1 = true;
            if (t === this.canvas2 || t === this.dragger)
                this.dragging2 = true;
            if (this.dragging1)
                this.updateCanvas1(e.pageX, e.pageY);
            if (this.dragging2)
                this.updateCanvas2(e.pageX);
        });
        window.addEventListener('mousemove', (e) => {
            if (!this.created)
                return;
            if (!this.dragging1 && !this.dragging2)
                return;
            if (this.dragging1)
                this.updateCanvas1(e.pageX, e.pageY);
            if (this.dragging2)
                this.updateCanvas2(e.pageX);
        });
    }
    reverseUpdate() {
        this.color = (0, color_1.rgbToHsb)((0, color_1.hexToRgb)(this.parent.value));
        this.width = this.view.getBoundingClientRect().width;
        let x = 0;
        let y = 0;
        x = this.color.s * this.width / 100;
        y = this.width - this.color.b * this.width / 100;
        this.target.style.left = `${x}px`;
        this.target.style.top = `${y}px`;
        x = this.color.h * this.width / 360;
        this.dragger.style.left = `${x}px`;
        (0, color_1.drawColorPickerSL)(this.canvas1, this.color.h);
        (0, color_1.drawColorPickerBar)(this.canvas2);
    }
    update() {
        this.width = this.view.getBoundingClientRect().width;
        (0, color_1.drawColorPickerSL)(this.canvas1, this.color.h);
        (0, color_1.drawColorPickerBar)(this.canvas2);
        this.parent.setValue((0, color_1.hsbToHex)(this.color));
    }
    updateCanvas1(x, y) {
        const r = this.canvas1.getBoundingClientRect();
        x = Math.min(Math.max(x - r.left, 0), this.width);
        y = Math.min(Math.max(y - r.top, 0), this.width);
        this.color.s = Math.round(100 * x / this.width);
        this.color.b = 100 - Math.round(100 * y / this.width);
        this.target.style.left = `${x}px`;
        this.target.style.top = `${y}px`;
        this.update();
    }
    updateCanvas2(x) {
        const r = this.canvas2.getBoundingClientRect();
        x = Math.min(Math.max(x - r.left, 1), this.width - 1);
        this.color.h = 360 * x / this.width;
        this.dragger.style.left = `${x}px`;
        this.update();
    }
}
exports.ColorPanel = ColorPanel;
class ColorItem extends Item_1.Item {
    constructor() {
        super(...arguments);
        this.input = (0, utils_1.el)('input');
        this.colorBox = (0, utils_1.el)('div');
        this.panel = null;
    }
    afterCreate() {
        this.panel = new ColorPanel(this, this.el);
    }
    addEventListeners() {
        this.input.addEventListener('change', () => {
            this.setValue(this.input.value);
        });
        this.colorBox.addEventListener('click', () => {
            if (!this.panel.created)
                this.panel.create();
            else
                this.panel.destroy();
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Enter')
                this.setValue(this.input.value);
        });
    }
    createContent() {
        this.colorBox = (0, utils_1.el)('div');
        this.colorBox.classList.add(c.box);
        this.content.appendChild(this.colorBox);
        this.input = (0, utils_1.el)('input');
        this.input.type = 'text';
        this.input.classList.add(c.input);
        this.content.appendChild(this.input);
    }
    setValue(value) {
        if (check_1.default.isNull(value) || check_1.default.isUndefined(value) || value === '') {
            value = '#FFFFFF';
        }
        value = (0, color_1.fixHex)(value);
        if (this.panel.created) {
            this.panel.reverseUpdate();
        }
        super.setValue(value);
    }
    refreshDom() {
        this.colorBox.style.setProperty('--active-color', this.value);
        this.input.value = this.value;
        super.refreshDom();
    }
}
exports.ColorItem = ColorItem;
