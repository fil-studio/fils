import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import check from "../../../utils/check";
import { Panel } from "../../panels/Panel";
import { Item } from "../Item";
import { drawColorPickerBar, drawColorPickerSL, HSBColor, hsbToHex, hsbToRgb, hsbToString, rgbToString } from '../../../../../color/lib/main';

CSS_UI.items.push({
	type: 'color',
	input: '_ui-color-input',
	box: '_ui-color-box',

	view: '_ui-color-view',
	info: '_ui-color-info',
	canvas: '_ui-color-canvas',

	target: '_ui-color-target',
	dragger: '_ui-color-dragger',
});
const c = CSS_UI.getItemClasses('color');

export class ColorPanel extends Panel {
	view: HTMLElement;
	info: HTMLElement;

	canvas1: HTMLCanvasElement;
	canvas2: HTMLCanvasElement;

	width: number = 0;
	angle: number = 180;
	color: HSBColor;

	target: HTMLElement;
	dragger: HTMLElement;

	dragging1: boolean = false;
	dragging2: boolean = false;

	createPanelContent(): void {

		this.view = el('div', c.view, this.dom.el);
		this.info = el('div', c.info, this.dom.el);

		this.target = el('div', c.target, this.view);
		this.dragger = el('div', c.dragger, this.info);

		this.canvas1 = el('canvas', c.canvas, this.view) as HTMLCanvasElement;
		this.canvas2 = el('canvas', c.canvas, this.info) as HTMLCanvasElement;

		this.canvas1.width = this.canvas1.height = 200;
		this.canvas2.width = 200;
		this.canvas2.height = 20;

		// Aixo dinamic
		this.width = 0;

		this.color = {
			h: this.angle,
			s: 50,
			b: 50
		}

		drawColorPickerSL(this.canvas1, this.angle);
		drawColorPickerBar(this.canvas2);
	}

	addEventListeners(): void {

		super.addEventListeners();

		window.addEventListener('mouseup', (e) => {
			if(!this.created) return;

			if(this.dragging1 || this.dragging2){
				this.dragging1 = false;
				this.dragging2 = false;
				return;
			}
			const target = e.target as HTMLElement;
			if(this.dom.el?.contains(target)) return;
			if(this.parent.dom.el.contains(target)) return;

			this.destroy();
		});

		window.addEventListener('mousedown', (e) => {
			if(!this.created) return;
			const t = e.target;
			if(t === this.canvas1 || t === this.target) this.dragging1 = true;
			if(t === this.canvas2 || t === this.dragger) this.dragging2 = true;

			if(this.dragging1) this.updateCanvas1(e.pageX, e.pageY);
			if(this.dragging2) this.updateCanvas2(e.pageX);
		});

		window.addEventListener('mousemove', (e) => {
			if(!this.created) return;
			if(!this.dragging1 && !this.dragging2) return;

			if(this.dragging1) this.updateCanvas1(e.pageX, e.pageY);
			if(this.dragging2) this.updateCanvas2(e.pageX);
		});
	}

	update(){
		this.color.h = this.angle;
		this.width = this.view.getBoundingClientRect().width;

		drawColorPickerSL(this.canvas1, this.angle);
		drawColorPickerBar(this.canvas2);

		// Todo aqui update de l'Item parent
	}

	updateCanvas1(x:number, y:number): void {

		const r = this.canvas1.getBoundingClientRect();
		x = Math.min(Math.max(x - r.left, 0), this.width);
		y = Math.min(Math.max(y - r.top, 0), this.width);

		this.color.s = Math.round(100 * x / this.width);
		this.color.b = 100 - Math.round(100 * y / this.width);

		this.target.style.left = `${x}px`;
		this.target.style.top = `${y}px`;

		this.update();
	}

	updateCanvas2(x:number): void {

		const r = this.canvas2.getBoundingClientRect();
		x = Math.min(Math.max(x - r.left, 1), this.width - 1);

		this.angle = 360 * x / this.width;
		this.color.h = this.angle;

		this.dragger.style.left = `${x}px`;

		this.update();
	}


	destroy(): void {
		this.view = null;
		this.info = null;
		this.canvas1 = null;
		this.canvas2 = null;
		super.destroy();
	}

}
export class ColorItem extends Item {
	input: HTMLInputElement;
	colorBox: HTMLElement;
	panel: ColorPanel;

	afterCreate(): void {
		this.panel = new ColorPanel(this, this.dom.el);
	}

	protected addEventListeners(): void {

		this.input.addEventListener('change', () => {
			this.setValue(this.input.value);
		});

		this.colorBox.addEventListener('click', () => {
			this.panel.create();
		});

	}

	protected createContent(): void {
		this.colorBox = el('div', );
		this.colorBox.classList.add(c.box);
		this.dom.content.appendChild(this.colorBox);

		this.input = el('input') as HTMLInputElement;
		this.input.type = 'text';
		this.input.classList.add(c.input);
		this.dom.content.appendChild(this.input);


	}

	setValue(_value: any): void {
		let value = _value;

		if (check.isNull(value) || check.isUndefined(value) || value === '') {
			value = '#FFFFFF';
		}

		super.setValue(value);
	}

	refreshDom(): void {

		this.colorBox.style.setProperty('--active-color', this.value);
		this.input.value = this.value;

		super.refreshDom();
	}
}

