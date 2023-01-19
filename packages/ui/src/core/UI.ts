
// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group, GroupParams } from '../components/Group';
import css from '../utils/css';
import dom, { RowTypes } from '../utils/dom';
css.inject(styles);


interface UIParams extends GroupParams {
	onChangeCallback?: Function;
}

export class UI extends Group {
	domWrapper: HTMLElement;

	onChangeCallback: Function;

	constructor({
		title,
		foldable,
		folded,
		onChangeCallback
	}: UIParams = {}) {
		super({ title, foldable, folded });

		this.domWrapper = dom.createRow(RowTypes.ui);
		this.domWrapper.appendChild(this.dom);
		document.body.appendChild(this.domWrapper);

		this.onChangeCallback = onChangeCallback ? onChangeCallback : (e) => {};
	}

	onChange(e?: CustomEvent<any>): void {
		this.onChangeCallback(e);
	}
}