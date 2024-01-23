import { MathUtils } from "@fils/math";
import { D, PRECISION } from "./Scroller";
import { ScrollerConfig } from "./partials/ScrollerConfig";

export interface ScrollerSectionListener {
  onAnimationIn?();
  onAnimationOut?();
  onBeforeRestore?();
  onAfterRestore?();
}

export interface ScrollerSectionProgress {
  visible: number,
  in: number,
  out: number,
  focus:number
}

export class Section {
  id: string;
  dom: HTMLElement;
  config: ScrollerConfig;

  // Section rect
  rect: DOMRect;
  // Section offset in relation to the other sections
  offset: number;

  containerRect: DOMRect;

  progress: ScrollerSectionProgress = {
    visible: 0,
    in: 0,
    out: 0,
    focus: 0
  }

  threshold: number[] = [];
  scroll: number = 0;
  delta: number = 0;

  _position = {
    x: 0,
    y: 0,
  };

  visible: boolean = false;
  closeToVisible: boolean = false;
  disabled: boolean = false;

  protected listeners: ScrollerSectionListener[] = [];

  sticky: HTMLElement[] = [];


  exposeProgressValues:boolean = false;


  constructor(i: number, dom: HTMLElement, config: ScrollerConfig) {
    // Set ID
    this.dom = dom;

    const id = this.dom.getAttribute("fil-scroller-section");
    if (id) this.id = id;
    else this.id = `section-${i}`;

    this.config = config;

    const s = dom.querySelectorAll("[fil-scroller-sticky]");
    s.forEach((value) => {
      this.sticky.push(value as HTMLElement);
    });

    // Add this to the section to expose the progress values!
    if(this.dom.hasAttribute('fil-scroller-expose')){
      this.exposeProgressValues = true;
    }

    this.containerRect = this.config.container.getBoundingClientRect();
    this.calculateThreshold();
  }

  restore() {
    this.dom.style.transform = "";

    this.progress.visible = 0;

    this.calculateThreshold();

    this.updateTransform();
  }

  calculateThreshold() {
    this.rect = this.dom.getBoundingClientRect();

    // VERTICAL SCROLL THRESHOLDS
    if (this.config.isVertical()) {
      this.threshold = [
        this.rect.top - this.containerRect.height - this.containerRect.top,
        this.rect.top + this.rect.height - this.containerRect.top,
      ];

      if (this.config.useNative) {
        this.threshold[0] += this.scroll;
        this.threshold[1] += this.scroll;
      }
    } else {
      this.threshold = [
        // Section offset in relation to the other sections
        this.offset - this.containerRect.width,
        // Section offset in relation to the other sections
        this.offset + this.rect.width,
      ];
    }
  }

  // Listeners
  addSectionListener(lis: ScrollerSectionListener) {
    if (this.listeners.indexOf(lis) > -1) return;
    this.listeners.push(lis);
  }
  removeSectionListener(lis: ScrollerSectionListener) {
    this.listeners.splice(this.listeners.indexOf(lis), 1);
  }
  onBeforeRestore() {
    for (const lis of this.listeners) {
      lis?.onBeforeRestore();
    }
  }
  onAfterRestore() {
    for (const lis of this.listeners) {
      lis?.onAfterRestore();
    }
  }
  animationIn() {
    for (const lis of this.listeners) {
      lis?.onAnimationIn();
    }
  }
  animationOut() {
    for (const lis of this.listeners) {
      lis?.onAnimationOut();
    }
  }

  // Disabled sections won't be accounted for
  disable() {
    if (this.disabled) return;
    this.disabled = true;
    this.dom.classList.add("fil-scroller__section-disabled");
  }
  enable() {
    if (!this.disabled) return;
    this.disabled = false;
    this.dom.classList.remove("fil-scroller__section-disabled");
  }

  // Show - Hide
  protected show() {
    if (this.visible) return;

    this.animationIn();

    this.dom.classList.add("fil-scroller__visible");
    this.visible = true;
  }
  protected hide() {
    if (!this.visible) return;

    this.animationOut();

    this.visible = false;
    this.progress.visible = 0;
    this.delta = 0;
    this.dom.classList.remove("fil-scroller__visible");
  }

  // ------------------------- UPDATE
  updateCloseToVisible() {
    if (this.visible) return;

    const margin = this.containerRect.width;
    const close1 = this.scroll + margin > this.threshold[0];
    const close2 = this.scroll + margin < this.threshold[1];
    const inRange = close1 && close2;
    if (inRange != this.closeToVisible) {
      this.dom.classList.toggle(
        "fil-scroller__section-close-to-visible",
        inRange
      );
      this.closeToVisible = inRange;
    }
  }
  updateProgress(){

    this.progress.visible = MathUtils.smoothstep(
      this.threshold[0],
      this.threshold[1],
      this.scroll
    );

    this.progress.in = MathUtils.smoothstep(
      this.threshold[0],
      this.threshold[0] + this.containerRect.height,
      this.scroll
    )
    this.progress.out = MathUtils.smoothstep(
      this.threshold[1] - this.containerRect.height,
      this.threshold[1],
      this.scroll
    )
    this.progress.focus = MathUtils.smoothstep(
      this.threshold[0] + this.containerRect.height,
      this.threshold[1] - this.containerRect.height,
      this.scroll
    )

    if(this.exposeProgressValues){
      this.dom.style.setProperty(
        "--fil-scroller-delta",
        `${this.delta.toFixed(PRECISION)}`
      );

      this.dom.style.setProperty(
        "--fil-scroller-progress-visible",
        `${this.progress.visible.toFixed(PRECISION)}`
      );
      this.dom.style.setProperty(
        "--fil-scroller-progress-in",
        `${this.progress.in.toFixed(PRECISION)}`
      );
      this.dom.style.setProperty(
        "--fil-scroller-progress-out",
        `${this.progress.out.toFixed(PRECISION)}`
      );
      this.dom.style.setProperty(
        "--fil-scroller-progress-focus",
        `${this.progress.focus.toFixed(PRECISION)}`
      );
    }
  }
  updateVisible() {
    // If its visible then
    if (this.scroll > this.threshold[0] && this.scroll < this.threshold[1]) {
      if (!this.visible) {
        this.show();
      }

      this.updateProgress();
      this.updateTransform();

      return;
    }

    // if it's not between thresholds and its visible, hide it
    if (this.visible) {
      this.hide();
      this.updateTransform();
    }
  }
  updateSticky() {

    const cH = this.containerRect.height;
    const cW = this.containerRect.width;
    const t0 = this.threshold[0];
    const t1 = this.threshold[1];
    let px = this.position.x;
    let py = this.position.y;

    // Sticky no va si el block sticky NO es el primer block de la secció
    // Sticky no va si el block fa més de 100vh

    for (const s of this.sticky) {
      let tY, sY;
      switch (this.config.direction) {
        case D.TOP:

          tY = 1 - MathUtils.smoothstep(-t1 + cH, -t0 - cH, py);
          sY = tY * (t1 - t0 - 2 * cH);

          s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(
            PRECISION
          )},0,1)`;
          break;
        case D.BOTTOM:
          tY = 1 - MathUtils.smoothstep(-t1 + cH, -t0 - cH, py);
          sY = tY * (t1 - t0 - 2 * cH);
          s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(
            PRECISION
          )},0,1)`;
          break;
        case D.RIGHT:
        	tY = 1 - MathUtils.smoothstep(-t1+ cW, -t0-cW, px);
        	sY = tY * (t1 - t0 - 2*cW);
        	s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(PRECISION)},0,0,1)`;
        	break;
        case D.LEFT:
          tY = 1 - MathUtils.smoothstep(-t1 + cW, -t0 - cW, px);
          sY = tY * (t1 - t0 - 2 * cW);
          s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(
            PRECISION
          )},0,0,1)`;
          break;
      }
    }
  }
  updateTransform() {
    if (this.config.useNative) return;

    this.updateSticky();

    let px = this.position.x;
    let py = this.position.y;
    this.dom.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${px.toFixed(
      PRECISION
    )},${py.toFixed(PRECISION)},0,1)`;
  }
  get position() {
    // Todo, D.Left esta arreglat pero els altres no
    // El position x i y ha de tenir en compte el parent, altrament, si el parent ha tingut un transform deixa de posar-se a lloc (mirar el position.y del D.LEFT, aquest ho te en compte)

    if (this.config.direction === D.TOP) {
      this._position.x = 0;
      this._position.y = -this.scroll; // AQUI S'HA DE POSAR L'OFFSET O ALGO PER CONTRARESTAR LES DISABLED
    }
    if (this.config.direction === D.BOTTOM) {
      // Aquest encara s'ha de fer funcionar amb sections disabled
      this._position.x = 0;
      this._position.y =
        this.scroll +
        (this.containerRect.height - this.rect.height) -
        this.rect.top * 2;
    }
    if (this.config.direction === D.LEFT) {
      // Section offset in relation to the other sections
      this._position.x = this.offset - this.scroll;
      this._position.y = this.containerRect.top - this.rect.top;
    }
    if (this.config.direction === D.RIGHT) {
      // Aquest encara s'ha de fer funcionar amb sections disabled
      // Section offset in relation to the other sections
      this._position.x =
        this.scroll +
        (this.containerRect.width - this.rect.width) -
        this.offset;
      this._position.y = -this.rect.top;
    }

    return this._position;
  }

  update() {
    // Toggle closeToVisible if it's close
    this.updateCloseToVisible();
    this.updateVisible();
  }
}
