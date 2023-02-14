import { el } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { ItemFactory } from "../partials/ItemFactory";
import { RowTypes } from "../utils/dom";
import { Button } from "./Button";
import { Spacer } from "./Spacer";
import { UIElement } from "./UIElement";
export class Group extends UIElement {
  constructor({
    title,
    folded = false,
    foldable = true
  }) {
    super(RowTypes.group, title);
    this.children = [];
    this.height = 0;
    this.folded = foldable ? folded : false;
    this.foldable = foldable;
  }
  createDom() {
    super.createDom();
    this.content = this.el.querySelector(`.${CSS_UI.section.content}`);
  }
  addEventListeners() {
    if (!this.foldable)
      return;
    this.el.classList.add(CSS_UI.section.foldable);
    this.foldWrapper = el("div", CSS_UI.section.foldableElement);
    this.el.appendChild(this.foldWrapper);
    this.foldWrapper.appendChild(this.content);
    const header = this.el.querySelector("header");
    header.addEventListener("click", () => {
      this.folded = !this.folded;
      this.onFold();
    });
    this.onFold();
  }
  onFold() {
    if (!this.foldable)
      return;
    const h = this.content.getBoundingClientRect().height;
    this.foldWrapper.style.height = `${h}px`;
    if (this.timer)
      clearTimeout(this.timer);
    setTimeout(() => {
      if (this.folded)
        this.el.classList.add(CSS_UI.section.folded);
      else
        this.el.classList.remove(CSS_UI.section.folded);
    }, 5);
    if (!this.folded) {
      const d = parseFloat(getComputedStyle(this.foldWrapper).transitionDuration) * 1e3;
      this.timer = setTimeout(() => {
        this.foldWrapper.style.height = `auto`;
      }, d);
    }
    this.emit("fold");
  }
  /**
   * Create a button
   */
  addButton(params) {
    const button = new Button(params);
    if (button) {
      button.init(this.depth + 1);
      this.content.appendChild(button.el);
    }
    return button;
  }
  /**
   * Create a group
   */
  addGroup(params) {
    const group = new Group(params);
    if (group) {
      group.on("__childrenChange", (target) => {
        this.change(target);
      });
      group.init(this.depth + 1);
      this.content.appendChild(group.el);
    }
    return group;
  }
  /**
   * Create spacer
   */
  addSpacer(params = {}) {
    const spacer = new Spacer(this.depth + 1, params);
    if (spacer && spacer.el)
      this.content.appendChild(spacer.el);
  }
  /**
   * Create an item
   */
  add(object, key, params) {
    return this.addItem(object, key, params);
  }
  addItem(object, key, params) {
    const createItemParams = { object, key, params };
    const item = ItemFactory(createItemParams);
    if (item) {
      item.on("__childrenChange", () => {
        this.change(item);
      });
      item.init(this.depth + 1);
      this.content.appendChild(item.el);
    }
    return item;
  }
  change(target) {
    this.emit("__childrenChange", target);
    this.emit("change", target);
  }
}
