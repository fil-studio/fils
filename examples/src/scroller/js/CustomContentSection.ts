import { ContentSection, Scroller } from "@fils/scroller";
// import { ContentSection, Scroller } from "../../../../packages/scroller/src/main";

/**
 * Silly example you can do this purely in CSS!
 * This wrapper should be for more custom things
 */

export class CustomContentSection extends ContentSection {
    h2:HTMLElement;
    constructor(_dom:HTMLElement, scroller?:Scroller) {
        super(_dom, scroller);
    }

    onInit(): void {
        console.log('INIT');
        
        this.dom.style.opacity = '0';
        this.dom.style.transition = 'opacity 0s ease-out';
        this.h2 = this.dom.querySelector('h2') as HTMLElement;
    }

    addEventListeners(): void {
        /* this.h2.addEventListener('click', (event) => {
            console.log(this.h2);
        }); */
    }

    onAnimationIn(): void {
        console.log('ANIMATION IN!');
        this.dom.style.transitionDuration = '5s';
        this.dom.style.opacity = '1';
    }

    onAnimationOut(): void {
        console.log('HIDDING... RESTORE STUFF!')
        this.dom.style.transitionDuration = '0s';
        this.dom.style.opacity = '0';
    }

    update(time:number=0): void {
        // ensure not running stuff when hidden
        if(!this.section.visible) return;
        this.h2.style.transform = `translateY(${100*Math.sin(time*2)}px)`;
    }
}