import { ItemParameters } from "../components/items/ItemParameters";
export interface CreateItemParams {
    object: any;
    key: string;
    params?: ItemParameters;
}
export declare const ItemFactory: ({ object, key, params }: CreateItemParams) => import("../main").Item;
