import { debounce } from "@fils/utils";
export class EventsManager {
    constructor() {
        this.subscribers = {};
        this.debounce = debounce(this.emit.bind(this), 100);
    }
    /**
    * @typedef {'change'} EventType
    * @typedef {'refresh'} EventType
    *
    * @description Available event types:
    * - change: Triggered when the value of the item or one of its children changes.
    * - refresh: Triggered right before the UI is refreshed.
    *
    * @param {EventType} eventType - The type of event to listen for.
    * @param {Function} callback - The callback function to call when the event occurs.
    * @returns {void}
    */
    on(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
            const completeEvent = event + 'Complete';
            this.subscribers[completeEvent] = [];
            this.subscribers[event].debounced = debounce(() => {
                this.emit(completeEvent);
            }, 100);
        }
        this.subscribers[event].push(callback);
    }
    emit(event, target) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(subscriber => subscriber(target ? target : this));
            if (this.subscribers[event].debounced) {
                this.subscribers[event].debounced();
            }
        }
    }
}
