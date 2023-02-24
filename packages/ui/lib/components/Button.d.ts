import { UIElement } from "./UIElement";
export declare class Button extends UIElement {
    button: HTMLButtonElement;
    clickCallback: Function;
    constructor(title: string, clickCallback: Function);
    protected createDom(): void;
    protected addEventListeners(): void;
    /**
    * @typedef {'click'} ButtonEventType
    *
    * @description Available event types:
    * - click: Triggered when the button is clicked.
    *
    * @param {ButtonEventType} eventType - The type of event to listen for.
    * @param {Function} callback - The callback function to call when the event occurs.
    * @returns {void}
    */
    on(event: string, callback: Function): void;
}
