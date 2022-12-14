import { Asset } from "./assets/Asset";
export declare class AssetsBundle {
    assets: Array<Asset>;
    constructor();
    add(asset: Asset): void;
    loadAll(onLoaded?: Function, onProgress?: Function): void;
    load(i: number): void;
    getProgress(): number;
    get(i: number): Asset | null;
    getByURL(url: string): Asset | null;
    getIndexByURL(url: string): number;
    destroy(): void;
    get failed(): boolean;
    get loaded(): boolean;
}
