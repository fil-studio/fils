import { RowTypes, CustomUIElement } from "../../../../packages/ui/src/main";

export class CustomElementTest extends CustomUIElement {
	params:any;

	createContent() {
		this.el.innerHTML = "Hello World";
	}
}