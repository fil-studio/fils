(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/stats.js/build/stats.min.js
  var require_stats_min = __commonJS({
    "node_modules/stats.js/build/stats.min.js"(exports, module) {
      (function(f, e) {
        "object" === typeof exports && "undefined" !== typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define(e) : f.Stats = e();
      })(exports, function() {
        var f = function() {
          function e(a2) {
            c.appendChild(a2.dom);
            return a2;
          }
          function u(a2) {
            for (var d = 0; d < c.children.length; d++)
              c.children[d].style.display = d === a2 ? "block" : "none";
            l = a2;
          }
          var l = 0, c = document.createElement("div");
          c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
          c.addEventListener("click", function(a2) {
            a2.preventDefault();
            u(++l % c.children.length);
          }, false);
          var k = (performance || Date).now(), g = k, a = 0, r = e(new f.Panel("FPS", "#0ff", "#002")), h = e(new f.Panel("MS", "#0f0", "#020"));
          if (self.performance && self.performance.memory)
            var t = e(new f.Panel("MB", "#f08", "#201"));
          u(0);
          return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function() {
            k = (performance || Date).now();
          }, end: function() {
            a++;
            var c2 = (performance || Date).now();
            h.update(c2 - k, 200);
            if (c2 > g + 1e3 && (r.update(1e3 * a / (c2 - g), 100), g = c2, a = 0, t)) {
              var d = performance.memory;
              t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
            }
            return c2;
          }, update: function() {
            k = this.end();
          }, domElement: c, setMode: u };
        };
        f.Panel = function(e, f2, l) {
          var c = Infinity, k = 0, g = Math.round, a = g(window.devicePixelRatio || 1), r = 80 * a, h = 48 * a, t = 3 * a, v = 2 * a, d = 3 * a, m = 15 * a, n = 74 * a, p = 30 * a, q = document.createElement("canvas");
          q.width = r;
          q.height = h;
          q.style.cssText = "width:80px;height:48px";
          var b = q.getContext("2d");
          b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";
          b.textBaseline = "top";
          b.fillStyle = l;
          b.fillRect(0, 0, r, h);
          b.fillStyle = f2;
          b.fillText(e, t, v);
          b.fillRect(d, m, n, p);
          b.fillStyle = l;
          b.globalAlpha = 0.9;
          b.fillRect(d, m, n, p);
          return { dom: q, update: function(h2, w) {
            c = Math.min(c, h2);
            k = Math.max(k, h2);
            b.fillStyle = l;
            b.globalAlpha = 1;
            b.fillRect(0, 0, r, m);
            b.fillStyle = f2;
            b.fillText(g(h2) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);
            b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);
            b.fillRect(d + n - a, m, a, p);
            b.fillStyle = l;
            b.globalAlpha = 0.9;
            b.fillRect(d + n - a, m, a, g((1 - h2 / w) * p));
          } };
        };
        return f;
      });
    }
  });

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

	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
	}
	[fil-scroller-section].fil-scroller-visible {
		opacity: 1;
		visibility: visible;
	}

	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
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
          this._delta = 0;
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
          this.html.scroller.setAttribute("fil-scroller", "disabled");
        }
        enable() {
          if (!this.disabled)
            return;
          this.disabled = false;
          this.html.scroller.setAttribute("fil-scroller", "");
        }
        set ease(newEase) {
          this._ease = newEase;
        }
        get ease() {
          return this._ease;
        }
        get delta() {
          return this._delta;
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
          for (let i = 0, len = sections.length; i < len; i++) {
            const _section = sections[i];
            const id = _section.getAttribute("fil-scroller-section") ? _section.getAttribute("fil-scroller-section") : `section-${i}`;
            const section = {
              id,
              dom: _section,
              rect: null,
              visible: false,
              range: 0,
              animationIn: () => {
              },
              animationOut: () => {
              }
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
          this.html.holder.style.height = `${this.height}px`;
        }
        updateScrollValues() {
          const previous = this.position.current;
          if (this.disabled) {
            this.position.current = this.position.target;
          } else {
            this.position.current = MathUtils.lerp(
              this.position.current,
              this.position.target,
              this.ease
            );
          }
          const newDelta = (this.position.current - previous) * 0.01;
          this._delta = MathUtils.clamp(MathUtils.lerp(this._delta, newDelta, 0.3), -1, 1);
        }
        updateSections() {
          const scroll = this.position.current;
          for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            const top = section.rect.top;
            const bottom = section.rect.top + section.rect.height;
            if (scroll + this.wh >= top && scroll <= bottom) {
              if (!section.visible)
                section.animationIn();
              section.visible = true;
              section.dom.classList.add("fil-scroller-visible");
              section.dom.style.setProperty("--fil-scroller-delta", `${this._delta.toFixed(5)}`);
              section.range = MathUtils.map(scroll, top - this.wh, bottom, 0, 1);
              section.dom.style.setProperty("--fil-scroller-range", `${section.range.toFixed(5)}`);
              if (!this.disabled)
                section.dom.style.transform = `translateY(${-scroll}px)`;
              continue;
            }
            if (!section.visible)
              continue;
            section.animationOut();
            section.visible = false;
            section.dom.classList.remove("fil-scroller-visible");
            section.dom.style.setProperty("--fil-scroller-delta", "0");
            section.range = 0;
            if (!this.disabled)
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
          if (window.innerWidth < 768)
            this.scroller.disable();
          this.cssVariablesElements = document.querySelectorAll("[css-var]");
        }
        update() {
          this.scroller.update();
          const section = this.scroller.sections.find((x) => x.id === "css-var-section");
          for (let i = 0, len = this.cssVariablesElements.length; i < len; i++) {
            const el = this.cssVariablesElements[i];
            const type = el.getAttribute("css-var");
            if (type === "delta")
              el.innerText = `${this.scroller.delta.toFixed(5)}`;
            if (type === "range")
              el.innerText = `${section.range.toFixed(5)}`;
          }
        }
      };
    }
  });

  // src/js/core/App.ts
  var App_exports = {};
  __export(App_exports, {
    App: () => App
  });
  var import_stats, stats, App;
  var init_App = __esm({
    "src/js/core/App.ts"() {
      import_stats = __toESM(require_stats_min());
      init_ScrollerDemo();
      stats = new import_stats.default();
      stats.showPanel(0);
      document.body.appendChild(stats.dom);
      App = class {
        constructor() {
          const demo = document.querySelector("main").getAttribute("data-template");
          if (demo === "scroller") {
            this.demo = new ScrollerDemo();
          }
          const animate = () => {
            stats.begin();
            this.update();
            stats.end();
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
