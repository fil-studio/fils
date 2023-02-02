import { MathUtils } from "@fils/math";
import { CSS_UI } from "../../../partials/cssClasses";
import check from "../../../utils/check";
import { ItemDom } from "../../Item";
import { ExtendedItem } from "../ExtendedItem";
import { RangeItemOptions } from "../ItemOptions";

CSS_UI.items.push({
	type: 'range',
	input: '_ui-range-input',
	track: '_ui-range-track',
	overExpose: '_ui-range-overexpose',
	overExposeMin: '_ui-range-overexpose-min',
	overExposeMax: '_ui-range-overexpose-max',
	thumb: '_ui-range-thumb',
});
const c = CSS_UI.getItemClasses('range');

interface RangeDom extends ItemDom {
	input: HTMLInputElement,
	range: HTMLElement,
	thumb: HTMLElement
}

export class RangeItem extends ExtendedItem {

	protected options: RangeItemOptions;

	dom: RangeDom;

	max: number;
	min: number;
	step: number;
	decimals: number;

	limitNumber = (value: number):number => {

		let tmp = value;
		if(this.max) tmp = Math.min(tmp, this.max);
		if(this.min) tmp = Math.max(tmp, this.min);

		// Round to decimals
		tmp = Math.round(tmp * Math.pow(10, this.decimals)) / Math.pow(10, this.decimals);

		return tmp;
	}

	protected addEventListeners(): void {

		this.dom.input.value = `${Math.max(Math.min(this.max, this.value), this.min)}`;

		this.updateRange();

		this.dom.input.addEventListener('change', () => {
			let value = this.dom.input.valueAsNumber;
			value = this.limitNumber(value);
			this.dom.input.valueAsNumber = value;
			this.setValue(value);
			this.updateRange();
		});

		let dragging = false;
		let x = 0;
		let originalValue = 0;

		const mouseDown = (e) => {
			const t = e.target as HTMLElement;
			if (t != this.dom.thumb) return;
			dragging = true;
			this.dom.thumb.classList.add(CSS_UI.utility.grab);
			x = e.clientX;
			const { width } = this.dom.range.getBoundingClientRect();
			originalValue = MathUtils.map(this.mappedValue, 0, 1, 0, width);
		}

		const mouseMove = (e) => {
			if (!dragging) return;

			const movementDistance = originalValue + (e.clientX - x);
			const { width } = this.dom.range.getBoundingClientRect();

			const newValueMapped = MathUtils.clamp(MathUtils.map(movementDistance, 0, width, 0, 1), 0, 1);
			const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);

			this.value = Math.round(newValue / this.step) * this.step;

			this.updateInput();
			this.updateRange();
		}

		const mouseClick = (e) => {
			const t = e.target as HTMLElement;
			if (t === this.dom.thumb) return;

			const { left, width } = this.dom.range.getBoundingClientRect();
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
			this.dom.thumb.classList.remove(CSS_UI.utility.grab);
		}

		this.dom.range.addEventListener('click', (e) => {
			mouseClick(e);
		})

		this.dom.range.addEventListener('mousedown', (e) => {
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

		this.max = this.options.max || undefined;
		this.min = this.options.min || undefined;
		this.step = this.options.step || 0.01;
		this.decimals = this.options.decimals || 2;

		this.dom.content.innerHTML = `
			<div class="${c.input}">
				<div class="${c.track}"></div>
				<div class="${c.overExpose} ${c.overExposeMin}"></div>
				<div class="${c.overExpose} ${c.overExposeMax}"></div>
				<div class="${c.thumb}"></div>
			</div>
			<input type="number" placeholder="Value"/>
		`;

		this.dom.input = this.dom.content.querySelector('input');
		if(this.min) this.dom.input.setAttribute('min', this.min.toString());
		if(this.max) this.dom.input.setAttribute('max', this.max.toString());
		if(this.step) this.dom.input.setAttribute('step', this.step.toString());

		this.dom.range = this.dom.content.querySelector(`.${c.input}`);
		this.dom.thumb = this.dom.content.querySelector(`.${c.thumb}`);

		this.setUpOverExpose();

		this.dom.input.min = `${this.min}`;
		this.dom.input.max = `${this.max}`;

		this.step = this.options.step || 0.01;
		if(this.step === 0) this.step = 0.01;

		this.dom.input.step = `${this.step}`;
	}

	protected setUpOverExpose(): void {
		const overExpose = this.options.overExpose || [0, 0];
		let limits = [0, 0] as [number, number];

		if (!check.isArray(overExpose)) limits = [overExpose as number, overExpose as number];
		else limits = overExpose as [number, number];

		this.min = this.options.min - limits[0];
		this.max = this.options.max + limits[1];

		const overExposeEls = this.dom.content.querySelectorAll(`.${c.overExpose}`) as NodeListOf<HTMLElement>;

		const distance = Math.abs(this.min - this.max);

		const left = MathUtils.map(limits[0], 0, distance, 0, 1);
		const right = MathUtils.map(limits[1], 0, distance, 0, 1);

		overExposeEls[0].style.setProperty('--size', `${left}`);
		overExposeEls[1].style.setProperty('--size', `${right}`);

	}

	protected updateRange(): void {
		this.dom.range.style.setProperty('--value', `${this.mappedValue}`);
	}
	protected updateInput(): void {
		this.dom.input.value = `${this.value.toFixed(2)}`;
	}

}
