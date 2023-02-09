import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import check from "../../../utils/check";
import { Panel } from "../../panels/Panel";
import { Item } from "../Item";

CSS_UI.items.push({
	type: 'color',
	input: '_ui-color-input',
	box: '_ui-color-box',

	view: '_ui-color-view',
	info: '_ui-color-info',
	canvas: '_ui-color-canvas',
});
const c = CSS_UI.getItemClasses('color');

export class ColorPanel extends Panel {
	view: HTMLElement;
	info: HTMLElement;

	canvas1: HTMLCanvasElement;
	canvas2: HTMLCanvasElement;

	createPanelContent(): void {

		this.view = el('div', c.view, this.dom.el);
		this.info = el('div', c.info, this.dom.el);

		this.canvas1 = el('canvas', c.canvas, this.view) as HTMLCanvasElement;
		this.canvas2 = el('canvas', c.canvas, this.info) as HTMLCanvasElement;




		this.positionPanel();

	}

	positionPanel(): void {
		super.positionPanel();
		if(!this.created) return;

		if(!this.view || !this.info) return;

		const viewR = this.view.getBoundingClientRect();
		this.canvas1.width = this.canvas1.height = viewR.width;
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

