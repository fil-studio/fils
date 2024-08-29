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

        // --- We can't call functions here. We need to make sure we call init
        // --- on child classes ----
        // this.init();

        // Trigger animation in if
        // if(this.section.visible) this.onAnimationIn();
    }

    /**
     * Init function. Must be called
     */
    init() {
        this.onInit();
        this.addEventListeners();
        if(this.section.visible) this.onAnimationIn();
    }

    /**
     * onInit triggers first time that this section loads
     */
    onInit() {}

    // /**
    //  * Resume, triggers any time this section is re-inititated (if it's already created it will trigger "resume" but not onInit)
    //  */
    // resume(){

    // }
    // /**
    //  * Stop, triggers any time this section is stopped, when the user leaves the page with this section but it's not destroying its dom
    //  */
    // stop(){

    // }

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
     */
    onBeforeRestore() {

    }

    /**
     * Called on section after restore
     */
    onAfterRestore() {

    }

    /**
     * Called on section update when visible
     */
    onUpdate() {

    }
}