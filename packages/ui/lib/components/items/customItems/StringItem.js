import { el } from "@fils/utils";
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
    this.content.appendChild(this.input);
  }
  setValue(_value) {
    let value = _value;
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
//# sourceMappingURL=StringItem.js.map
