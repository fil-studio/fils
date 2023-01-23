import { ItemRegister } from "./ItemFactory";


export const RegisterBaseComponents = () => {

	// Boolean Item
	ItemRegister({
		name: 'Boolean Item',
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
		name: 'String Item',
		type: 'string',
		extendedCSS: ``,
		extendedHTML: `
			<input type="text" />
		`,
		addEventListeners: function() {

			const input = this.dom.querySelector('input');

			input.addEventListener('change', () => {
				this.value = input.value;
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
		name: 'Number Item',
		type: 'number',
		extendedCSS: ``,
		extendedHTML: `
			<input type="number" />
		`,
		addEventListeners: function() {

			const input = this.dom.querySelector('input');

			input.addEventListener('change', () => {
				this.value = input.value;
				this.refresh();
			});
		},
		refresh: function () {
			const input = this.dom.querySelector('input');
			input.value = this.value;
		}
	})

}