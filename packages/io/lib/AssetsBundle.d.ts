import { Asset } from "./assets/Asset";
/**
 * AssetsBundle class
 * This is designed for applications like
 * games where you want to preload a bunch of
 * things in advance. It supports a few formats
 */
export declare class AssetsBundle {
    assets: Array<Asset>;
    constructor();
    add(asset: Asset): void;
    /**
     *
     * @param onLoaded Callback to be called when all assets are loaded
     * @param onProgress Callback for loading progress. Receives float between 0 and 1.
     */
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
