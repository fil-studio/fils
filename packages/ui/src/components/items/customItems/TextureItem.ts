import { el } from "@fils/utils";
import { uiDownarrowHlt } from "../../../../../ui-icons/lib/Icons";
import { CSS_UI } from "../../../partials/cssClasses";
import { TextureCreatePanel } from "../../panels/customPanels/TextureCreatePanel";
import { TextureSelectPanel } from "../../panels/customPanels/TextureSelectPanel";
import { ExtendedItem } from "../ExtendedItem";
import { DropdownOptions } from "../ItemOptions";


CSS_UI.items.push({
	type: 'texture',
	input: '_ui-texture-input',
	open: '_ui-texture-open',
	panel: '_ui-panel-texture'
});
const c = CSS_UI.getItemClasses('texture');

export class TextureItem extends ExtendedItem {
	textureSelectPanel: TextureSelectPanel;
	options: DropdownOptions;

	textureCreatePanel: TextureCreatePanel;

	protected activeOption: HTMLElement;

	beforeCreate(): void {
		this.textureSelectPanel = new TextureSelectPanel(this);
		this.textureCreatePanel = new TextureCreatePanel(this);
	}

	protected addEventListeners(): void {

		window.addEventListener('click', (e) => {

			if(!this.textureSelectPanel.created) return;

			const target = e.target as HTMLElement;
			if(this.textureSelectPanel.dom.el?.contains(target)) return;
			this.destroyPanel();
		});

		this.activeOption.addEventListener('click', (e) => {
			if(this.textureSelectPanel.created) return;

			e.stopPropagation();

			this.dom.el.classList.add(c.open);
			this.textureSelectPanel.create(this.dom);
		});

	}

	addTexture(): void {
		this.textureCreatePanel.create(this.dom);
	}

	onResize(e?: CustomEvent<any>): void {
		this.destroyPanel();
	}

	destroyPanel(): void {
		this.dom.el.classList.remove(c.open);
		this.textureSelectPanel.destroy();
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

	refresh(): void {
		this.activeOption.querySelector('p').innerText = this.value;
		super.refresh();
	}
}