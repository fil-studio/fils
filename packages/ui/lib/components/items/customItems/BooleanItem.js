"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanItem = void 0;
const utils_1 = require("@fils/utils");
const cssClasses_1 = require("../../../partials/cssClasses");
const Item_1 = require("../Item");
const c = {
    type: 'boolean',
    input: '_ui-toggle',
};
class BooleanItem extends Item_1.Item {
    addEventListeners() {
        this.el.addEventListener('click', () => {
            this.setValue(!this.value);
        });
    }
    createContent() {
        const wrapper = (0, utils_1.el)('div', c.input);
        const thumb = (0, utils_1.el)('div');
        wrapper.appendChild(thumb);
        this.content.appendChild(wrapper);
    }
    refreshDom() {
        this.el.classList.toggle(cssClasses_1.CSS_UI.utility.active, this.value);
        super.refreshDom();
    }
}
exports.BooleanItem = BooleanItem;
