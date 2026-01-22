import { Vec } from "@fils/math";
import { Modal } from "./Modal";

export interface DragOptions {
  customTarget?:HTMLElement|Window;
  targetBlockers?:HTMLElement[];
}

/**
 * An interface for draggable HTML Components
 */
export class DraggableModal extends Modal {
  _onTouchStart:(e: Event) => void;
  _onTouchMove:(e: Event) => void;
  _onTouchEnd:(e: Event) => void;

  anchor:Vec = new Vec();
  current:Vec = new Vec();
  dragging = false;
  enabled:boolean = true;

  target:HTMLElement|Window;
  targetBlockers:HTMLElement[] = [];

  constructor(dom:HTMLElement, params:DragOptions={}) {
    super(dom);

    this.target = params.customTarget ? params.customTarget : dom;
    if(params.targetBlockers) this.targetBlockers= params.targetBlockers;

    this._onTouchStart = this.onTouchStart.bind(this);
    this._onTouchMove = this.onTouchMove.bind(this);
    this._onTouchEnd = this.onTouchEnd.bind(this);

    this.addEventListeners();
  }

  protected addEventListeners() {
    this.target.addEventListener('mousedown', this._onTouchStart);
    this.target.addEventListener('mousemove', this._onTouchMove);
    this.target.addEventListener('mouseup', this._onTouchEnd);
    this.target.addEventListener('mouseleave', this._onTouchEnd);

    this.target.addEventListener('touchstart', this._onTouchStart);
    this.target.addEventListener('touchmove', this._onTouchMove);
    this.target.addEventListener('touchend', this._onTouchEnd);
  }

  onTouchStart(e:Event) {
    if(!this.visible) return;
    if(!this.enabled) return;

    const event = e as TouchEvent | MouseEvent;

    for(const t of this.targetBlockers) {
      if(t.contains(event.target as HTMLElement)) {
        return;
      }
    }

    if(event instanceof TouchEvent) {
      this.startDrag(event.touches[0].clientX, event.touches[0].clientY);
    } else {
      this.startDrag(event.clientX, event.clientY);
    }
  }

  onTouchMove(e:Event) {
    if(!this.visible) return;
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
    if(!this.visible) return;
    if(!this.enabled) return;
    if(!this.dragging) return;

    this.dragging = false;
    this.onDragStop();
  }

  protected startDrag(x:number, y:number) {
    if(this.dragging) return;
    this.anchor.set(x, y);
    this.current.set(x, y);
    this.dragging = true;
    this.onDragStart();
  }

  protected drag(x:number, y:number) {
    if(!this.dragging) return;
    this.current.set(x,y);
    this.onDragMove();
  }

  protected onDragStart() {}
  protected onDragMove() {}
  protected onDragStop() {}

  hide(): void {
    this.dragging = false;
    super.hide();
  }
}