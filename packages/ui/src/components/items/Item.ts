
import { ALL_CLASS, ITEM_CLASS } from '../../core/globals';
import { EventsHandler } from '../Events';
import { Group } from '../Group';

export class Item extends EventsHandler {
	dom: HTMLElement;
	parent: Group;

	constructor({parent}:{parent?: Group} = {}) {
		super(parent);
		this.createDom();
	}

	createDom(){
		this.dom = document.createElement('div');
		this.dom.classList.add(ALL_CLASS)
		this.dom.classList.add(ITEM_CLASS);
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