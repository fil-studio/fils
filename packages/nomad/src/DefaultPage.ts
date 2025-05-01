import { Page } from "./Page";

/**
* Default Page for common websites using @fils/Nomad
*/
export class DefaultPage extends Page {
    protected rs: ResizeObserver;

    constructor(id:string, template:string, dom:HTMLElement) {
        super(id, template, dom);
        this.rs = new ResizeObserver(() => {
            // console.log('resize');
            this.resize();
        });
    }

    launch() {
        this.rs.observe(this.dom);
    }

    resize() {}

    update() {}

    dispose(unmountLater:boolean=false): void {
        this.rs.disconnect();
        if(!unmountLater) this.unmount();
        // console.log('dispose');
    }

    unmount() {
        this.dom.remove();
    }
}
