import { EventsHandler } from "../core/Events";
import { UI } from "../main";
import dom, { FOLDABLE, RowTypes } from "../utils/dom";
import { Button, ButtonOptions } from "./Button";
import { Item, ItemOptions } from "./Item";
import { ItemFactory } from "./ItemFactory";

export interface GroupParams {
	parent?: Group | UI;
	title?: string;

	folded?: boolean;
	foldable?: boolean;
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

	folded: boolean;
	foldable: boolean;

	constructor({
		parent,
		title,
		folded = true,
		foldable = true
	}: GroupParams) {
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

		// Is it folded or not? If it's not foldable, it's not folded
		this.folded = foldable ? folded : false;
		this.foldable = foldable;
		this.addFoldListeners();
		this.foldHandler();


	}

	addFoldListeners(){
		if(!this.foldable) return;

		this.dom.classList.add(FOLDABLE);

		const header = this.dom.querySelector('header');
		header.style.cursor = 'pointer';
		header.addEventListener('click', () => {
			this.folded = !this.folded;
			this.foldHandler();
		});

		window.addEventListener('resize', () => {
			this.foldHandler();
		});

	}

	foldHandler(){
		if(!this.foldable) return;
		this.contentWrapper.style.height = 'auto';
		const r = this.contentWrapper.getBoundingClientRect();
		this.contentWrapper.style.setProperty('--ui-height', `${r.height}px`);
		if(this.folded) this.contentWrapper.style.height = '0px';
		else this.contentWrapper.style.height = 'var(--ui-height)';
	}

	/**
	 * Enables listeners, add children to childrens array
	 */
	addChild(child: Group | Item | Button){
		this.children.push(child);
		this.addChildrenListener(child);
		this.contentWrapper.appendChild(child.dom);
		this.foldHandler();
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