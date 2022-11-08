import { io } from "../io";

/**
 * Core Asset + Basic Asset Types
 */

export class Asset {
	url:string;
	protected _loaded:boolean = false;
	protected _failed:boolean = false;
	content:any = null;

	constructor(url:string) {
		this.url = url;
	}

	load(callback?:Function) {}
	
	destroy(){
		this.content = null;
		this._loaded = false;
		this._failed = false;
	}

	get loaded(): boolean {
		return this._loaded;
	}

	get failed(): boolean {
		return this._failed;
	}
}

export class XHttpReqAsset extends Asset {
	type:XMLHttpRequestResponseType;
	
	constructor (url:string, type:XMLHttpRequestResponseType="text") {
		super(url);
		this.type = type;
	}

	load( callback?:Function ) {
		if ( this.loaded ) return;
			// console.log( "loading", this.url );

		const onError = (res:XMLHttpRequest) => {
			this._failed = true;
			console.warn("Failed loading Asset", res.status);
		}

		return io.load(this.url, (res:XMLHttpRequest) => {
			this.content = res;
			this._loaded = true;
			if ( callback != undefined ) callback();
		}, onError, {
			responseType: this.type
		});
	}
}

export class ImageAsset extends Asset {
	content:HTMLImageElement;

	constructor (url:string, type:XMLHttpRequestResponseType="text") {
		super(url);
	}

	load( callback?:Function ) {
		if ( this.loaded ) return;
			// console.log( "loading", this.url );
		const img = new Image();
		this.content = img;

		img.onerror = () => {
			this._failed = true;
			console.warn("Failed loading Asset");
		}

		img.onload = () => {
			this._loaded = true;
			if ( callback != undefined ) callback();
		}

		img.src = this.url;
	}
}