import { el } from "@fils/utils";
import { UI } from "../main";
import { CSS_UI } from "../partials/cssClasses";
import { EventsManager } from "../partials/EventsManager";
import { ItemFactory } from "../partials/ItemFactory";
import dom, { RowTypes } from "../utils/dom";
import { Button } from "./Button";
import { Dom, Item } from "./items/Item";
import { ItemOptions } from "./items/ItemOptions";
import { Spacer, SpacerParams } from "./Spacer";


export interface GroupParams {
	parent?: Group | UI;
	title?: string;

	folded?: boolean;
	foldable?: boolean;
}

export interface GroupDom extends Dom {
	content: HTMLElement
	foldWrapper: HTMLElement
}

export class Group extends EventsManager {
	title: string;

	dom: GroupDom;

	protected parent: Group | UI;
	protected children: Array<Group | Item | Button | Spacer> = [];

	public depth: number = 0;

	folded: boolean;
	foldable: boolean;
	protected height: number = 0;
	protected timer: NodeJS.Timeout = null;

	constructor({
		parent,
		title,
		folded = false,
		foldable = true,
	}: GroupParams) {
		super();

		this.parent = parent;
		this.title = title || '';
		this.depth = this.parent?.depth + 1 || this.depth;

		this.dom = {
			el: null,
			content: null,
			foldWrapper: null
		}

		this.dom.el = dom.createRow({
			type: RowTypes.group,
			depth: this.depth,
			title: this.title,
			foldable: foldable
		});

		this.dom.content = this.dom.el.querySelector(`.${CSS_UI.section.content}`);

		// Is it folded or not? If it's not foldable, it's not folded
		this.folded = foldable ? folded : false;
		this.foldable = foldable;
		this.addFoldListeners();

	}

	protected addFoldListeners(){

		if(!this.foldable) return;

		this.dom.el.classList.add(CSS_UI.section.foldable);

		this.dom.foldWrapper = el('div', CSS_UI.section.foldableElement);
		this.dom.el.appendChild(this.dom.foldWrapper);
		this.dom.foldWrapper.appendChild(this.dom.content);

		const header = this.dom.el.querySelector('header');

		header.addEventListener('click', () => {
			this.folded = !this.folded;
			this.onFold();
		});

		this.onFold();
	}

	protected onFold(){

		if(!this.foldable) return;
		const h = this.dom.content.getBoundingClientRect().height;

		this.dom.foldWrapper.style.height = `${h}px`;

		if(this.timer) clearTimeout(this.timer);

		// Just go with it, without the timeout, it doesn't work
		setTimeout(() => {
			if(this.folded) this.dom.el.classList.add(CSS_UI.section.folded);
			else this.dom.el.classList.remove(CSS_UI.section.folded);
		}, 5);

		if(!this.folded) {
			const d = parseFloat(getComputedStyle(this.dom.foldWrapper).transitionDuration) * 1000;
			this.timer = setTimeout(() => {
				this.dom.foldWrapper.style.height = `auto`;
			}, d);
		}

		this.emit('fold');
	}

	destroy(): void {
		this.dom.el.remove();
	}

	/**
	 * Enables listeners, add children to childrens array
	 */
	protected addChild(child: Group | Item | Button | Spacer) : Group | Item | Button {
		this.children.push(child);
		this.dom.content.appendChild(child.dom.el);
		return child as Group | Item | Button;
	}

	/**
	 * Create a button
	 */
	addButton(options): Button{
		const button = new Button(this, options);
		return this.addChild(button) as Button;
	}

	/**
	 * Create a group
	 */
	addGroup(params: GroupParams): Group {
		const group = new Group({ parent: this, ...params });

		group.on('__childrenChange', (target) => {
			this.change(target as EventsManager);
		})

		return this.addChild(group) as Group;
	}

	/**
	 * Create spacer
	 */
	addSpacer(params?:SpacerParams) {
		const spacer = new Spacer({ parent: this, ...params });
		this.addChild(spacer);
	}

	/**
	 * Create an item
	 */
	add(object, key, options?: ItemOptions): Item{
		return this.addItem(object, key, options);
	}
	addItem(object, key, options?: ItemOptions): Item {
		const item = ItemFactory({parent: this, object, key}, options);

		item.on('__childrenChange', () => {
			this.change(item as EventsManager);
		})

		return this.addChild(item) as Item;
	}

 	change(target:EventsManager){
		this.emit('__childrenChange', target)
		this.emit('change', target);
	}


}