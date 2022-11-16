export declare class Page {
    id: string;
    isActive: boolean;
    isLoaded: boolean;
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    create(): void;
    dispose(): void;
    load(): void;
    loaded(): void;
    transitionIn(): void;
    transitionOut(): void;
}
