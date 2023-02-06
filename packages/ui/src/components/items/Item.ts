
import { EventsManager } from '../../partials/EventsManager';
import dom, { RowTypes } from '../../utils/dom';
import { Group } from '../Group';
import { ItemOptions } from './ItemOptions';

export interface ItemParams {
	object?: Object;
	key?: string;
	parent?: Group;
}

export interface Dom {
	el: HTMLElement
}

export interface ItemDom extends Dom {
	content: HTMLElement
}

export class Item extends EventsManager {

	dom: ItemDom;

	protected parent: Group;
	protected depth: number;

	title: string;

	protected object: Object;
	protected key: string;

	value: any;

	protected created: boolean = false;

	protected options: ItemOptions;

	constructor({ parent, object, key }: ItemParams = {}, options: ItemOptions) {
		super();

		if(!parent) throw new Error('Item - parent is required');
		if(!object) throw new Error('Item - object is required');
		if(!key) throw new Error('Item - key is required');

		this.options = options;

		this.depth = parent.depth + 1;

		this.object = object;
		this.key = key;

		this.title = this.options?.title || key;

		this.dom = {
			el: null,
			content: null,
		}

		this.dom.el = dom.createRow({
			type: RowTypes.item,
			depth: this.depth,
			title: this.title,
		})

		this.dom.content = this.dom.el.querySelector('div');
	}

	setValue(value: any) {
		this.value = value;
		if(this.created) this.refresh();
	}

	destroy(): void {
		this.dom.el.remove();
	}

	protected createDom() {
		// Override this method
	}

	protected addEventListeners(): void {
		// Override this method
	}

	afterCreate(): void {
		// Override this method
	}

	/**
	 * Refresh item dom
	 */
	refresh() {
		// console.log('Item - refresh:', this.title);
		this.object[this.key] = this.value;
		this.emit('change');
	}
}