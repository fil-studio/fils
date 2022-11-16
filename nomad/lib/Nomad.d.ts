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
    trigger: HTMLLinkElement | string;
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
    lifeCycle(href: any, trigger?: string): void;
    beforeFetch(): void;
    addContent(href: string, html: string): void;
    fetch(href: any): Promise<string>;
    afterFetch(): void;
}
export {};
