import { UI } from "../../main";
import { TextureItem } from "../customItems/TexureItem";
import { InputController } from "./InputController";

export class TextureList extends InputController {
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

		this.dom.classList.add('texture-list');

		this.ui = new UI({
			embed: this.dom,
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