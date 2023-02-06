import { uiAppendBlend, uiBrushData } from '../../../../packages/ui-icons/lib/Icons';
import { SpacerSize } from '../../../../packages/ui/src/components/Spacer';
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
			// numberTest: 1,
			numberTest: [1,2],
			// numberTest: [1, 2, 3, 4],
			// numberTest: {
			// 	x: 1,
			// 	y: 2,
			// 	z: 3,
			// 	w: 5
			// },
			uploadTest: null,
			numberTestSlider: 0,
			numberTestFloat: 0.5,
			optionsTestActiveObject: null,
			optionsTestObject: {
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
				fourteen: 'Fourteen',
				fifteen: 'Fifteen',
			},
			optionsTestActiveArray: null,
			optionsTestArray: [
				'One Array',
				'Two Array',
				'Three Array',
				'Four Array',
				'Five Array',
				'Six Array',
				'Seven Array',
				'Eight Array',
				'Nine Array',
				'Ten Array',
				'Eleven Array',
				'Twelve Array',
				'Thirteen Array',
				'Fourteen Array',
				'Fifteen Array',
			],
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

		this.ui.on('change', (target) => {
			console.log('change', target);
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
		group.add(obj, 'uploadTest', {
			title: 'Upload Button',
			text: 'Upload',
			icon: uiAppendBlend,
			view: 'upload'
		});

		group.addSpacer();

		group.add(obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'boolean'
		})
		group.addItem(obj, 'stringTest', {
			title: 'String Test',
			view: 'string'
		});


		group.addSpacer();

		group.add(obj, 'numberTest', {
			title: 'Number Test',
			view: 'number'
		});

		group.addSpacer();

		group.add(obj, 'numberTestSlider', {
			title: 'Slider Test with long text example',
				view: 'range',
				min: -10,
				max: 10,
				step: 0.1,
				// overExpose: [0, 10],
		})

		group.add(obj, 'optionsTestActiveObject', {
			title: 'Select Object',
			view: 'select',
			options: obj.optionsTestObject,
		});
		group.add(obj, 'optionsTestActiveArray', {
			title: 'Select Array',
			view: 'select',
			options: obj.optionsTestArray,
		});


		const g2 = this.ui.addGroup({
			title: 'Subgroup Test',
			folded: true
		});

		g2.on('fold', () => {
			console.log('fold');
		})

		const g4 = g2.addGroup({
			title: 'Subgroup Test 2',
			folded: true
		});

		g4.add(obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'boolean'
		});

		g4.addItem(obj, 'stringTest', {
			title: 'String Test',
			view: 'string'
		});

		g4.add(obj, 'numberTest', {
			title: 'Number Test',
			view: 'number'
		});

		g4.addButton({
			title: 'Button Test g4',
		}).on('click', () => {
			console.log('Button Test g4');
		})

		g2.addButton({
			title: 'Button Test g2',
		}).on('click', () => {
			console.log('Button Test g2');
		});

		console.log('UI', this.ui);

	}
}