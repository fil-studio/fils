import { MathUtils } from "@fils/math";
import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import check from "../../../utils/check";
import { Item } from "../Item";
const c = {
  type: "range",
  input: "_ui-range-input",
  track: "_ui-range-track",
  overExpose: "_ui-range-overexpose",
  overExposeMin: "_ui-range-overexpose-min",
  overExposeMax: "_ui-range-overexpose-max",
  thumb: "_ui-range-thumb"
};
export class RangeItem extends Item {
  constructor() {
    super(...arguments);
    this.max = 0;
    this.min = 1;
    this.step = 0.01;
    this.limitNumber = (value) => {
      if (this.max)
        value = Math.min(value, this.max);
      if (this.min)
        value = Math.max(value, this.min);
      const tmp = (Math.round(value * 100) / 100).toFixed(this.getDecimals());
      return parseFloat(tmp);
    };
  }
  getDecimals() {
    const decimals = this.step.toString().split(".")[1];
    return decimals ? decimals.length : 0;
  }
  getStringDecimals(value) {
    return (Math.round(value * 100) / 100).toFixed(this.getDecimals());
  }
  addEventListeners() {
    this.input.addEventListener("change", () => {
      this.setValue(this.input.valueAsNumber);
    });
    let dragging = false;
    let x = 0;
    let originalValue = 0;
    const mouseDown = (target, newX) => {
      const t = target;
      if (t != this.thumb)
        return;
      dragging = true;
      this.thumb.classList.add(CSS_UI.utility.grab);
      x = newX;
      const { width } = this.range.getBoundingClientRect();
      originalValue = MathUtils.map(this.mappedValue, 0, 1, 0, width);
    };
    const mouseMove = (newX) => {
      if (!dragging)
        return;
      const movementDistance = originalValue + (newX - x);
      const { width } = this.range.getBoundingClientRect();
      const newValueMapped = MathUtils.clamp(MathUtils.map(movementDistance, 0, width, 0, 1), 0, 1);
      const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);
      this.setValue(newValue);
    };
    const mouseClick = (e) => {
      const t = e.target;
      if (t === this.thumb)
        return;
      const { left, width } = this.range.getBoundingClientRect();
      const newPosition = e.clientX - left;
      const newValueMapped = MathUtils.clamp(MathUtils.map(newPosition, 0, width, 0, 1), 0, 1);
      const newValue = MathUtils.map(newValueMapped, 0, 1, this.min, this.max);
      this.setValue(newValue);
    };
    const reset = () => {
      if (!dragging)
        return;
      dragging = false;
      x = 0;
      this.thumb.classList.remove(CSS_UI.utility.grab);
    };
    this.range.addEventListener("click", (e) => {
      mouseClick(e);
    });
    this.range.addEventListener("mousedown", (e) => mouseDown(e.target, e.clientX));
    this.range.addEventListener("touchstart", (e) => mouseDown(e.target, e.touches[0].clientX));
    window.addEventListener("mousemove", (e) => mouseMove(e.clientX));
    window.addEventListener("touchmove", (e) => mouseMove(e.touches[0].clientX));
    window.addEventListener("mouseup", () => reset());
    window.addEventListener("touchend", () => reset());
  }
  get mappedValue() {
    return MathUtils.clamp(MathUtils.map(this.value, this.min, this.max, 0, 1), 0, 1);
  }
  createContent() {
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
    this.input = el("input");
    this.input.type = "number";
    this.input.placeholder = "Value";
    this.input.classList.add(CSS_UI.item);
    if (this.min)
      this.input.setAttribute("min", this.min.toString());
    if (this.max)
      this.input.setAttribute("max", this.max.toString());
    if (this.step)
      this.input.setAttribute("step", this.step.toString());
    this.content.appendChild(this.input);
    this.range = this.content.querySelector(`.${c.input}`);
    this.thumb = this.content.querySelector(`.${c.thumb}`);
    this.setUpOverExpose();
  }
  setUpOverExpose() {
    const overExpose = this.params.overExpose || [0, 0];
    let limits = [0, 0];
    if (!check.isArray(overExpose))
      limits = [overExpose, overExpose];
    else
      limits = overExpose;
    this.min = this.params.min ? this.params.min - limits[0] : limits[0];
    this.max = this.params.max ? this.params.max + limits[1] : limits[1];
    const overExposeEls = this.content.querySelectorAll(`.${c.overExpose}`);
    const distance = Math.abs(this.min - this.max);
    const left = MathUtils.map(limits[0], 0, distance, 0, 1);
    const right = MathUtils.map(limits[1], 0, distance, 0, 1);
    overExposeEls[0].style.setProperty("--size", `${left}`);
    overExposeEls[1].style.setProperty("--size", `${right}`);
  }
  updateRange() {
    this.range.style.setProperty("--value", `${this.mappedValue}`);
  }
  updateInput() {
    this.input.value = this.getStringDecimals(this.value);
  }
  setValue(value) {
    value = this.limitNumber(value);
    super.setValue(value);
  }
  refreshDom() {
    this.updateInput();
    this.updateRange();
    super.refreshDom();
  }
}