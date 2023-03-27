import { Item } from '../Item';
import { UploadItemParameters } from "../ItemParameters";
export declare class UploadItem extends Item {
    params: UploadItemParameters;
    protected buttonTitle: string;
    protected uploadButton: HTMLElement;
    protected removeUploadButton: HTMLElement;
    protected input: HTMLInputElement;
    protected addEventListeners(): void;
    destroy(): void;
    protected createContent(): void;
}
