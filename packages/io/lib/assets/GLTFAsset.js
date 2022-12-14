import { Asset } from './Asset';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const loader = new GLTFLoader();
export class GLTFAsset extends Asset {
    constructor(url) {
        super(url);
    }
    load(callback) {
        let url = this.url;
        loader.load(this.url, (gltf) => {
            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;
            this.content = gltf;
            this._loaded = true;
            if (this._destroying)
                this.destroy();
            if (callback != null)
                callback();
        }, function (xhr) {
        }, (error) => {
            console.warn('Error loading', url);
            this._failed = true;
        });
    }
    destroy() {
        this._destroying = true;
        if (!this.loaded)
            return;
        const dispose = (scene) => {
            for (let c of scene.children) {
                if (c.geometry)
                    c.geometry.dispose();
                if (c.material)
                    c.material.dispose();
                dispose(c);
            }
        };
        dispose(this.content.scene);
        this.content.scene = null;
        super.destroy();
    }
}
