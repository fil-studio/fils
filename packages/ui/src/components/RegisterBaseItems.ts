import { ItemRegister } from "./ItemFactory";
import { ColorPicker } from "./popups/ColorPicker";


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

			input.addEventListener('change', () => {
				this.refresh();
			});

		},
		refresh: function () {
			const input = this.dom.querySelector('input');
			input.value = this.value;
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

			input.addEventListener('change', () => {
				input.value = this.value;
				this.refresh();
			});

		},

		refresh: function () {
			const input = this.dom.querySelector('input');
			input.value = this.value;
		}
	})

	// Color Item
	ItemRegister({
		view: 'color',
		type: 'number',
		popup: ColorPicker,
		extendedCSS: ``,
		extendedHTML: `
			<input type="string" />
		`,
		addEventListeners: function () {

			const input = this.dom.querySelector('input');

			input.addEventListener('change', () => {
				this.refresh();
			});

		},

		refresh: function () {
			const input = this.dom.querySelector('input');
			input.value = this.value;
		}
	})

}