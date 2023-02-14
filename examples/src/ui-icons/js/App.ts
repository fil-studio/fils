import * as uiIcons from '@fils/ui-icons';
import { el, copyToClipboard } from '@fils/utils';

export class App {
	wrapper: HTMLElement;
	elements: HTMLElement[] = [];
	constructor() {
		console.log('App', uiIcons);

		const toggle = el('button', 'toggle');
		toggle.innerText = 'Toggle Titles';
		toggle.addEventListener('click', () => {
			document.body.classList.toggle('hide-titles');
		});
		document.body.appendChild(toggle);
		document.body.classList.add('hide-titles');

		this.wrapper = el('div', 'wrapper');
		document.body.appendChild(this.wrapper);

		for(const [key, value] of Object.entries(uiIcons)) this.createIcon(key, value);

		this.addEventListeners();
	}

	createIcon(k, v) {

		const icon = el('div', 'icon');
		icon.innerHTML = v;
		icon.setAttribute('data-name', k);
		const t = el('h3');
		t.innerText = k;
		icon.appendChild(t);

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