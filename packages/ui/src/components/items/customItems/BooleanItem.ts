import { CSS_UI } from "../../../partials/cssClasses";
import { ExtendedItem } from "../ExtendedItem";

export class BooleanItem extends ExtendedItem {

	protected addEventListeners(): void {
		 	this.dom.el.addEventListener('click', () => {
 			this.value = !this.value;
 			this.refresh();
 		});
	}

	protected createDom(): void {

		this.dom.content.innerHTML = `
 			<div class="_ui-toggle">
 				<div></div>
 			</div>`;

	}

	refresh(): void {
		this.dom.el.classList.toggle(CSS_UI.utility.active, this.value);
		super.refresh();
	}
}