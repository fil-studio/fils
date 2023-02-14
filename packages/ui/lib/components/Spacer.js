import { CSS_UI } from "../partials/cssClasses";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export var SpacerSize = /* @__PURE__ */ ((SpacerSize2) => {
  SpacerSize2["small"] = "small";
  SpacerSize2["medium"] = "medium";
  SpacerSize2["large"] = "large";
  return SpacerSize2;
})(SpacerSize || {});
export class Spacer extends UIElement {
  constructor(depth, {
    size = "medium" /* medium */,
    line = true
  }) {
    super(RowTypes.spacer);
    this.type = RowTypes.spacer;
    this.init(depth);
    if (line)
      this.el.classList.add(CSS_UI.spacer.hasLine);
    this.el.classList.add(CSS_UI.spacer.size[size]);
  }
}
