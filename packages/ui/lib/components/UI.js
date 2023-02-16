var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { el } from "@fils/utils";
import { UIInjectCSS } from "../utils/css";
import { CSS_UI } from "../partials/cssClasses";
import { RegisterBaseComponents } from "../partials/RegisterBaseItems";
import dom, { RowTypes } from "../utils/dom";
import { Group } from "./Group";
RegisterBaseComponents();
UIInjectCSS();
export class UI extends Group {
  constructor({
    resizable = true,
    parentElement,
    icon,
    width
  } = {}) {
    super(__spreadValues({}, arguments[0]));
    this.wrapper = el("div");
    this.resizable = parentElement ? false : resizable;
    this.init(0);
    this.addIcon(icon);
    this.appendTo(parentElement);
    if (width) {
      this.wrapper.style.setProperty("--wrapper-width", `${width}px`);
    }
  }
  appendTo(parentElement) {
    if (parentElement) {
      this.wrapper.classList.add(CSS_UI.parent);
      parentElement.appendChild(this.wrapper);
    } else {
      document.body.appendChild(this.wrapper);
    }
  }
  addIcon(icon) {
    if (!icon)
      return;
    dom.addIcon(this.el.querySelector("header"), icon);
  }
  createDom() {
    super.createDom();
    this.wrapper = dom.createRow({
      type: RowTypes.ui,
      depth: this.depth
    });
    this.wrapper.appendChild(this.el);
  }
  addEventListeners() {
    super.addEventListeners();
    if (!this.resizable)
      return;
    const resizer = el("div", CSS_UI.resizer);
    this.wrapper.appendChild(resizer);
    const resize = (w, x2) => {
      if (x2 < 0 && w + x2 < 300)
        return;
      this.wrapper.style.setProperty("--wrapper-width", `${w + x2}px`);
      this.emit("resize");
    };
    let dragging = false;
    let x = 0;
    let distance = 0;
    let width = 0;
    resizer.addEventListener("mousedown", (e) => {
      dragging = true;
      x = e.clientX;
      width = this.wrapper.getBoundingClientRect().width;
    });
    window.addEventListener("mousemove", (e) => {
      if (!dragging)
        return;
      e.preventDefault();
      distance = x - e.clientX;
      resize(width, distance);
    });
    window.addEventListener("mouseup", (e) => {
      if (!dragging)
        return;
      e.preventDefault();
      dragging = false;
    });
  }
}
