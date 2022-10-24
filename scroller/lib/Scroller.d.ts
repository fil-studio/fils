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
interface Section {
    dom: HTMLElement;
    rect: DOMRect;
}
export default class Scroller {
    html: html;
    position: position;
    sections: Array<Section>;
    paused: boolean;
    disabled: boolean;
    height: number;
    ease: number;
    constructor();
    pause(): void;
    resume(): void;
    disable(): void;
    enable(): void;
    addStyles(): void;
    create(): void;
    updateCheckHeight(): void;
    updateScrollValues(): void;
    update(): void;
}
export {};
