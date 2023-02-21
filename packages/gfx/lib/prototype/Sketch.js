"use strict";
/*
 * Base Class for Code Sketches
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sketch = void 0;
var Sketch = /** @class */ (function () {
    function Sketch() {
        this._paused = false;
        this._raf = null;
        this._rafId = -1;
        this._startTime = 0;
        this._started = false;
    }
    Object.defineProperty(Sketch.prototype, "started", {
        get: function () {
            return this._started;
        },
        enumerable: false,
        configurable: true
    });
    Sketch.prototype.start = function (customRaf) {
        var _this = this;
        if (customRaf === void 0) { customRaf = null; }
        if (this._started)
            return;
        this._started = true;
        var animate = function () {
            _this.update();
            _this.render();
            requestAnimationFrame(animate);
        };
        if (customRaf == null) {
            this._raf = animate;
        }
        else {
            this._raf = customRaf;
        }
        this.addEventListeners();
        this._startTime = performance.now();
        this._rafId = requestAnimationFrame(this._raf);
        return this._rafId;
    };
    Sketch.prototype.addEventListeners = function () {
    };
    Sketch.prototype.pause = function () {
        if (!this._started)
            return;
        if (this._paused)
            return;
        this._paused = true;
        cancelAnimationFrame(this._rafId);
    };
    Sketch.prototype.resume = function () {
        if (!this._started)
            return;
        if (!this._paused)
            return;
        this._paused = false;
        this._rafId = requestAnimationFrame(this._raf);
    };
    Sketch.prototype.update = function () {
        var time = performance.now() - this._startTime;
        this.manualUpdate(time);
    };
    Sketch.prototype.manualUpdate = function (time) { };
    Sketch.prototype.render = function () { };
    return Sketch;
}());
exports.Sketch = Sketch;
