export declare class ResponseParams {
    responseType: XMLHttpRequestResponseType;
}
export declare class io {
    private constructor();
    static load(url: string, callback?: Function, errorCallback?: Function, params?: ResponseParams): void;
    static fetchVimeo(url: string, callback: Function): void;
}
