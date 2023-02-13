import { Group, GroupParams } from './Group';
interface UIParams extends GroupParams {
    parentElement?: HTMLElement;
    resizable?: boolean;
    icon?: string;
    width?: number;
}
export declare class UI extends Group {
    wrapper: HTMLElement;
    resizable: boolean;
    constructor({ resizable, parentElement, icon, width }: UIParams);
    appendTo(parentElement: HTMLElement): void;
    addIcon(icon: string): void;
    createDom(): void;
    protected addEventListeners(): void;
}
export {};
