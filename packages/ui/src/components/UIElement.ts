import { EventsManager } from "../partials/EventsManager";
import dom, { RowTypes } from "../utils/dom";

export interface Dom {
	el: HTMLElement
}

export class UIElement extends EventsManager {
	protected depth: number;

	dom: Dom;
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
	}

	/**
	* Lifecycle
	*/
	protected beforeCreate(): void {}
	protected afterCreate(): void {}


	// Create ROW
	protected createDom(): void {
		this.dom = {
			el: null,
		}

		this.dom.el = dom.createRow({
			type: this.type,
			depth: this.depth,
			title: this.title,
		})

	}

	// Populate ROW
	protected createContent(): void {}

	protected addEventListeners(): void {}

	destroy(){
		this.dom.el.remove();
	}
}