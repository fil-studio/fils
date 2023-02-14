import{RowTypes as o}from"../utils/dom";import{UIElement as n}from"./UIElement";export class Button extends n{constructor({title:t}={}){const e=t||"Button";super(o.button,e)}createDom(){super.createDom(),this.button=this.el.querySelector("button")}addEventListeners(){this.button.addEventListener("click",()=>{this.emit("click")})}}
//# sourceMappingURL=Button.js.map
