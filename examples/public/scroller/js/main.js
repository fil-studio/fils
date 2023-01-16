(()=>{var a=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var h=(r,e)=>()=>(r&&(e=r(r=0)),e);var y=(r,e)=>{for(var t in e)a(r,t,{get:e[t],enumerable:!0})},w=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of g(e))!v.call(r,s)&&s!==t&&a(r,s,{get:()=>e[s],enumerable:!(i=b(e,s))||i.enumerable});return r};var E=r=>w(a({},"__esModule",{value:!0}),r);var l,u=h(()=>{l=class{static clamp(e,t,i){return Math.min(i,Math.max(t,e))}static lerp(e,t,i){return e+(t-e)*i}static mix(e,t,i){return l.lerp(e,t,i)}static smoothstep(e,t,i){return i<e?0:i>t?1:(i-e)/(t-e)}static step(e,t){return t<e?0:1}static map(e,t,i,s,o){return(e-t)*(o-s)/(i-t)+s}static fract(e){return e%1}}});var L,n,m=h(()=>{u();L=`
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

	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
		will-change: transform;
	}
	[fil-scroller-section].fil-scroller-visible {
		opacity: 1;
		visibility: visible;
	}

	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
	}
`,n=class{constructor(){this.html={scroller:null,holder:null,container:null,content:null};this.position={current:0,target:0};this.sections=[];this.loaded=!1;this.paused=!1;this.disabled=!1;this.height=0;this.wh=0;this._ease=.1;this._delta=0;if(this.html.scroller=document.querySelector("[fil-scroller]"),!this.html.scroller){console.warn("Fil Scroller - No `fil-scroller` element");return}this.create()}pause(){this.paused=!0}resume(){this.paused=!1}disable(){this.disabled||(this.disabled=!0,this.html.scroller.setAttribute("fil-scroller","disabled"))}enable(){!this.disabled||(this.disabled=!1,this.html.scroller.setAttribute("fil-scroller",""))}set ease(e){this._ease=e}get ease(){return this._ease}get delta(){return this._delta}addStyles(){document.documentElement.setAttribute("fil-scroller-parent","");let e=document.createElement("style");e.textContent=L,document.head.append(e)}addHTML(){let e=this.html.scroller;this.html.holder=e.querySelector("[fil-scroller-holder]"),this.html.container=e.querySelector("[fil-scroller-container]"),this.html.content=e.querySelector("[fil-scroller-content]"),this.pointerElements=e.querySelectorAll("[fil-scroller-pointer]")}addSections(){let e=this.html.content.querySelectorAll("[fil-scroller-section]");for(let t=0,i=e.length;t<i;t++){let s=e[t],c={id:s.getAttribute("fil-scroller-section")?s.getAttribute("fil-scroller-section"):`section-${t}`,dom:s,rect:null,visible:!1,progress:0,animationIn:()=>{},animationOut:()=>{}};this.sections.push(c)}}restore(){for(let e of this.sections)e.dom.style.transform="none",e.visible=!0,e.rect=e.dom.getBoundingClientRect();this.wh=window.innerHeight}onResize(){this.restore()}addEventListeners(){window.addEventListener("resize",()=>{this.onResize()});let e,t=()=>{e&&clearTimeout(e),document.documentElement.classList.add("scrolling"),e=setTimeout(()=>{document.documentElement.classList.remove("scrolling")},20)};window.addEventListener("wheel",()=>{t()}),window.addEventListener("touchmove",()=>{t()})}create(){this.addStyles(),this.addHTML(),this.addSections(),this.addEventListeners(),this.restore(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),console.log("Fil Scroller - Loaded"),this.loaded=!0}updateTarget(){this.position.target=this.html.scroller.scrollTop,this.paused&&(this.html.scroller.scrollTop=this.position.current)}updateCheckHeight(){this.height=0;for(let e=0,t=this.sections.length;e<t;e++)this.height+=this.sections[e].rect.height;this.html.holder.style.height=`${this.height}px`}updateScrollValues(){let e=this.position.current;this.disabled?this.position.current=this.position.target:this.position.current=l.lerp(this.position.current,this.position.target,this.ease);let t=(this.position.current-e)*.01;this._delta=l.clamp(l.lerp(this._delta,t,.1),-1,1)}updateSections(){let e=this.position.current;for(let t=0,i=this.sections.length;t<i;t++){let s=this.sections[t],o=s.rect.top,c=s.rect.top+s.rect.height;if(e+this.wh>=o&&e<=c){s.visible||s.animationIn(),s.visible=!0,s.dom.classList.add("fil-scroller-visible"),s.dom.style.setProperty("--fil-scroller-delta",`${this._delta}`),s.progress=l.map(e,o-this.wh,c,0,1),s.dom.style.setProperty("--fil-scroller-progress",`${s.progress}`),this.disabled||(s.dom.style.transform=`translateY(${-e}px)`);continue}!s.visible||(s.animationOut(),s.visible=!1,s.dom.classList.remove("fil-scroller-visible"),s.dom.style.setProperty("--fil-scroller-delta","0"),s.progress=0,this.disabled||(s.dom.style.transform=`translateY(${-this.wh}px)`))}}update(){!this.loaded||(this.updateTarget(),this.updateCheckHeight(),this.updateScrollValues(),this.updateSections())}}});var p={};y(p,{App:()=>d});var d,f=h(()=>{m();d=class{constructor(){this.scroller=new n,this.scroller.ease=.16,window.innerWidth<768&&this.scroller.disable(),this.cssVariablesElements=document.querySelectorAll("[css-var]");let e=()=>{this.update(),requestAnimationFrame(e)};e()}update(){this.scroller.update();let e=this.scroller.sections.find(t=>t.id==="css-var-section");for(let t=0,i=this.cssVariablesElements.length;t<i;t++){let s=this.cssVariablesElements[t],o=s.getAttribute("css-var");o==="delta"&&(s.innerText=`${this.scroller.delta.toFixed(5)}`),o==="progress"&&(s.innerText=`${e.progress.toFixed(5)}`)}}}});var{App:S}=(f(),E(p)),_=new S;})();
//# sourceMappingURL=main.js.map
