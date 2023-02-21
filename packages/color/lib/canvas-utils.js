"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawColorPickerSL = exports.drawColorPickerBar = exports.drawColorWheel = void 0;
var utils_1 = require("./utils");
function drawColorWheel(canvas) {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = Math.min(canvas.width, canvas.height) / 2;
    var ctx = canvas.getContext('2d');
    for (var i = 0; i < 360; i++) {
        var rad = (i * Math.PI) / 180;
        var x = centerX + radius * Math.cos(rad);
        var y = centerY + radius * Math.sin(rad);
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "hsl(".concat(i, ", 100%, 50%)");
        ctx.fill();
    }
}
exports.drawColorWheel = drawColorWheel;
function drawColorPickerBar(canvas, x, y, width, height) {
    var _x = x !== undefined ? x : 0;
    var _y = y !== undefined ? y : 0;
    var w = width !== undefined ? width : canvas.width;
    var h = height !== undefined ? height : canvas.height;
    var ctx = canvas.getContext('2d');
    for (var i = 0; i < w; i++) {
        // const rad = (i * Math.PI) / 180;
        var dx = _x + i;
        var angle = 360 * i / w;
        ctx.fillStyle = "hsl(".concat(angle, ", 100%, 50%)");
        ctx.fillRect(dx, _y, 1, h);
    }
}
exports.drawColorPickerBar = drawColorPickerBar;
function drawColorPickerSL(canvas, angle, x, y, width, height) {
    var _x = x !== undefined ? x : 0;
    var _y = y !== undefined ? y : 0;
    var w = width !== undefined ? width : canvas.width;
    var h = height !== undefined ? height : canvas.height;
    var ctx = canvas.getContext('2d');
    var sw = w / 100;
    var sh = h / 100;
    for (var i = 0; i <= 100; i++) {
        for (var j = 0; j <= 100; j++) {
            var hex = (0, utils_1.hsbToHex)({
                h: angle,
                s: j,
                b: i
            });
            ctx.fillStyle = hex; //`hsl(${angle}, ${j}%, ${100-i}%)`;
            ctx.fillRect(_x + w * j / 100, _y + h - h * i / 100, sw, sh);
        }
    }
}
exports.drawColorPickerSL = drawColorPickerSL;
