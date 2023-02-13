import { NumberItemParameters } from "../ItemParameters";
import { Item } from "../Item";
export declare class NumberItem extends Item {
    params: NumberItemParameters;
    private inputElements;
    max: number | null;
    min: number | null;
    step: number;
    decimals: number;
    originalDataType: string;
    limitNumber: (value: number) => number;
    protected addEventListeners(): void;
    setValue(_value?: string | Array<number> | Object): void;
    protected createInput(value: number): {
        value: number;
        placeholder: string;
        wrapper: any;
        input: any;
        buttonIncrease: any;
        buttonDecrease: any;
    };
    protected createInputs(value: number | number[] | Object): void;
    protected createInputContent(inputElement: any): void;
    protected createContent(): void;
}
