export type RGBColor = {
    r:number;
    g:number;
    b: number;
};

export type HSBColor = {
    h:number;
    s:number;
    b:number;
}

export type HSLColor = {
    h:number;
    s:number;
    l:number;
}

export function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbToHex(color:RGBColor): string {
  return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

export function hexToRgb(hex: string): RGBColor {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
   } : {r:0, g:0, b:0};
}

export function hexToHsb(hex: string): HSBColor {
    return rgbToHsb(hexToRgb(hex));
}

export function rgbToHsl(color:RGBColor):HSLColor {
    const r = color.r /255, g = color.g/255, b = color.b/255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max == min) {
        h = s = 0; // achromatic
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return {
        h: h,
        s: s,
        l: l
    };
}

function hue2rgb(p:number, q:number, t:number):number {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}

export function hslToRgb(color:HSLColor):RGBColor {
    let r, g, b;
    const h = color.h, s=color.s, l=color.l;
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      // eslint-disable-next-line no-inner-declarations
        let q = color.l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;    r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g* 255),
        b: Math.round(b * 255)
    };
}

export function hslToHex(color:HSLColor):string {
    return rgbToHex(
        hslToRgb(color)
    );
}

export function rgbToHsb(color:RGBColor): HSBColor {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, v = max;

  const d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return {h: h * 360, s: s * 100, b: v * 100};
}

export function hsbToRgb(color:HSBColor): RGBColor {
    let h = color.h, s = color.s, b = color.b;
    s /= 100;
    b /= 100;

    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));

    return {
        r: Math.round(255 * f(5)),
        g: Math.round(255 * f(3)),
        b: Math.round(255 * f(1))
    };
}

export function hsbToHex(color:HSBColor):string {
    const rgb:RGBColor = hsbToRgb(color);
    return rgbToHex(rgb);
}

export function rgbToString(color:RGBColor):string {
    return `R: ${color.r}, G: ${color.g}, B: ${color.b}`;
}

export function hsbToString(color:HSBColor):string {
    return `H: ${color.h}, S: ${color.s}, B: ${color.b}`;
}

export function fixHex(color: string):string {
    let fixedColor = color;
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
    fixedColor = fixedColor.replace(/[^A-F0-9]/g, (c) => {
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

export type LABColor = {
    l: number; // 0-100
    a: number; // typically -128 to 127
    b: number; // typically -128 to 127
};

// RGB to LAB conversion (via XYZ)
export function rgbToLab(color: RGBColor): LABColor {
    // Convert RGB to linear RGB
    let r = color.r / 255;
    let g = color.g / 255;
    let b = color.b / 255;

    // Apply sRGB gamma correction
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    // Convert to XYZ using sRGB matrix (D65 illuminant)
    let x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) * 100;
    let y = (r * 0.2126729 + g * 0.7151522 + b * 0.0721750) * 100;
    let z = (r * 0.0193339 + g * 0.1191920 + b * 0.9503041) * 100;

    // Normalize for D65 white point
    x /= 95.047;
    y /= 100.000;
    z /= 108.883;

    // Convert XYZ to LAB
    x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x + 16/116);
    y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y + 16/116);
    z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z + 16/116);

    return {
        l: (116 * y) - 16,
        a: 500 * (x - y),
        b: 200 * (y - z)
    };
}

// Simple ΔE*ab color difference (good enough for most cases)
export function colorDistance(color1: RGBColor, color2: RGBColor): number {
    const lab1 = rgbToLab(color1);
    const lab2 = rgbToLab(color2);
    
    const deltaL = lab1.l - lab2.l;
    const deltaA = lab1.a - lab2.a;
    const deltaB = lab1.b - lab2.b;
    
    return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
}

// Find closest color in palette
export function findClosestColor(target: RGBColor, palette: RGBColor[]): {
    color: RGBColor;
    distance: number;
    index: number;
} {
    let minDistance = Infinity;
    let closestColor = palette[0];
    let closestIndex = 0;

    palette.forEach((paletteColor, index) => {
        const distance = colorDistance(target, paletteColor);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = paletteColor;
            closestIndex = index;
        }
    });

    return {
        color: closestColor,
        distance: minDistance,
        index: closestIndex
    };
}