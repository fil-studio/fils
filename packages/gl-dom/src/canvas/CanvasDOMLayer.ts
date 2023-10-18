import { GLDOMLayer, GLRenderParameters } from "../gl/GLDOMLayer";
import { CanvasLayer } from "./CanvasLayer";

export interface CanvasRenderingParameters extends GLRenderParameters {
    program(ctx:CanvasRenderingContext2D);
}

/**
 * Canvas DOM Layer for native Canvas-2d stuff
 */
export class CanvasDOMLayer extends GLDOMLayer {
    canvas:HTMLCanvasElement;
    ctx:CanvasRenderingContext2D;
    pixelRatio:number;

    protected layers: CanvasLayer[];
    
    constructor(_dom:HTMLElement, _pixelRatio:number=1) {
        super(_dom);

        this.pixelRatio = _pixelRatio;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();

        this.dom.appendChild(this.canvas);
    }

    protected resizeCanvas() {
        this.canvas.width = this.rect.width * this.pixelRatio;
        this.canvas.height = this.rect.height * this.pixelRatio;
    }

    resize(): void {
        super.resize();
        this.resizeCanvas();
    }

    externalResize(width: number, height: number): void {
        super.externalResize(width, height);
        this.resizeCanvas();
    }

    render(params: CanvasRenderingParameters): void {
        params.program(this.ctx);
    }
}