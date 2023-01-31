import { UI } from '../../../../packages/ui/src/main';
import { uiBrushData } from '../../../../packages/ui-icons/lib/Icons';


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
			// numberTest: 1,
			// numberTest: [1,2],
			// numberTest: [1, 2, 3, 4],
			numberTest: {
				x: 1,
				y: 2,
				z: 3,
			},
			numberTestSlider: 0,
			numberTestFloat: 0.5,
			optionsTestActive: 'one',
			optionsTest: {
				one: 'One',
				two: 'Two',
				three: 'Three',
				four: 'Four',
				five: 'Five',
				six: 'Six',
				seven: 'Seven',
				eight: 'Eight',
				nine: 'Nine',
				ten: 'Ten',
				eleven: 'Eleven',
				twelve: 'Twelve',
				thirteen: 'Thirteen',
				fourteen: 'Fourteen'
			},
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
			view: 'boolean'
		});

		group.addItem(obj, 'stringTest', {
			title: 'String Test',
			view: 'string'
		});

		group.add(obj, 'numberTest', {
			title: 'Number Test',
			view: 'number'
		});

		group.add(obj, 'optionsTestActive', {
			title: 'Options Test',
			view: 'select',
			options: obj.optionsTest,
		});

		group.add(obj, 'numberTestSlider', {
			title: 'Slider Test with long text example',
				view: 'slider',
				min: 0,
				max: 10,
				step: 0.1,
				overExpose: [5, 40],
		});

		const g2 = this.ui.addGroup({
			title: 'Subgroup Test',
		});

		const g4 = g2.addGroup({
			title: 'Subgroup Test 2',
		});

		g2.addButton({
			title: 'Button Test',
			onClick: () => {
				console.log('Button Test');
			}
		});

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