import { el } from "@fils/utils";
import { CSS_UI } from "../../../partials/cssClasses";
import { Item } from "../Item";
const c = {
  type: "boolean",
  input: "_ui-toggle"
};
export class BooleanItem extends Item {
  addEventListeners() {
    this.el.addEventListener("click", () => {
      this.setValue(!this.value);
    });
  }
  createContent() {
    const wrapper = el("div", c.input);
    const thumb = el("div");
    wrapper.appendChild(thumb);
    this.content.appendChild(wrapper);
  }
  refreshDom() {
    this.el.classList.toggle(CSS_UI.utility.active, this.value);
    super.refreshDom();
  }
}
