import { RegisterItem } from "./ItemFactory";


export const RegisterBaseComponents = () => {

	RegisterItem({
		name: 'BooleanItem',
		type: 'boolean',
		createDom: function() {

			const wrapper = this.dom.querySelector('div');
			const toggle = document.createElement('div');
			toggle.classList.add('toggle');
			wrapper.appendChild(toggle);

		},

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