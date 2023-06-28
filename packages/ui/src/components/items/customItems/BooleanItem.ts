import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import { Item } from "../Item";
import { UIEventListener } from "../../../main";

const c = {
	type: 'boolean',
	input: '_ui-toggle',
};
export class BooleanItem extends Item {

	addEventListeners(): void {

		const clickEvent:UIEventListener = {
			target: this.el,
			type: 'click',
			callback: (e) => {
				this.setValue(!this.value);
			}
		}
		this.addEventListener(clickEvent);
	}

	protected createContent(): void {
		const wrapper = el('div', c.input);
		const thumb = el('div');
		wrapper.appendChild(thumb);
		this.content.appendChild(wrapper);
	}

	refreshDom(): void {
		this.el.classList.toggle(CSS_UI.utility.active, this.value);
		super.refreshDom();
	}
}