import { Item } from "./items/Item";
export declare class Panel {
    el: HTMLElement;
    appendTo: HTMLElement;
    parent: Item | null;
    created: boolean;
    constructor(parent: Item, appendTo?: HTMLElement);
    addEventListeners(): void;
    positionPanel(): void;
    createPanelContent(): void;
    create(): void;
    destroy(): void;
    onResize(): void;
    onChange(): void;
}
