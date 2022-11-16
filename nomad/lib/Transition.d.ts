export declare class Transition {
    id: string;
    transitionOutStart(): void;
    transitionOutEnd(): void;
    transitionOut(resolve: any, dom: HTMLElement): any;
    transitionOutWrapper(dom: HTMLElement): Promise<unknown>;
    transitionInStart(): void;
    transitionInEnd(): void;
    transitionIn(resolve: any, dom: HTMLElement): any;
    transitionInWrapper(dom: HTMLElement): Promise<unknown>;
}
