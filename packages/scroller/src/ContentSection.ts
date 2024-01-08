import { Scroller } from "./Scroller";
import { ScrollerSectionListener, Section } from "./Section";

export abstract class ContentSection implements ScrollerSectionListener {
    dom:HTMLElement;
    scroller: Scroller;
    section:Section

    constructor(_dom:HTMLElement, scroller:Scroller) {
        this.dom = _dom;

        this.scroller = scroller;
        const sections = scroller.sections;

        if(sections) {
            const s = sections.find(s=> s.dom === _dom);
            if(s) {
                s.addSectionListener(this);
                this.section = s;
            }
        }

        this.init();
    }

    /**
     * Init function. Must be called by your child classes
     */
    private init() {
        this.onInit();
        this.addEventListeners();

        if(this.section.visible) this.onAnimationIn();
    }

    /**
     * You must initialize all your stuff here
     */
    onInit() {}

    addEventListeners() {}

    /**
     * Played when section's visibility change to visible
     */
    onAnimationIn() {

    }

    /**
     * Played when section's visibility change to hidden
     * Useful to reset things if you want to always animate
     * things when showing up
     */
    onAnimationOut() {

    }

    /**
     * Called on section before restore
     * @param resizing whereas scroller is resizing or not
     */
    onBeforeRestore() {

    }

    /**
     * Called on section after restore
     * @param resizing whereas scroller is resizing or not
     */
    onAfterRestore() {

    }

    /**
     * You must call this function in your own raf
     * @param time animation time in seconds
     */
    update(time:number=0) {

    }

    /**
     * Dispose events
     */
    dispose(){

    }
}