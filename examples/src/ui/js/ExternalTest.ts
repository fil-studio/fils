import { CustomUIElement } from "../../../../packages/ui/src/main";

export class CustomElementTest extends CustomUIElement {

	createContent() {
		this.el.innerHTML = "Hello World";
	}
}