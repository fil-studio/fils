import { EventsManager } from '../main';
import { Group, GroupParams } from './Group';
export interface UIParams extends GroupParams {
    parentElement?: HTMLElement;
    resizable?: boolean;
    icon?: string;
    width?: number;
    minimal?: boolean;
}
export declare class UI extends Group {
    wrapper: HTMLElement;
    minimal: boolean;
    resizable: boolean;
    constructor({ resizable, parentElement, icon, width, minimal }?: UIParams);
    protected appendTo(parentElement: HTMLElement): void;
    protected addIcon(icon: string): void;
    createDom(): void;
    protected addEventListeners(): void;
    /**
    * @typedef {'resize'| EventType } UIEventType
    *
    * @description Available event types:
    * - change: Triggered when the value of the item or one of its children changes.
    * - resize: Triggered when the UI is resized.
    *
    * @param {UIEventType} eventType - The type of event to listen for.
    * @param {Function} callback - The callback function to call when the event occurs.
    * @returns {void}
    */
    on(event: string, callback: Function): void;
    change(target: EventsManager): void;
    destroy(): void;
}
