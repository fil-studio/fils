import gsap from "gsap";
import { Modal } from "./Modal";

/**
 * FadeModal: works with gsap and autoAlpha
 */
export class FadeModal extends Modal {
  constructor(dom:HTMLElement) {
    super(dom);
    const attr = dom.hasAttribute('hidden');
    gsap.set(dom, {
      autoAlpha: attr ? 0 : 1
    })
  }

  show(): void {
    super.show();
    gsap.to(this.dom, {
      overwrite: true,
      autoAlpha: 1
    })
  }

  hide(callback?:Function): void {
    super.hide();
    gsap.to(this.dom, {
      autoAlpha: 0,
      overwrite: true,
      onComplete: () => {
        if(callback) callback();
      }
    })
  }
}