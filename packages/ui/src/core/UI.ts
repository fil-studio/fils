
import { WRAPPER_CLASS } from './globals';

// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group } from '../components/Group';
import css from '../utils/css';
css.inject(styles);

export class UI {
	dom: HTMLElement;
	group: Group;

	constructor({
		title,
		foldable,
		folded
	}:{
		title?: string,
		foldable?:boolean,
		folded?:boolean
	} = {}) {
		this.dom = document.createElement('div');
		this.dom.classList.add(WRAPPER_CLASS);
		document.body.appendChild(this.dom);

		this.group = new Group({ parent: this, title, foldable, folded });
	}

	addGroup({
		title,
		foldable,
		folded
	}:{
		title?: string,
		foldable?:boolean,
		folded?:boolean
	} = {}): Group {
		return this.group.addGroup({ title, foldable, folded });
	}

	addItem() {
		this.group.addItem();
	}

}