interface position {
    current: number;
    target: number;
}
interface html {
    scroller: HTMLElement;
}
export default class Scroller {
    html: html;
    position: position;
    constructor();
    addStyles(): void;
    create(): void;
}
export {};
