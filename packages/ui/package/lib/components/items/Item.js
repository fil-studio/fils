"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const cssClasses_1 = require("../../partials/cssClasses");
const dom_1 = require("../../utils/dom");
const UIElement_1 = require("../UIElement");
class Item extends UIElement_1.UIElement {
    constructor(params) {
        var _a;
        const title = ((_a = params.params) === null || _a === void 0 ? void 0 : _a.title) || params.key.charAt(0).toUpperCase() + params.key.slice(1);
        super(dom_1.RowTypes.item, title);
        this.params = params.params;
        this.object = params.object;
        this.key = params.key;
    }
    init(depth = 0) {
        super.init(depth);
        this.setValue(this.object[this.key]);
    }
    setValue(value) {
        this.value = value;
        this.object[this.key] = this.value;
        this.refreshDom();
    }
    /**
     * Dom
     */
    createDom() {
        super.createDom();
        this.content = this.el.querySelector('div');
        this.el.classList.add(`${cssClasses_1.CSS_UI.baseClass}-${this.params.view}`);
    }
    refreshDom() {
        this.emit('__childrenChange');
        this.emit('change');
    }
}
exports.Item = Item;
