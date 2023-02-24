import { EventsManager } from "../partials/EventsManager";
import { RowTypes } from "../utils/dom";
export declare class UIElement extends EventsManager {
    protected depth: number;
    el: HTMLElement;
    type: RowTypes;
    title: string;
    constructor(type: RowTypes, title?: string);
    init(depth?: number): void;
    /**
    * Lifecycle
    */
    protected beforeCreate(): void;
    protected afterCreate(): void;
    protected createDom(): void;
    protected createContent(): void;
    protected addEventListeners(): void;
    destroy(): void;
    /**
    * A method to refresh the item and all its children values.
    * Use this method when you change the value of an item outside of the UI to keep it in sync.
    */
    refresh(): void;
}
