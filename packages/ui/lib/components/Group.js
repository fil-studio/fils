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
        this.el.classList.add(CSS_UI.section.foldable);
        this.foldWrapper = el('div', CSS_UI.section.foldableElement);
        this.el.appendChild(this.foldWrapper);
        this.foldWrapper.appendChild(this.content);
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
    addButton(title = 'Button') {
        const button = new Button({ title });
        if (button) {
            button.init(this.depth + 1);
            this.content.appendChild(button.el);
        }
        return button;
    }
    /**
    * Creates a group.
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
        }
        return group;
    }
    /**
     * A function that does something with a widget option.
     *
     * @param {SpacerSize} option - The option to use.
     * @param {boolean} line - If the spacer should be a line or not
     * @default true
     */
    addSpacer(params = {}) {
        const spacer = new Spacer(this.depth + 1, params);
        if (spacer && spacer.el)
            this.content.appendChild(spacer.el);
    }
    /**
     * A function that creates an Item.
     *
     * @param {title} title - Item title.
     * @param {view} view - Force item view. If not specified, it will be automatically detected.
     * @returns {Item} The newly created item element.
     */
    add(object, key, params) {
        return this.addItem(object, key, params);
    }
    /**
    * A function that creates an Item.
    *
    * @param {title} title - Item title.
    * @param {view} view - Force item view. If not specified, it will be automatically detected.
    * @returns {Item} The newly created item element.
    */
    addItem(object, key, params) {
        const createItemParams = { object, key, params };
        const item = ItemFactory(createItemParams);
        console.log(item);
        if (item) {
            item.on('__childrenChange', () => {
                this.change(item);
            });
            item.init(this.depth + 1);
            this.content.appendChild(item.el);
        }
        return item;
    }
    change(target) {
        this.emit('__childrenChange', target);
        this.emit('change', target);
    }
}
