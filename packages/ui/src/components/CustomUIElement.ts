import { RowTypes } from "../main";
import { UIElement } from "./UIElement";

export class CustomUIElement extends UIElement {
	params: any;

	constructor(params: any) {
		super(RowTypes.custom);
		this.params = params;
	}
}