import { MathUtils } from "@fils/math";
import check from "../../../utils/check";
import { BASE_CLASS } from "../../../utils/dom";
import { ExtendedItem } from "../ExtendedItem";
import { RangeItemOptions } from "../ItemOptions";

export class RangeItem extends ExtendedItem {

	protected options: RangeItemOptions;

	protected inputEl: HTMLInputElement;
	protected rangeEl: HTMLElement;

	protected thumb: HTMLElement;

	protected min: number;
	protected max: number;

	protected step: number;

	protected addEventListeners(): void {

		this.inputEl.value = `${Math.max(Math.min(this.max, this.value), this.min)}`;

		this.updateRange();

		this.inputEl.addEventListener('change', () => {
			this.value = this.inputEl.value;
			this.refresh();
			this.updateRange();
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
			const { width } = this.rangeEl.getBoundingClientRect();
			originalValue = MathUtils.map(this.mappedValue, 0, 1, 0, width);
		}

		const mouseMove = (e) => {
			if (!dragging) return;

			const movementDistance = originalValue + (e.clientX - x);
			const { width } = this.rangeEl.getBoundingClientRect();

			const newValueMapped = MathUtils.clamp(MathUtils.map(movementDistance, 0, width, 0, 1), 0, 1);
			const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);

			this.value = Math.round(newValue / this.step) * this.step;

			this.updateInput();
			this.updateRange();
		}

		const mouseClick = (e) => {
			const t = e.target as HTMLElement;
			if (t === this.thumb) return;

			const { left, width } = this.rangeEl.getBoundingClientRect();
			const newPosition = e.clientX - left;

			const newValueMapped = MathUtils.clamp(MathUtils.map(newPosition, 0, width, 0, 1), 0, 1);
			const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);
			this.value = Math.round(newValue / this.step) * this.step;

			this.updateInput();
			this.updateRange();
		}

		const reset = () => {
			if (!dragging) return
			dragging = false;
			x = 0;
			this.thumb.classList.remove(`${BASE_CLASS}-grabbing`);
		}

		this.rangeEl.addEventListener('click', (e) => {
			mouseClick(e);
		})

		this.rangeEl.addEventListener('mousedown', (e) => {
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
			<div class="_ui-range-input">
				<div class="_ui-range-track"></div>
				<div class="_ui-range-overexpose _ui-range-overexpose-min"></div>
				<div class="_ui-range-overexpose _ui-range-overexpose-max"></div>
				<div class="_ui-range-thumb"></div>
			</div>
			<input type="number" placeholder="Value"/>
		`;

		this.inputEl = this.inputWrapper.querySelector('input');
		this.rangeEl = this.inputWrapper.querySelector('._ui-range-input');
		this.thumb = this.inputWrapper.querySelector('._ui-range-thumb');

		this.setUpOverExpose();

		this.inputEl.min = `${this.min}`;
		this.inputEl.max = `${this.max}`;

		this.step = this.options.step || 0.01;
		if(this.step === 0) this.step = 0.01;

		this.inputEl.step = `${this.step}`;
	}

	protected setUpOverExpose(): void {
		const overExpose = this.options.overExpose || [0, 0];
		let limits = [0, 0] as [number, number];

		if (!check.isArray(overExpose)) limits = [overExpose as number, overExpose as number];
		else limits = overExpose as [number, number];

		this.min = this.options.min - limits[0];
		this.max = this.options.max + limits[1];

		const overExposeEls = this.inputWrapper.querySelectorAll('._ui-range-overexpose') as NodeListOf<HTMLElement>;

		const distance = Math.abs(this.min - this.max);

		const left = MathUtils.map(limits[0], 0, distance, 0, 1);
		const right = MathUtils.map(limits[1], 0, distance, 0, 1);

		overExposeEls[0].style.setProperty('--size', `${left}`);
		overExposeEls[1].style.setProperty('--size', `${right}`);

	}

	protected updateRange(): void {
		this.rangeEl.style.setProperty('--value', `${this.mappedValue}`);
	}
	protected updateInput(): void {
		this.inputEl.value = `${this.value.toFixed(2)}`;
	}

}
