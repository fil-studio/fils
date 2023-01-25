"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var css_1 = __importDefault(require("./utils/css"));
var bundle_min_css_1 = __importDefault(require("./bundle/bundle.min.css"));
css_1.default.inject(bundle_min_css_1.default);
var UI = (function () {
    function UI() {
        console.log('UI 6');
    }
    return UI;
}());
exports.UI = UI;
