import { el, isNull } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { Button } from "./Button";
import { Item } from "./items/Item";
export class ItemPanel extends Item {
    close() { }
    open() { }
}
export class ButtonPanel extends Button {
    close() { }
    open() { }
}
export class Panel {
    constructor() {
        this.created = false;
        this.spacing = 0;
        this.uiWrapper = document.querySelector(`.${CSS_UI.wrapper}`);
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
        this.uiWrapper.appendChild(this.el);
        const panelRect = this.el.getBoundingClientRect();
        const uiRect = this.uiWrapper.getBoundingClientRect();
        // Panel is droppdown
        if (!isNull(this.dropdownFrom)) {
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
            this.el.style.left = `-${uiRect.width + this.spacing}px`;
            // Panel is on the right
        }
        else {
            this.el.style.right = `-${uiRect.width + this.spacing}px`;
        }
    }
    create(parent, dropdownFrom) {
        if (this.created)
            return;
        this.created = true;
        this.parent = parent;
        this.el = el('div', CSS_UI.panel.baseClass);
        this.createPanelContent();
        // Append to for dropdowns, else append to wrapper and positioning is required
        this.dropdownFrom = dropdownFrom ? dropdownFrom : null;
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
        this.el.remove();
        this.created = false;
    }
    onChange() {
    }
}
