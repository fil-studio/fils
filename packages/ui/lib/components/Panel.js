import { el } from "@fils/utils";
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
        const parentRect = this.parent.el.getBoundingClientRect();
        const panelRect = this.appendTo.getBoundingClientRect();
        const top = parentRect.top - panelRect.top;
        this.el.style.top = `${top}px`;
        if (panelRect.left > window.innerWidth * .5) {
            this.el.classList.add('_ui-panel-left');
            this.el.style.left = `-5px`;
            this.el.style.transform = `translate3d(-100%, -50%, 0)`;
        }
        else {
            this.el.classList.add('_ui-panel-right');
            this.el.style.right = `-5px`;
            this.el.style.transform = `translate3d(100%, -50%, 0)`;
        }
    }
    create(parent, appendTo) {
        if (this.created)
            return;
        this.created = true;
        this.parent = parent;
        this.el = el('div', CSS_UI.panel.baseClass);
        this.createPanelContent();
        // Append to for dropdowns, else append to wrapper and positioning is required
        this.appendTo = appendTo ? appendTo : this.parent.el.closest(`.${CSS_UI.wrapper}`);
        if (!appendTo)
            this.positionPanel();
        // This needs to be provided by the parent each time as the dom changes
        const parentDomStyle = getComputedStyle(this.parent.el.closest('section'));
        const bg0 = parentDomStyle.getPropertyValue('--section-bg-0');
        const bg1 = parentDomStyle.getPropertyValue('--section-bg-1');
        this.el.style.setProperty('--section-bg-0', bg0);
        this.el.style.setProperty('--section-bg-1', bg1);
        this.appendTo.appendChild(this.el);
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
