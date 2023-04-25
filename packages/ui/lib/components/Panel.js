import { el, isNull, remove } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { Button } from "./Button";
import { Item } from "./items/Item";
const c = {
    left: "_ui-panel-left",
    right: "_ui-panel-right",
    dropdown: "_ui-panel-dropdown",
};
export class ItemPanel extends Item {
    close() { }
    open() { }
    refresh() {
        super.refresh();
        this.panel.refresh();
    }
    parentFold() {
        super.parentFold();
        this.close();
    }
}
export class ButtonPanel extends Button {
    close() { }
    open() { }
    refresh() {
        super.refresh();
        this.panel.refresh();
    }
    parentFold() {
        super.parentFold();
        this.close();
    }
}
export class Panel {
    constructor(parent, dropdownFrom) {
        this.created = false;
        this.spacing = 0;
        this.parent = parent;
        this.dropdownFrom = dropdownFrom ? dropdownFrom : null;
        this.spacing = 3;
    }
    addEventListeners() {
        window.addEventListener('keydown', (e) => {
            if (!this.created)
                return;
            if (e.key === 'Escape') {
                this.parent.close();
            }
        });
    }
    createPanelContent() {
        // Override this
    }
    positionPanel() {
        const panelRect = this.el.getBoundingClientRect();
        const uiRect = this.uiWrapper.getBoundingClientRect();
        // Panel is droppdown
        if (!isNull(this.dropdownFrom)) {
            this.el.classList.add(c.dropdown);
            const dropdownFromRect = this.dropdownFrom.getBoundingClientRect();
            const top = (dropdownFromRect.top + dropdownFromRect.height) - uiRect.top;
            const left = dropdownFromRect.left - uiRect.left;
            this.el.style.top = `${top + this.spacing}px`;
            this.el.style.left = `${left}px`;
            this.el.style.width = `${dropdownFromRect.width}px`;
            return;
        }
        // Lateral Panels
        const parentRect = this.parent.el.getBoundingClientRect();
        const top = Math.max(parentRect.top - uiRect.top - panelRect.height * .5, 0);
        this.el.style.top = `${top}px`;
        // Panel is on the left
        if (uiRect.left > window.innerWidth * .5) {
            this.el.classList.add(c.left);
            this.el.style.left = `-${uiRect.width + this.spacing}px`;
            // Panel is on the right
        }
        else {
            this.el.classList.add(c.right);
            this.el.style.right = `-${uiRect.width + this.spacing}px`;
        }
    }
    create() {
        // This is the wrapper for the UI, has to be added here, is not ready on constructor
        this.uiWrapper = this.parent.el.closest(`.${CSS_UI.wrapper}`);
        if (this.created)
            return;
        this.created = true;
        this.el = el('div', CSS_UI.panel.baseClass, this.uiWrapper);
        this.createPanelContent();
        // Append to for dropdowns, else append to wrapper and positioning is required
        this.positionPanel();
        // This needs to be provided by the parent each time as the dom changes
        const parentDomStyle = getComputedStyle(this.parent.el.closest('section'));
        const bg0 = parentDomStyle.getPropertyValue('--section-bg-0');
        const bg1 = parentDomStyle.getPropertyValue('--section-bg-1');
        this.el.style.setProperty('--section-bg-0', bg0);
        this.el.style.setProperty('--section-bg-1', bg1);
        this.el.classList.add(CSS_UI.utility.loaded);
        // This little trick allows transitions to work
        setTimeout(() => this.el.classList.add(CSS_UI.utility.active), 10);
        this.addEventListeners();
    }
    destroy() {
        if (!this.created)
            return;
        remove(this.el);
        this.created = false;
    }
    onChange() {
    }
    refresh() {
    }
}
