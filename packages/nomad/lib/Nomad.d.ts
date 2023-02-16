import { Page } from "./Page";
import { Location, Utils } from "./utils";
interface Route {
    id: string;
    template: string;
    page: Page;
    location: Location;
}
export declare class Nomad {
    utils: Utils;
    isPopstate: boolean;
    inProgress: boolean;
    routes: Array<Route>;
    route: Route;
    wrapper: HTMLElement;
    links: Array<HTMLLinkElement>;
    createPage: Function;
    constructor(createPage?: Function);
    createRoute(template: string, page: Page, href?: string): void;
    addLinksListener(): void;
    onClick(e: any): void;
    onPopState(): void;
    lifeCycle(href: any): void;
    beforeFetch(): Promise<unknown>;
    addContent(href: string, html: string): Promise<unknown>;
    fetch(href: any): Promise<string>;
    afterFetch(): void;
}
export {};
