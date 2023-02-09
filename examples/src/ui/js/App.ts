import { uiAppendBlend, uiBrushData, uiTexture } from '../../../../packages/ui-icons/lib/Icons';
import { SpacerSize } from '../../../../packages/ui/src/components/Spacer';
import { UI } from '../../../../packages/ui/src/main';

import { Texture, TextureLoader } from 'three';

/**
 * S'ha de poder crear els components manualment
 * S'ha de poder crear els components important un JSON
 * S'ha de poder exportar els valors actuals dels components a un JSON
 */

export class App {
	ui: UI;
	obj: any;
	constructor() {

		this.obj = {
			colorTest: '#0D5417',
			booleanTest: false,
			stringTest: 'Test',
			// numberTest: 1,
			// numberTest: [1,2],
			// numberTest: [1, 2, 3, 4],
			numberTest: {
				x: 1,
				y: 2,
				z: 3,
				w: 5
			},
			uploadTest: null,
			numberTestSlider: 0,
			numberTestFloat: 0.5,
			testArray: null,
			textureTest: null,
			textures: [],
			materialTest: 'asdapewoiewitureoiwoie09013oiasd',
			multiNumberTest: [1, 2, 3],
		}


		const loader = new TextureLoader();

		let loaded = 0;
		for(let i = 0; i <= 10; i++) {
			loader.load('../assets/texture-test.png', (texture:Texture) => {
				texture.name = `Texture ${i}`;

				this.obj.textures.push(texture);
				loaded++;
				if(loaded === 10) this.createUI();
			});
		}

	}

	createUI() {
		console.log(this.obj.textures);

		console.log('UI');

		this.ui = new UI({
			title: 'UI',
			icon: uiBrushData,
			parentElement: document.querySelector('.parent-example') as HTMLElement,
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
		};

		group.add(this.obj, 'testArray', {
			title: 'Select Array',
			view: 'select',
			options: dataArrayExample,
		});

		// group.add(this.obj, 'colorTest', {
		// 	title: 'Color Test',
		// 	view: 'color'
		// });
		group.add(this.obj, 'colorTest', {
			title: 'COLOR',
			view: 'color'
		});

		group.add(this.obj, 'uploadTest', {
			title: 'Upload Button',
			text: 'Upload',
			icon: uiAppendBlend,
			view: 'upload'
		});

		group.addSpacer();

		group.add(this.obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'boolean'
		})
		group.addItem(this.obj, 'stringTest', {
			title: 'String Test',
			view: 'string'
		});


		group.addSpacer();

		group.add(this.obj, 'numberTest', {
			title: 'Number Test',
			view: 'number'
		});

		group.addSpacer();

		group.add(this.obj, 'numberTestSlider', {
			title: 'Slider Test with long text example',
				view: 'range',
				min: -10,
				max: 10,
				step: 0.1,
				// overExpose: [0, 10],
		})




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

		g4.add(this.obj, 'booleanTest', {
			title: 'Boolean Test',
			view: 'boolean'
		});

		g4.addItem(this.obj, 'stringTest', {
			title: 'String Test',
			view: 'string'
		});

		g4.add(this.obj, 'numberTest', {
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