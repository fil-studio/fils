"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowTypes = void 0;
const utils_1 = require("@fils/utils");
const ui_icons_1 = require("@fils/ui-icons");
const cssClasses_1 = require("../partials/cssClasses");
var RowTypes;
(function (RowTypes) {
    RowTypes[RowTypes["ui"] = 0] = "ui";
    RowTypes[RowTypes["group"] = 1] = "group";
    RowTypes[RowTypes["item"] = 2] = "item";
    RowTypes[RowTypes["button"] = 3] = "button";
    RowTypes[RowTypes["spacer"] = 4] = "spacer";
})(RowTypes = exports.RowTypes || (exports.RowTypes = {}));
const dom = {
    createButton: (title, icon) => {
        const button = (0, utils_1.el)('button');
        button.classList.add(cssClasses_1.CSS_UI.button.baseClass);
        const h3 = (0, utils_1.el)('h3');
        h3.innerText = title;
        button.appendChild(h3);
        if (icon) {
            const iconWrapper = (0, utils_1.el)('div');
            iconWrapper.innerHTML = icon;
            iconWrapper.classList.add(cssClasses_1.CSS_UI.button.icon);
            button.classList.add(cssClasses_1.CSS_UI.button.hasIcon);
            button.appendChild(iconWrapper);
        }
        return button;
    },
    createRow: ({ type, depth, title, } = {
        type: RowTypes.ui,
        depth: 0
    }) => {
        // Create Row
        let domEl = 'div';
        if (type === RowTypes.ui)
            domEl = 'div';
        if (type === RowTypes.group)
            domEl = 'section';
        if (type === RowTypes.item)
            domEl = 'fieldset';
        if (type === RowTypes.button)
            domEl = 'fieldset';
        if (type === RowTypes.spacer)
            domEl = 'div';
        const row = (0, utils_1.el)(domEl);
        row.setAttribute('ui-depth', `${depth}`);
        /**
         * Add Classes to Row
         */
        if (type === RowTypes.ui) {
            row.classList.add(cssClasses_1.CSS_UI.wrapper);
        }
        /**
         * Create a Group Row
         */
        if (type === RowTypes.group) {
            const titleTab = (0, utils_1.el)('header');
            dom.addIcon(titleTab);
            const h3 = (0, utils_1.el)('h3');
            if (h3 && title) {
                h3.innerText = title;
                h3.title = title;
                titleTab.appendChild(h3);
            }
            row.appendChild(titleTab);
            const contentWrapper = (0, utils_1.el)('div', cssClasses_1.CSS_UI.section.content);
            row.appendChild(contentWrapper);
        }
        /**
         * Create a Item Row
         */
        if (type === RowTypes.item) {
            if (title) {
                const h4 = (0, utils_1.el)('h4');
                h4.innerText = title;
                h4.title = title;
                row.appendChild(h4);
            }
            const contentWrapper = (0, utils_1.el)('div');
            row.appendChild(contentWrapper);
        }
        /**
         * Create a Button Row
         */
        if (type === RowTypes.button) {
            if (title) {
                const button = dom.createButton(title);
                row.appendChild(button);
                row.classList.add(cssClasses_1.CSS_UI.row.hasButton);
            }
        }
        /**
         * Create a Spacer Row
         */
        if (type === RowTypes.spacer) {
            row.classList.add(cssClasses_1.CSS_UI.spacer.baseClass);
        }
        return row;
    },
    addIcon: (header, icon) => {
        const iconClass = cssClasses_1.CSS_UI.section.header.icon;
        const iconWrapper = header.querySelector(`.${iconClass}`) ? header.querySelector(`.${iconClass}`) : (0, utils_1.el)('div', iconClass);
        iconWrapper.innerHTML = icon ? icon : ui_icons_1.uiTriaDown;
        header.prepend(iconWrapper);
    },
};
exports.default = dom;
