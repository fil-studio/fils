import { GLDOMLayer } from "./GLDOMLayer";

/**
 * GL Layer: Rendering layer attached to a GL DOM Layer
 */
export abstract class GLLayer {
    dom:GLDOMLayer;
    active:boolean = true;

    constructor(_dom:GLDOMLayer) {
        this.dom = _dom;
        this.dom.registerLayer(this);
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