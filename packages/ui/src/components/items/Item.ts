
import { slugify } from '@fils/utils';
import { CSS_UI } from '../../partials/cssClasses';
import { CreateItemParams } from '../../partials/ItemFactory';
import { RowTypes } from '../../utils/dom';
import { Dom, UIElement } from '../UIElement';
import { ItemParameters } from './ItemParameters';

export interface ItemDom extends Dom {
	content: HTMLElement
}

export class Item extends UIElement {

	dom: ItemDom;

	protected object: Object;
	protected key: string;
	value: any;

	params: ItemParameters;

	constructor(params: CreateItemParams) {
		const title = params.params?.title || params.key.charAt(0).toUpperCase() + params.key.slice(1);
		super(RowTypes.item, title);

		this.params = params.params;

		this.object = params.object;
		this.key = params.key;
	}

	init(depth:number = 0): void {
		super.init(depth)
		this.setValue(this.object[this.key]);
	}

	setValue(value: any) {
		this.value = value;
		this.object[this.key] = this.value;
		this.refreshDom();
	}

	/**
	 * Dom
	 */
	protected createDom() {
		super.createDom();
		this.dom = {
			...this.dom,
			content: null,
		}

		this.dom.content = this.dom.el.querySelector('div');

		this.dom.el.classList.add(`${CSS_UI.baseClass}-${slugify(this.params.view)}`);
	}

	refreshDom() {
		this.emit('__childrenChange');
		this.emit('change');
	}

}