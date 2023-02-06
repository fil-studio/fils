import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import { ExtendedItem } from "../ExtendedItem";

CSS_UI.items.push({
	type: 'boolean',
	input: '_ui-toggle',
});
const c = CSS_UI.getItemClasses('boolean');

export class BooleanItem extends ExtendedItem {

	protected addEventListeners(): void {
		 	this.dom.el.addEventListener('click', () => {
 			this.value = !this.value;
 			this.refresh();
 		});
	}

	protected createDom(): void {

		const wrapper = el('div', c.input);
		const thumb = el('div');
		wrapper.appendChild(thumb);
		this.dom.content.appendChild(wrapper);

	}

	refresh(): void {
		this.dom.el.classList.toggle(CSS_UI.utility.active, this.value);
		super.refresh();
	}
}