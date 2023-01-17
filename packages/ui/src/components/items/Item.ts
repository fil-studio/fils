
import { ITEM_CLASS } from '../../core/globals';
import { Group } from '../Group';

export class Item  {
	dom: HTMLElement;
	parent: Group;

	initialValue: number | string | boolean | Array<any> | Object;
	value: number | string | boolean | Array<any> | Object;
	updated: boolean = false;

	constructor({parent}:{parent?: Group} = {}) {
		this.dom = document.createElement('div');
		this.dom.classList.add(ITEM_CLASS);
		this.parent = parent;
		this.parent.dom.appendChild(this.dom);
	}
}