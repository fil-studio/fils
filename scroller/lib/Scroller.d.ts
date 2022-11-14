import { Section } from "./Section";
interface position {
    current: number;
    target: number;
}
interface html {
    scroller: HTMLElement;
    holder: HTMLElement;
    container: HTMLElement;
    content: HTMLElement;
}
export declare enum D {
    TOP = 0,
    BOTTOM = 1,
    LEFT = 2,
    RIGHT = 3
}
export default class Scroller {
    html: html;
    position: position;
    private _direction;
    sections: Array<Section>;
    private loaded;
    private paused;
    private disabled;
    distance: number;
    private _ease;
    delta: number;
    w: {
        w: number;
        h: number;
    };
    pointerElements: NodeListOf<HTMLElement>;
    constructor();
    pause(): void;
    resume(): void;
    disable(): void;
    enable(): void;
    set direction(val: D | number);
    get direction(): D | number;
    set ease(newEase: number);
    get ease(): number;
    addStyles(): void;
    addHTML(): void;
    addSections(): void;
    restore(): void;
    onResize(): void;
    addEventListeners(): void;
    create(): void;
    updateTarget(): void;
    updateCheckHeight(): void;
    updateScrollValues(): void;
    updateSections(): void;
    update(): void;
}
export {};
