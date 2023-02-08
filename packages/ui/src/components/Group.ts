import { el } from "@fils/utils";
import { UI } from "../main";
import { CSS_UI } from "../partials/cssClasses";
import { EventsManager } from "../partials/EventsManager";
import { CreateItemParams, ItemFactory } from "../partials/ItemFactory";
import dom, { RowTypes } from "../utils/dom";
import { Button } from "./Button";
import { Dom, Item } from "./items/Item";
import { ItemParameters } from "./items/ItemParameters";
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
		title,
		folded = false,
		foldable = true,
	}: GroupParams) {
		super();

		this.title = title || '';

		// Is it folded or not? If it's not foldable, it's not folded
		this.folded = foldable ? folded : false;
		this.foldable = foldable;

	}

	init(depth: number = 0): void {
		this.depth = depth;
		this.createDom();
		this.addFoldListeners();
	}

	createDom(): void {

		this.dom = {
			el: null,
			content: null,
			foldWrapper: null
		}

		this.dom.el = dom.createRow({
			type: RowTypes.group,
			depth: this.depth,
			title: this.title,
			foldable: this.foldable
		});

		this.dom.content = this.dom.el.querySelector(`.${CSS_UI.section.content}`);
	}

	setParent(parent: Group | UI) {
		this.parent = parent;
		this.depth = parent.depth + 1;
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
	 * Create a button
	 */
	addButton(params): Button{
		const button = new Button(params);
		button.init(this.depth + 1)
		this.dom.content.appendChild(button.dom.el);
		return button;
	}

	/**
	 * Create a group
	 */
	addGroup(params: GroupParams): Group {
		const group = new Group(params);

		group.on('__childrenChange', (target) => {
			this.change(target as EventsManager);
		})

		group.init(this.depth + 1)
		this.dom.content.appendChild(group.dom.el);

		return group;
	}

	/**
	 * Create spacer
	 */
	addSpacer(params:SpacerParams = {}) {
		const spacer = new Spacer(this.depth + 1, params);
		this.dom.content.appendChild(spacer.dom.el);
	}

	/**
	 * Create an item
	 */
	add(object: Object, key: string, params?: ItemParameters): Item{
		return this.addItem(object, key, params);
	}
	addItem(object:Object, key: string, params?:ItemParameters): Item {

		const createItemParams: CreateItemParams = { object, key, params };
		const item = ItemFactory(createItemParams);

		item.on('__childrenChange', () => {
			this.change(item as EventsManager);
		})

		item.init(this.depth + 1)
		this.dom.content.appendChild(item.dom.el);


		return item;
	}

 	change(target:EventsManager){
		this.emit('__childrenChange', target)
		this.emit('change', target);
	}

}