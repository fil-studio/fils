import { ItemRegister } from '../../../../packages/ui/src/components/ItemFactory';
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
			colorTest: '#ff0000',
			booleanTest: false,
			stringTest: 'Test',
			numberTest: 1,
			numberTestFloat: 0.5,
			textureTest: 'asdapewoiewitureoiwoie09013oiasd',
			materialTest: 'asdapewoiewitureoiwoie09013oiasd'
		}

		let obj1 = {
			view: 'test',
			type: 'boolean',
			extendedHTML: '<div>Frontend injected</div>',
			extendedCSS: '',
		}
		let obj2 = {
			...obj1,
			view: 'test2',
			extendedHTML: '<div>Frontend extended injected</div>',
		}


		ItemRegister(obj1);
		ItemRegister(obj2);

		this.ui = new UI({
			title: 'UI',
			onChangeCallback: (e) => {
				console.log('Callback', e);
			}
		});

		/**
		 * Object
		 * Key
		 * Options
		 */
		this.ui.add(obj, 'colorTest', {
			title: 'Color Test',
			view: 'color'
		});
		this.ui.add(obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'test'
		});
		this.ui.add(obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'test2'
		});
		this.ui.addItem(obj, 'stringTest', {
			title: 'String Test'
		});
		this.ui.add(obj, 'numberTest', {
			title: 'Number Test'
		});
		this.ui.add(obj, 'textureTest', {
			title: 'Texture Test',
			view: 'texture'
		});
		this.ui.add(obj, 'materialTest', {
			title: 'Material Test',
			view: 'material'
		});


		this.ui.addButton({
			title: 'Button Test',
			callback: () => {
				console.log('Button pressed');
			}
		});


		console.log('UI', this.ui);

	}
}