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

  // src/js/demos/ScrollerDemo.ts
  var ScrollerDemo;
  var init_ScrollerDemo = __esm({
    "src/js/demos/ScrollerDemo.ts"() {
      ScrollerDemo = class {
        constructor() {
        }
        update() {
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
