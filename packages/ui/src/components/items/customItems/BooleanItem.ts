import { ExtendedItem } from "../ExtendedItem";

export class BooleanItem extends ExtendedItem {

	protected addEventListeners(): void {
		 	this.dom.addEventListener('click', () => {
 			this.value = !this.value;
 			this.refresh();
 		});
	}

	protected createDom(): void {

		this.inputWrapper.innerHTML = `
 			<div class="_ui-toggle">
 				<div></div>
 			</div>`;

	}

	refresh(): void {
		this.dom.classList.toggle('_ui-active', this.value);
		super.refresh();
	}
}