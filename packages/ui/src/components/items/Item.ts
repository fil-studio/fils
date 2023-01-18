
import { ITEM_CLASS } from '../../core/globals';
import { EventsListener } from '../Events';
import { Group } from '../Group';

export class Item extends EventsListener {
	dom: HTMLElement;
	parent: Group;

	constructor({parent}:{parent?: Group} = {}) {
		super();
		this.dom = document.createElement('div');
		this.dom.classList.add(ITEM_CLASS);
		this.parent = parent;
		this.parent.dom.appendChild(this.dom);


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

	}
}