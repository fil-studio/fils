import { el } from '@fils/utils';
import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from '../../../partials/cssClasses';
import check from "../../../utils/check";
import { SelectPanel } from '../../panels/customPanels/SelectPanel';
import { ExtendedItem } from "../ExtendedItem";
import { DropdownOptions } from "../ItemOptions";

CSS_UI.items.push({
	type: 'select',
	input: '_ui-select-input',
	open: '_ui-select-open',
	panel: '_ui-panel-select'
});
const c = CSS_UI.getItemClasses('select');

export class SelectItem extends ExtendedItem {
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

	setValue(_value: any): void {
		let value = _value;

		// If it's null set it to the first option
		if(check.isNull(value) || check.isUndefined(value)) {
			value = check.isArray(this.options.options) ? this.options.options[0] : this.options.options[Object.keys(this.options.options)[0]];
		}

		super.setValue(value);
	}

	afterCreate(): void {
		this.setValue(this.value);
	}

	refresh(): void {
		this.activeOption.querySelector('p').innerText = this.value;
		super.refresh();
	}
}