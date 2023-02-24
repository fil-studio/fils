import { UI } from "../main";
import { EventsManager } from "../partials/EventsManager";
import { Button } from "./Button";
import { Item } from "./items/Item";
import { ItemParameters } from "./items/ItemParameters";
import { SpacerParams } from "./Spacer";
import { UIElement } from "./UIElement";
export interface GroupParams {
    parent?: Group | UI;
    title?: string;
    folded?: boolean;
    foldable?: boolean;
}
export declare class Group extends UIElement {
    protected children: Array<Group | Item>;
    folded: boolean;
    foldable: boolean;
    protected height: number;
    protected timer: any;
    content: HTMLElement;
    foldWrapper: HTMLElement;
    constructor({ title, folded, foldable, }: GroupParams);
    createDom(): void;
    protected addEventListeners(): void;
    foldToggle(): void;
    /**
     * Creates a button with the specified title.
     *
     * @param {string} title - The title to display on the button.
     * @default 'Button'
     * @event click
     * @returns {Button} The newly created button element.
     */
    addButton(title?: string, clickCallback?: Function): Button;
    /**
    * Creates a group.
    *
    * @param {title} title - Group tab title
    * @param {folded} folded - Is the group folded or not
    * @param {foldable} foldable - Is the group foldable or not
    * @returns {Group} The newly created group element.
    */
    addGroup(params: GroupParams): Group;
    /**
     * A function that does something with a widget option.
     *
     * @param {SpacerSize} option - The option to use.
     * @param {boolean} line - If the spacer should be a line or not
     * @default true
     */
    addSpacer(params?: SpacerParams): void;
    /**
     * A function that creates an Item.
     *
     * @param {title} title - Item title.
     * @param {view} view - Force item view. If not specified, it will be automatically detected.
     * @returns {Item} The newly created item element.
     */
    add(object: Object, key: string, params?: ItemParameters): Item;
    /**
    * A function that creates an Item.
    *
    * @param {title} title - Item title.
    * @param {view} view - Force item view. If not specified, it will be automatically detected.
    * @returns {Item} The newly created item element.
    */
    addItem(object: Object, key: string, params?: ItemParameters): Item;
    change(target: EventsManager): void;
    refresh(): void;
}
