"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIInjectCSS = exports.css = void 0;
// const styles = `__css__`;
const bundle_css_1 = require("../../../bundle/bundle.css");
let injected = false;
exports.css = {
    inject: (css) => {
        if (injected)
            return;
        injected = true;
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
        console.log('Fil UI CSS Injected');
    }
};
const UIInjectCSS = () => {
    exports.css.inject(bundle_css_1.default);
};
exports.UIInjectCSS = UIInjectCSS;
