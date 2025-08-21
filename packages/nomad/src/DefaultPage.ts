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

    dispose(): void {
        this.rs.disconnect();
        // console.log('dispose');
    }

    unmount() {
        this.dom.remove();
    }

    transitionOut(resolve: any): Promise<void> {
        return new Promise<void>(res => {
            this.unmount();
            res();
        }).then(resolve);
    }
}
