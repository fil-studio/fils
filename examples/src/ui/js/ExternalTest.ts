import { RowTypes, CustomUIElement } from "../../../../packages/ui/src/main";

export class CustomElementTest extends CustomUIElement {

	createContent() {
		this.el.innerHTML = "Hello World";
		console.log('ExternalText', this.params)
	}
}