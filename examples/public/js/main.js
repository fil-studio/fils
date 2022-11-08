(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../math/src/MathUtils.ts
  var MathUtils;
  var init_MathUtils = __esm({
    "../math/src/MathUtils.ts"() {
      MathUtils = class {
        static clamp(v, min, max) {
          return Math.min(max, Math.max(min, v));
        }
        static lerp(v1, v2, alpha) {
          return v1 + (v2 - v1) * alpha;
        }
        static mix(v1, v2, alpha) {
          return MathUtils.lerp(v1, v2, alpha);
        }
        static smoothstep(min, max, val) {
          if (val < min)
            return 0;
          if (val > max)
            return 1;
          return (val - min) / (max - min);
        }
        static step(thrsh, val) {
          return val < thrsh ? 0 : 1;
        }
        static map(x, a, b, c, d) {
          return (x - a) * (d - c) / (b - a) + c;
        }
        static fract(n) {
          return n % 1;
        }
      };
    }
  });

  // ../scroller/src/Scroller.ts
  var style, Scroller;
  var init_Scroller = __esm({
    "../scroller/src/Scroller.ts"() {
      init_MathUtils();
      style = `
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
	[fil-scroller-section].fil-scroller-visible {
		opacity: 1;
		visibility: visible;
	}
`;
      Scroller = class {
        constructor() {
          this.html = {
            scroller: null,
            holder: null,
            container: null,
            content: null
          };
          this.position = {
            current: 0,
            target: 0
          };
          this.sections = [];
          this.loaded = false;
          this.paused = false;
          this.disabled = false;
          this.height = 0;
          this.wh = 0;
          this._ease = 0.1;
          this.delta = 0;
          this.position.current = 0;
          this.position.target = 0;
          this.html.scroller = document.querySelector("[fil-scroller]");
          if (!this.html.scroller) {
            console.warn("Fil Scroller - No `fil-scroller` element");
            return;
          }
          this.create();
        }
        pause() {
          this.paused = true;
        }
        resume() {
          this.paused = false;
        }
        disable() {
          if (this.disabled)
            return;
          this.disabled = true;
          this.html.content.style.transform = `translate3d(0, 0, 0)`;
          this.html.holder.style.height = `auto`;
          this.html.scroller.classList.add("fil-scroller-disabled");
        }
        enable() {
          if (!this.disabled)
            return;
          this.disabled = false;
          this.html.scroller.classList.remove("fil-scroller-disabled");
        }
        set ease(newEase) {
          this._ease = newEase;
        }
        get ease() {
          return this._ease;
        }
        addStyles() {
          document.documentElement.setAttribute("fil-scroller-parent", "");
          const _styles = document.createElement("style");
          _styles.textContent = style;
          document.head.append(_styles);
        }
        addHTML() {
          const dom = this.html.scroller;
          this.html.holder = dom.querySelector("[fil-scroller-holder]");
          this.html.container = dom.querySelector("[fil-scroller-container]");
          this.html.content = dom.querySelector("[fil-scroller-content]");
          this.pointerElements = dom.querySelectorAll("[fil-scroller-pointer]");
        }
        addSections() {
          const sections = this.html.content.querySelectorAll("[fil-scroller-section]");
          for (const _section of sections) {
            const section = {
              dom: _section,
              rect: null,
              visible: false
            };
            this.sections.push(section);
          }
        }
        restore() {
          for (const section of this.sections) {
            section.dom.classList.remove("visible");
            section.dom.style.transform = "none";
            section.rect = section.dom.getBoundingClientRect();
          }
          this.wh = window.innerHeight;
        }
        onResize() {
          this.restore();
        }
        addEventListeners() {
          window.addEventListener("resize", () => {
            this.onResize();
          });
          let timeout;
          const disableScroll = () => {
            if (timeout)
              clearTimeout(timeout);
            document.documentElement.classList.add("scrolling");
            timeout = setTimeout(() => {
              document.documentElement.classList.remove("scrolling");
            }, 20);
          };
          window.addEventListener("wheel", () => {
            disableScroll();
          });
          window.addEventListener("touchmove", () => {
            disableScroll();
          });
        }
        create() {
          this.addStyles();
          this.addHTML();
          this.addSections();
          this.addEventListeners();
          this.restore();
          if ("scrollRestoration" in history)
            history.scrollRestoration = "manual";
          console.log("Fil Scroller - Loaded");
          this.loaded = true;
        }
        updateTarget() {
          this.position.target = this.html.scroller.scrollTop;
          if (this.paused)
            this.html.scroller.scrollTop = this.position.current;
        }
        updateCheckHeight() {
          this.height = 0;
          for (let i = 0, len = this.sections.length; i < len; i++)
            this.height += this.sections[i].rect.height;
          if (this.disabled)
            return;
          this.html.holder.style.height = `${this.height}px`;
        }
        updateScrollValues() {
          if (this.disabled) {
            this.position.current = this.position.target;
            return;
          }
          const previous = this.position.current;
          this.position.current = MathUtils.lerp(
            this.position.current,
            this.position.target,
            this.ease
          );
          const newDelta = (this.position.current - previous) * 0.01;
          this.delta = MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, this.ease), -1, 1);
        }
        updateSections() {
          const scroll = this.position.current;
          for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            const top = section.rect.top;
            const bottom = section.rect.top + section.rect.height;
            if (scroll + this.wh >= top && scroll <= bottom) {
              section.visible = true;
              section.dom.classList.add("fil-scroller-visible");
              section.dom.style.transform = `translateY(${-scroll}px)`;
              continue;
            }
            if (!section.visible)
              continue;
            section.visible = false;
            section.dom.classList.remove("fil-scroller-visible");
            section.dom.style.transform = `translateY(${-this.wh}px)`;
          }
        }
        update() {
          if (!this.loaded)
            return;
          this.updateTarget();
          this.updateCheckHeight();
          this.updateScrollValues();
          this.updateSections();
          this.html.container.style.setProperty("--fil-scroller-delta", `${this.delta.toFixed(5)}`);
        }
      };
    }
  });

  // src/js/demos/ScrollerDemo.ts
  var ScrollerDemo;
  var init_ScrollerDemo = __esm({
    "src/js/demos/ScrollerDemo.ts"() {
      init_Scroller();
      ScrollerDemo = class {
        constructor() {
          this.scroller = new Scroller();
          this.scroller.ease = 0.16;
        }
        update() {
          this.scroller.update();
        }
      };
    }
  });

  // src/js/core/App.ts
  var App_exports = {};
  __export(App_exports, {
    App: () => App
  });
  var App;
  var init_App = __esm({
    "src/js/core/App.ts"() {
      init_ScrollerDemo();
      App = class {
        constructor() {
          const demo = document.querySelector("main").getAttribute("data-template");
          if (demo === "scroller") {
            this.demo = new ScrollerDemo();
          }
          const animate = () => {
            this.update();
            requestAnimationFrame(animate);
          };
          animate();
        }
        update() {
          this.demo.update();
        }
      };
    }
  });

  // src/js/main.js
  var { App: App2 } = (init_App(), __toCommonJS(App_exports));
  var _App = new App2();
})();
