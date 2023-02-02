import { Panel } from "../Panel";


export class ColorPicker extends Panel {
	create() {
		super.create();
		this.dom.el.classList.add('color-picker');
	}
}