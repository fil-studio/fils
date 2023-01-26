import { ItemRegister } from '../../../../packages/ui/src/partials/ItemFactory';
import { UI } from '../../../../packages/ui/src/main';

import { uiMaterialData } from '../../../../packages/ui-icons/lib/Icons';

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
			icon: uiMaterialData
		});

		const group = this.ui.addGroup({
			title: 'Group Test',
		});
		// const group = this.ui;

		/**
		 * Object
		 * Key
		 * Options
		 */
		group.add(obj, 'colorTest', {
			title: 'Color Test',
			view: 'color'
		});
		group.add(obj, 'booleanTest', {
			title: 'Boolean Test',
		});
		group.add(obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'test2'
		});
		group.addItem(obj, 'stringTest', {
			title: 'String Test'
		});
		group.add(obj, 'numberTest', {
			title: 'Number Test',
		});

		const g2 = this.ui.addGroup({
			title: 'Subgroup Test',
		})
		const g4 = g2.addGroup({
			title: 'Subgroup Test 2',
		})

		this.ui.add(obj, 'textureTest', {
			title: 'Texture Test',
			view: 'texture'
		});


		console.log('UI', this.ui);

	}
}