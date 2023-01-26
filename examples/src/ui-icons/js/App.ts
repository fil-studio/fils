import * as uiIcons from '../../../../packages/ui-icons/lib/Icons';
import { el, copyToClipboard } from '../../../../packages/utils/lib/main';

export class App {
	wrapper: HTMLElement;
	elements: HTMLElement[] = [];
	constructor() {
		console.log('App', uiIcons);


		this.wrapper = el('div', 'wrapper');
		document.body.appendChild(this.wrapper);

		for(const [key, value] of Object.entries(uiIcons)) this.createIcon(key, value);

		this.addEventListeners();
	}

	createIcon(k, v) {

		const icon = el('div', 'icon');
		icon.innerHTML = v;
		icon.setAttribute('data-name', k);

		this.wrapper.appendChild(icon);
		this.elements.push(icon);

	}

	addEventListeners() {

		for(const element of this.elements){
			element.addEventListener('click', (e) => {
				const target = e.target as HTMLElement;
				const name = target.getAttribute('data-name') as string;
				copyToClipboard(name);

				console.log('copied', name);

				element.classList.add('copied');
				setTimeout(() => {
					element.classList.remove('copied');
				}, 1000);
			});
		}


	}
}