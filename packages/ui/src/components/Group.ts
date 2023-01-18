import { ALL_CLASS, GROUP_CLASS, TAB_CLASS, TITLE_CLASS } from "../core/globals";
import { UI } from "../main";
import { EventsHandler } from "../core/Events";
import { Item, ItemOptions, ItemParams } from "./items/Item";
import ItemFactory from "./ItemFactory";

export interface GroupParams {
	parent?: Group | UI;
	title?: string;
	foldable?: boolean;
	folded?: boolean;
}

export class Group extends EventsHandler {
	title: string;
	parent: Group | UI;
	children: Array<Group | Item> = [];
	dom: HTMLElement;

	foldable: boolean;
	folded: boolean;

	constructor({
		parent,
		title,
		foldable,
		folded
	}: GroupParams = {}) {
		super(parent);

		this.parent = parent;
		this.title = title;
		this.foldable = foldable || true;
		this.folded = folded || false;

		this.createDom();
		this.createTab();
	}

	createDom() {

		this.dom = document.createElement('div');
		this.dom.classList.add(ALL_CLASS)

		if(this.parent){
			this.parent.dom.appendChild(this.dom);
			this.dom.classList.add(GROUP_CLASS);
		}

	}

	createTab() {
		if(!this.title && !this.foldable) return;

		const tab = document.createElement('div');
		tab.classList.add(TAB_CLASS)

		if(this.title){
			const title = document.createElement('h3');
			title.innerText = this.title;
			tab.classList.add(TITLE_CLASS);
			tab.appendChild(title);
		}

		this.dom.appendChild(tab);
	}

	addGroup({
		title,
		foldable,
		folded
	}: GroupParams = {}): Group {
		const group = new Group({ parent: this, title, foldable, folded });
		this.children.push(group);
		this.addChildrenListener(group);
		this.dom.appendChild(group.dom);
		return group;
	}

	add(object, key, options?: ItemOptions){
		this.addItem(object, key, options);
	}
	addItem(object, key, options?: ItemOptions) {
		const item = ItemFactory({parent: this, object, key}, options);
		this.children.push(item);
		this.addChildrenListener(item);
		this.dom.appendChild(item.dom);
	}
}