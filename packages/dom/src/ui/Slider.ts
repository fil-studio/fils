import { MathUtils, Vec } from "@fils/math";

export type SliderOrientation = "h"|"v";

export interface SliderOptions {
  initialProgress?:number;
  orientation?:SliderOrientation;
  width:number;
}

/**
 * Slider interface
 * Works with horizontal (h) or vertical (v) orientation
 * left or bottom based with %
 */
export abstract class Slider {
  _onTouchStart:(e: Event) => void;
  _onTouchMove:(e: Event) => void;
  _onTouchEnd:(e: Event) => void;

  anchor:Vec = new Vec();
  current:Vec = new Vec();
  dragging = false;
  enabled:boolean = true;

  progress:number = 0;
  protected anchorProgress:number = 0;
  trackWidth:number;
  orientation:SliderOrientation = "h";

  constructor(public knob:HTMLElement, params:SliderOptions) {
    this._onTouchStart = this.onTouchStart.bind(this);
    this._onTouchMove = this.onTouchMove.bind(this);
    this._onTouchEnd = this.onTouchEnd.bind(this);

    this.trackWidth = params.width;
    if(params.initialProgress) {
      this.progress = params.initialProgress;
    }
    if(params.orientation) {
      this.orientation = params.orientation;
    }

    this.addEventListeners();
  }

  protected updateLayout() {
    if(this.orientation === "h") this.knob.style.left = `${this.progress*100}%`;
    else this.knob.style.bottom = `${this.progress*100}%`;
    this.onProgressUpdate();
  }

  protected onProgressUpdate() {}

  setProgress(value:number) {
    this.progress = value;
    this.updateLayout();
  }

  protected addEventListeners() {
    this.knob.addEventListener('mousedown', this._onTouchStart);
    window.addEventListener('mousemove', this._onTouchMove);
    window.addEventListener('mouseup', this._onTouchEnd);
    window.addEventListener('mouseleave', this._onTouchEnd);

    this.knob.addEventListener('touchstart', this._onTouchStart);
    window.addEventListener('touchmove', this._onTouchMove);
    window.addEventListener('touchend', this._onTouchEnd);
  }

  onTouchStart(e:Event) {
    if(!this.enabled) return;

    const event = e as TouchEvent | MouseEvent;

    if(event instanceof TouchEvent) {
      this.startDrag(event.touches[0].clientX, event.touches[0].clientY);
    } else {
      this.startDrag(event.clientX, event.clientY);
    }
  }

  onTouchMove(e:Event) {
    if(!this.enabled) return;

    const event = e as TouchEvent | MouseEvent;
    event.preventDefault();

    if(event instanceof TouchEvent) {
      this.drag(event.touches[0].clientX, event.touches[0].clientY);
    } else {
      this.drag(event.clientX, event.clientY);
    }
  }

  onTouchEnd() {
    if(!this.enabled) return;
    if(!this.dragging) return;

    this.dragging = false;
    this.onDragStop();
  }

  protected startDrag(x:number, y:number) {
    if(this.dragging) return;
    this.anchorProgress = this.progress;
    this.anchor.set(x, y);
    this.current.set(x, y);
    this.dragging = true;
    this.onDragStart();
  }

  protected drag(x:number, y:number) {
    if(!this.dragging) return;
    this.current.set(x,y);

    const d = this.orientation === "h" ? this.current.x - this.anchor.x : this.current.y - this.anchor.y;

    const dp = d/this.trackWidth;

    this.progress = MathUtils.clamp(this.anchorProgress + dp, 0, 1);
    this.updateLayout();
    this.onDragMove();
  }

  protected onDragStart() {}
  protected onDragMove() {}
  protected onDragStop() {}
}