import { ItemPanel, Panel } from '../../Panel';
import { SelectItemParameters } from '../ItemParameters';
export declare class SelectPanel extends Panel {
    parent: SelectItem;
    search: HTMLElement;
    searchInput: HTMLInputElement;
    optionNone: HTMLElement;
    options: Array<{
        key: string;
        value: any;
        dom: HTMLElement;
    }>;
    addEventListeners(): void;
    sortOptions(): void;
    createPanelContent(): void;
    searchOptions(): void;
    createSearch(): void;
}
export declare class SelectItem extends ItemPanel {
    params: SelectItemParameters;
    panel: SelectPanel;
    options: Object;
    input: HTMLElement;
    label: HTMLElement;
    protected activeOption: HTMLElement;
    afterCreate(): void;
    protected addEventListeners(): void;
    open(): void;
    close(): void;
    protected createContent(): void;
    setValue(value: any): void;
    destroy(): void;
}
