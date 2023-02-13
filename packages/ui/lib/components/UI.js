"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
const utils_1 = require("@fils/utils");
const bundle_min_css_1 = __importDefault(require("../bundle/bundle.min.css"));
const cssClasses_1 = require("../partials/cssClasses");
const RegisterBaseItems_1 = require("../partials/RegisterBaseItems");
const css_1 = __importDefault(require("../utils/css"));
const dom_1 = __importStar(require("../utils/dom"));
const Group_1 = require("./Group");
(0, RegisterBaseItems_1.RegisterBaseComponents)();
css_1.default.inject(bundle_min_css_1.default);
class UI extends Group_1.Group {
    constructor({ resizable = true, parentElement, icon, width }) {
        super(Object.assign({}, arguments[0]));
        this.wrapper = (0, utils_1.el)('div');
        this.resizable = parentElement ? false : resizable;
        this.init(0);
        this.addIcon(icon);
        this.appendTo(parentElement);
        if (width) {
            this.wrapper.style.setProperty('--wrapper-width', `${width}px`);
        }
    }
    appendTo(parentElement) {
        if (parentElement) {
            this.wrapper.classList.add(cssClasses_1.CSS_UI.parent);
            parentElement.appendChild(this.wrapper);
        }
        else {
            document.body.appendChild(this.wrapper);
        }
    }
    addIcon(icon) {
        if (!icon)
            return;
        dom_1.default.addIcon(this.el.querySelector('header'), icon);
    }
    createDom() {
        super.createDom();
        this.wrapper = dom_1.default.createRow({
            type: dom_1.RowTypes.ui,
            depth: this.depth,
        });
        this.wrapper.appendChild(this.el);
    }
    addEventListeners() {
        super.addEventListeners();
        if (!this.resizable)
            return;
        const resizer = (0, utils_1.el)('div', cssClasses_1.CSS_UI.resizer);
        this.wrapper.appendChild(resizer);
        const resize = (w, x) => {
            if (x < 0 && w + x < 300)
                return;
            this.wrapper.style.setProperty('--wrapper-width', `${w + x}px`);
            this.emit('resize');
        };
        let dragging = false;
        let x = 0;
        let distance = 0;
        let width = 0;
        resizer.addEventListener('mousedown', (e) => {
            dragging = true;
            x = e.clientX;
            width = this.wrapper.getBoundingClientRect().width;
        });
        window.addEventListener('mousemove', (e) => {
            if (!dragging)
                return;
            e.preventDefault();
            distance = x - e.clientX;
            resize(width, distance);
        });
        window.addEventListener('mouseup', (e) => {
            if (!dragging)
                return;
            e.preventDefault();
            dragging = false;
        });
    }
}
exports.UI = UI;
