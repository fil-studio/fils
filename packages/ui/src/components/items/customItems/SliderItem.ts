import { MathUtils } from "@fils/math";
import { ExtendedItem } from "../ExtendedItem";

export class SliderItem extends ExtendedItem {
	protected inputEl: HTMLInputElement;
	protected sliderEl: HTMLElement;

	protected addEventListeners(): void {

		this.inputEl.value = this.value;
		this.inputEl.max = `${this.options.max}`;
		this.inputEl.min = `${this.options.min}`;

		this.updateSlider();

		this.inputEl.addEventListener('change', () => {
			this.refresh();
			this.updateSlider();
		});

		let dragging = false;
		let x = 0;
		let w = 0;
		let originalValue = 0;

		const mouseDown = (clientX) => {
			dragging = true;
			x = clientX;

			const range = this.sliderEl.getBoundingClientRect();
			w = range.width;

			originalValue = MathUtils.map(this.mappedValue, 0, 1, 0, w);

			window.addEventListener('mouseup', () => {
				dragging = false;
				x = 0;
			}, { once: true })
		}

		const mouseMove = (clientX) => {
			if (!dragging) return;

			const movementDistance = originalValue + (clientX - x);

			// offset to prevent handle overlap
			const min = 1;
			const max = 0;

			const newValue = MathUtils.clamp(MathUtils.map(movementDistance, 0, w, 0, 1), 0, 1);
			this.value = MathUtils.map(newValue, 0, 1, this.options.min, this.options.max);

			this.updateInput();
			this.updateSlider();
		}


		this.sliderEl.addEventListener('mousedown', (e) => {
			mouseDown(e.clientX);
		});
		window.addEventListener('mousemove', (e) => {
			mouseMove(e.clientX);
		})

	}

	protected get mappedValue(): number {
		return MathUtils.map(this.value, this.options.min, this.options.max, 0, 1);
	}

	protected createDom(): void {
		this.inputWrapper.innerHTML = `
			<div class="_ui-slider-input">
				<div class="_ui-slider-track"></div>
				<div class="_ui-slider-min-overexpose"></div>
				<div class="_ui-slider-max-overexpose"></div>
				<div class="_ui-slider-thumb"></div>
			</div>
			<input type="number" placeholder="Value"/>
		`;

		this.inputEl = this.inputWrapper.querySelector('input');
		this.sliderEl = this.inputWrapper.querySelector('._ui-slider-input');
	}

	protected updateSlider(): void {
		this.sliderEl.style.setProperty('--value', `${this.mappedValue}`);
	}
	protected updateInput(): void {
		this.inputEl.value = `${this.value.toFixed(2)}`;
	}

	refresh(): void {
		this.value = this.inputEl.value;
		super.refresh();
	}
}

// const active = el.parentElement.classList.contains('handle-1') ? 1 : 2;

// let dragging = false;
// let x = 0;
// let w = 0;
// let originalValue = 0;

// const dom = active === 1 ? this.dom.querySelector('input[name="first"]') as HTMLInputElement : this.dom.querySelector('input[name="second"]') as HTMLInputElement;

// const mouseDown = (clientX) => {
// 	dragging = true;
// 	x = clientX;

// 	const first = this.dom.querySelector('input[name="first"]') as HTMLInputElement;
// 	const second = this.dom.querySelector('input[name="second"]') as HTMLInputElement;

// 	this.value1 = first.valueAsNumber;
// 	this.value2 = second.valueAsNumber;

// 	const range = this.dom.getBoundingClientRect();
// 	w = range.width;

// 	originalValue = MathUtils.map(active === 1 ? this.value1 : this.value2, 0, 1, 0, w);

// 	window.addEventListener('mouseup', () => {
// 		dragging = false;
// 		x = 0;
// 		this.updateValues();
// 		el.classList.remove('tooltip-active');
// 	}, { once: true })
// 	window.addEventListener('touchend', () => {
// 		dragging = false;
// 		x = 0;
// 		this.updateValues();
// 		el.classList.remove('tooltip-active');
// 	}, { once: true })
// }

// el.addEventListener('mousedown', (e) => {
// 	el.classList.add('tooltip-active');
// 	mouseDown(e.clientX);
// })
// el.addEventListener('touchstart', (e) => {
// 	el.classList.add('tooltip-active');
// 	mouseDown(e.touches[0].clientX);
// })



// window.addEventListener('touchmove', (e) => {
// 	mouseMove(e.touches[0].clientX);
// })