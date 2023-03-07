import { el, isArray } from "@fils/utils";
import { CSS_UI } from "../main";
import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export class Info extends UIElement {
    constructor(depth, params) {
        super(RowTypes.info);
        this.params = params;
        this.init(depth);
    }
    createContent() {
        const texts = this.params.text;
        if (isArray(texts)) {
            for (let i = 0; i < this.params.text.length; i++)
                this.createText(this.params.text[i]);
        }
        else
            this.createText(this.params.text);
    }
    createText(text) {
        const p = el('p', CSS_UI.info.text, this.el);
        p.innerText = text;
    }
}
