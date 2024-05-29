import { ClampToEdgeWrapping, DepthTexture, LinearFilter, Material, RenderTargetOptions, RGBAFormat, Texture, UnsignedByteType, UnsignedShortType, WebGLRenderer, WebGLRenderTarget } from "three";
import { RTHelper } from "./RTHelper";

export class RTUtils {
	static helper:RTHelper = new RTHelper();

	static getRenderTarget(width:number, height:number, settings:RenderTargetOptions={}, depth:boolean=false):RenderTargetOptions {
		const target = new WebGLRenderTarget(width, height, {
			minFilter: settings.minFilter !== undefined ? settings.minFilter : LinearFilter,
			magFilter: settings.magFilter !== undefined ? settings.magFilter : LinearFilter,
			wrapS: settings.wrapS !== undefined ? settings.wrapS : ClampToEdgeWrapping,
			wrapT: settings.wrapT !== undefined ? settings.wrapT : ClampToEdgeWrapping,
			format: settings.format ? settings.format : RGBAFormat,
			type: settings.type !== undefined ? settings.type : UnsignedByteType,
			stencilBuffer: settings.stencilBuffer !== undefined ? settings.stencilBuffer : true	
		});

		if (depth) {
			target.depthTexture = new DepthTexture(width, height, UnsignedShortType);
		}

		return target;
	}

	static drawRT(rt:WebGLRenderTarget, renderer:WebGLRenderer, x:number=0, y:number=0, width:number=0, height:number=0, opacity:number=1, index:number=0) {
		RTUtils.helper.render(rt, renderer, x, y, width, height, opacity, index);
	}

	static drawTexture(texture:Texture, renderer:WebGLRenderer, x:number=0, y:number=0, width:number=0, height:number=0, opacity:number=1) {
		RTUtils.helper.drawTexture(texture, renderer, x, y, width, height, opacity);
	}

	static renderToViewport(renderer:WebGLRenderer, material:Material) {
		RTUtils.helper.renderToViewport(renderer, material);
	}

	static renderToRT(rt:WebGLRenderTarget, renderer:WebGLRenderer, material:Material) {
		RTUtils.helper.renderToTarget(rt, renderer, material);
	}
}