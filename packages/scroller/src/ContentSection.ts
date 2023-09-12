import { Scroller } from "./Scroller";
import { ScrollerSectionListener, Section } from "./Section";

export class ContentSection implements ScrollerSectionListener {
    dom:HTMLElement;
    section:Section

    constructor(_dom:HTMLElement, scroller?:Scroller) {
        this.dom = _dom;
        
        const sections = scroller?.sections;
        if(sections) {
            const s = sections.find(s=>s.dom === _dom);
            if(s) {
                s.addSectionListener(this);
                this.section = s;
            }
        }

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
    onBeforeRestore(resizing: boolean) {
        
    }

    /**
     * Called on section after restore
     * @param resizing whereas scroller is resizing or not
     */
    onAfterRestore(resizing: boolean) {
        
    }

    /**
     * You must call this function in your own raf
     * @param time animation time in seconds
     */
    update(time:number=0) {
        
    }
}