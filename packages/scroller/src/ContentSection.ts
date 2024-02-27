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

        // Trigger animation in if
        if(this.section.visible) this.onAnimationIn();
    }

    /**
     * Init function. Must be called by your child classes
     */
    private init() {
        this.onInit();
        this.addEventListeners();

    }

    /**
     * onInit triggers first time that this section loads
     */
    onInit() {}

    /**
     * Resume, triggers any time this section is re-inititated (if it's already created it will trigger "resume" but not onInit)
     */
    resume(){

    }
    /**
     * Stop, triggers any time this section is stopped, when the user leaves the page with this section but it's not destroying its dom
     */
    stop(){

    }

    /**
     * Dispose, triggers when the
     */
    dispose(){

    }

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
}