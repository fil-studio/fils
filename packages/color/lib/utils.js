"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixHex = exports.hsbToString = exports.rgbToString = exports.hsbToHex = exports.hsbToRgb = exports.rgbToHsb = exports.hslToHex = exports.hslToRgb = exports.rgbToHsl = exports.hexToHsb = exports.hexToRgb = exports.rgbToHex = exports.componentToHex = void 0;
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
exports.componentToHex = componentToHex;
function rgbToHex(color) {
    return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}
exports.rgbToHex = rgbToHex;
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}
exports.hexToRgb = hexToRgb;
function hexToHsb(hex) {
    return rgbToHsb(hexToRgb(hex));
}
exports.hexToHsb = hexToHsb;
function rgbToHsl(color) {
    var r = color.r / 255, g = color.g / 255, b = color.b / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h: h,
        s: s,
        l: l
    };
}
exports.rgbToHsl = rgbToHsl;
function hue2rgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslToRgb(color) {
    var r, g, b;
    var h = color.h, s = color.s, l = color.l;
    if (s == 0) {
        r = g = b = l; // achromatic
    }
    else {
        // eslint-disable-next-line no-inner-declarations
        var q = color.l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
exports.hslToRgb = hslToRgb;
function hslToHex(color) {
    return rgbToHex(hslToRgb(color));
}
exports.hslToHex = hslToHex;
function rgbToHsb(color) {
    var r = color.r / 255;
    var g = color.g / 255;
    var b = color.b / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s = 0, v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0;
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, b: v * 100 };
}
exports.rgbToHsb = rgbToHsb;
function hsbToRgb(color) {
    var h = color.h, s = color.s, b = color.b;
    s /= 100;
    b /= 100;
    var k = function (n) { return (n + h / 60) % 6; };
    var f = function (n) { return b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1))); };
    return {
        r: Math.round(255 * f(5)),
        g: Math.round(255 * f(3)),
        b: Math.round(255 * f(1))
    };
}
exports.hsbToRgb = hsbToRgb;
function hsbToHex(color) {
    var rgb = hsbToRgb(color);
    return rgbToHex(rgb);
}
exports.hsbToHex = hsbToHex;
function rgbToString(color) {
    return "R: ".concat(color.r, ", G: ").concat(color.g, ", B: ").concat(color.b);
}
exports.rgbToString = rgbToString;
function hsbToString(color) {
    return "H: ".concat(color.h, ", S: ").concat(color.s, ", B: ").concat(color.b);
}
exports.hsbToString = hsbToString;
function fixHex(color) {
    var fixedColor = color;
    if (fixedColor.substring(0, 1) !== "#") {
        fixedColor = "#" + fixedColor;
    }
    fixedColor = fixedColor.toUpperCase();
    fixedColor = fixedColor.substring(0, 7);
    if (fixedColor.length === 4) {
        fixedColor = "#" + fixedColor[1] + fixedColor[1] + fixedColor[2] + fixedColor[2] + fixedColor[3] + fixedColor[3];
    }
    while (fixedColor.length < 7) {
        fixedColor += "F";
    }
    // Replace invalid characters with their closest valid hexadecimal equivalent using a regular expression
    fixedColor = fixedColor.replace(/[^A-F0-9]/g, function (c) {
        switch (c) {
            case "#":
                return "#";
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "N":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                return "F";
            default:
                return "0";
        }
    });
    return fixedColor;
}
exports.fixHex = fixHex;
