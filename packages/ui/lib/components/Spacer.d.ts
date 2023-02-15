import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
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
