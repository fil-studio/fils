import { MathUtils } from "@fils/math";
import { BASE_CLASS } from "../../../utils/dom";
import check from "../../../utils/check";
import { ExtendedItem } from "../ExtendedItem";

export class SliderItem extends ExtendedItem {
	protected inputEl: HTMLInputElement;
	protected sliderEl: HTMLElement;

	protected thumb: HTMLElement;

	protected min: number;
	protected max: number;

	protected addEventListeners(): void {

		this.inputEl.value = `${Math.max(Math.min(this.max, this.value), this.min)}`;

		this.updateSlider();

		this.inputEl.addEventListener('change', () => {
			this.value = this.inputEl.value;
			this.refresh();
			this.updateSlider();
		});

		let dragging = false;
		let x = 0;
		let originalValue = 0;

		const mouseDown = (e) => {
			const t = e.target as HTMLElement;
			if (t != this.thumb) return;
			dragging = true;
			this.thumb.classList.add(`${BASE_CLASS}-grabbing`);
			x = e.clientX;
			const { width } = this.sliderEl.getBoundingClientRect();
			originalValue = MathUtils.map(this.mappedValue, 0, 1, 0, width);
		}

		const mouseMove = (e) => {
			if (!dragging) return;

			const movementDistance = originalValue + (e.clientX - x);
			const { width } = this.sliderEl.getBoundingClientRect();

			const newValue = MathUtils.clamp(MathUtils.map(movementDistance, 0, width, 0, 1), 0, 1);
			this.value = MathUtils.map(newValue, 0, 1, this.min, this.max);

			this.updateInput();
			this.updateSlider();
		}

		const mouseClick = (e) => {
			const t = e.target as HTMLElement;
			if (t === this.thumb) return;

			const { left, width } = this.sliderEl.getBoundingClientRect();
			const newPosition = e.clientX - left;

			const newValue = MathUtils.clamp(MathUtils.map(newPosition, 0, width, 0, 1), 0, 1);
			this.value = MathUtils.map(newValue, 0, 1, this.min, this.max);

			this.updateInput();
			this.updateSlider();
		}

		const reset = () => {
			if (!dragging) return
			dragging = false;
			x = 0;
			this.thumb.classList.remove(`${BASE_CLASS}-grabbing`);
		}

		this.sliderEl.addEventListener('click', (e) => {
			mouseClick(e);
		})

		this.sliderEl.addEventListener('mousedown', (e) => {
			mouseDown(e);
		});
		window.addEventListener('mousemove', (e) => {
			mouseMove(e);
		})
		window.addEventListener('mouseup', () => {
			reset();
		});

	}

	protected get mappedValue(): number {
		return MathUtils.clamp(MathUtils.map(this.value, this.min, this.max, 0, 1), 0, 1);
	}

	protected createDom(): void {
		this.inputWrapper.innerHTML = `
			<div class="_ui-slider-input">
				<div class="_ui-slider-track"></div>
				<div class="_ui-slider-overexpose _ui-slider-overexpose-min"></div>
				<div class="_ui-slider-overexpose _ui-slider-overexpose-max"></div>
				<div class="_ui-slider-thumb"></div>
			</div>
			<input type="number" placeholder="Value"/>
		`;

		this.inputEl = this.inputWrapper.querySelector('input');
		this.sliderEl = this.inputWrapper.querySelector('._ui-slider-input');
		this.thumb = this.inputWrapper.querySelector('._ui-slider-thumb');

		this.setUpOverExpose();
	}

	protected setUpOverExpose(): void {
		const overExpose = this.options.overExpose || [0, 0];
		let limits = [0, 0] as [number, number];

		if (!check.isArray(overExpose)) limits = [overExpose as number, overExpose as number];
		else limits = overExpose as [number, number];

		this.min = this.options.min - limits[0];
		this.max = this.options.max + limits[1];

		this.inputEl.min = `${this.min}`;
		this.inputEl.max = `${this.max}`;

		const overExposeEls = this.inputWrapper.querySelectorAll('._ui-slider-overexpose') as NodeListOf<HTMLElement>;

		const distance = Math.abs(this.min - this.max);

		const left = MathUtils.map(limits[0], 0, distance, 0, 1);
		const right = MathUtils.map(limits[1], 0, distance, 0, 1);

		overExposeEls[0].style.setProperty('--size', `${left}`);
		overExposeEls[1].style.setProperty('--size', `${right}`);

	}

	protected updateSlider(): void {
		this.sliderEl.style.setProperty('--value', `${this.mappedValue}`);
	}
	protected updateInput(): void {
		this.inputEl.value = `${this.value.toFixed(2)}`;
	}

}
