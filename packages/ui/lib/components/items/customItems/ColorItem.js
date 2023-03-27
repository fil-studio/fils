import { drawColorPickerBar, drawColorPickerSL, fixHex, hexToRgb, hsbToHex, rgbToHsb } from '@fils/color';
import { MathUtils } from '@fils/math';
import { el, isNull, isUndefined } from "@fils/utils";
import { CSS_UI } from '../../../main';
import { ItemPanel, Panel } from "../../Panel";
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
export class ColorPanel extends Panel {
    constructor() {
        super(...arguments);
        this.view = el('div');
        this.info = el('div');
        this.canvas1 = el('canvas');
        this.canvas2 = el('canvas');
        this.tmpPosition = { x: 0, y: 0 };
        this.position = { x: 0, y: 0 };
        this.tmpX = 0;
        this.x = 0;
        this.width = 0;
        this.color = { h: 0, s: 0, b: 0 };
        this.target = el('div');
        this.dragger = el('div');
        this.dragging1 = false;
        this.dragging2 = false;
    }
    createPanelContent() {
        this.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent.view}`);
        this.view = el('div', c.view, this.el);
        this.info = el('div', c.info, this.el);
        this.target = el('div', c.target, this.view);
        this.dragger = el('div', c.dragger, this.info);
        this.canvas1 = el('canvas', c.canvas, this.view);
        this.canvas2 = el('canvas', c.canvas, this.info);
        this.canvas1.width = this.canvas1.height = 200;
        this.canvas2.width = 200;
        this.canvas2.height = 20;
        setTimeout(() => this.reverseUpdate(), 10);
        const raf = () => {
            if (!this.created)
                return;
            this.width = this.view.getBoundingClientRect().width;
            this.position.x = MathUtils.lerp(this.position.x, this.tmpPosition.x, 0.9);
            this.position.y = MathUtils.lerp(this.position.y, this.tmpPosition.y, 0.9);
            this.x = MathUtils.lerp(this.x, this.tmpX, 0.9);
            if (this.dragging1)
                this.updateCanvas1();
            if (this.dragging2)
                this.updateCanvas2();
            requestAnimationFrame(raf);
        };
        raf();
    }
    create() {
        super.create();
        setTimeout(() => this.reverseUpdate(), 10);
    }
    addEventListeners() {
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
            this.tmpPosition = { x: e.pageX, y: e.pageY };
            this.tmpX = e.pageX;
        });
        window.addEventListener('mousemove', (e) => {
            if (!this.created)
                return;
            if (!this.dragging1 && !this.dragging2)
                return;
            this.tmpPosition = { x: e.pageX, y: e.pageY };
            this.tmpX = e.pageX;
        });
    }
    reverseUpdate() {
        this.color = rgbToHsb(hexToRgb(this.parent.value));
        let x = 0;
        let y = 0;
        // Canvas 1
        x = this.color.s * this.width / 100;
        y = this.width - this.color.b * this.width / 100;
        this.target.style.left = `${x}px`;
        this.target.style.top = `${y}px`;
        // Canvas 2
        x = this.color.h * this.width / 360;
        this.dragger.style.left = `${x}px`;
        drawColorPickerSL(this.canvas1, this.color.h);
        drawColorPickerBar(this.canvas2);
    }
    update() {
        drawColorPickerSL(this.canvas1, this.color.h);
        drawColorPickerBar(this.canvas2);
        this.parent.setValue(hsbToHex(this.color));
    }
    updateCanvas1() {
        const r = this.canvas1.getBoundingClientRect();
        const x = Math.min(Math.max(this.position.x - r.left, 0), this.width);
        const y = Math.min(Math.max(this.position.y - r.top, 0), this.width);
        this.color.s = Math.round(100 * x / this.width);
        this.color.b = 100 - Math.round(100 * y / this.width);
        this.target.style.left = `${MathUtils.map(x, 0, this.width, 0, 100)}%`;
        this.target.style.top = `${MathUtils.map(y, 0, this.width, 0, 100)}%`;
        this.update();
    }
    updateCanvas2() {
        const r = this.canvas2.getBoundingClientRect();
        const x = Math.min(Math.max(this.x - r.left, 1), this.width - 1);
        this.color.h = 360 * x / this.width;
        this.dragger.style.left = `${x}px`;
        this.update();
    }
}
export class ColorItem extends ItemPanel {
    constructor() {
        super(...arguments);
        this.input = el('input');
        this.colorBox = el('div');
    }
    afterCreate() {
        this.panel = new ColorPanel(this, this.content);
    }
    open() {
        this.panel.create();
    }
    close() {
        this.panel.destroy();
    }
    addEventListeners() {
        this.input.addEventListener('change', () => {
            this.setValue(this.input.value);
        });
        this.colorBox.addEventListener('click', () => {
            if (!this.panel.created)
                this.open();
            else
                this.close();
        });
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Enter')
                this.setValue(this.input.value);
        });
    }
    createContent() {
        this.colorBox = el('div');
        this.colorBox.classList.add(c.box);
        this.content.appendChild(this.colorBox);
        this.input = el('input');
        this.input.type = 'text';
        this.input.classList.add(c.input);
        this.input.classList.add(CSS_UI.item);
        this.content.appendChild(this.input);
    }
    setValue(value) {
        if (isNull(value) || isUndefined(value) || value === '') {
            value = '#FFFFFF';
        }
        value = fixHex(value);
        super.setValue(value);
    }
    refreshDom() {
        this.colorBox.style.setProperty('--active-color', this.value);
        this.input.value = this.value;
        super.refreshDom();
    }
    destroy() {
        super.destroy();
        this.panel.destroy();
    }
}
