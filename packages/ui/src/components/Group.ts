import { ALL_CLASS, GROUP_CLASS, TITLE_CLASS } from "../core/globals";
import { UI } from "../main";
import { Item } from "./items/Item";

interface params{
	parent: Group | null;
	title: string;
}

export class Group {
	title: string;
	parent: Group | UI;
	children: Array<Group | Item> = [];
	dom: HTMLElement;

	constructor({ parent, title }: { parent?: Group | UI; title?: string } = {}) {
		this.parent = parent;
		this.title = title;

		this.dom = document.createElement('div');
		this.dom.classList.add(ALL_CLASS)

		if(this.parent){
			this.parent.dom.appendChild(this.dom);
			this.dom.classList.add(GROUP_CLASS);
		}

		this.createTitle();
	}

	createTitle() {
		if(!this.title) return;

		const title = document.createElement('h3');
		title.innerText = this.title;

		const titleWrapper = document.createElement('div');
		titleWrapper.classList.add(TITLE_CLASS);
		titleWrapper.appendChild(title);

		this.dom.appendChild(titleWrapper);
	}

	addGroup({title}: { title?: string} = {}):Group {
		const group = new Group({ parent: this, title });
		this.children.push(group);
		return group;
	}

	addItem() {
		const item = new Item({ parent: this });
		this.children.push(item);
	}
}