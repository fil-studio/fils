export class ResponseParams {
    constructor() {
        this.responseType = "text";
    }
}
export class io {
    constructor() { }
    static load(url, callback, errorCallback, params) {
        let r = new XMLHttpRequest();
        r.open("GET", url, true);
        if (params != undefined)
            r.responseType = params.responseType;
        r.onload = () => {
            if (r.status >= 400 && errorCallback != undefined)
                errorCallback(r);
            if (r.status == 200 && callback != undefined)
                callback(r.response);
        };
        r.send();
    }
    static fetchVimeo(url, callback) {
        const req = new XMLHttpRequest();
        req.responseType = "json";
        req.onload = () => {
            callback(req.responseURL);
        };
        req.open("GET", url);
        req.send();
    }
}
