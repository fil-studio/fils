"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css = {
    inject: (css) => {
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
    },
};
exports.default = css;
