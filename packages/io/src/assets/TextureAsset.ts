import { Texture, TextureLoader } from 'three';
import { TextureOptions, TextureUtils } from '../utils/TextureUtils';
import { Asset } from "./Asset";

const loader = new TextureLoader();

export class TextureAsset extends Asset {
	options:TextureOptions;
	content:Texture;
	constructor(url:string, opts:TextureOptions=null) {
		super(url);
		this.options = opts;
	}
	load(callback = null) {
		// console.log( "Loading", this.url );
		loader.load(
			this.url,
			(texture:Texture) => {
				this.content = texture;
				if(this.options) TextureUtils.applyTextureOptions(texture, this.options);
				if (callback != null) callback();
				this._loaded = true;
				if(this._destroying) this.destroy();
			},
			(event) => {},
			(event) => {
				console.warn('Error Loading Image Asset');
				this._failed = true;
			}
		);
	}

	destroy() {
		this._destroying = true;
		if(!this.loaded) return;
		this.content.dispose();
		super.destroy();
	}
}