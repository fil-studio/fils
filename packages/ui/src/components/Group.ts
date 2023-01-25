import { EventsHandler } from "../partials/Events";
import { UI } from "../main";
import dom, { FOLDABLE, FOLDABLE_ELEMENT, RowTypes, WRAPPER_CLASS } from "../utils/dom";
import { Button, ButtonOptions } from "./Button";
import { Item, ItemOptions } from "./Item";
import { ItemFactory } from "../partials/ItemFactory";

export interface GroupParams {
	parent?: Group | UI;
	title?: string;

	folded?: boolean;
	foldable?: boolean;
}

export class Group extends EventsHandler {
	title: string;
	parent: Group | UI;
	children: Array<Group | Item | Button> = [];
	dom: HTMLElement;
	contentWrapper: HTMLElement;
	depth: number = 0;

	folded: boolean;
	foldable: boolean;
	foldableWrapper: HTMLElement;
	height: number = 0;
	timer: NodeJS.Timeout = null;

	constructor({
		parent,
		title,
		folded = false,
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
	}

	protected addFoldListeners(){
		if(!this.foldable) return;

		this.dom.classList.add(FOLDABLE);
		const header = this.dom.querySelector('header');

		this.foldableWrapper = document.createElement('div');
		this.foldableWrapper.classList.add(FOLDABLE_ELEMENT);
		this.dom.appendChild(this.foldableWrapper);
		this.foldableWrapper.appendChild(this.contentWrapper);

		header.addEventListener('click', () => {
			this.folded = !this.folded;
			this.onFold();
		});
	}

	protected onFold(){
		if(!this.foldable) return;
		const h = this.contentWrapper.getBoundingClientRect().height;

		this.foldableWrapper.style.height = this.folded ? `0px` : `${h}px`;

		if(this.timer) clearTimeout(this.timer);

		if(!this.folded) {
			const d = parseFloat(getComputedStyle(this.foldableWrapper).transitionDuration) * 1000;
			this.timer = setTimeout(() => {
				this.foldableWrapper.style.height = 'auto';
			}, d);
		}
	}

	/**
	 * Enables listeners, add children to childrens array
	 */
	protected addChild(child: Group | Item | Button){
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