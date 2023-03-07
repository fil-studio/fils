import { UIElement } from "./UIElement";
export type InfoParams = {
    text: string | string[];
};
export declare class Info extends UIElement {
    params: InfoParams;
    constructor(depth: number, params: InfoParams);
    createContent(): void;
    createText(text: string): void;
}
