(()=>{var h=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var n=(i,e)=>()=>(i&&(e=i(i=0)),e);var L=(i,e)=>{for(var t in e)h(i,t,{get:e[t],enumerable:!0})},S=(i,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of w(e))!y.call(i,r)&&r!==t&&h(i,r,{get:()=>e[r],enumerable:!(s=g(e,r))||s.enumerable});return i};var E=i=>S(h({},"__esModule",{value:!0}),i);var o,u=n(()=>{o=class{static clamp(e,t,s){return Math.min(s,Math.max(t,e))}static lerp(e,t,s){return e+(t-e)*s}static mix(e,t,s){return o.lerp(e,t,s)}static smoothstep(e,t,s){return s<e?0:s>t?1:(s-e)/(t-e)}static step(e,t){return t<e?0:1}static map(e,t,s,r,a){return(e-t)*(a-r)/(s-t)+r}static fract(e){return e%1}}});var T,l,m=n(()=>{u();T=`
	[fil-scroller-parent],
	[fil-scroller-parent] body { 
		overscroll-behavior: none;
		height: 100vh;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		position: fixed;
		pointer-events: none;
	}
	[fil-scroller]{
		position: relative;
		width: 100%;
		height: 100vh;
		pointer-events: all;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	}
	[fil-scroller-holder] {
		pointer-events: none;
	}
	[fil-scroller-container]{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		pointer-events: none;
	}
	[fil-scroller-content] {
		position: relative;
		width: 100%;
		height: auto;
		will-change: transform;
		pointer-events: none;
	}
	[fil-scroller-content] * {
		pointer-events: none;
	}
	[fil-scroller-content] [fil-scroller-pointer] {
		pointer-events: all;
	}

	.scrolling [fil-scroller-content] [fil-scroller-pointer] {
		pointer-events: none;
	}

	[fil-scroller].fil-scroller-disabled [fil-scroller-container]{
		position: relative;
		overflow: auto;
		top: unset;
		left: unset;
	}

	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
	}
	[fil-scroller-section].visible {
		opacity: 1;
		visibility: visible;
	}
`,l=class{constructor(){this.html={scroller:null,holder:null,container:null,content:null};this.position={current:0,target:0};this.sections=[];this.loaded=!1;this.paused=!1;this.disabled=!1;this.height=0;this.wh=0;this._ease=.1;if(this.position.current=0,this.position.target=0,this.html.scroller=document.querySelector("[fil-scroller]"),!this.html.scroller){console.warn("Fil Scroller - No `fil-scroller` element");return}this.create()}pause(){this.paused=!0}resume(){this.paused=!1}disable(){this.disabled||(this.disabled=!0,this.html.content.style.transform="translate3d(0, 0, 0)",this.html.holder.style.height="auto",this.html.scroller.classList.add("fil-scroller-disabled"))}enable(){!this.disabled||(this.disabled=!1,this.html.scroller.classList.remove("fil-scroller-disabled"))}set ease(e){this._ease=e}get ease(){return this._ease}addStyles(){document.documentElement.setAttribute("fil-scroller-parent","");let e=document.createElement("style");e.textContent=T,document.head.append(e)}addHTML(){let e=this.html.scroller;this.html.holder=e.querySelector("[fil-scroller-holder]"),this.html.container=e.querySelector("[fil-scroller-container]"),this.html.content=e.querySelector("[fil-scroller-content]"),this.pointerElements=e.querySelectorAll("[fil-scroller-pointer]")}addSections(){let e=this.html.content.querySelectorAll("[fil-scroller-section]");for(let t of e){let s={dom:t,rect:null,visible:!1};this.sections.push(s)}}restore(){for(let e of this.sections)e.dom.classList.remove("visible"),e.dom.style.transform="none",e.rect=e.dom.getBoundingClientRect();this.wh=window.innerHeight}onResize(){this.restore()}addEventListeners(){window.addEventListener("resize",()=>{this.onResize()});let e,t=()=>{e&&clearTimeout(e),document.documentElement.classList.add("scrolling"),e=setTimeout(()=>{document.documentElement.classList.remove("scrolling")},100)};window.addEventListener("wheel",()=>{t()}),window.addEventListener("touchmove",()=>{t()})}create(){this.addStyles(),this.addHTML(),this.addSections(),this.addEventListeners(),this.restore(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),console.log("Fil Scroller - Loaded"),this.loaded=!0}updateTarget(){this.position.target=this.html.scroller.scrollTop,this.paused&&(this.html.scroller.scrollTop=this.position.current)}updateCheckHeight(){this.height=0;for(let e=0,t=this.sections.length;e<t;e++)this.height+=this.sections[e].rect.height;this.disabled||(this.html.holder.style.height=`${this.height}px`)}updateScrollValues(){if(this.disabled){this.position.current=this.position.target;return}this.position.current=o.lerp(this.position.current,this.position.target,this.ease)}updateSections(){let e=this.position.current;for(let t=0,s=this.sections.length;t<s;t++){let r=this.sections[t],a=r.rect.top,v=r.rect.top+r.rect.height;if(e+this.wh>=a&&e<=v){r.visible=!0,r.dom.classList.add("visible"),r.dom.style.transform=`translateY(${-e}px)`;continue}!r.visible||(r.visible=!1,r.dom.classList.remove("visible"),r.dom.style.transform=`translateY(${-this.wh}px)`)}}update(){!this.loaded||(this.updateTarget(),this.updateCheckHeight(),this.updateScrollValues(),this.updateSections())}}});var c,p=n(()=>{m();c=class{constructor(){this.scroller=new l,this.scroller.ease=.16}update(){this.scroller.update()}}});var f={};L(f,{App:()=>d});var d,b=n(()=>{p();d=class{constructor(){document.querySelector("main").getAttribute("data-template")==="scroller"&&(this.demo=new c);let t=()=>{this.update(),requestAnimationFrame(t)};t()}update(){this.demo.update()}}});var{App:x}=(b(),E(f)),k=new x;})();
//# sourceMappingURL=main.js.map
