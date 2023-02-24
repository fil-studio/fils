export class EventsManager {
    constructor() {
        this.subscribers = {};
    }
    /**
    * @typedef {'change'} EventType
    *
    * @description Available event types:
    * - change: Triggered when the value of the item or one of its children changes.
    *
    * @param {EventType} eventType - The type of event to listen for.
    * @param {Function} callback - The callback function to call when the event occurs.
    * @returns {void}
    */
    on(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }
    emit(event, target) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(subscriber => subscriber(target ? target : this));
        }
    }
}
