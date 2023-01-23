import { ItemRegister } from "./ItemFactory";


export const RegisterBaseComponents = () => {

	// Boolean Item
	ItemRegister({
		name: 'Boolean Item',
		type: 'boolean',
		extendedCSS: ``,
		extendedHTML: `
			<div class="toggle">
				<div class="toggle__handler"></div>
			</div>
		`,

		addEventListeners: function() {

			const toggle = this.dom.querySelector('.toggle');

			toggle.addEventListener('click', () => {
				this.value = !this.value;
				toggle.classList.toggle('active');
			});

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
		}
	})

}