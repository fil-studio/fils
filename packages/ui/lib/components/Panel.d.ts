import { Item } from "./items/Item";
export declare class Panel {
    el: HTMLElement;
    appendTo: HTMLElement;
    parent: Item | null;
    created: boolean;
    constructor();
    addEventListeners(): void;
    positionPanel(): void;
    createPanelContent(): void;
    create(parent: Item, appendTo?: HTMLElement): void;
    destroy(): void;
    onResize(): void;
    onChange(): void;
}
