import { VideoTexture } from 'three';
import { TextureOptions, TextureUtils } from '../utils/TextureUtils';
import { Asset } from "./Asset";

export class VideoTextureAsset extends Asset {
	loop:boolean;
	content:VideoTexture;
	options:TextureOptions;
	vRef:HTMLVideoElement;
	constructor(url:string, loop:boolean=false, videoRef:HTMLVideoElement=null, options:TextureOptions=null) {
		super(url);
		this.loop = loop;
		this.vRef = videoRef;
		this.options = options;
	}

	load(callback?:Function) {
		// console.log( "Loading", this.url );
		let video = this.vRef ? this.vRef : document.createElement('video');
		video.loop = this.loop;
		video.crossOrigin = 'anonymous';
		video.autoplay = true;
		video.muted = true;
		// video.style.display = 'none';
		video.setAttribute('playsinline', 'true');
		video.setAttribute('webkitPlaysInline', 'true');
		// video.style.opacity = '0';
		if(!this.vRef) document.body.appendChild(video);

		let finish = () => {
			if (this.loaded) return;
			// To-Do: implement custom video texture with update routine
			this.content = new VideoTexture(video);
			if(this.options) TextureUtils.applyTextureOptions(this.content, this.options);
			if (callback != null) callback();
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