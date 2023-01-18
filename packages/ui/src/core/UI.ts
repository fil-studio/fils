
import { WRAPPER_CLASS } from './globals';

// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group, GroupParams } from '../components/Group';
import css from '../utils/css';
import { EventsHandler } from '../components/Events';
css.inject(styles);

interface UIParams extends GroupParams {

}

export class UI extends EventsHandler {
	dom: HTMLElement;
	group: Group;

	constructor({
		title,
		foldable,
		folded
	}: UIParams = {}) {
		super();

		this.createDom();

		this.group = new Group({ parent: this, title, foldable, folded });
		this.addChildrenListener(this.group);

	}

	createDom() {
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

	addItem() {
		this.group.addItem();
	}

}