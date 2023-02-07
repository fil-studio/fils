import { uiTexture } from "../../../../../ui-icons/lib/Icons";
import { TextureItem } from "../../items/customItems/TextureItem";
import { UI } from "../../UI";
import { FloatingPanel } from "../FloatingPanel";

export class NewTexturePanel extends FloatingPanel {
	parent: TextureItem;

	ui: UI;
	createPanelContent() {

		const newTexture = {
			name: '',
			type: null
		}

		const typeOptions = [
			{ name: 'Color', value: 'color' },
			{ name: 'Cube', value: 'cube' },
			{ name: 'Equirectangular', value: 'equirectangular' },
			{ name: 'HDRI', value: 'hdri' },
		];

		this.ui = new UI({
			title: 'New Texture',
			icon: uiTexture,
			embed: this.dom.el as HTMLElement,
		});

		this.ui.addItem(newTexture, 'name', {
			view: 'string',
		});

		this.ui.addItem(newTexture, 'type', {
			view: 'select',
			options: typeOptions,
			optionLabel: 'name',
		});

		this.ui.addSpacer({
			size: 'small',
			line: false
		})

		this.ui.addButton({
			title: 'Save',
		}).on('click', () => {
			console.log('Save!');
		})

		this.ui.addButton({
			title: 'Cancel',
		}).on('click', () => {
			console.log(':C');
			this.ui.destroy();
			this.parent.destroyFloating();
		})





	}


}