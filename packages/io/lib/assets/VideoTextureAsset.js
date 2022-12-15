import { VideoTexture } from 'three';
import { TextureUtils } from '../utils/TextureUtils';
import { Asset } from "./Asset";
export class VideoTextureAsset extends Asset {
    constructor(url, loop = false, videoRef = null, options = null) {
        super(url);
        this.loop = loop;
        this.vRef = videoRef;
        this.options = options;
    }
    load(callback) {
        let video = this.vRef ? this.vRef : document.createElement('video');
        video.loop = this.loop;
        video.crossOrigin = 'anonymous';
        video.autoplay = true;
        video.muted = true;
        video.setAttribute('playsinline', 'true');
        video.setAttribute('webkitPlaysInline', 'true');
        if (!this.vRef)
            document.body.appendChild(video);
        let finish = () => {
            if (this.loaded)
                return;
            this.content = new VideoTexture(video);
            if (this.options)
                TextureUtils.applyTextureOptions(this.content, this.options);
            if (callback != null)
                callback();
            this._loaded = true;
        };
        video.addEventListener('error', (event) => {
            console.warn('Error loading Video Asset');
            console.log(event);
            this._failed = true;
        });
        video.src = this.url;
        let loaded = () => {
            if (!this.loaded && video.readyState > 3) {
                return finish();
            }
            requestAnimationFrame(loaded);
        };
        loaded();
    }
    destroy() {
        this.content.dispose();
        super.destroy();
    }
}
