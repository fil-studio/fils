import { NumberItemParameters } from "../ItemParameters";
import { Item } from "../Item";
export declare class NumberItem extends Item {
    params: NumberItemParameters;
    private inputElements;
    max: number | null;
    min: number | null;
    step: number;
    originalDataType: string;
    getDecimals(): number;
    limitNumber: (value: number) => number;
    protected addEventListeners(): void;
    setValue(_value?: string | Array<number> | Object): void;
    refreshDom(): void;
    protected createInputs(value: number | number[] | Object): void;
    protected createInput(value: number): {
        value: number;
        placeholder: string;
        wrapper: any;
        input: any;
        buttonIncrease: any;
        buttonDecrease: any;
    };
    protected createInputContent(inputElement: any): void;
    protected createContent(): void;
    convertOriginalToArray(): any;
    convertArrayToOriginal(): any;
}
