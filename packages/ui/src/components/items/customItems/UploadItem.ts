import { uiRemove } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from "../../../partials/cssClasses";
import dom from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { UploadItemOptions } from "../ItemOptions";


export class UploadItem extends ExtendedItem {
	protected options: UploadItemOptions;

	protected buttonTitle: string;

	protected uploadButton: HTMLElement;
	protected removeUploadButton: HTMLElement;
	protected input: HTMLInputElement;

	protected addEventListeners(): void {

		this.uploadButton.addEventListener('click', () => {
			this.input.click();
		});

		this.input.addEventListener('change', (e) => {
			const file = (e.target as HTMLInputElement).files[0];
			if(!file) return;

			this.removeUploadButton.querySelector('h3').innerHTML = file.name;
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

	protected createDom(): void {

		this.buttonTitle = this.options.text ? this.options.text : this.title;

		this.uploadButton = dom.createButton(this.buttonTitle, this.options.icon);
		this.inputWrapper.appendChild(this.uploadButton);

		this.removeUploadButton = dom.createButton('', uiRemove);
		this.removeUploadButton.classList.add(`${CSS_UI.utility.hidden}`);
		this.inputWrapper.appendChild(this.removeUploadButton);

		this.dom.classList.add(CSS_UI.row.vertical);

		this.input = document.createElement('input');
		this.input.type = 'file';
		this.input.style.display = 'none';
		this.inputWrapper.appendChild(this.input);


	}
}