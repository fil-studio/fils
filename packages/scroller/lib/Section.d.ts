import { D } from "./Scroller";
export declare class Section {
    id: string;
    dom: HTMLElement;
    rect: DOMRect;
    widthOffset: number;
    w: {
        w: number;
        h: number;
    };
    progress: number;
    direction: D;
    scroll: number;
    delta: number;
    visible: boolean;
    disabled: boolean;
    constructor(id: string, dom: HTMLElement, direction: D);
    restore(): void;
    animationIn(): void;
    animationOut(): void;
    get threshold(): number[];
    get position(): {
        x: number;
        y: number;
    };
    updateTransform(): void;
    update(): void;
}
