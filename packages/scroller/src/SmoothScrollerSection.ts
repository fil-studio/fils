import { MathUtils } from "@fils/math";
import { SmoothScroller } from "./SmoothScroller";

export class SmoothScrollerSection {
  protected visible:boolean = false;
  protected hasUpdatedOnce:boolean = false; // to be used wisely for the ones in need
  progress:number = 0;
  progressIn:number = 0;
  progressOut:number = 0;

  injectCSS:boolean = false;

  protected focused:boolean = false;

  constructor(public dom:HTMLElement, public scroller:SmoothScroller) {
    scroller.addSection(this);
  }

  onVisible() {
    this.hasUpdatedOnce = false;
    this.visible = true;
    this.dom.setAttribute('scroll-visible', 'true');
  }

  onHidden() {
    this.visible = false;
    this.hasUpdatedOnce = false;
    this.dom.setAttribute('scroll-visible', 'false');
  }

  isOnFocus():boolean {
    return this.progressIn > .5 && this.progressOut < 0.5;
  }

  update() {
    if(!this.visible) return;
    const rect = this.dom.getBoundingClientRect();

    //@todo: implement horizontal scrolling variant
    this.progressIn = 1 - MathUtils.smoothstep(0, this.scroller.contentSize, rect.y);
    this.progressOut = 1 - MathUtils.smoothstep(0, this.scroller.contentSize, rect.y + rect.height);
    this.progress = 1 - MathUtils.smoothstep(-rect.height, this.scroller.contentSize, rect.y);

    if(this.injectCSS) {
      this.dom.style.setProperty('--progress-in', `${this.progressIn.toFixed(5)}`);
      this.dom.style.setProperty('--progress-out', `${this.progressOut.toFixed(5)}`);
      this.dom.style.setProperty('--progress', `${this.progress.toFixed(5)}`);
      this.dom.style.setProperty('--scrolling-force', `${this.scroller.scrollingForce.toFixed(5)}`);
    }

    const focus = this.isOnFocus();
    this.dom.setAttribute('scroll-focus', `${focus}`);
    this.focused = focus;
  }

  dispose() {}

  resize() {
    
  }
}