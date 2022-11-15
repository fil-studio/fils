import { Location, Utils } from "./utils";
export declare class Nomad {
    utils: Utils;
    isPopstate: boolean;
    inProgress: boolean;
    trigger: HTMLLinkElement | string;
    location: Location;
    history: Map<Location, string>;
    constructor();
    attachLinks(): void;
    detachLinks(): void;
    navigate(e: any): void;
    redirect(href: any, trigger?: string): void;
    pushState(): void;
    beforeFetch(href: any): Promise<number>;
    fetch(): Promise<string>;
    afterFetch(): Promise<number>;
}
