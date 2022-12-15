import { ClampToEdgeWrapping, DepthTexture, LinearFilter, RGBAFormat, UnsignedByteType, UnsignedShortType, WebGLRenderTarget } from "three";
import { RTHelper } from "./RTHelper";
export class RTUtils {
    static getRenderTarget(width, height, settings = {}, depth = false) {
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
    static drawRT(rt, renderer, x = 0, y = 0, width = 0, height = 0, opacity = 1) {
        RTUtils.helper.render(rt, renderer, x, y, width, height, opacity);
    }
    static drawMRT(mrt, renderer, index, x = 0, y = 0, width = 0, height = 0) {
        RTUtils.helper.renderMRT(mrt, renderer, index, x, y, width, height);
    }
    static drawTexture(texture, renderer, x = 0, y = 0, width = 0, height = 0, opacity = 1) {
        RTUtils.helper.drawTexture(texture, renderer, x, y, width, height, opacity);
    }
    static renderToRT(rt, renderer, material) {
        RTUtils.helper.renderToTarget(rt, renderer, material);
    }
    static renderToViewport(renderer, material) {
        RTUtils.helper.renderToViewport(renderer, material);
    }
}
RTUtils.helper = new RTHelper();
