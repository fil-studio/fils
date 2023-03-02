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
    addEventListeners(): void;
    createPanelContent(): void;
    positionPanel(): void;
    create(parent: ItemPanel | ButtonPanel, appendTo?: HTMLElement): void;
    destroy(): void;
    onChange(): void;
}
