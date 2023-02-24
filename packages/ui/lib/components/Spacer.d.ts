import { RowTypes } from "../utils/dom";
import { UIElement } from "./UIElement";
export interface SpacerParams {
    size?: string;
    line?: boolean;
}
export declare class Spacer extends UIElement {
    type: RowTypes;
    constructor(depth: number, { size, line, }: SpacerParams);
}
