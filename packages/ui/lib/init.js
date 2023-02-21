"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUI = void 0;
const RegisterBaseItems_1 = require("./partials/RegisterBaseItems");
const css_1 = require("./utils/css");
let initialized = false;
const InitUI = () => {
    if (initialized)
        return;
    (0, RegisterBaseItems_1.RegisterBaseComponents)();
    (0, css_1.UIInjectCSS)();
};
exports.InitUI = InitUI;
