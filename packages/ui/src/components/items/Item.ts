
import { isObject, isUndefined } from '@fils/utils';
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
	view:string = '';

	protected _refreshing:boolean = false;

	constructor(params: CreateItemParams) {
		const title = params.params?.title || params.key.charAt(0).toUpperCase() + params.key.slice(1);
		super(RowTypes.item, title);

		this.params = params.params as ItemParameters;
		this.view = this.params?.view || '';

		this.object = params.object;
		this.key = params.key as keyof Object;
	}

	init(depth:number = 0): void {
		super.init(depth)
		this._refreshing = true;
		this.setValue(this.object[this.key]);
		this._refreshing = false;
	}

	setValue(value: any) {
		this.value = value;

		if (isObject(this.object[this.key])) {
			for(const key in this.object[this.key]) {
				// If the key is not defined in the new value, we keep the old one
				if(isUndefined(this.value[key])) continue;
				else this.object[this.key][key] = this.value[key];
			}
		} else this.object[this.key] = this.value;

		if(this.value !== undefined && !this._refreshing) {
			this.emit('__childrenChange');
			this.emit('change');
		}

		this.refreshDom();
	}

	/**
	 * Dom
	 */
	protected createDom() {
		super.createDom();

		this.content = this.el.querySelector(`.${CSS_UI.content}`) as HTMLElement;

		this.el.classList.add(`${CSS_UI.baseClass}-${this.view}`);
	}

	refreshDom() {}

	refresh(): void {
		this.emit('refresh');
		this._refreshing = true;
		this.setValue(this.object[this.key]);
		this._refreshing = false;
	}

}