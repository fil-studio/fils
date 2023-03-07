import { UI } from "../main";
import { EventsManager } from "../partials/EventsManager";
import { Button } from "./Button";
import { InfoParams } from "./Info";
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
    protected children: Array<Group | Item | Button | UIElement>;
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
    * Creates a new group, adds it to the parent and returns it.
    *
    * @param {title} title - Group tab title
    * @param {folded} folded - Is the group folded or not
    * @param {foldable} foldable - Is the group foldable or not
    * @returns {Group} The newly created group element.
    */
    addGroup(params: GroupParams): Group;
    /**
    * @typedef {Object} SpacerOptions
    * @property {boolean} [line=true] - If true, the spacer will have a line. Default is true.
    * @property {'large'|'medium'|'small'} [size='medium'] - The size of the spacer. Default is 'medium'.
    */
    /**
     * Adds a spacer element to the page.
     *
     * @param {SpacerOptions} [options] - The options for the spacer.
     * @property {boolean} [line=true] - If true, the spacer will have a line. Default is true.
     * @property {'large'|'medium'|'small'} [size='medium'] - The size of the spacer. Default is 'medium'.
     * @returns {void}
     * @example
     *
     * // Adds a spacer with default options
     * addSpacer();
     *
     * // Adds a spacer with a line and a size of 'large'
     * addSpacer({ line: true, size: 'large' });
     */
    addSpacer(params?: SpacerParams): void;
    addInfo(params?: InfoParams): void;
    /**
     * Adds an item element to the parent and returns it.
     *
     * @param {title} title - Item title.
     * @param {view} view - Force item view. If not specified, it will be automatically detected.
     * @returns {Item} The newly created item element.
     */
    add(object: Object, key: string, params?: ItemParameters): Item;
    /**
    * Adds an item element to the parent and returns it.
    *
    * @param {title} title - Item title.
    * @param {view} view - Force item view. If not specified, it will be automatically detected.
    * @returns {Item} The newly created item element.
    */
    addItem(object: Object, key: string, params?: ItemParameters): Item;
    change(target: EventsManager): void;
    refresh(): void;
    addCustomUIElement(element: typeof UIElement, params: any): void;
}
