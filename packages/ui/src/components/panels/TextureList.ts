import { UI } from "../../main";
import { TextureItem } from "../items/customItems/TextureItem";
import { Panel } from "../Panel";

export class TextureList extends Panel {
	parent: TextureItem;
	ui: UI;

	addEventListeners(): void {
		super.addEventListeners();

		this.parent.emptyButton.addEventListener('click', () => {
			this.create();
		});
	}

	create(): void {
		if(this.created) return;
		super.create();
		console.log('TextureList - create');

		this.dom.el.classList.add('texture-list');

		this.ui = new UI({
			embed: this.dom.el,
			title: 'Texture List',
		});
		const g1 = this.ui.addGroup({
			title: 'Group 1',
		})
		g1.add(this.parent, 'test', {
			view: 'string',
		})
		g1.add(this.parent, 'test2', {
			view: 'number',
		})
	}

	destroy(): void {
		super.destroy();
		this.ui.destroy();
	}
}