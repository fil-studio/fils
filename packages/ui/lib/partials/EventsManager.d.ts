export declare class EventsManager {
    protected subscribers: Object;
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
    on(event: string, callback: Function): void;
    emit(event: string, target?: EventsManager): void;
}
