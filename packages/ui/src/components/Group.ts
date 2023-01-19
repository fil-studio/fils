import { EventsHandler } from "../core/Events";
import { UI } from "../main";
import dom, { RowTypes } from "../utils/dom";
import { Button, ButtonOptions } from "./Button";
import ItemFactory from "./ItemFactory";
import { Item, ItemOptions } from "./items/Item";

export interface GroupParams {
	parent?: Group | UI;
	title?: string;
	foldable?: boolean;
	folded?: boolean;
}

interface HasChildren {
	children: Array<Group | Item | Button>;
	addChild(child: Group | Item | Button): void;
	addButton(options?: ButtonOptions): void;
	addGroup(options?: GroupParams): Group;
	add(object, key, options?: ItemOptions): void;
	addItem(object, key, options?: ItemOptions): void;
}


export class Group extends EventsHandler implements HasChildren {
	title: string;
	parent: Group | UI;
	children: Array<Group | Item | Button> = [];
	dom: HTMLElement;

	constructor({
		parent,
		title,
		foldable,
		folded
	}: GroupParams = {}) {
		super(parent);

		this.parent = parent;
		this.title = title || '';

		this.dom = dom.createRow(RowTypes.group, {
			title: this.title,
			foldable: foldable || true,
			folded: folded || false
		});
	}

	/**
	 * Enables listeners, add children to childrens array
	 */
	addChild(child: Group | Item | Button){
		this.children.push(child);
		this.addChildrenListener(child);
		this.dom.appendChild(child.dom);
	}

	/**
	 * Create a button
	 */
	addButton(options){
		const button = new Button(this, options);
		this.addChild(button);
	}

	/**
	 * Create a group
	 */
	addGroup({
		title,
		foldable,
		folded
	}: GroupParams = {}): Group {
		const group = new Group({ parent: this, title, foldable, folded });

		this.addChild(group);

		return group;
	}

	/**
	 * Create an item
	 */
	add(object, key, options?: ItemOptions){
		this.addItem(object, key, options);
	}
	addItem(object, key, options?: ItemOptions) {
		const item = ItemFactory({parent: this, object, key}, options);
		this.addChild(item);
	}
}