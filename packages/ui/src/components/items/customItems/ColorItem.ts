import { drawColorPickerBar, drawColorPickerSL, fixHex, hexToRgb, HSBColor, hsbToHex, rgbToHsb } from '@fils/color';
import { el, isNull, isUndefined } from "@fils/utils";
import { CSS_UI } from '../../../main';
import { ItemPanel, Panel } from "../../Panel";
import { Item } from "../Item";

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

	view: HTMLElement = el('div');
	info: HTMLElement = el('div');

	parent: ItemPanel;

	canvas1: HTMLCanvasElement = el('canvas') as HTMLCanvasElement;
	canvas2: HTMLCanvasElement = el('canvas') as HTMLCanvasElement;

	width: number = 0;
	color: HSBColor = { h: 0, s: 0, b: 0 };

	target: HTMLElement = el('div');
	dragger: HTMLElement = el('div');

	dragging1: boolean = false;
	dragging2: boolean = false;

	createPanelContent(): void {

		this.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent.view}`)

		this.view = el('div', c.view, this.el);
		this.info = el('div', c.info, this.el);

		this.target = el('div', c.target, this.view);
		this.dragger = el('div', c.dragger, this.info);

		this.canvas1 = el('canvas', c.canvas, this.view) as HTMLCanvasElement;
		this.canvas2 = el('canvas', c.canvas, this.info) as HTMLCanvasElement;

		this.canvas1.width = this.canvas1.height = 200;
		this.canvas2.width = 200;
		this.canvas2.height = 20;

		// Aixo dinamic
		setTimeout(() => this.reverseUpdate(), 10);
	}

	addEventListeners(): void {

		window.addEventListener('mouseup', (e: MouseEvent) => {
			if(!this.created) return;

			if(this.dragging1 || this.dragging2){
				this.dragging1 = false;
				this.dragging2 = false;
				return;
			}
			const target = e.target as HTMLElement;
			if(this.el?.contains(target)) return;
			if(this.parent!.el.contains(target)) return;

			this.destroy();
		});

		window.addEventListener('mousedown', (e: MouseEvent) => {
			if(!this.created) return;
			const t = e.target;
			if(t === this.canvas1 || t === this.target) this.dragging1 = true;
			if(t === this.canvas2 || t === this.dragger) this.dragging2 = true;

			if(this.dragging1) this.updateCanvas1(e.pageX, e.pageY);
			if(this.dragging2) this.updateCanvas2(e.pageX);
		});

		window.addEventListener('mousemove', (e: MouseEvent) => {
			if(!this.created) return;
			if(!this.dragging1 && !this.dragging2) return;

			if(this.dragging1) this.updateCanvas1(e.pageX, e.pageY);
			if(this.dragging2) this.updateCanvas2(e.pageX);
		});
	}

	reverseUpdate(){

		this.color = rgbToHsb(hexToRgb(this.parent!.value));

		this.width = this.view.getBoundingClientRect().width;

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

	update(){
		this.width = this.view.getBoundingClientRect().width;

		drawColorPickerSL(this.canvas1, this.color.h);
		drawColorPickerBar(this.canvas2);

		// Todo aqui update de l'Item parent
		this.parent.setValue(hsbToHex(this.color));
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

		this.color.h = 360 * x / this.width;

		this.dragger.style.left = `${x}px`;

		this.update();
	}


}
export class ColorItem extends ItemPanel {
	input: HTMLInputElement = el('input') as HTMLInputElement;
	colorBox: HTMLElement = el('div');
	panel: ColorPanel;

	afterCreate(): void {
		this.panel = new ColorPanel(this, this.content);
	}

	open(): void {
		this.panel.create();
	}
	close(): void {
		this.panel.destroy();
	}

	protected addEventListeners(): void {

		this.input.addEventListener('change', () => {
			this.setValue(this.input.value);
		});

		this.colorBox.addEventListener('click', () => {
			if (!this.panel!.created) this.open();
			else this.close();
		});

		window.addEventListener('keydown', (e:KeyboardEvent)=> {
			if(e.key === 'Enter') this.setValue(this.input.value);
		});

	}

	protected createContent(): void {
		this.colorBox = el('div', );
		this.colorBox.classList.add(c.box);
		this.content.appendChild(this.colorBox);

		this.input = el('input') as HTMLInputElement;
		this.input.type = 'text';
		this.input.classList.add(c.input);
		this.input.classList.add(CSS_UI.item)
		this.content.appendChild(this.input);


	}

	setValue(value: any): void {

		if (isNull(value) || isUndefined(value) || value === '') {
			value = '#FFFFFF';
		}
		value = fixHex(value);

		if(this.panel!.created){
			this.panel!.reverseUpdate();
		}

		super.setValue(value);
	}

	refreshDom(): void {

		this.colorBox.style.setProperty('--active-color', this.value);
		this.input.value = this.value;

		super.refreshDom();
	}

	destroy(): void {
		super.destroy();
		this.panel!.destroy();
	}
}

