import { InputPanel } from "./InputPanel";


export class ColorPicker extends InputPanel {
	create() {
		super.create();
		this.dom.classList.add('color-picker');
	}
}