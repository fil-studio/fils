import { GROUP_CLASS } from "../core/globals";
import { UIElement } from "../core/UIElement";
import { Item } from "./items/Item";


export class Group extends UIElement {
	parent: Group | null;
	children: Array<Group | Item> = [];

	constructor(parent: Group | null) {
		super(parent);
		if(parent) this.dom.classList.add(GROUP_CLASS);
	}

	addGroup():Group {
		const group = new Group(this);
		this.children.push(group);
		return group;
	}

	addItem() {
		const item = new Item(this);
		this.children.push(item);
	}
}