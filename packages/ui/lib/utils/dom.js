import { uiTriaDown } from '@fils/ui-icons';
import { el, isUndefined } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
export var RowTypes;
(function (RowTypes) {
    RowTypes[RowTypes["ui"] = 0] = "ui";
    RowTypes[RowTypes["group"] = 1] = "group";
    RowTypes[RowTypes["item"] = 2] = "item";
    RowTypes[RowTypes["button"] = 3] = "button";
    RowTypes[RowTypes["spacer"] = 4] = "spacer";
    RowTypes[RowTypes["info"] = 5] = "info";
    RowTypes[RowTypes["custom"] = 6] = "custom";
})(RowTypes || (RowTypes = {}));
const dom = {
    createButton: (title, icon) => {
        const button = el('button');
        button.classList.add(CSS_UI.button.baseClass);
        const h3 = el('h3');
        h3.innerText = title;
        button.appendChild(h3);
        if (icon) {
            const iconWrapper = el('div');
            iconWrapper.innerHTML = icon;
            iconWrapper.classList.add(CSS_UI.button.icon);
            button.classList.add(CSS_UI.button.hasIcon);
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
        if (type === RowTypes.info)
            domEl = 'fieldset';
        if (type === RowTypes.custom)
            domEl = 'fieldset';
        const row = el(domEl);
        row.setAttribute('ui-depth', `${depth}`);
        /**
         * Add Classes to Row
         */
        if (type === RowTypes.ui) {
            row.classList.add(CSS_UI.wrapper);
        }
        /**
         * Create a Group Row
         */
        if (type === RowTypes.group) {
            const titleTab = el('header');
            dom.addIcon(titleTab);
            const h3 = el('h3');
            if (h3 && title) {
                h3.innerText = title;
                h3.title = title;
                titleTab.appendChild(h3);
            }
            row.appendChild(titleTab);
            const contentWrapper = el('div', CSS_UI.section.content);
            row.appendChild(contentWrapper);
        }
        /**
         * Create a Item Row
         */
        if (type === RowTypes.item) {
            if (title) {
                const h4 = el('h4');
                h4.innerText = title;
                h4.title = title;
                row.appendChild(h4);
            }
            const contentWrapper = el('div', CSS_UI.content);
            row.appendChild(contentWrapper);
        }
        /**
         * Create a Button Row
         */
        if (type === RowTypes.button) {
            if (title) {
                const button = dom.createButton(title);
                row.appendChild(button);
                row.classList.add(CSS_UI.row.hasButton);
            }
        }
        /**
         * Create a Spacer Row
         */
        if (type === RowTypes.spacer) {
            row.classList.add(CSS_UI.spacer.baseClass);
        }
        /**
         * Create a Spacer Row
         */
        if (type === RowTypes.info) {
            row.classList.add(CSS_UI.info.baseClass);
        }
        /**
         * Create a Spacer Rowi
         */
        if (type === RowTypes.custom) {
            row.classList.add(CSS_UI.row.custom);
        }
        return row;
    },
    addIcon: (header, icon) => {
        const iconClass = CSS_UI.section.header.icon;
        const iconWrapper = header.querySelector(`.${iconClass}`) ? header.querySelector(`.${iconClass}`) : el('div', iconClass);
        if (isUndefined(icon)) {
            iconWrapper.classList.add(CSS_UI.section.header.chevron);
            icon = uiTriaDown;
        }
        else {
            // Handles UI with icon but foldable false
            iconWrapper.classList.remove(CSS_UI.section.header.chevron);
        }
        iconWrapper.innerHTML = icon;
        header.prepend(iconWrapper);
    },
};
export default dom;
