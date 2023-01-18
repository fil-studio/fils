
import { WRAPPER_CLASS } from './globals';

// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group, GroupParams } from '../components/Group';
import css from '../utils/css';
import { EventsHandler } from './Events';
import { ItemOptions, ItemParams } from '../components/items/Item';
css.inject(styles);


interface UIParams extends GroupParams {
	onChangeCallback?: Function;
}

export class UI extends EventsHandler {
	dom: HTMLElement;
	group: Group;

	onChangeCallback: Function;

	constructor({
		title,
		foldable,
		folded,
		onChangeCallback
	}: UIParams = {}) {
		super();

		this.createDom();

		this.group = new Group({ parent: this, title, foldable, folded });
		this.addChildrenListener(this.group);

		this.onChangeCallback = onChangeCallback ? onChangeCallback : (e) => {};
	}

	private createDom() {
		this.dom = document.createElement('div');
		this.dom.classList.add(WRAPPER_CLASS);
		document.body.appendChild(this.dom);
	}

	addGroup({
		title,
		foldable,
		folded
	}: GroupParams = {}): Group {
		return this.group.addGroup({ title, foldable, folded });
	}

	add(object, key, options?:ItemOptions){
		this.addItem(object, key, options);
	}
	addItem(object, key, options?:ItemOptions) {
		this.group.addItem(object, key, options);
	}

	onChange(e?: CustomEvent<any>): void {
		this.onChangeCallback(e);
	}

}