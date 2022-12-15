export declare class Page {
    id: string;
    isActive: boolean;
    isLoaded: boolean;
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    addEventListeners(): void;
    create(): void;
    dispose(): void;
    load(resolve: any): Promise<void>;
    loaded(): void;
    transitionIn(resolve: any): Promise<void>;
    transitionOut(resolve: any): Promise<void>;
    kill(): void;
}
