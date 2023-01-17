
import { WRAPPER_CLASS } from './globals';

// Import CSS
import { Group } from '../components/Group';
import css from '../utils/css';
import styles from '../bundle/bundle.min.css';
css.inject(styles);


export class UI extends Group {
	constructor() {
		super(null);

		this.dom.classList.add(WRAPPER_CLASS);
		document.body.appendChild(this.dom);

	}
}