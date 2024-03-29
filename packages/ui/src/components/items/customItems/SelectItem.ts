import { uiDownarrowHlt } from '@fils/ui-icons';
import { el, isNull, isUndefined } from '@fils/utils';
import { CSS_UI } from '../../../partials/cssClasses';
import { UIPanel} from '../../UIPanel';
import { Item } from '../Item';
import { SelectItemParameters } from '../ItemParameters';
import { UIEventListener } from '../../../main';

const c = {
	type: 'select',
	input: '_ui-select-input',
	label: '_ui-select-label',
	open: '_ui-select-open',

	search: '_ui-panel-select-search',
	searchInput: '_ui-panel-select-search-input',
};
export class SelectPanel extends UIPanel<SelectItem> {
	parent: SelectItem;

	enableSearch: boolean = false;
	search: HTMLElement = el('div');
	searchInput: HTMLInputElement = el('input') as HTMLInputElement;
	optionNone: HTMLElement = el('div');

	options: Array<{
		key: string;
		value: any;
		dom: HTMLElement;
	}> = [];

	sortOptions(){

		const parentContent = this.parent.params.options;

		this.options = Object.keys(parentContent).map((key) => {

			// Create option
			const div = el('div', CSS_UI.select.option);
			const p = el('p');
			p.innerHTML = key;
			div.appendChild(p);
			this.el.appendChild(div);

			const value = (parentContent as Record<string, unknown>)[key];

			// Hide selected option
			if (this.parent.value === value) div.classList.add(CSS_UI.utility.active);

			// Add event listener
			const click:UIEventListener = {
				target: div,
				type: 'click',
				callback: (e) => {
					this.parent.setValue(value);
					this.parent.close();
				}
			}
			this.addEventListener(click);

			return {
				key,
				value,
				dom: div,
			}
		});

	}

	createPanelContent(): void {

		if(this.enableSearch) this.createSearch();

		this.sortOptions();

		this.el.classList.add(CSS_UI.select.panel);

		// Empty options message
		this.optionNone = el('div', CSS_UI.select.optionNone);
		const p = el('p');
		p.innerHTML = 'No options found';
		this.optionNone.appendChild(p);
		this.el.appendChild(this.optionNone);
		if(this.options.length > 0) this.optionNone.classList.add(CSS_UI.utility.hidden);

		setTimeout(() => this.searchInput.focus(), 10);


	}

	searchOptions(): void {
		const search = this.searchInput.value.toLowerCase();

		this.optionNone.classList.remove(CSS_UI.utility.hidden);

		this.options.map(option => {
			if (option.key.toLowerCase().indexOf(search) >= 0 || String(option.value).toLowerCase().indexOf(search) >= 0 || search === '') {
				option.dom.classList.remove(CSS_UI.utility.hidden);
				this.optionNone.classList.add(CSS_UI.utility.hidden);
			} else {
				option.dom.classList.add(CSS_UI.utility.hidden);
			}
		});

	}

	createSearch(): void {

		this.search = el('div', c.search, this.el);
		this.search.classList.add(CSS_UI.select.optionButton);
		this.searchInput = el('input', c.searchInput ) as HTMLInputElement;
		this.searchInput.setAttribute('tabindex', '1');
		this.searchInput.placeholder = 'Search';
		this.searchInput.type = 'text';
		this.search.appendChild(this.searchInput);

		this.el.appendChild(this.search);

		const input:UIEventListener = {
			target: this.searchInput,
			type: 'input',
			callback: (e) => {
				this.searchOptions();
			}
		}
		this.addEventListener(input);

	}
}
export class SelectItem extends Item  {
	params!: SelectItemParameters;

	panel: SelectPanel;
	options: Object = {};

	input: HTMLElement = el('div');
	label: HTMLElement = el('div');

	protected activeOption: HTMLElement = el('div');

	afterCreate(): void {
		this.panel = new SelectPanel(this, this.content);
	}

	addEventListeners(): void {
		const click:UIEventListener = {
			target: this.input,
			type: 'click',
			callback: () => {
				if (!this.panel.created) this.open();
				else this.close();
			}
		}
		this.addEventListener(click);

	}

	open() {
		this.panel.create();
		this.el.classList.add(c.open);
	}

	close() {
		this.el.classList.remove(c.open);
		this.panel.destroy();
	}

	protected createContent(): void {

		this.input = el('div', c.input, this.content) as HTMLElement;
		this.input.classList.add(CSS_UI.item);
		this.input.innerHTML = uiDownarrowHlt;
		this.label = el('p', c.label, this.input);

	}

	setValue(value: any): void {

		function findKeyByValue(obj, value) {
			for (let key in obj) {
				if (obj[key] === value) {
					return key;
				}
			}
			return null;
		}

		const label = findKeyByValue(this.params.options, value);

		this.label.innerHTML = isNull(value) || isUndefined(value) ? 'Select...' : label;

		super.setValue(value);
	}
}