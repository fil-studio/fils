"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIElement = void 0;
const EventsManager_1 = require("../partials/EventsManager");
const dom_1 = require("../utils/dom");
class UIElement extends EventsManager_1.EventsManager {
    constructor(type, title) {
        super();
        this.type = type;
        this.title = title || '';
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
    beforeCreate() { }
    afterCreate() { }
    // Create ROW
    createDom() {
        this.el = dom_1.default.createRow({
            type: this.type,
            depth: this.depth,
            title: this.title,
        });
    }
    // Populate ROW
    createContent() { }
    addEventListeners() { }
    destroy() {
        this.el.remove();
    }
}
exports.UIElement = UIElement;
