import { el } from '@fils/utils';
import { uiDownarrowHlt } from '@fils/ui-icons';
import { CSS_UI } from '../../../partials/cssClasses';
import check from '../../../utils/check';
import { Panel } from '../../Panel';
import { Item } from '../Item';
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
export class SelectPanel extends Panel {
    constructor() {
        super(...arguments);
        this.parent = null;
        this.search = el('div');
        this.searchInput = el('input');
        this.optionNone = el('div');
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
        // this.createSearch();
        const parentContent = this.parent.params.options;
        this.options = Object.keys(parentContent).map((key) => {
            // Create option
            const div = el('div', c.option);
            const p = el('p');
            p.innerHTML = key;
            div.appendChild(p);
            this.el.appendChild(div);
            const value = parentContent[key];
            // Hide selected option
            if (this.parent.value === value)
                div.classList.add(CSS_UI.utility.active);
            // Add event listener
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
        // Empty options message
        this.optionNone = el('div', c.optionNone);
        const p = el('p');
        p.innerHTML = 'No options found';
        this.optionNone.appendChild(p);
        this.el.appendChild(this.optionNone);
        this.optionNone.classList.add(CSS_UI.utility.active);
        setTimeout(() => this.searchInput.focus(), 10);
    }
    searchOptions() {
        const search = this.searchInput.value.toLowerCase();
        this.optionNone.classList.remove(CSS_UI.utility.hidden);
        this.options.map(option => {
            if (option.key.toLowerCase().indexOf(search) >= 0 || String(option.value).toLowerCase().indexOf(search) >= 0 || search === '') {
                option.dom.classList.remove(CSS_UI.utility.hidden);
                this.optionNone.classList.add(CSS_UI.utility.hidden);
            }
            else {
                option.dom.classList.add(CSS_UI.utility.hidden);
            }
        });
    }
    createSearch() {
        this.search = el('div', c.search, this.el);
        this.searchInput = el('input', c.searchInput);
        this.searchInput.placeholder = 'Search';
        this.searchInput.type = 'text';
        this.search.appendChild(this.searchInput);
        this.el.appendChild(this.search);
        this.searchInput.addEventListener('input', () => {
            this.searchOptions();
        });
    }
}
export class SelectItem extends Item {
    constructor() {
        super(...arguments);
        this.options = {};
        this.input = el('div');
        this.label = el('div');
        this.activeOption = el('div');
    }
    afterCreate() {
        this.panel = new SelectPanel();
    }
    addEventListeners() {
        super.addEventListeners();
        this.input.addEventListener('click', () => {
            if (!this.panel.created) {
                this.panel.create(this);
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
        this.input = el('div', c.input, this.content);
        this.input.classList.add(CSS_UI.item);
        this.input.innerHTML = uiDownarrowHlt;
        this.label = el('p', c.label, this.input);
    }
    setValue(value) {
        function findKeyByValue(obj, value) {
            for (let key in obj) {
                if (obj[key] === value) {
                    return key;
                }
            }
            return null;
        }
        const label = findKeyByValue(this.params.options, value);
        this.label.innerHTML = check.isNull(value) || check.isUndefined(value) ? 'Select...' : label;
        super.setValue(value);
    }
}
