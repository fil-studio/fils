import { Asset } from './Asset';
export declare class GLTFAsset extends Asset {
    constructor(url: string);
    load(callback?: Function): void;
    destroy(): void;
}
