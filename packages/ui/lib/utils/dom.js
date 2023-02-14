import { el } from "@fils/utils";
import { uiTriaDown } from "@fils/ui-icons";
import { CSS_UI } from "../partials/cssClasses";
export var RowTypes = /* @__PURE__ */ ((RowTypes2) => {
  RowTypes2[RowTypes2["ui"] = 0] = "ui";
  RowTypes2[RowTypes2["group"] = 1] = "group";
  RowTypes2[RowTypes2["item"] = 2] = "item";
  RowTypes2[RowTypes2["button"] = 3] = "button";
  RowTypes2[RowTypes2["spacer"] = 4] = "spacer";
  return RowTypes2;
})(RowTypes || {});
const dom = {
  createButton: (title, icon) => {
    const button = el("button");
    button.classList.add(CSS_UI.button.baseClass);
    const h3 = el("h3");
    h3.innerText = title;
    button.appendChild(h3);
    if (icon) {
      const iconWrapper = el("div");
      iconWrapper.innerHTML = icon;
      iconWrapper.classList.add(CSS_UI.button.icon);
      button.classList.add(CSS_UI.button.hasIcon);
      button.appendChild(iconWrapper);
    }
    return button;
  },
  createRow: ({
    type,
    depth,
    title
  } = {
    type: 0 /* ui */,
    depth: 0
  }) => {
    let domEl = "div";
    if (type === 0 /* ui */)
      domEl = "div";
    if (type === 1 /* group */)
      domEl = "section";
    if (type === 2 /* item */)
      domEl = "fieldset";
    if (type === 3 /* button */)
      domEl = "fieldset";
    if (type === 4 /* spacer */)
      domEl = "div";
    const row = el(domEl);
    row.setAttribute("ui-depth", `${depth}`);
    if (type === 0 /* ui */) {
      row.classList.add(CSS_UI.wrapper);
    }
    if (type === 1 /* group */) {
      const titleTab = el("header");
      dom.addIcon(titleTab);
      const h3 = el("h3");
      if (h3 && title) {
        h3.innerText = title;
        h3.title = title;
        titleTab.appendChild(h3);
      }
      row.appendChild(titleTab);
      const contentWrapper = el("div", CSS_UI.section.content);
      row.appendChild(contentWrapper);
    }
    if (type === 2 /* item */) {
      if (title) {
        const h4 = el("h4");
        h4.innerText = title;
        h4.title = title;
        row.appendChild(h4);
      }
      const contentWrapper = el("div");
      row.appendChild(contentWrapper);
    }
    if (type === 3 /* button */) {
      if (title) {
        const button = dom.createButton(title);
        row.appendChild(button);
        row.classList.add(CSS_UI.row.hasButton);
      }
    }
    if (type === 4 /* spacer */) {
      row.classList.add(CSS_UI.spacer.baseClass);
    }
    return row;
  },
  addIcon: (header, icon) => {
    const iconClass = CSS_UI.section.header.icon;
    const iconWrapper = header.querySelector(`.${iconClass}`) ? header.querySelector(`.${iconClass}`) : el("div", iconClass);
    iconWrapper.innerHTML = icon ? icon : uiTriaDown;
    header.prepend(iconWrapper);
  }
};
export default dom;
//# sourceMappingURL=dom.js.map
