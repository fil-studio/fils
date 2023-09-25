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
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../node_modules/mersenne/lib/mersenne.js
  var require_mersenne = __commonJS({
    "../node_modules/mersenne/lib/mersenne.js"(exports) {
      function MersenneTwister19937() {
        var N, M, MATRIX_A, UPPER_MASK, LOWER_MASK;
        N = 624;
        M = 397;
        MATRIX_A = 2567483615;
        UPPER_MASK = 2147483648;
        LOWER_MASK = 2147483647;
        var mt = new Array(N);
        var mti = N + 1;
        function unsigned32(n1) {
          return n1 < 0 ? (n1 ^ UPPER_MASK) + UPPER_MASK : n1;
        }
        function subtraction32(n1, n2) {
          return n1 < n2 ? unsigned32(4294967296 - (n2 - n1) & 4294967295) : n1 - n2;
        }
        function addition32(n1, n2) {
          return unsigned32(n1 + n2 & 4294967295);
        }
        function multiplication32(n1, n2) {
          var sum = 0;
          for (var i = 0; i < 32; ++i) {
            if (n1 >>> i & 1) {
              sum = addition32(sum, unsigned32(n2 << i));
            }
          }
          return sum;
        }
        this.init_genrand = function(s) {
          mt[0] = unsigned32(s & 4294967295);
          for (mti = 1; mti < N; mti++) {
            mt[mti] = //c//(1812433253 * (mt[mti-1] ^ (mt[mti-1] >> 30)) + mti);
            addition32(multiplication32(1812433253, unsigned32(mt[mti - 1] ^ mt[mti - 1] >>> 30)), mti);
            mt[mti] = unsigned32(mt[mti] & 4294967295);
          }
        };
        this.init_by_array = function(init_key, key_length) {
          var i, j, k;
          this.init_genrand(19650218);
          i = 1;
          j = 0;
          k = N > key_length ? N : key_length;
          for (; k; k--) {
            mt[i] = addition32(addition32(unsigned32(mt[i] ^ multiplication32(unsigned32(mt[i - 1] ^ mt[i - 1] >>> 30), 1664525)), init_key[j]), j);
            mt[i] = //c//mt[i] &= 0xffffffff; /* for WORDSIZE > 32 machines */
            unsigned32(mt[i] & 4294967295);
            i++;
            j++;
            if (i >= N) {
              mt[0] = mt[N - 1];
              i = 1;
            }
            if (j >= key_length)
              j = 0;
          }
          for (k = N - 1; k; k--) {
            mt[i] = subtraction32(unsigned32((dbg = mt[i]) ^ multiplication32(unsigned32(mt[i - 1] ^ mt[i - 1] >>> 30), 1566083941)), i);
            mt[i] = unsigned32(mt[i] & 4294967295);
            i++;
            if (i >= N) {
              mt[0] = mt[N - 1];
              i = 1;
            }
          }
          mt[0] = 2147483648;
        };
        var mag01 = [0, MATRIX_A];
        this.genrand_int32 = function() {
          var y;
          if (mti >= N) {
            var kk;
            if (mti == N + 1)
              this.init_genrand(5489);
            for (kk = 0; kk < N - M; kk++) {
              y = unsigned32(mt[kk] & UPPER_MASK | mt[kk + 1] & LOWER_MASK);
              mt[kk] = unsigned32(mt[kk + M] ^ y >>> 1 ^ mag01[y & 1]);
            }
            for (; kk < N - 1; kk++) {
              y = unsigned32(mt[kk] & UPPER_MASK | mt[kk + 1] & LOWER_MASK);
              mt[kk] = unsigned32(mt[kk + (M - N)] ^ y >>> 1 ^ mag01[y & 1]);
            }
            y = unsigned32(mt[N - 1] & UPPER_MASK | mt[0] & LOWER_MASK);
            mt[N - 1] = unsigned32(mt[M - 1] ^ y >>> 1 ^ mag01[y & 1]);
            mti = 0;
          }
          y = mt[mti++];
          y = unsigned32(y ^ y >>> 11);
          y = unsigned32(y ^ y << 7 & 2636928640);
          y = unsigned32(y ^ y << 15 & 4022730752);
          y = unsigned32(y ^ y >>> 18);
          return y;
        };
        this.genrand_int31 = function() {
          return this.genrand_int32() >>> 1;
        };
        this.genrand_real1 = function() {
          return this.genrand_int32() * (1 / 4294967295);
        };
        this.genrand_real2 = function() {
          return this.genrand_int32() * (1 / 4294967296);
        };
        this.genrand_real3 = function() {
          return (this.genrand_int32() + 0.5) * (1 / 4294967296);
        };
        this.genrand_res53 = function() {
          var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
          return (a * 67108864 + b) * (1 / 9007199254740992);
        };
      }
      exports.MersenneTwister19937 = MersenneTwister19937;
      var gen = new MersenneTwister19937();
      gen.init_genrand((/* @__PURE__ */ new Date()).getTime() % 1e9);
      exports.rand = function(N) {
        if (!N) {
          N = 32768;
        }
        return Math.floor(gen.genrand_real2() * N);
      };
      exports.seed = function(S) {
        if (typeof S != "number") {
          throw new Error("seed(S) must take numeric argument; is " + typeof S);
        }
        gen.init_genrand(S);
      };
      exports.seed_array = function(A) {
        if (typeof A != "object") {
          throw new Error("seed_array(A) must take array of numbers; is " + typeof A);
        }
        gen.init_by_array(A);
      };
    }
  });

  // ../packages/scroller/node_modules/@fils/math/lib/Random.js
  var import_mersenne;
  var init_Random = __esm({
    "../packages/scroller/node_modules/@fils/math/lib/Random.js"() {
      import_mersenne = __toESM(require_mersenne());
    }
  });

  // ../packages/scroller/node_modules/@fils/math/lib/MathUtils.js
  var MathUtils;
  var init_MathUtils = __esm({
    "../packages/scroller/node_modules/@fils/math/lib/MathUtils.js"() {
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
        static map(x, a, b, c7, d) {
          return (x - a) * (d - c7) / (b - a) + c7;
        }
        static fract(n) {
          return n % 1;
        }
      };
    }
  });

  // ../packages/scroller/node_modules/@fils/math/lib/Vector.js
  var init_Vector = __esm({
    "../packages/scroller/node_modules/@fils/math/lib/Vector.js"() {
      init_MathUtils();
    }
  });

  // ../packages/scroller/node_modules/@fils/math/lib/main.js
  var init_main = __esm({
    "../packages/scroller/node_modules/@fils/math/lib/main.js"() {
      init_Random();
      init_MathUtils();
      init_Vector();
    }
  });

  // ../packages/scroller/src/Section.ts
  var PRECISION, Section;
  var init_Section = __esm({
    "../packages/scroller/src/Section.ts"() {
      init_main();
      init_Scroller();
      PRECISION = 5;
      Section = class {
        constructor(id, dom2, direction, useNative) {
          this.w = {
            w: 0,
            h: 0
          };
          this.progress = 0;
          this._direction = 2 /* LEFT */;
          this.threshold = [];
          this.scroll = 0;
          this.delta = 0;
          this.visible = false;
          this.disabled = false;
          this.listeners = [];
          this.sticky = [];
          this.nativeScrolling = false;
          this.id = id;
          this.dom = dom2;
          this._direction = direction;
          this.nativeScrolling = useNative === true;
          const s = dom2.querySelectorAll("[fil-scroller-sticky]");
          s.forEach((value) => {
            this.sticky.push(value);
          });
        }
        set direction(value) {
          if (this._direction === value)
            return;
          this._direction = value;
        }
        get direction() {
          return this._direction;
        }
        calculateDims() {
          this.rect = this.dom.getBoundingClientRect();
          if (this.direction === 0 /* TOP */ || this.direction === 1 /* BOTTOM */) {
            this.threshold = [
              this.rect.top - this.w.h,
              this.rect.top + this.rect.height
            ];
            if (this.nativeScrolling) {
              this.threshold[0] += this.scroll;
              this.threshold[1] += this.scroll;
            }
          } else {
            this.threshold = [
              this.widthOffset - this.w.w,
              this.widthOffset + this.rect.width
            ];
          }
        }
        addSectionListener(lis) {
          if (this.listeners.indexOf(lis) > -1)
            return;
          this.listeners.push(lis);
        }
        removeSectionListener(lis) {
          this.listeners.splice(
            this.listeners.indexOf(lis),
            1
          );
        }
        restore(resizing = false) {
          for (const lis of this.listeners) {
            lis == null ? void 0 : lis.onBeforeRestore(resizing);
          }
          this.dom.style.transform = "";
          this.visible = false;
          this.progress = 0;
          this.calculateDims();
          for (const lis of this.listeners) {
            lis == null ? void 0 : lis.onAfterRestore(resizing);
          }
        }
        animationIn() {
          for (const lis of this.listeners) {
            lis == null ? void 0 : lis.onAnimationIn();
          }
        }
        animationOut() {
          for (const lis of this.listeners) {
            lis == null ? void 0 : lis.onAnimationOut();
          }
        }
        get position() {
          if (!this.visible)
            return { x: 0, y: -this.w.h };
          if (this.direction === 0 /* TOP */)
            return { x: 0, y: -this.scroll };
          if (this.direction === 1 /* BOTTOM */)
            return { x: 0, y: this.scroll + (this.w.h - this.rect.height) - this.rect.top * 2 };
          if (this.direction === 2 /* LEFT */)
            return { x: this.widthOffset - this.scroll, y: -this.rect.top };
          if (this.direction === 3 /* RIGHT */)
            return { x: this.scroll + (this.w.w - this.rect.width) - this.widthOffset, y: -this.rect.top };
        }
        updateTransform() {
          if (this.disabled)
            return;
          if (this.nativeScrolling) {
            return;
          }
          const wH = this.w.h;
          const wW = this.w.w;
          let px = this.position.x, py = this.position.y;
          for (const s of this.sticky) {
            let tY, sY;
            switch (this.direction) {
              case 0 /* TOP */:
                0;
                tY = 1 - MathUtils.smoothstep(-this.threshold[1] + wH, -this.threshold[0] - wH, py);
                sY = tY * (this.threshold[1] - this.threshold[0] - 2 * wH);
                s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(PRECISION)},0,1)`;
                break;
              case 1 /* BOTTOM */:
                tY = 1 - MathUtils.smoothstep(-this.threshold[1] + wH, -this.threshold[0] - wH, py);
                sY = tY * (this.threshold[1] - this.threshold[0] - 2 * wH);
                s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${sY.toFixed(PRECISION)},0,1)`;
                break;
              case 2 /* LEFT */:
                tY = 1 - MathUtils.smoothstep(-this.threshold[1] + wW, -this.threshold[0] - wW, px);
                console.log(tY);
                sY = tY * (this.threshold[1] - this.threshold[0] - 2 * wW);
                s.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${sY.toFixed(PRECISION)},0,0,1)`;
                break;
            }
          }
          this.dom.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,${px.toFixed(PRECISION)},${py.toFixed(PRECISION)},0,1)`;
        }
        show() {
          if (this.visible)
            return;
          this.animationIn();
          this.dom.classList.add("fil-scroller__visible");
          this.visible = true;
        }
        hide() {
          if (!this.visible)
            return;
          this.animationOut();
          this.visible = false;
          this.progress = 0;
          this.delta = 0;
          this.dom.classList.remove("fil-scroller__visible");
          this.dom.style.setProperty("--fil-scroller-delta", "0");
          this.dom.style.setProperty("--fil-scroller-progress", "0");
        }
        update() {
          if (this.scroll > this.threshold[0] && this.scroll < this.threshold[1]) {
            if (!this.visible) {
              this.show();
            }
            this.dom.style.setProperty("--fil-scroller-delta", `${this.delta.toFixed(PRECISION)}`);
            this.progress = MathUtils.smoothstep(this.threshold[0], this.threshold[1], this.scroll);
            this.dom.style.setProperty("--fil-scroller-progress", `${this.progress.toFixed(PRECISION)}`);
            this.updateTransform();
            return;
          }
          if (!this.visible)
            return;
          this.hide();
          this.updateTransform();
        }
      };
    }
  });

  // ../packages/scroller/src/VirtualScrollBar.ts
  var style, TIMEOUT, tid, VirtualScrollBar;
  var init_VirtualScrollBar = __esm({
    "../packages/scroller/src/VirtualScrollBar.ts"() {
      init_main();
      style = `
[fil-virtual-scroller] {
    pointer-events: none;
    position: fixed;
    top: 0;
    right: 0px;
    height: 100vh;
    height: 100dvh;
    z-index: 9999;
    opacity: 0;
    transition: opacity 600ms ease-out;
}
[fil-virtual-scroller] div {
    border-radius: 4px;
    width: 50%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    left: 50%;
}
`;
      TIMEOUT = 1500;
      VirtualScrollBar = class {
        constructor(contentHeight, scrollBarWidth = 8) {
          this.enabled = false;
          this._progress = 0;
          this.dom = document.createElement("div");
          this.dom.setAttribute("fil-virtual-scroller", "");
          this.dom.style.width = `${scrollBarWidth * 2}px`;
          this.bar = document.createElement("div");
          this.bar.style.borderRadius = `${scrollBarWidth / 2}px`;
          this.dom.appendChild(this.bar);
          const _styles = document.createElement("style");
          _styles.textContent = style;
          document.head.append(_styles);
          document.body.appendChild(this.dom);
        }
        set contentHeight(height) {
          const dh = height - window.innerHeight;
          if (dh < 0) {
            this.enabled = false;
            this.dom.style.display = "none";
            return;
          } else {
            this.dom.style.display = "block";
          }
          const sdh = 1 - MathUtils.smoothstep(100, 1e3, dh);
          const h = MathUtils.lerp(100, window.innerHeight / 2, sdh);
          this.height = Math.round(h);
          this.bar.style.height = `${this.height}px`;
        }
        show(blockTimeout = false) {
          this.dom.style.opacity = `1`;
          if (blockTimeout)
            return;
          this.hide();
        }
        hide() {
          window.clearTimeout(tid);
          tid = window.setTimeout(() => {
            this.dom.style.opacity = `0`;
          }, TIMEOUT);
        }
        set progress(value) {
          if (value === this._progress)
            return;
          this._progress = value;
          this.updatePosition();
          this.show();
        }
        updatePosition() {
          const t = MathUtils.lerp(0, window.innerHeight - this.height, this._progress);
          this.bar.style.transform = `translateX(-50%) translateY(${t}px)`;
        }
      };
    }
  });

  // ../packages/scroller/src/Scroller.ts
  var style2, touchWheel, DEFAULT_EASING, Scroller;
  var init_Scroller = __esm({
    "../packages/scroller/src/Scroller.ts"() {
      init_main();
      init_Section();
      init_VirtualScrollBar();
      style2 = `
	html {
		overscroll-behavior: none;
	}
	[fil-scroller]{
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		position: fixed;
	}
	[fil-scroller-section]{
		opacity: 0;
		visibility: hidden;
		will-change: auto;
	}
	[fil-scroller-sticky]{
		position: sticky;
		top: 0;
	}
	[fil-scroller-section].fil-scroller__visible {
		opacity: 1;
		visibility: visible;
		will-change: transform, scroll-position;
	}
	[fil-scroller="disabled"] [fil-scroller-container] {
		position: relative;
	}
	[fil-scroller-section].fil-scroller__visible [fil-scroller-sticky] {
		will-change: transform;
	}
`;
      touchWheel = {
        delta: 0,
        startY: 0,
        amp: 10,
        startDrag: 0
      };
      DEFAULT_EASING = 0.16;
      Scroller = class {
        constructor(params) {
          this.isBody = false;
          this.force = {
            touch: 1,
            wheel: 1
          };
          this.position = {
            current: 0,
            target: 0
          };
          this._direction = 0 /* TOP */;
          this.sections = [];
          this.loaded = false;
          // private paused: boolean = false;
          this.disabled = false;
          this.distance = 0;
          this.delta = 0;
          this.w = {
            w: 0,
            h: 0
          };
          this.edges = [0, 0];
          this.useNative = false;
          if (params.customContainer) {
            this.container = params.customContainer;
          } else
            this.container = document.querySelector("[fil-scroller]");
          if (params.customContent) {
            this.content = params.customContent;
          } else
            this.content = this.container.querySelector("[fil-scroller-content]");
          this.isBody = this.container === document.body;
          if (!this.container) {
            console.warn("Fil Scroller - No `[fil-scroller]` element");
            return;
          }
          this.ease = (params == null ? void 0 : params.easing) || DEFAULT_EASING;
          this.useNative = (params == null ? void 0 : params.useNative) === true;
          this._direction = (params == null ? void 0 : params.direction) || 0 /* TOP */;
          if (params.touchForce)
            this.force.touch = params.touchForce;
          if (params.wheelForce)
            this.force.wheel = params.wheelForce;
          if (this.useNative) {
            if (this._direction !== 0 /* TOP */) {
              console.warn("Native scrolling supports only D.TOP vertical direction! Forcing D.TOP...");
              this._direction = 0 /* TOP */;
            }
            this.ease = 1;
          }
          if (this.useNative) {
            console.log("Using Native Scroll");
            this.container.style.overflowY = "auto";
          } else if (params == null ? void 0 : params.showVirtualScrollBar) {
            this.virtualScrollBar = (params == null ? void 0 : params.customScrollBar) || new VirtualScrollBar(0);
          }
          this.addStyles();
          this.refresh();
          this.addEventListeners();
        }
        get enabled() {
          return !this.disabled;
        }
        // Disable - enable
        disable() {
          if (this.disabled)
            return;
          this.disabled = true;
          for (const section of this.sections)
            section.disabled = this.disabled;
          this.container.setAttribute("fil-scroller", "disabled");
          if (this.virtualScrollBar) {
            this.virtualScrollBar.dom.style.display = "none";
          }
        }
        enable() {
          if (!this.disabled)
            return;
          this.disabled = false;
          for (const section of this.sections)
            section.disabled = this.disabled;
          this.container.setAttribute("fil-scroller", "");
          if (this.virtualScrollBar) {
            this.virtualScrollBar.dom.style.display = "block";
          }
        }
        set direction(val) {
          if (this.useNative && val !== 0 /* TOP */) {
            console.warn("Native scrolling supports only D.TOP vertical direction! Forcing D.TOP...");
            this._direction = 0 /* TOP */;
          } else {
            this._direction = MathUtils.clamp(val, 0, 3);
          }
          for (const section of this.sections)
            section.direction = this.direction;
          this.restore();
        }
        get direction() {
          return this._direction;
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
          _styles.textContent = style2;
          document.head.append(_styles);
        }
        addSections() {
          const sections = this.container.querySelectorAll("[fil-scroller-section]");
          for (let i = 0, len = sections.length; i < len; i++) {
            const _section = sections[i];
            const id = _section.getAttribute("fil-scroller-section") ? _section.getAttribute("fil-scroller-section") : `section-${i}`;
            const section = new Section(id, _section, this.direction, this.useNative);
            this.sections.push(section);
          }
        }
        isHorizontal() {
          return this.direction === 2 /* LEFT */ || this.direction === 3 /* RIGHT */;
        }
        restore(resizing = false) {
          this.w.w = window.innerWidth;
          this.w.h = window.innerHeight;
          for (const section of this.sections) {
            section.w = this.w;
            section.restore(resizing);
          }
          this.updateSections();
          let w = 0;
          for (let section of this.sections) {
            section.widthOffset = w;
            w += section.sticky.length ? section.rect.height : window.innerWidth;
          }
          this.updateCheckHeight();
        }
        contentChanged() {
          this.restore();
          this.update();
        }
        resize() {
          this.restore(true);
        }
        updateExternal(delta) {
          this.position.target = MathUtils.clamp(this.position.target + delta, this.edges[0], this.edges[1]);
        }
        addEventListeners() {
          if (this.useNative)
            return;
          this.container.addEventListener("wheel", (e) => {
            if (this.disabled)
              return;
            this.updateExternal(e.deltaY * this.force.wheel);
          });
          this.container.addEventListener("touchstart", (e) => {
            if (this.disabled)
              return;
            const e1 = e.touches[0];
            touchWheel.startY = e1.clientY;
            touchWheel.startDrag = performance.now();
          }, {
            passive: false
          });
          this.container.addEventListener("touchend", (e) => {
            if (this.disabled)
              return;
            if (performance.now() - touchWheel.startDrag < 100) {
              this.updateExternal(-touchWheel.delta * 10 * this.force.touch);
            }
            touchWheel.delta = 0;
          }, {
            passive: false
          });
          this.container.addEventListener("touchmove", (e) => {
            if (this.disabled)
              return;
            e.preventDefault();
            const e1 = e.touches[0];
            touchWheel.delta = e1.clientY - touchWheel.startY;
            touchWheel.startY = e1.clientY;
            this.updateExternal(-touchWheel.delta * this.force.touch);
          }, {
            passive: false
          });
        }
        refresh(forceTop = true) {
          this.loaded = false;
          if (forceTop) {
            this.position.current = 0;
            if (this.useNative) {
              this.container.scrollTop = 0;
            }
          }
          this.position.target = this.position.current;
          this.sections = [];
          this.create();
          if (this.isHorizontal()) {
            this.restore();
          }
        }
        create() {
          this.addSections();
          this.restore();
          if ("scrollRestoration" in history)
            history.scrollRestoration = "manual";
          console.log("Fil Scroller - Loaded");
          this.loaded = true;
        }
        updateTarget() {
          if (this.useNative) {
            this.position.target = this.isBody ? window.scrollY : this.container.scrollTop;
          }
        }
        updateCheckHeight() {
          this.distance = 0;
          const vertical = !this.isHorizontal();
          for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            if (vertical)
              this.distance += section.rect.height;
            else
              this.distance += section.sticky.length ? section.rect.height : section.rect.width;
          }
          const dw = this.w.h - this.w.w;
          if (!vertical)
            this.distance += dw;
          this.content.style.height = `${this.distance}px`;
          if (!this.useNative && this.virtualScrollBar) {
            this.virtualScrollBar.contentHeight = this.distance;
          }
          this.edges[1] = vertical ? this.distance - this.w.h : this.distance - this.w.w - dw;
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
            if (Math.abs(this.position.target - this.position.current) < 1) {
              this.position.current = this.position.target;
            }
          }
          if (!this.useNative && this.virtualScrollBar) {
            this.virtualScrollBar.progress = this.position.current / this.edges[1];
          }
          const newDelta = (this.position.current - previous) * 0.01;
          this.delta = MathUtils.clamp(MathUtils.lerp(this.delta, newDelta, 0.1), -1, 1);
        }
        updateSections() {
          const scroll = this.position.current;
          for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            section.scroll = scroll;
            section.delta = this.delta;
            section.update();
          }
        }
        update() {
          if (!this.loaded)
            return;
          this.updateTarget();
          this.updateScrollValues();
          if (Math.abs(this.delta) > 1e-3) {
            this.updateSections();
          }
        }
        /**
         * Scrolls to a given section
         * @param k index of section to scroll to
         * @returns 
         */
        scrollToSection(k) {
          if (k < 0 || k > this.sections.length - 1) {
            return console.warn("Section Out of bounds!");
          }
          const sec = this.sections[k];
          if (this.useNative) {
            const top = Math.min(sec.rect.top, this.distance - this.w.h);
            this.container.scrollTop = top;
          } else {
            if (!this.isHorizontal()) {
              const top = Math.min(sec.rect.top, this.distance - this.w.h);
              this.position.target = top;
            } else {
              const l = Math.min(sec.widthOffset, this.distance);
              this.position.target = l;
            }
          }
        }
        /**
         * Scrolls to next section
         * @param section Section from where you are scrolling from
         */
        scrollToNextSection(section) {
          this.scrollToSection(this.sections.indexOf(section) + 1);
        }
        /**
         * Scrolls to previous section
         * @param section Section from where you are scrolling from
         */
        scrollToPrevSection(section) {
          this.scrollToSection(this.sections.indexOf(section) - 1);
        }
      };
    }
  });

  // ../packages/scroller/src/ContentSection.ts
  var init_ContentSection = __esm({
    "../packages/scroller/src/ContentSection.ts"() {
    }
  });

  // ../packages/scroller/src/main.ts
  var init_main2 = __esm({
    "../packages/scroller/src/main.ts"() {
      init_Scroller();
      init_VirtualScrollBar();
      init_Section();
      init_ContentSection();
    }
  });

  // node_modules/three/examples/jsm/libs/stats.module.js
  var Stats, stats_module_default;
  var init_stats_module = __esm({
    "node_modules/three/examples/jsm/libs/stats.module.js"() {
      Stats = function() {
        var mode = 0;
        var container = document.createElement("div");
        container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";
        container.addEventListener("click", function(event) {
          event.preventDefault();
          showPanel(++mode % container.children.length);
        }, false);
        function addPanel(panel) {
          container.appendChild(panel.dom);
          return panel;
        }
        function showPanel(id) {
          for (var i = 0; i < container.children.length; i++) {
            container.children[i].style.display = i === id ? "block" : "none";
          }
          mode = id;
        }
        var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
        var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
        var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
        if (self.performance && self.performance.memory) {
          var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
        }
        showPanel(0);
        return {
          REVISION: 16,
          dom: container,
          addPanel,
          showPanel,
          begin: function() {
            beginTime = (performance || Date).now();
          },
          end: function() {
            frames++;
            var time = (performance || Date).now();
            msPanel.update(time - beginTime, 200);
            if (time >= prevTime + 1e3) {
              fpsPanel.update(frames * 1e3 / (time - prevTime), 100);
              prevTime = time;
              frames = 0;
              if (memPanel) {
                var memory = performance.memory;
                memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
              }
            }
            return time;
          },
          update: function() {
            beginTime = this.end();
          },
          // Backwards Compatibility
          domElement: container,
          setMode: showPanel
        };
      };
      Stats.Panel = function(name, fg, bg) {
        var min = Infinity, max = 0, round = Math.round;
        var PR = round(window.devicePixelRatio || 1);
        var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
        var canvas = document.createElement("canvas");
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
        canvas.style.cssText = "width:80px;height:48px";
        var context = canvas.getContext("2d");
        context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
        context.textBaseline = "top";
        context.fillStyle = bg;
        context.fillRect(0, 0, WIDTH, HEIGHT);
        context.fillStyle = fg;
        context.fillText(name, TEXT_X, TEXT_Y);
        context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
        context.fillStyle = bg;
        context.globalAlpha = 0.9;
        context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
        return {
          dom: canvas,
          update: function(value, maxValue) {
            min = Math.min(min, value);
            max = Math.max(max, value);
            context.fillStyle = bg;
            context.globalAlpha = 1;
            context.fillRect(0, 0, WIDTH, GRAPH_Y);
            context.fillStyle = fg;
            context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
            context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
            context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
            context.fillStyle = bg;
            context.globalAlpha = 0.9;
            context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
          }
        };
      };
      stats_module_default = Stats;
    }
  });

  // ../packages/ui/node_modules/@fils/utils/lib/Utils.js
  function el(type, className, parent) {
    let e = document.createElement(type);
    if (className != void 0)
      e.className = className;
    if (parent != void 0)
      parent.appendChild(e);
    return e;
  }
  function remove(el2) {
    removeListeners(el2);
    el2.remove();
  }
  function removeListeners(el2) {
    const eventListeners = Object.keys(el2.__events || {});
    Object.keys(eventListeners).forEach((eventType) => {
      eventListeners[eventType].forEach((listener) => {
        el2.removeEventListener(eventType, listener);
      });
    });
    delete el2.__events;
  }
  function debounce(func, delay = 250) {
    let timerId;
    return function() {
      clearTimeout(timerId);
      timerId = setTimeout(() => func.apply(this, arguments), delay);
    };
  }
  var init_Utils = __esm({
    "../packages/ui/node_modules/@fils/utils/lib/Utils.js"() {
    }
  });

  // ../packages/ui/node_modules/@fils/utils/lib/FileUtils.js
  var init_FileUtils = __esm({
    "../packages/ui/node_modules/@fils/utils/lib/FileUtils.js"() {
    }
  });

  // ../packages/ui/node_modules/@fils/utils/lib/TypeUtils.js
  function isUndefined(obj) {
    return obj === void 0;
  }
  function isNull(obj) {
    return obj === null;
  }
  function isArray(obj) {
    return obj.constructor === Array;
  }
  function isObject(obj) {
    return obj === Object(obj);
  }
  function isNumber(obj) {
    return obj === obj + 0;
  }
  function isString(obj) {
    return obj === obj + "";
  }
  function isBoolean(obj) {
    return obj === false || obj === true;
  }
  function isFunction(obj) {
    return obj instanceof Function;
  }
  function getType(obj) {
    if (isUndefined(obj))
      return "undefined";
    if (isNull(obj))
      return "null";
    if (isArray(obj))
      return "array";
    if (isObject(obj))
      return "object";
    if (isNumber(obj))
      return "number";
    if (isString(obj))
      return "string";
    if (isBoolean(obj))
      return "boolean";
    if (isFunction(obj))
      return "function";
  }
  var init_TypeUtils = __esm({
    "../packages/ui/node_modules/@fils/utils/lib/TypeUtils.js"() {
    }
  });

  // ../packages/ui/node_modules/@fils/utils/lib/main.js
  var init_main3 = __esm({
    "../packages/ui/node_modules/@fils/utils/lib/main.js"() {
      init_Utils();
      init_FileUtils();
      init_TypeUtils();
    }
  });

  // ../packages/ui/lib/partials/cssClasses.js
  var CSS_UI;
  var init_cssClasses = __esm({
    "../packages/ui/lib/partials/cssClasses.js"() {
      CSS_UI = {
        baseClass: "_ui",
        wrapper: "_ui-wrapper",
        minimal: "_ui-minimal",
        parent: "_ui-wrapper-has-parent",
        resizer: "_ui-wrapper-resizer",
        item: "_ui-item",
        content: "_ui-item-content",
        utility: {
          hidden: "_ui--hidden",
          grab: "_ui--grab",
          active: "_ui--active",
          loaded: "_ui--loaded"
        },
        row: {
          baseClass: "_ui-row",
          vertical: "_ui-row-vertical",
          hasButton: "_ui-row-has-button",
          custom: "_ui-row-custom"
        },
        button: {
          baseClass: "_ui-button",
          hasIcon: "_ui-button-has-icon",
          icon: "_ui-button-icon",
          happy: "_ui-button-happy",
          warning: "_ui-button-warning",
          danger: "_ui-button-danger"
        },
        section: {
          baseClass: "_ui-section",
          header: {
            baseClass: "_ui-section-header",
            hasIcon: "_ui-section-header-has-icon",
            icon: "_ui-section-header-icon",
            chevron: "_ui-section-header-chevron"
          },
          content: "_ui-section-content",
          foldable: "_ui-section-foldable",
          folded: "_ui-section-folded",
          foldableElement: "_ui-section-foldable-element"
        },
        spacer: {
          baseClass: "_ui-spacer",
          hasLine: "_ui-spacer-has-line",
          size: {
            small: "_ui-spacer-small",
            medium: "_ui-spacer-medium",
            large: "_ui-spacer-large"
          }
        },
        panel: {
          baseClass: "_ui-panel"
        },
        select: {
          panel: "_ui-panel-select",
          optionNone: "_ui-panel-select-option-none",
          option: "_ui-panel-select-option",
          optionButton: "_ui-panel-select-option-button"
        },
        info: {
          baseClass: "_ui-info",
          text: "_ui-info-text"
        }
      };
    }
  });

  // ../packages/ui-icons/lib/Icons.js
  var uiDownarrowHlt, uiRemove, uiTriaDown;
  var init_Icons = __esm({
    "../packages/ui-icons/lib/Icons.js"() {
      uiDownarrowHlt = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.995 7.49799C5.89507 7.49739 5.79725 7.52675 5.71416 7.58227C5.63108 7.6378 5.56653 7.71695 5.52886 7.80951C5.49119 7.90207 5.48212 8.0038 5.50282 8.10156C5.52352 8.19933 5.57305 8.28865 5.645 8.35799L9.645 12.358C9.69145 12.4046 9.74662 12.4415 9.80737 12.4667C9.86811 12.4919 9.93323 12.5049 9.999 12.5049C10.0648 12.5049 10.1299 12.4919 10.1906 12.4667C10.2514 12.4415 10.3066 12.4046 10.353 12.358L14.353 8.35799C14.4469 8.26424 14.4997 8.13703 14.4998 8.00435C14.4999 7.87167 14.4473 7.74438 14.3535 7.65049C14.2597 7.55661 14.1325 7.50381 13.9999 7.50372C13.8672 7.50362 13.7399 7.55624 13.646 7.64999L9.999 11.297L6.353 7.64999C6.30651 7.60203 6.25087 7.56387 6.18939 7.53776C6.1279 7.51165 6.0618 7.49813 5.995 7.49799Z" fill="currentColor"/>
</svg>
`;
      uiRemove = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9995 9.5C14.1322 9.5 14.2594 9.5527 14.3532 9.64652C14.447 9.74033 14.4998 9.86758 14.4998 10.0003C14.4998 10.1329 14.447 10.2602 14.3532 10.354C14.2594 10.4478 14.1322 10.5005 13.9995 10.5005H6C5.86732 10.5005 5.74007 10.4478 5.64626 10.354C5.55244 10.2602 5.49975 10.1329 5.49975 10.0003C5.49975 9.86758 5.55244 9.74033 5.64626 9.64652C5.74007 9.5527 5.86732 9.5 6 9.5H13.9995Z" fill="currentColor"/>
</svg>
`;
      uiTriaDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7.505C6 7.227 6.22 7 6.5 7H13.5C13.5917 6.99977 13.6817 7.02476 13.7602 7.07224C13.8386 7.11972 13.9025 7.18787 13.9448 7.26922C13.9872 7.35057 14.0063 7.44199 14.0002 7.53349C13.994 7.62499 13.9628 7.71304 13.91 7.788L10.41 12.788C10.3639 12.854 10.3026 12.9079 10.2312 12.9452C10.1598 12.9824 10.0805 13.0018 10 13.0018C9.91949 13.0018 9.84018 12.9824 9.7688 12.9452C9.69742 12.9079 9.63608 12.854 9.59 12.788L6.09 7.788C6.03186 7.70505 6.00046 7.6063 6 7.505Z" fill="currentColor"/>
</svg>
`;
    }
  });

  // ../packages/ui-icons/lib/main.js
  var init_main4 = __esm({
    "../packages/ui-icons/lib/main.js"() {
      init_Icons();
    }
  });

  // ../packages/ui/lib/utils/dom.js
  var RowTypes, dom, dom_default;
  var init_dom = __esm({
    "../packages/ui/lib/utils/dom.js"() {
      init_main4();
      init_main3();
      init_cssClasses();
      (function(RowTypes2) {
        RowTypes2[RowTypes2["ui"] = 0] = "ui";
        RowTypes2[RowTypes2["group"] = 1] = "group";
        RowTypes2[RowTypes2["item"] = 2] = "item";
        RowTypes2[RowTypes2["button"] = 3] = "button";
        RowTypes2[RowTypes2["spacer"] = 4] = "spacer";
        RowTypes2[RowTypes2["info"] = 5] = "info";
        RowTypes2[RowTypes2["custom"] = 6] = "custom";
      })(RowTypes || (RowTypes = {}));
      dom = {
        createButton: (title, icon) => {
          const button = el("button");
          button.classList.add(CSS_UI.button.baseClass);
          const h3 = el("h3");
          h3.innerText = title;
          button.appendChild(h3);
          if (icon) {
            const iconWrapper = el("div");
            iconWrapper.innerHTML = icon;
            iconWrapper.classList.add(CSS_UI.button.icon);
            button.classList.add(CSS_UI.button.hasIcon);
            button.appendChild(iconWrapper);
          }
          return button;
        },
        createRow: ({ type, depth, title } = {
          type: RowTypes.ui,
          depth: 0
        }) => {
          let domEl = "div";
          if (type === RowTypes.ui)
            domEl = "div";
          if (type === RowTypes.group)
            domEl = "section";
          if (type === RowTypes.item)
            domEl = "fieldset";
          if (type === RowTypes.button)
            domEl = "fieldset";
          if (type === RowTypes.spacer)
            domEl = "div";
          if (type === RowTypes.info)
            domEl = "fieldset";
          if (type === RowTypes.custom)
            domEl = "fieldset";
          const row = el(domEl);
          row.setAttribute("ui-depth", `${depth}`);
          if (type === RowTypes.ui) {
            row.classList.add(CSS_UI.wrapper);
          }
          if (type === RowTypes.group) {
            const titleTab = el("header");
            dom.addIcon(titleTab);
            const h3 = el("h3");
            if (h3 && title) {
              h3.innerText = title;
              h3.title = title;
              titleTab.appendChild(h3);
            }
            row.appendChild(titleTab);
            const contentWrapper = el("div", CSS_UI.section.content);
            row.appendChild(contentWrapper);
          }
          if (type === RowTypes.item) {
            if (title) {
              const h4 = el("h4");
              h4.innerText = title;
              h4.title = title;
              row.appendChild(h4);
            }
            const contentWrapper = el("div", CSS_UI.content);
            row.appendChild(contentWrapper);
          }
          if (type === RowTypes.button) {
            if (title) {
              const button = dom.createButton(title);
              row.appendChild(button);
              row.classList.add(CSS_UI.row.hasButton);
            }
          }
          if (type === RowTypes.spacer) {
            row.classList.add(CSS_UI.spacer.baseClass);
          }
          if (type === RowTypes.info) {
            row.classList.add(CSS_UI.info.baseClass);
          }
          if (type === RowTypes.custom) {
            row.classList.add(CSS_UI.row.custom);
          }
          return row;
        },
        addIcon: (header, icon) => {
          const iconClass = CSS_UI.section.header.icon;
          const iconWrapper = header.querySelector(`.${iconClass}`) ? header.querySelector(`.${iconClass}`) : el("div", iconClass);
          if (isUndefined(icon)) {
            iconWrapper.classList.add(CSS_UI.section.header.chevron);
            icon = uiTriaDown;
          } else {
            iconWrapper.classList.remove(CSS_UI.section.header.chevron);
          }
          iconWrapper.innerHTML = icon;
          header.prepend(iconWrapper);
        }
      };
      dom_default = dom;
    }
  });

  // ../packages/ui/lib/partials/EventsManager.js
  var EventsManager;
  var init_EventsManager = __esm({
    "../packages/ui/lib/partials/EventsManager.js"() {
      init_main3();
      EventsManager = class {
        constructor() {
          this.subscribers = {};
          this.listeners = [];
        }
        addEventListeners() {
        }
        removeEventListeners() {
          while (this.listeners.length > 0) {
            this.removeEventListener(this.listeners[0]);
          }
        }
        addEventListener(event) {
          if (this.listeners.indexOf(event) > -1)
            return;
          this.listeners.push(event);
          event.target.addEventListener(event.type, event.callback);
        }
        removeEventListener(event) {
          if (this.listeners.indexOf(event) === -1)
            return;
          this.listeners.splice(this.listeners.indexOf(event), 1);
          event.target.removeEventListener(event.type, event.callback);
        }
        /**
        * @typedef {'change'} EventType
        * @typedef {'refresh'} EventType
        *
        * @description Available event types:
        * - change: Triggered when the value of the item or one of its children changes.
        * - refresh: Triggered right before the UI is refreshed.
        *
        * @param {EventType} eventType - The type of event to listen for.
        * @param {Function} callback - The callback function to call when the event occurs.
        * @returns {void}
        */
        on(event, callback) {
          if (!this.subscribers[event]) {
            this.subscribers[event] = [];
            const completeEvent = event + "Complete";
            this.subscribers[completeEvent] = [];
            this.subscribers[event].debounced = debounce(() => {
              this.emit(completeEvent);
            }, 100);
          }
          this.subscribers[event].push(callback);
        }
        emit(event, target) {
          if (this.subscribers[event]) {
            this.subscribers[event].forEach((subscriber) => subscriber(target ? target : this));
            if (this.subscribers[event].debounced) {
              this.subscribers[event].debounced();
            }
          }
        }
      };
    }
  });

  // ../packages/ui/lib/components/UIElement.js
  var UIElement;
  var init_UIElement = __esm({
    "../packages/ui/lib/components/UIElement.js"() {
      init_main3();
      init_EventsManager();
      init_dom();
      UIElement = class extends EventsManager {
        constructor(type, title) {
          super();
          this.type = type;
          this.title = title || "";
        }
        init(depth = 0) {
          this.depth = depth;
          this.beforeCreate();
          this.createDom();
          this.createContent();
          this.addEventListeners();
          this.afterCreate();
          this.preventPropagation();
        }
        preventPropagation() {
          const preventPropagationEventDown = {
            target: this.el,
            type: "keydown",
            callback: (e) => {
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          };
          this.addEventListener(preventPropagationEventDown);
          const preventPropagationEventUp = {
            target: this.el,
            type: "keyup",
            callback: (e) => {
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          };
          this.addEventListener(preventPropagationEventUp);
        }
        /**
        * Lifecycle
        */
        beforeCreate() {
        }
        afterCreate() {
        }
        // Create ROW
        createDom() {
          this.el = dom_default.createRow({
            type: this.type,
            depth: this.depth,
            title: this.title
          });
        }
        parentFold() {
          this.close();
        }
        // Populate ROW
        createContent() {
        }
        destroy() {
          var _a;
          this.removeEventListeners();
          (_a = this.panel) === null || _a === void 0 ? void 0 : _a.destroy();
          remove(this.el);
        }
        resize() {
        }
        /**
        * A method to refresh the item and all its children values.
        * Use this method when you change the value of an item outside of the UI to keep it in sync.
        */
        refresh() {
          var _a;
          (_a = this.panel) === null || _a === void 0 ? void 0 : _a.refresh();
        }
        close() {
        }
        open() {
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/Item.js
  var Item;
  var init_Item = __esm({
    "../packages/ui/lib/components/items/Item.js"() {
      init_main3();
      init_cssClasses();
      init_dom();
      init_UIElement();
      Item = class extends UIElement {
        constructor(params) {
          var _a, _b;
          const title = ((_a = params.params) === null || _a === void 0 ? void 0 : _a.title) || params.key.charAt(0).toUpperCase() + params.key.slice(1);
          super(RowTypes.item, title);
          this.view = "";
          this._refreshing = false;
          this.params = params.params;
          this.view = ((_b = this.params) === null || _b === void 0 ? void 0 : _b.view) || "";
          this.object = params.object;
          this.key = params.key;
        }
        init(depth = 0) {
          super.init(depth);
          this._refreshing = true;
          this.setValue(this.object[this.key]);
          this._refreshing = false;
        }
        setValue(value) {
          this.value = value;
          if (isObject(this.object[this.key])) {
            for (const key in this.object[this.key]) {
              if (isUndefined(this.value) || isNull(this.value))
                continue;
              if (isUndefined(this.value[key]))
                continue;
              else
                this.object[this.key][key] = this.value[key];
            }
          } else
            this.object[this.key] = this.value;
          if (this.value !== void 0 && !this._refreshing) {
            this.emit("change");
            this.emit("__childrenChange");
          }
          this.refreshDom();
        }
        /**
         * Dom
         */
        createDom() {
          super.createDom();
          this.content = this.el.querySelector(`.${CSS_UI.content}`);
          this.el.classList.add(`${CSS_UI.baseClass}-${this.view}`);
        }
        refreshDom() {
        }
        refresh() {
          super.refresh();
          this.emit("refresh");
          this._refreshing = true;
          this.setValue(this.object[this.key]);
          this._refreshing = false;
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/BooleanItem.js
  var c, BooleanItem;
  var init_BooleanItem = __esm({
    "../packages/ui/lib/components/items/customItems/BooleanItem.js"() {
      init_main3();
      init_cssClasses();
      init_Item();
      c = {
        type: "boolean",
        input: "_ui-toggle"
      };
      BooleanItem = class extends Item {
        addEventListeners() {
          const clickEvent = {
            target: this.el,
            type: "click",
            callback: (e) => {
              this.setValue(!this.value);
            }
          };
          this.addEventListener(clickEvent);
        }
        createContent() {
          const wrapper = el("div", c.input);
          const thumb = el("div");
          wrapper.appendChild(thumb);
          this.content.appendChild(wrapper);
        }
        refreshDom() {
          this.el.classList.toggle(CSS_UI.utility.active, this.value);
          super.refreshDom();
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/NumberItem.js
  var c2, NumberItem;
  var init_NumberItem = __esm({
    "../packages/ui/lib/components/items/customItems/NumberItem.js"() {
      init_main3();
      init_main4();
      init_cssClasses();
      init_Item();
      c2 = {
        type: "number",
        input: "_ui-number-input",
        buttons: "_ui-number-buttons",
        btnIncrease: "_ui-number-btn-increase",
        btnDecrease: "_ui-number-btn-decrease"
      };
      NumberItem = class extends Item {
        constructor() {
          super(...arguments);
          this.inputElements = [];
          this.max = null;
          this.min = null;
          this.step = 0.01;
          this.originalDataType = "number";
          this.isIncreasing = false;
          this.isDecreasing = false;
          this.limitNumber = (value) => {
            let tmp = value;
            if (this.max)
              tmp = Math.min(tmp, this.max);
            if (this.min)
              tmp = Math.max(tmp, this.min);
            const decimals = this.getDecimals();
            tmp = parseFloat(tmp.toFixed(decimals));
            return tmp;
          };
        }
        getDecimals() {
          const decimals = this.step.toString().split(".")[1];
          return decimals ? decimals.length : 0;
        }
        addEventListeners() {
          for (const inputElement of this.inputElements) {
            const change = {
              target: inputElement.input,
              type: "change",
              callback: (e) => {
                let val = inputElement.input.valueAsNumber;
                val = isNaN(val) ? 0 : val;
                inputElement.value = val;
                this.setValue();
              }
            };
            this.addEventListener(change);
            const clickIncrease = {
              target: inputElement.buttonIncrease,
              type: "click",
              callback: (e) => {
                inputElement.value += this.step;
                this.setValue();
              }
            };
            this.addEventListener(clickIncrease);
            const clickDecrease = {
              target: inputElement.buttonDecrease,
              type: "click",
              callback: (e) => {
                inputElement.value -= this.step;
                this.setValue();
              }
            };
            this.addEventListener(clickDecrease);
          }
        }
        setValue(_value) {
          if (_value) {
            this.originalDataType = getType(_value);
            super.setValue(_value);
            return;
          }
          const valueForOutput = this.convertArrayToOriginal();
          super.setValue(valueForOutput);
        }
        refreshDom() {
          const values = this.convertOriginalToArray();
          for (let i = 0; i < this.inputElements.length; i++) {
            this.inputElements[i].value = values[i];
            this.inputElements[i].input.valueAsNumber = this.limitNumber(values[i]);
          }
        }
        createInputs(value) {
          this.inputElements = [];
          if (isNumber(value))
            this.inputElements.push(this.createInput(value));
          else if (isArray(value)) {
            for (const item of value) {
              this.inputElements.push(this.createInput(item));
            }
          } else if (isObject(value)) {
            for (const key in value) {
              if (!isNumber(value[key]))
                continue;
              const item = this.createInput(value[key]);
              item.placeholder = key;
              this.inputElements.push(item);
            }
          }
        }
        createInput(value) {
          const inputElement = {
            value,
            placeholder: "Value",
            wrapper: null,
            input: null,
            buttonIncrease: null,
            buttonDecrease: null
          };
          this.createInputContent(inputElement);
          return inputElement;
        }
        createInputContent(inputElement) {
          inputElement.wrapper = el("div", c2.input);
          inputElement.input = el("input");
          ;
          inputElement.input.type = "number";
          inputElement.input.setAttribute("tabindex", "1");
          inputElement.input.placeholder = inputElement.placeholder;
          inputElement.input.classList.add(CSS_UI.item);
          if (this.min)
            inputElement.input.min = this.min.toString();
          if (this.max)
            inputElement.input.max = this.max.toString();
          if (this.step)
            inputElement.input.step = this.step.toString();
          inputElement.wrapper.appendChild(inputElement.input);
          const btns = el("div", c2.buttons);
          inputElement.buttonIncrease = el("button", c2.btnIncrease);
          inputElement.buttonIncrease.setAttribute("tabindex", "-1");
          inputElement.buttonIncrease.innerHTML = uiDownarrowHlt;
          inputElement.buttonDecrease = el("button", c2.btnDecrease);
          inputElement.buttonIncrease.setAttribute("tabindex", "-1");
          inputElement.buttonDecrease.innerHTML = uiDownarrowHlt;
          btns.appendChild(inputElement.buttonIncrease);
          btns.appendChild(inputElement.buttonDecrease);
          inputElement.wrapper.appendChild(btns);
          if (this.inputElements.length > 2) {
            inputElement.buttonIncrease.classList.add(`.${CSS_UI.utility.hidden}`);
            inputElement.buttonDecrease.classList.add(`.${CSS_UI.utility.hidden}`);
          }
          this.content.appendChild(inputElement.wrapper);
        }
        createContent() {
          this.max = this.params.max ? this.params.max : null;
          this.min = this.params.min ? this.params.min : null;
          this.step = this.params.step ? this.params.step : this.step;
          this.createInputs(this.object[this.key]);
        }
        convertOriginalToArray() {
          switch (this.originalDataType) {
            case "number":
              return [this.object[this.key]];
            case "array":
              return this.object[this.key];
            case "object":
              const values = [];
              for (const key in this.object[this.key]) {
                if (!isNumber(this.object[this.key][key]))
                  continue;
                values.push(this.object[this.key][key]);
              }
              return values;
          }
        }
        convertArrayToOriginal() {
          let inputsValue = [];
          for (const inputElement of this.inputElements)
            inputsValue.push(inputElement.value);
          let valueForOutput = null;
          if (this.originalDataType === "number")
            valueForOutput = inputsValue[0];
          else if (this.originalDataType === "array")
            valueForOutput = inputsValue;
          else if (this.originalDataType === "object") {
            valueForOutput = {};
            let i = 0;
            for (const key in this.object[this.key]) {
              if (!isNumber(this.object[this.key][key]))
                continue;
              valueForOutput[key] = inputsValue[i];
              i++;
            }
          }
          return valueForOutput;
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/StringItem.js
  var StringItem;
  var init_StringItem = __esm({
    "../packages/ui/lib/components/items/customItems/StringItem.js"() {
      init_main3();
      init_main7();
      init_Item();
      StringItem = class extends Item {
        constructor() {
          super(...arguments);
          this.input = el("input");
        }
        addEventListeners() {
          const change = {
            target: this.input,
            type: "change",
            callback: () => {
              this.setValue(this.input.value);
            }
          };
          this.addEventListener(change);
        }
        createContent() {
          this.input = el("input");
          this.input.setAttribute("tabindex", "1");
          this.input.placeholder = "String";
          this.input.type = "text";
          this.input.classList.add(CSS_UI.item);
          this.content.appendChild(this.input);
        }
        setValue(value) {
          if (isNull(value) || isUndefined(value)) {
            value = "String";
          }
          super.setValue(value);
        }
        refreshDom() {
          this.input.value = this.value;
          super.refreshDom();
        }
        destroy() {
          remove(this.input);
          super.destroy();
        }
      };
    }
  });

  // ../packages/color/lib/utils.js
  function componentToHex(c7) {
    const hex = c7.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  function rgbToHex(color) {
    return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
  }
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }
  function rgbToHsb(color) {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s * 100, b: v * 100 };
  }
  function hsbToRgb(color) {
    let h = color.h, s = color.s, b = color.b;
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return {
      r: Math.round(255 * f(5)),
      g: Math.round(255 * f(3)),
      b: Math.round(255 * f(1))
    };
  }
  function hsbToHex(color) {
    const rgb = hsbToRgb(color);
    return rgbToHex(rgb);
  }
  function fixHex(color) {
    let fixedColor = color;
    if (fixedColor.substring(0, 1) !== "#") {
      fixedColor = "#" + fixedColor;
    }
    fixedColor = fixedColor.toUpperCase();
    fixedColor = fixedColor.substring(0, 7);
    if (fixedColor.length === 4) {
      fixedColor = "#" + fixedColor[1] + fixedColor[1] + fixedColor[2] + fixedColor[2] + fixedColor[3] + fixedColor[3];
    }
    while (fixedColor.length < 7) {
      fixedColor += "F";
    }
    fixedColor = fixedColor.replace(/[^A-F0-9]/g, (c7) => {
      switch (c7) {
        case "#":
          return "#";
        case "G":
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "O":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
          return "F";
        default:
          return "0";
      }
    });
    return fixedColor;
  }
  var init_utils = __esm({
    "../packages/color/lib/utils.js"() {
    }
  });

  // ../packages/color/lib/canvas-utils.js
  function drawColorPickerBar(canvas, x, y, width, height) {
    const _x = x !== void 0 ? x : 0;
    const _y = y !== void 0 ? y : 0;
    const w = width !== void 0 ? width : canvas.width;
    const h = height !== void 0 ? height : canvas.height;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < w; i++) {
      const dx = _x + i;
      const angle = 360 * i / w;
      ctx.fillStyle = `hsl(${angle}, 100%, 50%)`;
      ctx.fillRect(dx, _y, 1, h);
    }
  }
  function drawColorPickerSL(canvas, angle, x, y, width, height) {
    const _x = x !== void 0 ? x : 0;
    const _y = y !== void 0 ? y : 0;
    const w = width !== void 0 ? width : canvas.width;
    const h = height !== void 0 ? height : canvas.height;
    const ctx = canvas.getContext("2d");
    const sw = w / 100;
    const sh = h / 100;
    for (let i = 0; i <= 100; i++) {
      for (let j = 0; j <= 100; j++) {
        const hex = hsbToHex({
          h: angle,
          s: j,
          b: i
        });
        ctx.fillStyle = hex;
        ctx.fillRect(_x + w * j / 100, _y + h - h * i / 100, sw, sh);
      }
    }
  }
  var init_canvas_utils = __esm({
    "../packages/color/lib/canvas-utils.js"() {
      init_utils();
    }
  });

  // ../packages/color/lib/main.js
  var init_main5 = __esm({
    "../packages/color/lib/main.js"() {
      init_utils();
      init_canvas_utils();
    }
  });

  // ../packages/ui/node_modules/@fils/math/lib/Random.js
  var import_mersenne2;
  var init_Random2 = __esm({
    "../packages/ui/node_modules/@fils/math/lib/Random.js"() {
      import_mersenne2 = __toESM(require_mersenne());
    }
  });

  // ../packages/ui/node_modules/@fils/math/lib/MathUtils.js
  var MathUtils2;
  var init_MathUtils2 = __esm({
    "../packages/ui/node_modules/@fils/math/lib/MathUtils.js"() {
      MathUtils2 = class {
        static clamp(v, min, max) {
          return Math.min(max, Math.max(min, v));
        }
        static lerp(v1, v2, alpha) {
          return v1 + (v2 - v1) * alpha;
        }
        static mix(v1, v2, alpha) {
          return MathUtils2.lerp(v1, v2, alpha);
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
        static map(x, a, b, c7, d) {
          return (x - a) * (d - c7) / (b - a) + c7;
        }
        static fract(n) {
          return n % 1;
        }
      };
    }
  });

  // ../packages/ui/node_modules/@fils/math/lib/Vector.js
  var init_Vector2 = __esm({
    "../packages/ui/node_modules/@fils/math/lib/Vector.js"() {
      init_MathUtils2();
    }
  });

  // ../packages/ui/node_modules/@fils/math/lib/main.js
  var init_main6 = __esm({
    "../packages/ui/node_modules/@fils/math/lib/main.js"() {
      init_Random2();
      init_MathUtils2();
      init_Vector2();
    }
  });

  // ../packages/ui/lib/components/UIPanel.js
  var c3, UIPanel;
  var init_UIPanel = __esm({
    "../packages/ui/lib/components/UIPanel.js"() {
      init_main3();
      init_cssClasses();
      init_main7();
      c3 = {
        left: "_ui-panel-left",
        right: "_ui-panel-right",
        dropdown: "_ui-panel-dropdown"
      };
      UIPanel = class extends EventsManager {
        constructor(parent, dropdownFrom) {
          super();
          this.created = false;
          this.spacing = 0;
          this.parent = parent;
          this.dropdownFrom = dropdownFrom ? dropdownFrom : null;
          this.spacing = 3;
        }
        addEventListeners() {
          const event = {
            type: "keydown",
            target: window,
            callback: (e) => {
              if (!this.created)
                return;
              if (e.key === "Escape") {
                this.parent.close();
              }
            }
          };
          this.addEventListener(event);
        }
        createPanelContent() {
        }
        positionPanel() {
          const panelRect = this.el.getBoundingClientRect();
          const uiRect = this.uiWrapper.getBoundingClientRect();
          if (!isNull(this.dropdownFrom)) {
            this.el.classList.add(c3.dropdown);
            const dropdownFromRect = this.dropdownFrom.getBoundingClientRect();
            const top2 = dropdownFromRect.top + dropdownFromRect.height - uiRect.top;
            const left = dropdownFromRect.left - uiRect.left;
            this.el.style.top = `${top2 + this.spacing}px`;
            this.el.style.left = `${left}px`;
            this.el.style.width = `${dropdownFromRect.width}px`;
            return;
          }
          const parentRect = this.parent.el.getBoundingClientRect();
          const top = Math.max(parentRect.top - uiRect.top - panelRect.height * 0.5, 0);
          this.el.style.top = `${top}px`;
          if (uiRect.left > window.innerWidth * 0.5) {
            this.el.classList.add(c3.left);
            this.el.style.left = `-${uiRect.width + this.spacing}px`;
          } else {
            this.el.classList.add(c3.right);
            this.el.style.right = `-${uiRect.width + this.spacing}px`;
          }
        }
        create() {
          this.uiWrapper = this.parent.el.closest(`.${CSS_UI.wrapper}`);
          const parentZIndex = getComputedStyle(this.uiWrapper).getPropertyValue("z-index");
          this.uiWrapper.style.zIndex = `${parseInt(parentZIndex) + 1}`;
          if (this.created)
            return;
          this.created = true;
          this.el = el("div", CSS_UI.panel.baseClass, this.uiWrapper);
          this.createPanelContent();
          this.positionPanel();
          const parentDomStyle = getComputedStyle(this.parent.el.closest("section"));
          const bg0 = parentDomStyle.getPropertyValue("--section-bg-0");
          const bg1 = parentDomStyle.getPropertyValue("--section-bg-1");
          this.el.style.setProperty("--section-bg-0", bg0);
          this.el.style.setProperty("--section-bg-1", bg1);
          this.el.classList.add(CSS_UI.utility.loaded);
          setTimeout(() => this.el.classList.add(CSS_UI.utility.active), 10);
          this.addEventListeners();
        }
        destroy() {
          if (!this.created)
            return;
          this.created = false;
          this.removeEventListeners();
          this.uiWrapper.style.zIndex = ``;
          remove(this.el);
        }
        onChange() {
        }
        refresh() {
          if (!this.created)
            return;
          this.destroy();
          this.create();
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/ColorItem.js
  var c4, ColorPanel, ColorItem;
  var init_ColorItem = __esm({
    "../packages/ui/lib/components/items/customItems/ColorItem.js"() {
      init_main5();
      init_main6();
      init_main3();
      init_main7();
      init_UIPanel();
      init_Item();
      c4 = {
        type: "color",
        input: "_ui-color-input",
        box: "_ui-color-box",
        view: "_ui-color-view",
        info: "_ui-color-info",
        canvas: "_ui-color-canvas",
        target: "_ui-color-target",
        dragger: "_ui-color-dragger"
      };
      ColorPanel = class extends UIPanel {
        constructor() {
          super(...arguments);
          this.view = el("div");
          this.info = el("div");
          this.canvas1 = el("canvas");
          this.canvas2 = el("canvas");
          this.tmpPosition = { x: 0, y: 0 };
          this.position = { x: 0, y: 0 };
          this.tmpX = 0;
          this.x = 0;
          this.width = 0;
          this.color = { h: 0, s: 0, b: 0 };
          this.target = el("div");
          this.dragger = el("div");
          this.dragging1 = false;
          this.dragging2 = false;
          this.needsUpdate = false;
        }
        createPanelContent() {
          this.el.classList.add(`${CSS_UI.panel.baseClass}-${this.parent.view}`);
          this.view = el("div", c4.view, this.el);
          this.info = el("div", c4.info, this.el);
          this.target = el("div", c4.target, this.view);
          this.dragger = el("div", c4.dragger, this.info);
          this.canvas1 = el("canvas", c4.canvas, this.view);
          this.canvas2 = el("canvas", c4.canvas, this.info);
          this.canvas1.width = this.canvas1.height = 200;
          this.canvas2.width = 200;
          this.canvas2.height = 20;
          setTimeout(() => this.reverseUpdate(), 10);
          const raf = () => {
            if (!this.created)
              return;
            this.width = this.view.getBoundingClientRect().width;
            this.position.x = MathUtils2.lerp(this.position.x, this.tmpPosition.x, 0.9);
            this.position.y = MathUtils2.lerp(this.position.y, this.tmpPosition.y, 0.9);
            this.x = MathUtils2.lerp(this.x, this.tmpX, 0.9);
            if (this.dragging1)
              this.updateCanvas1();
            if (this.dragging2)
              this.updateCanvas2();
            requestAnimationFrame(raf);
          };
          raf();
        }
        create() {
          super.create();
          setTimeout(() => this.reverseUpdate(), 10);
        }
        addEventListeners() {
          const c1Mousedown = {
            target: this.canvas1,
            type: "mousedown",
            callback: (e) => {
              this.dragging1 = true;
            }
          };
          this.addEventListener(c1Mousedown);
          const c2Mousedown = {
            target: this.canvas2,
            type: "mousedown",
            callback: (e) => {
              this.dragging2 = true;
            }
          };
          this.addEventListener(c2Mousedown);
          const mousemove = {
            target: window,
            type: "mousemove",
            callback: (e) => {
              if (!this.created)
                return;
              if (!this.dragging1 && !this.dragging2)
                return;
              this.tmpPosition = { x: e.pageX, y: e.pageY };
              this.tmpX = e.pageX;
              this.needsUpdate = true;
            }
          };
          this.addEventListener(mousemove);
          const mouseup = {
            target: window,
            type: "mouseup",
            callback: (e) => {
              var _a;
              if (!this.created)
                return;
              this.dragging1 = false;
              this.dragging2 = false;
              if (this.needsUpdate)
                this.parent.setValue(hsbToHex(this.color));
              const target = e.target;
              if ((_a = this.el) === null || _a === void 0 ? void 0 : _a.contains(target))
                return;
              if (this.parent.el.contains(target))
                return;
              this.destroy();
            }
          };
          this.addEventListener(mouseup);
          const keydown = {
            target: window,
            type: "keydown",
            callback: (e) => {
              if (!this.created)
                return;
              if (e.key === "Escape") {
                this.destroy();
              }
            }
          };
          this.addEventListener(keydown);
        }
        reverseUpdate() {
          this.color = rgbToHsb(hexToRgb(this.parent.value));
          let x = 0;
          let y = 0;
          x = this.color.s * this.width / 100;
          y = this.width - this.color.b * this.width / 100;
          this.target.style.left = `${x}px`;
          this.target.style.top = `${y}px`;
          x = this.color.h * this.width / 360;
          this.dragger.style.left = `${x}px`;
          drawColorPickerSL(this.canvas1, this.color.h);
          drawColorPickerBar(this.canvas2);
        }
        update() {
          drawColorPickerSL(this.canvas1, this.color.h);
          drawColorPickerBar(this.canvas2);
          this.parent.setValue(hsbToHex(this.color));
        }
        updateCanvas1() {
          const r = this.canvas1.getBoundingClientRect();
          const x = Math.min(Math.max(this.position.x - r.left, 0), this.width);
          const y = Math.min(Math.max(this.position.y - r.top, 0), this.width);
          this.color.s = Math.round(100 * x / this.width);
          this.color.b = 100 - Math.round(100 * y / this.width);
          this.target.style.left = `${MathUtils2.map(x, 0, this.width, 0, 100)}%`;
          this.target.style.top = `${MathUtils2.map(y, 0, this.width, 0, 100)}%`;
          this.update();
        }
        updateCanvas2() {
          const r = this.canvas2.getBoundingClientRect();
          const x = Math.min(Math.max(this.x - r.left, 1), this.width - 1);
          this.color.h = 360 * x / this.width;
          this.dragger.style.left = `${x}px`;
          this.update();
        }
      };
      ColorItem = class extends Item {
        constructor() {
          super(...arguments);
          this.input = el("input");
          this.colorBox = el("div");
        }
        afterCreate() {
          this.panel = new ColorPanel(this, this.content);
        }
        open() {
          this.panel.create();
        }
        close() {
          this.panel.destroy();
        }
        addEventListeners() {
          const inputChangeEvent = {
            target: this.input,
            type: "change",
            callback: (e) => {
              this.setValue(this.input.value);
            }
          };
          const colorBoxClick = {
            target: this.colorBox,
            type: "click",
            callback: (e) => {
              if (!this.panel.created)
                this.open();
              else
                this.close();
            }
          };
          const windowKeydownEvent = {
            target: window,
            type: "keydown",
            callback: (e) => {
              if (e.key === "Enter") {
                this.setValue(this.input.value);
                this.input.blur();
              }
            }
          };
          this.addEventListener(inputChangeEvent);
          this.addEventListener(colorBoxClick);
          this.addEventListener(windowKeydownEvent);
        }
        createContent() {
          this.colorBox = el("div");
          this.colorBox.classList.add(c4.box);
          this.content.appendChild(this.colorBox);
          this.input = el("input");
          this.input.setAttribute("tabindex", "1");
          this.input.type = "text";
          this.input.classList.add(c4.input);
          this.input.classList.add(CSS_UI.item);
          this.content.appendChild(this.input);
        }
        setValue(value) {
          if (value.startsWith("0x")) {
            value = value.replace("0x", "#");
          }
          if (isNull(value) || isUndefined(value) || value === "") {
            value = "#FFFFFF";
          }
          value = fixHex(value);
          super.setValue(value);
        }
        visualUpdate(value) {
          const valueUpper = value.toUpperCase();
          this.colorBox.style.setProperty("--active-color", valueUpper);
          this.input.value = valueUpper;
        }
        refreshDom() {
          this.colorBox.style.setProperty("--active-color", this.value);
          this.input.value = this.value;
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/RangeItem.js
  var c5, RangeItem;
  var init_RangeItem = __esm({
    "../packages/ui/lib/components/items/customItems/RangeItem.js"() {
      init_main6();
      init_main3();
      init_cssClasses();
      init_Item();
      c5 = {
        type: "range",
        input: "_ui-range-input",
        track: "_ui-range-track",
        overExpose: "_ui-range-overexpose",
        overExposeMin: "_ui-range-overexpose-min",
        overExposeMax: "_ui-range-overexpose-max",
        thumb: "_ui-range-thumb"
      };
      RangeItem = class extends Item {
        constructor() {
          super(...arguments);
          this.max = 0;
          this.min = 1;
          this.step = 0.01;
          this.limitNumber = (value) => {
            const D4 = this.getRounding();
            if (this.max)
              value = Math.min(value, this.max);
            if (this.min)
              value = Math.max(value, this.min);
            const tmp = (Math.round(value * D4) / D4).toFixed(this.getDecimals());
            return parseFloat(tmp);
          };
        }
        getDecimals() {
          if (this._decimals)
            return this._decimals;
          const decimals = this.step.toString().split(".")[1];
          this._decimals = decimals && decimals.length ? decimals.length : 0;
          return this._decimals;
        }
        getRounding() {
          const d = this.getDecimals();
          const D4 = Math.pow(10, d);
          return D4;
        }
        getStringDecimals(value) {
          const D4 = this.getRounding();
          return (Math.round(value * D4) / D4).toFixed(this.getDecimals());
        }
        addEventListeners() {
          const inputChange = {
            target: this.input,
            type: "change",
            callback: (e) => {
              this.setValue(this.input.valueAsNumber);
            }
          };
          this.addEventListener(inputChange);
          let dragging = false;
          let x = 0;
          let originalValue = 0;
          const mouseDown = (target, newX) => {
            const t = target;
            if (t != this.thumb)
              return;
            dragging = true;
            this.thumb.classList.add(CSS_UI.utility.grab);
            x = newX;
            const { width } = this.range.getBoundingClientRect();
            originalValue = MathUtils2.map(this.mappedValue, 0, 1, 0, width);
          };
          const mouseMove = (newX) => {
            if (!dragging)
              return;
            const movementDistance = originalValue + (newX - x);
            const { width } = this.range.getBoundingClientRect();
            const newValueMapped = MathUtils2.clamp(MathUtils2.map(movementDistance, 0, width, 0, 1), 0, 1);
            const newValue = MathUtils2.map(newValueMapped, 0, 1, this.min, this.max);
            this.setValue(newValue);
          };
          const mouseClick = (e) => {
            const t = e.target;
            if (t === this.thumb)
              return;
            const { left, width } = this.range.getBoundingClientRect();
            const newPosition = e.clientX - left;
            const newValueMapped = MathUtils2.clamp(MathUtils2.map(newPosition, 0, width, 0, 1), 0, 1);
            const newValue = MathUtils2.map(newValueMapped, 0, 1, this.min, this.max);
            this.setValue(newValue);
          };
          const reset = () => {
            if (!dragging)
              return;
            dragging = false;
            x = 0;
            this.thumb.classList.remove(CSS_UI.utility.grab);
          };
          const rangeClick = {
            target: this.range,
            type: "click",
            callback: (e) => mouseClick(e)
          };
          this.addEventListener(rangeClick);
          const rangeMouseDown = {
            target: this.range,
            type: "mousedown",
            callback: (e) => mouseDown(e.target, e.clientX)
          };
          this.addEventListener(rangeMouseDown);
          const rangeTouchStart = {
            target: this.range,
            type: "touchstart",
            callback: (e) => mouseDown(e.target, e.touches[0].clientX)
          };
          this.addEventListener(rangeTouchStart);
          const windowMouseMove = {
            target: window,
            type: "mousemove",
            callback: (e) => mouseMove(e.clientX)
          };
          this.addEventListener(windowMouseMove);
          const windowTouchMove = {
            target: window,
            type: "touchmove",
            callback: (e) => mouseMove(e.touches[0].clientX)
          };
          this.addEventListener(windowTouchMove);
          const windowMouseUp = {
            target: window,
            type: "mouseup",
            callback: (e) => reset()
          };
          this.addEventListener(windowMouseUp);
          const windowTouchEnd = {
            target: window,
            type: "touchend",
            callback: (e) => reset()
          };
          this.addEventListener(windowTouchEnd);
        }
        get mappedValue() {
          return MathUtils2.clamp(MathUtils2.map(this.value, this.min, this.max, 0, 1), 0, 1);
        }
        createContent() {
          this.max = this.params.max ? this.params.max : this.max;
          this.min = this.params.min ? this.params.min : this.min;
          this.step = this.params.step ? this.params.step : this.step;
          this.content.innerHTML = `
			<div class="${c5.input}">
				<div class="${c5.track}"></div>
				<div class="${c5.overExpose} ${c5.overExposeMin}"></div>
				<div class="${c5.overExpose} ${c5.overExposeMax}"></div>
				<div class="${c5.thumb}"></div>
			</div>
		`;
          this.input = el("input");
          this.input.type = "number";
          this.input.setAttribute("tabindex", "1");
          this.input.placeholder = "Value";
          this.input.classList.add(CSS_UI.item);
          if (this.min)
            this.input.setAttribute("min", this.min.toString());
          if (this.max)
            this.input.setAttribute("max", this.max.toString());
          if (this.step)
            this.input.setAttribute("step", this.step.toString());
          this.content.appendChild(this.input);
          this.range = this.content.querySelector(`.${c5.input}`);
          this.thumb = this.content.querySelector(`.${c5.thumb}`);
          this.setUpOverExpose();
        }
        setUpOverExpose() {
          const overExpose = this.params.overExpose || [0, 0];
          let limits = [0, 0];
          if (!isArray(overExpose))
            limits = [overExpose, overExpose];
          else
            limits = overExpose;
          this.min = this.params.min ? this.params.min - limits[0] : limits[0];
          this.max = this.params.max ? this.params.max + limits[1] : limits[1];
          const overExposeEls = this.content.querySelectorAll(`.${c5.overExpose}`);
          const distance = Math.abs(this.min - this.max);
          const left = MathUtils2.map(limits[0], 0, distance, 0, 1);
          const right = MathUtils2.map(limits[1], 0, distance, 0, 1);
          overExposeEls[0].style.setProperty("--size", `${left}`);
          overExposeEls[1].style.setProperty("--size", `${right}`);
        }
        updateRange() {
          this.range.style.setProperty("--value", `${this.mappedValue}`);
        }
        updateInput() {
          this.input.value = this.getStringDecimals(this.value);
        }
        setValue(value) {
          value = this.limitNumber(value);
          super.setValue(value);
        }
        refreshDom() {
          this.updateInput();
          this.updateRange();
          super.refreshDom();
        }
        destroy() {
          remove(this.input);
          remove(this.range);
          super.destroy();
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/SelectItem.js
  var c6, SelectPanel, SelectItem;
  var init_SelectItem = __esm({
    "../packages/ui/lib/components/items/customItems/SelectItem.js"() {
      init_main4();
      init_main3();
      init_cssClasses();
      init_UIPanel();
      init_Item();
      c6 = {
        type: "select",
        input: "_ui-select-input",
        label: "_ui-select-label",
        open: "_ui-select-open",
        search: "_ui-panel-select-search",
        searchInput: "_ui-panel-select-search-input"
      };
      SelectPanel = class extends UIPanel {
        constructor() {
          super(...arguments);
          this.enableSearch = false;
          this.search = el("div");
          this.searchInput = el("input");
          this.optionNone = el("div");
          this.options = [];
        }
        sortOptions() {
          const parentContent = this.parent.params.options;
          this.options = Object.keys(parentContent).map((key) => {
            const div = el("div", CSS_UI.select.option);
            const p = el("p");
            p.innerHTML = key;
            div.appendChild(p);
            this.el.appendChild(div);
            const value = parentContent[key];
            if (this.parent.value === value)
              div.classList.add(CSS_UI.utility.active);
            const click = {
              target: div,
              type: "click",
              callback: (e) => {
                this.parent.setValue(value);
                this.parent.close();
              }
            };
            this.addEventListener(click);
            return {
              key,
              value,
              dom: div
            };
          });
        }
        createPanelContent() {
          if (this.enableSearch)
            this.createSearch();
          this.sortOptions();
          this.el.classList.add(CSS_UI.select.panel);
          this.optionNone = el("div", CSS_UI.select.optionNone);
          const p = el("p");
          p.innerHTML = "No options found";
          this.optionNone.appendChild(p);
          this.el.appendChild(this.optionNone);
          if (this.options.length > 0)
            this.optionNone.classList.add(CSS_UI.utility.hidden);
          setTimeout(() => this.searchInput.focus(), 10);
        }
        searchOptions() {
          const search = this.searchInput.value.toLowerCase();
          this.optionNone.classList.remove(CSS_UI.utility.hidden);
          this.options.map((option) => {
            if (option.key.toLowerCase().indexOf(search) >= 0 || String(option.value).toLowerCase().indexOf(search) >= 0 || search === "") {
              option.dom.classList.remove(CSS_UI.utility.hidden);
              this.optionNone.classList.add(CSS_UI.utility.hidden);
            } else {
              option.dom.classList.add(CSS_UI.utility.hidden);
            }
          });
        }
        createSearch() {
          this.search = el("div", c6.search, this.el);
          this.search.classList.add(CSS_UI.select.optionButton);
          this.searchInput = el("input", c6.searchInput);
          this.searchInput.setAttribute("tabindex", "1");
          this.searchInput.placeholder = "Search";
          this.searchInput.type = "text";
          this.search.appendChild(this.searchInput);
          this.el.appendChild(this.search);
          const input = {
            target: this.searchInput,
            type: "input",
            callback: (e) => {
              this.searchOptions();
            }
          };
          this.addEventListener(input);
        }
      };
      SelectItem = class extends Item {
        constructor() {
          super(...arguments);
          this.options = {};
          this.input = el("div");
          this.label = el("div");
          this.activeOption = el("div");
        }
        afterCreate() {
          this.panel = new SelectPanel(this, this.content);
        }
        addEventListeners() {
          const click = {
            target: this.input,
            type: "click",
            callback: () => {
              if (!this.panel.created)
                this.open();
              else
                this.close();
            }
          };
          this.addEventListener(click);
        }
        open() {
          this.panel.create();
          this.el.classList.add(c6.open);
        }
        close() {
          this.el.classList.remove(c6.open);
          this.panel.destroy();
        }
        createContent() {
          this.input = el("div", c6.input, this.content);
          this.input.classList.add(CSS_UI.item);
          this.input.innerHTML = uiDownarrowHlt;
          this.label = el("p", c6.label, this.input);
        }
        setValue(value) {
          function findKeyByValue(obj, value2) {
            for (let key in obj) {
              if (obj[key] === value2) {
                return key;
              }
            }
            return null;
          }
          const label = findKeyByValue(this.params.options, value);
          this.label.innerHTML = isNull(value) || isUndefined(value) ? "Select..." : label;
          super.setValue(value);
        }
      };
    }
  });

  // ../packages/ui/lib/components/items/customItems/UploadItem.js
  var UploadItem;
  var init_UploadItem = __esm({
    "../packages/ui/lib/components/items/customItems/UploadItem.js"() {
      init_main3();
      init_main4();
      init_cssClasses();
      init_dom();
      init_Item();
      UploadItem = class extends Item {
        constructor() {
          super(...arguments);
          this.buttonTitle = "";
          this.uploadButton = el("div");
          this.removeUploadButton = el("div");
          this.input = el("input");
        }
        addEventListeners() {
          const click = {
            target: this.uploadButton,
            type: "click",
            callback: () => {
              this.input.click();
            }
          };
          this.addEventListener(click);
          const change = {
            target: this.input,
            type: "change",
            callback: () => {
              const file = this.input && this.input.files && this.input.files[0] ? this.input.files[0] : null;
              if (!file)
                return;
              this.removeUploadButton.querySelector("h3").innerText = file.name;
              this.removeUploadButton.classList.remove(`${CSS_UI.utility.hidden}`);
              this.uploadButton.classList.add(`${CSS_UI.utility.hidden}`);
              this.setValue(file);
            }
          };
          this.addEventListener(change);
          const removeClick = {
            target: this.removeUploadButton,
            type: "click",
            callback: (e) => {
              this.removeUploadButton.classList.add(`${CSS_UI.utility.hidden}`);
              this.uploadButton.classList.remove(`${CSS_UI.utility.hidden}`);
              this.setValue(null);
            }
          };
          this.addEventListener(removeClick);
        }
        destroy() {
          remove(this.input);
          remove(this.uploadButton);
          remove(this.removeUploadButton);
          super.destroy();
        }
        createContent() {
          this.buttonTitle = this.params.text ? this.params.text : this.title;
          this.uploadButton = dom_default.createButton(this.buttonTitle, this.params.icon);
          this.uploadButton.setAttribute("tabindex", "1");
          this.uploadButton.classList.add(CSS_UI.item);
          this.content.appendChild(this.uploadButton);
          this.removeUploadButton = dom_default.createButton("", uiRemove);
          this.removeUploadButton.classList.add(CSS_UI.utility.hidden);
          this.removeUploadButton.classList.add(CSS_UI.item);
          this.content.appendChild(this.removeUploadButton);
          this.el.classList.add(CSS_UI.row.vertical);
          this.input = document.createElement("input");
          this.input.type = "file";
          this.input.style.display = "none";
          if (this.params.accept)
            this.input.setAttribute("accept", this.params.accept);
          this.input.classList.add(CSS_UI.item);
          this.content.appendChild(this.input);
        }
      };
    }
  });

  // ../packages/ui/lib/partials/AvailableItems.js
  var AvailableItems, ItemRegister, AvailableItems_default;
  var init_AvailableItems = __esm({
    "../packages/ui/lib/partials/AvailableItems.js"() {
      AvailableItems = {
        items: []
      };
      ItemRegister = (registerOptions) => {
        const createItem = (createParams) => {
          return new registerOptions.item(createParams);
        };
        AvailableItems.items.push({
          view: registerOptions.view,
          create: createItem
        });
      };
      AvailableItems_default = AvailableItems;
    }
  });

  // ../packages/ui/lib/partials/RegisterBaseItems.js
  var RegisterBaseComponents;
  var init_RegisterBaseItems = __esm({
    "../packages/ui/lib/partials/RegisterBaseItems.js"() {
      init_BooleanItem();
      init_NumberItem();
      init_StringItem();
      init_ColorItem();
      init_RangeItem();
      init_SelectItem();
      init_UploadItem();
      init_AvailableItems();
      RegisterBaseComponents = () => {
        ItemRegister({
          view: "boolean",
          item: BooleanItem
        });
        ItemRegister({
          view: "string",
          item: StringItem
        });
        ItemRegister({
          view: "number",
          item: NumberItem
        });
        ItemRegister({
          view: "range",
          item: RangeItem
        });
        ItemRegister({
          view: "select",
          item: SelectItem
        });
        ItemRegister({
          view: "upload",
          item: UploadItem
        });
        ItemRegister({
          view: "color",
          item: ColorItem
        });
      };
    }
  });

  // ../packages/ui/lib/styles.js
  var CSS;
  var init_styles = __esm({
    "../packages/ui/lib/styles.js"() {
      CSS = `@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdP3pBms.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdzeFaxOedfTDw.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdXeFaxOedfTDw.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdLeFaxOedfTDw.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd7eFaxOedfTDw.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd_eFaxOedfTDw.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdHeFaxOedc.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIxsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIVsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIJsdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0370-03FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI5sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI9sdP3pBmtF8A.woff2) format("woff2");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"IBM Plex Sans";font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}:root{--ui-index:998;--ui-panels-index:999;--radius-0:4px;--radius-1:8px;--padding:0.2rem 0.4rem;--spacer:0.25rem;--duration:.3s;--timing:cubic-bezier(.6, 0, .4, 1);--accent-color:#2871C7;--happy-color:#49db6e;--warning-color:#ae7d15;--danger-color:#8f0000;--bg-0:#303030;--bg-1:#191919;--white:#FFF;--color-0:#CCCCCC;--color-1:#999999;--color-2:#7b7b7b}._ui-panel,._ui-panel *,._ui-wrapper,._ui-wrapper *{box-sizing:border-box}._ui-panel fieldset,._ui-wrapper fieldset{min-inline-size:unset}._ui-panel button,._ui-panel input,._ui-panel select,._ui-panel textarea,._ui-wrapper button,._ui-wrapper input,._ui-wrapper select,._ui-wrapper textarea{padding:0;margin:0;border:none;color:inherit;background-color:transparent;border-radius:0;font:inherit;text-align:inherit;text-transform:inherit;letter-spacing:inherit}._ui-panel a,._ui-panel h1,._ui-panel h2,._ui-panel h3,._ui-panel h4,._ui-panel h5,._ui-panel h6,._ui-panel p,._ui-wrapper a,._ui-wrapper h1,._ui-wrapper h2,._ui-wrapper h3,._ui-wrapper h4,._ui-wrapper h5,._ui-wrapper h6,._ui-wrapper p{margin:0;font:inherit}._ui-panel input[type=number],._ui-wrapper input[type=number]{-moz-appearance:textfield}._ui-panel input[type=number]::-webkit-inner-spin-button,._ui-panel input[type=number]::-webkit-outer-spin-button,._ui-wrapper input[type=number]::-webkit-inner-spin-button,._ui-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}._ui-panel,._ui-wrapper{font-family:"IBM Plex Sans",sans-serif;font-size:12px;color:var(--color-1);font-weight:400}._ui-panel header,._ui-wrapper header{font-weight:700}._ui-panel [ui-depth="0"]>header,._ui-wrapper [ui-depth="0"]>header{color:var(--color-0)}._ui-panel fieldset h4,._ui-panel fieldset p,._ui-wrapper fieldset h4,._ui-wrapper fieldset p{color:var(--color-2)}._ui-wrapper{z-index:var(--ui-index);--wrapper-width:300px;position:fixed;top:5px;right:5px;width:var(--wrapper-width);min-width:300px}._ui-wrapper ::selection{background:var(--white);color:var(--accent-color)}._ui-wrapper ._ui--hidden{display:none!important;pointer-events:none}._ui-wrapper ._ui-item{width:100%;min-height:2rem;padding:var(--padding);text-align:left;background-color:var(--section-bg-1);border:1px solid var(--section-bg-1);border-radius:var(--radius-0);display:flex;align-items:center;cursor:pointer}._ui-wrapper ._ui-item:focus{border-color:var(--accent-color)}._ui-wrapper._ui-wrapper-has-parent{position:relative;top:unset;right:unset;width:100%}._ui-wrapper ._ui-wrapper-resizer{position:absolute;width:4px;height:calc(100% - 4px);top:4px;left:0;cursor:ew-resize;z-index:1}._ui-wrapper._ui-minimal section[ui-depth="0"]>header{display:none}._ui-wrapper section{--section-bg-0:var(--bg-1);--section-bg-1:var(--bg-0);position:relative;width:100%;height:auto;overflow:hidden;border-radius:var(--radius-1);background-color:var(--section-bg-0)}._ui-wrapper section[ui-depth="0"],._ui-wrapper section[ui-depth="10"],._ui-wrapper section[ui-depth="2"],._ui-wrapper section[ui-depth="4"],._ui-wrapper section[ui-depth="6"],._ui-wrapper section[ui-depth="8"]{--section-bg-0:var(--bg-0);--section-bg-1:var(--bg-1)}._ui-wrapper section:not([ui-depth="0"]){margin-top:var(--spacer)}._ui-wrapper section ._ui-section-content{padding:0 var(--spacer) var(--spacer) var(--spacer);position:relative;float:left;display:flex;flex-direction:column;width:100%}._ui-wrapper section ._ui-section-content fieldset:first-of-type{margin-top:.5rem}._ui-wrapper section ._ui-section-content fieldset:last-child{margin-bottom:.5rem}._ui-wrapper ._ui-section-foldable{transition-duration:var(--duration);transition-timing-function:var(--timing);overflow:hidden}._ui-wrapper ._ui-section-foldable>header{cursor:pointer}._ui-wrapper ._ui-section-foldable ._ui-section-foldable-element{overflow:hidden;transition-duration:inherit;transition-timing-function:inherit;transition-property:height}._ui-wrapper ._ui-section-foldable ._ui-section-header-icon{transition:transform var(--duration) var(--timing)}._ui-wrapper ._ui-section-foldable ._ui-section-foldable-element ._ui-section-header-icon{transform:rotate(0);width:20px;transform-origin:50%}._ui-wrapper ._ui-section-foldable._ui-section-folded>._ui-section-foldable-element{height:0!important}._ui-wrapper ._ui-section-foldable._ui-section-folded>header ._ui-section-header-chevron{transform:rotate(-90deg)}._ui-wrapper header{position:relative;width:100%;height:40px;display:flex;justify-content:flex-start;align-items:center;padding:var(--padding);user-select:none}._ui-wrapper header ._ui-section-header-icon{width:auto;max-width:20px;height:1em;display:flex;justify-content:center;align-items:center;margin-right:5px}._ui-wrapper header h3{margin:0}._ui-wrapper section:not(._ui-section-foldable)>header>._ui-section-header-chevron{margin-right:.2em}._ui-wrapper section:not(._ui-section-foldable)>header>._ui-section-header-chevron svg{display:none}._ui-wrapper fieldset{width:calc(100% - .5rem);margin:var(--spacer) var(--spacer) 0 var(--spacer);padding:0;position:relative;border:none;display:flex;justify-content:space-between;align-items:center}._ui-wrapper fieldset h4{width:33.33%;max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding-right:5px;flex-grow:0;flex-shrink:0;user-select:none}._ui-wrapper fieldset ._ui-item-content{width:66.66%;display:flex;justify-content:flex-end;flex-grow:1;flex-shrink:0;position:relative;float:left}._ui-wrapper fieldset._ui-row-vertical{flex-direction:column;align-items:flex-start}._ui-wrapper fieldset._ui-row-vertical>h4{padding:.5rem 0}._ui-wrapper fieldset._ui-row-vertical>div{width:100%}._ui-wrapper ._ui-button._ui-item{--button-accent:var(--accent-color);padding:.2rem .7rem;justify-content:center;border:1px solid var(--section-bg-1);transition:var(--duration) var(--timing);margin-top:var(--animation-space);user-select:none}._ui-wrapper ._ui-button._ui-item._ui-button-happy{--button-accent:var(--happy-color)}._ui-wrapper ._ui-button._ui-item._ui-button-warning{--button-accent:var(--warning-color)}._ui-wrapper ._ui-button._ui-item._ui-button-danger{--button-accent:var(--danger-color)}._ui-wrapper ._ui-button._ui-item:hover{border:1px solid var(--button-accent)}._ui-wrapper ._ui-button._ui-item._ui--active{background-color:var(--button-accent);border:1px solid var(--button-accent);color:var(--white);transition:0s}._ui-wrapper ._ui-button._ui-item h3{text-overflow:ellipsis;overflow:hidden}._ui-wrapper ._ui-button-has-icon._ui-item{justify-content:space-between}._ui-wrapper ._ui-button-has-icon._ui-item ._ui-button-icon{display:flex;justify-content:center;align-items:center}._ui-wrapper ._ui-button-has-icon._ui-item ._ui-button-icon svg{width:20px}._ui-wrapper ._ui-spacer{width:100%;display:block;margin-bottom:calc(-1 * var(--spacer))}._ui-wrapper ._ui-spacer._ui-spacer-small{padding:10px 0}._ui-wrapper ._ui-spacer._ui-spacer-medium{padding:15px 0}._ui-wrapper ._ui-spacer._ui-spacer-large{padding:20px 0}._ui-wrapper ._ui-spacer._ui-spacer-has-line:before{content:"";display:block;width:calc(100% - .25rem);margin:0 auto;height:1px;background:var(--section-bg-1)}._ui-wrapper ._ui-info{display:flex;flex-direction:column;width:100%;margin:var(--spacer) 0 0;padding:.75rem var(--spacer);align-items:flex-start}._ui-wrapper ._ui-info p{line-height:1.3em}._ui-wrapper ._ui-info p:not(:first-of-type){margin-top:var(--spacer)}._ui-wrapper ._ui-info:after,._ui-wrapper ._ui-info:before{content:"";position:absolute;left:var(--spacer);width:calc(100% - 2 * var(--spacer));height:1px;background-color:var(--section-bg-1)}._ui-wrapper ._ui-info:before{top:0}._ui-wrapper ._ui-info:after{bottom:0}._ui-wrapper ._ui-boolean{cursor:pointer}._ui-wrapper ._ui-boolean ._ui-toggle{width:40px;height:25px;border-radius:15px;background-color:var(--section-bg-1);position:relative;float:left;transition:var(--duration) var(--timing);display:flex;justify-content:center;align-items:center}._ui-wrapper ._ui-boolean ._ui-toggle div{width:25px;height:25px;border-radius:100%;background-color:var(--white);transform:translate3d(-8px,0,0);transition:inherit}._ui-wrapper ._ui-boolean._ui--active ._ui-toggle{background-color:var(--accent-color)}._ui-wrapper ._ui-boolean._ui--active ._ui-toggle div{transform:translate3d(8px,0,0)}._ui-wrapper ._ui-number ._ui-number-input{flex-grow:1;position:relative;float:left}._ui-wrapper ._ui-number ._ui-number-input:not(:last-of-type){margin:0 var(--spacer) 0 0}._ui-wrapper ._ui-number ._ui-number-buttons{position:absolute;top:0;right:0;height:100%;width:auto;display:flex;flex-direction:column;align-items:center;user-select:none}._ui-wrapper ._ui-number ._ui-number-buttons button{padding:0;display:flex;justify-content:flex-start;align-items:center;height:50%;width:20px;cursor:pointer;user-select:none}._ui-wrapper ._ui-number ._ui-number-buttons button:active{color:var(--white);transition:0s}._ui-wrapper ._ui-number ._ui-number-buttons svg{user-select:none;width:20px}._ui-wrapper ._ui-number ._ui-number-buttons ._ui-number-btn-increase svg{transform:rotate(180deg);transform-origin:center}._ui-wrapper ._ui-range ._ui-range-input{position:relative;float:left;width:calc(65% - 12px);cursor:pointer;margin:0 12px 0 0}._ui-wrapper ._ui-range ._ui-range-input *{pointer-events:none}._ui-wrapper ._ui-range ._ui-range-overexpose,._ui-wrapper ._ui-range ._ui-range-track{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:2px;background-color:var(--color-0);width:100%}._ui-wrapper ._ui-range ._ui-range-overexpose{background-color:var(--color-2);transform:translate(0,-50%);left:unset;width:calc(var(--size) * 100%)}._ui-wrapper ._ui-range ._ui-range-overexpose._ui-range-overexpose-min{left:0}._ui-wrapper ._ui-range ._ui-range-overexpose._ui-range-overexpose-max{right:0}._ui-wrapper ._ui-range ._ui-range-thumb{position:absolute;top:50%;left:calc(var(--value) * 100%);transform:translate(-50%,-50%);width:20px;height:20px;border-radius:50%;background-color:var(--white);cursor:grab;pointer-events:all;transition:background-color var(--duration) var(--timing)}._ui-wrapper ._ui-range ._ui-range-thumb._ui--grab{background-color:rgba(var(--white),.2)}._ui-wrapper ._ui-range ._ui-range-thumb::after,._ui-wrapper ._ui-range ._ui-range-thumb::before{content:"";position:absolute;height:8px;width:2px;background-color:var(--white);left:50%;transform:translate(-50%,0)}._ui-wrapper ._ui-range ._ui-range-thumb::after{top:0}._ui-wrapper ._ui-range ._ui-range-thumb::before{bottom:0}._ui-wrapper ._ui-range ._ui-item{width:calc(35% - var(--spacer))}._ui-wrapper ._ui-select{position:relative;float:left}._ui-wrapper ._ui-select ._ui-item._ui-select-input *{pointer-events:none}._ui-wrapper ._ui-select ._ui-item._ui-select-input svg{width:20px;position:absolute;right:11px;top:50%;transition:all var(--duration) var(--timing);transform:translateY(-50%) rotate(0)}._ui-wrapper ._ui-select._ui-select-open ._ui-select-input svg{color:var(--white);transform:translateY(-50%) rotate(90deg)}._ui-wrapper ._ui-color div{justify-content:flex-end;align-items:center}._ui-wrapper ._ui-color ._ui-item{max-width:70px}._ui-wrapper ._ui-color ._ui-color-box{width:calc(2rem - 5px);height:calc(2rem - 5px);margin-right:10px;border-radius:var(--radius-0);flex-shrink:0;flex-grow:0;cursor:pointer;background-color:var(--active-color);border:1px solid var(--color-1)}._ui-wrapper ._ui-panel{z-index:var(--ui-panels-index);position:absolute;height:auto;border-radius:var(--radius-0);width:100%;top:100%;opacity:0}._ui-wrapper ._ui-panel._ui--loaded{transition-property:opacity;transition-duration:var(--duration);transition-timing-function:var(--timing)}._ui-wrapper ._ui-panel._ui--active{opacity:1}._ui-wrapper ._ui-panel._ui-panel-dropdown{height:auto;max-height:300px;overflow-y:auto}._ui-wrapper ._ui-panel._ui-panel-left,._ui-wrapper ._ui-panel._ui-panel-right{width:300px;height:auto}._ui-wrapper ._ui-panel-select{background-color:var(--section-bg-1);border:1px solid var(--section-bg-0)}._ui-wrapper ._ui-panel-select-button,._ui-wrapper ._ui-panel-select-option,._ui-wrapper ._ui-panel-select-option-none,._ui-wrapper ._ui-panel-select-search{padding:.6rem;background-color:var(--section-bg-1);cursor:pointer}._ui-wrapper ._ui-panel-select-option{text-align:left;border-radius:var(--radius-0);display:flex;justify-content:flex-start;align-items:center;min-height:40px}._ui-wrapper ._ui-panel-select-option._ui--active{border:1px solid var(--accent-color)}._ui-wrapper ._ui-panel-select-option:hover{background-color:var(--accent-color)}._ui-wrapper ._ui-panel-select-option:hover p{color:var(--white)}._ui-wrapper ._ui-panel-select-option-button{position:sticky;top:0;border-bottom:2px solid var(--section-bg-0)}._ui-wrapper ._ui-panel-select-option-button svg{margin-right:5px}._ui-wrapper ._ui-panel-color{display:flex;justify-content:center;align-items:center;flex-direction:column;overflow:hidden}._ui-wrapper ._ui-panel-color ._ui-color-info,._ui-wrapper ._ui-panel-color ._ui-color-view{width:100%;height:100%;position:relative}._ui-wrapper ._ui-panel-color canvas{width:100%;height:auto;display:block}._ui-wrapper ._ui-color-target{position:absolute;transform:translate3d(-50%,-50%,0);border:2px solid var(--white);border-radius:100%;width:10px;height:10px;pointer-events:none;mix-blend-mode:exclusion}._ui-wrapper ._ui-color-dragger{position:absolute;width:3px;border-radius:5px;height:calc(100% - 8px);background:#fff;top:50%;left:50%;transform:translate3d(-50%,-50%,0);pointer-events:none}`;
    }
  });

  // ../packages/ui/lib/utils/css.js
  var injected, css, UIInjectCSS;
  var init_css = __esm({
    "../packages/ui/lib/utils/css.js"() {
      init_styles();
      injected = false;
      css = {
        inject: (css2) => {
          if (injected)
            return;
          injected = true;
          const style3 = document.createElement("style");
          style3.innerHTML = css2;
          document.head.appendChild(style3);
        }
      };
      UIInjectCSS = () => {
        css.inject(CSS);
      };
    }
  });

  // ../packages/ui/lib/init.js
  var initialized, InitUI;
  var init_init = __esm({
    "../packages/ui/lib/init.js"() {
      init_RegisterBaseItems();
      init_css();
      initialized = false;
      InitUI = () => {
        if (initialized)
          return;
        RegisterBaseComponents();
        UIInjectCSS();
      };
    }
  });

  // ../packages/ui/lib/partials/ItemFactory.js
  var compareArrays, ItemFactory, getItemByValue;
  var init_ItemFactory = __esm({
    "../packages/ui/lib/partials/ItemFactory.js"() {
      init_main3();
      init_AvailableItems();
      compareArrays = (a, b) => {
        for (const item of b) {
          if (a.indexOf(item) === -1) {
            return false;
          }
        }
        return true;
      };
      ItemFactory = ({ object, key, params = {} }) => {
        if (!object)
          throw new Error("ItemFactory - object is required");
        if (!key)
          throw new Error("ItemFactory - key is required");
        if (params && params.view) {
          const item2 = AvailableItems_default.items.find((item3) => item3.view === params.view);
          if (!item2)
            throw new Error("ItemFactory - unknown view");
          return item2.create({ object, key, params });
        }
        const item = getItemByValue(object[key], params);
        if (item) {
          params.view = item.view;
          return item.create({ object, key, params });
        }
      };
      getItemByValue = (value, params) => {
        if (!isUndefined(params.options))
          return AvailableItems_default.items.find((item) => item.view === "select");
        if (isObject(value)) {
          let keys = Object.keys(value);
          keys = keys.map((key) => key.toLowerCase());
          const c1 = ["r", "g", "b"];
          const c22 = ["h", "s", "b"];
          const c32 = ["h", "s", "l"];
          if (compareArrays(keys, c1) || compareArrays(keys, c22) || compareArrays(keys, c32))
            return AvailableItems_default.items.find((item) => item.view === "color");
          const n1 = ["x", "y"];
          const n2 = ["x", "y", "z"];
          const n3 = ["_x", "_y", "_z"];
          const n4 = ["x", "y", "z", "w"];
          if (compareArrays(keys, n1) || compareArrays(keys, n2) || compareArrays(keys, n3) || compareArrays(keys, n4))
            return AvailableItems_default.items.find((item) => item.view === "number");
        }
        if (isNumber(value)) {
          if (params) {
            if (params.min || params.max || params.step)
              return AvailableItems_default.items.find((item) => item.view === "range");
          }
          return AvailableItems_default.items.find((item) => item.view === "number");
        }
        if (isString(value)) {
          if (value.substring(0, 1) === "#")
            return AvailableItems_default.items.find((item) => item.view === "color");
          if (value.substring(0, 2) === "0x")
            return AvailableItems_default.items.find((item) => item.view === "color");
          return AvailableItems_default.items.find((item) => item.view === "string");
        }
        if (isBoolean(value))
          return AvailableItems_default.items.find((item) => item.view === "boolean");
        return void 0;
      };
    }
  });

  // ../packages/ui/lib/components/UIButton.js
  var UIButton;
  var init_UIButton = __esm({
    "../packages/ui/lib/components/UIButton.js"() {
      init_main7();
      init_dom();
      init_UIElement();
      UIButton = class extends UIElement {
        constructor(title = "Button", clickCallback, type) {
          super(RowTypes.button, title);
          this.view = "button";
          this.buttonType = type;
          this.clickCallback = clickCallback;
        }
        createDom() {
          super.createDom();
          this.button = this.el.querySelector("button");
          this.button.classList.add(CSS_UI.item);
          if (this.buttonType === "happy")
            this.button.classList.add(CSS_UI.button.happy);
          if (this.buttonType === "warning")
            this.button.classList.add(CSS_UI.button.warning);
          if (this.buttonType === "danger")
            this.button.classList.add(CSS_UI.button.danger);
        }
        addEventListeners() {
          const clickEvent = {
            target: this.button,
            type: "click",
            callback: () => {
              this.button.classList.add(CSS_UI.utility.active);
              setTimeout(() => {
                this.button.classList.remove(CSS_UI.utility.active);
              }, 50);
              this.clickCallback();
              this.emit("click");
              this.emit("__childrenChange");
            }
          };
          this.addEventListener(clickEvent);
        }
        /**
        * @typedef {'click'} ButtonEventType
        *
        * @description Available event types:
        * - click: Triggered when the button is clicked.
        *
        * @param {ButtonEventType} eventType - The type of event to listen for.
        * @param {Function} callback - The callback function to call when the event occurs.
        * @returns {void}
        */
        on(event, callback) {
          super.on(event, callback);
        }
      };
    }
  });

  // ../packages/ui/lib/components/Info.js
  var Info;
  var init_Info = __esm({
    "../packages/ui/lib/components/Info.js"() {
      init_main3();
      init_main7();
      init_dom();
      init_UIElement();
      Info = class extends UIElement {
        constructor(depth, params) {
          super(RowTypes.info);
          this.params = params;
          this.init(depth);
        }
        createContent() {
          const texts = this.params.text;
          if (isArray(texts)) {
            for (let i = 0; i < this.params.text.length; i++)
              this.createText(this.params.text[i]);
          } else
            this.createText(this.params.text);
        }
        createText(text) {
          const p = el("p", CSS_UI.info.text, this.el);
          p.innerText = text;
        }
      };
    }
  });

  // ../packages/ui/lib/components/UISpacer.js
  var UISpacer;
  var init_UISpacer = __esm({
    "../packages/ui/lib/components/UISpacer.js"() {
      init_cssClasses();
      init_dom();
      init_UIElement();
      UISpacer = class extends UIElement {
        constructor(depth, { size = "medium", line = true }) {
          super(RowTypes.spacer);
          this.type = RowTypes.spacer;
          this.init(depth);
          if (line)
            this.el.classList.add(CSS_UI.spacer.hasLine);
          this.el.classList.add(CSS_UI.spacer.size[size.toLowerCase()]);
        }
      };
    }
  });

  // ../packages/ui/lib/components/UIGroup.js
  var UIGroup;
  var init_UIGroup = __esm({
    "../packages/ui/lib/components/UIGroup.js"() {
      init_main3();
      init_cssClasses();
      init_ItemFactory();
      init_dom();
      init_UIButton();
      init_Info();
      init_UISpacer();
      init_UIElement();
      UIGroup = class extends UIElement {
        constructor({ title, folded = false, foldable = true }) {
          super(RowTypes.group, title);
          this.children = [];
          this.height = 0;
          this.folded = foldable ? folded : true;
          this.foldable = foldable;
        }
        createDom() {
          super.createDom();
          this.content = this.el.querySelector(`.${CSS_UI.section.content}`);
        }
        addEventListeners() {
          if (!this.foldable)
            return;
          this.foldWrapper = el("div", CSS_UI.section.foldableElement, this.el);
          this.foldWrapper.appendChild(this.content);
          this.el.classList.add(CSS_UI.section.foldable);
          const header = this.el.querySelector("header");
          const clickEvent = {
            target: header,
            type: "click",
            callback: () => {
              this.foldToggle();
            }
          };
          this.addEventListener(clickEvent);
          this.folded = !this.folded;
          this.foldToggle();
        }
        foldToggle() {
          if (!this.foldable)
            return;
          this.folded = !this.folded;
          const h = this.content.getBoundingClientRect().height;
          this.foldWrapper.style.height = `${h}px`;
          if (this.timer)
            clearTimeout(this.timer);
          setTimeout(() => {
            if (this.folded)
              this.el.classList.add(CSS_UI.section.folded);
            else
              this.el.classList.remove(CSS_UI.section.folded);
          }, 5);
          if (!this.folded) {
            const d = parseFloat(getComputedStyle(this.foldWrapper).transitionDuration) * 1e3;
            this.timer = setTimeout(() => {
              this.foldWrapper.style.height = `auto`;
            }, d);
          }
          this.emit("fold");
        }
        /**
         * Creates a button with the specified title.
         *
         * @param {string} title - The title to display on the button.
         * @default 'UIButton'
         * @param {Function} clickCallback - The callback to call when the button is clicked.
         * @default () => {}
         * @param {string} type - The type of the button. Can be 'normal', 'happy', 'warning' or 'danger'.
         * @default 'normal'
         * @event click
         * @returns {Button} The newly created button element.
         */
        addButton(title = "Button", clickCallback = () => {
        }, type = "normal") {
          const button = new UIButton(title, clickCallback, type);
          if (button) {
            button.init(this.depth + 1);
            this.content.appendChild(button.el);
            button.on("__childrenChange", () => {
              this.change(button);
            });
            this.on("fold", () => {
              button.parentFold();
            });
            this.on("resize", () => {
              button.resize();
            });
            this.children.push(button);
          }
          return button;
        }
        /**
        * Creates a new group, adds it to the parent and returns it.
        *
        * @param {title} title - Group tab title
        * @param {folded} folded - Is the group folded or not
        * @param {foldable} foldable - Is the group foldable or not
        * @returns {Group} The newly created group element.
        */
        addGroup(params) {
          const group = new UIGroup(params);
          if (group) {
            group.on("__childrenChange", (target) => {
              this.change(target);
            });
            group.on("__childrenChangeComplete", (target) => {
              this.changeComplete(target);
            });
            this.on("fold", () => {
              group.parentFold();
            });
            this.on("resize", () => {
              group.resize();
            });
            group.init(this.depth + 1);
            this.content.appendChild(group.el);
            this.children.push(group);
          }
          return group;
        }
        /**
         * Adds a spacer element to the page.
         *
         * @param {SpacerOptions} [options] - The options for the spacer.
         * @property {boolean} [line=true] - If true, the spacer will have a line. Default is true.
         * @property {'large'|'medium'|'small'} [size='medium'] - The size of the spacer. Default is 'medium'.
         * @returns {void}
         * @example
         *
         * // Adds a spacer with default options
         * addSpacer();
         *
         * // Adds a spacer with a line and a size of 'large'
         * addSpacer({ line: true, size: 'large' });
         */
        addSpacer(params = {}) {
          const spacer = new UISpacer(this.depth + 1, params);
          if (spacer && spacer.el)
            this.content.appendChild(spacer.el);
        }
        /**
        * Adds an info element to the parent and returns it.
        *
        * @param {text} text - Info text. String or Array of strings.
        */
        addInfo(text) {
          const info = new Info(this.depth + 1, { text });
          if (info && info.el)
            this.content.appendChild(info.el);
        }
        /**
         * Adds an item element to the parent and returns it.
         *
         * @param {title} title - Item title.
         * @param {view} view - Force item view. If not specified, it will be automatically detected.
         * @returns {Item} The newly created item element.
         */
        add(object, key, params) {
          return this.addItem(object, key, params);
        }
        /**
        * Adds an item element to the parent and returns it.
        *
        * @param {title} title - Item title.
        * @param {view} view - Force item view. If not specified, it will be automatically detected.
        * @returns {Item} The newly created item element.
        */
        addItem(object, key, params) {
          const createItemParams = { object, key, params };
          const item = ItemFactory(createItemParams);
          if (item) {
            item.on("__childrenChange", () => {
              this.change(item);
            });
            item.on("__childrenChangeComplete", () => {
              this.changeComplete(item);
            });
            this.on("fold", () => {
              item.parentFold();
            });
            this.on("resize", () => {
              item.resize();
            });
            item.init(this.depth + 1);
            this.content.appendChild(item.el);
            this.children.push(item);
          }
          return item;
        }
        addCustomUIElement(element, params) {
          const customElement = new element(params);
          if (customElement) {
            customElement.on("__childrenChange", () => {
              this.change(customElement);
            });
            customElement.on("__childrenChangeComplete", () => {
              this.changeComplete(customElement);
            });
            this.on("fold", () => {
              customElement.parentFold();
            });
            this.on("resize", () => {
              customElement.resize();
            });
            customElement.init(this.depth + 1);
            this.content.appendChild(customElement.el);
            this.children.push(customElement);
          }
          return customElement;
        }
        parentFold() {
          this.emit("fold");
        }
        change(target) {
          this.emit("change", target);
          this.emit("__childrenChange", target);
        }
        changeComplete(target) {
          this.emit("__childrenChangeComplete", target);
        }
        resize() {
          this.emit("resize");
        }
        refresh() {
          super.refresh();
          this.emit("refresh");
          for (let child of this.children) {
            child.refresh();
          }
        }
      };
    }
  });

  // ../packages/ui/lib/components/UI.js
  var UI;
  var init_UI = __esm({
    "../packages/ui/lib/components/UI.js"() {
      init_main3();
      init_main7();
      init_cssClasses();
      init_dom();
      init_UIGroup();
      InitUI();
      UI = class extends UIGroup {
        constructor({ resizable = true, parentElement, icon, width, minimal = false } = {}) {
          super(Object.assign({}, arguments[0]));
          this.wrapper = el("div");
          this.resizable = parentElement ? false : resizable;
          this.resizable = minimal ? false : resizable;
          this.minimal = minimal;
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
          dom_default.addIcon(this.el.querySelector("header"), icon);
        }
        createDom() {
          this.wrapper = dom_default.createRow({
            type: RowTypes.ui,
            depth: this.depth
          });
          super.createDom();
          if (this.minimal) {
            this.wrapper.classList.add(CSS_UI.minimal);
          }
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
          const mouseDownEvent = {
            target: resizer,
            type: "mousedown",
            callback: (e) => {
              dragging = true;
              x = e.clientX;
              width = this.wrapper.getBoundingClientRect().width;
            }
          };
          const mouseMoveEvent = {
            target: resizer,
            type: "mousemove",
            callback: (e) => {
              if (!dragging)
                return;
              e.preventDefault();
              distance = x - e.clientX;
              resize(width, distance);
            }
          };
          const mouseUpEvent = {
            target: resizer,
            type: "mouseup",
            callback: (e) => {
              if (!dragging)
                return;
              e.preventDefault();
              dragging = false;
            }
          };
          this.addEventListener(mouseDownEvent);
          this.addEventListener(mouseMoveEvent);
          this.addEventListener(mouseUpEvent);
        }
        /**
        * @typedef {'resize'| EventType } UIEventType
        *
        * @description Available event types:
        * - change: Triggered when the value of the item or one of its children changes.
        * - resize: Triggered when the UI is resized.
        *
        * @param {UIEventType} eventType - The type of event to listen for.
        * @param {Function} callback - The callback function to call when the event occurs.
        * @returns {void}
        */
        on(event, callback) {
          super.on(event, callback);
        }
        change(target) {
          super.change(target);
        }
        destroy() {
          super.destroy();
          remove(this.wrapper);
        }
      };
    }
  });

  // ../packages/ui/lib/components/CustomUIElement.js
  var init_CustomUIElement = __esm({
    "../packages/ui/lib/components/CustomUIElement.js"() {
      init_main7();
      init_UIElement();
    }
  });

  // ../packages/ui/lib/components/items/ItemParameters.js
  var init_ItemParameters = __esm({
    "../packages/ui/lib/components/items/ItemParameters.js"() {
    }
  });

  // ../packages/ui/lib/main.js
  var init_main7 = __esm({
    "../packages/ui/lib/main.js"() {
      init_init();
      init_UI();
      init_UIButton();
      init_UIGroup();
      init_UIPanel();
      init_UISpacer();
      init_UIElement();
      init_CustomUIElement();
      init_Item();
      init_ItemParameters();
      init_BooleanItem();
      init_ColorItem();
      init_NumberItem();
      init_SelectItem();
      init_RangeItem();
      init_StringItem();
      init_UploadItem();
      init_cssClasses();
      init_EventsManager();
      init_ItemFactory();
      init_RegisterBaseItems();
      init_AvailableItems();
      init_css();
      init_dom();
    }
  });

  // ../packages/utils/lib/Utils.js
  function isMobile() {
    var check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true;
    })(navigator.userAgent || navigator.vendor);
    return check;
  }
  var init_Utils2 = __esm({
    "../packages/utils/lib/Utils.js"() {
    }
  });

  // ../packages/utils/lib/FileUtils.js
  var init_FileUtils2 = __esm({
    "../packages/utils/lib/FileUtils.js"() {
    }
  });

  // ../packages/utils/lib/TypeUtils.js
  var init_TypeUtils2 = __esm({
    "../packages/utils/lib/TypeUtils.js"() {
    }
  });

  // ../packages/utils/lib/main.js
  var init_main8 = __esm({
    "../packages/utils/lib/main.js"() {
      init_Utils2();
      init_FileUtils2();
      init_TypeUtils2();
    }
  });

  // ../packages/scroller/lib/Section.js
  var init_Section2 = __esm({
    "../packages/scroller/lib/Section.js"() {
      init_main();
      init_Scroller2();
    }
  });

  // ../packages/scroller/lib/VirtualScrollBar.js
  var init_VirtualScrollBar2 = __esm({
    "../packages/scroller/lib/VirtualScrollBar.js"() {
      init_main();
    }
  });

  // ../packages/scroller/lib/Scroller.js
  var D2;
  var init_Scroller2 = __esm({
    "../packages/scroller/lib/Scroller.js"() {
      init_main();
      init_Section2();
      init_VirtualScrollBar2();
      (function(D4) {
        D4[D4["TOP"] = 0] = "TOP";
        D4[D4["BOTTOM"] = 1] = "BOTTOM";
        D4[D4["LEFT"] = 2] = "LEFT";
        D4[D4["RIGHT"] = 3] = "RIGHT";
      })(D2 || (D2 = {}));
    }
  });

  // ../packages/scroller/lib/ContentSection.js
  var ContentSection;
  var init_ContentSection2 = __esm({
    "../packages/scroller/lib/ContentSection.js"() {
      ContentSection = class {
        constructor(_dom, scroller) {
          this.dom = _dom;
          const sections = scroller === null || scroller === void 0 ? void 0 : scroller.sections;
          if (sections) {
            const s = sections.find((s2) => s2.dom === _dom);
            if (s) {
              s.addSectionListener(this);
              this.section = s;
            }
          }
          this.onInit();
          this.addEventListeners();
          if (this.section.visible)
            this.onAnimationIn();
        }
        /**
         * You must initialize all your stuff here
         */
        onInit() {
        }
        addEventListeners() {
        }
        /**
         * Played when section's visibility change to visible
         */
        onAnimationIn() {
        }
        /**
         * Played when section's visibility change to hidden
         * Useful to reset things if you want to always animate
         * things when showing up
         */
        onAnimationOut() {
        }
        /**
         * Called on section before restore
         * @param resizing whereas scroller is resizing or not
         */
        onBeforeRestore(resizing) {
        }
        /**
         * Called on section after restore
         * @param resizing whereas scroller is resizing or not
         */
        onAfterRestore(resizing) {
        }
        /**
         * You must call this function in your own raf
         * @param time animation time in seconds
         */
        update(time = 0) {
        }
      };
    }
  });

  // ../packages/scroller/lib/main.js
  var init_main9 = __esm({
    "../packages/scroller/lib/main.js"() {
      init_Scroller2();
      init_VirtualScrollBar2();
      init_Section2();
      init_ContentSection2();
    }
  });

  // src/scroller/js/CustomContentSection.ts
  var CustomContentSection;
  var init_CustomContentSection = __esm({
    "src/scroller/js/CustomContentSection.ts"() {
      init_main9();
      CustomContentSection = class extends ContentSection {
        constructor(_dom, scroller) {
          super(_dom, scroller);
        }
        onInit() {
          this.dom.style.opacity = "0";
          this.dom.style.transition = "opacity 0s ease-out";
          this.h2 = this.dom.querySelector("h2");
        }
        onAnimationIn() {
          console.log("ANIMATION IN!");
          this.dom.style.transitionDuration = "5s";
          this.dom.style.opacity = "1";
        }
        onAnimationOut() {
          console.log("HIDDING... RESTORE STUFF!");
          this.dom.style.transitionDuration = "0s";
          this.dom.style.opacity = "0";
        }
        update(time = 0) {
          if (!this.section.visible)
            return;
          this.h2.style.transform = `translateY(${100 * Math.sin(time * 2)}px)`;
        }
      };
    }
  });

  // src/scroller/js/App.ts
  var App_exports = {};
  __export(App_exports, {
    App: () => App
  });
  var App;
  var init_App = __esm({
    "src/scroller/js/App.ts"() {
      init_main2();
      init_stats_module();
      init_main7();
      init_main8();
      init_CustomContentSection();
      App = class {
        constructor() {
          this.sections = [];
          const useNative = isMobile();
          this.scroller = new Scroller({
            useNative,
            easing: 0.1,
            showVirtualScrollBar: true,
            touchForce: 2,
            wheelForce: 1,
            customContainer: useNative ? document.body : void 0
            // direction: D.LEFT
          });
          if (useNative) {
            document.body.style.overflowX = "hidden";
            const container = document.querySelector("[fil-scroller]");
            container.style.overflow = "unset";
            container.style.position = "relative";
            container.style.height = "auto";
          }
          const s = new CustomContentSection(
            document.querySelector(".section-4"),
            this.scroller
          );
          this.sections.push(s);
          this.cssVariablesElements = document.querySelectorAll("[css-var]");
          const stats = new stats_module_default();
          stats.showPanel(0);
          document.body.appendChild(stats.dom);
          const animate = () => {
            stats.begin();
            this.update();
            stats.end();
            requestAnimationFrame(animate);
          };
          animate();
          const gui = new UI();
          gui.add(
            this.scroller,
            "direction",
            {
              options: { Top: 0, Bottom: 1, Left: 2, Right: 3 }
            }
          );
          gui.add(
            this.scroller,
            "ease",
            {
              min: 1e-3,
              max: 1,
              step: 1e-3
            }
          );
          gui.addButton("Scroll to last", () => {
            this.scroller.scrollToSection(this.scroller.sections.length - 1);
          });
          gui.addButton("Scroll to top", () => {
            this.scroller.scrollToSection(0);
          });
          gui.addButton("Disable/Enable", () => {
            if (this.scroller.enabled)
              this.scroller.disable();
            else
              this.scroller.enable();
          });
          gui.addButton("Refresh", () => {
            this.scroller.refresh();
          });
          window.addEventListener("resize", () => {
            this.scroller.resize();
          });
        }
        update() {
          this.scroller.update();
          const section = this.scroller.sections.find((x) => x.id === "css-var-section");
          if (!section)
            return;
          for (let i = 0, len = this.cssVariablesElements.length; i < len; i++) {
            const el2 = this.cssVariablesElements[i];
            const type = el2.getAttribute("css-var");
            if (type === "delta")
              el2.innerText = `${this.scroller.delta.toFixed(3)}`;
            if (type === "progress" && section)
              el2.innerText = `${section.progress.toFixed(3)}`;
          }
          for (const s of this.sections) {
            s.update(performance.now() * 1e-3);
          }
        }
      };
    }
  });

  // src/scroller/js/main.js
  var { App: App2 } = (init_App(), __toCommonJS(App_exports));
  window.onload = () => {
    const _App = new App2();
  };
})();
//# sourceMappingURL=main.js.map
