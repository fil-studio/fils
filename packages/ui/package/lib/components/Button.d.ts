import { UIElement } from "./UIElement";
export interface ButtonOptions {
    title?: string;
}
export declare class Button extends UIElement {
    button: HTMLButtonElement;
    constructor({ title }?: ButtonOptions);
    protected createDom(): void;
    protected addEventListeners(): void;
}
