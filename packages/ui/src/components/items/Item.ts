
import { ALL_CLASS, ITEM_CLASS, ITEM_TITLE_CLASS } from '../../core/globals';
import { EventsHandler } from '../../core/Events';
import { Group } from '../Group';

export interface ItemOptions {
	title?: string;
}

export interface ItemParams {
	object?: any;
	key?: string;
	parent?: Group;
}

export class Item extends EventsHandler {
	dom: HTMLElement;
	parent: Group;

	title: string;

	constructor({ parent, object, key }: ItemParams = {}, options?: ItemOptions) {
		super(parent);

		if(!parent) throw new Error('Item - parent is required');
		if(!object) throw new Error('Item - object is required');
		if(!key) throw new Error('Item - key is required');

		this.title = options?.title || key;
		console.log(this.title);


		this.createDom();
	}

	createDom(){

		// Create basic structure
		this.dom = document.createElement('div');
		this.dom.classList.add(ALL_CLASS)
		this.dom.classList.add(ITEM_CLASS);

		if(this.title){
			const titleWrapper = document.createElement('div');
			titleWrapper.classList.add(ITEM_TITLE_CLASS);
			const title = document.createElement('h3');
			title.innerText = this.title;
			titleWrapper.appendChild(title);
			this.dom.appendChild(titleWrapper);
		}
	}

	onChange(): void {
		console.log('Item - onChange');
	}

	/**
	 * Refresh item dom
	 */
	refresh() {
		console.log('Item - refresh');

	}
}