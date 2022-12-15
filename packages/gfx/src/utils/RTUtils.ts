import { ClampToEdgeWrapping, DepthTexture, LinearFilter, Material, RGBAFormat, Texture, UnsignedByteType, UnsignedShortType, WebGLMultipleRenderTargets, WebGLRenderer, WebGLRenderTarget, WebGLRenderTargetOptions } from "three";
import { RTHelper } from "./RTHelper";

export class RTUtils {
	static helper:RTHelper = new RTHelper();

	static getRenderTarget(width:number, height:number, settings:WebGLRenderTargetOptions={}, depth:boolean=false):WebGLRenderTarget {
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

	static drawRT(rt:WebGLRenderTarget, renderer:WebGLRenderer, x:number=0, y:number=0, width:number=0, height:number=0, opacity:number=1) {
		RTUtils.helper.render(rt, renderer, x, y, width, height, opacity);
	}

	static drawMRT(mrt:WebGLMultipleRenderTargets, renderer:WebGLRenderer, index:number, x:number=0, y:number=0, width:number=0, height:number=0) {
		RTUtils.helper.renderMRT(mrt, renderer, index, x, y, width, height);
	}

	static drawTexture(texture:Texture, renderer:WebGLRenderer, x:number=0, y:number=0, width:number=0, height:number=0, opacity:number=1) {
		RTUtils.helper.drawTexture(texture, renderer, x, y, width, height, opacity);
	}

	static renderToRT(rt:WebGLRenderTarget|WebGLMultipleRenderTargets, renderer:WebGLRenderer, material:Material) {
		RTUtils.helper.renderToTarget(rt, renderer, material);
	}

	static renderToViewport(renderer:WebGLRenderer, material:Material) {
		RTUtils.helper.renderToViewport(renderer, material);
	}
}