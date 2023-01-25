
// Import CSS
import styles from '../bundle/bundle.min.css';
import { Group, GroupParams } from '../components/Group';
import { AvailableItems } from '../components/ItemFactory';
import { RegisterBaseComponents } from '../components/RegisterBaseItems';
import css from '../utils/css';
import dom, { EMBED_WRAPPER_CLASS, RowTypes } from '../utils/dom';

RegisterBaseComponents();
const mergedCss = css.merge(styles, AvailableItems.items);
css.inject(mergedCss);

interface UIParams extends GroupParams {
	embed?: HTMLElement,
	onChangeCallback?: Function;
}
export class UI extends Group {
	domWrapper: HTMLElement;
	depth: number = 0;

	onChangeCallback: Function;

	constructor({
		title,
		embed,
		onChangeCallback = () => {}
	}: UIParams) {
		super({...arguments[0]});

		this.parent = null;

		/*
		 * Main UI requires an extra wrapper
		 */
		this.domWrapper = dom.createRow({
			type: RowTypes.ui,
			depth: this.depth
		});
		this.domWrapper.appendChild(this.dom);
		if(embed){
			this.domWrapper.classList.add(EMBED_WRAPPER_CLASS);
			embed.appendChild(this.domWrapper);
		} else {
			document.body.appendChild(this.domWrapper);
		}

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