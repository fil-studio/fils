import { CSS_UI } from "../partials/cssClasses";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export class Spacer extends UIElement {
    constructor(depth, { size = 'medium', line = true, }) {
        super(RowTypes.spacer);
        this.type = RowTypes.spacer;
        this.init(depth);
        if (line)
            this.el.classList.add(CSS_UI.spacer.hasLine);
        this.el.classList.add(CSS_UI.spacer.size[size.toLowerCase()]);
    }
}
