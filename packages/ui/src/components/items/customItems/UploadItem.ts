import { el, remove } from '@fils/utils';
import { uiRemove } from '@fils/ui-icons';
import { CSS_UI } from "../../../partials/cssClasses";
import dom from "../../../utils/dom";
import { Item } from '../Item';
import { UploadItemParameters } from "../ItemParameters";


export class UploadItem extends Item {
	params: UploadItemParameters;

	protected buttonTitle: string = '';

	protected uploadButton: HTMLElement = el('div');
	protected removeUploadButton: HTMLElement = el('div')
	protected input: HTMLInputElement = el('input') as HTMLInputElement;

	protected addEventListeners(): void {

		this.uploadButton.addEventListener('click', () => {
			this.input.click();
		});

		this.input.addEventListener('change', () => {
			const file = this.input && this.input.files && this.input.files[0] ? this.input.files[0] : null;
			if(!file) return;

			this.removeUploadButton.querySelector('h3')!.innerText = file.name;
			this.removeUploadButton.classList.remove(`${CSS_UI.utility.hidden}`);
			this.uploadButton.classList.add(`${CSS_UI.utility.hidden}`);
			this.setValue(file);
		});

		this.removeUploadButton.addEventListener('click', () => {
			this.removeUploadButton.classList.add(`${CSS_UI.utility.hidden}`);
			this.uploadButton.classList.remove(`${CSS_UI.utility.hidden}`);
			this.setValue(null);
		});

	}

	destroy(): void {
		remove(this.input);
		remove(this.uploadButton);
		remove(this.removeUploadButton);
		super.destroy();
	}


	protected createContent(): void {

		this.buttonTitle = this.params.text ? this.params.text : this.title;


		this.uploadButton = dom.createButton(this.buttonTitle, this.params.icon);
		this.uploadButton.classList.add(CSS_UI.item);
		this.content.appendChild(this.uploadButton);

		this.removeUploadButton = dom.createButton('', uiRemove);
		this.removeUploadButton.classList.add(CSS_UI.utility.hidden);
		this.removeUploadButton.classList.add(CSS_UI.item);
		this.content.appendChild(this.removeUploadButton);

		this.el.classList.add(CSS_UI.row.vertical);

		this.input = document.createElement('input');
		this.input.type = 'file';
		this.input.style.display = 'none';
		if(this.params.accept) this.input.setAttribute('accept', this.params.accept);
		this.input.classList.add(CSS_UI.item)
		this.content.appendChild(this.input);


	}
}