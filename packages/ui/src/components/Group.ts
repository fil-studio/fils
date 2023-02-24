import { el } from "@fils/utils";
import { UI } from "../main";
import { CSS_UI } from "../partials/cssClasses";
import { EventsManager } from "../partials/EventsManager";
import { CreateItemParams, ItemFactory } from "../partials/ItemFactory";
import { RowTypes } from "../utils/dom";
import { Button } from "./Button";
import { Item } from "./items/Item";
import { ItemParameters } from "./items/ItemParameters";
import { Spacer, SpacerParams, SpacerSize } from "./Spacer";
import { UIElement } from "./UIElement";

export interface GroupParams {
	parent?: Group | UI;
	title?: string;

	folded?: boolean;
	foldable?: boolean;
}
export class Group extends UIElement {
	protected children: Array<Group | Item > = [];

	folded: boolean;
	foldable: boolean;
	protected height: number = 0;
	protected timer: any;

	content!: HTMLElement;
	foldWrapper!: HTMLElement;

	constructor({
		title,
		folded = false,
		foldable = true,
	}: GroupParams) {
		super(RowTypes.group, title);

		// Is it folded or not? If it's not foldable, it's not folded
		this.folded = foldable ? folded : true;
		this.foldable = foldable;

	}

	createDom(): void {

		super.createDom();

		this.content = this.el.querySelector(`.${CSS_UI.section.content}`) as HTMLElement;
	}

	protected addEventListeners(){

		if(!this.foldable) return;

		this.el.classList.add(CSS_UI.section.foldable);

		this.foldWrapper = el('div', CSS_UI.section.foldableElement);
		this.el.appendChild(this.foldWrapper);
		this.foldWrapper.appendChild(this.content);

		const header = this.el.querySelector('header') as HTMLElement;

		header.addEventListener('click', () => {
			this.foldToggle();
		});

		this.folded = !this.folded;
		this.foldToggle();

	}

	foldToggle(){

		if(!this.foldable) return;

		this.folded = !this.folded;

		const h = this.content.getBoundingClientRect().height;

		this.foldWrapper!.style.height = `${h}px`;

		if(this.timer) clearTimeout(this.timer);

		// Just go with it, without the timeout, it doesn't work
		setTimeout(() => {
			if(this.folded) this.el.classList.add(CSS_UI.section.folded);
			else this.el.classList.remove(CSS_UI.section.folded);
		}, 5);

		if(!this.folded) {
			const d = parseFloat(getComputedStyle(this.foldWrapper as HTMLElement).transitionDuration) * 1000;
			this.timer = setTimeout(() => {
				this.foldWrapper.style.height = `auto`;
			}, d);
		}

		this.emit('fold');
	}

	/**
	 * Creates a button with the specified title.
	 *
	 * @param {string} title - The title to display on the button.
	 * @default 'Button'
	 * @event click
	 * @returns {Button} The newly created button element.
	 */
	addButton(title:string = 'Button', clickCallback:Function = () => {}): Button{
		const button = new Button(title as string, clickCallback as Function);

		if (button) {
			button.init(this.depth + 1);
			this.content.appendChild(button.el);
		}

		return button;
	}

	/**
	* Creates a group.
	*
	* @param {title} title - Group tab title
	* @param {folded} folded - Is the group folded or not
	* @param {foldable} foldable - Is the group foldable or not
	* @returns {Group} The newly created group element.
	*/
	addGroup(params: GroupParams): Group {
		const group = new Group(params);

		if (group) {

			group.init(this.depth + 1);
			this.content.appendChild(group.el);

			this.children.push(group);
		}

		return group;
	}

	/**
	 * A function that does something with a widget option.
	 *
	 * @param {SpacerSize} option - The option to use.
	 * @param {boolean} line - If the spacer should be a line or not
	 * @default true
	 */
	addSpacer(params:SpacerParams = {}) {
		const spacer = new Spacer(this.depth + 1, params);
		if(spacer && spacer.el) this.content.appendChild(spacer.el);
	}

	/**
	 * A function that creates an Item.
	 *
	 * @param {title} title - Item title.
	 * @param {view} view - Force item view. If not specified, it will be automatically detected.
	 * @returns {Item} The newly created item element.
	 */
	add(object: Object, key: string, params?: ItemParameters): Item{
		return this.addItem(object, key, params);
	}
	/**
	* A function that creates an Item.
	*
	* @param {title} title - Item title.
	* @param {view} view - Force item view. If not specified, it will be automatically detected.
	* @returns {Item} The newly created item element.
	*/
	addItem(object:Object, key: string, params?:ItemParameters): Item {

		const createItemParams: CreateItemParams = { object, key, params };

		const item = ItemFactory(createItemParams);

		if (item){

			item.init(this.depth + 1)
			this.content.appendChild(item.el);

			this.children.push(item);
		}


		return item as Item;
	}

 	change(target:EventsManager){
		this.emit('change', target);
	}

	refresh(): void {
		for(let child of this.children){
			child.refresh();
		}
	}

}