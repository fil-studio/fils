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
		const mappedValue = MathUtils.map(this.value, this.options.min, this.options.max, 0, 1);
		this.sliderEl.style.setProperty('--value', `${mappedValue}`);
	}

	refresh(): void {
		this.value = this.inputEl.value;
		super.refresh();
	}
}

