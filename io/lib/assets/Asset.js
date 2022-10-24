import { io } from "../io";
export class Asset {
    constructor(url) {
        this._loaded = false;
        this._failed = false;
        this.content = null;
        this.url = url;
    }
    load(callback) { }
    destroy() {
        this.content = null;
        this._loaded = false;
        this._failed = false;
    }
    get loaded() {
        return this._loaded;
    }
    get failed() {
        return this._failed;
    }
}
export class XHttpReqAsset extends Asset {
    constructor(url, type = "text") {
        super(url);
        this.type = type;
    }
    load(callback) {
        if (this.loaded)
            return;
        const onError = (res) => {
            this._failed = true;
            console.warn("Failed loading Asset", res.status);
        };
        return io.load(this.url, (res) => {
            this.content = res;
            this._loaded = true;
            if (callback != undefined)
                callback();
        }, onError, {
            responseType: this.type
        });
    }
}
export class ImageAsset extends Asset {
    constructor(url, type = "text") {
        super(url);
    }
    load(callback) {
        if (this.loaded)
            return;
        const img = new Image();
        this.content = img;
        img.onerror = () => {
            this._failed = true;
            console.warn("Failed loading Asset");
        };
        img.onload = () => {
            this._loaded = true;
            if (callback != undefined)
                callback();
        };
        img.src = this.url;
    }
}
