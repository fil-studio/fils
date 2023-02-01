import { el } from "@fils/utils";
import { UI } from "../main";
import { EventsHandler } from "../partials/Events";
import { ItemFactory } from "../partials/ItemFactory";
import dom, { CONTENT_WRAPPER, FOLDABLE, FOLDABLE_ELEMENT, FOLDED, RowTypes } from "../utils/dom";
import { Button } from "./Button";
import { Item } from "./Item";
import { ItemOptions } from "./items/ItemOptions";
import { Spacer, SpacerParams, SpacerSize } from "./Spacer";


export interface GroupParams {
	parent?: Group | UI;
	title?: string;

	folded?: boolean;
	foldable?: boolean;
}

export class Group extends EventsHandler {
	title: string;

	protected parent: Group | UI;
	protected children: Array<Group | Item | Button | Spacer> = [];
	dom: HTMLElement;
	contentWrapper: HTMLElement;
	public depth: number = 0;

	folded: boolean;
	foldable: boolean;
	protected foldableWrapper: HTMLElement;
	protected height: number = 0;
	protected timer: NodeJS.Timeout = null;

	constructor({
		parent,
		title,
		folded = false,
		foldable = true,
	}: GroupParams) {
		super(parent);

		this.parent = parent;
		this.title = title || '';
		this.depth = this.parent?.depth + 1 || this.depth;

		this.dom = dom.createRow({
			type: RowTypes.group,
			depth: this.depth,
			title: this.title,
			foldable: foldable
		});

		this.contentWrapper = this.dom.querySelector(`.${CONTENT_WRAPPER}`);

		// Is it folded or not? If it's not foldable, it's not folded
		this.folded = foldable ? folded : false;
		this.foldable = foldable;
		this.addFoldListeners();
	}

	protected addFoldListeners(){

		if(!this.foldable) return;

		this.dom.classList.add(FOLDABLE);

		this.foldableWrapper = el('div');
		this.foldableWrapper.classList.add(FOLDABLE_ELEMENT);
		this.dom.appendChild(this.foldableWrapper);
		this.foldableWrapper.appendChild(this.contentWrapper);

		const header = this.dom.querySelector('header');

		header.addEventListener('click', () => {
			this.folded = !this.folded;
			this.onFold();
		});

		this.onFold();
	}

	protected onFold(){

		if(!this.foldable) return;
		const h = this.contentWrapper.getBoundingClientRect().height;

		this.foldableWrapper.style.height = `${h}px`;

		if(this.timer) clearTimeout(this.timer);

		// Just go with it, without the timeout, it doesn't work
		setTimeout(() => {
			if(this.folded) this.dom.classList.add(FOLDED);
			else this.dom.classList.remove(FOLDED);
		}, 5);

		if(!this.folded) {
			const d = parseFloat(getComputedStyle(this.foldableWrapper).transitionDuration) * 1000;
			this.timer = setTimeout(() => {
				this.foldableWrapper.style.height = `auto`;
			}, d);
		}

	}

	/**
	 * Enables listeners, add children to childrens array
	 */
	protected addChild(child: Group | Item | Button | Spacer, events:boolean = true){
		this.children.push(child);
		if(events) this.addChildrenListener(child as EventsHandler);
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
	addGroup(params: GroupParams): Group {
		const group = new Group({ parent: this, ...params });
		this.addChild(group);
		return group;
	}

	/**
 * Create spacer
 */
	addSpacer(params?:SpacerParams) {
		const spacer = new Spacer({ parent: this, ...params });
		this.addChild(spacer, false);
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