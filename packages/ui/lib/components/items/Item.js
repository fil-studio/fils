import { CSS_UI } from '../../partials/cssClasses';
import { RowTypes } from '../../utils/dom';
import { UIElement } from '../UIElement';
export class Item extends UIElement {
    constructor(params) {
        var _a;
        const title = ((_a = params.params) === null || _a === void 0 ? void 0 : _a.title) || params.key.charAt(0).toUpperCase() + params.key.slice(1);
        super(RowTypes.item, title);
        this._refreshing = false;
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
        if (this.value !== undefined && !this._refreshing) {
            this.emit('__childrenChange');
            this.emit('change');
        }
        this.refreshDom();
    }
    /**
     * Dom
     */
    createDom() {
        super.createDom();
        this.content = this.el.querySelector('div');
        this.el.classList.add(`${CSS_UI.baseClass}-${this.params.view}`);
    }
    refreshDom() { }
    refresh() {
        this.emit('refresh');
        this._refreshing = true;
        this.setValue(this.object[this.key], true);
        this._refreshing = false;
    }
}
