import { MathUtils } from "@fils/math";
import { el, isArray, remove } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import { Item } from "../Item";
import { RangeItemParameters } from "../ItemParameters";
import { UIEventListener } from "../../../main";

const c = {
	type: 'range',
	input: '_ui-range-input',
	track: '_ui-range-track',
	overExpose: '_ui-range-overexpose',
	overExposeMin: '_ui-range-overexpose-min',
	overExposeMax: '_ui-range-overexpose-max',
	thumb: '_ui-range-thumb',
};



export class RangeItem extends Item {
	input!: HTMLInputElement;
	range!: HTMLElement;
	thumb!: HTMLElement;

	params!: RangeItemParameters;

	max: number = 0;
	min: number = 1;
	step: number = 0.01;

	private _decimals:number;

	getDecimals(): number {
		if(this._decimals) return this._decimals
		const decimals = this.step.toString().split('.')[1];
		this._decimals = decimals && decimals.length ? decimals.length : 0;
		return this._decimals;
	}

	getRounding(): number {
		const d = this.getDecimals();
		const D = Math.pow(10, d);

		return D;
	}

	getStringDecimals(value:number): string {
		const D = this.getRounding();
		return (Math.round(value * D) / D).toFixed(this.getDecimals());
	}

	limitNumber = (value: number): number => {
		const D = this.getRounding();

		if (this.max) value = Math.min(value, this.max);
		if (this.min) value = Math.max(value, this.min);

		// Round to decimals
		const tmp = (Math.round(value * D) / D).toFixed(this.getDecimals());

		return parseFloat(tmp);
	}

	addEventListeners(): void {

		const inputChange:UIEventListener = {
			target: this.input,
			type: 'change',
			callback: (e) => {
				this.setValue(this.input.valueAsNumber);
			}
		}
		this.addEventListener(inputChange);

		let dragging = false;
		let x = 0;
		let originalValue = 0;

		const mouseDown = (target:HTMLElement, newX:number) => {
			const t = target
			if (t != this.thumb) return;
			dragging = true;
			this.thumb.classList.add(CSS_UI.utility.grab);
			x = newX;
			const { width } = this.range.getBoundingClientRect();
			originalValue = MathUtils.map(this.mappedValue, 0, 1, 0, width);
		}

		const mouseMove = (newX: number) => {
			if (!dragging) return;

			const movementDistance = originalValue + (newX - x);
			const { width } = this.range.getBoundingClientRect();

			const newValueMapped = MathUtils.clamp(MathUtils.map(movementDistance, 0, width, 0, 1), 0, 1);
			const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);
			this.setValue(newValue);
		}

		const mouseClick = (e:MouseEvent) => {
			const t = e.target as HTMLElement;
			if (t === this.thumb) return;

			const { left, width } = this.range.getBoundingClientRect();
			const newPosition = e.clientX - left;

			const newValueMapped = MathUtils.clamp(MathUtils.map(newPosition, 0, width, 0, 1), 0, 1);
			const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);
			this.setValue(newValue);
		}

		const reset = () => {
			if (!dragging) return
			dragging = false;
			x = 0;
			this.thumb.classList.remove(CSS_UI.utility.grab);
		}

		const rangeClick:UIEventListener = {
			target: this.range,
			type: 'click',
			callback: (e: MouseEvent) => mouseClick(e)
		}
		this.addEventListener(rangeClick);

		const rangeMouseDown:UIEventListener = {
			target: this.range,
			type: 'mousedown',
			callback: (e: MouseEvent) => mouseDown(e.target as HTMLElement, e.clientX)
		}
		this.addEventListener(rangeMouseDown);

		const rangeTouchStart:UIEventListener = {
			target: this.range,
			type: 'touchstart',
			callback: (e: TouchEvent) => mouseDown(e.target as HTMLElement, e.touches[0].clientX)
		}
		this.addEventListener(rangeTouchStart);

		const windowMouseMove:UIEventListener = {
			target: window,
			type: 'mousemove',
			callback: (e:MouseEvent) => mouseMove(e.clientX)
		}
		this.addEventListener(windowMouseMove);

		const windowTouchMove:UIEventListener = {
			target: window,
			type: 'touchmove',
			callback: (e: TouchEvent) => mouseMove(e.touches[0].clientX)
		}
		this.addEventListener(windowTouchMove);

		const windowMouseUp:UIEventListener = {
			target: window,
			type: 'mouseup',
			callback: (e:MouseEvent) => reset()
		}
		this.addEventListener(windowMouseUp);

		const windowTouchEnd:UIEventListener = {
			target: window,
			type: 'touchend',
			callback: (e: TouchEvent) => reset()
		}
		this.addEventListener(windowTouchEnd);
	}

	protected get mappedValue(): number {
		return MathUtils.clamp(MathUtils.map(this.value, this.min, this.max, 0, 1), 0, 1);
	}

	protected createContent(): void {

		this.max = this.params.max ? this.params.max : this.max;
		this.min = this.params.min ? this.params.min : this.min;
		this.step = this.params.step ? this.params.step : this.step;

		this.content.innerHTML = `
			<div class="${c.input}">
				<div class="${c.track}"></div>
				<div class="${c.overExpose} ${c.overExposeMin}"></div>
				<div class="${c.overExpose} ${c.overExposeMax}"></div>
				<div class="${c.thumb}"></div>
			</div>
		`;

		this.input = el('input') as HTMLInputElement;
		this.input.type = 'number';
		this.input.setAttribute('tabindex', '1');

		this.input.placeholder = 'Value';
		this.input.classList.add(CSS_UI.item);
		if(this.min) this.input.setAttribute('min', this.min.toString());
		if(this.max) this.input.setAttribute('max', this.max.toString());
		if(this.step) this.input.setAttribute('step', this.step.toString());
		this.content.appendChild(this.input);

		this.range = this.content.querySelector(`.${c.input}`) as HTMLElement;
		this.thumb = this.content.querySelector(`.${c.thumb}`) as HTMLElement;

		this.setUpOverExpose();

	}

	protected setUpOverExpose(): void {
		const overExpose = this.params.overExpose || [0, 0];
		let limits = [0, 0] as [number, number];

		if (!isArray(overExpose)) limits = [overExpose as number, overExpose as number];
		else limits = overExpose as [number, number];

		this.min = this.params.min ? this.params.min - limits[0] : limits[0];
		this.max = this.params.max ? this.params.max + limits[1] : limits[1];

		const overExposeEls = this.content.querySelectorAll(`.${c.overExpose}`) as NodeListOf<HTMLElement>;

		const distance = Math.abs(this.min - this.max);

		const left = MathUtils.map(limits[0], 0, distance, 0, 1);
		const right = MathUtils.map(limits[1], 0, distance, 0, 1);

		overExposeEls[0].style.setProperty('--size', `${left}`);
		overExposeEls[1].style.setProperty('--size', `${right}`);

	}

	protected updateRange(): void {
		this.range.style.setProperty('--value', `${this.mappedValue}`);
	}
	protected updateInput(): void {
		this.input.value = this.getStringDecimals(this.value);
	}

	setValue(value: any): void {
		value = this.limitNumber(value);
		super.setValue(value);
	}

	refreshDom(): void {
		this.updateInput();
		this.updateRange();
		super.refreshDom();
	}

	destroy(): void {
		remove(this.input);
		remove(this.range);
		super.destroy();
	}
}
