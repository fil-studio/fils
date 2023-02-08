import { uiRemove } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from "../../../partials/cssClasses";
import dom from "../../../utils/dom";
import { Item } from '../Item';
import { UploadItemParameters } from "../ItemParameters";


export class UploadItem extends Item {
	params: UploadItemParameters;

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

			this.removeUploadButton.querySelector('h3').innerText = file.name;
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

	protected createContent(): void {

		this.buttonTitle = this.params.text ? this.params.text : this.title;

		this.uploadButton = dom.createButton(this.buttonTitle, this.params.icon);
		this.dom.content.appendChild(this.uploadButton);

		this.removeUploadButton = dom.createButton('', uiRemove);
		this.removeUploadButton.classList.add(`${CSS_UI.utility.hidden}`);
		this.dom.content.appendChild(this.removeUploadButton);

		this.dom.el.classList.add(CSS_UI.row.vertical);

		this.input = document.createElement('input');
		this.input.type = 'file';
		this.input.style.display = 'none';
		this.dom.content.appendChild(this.input);


	}
}