export class Page {
    constructor(dom) {
        this.id = '';
        this.isActive = false;
        this.isLoaded = false;
        this.dom = dom;
    }
    create() { }
    dispose() { }
    load() { }
    loaded() { }
    transitionIn() { }
    transitionOut() { }
}
