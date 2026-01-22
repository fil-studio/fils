/**
 * Modal Base Class. CSS based show/hide wrapper based on
 * hidden attribute
 */
export class Modal {
  constructor(public dom:HTMLElement) {}

  /**
   * Function for all internal events when needed
   */
  protected addEventListeners() {}

  /**
   * Show modal
   */
  show() {
    this.dom.removeAttribute('hidden');
  }

  /**
   * Hide Modal
   */
  hide() {
    this.dom.setAttribute('hidden', '');
  }

  get visible():boolean {
    return !this.dom.hasAttribute('hidden');
  }
}