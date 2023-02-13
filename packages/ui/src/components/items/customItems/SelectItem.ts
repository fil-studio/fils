import { el } from '@fils/utils';
import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from '../../../partials/cssClasses';
import check from '../../../utils/check';
import { Panel } from '../../panels/Panel';
import { Item } from '../Item';
import { SelectItemParameters } from '../ItemParameters';

CSS_UI.items.push({
	type: 'select',
	input: '_ui-select-input',
	label: '_ui-select-label',
	open: '_ui-select-open',

	panel: '_ui-panel-select',
	option: '_ui-panel-select-option',
	search: '_ui-panel-select-search',
	optionNone: '_ui-panel-select-option-none',
	searchInput: '_ui-panel-select-search-input',
});
const c = CSS_UI.getItemClasses('select');

export class SelectPanel extends Panel {
	parent: SelectItem;

	search: HTMLElement;
	searchInput: HTMLInputElement;
	optionNone: HTMLElement;

	options: Array<{
		key: string;
		value: any;
		dom: HTMLElement;
	}> = [];

	addEventListeners(): void {
		super.addEventListeners();

		window.addEventListener('click', (e) => {
			if(!this.created) return;
			const t = e.target as HTMLElement;
			if (this.dom.el.contains(t)) return;
			if(this.parent.dom.el.contains(t)) return;

			this.destroy();
			this.parent.close();
		});

	}

	createPanelContent(): void {

		this.createSearch();

		const parentContent = this.parent.params.options;

		this.options = Object.keys(parentContent).map((key) => {

			// Create option
			const div = el('div', c.option);
			const p = el('p');
			p.innerHTML = key;
			div.appendChild(p);
			this.dom.el.appendChild(div);

			// Hide selected option
			if (this.parent.value === parentContent[key]) div.classList.add(CSS_UI.utility.hidden);

			// Add event listener
			div.addEventListener('click', () => {
				this.parent.setValue(parentContent[key]);
				this.destroy();
				this.parent.close();
			});

			return {
				key,
				value: parentContent[key],
				dom: div,
			}
		});

		// Empty options message
		this.optionNone = el('div', c.optionNone);
		const p = el('p');
		p.innerHTML = 'No options found';
		this.optionNone.appendChild(p);
		this.dom.el.appendChild(this.optionNone);
		this.optionNone.classList.add(CSS_UI.utility.hidden);

		setTimeout(() => this.searchInput.focus(), 10);

	}

	searchOptions(): void {
		const search = this.searchInput.value.toLowerCase();

		this.optionNone.classList.remove(CSS_UI.utility.hidden);

		this.options.map(option => {
			if (option.key.toLowerCase().includes(search) || String(option.value).toLowerCase().includes(search) || search === '') {
				option.dom.classList.remove(CSS_UI.utility.hidden);
				this.optionNone.classList.add(CSS_UI.utility.hidden);
			} else {
				option.dom.classList.add(CSS_UI.utility.hidden);
			}
		});

	}

	createSearch(): void {

		this.search = el('div', c.search, this.dom.el);
		this.searchInput = el('input', c.searchInput ) as HTMLInputElement;
		this.searchInput.placeholder = 'Search';
		this.searchInput.type = 'text';
		this.search.appendChild(this.searchInput);

		this.dom.el.appendChild(this.search);

		this.searchInput.addEventListener('input', () => {
			this.searchOptions();
		});

	}
}
export class SelectItem extends Item {
	params: SelectItemParameters;

	panel: SelectPanel;
	options: Object;

	input: HTMLElement;
	label: HTMLElement;

	protected activeOption: HTMLElement;

	afterCreate(): void {
		this.panel = new SelectPanel(this);

	}

	protected addEventListeners(): void {
		super.addEventListeners();

		this.input.addEventListener('click', () => {

			if(!this.panel.created) {
				this.panel.create();
				this.open();
			} else {
				this.panel.destroy();
				this.close();
			}
		});
	}

	open() {
		this.dom.el.classList.add(c.open);
	}

	close() {
		this.dom.el.classList.remove(c.open);
	}

	protected createContent(): void {

		this.input = el('div', c.input, this.dom.content) as HTMLElement;
		this.input.innerHTML = uiDownarrowHlt;
		this.label = el('p', c.label, this.input);

	}

	setValue(value: any): void {
		this.label.innerHTML = check.isNull(value) || check.isUndefined(value) ? 'Select...' : value;
		super.setValue(value);
	}
}