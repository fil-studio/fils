
import { EventsHandler } from '../core/Events';
import dom, { RowTypes } from '../utils/dom';
import { Group } from './Group';

export interface ItemOptions {
	title?: string;
	view?: string,
	onChangeCallback?: Function;
}

export interface ItemParams {
	object?: Object;
	key?: string;
	parent?: Group;
}

export class Item extends EventsHandler {

	dom: HTMLElement;
	protected inputWrapper: HTMLElement;

	protected parent: Group;
	protected depth: number;

	title: string;

	protected object: Object;
	protected key: string;

	value: any;

	protected created: boolean = false;

	private onChangeCallback: Function;

	constructor({ parent, object, key }: ItemParams = {}, options?: ItemOptions) {
		super(parent);

		if(!parent) throw new Error('Item - parent is required');
		if(!object) throw new Error('Item - object is required');
		if(!key) throw new Error('Item - key is required');

		this.depth = parent.depth + 1;

		this.object = object;
		this.key = key;

		this.title = options?.title || key;
		this.onChangeCallback = options?.onChangeCallback || function(e?:CustomEvent){
			console.log('Item - onChangeCallback:', e);
		}
		this.dom = dom.createRow({
			type: RowTypes.item,
			depth: this.depth,
			title: this.title,
		})

		this.inputWrapper = this.dom.querySelector('div');
	}

	setValue(value: any) {
		this.value = value;
		if(this.created) this.refresh();
	}

	destroy(): void {
		this.dom.remove();
	}

	protected createDom() {
		// Override this method
	}

	protected addEventListeners(): void {
		// Override this method
	}

	onChange(e?:CustomEvent): void {
		console.log('Item - onChange:', this.title);
		this.onChangeCallback(e);
 	}

	/**
	 * Refresh item dom
	 */
	refresh() {
		console.log('Item - refresh:', this.title);
		this.object[this.key] = this.value;
		this.__onChange();
	}
}