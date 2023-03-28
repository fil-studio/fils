// import { UI } from '@fils/ui';
import { UI } from '../../../../packages/ui/src/main.js';

import { Vector3, Euler } from 'three';
import { uiBrushData, uiAppendBlend } from '@fils/ui-icons';

import { Texture, TextureLoader } from 'three';
import { CustomElementTest } from './ExternalTest.js';

/**
 * S'ha de poder crear els components manualment
 * S'ha de poder crear els components important un JSON
 * S'ha de poder exportar els valors actuals dels components a un JSON
 */

const VectorTest = new Euler();
export class App {
	ui: UI;
	obj: any;
	constructor() {

		this.obj = {
			colorTest: '0x0D5417',
			booleanTest: false,
			stringTest: 'Test',
			// numberTest: 1,
			// numberTest: [1,2],
			// numberTest: [1, 2, 3, 4],
			numberTest: {
				x: 0.00002020201012003023,
				y: 2,
				z: 3,
				w: 5
			},
			position: VectorTest,
			uploadTest: null,
			numberTestSlider: 0,
			numberTestFloat: 0.5,
			testArray: 0,
			textureTest: null,
			textures: [],
			materialTest: 'asdapewoiewitureoiwoie09013oiasd',
			multiNumberTest: [1, 2, 3],
		}


		this.ui = new UI({
			title: 'UI',
			// icon: uiBrushData,
			foldable: false
			// parentElement: document.querySelector('.parent-example') as HTMLElement,
		})
		// this.ui.on('change', () => {
		// 	console.log('Change');
		// });

		this.ui.addCustomUIElement(CustomElementTest, {
			title: 'Custom Element Test',
		})

		this.ui.addInfo({
			text: 'Info text with super long text what is going on hereInfo text with super long text whatisgoing on here Info text with super long text what is going on here'
		});

		this.ui.addInfo({
			text: [
				'Info text with super long text what is going on here',
				'Info text with super long text what is going on here Info text with super long text what is going on here Info text with super long text what is going on here Info text with super long text what is going on here',
				'Info text with super long text what is going on here',
			]
		});

		const group = this.ui.addGroup({
			title: 'Group Test',
		});

		group.add(this.obj, 'position').on('change', () => {
			console.log('Position Change', this.obj.position);
		});

		group.addInfo({
			text: 'Info text with super /n long text what is going on hereInfo text with super long text whatisgoing on here Info text with super long text what is going on here'
		});



		const b = this.ui.addButton('Hello', () => {
			console.log('Hello');

			this.obj.stringTest = 'Hello Refresh';

			this.obj.booleanTest = !this.obj.booleanTest;

			this.obj.testArray = "test text";

			this.obj.numberTest.x = 10;

			this.obj.position.x = 10;
			this.obj.position.y -= 5;

			setTimeout(() => {
				console.log('Refresh');
				this.ui.refresh();
			}, 1000);

		});

		// const group = this.ui;

		/**
		* Object
		* Key
		* Options
		*/
		// group.add(this.obj, 'textureTest', {
		// 	title: 'Texture Test',
		// 	text: 'Texture',
		// 	view: 'texture',
		// 	options: this.obj.textures,
		// 	optionLabel: 'name',
		// });

		const dataArrayExample = {
			"Yay": 0,
			"YOY": "test text",
			text4: "test text 4",
			text5: "test text 5",
			"Lorem Ipsum": "Lorem Ipsum text",
			"YaOY": "test text",
			texasdt4: "test text 4",
			texasdt5: "test text 5",
			"Loasdrem Ipsum": "Lorem Ipsum text",
			"YOasdY": "test text",
			texast4: "test text 4",
			texat5: "test text 5",
			"Ladsaorem Ipsum": "Lorem Ipsum text",
			"YasOY": "test text",
			teasdxt4: "test text 4",
			teaaxt5: "test text 5",
			"Loaarem Ipsum": "Lorem Ipsum text",
			"YOaaY": "test text",
			texat4: "test text 4",
			textasd5: "test text 5",
			"Loraaem Ipsum": "Lorem Ipsum text",
		};


		// group.add(this.obj, 'colorTest', {
		// 	title: 'Color Test',
		// 	view: 'color'
		// });
		group.add(this.obj, 'colorTest', {
			title: 'COLOR',
			view: 'color'
		});

		group.add(this.obj, 'uploadTest', {
			title: 'title string',
			text: 'text string',
			icon: uiAppendBlend,
			view: 'upload',
			accept: '.png',
		});

		group.addSpacer({

		});

		group.add(this.obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'boolean'
		})
		group.addItem(this.obj, 'stringTest', {
			title: 'String Test',
			view: 'string'
		});


		group.addSpacer();

		const o = group.add(this.obj, 'numberTest', {
			title: 'Number Test',
		})



		group.addSpacer();

		group.add(this.obj, 'numberTestSlider', {
			title: 'Slider Test with long text example',
				view: 'range',
				min: -10,
				max: 10,
				step: 0.001,
				// overExpose: [0, 10],
		}).on('change', (value) => {
			// console.log(this.obj.numberTestSlider, value);
		});


		group.add(this.obj, 'testArray', {
			title: 'Select Array',
			options: dataArrayExample,
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

		// g4.add(this.obj, 'booleanTest', {
		// 	title: 'Boolean Test',
		// });

		// g4.addItem(this.obj, 'stringTest', {
		// 	title: 'String Test',
		// });

		// g4.add(this.obj, 'numberTest', {
		// 	title: 'Number Test',
		// });

		g4.addButton('Button Test g4').on('click', () => {
			console.log('Button Test g4');
		})

		g2.addButton('Button Test g2').on('click', () => {
			console.log('Button Test g2');
		});



		// console.log('UI', this.ui);
	}
}