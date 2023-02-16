import { el } from "@fils/utils";
import { CSS_UI } from "../../../main";
import check from "../../../utils/check";
import { Item } from "../Item";
export class StringItem extends Item {
  constructor() {
    super(...arguments);
    this.input = el("input");
  }
  addEventListeners() {
    this.input.addEventListener("change", () => {
      this.setValue(this.input.value);
    });
  }
  createContent() {
    this.input = el("input");
    this.input.placeholder = "String";
    this.input.type = "text";
    this.input.classList.add(CSS_UI.item);
    this.content.appendChild(this.input);
  }
  setValue(value) {
    if (check.isNull(value) || check.isUndefined(value)) {
      value = "String";
    }
    super.setValue(value);
  }
  refreshDom() {
    this.input.value = this.value;
    super.refreshDom();
  }
}
