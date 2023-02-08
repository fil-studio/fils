import { el } from '@fils/utils';
import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from '../../../partials/cssClasses';
import check from "../../../utils/check";
import { SelectPanel } from '../../panels/__customPanels/__SelectPanel';
import { Item } from '../Item';
import { DropdownOptions } from "../ItemParameters";

CSS_UI.items.push({
	type: 'select',
	input: '_ui-select-input',
	open: '_ui-select-open',
	panel: '_ui-panel-select'
});
const c = CSS_UI.getItemClasses('select');

export class SelectItem extends Item {
	panel: SelectPanel;
	options: DropdownOptions;

	protected activeOption: HTMLElement;

	beforeCreate(): void {
		this.panel = new SelectPanel(this);
	}

	protected addEventListeners(): void {

		window.addEventListener('click', (e) => {

			if(!this.panel.created) return;

			const target = e.target as HTMLElement;
			if(this.panel.dom.el?.contains(target)) return;

			this.destroyPanel();
		});

		this.activeOption.addEventListener('click', (e) => {
			if(this.panel.created) return;

			e.stopPropagation();

			this.dom.el.classList.add(c.open);
			this.panel.create(this.dom);
		});

	}

	onResize(e?: CustomEvent<any>): void {
		this.destroyPanel();
	}

	destroyPanel(): void {
		this.dom.el.classList.remove(c.open);
		this.panel.destroy();
	}

	protected createDom(): void {

		const input = el('div', c.input);
		const p = el('p');
		input.innerHTML = uiDownarrowHlt;
		input.appendChild(p);
		this.dom.content.appendChild(input);
		this.activeOption = this.dom.content.querySelector(`.${c.input}`);
	}

	getLabel(value: Object | string | Array<any>): string {

		// Is string or number
		let label = check.isNull(value) || check.isUndefined(value) ? 'Empty' : value as string;
		if (check.isArray(value)) {
			label = value[0];
		}
		if (check.isObject(value)) {
			label = value[this.options.optionLabel ? this.options.optionLabel : Object.keys(value)[0]];
		}

		return label as string;
	}

	afterCreate(): void {
		this.setValue(this.value);
	}

	refresh(): void {
		console.log('refresh', this.getLabel(this.value));

		this.activeOption.querySelector('p').innerText = this.getLabel(this.value);
		super.refresh();
	}
}