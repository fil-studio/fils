import { UI } from "../main";
import { EventsManager } from "../partials/EventsManager";
import { Button } from "./Button";
import { Item } from "./items/Item";
import { ItemParameters } from "./items/ItemParameters";
import { Spacer, SpacerParams } from "./Spacer";
import { UIElement } from "./UIElement";
export interface GroupParams {
    parent?: Group | UI;
    title?: string;
    folded?: boolean;
    foldable?: boolean;
}
export declare class Group extends UIElement {
    protected children: Array<Group | Item | Button | Spacer>;
    folded: boolean;
    foldable: boolean;
    protected height: number;
    protected timer: any;
    content: HTMLElement;
    foldWrapper: HTMLElement;
    constructor({ title, folded, foldable, }: GroupParams);
    createDom(): void;
    protected addEventListeners(): void;
    protected onFold(): void;
    addButton(params: any): Button;
    addGroup(params: GroupParams): Group;
    addSpacer(params?: SpacerParams): void;
    add(object: Object, key: string, params?: ItemParameters): Item;
    addItem(object: Object, key: string, params?: ItemParameters): Item;
    change(target: EventsManager): void;
}
