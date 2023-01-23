
// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group, GroupParams } from '../components/Group';
import { AvailableItems } from '../components/ItemFactory';
import { RegisterBaseComponents } from '../components/RegisterBaseItems';
import css from '../utils/css';
import dom, { RowTypes } from '../utils/dom';

RegisterBaseComponents();
const mergedCss = css.merge(styles, AvailableItems.items);
css.inject(mergedCss);

interface UIParams extends GroupParams {
	onChangeCallback?: Function;
}


export class UI extends Group {
	type: RowTypes = RowTypes.ui;

	domWrapper: HTMLElement;
	depth: number = 0;

	onChangeCallback: Function;

	constructor({
		title,
		onChangeCallback
	}: UIParams = {}) {

		super({ title });

		/*
		 * Main UI requires an extra wrapper
		 */
		this.domWrapper = dom.createRow({
			type: RowTypes.ui,
			depth: this.depth
		});
		this.domWrapper.appendChild(this.dom);
		document.body.appendChild(this.domWrapper);

		/**
		 * onChangeCallback is called when a value is changed
		 * todo - everything needs a callback
		 */
		this.onChangeCallback = onChangeCallback ? onChangeCallback : (e) => {};
	}

	onChange(e?: CustomEvent<any>): void {
		this.onChangeCallback(e);
	}
}