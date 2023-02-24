import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export declare enum SpacerSize {
    small = "small",
    medium = "medium",
    large = "large"
}
export interface SpacerParams {
    size?: SpacerSize;
    line?: boolean;
}
export declare class Spacer extends UIElement {
    type: RowTypes;
    constructor(depth: number, { size, line, }: SpacerParams);
}
