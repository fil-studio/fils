import { el } from '@fils/utils';
import { uiDownarrowHlt } from '../../../../../ui-icons/lib/Icons';
import { CSS_UI } from '../../../partials/cssClasses';
import { Panel } from '../../panels/Panel';
import { Item } from '../Item';

CSS_UI.items.push({
	type: 'select',
	input: '_ui-select-input',
	label: '_ui-select-label',
	open: '_ui-select-open',
	panel: '_ui-panel-select'
});
const c = CSS_UI.getItemClasses('select');

export class SelectPanel extends Panel {
	domOptions: Array<HTMLElement> = [];

	// createPanelContent(): void {

	// 	this.options = this.parent.options.options as Array<Object>;
	// 	this.createSearch();
	// 	this.createOptions();

	// 	this.addEventListeners();

	// }

	// createSearch(): void {

	// 	const search = el('div', CSS_UI.panel.search);
	// 	const p = el('p');
	// 	p.innerHTML = 'Search';
	// 	search.appendChild(p);
	// 	this.dom.el.appendChild(search);

	// 	if(this.options.length < 10) {
	// 		search.classList.add(`.${CSS_UI.utility.hidden}`);
	// 	}

	// }

	// createOption(_value: Object | string | Array<any>): void {

	// 	const option = el('div', CSS_UI.panel.option);
	// 	const p = el('p');
	// 	p.innerHTML = this.parent.getLabel(_value);
	// 	option.appendChild(p);

	// 	this.dom.el.appendChild(option);
	// 	this.dom.options.push(option);
	// }

	// private createOptions(): void {

	// 	for(let i = 0; i < this.options.length; i++) {
	// 		this.createOption(this.options[i]);
	// 	}

	// }

}
export class SelectItem extends Item {
	panel: SelectPanel;
	options: Array<any> | Object;

	input: HTMLElement;
	label: HTMLElement;

	protected activeOption: HTMLElement;

	afterCreate(): void {
		this.panel = new SelectPanel(this);
	}

	protected addEventListeners(): void {
		super.addEventListeners();

		this.input.addEventListener('click', () => {
			if(this.panel.created) this.dom.el.classList.remove(c.open);
			else this.dom.el.classList.add(c.open);
		});
	}

	protected createContent(): void {

		this.input = el('div', c.input, this.dom.content) as HTMLElement;
		this.input.innerHTML = uiDownarrowHlt;
		this.label = el('p', c.label, this.input);

	}

	setValue(value: any): void {
		this.label.innerHTML = value ? value : 'Select...';
		super.setValue(value);
	}
}