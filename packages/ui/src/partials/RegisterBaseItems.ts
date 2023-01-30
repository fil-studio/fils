import { ItemClassRegister, ItemRegister } from "./ItemFactory";
import { ColorPicker } from "../components/inputPanels/ColorPicker";
import { TextureItem } from "../components/items/customItems/TexureItem";
import { TextureList } from "../components/inputPanels/TextureList";
import { MaterialItem } from "../components/items/customItems/MaterialItem";

import { MathUtils } from '@fils/math';

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

			this.dom.addEventListener('click', () => {
				this.value = !this.value;
				this.refresh();
			});

		},
		refresh: function() {
			this.dom.classList.toggle('_ui-active', this.value);
		}
	})

	// String Item
	ItemRegister({
		view: 'string',
		type: 'string',
		extendedCSS: ``,
		extendedHTML: `
			<input type="text" placeholder="String" />
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
			<input type="number" placeholder="Value"/>
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
		view: 'slider',
		type: 'number',
		extendedCSS: ``,
		extendedHTML: `
			<div class="_ui-slider-input">
				<div class="_ui-slider-track"></div>
				<div class="_ui-slider-min-overexpose"></div>
				<div class="_ui-slider-max-overexpose"></div>
				<div class="_ui-slider-thumb"></div>
			</div>
			<input type="number" placeholder="Value"/>
		`,
		addEventListeners: function() {

			const input = this.dom.querySelector('input');

			input.value = this.value;
			input.max = this.options.max;
			input.min = this.options.min;

			const slider = this.dom.querySelector('._ui-slider-input');

			const mappedValue = MathUtils.map(this.value, this.options.min, this.options.max, -1, 1);

			slider.style.setProperty('--value', this.value);


			input.addEventListener('change', () => {
				this.refresh();
			});

		},

		refresh: function () {
			const input = this.dom.querySelector('input');
			this.value = input.value;

			const slider = this.dom.querySelector('._ui-slider-input');
			slider.style.setProperty('--value', this.value);
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