import { CreateItemParams } from '../../partials/ItemFactory';
import { UIElement } from '../UIElement';
import { ItemParameters } from './ItemParameters';
export declare class Item extends UIElement {
    content: HTMLElement;
    protected object: Object;
    protected key: keyof Object;
    value: any;
    params: ItemParameters;
    constructor(params: CreateItemParams);
    init(depth?: number): void;
    setValue(value: any): void;
    protected createDom(): void;
    refreshDom(): void;
}
