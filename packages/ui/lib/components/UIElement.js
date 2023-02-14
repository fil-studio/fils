import { EventsManager } from "../partials/EventsManager";
import dom from "../utils/dom";
export class UIElement extends EventsManager {
  constructor(type, title) {
    super();
    this.type = type;
    this.title = title || "";
  }
  init(depth = 0) {
    this.depth = depth;
    this.beforeCreate();
    this.createDom();
    this.createContent();
    this.addEventListeners();
    this.afterCreate();
  }
  /**
  * Lifecycle
  */
  beforeCreate() {
  }
  afterCreate() {
  }
  // Create ROW
  createDom() {
    this.el = dom.createRow({
      type: this.type,
      depth: this.depth,
      title: this.title
    });
  }
  // Populate ROW
  createContent() {
  }
  addEventListeners() {
  }
  destroy() {
    this.el.remove();
  }
}
