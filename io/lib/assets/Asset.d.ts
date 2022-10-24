export declare class Asset {
    url: string;
    protected _loaded: boolean;
    protected _failed: boolean;
    content: any;
    constructor(url: string);
    load(callback?: Function): void;
    destroy(): void;
    get loaded(): boolean;
    get failed(): boolean;
}
export declare class XHttpReqAsset extends Asset {
    type: XMLHttpRequestResponseType;
    constructor(url: string, type?: XMLHttpRequestResponseType);
    load(callback?: Function): void;
}
export declare class ImageAsset extends Asset {
    content: HTMLImageElement;
    constructor(url: string, type?: XMLHttpRequestResponseType);
    load(callback?: Function): void;
}
