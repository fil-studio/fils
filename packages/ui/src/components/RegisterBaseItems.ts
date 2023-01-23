import { RegisterItem } from "./ItemFactory";


export const RegisterBaseComponents = () => {

	RegisterItem({
		name: 'BooleanItem',
		type: 'boolean',
		extendedHTML: `
			<div class="toggle">
				<div class="toggle__handler"></div>
			</div>
		`,

		addEventListeners: function() {

			this.dom.addEventListener('click', () => {
				this.value = !this.value;
				this.refresh();
				this.__onChange();
				this.dom.classList.toggle('active');
			});

		}

	})

}