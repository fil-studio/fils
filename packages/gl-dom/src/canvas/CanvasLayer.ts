import { GLLayer } from "../gl/GLLayer";
import { CanvasDOMLayer, CanvasRenderingParameters } from "./CanvasDOMLayer";

export abstract class CanvasLayer extends GLLayer {
    gl:CanvasDOMLayer;
    params:CanvasRenderingParameters;

    constructor(_gl:CanvasDOMLayer) {
        super(_gl);

        this.params = {
            program: (ctx) => {
                this.renderProgram(ctx)
            }
        }
    }

    /**
     * Render program. Must be implemented
     * @param ctx Canvas 2D rendering context
     */
    protected renderProgram(ctx:CanvasRenderingContext2D) {

    }

    render() {
        this.gl.render(this.params);
    }
}