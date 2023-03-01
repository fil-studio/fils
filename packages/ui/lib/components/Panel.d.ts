import { Button } from "./Button";
import { Item } from "./items/Item";
export interface ItemWithPanel extends Item {
    panel: Panel;
    close(): void;
    open(): void;
}
export interface ButtonWithPanel extends Button {
    panel: Panel;
    close(): void;
    open(): void;
}
export declare class ItemPanel extends Item implements ItemWithPanel {
    panel: Panel;
    close(): void;
    open(): void;
}
export declare class ButtonPanel extends Button implements ButtonWithPanel {
    panel: Panel;
    close(): void;
    open(): void;
}
export declare class Panel {
    el: HTMLElement;
    appendTo: HTMLElement;
    parent: ItemPanel | ButtonPanel;
    created: boolean;
    constructor();
    addEventListeners(): void;
    positionPanel(): void;
    createPanelContent(): void;
    create(parent: ItemPanel | ButtonPanel, appendTo?: HTMLElement): void;
    destroy(): void;
    onResize(): void;
    onChange(): void;
}
