
import { WRAPPER_CLASS } from './globals';

// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group } from '../components/Group';
import css from '../utils/css';
import { EventsHandler } from '../components/Events';
css.inject(styles);

export class UI extends EventsHandler {
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
		super();
		this.dom = document.createElement('div');
		this.dom.classList.add(WRAPPER_CLASS);
		document.body.appendChild(this.dom);

		this.group = new Group({ parent: this, title, foldable, folded });
		this.addChildrenListener(this.group);


		// For testing purposes
		this.dom.addEventListener('click', () => {
			console.log('UI - click');
			this.__refresh();
		});
	}

	onChange(e?: CustomEvent<any>): void {

		if(!e) return;
		const el = e.detail.initiator.dom;
		console.log(el);

		el.classList.add('changed');
		setTimeout(() => {
			el.classList.remove('changed');
		}, 1000);

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