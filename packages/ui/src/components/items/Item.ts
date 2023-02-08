
import { slugify } from '../../../../utils/lib/Utils';
import { CSS_UI } from '../../partials/cssClasses';
import { EventsManager } from '../../partials/EventsManager';
import { CreateItemParams } from '../../partials/ItemFactory';
import dom, { RowTypes } from '../../utils/dom';
import { Group } from '../Group';
import { ItemParameters } from './ItemParameters';

export interface Dom {
	el: HTMLElement
}

export interface ItemDom extends Dom {
	content: HTMLElement
}

export class Item extends EventsManager {

	title: string;

	dom: ItemDom;

	parent: Group;
	protected depth: number;

	protected object: Object;
	protected key: string;
	value: any;

	protected created: boolean = false;

	params: ItemParameters;

	constructor(params: CreateItemParams) {
		super();

		this.params = params.params;

		this.object = params.object;
		this.key = params.key;

		this.title = this.params?.title || params.key.charAt(0).toUpperCase() + params.key.slice(1);

	}

	init(depth:number = 0): void {

		this.depth = depth;

		this.beforeCreate();
		this.createDom();
		this.createContent();
		this.setValue(this.object[this.key]);
		this.addEventListeners();
		this.created = true;
		this.afterCreate();
	}

	setValue(value: any) {
		this.value = value;
		this.object[this.key] = this.value;
		this.refreshDom();
	}

	protected addEventListeners(): void {
		// Override this method
	}

	/**
	 * Dom
	 */
	private createDom() {
		this.dom = {
			el: null,
			content: null,
		}

		this.dom.el = dom.createRow({
			type: RowTypes.item,
			depth: this.depth,
			title: this.title,
		})

		this.dom.content = this.dom.el.querySelector('div');
		this.dom.el.classList.add(`${CSS_UI.baseClass}-${slugify(this.params.view)}`);

	}

	protected createContent() {
		// Override this method
	}
	refreshDom() {
		this.emit('__childrenChange');
		this.emit('change');
	}
	destroyDom(): void {
		this.dom.el.remove();
	}

	/**
	 * Lifecycle
	 */
	protected beforeCreate(): void {
		// Override this method
	}
	protected afterCreate(): void {
		// Override this method
	}
}