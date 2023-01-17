
import { WRAPPER_CLASS } from './globals';

// Import CSS
import { Group } from '../components/Group';
import css from '../utils/css';
import styles from '../bundle/bundle.min.css';
css.inject(styles);

export class UI {
	dom: HTMLElement;
	title: string;
	group: Group;

	constructor({title}:{title?: string} = {}) {
		this.title = title;

		this.dom = document.createElement('div');
		this.dom.classList.add(WRAPPER_CLASS);
		document.body.appendChild(this.dom);

		this.group = new Group({ parent: this, title: this.title });
	}

	addGroup({ title }:{ title?: string } = {}): Group {
		return this.group.addGroup({ title });
	}

	addItem() {
		this.group.addItem();
	}
}