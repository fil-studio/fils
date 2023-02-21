import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
/**
 * Spacer size options.
 *
 * @typedef {SpacerSize} WidgetOption
 * @property {string} small - Small.
 * @property {string} medium - Medium.
 * @property {string} large - Large.
 * @default medium
 */
export declare enum SpacerSize {
    small = "Small",
    medium = "Medium",
    large = "Large"
}
export interface SpacerParams {
    size?: SpacerSize;
    line?: boolean;
}
export declare class Spacer extends UIElement {
    type: RowTypes;
    constructor(depth: number, { size, line, }: SpacerParams);
}
