import { InputController } from "./InputController";


export class ColorPicker extends InputController {
	create() {
		super.create();
		this.dom.classList.add('color-picker');
	}
}