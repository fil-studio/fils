import { CSS_UI } from "../../../partials/cssClasses";
import dom from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";

export class TextureItem extends ExtendedItem {

	emptyButton: HTMLButtonElement;

	test: string = 'empty string test';
	test2: number = 15;

	protected createDom(): void {

		this.dom.el.classList.add(CSS_UI.row.vertical);

		this.emptyButton = dom.createButton('Add') as HTMLButtonElement;
		this.dom.content.appendChild(this.emptyButton);
	}
}