"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacer = exports.SpacerSize = void 0;
const cssClasses_1 = require("../partials/cssClasses");
const dom_1 = require("../utils/dom");
const UIElement_1 = require("./UIElement");
/**
 * Spacer size options.
 *
 * @typedef {SpacerSize} WidgetOption
 * @property {string} small - Small.
 * @property {string} medium - Medium.
 * @property {string} large - Large.
 * @default medium
 */
var SpacerSize;
(function (SpacerSize) {
    SpacerSize["small"] = "Small";
    SpacerSize["medium"] = "Medium";
    SpacerSize["large"] = "Large";
})(SpacerSize = exports.SpacerSize || (exports.SpacerSize = {}));
class Spacer extends UIElement_1.UIElement {
    constructor(depth, { size = SpacerSize.medium, line = true, }) {
        super(dom_1.RowTypes.spacer);
        this.type = dom_1.RowTypes.spacer;
        this.init(depth);
        if (line)
            this.el.classList.add(cssClasses_1.CSS_UI.spacer.hasLine);
        this.el.classList.add(cssClasses_1.CSS_UI.spacer.size[size.toLowerCase()]);
    }
}
exports.Spacer = Spacer;
