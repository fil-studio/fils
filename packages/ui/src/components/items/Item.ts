
import { ALL_CLASS, ITEM_CLASS } from '../../core/globals';
import { EventsHandler } from '../Events';
import { Group } from '../Group';

export class Item extends EventsHandler {
	dom: HTMLElement;
	parent: Group;

	constructor({parent}:{parent?: Group} = {}) {
		super(parent);
		this.dom = document.createElement('div');
		this.dom.classList.add(ALL_CLASS)
		this.dom.classList.add(ITEM_CLASS);
		this.parent = parent;
		this.parent.dom.appendChild(this.dom);
		this.addParentListener(this.parent)


		// For testing purposes
		this.dom.addEventListener('click', () => {
			this.__onChange();

			setTimeout(() => {
				this.__onChangeComplete();
			}, 1000);
		})
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