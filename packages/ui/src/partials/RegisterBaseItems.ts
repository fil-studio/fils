import { ItemClassRegister, ItemRegister } from "./ItemFactory";
import { ColorPicker } from "../components/inputControllers/ColorPicker";
import { TextureItem } from "../components/items/customItems/TexureItem";
import { TextureList } from "../components/inputControllers/TextureList";
import { MaterialItem } from "../components/items/customItems/MaterialItem";


export const RegisterBaseComponents = () => {

	// Boolean Item
	ItemRegister({
		view: 'boolean',
		type: 'boolean',
		extendedCSS: ``,
		extendedHTML: `
			<div class="_ui-toggle">
				<div></div>
			</div>
		`,
		addEventListeners: function() {

			const toggle = this.dom.querySelector('._ui-toggle');

			toggle.addEventListener('click', () => {
				this.value = !this.value;
				toggle.classList.toggle('active');
				this.refresh();
			});

		},
		refresh: function() {
			const toggle = this.dom.querySelector('._ui-toggle');

			if (this.value) {
				toggle.classList.add('active');
			} else {
				toggle.classList.remove('active');
			}
		}
	})

	// String Item
	ItemRegister({
		view: 'string',
		type: 'string',
		extendedCSS: ``,
		extendedHTML: `
			<input type="text" />
		`,
		addEventListeners: function() {

			const input = this.dom.querySelector('input');
			input.value = this.value;
			input.addEventListener('change', () => {
				this.refresh();
			});

		},
		refresh: function () {
			const input = this.dom.querySelector('input');
			this.value = input.value;
		}
	})

	// Number Item
	ItemRegister({
		view: 'number',
		type: 'number',
		extendedCSS: ``,
		extendedHTML: `
			<input type="number" />
		`,
		addEventListeners: function() {

			const input = this.dom.querySelector('input');

			input.value = this.value;

			input.addEventListener('change', () => {
				this.refresh();
			});

		},

		refresh: function () {
			const input = this.dom.querySelector('input');
			this.value = input.value;
		}
	})

	// Color Item
	ItemRegister({
		view: 'color',
		type: 'number',
		inputController: ColorPicker,
		extendedCSS: ``,
		extendedHTML: `
			<input type="string" />
		`,
		parseValue: function (value) {
			return value + 'hola';
		},
		addEventListeners: function () {

			const input = this.dom.querySelector('input');

			input.value = this.value;

			input.addEventListener('change', () => {
				this.refresh();
			});

		},

		refresh: function () {
			const input = this.dom.querySelector('input');
			this.value = input.value;
		}
	})

	// Texture Item
	ItemClassRegister({
		view: 'texture',
		type: 'texture',
		item: TextureItem,
		inputController: TextureList
	})

	ItemClassRegister({
		view: 'material',
		type: 'material',
		item: MaterialItem,
		// inputController: TextureList
	})

}