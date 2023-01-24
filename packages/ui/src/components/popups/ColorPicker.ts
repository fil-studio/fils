import { Popup } from "./Popup";


export class ColorPicker extends Popup {
	create() {
		super.create();
		this.dom.classList.add('color-picker');
	}
}