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
    dropdownFrom: HTMLElement;
    parent: ItemPanel | ButtonPanel;
    created: boolean;
    uiWrapper: HTMLElement;
    spacing: number;
    constructor(parent: ItemPanel | ButtonPanel, dropdownFrom?: HTMLElement);
    addEventListeners(): void;
    createPanelContent(): void;
    positionPanel(): void;
    create(): void;
    destroy(): void;
    onChange(): void;
}
