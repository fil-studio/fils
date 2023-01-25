"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css = {
    inject: function (css) {
        var style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
    }
};
exports.default = css;
