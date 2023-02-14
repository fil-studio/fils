import { Item } from "../Item";
export declare class StringItem extends Item {
    input: HTMLInputElement;
    protected addEventListeners(): void;
    protected createContent(): void;
    setValue(_value: any): void;
    refreshDom(): void;
}