import { OrthographicCamera, PerspectiveCamera, Scene } from "three";
import { GLLayer } from "../gl/GLLayer";
import { ThreeDomLayer, ThreeRenderParameters } from "./ThreeDOMLayer";

export abstract class ThreeLayer extends GLLayer {
    dom:ThreeDomLayer;
    camera:PerspectiveCamera|OrthographicCamera;
    scene:Scene;
    protected params:ThreeRenderParameters;

    constructor(_dom:ThreeDomLayer) {
        super(_dom);
        this.scene = new Scene();
        this.params = {
            scene: this.scene,
            camera: null,
            target: null
        }
    }

    setSize(width: number, height: number): void {
        if(this.camera.type === "PerspectiveCamera") {
            const cam = this.camera as PerspectiveCamera;
            cam.aspect = width/height;
        } else {
            const cam = this.camera as OrthographicCamera;
            cam.left = -width/2;
            cam.right =  width/2;
            cam.top = height/2;
            cam.bottom = -height/2;
        }

        this.camera.updateProjectionMatrix();
    }
    
    render() {
        if(!this.active) return;
        this.dom.render(this.params);
    }

}