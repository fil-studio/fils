/**
 * Smooth Scroller Simple version
 * This is inspired by latest lenis design and it's been
 * built with simplicity in mind.
 * It is meant to be used with the native body scrolling
 * but it can be used with native element scrolling too
 * which is most performant and has default mobile native fallback.
 * Other advantatges
 *  - No DOM alterations and transforms required
 *  - Sticky elements are just standard CSS sticky elements
 */

//@todo: Check scrolling on HTML Elements (only tested on window so far)
//@todo: Add horizontal scrolling

import { MathUtils } from "@fils/math";
import { SmoothScrollerSection } from "./SmoothScrollerSection";

const DEFAULT_OPTIONS:SmoothScrollerParameters = {
  wheelForce: 1,
  wheelMax: 100,
  easing: .16,
  customSizeRef: null
}

export interface SmoothScrollerParameters {
  wheelForce?:number;
  wheelMax?:number;
  easing?:number;
  customSizeRef?:HTMLElement;
}

export class SmoothScroller {
  contentSize:number;
  limit:number = 0;

  scrollPosition:number = 0;

  protected _enabled:boolean = true;

  // protected isWheel:boolean = false;
  protected isSmooth:boolean = false;
  protected lastWheel:number = 0;

  protected currentPosition:number = 0;
  protected targetPosition:number = 0;

  protected needsUpdate:boolean = false;

  protected parameters:SmoothScrollerParameters;

  sections:SmoothScrollerSection[] = [];

  iObserver:IntersectionObserver;
  rObserver:ResizeObserver;

  _onWheelEvent;

  constructor(public target:HTMLElement|Window=window, params?:SmoothScrollerParameters) {
    target.scrollTo(0, 0);

    if(!params) this.parameters = DEFAULT_OPTIONS;
    else {
      this.parameters = {}
      for(const key in DEFAULT_OPTIONS) {
        this.parameters[key] = params[key] !== undefined && params[key] !== null ? params[key] : DEFAULT_OPTIONS[key];
      }
    }

    // this.updateScrollLimit();

    this.iObserver = new IntersectionObserver(entries => {
      for(const s of entries) {
        const target = s.target;
        const index = parseInt(target.getAttribute('scroller-index'));
        const section = this.sections[index];
        if(s.isIntersecting) section.onVisible();
        else section.onHidden();
      }
    });

    this.rObserver = new ResizeObserver( entries => {
      this.onResize();
    });

    const t = target === window ? document.body : target as HTMLElement;
    this.rObserver.observe(t);

    this._onWheelEvent = this.wheelUpdate.bind(this);

    target.addEventListener('wheel', this._onWheelEvent, {
      passive: false
    });

    target.onscroll = () => {
      if(this.isSmooth) return;
      this.currentPosition = this.targetPosition = this.scrollY;
    }
  }

  addSection(section:SmoothScrollerSection) {
    if(this.sections.indexOf(section) > -1) return;
    this.sections.push(section);
    const sectionIndex = this.sections.length-1;
    section.dom.setAttribute('scroller-index', `${sectionIndex}`);
    this.iObserver.observe(section.dom);
  }

  removeSection(section:SmoothScrollerSection) {
    if(this.sections.indexOf(section) === -1) return;
    this.sections.splice(this.sections.indexOf(section), 1);
    this.iObserver.unobserve(section.dom);
  }

  updateScrollLimit() {
    if(this.target === window) {
      const rect = document.body.getBoundingClientRect();
      this.limit = rect.height - window.innerHeight;
      this.contentSize = window.innerHeight;
    } else {
      const t = this.target as HTMLElement;
      const rect = t.getBoundingClientRect();
      this.limit = t.scrollHeight - rect.height;
      this.contentSize = rect.height;
    }

    // overwrite limit if custom size ref available
    if(this.parameters.customSizeRef) {
      const rect = this.parameters.customSizeRef.getBoundingClientRect();
      // console.log(rect.height);
      this.limit = rect.height - this.contentSize;
    }
  }

  get scrollY():number {
    if(this.target === window) return window.scrollY;
    const t = this.target as HTMLElement;
    return t.scrollTop;
  }

  get progress():number {
    return this.scrollY / this.limit;
  }

  protected wheelUpdate(event:WheelEvent) {
    event.preventDefault();
    if(!this.enabled) return;
    const d = event.deltaY;
    // console.log(d);
    let wd = d * this.parameters.wheelForce;
    wd = MathUtils.clamp(wd, -this.parameters.wheelMax, this.parameters.wheelMax);
    // console.log(d, wd);
    this.isSmooth = true;
    this.targetPosition += wd;
    this.targetPosition = MathUtils.clamp(this.targetPosition, 0, this.limit);
    // this.targetPosition = MathUtils()
  }

  set enabled(value:boolean) {
    this._enabled = value;
    const t = this.target === window ? document.body : this.target as HTMLElement;
    t.setAttribute("scroll-disabled", value ? "false" : "true");
  }

  get enabled():boolean {
    return this._enabled;
  }

  onResize() {
    // this.isSmooth = true;
    // window.scrollTo(0, 0);
    this.updateScrollLimit();
    this.targetPosition = MathUtils.clamp(this.targetPosition, 0, this.limit);
    this.needsUpdate = true;

    for(const section of this.sections) section.resize();
  }

  scrollTo(value:number) {
    this.targetPosition = value;
    this.isSmooth = true;
  }

  force(value:number) {
    this.targetPosition = value;
    this.needsUpdate = true;
  }

  getCurrentPosition() : number {
    return this.currentPosition;
  }

  get scrollingForce():number {
    if(this.isSmooth) return this.targetPosition - this.currentPosition;
    return 0;
  }

  update() {
    if(this.needsUpdate) {
      this.targetPosition = MathUtils.clamp(this.targetPosition, 0, this.limit);
      this.currentPosition = this.targetPosition;
      this.target.scrollTo(0, this.currentPosition);
      this.isSmooth = false;
      this.needsUpdate = false;
      return;
    }
    if(this.isSmooth) {
      this.currentPosition = MathUtils.lerp(this.currentPosition, this.targetPosition, this.parameters.easing);
      const d = this.targetPosition - this.currentPosition;
      if(Math.abs(d) < .1) {
        this.isSmooth = false;
      }
      this.target.scrollTo(0, this.currentPosition);
    }

    for(let i=0,len=this.sections.length; i<len; i++) {
      this.sections[i].update();
    }
  }

  dispose() {
    this.iObserver.disconnect();
    this.rObserver.disconnect();
    this.enabled = false;
    this.target.removeEventListener('wheel', this._onWheelEvent);
  }
}