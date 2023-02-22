"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUI = void 0;
const RegisterBaseItems_1 = require("./partials/RegisterBaseItems");
// import { UIInjectCSS } from './utils/css';
require("./bundle.min.css");
let initialized = false;
const InitUI = () => {
    if (initialized)
        return;
    (0, RegisterBaseItems_1.RegisterBaseComponents)();
    // UIInjectCSS();
};
exports.InitUI = InitUI;
