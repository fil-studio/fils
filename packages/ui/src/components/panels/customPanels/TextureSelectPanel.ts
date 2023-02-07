import { el } from "@fils/utils";
import { TextureItem } from "../../items/customItems/TextureItem";
import { DropdownPanel } from "../DropdownPanel";

export class TextureSelectPanel extends DropdownPanel {
	parent: TextureItem;

	options: Array<Object>;

	createPanelContent(): void {

		this.createAddTexture();
		super.createPanelContent();

	}

	createOption(value:object) {
		const option = el('p');
		option.innerHTML = value.name;
		this.dom.el.appendChild(option);
		this.dom.options.push(option);
	}

	createAddTexture(): void {

		const add = el('div', 'add');
		const p = el('p');
		p.innerHTML = 'Add Texture';
		add.appendChild(p);
		this.dom.el.appendChild(add);

		add.addEventListener('click', (e) => {
			e.stopPropagation();
			this.parent.addTexture();
			this.parent.destroyPanel();
		});

	}
}