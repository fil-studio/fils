"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var math_1 = require("@fils/math");
var Scroller_1 = require("./Scroller");
var Section = /** @class */ (function () {
    function Section(id, dom, direction) {
        this.w = {
            w: 0,
            h: 0
        };
        this.direction = Scroller_1.D.LEFT;
        this.scroll = 0;
        this.delta = 0;
        this.visible = true;
        this.disabled = false;
        this.id = id;
        this.dom = dom;
        this.direction = direction;
    }
    Section.prototype.restore = function () {
        this.dom.style.transform = 'none';
        this.visible = true;
        this.rect = this.dom.getBoundingClientRect();
    };
    Section.prototype.animationIn = function () {
    };
    Section.prototype.animationOut = function () {
    };
    Object.defineProperty(Section.prototype, "threshold", {
        get: function () {
            // VERTICAL SCROLL THRESHOLDS
            if (this.direction === Scroller_1.D.TOP || this.direction === Scroller_1.D.BOTTOM)
                return [
                    this.rect.top - this.w.h,
                    this.rect.top + this.rect.height
                ];
            // HORIZONTAL SCROLL THRESHOLDS
            if (this.direction === Scroller_1.D.LEFT || this.direction === Scroller_1.D.RIGHT)
                return [
                    this.widthOffset - this.w.w,
                    this.widthOffset + this.rect.width
                ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Section.prototype, "position", {
        get: function () {
            if (!this.visible)
                return { x: 0, y: -this.w.h };
            if (this.direction === Scroller_1.D.TOP)
                return { x: 0, y: -this.scroll };
            if (this.direction === Scroller_1.D.BOTTOM)
                return { x: 0, y: this.scroll + (this.w.h - this.rect.height) - this.rect.top * 2 };
            if (this.direction === Scroller_1.D.LEFT)
                return { x: this.widthOffset - this.scroll, y: -this.rect.top };
            if (this.direction === Scroller_1.D.RIGHT)
                return { x: this.scroll + (this.w.w - this.rect.width) - this.widthOffset, y: -this.rect.top };
        },
        enumerable: false,
        configurable: true
    });
    Section.prototype.updateTransform = function () {
        if (this.disabled)
            return;
        this.dom.style.transform = "translate3d(".concat(this.position.x, "px, ").concat(this.position.y, "px, 0)");
    };
    Section.prototype.update = function () {
        if (this.scroll >= this.threshold[0] && this.scroll <= this.threshold[1]) {
            if (!this.visible)
                this.animationIn();
            this.visible = true;
            this.dom.classList.add('fil-scroller-visible');
            this.dom.style.setProperty('--fil-scroller-delta', "".concat(this.delta));
            this.progress = math_1.MathUtils.map(this.scroll, this.threshold[0], this.threshold[1], 0, 1);
            this.dom.style.setProperty('--fil-scroller-progress', "".concat(this.progress));
            this.updateTransform();
            return;
        }
        if (!this.visible)
            return;
        this.animationOut();
        this.visible = false;
        this.dom.classList.remove('fil-scroller-visible');
        this.dom.style.setProperty('--fil-scroller-delta', '0');
        this.progress = 0;
        this.updateTransform();
    };
    return Section;
}());
exports.Section = Section;
