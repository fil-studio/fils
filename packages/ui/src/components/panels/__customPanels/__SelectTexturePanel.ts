import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import { TextureItem } from "../../items/customItems/TextureItem";
import { DropdownPanel } from "../DropdownPanel";

export class SelectTexturePanel extends DropdownPanel {
	parent: TextureItem;

	options: Array<Object>;

	createPanelContent(): void {

		this.createAddTexture();
		super.createPanelContent();

	}

	createAddTexture(): void {

		const add = el('div', CSS_UI.panel.button);
		const p = el('p');
		p.innerHTML = 'Add Texture';
		add.appendChild(p);
		this.dom.el.appendChild(add);

		add.addEventListener('click', (e) => {
			e.stopPropagation();
			this.parent.createFloating();
			this.parent.destroyDropdown();
		});

	}
}