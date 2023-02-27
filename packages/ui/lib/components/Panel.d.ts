import { Button } from "./Button";
import { Item } from "./items/Item";
export declare class Panel {
    el: HTMLElement;
    appendTo: HTMLElement;
    parent: Item | Button;
    created: boolean;
    constructor();
    addEventListeners(): void;
    positionPanel(): void;
    createPanelContent(): void;
    create(parent: Item | Button, appendTo?: HTMLElement): void;
    destroy(): void;
    onResize(): void;
    onChange(): void;
}
