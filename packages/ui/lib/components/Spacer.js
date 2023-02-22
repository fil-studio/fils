import { CSS_UI } from "../partials/cssClasses";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
/**
 * Spacer size options.
 *
 * @typedef {SpacerSize} WidgetOption
 * @property {string} small - Small.
 * @property {string} medium - Medium.
 * @property {string} large - Large.
 * @default medium
 */
export var SpacerSize;
(function (SpacerSize) {
    SpacerSize["small"] = "Small";
    SpacerSize["medium"] = "Medium";
    SpacerSize["large"] = "Large";
})(SpacerSize || (SpacerSize = {}));
export class Spacer extends UIElement {
    constructor(depth, { size = SpacerSize.medium, line = true, }) {
        super(RowTypes.spacer);
        this.type = RowTypes.spacer;
        this.init(depth);
        if (line)
            this.el.classList.add(CSS_UI.spacer.hasLine);
        this.el.classList.add(CSS_UI.spacer.size[size.toLowerCase()]);
    }
}
