import { el } from "@fils/utils";
import { uiDownarrowHlt } from "../../../../../ui-icons/lib/Icons";
import { CSS_UI } from "../../../partials/cssClasses";
import check from "../../../utils/check";
import dom from "../../../utils/dom";
import { TextureSelectPanel } from "../../panels/customPanels/TextureSelectPanel";
import { ExtendedItem } from "../ExtendedItem";


CSS_UI.items.push({
	type: 'texture',
	input: '_ui-texture-input',
	open: '_ui-texture-open',
	panel: '_ui-panel-texture'
});
const c = CSS_UI.getItemClasses('texture');

export class TextureItem extends ExtendedItem {
	listPanel: TextureSelectPanel;


	protected activeOption: HTMLElement;
	protected optionsList: HTMLElement;

	beforeCreate(): void {
		this.listPanel = new this.panels[0](this) as TextureSelectPanel;
	}

	protected addEventListeners(): void {

		window.addEventListener('click', (e) => {

			if(!this.listPanel.created) return;

			const target = e.target as HTMLElement;
			if(this.listPanel.dom.el?.contains(target)) return;
			this.destroyPanel();
		});

		this.activeOption.addEventListener('click', (e) => {
			if(this.listPanel.created) return;

			e.stopPropagation();

			this.dom.el.classList.add(c.open);
			this.listPanel.create(this.dom);
		});

	}

	onResize(e?: CustomEvent<any>): void {
		this.destroyPanel();
	}

	destroyPanel(): void {
		this.dom.el.classList.remove(c.open);
		this.listPanel.destroy();
	}

	protected createDom(): void {

		const input = el('div', c.input);
		const p = el('p');
		input.innerHTML = uiDownarrowHlt;
		input.appendChild(p);
		this.dom.content.appendChild(input);
		this.activeOption = this.dom.content.querySelector(`.${c.input}`);

		this.dom.el.classList.add(CSS_UI.row.vertical);

	}

	setValue(_value: any): void {
		let value = _value;

		// If it's null set it to the first option
		if(check.isNull(value) || check.isUndefined(value)) {
			value = [
				'textura 1',
				'textura 2',
				'textura 3',
			]
		}

		super.setValue(value);
	}

	afterCreate(): void {
		this.setValue(this.value);
	}

	refresh(): void {
		this.activeOption.querySelector('p').innerText = this.value;
		super.refresh();
	}
}