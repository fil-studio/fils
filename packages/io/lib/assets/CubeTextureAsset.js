import { Asset } from "./Asset";
import { CubeTextureLoader } from 'three';
import { TextureUtils } from "../utils/TextureUtils";
const loader = new CubeTextureLoader();
export class CubeTextureAsset extends Asset {
    constructor(url, frmt = "jpg", opts) {
        super(url);
        this.format = frmt;
        this.options = opts;
    }
    load(callback) {
        loader.setPath(this.url);
        loader.load([
            'px.' + this.format,
            'nx.' + this.format,
            'py.' + this.format,
            'ny.' + this.format,
            'pz.' + this.format,
            'nz.' + this.format
        ], (texture) => {
            this.content = texture;
            TextureUtils.applyTextureOptions(texture, this.options);
            if (callback != null)
                callback();
            this._loaded = true;
        }, (event) => { }, (event) => {
            this._failed = true;
        });
    }
    destroy() {
        this.content.dispose();
        super.destroy();
    }
}
