import { ItemRegister } from '../../../../packages/ui/src/partials/ItemFactory';
import { UI } from '../../../../packages/ui/src/main';

import { uiBrushData } from '../../../../packages/ui-icons/lib/Icons';

import { Vector3 } from 'three';

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
			numberTestSlider: 1,
			numberTestFloat: 0.5,
			textureTest: 'asdapewoiewitureoiwoie09013oiasd',
			materialTest: 'asdapewoiewitureoiwoie09013oiasd',
			multiNumberTest: [1, 2, 3],
		}

		// const tmp = new Vector3(1, 2, 3);
		// console.log(tmp);


		this.ui = new UI({
			title: 'UI',
			icon: uiBrushData
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
		// group.add(obj, 'colorTest', {
		// 	title: 'Color Test',
		// 	view: 'color'
		// });
		group.add(obj, 'booleanTest', {
			title: 'Boolean Test',
		});
		group.addItem(obj, 'stringTest', {
			title: 'String Test'
		});
		group.add(obj, 'numberTest', {
			title: 'Number Test',
		});
		group.add(obj, 'numberTestSlider', {
			title: 'Slider Test with long text example',
				view: 'slider',
				min: -10,
				max: 10
		});

		const g2 = this.ui.addGroup({
			title: 'Subgroup Test',
		})
		const g4 = g2.addGroup({
			title: 'Subgroup Test 2',
		})
		// g4.add(obj, 'colorTest', {
		// 	title: 'Color Test',
		// 	view: 'color'
		// });
		// g4.addItem(obj, 'stringTest', {
		// 	title: 'String Test'
		// });
		// g4.add(obj, 'numberTest', {
		// 	title: 'Number Test',
		// });

		// this.ui.add(obj, 'textureTest', {
		// 	title: 'Texture Test',
		// 	view: 'texture'
		// });


		console.log('UI', this.ui);

	}
}