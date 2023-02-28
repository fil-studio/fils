import { el } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { ItemFactory } from "../partials/ItemFactory";
import { RowTypes } from "../utils/dom";
import { Button } from "./Button";
import { Spacer } from "./Spacer";
import { UIElement } from "./UIElement";
export class Group extends UIElement {
    constructor({ title, folded = false, foldable = true, }) {
        super(RowTypes.group, title);
        this.children = [];
        this.height = 0;
        // Is it folded or not? If it's not foldable, it's not folded
        this.folded = foldable ? folded : true;
        this.foldable = foldable;
    }
    createDom() {
        super.createDom();
        this.content = this.el.querySelector(`.${CSS_UI.section.content}`);
    }
    addEventListeners() {
        if (!this.foldable)
            return;
        this.foldWrapper = el('div', CSS_UI.section.foldableElement, this.el);
        this.foldWrapper.appendChild(this.content);
        this.el.classList.add(CSS_UI.section.foldable);
        const header = this.el.querySelector('header');
        header.addEventListener('click', () => {
            this.foldToggle();
        });
        this.folded = !this.folded;
        this.foldToggle();
    }
    foldToggle() {
        if (!this.foldable)
            return;
        this.folded = !this.folded;
        const h = this.content.getBoundingClientRect().height;
        this.foldWrapper.style.height = `${h}px`;
        if (this.timer)
            clearTimeout(this.timer);
        // Just go with it, without the timeout, it doesn't work
        setTimeout(() => {
            if (this.folded)
                this.el.classList.add(CSS_UI.section.folded);
            else
                this.el.classList.remove(CSS_UI.section.folded);
        }, 5);
        if (!this.folded) {
            const d = parseFloat(getComputedStyle(this.foldWrapper).transitionDuration) * 1000;
            this.timer = setTimeout(() => {
                this.foldWrapper.style.height = `auto`;
            }, d);
        }
        this.emit('fold');
    }
    /**
     * Creates a button with the specified title.
     *
     * @param {string} title - The title to display on the button.
     * @default 'Button'
     * @event click
     * @returns {Button} The newly created button element.
     */
    addButton(title = 'Button', clickCallback = () => { }) {
        const button = new Button(title, clickCallback);
        if (button) {
            button.init(this.depth + 1);
            this.content.appendChild(button.el);
            button.on('__childrenChange', () => {
                this.change(button);
            });
            this.children.push(button);
        }
        return button;
    }
    /**
    * Creates a new group, adds it to the parent and returns it.
    *
    * @param {title} title - Group tab title
    * @param {folded} folded - Is the group folded or not
    * @param {foldable} foldable - Is the group foldable or not
    * @returns {Group} The newly created group element.
    */
    addGroup(params) {
        const group = new Group(params);
        if (group) {
            group.on('__childrenChange', (target) => {
                this.change(target);
            });
            group.init(this.depth + 1);
            this.content.appendChild(group.el);
            this.children.push(group);
        }
        return group;
    }
    /**
    * @typedef {Object} SpacerOptions
    * @property {boolean} [line=true] - If true, the spacer will have a line. Default is true.
    * @property {'large'|'medium'|'small'} [size='medium'] - The size of the spacer. Default is 'medium'.
    */
    /**
     * Adds a spacer element to the page.
     *
     * @param {SpacerOptions} [options] - The options for the spacer.
     * @property {boolean} [line=true] - If true, the spacer will have a line. Default is true.
     * @property {'large'|'medium'|'small'} [size='medium'] - The size of the spacer. Default is 'medium'.
     * @returns {void}
     * @example
     *
     * // Adds a spacer with default options
     * addSpacer();
     *
     * // Adds a spacer with a line and a size of 'large'
     * addSpacer({ line: true, size: 'large' });
     */
    addSpacer(params = {}) {
        const spacer = new Spacer(this.depth + 1, params);
        if (spacer && spacer.el)
            this.content.appendChild(spacer.el);
    }
    /**
     * Adds an item element to the parent and returns it.
     *
     * @param {title} title - Item title.
     * @param {view} view - Force item view. If not specified, it will be automatically detected.
     * @returns {Item} The newly created item element.
     */
    add(object, key, params) {
        return this.addItem(object, key, params);
    }
    /**
    * Adds an item element to the parent and returns it.
    *
    * @param {title} title - Item title.
    * @param {view} view - Force item view. If not specified, it will be automatically detected.
    * @returns {Item} The newly created item element.
    */
    addItem(object, key, params) {
        const createItemParams = { object, key, params };
        const item = ItemFactory(createItemParams);
        if (item) {
            item.on('__childrenChange', () => {
                this.change(item);
            });
            item.init(this.depth + 1);
            this.content.appendChild(item.el);
            this.children.push(item);
        }
        return item;
    }
    change(target) {
        this.emit('__childrenChange', target);
        this.emit('change', target);
    }
    refresh() {
        for (let child of this.children) {
            child.refresh();
        }
    }
}
