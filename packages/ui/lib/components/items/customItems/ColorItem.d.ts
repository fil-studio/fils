import { HSBColor } from '@fils/color';
import { ItemPanel, Panel } from "../../Panel";
type Position = {
    x: number;
    y: number;
};
export declare class ColorPanel extends Panel {
    view: HTMLElement;
    info: HTMLElement;
    parent: ItemPanel;
    canvas1: HTMLCanvasElement;
    canvas2: HTMLCanvasElement;
    tmpPosition: Position;
    position: Position;
    tmpX: number;
    x: number;
    width: number;
    color: HSBColor;
    target: HTMLElement;
    dragger: HTMLElement;
    dragging1: boolean;
    dragging2: boolean;
    createPanelContent(): void;
    create(): void;
    addEventListeners(): void;
    reverseUpdate(): void;
    update(): void;
    updateCanvas1(): void;
    updateCanvas2(): void;
}
export declare class ColorItem extends ItemPanel {
    input: HTMLInputElement;
    colorBox: HTMLElement;
    panel: ColorPanel;
    afterCreate(): void;
    open(): void;
    close(): void;
    protected addEventListeners(): void;
    protected createContent(): void;
    setValue(value: any): void;
    refreshDom(): void;
    destroy(): void;
}
export {};
