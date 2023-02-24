import { UIElement } from "./UIElement";
export declare class Button extends UIElement {
    button: HTMLButtonElement;
    clickCallback: Function;
    constructor(title: string, clickCallback: Function);
    protected createDom(): void;
    protected addEventListeners(): void;
}
