export type RGBColor = {
    r: number;
    g: number;
    b: number;
};
export type HSBColor = {
    h: number;
    s: number;
    b: number;
};
export type HSLColor = {
    h: number;
    s: number;
    l: number;
};
export declare function componentToHex(c: number): string;
export declare function rgbToHex(color: RGBColor): string;
export declare function hexToRgb(hex: string): RGBColor;
export declare function rgbToHsl(color: RGBColor): HSLColor;
export declare function hslToRgb(color: HSLColor): RGBColor;
export declare function hslToHex(color: HSLColor): string;
export declare function rgbToHsb(color: RGBColor): HSBColor;
export declare function hsbToRgb(color: HSBColor): RGBColor;
export declare function hsbToHex(color: HSBColor): string;
export declare function rgbToString(color: RGBColor): string;
export declare function hsbToString(color: HSBColor): string;
