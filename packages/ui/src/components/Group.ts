import { EventsHandler } from "../core/Events";
import { UI } from "../main";
import dom, { RowTypes } from "../utils/dom";
import { Button, ButtonOptions } from "./Button";
import { Item, ItemOptions } from "./Item";
import { ItemFactory } from "./ItemFactory";

export interface GroupParams {
	parent?: Group | UI;
	title?: string;
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
	contentWrapper: HTMLElement;
	depth: number = 0;

	constructor({
		parent,
		title,
	}: GroupParams = {}) {
		super(parent);

		this.parent = parent;
		this.title = title || '';
		this.depth = this.parent?.depth + 1 || this.depth;

		this.dom = dom.createRow({
			type: RowTypes.group,
			depth: this.depth,
			title: this.title,
		});

		this.contentWrapper = this.dom.querySelector('div');
	}

	/**
	 * Enables listeners, add children to childrens array
	 */
	addChild(child: Group | Item | Button){
		this.children.push(child);
		this.addChildrenListener(child);
		this.contentWrapper.appendChild(child.dom);
	}

	destroy(): void {
		for(const child of this.children) child.destroy();
		this.dom.remove();
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
	}: GroupParams = {}): Group {
		const group = new Group({ parent: this, title });

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