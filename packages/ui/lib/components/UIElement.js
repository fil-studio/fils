import { remove } from "@fils/utils";
import { EventsManager } from "../partials/EventsManager";
import dom from "../utils/dom";
export class UIElement extends EventsManager {
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
        this.preventPropagation();
    }
    preventPropagation() {
        // Prevents the propagation of the keydown event to the window
        this.el.addEventListener('keydown', (e) => {
            e.stopPropagation();
        });
    }
    /**
    * Lifecycle
    */
    beforeCreate() { }
    afterCreate() { }
    // Create ROW
    createDom() {
        this.el = dom.createRow({
            type: this.type,
            depth: this.depth,
            title: this.title,
        });
    }
    parentFold() { }
    // Populate ROW
    createContent() { }
    addEventListeners() { }
    destroy() {
        remove(this.el);
    }
    /**
    * A method to refresh the item and all its children values.
    * Use this method when you change the value of an item outside of the UI to keep it in sync.
    */
    refresh() { }
}
