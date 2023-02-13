import { el } from "@fils/utils";
import { uiTriaDown } from '../../../ui-icons/lib/Icons';
import { CSS_UI } from "../partials/cssClasses";


export enum RowTypes {
	ui,
	group,
	item,
	button,
	spacer
}

interface DomOptions {
	type: RowTypes;
	depth: number;
	title?: string;
}

const dom = {
	createButton: (title:string, icon?:string) => {
		const button = el('button');
		button.classList.add(CSS_UI.button.baseClass);

		const h3 = el('h3');
		h3.innerText = title;
		button.appendChild(h3);

		if(icon){

			const iconWrapper = el('div');
			iconWrapper.innerHTML = icon;
			iconWrapper.classList.add(CSS_UI.button.icon);

			button.classList.add(CSS_UI.button.hasIcon);
			button.appendChild(iconWrapper);

		}

		return button;
	},
	createRow: ({
		type,
		depth,
		title,
	}:DomOptions = {
		type: RowTypes.ui,
		depth: 0
	}) => {

		// Create Row
		let domEl = 'div';
		if(type === RowTypes.ui) domEl = 'div';
		if(type === RowTypes.group) domEl = 'section';
		if(type === RowTypes.item) domEl = 'fieldset';
		if(type === RowTypes.button) domEl = 'fieldset';
		if(type === RowTypes.spacer) domEl = 'div';

		const row = el(domEl);
		row.setAttribute('ui-depth', `${depth}`);

		/**
		 * Add Classes to Row
		 */
		if(type === RowTypes.ui) {
			row.classList.add(CSS_UI.wrapper);
		}

		/**
		 * Create a Group Row
		 */
		if(type === RowTypes.group) {

			const titleTab = el('header');

			dom.addIcon(titleTab);

			const h3 = el('h3') as HTMLHeadingElement;
			if(h3 && title){
				h3.innerText = title;
				h3.title = title;
				titleTab.appendChild(h3);
			}


			row.appendChild(titleTab);

			const contentWrapper = el('div', CSS_UI.section.content);
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Item Row
		 */
		if(type === RowTypes.item) {

			if(title){
				const h4 = el('h4');
				h4.innerText = title;
				h4.title = title;
				row.appendChild(h4);
			}

			const contentWrapper = el('div');
			row.appendChild(contentWrapper);
		}

		/**
		 * Create a Button Row
		 */
		if(type === RowTypes.button) {
			if(title){
				const button = dom.createButton(title);
				row.appendChild(button);
				row.classList.add(CSS_UI.row.hasButton);
			}
		}

		/**
		 * Create a Spacer Row
		 */
		if(type === RowTypes.spacer) {
			row.classList.add(CSS_UI.spacer.baseClass);
		}

		return row;
	},
	addIcon: (header:HTMLElement, icon?:string) => {
		const iconClass = CSS_UI.section.header.icon;
		const iconWrapper = header.querySelector(`.${iconClass}`) ? header.querySelector(`.${iconClass}`) as HTMLElement : el('div', iconClass) as HTMLElement;
		iconWrapper.innerHTML = icon ? icon : uiTriaDown;
		header.prepend(iconWrapper);
	},
}


export default dom;