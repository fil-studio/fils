import { UI } from '../../../../packages/ui/src/main';

/**
 * S'ha de poder crear els components manualment
 * S'ha de poder crear els components important un JSON
 * S'ha de poder exportar els valors actuals dels components a un JSON
 */

export class App {
	ui: UI;
	constructor() {

		this.ui = new UI();

		const group1 = this.ui.addGroup();
		group1.addItem();
		group1.addItem();
		group1.addItem();

		const group2 = this.ui.addGroup();
		group2.addItem();

		const group3 = this.ui.addGroup();
		group3.addItem();
		group3.addItem();
		group3.addItem();
		group3.addItem();

		const group4 = group3.addGroup();
		group4.addItem();
		group4.addItem();
		group4.addItem();
		group4.addItem();

		console.log(this.ui);

	}
}