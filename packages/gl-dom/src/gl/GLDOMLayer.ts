import { GLLayer } from "./GLLayer";

/**
 * GL Element resize delay to avoid continuous GL
 * resizing
 */
const RESIZE_TIMEOUT:number = 100;

export interface GLRenderParameters {}

/**
 * GL DOM Layer: defines a GL canvas interface
 */
export abstract class GLDOMLayer {
    dom:HTMLElement;
    rect:DOMRect;
    protected resizeObserver:ResizeObserver;
    protected timeoutId:number;

    protected layers:GLLayer[] = [];

    /**
     * GL DOM Layer class for handling WebGL Content
     * @param _dom an empty element where to embed the webgl canvas
     */
    constructor(_dom:HTMLElement) {
        // console.log("Attaching GL Layer to", _dom);
        this.dom = _dom;
        
        this.resizeObserver = new ResizeObserver((entries) => {
            window.clearTimeout(this.timeoutId);
            this.timeoutId = window.setTimeout(()=>{
                // console.log('GL DOM resize');
                this.resize();
            }, RESIZE_TIMEOUT);
        });

        this.resizeObserver.observe(this.dom);
    }

    resize() {
        const rect = this.dom.getBoundingClientRect();
        this.rect = rect;

        for(const layer of this.layers) {
            layer.setSize(rect.width, rect.height);
        }
    }

    /**
     * Render API
     */
    render(params:GLRenderParameters) {
        
    }

    /**
     * Register Layer
     */
    registerLayer(layer:GLLayer) {
        if(this.layers.indexOf(layer) > -1) return;
        this.layers.push(layer);
    }

    /**
     * Unregister layer
     */
    unregisterListener(layer:GLLayer) {
        this.layers.splice(this.layers.indexOf(layer), 1);
    }

    dispose() {
        this.resizeObserver.disconnect();
        for(const layer of this.layers) {
            layer.dispose();
        }
        this.layers = [];
    }
}