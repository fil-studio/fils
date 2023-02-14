import { el } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
export class Panel {
  constructor(parent, appendTo) {
    this.parent = null;
    this.created = false;
    this.parent = parent;
    this.appendTo = appendTo ? appendTo : parent.content;
    this.addEventListeners();
  }
  addEventListeners() {
    window.addEventListener("resize", () => this.onResize());
  }
  positionPanel() {
    if (!this.created)
      return;
    const r = this.appendTo.getBoundingClientRect();
    this.el.style.top = `${r.top + r.height}px`;
    this.el.style.width = `${r.width}px`;
    this.el.style.left = `${r.left}px`;
  }
  createPanelContent() {
  }
  create() {
    if (this.created)
      return;
    this.created = true;
    const parentDomStyle = getComputedStyle(this.appendTo.closest("section"));
    const bg0 = parentDomStyle.getPropertyValue("--section-bg-0");
    const bg1 = parentDomStyle.getPropertyValue("--section-bg-1");
    this.el = el("div", CSS_UI.panel.baseClass);
    this.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent.params.view}`);
    this.el.style.setProperty("--section-bg-0", bg0);
    this.el.style.setProperty("--section-bg-1", bg1);
    this.positionPanel();
    this.createPanelContent();
    document.body.appendChild(this.el);
    this.el.classList.add(CSS_UI.utility.loaded);
    setTimeout(() => this.el.classList.add(CSS_UI.utility.active), 10);
  }
  destroy() {
    if (!this.created)
      return;
    this.el.remove();
    this.created = false;
  }
  onResize() {
    this.positionPanel();
  }
  onChange() {
  }
}
//# sourceMappingURL=Panel.js.map
