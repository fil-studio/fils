import { el } from "@fils/utils";
import { uiDownarrowHlt } from "../../../../../ui-icons/lib/Icons";
import { CSS_UI } from "../../../partials/cssClasses";
import { NewTexturePanel } from "../../panels/customPanels/NewTexturePanel";
import { SelectTexturePanel} from "../../panels/customPanels/SelectTexturePanel";
import { ExtendedItem } from "../ExtendedItem";
import { DropdownOptions } from "../ItemOptions";
import { SelectItem } from "./SelectItem";


CSS_UI.items.push({
	type: 'texture',
	input: '_ui-texture-input',
	open: '_ui-texture-open',
	panel: '_ui-panel-texture'
});
const c = CSS_UI.getItemClasses('texture');

export class TextureItem extends SelectItem {
	dropdownPanel: SelectTexturePanel;
	options: DropdownOptions;

	floatingPanel: NewTexturePanel;

	beforeCreate(): void {
		this.dropdownPanel = new SelectTexturePanel(this);
		this.floatingPanel = new NewTexturePanel(this);
	}

	protected addEventListeners(): void {

		this.dom.el.addEventListener('click', (e) => {
			e.stopPropagation();
			this.destroyFloating();
			this.createDropdown();
		});

		window.addEventListener('click', (e) => {
			const target = e.target as HTMLElement;

			if(this.dropdownPanel.created) {
				if(this.dropdownPanel.dom.el?.contains(target)) return;
				this.destroyDropdown();
			}

			if(this.floatingPanel.created) {
				if(this.floatingPanel.dom.el?.contains(target)) return;
				this.destroyFloating();
			}

		});
	}

	createFloating(): void {
		this.floatingPanel.create(this.dom);
	}
	createDropdown(): void {
		this.dropdownPanel.create(this.dom);
	}

	onResize(e?: CustomEvent<any>): void {
		this.destroyDropdown();
		this.destroyFloating();
	}

	destroyDropdown(): void {
		this.dom.el.classList.remove(c.open);
		this.dropdownPanel.destroy();
	}
	destroyFloating(): void {
		this.floatingPanel.destroy();
	}

	protected createDom(): void {

		const input = el('div', c.input);
		const p = el('p');
		input.innerHTML = uiDownarrowHlt;
		input.appendChild(p);
		this.dom.content.appendChild(input);

		this.dom.el.classList.add(CSS_UI.row.vertical);

		this.activeOption = this.dom.content.querySelector(`.${c.input}`);

	}

}