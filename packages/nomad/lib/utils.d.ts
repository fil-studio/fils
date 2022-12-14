export interface Location {
    href: string;
    anchor: string;
    origin: string;
    params: object;
    pathname: string;
    protocol: string;
}
export declare class Utils {
    checkActiveLinks: (links: NodeListOf<HTMLLinkElement> | Array<HTMLLinkElement>) => void;
    addSlash(url: any): any;
    getOrigin(url: any): any;
    getPathname(url: any): any;
    getProtocol(url: any): any;
    getAnchor(url: any): any;
    getParams(url: any): {};
    getLocation(slug: any): Location;
}
