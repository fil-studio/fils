import { Group, GroupParams } from './Group';
export declare const UIInjectCSS: () => void;
interface UIParams extends GroupParams {
    parentElement?: HTMLElement;
    resizable?: boolean;
    icon?: string;
    width?: number;
}
export declare class UI extends Group {
    wrapper: HTMLElement;
    resizable: boolean;
    constructor({ resizable, parentElement, icon, width }?: UIParams);
    protected appendTo(parentElement: HTMLElement): void;
    protected addIcon(icon: string): void;
    createDom(): void;
    protected addEventListeners(): void;
}
export {};
