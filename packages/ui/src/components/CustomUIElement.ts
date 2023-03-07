import { RowTypes } from "../main";
import { UIElement } from "./UIElement";

export class CustomUIElement extends UIElement {
	params: Object;

	constructor(params: Object) {
		super(RowTypes.custom);
		this.params = params;
	}
}