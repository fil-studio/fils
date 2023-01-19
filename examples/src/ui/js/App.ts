import { UI } from '../../../../packages/ui/src/main';

/**
 * S'ha de poder crear els components manualment
 * S'ha de poder crear els components important un JSON
 * S'ha de poder exportar els valors actuals dels components a un JSON
 */

export class App {
	ui: UI;
	constructor() {

		const obj = {
			booleanTest: false,
			stringTest: 'Test',
			numberTest: 1,
			numberTestFloat: 0.5
		}

		this.ui = new UI({
			title: 'UI',
			onChangeCallback: (e) => {
				console.log('Callback', e);
			}
		});

		/**
		 * Object
		 * Key
		 * Opcions
		 *
		 *
		 */
		this.ui.add(obj, 'booleanTest', {
			title: 'Boolean Test'
		});
		this.ui.add(obj, 'stringTest', {
			title: 'String Test'
		});
		this.ui.add(obj, 'numberTest', {
			title: 'Number Test'
		});
		this.ui.add(obj, 'numberTestFloat', {
			title: 'Number Test Float'
		});
		this.ui.addButton({
			title: 'Number Test Float',
			callback: () => {
				console.log('Button pressed');
			}
		});
		// group1.addItem();
		// group1.addItem();

		const group2 = this.ui.addGroup({
			title: 'Group 2'
		});
		// group2.addItem();

		const group3 = group2.addGroup({
			title: 'Group 3'
		});
		// group3.addItem();
		// group3.addItem();
		// group3.addItem();
		// group3.addItem();

		const group4 = group3.addGroup({
			title: 'Group 4'
		});
		// group4.addItem();
		// group4.addItem();
		// group4.addItem();
		// group4.addItem();

		console.log(this.ui);

	}
}