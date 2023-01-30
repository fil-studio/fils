import dom, { VERTICAL_ROW } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";

export class TextureItem extends ExtendedItem {

	emptyButton: HTMLButtonElement;

	test: string = 'empty string test';
	test2: number = 15;

	protected createDom(): void {

		this.dom.classList.add(VERTICAL_ROW);

		this.emptyButton = dom.createButton('Add');
		this.inputWrapper.appendChild(this.emptyButton);
	}
}