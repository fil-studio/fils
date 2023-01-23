import { ItemRegister } from "./ItemFactory";


export const RegisterBaseComponents = () => {

	ItemRegister({
		name: 'Boolean Item',
		type: 'boolean',
		extendedCSS: `
			body {
				background: green !important;
			}
		`,
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

}