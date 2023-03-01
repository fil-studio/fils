import { HSBColor } from '@fils/color';
import { ItemPanel, Panel } from "../../Panel";
export declare class ColorPanel extends Panel {
    view: HTMLElement;
    info: HTMLElement;
    parent: ItemPanel;
    canvas1: HTMLCanvasElement;
    canvas2: HTMLCanvasElement;
    width: number;
    color: HSBColor;
    target: HTMLElement;
    dragger: HTMLElement;
    dragging1: boolean;
    dragging2: boolean;
    createPanelContent(): void;
    addEventListeners(): void;
    reverseUpdate(): void;
    update(): void;
    updateCanvas1(x: number, y: number): void;
    updateCanvas2(x: number): void;
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
