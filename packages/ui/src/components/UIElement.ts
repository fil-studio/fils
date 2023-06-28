import { remove } from "@fils/utils";
import { EventsManager } from "../partials/EventsManager";
import dom, { RowTypes } from "../utils/dom";
import { HasPanel, Panel } from "./Panel";



export class UIElement extends EventsManager implements HasPanel {
	protected depth: number;

	panel: Panel<UIElement>;

	el: HTMLElement;

	type: RowTypes;
	title: string;


	constructor(type:RowTypes, title?: string) {
		super();

		this.type = type;
		this.title = title || '';
	}

	init(depth:number = 0): void {
		this.depth = depth;

		this.beforeCreate();

		this.createDom();
		this.createContent();
		this.addEventListeners();

		this.afterCreate();

		this.preventPropagation();
	}

	protected preventPropagation(){
		// Prevents the propagation of the keydown event to the window
		this.el.addEventListener('keydown', (e) => {
			e.stopPropagation();
		});
	}

	/**
	* Lifecycle
	*/
	protected beforeCreate(): void {}
	protected afterCreate(): void {}

	// Create ROW
	protected createDom(): void {
		this.el = dom.createRow({
			type: this.type,
			depth: this.depth,
			title: this.title,
		})

	}

	parentFold():void {
		this.close();
	}

	// Populate ROW
	protected createContent(): void {}

	destroy(){
		this.removeEventListeners();
		remove(this.el);
	}

	resize(){}

	/**
	* A method to refresh the item and all its children values.
	* Use this method when you change the value of an item outside of the UI to keep it in sync.
	*/
	refresh(){
		this.panel?.refresh();
	}
	close() {}
	open() {}
}