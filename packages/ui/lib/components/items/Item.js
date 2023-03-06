import { isNull, isObject, isUndefined } from '@fils/utils';
import { CSS_UI } from '../../partials/cssClasses';
import { RowTypes } from '../../utils/dom';
import { UIElement } from '../UIElement';
export class Item extends UIElement {
    constructor(params) {
        var _a, _b;
        const title = ((_a = params.params) === null || _a === void 0 ? void 0 : _a.title) || params.key.charAt(0).toUpperCase() + params.key.slice(1);
        super(RowTypes.item, title);
        this.view = '';
        this._refreshing = false;
        this.params = params.params;
        this.view = ((_b = this.params) === null || _b === void 0 ? void 0 : _b.view) || '';
        this.object = params.object;
        this.key = params.key;
    }
    init(depth = 0) {
        super.init(depth);
        this._refreshing = true;
        this.setValue(this.object[this.key]);
        this._refreshing = false;
    }
    setValue(value) {
        this.value = value;
        if (isObject(this.object[this.key])) {
            for (const key in this.object[this.key]) {
                // If the key is not defined in the new value, we keep the old one
                if (isUndefined(this.value) || isNull(this.value))
                    continue;
                if (isUndefined(this.value[key]))
                    continue;
                else
                    this.object[this.key][key] = this.value[key];
            }
        }
        else
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
        this.content = this.el.querySelector(`.${CSS_UI.content}`);
        this.el.classList.add(`${CSS_UI.baseClass}-${this.view}`);
    }
    refreshDom() { }
    refresh() {
        this.emit('refresh');
        this._refreshing = true;
        this.setValue(this.object[this.key]);
        this._refreshing = false;
    }
}
