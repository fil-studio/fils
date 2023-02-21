"use strict";
/*
 * io Class
 * Following Singleton TS pattern
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#private-and-protected-constructors
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.ResponseParams = void 0;
var ResponseParams = /** @class */ (function () {
    function ResponseParams() {
        this.responseType = "text";
    }
    return ResponseParams;
}());
exports.ResponseParams = ResponseParams;
var io = /** @class */ (function () {
    function io() {
    }
    io.load = function (url, callback, errorCallback, params) {
        var r = new XMLHttpRequest();
        r.open("GET", url, true);
        if (params != undefined)
            r.responseType = params.responseType;
        r.onload = function () {
            if (r.status >= 400 && errorCallback != undefined)
                errorCallback(r);
            if (r.status == 200 && callback != undefined)
                callback(r.response);
        };
        r.send();
    };
    io.fetchVimeo = function (url, callback) {
        var req = new XMLHttpRequest();
        req.responseType = "json";
        req.onload = function () {
            callback(req.responseURL);
        };
        req.open("GET", url);
        req.send();
    };
    return io;
}());
exports.io = io;
