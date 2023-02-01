import dom, { BASE_CLASS, VERTICAL_ROW } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { UploadItemOptions } from "../ItemOptions";
import { uiRemove } from '../../../../../ui-icons/lib/Icons';


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
			this.removeUploadButton.classList.remove(`${BASE_CLASS}-hidden`);
			this.uploadButton.classList.add(`${BASE_CLASS}-hidden`);
			this.setValue(file);
		});

		this.removeUploadButton.addEventListener('click', () => {
			this.removeUploadButton.classList.add(`${BASE_CLASS}-hidden`);
			this.uploadButton.classList.remove(`${BASE_CLASS}-hidden`);
			this.setValue(null);
		});

	}

	protected createDom(): void {

		this.buttonTitle = this.options.text ? this.options.text : this.title;

		this.uploadButton = dom.createButton(this.buttonTitle, this.options.icon);
		this.inputWrapper.appendChild(this.uploadButton);

		this.removeUploadButton = dom.createButton('', uiRemove);
		this.removeUploadButton.classList.add(`${BASE_CLASS}-hidden`);
		this.inputWrapper.appendChild(this.removeUploadButton);

		this.dom.classList.add(VERTICAL_ROW);

		this.input = document.createElement('input');
		this.input.type = 'file';
		this.input.style.display = 'none';
		this.inputWrapper.appendChild(this.input);


	}
}