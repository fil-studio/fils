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
    id: string;
    dom: HTMLElement;
    rect: DOMRect;
    visible: boolean;
    progress: number;
    animationIn: Function;
    animationOut: Function;
}
export default class Scroller {
    html: html;
    position: position;
    sections: Array<Section>;
    private loaded;
    private paused;
    private disabled;
    height: number;
    private wh;
    private _ease;
    private _delta;
    pointerElements: NodeListOf<HTMLElement>;
    constructor();
    pause(): void;
    resume(): void;
    disable(): void;
    enable(): void;
    set ease(newEase: number);
    get ease(): number;
    get delta(): number;
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
