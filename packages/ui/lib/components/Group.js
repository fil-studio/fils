"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const utils_1 = require("@fils/utils");
const cssClasses_1 = require("../partials/cssClasses");
const ItemFactory_1 = require("../partials/ItemFactory");
const dom_1 = require("../utils/dom");
const Button_1 = require("./Button");
const Spacer_1 = require("./Spacer");
const UIElement_1 = require("./UIElement");
class Group extends UIElement_1.UIElement {
    constructor({ title, folded = false, foldable = true, }) {
        super(dom_1.RowTypes.group, title);
        this.children = [];
        this.height = 0;
        this.folded = foldable ? folded : false;
        this.foldable = foldable;
    }
    createDom() {
        super.createDom();
        this.content = this.el.querySelector(`.${cssClasses_1.CSS_UI.section.content}`);
    }
    addEventListeners() {
        if (!this.foldable)
            return;
        this.el.classList.add(cssClasses_1.CSS_UI.section.foldable);
        this.foldWrapper = (0, utils_1.el)('div', cssClasses_1.CSS_UI.section.foldableElement);
        this.el.appendChild(this.foldWrapper);
        this.foldWrapper.appendChild(this.content);
        const header = this.el.querySelector('header');
        header.addEventListener('click', () => {
            this.folded = !this.folded;
            this.onFold();
        });
        this.onFold();
    }
    onFold() {
        if (!this.foldable)
            return;
        const h = this.content.getBoundingClientRect().height;
        this.foldWrapper.style.height = `${h}px`;
        if (this.timer)
            clearTimeout(this.timer);
        setTimeout(() => {
            if (this.folded)
                this.el.classList.add(cssClasses_1.CSS_UI.section.folded);
            else
                this.el.classList.remove(cssClasses_1.CSS_UI.section.folded);
        }, 5);
        if (!this.folded) {
            const d = parseFloat(getComputedStyle(this.foldWrapper).transitionDuration) * 1000;
            this.timer = setTimeout(() => {
                this.foldWrapper.style.height = `auto`;
            }, d);
        }
        this.emit('fold');
    }
    addButton(params) {
        const button = new Button_1.Button(params);
        if (button) {
            button.init(this.depth + 1);
            this.content.appendChild(button.el);
        }
        return button;
    }
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
    addSpacer(params = {}) {
        const spacer = new Spacer_1.Spacer(this.depth + 1, params);
        if (spacer && spacer.el)
            this.content.appendChild(spacer.el);
    }
    add(object, key, params) {
        return this.addItem(object, key, params);
    }
    addItem(object, key, params) {
        const createItemParams = { object, key, params };
        const item = (0, ItemFactory_1.ItemFactory)(createItemParams);
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
exports.Group = Group;
