import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import check from "../../../utils/check";
import { Panel } from "../../panels/Panel";
import { Item } from "../Item";

CSS_UI.items.push({
	type: 'color',
	input: '_ui-color-input',
	box: '_ui-color-box',
});
const c = CSS_UI.getItemClasses('color');
export class ColorItem extends Item {
	input: HTMLInputElement;
	colorBox: HTMLElement;
	panel: Panel;

	protected addEventListeners(): void {

		this.input.addEventListener('change', () => {
			this.setValue(this.input.value);
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

