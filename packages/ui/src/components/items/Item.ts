
import { ITEM_CLASS } from '../../core/globals';
import { UIElement } from '../../core/UIElement';
import { Group } from '../Group';

export class Item extends UIElement {

	initialValue: number | string | boolean | Array<any> | Object;
	value: number | string | boolean | Array<any> | Object;
	updated: boolean = false;

	constructor(parent: Group) {
		super(parent);
		this.dom.classList.add(ITEM_CLASS);
	}
}