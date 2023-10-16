import { GLDOMLayer } from "./GLDOMLayer";

/**
 * GL Layer: Rendering layer attached to a GL DOM Layer
 */
export abstract class GLLayer {
    gl:GLDOMLayer;
    active:boolean = true;

    constructor(_gl:GLDOMLayer) {
        this.gl = _gl;
        this.gl.registerLayer(this);
    }

    /**
     * Resize API
     * @param width Width in pixels of layer
     * @param height Height in pixels of layer
     */
    setSize(width: number, height: number): void {
        
    }

    /**
     * Standard render
     */
    render() {
        if(!this.active) return;
    }

    /**
     * Dispose API
     */
    dispose() {

    }
}