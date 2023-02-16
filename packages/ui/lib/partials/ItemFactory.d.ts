import { ItemParameters } from "../components/items/ItemParameters";
export interface CreateItemParams {
    object: any;
    key: string;
    params?: ItemParameters;
}
export declare const ItemFactory: (createParams: CreateItemParams) => import("../main").Item;
