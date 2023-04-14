import { el, isNull, isUndefined, remove } from "@fils/utils";
import { CSS_UI } from "../../../main";
import { Item } from "../Item";
export class StringItem extends Item {
    constructor() {
        super(...arguments);
        this.input = el('input');
    }
    addEventListeners() {
        this.input.addEventListener('change', () => {
            this.setValue(this.input.value);
        });
    }
    createContent() {
        this.input = el('input');
        this.input.setAttribute('tabindex', '1');
        this.input.placeholder = 'String';
        this.input.type = 'text';
        this.input.classList.add(CSS_UI.item);
        this.content.appendChild(this.input);
    }
    setValue(value) {
        if (isNull(value) || isUndefined(value)) {
            value = 'String';
        }
        super.setValue(value);
    }
    refreshDom() {
        this.input.value = this.value;
        super.refreshDom();
    }
    destroy() {
        remove(this.input);
        super.destroy();
    }
}
