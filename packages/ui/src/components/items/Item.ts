
import { CSS_UI } from '../../partials/cssClasses';
import { CreateItemParams } from '../../partials/ItemFactory';
import { RowTypes } from '../../utils/dom';
import { UIElement } from '../UIElement';
import { ItemParameters } from './ItemParameters';
export class Item extends UIElement {

	content!:HTMLElement;

	protected object!: Object;
	protected key!: keyof Object;
	value!: any;

	params!: ItemParameters;

	constructor(params: CreateItemParams) {
		const title = params.params?.title || params.key.charAt(0).toUpperCase() + params.key.slice(1);
		super(RowTypes.item, title);

		this.params = params.params as ItemParameters;

		this.object = params.object;
		this.key = params.key as keyof Object;
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

		this.content = this.el.querySelector('div') as HTMLElement;

		this.el.classList.add(`${CSS_UI.baseClass}-${this.params.view}`);
	}

	refreshDom() {
		this.emit('__childrenChange');
		this.emit('change');
	}

}