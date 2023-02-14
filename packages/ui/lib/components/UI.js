var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { el } from "@fils/utils";
import { CSS_UI } from "../partials/cssClasses";
import { RegisterBaseComponents } from "../partials/RegisterBaseItems";
import css from "../utils/css";
import dom, { RowTypes } from "../utils/dom";
import { Group } from "./Group";
RegisterBaseComponents();
const styles = `@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdzeFaxOedfTDw.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdXeFaxOedfTDw.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdLeFaxOedfTDw.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd7eFaxOedfTDw.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd_eFaxOedfTDw.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIxsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIVsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIJsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI5sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI9sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}:root{--radius-0:4px;--radius-1:8px;--padding:0.2rem 0.4rem;--spacer:0.25rem;--duration:.3s;--timing:cubic-bezier(.6, 0, .4, 1);--accent:#2871C7;--error-color:#8f0000;--bg-0:#303030;--bg-1:#191919;--white:#FFF;--color-0:#CCCCCC;--color-1:#999999;--color-2:#666666}._ui-panel,._ui-wrapper{box-sizing:border-box}fieldset{min-inline-size:unset}button,input,select,textarea{padding:0;margin:0;border:none;color:inherit;background-color:transparent;border-radius:0;font:inherit;text-align:inherit;text-transform:inherit;letter-spacing:inherit}a,h1,h2,h3,h4,h5,h6,p{margin:0;font:inherit}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}._ui-panel,._ui-wrapper{font-family:"IBM Plex Sans",sans-serif;font-size:12px;color:var(--color-1);font-weight:400}._ui-panel header,._ui-wrapper header{font-weight:700}._ui-panel [ui-depth="0"]>header,._ui-wrapper [ui-depth="0"]>header{color:var(--color-0)}._ui-panel fieldset h4,._ui-wrapper fieldset h4{color:var(--color-2)}._ui-panel ::selection,._ui-wrapper ::selection{background:var(--white);color:var(--accent)}._ui-panel ._ui--hidden,._ui-wrapper ._ui--hidden{display:none!important;pointer-events:none}._ui-panel ._ui--error,._ui-wrapper ._ui--error{box-shadow:0 0 4px 0 var(--error-color);transition-duration:var(--duration);transition-timing-function:var(--timing);transition-property:box-shadow}._ui-wrapper{--wrapper-width:300px;position:fixed;top:5px;right:5px;width:var(--wrapper-width);min-width:300px}._ui-wrapper._ui-wrapper-has-parent{position:relative;top:unset;right:unset;width:100%}._ui-wrapper ._ui-wrapper-resizer{position:absolute;width:4px;height:calc(100% - 4px);top:4px;left:0;cursor:ew-resize;z-index:1}section{--section-bg-0:var(--bg-1);--section-bg-1:var(--bg-0);position:relative;width:100%;height:auto;border-radius:var(--radius-1);background-color:var(--section-bg-0)}section[ui-depth="0"],section[ui-depth="10"],section[ui-depth="2"],section[ui-depth="4"],section[ui-depth="6"],section[ui-depth="8"]{--section-bg-0:var(--bg-0);--section-bg-1:var(--bg-1)}section [ui-depth="12"]{--section-bg-0:red;--section-bg-1:green}section:not([ui-depth="0"]){margin-top:var(--spacer)}section ._ui-section-content{padding:0 var(--spacer) var(--spacer) var(--spacer);position:relative;float:left;display:flex;flex-direction:column;width:100%}section ._ui-section-content fieldset:first-of-type{margin-top:.5rem}section ._ui-section-content fieldset:last-child{margin-bottom:.5rem}._ui-section-foldable{transition-duration:var(--duration);transition-timing-function:var(--timing);overflow:hidden}._ui-section-foldable>header{cursor:pointer}._ui-section-foldable ._ui-section-foldable-element{overflow:hidden;transition-duration:inherit;transition-timing-function:inherit;transition-property:height}._ui-section-foldable ._ui-section-foldable-element ._ui-section-header-icon{transform:rotate(0);width:20px;transform-origin:50%;transition:transform var(--duration) var(--timing)}._ui-section-foldable._ui-section-folded>._ui-section-foldable-element{height:0!important}._ui-section-foldable._ui-section-folded:not([ui-depth="0"])>header ._ui-section-header-icon{transform:rotate(-90deg)}header{position:relative;width:100%;height:40px;display:flex;justify-content:flex-start;align-items:center;padding:var(--padding);user-select:none}header ._ui-section-header-icon{width:auto;max-width:20px;height:1em;display:flex;justify-content:center;align-items:center;margin-right:5px}header h3{margin:0}fieldset{width:calc(100% - .5rem);margin:var(--spacer) .25rem 0 .25rem;padding:0;position:relative;border:none;display:flex;justify-content:space-between;align-items:center}fieldset h4{width:33.33%;max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-right:5px;flex-grow:0;flex-shrink:0}fieldset>div{width:66.66%;display:flex;justify-content:flex-end;flex-grow:1;flex-shrink:0;position:relative;float:left}fieldset._ui-row-vertical{flex-direction:column;align-items:flex-start}fieldset._ui-row-vertical>h4{padding:.5rem 0}fieldset._ui-row-vertical>div{width:100%}._ui-button{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer;padding:.2rem .7rem;justify-content:center;transition:var(--duration) var(--timing);margin-top:var(--animation-space)}._ui-button:active{background-color:var(--accent);color:var(--white);transition:0s}._ui-button h3{text-overflow:ellipsis;overflow:hidden}._ui-button-has-icon{justify-content:space-between}._ui-button-has-icon ._ui-button-icon{display:flex;justify-content:center;align-items:center}._ui-button-has-icon ._ui-button-icon svg{width:20px}._ui-spacer{width:100%;display:block;margin-bottom:calc(-1 * var(--spacer))}._ui-spacer._ui-spacer-small{padding:10px 0}._ui-spacer._ui-spacer-medium{padding:15px 0}._ui-spacer._ui-spacer-large{padding:20px 0}._ui-spacer._ui-spacer-has-line:before{content:"";display:block;width:calc(100% - .25rem);margin:0 auto;height:1px;background:var(--section-bg-1)}._ui-boolean{cursor:pointer}._ui-boolean ._ui-toggle{width:40px;height:25px;border-radius:15px;background-color:var(--section-bg-1);position:relative;transition:var(--duration) var(--timing)}._ui-boolean ._ui-toggle div{width:25px;height:25px;border-radius:100%;background-color:var(--white);position:absolute;top:50%;left:0;transform:translate3d(0,-50%,0);transition:inherit}._ui-boolean._ui--active ._ui-toggle{background-color:var(--accent)}._ui-boolean._ui--active ._ui-toggle div{left:100%;transform:translate3d(-100%,-50%,0)}._ui-string input{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer}._ui-number ._ui-number-input{flex-grow:1;position:relative;float:left}._ui-number ._ui-number-input:not(:last-of-type){margin:0 var(--spacer) 0 0}._ui-number input{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer}._ui-number ._ui-number-buttons{position:absolute;top:0;right:0;height:100%;width:auto;display:flex;flex-direction:column;align-items:center}._ui-number ._ui-number-buttons button{padding:0;display:flex;justify-content:flex-start;align-items:center;height:50%;width:20px;cursor:pointer}._ui-number ._ui-number-buttons button:active{color:var(--white);transition:0s}._ui-number ._ui-number-buttons svg{width:20px}._ui-number ._ui-number-buttons ._ui-number-btn-increase svg{transform:rotate(180deg);transform-origin:center}._ui-range ._ui-range-input{position:relative;float:left;width:calc(75% - 12px);cursor:pointer;margin:0 12px 0 0}._ui-range ._ui-range-input *{pointer-events:none}._ui-range ._ui-range-overexpose,._ui-range ._ui-range-track{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:2px;background-color:var(--color-0);width:100%}._ui-range ._ui-range-overexpose{background-color:var(--color-2);transform:translate(0,-50%);left:unset;width:calc(var(--size) * 100%)}._ui-range ._ui-range-overexpose._ui-range-overexpose-min{left:0}._ui-range ._ui-range-overexpose._ui-range-overexpose-max{right:0}._ui-range ._ui-range-thumb{position:absolute;top:50%;left:calc(var(--value) * 100%);transform:translate(-50%,-50%);width:20px;height:20px;border-radius:50%;background-color:var(--white);cursor:grab;pointer-events:all;transition:background-color var(--duration) var(--timing)}._ui-range ._ui-range-thumb._ui--grab{background-color:rgba(var(--white),.2)}._ui-range ._ui-range-thumb::after,._ui-range ._ui-range-thumb::before{content:"";position:absolute;height:8px;width:2px;background-color:var(--white);left:50%;transform:translate(-50%,0)}._ui-range ._ui-range-thumb::after{top:0}._ui-range ._ui-range-thumb::before{bottom:0}._ui-range input{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer;width:calc(25% - var(--spacer))}._ui-select{position:relative;float:left}._ui-select ._ui-select-input{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer}._ui-select ._ui-select-input *{pointer-events:none}._ui-select ._ui-select-input svg{width:20px;position:absolute;right:11px;top:50%;transition:all var(--duration) var(--timing);transform:translateY(-50%) rotate(0)}._ui-select._ui-select-open ._ui-select-input svg{color:var(--white);transform:translateY(-50%) rotate(90deg)}._ui-panel._ui-panel-select{height:auto;max-height:300px;overflow-y:scroll}._ui-panel._ui-panel-select ._ui-panel-select-button,._ui-panel._ui-panel-select ._ui-panel-select-option,._ui-panel._ui-panel-select ._ui-panel-select-option-none,._ui-panel._ui-panel-select ._ui-panel-select-search{padding:.6rem;background-color:var(--section-bg-1);cursor:pointer}._ui-panel._ui-panel-select ._ui-panel-select-search{position:sticky;top:0;border-bottom:2px solid var(--section-bg-0)}._ui-panel._ui-panel-select ._ui-panel-select-option{text-align:left;border-radius:var(--radius-0)}._ui-panel._ui-panel-select ._ui-panel-select-option:hover{background-color:var(--accent)}._ui-panel._ui-panel-select ._ui-panel-select-option:hover p{color:var(--white)}._ui-color div{justify-content:flex-end;align-items:center}._ui-color input{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer;max-width:70px}._ui-color ._ui-color-box{width:calc(2rem - 8px);height:calc(2rem - 8px);margin-right:10px;border-radius:var(--radius-0);flex-shrink:0;flex-grow:0;cursor:pointer;background-color:var(--active-color)}._ui-panel-color{display:flex;justify-content:center;align-items:center;flex-direction:column}._ui-panel-color ._ui-color-info,._ui-panel-color ._ui-color-view{width:100%;height:100%;position:relative}._ui-panel-color canvas{width:100%;height:auto;display:block}._ui-color-target{position:absolute;transform:translate3d(-50%,-50%,0);border:2px solid var(--white);border-radius:100%;width:10px;height:10px;pointer-events:none;mix-blend-mode:exclusion}._ui-color-dragger{position:absolute;width:3px;border-radius:5px;height:calc(100% - 8px);background:#fff;top:50%;left:50%;transform:translate3d(-50%,-50%,0);pointer-events:none}._ui-panel{position:fixed;height:auto;background-color:var(--section-bg-1);color:var(--color-1);z-index:2;border-radius:var(--radius-0);margin-top:var(--spacer);overflow:hidden;opacity:0;transform:translate3d(0,10px,0)}._ui-panel._ui--loaded{transition-property:opacity,transform;transition-duration:var(--duration);transition-timing-function:var(--timing)}._ui-panel._ui--active{opacity:1;transform:translate3d(0,0,0)}`;
css.inject(styles);
export class UI extends Group {
  constructor({
    resizable = true,
    parentElement,
    icon,
    width
  } = {}) {
    super(__spreadValues({}, arguments[0]));
    this.wrapper = el("div");
    this.resizable = parentElement ? false : resizable;
    this.init(0);
    this.addIcon(icon);
    this.appendTo(parentElement);
    if (width) {
      this.wrapper.style.setProperty("--wrapper-width", `${width}px`);
    }
  }
  appendTo(parentElement) {
    if (parentElement) {
      this.wrapper.classList.add(CSS_UI.parent);
      parentElement.appendChild(this.wrapper);
    } else {
      document.body.appendChild(this.wrapper);
    }
  }
  addIcon(icon) {
    if (!icon)
      return;
    dom.addIcon(this.el.querySelector("header"), icon);
  }
  createDom() {
    super.createDom();
    this.wrapper = dom.createRow({
      type: RowTypes.ui,
      depth: this.depth
    });
    this.wrapper.appendChild(this.el);
  }
  addEventListeners() {
    super.addEventListeners();
    if (!this.resizable)
      return;
    const resizer = el("div", CSS_UI.resizer);
    this.wrapper.appendChild(resizer);
    const resize = (w, x2) => {
      if (x2 < 0 && w + x2 < 300)
        return;
      this.wrapper.style.setProperty("--wrapper-width", `${w + x2}px`);
      this.emit("resize");
    };
    let dragging = false;
    let x = 0;
    let distance = 0;
    let width = 0;
    resizer.addEventListener("mousedown", (e) => {
      dragging = true;
      x = e.clientX;
      width = this.wrapper.getBoundingClientRect().width;
    });
    window.addEventListener("mousemove", (e) => {
      if (!dragging)
        return;
      e.preventDefault();
      distance = x - e.clientX;
      resize(width, distance);
    });
    window.addEventListener("mouseup", (e) => {
      if (!dragging)
        return;
      e.preventDefault();
      dragging = false;
    });
  }
}