import { Item } from "../main";
import { CreateItemParams } from "./ItemFactory";
export interface AvailableItem {
    view: string;
    create: (params: CreateItemParams) => Item;
}
declare const AvailableItems: {
    items: AvailableItem[];
};
export interface ItemRegisterOptions {
    view: string;
    item: typeof Item;
}
export declare const ItemRegister: (registerOptions: ItemRegisterOptions) => void;
export default AvailableItems;
