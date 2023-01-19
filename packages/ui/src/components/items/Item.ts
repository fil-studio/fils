
import { EventsHandler } from '../../core/Events';
import dom, { RowTypes } from '../../utils/dom';
import { Group } from '../Group';

export interface ItemOptions {
	title?: string;
}

export interface ItemParams {
	object?: Object;
	key?: string;
	parent?: Group;
}

export class Item extends EventsHandler {
	dom: HTMLElement;
	parent: Group;

	title: string;

	object: Object;
	key: string;

	value: boolean | number | string;

	options: ItemOptions;

	constructor({ parent, object, key }: ItemParams = {}, options?: ItemOptions) {
		super(parent);

		if(!parent) throw new Error('Item - parent is required');
		if(!object) throw new Error('Item - object is required');
		if(!key) throw new Error('Item - key is required');

		this.object = object;
		this.key = key;
		this.value = this.object[this.key];

		this.options = options;
		this.title = this.options?.title || key;

		this.dom = dom.createRow(RowTypes.item, {
			title: this.title,
		})

		this.createDom();
		this.addEventListeners();
	}

	createDom() {
		// Override this method
	}

	addEventListeners(): void {
		// Override this method
	}

	onChange(): void {
		console.log('Item - onChange');
	}

	/**
	 * Refresh item dom
	 */
	refresh() {
		console.log('Item - refresh');
		this.object[this.key] = this.value;
		this.refreshDom();
	}
	refreshDom(){
		// Override this method
	}
}