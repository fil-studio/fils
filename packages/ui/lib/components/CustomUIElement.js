import { RowTypes } from "../main";
import { UIElement } from "./UIElement";
export class CustomUIElement extends UIElement {
    constructor(params) {
        super(RowTypes.custom);
        this.params = params;
    }
}
