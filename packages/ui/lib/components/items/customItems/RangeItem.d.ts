import { Item } from "../Item";
import { RangeItemParameters } from "../ItemParameters";
export declare class RangeItem extends Item {
    input: HTMLInputElement;
    range: HTMLElement;
    thumb: HTMLElement;
    params: RangeItemParameters;
    max: number;
    min: number;
    step: number;
    decimals: number;
    limitNumber: (value: number) => number;
    protected addEventListeners(): void;
    protected get mappedValue(): number;
    protected createContent(): void;
    protected setUpOverExpose(): void;
    protected updateRange(): void;
    protected updateInput(): void;
    setValue(value: any): void;
    refreshDom(): void;
}
