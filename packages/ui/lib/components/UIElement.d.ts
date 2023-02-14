import { EventsManager } from "../partials/EventsManager";
import { RowTypes } from "../utils/dom";
export declare class UIElement extends EventsManager {
    protected depth: number;
    el: HTMLElement;
    type: RowTypes;
    title: string;
    constructor(type: RowTypes, title?: string);
    init(depth?: number): void;
    protected beforeCreate(): void;
    protected afterCreate(): void;
    protected createDom(): void;
    protected createContent(): void;
    protected addEventListeners(): void;
    destroy(): void;
}
