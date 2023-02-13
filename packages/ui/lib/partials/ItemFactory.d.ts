import { Item } from "../components/items/Item";
import { ItemParameters } from "../components/items/ItemParameters";
export interface AvailableItem {
    view: string;
    create: (params: CreateItemParams) => Item;
}
export declare const AvailableItems: {
    items: AvailableItem[];
};
export interface ItemRegisterOptions {
    view: string;
    item: typeof Item;
}
export interface CreateItemParams {
    object: any;
    key: string;
    params?: ItemParameters;
}
export declare const ItemRegister: (registerOptions: ItemRegisterOptions) => void;
export declare const ItemFactory: (createParams: CreateItemParams) => Item;
