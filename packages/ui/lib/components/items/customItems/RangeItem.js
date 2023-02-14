import{MathUtils as i}from"@fils/math";import{el as g}from"@fils/utils";import{CSS_UI as d}from"../../../partials/cssClasses";import E from"../../../utils/check";import{Item as b}from"../Item";const n={type:"range",input:"_ui-range-input",track:"_ui-range-track",overExpose:"_ui-range-overexpose",overExposeMin:"_ui-range-overexpose-min",overExposeMax:"_ui-range-overexpose-max",thumb:"_ui-range-thumb"};export class RangeItem extends b{constructor(){super(...arguments);this.max=0;this.min=1;this.step=.01;this.decimals=2;this.limitNumber=s=>{let t=s;return this.max&&(t=Math.min(t,this.max)),this.min&&(t=Math.max(t,this.min)),t=Math.round(t*Math.pow(10,this.decimals))/Math.pow(10,this.decimals),t}}addEventListeners(){this.input.value=`${Math.max(Math.min(this.max,this.value),this.min)}`,this.updateRange(),this.input.addEventListener("change",()=>{let e=this.input.valueAsNumber;e=this.limitNumber(e),this.input.valueAsNumber=e,this.setValue(e),this.updateRange()});let s=!1,t=0,a=0;const r=e=>{if(e.target!=this.thumb)return;s=!0,this.thumb.classList.add(d.utility.grab),t=e.clientX;const{width:m}=this.range.getBoundingClientRect();a=i.map(this.mappedValue,0,1,0,m)},h=e=>{if(!s)return;const o=a+(e.clientX-t),{width:m}=this.range.getBoundingClientRect(),u=i.clamp(i.map(o,0,m,0,1),0,1),l=i.map(u,0,1,this.min,this.max);this.value=Math.round(l/this.step)*this.step,this.updateInput(),this.updateRange()},p=e=>{if(e.target===this.thumb)return;const{left:m,width:u}=this.range.getBoundingClientRect(),l=e.clientX-m,v=i.clamp(i.map(l,0,u,0,1),0,1),x=i.map(v,0,1,this.min,this.max);this.value=Math.round(x/this.step)*this.step,this.updateInput(),this.updateRange()},c=()=>{s&&(s=!1,t=0,this.thumb.classList.remove(d.utility.grab))};this.range.addEventListener("click",e=>{p(e)}),this.range.addEventListener("mousedown",e=>{r(e)}),window.addEventListener("mousemove",e=>{h(e)}),window.addEventListener("mouseup",()=>{c()})}get mappedValue(){return i.clamp(i.map(this.value,this.min,this.max,0,1),0,1)}createContent(){this.max=this.params.max?this.params.max:this.max,this.min=this.params.min?this.params.min:this.min,this.step=this.params.step?this.params.step:.01,this.decimals=this.params.decimals?this.params.decimals:2,this.content.innerHTML=`
			<div class="${n.input}">
				<div class="${n.track}"></div>
				<div class="${n.overExpose} ${n.overExposeMin}"></div>
				<div class="${n.overExpose} ${n.overExposeMax}"></div>
				<div class="${n.thumb}"></div>
			</div>
		`,this.input=g("input"),this.input.type="number",this.input.placeholder="Value",this.min&&this.input.setAttribute("min",this.min.toString()),this.max&&this.input.setAttribute("max",this.max.toString()),this.step&&this.input.setAttribute("step",this.step.toString()),this.content.appendChild(this.input),this.range=this.content.querySelector(`.${n.input}`),this.thumb=this.content.querySelector(`.${n.thumb}`),this.setUpOverExpose(),this.input.min=`${this.min}`,this.input.max=`${this.max}`,this.step=this.params.step?this.params.step:this.step,this.step===0&&(this.step=.01),this.input.step=`${this.step}`}setUpOverExpose(){const s=this.params.overExpose||[0,0];let t=[0,0];E.isArray(s)?t=s:t=[s,s],this.min=this.params.min?this.params.min-t[0]:t[0],this.max=this.params.max?this.params.max+t[1]:t[1];const a=this.content.querySelectorAll(`.${n.overExpose}`),r=Math.abs(this.min-this.max),h=i.map(t[0],0,r,0,1),p=i.map(t[1],0,r,0,1);a[0].style.setProperty("--size",`${h}`),a[1].style.setProperty("--size",`${p}`)}updateRange(){this.range.style.setProperty("--value",`${this.mappedValue}`)}updateInput(){this.input.value=`${this.value.toFixed(2)}`}refreshDom(){this.updateInput(),this.updateRange(),super.refreshDom()}}
//# sourceMappingURL=RangeItem.js.map
