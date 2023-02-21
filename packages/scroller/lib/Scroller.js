"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroller = exports.D = void 0;
var math_1 = require("@fils/math");
var Section_1 = require("./Section");
var D;
(function (D) {
    D[D["TOP"] = 0] = "TOP";
    D[D["BOTTOM"] = 1] = "BOTTOM";
    D[D["LEFT"] = 2] = "LEFT";
    D[D["RIGHT"] = 3] = "RIGHT";
})(D = exports.D || (exports.D = {}));
var style = "\n\t[fil-scroller-parent],\n\t[fil-scroller-parent] body { \n\t\toverscroll-behavior: none;\n\t\theight: 100vh;\n\t\twidth: 100%;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\toverflow: hidden;\n\t\tposition: fixed;\n\t\tpointer-events: none;\n\t}\n\t[fil-scroller]{\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tpointer-events: all;\n\t\toverflow-y: scroll;\n\t\t-webkit-overflow-scrolling: touch;\n\t}\n\t[fil-scroller-holder] {\n\t\tpointer-events: none;\n\t}\n\t[fil-scroller-container]{\n\t\tposition: fixed;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\toverflow: hidden;\n\t\tpointer-events: none;\n\t}\n\t[fil-scroller-content] {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\theight: auto;\n\t\twill-change: transform;\n\t\tpointer-events: none;\n\t}\n\t[fil-scroller-content] * {\n\t\tpointer-events: none;\n\t}\n\t[fil-scroller-content] [fil-scroller-pointer] {\n\t\tpointer-events: all;\n\t}\n\n\t.scroller__scrolling [fil-scroller-content] [fil-scroller-pointer] {\n\t\tpointer-events: none;\n\t}\n\n\t[fil-scroller-section]{\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\twill-change: transform;\n\t}\n\t[fil-scroller-section].fil-scroller-visible {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\n\t[fil-scroller=\"disabled\"] [fil-scroller-container] {\n\t\tposition: relative;\n\t}\n";
var Scroller = /** @class */ (function () {
    function Scroller() {
        this.html = {
            scroller: null,
            holder: null,
            container: null,
            content: null,
        };
        this.position = {
            current: 0,
            target: 0
        };
        this._direction = D.RIGHT;
        this.sections = [];
        this.loaded = false;
        this.paused = false;
        this.disabled = false;
        this.distance = 0;
        this._ease = 0.16;
        this.delta = 0;
        this.w = {
            w: 0,
            h: 0
        };
        this.html.scroller = document.querySelector('[fil-scroller]');
        if (!this.html.scroller) {
            console.warn('Fil Scroller - No `fil-scroller` element');
            return;
        }
        this.create();
    }
    // Pause - resume
    Scroller.prototype.pause = function () {
        this.paused = true;
    };
    Scroller.prototype.resume = function () {
        this.paused = false;
    };
    // Disable - enable
    Scroller.prototype.disable = function () {
        if (this.disabled)
            return;
        this.disabled = true;
        for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            section.disabled = this.disabled;
        }
        this.html.scroller.setAttribute('fil-scroller', 'disabled');
    };
    Scroller.prototype.enable = function () {
        if (!this.disabled)
            return;
        this.disabled = false;
        for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            section.disabled = this.disabled;
        }
        this.html.scroller.setAttribute('fil-scroller', '');
    };
    Object.defineProperty(Scroller.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (val) {
            if (val > D.RIGHT)
                val = 0;
            this._direction = val;
            for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
                var section = _a[_i];
                section.direction = this.direction;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Scroller.prototype, "ease", {
        get: function () {
            return this._ease;
        },
        set: function (newEase) {
            this._ease = newEase;
        },
        enumerable: false,
        configurable: true
    });
    Scroller.prototype.addStyles = function () {
        document.documentElement.setAttribute('fil-scroller-parent', '');
        var _styles = document.createElement('style');
        _styles.textContent = style;
        document.head.append(_styles);
    };
    Scroller.prototype.addHTML = function () {
        var dom = this.html.scroller;
        this.html.holder = dom.querySelector('[fil-scroller-holder]');
        this.html.container = dom.querySelector('[fil-scroller-container]');
        this.html.content = dom.querySelector('[fil-scroller-content]');
        this.pointerElements = dom.querySelectorAll('[fil-scroller-pointer]');
    };
    Scroller.prototype.addSections = function () {
        var sections = this.html.content.querySelectorAll('[fil-scroller-section]');
        for (var i = 0, len = sections.length; i < len; i++) {
            var _section = sections[i];
            var id = _section.getAttribute('fil-scroller-section') ? _section.getAttribute('fil-scroller-section') : "section-".concat(i);
            var section = new Section_1.Section(id, _section, this.direction);
            this.sections.push(section);
        }
    };
    Scroller.prototype.restore = function () {
        this.w.w = window.innerWidth;
        this.w.h = window.innerHeight;
        for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
            var section = _a[_i];
            section.w = this.w;
            section.restore();
        }
    };
    Scroller.prototype.onResize = function () {
        this.restore();
    };
    Scroller.prototype.addEventListeners = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.onResize();
        });
        var timeout;
        var disableScroll = function () {
            if (timeout)
                clearTimeout(timeout);
            document.documentElement.classList.add('scroller__scrolling');
            timeout = setTimeout(function () {
                document.documentElement.classList.remove('scroller__scrolling');
            }, 20);
        };
        window.addEventListener('wheel', function () {
            disableScroll();
        });
        window.addEventListener('touchmove', function () {
            disableScroll();
        });
    };
    Scroller.prototype.create = function () {
        this.addStyles();
        this.addHTML();
        this.addSections();
        this.addEventListeners();
        this.restore();
        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';
        console.log('Fil Scroller - Loaded');
        this.loaded = true;
    };
    Scroller.prototype.updateTarget = function () {
        this.position.target = this.html.scroller.scrollTop;
        if (this.paused)
            this.html.scroller.scrollTop = this.position.current;
    };
    Scroller.prototype.updateCheckHeight = function () {
        this.distance = 0;
        var vertical = this.direction === D.TOP || this.direction === D.BOTTOM;
        for (var i = 0, len = this.sections.length; i < len; i++) {
            if (vertical)
                this.distance += this.sections[i].rect.height;
            else
                this.distance += this.sections[i].rect.width;
        }
        // If horizontal the difference between height and width must be taken care of. 
        if (!vertical)
            this.distance += this.w.h - this.w.w;
        this.html.holder.style.height = "".concat(this.distance, "px");
    };
    Scroller.prototype.updateScrollValues = function () {
        var previous = this.position.current;
        if (this.disabled) {
            this.position.current = this.position.target;
        }
        else {
            this.position.current = math_1.MathUtils.lerp(this.position.current, this.position.target, this.ease);
        }
        var newDelta = (this.position.current - previous) * 0.01;
        this.delta = math_1.MathUtils.clamp(math_1.MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1);
    };
    Scroller.prototype.updateSections = function () {
        var scroll = this.position.current;
        var w = 0;
        for (var i = 0, len = this.sections.length; i < len; i++) {
            var section = this.sections[i];
            section.scroll = scroll;
            section.delta = this.delta;
            section.widthOffset = w;
            w += section.rect.width;
            section.update();
        }
    };
    Scroller.prototype.update = function () {
        if (!this.loaded)
            return;
        this.updateTarget();
        this.updateCheckHeight();
        this.updateScrollValues();
        this.updateSections();
    };
    return Scroller;
}());
exports.Scroller = Scroller;
