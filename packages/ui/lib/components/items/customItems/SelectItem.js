"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectItem = exports.SelectPanel = void 0;
const utils_1 = require("@fils/utils");
const ui_icons_1 = require("@fils/ui-icons");
const cssClasses_1 = require("../../../partials/cssClasses");
const check_1 = __importDefault(require("../../../utils/check"));
const Panel_1 = require("../../Panel");
const Item_1 = require("../Item");
const c = {
    type: 'select',
    input: '_ui-select-input',
    label: '_ui-select-label',
    open: '_ui-select-open',
    panel: '_ui-panel-select',
    option: '_ui-panel-select-option',
    search: '_ui-panel-select-search',
    optionNone: '_ui-panel-select-option-none',
    searchInput: '_ui-panel-select-search-input',
};
class SelectPanel extends Panel_1.Panel {
    constructor() {
        super(...arguments);
        this.parent = null;
        this.search = (0, utils_1.el)('div');
        this.searchInput = (0, utils_1.el)('input');
        this.optionNone = (0, utils_1.el)('div');
        this.options = [];
    }
    addEventListeners() {
        super.addEventListeners();
        window.addEventListener('click', (e) => {
            if (!this.created)
                return;
            const t = e.target;
            if (this.el.contains(t))
                return;
            if (this.parent.el.contains(t))
                return;
            this.destroy();
            this.parent.close();
        });
    }
    createPanelContent() {
        this.createSearch();
        const parentContent = this.parent.params.options;
        this.options = Object.keys(parentContent).map((key) => {
            const div = (0, utils_1.el)('div', c.option);
            const p = (0, utils_1.el)('p');
            p.innerHTML = key;
            div.appendChild(p);
            this.el.appendChild(div);
            const value = parentContent[key];
            if (this.parent.value === value)
                div.classList.add(cssClasses_1.CSS_UI.utility.hidden);
            div.addEventListener('click', () => {
                this.parent.setValue(value);
                this.destroy();
                this.parent.close();
            });
            return {
                key,
                value,
                dom: div,
            };
        });
        this.optionNone = (0, utils_1.el)('div', c.optionNone);
        const p = (0, utils_1.el)('p');
        p.innerHTML = 'No options found';
        this.optionNone.appendChild(p);
        this.el.appendChild(this.optionNone);
        this.optionNone.classList.add(cssClasses_1.CSS_UI.utility.hidden);
        setTimeout(() => this.searchInput.focus(), 10);
    }
    searchOptions() {
        const search = this.searchInput.value.toLowerCase();
        this.optionNone.classList.remove(cssClasses_1.CSS_UI.utility.hidden);
        this.options.map(option => {
            if (option.key.toLowerCase().indexOf(search) >= 0 || String(option.value).toLowerCase().indexOf(search) >= 0 || search === '') {
                option.dom.classList.remove(cssClasses_1.CSS_UI.utility.hidden);
                this.optionNone.classList.add(cssClasses_1.CSS_UI.utility.hidden);
            }
            else {
                option.dom.classList.add(cssClasses_1.CSS_UI.utility.hidden);
            }
        });
    }
    createSearch() {
        this.search = (0, utils_1.el)('div', c.search, this.el);
        this.searchInput = (0, utils_1.el)('input', c.searchInput);
        this.searchInput.placeholder = 'Search';
        this.searchInput.type = 'text';
        this.search.appendChild(this.searchInput);
        this.el.appendChild(this.search);
        this.searchInput.addEventListener('input', () => {
            this.searchOptions();
        });
    }
}
exports.SelectPanel = SelectPanel;
class SelectItem extends Item_1.Item {
    constructor() {
        super(...arguments);
        this.options = {};
        this.input = (0, utils_1.el)('div');
        this.label = (0, utils_1.el)('div');
        this.activeOption = (0, utils_1.el)('div');
    }
    afterCreate() {
        this.panel = new SelectPanel(this);
    }
    addEventListeners() {
        super.addEventListeners();
        this.input.addEventListener('click', () => {
            if (!this.panel.created) {
                this.panel.create();
                this.open();
            }
            else {
                this.panel.destroy();
                this.close();
            }
        });
    }
    open() {
        this.el.classList.add(c.open);
    }
    close() {
        this.el.classList.remove(c.open);
    }
    createContent() {
        this.input = (0, utils_1.el)('div', c.input, this.content);
        this.input.innerHTML = ui_icons_1.uiDownarrowHlt;
        this.label = (0, utils_1.el)('p', c.label, this.input);
    }
    setValue(value) {
        this.label.innerHTML = check_1.default.isNull(value) || check_1.default.isUndefined(value) ? 'Select...' : value;
        super.setValue(value);
    }
}
exports.SelectItem = SelectItem;
