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

  // ../scroller/node_modules/mersenne/lib/mersenne.js
  var require_mersenne = __commonJS({
    "../scroller/node_modules/mersenne/lib/mersenne.js"(exports) {
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
            mt[mti] = addition32(multiplication32(1812433253, unsigned32(mt[mti - 1] ^ mt[mti - 1] >>> 30)), mti);
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
            mt[i] = unsigned32(mt[i] & 4294967295);
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
      gen.init_genrand(new Date().getTime() % 1e9);
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

  // ../scroller/node_modules/@jocabola/math/lib/Random.js
  var import_mersenne;
  var init_Random = __esm({
    "../scroller/node_modules/@jocabola/math/lib/Random.js"() {
      import_mersenne = __toESM(require_mersenne());
    }
  });

  // ../scroller/node_modules/@jocabola/math/lib/MathUtils.js
  var MathUtils;
  var init_MathUtils = __esm({
    "../scroller/node_modules/@jocabola/math/lib/MathUtils.js"() {
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

  // ../scroller/node_modules/@jocabola/math/lib/Vector.js
  var init_Vector = __esm({
    "../scroller/node_modules/@jocabola/math/lib/Vector.js"() {
      init_MathUtils();
    }
  });

  // node_modules/three/build/three.min.js
  var require_three_min = __commonJS({
    "node_modules/three/build/three.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).THREE = {});
      }(exports, function(t) {
        "use strict";
        const e = "145", i = 100, n = 300, r = 301, s = 302, a = 303, o = 304, l = 306, c = 1e3, h = 1001, u = 1002, d = 1003, p = 1004, m = 1005, f = 1006, g = 1007, v = 1008, x = 1009, _ = 1012, y = 1014, M = 1015, b = 1016, S = 1020, w = 1023, T = 1026, A = 1027, E = 33776, C = 33777, L = 33778, R = 33779, P = 35840, I = 35841, D = 35842, N = 35843, O = 37492, z = 37496, U = 37808, B = 37809, F = 37810, k = 37811, G = 37812, V = 37813, H = 37814, W = 37815, j = 37816, q = 37817, X = 37818, Y = 37819, Z = 37820, J = 37821, K = 36492, $ = 2300, Q = 2301, tt = 2302, et = 2400, it = 2401, nt = 2402, rt = 2500, st = 2501, at = 3e3, ot = 3001, lt = "srgb", ct = "srgb-linear", ht = 7680, ut = 35044, dt = "300 es", pt = 1035;
        class mt {
          addEventListener(t2, e2) {
            void 0 === this._listeners && (this._listeners = {});
            const i2 = this._listeners;
            void 0 === i2[t2] && (i2[t2] = []), -1 === i2[t2].indexOf(e2) && i2[t2].push(e2);
          }
          hasEventListener(t2, e2) {
            if (void 0 === this._listeners)
              return false;
            const i2 = this._listeners;
            return void 0 !== i2[t2] && -1 !== i2[t2].indexOf(e2);
          }
          removeEventListener(t2, e2) {
            if (void 0 === this._listeners)
              return;
            const i2 = this._listeners[t2];
            if (void 0 !== i2) {
              const t3 = i2.indexOf(e2);
              -1 !== t3 && i2.splice(t3, 1);
            }
          }
          dispatchEvent(t2) {
            if (void 0 === this._listeners)
              return;
            const e2 = this._listeners[t2.type];
            if (void 0 !== e2) {
              t2.target = this;
              const i2 = e2.slice(0);
              for (let e3 = 0, n2 = i2.length; e3 < n2; e3++)
                i2[e3].call(this, t2);
              t2.target = null;
            }
          }
        }
        const ft = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
        let gt = 1234567;
        const vt = Math.PI / 180, xt = 180 / Math.PI;
        function _t() {
          const t2 = 4294967295 * Math.random() | 0, e2 = 4294967295 * Math.random() | 0, i2 = 4294967295 * Math.random() | 0, n2 = 4294967295 * Math.random() | 0;
          return (ft[255 & t2] + ft[t2 >> 8 & 255] + ft[t2 >> 16 & 255] + ft[t2 >> 24 & 255] + "-" + ft[255 & e2] + ft[e2 >> 8 & 255] + "-" + ft[e2 >> 16 & 15 | 64] + ft[e2 >> 24 & 255] + "-" + ft[63 & i2 | 128] + ft[i2 >> 8 & 255] + "-" + ft[i2 >> 16 & 255] + ft[i2 >> 24 & 255] + ft[255 & n2] + ft[n2 >> 8 & 255] + ft[n2 >> 16 & 255] + ft[n2 >> 24 & 255]).toLowerCase();
        }
        function yt(t2, e2, i2) {
          return Math.max(e2, Math.min(i2, t2));
        }
        function Mt(t2, e2) {
          return (t2 % e2 + e2) % e2;
        }
        function bt(t2, e2, i2) {
          return (1 - i2) * t2 + i2 * e2;
        }
        function St(t2) {
          return 0 == (t2 & t2 - 1) && 0 !== t2;
        }
        function wt(t2) {
          return Math.pow(2, Math.ceil(Math.log(t2) / Math.LN2));
        }
        function Tt(t2) {
          return Math.pow(2, Math.floor(Math.log(t2) / Math.LN2));
        }
        function At(t2, e2) {
          switch (e2.constructor) {
            case Float32Array:
              return t2;
            case Uint16Array:
              return t2 / 65535;
            case Uint8Array:
              return t2 / 255;
            case Int16Array:
              return Math.max(t2 / 32767, -1);
            case Int8Array:
              return Math.max(t2 / 127, -1);
            default:
              throw new Error("Invalid component type.");
          }
        }
        function Et(t2, e2) {
          switch (e2.constructor) {
            case Float32Array:
              return t2;
            case Uint16Array:
              return Math.round(65535 * t2);
            case Uint8Array:
              return Math.round(255 * t2);
            case Int16Array:
              return Math.round(32767 * t2);
            case Int8Array:
              return Math.round(127 * t2);
            default:
              throw new Error("Invalid component type.");
          }
        }
        var Ct = Object.freeze({ __proto__: null, DEG2RAD: vt, RAD2DEG: xt, generateUUID: _t, clamp: yt, euclideanModulo: Mt, mapLinear: function(t2, e2, i2, n2, r2) {
          return n2 + (t2 - e2) * (r2 - n2) / (i2 - e2);
        }, inverseLerp: function(t2, e2, i2) {
          return t2 !== e2 ? (i2 - t2) / (e2 - t2) : 0;
        }, lerp: bt, damp: function(t2, e2, i2, n2) {
          return bt(t2, e2, 1 - Math.exp(-i2 * n2));
        }, pingpong: function(t2, e2 = 1) {
          return e2 - Math.abs(Mt(t2, 2 * e2) - e2);
        }, smoothstep: function(t2, e2, i2) {
          return t2 <= e2 ? 0 : t2 >= i2 ? 1 : (t2 = (t2 - e2) / (i2 - e2)) * t2 * (3 - 2 * t2);
        }, smootherstep: function(t2, e2, i2) {
          return t2 <= e2 ? 0 : t2 >= i2 ? 1 : (t2 = (t2 - e2) / (i2 - e2)) * t2 * t2 * (t2 * (6 * t2 - 15) + 10);
        }, randInt: function(t2, e2) {
          return t2 + Math.floor(Math.random() * (e2 - t2 + 1));
        }, randFloat: function(t2, e2) {
          return t2 + Math.random() * (e2 - t2);
        }, randFloatSpread: function(t2) {
          return t2 * (0.5 - Math.random());
        }, seededRandom: function(t2) {
          void 0 !== t2 && (gt = t2);
          let e2 = gt += 1831565813;
          return e2 = Math.imul(e2 ^ e2 >>> 15, 1 | e2), e2 ^= e2 + Math.imul(e2 ^ e2 >>> 7, 61 | e2), ((e2 ^ e2 >>> 14) >>> 0) / 4294967296;
        }, degToRad: function(t2) {
          return t2 * vt;
        }, radToDeg: function(t2) {
          return t2 * xt;
        }, isPowerOfTwo: St, ceilPowerOfTwo: wt, floorPowerOfTwo: Tt, setQuaternionFromProperEuler: function(t2, e2, i2, n2, r2) {
          const s2 = Math.cos, a2 = Math.sin, o2 = s2(i2 / 2), l2 = a2(i2 / 2), c2 = s2((e2 + n2) / 2), h2 = a2((e2 + n2) / 2), u2 = s2((e2 - n2) / 2), d2 = a2((e2 - n2) / 2), p2 = s2((n2 - e2) / 2), m2 = a2((n2 - e2) / 2);
          switch (r2) {
            case "XYX":
              t2.set(o2 * h2, l2 * u2, l2 * d2, o2 * c2);
              break;
            case "YZY":
              t2.set(l2 * d2, o2 * h2, l2 * u2, o2 * c2);
              break;
            case "ZXZ":
              t2.set(l2 * u2, l2 * d2, o2 * h2, o2 * c2);
              break;
            case "XZX":
              t2.set(o2 * h2, l2 * m2, l2 * p2, o2 * c2);
              break;
            case "YXY":
              t2.set(l2 * p2, o2 * h2, l2 * m2, o2 * c2);
              break;
            case "ZYZ":
              t2.set(l2 * m2, l2 * p2, o2 * h2, o2 * c2);
              break;
            default:
              console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r2);
          }
        }, normalize: Et, denormalize: At });
        class Lt {
          constructor(t2 = 0, e2 = 0) {
            Lt.prototype.isVector2 = true, this.x = t2, this.y = e2;
          }
          get width() {
            return this.x;
          }
          set width(t2) {
            this.x = t2;
          }
          get height() {
            return this.y;
          }
          set height(t2) {
            this.y = t2;
          }
          set(t2, e2) {
            return this.x = t2, this.y = e2, this;
          }
          setScalar(t2) {
            return this.x = t2, this.y = t2, this;
          }
          setX(t2) {
            return this.x = t2, this;
          }
          setY(t2) {
            return this.y = t2, this;
          }
          setComponent(t2, e2) {
            switch (t2) {
              case 0:
                this.x = e2;
                break;
              case 1:
                this.y = e2;
                break;
              default:
                throw new Error("index is out of range: " + t2);
            }
            return this;
          }
          getComponent(t2) {
            switch (t2) {
              case 0:
                return this.x;
              case 1:
                return this.y;
              default:
                throw new Error("index is out of range: " + t2);
            }
          }
          clone() {
            return new this.constructor(this.x, this.y);
          }
          copy(t2) {
            return this.x = t2.x, this.y = t2.y, this;
          }
          add(t2) {
            return this.x += t2.x, this.y += t2.y, this;
          }
          addScalar(t2) {
            return this.x += t2, this.y += t2, this;
          }
          addVectors(t2, e2) {
            return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this;
          }
          addScaledVector(t2, e2) {
            return this.x += t2.x * e2, this.y += t2.y * e2, this;
          }
          sub(t2) {
            return this.x -= t2.x, this.y -= t2.y, this;
          }
          subScalar(t2) {
            return this.x -= t2, this.y -= t2, this;
          }
          subVectors(t2, e2) {
            return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this;
          }
          multiply(t2) {
            return this.x *= t2.x, this.y *= t2.y, this;
          }
          multiplyScalar(t2) {
            return this.x *= t2, this.y *= t2, this;
          }
          divide(t2) {
            return this.x /= t2.x, this.y /= t2.y, this;
          }
          divideScalar(t2) {
            return this.multiplyScalar(1 / t2);
          }
          applyMatrix3(t2) {
            const e2 = this.x, i2 = this.y, n2 = t2.elements;
            return this.x = n2[0] * e2 + n2[3] * i2 + n2[6], this.y = n2[1] * e2 + n2[4] * i2 + n2[7], this;
          }
          min(t2) {
            return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
          }
          max(t2) {
            return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
          }
          clamp(t2, e2) {
            return this.x = Math.max(t2.x, Math.min(e2.x, this.x)), this.y = Math.max(t2.y, Math.min(e2.y, this.y)), this;
          }
          clampScalar(t2, e2) {
            return this.x = Math.max(t2, Math.min(e2, this.x)), this.y = Math.max(t2, Math.min(e2, this.y)), this;
          }
          clampLength(t2, e2) {
            const i2 = this.length();
            return this.divideScalar(i2 || 1).multiplyScalar(Math.max(t2, Math.min(e2, i2)));
          }
          floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
          }
          ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
          }
          round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
          }
          roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
          }
          negate() {
            return this.x = -this.x, this.y = -this.y, this;
          }
          dot(t2) {
            return this.x * t2.x + this.y * t2.y;
          }
          cross(t2) {
            return this.x * t2.y - this.y * t2.x;
          }
          lengthSq() {
            return this.x * this.x + this.y * this.y;
          }
          length() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          }
          manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y);
          }
          normalize() {
            return this.divideScalar(this.length() || 1);
          }
          angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI;
          }
          distanceTo(t2) {
            return Math.sqrt(this.distanceToSquared(t2));
          }
          distanceToSquared(t2) {
            const e2 = this.x - t2.x, i2 = this.y - t2.y;
            return e2 * e2 + i2 * i2;
          }
          manhattanDistanceTo(t2) {
            return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
          }
          setLength(t2) {
            return this.normalize().multiplyScalar(t2);
          }
          lerp(t2, e2) {
            return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this;
          }
          lerpVectors(t2, e2, i2) {
            return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this;
          }
          equals(t2) {
            return t2.x === this.x && t2.y === this.y;
          }
          fromArray(t2, e2 = 0) {
            return this.x = t2[e2], this.y = t2[e2 + 1], this;
          }
          toArray(t2 = [], e2 = 0) {
            return t2[e2] = this.x, t2[e2 + 1] = this.y, t2;
          }
          fromBufferAttribute(t2, e2) {
            return this.x = t2.getX(e2), this.y = t2.getY(e2), this;
          }
          rotateAround(t2, e2) {
            const i2 = Math.cos(e2), n2 = Math.sin(e2), r2 = this.x - t2.x, s2 = this.y - t2.y;
            return this.x = r2 * i2 - s2 * n2 + t2.x, this.y = r2 * n2 + s2 * i2 + t2.y, this;
          }
          random() {
            return this.x = Math.random(), this.y = Math.random(), this;
          }
          *[Symbol.iterator]() {
            yield this.x, yield this.y;
          }
        }
        class Rt {
          constructor() {
            Rt.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
          }
          set(t2, e2, i2, n2, r2, s2, a2, o2, l2) {
            const c2 = this.elements;
            return c2[0] = t2, c2[1] = n2, c2[2] = a2, c2[3] = e2, c2[4] = r2, c2[5] = o2, c2[6] = i2, c2[7] = s2, c2[8] = l2, this;
          }
          identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
          }
          copy(t2) {
            const e2 = this.elements, i2 = t2.elements;
            return e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], this;
          }
          extractBasis(t2, e2, i2) {
            return t2.setFromMatrix3Column(this, 0), e2.setFromMatrix3Column(this, 1), i2.setFromMatrix3Column(this, 2), this;
          }
          setFromMatrix4(t2) {
            const e2 = t2.elements;
            return this.set(e2[0], e2[4], e2[8], e2[1], e2[5], e2[9], e2[2], e2[6], e2[10]), this;
          }
          multiply(t2) {
            return this.multiplyMatrices(this, t2);
          }
          premultiply(t2) {
            return this.multiplyMatrices(t2, this);
          }
          multiplyMatrices(t2, e2) {
            const i2 = t2.elements, n2 = e2.elements, r2 = this.elements, s2 = i2[0], a2 = i2[3], o2 = i2[6], l2 = i2[1], c2 = i2[4], h2 = i2[7], u2 = i2[2], d2 = i2[5], p2 = i2[8], m2 = n2[0], f2 = n2[3], g2 = n2[6], v2 = n2[1], x2 = n2[4], _2 = n2[7], y2 = n2[2], M2 = n2[5], b2 = n2[8];
            return r2[0] = s2 * m2 + a2 * v2 + o2 * y2, r2[3] = s2 * f2 + a2 * x2 + o2 * M2, r2[6] = s2 * g2 + a2 * _2 + o2 * b2, r2[1] = l2 * m2 + c2 * v2 + h2 * y2, r2[4] = l2 * f2 + c2 * x2 + h2 * M2, r2[7] = l2 * g2 + c2 * _2 + h2 * b2, r2[2] = u2 * m2 + d2 * v2 + p2 * y2, r2[5] = u2 * f2 + d2 * x2 + p2 * M2, r2[8] = u2 * g2 + d2 * _2 + p2 * b2, this;
          }
          multiplyScalar(t2) {
            const e2 = this.elements;
            return e2[0] *= t2, e2[3] *= t2, e2[6] *= t2, e2[1] *= t2, e2[4] *= t2, e2[7] *= t2, e2[2] *= t2, e2[5] *= t2, e2[8] *= t2, this;
          }
          determinant() {
            const t2 = this.elements, e2 = t2[0], i2 = t2[1], n2 = t2[2], r2 = t2[3], s2 = t2[4], a2 = t2[5], o2 = t2[6], l2 = t2[7], c2 = t2[8];
            return e2 * s2 * c2 - e2 * a2 * l2 - i2 * r2 * c2 + i2 * a2 * o2 + n2 * r2 * l2 - n2 * s2 * o2;
          }
          invert() {
            const t2 = this.elements, e2 = t2[0], i2 = t2[1], n2 = t2[2], r2 = t2[3], s2 = t2[4], a2 = t2[5], o2 = t2[6], l2 = t2[7], c2 = t2[8], h2 = c2 * s2 - a2 * l2, u2 = a2 * o2 - c2 * r2, d2 = l2 * r2 - s2 * o2, p2 = e2 * h2 + i2 * u2 + n2 * d2;
            if (0 === p2)
              return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const m2 = 1 / p2;
            return t2[0] = h2 * m2, t2[1] = (n2 * l2 - c2 * i2) * m2, t2[2] = (a2 * i2 - n2 * s2) * m2, t2[3] = u2 * m2, t2[4] = (c2 * e2 - n2 * o2) * m2, t2[5] = (n2 * r2 - a2 * e2) * m2, t2[6] = d2 * m2, t2[7] = (i2 * o2 - l2 * e2) * m2, t2[8] = (s2 * e2 - i2 * r2) * m2, this;
          }
          transpose() {
            let t2;
            const e2 = this.elements;
            return t2 = e2[1], e2[1] = e2[3], e2[3] = t2, t2 = e2[2], e2[2] = e2[6], e2[6] = t2, t2 = e2[5], e2[5] = e2[7], e2[7] = t2, this;
          }
          getNormalMatrix(t2) {
            return this.setFromMatrix4(t2).invert().transpose();
          }
          transposeIntoArray(t2) {
            const e2 = this.elements;
            return t2[0] = e2[0], t2[1] = e2[3], t2[2] = e2[6], t2[3] = e2[1], t2[4] = e2[4], t2[5] = e2[7], t2[6] = e2[2], t2[7] = e2[5], t2[8] = e2[8], this;
          }
          setUvTransform(t2, e2, i2, n2, r2, s2, a2) {
            const o2 = Math.cos(r2), l2 = Math.sin(r2);
            return this.set(i2 * o2, i2 * l2, -i2 * (o2 * s2 + l2 * a2) + s2 + t2, -n2 * l2, n2 * o2, -n2 * (-l2 * s2 + o2 * a2) + a2 + e2, 0, 0, 1), this;
          }
          scale(t2, e2) {
            const i2 = this.elements;
            return i2[0] *= t2, i2[3] *= t2, i2[6] *= t2, i2[1] *= e2, i2[4] *= e2, i2[7] *= e2, this;
          }
          rotate(t2) {
            const e2 = Math.cos(t2), i2 = Math.sin(t2), n2 = this.elements, r2 = n2[0], s2 = n2[3], a2 = n2[6], o2 = n2[1], l2 = n2[4], c2 = n2[7];
            return n2[0] = e2 * r2 + i2 * o2, n2[3] = e2 * s2 + i2 * l2, n2[6] = e2 * a2 + i2 * c2, n2[1] = -i2 * r2 + e2 * o2, n2[4] = -i2 * s2 + e2 * l2, n2[7] = -i2 * a2 + e2 * c2, this;
          }
          translate(t2, e2) {
            const i2 = this.elements;
            return i2[0] += t2 * i2[2], i2[3] += t2 * i2[5], i2[6] += t2 * i2[8], i2[1] += e2 * i2[2], i2[4] += e2 * i2[5], i2[7] += e2 * i2[8], this;
          }
          equals(t2) {
            const e2 = this.elements, i2 = t2.elements;
            for (let t3 = 0; t3 < 9; t3++)
              if (e2[t3] !== i2[t3])
                return false;
            return true;
          }
          fromArray(t2, e2 = 0) {
            for (let i2 = 0; i2 < 9; i2++)
              this.elements[i2] = t2[i2 + e2];
            return this;
          }
          toArray(t2 = [], e2 = 0) {
            const i2 = this.elements;
            return t2[e2] = i2[0], t2[e2 + 1] = i2[1], t2[e2 + 2] = i2[2], t2[e2 + 3] = i2[3], t2[e2 + 4] = i2[4], t2[e2 + 5] = i2[5], t2[e2 + 6] = i2[6], t2[e2 + 7] = i2[7], t2[e2 + 8] = i2[8], t2;
          }
          clone() {
            return new this.constructor().fromArray(this.elements);
          }
        }
        function Pt(t2) {
          for (let e2 = t2.length - 1; e2 >= 0; --e2)
            if (t2[e2] >= 65535)
              return true;
          return false;
        }
        const It = { Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array };
        function Dt(t2, e2) {
          return new It[t2](e2);
        }
        function Nt(t2) {
          return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
        }
        function Ot(t2) {
          return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
        }
        function zt(t2) {
          return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
        }
        const Ut = { [lt]: { [ct]: Ot }, [ct]: { [lt]: zt } }, Bt = { legacyMode: true, get workingColorSpace() {
          return ct;
        }, set workingColorSpace(t2) {
          console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
        }, convert: function(t2, e2, i2) {
          if (this.legacyMode || e2 === i2 || !e2 || !i2)
            return t2;
          if (Ut[e2] && void 0 !== Ut[e2][i2]) {
            const n2 = Ut[e2][i2];
            return t2.r = n2(t2.r), t2.g = n2(t2.g), t2.b = n2(t2.b), t2;
          }
          throw new Error("Unsupported color space conversion.");
        }, fromWorkingColorSpace: function(t2, e2) {
          return this.convert(t2, this.workingColorSpace, e2);
        }, toWorkingColorSpace: function(t2, e2) {
          return this.convert(t2, e2, this.workingColorSpace);
        } }, Ft = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, kt = { r: 0, g: 0, b: 0 }, Gt = { h: 0, s: 0, l: 0 }, Vt = { h: 0, s: 0, l: 0 };
        function Ht(t2, e2, i2) {
          return i2 < 0 && (i2 += 1), i2 > 1 && (i2 -= 1), i2 < 1 / 6 ? t2 + 6 * (e2 - t2) * i2 : i2 < 0.5 ? e2 : i2 < 2 / 3 ? t2 + 6 * (e2 - t2) * (2 / 3 - i2) : t2;
        }
        function Wt(t2, e2) {
          return e2.r = t2.r, e2.g = t2.g, e2.b = t2.b, e2;
        }
        class jt {
          constructor(t2, e2, i2) {
            return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, void 0 === e2 && void 0 === i2 ? this.set(t2) : this.setRGB(t2, e2, i2);
          }
          set(t2) {
            return t2 && t2.isColor ? this.copy(t2) : "number" == typeof t2 ? this.setHex(t2) : "string" == typeof t2 && this.setStyle(t2), this;
          }
          setScalar(t2) {
            return this.r = t2, this.g = t2, this.b = t2, this;
          }
          setHex(t2, e2 = "srgb") {
            return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, Bt.toWorkingColorSpace(this, e2), this;
          }
          setRGB(t2, e2, i2, n2 = "srgb-linear") {
            return this.r = t2, this.g = e2, this.b = i2, Bt.toWorkingColorSpace(this, n2), this;
          }
          setHSL(t2, e2, i2, n2 = "srgb-linear") {
            if (t2 = Mt(t2, 1), e2 = yt(e2, 0, 1), i2 = yt(i2, 0, 1), 0 === e2)
              this.r = this.g = this.b = i2;
            else {
              const n3 = i2 <= 0.5 ? i2 * (1 + e2) : i2 + e2 - i2 * e2, r2 = 2 * i2 - n3;
              this.r = Ht(r2, n3, t2 + 1 / 3), this.g = Ht(r2, n3, t2), this.b = Ht(r2, n3, t2 - 1 / 3);
            }
            return Bt.toWorkingColorSpace(this, n2), this;
          }
          setStyle(t2, e2 = "srgb") {
            function i2(e3) {
              void 0 !== e3 && parseFloat(e3) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
            }
            let n2;
            if (n2 = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t2)) {
              let t3;
              const r2 = n2[1], s2 = n2[2];
              switch (r2) {
                case "rgb":
                case "rgba":
                  if (t3 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2))
                    return this.r = Math.min(255, parseInt(t3[1], 10)) / 255, this.g = Math.min(255, parseInt(t3[2], 10)) / 255, this.b = Math.min(255, parseInt(t3[3], 10)) / 255, Bt.toWorkingColorSpace(this, e2), i2(t3[4]), this;
                  if (t3 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2))
                    return this.r = Math.min(100, parseInt(t3[1], 10)) / 100, this.g = Math.min(100, parseInt(t3[2], 10)) / 100, this.b = Math.min(100, parseInt(t3[3], 10)) / 100, Bt.toWorkingColorSpace(this, e2), i2(t3[4]), this;
                  break;
                case "hsl":
                case "hsla":
                  if (t3 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2)) {
                    const n3 = parseFloat(t3[1]) / 360, r3 = parseFloat(t3[2]) / 100, s3 = parseFloat(t3[3]) / 100;
                    return i2(t3[4]), this.setHSL(n3, r3, s3, e2);
                  }
              }
            } else if (n2 = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
              const t3 = n2[1], i3 = t3.length;
              if (3 === i3)
                return this.r = parseInt(t3.charAt(0) + t3.charAt(0), 16) / 255, this.g = parseInt(t3.charAt(1) + t3.charAt(1), 16) / 255, this.b = parseInt(t3.charAt(2) + t3.charAt(2), 16) / 255, Bt.toWorkingColorSpace(this, e2), this;
              if (6 === i3)
                return this.r = parseInt(t3.charAt(0) + t3.charAt(1), 16) / 255, this.g = parseInt(t3.charAt(2) + t3.charAt(3), 16) / 255, this.b = parseInt(t3.charAt(4) + t3.charAt(5), 16) / 255, Bt.toWorkingColorSpace(this, e2), this;
            }
            return t2 && t2.length > 0 ? this.setColorName(t2, e2) : this;
          }
          setColorName(t2, e2 = "srgb") {
            const i2 = Ft[t2.toLowerCase()];
            return void 0 !== i2 ? this.setHex(i2, e2) : console.warn("THREE.Color: Unknown color " + t2), this;
          }
          clone() {
            return new this.constructor(this.r, this.g, this.b);
          }
          copy(t2) {
            return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
          }
          copySRGBToLinear(t2) {
            return this.r = Ot(t2.r), this.g = Ot(t2.g), this.b = Ot(t2.b), this;
          }
          copyLinearToSRGB(t2) {
            return this.r = zt(t2.r), this.g = zt(t2.g), this.b = zt(t2.b), this;
          }
          convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this;
          }
          convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this;
          }
          getHex(t2 = "srgb") {
            return Bt.fromWorkingColorSpace(Wt(this, kt), t2), yt(255 * kt.r, 0, 255) << 16 ^ yt(255 * kt.g, 0, 255) << 8 ^ yt(255 * kt.b, 0, 255) << 0;
          }
          getHexString(t2 = "srgb") {
            return ("000000" + this.getHex(t2).toString(16)).slice(-6);
          }
          getHSL(t2, e2 = "srgb-linear") {
            Bt.fromWorkingColorSpace(Wt(this, kt), e2);
            const i2 = kt.r, n2 = kt.g, r2 = kt.b, s2 = Math.max(i2, n2, r2), a2 = Math.min(i2, n2, r2);
            let o2, l2;
            const c2 = (a2 + s2) / 2;
            if (a2 === s2)
              o2 = 0, l2 = 0;
            else {
              const t3 = s2 - a2;
              switch (l2 = c2 <= 0.5 ? t3 / (s2 + a2) : t3 / (2 - s2 - a2), s2) {
                case i2:
                  o2 = (n2 - r2) / t3 + (n2 < r2 ? 6 : 0);
                  break;
                case n2:
                  o2 = (r2 - i2) / t3 + 2;
                  break;
                case r2:
                  o2 = (i2 - n2) / t3 + 4;
              }
              o2 /= 6;
            }
            return t2.h = o2, t2.s = l2, t2.l = c2, t2;
          }
          getRGB(t2, e2 = "srgb-linear") {
            return Bt.fromWorkingColorSpace(Wt(this, kt), e2), t2.r = kt.r, t2.g = kt.g, t2.b = kt.b, t2;
          }
          getStyle(t2 = "srgb") {
            return Bt.fromWorkingColorSpace(Wt(this, kt), t2), t2 !== lt ? `color(${t2} ${kt.r} ${kt.g} ${kt.b})` : `rgb(${255 * kt.r | 0},${255 * kt.g | 0},${255 * kt.b | 0})`;
          }
          offsetHSL(t2, e2, i2) {
            return this.getHSL(Gt), Gt.h += t2, Gt.s += e2, Gt.l += i2, this.setHSL(Gt.h, Gt.s, Gt.l), this;
          }
          add(t2) {
            return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
          }
          addColors(t2, e2) {
            return this.r = t2.r + e2.r, this.g = t2.g + e2.g, this.b = t2.b + e2.b, this;
          }
          addScalar(t2) {
            return this.r += t2, this.g += t2, this.b += t2, this;
          }
          sub(t2) {
            return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
          }
          multiply(t2) {
            return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
          }
          multiplyScalar(t2) {
            return this.r *= t2, this.g *= t2, this.b *= t2, this;
          }
          lerp(t2, e2) {
            return this.r += (t2.r - this.r) * e2, this.g += (t2.g - this.g) * e2, this.b += (t2.b - this.b) * e2, this;
          }
          lerpColors(t2, e2, i2) {
            return this.r = t2.r + (e2.r - t2.r) * i2, this.g = t2.g + (e2.g - t2.g) * i2, this.b = t2.b + (e2.b - t2.b) * i2, this;
          }
          lerpHSL(t2, e2) {
            this.getHSL(Gt), t2.getHSL(Vt);
            const i2 = bt(Gt.h, Vt.h, e2), n2 = bt(Gt.s, Vt.s, e2), r2 = bt(Gt.l, Vt.l, e2);
            return this.setHSL(i2, n2, r2), this;
          }
          equals(t2) {
            return t2.r === this.r && t2.g === this.g && t2.b === this.b;
          }
          fromArray(t2, e2 = 0) {
            return this.r = t2[e2], this.g = t2[e2 + 1], this.b = t2[e2 + 2], this;
          }
          toArray(t2 = [], e2 = 0) {
            return t2[e2] = this.r, t2[e2 + 1] = this.g, t2[e2 + 2] = this.b, t2;
          }
          fromBufferAttribute(t2, e2) {
            return this.r = t2.getX(e2), this.g = t2.getY(e2), this.b = t2.getZ(e2), this;
          }
          toJSON() {
            return this.getHex();
          }
          *[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b;
          }
        }
        let qt;
        jt.NAMES = Ft;
        class Xt {
          static getDataURL(t2) {
            if (/^data:/i.test(t2.src))
              return t2.src;
            if ("undefined" == typeof HTMLCanvasElement)
              return t2.src;
            let e2;
            if (t2 instanceof HTMLCanvasElement)
              e2 = t2;
            else {
              void 0 === qt && (qt = Nt("canvas")), qt.width = t2.width, qt.height = t2.height;
              const i2 = qt.getContext("2d");
              t2 instanceof ImageData ? i2.putImageData(t2, 0, 0) : i2.drawImage(t2, 0, 0, t2.width, t2.height), e2 = qt;
            }
            return e2.width > 2048 || e2.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t2), e2.toDataURL("image/jpeg", 0.6)) : e2.toDataURL("image/png");
          }
          static sRGBToLinear(t2) {
            if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
              const e2 = Nt("canvas");
              e2.width = t2.width, e2.height = t2.height;
              const i2 = e2.getContext("2d");
              i2.drawImage(t2, 0, 0, t2.width, t2.height);
              const n2 = i2.getImageData(0, 0, t2.width, t2.height), r2 = n2.data;
              for (let t3 = 0; t3 < r2.length; t3++)
                r2[t3] = 255 * Ot(r2[t3] / 255);
              return i2.putImageData(n2, 0, 0), e2;
            }
            if (t2.data) {
              const e2 = t2.data.slice(0);
              for (let t3 = 0; t3 < e2.length; t3++)
                e2 instanceof Uint8Array || e2 instanceof Uint8ClampedArray ? e2[t3] = Math.floor(255 * Ot(e2[t3] / 255)) : e2[t3] = Ot(e2[t3]);
              return { data: e2, width: t2.width, height: t2.height };
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
          }
        }
        class Yt {
          constructor(t2 = null) {
            this.isSource = true, this.uuid = _t(), this.data = t2, this.version = 0;
          }
          set needsUpdate(t2) {
            true === t2 && this.version++;
          }
          toJSON(t2) {
            const e2 = void 0 === t2 || "string" == typeof t2;
            if (!e2 && void 0 !== t2.images[this.uuid])
              return t2.images[this.uuid];
            const i2 = { uuid: this.uuid, url: "" }, n2 = this.data;
            if (null !== n2) {
              let t3;
              if (Array.isArray(n2)) {
                t3 = [];
                for (let e3 = 0, i3 = n2.length; e3 < i3; e3++)
                  n2[e3].isDataTexture ? t3.push(Zt(n2[e3].image)) : t3.push(Zt(n2[e3]));
              } else
                t3 = Zt(n2);
              i2.url = t3;
            }
            return e2 || (t2.images[this.uuid] = i2), i2;
          }
        }
        function Zt(t2) {
          return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? Xt.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
        }
        let Jt = 0;
        class Kt extends mt {
          constructor(t2 = Kt.DEFAULT_IMAGE, e2 = Kt.DEFAULT_MAPPING, i2 = 1001, n2 = 1001, r2 = 1006, s2 = 1008, a2 = 1023, o2 = 1009, l2 = 1, c2 = 3e3) {
            super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Jt++ }), this.uuid = _t(), this.name = "", this.source = new Yt(t2), this.mipmaps = [], this.mapping = e2, this.wrapS = i2, this.wrapT = n2, this.magFilter = r2, this.minFilter = s2, this.anisotropy = l2, this.format = a2, this.internalFormat = null, this.type = o2, this.offset = new Lt(0, 0), this.repeat = new Lt(1, 1), this.center = new Lt(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Rt(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.encoding = c2, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.needsPMREMUpdate = false;
          }
          get image() {
            return this.source.data;
          }
          set image(t2) {
            this.source.data = t2;
          }
          updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.encoding = t2.encoding, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
          }
          toJSON(t2) {
            const e2 = void 0 === t2 || "string" == typeof t2;
            if (!e2 && void 0 !== t2.textures[this.uuid])
              return t2.textures[this.uuid];
            const i2 = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
            return "{}" !== JSON.stringify(this.userData) && (i2.userData = this.userData), e2 || (t2.textures[this.uuid] = i2), i2;
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
          transformUv(t2) {
            if (this.mapping !== n)
              return t2;
            if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1)
              switch (this.wrapS) {
                case c:
                  t2.x = t2.x - Math.floor(t2.x);
                  break;
                case h:
                  t2.x = t2.x < 0 ? 0 : 1;
                  break;
                case u:
                  1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
              }
            if (t2.y < 0 || t2.y > 1)
              switch (this.wrapT) {
                case c:
                  t2.y = t2.y - Math.floor(t2.y);
                  break;
                case h:
                  t2.y = t2.y < 0 ? 0 : 1;
                  break;
                case u:
                  1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
              }
            return this.flipY && (t2.y = 1 - t2.y), t2;
          }
          set needsUpdate(t2) {
            true === t2 && (this.version++, this.source.needsUpdate = true);
          }
        }
        Kt.DEFAULT_IMAGE = null, Kt.DEFAULT_MAPPING = n;
        class $t {
          constructor(t2 = 0, e2 = 0, i2 = 0, n2 = 1) {
            $t.prototype.isVector4 = true, this.x = t2, this.y = e2, this.z = i2, this.w = n2;
          }
          get width() {
            return this.z;
          }
          set width(t2) {
            this.z = t2;
          }
          get height() {
            return this.w;
          }
          set height(t2) {
            this.w = t2;
          }
          set(t2, e2, i2, n2) {
            return this.x = t2, this.y = e2, this.z = i2, this.w = n2, this;
          }
          setScalar(t2) {
            return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
          }
          setX(t2) {
            return this.x = t2, this;
          }
          setY(t2) {
            return this.y = t2, this;
          }
          setZ(t2) {
            return this.z = t2, this;
          }
          setW(t2) {
            return this.w = t2, this;
          }
          setComponent(t2, e2) {
            switch (t2) {
              case 0:
                this.x = e2;
                break;
              case 1:
                this.y = e2;
                break;
              case 2:
                this.z = e2;
                break;
              case 3:
                this.w = e2;
                break;
              default:
                throw new Error("index is out of range: " + t2);
            }
            return this;
          }
          getComponent(t2) {
            switch (t2) {
              case 0:
                return this.x;
              case 1:
                return this.y;
              case 2:
                return this.z;
              case 3:
                return this.w;
              default:
                throw new Error("index is out of range: " + t2);
            }
          }
          clone() {
            return new this.constructor(this.x, this.y, this.z, this.w);
          }
          copy(t2) {
            return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
          }
          add(t2) {
            return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
          }
          addScalar(t2) {
            return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
          }
          addVectors(t2, e2) {
            return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this.w = t2.w + e2.w, this;
          }
          addScaledVector(t2, e2) {
            return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this.w += t2.w * e2, this;
          }
          sub(t2) {
            return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
          }
          subScalar(t2) {
            return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
          }
          subVectors(t2, e2) {
            return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this.w = t2.w - e2.w, this;
          }
          multiply(t2) {
            return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
          }
          multiplyScalar(t2) {
            return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
          }
          applyMatrix4(t2) {
            const e2 = this.x, i2 = this.y, n2 = this.z, r2 = this.w, s2 = t2.elements;
            return this.x = s2[0] * e2 + s2[4] * i2 + s2[8] * n2 + s2[12] * r2, this.y = s2[1] * e2 + s2[5] * i2 + s2[9] * n2 + s2[13] * r2, this.z = s2[2] * e2 + s2[6] * i2 + s2[10] * n2 + s2[14] * r2, this.w = s2[3] * e2 + s2[7] * i2 + s2[11] * n2 + s2[15] * r2, this;
          }
          divideScalar(t2) {
            return this.multiplyScalar(1 / t2);
          }
          setAxisAngleFromQuaternion(t2) {
            this.w = 2 * Math.acos(t2.w);
            const e2 = Math.sqrt(1 - t2.w * t2.w);
            return e2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e2, this.y = t2.y / e2, this.z = t2.z / e2), this;
          }
          setAxisAngleFromRotationMatrix(t2) {
            let e2, i2, n2, r2;
            const s2 = 0.01, a2 = 0.1, o2 = t2.elements, l2 = o2[0], c2 = o2[4], h2 = o2[8], u2 = o2[1], d2 = o2[5], p2 = o2[9], m2 = o2[2], f2 = o2[6], g2 = o2[10];
            if (Math.abs(c2 - u2) < s2 && Math.abs(h2 - m2) < s2 && Math.abs(p2 - f2) < s2) {
              if (Math.abs(c2 + u2) < a2 && Math.abs(h2 + m2) < a2 && Math.abs(p2 + f2) < a2 && Math.abs(l2 + d2 + g2 - 3) < a2)
                return this.set(1, 0, 0, 0), this;
              e2 = Math.PI;
              const t3 = (l2 + 1) / 2, o3 = (d2 + 1) / 2, v3 = (g2 + 1) / 2, x2 = (c2 + u2) / 4, _2 = (h2 + m2) / 4, y2 = (p2 + f2) / 4;
              return t3 > o3 && t3 > v3 ? t3 < s2 ? (i2 = 0, n2 = 0.707106781, r2 = 0.707106781) : (i2 = Math.sqrt(t3), n2 = x2 / i2, r2 = _2 / i2) : o3 > v3 ? o3 < s2 ? (i2 = 0.707106781, n2 = 0, r2 = 0.707106781) : (n2 = Math.sqrt(o3), i2 = x2 / n2, r2 = y2 / n2) : v3 < s2 ? (i2 = 0.707106781, n2 = 0.707106781, r2 = 0) : (r2 = Math.sqrt(v3), i2 = _2 / r2, n2 = y2 / r2), this.set(i2, n2, r2, e2), this;
            }
            let v2 = Math.sqrt((f2 - p2) * (f2 - p2) + (h2 - m2) * (h2 - m2) + (u2 - c2) * (u2 - c2));
            return Math.abs(v2) < 1e-3 && (v2 = 1), this.x = (f2 - p2) / v2, this.y = (h2 - m2) / v2, this.z = (u2 - c2) / v2, this.w = Math.acos((l2 + d2 + g2 - 1) / 2), this;
          }
          min(t2) {
            return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
          }
          max(t2) {
            return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
          }
          clamp(t2, e2) {
            return this.x = Math.max(t2.x, Math.min(e2.x, this.x)), this.y = Math.max(t2.y, Math.min(e2.y, this.y)), this.z = Math.max(t2.z, Math.min(e2.z, this.z)), this.w = Math.max(t2.w, Math.min(e2.w, this.w)), this;
          }
          clampScalar(t2, e2) {
            return this.x = Math.max(t2, Math.min(e2, this.x)), this.y = Math.max(t2, Math.min(e2, this.y)), this.z = Math.max(t2, Math.min(e2, this.z)), this.w = Math.max(t2, Math.min(e2, this.w)), this;
          }
          clampLength(t2, e2) {
            const i2 = this.length();
            return this.divideScalar(i2 || 1).multiplyScalar(Math.max(t2, Math.min(e2, i2)));
          }
          floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
          }
          ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
          }
          round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
          }
          roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
          }
          negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
          }
          dot(t2) {
            return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
          }
          lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
          }
          length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
          }
          manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
          }
          normalize() {
            return this.divideScalar(this.length() || 1);
          }
          setLength(t2) {
            return this.normalize().multiplyScalar(t2);
          }
          lerp(t2, e2) {
            return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this.w += (t2.w - this.w) * e2, this;
          }
          lerpVectors(t2, e2, i2) {
            return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this.z = t2.z + (e2.z - t2.z) * i2, this.w = t2.w + (e2.w - t2.w) * i2, this;
          }
          equals(t2) {
            return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
          }
          fromArray(t2, e2 = 0) {
            return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this.w = t2[e2 + 3], this;
          }
          toArray(t2 = [], e2 = 0) {
            return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2[e2 + 3] = this.w, t2;
          }
          fromBufferAttribute(t2, e2) {
            return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this.w = t2.getW(e2), this;
          }
          random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
          }
          *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w;
          }
        }
        class Qt extends mt {
          constructor(t2, e2, i2 = {}) {
            super(), this.isWebGLRenderTarget = true, this.width = t2, this.height = e2, this.depth = 1, this.scissor = new $t(0, 0, t2, e2), this.scissorTest = false, this.viewport = new $t(0, 0, t2, e2);
            const n2 = { width: t2, height: e2, depth: 1 };
            this.texture = new Kt(n2, i2.mapping, i2.wrapS, i2.wrapT, i2.magFilter, i2.minFilter, i2.format, i2.type, i2.anisotropy, i2.encoding), this.texture.isRenderTargetTexture = true, this.texture.flipY = false, this.texture.generateMipmaps = void 0 !== i2.generateMipmaps && i2.generateMipmaps, this.texture.internalFormat = void 0 !== i2.internalFormat ? i2.internalFormat : null, this.texture.minFilter = void 0 !== i2.minFilter ? i2.minFilter : f, this.depthBuffer = void 0 === i2.depthBuffer || i2.depthBuffer, this.stencilBuffer = void 0 !== i2.stencilBuffer && i2.stencilBuffer, this.depthTexture = void 0 !== i2.depthTexture ? i2.depthTexture : null, this.samples = void 0 !== i2.samples ? i2.samples : 0;
          }
          setSize(t2, e2, i2 = 1) {
            this.width === t2 && this.height === e2 && this.depth === i2 || (this.width = t2, this.height = e2, this.depth = i2, this.texture.image.width = t2, this.texture.image.height = e2, this.texture.image.depth = i2, this.dispose()), this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2);
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.viewport.copy(t2.viewport), this.texture = t2.texture.clone(), this.texture.isRenderTargetTexture = true;
            const e2 = Object.assign({}, t2.texture.image);
            return this.texture.source = new Yt(e2), this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
        }
        class te extends Kt {
          constructor(t2 = null, e2 = 1, i2 = 1, n2 = 1) {
            super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e2, height: i2, depth: n2 }, this.magFilter = d, this.minFilter = d, this.wrapR = h, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
          }
        }
        class ee extends Kt {
          constructor(t2 = null, e2 = 1, i2 = 1, n2 = 1) {
            super(null), this.isData3DTexture = true, this.image = { data: t2, width: e2, height: i2, depth: n2 }, this.magFilter = d, this.minFilter = d, this.wrapR = h, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
          }
        }
        class ie {
          constructor(t2 = 0, e2 = 0, i2 = 0, n2 = 1) {
            this.isQuaternion = true, this._x = t2, this._y = e2, this._z = i2, this._w = n2;
          }
          static slerpFlat(t2, e2, i2, n2, r2, s2, a2) {
            let o2 = i2[n2 + 0], l2 = i2[n2 + 1], c2 = i2[n2 + 2], h2 = i2[n2 + 3];
            const u2 = r2[s2 + 0], d2 = r2[s2 + 1], p2 = r2[s2 + 2], m2 = r2[s2 + 3];
            if (0 === a2)
              return t2[e2 + 0] = o2, t2[e2 + 1] = l2, t2[e2 + 2] = c2, void (t2[e2 + 3] = h2);
            if (1 === a2)
              return t2[e2 + 0] = u2, t2[e2 + 1] = d2, t2[e2 + 2] = p2, void (t2[e2 + 3] = m2);
            if (h2 !== m2 || o2 !== u2 || l2 !== d2 || c2 !== p2) {
              let t3 = 1 - a2;
              const e3 = o2 * u2 + l2 * d2 + c2 * p2 + h2 * m2, i3 = e3 >= 0 ? 1 : -1, n3 = 1 - e3 * e3;
              if (n3 > Number.EPSILON) {
                const r4 = Math.sqrt(n3), s3 = Math.atan2(r4, e3 * i3);
                t3 = Math.sin(t3 * s3) / r4, a2 = Math.sin(a2 * s3) / r4;
              }
              const r3 = a2 * i3;
              if (o2 = o2 * t3 + u2 * r3, l2 = l2 * t3 + d2 * r3, c2 = c2 * t3 + p2 * r3, h2 = h2 * t3 + m2 * r3, t3 === 1 - a2) {
                const t4 = 1 / Math.sqrt(o2 * o2 + l2 * l2 + c2 * c2 + h2 * h2);
                o2 *= t4, l2 *= t4, c2 *= t4, h2 *= t4;
              }
            }
            t2[e2] = o2, t2[e2 + 1] = l2, t2[e2 + 2] = c2, t2[e2 + 3] = h2;
          }
          static multiplyQuaternionsFlat(t2, e2, i2, n2, r2, s2) {
            const a2 = i2[n2], o2 = i2[n2 + 1], l2 = i2[n2 + 2], c2 = i2[n2 + 3], h2 = r2[s2], u2 = r2[s2 + 1], d2 = r2[s2 + 2], p2 = r2[s2 + 3];
            return t2[e2] = a2 * p2 + c2 * h2 + o2 * d2 - l2 * u2, t2[e2 + 1] = o2 * p2 + c2 * u2 + l2 * h2 - a2 * d2, t2[e2 + 2] = l2 * p2 + c2 * d2 + a2 * u2 - o2 * h2, t2[e2 + 3] = c2 * p2 - a2 * h2 - o2 * u2 - l2 * d2, t2;
          }
          get x() {
            return this._x;
          }
          set x(t2) {
            this._x = t2, this._onChangeCallback();
          }
          get y() {
            return this._y;
          }
          set y(t2) {
            this._y = t2, this._onChangeCallback();
          }
          get z() {
            return this._z;
          }
          set z(t2) {
            this._z = t2, this._onChangeCallback();
          }
          get w() {
            return this._w;
          }
          set w(t2) {
            this._w = t2, this._onChangeCallback();
          }
          set(t2, e2, i2, n2) {
            return this._x = t2, this._y = e2, this._z = i2, this._w = n2, this._onChangeCallback(), this;
          }
          clone() {
            return new this.constructor(this._x, this._y, this._z, this._w);
          }
          copy(t2) {
            return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
          }
          setFromEuler(t2, e2) {
            const i2 = t2._x, n2 = t2._y, r2 = t2._z, s2 = t2._order, a2 = Math.cos, o2 = Math.sin, l2 = a2(i2 / 2), c2 = a2(n2 / 2), h2 = a2(r2 / 2), u2 = o2(i2 / 2), d2 = o2(n2 / 2), p2 = o2(r2 / 2);
            switch (s2) {
              case "XYZ":
                this._x = u2 * c2 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c2 * p2, this._z = l2 * c2 * p2 + u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p2;
                break;
              case "YXZ":
                this._x = u2 * c2 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c2 * p2, this._z = l2 * c2 * p2 - u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p2;
                break;
              case "ZXY":
                this._x = u2 * c2 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c2 * p2, this._z = l2 * c2 * p2 + u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p2;
                break;
              case "ZYX":
                this._x = u2 * c2 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c2 * p2, this._z = l2 * c2 * p2 - u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p2;
                break;
              case "YZX":
                this._x = u2 * c2 * h2 + l2 * d2 * p2, this._y = l2 * d2 * h2 + u2 * c2 * p2, this._z = l2 * c2 * p2 - u2 * d2 * h2, this._w = l2 * c2 * h2 - u2 * d2 * p2;
                break;
              case "XZY":
                this._x = u2 * c2 * h2 - l2 * d2 * p2, this._y = l2 * d2 * h2 - u2 * c2 * p2, this._z = l2 * c2 * p2 + u2 * d2 * h2, this._w = l2 * c2 * h2 + u2 * d2 * p2;
                break;
              default:
                console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s2);
            }
            return false !== e2 && this._onChangeCallback(), this;
          }
          setFromAxisAngle(t2, e2) {
            const i2 = e2 / 2, n2 = Math.sin(i2);
            return this._x = t2.x * n2, this._y = t2.y * n2, this._z = t2.z * n2, this._w = Math.cos(i2), this._onChangeCallback(), this;
          }
          setFromRotationMatrix(t2) {
            const e2 = t2.elements, i2 = e2[0], n2 = e2[4], r2 = e2[8], s2 = e2[1], a2 = e2[5], o2 = e2[9], l2 = e2[2], c2 = e2[6], h2 = e2[10], u2 = i2 + a2 + h2;
            if (u2 > 0) {
              const t3 = 0.5 / Math.sqrt(u2 + 1);
              this._w = 0.25 / t3, this._x = (c2 - o2) * t3, this._y = (r2 - l2) * t3, this._z = (s2 - n2) * t3;
            } else if (i2 > a2 && i2 > h2) {
              const t3 = 2 * Math.sqrt(1 + i2 - a2 - h2);
              this._w = (c2 - o2) / t3, this._x = 0.25 * t3, this._y = (n2 + s2) / t3, this._z = (r2 + l2) / t3;
            } else if (a2 > h2) {
              const t3 = 2 * Math.sqrt(1 + a2 - i2 - h2);
              this._w = (r2 - l2) / t3, this._x = (n2 + s2) / t3, this._y = 0.25 * t3, this._z = (o2 + c2) / t3;
            } else {
              const t3 = 2 * Math.sqrt(1 + h2 - i2 - a2);
              this._w = (s2 - n2) / t3, this._x = (r2 + l2) / t3, this._y = (o2 + c2) / t3, this._z = 0.25 * t3;
            }
            return this._onChangeCallback(), this;
          }
          setFromUnitVectors(t2, e2) {
            let i2 = t2.dot(e2) + 1;
            return i2 < Number.EPSILON ? (i2 = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = i2) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = i2)) : (this._x = t2.y * e2.z - t2.z * e2.y, this._y = t2.z * e2.x - t2.x * e2.z, this._z = t2.x * e2.y - t2.y * e2.x, this._w = i2), this.normalize();
          }
          angleTo(t2) {
            return 2 * Math.acos(Math.abs(yt(this.dot(t2), -1, 1)));
          }
          rotateTowards(t2, e2) {
            const i2 = this.angleTo(t2);
            if (0 === i2)
              return this;
            const n2 = Math.min(1, e2 / i2);
            return this.slerp(t2, n2), this;
          }
          identity() {
            return this.set(0, 0, 0, 1);
          }
          invert() {
            return this.conjugate();
          }
          conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
          }
          dot(t2) {
            return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
          }
          lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
          }
          length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
          }
          normalize() {
            let t2 = this.length();
            return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
          }
          multiply(t2) {
            return this.multiplyQuaternions(this, t2);
          }
          premultiply(t2) {
            return this.multiplyQuaternions(t2, this);
          }
          multiplyQuaternions(t2, e2) {
            const i2 = t2._x, n2 = t2._y, r2 = t2._z, s2 = t2._w, a2 = e2._x, o2 = e2._y, l2 = e2._z, c2 = e2._w;
            return this._x = i2 * c2 + s2 * a2 + n2 * l2 - r2 * o2, this._y = n2 * c2 + s2 * o2 + r2 * a2 - i2 * l2, this._z = r2 * c2 + s2 * l2 + i2 * o2 - n2 * a2, this._w = s2 * c2 - i2 * a2 - n2 * o2 - r2 * l2, this._onChangeCallback(), this;
          }
          slerp(t2, e2) {
            if (0 === e2)
              return this;
            if (1 === e2)
              return this.copy(t2);
            const i2 = this._x, n2 = this._y, r2 = this._z, s2 = this._w;
            let a2 = s2 * t2._w + i2 * t2._x + n2 * t2._y + r2 * t2._z;
            if (a2 < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a2 = -a2) : this.copy(t2), a2 >= 1)
              return this._w = s2, this._x = i2, this._y = n2, this._z = r2, this;
            const o2 = 1 - a2 * a2;
            if (o2 <= Number.EPSILON) {
              const t3 = 1 - e2;
              return this._w = t3 * s2 + e2 * this._w, this._x = t3 * i2 + e2 * this._x, this._y = t3 * n2 + e2 * this._y, this._z = t3 * r2 + e2 * this._z, this.normalize(), this._onChangeCallback(), this;
            }
            const l2 = Math.sqrt(o2), c2 = Math.atan2(l2, a2), h2 = Math.sin((1 - e2) * c2) / l2, u2 = Math.sin(e2 * c2) / l2;
            return this._w = s2 * h2 + this._w * u2, this._x = i2 * h2 + this._x * u2, this._y = n2 * h2 + this._y * u2, this._z = r2 * h2 + this._z * u2, this._onChangeCallback(), this;
          }
          slerpQuaternions(t2, e2, i2) {
            return this.copy(t2).slerp(e2, i2);
          }
          random() {
            const t2 = Math.random(), e2 = Math.sqrt(1 - t2), i2 = Math.sqrt(t2), n2 = 2 * Math.PI * Math.random(), r2 = 2 * Math.PI * Math.random();
            return this.set(e2 * Math.cos(n2), i2 * Math.sin(r2), i2 * Math.cos(r2), e2 * Math.sin(n2));
          }
          equals(t2) {
            return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
          }
          fromArray(t2, e2 = 0) {
            return this._x = t2[e2], this._y = t2[e2 + 1], this._z = t2[e2 + 2], this._w = t2[e2 + 3], this._onChangeCallback(), this;
          }
          toArray(t2 = [], e2 = 0) {
            return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._w, t2;
          }
          fromBufferAttribute(t2, e2) {
            return this._x = t2.getX(e2), this._y = t2.getY(e2), this._z = t2.getZ(e2), this._w = t2.getW(e2), this;
          }
          _onChange(t2) {
            return this._onChangeCallback = t2, this;
          }
          _onChangeCallback() {
          }
          *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w;
          }
        }
        class ne {
          constructor(t2 = 0, e2 = 0, i2 = 0) {
            ne.prototype.isVector3 = true, this.x = t2, this.y = e2, this.z = i2;
          }
          set(t2, e2, i2) {
            return void 0 === i2 && (i2 = this.z), this.x = t2, this.y = e2, this.z = i2, this;
          }
          setScalar(t2) {
            return this.x = t2, this.y = t2, this.z = t2, this;
          }
          setX(t2) {
            return this.x = t2, this;
          }
          setY(t2) {
            return this.y = t2, this;
          }
          setZ(t2) {
            return this.z = t2, this;
          }
          setComponent(t2, e2) {
            switch (t2) {
              case 0:
                this.x = e2;
                break;
              case 1:
                this.y = e2;
                break;
              case 2:
                this.z = e2;
                break;
              default:
                throw new Error("index is out of range: " + t2);
            }
            return this;
          }
          getComponent(t2) {
            switch (t2) {
              case 0:
                return this.x;
              case 1:
                return this.y;
              case 2:
                return this.z;
              default:
                throw new Error("index is out of range: " + t2);
            }
          }
          clone() {
            return new this.constructor(this.x, this.y, this.z);
          }
          copy(t2) {
            return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
          }
          add(t2) {
            return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
          }
          addScalar(t2) {
            return this.x += t2, this.y += t2, this.z += t2, this;
          }
          addVectors(t2, e2) {
            return this.x = t2.x + e2.x, this.y = t2.y + e2.y, this.z = t2.z + e2.z, this;
          }
          addScaledVector(t2, e2) {
            return this.x += t2.x * e2, this.y += t2.y * e2, this.z += t2.z * e2, this;
          }
          sub(t2) {
            return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
          }
          subScalar(t2) {
            return this.x -= t2, this.y -= t2, this.z -= t2, this;
          }
          subVectors(t2, e2) {
            return this.x = t2.x - e2.x, this.y = t2.y - e2.y, this.z = t2.z - e2.z, this;
          }
          multiply(t2) {
            return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
          }
          multiplyScalar(t2) {
            return this.x *= t2, this.y *= t2, this.z *= t2, this;
          }
          multiplyVectors(t2, e2) {
            return this.x = t2.x * e2.x, this.y = t2.y * e2.y, this.z = t2.z * e2.z, this;
          }
          applyEuler(t2) {
            return this.applyQuaternion(se.setFromEuler(t2));
          }
          applyAxisAngle(t2, e2) {
            return this.applyQuaternion(se.setFromAxisAngle(t2, e2));
          }
          applyMatrix3(t2) {
            const e2 = this.x, i2 = this.y, n2 = this.z, r2 = t2.elements;
            return this.x = r2[0] * e2 + r2[3] * i2 + r2[6] * n2, this.y = r2[1] * e2 + r2[4] * i2 + r2[7] * n2, this.z = r2[2] * e2 + r2[5] * i2 + r2[8] * n2, this;
          }
          applyNormalMatrix(t2) {
            return this.applyMatrix3(t2).normalize();
          }
          applyMatrix4(t2) {
            const e2 = this.x, i2 = this.y, n2 = this.z, r2 = t2.elements, s2 = 1 / (r2[3] * e2 + r2[7] * i2 + r2[11] * n2 + r2[15]);
            return this.x = (r2[0] * e2 + r2[4] * i2 + r2[8] * n2 + r2[12]) * s2, this.y = (r2[1] * e2 + r2[5] * i2 + r2[9] * n2 + r2[13]) * s2, this.z = (r2[2] * e2 + r2[6] * i2 + r2[10] * n2 + r2[14]) * s2, this;
          }
          applyQuaternion(t2) {
            const e2 = this.x, i2 = this.y, n2 = this.z, r2 = t2.x, s2 = t2.y, a2 = t2.z, o2 = t2.w, l2 = o2 * e2 + s2 * n2 - a2 * i2, c2 = o2 * i2 + a2 * e2 - r2 * n2, h2 = o2 * n2 + r2 * i2 - s2 * e2, u2 = -r2 * e2 - s2 * i2 - a2 * n2;
            return this.x = l2 * o2 + u2 * -r2 + c2 * -a2 - h2 * -s2, this.y = c2 * o2 + u2 * -s2 + h2 * -r2 - l2 * -a2, this.z = h2 * o2 + u2 * -a2 + l2 * -s2 - c2 * -r2, this;
          }
          project(t2) {
            return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
          }
          unproject(t2) {
            return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
          }
          transformDirection(t2) {
            const e2 = this.x, i2 = this.y, n2 = this.z, r2 = t2.elements;
            return this.x = r2[0] * e2 + r2[4] * i2 + r2[8] * n2, this.y = r2[1] * e2 + r2[5] * i2 + r2[9] * n2, this.z = r2[2] * e2 + r2[6] * i2 + r2[10] * n2, this.normalize();
          }
          divide(t2) {
            return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
          }
          divideScalar(t2) {
            return this.multiplyScalar(1 / t2);
          }
          min(t2) {
            return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
          }
          max(t2) {
            return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
          }
          clamp(t2, e2) {
            return this.x = Math.max(t2.x, Math.min(e2.x, this.x)), this.y = Math.max(t2.y, Math.min(e2.y, this.y)), this.z = Math.max(t2.z, Math.min(e2.z, this.z)), this;
          }
          clampScalar(t2, e2) {
            return this.x = Math.max(t2, Math.min(e2, this.x)), this.y = Math.max(t2, Math.min(e2, this.y)), this.z = Math.max(t2, Math.min(e2, this.z)), this;
          }
          clampLength(t2, e2) {
            const i2 = this.length();
            return this.divideScalar(i2 || 1).multiplyScalar(Math.max(t2, Math.min(e2, i2)));
          }
          floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
          }
          ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
          }
          round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
          }
          roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
          }
          negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
          }
          dot(t2) {
            return this.x * t2.x + this.y * t2.y + this.z * t2.z;
          }
          lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
          }
          length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
          }
          manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
          }
          normalize() {
            return this.divideScalar(this.length() || 1);
          }
          setLength(t2) {
            return this.normalize().multiplyScalar(t2);
          }
          lerp(t2, e2) {
            return this.x += (t2.x - this.x) * e2, this.y += (t2.y - this.y) * e2, this.z += (t2.z - this.z) * e2, this;
          }
          lerpVectors(t2, e2, i2) {
            return this.x = t2.x + (e2.x - t2.x) * i2, this.y = t2.y + (e2.y - t2.y) * i2, this.z = t2.z + (e2.z - t2.z) * i2, this;
          }
          cross(t2) {
            return this.crossVectors(this, t2);
          }
          crossVectors(t2, e2) {
            const i2 = t2.x, n2 = t2.y, r2 = t2.z, s2 = e2.x, a2 = e2.y, o2 = e2.z;
            return this.x = n2 * o2 - r2 * a2, this.y = r2 * s2 - i2 * o2, this.z = i2 * a2 - n2 * s2, this;
          }
          projectOnVector(t2) {
            const e2 = t2.lengthSq();
            if (0 === e2)
              return this.set(0, 0, 0);
            const i2 = t2.dot(this) / e2;
            return this.copy(t2).multiplyScalar(i2);
          }
          projectOnPlane(t2) {
            return re.copy(this).projectOnVector(t2), this.sub(re);
          }
          reflect(t2) {
            return this.sub(re.copy(t2).multiplyScalar(2 * this.dot(t2)));
          }
          angleTo(t2) {
            const e2 = Math.sqrt(this.lengthSq() * t2.lengthSq());
            if (0 === e2)
              return Math.PI / 2;
            const i2 = this.dot(t2) / e2;
            return Math.acos(yt(i2, -1, 1));
          }
          distanceTo(t2) {
            return Math.sqrt(this.distanceToSquared(t2));
          }
          distanceToSquared(t2) {
            const e2 = this.x - t2.x, i2 = this.y - t2.y, n2 = this.z - t2.z;
            return e2 * e2 + i2 * i2 + n2 * n2;
          }
          manhattanDistanceTo(t2) {
            return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
          }
          setFromSpherical(t2) {
            return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
          }
          setFromSphericalCoords(t2, e2, i2) {
            const n2 = Math.sin(e2) * t2;
            return this.x = n2 * Math.sin(i2), this.y = Math.cos(e2) * t2, this.z = n2 * Math.cos(i2), this;
          }
          setFromCylindrical(t2) {
            return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
          }
          setFromCylindricalCoords(t2, e2, i2) {
            return this.x = t2 * Math.sin(e2), this.y = i2, this.z = t2 * Math.cos(e2), this;
          }
          setFromMatrixPosition(t2) {
            const e2 = t2.elements;
            return this.x = e2[12], this.y = e2[13], this.z = e2[14], this;
          }
          setFromMatrixScale(t2) {
            const e2 = this.setFromMatrixColumn(t2, 0).length(), i2 = this.setFromMatrixColumn(t2, 1).length(), n2 = this.setFromMatrixColumn(t2, 2).length();
            return this.x = e2, this.y = i2, this.z = n2, this;
          }
          setFromMatrixColumn(t2, e2) {
            return this.fromArray(t2.elements, 4 * e2);
          }
          setFromMatrix3Column(t2, e2) {
            return this.fromArray(t2.elements, 3 * e2);
          }
          setFromEuler(t2) {
            return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
          }
          equals(t2) {
            return t2.x === this.x && t2.y === this.y && t2.z === this.z;
          }
          fromArray(t2, e2 = 0) {
            return this.x = t2[e2], this.y = t2[e2 + 1], this.z = t2[e2 + 2], this;
          }
          toArray(t2 = [], e2 = 0) {
            return t2[e2] = this.x, t2[e2 + 1] = this.y, t2[e2 + 2] = this.z, t2;
          }
          fromBufferAttribute(t2, e2) {
            return this.x = t2.getX(e2), this.y = t2.getY(e2), this.z = t2.getZ(e2), this;
          }
          random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
          }
          randomDirection() {
            const t2 = 2 * (Math.random() - 0.5), e2 = Math.random() * Math.PI * 2, i2 = Math.sqrt(1 - t2 ** 2);
            return this.x = i2 * Math.cos(e2), this.y = i2 * Math.sin(e2), this.z = t2, this;
          }
          *[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z;
          }
        }
        const re = new ne(), se = new ie();
        class ae {
          constructor(t2 = new ne(1 / 0, 1 / 0, 1 / 0), e2 = new ne(-1 / 0, -1 / 0, -1 / 0)) {
            this.isBox3 = true, this.min = t2, this.max = e2;
          }
          set(t2, e2) {
            return this.min.copy(t2), this.max.copy(e2), this;
          }
          setFromArray(t2) {
            let e2 = 1 / 0, i2 = 1 / 0, n2 = 1 / 0, r2 = -1 / 0, s2 = -1 / 0, a2 = -1 / 0;
            for (let o2 = 0, l2 = t2.length; o2 < l2; o2 += 3) {
              const l3 = t2[o2], c2 = t2[o2 + 1], h2 = t2[o2 + 2];
              l3 < e2 && (e2 = l3), c2 < i2 && (i2 = c2), h2 < n2 && (n2 = h2), l3 > r2 && (r2 = l3), c2 > s2 && (s2 = c2), h2 > a2 && (a2 = h2);
            }
            return this.min.set(e2, i2, n2), this.max.set(r2, s2, a2), this;
          }
          setFromBufferAttribute(t2) {
            let e2 = 1 / 0, i2 = 1 / 0, n2 = 1 / 0, r2 = -1 / 0, s2 = -1 / 0, a2 = -1 / 0;
            for (let o2 = 0, l2 = t2.count; o2 < l2; o2++) {
              const l3 = t2.getX(o2), c2 = t2.getY(o2), h2 = t2.getZ(o2);
              l3 < e2 && (e2 = l3), c2 < i2 && (i2 = c2), h2 < n2 && (n2 = h2), l3 > r2 && (r2 = l3), c2 > s2 && (s2 = c2), h2 > a2 && (a2 = h2);
            }
            return this.min.set(e2, i2, n2), this.max.set(r2, s2, a2), this;
          }
          setFromPoints(t2) {
            this.makeEmpty();
            for (let e2 = 0, i2 = t2.length; e2 < i2; e2++)
              this.expandByPoint(t2[e2]);
            return this;
          }
          setFromCenterAndSize(t2, e2) {
            const i2 = le.copy(e2).multiplyScalar(0.5);
            return this.min.copy(t2).sub(i2), this.max.copy(t2).add(i2), this;
          }
          setFromObject(t2, e2 = false) {
            return this.makeEmpty(), this.expandByObject(t2, e2);
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            return this.min.copy(t2.min), this.max.copy(t2.max), this;
          }
          makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
          }
          isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
          }
          getCenter(t2) {
            return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
          }
          getSize(t2) {
            return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
          }
          expandByPoint(t2) {
            return this.min.min(t2), this.max.max(t2), this;
          }
          expandByVector(t2) {
            return this.min.sub(t2), this.max.add(t2), this;
          }
          expandByScalar(t2) {
            return this.min.addScalar(-t2), this.max.addScalar(t2), this;
          }
          expandByObject(t2, e2 = false) {
            t2.updateWorldMatrix(false, false);
            const i2 = t2.geometry;
            if (void 0 !== i2)
              if (e2 && null != i2.attributes && void 0 !== i2.attributes.position) {
                const e3 = i2.attributes.position;
                for (let i3 = 0, n3 = e3.count; i3 < n3; i3++)
                  le.fromBufferAttribute(e3, i3).applyMatrix4(t2.matrixWorld), this.expandByPoint(le);
              } else
                null === i2.boundingBox && i2.computeBoundingBox(), ce.copy(i2.boundingBox), ce.applyMatrix4(t2.matrixWorld), this.union(ce);
            const n2 = t2.children;
            for (let t3 = 0, i3 = n2.length; t3 < i3; t3++)
              this.expandByObject(n2[t3], e2);
            return this;
          }
          containsPoint(t2) {
            return !(t2.x < this.min.x || t2.x > this.max.x || t2.y < this.min.y || t2.y > this.max.y || t2.z < this.min.z || t2.z > this.max.z);
          }
          containsBox(t2) {
            return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
          }
          getParameter(t2, e2) {
            return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
          }
          intersectsBox(t2) {
            return !(t2.max.x < this.min.x || t2.min.x > this.max.x || t2.max.y < this.min.y || t2.min.y > this.max.y || t2.max.z < this.min.z || t2.min.z > this.max.z);
          }
          intersectsSphere(t2) {
            return this.clampPoint(t2.center, le), le.distanceToSquared(t2.center) <= t2.radius * t2.radius;
          }
          intersectsPlane(t2) {
            let e2, i2;
            return t2.normal.x > 0 ? (e2 = t2.normal.x * this.min.x, i2 = t2.normal.x * this.max.x) : (e2 = t2.normal.x * this.max.x, i2 = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e2 += t2.normal.y * this.min.y, i2 += t2.normal.y * this.max.y) : (e2 += t2.normal.y * this.max.y, i2 += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e2 += t2.normal.z * this.min.z, i2 += t2.normal.z * this.max.z) : (e2 += t2.normal.z * this.max.z, i2 += t2.normal.z * this.min.z), e2 <= -t2.constant && i2 >= -t2.constant;
          }
          intersectsTriangle(t2) {
            if (this.isEmpty())
              return false;
            this.getCenter(ge), ve.subVectors(this.max, ge), he.subVectors(t2.a, ge), ue.subVectors(t2.b, ge), de.subVectors(t2.c, ge), pe.subVectors(ue, he), me.subVectors(de, ue), fe.subVectors(he, de);
            let e2 = [0, -pe.z, pe.y, 0, -me.z, me.y, 0, -fe.z, fe.y, pe.z, 0, -pe.x, me.z, 0, -me.x, fe.z, 0, -fe.x, -pe.y, pe.x, 0, -me.y, me.x, 0, -fe.y, fe.x, 0];
            return !!ye(e2, he, ue, de, ve) && (e2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!ye(e2, he, ue, de, ve) && (xe.crossVectors(pe, me), e2 = [xe.x, xe.y, xe.z], ye(e2, he, ue, de, ve)));
          }
          clampPoint(t2, e2) {
            return e2.copy(t2).clamp(this.min, this.max);
          }
          distanceToPoint(t2) {
            return le.copy(t2).clamp(this.min, this.max).sub(t2).length();
          }
          getBoundingSphere(t2) {
            return this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(le).length(), t2;
          }
          intersect(t2) {
            return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
          }
          union(t2) {
            return this.min.min(t2.min), this.max.max(t2.max), this;
          }
          applyMatrix4(t2) {
            return this.isEmpty() || (oe[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), oe[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), oe[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), oe[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), oe[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), oe[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), oe[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), oe[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(oe)), this;
          }
          translate(t2) {
            return this.min.add(t2), this.max.add(t2), this;
          }
          equals(t2) {
            return t2.min.equals(this.min) && t2.max.equals(this.max);
          }
        }
        const oe = [new ne(), new ne(), new ne(), new ne(), new ne(), new ne(), new ne(), new ne()], le = new ne(), ce = new ae(), he = new ne(), ue = new ne(), de = new ne(), pe = new ne(), me = new ne(), fe = new ne(), ge = new ne(), ve = new ne(), xe = new ne(), _e = new ne();
        function ye(t2, e2, i2, n2, r2) {
          for (let s2 = 0, a2 = t2.length - 3; s2 <= a2; s2 += 3) {
            _e.fromArray(t2, s2);
            const a3 = r2.x * Math.abs(_e.x) + r2.y * Math.abs(_e.y) + r2.z * Math.abs(_e.z), o2 = e2.dot(_e), l2 = i2.dot(_e), c2 = n2.dot(_e);
            if (Math.max(-Math.max(o2, l2, c2), Math.min(o2, l2, c2)) > a3)
              return false;
          }
          return true;
        }
        const Me = new ae(), be = new ne(), Se = new ne(), we = new ne();
        class Te {
          constructor(t2 = new ne(), e2 = -1) {
            this.center = t2, this.radius = e2;
          }
          set(t2, e2) {
            return this.center.copy(t2), this.radius = e2, this;
          }
          setFromPoints(t2, e2) {
            const i2 = this.center;
            void 0 !== e2 ? i2.copy(e2) : Me.setFromPoints(t2).getCenter(i2);
            let n2 = 0;
            for (let e3 = 0, r2 = t2.length; e3 < r2; e3++)
              n2 = Math.max(n2, i2.distanceToSquared(t2[e3]));
            return this.radius = Math.sqrt(n2), this;
          }
          copy(t2) {
            return this.center.copy(t2.center), this.radius = t2.radius, this;
          }
          isEmpty() {
            return this.radius < 0;
          }
          makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this;
          }
          containsPoint(t2) {
            return t2.distanceToSquared(this.center) <= this.radius * this.radius;
          }
          distanceToPoint(t2) {
            return t2.distanceTo(this.center) - this.radius;
          }
          intersectsSphere(t2) {
            const e2 = this.radius + t2.radius;
            return t2.center.distanceToSquared(this.center) <= e2 * e2;
          }
          intersectsBox(t2) {
            return t2.intersectsSphere(this);
          }
          intersectsPlane(t2) {
            return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
          }
          clampPoint(t2, e2) {
            const i2 = this.center.distanceToSquared(t2);
            return e2.copy(t2), i2 > this.radius * this.radius && (e2.sub(this.center).normalize(), e2.multiplyScalar(this.radius).add(this.center)), e2;
          }
          getBoundingBox(t2) {
            return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
          }
          applyMatrix4(t2) {
            return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
          }
          translate(t2) {
            return this.center.add(t2), this;
          }
          expandByPoint(t2) {
            if (this.isEmpty())
              return this.center.copy(t2), this.radius = 0, this;
            we.subVectors(t2, this.center);
            const e2 = we.lengthSq();
            if (e2 > this.radius * this.radius) {
              const t3 = Math.sqrt(e2), i2 = 0.5 * (t3 - this.radius);
              this.center.add(we.multiplyScalar(i2 / t3)), this.radius += i2;
            }
            return this;
          }
          union(t2) {
            return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? Se.set(0, 0, 1).multiplyScalar(t2.radius) : Se.subVectors(t2.center, this.center).normalize().multiplyScalar(t2.radius), this.expandByPoint(be.copy(t2.center).add(Se)), this.expandByPoint(be.copy(t2.center).sub(Se)), this);
          }
          equals(t2) {
            return t2.center.equals(this.center) && t2.radius === this.radius;
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }
        const Ae = new ne(), Ee = new ne(), Ce = new ne(), Le = new ne(), Re = new ne(), Pe = new ne(), Ie = new ne();
        class De {
          constructor(t2 = new ne(), e2 = new ne(0, 0, -1)) {
            this.origin = t2, this.direction = e2;
          }
          set(t2, e2) {
            return this.origin.copy(t2), this.direction.copy(e2), this;
          }
          copy(t2) {
            return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
          }
          at(t2, e2) {
            return e2.copy(this.direction).multiplyScalar(t2).add(this.origin);
          }
          lookAt(t2) {
            return this.direction.copy(t2).sub(this.origin).normalize(), this;
          }
          recast(t2) {
            return this.origin.copy(this.at(t2, Ae)), this;
          }
          closestPointToPoint(t2, e2) {
            e2.subVectors(t2, this.origin);
            const i2 = e2.dot(this.direction);
            return i2 < 0 ? e2.copy(this.origin) : e2.copy(this.direction).multiplyScalar(i2).add(this.origin);
          }
          distanceToPoint(t2) {
            return Math.sqrt(this.distanceSqToPoint(t2));
          }
          distanceSqToPoint(t2) {
            const e2 = Ae.subVectors(t2, this.origin).dot(this.direction);
            return e2 < 0 ? this.origin.distanceToSquared(t2) : (Ae.copy(this.direction).multiplyScalar(e2).add(this.origin), Ae.distanceToSquared(t2));
          }
          distanceSqToSegment(t2, e2, i2, n2) {
            Ee.copy(t2).add(e2).multiplyScalar(0.5), Ce.copy(e2).sub(t2).normalize(), Le.copy(this.origin).sub(Ee);
            const r2 = 0.5 * t2.distanceTo(e2), s2 = -this.direction.dot(Ce), a2 = Le.dot(this.direction), o2 = -Le.dot(Ce), l2 = Le.lengthSq(), c2 = Math.abs(1 - s2 * s2);
            let h2, u2, d2, p2;
            if (c2 > 0)
              if (h2 = s2 * o2 - a2, u2 = s2 * a2 - o2, p2 = r2 * c2, h2 >= 0)
                if (u2 >= -p2)
                  if (u2 <= p2) {
                    const t3 = 1 / c2;
                    h2 *= t3, u2 *= t3, d2 = h2 * (h2 + s2 * u2 + 2 * a2) + u2 * (s2 * h2 + u2 + 2 * o2) + l2;
                  } else
                    u2 = r2, h2 = Math.max(0, -(s2 * u2 + a2)), d2 = -h2 * h2 + u2 * (u2 + 2 * o2) + l2;
                else
                  u2 = -r2, h2 = Math.max(0, -(s2 * u2 + a2)), d2 = -h2 * h2 + u2 * (u2 + 2 * o2) + l2;
              else
                u2 <= -p2 ? (h2 = Math.max(0, -(-s2 * r2 + a2)), u2 = h2 > 0 ? -r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -h2 * h2 + u2 * (u2 + 2 * o2) + l2) : u2 <= p2 ? (h2 = 0, u2 = Math.min(Math.max(-r2, -o2), r2), d2 = u2 * (u2 + 2 * o2) + l2) : (h2 = Math.max(0, -(s2 * r2 + a2)), u2 = h2 > 0 ? r2 : Math.min(Math.max(-r2, -o2), r2), d2 = -h2 * h2 + u2 * (u2 + 2 * o2) + l2);
            else
              u2 = s2 > 0 ? -r2 : r2, h2 = Math.max(0, -(s2 * u2 + a2)), d2 = -h2 * h2 + u2 * (u2 + 2 * o2) + l2;
            return i2 && i2.copy(this.direction).multiplyScalar(h2).add(this.origin), n2 && n2.copy(Ce).multiplyScalar(u2).add(Ee), d2;
          }
          intersectSphere(t2, e2) {
            Ae.subVectors(t2.center, this.origin);
            const i2 = Ae.dot(this.direction), n2 = Ae.dot(Ae) - i2 * i2, r2 = t2.radius * t2.radius;
            if (n2 > r2)
              return null;
            const s2 = Math.sqrt(r2 - n2), a2 = i2 - s2, o2 = i2 + s2;
            return a2 < 0 && o2 < 0 ? null : a2 < 0 ? this.at(o2, e2) : this.at(a2, e2);
          }
          intersectsSphere(t2) {
            return this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
          }
          distanceToPlane(t2) {
            const e2 = t2.normal.dot(this.direction);
            if (0 === e2)
              return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
            const i2 = -(this.origin.dot(t2.normal) + t2.constant) / e2;
            return i2 >= 0 ? i2 : null;
          }
          intersectPlane(t2, e2) {
            const i2 = this.distanceToPlane(t2);
            return null === i2 ? null : this.at(i2, e2);
          }
          intersectsPlane(t2) {
            const e2 = t2.distanceToPoint(this.origin);
            if (0 === e2)
              return true;
            return t2.normal.dot(this.direction) * e2 < 0;
          }
          intersectBox(t2, e2) {
            let i2, n2, r2, s2, a2, o2;
            const l2 = 1 / this.direction.x, c2 = 1 / this.direction.y, h2 = 1 / this.direction.z, u2 = this.origin;
            return l2 >= 0 ? (i2 = (t2.min.x - u2.x) * l2, n2 = (t2.max.x - u2.x) * l2) : (i2 = (t2.max.x - u2.x) * l2, n2 = (t2.min.x - u2.x) * l2), c2 >= 0 ? (r2 = (t2.min.y - u2.y) * c2, s2 = (t2.max.y - u2.y) * c2) : (r2 = (t2.max.y - u2.y) * c2, s2 = (t2.min.y - u2.y) * c2), i2 > s2 || r2 > n2 ? null : ((r2 > i2 || i2 != i2) && (i2 = r2), (s2 < n2 || n2 != n2) && (n2 = s2), h2 >= 0 ? (a2 = (t2.min.z - u2.z) * h2, o2 = (t2.max.z - u2.z) * h2) : (a2 = (t2.max.z - u2.z) * h2, o2 = (t2.min.z - u2.z) * h2), i2 > o2 || a2 > n2 ? null : ((a2 > i2 || i2 != i2) && (i2 = a2), (o2 < n2 || n2 != n2) && (n2 = o2), n2 < 0 ? null : this.at(i2 >= 0 ? i2 : n2, e2)));
          }
          intersectsBox(t2) {
            return null !== this.intersectBox(t2, Ae);
          }
          intersectTriangle(t2, e2, i2, n2, r2) {
            Re.subVectors(e2, t2), Pe.subVectors(i2, t2), Ie.crossVectors(Re, Pe);
            let s2, a2 = this.direction.dot(Ie);
            if (a2 > 0) {
              if (n2)
                return null;
              s2 = 1;
            } else {
              if (!(a2 < 0))
                return null;
              s2 = -1, a2 = -a2;
            }
            Le.subVectors(this.origin, t2);
            const o2 = s2 * this.direction.dot(Pe.crossVectors(Le, Pe));
            if (o2 < 0)
              return null;
            const l2 = s2 * this.direction.dot(Re.cross(Le));
            if (l2 < 0)
              return null;
            if (o2 + l2 > a2)
              return null;
            const c2 = -s2 * Le.dot(Ie);
            return c2 < 0 ? null : this.at(c2 / a2, r2);
          }
          applyMatrix4(t2) {
            return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
          }
          equals(t2) {
            return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }
        class Ne {
          constructor() {
            Ne.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
          }
          set(t2, e2, i2, n2, r2, s2, a2, o2, l2, c2, h2, u2, d2, p2, m2, f2) {
            const g2 = this.elements;
            return g2[0] = t2, g2[4] = e2, g2[8] = i2, g2[12] = n2, g2[1] = r2, g2[5] = s2, g2[9] = a2, g2[13] = o2, g2[2] = l2, g2[6] = c2, g2[10] = h2, g2[14] = u2, g2[3] = d2, g2[7] = p2, g2[11] = m2, g2[15] = f2, this;
          }
          identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
          }
          clone() {
            return new Ne().fromArray(this.elements);
          }
          copy(t2) {
            const e2 = this.elements, i2 = t2.elements;
            return e2[0] = i2[0], e2[1] = i2[1], e2[2] = i2[2], e2[3] = i2[3], e2[4] = i2[4], e2[5] = i2[5], e2[6] = i2[6], e2[7] = i2[7], e2[8] = i2[8], e2[9] = i2[9], e2[10] = i2[10], e2[11] = i2[11], e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], e2[15] = i2[15], this;
          }
          copyPosition(t2) {
            const e2 = this.elements, i2 = t2.elements;
            return e2[12] = i2[12], e2[13] = i2[13], e2[14] = i2[14], this;
          }
          setFromMatrix3(t2) {
            const e2 = t2.elements;
            return this.set(e2[0], e2[3], e2[6], 0, e2[1], e2[4], e2[7], 0, e2[2], e2[5], e2[8], 0, 0, 0, 0, 1), this;
          }
          extractBasis(t2, e2, i2) {
            return t2.setFromMatrixColumn(this, 0), e2.setFromMatrixColumn(this, 1), i2.setFromMatrixColumn(this, 2), this;
          }
          makeBasis(t2, e2, i2) {
            return this.set(t2.x, e2.x, i2.x, 0, t2.y, e2.y, i2.y, 0, t2.z, e2.z, i2.z, 0, 0, 0, 0, 1), this;
          }
          extractRotation(t2) {
            const e2 = this.elements, i2 = t2.elements, n2 = 1 / Oe.setFromMatrixColumn(t2, 0).length(), r2 = 1 / Oe.setFromMatrixColumn(t2, 1).length(), s2 = 1 / Oe.setFromMatrixColumn(t2, 2).length();
            return e2[0] = i2[0] * n2, e2[1] = i2[1] * n2, e2[2] = i2[2] * n2, e2[3] = 0, e2[4] = i2[4] * r2, e2[5] = i2[5] * r2, e2[6] = i2[6] * r2, e2[7] = 0, e2[8] = i2[8] * s2, e2[9] = i2[9] * s2, e2[10] = i2[10] * s2, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
          }
          makeRotationFromEuler(t2) {
            const e2 = this.elements, i2 = t2.x, n2 = t2.y, r2 = t2.z, s2 = Math.cos(i2), a2 = Math.sin(i2), o2 = Math.cos(n2), l2 = Math.sin(n2), c2 = Math.cos(r2), h2 = Math.sin(r2);
            if ("XYZ" === t2.order) {
              const t3 = s2 * c2, i3 = s2 * h2, n3 = a2 * c2, r3 = a2 * h2;
              e2[0] = o2 * c2, e2[4] = -o2 * h2, e2[8] = l2, e2[1] = i3 + n3 * l2, e2[5] = t3 - r3 * l2, e2[9] = -a2 * o2, e2[2] = r3 - t3 * l2, e2[6] = n3 + i3 * l2, e2[10] = s2 * o2;
            } else if ("YXZ" === t2.order) {
              const t3 = o2 * c2, i3 = o2 * h2, n3 = l2 * c2, r3 = l2 * h2;
              e2[0] = t3 + r3 * a2, e2[4] = n3 * a2 - i3, e2[8] = s2 * l2, e2[1] = s2 * h2, e2[5] = s2 * c2, e2[9] = -a2, e2[2] = i3 * a2 - n3, e2[6] = r3 + t3 * a2, e2[10] = s2 * o2;
            } else if ("ZXY" === t2.order) {
              const t3 = o2 * c2, i3 = o2 * h2, n3 = l2 * c2, r3 = l2 * h2;
              e2[0] = t3 - r3 * a2, e2[4] = -s2 * h2, e2[8] = n3 + i3 * a2, e2[1] = i3 + n3 * a2, e2[5] = s2 * c2, e2[9] = r3 - t3 * a2, e2[2] = -s2 * l2, e2[6] = a2, e2[10] = s2 * o2;
            } else if ("ZYX" === t2.order) {
              const t3 = s2 * c2, i3 = s2 * h2, n3 = a2 * c2, r3 = a2 * h2;
              e2[0] = o2 * c2, e2[4] = n3 * l2 - i3, e2[8] = t3 * l2 + r3, e2[1] = o2 * h2, e2[5] = r3 * l2 + t3, e2[9] = i3 * l2 - n3, e2[2] = -l2, e2[6] = a2 * o2, e2[10] = s2 * o2;
            } else if ("YZX" === t2.order) {
              const t3 = s2 * o2, i3 = s2 * l2, n3 = a2 * o2, r3 = a2 * l2;
              e2[0] = o2 * c2, e2[4] = r3 - t3 * h2, e2[8] = n3 * h2 + i3, e2[1] = h2, e2[5] = s2 * c2, e2[9] = -a2 * c2, e2[2] = -l2 * c2, e2[6] = i3 * h2 + n3, e2[10] = t3 - r3 * h2;
            } else if ("XZY" === t2.order) {
              const t3 = s2 * o2, i3 = s2 * l2, n3 = a2 * o2, r3 = a2 * l2;
              e2[0] = o2 * c2, e2[4] = -h2, e2[8] = l2 * c2, e2[1] = t3 * h2 + r3, e2[5] = s2 * c2, e2[9] = i3 * h2 - n3, e2[2] = n3 * h2 - i3, e2[6] = a2 * c2, e2[10] = r3 * h2 + t3;
            }
            return e2[3] = 0, e2[7] = 0, e2[11] = 0, e2[12] = 0, e2[13] = 0, e2[14] = 0, e2[15] = 1, this;
          }
          makeRotationFromQuaternion(t2) {
            return this.compose(Ue, t2, Be);
          }
          lookAt(t2, e2, i2) {
            const n2 = this.elements;
            return Ge.subVectors(t2, e2), 0 === Ge.lengthSq() && (Ge.z = 1), Ge.normalize(), Fe.crossVectors(i2, Ge), 0 === Fe.lengthSq() && (1 === Math.abs(i2.z) ? Ge.x += 1e-4 : Ge.z += 1e-4, Ge.normalize(), Fe.crossVectors(i2, Ge)), Fe.normalize(), ke.crossVectors(Ge, Fe), n2[0] = Fe.x, n2[4] = ke.x, n2[8] = Ge.x, n2[1] = Fe.y, n2[5] = ke.y, n2[9] = Ge.y, n2[2] = Fe.z, n2[6] = ke.z, n2[10] = Ge.z, this;
          }
          multiply(t2) {
            return this.multiplyMatrices(this, t2);
          }
          premultiply(t2) {
            return this.multiplyMatrices(t2, this);
          }
          multiplyMatrices(t2, e2) {
            const i2 = t2.elements, n2 = e2.elements, r2 = this.elements, s2 = i2[0], a2 = i2[4], o2 = i2[8], l2 = i2[12], c2 = i2[1], h2 = i2[5], u2 = i2[9], d2 = i2[13], p2 = i2[2], m2 = i2[6], f2 = i2[10], g2 = i2[14], v2 = i2[3], x2 = i2[7], _2 = i2[11], y2 = i2[15], M2 = n2[0], b2 = n2[4], S2 = n2[8], w2 = n2[12], T2 = n2[1], A2 = n2[5], E2 = n2[9], C2 = n2[13], L2 = n2[2], R2 = n2[6], P2 = n2[10], I2 = n2[14], D2 = n2[3], N2 = n2[7], O2 = n2[11], z2 = n2[15];
            return r2[0] = s2 * M2 + a2 * T2 + o2 * L2 + l2 * D2, r2[4] = s2 * b2 + a2 * A2 + o2 * R2 + l2 * N2, r2[8] = s2 * S2 + a2 * E2 + o2 * P2 + l2 * O2, r2[12] = s2 * w2 + a2 * C2 + o2 * I2 + l2 * z2, r2[1] = c2 * M2 + h2 * T2 + u2 * L2 + d2 * D2, r2[5] = c2 * b2 + h2 * A2 + u2 * R2 + d2 * N2, r2[9] = c2 * S2 + h2 * E2 + u2 * P2 + d2 * O2, r2[13] = c2 * w2 + h2 * C2 + u2 * I2 + d2 * z2, r2[2] = p2 * M2 + m2 * T2 + f2 * L2 + g2 * D2, r2[6] = p2 * b2 + m2 * A2 + f2 * R2 + g2 * N2, r2[10] = p2 * S2 + m2 * E2 + f2 * P2 + g2 * O2, r2[14] = p2 * w2 + m2 * C2 + f2 * I2 + g2 * z2, r2[3] = v2 * M2 + x2 * T2 + _2 * L2 + y2 * D2, r2[7] = v2 * b2 + x2 * A2 + _2 * R2 + y2 * N2, r2[11] = v2 * S2 + x2 * E2 + _2 * P2 + y2 * O2, r2[15] = v2 * w2 + x2 * C2 + _2 * I2 + y2 * z2, this;
          }
          multiplyScalar(t2) {
            const e2 = this.elements;
            return e2[0] *= t2, e2[4] *= t2, e2[8] *= t2, e2[12] *= t2, e2[1] *= t2, e2[5] *= t2, e2[9] *= t2, e2[13] *= t2, e2[2] *= t2, e2[6] *= t2, e2[10] *= t2, e2[14] *= t2, e2[3] *= t2, e2[7] *= t2, e2[11] *= t2, e2[15] *= t2, this;
          }
          determinant() {
            const t2 = this.elements, e2 = t2[0], i2 = t2[4], n2 = t2[8], r2 = t2[12], s2 = t2[1], a2 = t2[5], o2 = t2[9], l2 = t2[13], c2 = t2[2], h2 = t2[6], u2 = t2[10], d2 = t2[14];
            return t2[3] * (+r2 * o2 * h2 - n2 * l2 * h2 - r2 * a2 * u2 + i2 * l2 * u2 + n2 * a2 * d2 - i2 * o2 * d2) + t2[7] * (+e2 * o2 * d2 - e2 * l2 * u2 + r2 * s2 * u2 - n2 * s2 * d2 + n2 * l2 * c2 - r2 * o2 * c2) + t2[11] * (+e2 * l2 * h2 - e2 * a2 * d2 - r2 * s2 * h2 + i2 * s2 * d2 + r2 * a2 * c2 - i2 * l2 * c2) + t2[15] * (-n2 * a2 * c2 - e2 * o2 * h2 + e2 * a2 * u2 + n2 * s2 * h2 - i2 * s2 * u2 + i2 * o2 * c2);
          }
          transpose() {
            const t2 = this.elements;
            let e2;
            return e2 = t2[1], t2[1] = t2[4], t2[4] = e2, e2 = t2[2], t2[2] = t2[8], t2[8] = e2, e2 = t2[6], t2[6] = t2[9], t2[9] = e2, e2 = t2[3], t2[3] = t2[12], t2[12] = e2, e2 = t2[7], t2[7] = t2[13], t2[13] = e2, e2 = t2[11], t2[11] = t2[14], t2[14] = e2, this;
          }
          setPosition(t2, e2, i2) {
            const n2 = this.elements;
            return t2.isVector3 ? (n2[12] = t2.x, n2[13] = t2.y, n2[14] = t2.z) : (n2[12] = t2, n2[13] = e2, n2[14] = i2), this;
          }
          invert() {
            const t2 = this.elements, e2 = t2[0], i2 = t2[1], n2 = t2[2], r2 = t2[3], s2 = t2[4], a2 = t2[5], o2 = t2[6], l2 = t2[7], c2 = t2[8], h2 = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m2 = t2[13], f2 = t2[14], g2 = t2[15], v2 = h2 * f2 * l2 - m2 * u2 * l2 + m2 * o2 * d2 - a2 * f2 * d2 - h2 * o2 * g2 + a2 * u2 * g2, x2 = p2 * u2 * l2 - c2 * f2 * l2 - p2 * o2 * d2 + s2 * f2 * d2 + c2 * o2 * g2 - s2 * u2 * g2, _2 = c2 * m2 * l2 - p2 * h2 * l2 + p2 * a2 * d2 - s2 * m2 * d2 - c2 * a2 * g2 + s2 * h2 * g2, y2 = p2 * h2 * o2 - c2 * m2 * o2 - p2 * a2 * u2 + s2 * m2 * u2 + c2 * a2 * f2 - s2 * h2 * f2, M2 = e2 * v2 + i2 * x2 + n2 * _2 + r2 * y2;
            if (0 === M2)
              return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const b2 = 1 / M2;
            return t2[0] = v2 * b2, t2[1] = (m2 * u2 * r2 - h2 * f2 * r2 - m2 * n2 * d2 + i2 * f2 * d2 + h2 * n2 * g2 - i2 * u2 * g2) * b2, t2[2] = (a2 * f2 * r2 - m2 * o2 * r2 + m2 * n2 * l2 - i2 * f2 * l2 - a2 * n2 * g2 + i2 * o2 * g2) * b2, t2[3] = (h2 * o2 * r2 - a2 * u2 * r2 - h2 * n2 * l2 + i2 * u2 * l2 + a2 * n2 * d2 - i2 * o2 * d2) * b2, t2[4] = x2 * b2, t2[5] = (c2 * f2 * r2 - p2 * u2 * r2 + p2 * n2 * d2 - e2 * f2 * d2 - c2 * n2 * g2 + e2 * u2 * g2) * b2, t2[6] = (p2 * o2 * r2 - s2 * f2 * r2 - p2 * n2 * l2 + e2 * f2 * l2 + s2 * n2 * g2 - e2 * o2 * g2) * b2, t2[7] = (s2 * u2 * r2 - c2 * o2 * r2 + c2 * n2 * l2 - e2 * u2 * l2 - s2 * n2 * d2 + e2 * o2 * d2) * b2, t2[8] = _2 * b2, t2[9] = (p2 * h2 * r2 - c2 * m2 * r2 - p2 * i2 * d2 + e2 * m2 * d2 + c2 * i2 * g2 - e2 * h2 * g2) * b2, t2[10] = (s2 * m2 * r2 - p2 * a2 * r2 + p2 * i2 * l2 - e2 * m2 * l2 - s2 * i2 * g2 + e2 * a2 * g2) * b2, t2[11] = (c2 * a2 * r2 - s2 * h2 * r2 - c2 * i2 * l2 + e2 * h2 * l2 + s2 * i2 * d2 - e2 * a2 * d2) * b2, t2[12] = y2 * b2, t2[13] = (c2 * m2 * n2 - p2 * h2 * n2 + p2 * i2 * u2 - e2 * m2 * u2 - c2 * i2 * f2 + e2 * h2 * f2) * b2, t2[14] = (p2 * a2 * n2 - s2 * m2 * n2 - p2 * i2 * o2 + e2 * m2 * o2 + s2 * i2 * f2 - e2 * a2 * f2) * b2, t2[15] = (s2 * h2 * n2 - c2 * a2 * n2 + c2 * i2 * o2 - e2 * h2 * o2 - s2 * i2 * u2 + e2 * a2 * u2) * b2, this;
          }
          scale(t2) {
            const e2 = this.elements, i2 = t2.x, n2 = t2.y, r2 = t2.z;
            return e2[0] *= i2, e2[4] *= n2, e2[8] *= r2, e2[1] *= i2, e2[5] *= n2, e2[9] *= r2, e2[2] *= i2, e2[6] *= n2, e2[10] *= r2, e2[3] *= i2, e2[7] *= n2, e2[11] *= r2, this;
          }
          getMaxScaleOnAxis() {
            const t2 = this.elements, e2 = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], i2 = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], n2 = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
            return Math.sqrt(Math.max(e2, i2, n2));
          }
          makeTranslation(t2, e2, i2) {
            return this.set(1, 0, 0, t2, 0, 1, 0, e2, 0, 0, 1, i2, 0, 0, 0, 1), this;
          }
          makeRotationX(t2) {
            const e2 = Math.cos(t2), i2 = Math.sin(t2);
            return this.set(1, 0, 0, 0, 0, e2, -i2, 0, 0, i2, e2, 0, 0, 0, 0, 1), this;
          }
          makeRotationY(t2) {
            const e2 = Math.cos(t2), i2 = Math.sin(t2);
            return this.set(e2, 0, i2, 0, 0, 1, 0, 0, -i2, 0, e2, 0, 0, 0, 0, 1), this;
          }
          makeRotationZ(t2) {
            const e2 = Math.cos(t2), i2 = Math.sin(t2);
            return this.set(e2, -i2, 0, 0, i2, e2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
          }
          makeRotationAxis(t2, e2) {
            const i2 = Math.cos(e2), n2 = Math.sin(e2), r2 = 1 - i2, s2 = t2.x, a2 = t2.y, o2 = t2.z, l2 = r2 * s2, c2 = r2 * a2;
            return this.set(l2 * s2 + i2, l2 * a2 - n2 * o2, l2 * o2 + n2 * a2, 0, l2 * a2 + n2 * o2, c2 * a2 + i2, c2 * o2 - n2 * s2, 0, l2 * o2 - n2 * a2, c2 * o2 + n2 * s2, r2 * o2 * o2 + i2, 0, 0, 0, 0, 1), this;
          }
          makeScale(t2, e2, i2) {
            return this.set(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1), this;
          }
          makeShear(t2, e2, i2, n2, r2, s2) {
            return this.set(1, i2, r2, 0, t2, 1, s2, 0, e2, n2, 1, 0, 0, 0, 0, 1), this;
          }
          compose(t2, e2, i2) {
            const n2 = this.elements, r2 = e2._x, s2 = e2._y, a2 = e2._z, o2 = e2._w, l2 = r2 + r2, c2 = s2 + s2, h2 = a2 + a2, u2 = r2 * l2, d2 = r2 * c2, p2 = r2 * h2, m2 = s2 * c2, f2 = s2 * h2, g2 = a2 * h2, v2 = o2 * l2, x2 = o2 * c2, _2 = o2 * h2, y2 = i2.x, M2 = i2.y, b2 = i2.z;
            return n2[0] = (1 - (m2 + g2)) * y2, n2[1] = (d2 + _2) * y2, n2[2] = (p2 - x2) * y2, n2[3] = 0, n2[4] = (d2 - _2) * M2, n2[5] = (1 - (u2 + g2)) * M2, n2[6] = (f2 + v2) * M2, n2[7] = 0, n2[8] = (p2 + x2) * b2, n2[9] = (f2 - v2) * b2, n2[10] = (1 - (u2 + m2)) * b2, n2[11] = 0, n2[12] = t2.x, n2[13] = t2.y, n2[14] = t2.z, n2[15] = 1, this;
          }
          decompose(t2, e2, i2) {
            const n2 = this.elements;
            let r2 = Oe.set(n2[0], n2[1], n2[2]).length();
            const s2 = Oe.set(n2[4], n2[5], n2[6]).length(), a2 = Oe.set(n2[8], n2[9], n2[10]).length();
            this.determinant() < 0 && (r2 = -r2), t2.x = n2[12], t2.y = n2[13], t2.z = n2[14], ze.copy(this);
            const o2 = 1 / r2, l2 = 1 / s2, c2 = 1 / a2;
            return ze.elements[0] *= o2, ze.elements[1] *= o2, ze.elements[2] *= o2, ze.elements[4] *= l2, ze.elements[5] *= l2, ze.elements[6] *= l2, ze.elements[8] *= c2, ze.elements[9] *= c2, ze.elements[10] *= c2, e2.setFromRotationMatrix(ze), i2.x = r2, i2.y = s2, i2.z = a2, this;
          }
          makePerspective(t2, e2, i2, n2, r2, s2) {
            const a2 = this.elements, o2 = 2 * r2 / (e2 - t2), l2 = 2 * r2 / (i2 - n2), c2 = (e2 + t2) / (e2 - t2), h2 = (i2 + n2) / (i2 - n2), u2 = -(s2 + r2) / (s2 - r2), d2 = -2 * s2 * r2 / (s2 - r2);
            return a2[0] = o2, a2[4] = 0, a2[8] = c2, a2[12] = 0, a2[1] = 0, a2[5] = l2, a2[9] = h2, a2[13] = 0, a2[2] = 0, a2[6] = 0, a2[10] = u2, a2[14] = d2, a2[3] = 0, a2[7] = 0, a2[11] = -1, a2[15] = 0, this;
          }
          makeOrthographic(t2, e2, i2, n2, r2, s2) {
            const a2 = this.elements, o2 = 1 / (e2 - t2), l2 = 1 / (i2 - n2), c2 = 1 / (s2 - r2), h2 = (e2 + t2) * o2, u2 = (i2 + n2) * l2, d2 = (s2 + r2) * c2;
            return a2[0] = 2 * o2, a2[4] = 0, a2[8] = 0, a2[12] = -h2, a2[1] = 0, a2[5] = 2 * l2, a2[9] = 0, a2[13] = -u2, a2[2] = 0, a2[6] = 0, a2[10] = -2 * c2, a2[14] = -d2, a2[3] = 0, a2[7] = 0, a2[11] = 0, a2[15] = 1, this;
          }
          equals(t2) {
            const e2 = this.elements, i2 = t2.elements;
            for (let t3 = 0; t3 < 16; t3++)
              if (e2[t3] !== i2[t3])
                return false;
            return true;
          }
          fromArray(t2, e2 = 0) {
            for (let i2 = 0; i2 < 16; i2++)
              this.elements[i2] = t2[i2 + e2];
            return this;
          }
          toArray(t2 = [], e2 = 0) {
            const i2 = this.elements;
            return t2[e2] = i2[0], t2[e2 + 1] = i2[1], t2[e2 + 2] = i2[2], t2[e2 + 3] = i2[3], t2[e2 + 4] = i2[4], t2[e2 + 5] = i2[5], t2[e2 + 6] = i2[6], t2[e2 + 7] = i2[7], t2[e2 + 8] = i2[8], t2[e2 + 9] = i2[9], t2[e2 + 10] = i2[10], t2[e2 + 11] = i2[11], t2[e2 + 12] = i2[12], t2[e2 + 13] = i2[13], t2[e2 + 14] = i2[14], t2[e2 + 15] = i2[15], t2;
          }
        }
        const Oe = new ne(), ze = new Ne(), Ue = new ne(0, 0, 0), Be = new ne(1, 1, 1), Fe = new ne(), ke = new ne(), Ge = new ne(), Ve = new Ne(), He = new ie();
        class We {
          constructor(t2 = 0, e2 = 0, i2 = 0, n2 = We.DefaultOrder) {
            this.isEuler = true, this._x = t2, this._y = e2, this._z = i2, this._order = n2;
          }
          get x() {
            return this._x;
          }
          set x(t2) {
            this._x = t2, this._onChangeCallback();
          }
          get y() {
            return this._y;
          }
          set y(t2) {
            this._y = t2, this._onChangeCallback();
          }
          get z() {
            return this._z;
          }
          set z(t2) {
            this._z = t2, this._onChangeCallback();
          }
          get order() {
            return this._order;
          }
          set order(t2) {
            this._order = t2, this._onChangeCallback();
          }
          set(t2, e2, i2, n2 = this._order) {
            return this._x = t2, this._y = e2, this._z = i2, this._order = n2, this._onChangeCallback(), this;
          }
          clone() {
            return new this.constructor(this._x, this._y, this._z, this._order);
          }
          copy(t2) {
            return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
          }
          setFromRotationMatrix(t2, e2 = this._order, i2 = true) {
            const n2 = t2.elements, r2 = n2[0], s2 = n2[4], a2 = n2[8], o2 = n2[1], l2 = n2[5], c2 = n2[9], h2 = n2[2], u2 = n2[6], d2 = n2[10];
            switch (e2) {
              case "XYZ":
                this._y = Math.asin(yt(a2, -1, 1)), Math.abs(a2) < 0.9999999 ? (this._x = Math.atan2(-c2, d2), this._z = Math.atan2(-s2, r2)) : (this._x = Math.atan2(u2, l2), this._z = 0);
                break;
              case "YXZ":
                this._x = Math.asin(-yt(c2, -1, 1)), Math.abs(c2) < 0.9999999 ? (this._y = Math.atan2(a2, d2), this._z = Math.atan2(o2, l2)) : (this._y = Math.atan2(-h2, r2), this._z = 0);
                break;
              case "ZXY":
                this._x = Math.asin(yt(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-h2, d2), this._z = Math.atan2(-s2, l2)) : (this._y = 0, this._z = Math.atan2(o2, r2));
                break;
              case "ZYX":
                this._y = Math.asin(-yt(h2, -1, 1)), Math.abs(h2) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o2, r2)) : (this._x = 0, this._z = Math.atan2(-s2, l2));
                break;
              case "YZX":
                this._z = Math.asin(yt(o2, -1, 1)), Math.abs(o2) < 0.9999999 ? (this._x = Math.atan2(-c2, l2), this._y = Math.atan2(-h2, r2)) : (this._x = 0, this._y = Math.atan2(a2, d2));
                break;
              case "XZY":
                this._z = Math.asin(-yt(s2, -1, 1)), Math.abs(s2) < 0.9999999 ? (this._x = Math.atan2(u2, l2), this._y = Math.atan2(a2, r2)) : (this._x = Math.atan2(-c2, d2), this._y = 0);
                break;
              default:
                console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e2);
            }
            return this._order = e2, true === i2 && this._onChangeCallback(), this;
          }
          setFromQuaternion(t2, e2, i2) {
            return Ve.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(Ve, e2, i2);
          }
          setFromVector3(t2, e2 = this._order) {
            return this.set(t2.x, t2.y, t2.z, e2);
          }
          reorder(t2) {
            return He.setFromEuler(this), this.setFromQuaternion(He, t2);
          }
          equals(t2) {
            return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
          }
          fromArray(t2) {
            return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
          }
          toArray(t2 = [], e2 = 0) {
            return t2[e2] = this._x, t2[e2 + 1] = this._y, t2[e2 + 2] = this._z, t2[e2 + 3] = this._order, t2;
          }
          _onChange(t2) {
            return this._onChangeCallback = t2, this;
          }
          _onChangeCallback() {
          }
          *[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order;
          }
          toVector3() {
            console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead");
          }
        }
        We.DefaultOrder = "XYZ", We.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
        class je {
          constructor() {
            this.mask = 1;
          }
          set(t2) {
            this.mask = (1 << t2 | 0) >>> 0;
          }
          enable(t2) {
            this.mask |= 1 << t2 | 0;
          }
          enableAll() {
            this.mask = -1;
          }
          toggle(t2) {
            this.mask ^= 1 << t2 | 0;
          }
          disable(t2) {
            this.mask &= ~(1 << t2 | 0);
          }
          disableAll() {
            this.mask = 0;
          }
          test(t2) {
            return 0 != (this.mask & t2.mask);
          }
          isEnabled(t2) {
            return 0 != (this.mask & (1 << t2 | 0));
          }
        }
        let qe = 0;
        const Xe = new ne(), Ye = new ie(), Ze = new Ne(), Je = new ne(), Ke = new ne(), $e = new ne(), Qe = new ie(), ti = new ne(1, 0, 0), ei = new ne(0, 1, 0), ii = new ne(0, 0, 1), ni = { type: "added" }, ri = { type: "removed" };
        class si extends mt {
          constructor() {
            super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: qe++ }), this.uuid = _t(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = si.DefaultUp.clone();
            const t2 = new ne(), e2 = new We(), i2 = new ie(), n2 = new ne(1, 1, 1);
            e2._onChange(function() {
              i2.setFromEuler(e2, false);
            }), i2._onChange(function() {
              e2.setFromQuaternion(i2, void 0, false);
            }), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e2 }, quaternion: { configurable: true, enumerable: true, value: i2 }, scale: { configurable: true, enumerable: true, value: n2 }, modelViewMatrix: { value: new Ne() }, normalMatrix: { value: new Rt() } }), this.matrix = new Ne(), this.matrixWorld = new Ne(), this.matrixAutoUpdate = si.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = false, this.matrixWorldAutoUpdate = si.DefaultMatrixWorldAutoUpdate, this.layers = new je(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
          }
          onBeforeRender() {
          }
          onAfterRender() {
          }
          applyMatrix4(t2) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
          }
          applyQuaternion(t2) {
            return this.quaternion.premultiply(t2), this;
          }
          setRotationFromAxisAngle(t2, e2) {
            this.quaternion.setFromAxisAngle(t2, e2);
          }
          setRotationFromEuler(t2) {
            this.quaternion.setFromEuler(t2, true);
          }
          setRotationFromMatrix(t2) {
            this.quaternion.setFromRotationMatrix(t2);
          }
          setRotationFromQuaternion(t2) {
            this.quaternion.copy(t2);
          }
          rotateOnAxis(t2, e2) {
            return Ye.setFromAxisAngle(t2, e2), this.quaternion.multiply(Ye), this;
          }
          rotateOnWorldAxis(t2, e2) {
            return Ye.setFromAxisAngle(t2, e2), this.quaternion.premultiply(Ye), this;
          }
          rotateX(t2) {
            return this.rotateOnAxis(ti, t2);
          }
          rotateY(t2) {
            return this.rotateOnAxis(ei, t2);
          }
          rotateZ(t2) {
            return this.rotateOnAxis(ii, t2);
          }
          translateOnAxis(t2, e2) {
            return Xe.copy(t2).applyQuaternion(this.quaternion), this.position.add(Xe.multiplyScalar(e2)), this;
          }
          translateX(t2) {
            return this.translateOnAxis(ti, t2);
          }
          translateY(t2) {
            return this.translateOnAxis(ei, t2);
          }
          translateZ(t2) {
            return this.translateOnAxis(ii, t2);
          }
          localToWorld(t2) {
            return t2.applyMatrix4(this.matrixWorld);
          }
          worldToLocal(t2) {
            return t2.applyMatrix4(Ze.copy(this.matrixWorld).invert());
          }
          lookAt(t2, e2, i2) {
            t2.isVector3 ? Je.copy(t2) : Je.set(t2, e2, i2);
            const n2 = this.parent;
            this.updateWorldMatrix(true, false), Ke.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ze.lookAt(Ke, Je, this.up) : Ze.lookAt(Je, Ke, this.up), this.quaternion.setFromRotationMatrix(Ze), n2 && (Ze.extractRotation(n2.matrixWorld), Ye.setFromRotationMatrix(Ze), this.quaternion.premultiply(Ye.invert()));
          }
          add(t2) {
            if (arguments.length > 1) {
              for (let t3 = 0; t3 < arguments.length; t3++)
                this.add(arguments[t3]);
              return this;
            }
            return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (null !== t2.parent && t2.parent.remove(t2), t2.parent = this, this.children.push(t2), t2.dispatchEvent(ni)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
          }
          remove(t2) {
            if (arguments.length > 1) {
              for (let t3 = 0; t3 < arguments.length; t3++)
                this.remove(arguments[t3]);
              return this;
            }
            const e2 = this.children.indexOf(t2);
            return -1 !== e2 && (t2.parent = null, this.children.splice(e2, 1), t2.dispatchEvent(ri)), this;
          }
          removeFromParent() {
            const t2 = this.parent;
            return null !== t2 && t2.remove(this), this;
          }
          clear() {
            for (let t2 = 0; t2 < this.children.length; t2++) {
              const e2 = this.children[t2];
              e2.parent = null, e2.dispatchEvent(ri);
            }
            return this.children.length = 0, this;
          }
          attach(t2) {
            return this.updateWorldMatrix(true, false), Ze.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), Ze.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(Ze), this.add(t2), t2.updateWorldMatrix(false, true), this;
          }
          getObjectById(t2) {
            return this.getObjectByProperty("id", t2);
          }
          getObjectByName(t2) {
            return this.getObjectByProperty("name", t2);
          }
          getObjectByProperty(t2, e2) {
            if (this[t2] === e2)
              return this;
            for (let i2 = 0, n2 = this.children.length; i2 < n2; i2++) {
              const n3 = this.children[i2].getObjectByProperty(t2, e2);
              if (void 0 !== n3)
                return n3;
            }
          }
          getWorldPosition(t2) {
            return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
          }
          getWorldQuaternion(t2) {
            return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ke, t2, $e), t2;
          }
          getWorldScale(t2) {
            return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ke, Qe, t2), t2;
          }
          getWorldDirection(t2) {
            this.updateWorldMatrix(true, false);
            const e2 = this.matrixWorld.elements;
            return t2.set(e2[8], e2[9], e2[10]).normalize();
          }
          raycast() {
          }
          traverse(t2) {
            t2(this);
            const e2 = this.children;
            for (let i2 = 0, n2 = e2.length; i2 < n2; i2++)
              e2[i2].traverse(t2);
          }
          traverseVisible(t2) {
            if (false === this.visible)
              return;
            t2(this);
            const e2 = this.children;
            for (let i2 = 0, n2 = e2.length; i2 < n2; i2++)
              e2[i2].traverseVisible(t2);
          }
          traverseAncestors(t2) {
            const e2 = this.parent;
            null !== e2 && (t2(e2), e2.traverseAncestors(t2));
          }
          updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
          }
          updateMatrixWorld(t2) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = false, t2 = true);
            const e2 = this.children;
            for (let i2 = 0, n2 = e2.length; i2 < n2; i2++) {
              const n3 = e2[i2];
              true !== n3.matrixWorldAutoUpdate && true !== t2 || n3.updateMatrixWorld(t2);
            }
          }
          updateWorldMatrix(t2, e2) {
            const i2 = this.parent;
            if (true === t2 && null !== i2 && true === i2.matrixWorldAutoUpdate && i2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), true === e2) {
              const t3 = this.children;
              for (let e3 = 0, i3 = t3.length; e3 < i3; e3++) {
                const i4 = t3[e3];
                true === i4.matrixWorldAutoUpdate && i4.updateWorldMatrix(false, true);
              }
            }
          }
          toJSON(t2) {
            const e2 = void 0 === t2 || "string" == typeof t2, i2 = {};
            e2 && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i2.metadata = { version: 4.5, type: "Object", generator: "Object3D.toJSON" });
            const n2 = {};
            function r2(e3, i3) {
              return void 0 === e3[i3.uuid] && (e3[i3.uuid] = i3.toJSON(t2)), i3.uuid;
            }
            if (n2.uuid = this.uuid, n2.type = this.type, "" !== this.name && (n2.name = this.name), true === this.castShadow && (n2.castShadow = true), true === this.receiveShadow && (n2.receiveShadow = true), false === this.visible && (n2.visible = false), false === this.frustumCulled && (n2.frustumCulled = false), 0 !== this.renderOrder && (n2.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n2.userData = this.userData), n2.layers = this.layers.mask, n2.matrix = this.matrix.toArray(), false === this.matrixAutoUpdate && (n2.matrixAutoUpdate = false), this.isInstancedMesh && (n2.type = "InstancedMesh", n2.count = this.count, n2.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n2.instanceColor = this.instanceColor.toJSON())), this.isScene)
              this.background && (this.background.isColor ? n2.background = this.background.toJSON() : this.background.isTexture && (n2.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (n2.environment = this.environment.toJSON(t2).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
              n2.geometry = r2(t2.geometries, this.geometry);
              const e3 = this.geometry.parameters;
              if (void 0 !== e3 && void 0 !== e3.shapes) {
                const i3 = e3.shapes;
                if (Array.isArray(i3))
                  for (let e4 = 0, n3 = i3.length; e4 < n3; e4++) {
                    const n4 = i3[e4];
                    r2(t2.shapes, n4);
                  }
                else
                  r2(t2.shapes, i3);
              }
            }
            if (this.isSkinnedMesh && (n2.bindMode = this.bindMode, n2.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r2(t2.skeletons, this.skeleton), n2.skeleton = this.skeleton.uuid)), void 0 !== this.material)
              if (Array.isArray(this.material)) {
                const e3 = [];
                for (let i3 = 0, n3 = this.material.length; i3 < n3; i3++)
                  e3.push(r2(t2.materials, this.material[i3]));
                n2.material = e3;
              } else
                n2.material = r2(t2.materials, this.material);
            if (this.children.length > 0) {
              n2.children = [];
              for (let e3 = 0; e3 < this.children.length; e3++)
                n2.children.push(this.children[e3].toJSON(t2).object);
            }
            if (this.animations.length > 0) {
              n2.animations = [];
              for (let e3 = 0; e3 < this.animations.length; e3++) {
                const i3 = this.animations[e3];
                n2.animations.push(r2(t2.animations, i3));
              }
            }
            if (e2) {
              const e3 = s2(t2.geometries), n3 = s2(t2.materials), r3 = s2(t2.textures), a2 = s2(t2.images), o2 = s2(t2.shapes), l2 = s2(t2.skeletons), c2 = s2(t2.animations), h2 = s2(t2.nodes);
              e3.length > 0 && (i2.geometries = e3), n3.length > 0 && (i2.materials = n3), r3.length > 0 && (i2.textures = r3), a2.length > 0 && (i2.images = a2), o2.length > 0 && (i2.shapes = o2), l2.length > 0 && (i2.skeletons = l2), c2.length > 0 && (i2.animations = c2), h2.length > 0 && (i2.nodes = h2);
            }
            return i2.object = n2, i2;
            function s2(t3) {
              const e3 = [];
              for (const i3 in t3) {
                const n3 = t3[i3];
                delete n3.metadata, e3.push(n3);
              }
              return e3;
            }
          }
          clone(t2) {
            return new this.constructor().copy(this, t2);
          }
          copy(t2, e2 = true) {
            if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e2)
              for (let e3 = 0; e3 < t2.children.length; e3++) {
                const i2 = t2.children[e3];
                this.add(i2.clone());
              }
            return this;
          }
        }
        si.DefaultUp = new ne(0, 1, 0), si.DefaultMatrixAutoUpdate = true, si.DefaultMatrixWorldAutoUpdate = true;
        const ai = new ne(), oi = new ne(), li = new ne(), ci = new ne(), hi = new ne(), ui = new ne(), di = new ne(), pi = new ne(), mi = new ne(), fi = new ne();
        class gi {
          constructor(t2 = new ne(), e2 = new ne(), i2 = new ne()) {
            this.a = t2, this.b = e2, this.c = i2;
          }
          static getNormal(t2, e2, i2, n2) {
            n2.subVectors(i2, e2), ai.subVectors(t2, e2), n2.cross(ai);
            const r2 = n2.lengthSq();
            return r2 > 0 ? n2.multiplyScalar(1 / Math.sqrt(r2)) : n2.set(0, 0, 0);
          }
          static getBarycoord(t2, e2, i2, n2, r2) {
            ai.subVectors(n2, e2), oi.subVectors(i2, e2), li.subVectors(t2, e2);
            const s2 = ai.dot(ai), a2 = ai.dot(oi), o2 = ai.dot(li), l2 = oi.dot(oi), c2 = oi.dot(li), h2 = s2 * l2 - a2 * a2;
            if (0 === h2)
              return r2.set(-2, -1, -1);
            const u2 = 1 / h2, d2 = (l2 * o2 - a2 * c2) * u2, p2 = (s2 * c2 - a2 * o2) * u2;
            return r2.set(1 - d2 - p2, p2, d2);
          }
          static containsPoint(t2, e2, i2, n2) {
            return this.getBarycoord(t2, e2, i2, n2, ci), ci.x >= 0 && ci.y >= 0 && ci.x + ci.y <= 1;
          }
          static getUV(t2, e2, i2, n2, r2, s2, a2, o2) {
            return this.getBarycoord(t2, e2, i2, n2, ci), o2.set(0, 0), o2.addScaledVector(r2, ci.x), o2.addScaledVector(s2, ci.y), o2.addScaledVector(a2, ci.z), o2;
          }
          static isFrontFacing(t2, e2, i2, n2) {
            return ai.subVectors(i2, e2), oi.subVectors(t2, e2), ai.cross(oi).dot(n2) < 0;
          }
          set(t2, e2, i2) {
            return this.a.copy(t2), this.b.copy(e2), this.c.copy(i2), this;
          }
          setFromPointsAndIndices(t2, e2, i2, n2) {
            return this.a.copy(t2[e2]), this.b.copy(t2[i2]), this.c.copy(t2[n2]), this;
          }
          setFromAttributeAndIndices(t2, e2, i2, n2) {
            return this.a.fromBufferAttribute(t2, e2), this.b.fromBufferAttribute(t2, i2), this.c.fromBufferAttribute(t2, n2), this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
          }
          getArea() {
            return ai.subVectors(this.c, this.b), oi.subVectors(this.a, this.b), 0.5 * ai.cross(oi).length();
          }
          getMidpoint(t2) {
            return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
          }
          getNormal(t2) {
            return gi.getNormal(this.a, this.b, this.c, t2);
          }
          getPlane(t2) {
            return t2.setFromCoplanarPoints(this.a, this.b, this.c);
          }
          getBarycoord(t2, e2) {
            return gi.getBarycoord(t2, this.a, this.b, this.c, e2);
          }
          getUV(t2, e2, i2, n2, r2) {
            return gi.getUV(t2, this.a, this.b, this.c, e2, i2, n2, r2);
          }
          containsPoint(t2) {
            return gi.containsPoint(t2, this.a, this.b, this.c);
          }
          isFrontFacing(t2) {
            return gi.isFrontFacing(this.a, this.b, this.c, t2);
          }
          intersectsBox(t2) {
            return t2.intersectsTriangle(this);
          }
          closestPointToPoint(t2, e2) {
            const i2 = this.a, n2 = this.b, r2 = this.c;
            let s2, a2;
            hi.subVectors(n2, i2), ui.subVectors(r2, i2), pi.subVectors(t2, i2);
            const o2 = hi.dot(pi), l2 = ui.dot(pi);
            if (o2 <= 0 && l2 <= 0)
              return e2.copy(i2);
            mi.subVectors(t2, n2);
            const c2 = hi.dot(mi), h2 = ui.dot(mi);
            if (c2 >= 0 && h2 <= c2)
              return e2.copy(n2);
            const u2 = o2 * h2 - c2 * l2;
            if (u2 <= 0 && o2 >= 0 && c2 <= 0)
              return s2 = o2 / (o2 - c2), e2.copy(i2).addScaledVector(hi, s2);
            fi.subVectors(t2, r2);
            const d2 = hi.dot(fi), p2 = ui.dot(fi);
            if (p2 >= 0 && d2 <= p2)
              return e2.copy(r2);
            const m2 = d2 * l2 - o2 * p2;
            if (m2 <= 0 && l2 >= 0 && p2 <= 0)
              return a2 = l2 / (l2 - p2), e2.copy(i2).addScaledVector(ui, a2);
            const f2 = c2 * p2 - d2 * h2;
            if (f2 <= 0 && h2 - c2 >= 0 && d2 - p2 >= 0)
              return di.subVectors(r2, n2), a2 = (h2 - c2) / (h2 - c2 + (d2 - p2)), e2.copy(n2).addScaledVector(di, a2);
            const g2 = 1 / (f2 + m2 + u2);
            return s2 = m2 * g2, a2 = u2 * g2, e2.copy(i2).addScaledVector(hi, s2).addScaledVector(ui, a2);
          }
          equals(t2) {
            return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
          }
        }
        let vi = 0;
        class xi extends mt {
          constructor() {
            super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: vi++ }), this.uuid = _t(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = i, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = ht, this.stencilZFail = ht, this.stencilZPass = ht, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
          }
          get alphaTest() {
            return this._alphaTest;
          }
          set alphaTest(t2) {
            this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
          }
          onBuild() {
          }
          onBeforeRender() {
          }
          onBeforeCompile() {
          }
          customProgramCacheKey() {
            return this.onBeforeCompile.toString();
          }
          setValues(t2) {
            if (void 0 !== t2)
              for (const e2 in t2) {
                const i2 = t2[e2];
                if (void 0 === i2) {
                  console.warn("THREE.Material: '" + e2 + "' parameter is undefined.");
                  continue;
                }
                const n2 = this[e2];
                void 0 !== n2 ? n2 && n2.isColor ? n2.set(i2) : n2 && n2.isVector3 && i2 && i2.isVector3 ? n2.copy(i2) : this[e2] = i2 : console.warn("THREE." + this.type + ": '" + e2 + "' is not a property of this material.");
              }
          }
          toJSON(t2) {
            const e2 = void 0 === t2 || "string" == typeof t2;
            e2 && (t2 = { textures: {}, images: {} });
            const i2 = { metadata: { version: 4.5, type: "Material", generator: "Material.toJSON" } };
            function n2(t3) {
              const e3 = [];
              for (const i3 in t3) {
                const n3 = t3[i3];
                delete n3.metadata, e3.push(n3);
              }
              return e3;
            }
            if (i2.uuid = this.uuid, i2.type = this.type, "" !== this.name && (i2.name = this.name), this.color && this.color.isColor && (i2.color = this.color.getHex()), void 0 !== this.roughness && (i2.roughness = this.roughness), void 0 !== this.metalness && (i2.metalness = this.metalness), void 0 !== this.sheen && (i2.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i2.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (i2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i2.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i2.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i2.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i2.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i2.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (i2.shininess = this.shininess), void 0 !== this.clearcoat && (i2.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i2.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i2.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i2.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, i2.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (i2.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (i2.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (i2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i2.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), this.map && this.map.isTexture && (i2.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (i2.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (i2.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (i2.lightMap = this.lightMap.toJSON(t2).uuid, i2.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i2.aoMap = this.aoMap.toJSON(t2).uuid, i2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i2.bumpMap = this.bumpMap.toJSON(t2).uuid, i2.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i2.normalMap = this.normalMap.toJSON(t2).uuid, i2.normalMapType = this.normalMapType, i2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i2.displacementMap = this.displacementMap.toJSON(t2).uuid, i2.displacementScale = this.displacementScale, i2.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i2.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i2.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i2.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (i2.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i2.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i2.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (i2.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (i2.combine = this.combine)), void 0 !== this.envMapIntensity && (i2.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i2.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i2.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (i2.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i2.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (i2.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i2.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && (i2.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (i2.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (i2.size = this.size), null !== this.shadowSide && (i2.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i2.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i2.blending = this.blending), 0 !== this.side && (i2.side = this.side), this.vertexColors && (i2.vertexColors = true), this.opacity < 1 && (i2.opacity = this.opacity), true === this.transparent && (i2.transparent = this.transparent), i2.depthFunc = this.depthFunc, i2.depthTest = this.depthTest, i2.depthWrite = this.depthWrite, i2.colorWrite = this.colorWrite, i2.stencilWrite = this.stencilWrite, i2.stencilWriteMask = this.stencilWriteMask, i2.stencilFunc = this.stencilFunc, i2.stencilRef = this.stencilRef, i2.stencilFuncMask = this.stencilFuncMask, i2.stencilFail = this.stencilFail, i2.stencilZFail = this.stencilZFail, i2.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (i2.rotation = this.rotation), true === this.polygonOffset && (i2.polygonOffset = true), 0 !== this.polygonOffsetFactor && (i2.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i2.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (i2.linewidth = this.linewidth), void 0 !== this.dashSize && (i2.dashSize = this.dashSize), void 0 !== this.gapSize && (i2.gapSize = this.gapSize), void 0 !== this.scale && (i2.scale = this.scale), true === this.dithering && (i2.dithering = true), this.alphaTest > 0 && (i2.alphaTest = this.alphaTest), true === this.alphaToCoverage && (i2.alphaToCoverage = this.alphaToCoverage), true === this.premultipliedAlpha && (i2.premultipliedAlpha = this.premultipliedAlpha), true === this.wireframe && (i2.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i2.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i2.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i2.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (i2.flatShading = this.flatShading), false === this.visible && (i2.visible = false), false === this.toneMapped && (i2.toneMapped = false), false === this.fog && (i2.fog = false), "{}" !== JSON.stringify(this.userData) && (i2.userData = this.userData), e2) {
              const e3 = n2(t2.textures), r2 = n2(t2.images);
              e3.length > 0 && (i2.textures = e3), r2.length > 0 && (i2.images = r2);
            }
            return i2;
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
            const e2 = t2.clippingPlanes;
            let i2 = null;
            if (null !== e2) {
              const t3 = e2.length;
              i2 = new Array(t3);
              for (let n2 = 0; n2 !== t3; ++n2)
                i2[n2] = e2[n2].clone();
            }
            return this.clippingPlanes = i2, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
          set needsUpdate(t2) {
            true === t2 && this.version++;
          }
        }
        class _i extends xi {
          constructor(t2) {
            super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new jt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
          }
        }
        const yi = new ne(), Mi = new Lt();
        class bi {
          constructor(t2, e2, i2) {
            if (Array.isArray(t2))
              throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = true, this.name = "", this.array = t2, this.itemSize = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.normalized = true === i2, this.usage = ut, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
          }
          onUploadCallback() {
          }
          set needsUpdate(t2) {
            true === t2 && this.version++;
          }
          setUsage(t2) {
            return this.usage = t2, this;
          }
          copy(t2) {
            return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this;
          }
          copyAt(t2, e2, i2) {
            t2 *= this.itemSize, i2 *= e2.itemSize;
            for (let n2 = 0, r2 = this.itemSize; n2 < r2; n2++)
              this.array[t2 + n2] = e2.array[i2 + n2];
            return this;
          }
          copyArray(t2) {
            return this.array.set(t2), this;
          }
          applyMatrix3(t2) {
            if (2 === this.itemSize)
              for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
                Mi.fromBufferAttribute(this, e2), Mi.applyMatrix3(t2), this.setXY(e2, Mi.x, Mi.y);
            else if (3 === this.itemSize)
              for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
                yi.fromBufferAttribute(this, e2), yi.applyMatrix3(t2), this.setXYZ(e2, yi.x, yi.y, yi.z);
            return this;
          }
          applyMatrix4(t2) {
            for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
              yi.fromBufferAttribute(this, e2), yi.applyMatrix4(t2), this.setXYZ(e2, yi.x, yi.y, yi.z);
            return this;
          }
          applyNormalMatrix(t2) {
            for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
              yi.fromBufferAttribute(this, e2), yi.applyNormalMatrix(t2), this.setXYZ(e2, yi.x, yi.y, yi.z);
            return this;
          }
          transformDirection(t2) {
            for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
              yi.fromBufferAttribute(this, e2), yi.transformDirection(t2), this.setXYZ(e2, yi.x, yi.y, yi.z);
            return this;
          }
          set(t2, e2 = 0) {
            return this.array.set(t2, e2), this;
          }
          getX(t2) {
            let e2 = this.array[t2 * this.itemSize];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          setX(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.array[t2 * this.itemSize] = e2, this;
          }
          getY(t2) {
            let e2 = this.array[t2 * this.itemSize + 1];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          setY(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.array[t2 * this.itemSize + 1] = e2, this;
          }
          getZ(t2) {
            let e2 = this.array[t2 * this.itemSize + 2];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          setZ(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.array[t2 * this.itemSize + 2] = e2, this;
          }
          getW(t2) {
            let e2 = this.array[t2 * this.itemSize + 3];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          setW(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.array[t2 * this.itemSize + 3] = e2, this;
          }
          setXY(t2, e2, i2) {
            return t2 *= this.itemSize, this.normalized && (e2 = Et(e2, this.array), i2 = Et(i2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this;
          }
          setXYZ(t2, e2, i2, n2) {
            return t2 *= this.itemSize, this.normalized && (e2 = Et(e2, this.array), i2 = Et(i2, this.array), n2 = Et(n2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this.array[t2 + 2] = n2, this;
          }
          setXYZW(t2, e2, i2, n2, r2) {
            return t2 *= this.itemSize, this.normalized && (e2 = Et(e2, this.array), i2 = Et(i2, this.array), n2 = Et(n2, this.array), r2 = Et(r2, this.array)), this.array[t2 + 0] = e2, this.array[t2 + 1] = i2, this.array[t2 + 2] = n2, this.array[t2 + 3] = r2, this;
          }
          onUpload(t2) {
            return this.onUploadCallback = t2, this;
          }
          clone() {
            return new this.constructor(this.array, this.itemSize).copy(this);
          }
          toJSON() {
            const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
            return "" !== this.name && (t2.name = this.name), this.usage !== ut && (t2.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t2.updateRange = this.updateRange), t2;
          }
          copyColorsArray() {
            console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
          }
          copyVector2sArray() {
            console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
          }
          copyVector3sArray() {
            console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
          }
          copyVector4sArray() {
            console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
          }
        }
        class Si extends bi {
          constructor(t2, e2, i2) {
            super(new Uint16Array(t2), e2, i2);
          }
        }
        class wi extends bi {
          constructor(t2, e2, i2) {
            super(new Uint32Array(t2), e2, i2);
          }
        }
        class Ti extends bi {
          constructor(t2, e2, i2) {
            super(new Float32Array(t2), e2, i2);
          }
        }
        let Ai = 0;
        const Ei = new Ne(), Ci = new si(), Li = new ne(), Ri = new ae(), Pi = new ae(), Ii = new ne();
        class Di extends mt {
          constructor() {
            super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Ai++ }), this.uuid = _t(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
          }
          getIndex() {
            return this.index;
          }
          setIndex(t2) {
            return Array.isArray(t2) ? this.index = new (Pt(t2) ? wi : Si)(t2, 1) : this.index = t2, this;
          }
          getAttribute(t2) {
            return this.attributes[t2];
          }
          setAttribute(t2, e2) {
            return this.attributes[t2] = e2, this;
          }
          deleteAttribute(t2) {
            return delete this.attributes[t2], this;
          }
          hasAttribute(t2) {
            return void 0 !== this.attributes[t2];
          }
          addGroup(t2, e2, i2 = 0) {
            this.groups.push({ start: t2, count: e2, materialIndex: i2 });
          }
          clearGroups() {
            this.groups = [];
          }
          setDrawRange(t2, e2) {
            this.drawRange.start = t2, this.drawRange.count = e2;
          }
          applyMatrix4(t2) {
            const e2 = this.attributes.position;
            void 0 !== e2 && (e2.applyMatrix4(t2), e2.needsUpdate = true);
            const i2 = this.attributes.normal;
            if (void 0 !== i2) {
              const e3 = new Rt().getNormalMatrix(t2);
              i2.applyNormalMatrix(e3), i2.needsUpdate = true;
            }
            const n2 = this.attributes.tangent;
            return void 0 !== n2 && (n2.transformDirection(t2), n2.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
          }
          applyQuaternion(t2) {
            return Ei.makeRotationFromQuaternion(t2), this.applyMatrix4(Ei), this;
          }
          rotateX(t2) {
            return Ei.makeRotationX(t2), this.applyMatrix4(Ei), this;
          }
          rotateY(t2) {
            return Ei.makeRotationY(t2), this.applyMatrix4(Ei), this;
          }
          rotateZ(t2) {
            return Ei.makeRotationZ(t2), this.applyMatrix4(Ei), this;
          }
          translate(t2, e2, i2) {
            return Ei.makeTranslation(t2, e2, i2), this.applyMatrix4(Ei), this;
          }
          scale(t2, e2, i2) {
            return Ei.makeScale(t2, e2, i2), this.applyMatrix4(Ei), this;
          }
          lookAt(t2) {
            return Ci.lookAt(t2), Ci.updateMatrix(), this.applyMatrix4(Ci.matrix), this;
          }
          center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(Li).negate(), this.translate(Li.x, Li.y, Li.z), this;
          }
          setFromPoints(t2) {
            const e2 = [];
            for (let i2 = 0, n2 = t2.length; i2 < n2; i2++) {
              const n3 = t2[i2];
              e2.push(n3.x, n3.y, n3.z || 0);
            }
            return this.setAttribute("position", new Ti(e2, 3)), this;
          }
          computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new ae());
            const t2 = this.attributes.position, e2 = this.morphAttributes.position;
            if (t2 && t2.isGLBufferAttribute)
              return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new ne(-1 / 0, -1 / 0, -1 / 0), new ne(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t2) {
              if (this.boundingBox.setFromBufferAttribute(t2), e2)
                for (let t3 = 0, i2 = e2.length; t3 < i2; t3++) {
                  const i3 = e2[t3];
                  Ri.setFromBufferAttribute(i3), this.morphTargetsRelative ? (Ii.addVectors(this.boundingBox.min, Ri.min), this.boundingBox.expandByPoint(Ii), Ii.addVectors(this.boundingBox.max, Ri.max), this.boundingBox.expandByPoint(Ii)) : (this.boundingBox.expandByPoint(Ri.min), this.boundingBox.expandByPoint(Ri.max));
                }
            } else
              this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
          }
          computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new Te());
            const t2 = this.attributes.position, e2 = this.morphAttributes.position;
            if (t2 && t2.isGLBufferAttribute)
              return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new ne(), 1 / 0);
            if (t2) {
              const i2 = this.boundingSphere.center;
              if (Ri.setFromBufferAttribute(t2), e2)
                for (let t3 = 0, i3 = e2.length; t3 < i3; t3++) {
                  const i4 = e2[t3];
                  Pi.setFromBufferAttribute(i4), this.morphTargetsRelative ? (Ii.addVectors(Ri.min, Pi.min), Ri.expandByPoint(Ii), Ii.addVectors(Ri.max, Pi.max), Ri.expandByPoint(Ii)) : (Ri.expandByPoint(Pi.min), Ri.expandByPoint(Pi.max));
                }
              Ri.getCenter(i2);
              let n2 = 0;
              for (let e3 = 0, r2 = t2.count; e3 < r2; e3++)
                Ii.fromBufferAttribute(t2, e3), n2 = Math.max(n2, i2.distanceToSquared(Ii));
              if (e2)
                for (let r2 = 0, s2 = e2.length; r2 < s2; r2++) {
                  const s3 = e2[r2], a2 = this.morphTargetsRelative;
                  for (let e3 = 0, r3 = s3.count; e3 < r3; e3++)
                    Ii.fromBufferAttribute(s3, e3), a2 && (Li.fromBufferAttribute(t2, e3), Ii.add(Li)), n2 = Math.max(n2, i2.distanceToSquared(Ii));
                }
              this.boundingSphere.radius = Math.sqrt(n2), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
            }
          }
          computeTangents() {
            const t2 = this.index, e2 = this.attributes;
            if (null === t2 || void 0 === e2.position || void 0 === e2.normal || void 0 === e2.uv)
              return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const i2 = t2.array, n2 = e2.position.array, r2 = e2.normal.array, s2 = e2.uv.array, a2 = n2.length / 3;
            false === this.hasAttribute("tangent") && this.setAttribute("tangent", new bi(new Float32Array(4 * a2), 4));
            const o2 = this.getAttribute("tangent").array, l2 = [], c2 = [];
            for (let t3 = 0; t3 < a2; t3++)
              l2[t3] = new ne(), c2[t3] = new ne();
            const h2 = new ne(), u2 = new ne(), d2 = new ne(), p2 = new Lt(), m2 = new Lt(), f2 = new Lt(), g2 = new ne(), v2 = new ne();
            function x2(t3, e3, i3) {
              h2.fromArray(n2, 3 * t3), u2.fromArray(n2, 3 * e3), d2.fromArray(n2, 3 * i3), p2.fromArray(s2, 2 * t3), m2.fromArray(s2, 2 * e3), f2.fromArray(s2, 2 * i3), u2.sub(h2), d2.sub(h2), m2.sub(p2), f2.sub(p2);
              const r3 = 1 / (m2.x * f2.y - f2.x * m2.y);
              isFinite(r3) && (g2.copy(u2).multiplyScalar(f2.y).addScaledVector(d2, -m2.y).multiplyScalar(r3), v2.copy(d2).multiplyScalar(m2.x).addScaledVector(u2, -f2.x).multiplyScalar(r3), l2[t3].add(g2), l2[e3].add(g2), l2[i3].add(g2), c2[t3].add(v2), c2[e3].add(v2), c2[i3].add(v2));
            }
            let _2 = this.groups;
            0 === _2.length && (_2 = [{ start: 0, count: i2.length }]);
            for (let t3 = 0, e3 = _2.length; t3 < e3; ++t3) {
              const e4 = _2[t3], n3 = e4.start;
              for (let t4 = n3, r3 = n3 + e4.count; t4 < r3; t4 += 3)
                x2(i2[t4 + 0], i2[t4 + 1], i2[t4 + 2]);
            }
            const y2 = new ne(), M2 = new ne(), b2 = new ne(), S2 = new ne();
            function w2(t3) {
              b2.fromArray(r2, 3 * t3), S2.copy(b2);
              const e3 = l2[t3];
              y2.copy(e3), y2.sub(b2.multiplyScalar(b2.dot(e3))).normalize(), M2.crossVectors(S2, e3);
              const i3 = M2.dot(c2[t3]) < 0 ? -1 : 1;
              o2[4 * t3] = y2.x, o2[4 * t3 + 1] = y2.y, o2[4 * t3 + 2] = y2.z, o2[4 * t3 + 3] = i3;
            }
            for (let t3 = 0, e3 = _2.length; t3 < e3; ++t3) {
              const e4 = _2[t3], n3 = e4.start;
              for (let t4 = n3, r3 = n3 + e4.count; t4 < r3; t4 += 3)
                w2(i2[t4 + 0]), w2(i2[t4 + 1]), w2(i2[t4 + 2]);
            }
          }
          computeVertexNormals() {
            const t2 = this.index, e2 = this.getAttribute("position");
            if (void 0 !== e2) {
              let i2 = this.getAttribute("normal");
              if (void 0 === i2)
                i2 = new bi(new Float32Array(3 * e2.count), 3), this.setAttribute("normal", i2);
              else
                for (let t3 = 0, e3 = i2.count; t3 < e3; t3++)
                  i2.setXYZ(t3, 0, 0, 0);
              const n2 = new ne(), r2 = new ne(), s2 = new ne(), a2 = new ne(), o2 = new ne(), l2 = new ne(), c2 = new ne(), h2 = new ne();
              if (t2)
                for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
                  const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m2 = t2.getX(u2 + 2);
                  n2.fromBufferAttribute(e2, d3), r2.fromBufferAttribute(e2, p2), s2.fromBufferAttribute(e2, m2), c2.subVectors(s2, r2), h2.subVectors(n2, r2), c2.cross(h2), a2.fromBufferAttribute(i2, d3), o2.fromBufferAttribute(i2, p2), l2.fromBufferAttribute(i2, m2), a2.add(c2), o2.add(c2), l2.add(c2), i2.setXYZ(d3, a2.x, a2.y, a2.z), i2.setXYZ(p2, o2.x, o2.y, o2.z), i2.setXYZ(m2, l2.x, l2.y, l2.z);
                }
              else
                for (let t3 = 0, a3 = e2.count; t3 < a3; t3 += 3)
                  n2.fromBufferAttribute(e2, t3 + 0), r2.fromBufferAttribute(e2, t3 + 1), s2.fromBufferAttribute(e2, t3 + 2), c2.subVectors(s2, r2), h2.subVectors(n2, r2), c2.cross(h2), i2.setXYZ(t3 + 0, c2.x, c2.y, c2.z), i2.setXYZ(t3 + 1, c2.x, c2.y, c2.z), i2.setXYZ(t3 + 2, c2.x, c2.y, c2.z);
              this.normalizeNormals(), i2.needsUpdate = true;
            }
          }
          merge() {
            return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."), this;
          }
          normalizeNormals() {
            const t2 = this.attributes.normal;
            for (let e2 = 0, i2 = t2.count; e2 < i2; e2++)
              Ii.fromBufferAttribute(t2, e2), Ii.normalize(), t2.setXYZ(e2, Ii.x, Ii.y, Ii.z);
          }
          toNonIndexed() {
            function t2(t3, e3) {
              const i3 = t3.array, n3 = t3.itemSize, r3 = t3.normalized, s3 = new i3.constructor(e3.length * n3);
              let a2 = 0, o2 = 0;
              for (let r4 = 0, l2 = e3.length; r4 < l2; r4++) {
                a2 = t3.isInterleavedBufferAttribute ? e3[r4] * t3.data.stride + t3.offset : e3[r4] * n3;
                for (let t4 = 0; t4 < n3; t4++)
                  s3[o2++] = i3[a2++];
              }
              return new bi(s3, n3, r3);
            }
            if (null === this.index)
              return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e2 = new Di(), i2 = this.index.array, n2 = this.attributes;
            for (const r3 in n2) {
              const s3 = t2(n2[r3], i2);
              e2.setAttribute(r3, s3);
            }
            const r2 = this.morphAttributes;
            for (const n3 in r2) {
              const s3 = [], a2 = r2[n3];
              for (let e3 = 0, n4 = a2.length; e3 < n4; e3++) {
                const n5 = t2(a2[e3], i2);
                s3.push(n5);
              }
              e2.morphAttributes[n3] = s3;
            }
            e2.morphTargetsRelative = this.morphTargetsRelative;
            const s2 = this.groups;
            for (let t3 = 0, i3 = s2.length; t3 < i3; t3++) {
              const i4 = s2[t3];
              e2.addGroup(i4.start, i4.count, i4.materialIndex);
            }
            return e2;
          }
          toJSON() {
            const t2 = { metadata: { version: 4.5, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
            if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
              const e3 = this.parameters;
              for (const i3 in e3)
                void 0 !== e3[i3] && (t2[i3] = e3[i3]);
              return t2;
            }
            t2.data = { attributes: {} };
            const e2 = this.index;
            null !== e2 && (t2.data.index = { type: e2.array.constructor.name, array: Array.prototype.slice.call(e2.array) });
            const i2 = this.attributes;
            for (const e3 in i2) {
              const n3 = i2[e3];
              t2.data.attributes[e3] = n3.toJSON(t2.data);
            }
            const n2 = {};
            let r2 = false;
            for (const e3 in this.morphAttributes) {
              const i3 = this.morphAttributes[e3], s3 = [];
              for (let e4 = 0, n3 = i3.length; e4 < n3; e4++) {
                const n4 = i3[e4];
                s3.push(n4.toJSON(t2.data));
              }
              s3.length > 0 && (n2[e3] = s3, r2 = true);
            }
            r2 && (t2.data.morphAttributes = n2, t2.data.morphTargetsRelative = this.morphTargetsRelative);
            const s2 = this.groups;
            s2.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(s2)));
            const a2 = this.boundingSphere;
            return null !== a2 && (t2.data.boundingSphere = { center: a2.center.toArray(), radius: a2.radius }), t2;
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e2 = {};
            this.name = t2.name;
            const i2 = t2.index;
            null !== i2 && this.setIndex(i2.clone(e2));
            const n2 = t2.attributes;
            for (const t3 in n2) {
              const i3 = n2[t3];
              this.setAttribute(t3, i3.clone(e2));
            }
            const r2 = t2.morphAttributes;
            for (const t3 in r2) {
              const i3 = [], n3 = r2[t3];
              for (let t4 = 0, r3 = n3.length; t4 < r3; t4++)
                i3.push(n3[t4].clone(e2));
              this.morphAttributes[t3] = i3;
            }
            this.morphTargetsRelative = t2.morphTargetsRelative;
            const s2 = t2.groups;
            for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
              const e4 = s2[t3];
              this.addGroup(e4.start, e4.count, e4.materialIndex);
            }
            const a2 = t2.boundingBox;
            null !== a2 && (this.boundingBox = a2.clone());
            const o2 = t2.boundingSphere;
            return null !== o2 && (this.boundingSphere = o2.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, void 0 !== t2.parameters && (this.parameters = Object.assign({}, t2.parameters)), this;
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
        }
        const Ni = new Ne(), Oi = new De(), zi = new Te(), Ui = new ne(), Bi = new ne(), Fi = new ne(), ki = new ne(), Gi = new ne(), Vi = new ne(), Hi = new ne(), Wi = new ne(), ji = new ne(), qi = new Lt(), Xi = new Lt(), Yi = new Lt(), Zi = new ne(), Ji = new ne();
        class Ki extends si {
          constructor(t2 = new Di(), e2 = new _i()) {
            super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e2, this.updateMorphTargets();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = t2.material, this.geometry = t2.geometry, this;
          }
          updateMorphTargets() {
            const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
            if (e2.length > 0) {
              const i2 = t2[e2[0]];
              if (void 0 !== i2) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
                  const e4 = i2[t3].name || String(t3);
                  this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
                }
              }
            }
          }
          raycast(t2, e2) {
            const i2 = this.geometry, n2 = this.material, r2 = this.matrixWorld;
            if (void 0 === n2)
              return;
            if (null === i2.boundingSphere && i2.computeBoundingSphere(), zi.copy(i2.boundingSphere), zi.applyMatrix4(r2), false === t2.ray.intersectsSphere(zi))
              return;
            if (Ni.copy(r2).invert(), Oi.copy(t2.ray).applyMatrix4(Ni), null !== i2.boundingBox && false === Oi.intersectsBox(i2.boundingBox))
              return;
            let s2;
            const a2 = i2.index, o2 = i2.attributes.position, l2 = i2.morphAttributes.position, c2 = i2.morphTargetsRelative, h2 = i2.attributes.uv, u2 = i2.attributes.uv2, d2 = i2.groups, p2 = i2.drawRange;
            if (null !== a2)
              if (Array.isArray(n2))
                for (let i3 = 0, r3 = d2.length; i3 < r3; i3++) {
                  const r4 = d2[i3], m2 = n2[r4.materialIndex];
                  for (let i4 = Math.max(r4.start, p2.start), n3 = Math.min(a2.count, Math.min(r4.start + r4.count, p2.start + p2.count)); i4 < n3; i4 += 3) {
                    const n4 = a2.getX(i4), d3 = a2.getX(i4 + 1), p3 = a2.getX(i4 + 2);
                    s2 = $i(this, m2, t2, Oi, o2, l2, c2, h2, u2, n4, d3, p3), s2 && (s2.faceIndex = Math.floor(i4 / 3), s2.face.materialIndex = r4.materialIndex, e2.push(s2));
                  }
                }
              else {
                for (let i3 = Math.max(0, p2.start), r3 = Math.min(a2.count, p2.start + p2.count); i3 < r3; i3 += 3) {
                  const r4 = a2.getX(i3), d3 = a2.getX(i3 + 1), p3 = a2.getX(i3 + 2);
                  s2 = $i(this, n2, t2, Oi, o2, l2, c2, h2, u2, r4, d3, p3), s2 && (s2.faceIndex = Math.floor(i3 / 3), e2.push(s2));
                }
              }
            else if (void 0 !== o2)
              if (Array.isArray(n2))
                for (let i3 = 0, r3 = d2.length; i3 < r3; i3++) {
                  const r4 = d2[i3], a3 = n2[r4.materialIndex];
                  for (let i4 = Math.max(r4.start, p2.start), n3 = Math.min(o2.count, Math.min(r4.start + r4.count, p2.start + p2.count)); i4 < n3; i4 += 3) {
                    s2 = $i(this, a3, t2, Oi, o2, l2, c2, h2, u2, i4, i4 + 1, i4 + 2), s2 && (s2.faceIndex = Math.floor(i4 / 3), s2.face.materialIndex = r4.materialIndex, e2.push(s2));
                  }
                }
              else {
                for (let i3 = Math.max(0, p2.start), r3 = Math.min(o2.count, p2.start + p2.count); i3 < r3; i3 += 3) {
                  s2 = $i(this, n2, t2, Oi, o2, l2, c2, h2, u2, i3, i3 + 1, i3 + 2), s2 && (s2.faceIndex = Math.floor(i3 / 3), e2.push(s2));
                }
              }
          }
        }
        function $i(t2, e2, i2, n2, r2, s2, a2, o2, l2, c2, h2, u2) {
          Ui.fromBufferAttribute(r2, c2), Bi.fromBufferAttribute(r2, h2), Fi.fromBufferAttribute(r2, u2);
          const d2 = t2.morphTargetInfluences;
          if (s2 && d2) {
            Hi.set(0, 0, 0), Wi.set(0, 0, 0), ji.set(0, 0, 0);
            for (let t3 = 0, e3 = s2.length; t3 < e3; t3++) {
              const e4 = d2[t3], i3 = s2[t3];
              0 !== e4 && (ki.fromBufferAttribute(i3, c2), Gi.fromBufferAttribute(i3, h2), Vi.fromBufferAttribute(i3, u2), a2 ? (Hi.addScaledVector(ki, e4), Wi.addScaledVector(Gi, e4), ji.addScaledVector(Vi, e4)) : (Hi.addScaledVector(ki.sub(Ui), e4), Wi.addScaledVector(Gi.sub(Bi), e4), ji.addScaledVector(Vi.sub(Fi), e4)));
            }
            Ui.add(Hi), Bi.add(Wi), Fi.add(ji);
          }
          t2.isSkinnedMesh && (t2.boneTransform(c2, Ui), t2.boneTransform(h2, Bi), t2.boneTransform(u2, Fi));
          const p2 = function(t3, e3, i3, n3, r3, s3, a3, o3) {
            let l3;
            if (l3 = 1 === e3.side ? n3.intersectTriangle(a3, s3, r3, true, o3) : n3.intersectTriangle(r3, s3, a3, 2 !== e3.side, o3), null === l3)
              return null;
            Ji.copy(o3), Ji.applyMatrix4(t3.matrixWorld);
            const c3 = i3.ray.origin.distanceTo(Ji);
            return c3 < i3.near || c3 > i3.far ? null : { distance: c3, point: Ji.clone(), object: t3 };
          }(t2, e2, i2, n2, Ui, Bi, Fi, Zi);
          if (p2) {
            o2 && (qi.fromBufferAttribute(o2, c2), Xi.fromBufferAttribute(o2, h2), Yi.fromBufferAttribute(o2, u2), p2.uv = gi.getUV(Zi, Ui, Bi, Fi, qi, Xi, Yi, new Lt())), l2 && (qi.fromBufferAttribute(l2, c2), Xi.fromBufferAttribute(l2, h2), Yi.fromBufferAttribute(l2, u2), p2.uv2 = gi.getUV(Zi, Ui, Bi, Fi, qi, Xi, Yi, new Lt()));
            const t3 = { a: c2, b: h2, c: u2, normal: new ne(), materialIndex: 0 };
            gi.getNormal(Ui, Bi, Fi, t3.normal), p2.face = t3;
          }
          return p2;
        }
        class Qi extends Di {
          constructor(t2 = 1, e2 = 1, i2 = 1, n2 = 1, r2 = 1, s2 = 1) {
            super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e2, depth: i2, widthSegments: n2, heightSegments: r2, depthSegments: s2 };
            const a2 = this;
            n2 = Math.floor(n2), r2 = Math.floor(r2), s2 = Math.floor(s2);
            const o2 = [], l2 = [], c2 = [], h2 = [];
            let u2 = 0, d2 = 0;
            function p2(t3, e3, i3, n3, r3, s3, p3, m2, f2, g2, v2) {
              const x2 = s3 / f2, _2 = p3 / g2, y2 = s3 / 2, M2 = p3 / 2, b2 = m2 / 2, S2 = f2 + 1, w2 = g2 + 1;
              let T2 = 0, A2 = 0;
              const E2 = new ne();
              for (let s4 = 0; s4 < w2; s4++) {
                const a3 = s4 * _2 - M2;
                for (let o3 = 0; o3 < S2; o3++) {
                  const u3 = o3 * x2 - y2;
                  E2[t3] = u3 * n3, E2[e3] = a3 * r3, E2[i3] = b2, l2.push(E2.x, E2.y, E2.z), E2[t3] = 0, E2[e3] = 0, E2[i3] = m2 > 0 ? 1 : -1, c2.push(E2.x, E2.y, E2.z), h2.push(o3 / f2), h2.push(1 - s4 / g2), T2 += 1;
                }
              }
              for (let t4 = 0; t4 < g2; t4++)
                for (let e4 = 0; e4 < f2; e4++) {
                  const i4 = u2 + e4 + S2 * t4, n4 = u2 + e4 + S2 * (t4 + 1), r4 = u2 + (e4 + 1) + S2 * (t4 + 1), s4 = u2 + (e4 + 1) + S2 * t4;
                  o2.push(i4, n4, s4), o2.push(n4, r4, s4), A2 += 6;
                }
              a2.addGroup(d2, A2, v2), d2 += A2, u2 += T2;
            }
            p2("z", "y", "x", -1, -1, i2, e2, t2, s2, r2, 0), p2("z", "y", "x", 1, -1, i2, e2, -t2, s2, r2, 1), p2("x", "z", "y", 1, 1, t2, i2, e2, n2, s2, 2), p2("x", "z", "y", 1, -1, t2, i2, -e2, n2, s2, 3), p2("x", "y", "z", 1, -1, t2, e2, i2, n2, r2, 4), p2("x", "y", "z", -1, -1, t2, e2, -i2, n2, r2, 5), this.setIndex(o2), this.setAttribute("position", new Ti(l2, 3)), this.setAttribute("normal", new Ti(c2, 3)), this.setAttribute("uv", new Ti(h2, 2));
          }
          static fromJSON(t2) {
            return new Qi(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
          }
        }
        function tn(t2) {
          const e2 = {};
          for (const i2 in t2) {
            e2[i2] = {};
            for (const n2 in t2[i2]) {
              const r2 = t2[i2][n2];
              r2 && (r2.isColor || r2.isMatrix3 || r2.isMatrix4 || r2.isVector2 || r2.isVector3 || r2.isVector4 || r2.isTexture || r2.isQuaternion) ? e2[i2][n2] = r2.clone() : Array.isArray(r2) ? e2[i2][n2] = r2.slice() : e2[i2][n2] = r2;
            }
          }
          return e2;
        }
        function en(t2) {
          const e2 = {};
          for (let i2 = 0; i2 < t2.length; i2++) {
            const n2 = tn(t2[i2]);
            for (const t3 in n2)
              e2[t3] = n2[t3];
          }
          return e2;
        }
        const nn = { clone: tn, merge: en };
        class rn extends xi {
          constructor(t2) {
            super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.extensions = { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv2: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = tn(t2.uniforms), this.uniformsGroups = function(t3) {
              const e2 = [];
              for (let i2 = 0; i2 < t3.length; i2++)
                e2.push(t3[i2].clone());
              return e2;
            }(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            e2.glslVersion = this.glslVersion, e2.uniforms = {};
            for (const i3 in this.uniforms) {
              const n2 = this.uniforms[i3].value;
              n2 && n2.isTexture ? e2.uniforms[i3] = { type: "t", value: n2.toJSON(t2).uuid } : n2 && n2.isColor ? e2.uniforms[i3] = { type: "c", value: n2.getHex() } : n2 && n2.isVector2 ? e2.uniforms[i3] = { type: "v2", value: n2.toArray() } : n2 && n2.isVector3 ? e2.uniforms[i3] = { type: "v3", value: n2.toArray() } : n2 && n2.isVector4 ? e2.uniforms[i3] = { type: "v4", value: n2.toArray() } : n2 && n2.isMatrix3 ? e2.uniforms[i3] = { type: "m3", value: n2.toArray() } : n2 && n2.isMatrix4 ? e2.uniforms[i3] = { type: "m4", value: n2.toArray() } : e2.uniforms[i3] = { value: n2 };
            }
            Object.keys(this.defines).length > 0 && (e2.defines = this.defines), e2.vertexShader = this.vertexShader, e2.fragmentShader = this.fragmentShader;
            const i2 = {};
            for (const t3 in this.extensions)
              true === this.extensions[t3] && (i2[t3] = true);
            return Object.keys(i2).length > 0 && (e2.extensions = i2), e2;
          }
        }
        class sn extends si {
          constructor() {
            super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ne(), this.projectionMatrix = new Ne(), this.projectionMatrixInverse = new Ne();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this;
          }
          getWorldDirection(t2) {
            this.updateWorldMatrix(true, false);
            const e2 = this.matrixWorld.elements;
            return t2.set(-e2[8], -e2[9], -e2[10]).normalize();
          }
          updateMatrixWorld(t2) {
            super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
          }
          updateWorldMatrix(t2, e2) {
            super.updateWorldMatrix(t2, e2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }
        class an extends sn {
          constructor(t2 = 50, e2 = 1, i2 = 0.1, n2 = 2e3) {
            super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = i2, this.far = n2, this.focus = 10, this.aspect = e2, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
          }
          setFocalLength(t2) {
            const e2 = 0.5 * this.getFilmHeight() / t2;
            this.fov = 2 * xt * Math.atan(e2), this.updateProjectionMatrix();
          }
          getFocalLength() {
            const t2 = Math.tan(0.5 * vt * this.fov);
            return 0.5 * this.getFilmHeight() / t2;
          }
          getEffectiveFOV() {
            return 2 * xt * Math.atan(Math.tan(0.5 * vt * this.fov) / this.zoom);
          }
          getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1);
          }
          getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1);
          }
          setViewOffset(t2, e2, i2, n2, r2, s2) {
            this.aspect = t2 / e2, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = i2, this.view.offsetY = n2, this.view.width = r2, this.view.height = s2, this.updateProjectionMatrix();
          }
          clearViewOffset() {
            null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
          }
          updateProjectionMatrix() {
            const t2 = this.near;
            let e2 = t2 * Math.tan(0.5 * vt * this.fov) / this.zoom, i2 = 2 * e2, n2 = this.aspect * i2, r2 = -0.5 * n2;
            const s2 = this.view;
            if (null !== this.view && this.view.enabled) {
              const t3 = s2.fullWidth, a3 = s2.fullHeight;
              r2 += s2.offsetX * n2 / t3, e2 -= s2.offsetY * i2 / a3, n2 *= s2.width / t3, i2 *= s2.height / a3;
            }
            const a2 = this.filmOffset;
            0 !== a2 && (r2 += t2 * a2 / this.getFilmWidth()), this.projectionMatrix.makePerspective(r2, r2 + n2, e2, e2 - i2, t2, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return e2.object.fov = this.fov, e2.object.zoom = this.zoom, e2.object.near = this.near, e2.object.far = this.far, e2.object.focus = this.focus, e2.object.aspect = this.aspect, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2.object.filmGauge = this.filmGauge, e2.object.filmOffset = this.filmOffset, e2;
          }
        }
        const on = 90;
        class ln extends si {
          constructor(t2, e2, i2) {
            super(), this.type = "CubeCamera", this.renderTarget = i2;
            const n2 = new an(on, 1, t2, e2);
            n2.layers = this.layers, n2.up.set(0, -1, 0), n2.lookAt(new ne(1, 0, 0)), this.add(n2);
            const r2 = new an(on, 1, t2, e2);
            r2.layers = this.layers, r2.up.set(0, -1, 0), r2.lookAt(new ne(-1, 0, 0)), this.add(r2);
            const s2 = new an(on, 1, t2, e2);
            s2.layers = this.layers, s2.up.set(0, 0, 1), s2.lookAt(new ne(0, 1, 0)), this.add(s2);
            const a2 = new an(on, 1, t2, e2);
            a2.layers = this.layers, a2.up.set(0, 0, -1), a2.lookAt(new ne(0, -1, 0)), this.add(a2);
            const o2 = new an(on, 1, t2, e2);
            o2.layers = this.layers, o2.up.set(0, -1, 0), o2.lookAt(new ne(0, 0, 1)), this.add(o2);
            const l2 = new an(on, 1, t2, e2);
            l2.layers = this.layers, l2.up.set(0, -1, 0), l2.lookAt(new ne(0, 0, -1)), this.add(l2);
          }
          update(t2, e2) {
            null === this.parent && this.updateMatrixWorld();
            const i2 = this.renderTarget, [n2, r2, s2, a2, o2, l2] = this.children, c2 = t2.getRenderTarget(), h2 = t2.toneMapping, u2 = t2.xr.enabled;
            t2.toneMapping = 0, t2.xr.enabled = false;
            const d2 = i2.texture.generateMipmaps;
            i2.texture.generateMipmaps = false, t2.setRenderTarget(i2, 0), t2.render(e2, n2), t2.setRenderTarget(i2, 1), t2.render(e2, r2), t2.setRenderTarget(i2, 2), t2.render(e2, s2), t2.setRenderTarget(i2, 3), t2.render(e2, a2), t2.setRenderTarget(i2, 4), t2.render(e2, o2), i2.texture.generateMipmaps = d2, t2.setRenderTarget(i2, 5), t2.render(e2, l2), t2.setRenderTarget(c2), t2.toneMapping = h2, t2.xr.enabled = u2, i2.texture.needsPMREMUpdate = true;
          }
        }
        class cn extends Kt {
          constructor(t2, e2, i2, n2, s2, a2, o2, l2, c2, h2) {
            super(t2 = void 0 !== t2 ? t2 : [], e2 = void 0 !== e2 ? e2 : r, i2, n2, s2, a2, o2, l2, c2, h2), this.isCubeTexture = true, this.flipY = false;
          }
          get images() {
            return this.image;
          }
          set images(t2) {
            this.image = t2;
          }
        }
        class hn extends Qt {
          constructor(t2, e2 = {}) {
            super(t2, t2, e2), this.isWebGLCubeRenderTarget = true;
            const i2 = { width: t2, height: t2, depth: 1 }, n2 = [i2, i2, i2, i2, i2, i2];
            this.texture = new cn(n2, e2.mapping, e2.wrapS, e2.wrapT, e2.magFilter, e2.minFilter, e2.format, e2.type, e2.anisotropy, e2.encoding), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = void 0 !== e2.generateMipmaps && e2.generateMipmaps, this.texture.minFilter = void 0 !== e2.minFilter ? e2.minFilter : f;
          }
          fromEquirectangularTexture(t2, e2) {
            this.texture.type = e2.type, this.texture.encoding = e2.encoding, this.texture.generateMipmaps = e2.generateMipmaps, this.texture.minFilter = e2.minFilter, this.texture.magFilter = e2.magFilter;
            const i2 = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, n2 = new Qi(5, 5, 5), r2 = new rn({ name: "CubemapFromEquirect", uniforms: tn(i2.uniforms), vertexShader: i2.vertexShader, fragmentShader: i2.fragmentShader, side: 1, blending: 0 });
            r2.uniforms.tEquirect.value = e2;
            const s2 = new Ki(n2, r2), a2 = e2.minFilter;
            e2.minFilter === v && (e2.minFilter = f);
            return new ln(1, 10, this).update(t2, s2), e2.minFilter = a2, s2.geometry.dispose(), s2.material.dispose(), this;
          }
          clear(t2, e2, i2, n2) {
            const r2 = t2.getRenderTarget();
            for (let r3 = 0; r3 < 6; r3++)
              t2.setRenderTarget(this, r3), t2.clear(e2, i2, n2);
            t2.setRenderTarget(r2);
          }
        }
        const un = new ne(), dn = new ne(), pn = new Rt();
        class mn {
          constructor(t2 = new ne(1, 0, 0), e2 = 0) {
            this.isPlane = true, this.normal = t2, this.constant = e2;
          }
          set(t2, e2) {
            return this.normal.copy(t2), this.constant = e2, this;
          }
          setComponents(t2, e2, i2, n2) {
            return this.normal.set(t2, e2, i2), this.constant = n2, this;
          }
          setFromNormalAndCoplanarPoint(t2, e2) {
            return this.normal.copy(t2), this.constant = -e2.dot(this.normal), this;
          }
          setFromCoplanarPoints(t2, e2, i2) {
            const n2 = un.subVectors(i2, e2).cross(dn.subVectors(t2, e2)).normalize();
            return this.setFromNormalAndCoplanarPoint(n2, t2), this;
          }
          copy(t2) {
            return this.normal.copy(t2.normal), this.constant = t2.constant, this;
          }
          normalize() {
            const t2 = 1 / this.normal.length();
            return this.normal.multiplyScalar(t2), this.constant *= t2, this;
          }
          negate() {
            return this.constant *= -1, this.normal.negate(), this;
          }
          distanceToPoint(t2) {
            return this.normal.dot(t2) + this.constant;
          }
          distanceToSphere(t2) {
            return this.distanceToPoint(t2.center) - t2.radius;
          }
          projectPoint(t2, e2) {
            return e2.copy(this.normal).multiplyScalar(-this.distanceToPoint(t2)).add(t2);
          }
          intersectLine(t2, e2) {
            const i2 = t2.delta(un), n2 = this.normal.dot(i2);
            if (0 === n2)
              return 0 === this.distanceToPoint(t2.start) ? e2.copy(t2.start) : null;
            const r2 = -(t2.start.dot(this.normal) + this.constant) / n2;
            return r2 < 0 || r2 > 1 ? null : e2.copy(i2).multiplyScalar(r2).add(t2.start);
          }
          intersectsLine(t2) {
            const e2 = this.distanceToPoint(t2.start), i2 = this.distanceToPoint(t2.end);
            return e2 < 0 && i2 > 0 || i2 < 0 && e2 > 0;
          }
          intersectsBox(t2) {
            return t2.intersectsPlane(this);
          }
          intersectsSphere(t2) {
            return t2.intersectsPlane(this);
          }
          coplanarPoint(t2) {
            return t2.copy(this.normal).multiplyScalar(-this.constant);
          }
          applyMatrix4(t2, e2) {
            const i2 = e2 || pn.getNormalMatrix(t2), n2 = this.coplanarPoint(un).applyMatrix4(t2), r2 = this.normal.applyMatrix3(i2).normalize();
            return this.constant = -n2.dot(r2), this;
          }
          translate(t2) {
            return this.constant -= t2.dot(this.normal), this;
          }
          equals(t2) {
            return t2.normal.equals(this.normal) && t2.constant === this.constant;
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }
        const fn = new Te(), gn = new ne();
        class vn {
          constructor(t2 = new mn(), e2 = new mn(), i2 = new mn(), n2 = new mn(), r2 = new mn(), s2 = new mn()) {
            this.planes = [t2, e2, i2, n2, r2, s2];
          }
          set(t2, e2, i2, n2, r2, s2) {
            const a2 = this.planes;
            return a2[0].copy(t2), a2[1].copy(e2), a2[2].copy(i2), a2[3].copy(n2), a2[4].copy(r2), a2[5].copy(s2), this;
          }
          copy(t2) {
            const e2 = this.planes;
            for (let i2 = 0; i2 < 6; i2++)
              e2[i2].copy(t2.planes[i2]);
            return this;
          }
          setFromProjectionMatrix(t2) {
            const e2 = this.planes, i2 = t2.elements, n2 = i2[0], r2 = i2[1], s2 = i2[2], a2 = i2[3], o2 = i2[4], l2 = i2[5], c2 = i2[6], h2 = i2[7], u2 = i2[8], d2 = i2[9], p2 = i2[10], m2 = i2[11], f2 = i2[12], g2 = i2[13], v2 = i2[14], x2 = i2[15];
            return e2[0].setComponents(a2 - n2, h2 - o2, m2 - u2, x2 - f2).normalize(), e2[1].setComponents(a2 + n2, h2 + o2, m2 + u2, x2 + f2).normalize(), e2[2].setComponents(a2 + r2, h2 + l2, m2 + d2, x2 + g2).normalize(), e2[3].setComponents(a2 - r2, h2 - l2, m2 - d2, x2 - g2).normalize(), e2[4].setComponents(a2 - s2, h2 - c2, m2 - p2, x2 - v2).normalize(), e2[5].setComponents(a2 + s2, h2 + c2, m2 + p2, x2 + v2).normalize(), this;
          }
          intersectsObject(t2) {
            const e2 = t2.geometry;
            return null === e2.boundingSphere && e2.computeBoundingSphere(), fn.copy(e2.boundingSphere).applyMatrix4(t2.matrixWorld), this.intersectsSphere(fn);
          }
          intersectsSprite(t2) {
            return fn.center.set(0, 0, 0), fn.radius = 0.7071067811865476, fn.applyMatrix4(t2.matrixWorld), this.intersectsSphere(fn);
          }
          intersectsSphere(t2) {
            const e2 = this.planes, i2 = t2.center, n2 = -t2.radius;
            for (let t3 = 0; t3 < 6; t3++) {
              if (e2[t3].distanceToPoint(i2) < n2)
                return false;
            }
            return true;
          }
          intersectsBox(t2) {
            const e2 = this.planes;
            for (let i2 = 0; i2 < 6; i2++) {
              const n2 = e2[i2];
              if (gn.x = n2.normal.x > 0 ? t2.max.x : t2.min.x, gn.y = n2.normal.y > 0 ? t2.max.y : t2.min.y, gn.z = n2.normal.z > 0 ? t2.max.z : t2.min.z, n2.distanceToPoint(gn) < 0)
                return false;
            }
            return true;
          }
          containsPoint(t2) {
            const e2 = this.planes;
            for (let i2 = 0; i2 < 6; i2++)
              if (e2[i2].distanceToPoint(t2) < 0)
                return false;
            return true;
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }
        function xn() {
          let t2 = null, e2 = false, i2 = null, n2 = null;
          function r2(e3, s2) {
            i2(e3, s2), n2 = t2.requestAnimationFrame(r2);
          }
          return { start: function() {
            true !== e2 && null !== i2 && (n2 = t2.requestAnimationFrame(r2), e2 = true);
          }, stop: function() {
            t2.cancelAnimationFrame(n2), e2 = false;
          }, setAnimationLoop: function(t3) {
            i2 = t3;
          }, setContext: function(e3) {
            t2 = e3;
          } };
        }
        function _n(t2, e2) {
          const i2 = e2.isWebGL2, n2 = /* @__PURE__ */ new WeakMap();
          return { get: function(t3) {
            return t3.isInterleavedBufferAttribute && (t3 = t3.data), n2.get(t3);
          }, remove: function(e3) {
            e3.isInterleavedBufferAttribute && (e3 = e3.data);
            const i3 = n2.get(e3);
            i3 && (t2.deleteBuffer(i3.buffer), n2.delete(e3));
          }, update: function(e3, r2) {
            if (e3.isGLBufferAttribute) {
              const t3 = n2.get(e3);
              return void ((!t3 || t3.version < e3.version) && n2.set(e3, { buffer: e3.buffer, type: e3.type, bytesPerElement: e3.elementSize, version: e3.version }));
            }
            e3.isInterleavedBufferAttribute && (e3 = e3.data);
            const s2 = n2.get(e3);
            void 0 === s2 ? n2.set(e3, function(e4, n3) {
              const r3 = e4.array, s3 = e4.usage, a2 = t2.createBuffer();
              let o2;
              if (t2.bindBuffer(n3, a2), t2.bufferData(n3, r3, s3), e4.onUploadCallback(), r3 instanceof Float32Array)
                o2 = 5126;
              else if (r3 instanceof Uint16Array)
                if (e4.isFloat16BufferAttribute) {
                  if (!i2)
                    throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                  o2 = 5131;
                } else
                  o2 = 5123;
              else if (r3 instanceof Int16Array)
                o2 = 5122;
              else if (r3 instanceof Uint32Array)
                o2 = 5125;
              else if (r3 instanceof Int32Array)
                o2 = 5124;
              else if (r3 instanceof Int8Array)
                o2 = 5120;
              else if (r3 instanceof Uint8Array)
                o2 = 5121;
              else {
                if (!(r3 instanceof Uint8ClampedArray))
                  throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r3);
                o2 = 5121;
              }
              return { buffer: a2, type: o2, bytesPerElement: r3.BYTES_PER_ELEMENT, version: e4.version };
            }(e3, r2)) : s2.version < e3.version && (!function(e4, n3, r3) {
              const s3 = n3.array, a2 = n3.updateRange;
              t2.bindBuffer(r3, e4), -1 === a2.count ? t2.bufferSubData(r3, 0, s3) : (i2 ? t2.bufferSubData(r3, a2.offset * s3.BYTES_PER_ELEMENT, s3, a2.offset, a2.count) : t2.bufferSubData(r3, a2.offset * s3.BYTES_PER_ELEMENT, s3.subarray(a2.offset, a2.offset + a2.count)), a2.count = -1);
            }(s2.buffer, e3, r2), s2.version = e3.version);
          } };
        }
        class yn extends Di {
          constructor(t2 = 1, e2 = 1, i2 = 1, n2 = 1) {
            super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e2, widthSegments: i2, heightSegments: n2 };
            const r2 = t2 / 2, s2 = e2 / 2, a2 = Math.floor(i2), o2 = Math.floor(n2), l2 = a2 + 1, c2 = o2 + 1, h2 = t2 / a2, u2 = e2 / o2, d2 = [], p2 = [], m2 = [], f2 = [];
            for (let t3 = 0; t3 < c2; t3++) {
              const e3 = t3 * u2 - s2;
              for (let i3 = 0; i3 < l2; i3++) {
                const n3 = i3 * h2 - r2;
                p2.push(n3, -e3, 0), m2.push(0, 0, 1), f2.push(i3 / a2), f2.push(1 - t3 / o2);
              }
            }
            for (let t3 = 0; t3 < o2; t3++)
              for (let e3 = 0; e3 < a2; e3++) {
                const i3 = e3 + l2 * t3, n3 = e3 + l2 * (t3 + 1), r3 = e3 + 1 + l2 * (t3 + 1), s3 = e3 + 1 + l2 * t3;
                d2.push(i3, n3, s3), d2.push(n3, r3, s3);
              }
            this.setIndex(d2), this.setAttribute("position", new Ti(p2, 3)), this.setAttribute("normal", new Ti(m2, 3)), this.setAttribute("uv", new Ti(f2, 2));
          }
          static fromJSON(t2) {
            return new yn(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
          }
        }
        const Mn = { alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	if ( diffuseColor.a < alphaTest ) discard;\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", begin_vertex: "vec3 transformed = vec3( position );", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n		float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n		float x2 = x * x;\n		float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n		return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,	0.0556434,\n		-1.5371385,	1.8760108, -0.2040259,\n		-0.4985314,	0.0415560,	1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			 return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float R21 = R12;\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = dFdx( surf_pos.xyz );\n		vec3 vSigmaY = dFdy( surf_pos.xyz );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n	return dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_v0 0.339\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_v1 0.276\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_v4 0.046\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_v5 0.016\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_v6 0.0038\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#if defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n	reflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD( material )	(0)", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n		if ( cutoffDistance > 0.0 ) {\n			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n		}\n		return distanceFalloff;\n	#else\n		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n		}\n		return 1.0;\n	#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARCOLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEENCOLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEENROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n	#endif\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(		0, 1,		0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n	#endif\n	#ifdef USE_IRIDESCENCE\n		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n	#else\n		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometry.viewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometry, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometry.normal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n	#endif\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n		uniform sampler2DArray morphTargetsTexture;\n		uniform ivec2 morphTargetsTextureSize;\n		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n			int y = texelIndex / morphTargetsTextureSize.x;\n			int x = texelIndex - y * morphTargetsTextureSize.x;\n			ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n			return texelFetch( morphTargetsTexture, morphUV, 0 );\n		}\n	#else\n		#ifndef USE_MORPHNORMALS\n			uniform float morphTargetInfluences[ 8 ];\n		#else\n			uniform float morphTargetInfluences[ 4 ];\n		#endif\n	#endif\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	#ifdef MORPHTARGETS_TEXTURE\n		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n		}\n	#else\n		transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n		transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n		transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n		transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n		#ifndef USE_MORPHNORMALS\n			transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n			transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n			transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n			transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n		#endif\n	#endif\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", output_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n							f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n							f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	uniform int boneTextureSize;\n	mat4 getBoneMatrix( const in float i ) {\n		float j = i * 4.0;\n		float x = mod( j, float( boneTextureSize ) );\n		float y = floor( j / float( boneTextureSize ) );\n		float dx = 1.0 / float( boneTextureSize );\n		float dy = 1.0 / float( boneTextureSize );\n		y = dy * ( y + 0.5 );\n		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n		mat4 bone = mat4( v1, v2, v3, v4 );\n		return bone;\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,	1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmission = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		#ifdef texture2DLodEXT\n			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#else\n			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n		#endif\n	}\n	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n	}\n#endif", uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif", uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif", uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif", uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif", uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	gl_FragColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n	#endif\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARCOLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEENCOLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEENROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n	#endif\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <output_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}" }, bn = { common: { diffuse: { value: new jt(16777215) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new Rt() }, uv2Transform: { value: new Rt() }, alphaMap: { value: null }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } }, emissivemap: { emissiveMap: { value: null } }, bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalScale: { value: new Lt(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, roughnessmap: { roughnessMap: { value: null } }, metalnessmap: { metalnessMap: { value: null } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new jt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new jt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Rt() } }, sprite: { diffuse: { value: new jt(16777215) }, opacity: { value: 1 }, center: { value: new Lt(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, alphaMap: { value: null }, alphaTest: { value: 0 }, uvTransform: { value: new Rt() } } }, Sn = { basic: { uniforms: en([bn.common, bn.specularmap, bn.envmap, bn.aomap, bn.lightmap, bn.fog]), vertexShader: Mn.meshbasic_vert, fragmentShader: Mn.meshbasic_frag }, lambert: { uniforms: en([bn.common, bn.specularmap, bn.envmap, bn.aomap, bn.lightmap, bn.emissivemap, bn.bumpmap, bn.normalmap, bn.displacementmap, bn.fog, bn.lights, { emissive: { value: new jt(0) } }]), vertexShader: Mn.meshlambert_vert, fragmentShader: Mn.meshlambert_frag }, phong: { uniforms: en([bn.common, bn.specularmap, bn.envmap, bn.aomap, bn.lightmap, bn.emissivemap, bn.bumpmap, bn.normalmap, bn.displacementmap, bn.fog, bn.lights, { emissive: { value: new jt(0) }, specular: { value: new jt(1118481) }, shininess: { value: 30 } }]), vertexShader: Mn.meshphong_vert, fragmentShader: Mn.meshphong_frag }, standard: { uniforms: en([bn.common, bn.envmap, bn.aomap, bn.lightmap, bn.emissivemap, bn.bumpmap, bn.normalmap, bn.displacementmap, bn.roughnessmap, bn.metalnessmap, bn.fog, bn.lights, { emissive: { value: new jt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Mn.meshphysical_vert, fragmentShader: Mn.meshphysical_frag }, toon: { uniforms: en([bn.common, bn.aomap, bn.lightmap, bn.emissivemap, bn.bumpmap, bn.normalmap, bn.displacementmap, bn.gradientmap, bn.fog, bn.lights, { emissive: { value: new jt(0) } }]), vertexShader: Mn.meshtoon_vert, fragmentShader: Mn.meshtoon_frag }, matcap: { uniforms: en([bn.common, bn.bumpmap, bn.normalmap, bn.displacementmap, bn.fog, { matcap: { value: null } }]), vertexShader: Mn.meshmatcap_vert, fragmentShader: Mn.meshmatcap_frag }, points: { uniforms: en([bn.points, bn.fog]), vertexShader: Mn.points_vert, fragmentShader: Mn.points_frag }, dashed: { uniforms: en([bn.common, bn.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Mn.linedashed_vert, fragmentShader: Mn.linedashed_frag }, depth: { uniforms: en([bn.common, bn.displacementmap]), vertexShader: Mn.depth_vert, fragmentShader: Mn.depth_frag }, normal: { uniforms: en([bn.common, bn.bumpmap, bn.normalmap, bn.displacementmap, { opacity: { value: 1 } }]), vertexShader: Mn.meshnormal_vert, fragmentShader: Mn.meshnormal_frag }, sprite: { uniforms: en([bn.sprite, bn.fog]), vertexShader: Mn.sprite_vert, fragmentShader: Mn.sprite_frag }, background: { uniforms: { uvTransform: { value: new Rt() }, t2D: { value: null } }, vertexShader: Mn.background_vert, fragmentShader: Mn.background_frag }, cube: { uniforms: en([bn.envmap, { opacity: { value: 1 } }]), vertexShader: Mn.cube_vert, fragmentShader: Mn.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Mn.equirect_vert, fragmentShader: Mn.equirect_frag }, distanceRGBA: { uniforms: en([bn.common, bn.displacementmap, { referencePosition: { value: new ne() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Mn.distanceRGBA_vert, fragmentShader: Mn.distanceRGBA_frag }, shadow: { uniforms: en([bn.lights, bn.fog, { color: { value: new jt(0) }, opacity: { value: 1 } }]), vertexShader: Mn.shadow_vert, fragmentShader: Mn.shadow_frag } };
        function wn(t2, e2, i2, n2, r2, s2) {
          const a2 = new jt(0);
          let o2, c2, h2 = true === r2 ? 0 : 1, u2 = null, d2 = 0, p2 = null;
          function m2(t3, e3) {
            i2.buffers.color.setClear(t3.r, t3.g, t3.b, e3, s2);
          }
          return { getClearColor: function() {
            return a2;
          }, setClearColor: function(t3, e3 = 1) {
            a2.set(t3), h2 = e3, m2(a2, h2);
          }, getClearAlpha: function() {
            return h2;
          }, setClearAlpha: function(t3) {
            h2 = t3, m2(a2, h2);
          }, render: function(i3, r3) {
            let s3 = false, f2 = true === r3.isScene ? r3.background : null;
            f2 && f2.isTexture && (f2 = e2.get(f2));
            const g2 = t2.xr, v2 = g2.getSession && g2.getSession();
            v2 && "additive" === v2.environmentBlendMode && (f2 = null), null === f2 ? m2(a2, h2) : f2 && f2.isColor && (m2(f2, 1), s3 = true), (t2.autoClear || s3) && t2.clear(t2.autoClearColor, t2.autoClearDepth, t2.autoClearStencil), f2 && (f2.isCubeTexture || f2.mapping === l) ? (void 0 === c2 && (c2 = new Ki(new Qi(1, 1, 1), new rn({ name: "BackgroundCubeMaterial", uniforms: tn(Sn.cube.uniforms), vertexShader: Sn.cube.vertexShader, fragmentShader: Sn.cube.fragmentShader, side: 1, depthTest: false, depthWrite: false, fog: false })), c2.geometry.deleteAttribute("normal"), c2.geometry.deleteAttribute("uv"), c2.onBeforeRender = function(t3, e3, i4) {
              this.matrixWorld.copyPosition(i4.matrixWorld);
            }, Object.defineProperty(c2.material, "envMap", { get: function() {
              return this.uniforms.envMap.value;
            } }), n2.update(c2)), c2.material.uniforms.envMap.value = f2, c2.material.uniforms.flipEnvMap.value = f2.isCubeTexture && false === f2.isRenderTargetTexture ? -1 : 1, u2 === f2 && d2 === f2.version && p2 === t2.toneMapping || (c2.material.needsUpdate = true, u2 = f2, d2 = f2.version, p2 = t2.toneMapping), c2.layers.enableAll(), i3.unshift(c2, c2.geometry, c2.material, 0, 0, null)) : f2 && f2.isTexture && (void 0 === o2 && (o2 = new Ki(new yn(2, 2), new rn({ name: "BackgroundMaterial", uniforms: tn(Sn.background.uniforms), vertexShader: Sn.background.vertexShader, fragmentShader: Sn.background.fragmentShader, side: 0, depthTest: false, depthWrite: false, fog: false })), o2.geometry.deleteAttribute("normal"), Object.defineProperty(o2.material, "map", { get: function() {
              return this.uniforms.t2D.value;
            } }), n2.update(o2)), o2.material.uniforms.t2D.value = f2, true === f2.matrixAutoUpdate && f2.updateMatrix(), o2.material.uniforms.uvTransform.value.copy(f2.matrix), u2 === f2 && d2 === f2.version && p2 === t2.toneMapping || (o2.material.needsUpdate = true, u2 = f2, d2 = f2.version, p2 = t2.toneMapping), o2.layers.enableAll(), i3.unshift(o2, o2.geometry, o2.material, 0, 0, null));
          } };
        }
        function Tn(t2, e2, i2, n2) {
          const r2 = t2.getParameter(34921), s2 = n2.isWebGL2 ? null : e2.get("OES_vertex_array_object"), a2 = n2.isWebGL2 || null !== s2, o2 = {}, l2 = p2(null);
          let c2 = l2, h2 = false;
          function u2(e3) {
            return n2.isWebGL2 ? t2.bindVertexArray(e3) : s2.bindVertexArrayOES(e3);
          }
          function d2(e3) {
            return n2.isWebGL2 ? t2.deleteVertexArray(e3) : s2.deleteVertexArrayOES(e3);
          }
          function p2(t3) {
            const e3 = [], i3 = [], n3 = [];
            for (let t4 = 0; t4 < r2; t4++)
              e3[t4] = 0, i3[t4] = 0, n3[t4] = 0;
            return { geometry: null, program: null, wireframe: false, newAttributes: e3, enabledAttributes: i3, attributeDivisors: n3, object: t3, attributes: {}, index: null };
          }
          function m2() {
            const t3 = c2.newAttributes;
            for (let e3 = 0, i3 = t3.length; e3 < i3; e3++)
              t3[e3] = 0;
          }
          function f2(t3) {
            g2(t3, 0);
          }
          function g2(i3, r3) {
            const s3 = c2.newAttributes, a3 = c2.enabledAttributes, o3 = c2.attributeDivisors;
            if (s3[i3] = 1, 0 === a3[i3] && (t2.enableVertexAttribArray(i3), a3[i3] = 1), o3[i3] !== r3) {
              (n2.isWebGL2 ? t2 : e2.get("ANGLE_instanced_arrays"))[n2.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i3, r3), o3[i3] = r3;
            }
          }
          function v2() {
            const e3 = c2.newAttributes, i3 = c2.enabledAttributes;
            for (let n3 = 0, r3 = i3.length; n3 < r3; n3++)
              i3[n3] !== e3[n3] && (t2.disableVertexAttribArray(n3), i3[n3] = 0);
          }
          function x2(e3, i3, r3, s3, a3, o3) {
            true !== n2.isWebGL2 || 5124 !== r3 && 5125 !== r3 ? t2.vertexAttribPointer(e3, i3, r3, s3, a3, o3) : t2.vertexAttribIPointer(e3, i3, r3, a3, o3);
          }
          function _2() {
            y2(), h2 = true, c2 !== l2 && (c2 = l2, u2(c2.object));
          }
          function y2() {
            l2.geometry = null, l2.program = null, l2.wireframe = false;
          }
          return { setup: function(r3, l3, d3, _3, y3) {
            let M2 = false;
            if (a2) {
              const e3 = function(e4, i3, r4) {
                const a3 = true === r4.wireframe;
                let l4 = o2[e4.id];
                void 0 === l4 && (l4 = {}, o2[e4.id] = l4);
                let c3 = l4[i3.id];
                void 0 === c3 && (c3 = {}, l4[i3.id] = c3);
                let h3 = c3[a3];
                void 0 === h3 && (h3 = p2(n2.isWebGL2 ? t2.createVertexArray() : s2.createVertexArrayOES()), c3[a3] = h3);
                return h3;
              }(_3, d3, l3);
              c2 !== e3 && (c2 = e3, u2(c2.object)), M2 = function(t3, e4, i3, n3) {
                const r4 = c2.attributes, s3 = e4.attributes;
                let a3 = 0;
                const o3 = i3.getAttributes();
                for (const e5 in o3) {
                  if (o3[e5].location >= 0) {
                    const i4 = r4[e5];
                    let n4 = s3[e5];
                    if (void 0 === n4 && ("instanceMatrix" === e5 && t3.instanceMatrix && (n4 = t3.instanceMatrix), "instanceColor" === e5 && t3.instanceColor && (n4 = t3.instanceColor)), void 0 === i4)
                      return true;
                    if (i4.attribute !== n4)
                      return true;
                    if (n4 && i4.data !== n4.data)
                      return true;
                    a3++;
                  }
                }
                return c2.attributesNum !== a3 || c2.index !== n3;
              }(r3, _3, d3, y3), M2 && function(t3, e4, i3, n3) {
                const r4 = {}, s3 = e4.attributes;
                let a3 = 0;
                const o3 = i3.getAttributes();
                for (const e5 in o3) {
                  if (o3[e5].location >= 0) {
                    let i4 = s3[e5];
                    void 0 === i4 && ("instanceMatrix" === e5 && t3.instanceMatrix && (i4 = t3.instanceMatrix), "instanceColor" === e5 && t3.instanceColor && (i4 = t3.instanceColor));
                    const n4 = {};
                    n4.attribute = i4, i4 && i4.data && (n4.data = i4.data), r4[e5] = n4, a3++;
                  }
                }
                c2.attributes = r4, c2.attributesNum = a3, c2.index = n3;
              }(r3, _3, d3, y3);
            } else {
              const t3 = true === l3.wireframe;
              c2.geometry === _3.id && c2.program === d3.id && c2.wireframe === t3 || (c2.geometry = _3.id, c2.program = d3.id, c2.wireframe = t3, M2 = true);
            }
            null !== y3 && i2.update(y3, 34963), (M2 || h2) && (h2 = false, function(r4, s3, a3, o3) {
              if (false === n2.isWebGL2 && (r4.isInstancedMesh || o3.isInstancedBufferGeometry) && null === e2.get("ANGLE_instanced_arrays"))
                return;
              m2();
              const l4 = o3.attributes, c3 = a3.getAttributes(), h3 = s3.defaultAttributeValues;
              for (const e3 in c3) {
                const n3 = c3[e3];
                if (n3.location >= 0) {
                  let s4 = l4[e3];
                  if (void 0 === s4 && ("instanceMatrix" === e3 && r4.instanceMatrix && (s4 = r4.instanceMatrix), "instanceColor" === e3 && r4.instanceColor && (s4 = r4.instanceColor)), void 0 !== s4) {
                    const e4 = s4.normalized, a4 = s4.itemSize, l5 = i2.get(s4);
                    if (void 0 === l5)
                      continue;
                    const c4 = l5.buffer, h4 = l5.type, u3 = l5.bytesPerElement;
                    if (s4.isInterleavedBufferAttribute) {
                      const i3 = s4.data, l6 = i3.stride, d4 = s4.offset;
                      if (i3.isInstancedInterleavedBuffer) {
                        for (let t3 = 0; t3 < n3.locationSize; t3++)
                          g2(n3.location + t3, i3.meshPerAttribute);
                        true !== r4.isInstancedMesh && void 0 === o3._maxInstanceCount && (o3._maxInstanceCount = i3.meshPerAttribute * i3.count);
                      } else
                        for (let t3 = 0; t3 < n3.locationSize; t3++)
                          f2(n3.location + t3);
                      t2.bindBuffer(34962, c4);
                      for (let t3 = 0; t3 < n3.locationSize; t3++)
                        x2(n3.location + t3, a4 / n3.locationSize, h4, e4, l6 * u3, (d4 + a4 / n3.locationSize * t3) * u3);
                    } else {
                      if (s4.isInstancedBufferAttribute) {
                        for (let t3 = 0; t3 < n3.locationSize; t3++)
                          g2(n3.location + t3, s4.meshPerAttribute);
                        true !== r4.isInstancedMesh && void 0 === o3._maxInstanceCount && (o3._maxInstanceCount = s4.meshPerAttribute * s4.count);
                      } else
                        for (let t3 = 0; t3 < n3.locationSize; t3++)
                          f2(n3.location + t3);
                      t2.bindBuffer(34962, c4);
                      for (let t3 = 0; t3 < n3.locationSize; t3++)
                        x2(n3.location + t3, a4 / n3.locationSize, h4, e4, a4 * u3, a4 / n3.locationSize * t3 * u3);
                    }
                  } else if (void 0 !== h3) {
                    const i3 = h3[e3];
                    if (void 0 !== i3)
                      switch (i3.length) {
                        case 2:
                          t2.vertexAttrib2fv(n3.location, i3);
                          break;
                        case 3:
                          t2.vertexAttrib3fv(n3.location, i3);
                          break;
                        case 4:
                          t2.vertexAttrib4fv(n3.location, i3);
                          break;
                        default:
                          t2.vertexAttrib1fv(n3.location, i3);
                      }
                  }
                }
              }
              v2();
            }(r3, l3, d3, _3), null !== y3 && t2.bindBuffer(34963, i2.get(y3).buffer));
          }, reset: _2, resetDefaultState: y2, dispose: function() {
            _2();
            for (const t3 in o2) {
              const e3 = o2[t3];
              for (const t4 in e3) {
                const i3 = e3[t4];
                for (const t5 in i3)
                  d2(i3[t5].object), delete i3[t5];
                delete e3[t4];
              }
              delete o2[t3];
            }
          }, releaseStatesOfGeometry: function(t3) {
            if (void 0 === o2[t3.id])
              return;
            const e3 = o2[t3.id];
            for (const t4 in e3) {
              const i3 = e3[t4];
              for (const t5 in i3)
                d2(i3[t5].object), delete i3[t5];
              delete e3[t4];
            }
            delete o2[t3.id];
          }, releaseStatesOfProgram: function(t3) {
            for (const e3 in o2) {
              const i3 = o2[e3];
              if (void 0 === i3[t3.id])
                continue;
              const n3 = i3[t3.id];
              for (const t4 in n3)
                d2(n3[t4].object), delete n3[t4];
              delete i3[t3.id];
            }
          }, initAttributes: m2, enableAttribute: f2, disableUnusedAttributes: v2 };
        }
        function An(t2, e2, i2, n2) {
          const r2 = n2.isWebGL2;
          let s2;
          this.setMode = function(t3) {
            s2 = t3;
          }, this.render = function(e3, n3) {
            t2.drawArrays(s2, e3, n3), i2.update(n3, s2, 1);
          }, this.renderInstances = function(n3, a2, o2) {
            if (0 === o2)
              return;
            let l2, c2;
            if (r2)
              l2 = t2, c2 = "drawArraysInstanced";
            else if (l2 = e2.get("ANGLE_instanced_arrays"), c2 = "drawArraysInstancedANGLE", null === l2)
              return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l2[c2](s2, n3, a2, o2), i2.update(a2, s2, o2);
          };
        }
        function En(t2, e2, i2) {
          let n2;
          function r2(e3) {
            if ("highp" === e3) {
              if (t2.getShaderPrecisionFormat(35633, 36338).precision > 0 && t2.getShaderPrecisionFormat(35632, 36338).precision > 0)
                return "highp";
              e3 = "mediump";
            }
            return "mediump" === e3 && t2.getShaderPrecisionFormat(35633, 36337).precision > 0 && t2.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
          }
          const s2 = "undefined" != typeof WebGL2RenderingContext && t2 instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t2 instanceof WebGL2ComputeRenderingContext;
          let a2 = void 0 !== i2.precision ? i2.precision : "highp";
          const o2 = r2(a2);
          o2 !== a2 && (console.warn("THREE.WebGLRenderer:", a2, "not supported, using", o2, "instead."), a2 = o2);
          const l2 = s2 || e2.has("WEBGL_draw_buffers"), c2 = true === i2.logarithmicDepthBuffer, h2 = t2.getParameter(34930), u2 = t2.getParameter(35660), d2 = t2.getParameter(3379), p2 = t2.getParameter(34076), m2 = t2.getParameter(34921), f2 = t2.getParameter(36347), g2 = t2.getParameter(36348), v2 = t2.getParameter(36349), x2 = u2 > 0, _2 = s2 || e2.has("OES_texture_float");
          return { isWebGL2: s2, drawBuffers: l2, getMaxAnisotropy: function() {
            if (void 0 !== n2)
              return n2;
            if (true === e2.has("EXT_texture_filter_anisotropic")) {
              const i3 = e2.get("EXT_texture_filter_anisotropic");
              n2 = t2.getParameter(i3.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            } else
              n2 = 0;
            return n2;
          }, getMaxPrecision: r2, precision: a2, logarithmicDepthBuffer: c2, maxTextures: h2, maxVertexTextures: u2, maxTextureSize: d2, maxCubemapSize: p2, maxAttributes: m2, maxVertexUniforms: f2, maxVaryings: g2, maxFragmentUniforms: v2, vertexTextures: x2, floatFragmentTextures: _2, floatVertexTextures: x2 && _2, maxSamples: s2 ? t2.getParameter(36183) : 0 };
        }
        function Cn(t2) {
          const e2 = this;
          let i2 = null, n2 = 0, r2 = false, s2 = false;
          const a2 = new mn(), o2 = new Rt(), l2 = { value: null, needsUpdate: false };
          function c2() {
            l2.value !== i2 && (l2.value = i2, l2.needsUpdate = n2 > 0), e2.numPlanes = n2, e2.numIntersection = 0;
          }
          function h2(t3, i3, n3, r3) {
            const s3 = null !== t3 ? t3.length : 0;
            let c3 = null;
            if (0 !== s3) {
              if (c3 = l2.value, true !== r3 || null === c3) {
                const e3 = n3 + 4 * s3, r4 = i3.matrixWorldInverse;
                o2.getNormalMatrix(r4), (null === c3 || c3.length < e3) && (c3 = new Float32Array(e3));
                for (let e4 = 0, i4 = n3; e4 !== s3; ++e4, i4 += 4)
                  a2.copy(t3[e4]).applyMatrix4(r4, o2), a2.normal.toArray(c3, i4), c3[i4 + 3] = a2.constant;
              }
              l2.value = c3, l2.needsUpdate = true;
            }
            return e2.numPlanes = s3, e2.numIntersection = 0, c3;
          }
          this.uniform = l2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t3, e3, s3) {
            const a3 = 0 !== t3.length || e3 || 0 !== n2 || r2;
            return r2 = e3, i2 = h2(t3, s3, 0), n2 = t3.length, a3;
          }, this.beginShadows = function() {
            s2 = true, h2(null);
          }, this.endShadows = function() {
            s2 = false, c2();
          }, this.setState = function(e3, a3, o3) {
            const u2 = e3.clippingPlanes, d2 = e3.clipIntersection, p2 = e3.clipShadows, m2 = t2.get(e3);
            if (!r2 || null === u2 || 0 === u2.length || s2 && !p2)
              s2 ? h2(null) : c2();
            else {
              const t3 = s2 ? 0 : n2, e4 = 4 * t3;
              let r3 = m2.clippingState || null;
              l2.value = r3, r3 = h2(u2, a3, e4, o3);
              for (let t4 = 0; t4 !== e4; ++t4)
                r3[t4] = i2[t4];
              m2.clippingState = r3, this.numIntersection = d2 ? this.numPlanes : 0, this.numPlanes += t3;
            }
          };
        }
        function Ln(t2) {
          let e2 = /* @__PURE__ */ new WeakMap();
          function i2(t3, e3) {
            return e3 === a ? t3.mapping = r : e3 === o && (t3.mapping = s), t3;
          }
          function n2(t3) {
            const i3 = t3.target;
            i3.removeEventListener("dispose", n2);
            const r2 = e2.get(i3);
            void 0 !== r2 && (e2.delete(i3), r2.dispose());
          }
          return { get: function(r2) {
            if (r2 && r2.isTexture && false === r2.isRenderTargetTexture) {
              const s2 = r2.mapping;
              if (s2 === a || s2 === o) {
                if (e2.has(r2)) {
                  return i2(e2.get(r2).texture, r2.mapping);
                }
                {
                  const s3 = r2.image;
                  if (s3 && s3.height > 0) {
                    const a2 = new hn(s3.height / 2);
                    return a2.fromEquirectangularTexture(t2, r2), e2.set(r2, a2), r2.addEventListener("dispose", n2), i2(a2.texture, r2.mapping);
                  }
                  return null;
                }
              }
            }
            return r2;
          }, dispose: function() {
            e2 = /* @__PURE__ */ new WeakMap();
          } };
        }
        Sn.physical = { uniforms: en([Sn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatNormalScale: { value: new Lt(1, 1) }, clearcoatNormalMap: { value: null }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, sheen: { value: 0 }, sheenColor: { value: new jt(0) }, sheenColorMap: { value: null }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionSamplerSize: { value: new Lt() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, attenuationDistance: { value: 0 }, attenuationColor: { value: new jt(0) }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularColor: { value: new jt(1, 1, 1) }, specularColorMap: { value: null } }]), vertexShader: Mn.meshphysical_vert, fragmentShader: Mn.meshphysical_frag };
        class Rn extends sn {
          constructor(t2 = -1, e2 = 1, i2 = 1, n2 = -1, r2 = 0.1, s2 = 2e3) {
            super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e2, this.top = i2, this.bottom = n2, this.near = r2, this.far = s2, this.updateProjectionMatrix();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
          }
          setViewOffset(t2, e2, i2, n2, r2, s2) {
            null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e2, this.view.offsetX = i2, this.view.offsetY = n2, this.view.width = r2, this.view.height = s2, this.updateProjectionMatrix();
          }
          clearViewOffset() {
            null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
          }
          updateProjectionMatrix() {
            const t2 = (this.right - this.left) / (2 * this.zoom), e2 = (this.top - this.bottom) / (2 * this.zoom), i2 = (this.right + this.left) / 2, n2 = (this.top + this.bottom) / 2;
            let r2 = i2 - t2, s2 = i2 + t2, a2 = n2 + e2, o2 = n2 - e2;
            if (null !== this.view && this.view.enabled) {
              const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e3 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
              r2 += t3 * this.view.offsetX, s2 = r2 + t3 * this.view.width, a2 -= e3 * this.view.offsetY, o2 = a2 - e3 * this.view.height;
            }
            this.projectionMatrix.makeOrthographic(r2, s2, a2, o2, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return e2.object.zoom = this.zoom, e2.object.left = this.left, e2.object.right = this.right, e2.object.top = this.top, e2.object.bottom = this.bottom, e2.object.near = this.near, e2.object.far = this.far, null !== this.view && (e2.object.view = Object.assign({}, this.view)), e2;
          }
        }
        const Pn = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], In = 20, Dn = new Rn(), Nn = new jt();
        let On = null;
        const zn = (1 + Math.sqrt(5)) / 2, Un = 1 / zn, Bn = [new ne(1, 1, 1), new ne(-1, 1, 1), new ne(1, 1, -1), new ne(-1, 1, -1), new ne(0, zn, Un), new ne(0, zn, -Un), new ne(Un, 0, zn), new ne(-Un, 0, zn), new ne(zn, Un, 0), new ne(-zn, Un, 0)];
        class Fn {
          constructor(t2) {
            this._renderer = t2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
          }
          fromScene(t2, e2 = 0, i2 = 0.1, n2 = 100) {
            On = this._renderer.getRenderTarget(), this._setSize(256);
            const r2 = this._allocateTargets();
            return r2.depthBuffer = true, this._sceneToCubeUV(t2, i2, n2, r2), e2 > 0 && this._blur(r2, 0, 0, e2), this._applyPMREM(r2), this._cleanup(r2), r2;
          }
          fromEquirectangular(t2, e2 = null) {
            return this._fromTexture(t2, e2);
          }
          fromCubemap(t2, e2 = null) {
            return this._fromTexture(t2, e2);
          }
          compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Hn(), this._compileMaterial(this._cubemapMaterial));
          }
          compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = Vn(), this._compileMaterial(this._equirectMaterial));
          }
          dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
          }
          _setSize(t2) {
            this._lodMax = Math.floor(Math.log2(t2)), this._cubeSize = Math.pow(2, this._lodMax);
          }
          _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for (let t2 = 0; t2 < this._lodPlanes.length; t2++)
              this._lodPlanes[t2].dispose();
          }
          _cleanup(t2) {
            this._renderer.setRenderTarget(On), t2.scissorTest = false, Gn(t2, 0, 0, t2.width, t2.height);
          }
          _fromTexture(t2, e2) {
            t2.mapping === r || t2.mapping === s ? this._setSize(0 === t2.image.length ? 16 : t2.image[0].width || t2.image[0].image.width) : this._setSize(t2.image.width / 4), On = this._renderer.getRenderTarget();
            const i2 = e2 || this._allocateTargets();
            return this._textureToCubeUV(t2, i2), this._applyPMREM(i2), this._cleanup(i2), i2;
          }
          _allocateTargets() {
            const t2 = 3 * Math.max(this._cubeSize, 112), e2 = 4 * this._cubeSize, i2 = { magFilter: f, minFilter: f, generateMipmaps: false, type: b, format: w, encoding: at, depthBuffer: false }, n2 = kn(t2, e2, i2);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t2) {
              null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = kn(t2, e2, i2);
              const { _lodMax: n3 } = this;
              ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = function(t3) {
                const e3 = [], i3 = [], n4 = [];
                let r2 = t3;
                const s2 = t3 - 4 + 1 + Pn.length;
                for (let a2 = 0; a2 < s2; a2++) {
                  const s3 = Math.pow(2, r2);
                  i3.push(s3);
                  let o2 = 1 / s3;
                  a2 > t3 - 4 ? o2 = Pn[a2 - t3 + 4 - 1] : 0 === a2 && (o2 = 0), n4.push(o2);
                  const l2 = 1 / (s3 - 2), c2 = -l2, h2 = 1 + l2, u2 = [c2, c2, h2, c2, h2, h2, c2, c2, h2, h2, c2, h2], d2 = 6, p2 = 6, m2 = 3, f2 = 2, g2 = 1, v2 = new Float32Array(m2 * p2 * d2), x2 = new Float32Array(f2 * p2 * d2), _2 = new Float32Array(g2 * p2 * d2);
                  for (let t4 = 0; t4 < d2; t4++) {
                    const e4 = t4 % 3 * 2 / 3 - 1, i4 = t4 > 2 ? 0 : -1, n5 = [e4, i4, 0, e4 + 2 / 3, i4, 0, e4 + 2 / 3, i4 + 1, 0, e4, i4, 0, e4 + 2 / 3, i4 + 1, 0, e4, i4 + 1, 0];
                    v2.set(n5, m2 * p2 * t4), x2.set(u2, f2 * p2 * t4);
                    const r3 = [t4, t4, t4, t4, t4, t4];
                    _2.set(r3, g2 * p2 * t4);
                  }
                  const y2 = new Di();
                  y2.setAttribute("position", new bi(v2, m2)), y2.setAttribute("uv", new bi(x2, f2)), y2.setAttribute("faceIndex", new bi(_2, g2)), e3.push(y2), r2 > 4 && r2--;
                }
                return { lodPlanes: e3, sizeLods: i3, sigmas: n4 };
              }(n3)), this._blurMaterial = function(t3, e3, i3) {
                const n4 = new Float32Array(In), r2 = new ne(0, 1, 0);
                return new rn({ name: "SphericalGaussianBlur", defines: { n: In, CUBEUV_TEXEL_WIDTH: 1 / e3, CUBEUV_TEXEL_HEIGHT: 1 / i3, CUBEUV_MAX_MIP: `${t3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n4 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r2 } }, vertexShader: Wn(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
              }(n3, t2, e2);
            }
            return n2;
          }
          _compileMaterial(t2) {
            const e2 = new Ki(this._lodPlanes[0], t2);
            this._renderer.compile(e2, Dn);
          }
          _sceneToCubeUV(t2, e2, i2, n2) {
            const r2 = new an(90, 1, e2, i2), s2 = [1, -1, 1, 1, 1, 1], a2 = [1, 1, 1, -1, -1, -1], o2 = this._renderer, l2 = o2.autoClear, c2 = o2.toneMapping;
            o2.getClearColor(Nn), o2.toneMapping = 0, o2.autoClear = false;
            const h2 = new _i({ name: "PMREM.Background", side: 1, depthWrite: false, depthTest: false }), u2 = new Ki(new Qi(), h2);
            let d2 = false;
            const p2 = t2.background;
            p2 ? p2.isColor && (h2.color.copy(p2), t2.background = null, d2 = true) : (h2.color.copy(Nn), d2 = true);
            for (let e3 = 0; e3 < 6; e3++) {
              const i3 = e3 % 3;
              0 === i3 ? (r2.up.set(0, s2[e3], 0), r2.lookAt(a2[e3], 0, 0)) : 1 === i3 ? (r2.up.set(0, 0, s2[e3]), r2.lookAt(0, a2[e3], 0)) : (r2.up.set(0, s2[e3], 0), r2.lookAt(0, 0, a2[e3]));
              const l3 = this._cubeSize;
              Gn(n2, i3 * l3, e3 > 2 ? l3 : 0, l3, l3), o2.setRenderTarget(n2), d2 && o2.render(u2, r2), o2.render(t2, r2);
            }
            u2.geometry.dispose(), u2.material.dispose(), o2.toneMapping = c2, o2.autoClear = l2, t2.background = p2;
          }
          _textureToCubeUV(t2, e2) {
            const i2 = this._renderer, n2 = t2.mapping === r || t2.mapping === s;
            n2 ? (null === this._cubemapMaterial && (this._cubemapMaterial = Hn()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === t2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Vn());
            const a2 = n2 ? this._cubemapMaterial : this._equirectMaterial, o2 = new Ki(this._lodPlanes[0], a2);
            a2.uniforms.envMap.value = t2;
            const l2 = this._cubeSize;
            Gn(e2, 0, 0, 3 * l2, 2 * l2), i2.setRenderTarget(e2), i2.render(o2, Dn);
          }
          _applyPMREM(t2) {
            const e2 = this._renderer, i2 = e2.autoClear;
            e2.autoClear = false;
            for (let e3 = 1; e3 < this._lodPlanes.length; e3++) {
              const i3 = Math.sqrt(this._sigmas[e3] * this._sigmas[e3] - this._sigmas[e3 - 1] * this._sigmas[e3 - 1]), n2 = Bn[(e3 - 1) % Bn.length];
              this._blur(t2, e3 - 1, e3, i3, n2);
            }
            e2.autoClear = i2;
          }
          _blur(t2, e2, i2, n2, r2) {
            const s2 = this._pingPongRenderTarget;
            this._halfBlur(t2, s2, e2, i2, n2, "latitudinal", r2), this._halfBlur(s2, t2, i2, i2, n2, "longitudinal", r2);
          }
          _halfBlur(t2, e2, i2, n2, r2, s2, a2) {
            const o2 = this._renderer, l2 = this._blurMaterial;
            "latitudinal" !== s2 && "longitudinal" !== s2 && console.error("blur direction must be either latitudinal or longitudinal!");
            const c2 = new Ki(this._lodPlanes[n2], l2), h2 = l2.uniforms, u2 = this._sizeLods[i2] - 1, d2 = isFinite(r2) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r2 / d2, m2 = isFinite(r2) ? 1 + Math.floor(3 * p2) : In;
            m2 > In && console.warn(`sigmaRadians, ${r2}, is too large and will clip, as it requested ${m2} samples when the maximum is set to 20`);
            const f2 = [];
            let g2 = 0;
            for (let t3 = 0; t3 < In; ++t3) {
              const e3 = t3 / p2, i3 = Math.exp(-e3 * e3 / 2);
              f2.push(i3), 0 === t3 ? g2 += i3 : t3 < m2 && (g2 += 2 * i3);
            }
            for (let t3 = 0; t3 < f2.length; t3++)
              f2[t3] = f2[t3] / g2;
            h2.envMap.value = t2.texture, h2.samples.value = m2, h2.weights.value = f2, h2.latitudinal.value = "latitudinal" === s2, a2 && (h2.poleAxis.value = a2);
            const { _lodMax: v2 } = this;
            h2.dTheta.value = d2, h2.mipInt.value = v2 - i2;
            const x2 = this._sizeLods[n2];
            Gn(e2, 3 * x2 * (n2 > v2 - 4 ? n2 - v2 + 4 : 0), 4 * (this._cubeSize - x2), 3 * x2, 2 * x2), o2.setRenderTarget(e2), o2.render(c2, Dn);
          }
        }
        function kn(t2, e2, i2) {
          const n2 = new Qt(t2, e2, i2);
          return n2.texture.mapping = l, n2.texture.name = "PMREM.cubeUv", n2.scissorTest = true, n2;
        }
        function Gn(t2, e2, i2, n2, r2) {
          t2.viewport.set(e2, i2, n2, r2), t2.scissor.set(e2, i2, n2, r2);
        }
        function Vn() {
          return new rn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Wn(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
        }
        function Hn() {
          return new rn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Wn(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
        }
        function Wn() {
          return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
        }
        function jn(t2) {
          let e2 = /* @__PURE__ */ new WeakMap(), i2 = null;
          function n2(t3) {
            const i3 = t3.target;
            i3.removeEventListener("dispose", n2);
            const r2 = e2.get(i3);
            void 0 !== r2 && (e2.delete(i3), r2.dispose());
          }
          return { get: function(l2) {
            if (l2 && l2.isTexture) {
              const c2 = l2.mapping, h2 = c2 === a || c2 === o, u2 = c2 === r || c2 === s;
              if (h2 || u2) {
                if (l2.isRenderTargetTexture && true === l2.needsPMREMUpdate) {
                  l2.needsPMREMUpdate = false;
                  let n3 = e2.get(l2);
                  return null === i2 && (i2 = new Fn(t2)), n3 = h2 ? i2.fromEquirectangular(l2, n3) : i2.fromCubemap(l2, n3), e2.set(l2, n3), n3.texture;
                }
                if (e2.has(l2))
                  return e2.get(l2).texture;
                {
                  const r2 = l2.image;
                  if (h2 && r2 && r2.height > 0 || u2 && r2 && function(t3) {
                    let e3 = 0;
                    const i3 = 6;
                    for (let n3 = 0; n3 < i3; n3++)
                      void 0 !== t3[n3] && e3++;
                    return e3 === i3;
                  }(r2)) {
                    null === i2 && (i2 = new Fn(t2));
                    const r3 = h2 ? i2.fromEquirectangular(l2) : i2.fromCubemap(l2);
                    return e2.set(l2, r3), l2.addEventListener("dispose", n2), r3.texture;
                  }
                  return null;
                }
              }
            }
            return l2;
          }, dispose: function() {
            e2 = /* @__PURE__ */ new WeakMap(), null !== i2 && (i2.dispose(), i2 = null);
          } };
        }
        function qn(t2) {
          const e2 = {};
          function i2(i3) {
            if (void 0 !== e2[i3])
              return e2[i3];
            let n2;
            switch (i3) {
              case "WEBGL_depth_texture":
                n2 = t2.getExtension("WEBGL_depth_texture") || t2.getExtension("MOZ_WEBGL_depth_texture") || t2.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
              case "EXT_texture_filter_anisotropic":
                n2 = t2.getExtension("EXT_texture_filter_anisotropic") || t2.getExtension("MOZ_EXT_texture_filter_anisotropic") || t2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
              case "WEBGL_compressed_texture_s3tc":
                n2 = t2.getExtension("WEBGL_compressed_texture_s3tc") || t2.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
              case "WEBGL_compressed_texture_pvrtc":
                n2 = t2.getExtension("WEBGL_compressed_texture_pvrtc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
              default:
                n2 = t2.getExtension(i3);
            }
            return e2[i3] = n2, n2;
          }
          return { has: function(t3) {
            return null !== i2(t3);
          }, init: function(t3) {
            t3.isWebGL2 ? i2("EXT_color_buffer_float") : (i2("WEBGL_depth_texture"), i2("OES_texture_float"), i2("OES_texture_half_float"), i2("OES_texture_half_float_linear"), i2("OES_standard_derivatives"), i2("OES_element_index_uint"), i2("OES_vertex_array_object"), i2("ANGLE_instanced_arrays")), i2("OES_texture_float_linear"), i2("EXT_color_buffer_half_float"), i2("WEBGL_multisampled_render_to_texture");
          }, get: function(t3) {
            const e3 = i2(t3);
            return null === e3 && console.warn("THREE.WebGLRenderer: " + t3 + " extension not supported."), e3;
          } };
        }
        function Xn(t2, e2, i2, n2) {
          const r2 = {}, s2 = /* @__PURE__ */ new WeakMap();
          function a2(t3) {
            const o3 = t3.target;
            null !== o3.index && e2.remove(o3.index);
            for (const t4 in o3.attributes)
              e2.remove(o3.attributes[t4]);
            o3.removeEventListener("dispose", a2), delete r2[o3.id];
            const l2 = s2.get(o3);
            l2 && (e2.remove(l2), s2.delete(o3)), n2.releaseStatesOfGeometry(o3), true === o3.isInstancedBufferGeometry && delete o3._maxInstanceCount, i2.memory.geometries--;
          }
          function o2(t3) {
            const i3 = [], n3 = t3.index, r3 = t3.attributes.position;
            let a3 = 0;
            if (null !== n3) {
              const t4 = n3.array;
              a3 = n3.version;
              for (let e3 = 0, n4 = t4.length; e3 < n4; e3 += 3) {
                const n5 = t4[e3 + 0], r4 = t4[e3 + 1], s3 = t4[e3 + 2];
                i3.push(n5, r4, r4, s3, s3, n5);
              }
            } else {
              const t4 = r3.array;
              a3 = r3.version;
              for (let e3 = 0, n4 = t4.length / 3 - 1; e3 < n4; e3 += 3) {
                const t5 = e3 + 0, n5 = e3 + 1, r4 = e3 + 2;
                i3.push(t5, n5, n5, r4, r4, t5);
              }
            }
            const o3 = new (Pt(i3) ? wi : Si)(i3, 1);
            o3.version = a3;
            const l2 = s2.get(t3);
            l2 && e2.remove(l2), s2.set(t3, o3);
          }
          return { get: function(t3, e3) {
            return true === r2[e3.id] || (e3.addEventListener("dispose", a2), r2[e3.id] = true, i2.memory.geometries++), e3;
          }, update: function(t3) {
            const i3 = t3.attributes;
            for (const t4 in i3)
              e2.update(i3[t4], 34962);
            const n3 = t3.morphAttributes;
            for (const t4 in n3) {
              const i4 = n3[t4];
              for (let t5 = 0, n4 = i4.length; t5 < n4; t5++)
                e2.update(i4[t5], 34962);
            }
          }, getWireframeAttribute: function(t3) {
            const e3 = s2.get(t3);
            if (e3) {
              const i3 = t3.index;
              null !== i3 && e3.version < i3.version && o2(t3);
            } else
              o2(t3);
            return s2.get(t3);
          } };
        }
        function Yn(t2, e2, i2, n2) {
          const r2 = n2.isWebGL2;
          let s2, a2, o2;
          this.setMode = function(t3) {
            s2 = t3;
          }, this.setIndex = function(t3) {
            a2 = t3.type, o2 = t3.bytesPerElement;
          }, this.render = function(e3, n3) {
            t2.drawElements(s2, n3, a2, e3 * o2), i2.update(n3, s2, 1);
          }, this.renderInstances = function(n3, l2, c2) {
            if (0 === c2)
              return;
            let h2, u2;
            if (r2)
              h2 = t2, u2 = "drawElementsInstanced";
            else if (h2 = e2.get("ANGLE_instanced_arrays"), u2 = "drawElementsInstancedANGLE", null === h2)
              return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h2[u2](s2, l2, a2, n3 * o2, c2), i2.update(l2, s2, c2);
          };
        }
        function Zn(t2) {
          const e2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
          return { memory: { geometries: 0, textures: 0 }, render: e2, programs: null, autoReset: true, reset: function() {
            e2.frame++, e2.calls = 0, e2.triangles = 0, e2.points = 0, e2.lines = 0;
          }, update: function(t3, i2, n2) {
            switch (e2.calls++, i2) {
              case 4:
                e2.triangles += n2 * (t3 / 3);
                break;
              case 1:
                e2.lines += n2 * (t3 / 2);
                break;
              case 3:
                e2.lines += n2 * (t3 - 1);
                break;
              case 2:
                e2.lines += n2 * t3;
                break;
              case 0:
                e2.points += n2 * t3;
                break;
              default:
                console.error("THREE.WebGLInfo: Unknown draw mode:", i2);
            }
          } };
        }
        function Jn(t2, e2) {
          return t2[0] - e2[0];
        }
        function Kn(t2, e2) {
          return Math.abs(e2[1]) - Math.abs(t2[1]);
        }
        function $n(t2, e2, i2) {
          const n2 = {}, r2 = new Float32Array(8), s2 = /* @__PURE__ */ new WeakMap(), a2 = new $t(), o2 = [];
          for (let t3 = 0; t3 < 8; t3++)
            o2[t3] = [t3, 0];
          return { update: function(l2, c2, h2, u2) {
            const d2 = l2.morphTargetInfluences;
            if (true === e2.isWebGL2) {
              const p2 = c2.morphAttributes.position || c2.morphAttributes.normal || c2.morphAttributes.color, m2 = void 0 !== p2 ? p2.length : 0;
              let f2 = s2.get(c2);
              if (void 0 === f2 || f2.count !== m2) {
                let P2 = function() {
                  L2.dispose(), s2.delete(c2), c2.removeEventListener("dispose", P2);
                };
                void 0 !== f2 && f2.texture.dispose();
                const x2 = void 0 !== c2.morphAttributes.position, _2 = void 0 !== c2.morphAttributes.normal, y2 = void 0 !== c2.morphAttributes.color, b2 = c2.morphAttributes.position || [], S2 = c2.morphAttributes.normal || [], w2 = c2.morphAttributes.color || [];
                let T2 = 0;
                true === x2 && (T2 = 1), true === _2 && (T2 = 2), true === y2 && (T2 = 3);
                let A2 = c2.attributes.position.count * T2, E2 = 1;
                A2 > e2.maxTextureSize && (E2 = Math.ceil(A2 / e2.maxTextureSize), A2 = e2.maxTextureSize);
                const C2 = new Float32Array(A2 * E2 * 4 * m2), L2 = new te(C2, A2, E2, m2);
                L2.type = M, L2.needsUpdate = true;
                const R2 = 4 * T2;
                for (let I2 = 0; I2 < m2; I2++) {
                  const D2 = b2[I2], N2 = S2[I2], O2 = w2[I2], z2 = A2 * E2 * 4 * I2;
                  for (let U2 = 0; U2 < D2.count; U2++) {
                    const B2 = U2 * R2;
                    true === x2 && (a2.fromBufferAttribute(D2, U2), C2[z2 + B2 + 0] = a2.x, C2[z2 + B2 + 1] = a2.y, C2[z2 + B2 + 2] = a2.z, C2[z2 + B2 + 3] = 0), true === _2 && (a2.fromBufferAttribute(N2, U2), C2[z2 + B2 + 4] = a2.x, C2[z2 + B2 + 5] = a2.y, C2[z2 + B2 + 6] = a2.z, C2[z2 + B2 + 7] = 0), true === y2 && (a2.fromBufferAttribute(O2, U2), C2[z2 + B2 + 8] = a2.x, C2[z2 + B2 + 9] = a2.y, C2[z2 + B2 + 10] = a2.z, C2[z2 + B2 + 11] = 4 === O2.itemSize ? a2.w : 1);
                  }
                }
                f2 = { count: m2, texture: L2, size: new Lt(A2, E2) }, s2.set(c2, f2), c2.addEventListener("dispose", P2);
              }
              let g2 = 0;
              for (let F2 = 0; F2 < d2.length; F2++)
                g2 += d2[F2];
              const v2 = c2.morphTargetsRelative ? 1 : 1 - g2;
              u2.getUniforms().setValue(t2, "morphTargetBaseInfluence", v2), u2.getUniforms().setValue(t2, "morphTargetInfluences", d2), u2.getUniforms().setValue(t2, "morphTargetsTexture", f2.texture, i2), u2.getUniforms().setValue(t2, "morphTargetsTextureSize", f2.size);
            } else {
              const k2 = void 0 === d2 ? 0 : d2.length;
              let G2 = n2[c2.id];
              if (void 0 === G2 || G2.length !== k2) {
                G2 = [];
                for (let q2 = 0; q2 < k2; q2++)
                  G2[q2] = [q2, 0];
                n2[c2.id] = G2;
              }
              for (let X2 = 0; X2 < k2; X2++) {
                const Y2 = G2[X2];
                Y2[0] = X2, Y2[1] = d2[X2];
              }
              G2.sort(Kn);
              for (let Z2 = 0; Z2 < 8; Z2++)
                Z2 < k2 && G2[Z2][1] ? (o2[Z2][0] = G2[Z2][0], o2[Z2][1] = G2[Z2][1]) : (o2[Z2][0] = Number.MAX_SAFE_INTEGER, o2[Z2][1] = 0);
              o2.sort(Jn);
              const V2 = c2.morphAttributes.position, H2 = c2.morphAttributes.normal;
              let W2 = 0;
              for (let J2 = 0; J2 < 8; J2++) {
                const K2 = o2[J2], $2 = K2[0], Q2 = K2[1];
                $2 !== Number.MAX_SAFE_INTEGER && Q2 ? (V2 && c2.getAttribute("morphTarget" + J2) !== V2[$2] && c2.setAttribute("morphTarget" + J2, V2[$2]), H2 && c2.getAttribute("morphNormal" + J2) !== H2[$2] && c2.setAttribute("morphNormal" + J2, H2[$2]), r2[J2] = Q2, W2 += Q2) : (V2 && true === c2.hasAttribute("morphTarget" + J2) && c2.deleteAttribute("morphTarget" + J2), H2 && true === c2.hasAttribute("morphNormal" + J2) && c2.deleteAttribute("morphNormal" + J2), r2[J2] = 0);
              }
              const j2 = c2.morphTargetsRelative ? 1 : 1 - W2;
              u2.getUniforms().setValue(t2, "morphTargetBaseInfluence", j2), u2.getUniforms().setValue(t2, "morphTargetInfluences", r2);
            }
          } };
        }
        function Qn(t2, e2, i2, n2) {
          let r2 = /* @__PURE__ */ new WeakMap();
          function s2(t3) {
            const e3 = t3.target;
            e3.removeEventListener("dispose", s2), i2.remove(e3.instanceMatrix), null !== e3.instanceColor && i2.remove(e3.instanceColor);
          }
          return { update: function(t3) {
            const a2 = n2.render.frame, o2 = t3.geometry, l2 = e2.get(t3, o2);
            return r2.get(l2) !== a2 && (e2.update(l2), r2.set(l2, a2)), t3.isInstancedMesh && (false === t3.hasEventListener("dispose", s2) && t3.addEventListener("dispose", s2), i2.update(t3.instanceMatrix, 34962), null !== t3.instanceColor && i2.update(t3.instanceColor, 34962)), l2;
          }, dispose: function() {
            r2 = /* @__PURE__ */ new WeakMap();
          } };
        }
        const tr = new Kt(), er = new te(), ir = new ee(), nr = new cn(), rr = [], sr = [], ar = new Float32Array(16), or = new Float32Array(9), lr = new Float32Array(4);
        function cr(t2, e2, i2) {
          const n2 = t2[0];
          if (n2 <= 0 || n2 > 0)
            return t2;
          const r2 = e2 * i2;
          let s2 = rr[r2];
          if (void 0 === s2 && (s2 = new Float32Array(r2), rr[r2] = s2), 0 !== e2) {
            n2.toArray(s2, 0);
            for (let n3 = 1, r3 = 0; n3 !== e2; ++n3)
              r3 += i2, t2[n3].toArray(s2, r3);
          }
          return s2;
        }
        function hr(t2, e2) {
          if (t2.length !== e2.length)
            return false;
          for (let i2 = 0, n2 = t2.length; i2 < n2; i2++)
            if (t2[i2] !== e2[i2])
              return false;
          return true;
        }
        function ur(t2, e2) {
          for (let i2 = 0, n2 = e2.length; i2 < n2; i2++)
            t2[i2] = e2[i2];
        }
        function dr(t2, e2) {
          let i2 = sr[e2];
          void 0 === i2 && (i2 = new Int32Array(e2), sr[e2] = i2);
          for (let n2 = 0; n2 !== e2; ++n2)
            i2[n2] = t2.allocateTextureUnit();
          return i2;
        }
        function pr(t2, e2) {
          const i2 = this.cache;
          i2[0] !== e2 && (t2.uniform1f(this.addr, e2), i2[0] = e2);
        }
        function mr(t2, e2) {
          const i2 = this.cache;
          if (void 0 !== e2.x)
            i2[0] === e2.x && i2[1] === e2.y || (t2.uniform2f(this.addr, e2.x, e2.y), i2[0] = e2.x, i2[1] = e2.y);
          else {
            if (hr(i2, e2))
              return;
            t2.uniform2fv(this.addr, e2), ur(i2, e2);
          }
        }
        function fr(t2, e2) {
          const i2 = this.cache;
          if (void 0 !== e2.x)
            i2[0] === e2.x && i2[1] === e2.y && i2[2] === e2.z || (t2.uniform3f(this.addr, e2.x, e2.y, e2.z), i2[0] = e2.x, i2[1] = e2.y, i2[2] = e2.z);
          else if (void 0 !== e2.r)
            i2[0] === e2.r && i2[1] === e2.g && i2[2] === e2.b || (t2.uniform3f(this.addr, e2.r, e2.g, e2.b), i2[0] = e2.r, i2[1] = e2.g, i2[2] = e2.b);
          else {
            if (hr(i2, e2))
              return;
            t2.uniform3fv(this.addr, e2), ur(i2, e2);
          }
        }
        function gr(t2, e2) {
          const i2 = this.cache;
          if (void 0 !== e2.x)
            i2[0] === e2.x && i2[1] === e2.y && i2[2] === e2.z && i2[3] === e2.w || (t2.uniform4f(this.addr, e2.x, e2.y, e2.z, e2.w), i2[0] = e2.x, i2[1] = e2.y, i2[2] = e2.z, i2[3] = e2.w);
          else {
            if (hr(i2, e2))
              return;
            t2.uniform4fv(this.addr, e2), ur(i2, e2);
          }
        }
        function vr(t2, e2) {
          const i2 = this.cache, n2 = e2.elements;
          if (void 0 === n2) {
            if (hr(i2, e2))
              return;
            t2.uniformMatrix2fv(this.addr, false, e2), ur(i2, e2);
          } else {
            if (hr(i2, n2))
              return;
            lr.set(n2), t2.uniformMatrix2fv(this.addr, false, lr), ur(i2, n2);
          }
        }
        function xr(t2, e2) {
          const i2 = this.cache, n2 = e2.elements;
          if (void 0 === n2) {
            if (hr(i2, e2))
              return;
            t2.uniformMatrix3fv(this.addr, false, e2), ur(i2, e2);
          } else {
            if (hr(i2, n2))
              return;
            or.set(n2), t2.uniformMatrix3fv(this.addr, false, or), ur(i2, n2);
          }
        }
        function _r(t2, e2) {
          const i2 = this.cache, n2 = e2.elements;
          if (void 0 === n2) {
            if (hr(i2, e2))
              return;
            t2.uniformMatrix4fv(this.addr, false, e2), ur(i2, e2);
          } else {
            if (hr(i2, n2))
              return;
            ar.set(n2), t2.uniformMatrix4fv(this.addr, false, ar), ur(i2, n2);
          }
        }
        function yr(t2, e2) {
          const i2 = this.cache;
          i2[0] !== e2 && (t2.uniform1i(this.addr, e2), i2[0] = e2);
        }
        function Mr(t2, e2) {
          const i2 = this.cache;
          hr(i2, e2) || (t2.uniform2iv(this.addr, e2), ur(i2, e2));
        }
        function br(t2, e2) {
          const i2 = this.cache;
          hr(i2, e2) || (t2.uniform3iv(this.addr, e2), ur(i2, e2));
        }
        function Sr(t2, e2) {
          const i2 = this.cache;
          hr(i2, e2) || (t2.uniform4iv(this.addr, e2), ur(i2, e2));
        }
        function wr(t2, e2) {
          const i2 = this.cache;
          i2[0] !== e2 && (t2.uniform1ui(this.addr, e2), i2[0] = e2);
        }
        function Tr(t2, e2) {
          const i2 = this.cache;
          hr(i2, e2) || (t2.uniform2uiv(this.addr, e2), ur(i2, e2));
        }
        function Ar(t2, e2) {
          const i2 = this.cache;
          hr(i2, e2) || (t2.uniform3uiv(this.addr, e2), ur(i2, e2));
        }
        function Er(t2, e2) {
          const i2 = this.cache;
          hr(i2, e2) || (t2.uniform4uiv(this.addr, e2), ur(i2, e2));
        }
        function Cr(t2, e2, i2) {
          const n2 = this.cache, r2 = i2.allocateTextureUnit();
          n2[0] !== r2 && (t2.uniform1i(this.addr, r2), n2[0] = r2), i2.setTexture2D(e2 || tr, r2);
        }
        function Lr(t2, e2, i2) {
          const n2 = this.cache, r2 = i2.allocateTextureUnit();
          n2[0] !== r2 && (t2.uniform1i(this.addr, r2), n2[0] = r2), i2.setTexture3D(e2 || ir, r2);
        }
        function Rr(t2, e2, i2) {
          const n2 = this.cache, r2 = i2.allocateTextureUnit();
          n2[0] !== r2 && (t2.uniform1i(this.addr, r2), n2[0] = r2), i2.setTextureCube(e2 || nr, r2);
        }
        function Pr(t2, e2, i2) {
          const n2 = this.cache, r2 = i2.allocateTextureUnit();
          n2[0] !== r2 && (t2.uniform1i(this.addr, r2), n2[0] = r2), i2.setTexture2DArray(e2 || er, r2);
        }
        function Ir(t2, e2) {
          t2.uniform1fv(this.addr, e2);
        }
        function Dr(t2, e2) {
          const i2 = cr(e2, this.size, 2);
          t2.uniform2fv(this.addr, i2);
        }
        function Nr(t2, e2) {
          const i2 = cr(e2, this.size, 3);
          t2.uniform3fv(this.addr, i2);
        }
        function Or(t2, e2) {
          const i2 = cr(e2, this.size, 4);
          t2.uniform4fv(this.addr, i2);
        }
        function zr(t2, e2) {
          const i2 = cr(e2, this.size, 4);
          t2.uniformMatrix2fv(this.addr, false, i2);
        }
        function Ur(t2, e2) {
          const i2 = cr(e2, this.size, 9);
          t2.uniformMatrix3fv(this.addr, false, i2);
        }
        function Br(t2, e2) {
          const i2 = cr(e2, this.size, 16);
          t2.uniformMatrix4fv(this.addr, false, i2);
        }
        function Fr(t2, e2) {
          t2.uniform1iv(this.addr, e2);
        }
        function kr(t2, e2) {
          t2.uniform2iv(this.addr, e2);
        }
        function Gr(t2, e2) {
          t2.uniform3iv(this.addr, e2);
        }
        function Vr(t2, e2) {
          t2.uniform4iv(this.addr, e2);
        }
        function Hr(t2, e2) {
          t2.uniform1uiv(this.addr, e2);
        }
        function Wr(t2, e2) {
          t2.uniform2uiv(this.addr, e2);
        }
        function jr(t2, e2) {
          t2.uniform3uiv(this.addr, e2);
        }
        function qr(t2, e2) {
          t2.uniform4uiv(this.addr, e2);
        }
        function Xr(t2, e2, i2) {
          const n2 = this.cache, r2 = e2.length, s2 = dr(i2, r2);
          hr(n2, s2) || (t2.uniform1iv(this.addr, s2), ur(n2, s2));
          for (let t3 = 0; t3 !== r2; ++t3)
            i2.setTexture2D(e2[t3] || tr, s2[t3]);
        }
        function Yr(t2, e2, i2) {
          const n2 = this.cache, r2 = e2.length, s2 = dr(i2, r2);
          hr(n2, s2) || (t2.uniform1iv(this.addr, s2), ur(n2, s2));
          for (let t3 = 0; t3 !== r2; ++t3)
            i2.setTexture3D(e2[t3] || ir, s2[t3]);
        }
        function Zr(t2, e2, i2) {
          const n2 = this.cache, r2 = e2.length, s2 = dr(i2, r2);
          hr(n2, s2) || (t2.uniform1iv(this.addr, s2), ur(n2, s2));
          for (let t3 = 0; t3 !== r2; ++t3)
            i2.setTextureCube(e2[t3] || nr, s2[t3]);
        }
        function Jr(t2, e2, i2) {
          const n2 = this.cache, r2 = e2.length, s2 = dr(i2, r2);
          hr(n2, s2) || (t2.uniform1iv(this.addr, s2), ur(n2, s2));
          for (let t3 = 0; t3 !== r2; ++t3)
            i2.setTexture2DArray(e2[t3] || er, s2[t3]);
        }
        class Kr {
          constructor(t2, e2, i2) {
            this.id = t2, this.addr = i2, this.cache = [], this.setValue = function(t3) {
              switch (t3) {
                case 5126:
                  return pr;
                case 35664:
                  return mr;
                case 35665:
                  return fr;
                case 35666:
                  return gr;
                case 35674:
                  return vr;
                case 35675:
                  return xr;
                case 35676:
                  return _r;
                case 5124:
                case 35670:
                  return yr;
                case 35667:
                case 35671:
                  return Mr;
                case 35668:
                case 35672:
                  return br;
                case 35669:
                case 35673:
                  return Sr;
                case 5125:
                  return wr;
                case 36294:
                  return Tr;
                case 36295:
                  return Ar;
                case 36296:
                  return Er;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                  return Cr;
                case 35679:
                case 36299:
                case 36307:
                  return Lr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                  return Rr;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                  return Pr;
              }
            }(e2.type);
          }
        }
        class $r {
          constructor(t2, e2, i2) {
            this.id = t2, this.addr = i2, this.cache = [], this.size = e2.size, this.setValue = function(t3) {
              switch (t3) {
                case 5126:
                  return Ir;
                case 35664:
                  return Dr;
                case 35665:
                  return Nr;
                case 35666:
                  return Or;
                case 35674:
                  return zr;
                case 35675:
                  return Ur;
                case 35676:
                  return Br;
                case 5124:
                case 35670:
                  return Fr;
                case 35667:
                case 35671:
                  return kr;
                case 35668:
                case 35672:
                  return Gr;
                case 35669:
                case 35673:
                  return Vr;
                case 5125:
                  return Hr;
                case 36294:
                  return Wr;
                case 36295:
                  return jr;
                case 36296:
                  return qr;
                case 35678:
                case 36198:
                case 36298:
                case 36306:
                case 35682:
                  return Xr;
                case 35679:
                case 36299:
                case 36307:
                  return Yr;
                case 35680:
                case 36300:
                case 36308:
                case 36293:
                  return Zr;
                case 36289:
                case 36303:
                case 36311:
                case 36292:
                  return Jr;
              }
            }(e2.type);
          }
        }
        class Qr {
          constructor(t2) {
            this.id = t2, this.seq = [], this.map = {};
          }
          setValue(t2, e2, i2) {
            const n2 = this.seq;
            for (let r2 = 0, s2 = n2.length; r2 !== s2; ++r2) {
              const s3 = n2[r2];
              s3.setValue(t2, e2[s3.id], i2);
            }
          }
        }
        const ts = /(\w+)(\])?(\[|\.)?/g;
        function es(t2, e2) {
          t2.seq.push(e2), t2.map[e2.id] = e2;
        }
        function is(t2, e2, i2) {
          const n2 = t2.name, r2 = n2.length;
          for (ts.lastIndex = 0; ; ) {
            const s2 = ts.exec(n2), a2 = ts.lastIndex;
            let o2 = s2[1];
            const l2 = "]" === s2[2], c2 = s2[3];
            if (l2 && (o2 |= 0), void 0 === c2 || "[" === c2 && a2 + 2 === r2) {
              es(i2, void 0 === c2 ? new Kr(o2, t2, e2) : new $r(o2, t2, e2));
              break;
            }
            {
              let t3 = i2.map[o2];
              void 0 === t3 && (t3 = new Qr(o2), es(i2, t3)), i2 = t3;
            }
          }
        }
        class ns {
          constructor(t2, e2) {
            this.seq = [], this.map = {};
            const i2 = t2.getProgramParameter(e2, 35718);
            for (let n2 = 0; n2 < i2; ++n2) {
              const i3 = t2.getActiveUniform(e2, n2);
              is(i3, t2.getUniformLocation(e2, i3.name), this);
            }
          }
          setValue(t2, e2, i2, n2) {
            const r2 = this.map[e2];
            void 0 !== r2 && r2.setValue(t2, i2, n2);
          }
          setOptional(t2, e2, i2) {
            const n2 = e2[i2];
            void 0 !== n2 && this.setValue(t2, i2, n2);
          }
          static upload(t2, e2, i2, n2) {
            for (let r2 = 0, s2 = e2.length; r2 !== s2; ++r2) {
              const s3 = e2[r2], a2 = i2[s3.id];
              false !== a2.needsUpdate && s3.setValue(t2, a2.value, n2);
            }
          }
          static seqWithValue(t2, e2) {
            const i2 = [];
            for (let n2 = 0, r2 = t2.length; n2 !== r2; ++n2) {
              const r3 = t2[n2];
              r3.id in e2 && i2.push(r3);
            }
            return i2;
          }
        }
        function rs(t2, e2, i2) {
          const n2 = t2.createShader(e2);
          return t2.shaderSource(n2, i2), t2.compileShader(n2), n2;
        }
        let ss = 0;
        function as(t2, e2, i2) {
          const n2 = t2.getShaderParameter(e2, 35713), r2 = t2.getShaderInfoLog(e2).trim();
          if (n2 && "" === r2)
            return "";
          const s2 = /ERROR: 0:(\d+)/.exec(r2);
          if (s2) {
            const n3 = parseInt(s2[1]);
            return i2.toUpperCase() + "\n\n" + r2 + "\n\n" + function(t3, e3) {
              const i3 = t3.split("\n"), n4 = [], r3 = Math.max(e3 - 6, 0), s3 = Math.min(e3 + 6, i3.length);
              for (let t4 = r3; t4 < s3; t4++) {
                const r4 = t4 + 1;
                n4.push(`${r4 === e3 ? ">" : " "} ${r4}: ${i3[t4]}`);
              }
              return n4.join("\n");
            }(t2.getShaderSource(e2), n3);
          }
          return r2;
        }
        function os(t2, e2) {
          const i2 = function(t3) {
            switch (t3) {
              case at:
                return ["Linear", "( value )"];
              case ot:
                return ["sRGB", "( value )"];
              default:
                return console.warn("THREE.WebGLProgram: Unsupported encoding:", t3), ["Linear", "( value )"];
            }
          }(e2);
          return "vec4 " + t2 + "( vec4 value ) { return LinearTo" + i2[0] + i2[1] + "; }";
        }
        function ls(t2, e2) {
          let i2;
          switch (e2) {
            case 1:
              i2 = "Linear";
              break;
            case 2:
              i2 = "Reinhard";
              break;
            case 3:
              i2 = "OptimizedCineon";
              break;
            case 4:
              i2 = "ACESFilmic";
              break;
            case 5:
              i2 = "Custom";
              break;
            default:
              console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e2), i2 = "Linear";
          }
          return "vec3 " + t2 + "( vec3 color ) { return " + i2 + "ToneMapping( color ); }";
        }
        function cs(t2) {
          return "" !== t2;
        }
        function hs(t2, e2) {
          const i2 = e2.numSpotLightShadows + e2.numSpotLightMaps - e2.numSpotLightShadowsWithMaps;
          return t2.replace(/NUM_DIR_LIGHTS/g, e2.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e2.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e2.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, i2).replace(/NUM_RECT_AREA_LIGHTS/g, e2.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e2.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e2.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e2.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e2.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e2.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e2.numPointLightShadows);
        }
        function us(t2, e2) {
          return t2.replace(/NUM_CLIPPING_PLANES/g, e2.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e2.numClippingPlanes - e2.numClipIntersection);
        }
        const ds = /^[ \t]*#include +<([\w\d./]+)>/gm;
        function ps(t2) {
          return t2.replace(ds, ms);
        }
        function ms(t2, e2) {
          const i2 = Mn[e2];
          if (void 0 === i2)
            throw new Error("Can not resolve #include <" + e2 + ">");
          return ps(i2);
        }
        const fs = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
        function gs(t2) {
          return t2.replace(fs, vs);
        }
        function vs(t2, e2, i2, n2) {
          let r2 = "";
          for (let t3 = parseInt(e2); t3 < parseInt(i2); t3++)
            r2 += n2.replace(/\[\s*i\s*\]/g, "[ " + t3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t3);
          return r2;
        }
        function xs(t2) {
          let e2 = "precision " + t2.precision + " float;\nprecision " + t2.precision + " int;";
          return "highp" === t2.precision ? e2 += "\n#define HIGH_PRECISION" : "mediump" === t2.precision ? e2 += "\n#define MEDIUM_PRECISION" : "lowp" === t2.precision && (e2 += "\n#define LOW_PRECISION"), e2;
        }
        function _s(t2, e2, i2, n2) {
          const a2 = t2.getContext(), o2 = i2.defines;
          let c2 = i2.vertexShader, h2 = i2.fragmentShader;
          const u2 = function(t3) {
            let e3 = "SHADOWMAP_TYPE_BASIC";
            return 1 === t3.shadowMapType ? e3 = "SHADOWMAP_TYPE_PCF" : 2 === t3.shadowMapType ? e3 = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t3.shadowMapType && (e3 = "SHADOWMAP_TYPE_VSM"), e3;
          }(i2), d2 = function(t3) {
            let e3 = "ENVMAP_TYPE_CUBE";
            if (t3.envMap)
              switch (t3.envMapMode) {
                case r:
                case s:
                  e3 = "ENVMAP_TYPE_CUBE";
                  break;
                case l:
                  e3 = "ENVMAP_TYPE_CUBE_UV";
              }
            return e3;
          }(i2), p2 = function(t3) {
            let e3 = "ENVMAP_MODE_REFLECTION";
            t3.envMap && t3.envMapMode === s && (e3 = "ENVMAP_MODE_REFRACTION");
            return e3;
          }(i2), m2 = function(t3) {
            let e3 = "ENVMAP_BLENDING_NONE";
            if (t3.envMap)
              switch (t3.combine) {
                case 0:
                  e3 = "ENVMAP_BLENDING_MULTIPLY";
                  break;
                case 1:
                  e3 = "ENVMAP_BLENDING_MIX";
                  break;
                case 2:
                  e3 = "ENVMAP_BLENDING_ADD";
              }
            return e3;
          }(i2), f2 = function(t3) {
            const e3 = t3.envMapCubeUVHeight;
            if (null === e3)
              return null;
            const i3 = Math.log2(e3) - 2, n3 = 1 / e3;
            return { texelWidth: 1 / (3 * Math.max(Math.pow(2, i3), 112)), texelHeight: n3, maxMip: i3 };
          }(i2), g2 = i2.isWebGL2 ? "" : function(t3) {
            return [t3.extensionDerivatives || t3.envMapCubeUVHeight || t3.bumpMap || t3.tangentSpaceNormalMap || t3.clearcoatNormalMap || t3.flatShading || "physical" === t3.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t3.extensionFragDepth || t3.logarithmicDepthBuffer) && t3.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t3.extensionDrawBuffers && t3.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t3.extensionShaderTextureLOD || t3.envMap || t3.transmission) && t3.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(cs).join("\n");
          }(i2), v2 = function(t3) {
            const e3 = [];
            for (const i3 in t3) {
              const n3 = t3[i3];
              false !== n3 && e3.push("#define " + i3 + " " + n3);
            }
            return e3.join("\n");
          }(o2), x2 = a2.createProgram();
          let _2, y2, M2 = i2.glslVersion ? "#version " + i2.glslVersion + "\n" : "";
          i2.isRawShaderMaterial ? (_2 = [v2].filter(cs).join("\n"), _2.length > 0 && (_2 += "\n"), y2 = [g2, v2].filter(cs).join("\n"), y2.length > 0 && (y2 += "\n")) : (_2 = [xs(i2), "#define SHADER_NAME " + i2.shaderName, v2, i2.instancing ? "#define USE_INSTANCING" : "", i2.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i2.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", i2.useFog && i2.fog ? "#define USE_FOG" : "", i2.useFog && i2.fogExp2 ? "#define FOG_EXP2" : "", i2.map ? "#define USE_MAP" : "", i2.envMap ? "#define USE_ENVMAP" : "", i2.envMap ? "#define " + p2 : "", i2.lightMap ? "#define USE_LIGHTMAP" : "", i2.aoMap ? "#define USE_AOMAP" : "", i2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i2.bumpMap ? "#define USE_BUMPMAP" : "", i2.normalMap ? "#define USE_NORMALMAP" : "", i2.normalMap && i2.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i2.normalMap && i2.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i2.displacementMap && i2.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i2.specularMap ? "#define USE_SPECULARMAP" : "", i2.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i2.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i2.metalnessMap ? "#define USE_METALNESSMAP" : "", i2.alphaMap ? "#define USE_ALPHAMAP" : "", i2.transmission ? "#define USE_TRANSMISSION" : "", i2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i2.thicknessMap ? "#define USE_THICKNESSMAP" : "", i2.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i2.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i2.vertexTangents ? "#define USE_TANGENT" : "", i2.vertexColors ? "#define USE_COLOR" : "", i2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i2.vertexUvs ? "#define USE_UV" : "", i2.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i2.flatShading ? "#define FLAT_SHADED" : "", i2.skinning ? "#define USE_SKINNING" : "", i2.morphTargets ? "#define USE_MORPHTARGETS" : "", i2.morphNormals && false === i2.flatShading ? "#define USE_MORPHNORMALS" : "", i2.morphColors && i2.isWebGL2 ? "#define USE_MORPHCOLORS" : "", i2.morphTargetsCount > 0 && i2.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", i2.morphTargetsCount > 0 && i2.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + i2.morphTextureStride : "", i2.morphTargetsCount > 0 && i2.isWebGL2 ? "#define MORPHTARGETS_COUNT " + i2.morphTargetsCount : "", i2.doubleSided ? "#define DOUBLE_SIDED" : "", i2.flipSided ? "#define FLIP_SIDED" : "", i2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i2.shadowMapEnabled ? "#define " + u2 : "", i2.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i2.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i2.logarithmicDepthBuffer && i2.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(cs).join("\n"), y2 = [g2, xs(i2), "#define SHADER_NAME " + i2.shaderName, v2, i2.useFog && i2.fog ? "#define USE_FOG" : "", i2.useFog && i2.fogExp2 ? "#define FOG_EXP2" : "", i2.map ? "#define USE_MAP" : "", i2.matcap ? "#define USE_MATCAP" : "", i2.envMap ? "#define USE_ENVMAP" : "", i2.envMap ? "#define " + d2 : "", i2.envMap ? "#define " + p2 : "", i2.envMap ? "#define " + m2 : "", f2 ? "#define CUBEUV_TEXEL_WIDTH " + f2.texelWidth : "", f2 ? "#define CUBEUV_TEXEL_HEIGHT " + f2.texelHeight : "", f2 ? "#define CUBEUV_MAX_MIP " + f2.maxMip + ".0" : "", i2.lightMap ? "#define USE_LIGHTMAP" : "", i2.aoMap ? "#define USE_AOMAP" : "", i2.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i2.bumpMap ? "#define USE_BUMPMAP" : "", i2.normalMap ? "#define USE_NORMALMAP" : "", i2.normalMap && i2.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i2.normalMap && i2.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i2.clearcoat ? "#define USE_CLEARCOAT" : "", i2.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i2.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i2.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i2.iridescence ? "#define USE_IRIDESCENCE" : "", i2.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", i2.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", i2.specularMap ? "#define USE_SPECULARMAP" : "", i2.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i2.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", i2.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i2.metalnessMap ? "#define USE_METALNESSMAP" : "", i2.alphaMap ? "#define USE_ALPHAMAP" : "", i2.alphaTest ? "#define USE_ALPHATEST" : "", i2.sheen ? "#define USE_SHEEN" : "", i2.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", i2.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", i2.transmission ? "#define USE_TRANSMISSION" : "", i2.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i2.thicknessMap ? "#define USE_THICKNESSMAP" : "", i2.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", i2.vertexTangents ? "#define USE_TANGENT" : "", i2.vertexColors || i2.instancingColor ? "#define USE_COLOR" : "", i2.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i2.vertexUvs ? "#define USE_UV" : "", i2.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i2.gradientMap ? "#define USE_GRADIENTMAP" : "", i2.flatShading ? "#define FLAT_SHADED" : "", i2.doubleSided ? "#define DOUBLE_SIDED" : "", i2.flipSided ? "#define FLIP_SIDED" : "", i2.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i2.shadowMapEnabled ? "#define " + u2 : "", i2.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i2.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i2.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i2.logarithmicDepthBuffer && i2.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i2.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i2.toneMapping ? Mn.tonemapping_pars_fragment : "", 0 !== i2.toneMapping ? ls("toneMapping", i2.toneMapping) : "", i2.dithering ? "#define DITHERING" : "", i2.opaque ? "#define OPAQUE" : "", Mn.encodings_pars_fragment, os("linearToOutputTexel", i2.outputEncoding), i2.useDepthPacking ? "#define DEPTH_PACKING " + i2.depthPacking : "", "\n"].filter(cs).join("\n")), c2 = ps(c2), c2 = hs(c2, i2), c2 = us(c2, i2), h2 = ps(h2), h2 = hs(h2, i2), h2 = us(h2, i2), c2 = gs(c2), h2 = gs(h2), i2.isWebGL2 && true !== i2.isRawShaderMaterial && (M2 = "#version 300 es\n", _2 = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + _2, y2 = ["#define varying in", i2.glslVersion === dt ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", i2.glslVersion === dt ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y2);
          const b2 = M2 + y2 + h2, S2 = rs(a2, 35633, M2 + _2 + c2), w2 = rs(a2, 35632, b2);
          if (a2.attachShader(x2, S2), a2.attachShader(x2, w2), void 0 !== i2.index0AttributeName ? a2.bindAttribLocation(x2, 0, i2.index0AttributeName) : true === i2.morphTargets && a2.bindAttribLocation(x2, 0, "position"), a2.linkProgram(x2), t2.debug.checkShaderErrors) {
            const t3 = a2.getProgramInfoLog(x2).trim(), e3 = a2.getShaderInfoLog(S2).trim(), i3 = a2.getShaderInfoLog(w2).trim();
            let n3 = true, r2 = true;
            if (false === a2.getProgramParameter(x2, 35714)) {
              n3 = false;
              const e4 = as(a2, S2, "vertex"), i4 = as(a2, w2, "fragment");
              console.error("THREE.WebGLProgram: Shader Error " + a2.getError() + " - VALIDATE_STATUS " + a2.getProgramParameter(x2, 35715) + "\n\nProgram Info Log: " + t3 + "\n" + e4 + "\n" + i4);
            } else
              "" !== t3 ? console.warn("THREE.WebGLProgram: Program Info Log:", t3) : "" !== e3 && "" !== i3 || (r2 = false);
            r2 && (this.diagnostics = { runnable: n3, programLog: t3, vertexShader: { log: e3, prefix: _2 }, fragmentShader: { log: i3, prefix: y2 } });
          }
          let T2, A2;
          return a2.deleteShader(S2), a2.deleteShader(w2), this.getUniforms = function() {
            return void 0 === T2 && (T2 = new ns(a2, x2)), T2;
          }, this.getAttributes = function() {
            return void 0 === A2 && (A2 = function(t3, e3) {
              const i3 = {}, n3 = t3.getProgramParameter(e3, 35721);
              for (let r2 = 0; r2 < n3; r2++) {
                const n4 = t3.getActiveAttrib(e3, r2), s2 = n4.name;
                let a3 = 1;
                35674 === n4.type && (a3 = 2), 35675 === n4.type && (a3 = 3), 35676 === n4.type && (a3 = 4), i3[s2] = { type: n4.type, location: t3.getAttribLocation(e3, s2), locationSize: a3 };
              }
              return i3;
            }(a2, x2)), A2;
          }, this.destroy = function() {
            n2.releaseStatesOfProgram(this), a2.deleteProgram(x2), this.program = void 0;
          }, this.name = i2.shaderName, this.id = ss++, this.cacheKey = e2, this.usedTimes = 1, this.program = x2, this.vertexShader = S2, this.fragmentShader = w2, this;
        }
        let ys = 0;
        class Ms {
          constructor() {
            this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
          }
          update(t2) {
            const e2 = t2.vertexShader, i2 = t2.fragmentShader, n2 = this._getShaderStage(e2), r2 = this._getShaderStage(i2), s2 = this._getShaderCacheForMaterial(t2);
            return false === s2.has(n2) && (s2.add(n2), n2.usedTimes++), false === s2.has(r2) && (s2.add(r2), r2.usedTimes++), this;
          }
          remove(t2) {
            const e2 = this.materialCache.get(t2);
            for (const t3 of e2)
              t3.usedTimes--, 0 === t3.usedTimes && this.shaderCache.delete(t3.code);
            return this.materialCache.delete(t2), this;
          }
          getVertexShaderID(t2) {
            return this._getShaderStage(t2.vertexShader).id;
          }
          getFragmentShaderID(t2) {
            return this._getShaderStage(t2.fragmentShader).id;
          }
          dispose() {
            this.shaderCache.clear(), this.materialCache.clear();
          }
          _getShaderCacheForMaterial(t2) {
            const e2 = this.materialCache;
            let i2 = e2.get(t2);
            return void 0 === i2 && (i2 = /* @__PURE__ */ new Set(), e2.set(t2, i2)), i2;
          }
          _getShaderStage(t2) {
            const e2 = this.shaderCache;
            let i2 = e2.get(t2);
            return void 0 === i2 && (i2 = new bs(t2), e2.set(t2, i2)), i2;
          }
        }
        class bs {
          constructor(t2) {
            this.id = ys++, this.code = t2, this.usedTimes = 0;
          }
        }
        function Ss(t2, e2, i2, n2, r2, s2, a2) {
          const o2 = new je(), c2 = new Ms(), h2 = [], u2 = r2.isWebGL2, d2 = r2.logarithmicDepthBuffer, p2 = r2.vertexTextures;
          let m2 = r2.precision;
          const f2 = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
          return { getParameters: function(s3, o3, h3, g2, v2) {
            const x2 = g2.fog, _2 = v2.geometry, y2 = s3.isMeshStandardMaterial ? g2.environment : null, M2 = (s3.isMeshStandardMaterial ? i2 : e2).get(s3.envMap || y2), b2 = M2 && M2.mapping === l ? M2.image.height : null, S2 = f2[s3.type];
            null !== s3.precision && (m2 = r2.getMaxPrecision(s3.precision), m2 !== s3.precision && console.warn("THREE.WebGLProgram.getParameters:", s3.precision, "not supported, using", m2, "instead."));
            const w2 = _2.morphAttributes.position || _2.morphAttributes.normal || _2.morphAttributes.color, T2 = void 0 !== w2 ? w2.length : 0;
            let A2, E2, C2, L2, R2 = 0;
            if (void 0 !== _2.morphAttributes.position && (R2 = 1), void 0 !== _2.morphAttributes.normal && (R2 = 2), void 0 !== _2.morphAttributes.color && (R2 = 3), S2) {
              const t3 = Sn[S2];
              A2 = t3.vertexShader, E2 = t3.fragmentShader;
            } else
              A2 = s3.vertexShader, E2 = s3.fragmentShader, c2.update(s3), C2 = c2.getVertexShaderID(s3), L2 = c2.getFragmentShaderID(s3);
            const P2 = t2.getRenderTarget(), I2 = s3.alphaTest > 0, D2 = s3.clearcoat > 0, N2 = s3.iridescence > 0;
            return { isWebGL2: u2, shaderID: S2, shaderName: s3.type, vertexShader: A2, fragmentShader: E2, defines: s3.defines, customVertexShaderID: C2, customFragmentShaderID: L2, isRawShaderMaterial: true === s3.isRawShaderMaterial, glslVersion: s3.glslVersion, precision: m2, instancing: true === v2.isInstancedMesh, instancingColor: true === v2.isInstancedMesh && null !== v2.instanceColor, supportsVertexTextures: p2, outputEncoding: null === P2 ? t2.outputEncoding : true === P2.isXRRenderTarget ? P2.texture.encoding : at, map: !!s3.map, matcap: !!s3.matcap, envMap: !!M2, envMapMode: M2 && M2.mapping, envMapCubeUVHeight: b2, lightMap: !!s3.lightMap, aoMap: !!s3.aoMap, emissiveMap: !!s3.emissiveMap, bumpMap: !!s3.bumpMap, normalMap: !!s3.normalMap, objectSpaceNormalMap: 1 === s3.normalMapType, tangentSpaceNormalMap: 0 === s3.normalMapType, decodeVideoTexture: !!s3.map && true === s3.map.isVideoTexture && s3.map.encoding === ot, clearcoat: D2, clearcoatMap: D2 && !!s3.clearcoatMap, clearcoatRoughnessMap: D2 && !!s3.clearcoatRoughnessMap, clearcoatNormalMap: D2 && !!s3.clearcoatNormalMap, iridescence: N2, iridescenceMap: N2 && !!s3.iridescenceMap, iridescenceThicknessMap: N2 && !!s3.iridescenceThicknessMap, displacementMap: !!s3.displacementMap, roughnessMap: !!s3.roughnessMap, metalnessMap: !!s3.metalnessMap, specularMap: !!s3.specularMap, specularIntensityMap: !!s3.specularIntensityMap, specularColorMap: !!s3.specularColorMap, opaque: false === s3.transparent && 1 === s3.blending, alphaMap: !!s3.alphaMap, alphaTest: I2, gradientMap: !!s3.gradientMap, sheen: s3.sheen > 0, sheenColorMap: !!s3.sheenColorMap, sheenRoughnessMap: !!s3.sheenRoughnessMap, transmission: s3.transmission > 0, transmissionMap: !!s3.transmissionMap, thicknessMap: !!s3.thicknessMap, combine: s3.combine, vertexTangents: !!s3.normalMap && !!_2.attributes.tangent, vertexColors: s3.vertexColors, vertexAlphas: true === s3.vertexColors && !!_2.attributes.color && 4 === _2.attributes.color.itemSize, vertexUvs: !!(s3.map || s3.bumpMap || s3.normalMap || s3.specularMap || s3.alphaMap || s3.emissiveMap || s3.roughnessMap || s3.metalnessMap || s3.clearcoatMap || s3.clearcoatRoughnessMap || s3.clearcoatNormalMap || s3.iridescenceMap || s3.iridescenceThicknessMap || s3.displacementMap || s3.transmissionMap || s3.thicknessMap || s3.specularIntensityMap || s3.specularColorMap || s3.sheenColorMap || s3.sheenRoughnessMap), uvsVertexOnly: !(s3.map || s3.bumpMap || s3.normalMap || s3.specularMap || s3.alphaMap || s3.emissiveMap || s3.roughnessMap || s3.metalnessMap || s3.clearcoatNormalMap || s3.iridescenceMap || s3.iridescenceThicknessMap || s3.transmission > 0 || s3.transmissionMap || s3.thicknessMap || s3.specularIntensityMap || s3.specularColorMap || s3.sheen > 0 || s3.sheenColorMap || s3.sheenRoughnessMap || !s3.displacementMap), fog: !!x2, useFog: true === s3.fog, fogExp2: x2 && x2.isFogExp2, flatShading: !!s3.flatShading, sizeAttenuation: s3.sizeAttenuation, logarithmicDepthBuffer: d2, skinning: true === v2.isSkinnedMesh, morphTargets: void 0 !== _2.morphAttributes.position, morphNormals: void 0 !== _2.morphAttributes.normal, morphColors: void 0 !== _2.morphAttributes.color, morphTargetsCount: T2, morphTextureStride: R2, numDirLights: o3.directional.length, numPointLights: o3.point.length, numSpotLights: o3.spot.length, numSpotLightMaps: o3.spotLightMap.length, numRectAreaLights: o3.rectArea.length, numHemiLights: o3.hemi.length, numDirLightShadows: o3.directionalShadowMap.length, numPointLightShadows: o3.pointShadowMap.length, numSpotLightShadows: o3.spotShadowMap.length, numSpotLightShadowsWithMaps: o3.numSpotLightShadowsWithMaps, numClippingPlanes: a2.numPlanes, numClipIntersection: a2.numIntersection, dithering: s3.dithering, shadowMapEnabled: t2.shadowMap.enabled && h3.length > 0, shadowMapType: t2.shadowMap.type, toneMapping: s3.toneMapped ? t2.toneMapping : 0, physicallyCorrectLights: t2.physicallyCorrectLights, premultipliedAlpha: s3.premultipliedAlpha, doubleSided: 2 === s3.side, flipSided: 1 === s3.side, useDepthPacking: !!s3.depthPacking, depthPacking: s3.depthPacking || 0, index0AttributeName: s3.index0AttributeName, extensionDerivatives: s3.extensions && s3.extensions.derivatives, extensionFragDepth: s3.extensions && s3.extensions.fragDepth, extensionDrawBuffers: s3.extensions && s3.extensions.drawBuffers, extensionShaderTextureLOD: s3.extensions && s3.extensions.shaderTextureLOD, rendererExtensionFragDepth: u2 || n2.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u2 || n2.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u2 || n2.has("EXT_shader_texture_lod"), customProgramCacheKey: s3.customProgramCacheKey() };
          }, getProgramCacheKey: function(e3) {
            const i3 = [];
            if (e3.shaderID ? i3.push(e3.shaderID) : (i3.push(e3.customVertexShaderID), i3.push(e3.customFragmentShaderID)), void 0 !== e3.defines)
              for (const t3 in e3.defines)
                i3.push(t3), i3.push(e3.defines[t3]);
            return false === e3.isRawShaderMaterial && (!function(t3, e4) {
              t3.push(e4.precision), t3.push(e4.outputEncoding), t3.push(e4.envMapMode), t3.push(e4.envMapCubeUVHeight), t3.push(e4.combine), t3.push(e4.vertexUvs), t3.push(e4.fogExp2), t3.push(e4.sizeAttenuation), t3.push(e4.morphTargetsCount), t3.push(e4.morphAttributeCount), t3.push(e4.numDirLights), t3.push(e4.numPointLights), t3.push(e4.numSpotLights), t3.push(e4.numSpotLightMaps), t3.push(e4.numHemiLights), t3.push(e4.numRectAreaLights), t3.push(e4.numDirLightShadows), t3.push(e4.numPointLightShadows), t3.push(e4.numSpotLightShadows), t3.push(e4.numSpotLightShadowsWithMaps), t3.push(e4.shadowMapType), t3.push(e4.toneMapping), t3.push(e4.numClippingPlanes), t3.push(e4.numClipIntersection), t3.push(e4.depthPacking);
            }(i3, e3), function(t3, e4) {
              o2.disableAll(), e4.isWebGL2 && o2.enable(0);
              e4.supportsVertexTextures && o2.enable(1);
              e4.instancing && o2.enable(2);
              e4.instancingColor && o2.enable(3);
              e4.map && o2.enable(4);
              e4.matcap && o2.enable(5);
              e4.envMap && o2.enable(6);
              e4.lightMap && o2.enable(7);
              e4.aoMap && o2.enable(8);
              e4.emissiveMap && o2.enable(9);
              e4.bumpMap && o2.enable(10);
              e4.normalMap && o2.enable(11);
              e4.objectSpaceNormalMap && o2.enable(12);
              e4.tangentSpaceNormalMap && o2.enable(13);
              e4.clearcoat && o2.enable(14);
              e4.clearcoatMap && o2.enable(15);
              e4.clearcoatRoughnessMap && o2.enable(16);
              e4.clearcoatNormalMap && o2.enable(17);
              e4.iridescence && o2.enable(18);
              e4.iridescenceMap && o2.enable(19);
              e4.iridescenceThicknessMap && o2.enable(20);
              e4.displacementMap && o2.enable(21);
              e4.specularMap && o2.enable(22);
              e4.roughnessMap && o2.enable(23);
              e4.metalnessMap && o2.enable(24);
              e4.gradientMap && o2.enable(25);
              e4.alphaMap && o2.enable(26);
              e4.alphaTest && o2.enable(27);
              e4.vertexColors && o2.enable(28);
              e4.vertexAlphas && o2.enable(29);
              e4.vertexUvs && o2.enable(30);
              e4.vertexTangents && o2.enable(31);
              e4.uvsVertexOnly && o2.enable(32);
              t3.push(o2.mask), o2.disableAll(), e4.fog && o2.enable(0);
              e4.useFog && o2.enable(1);
              e4.flatShading && o2.enable(2);
              e4.logarithmicDepthBuffer && o2.enable(3);
              e4.skinning && o2.enable(4);
              e4.morphTargets && o2.enable(5);
              e4.morphNormals && o2.enable(6);
              e4.morphColors && o2.enable(7);
              e4.premultipliedAlpha && o2.enable(8);
              e4.shadowMapEnabled && o2.enable(9);
              e4.physicallyCorrectLights && o2.enable(10);
              e4.doubleSided && o2.enable(11);
              e4.flipSided && o2.enable(12);
              e4.useDepthPacking && o2.enable(13);
              e4.dithering && o2.enable(14);
              e4.specularIntensityMap && o2.enable(15);
              e4.specularColorMap && o2.enable(16);
              e4.transmission && o2.enable(17);
              e4.transmissionMap && o2.enable(18);
              e4.thicknessMap && o2.enable(19);
              e4.sheen && o2.enable(20);
              e4.sheenColorMap && o2.enable(21);
              e4.sheenRoughnessMap && o2.enable(22);
              e4.decodeVideoTexture && o2.enable(23);
              e4.opaque && o2.enable(24);
              t3.push(o2.mask);
            }(i3, e3), i3.push(t2.outputEncoding)), i3.push(e3.customProgramCacheKey), i3.join();
          }, getUniforms: function(t3) {
            const e3 = f2[t3.type];
            let i3;
            if (e3) {
              const t4 = Sn[e3];
              i3 = nn.clone(t4.uniforms);
            } else
              i3 = t3.uniforms;
            return i3;
          }, acquireProgram: function(e3, i3) {
            let n3;
            for (let t3 = 0, e4 = h2.length; t3 < e4; t3++) {
              const e5 = h2[t3];
              if (e5.cacheKey === i3) {
                n3 = e5, ++n3.usedTimes;
                break;
              }
            }
            return void 0 === n3 && (n3 = new _s(t2, i3, e3, s2), h2.push(n3)), n3;
          }, releaseProgram: function(t3) {
            if (0 == --t3.usedTimes) {
              const e3 = h2.indexOf(t3);
              h2[e3] = h2[h2.length - 1], h2.pop(), t3.destroy();
            }
          }, releaseShaderCache: function(t3) {
            c2.remove(t3);
          }, programs: h2, dispose: function() {
            c2.dispose();
          } };
        }
        function ws() {
          let t2 = /* @__PURE__ */ new WeakMap();
          return { get: function(e2) {
            let i2 = t2.get(e2);
            return void 0 === i2 && (i2 = {}, t2.set(e2, i2)), i2;
          }, remove: function(e2) {
            t2.delete(e2);
          }, update: function(e2, i2, n2) {
            t2.get(e2)[i2] = n2;
          }, dispose: function() {
            t2 = /* @__PURE__ */ new WeakMap();
          } };
        }
        function Ts(t2, e2) {
          return t2.groupOrder !== e2.groupOrder ? t2.groupOrder - e2.groupOrder : t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.material.id !== e2.material.id ? t2.material.id - e2.material.id : t2.z !== e2.z ? t2.z - e2.z : t2.id - e2.id;
        }
        function As(t2, e2) {
          return t2.groupOrder !== e2.groupOrder ? t2.groupOrder - e2.groupOrder : t2.renderOrder !== e2.renderOrder ? t2.renderOrder - e2.renderOrder : t2.z !== e2.z ? e2.z - t2.z : t2.id - e2.id;
        }
        function Es() {
          const t2 = [];
          let e2 = 0;
          const i2 = [], n2 = [], r2 = [];
          function s2(i3, n3, r3, s3, a2, o2) {
            let l2 = t2[e2];
            return void 0 === l2 ? (l2 = { id: i3.id, object: i3, geometry: n3, material: r3, groupOrder: s3, renderOrder: i3.renderOrder, z: a2, group: o2 }, t2[e2] = l2) : (l2.id = i3.id, l2.object = i3, l2.geometry = n3, l2.material = r3, l2.groupOrder = s3, l2.renderOrder = i3.renderOrder, l2.z = a2, l2.group = o2), e2++, l2;
          }
          return { opaque: i2, transmissive: n2, transparent: r2, init: function() {
            e2 = 0, i2.length = 0, n2.length = 0, r2.length = 0;
          }, push: function(t3, e3, a2, o2, l2, c2) {
            const h2 = s2(t3, e3, a2, o2, l2, c2);
            a2.transmission > 0 ? n2.push(h2) : true === a2.transparent ? r2.push(h2) : i2.push(h2);
          }, unshift: function(t3, e3, a2, o2, l2, c2) {
            const h2 = s2(t3, e3, a2, o2, l2, c2);
            a2.transmission > 0 ? n2.unshift(h2) : true === a2.transparent ? r2.unshift(h2) : i2.unshift(h2);
          }, finish: function() {
            for (let i3 = e2, n3 = t2.length; i3 < n3; i3++) {
              const e3 = t2[i3];
              if (null === e3.id)
                break;
              e3.id = null, e3.object = null, e3.geometry = null, e3.material = null, e3.group = null;
            }
          }, sort: function(t3, e3) {
            i2.length > 1 && i2.sort(t3 || Ts), n2.length > 1 && n2.sort(e3 || As), r2.length > 1 && r2.sort(e3 || As);
          } };
        }
        function Cs() {
          let t2 = /* @__PURE__ */ new WeakMap();
          return { get: function(e2, i2) {
            const n2 = t2.get(e2);
            let r2;
            return void 0 === n2 ? (r2 = new Es(), t2.set(e2, [r2])) : i2 >= n2.length ? (r2 = new Es(), n2.push(r2)) : r2 = n2[i2], r2;
          }, dispose: function() {
            t2 = /* @__PURE__ */ new WeakMap();
          } };
        }
        function Ls() {
          const t2 = {};
          return { get: function(e2) {
            if (void 0 !== t2[e2.id])
              return t2[e2.id];
            let i2;
            switch (e2.type) {
              case "DirectionalLight":
                i2 = { direction: new ne(), color: new jt() };
                break;
              case "SpotLight":
                i2 = { position: new ne(), direction: new ne(), color: new jt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
                break;
              case "PointLight":
                i2 = { position: new ne(), color: new jt(), distance: 0, decay: 0 };
                break;
              case "HemisphereLight":
                i2 = { direction: new ne(), skyColor: new jt(), groundColor: new jt() };
                break;
              case "RectAreaLight":
                i2 = { color: new jt(), position: new ne(), halfWidth: new ne(), halfHeight: new ne() };
            }
            return t2[e2.id] = i2, i2;
          } };
        }
        let Rs = 0;
        function Ps(t2, e2) {
          return (e2.castShadow ? 2 : 0) - (t2.castShadow ? 2 : 0) + (e2.map ? 1 : 0) - (t2.map ? 1 : 0);
        }
        function Is(t2, e2) {
          const i2 = new Ls(), n2 = function() {
            const t3 = {};
            return { get: function(e3) {
              if (void 0 !== t3[e3.id])
                return t3[e3.id];
              let i3;
              switch (e3.type) {
                case "DirectionalLight":
                case "SpotLight":
                  i3 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt() };
                  break;
                case "PointLight":
                  i3 = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Lt(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
              }
              return t3[e3.id] = i3, i3;
            } };
          }(), r2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0 };
          for (let t3 = 0; t3 < 9; t3++)
            r2.probe.push(new ne());
          const s2 = new ne(), a2 = new Ne(), o2 = new Ne();
          return { setup: function(s3, a3) {
            let o3 = 0, l2 = 0, c2 = 0;
            for (let t3 = 0; t3 < 9; t3++)
              r2.probe[t3].set(0, 0, 0);
            let h2 = 0, u2 = 0, d2 = 0, p2 = 0, m2 = 0, f2 = 0, g2 = 0, v2 = 0, x2 = 0, _2 = 0;
            s3.sort(Ps);
            const y2 = true !== a3 ? Math.PI : 1;
            for (let t3 = 0, e3 = s3.length; t3 < e3; t3++) {
              const e4 = s3[t3], a4 = e4.color, M3 = e4.intensity, b2 = e4.distance, S2 = e4.shadow && e4.shadow.map ? e4.shadow.map.texture : null;
              if (e4.isAmbientLight)
                o3 += a4.r * M3 * y2, l2 += a4.g * M3 * y2, c2 += a4.b * M3 * y2;
              else if (e4.isLightProbe)
                for (let t4 = 0; t4 < 9; t4++)
                  r2.probe[t4].addScaledVector(e4.sh.coefficients[t4], M3);
              else if (e4.isDirectionalLight) {
                const t4 = i2.get(e4);
                if (t4.color.copy(e4.color).multiplyScalar(e4.intensity * y2), e4.castShadow) {
                  const t5 = e4.shadow, i3 = n2.get(e4);
                  i3.shadowBias = t5.bias, i3.shadowNormalBias = t5.normalBias, i3.shadowRadius = t5.radius, i3.shadowMapSize = t5.mapSize, r2.directionalShadow[h2] = i3, r2.directionalShadowMap[h2] = S2, r2.directionalShadowMatrix[h2] = e4.shadow.matrix, f2++;
                }
                r2.directional[h2] = t4, h2++;
              } else if (e4.isSpotLight) {
                const t4 = i2.get(e4);
                t4.position.setFromMatrixPosition(e4.matrixWorld), t4.color.copy(a4).multiplyScalar(M3 * y2), t4.distance = b2, t4.coneCos = Math.cos(e4.angle), t4.penumbraCos = Math.cos(e4.angle * (1 - e4.penumbra)), t4.decay = e4.decay, r2.spot[d2] = t4;
                const s4 = e4.shadow;
                if (e4.map && (r2.spotLightMap[x2] = e4.map, x2++, s4.updateMatrices(e4), e4.castShadow && _2++), r2.spotLightMatrix[d2] = s4.matrix, e4.castShadow) {
                  const t5 = n2.get(e4);
                  t5.shadowBias = s4.bias, t5.shadowNormalBias = s4.normalBias, t5.shadowRadius = s4.radius, t5.shadowMapSize = s4.mapSize, r2.spotShadow[d2] = t5, r2.spotShadowMap[d2] = S2, v2++;
                }
                d2++;
              } else if (e4.isRectAreaLight) {
                const t4 = i2.get(e4);
                t4.color.copy(a4).multiplyScalar(M3), t4.halfWidth.set(0.5 * e4.width, 0, 0), t4.halfHeight.set(0, 0.5 * e4.height, 0), r2.rectArea[p2] = t4, p2++;
              } else if (e4.isPointLight) {
                const t4 = i2.get(e4);
                if (t4.color.copy(e4.color).multiplyScalar(e4.intensity * y2), t4.distance = e4.distance, t4.decay = e4.decay, e4.castShadow) {
                  const t5 = e4.shadow, i3 = n2.get(e4);
                  i3.shadowBias = t5.bias, i3.shadowNormalBias = t5.normalBias, i3.shadowRadius = t5.radius, i3.shadowMapSize = t5.mapSize, i3.shadowCameraNear = t5.camera.near, i3.shadowCameraFar = t5.camera.far, r2.pointShadow[u2] = i3, r2.pointShadowMap[u2] = S2, r2.pointShadowMatrix[u2] = e4.shadow.matrix, g2++;
                }
                r2.point[u2] = t4, u2++;
              } else if (e4.isHemisphereLight) {
                const t4 = i2.get(e4);
                t4.skyColor.copy(e4.color).multiplyScalar(M3 * y2), t4.groundColor.copy(e4.groundColor).multiplyScalar(M3 * y2), r2.hemi[m2] = t4, m2++;
              }
            }
            p2 > 0 && (e2.isWebGL2 || true === t2.has("OES_texture_float_linear") ? (r2.rectAreaLTC1 = bn.LTC_FLOAT_1, r2.rectAreaLTC2 = bn.LTC_FLOAT_2) : true === t2.has("OES_texture_half_float_linear") ? (r2.rectAreaLTC1 = bn.LTC_HALF_1, r2.rectAreaLTC2 = bn.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r2.ambient[0] = o3, r2.ambient[1] = l2, r2.ambient[2] = c2;
            const M2 = r2.hash;
            M2.directionalLength === h2 && M2.pointLength === u2 && M2.spotLength === d2 && M2.rectAreaLength === p2 && M2.hemiLength === m2 && M2.numDirectionalShadows === f2 && M2.numPointShadows === g2 && M2.numSpotShadows === v2 && M2.numSpotMaps === x2 || (r2.directional.length = h2, r2.spot.length = d2, r2.rectArea.length = p2, r2.point.length = u2, r2.hemi.length = m2, r2.directionalShadow.length = f2, r2.directionalShadowMap.length = f2, r2.pointShadow.length = g2, r2.pointShadowMap.length = g2, r2.spotShadow.length = v2, r2.spotShadowMap.length = v2, r2.directionalShadowMatrix.length = f2, r2.pointShadowMatrix.length = g2, r2.spotLightMatrix.length = v2 + x2 - _2, r2.spotLightMap.length = x2, r2.numSpotLightShadowsWithMaps = _2, M2.directionalLength = h2, M2.pointLength = u2, M2.spotLength = d2, M2.rectAreaLength = p2, M2.hemiLength = m2, M2.numDirectionalShadows = f2, M2.numPointShadows = g2, M2.numSpotShadows = v2, M2.numSpotMaps = x2, r2.version = Rs++);
          }, setupView: function(t3, e3) {
            let i3 = 0, n3 = 0, l2 = 0, c2 = 0, h2 = 0;
            const u2 = e3.matrixWorldInverse;
            for (let e4 = 0, d2 = t3.length; e4 < d2; e4++) {
              const d3 = t3[e4];
              if (d3.isDirectionalLight) {
                const t4 = r2.directional[i3];
                t4.direction.setFromMatrixPosition(d3.matrixWorld), s2.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(s2), t4.direction.transformDirection(u2), i3++;
              } else if (d3.isSpotLight) {
                const t4 = r2.spot[l2];
                t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), t4.direction.setFromMatrixPosition(d3.matrixWorld), s2.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(s2), t4.direction.transformDirection(u2), l2++;
              } else if (d3.isRectAreaLight) {
                const t4 = r2.rectArea[c2];
                t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), o2.identity(), a2.copy(d3.matrixWorld), a2.premultiply(u2), o2.extractRotation(a2), t4.halfWidth.set(0.5 * d3.width, 0, 0), t4.halfHeight.set(0, 0.5 * d3.height, 0), t4.halfWidth.applyMatrix4(o2), t4.halfHeight.applyMatrix4(o2), c2++;
              } else if (d3.isPointLight) {
                const t4 = r2.point[n3];
                t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), n3++;
              } else if (d3.isHemisphereLight) {
                const t4 = r2.hemi[h2];
                t4.direction.setFromMatrixPosition(d3.matrixWorld), t4.direction.transformDirection(u2), h2++;
              }
            }
          }, state: r2 };
        }
        function Ds(t2, e2) {
          const i2 = new Is(t2, e2), n2 = [], r2 = [];
          return { init: function() {
            n2.length = 0, r2.length = 0;
          }, state: { lightsArray: n2, shadowsArray: r2, lights: i2 }, setupLights: function(t3) {
            i2.setup(n2, t3);
          }, setupLightsView: function(t3) {
            i2.setupView(n2, t3);
          }, pushLight: function(t3) {
            n2.push(t3);
          }, pushShadow: function(t3) {
            r2.push(t3);
          } };
        }
        function Ns(t2, e2) {
          let i2 = /* @__PURE__ */ new WeakMap();
          return { get: function(n2, r2 = 0) {
            const s2 = i2.get(n2);
            let a2;
            return void 0 === s2 ? (a2 = new Ds(t2, e2), i2.set(n2, [a2])) : r2 >= s2.length ? (a2 = new Ds(t2, e2), s2.push(a2)) : a2 = s2[r2], a2;
          }, dispose: function() {
            i2 = /* @__PURE__ */ new WeakMap();
          } };
        }
        class Os extends xi {
          constructor(t2) {
            super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
          }
        }
        class zs extends xi {
          constructor(t2) {
            super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.referencePosition = new ne(), this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.referencePosition.copy(t2.referencePosition), this.nearDistance = t2.nearDistance, this.farDistance = t2.farDistance, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
          }
        }
        function Us(t2, e2, i2) {
          let n2 = new vn();
          const r2 = new Lt(), s2 = new Lt(), a2 = new $t(), o2 = new Os({ depthPacking: 3201 }), l2 = new zs(), c2 = {}, h2 = i2.maxTextureSize, u2 = { 0: 1, 1: 0, 2: 2 }, p2 = new rn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Lt() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), m2 = p2.clone();
          m2.defines.HORIZONTAL_PASS = 1;
          const f2 = new Di();
          f2.setAttribute("position", new bi(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
          const g2 = new Ki(f2, p2), v2 = this;
          function x2(i3, n3) {
            const s3 = e2.update(g2);
            p2.defines.VSM_SAMPLES !== i3.blurSamples && (p2.defines.VSM_SAMPLES = i3.blurSamples, m2.defines.VSM_SAMPLES = i3.blurSamples, p2.needsUpdate = true, m2.needsUpdate = true), null === i3.mapPass && (i3.mapPass = new Qt(r2.x, r2.y)), p2.uniforms.shadow_pass.value = i3.map.texture, p2.uniforms.resolution.value = i3.mapSize, p2.uniforms.radius.value = i3.radius, t2.setRenderTarget(i3.mapPass), t2.clear(), t2.renderBufferDirect(n3, null, s3, p2, g2, null), m2.uniforms.shadow_pass.value = i3.mapPass.texture, m2.uniforms.resolution.value = i3.mapSize, m2.uniforms.radius.value = i3.radius, t2.setRenderTarget(i3.map), t2.clear(), t2.renderBufferDirect(n3, null, s3, m2, g2, null);
          }
          function _2(e3, i3, n3, r3, s3, a3) {
            let h3 = null;
            const d2 = true === n3.isPointLight ? e3.customDistanceMaterial : e3.customDepthMaterial;
            if (h3 = void 0 !== d2 ? d2 : true === n3.isPointLight ? l2 : o2, t2.localClippingEnabled && true === i3.clipShadows && Array.isArray(i3.clippingPlanes) && 0 !== i3.clippingPlanes.length || i3.displacementMap && 0 !== i3.displacementScale || i3.alphaMap && i3.alphaTest > 0) {
              const t3 = h3.uuid, e4 = i3.uuid;
              let n4 = c2[t3];
              void 0 === n4 && (n4 = {}, c2[t3] = n4);
              let r4 = n4[e4];
              void 0 === r4 && (r4 = h3.clone(), n4[e4] = r4), h3 = r4;
            }
            return h3.visible = i3.visible, h3.wireframe = i3.wireframe, h3.side = 3 === a3 ? null !== i3.shadowSide ? i3.shadowSide : i3.side : null !== i3.shadowSide ? i3.shadowSide : u2[i3.side], h3.alphaMap = i3.alphaMap, h3.alphaTest = i3.alphaTest, h3.clipShadows = i3.clipShadows, h3.clippingPlanes = i3.clippingPlanes, h3.clipIntersection = i3.clipIntersection, h3.displacementMap = i3.displacementMap, h3.displacementScale = i3.displacementScale, h3.displacementBias = i3.displacementBias, h3.wireframeLinewidth = i3.wireframeLinewidth, h3.linewidth = i3.linewidth, true === n3.isPointLight && true === h3.isMeshDistanceMaterial && (h3.referencePosition.setFromMatrixPosition(n3.matrixWorld), h3.nearDistance = r3, h3.farDistance = s3), h3;
          }
          function y2(i3, r3, s3, a3, o3) {
            if (false === i3.visible)
              return;
            if (i3.layers.test(r3.layers) && (i3.isMesh || i3.isLine || i3.isPoints) && (i3.castShadow || i3.receiveShadow && 3 === o3) && (!i3.frustumCulled || n2.intersectsObject(i3))) {
              i3.modelViewMatrix.multiplyMatrices(s3.matrixWorldInverse, i3.matrixWorld);
              const n3 = e2.update(i3), r4 = i3.material;
              if (Array.isArray(r4)) {
                const e3 = n3.groups;
                for (let l4 = 0, c3 = e3.length; l4 < c3; l4++) {
                  const c4 = e3[l4], h3 = r4[c4.materialIndex];
                  if (h3 && h3.visible) {
                    const e4 = _2(i3, h3, a3, s3.near, s3.far, o3);
                    t2.renderBufferDirect(s3, null, n3, e4, i3, c4);
                  }
                }
              } else if (r4.visible) {
                const e3 = _2(i3, r4, a3, s3.near, s3.far, o3);
                t2.renderBufferDirect(s3, null, n3, e3, i3, null);
              }
            }
            const l3 = i3.children;
            for (let t3 = 0, e3 = l3.length; t3 < e3; t3++)
              y2(l3[t3], r3, s3, a3, o3);
          }
          this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = 1, this.render = function(e3, i3, o3) {
            if (false === v2.enabled)
              return;
            if (false === v2.autoUpdate && false === v2.needsUpdate)
              return;
            if (0 === e3.length)
              return;
            const l3 = t2.getRenderTarget(), c3 = t2.getActiveCubeFace(), u3 = t2.getActiveMipmapLevel(), p3 = t2.state;
            p3.setBlending(0), p3.buffers.color.setClear(1, 1, 1, 1), p3.buffers.depth.setTest(true), p3.setScissorTest(false);
            for (let l4 = 0, c4 = e3.length; l4 < c4; l4++) {
              const c5 = e3[l4], u4 = c5.shadow;
              if (void 0 === u4) {
                console.warn("THREE.WebGLShadowMap:", c5, "has no shadow.");
                continue;
              }
              if (false === u4.autoUpdate && false === u4.needsUpdate)
                continue;
              r2.copy(u4.mapSize);
              const m3 = u4.getFrameExtents();
              if (r2.multiply(m3), s2.copy(u4.mapSize), (r2.x > h2 || r2.y > h2) && (r2.x > h2 && (s2.x = Math.floor(h2 / m3.x), r2.x = s2.x * m3.x, u4.mapSize.x = s2.x), r2.y > h2 && (s2.y = Math.floor(h2 / m3.y), r2.y = s2.y * m3.y, u4.mapSize.y = s2.y)), null === u4.map) {
                const t3 = 3 !== this.type ? { minFilter: d, magFilter: d } : {};
                u4.map = new Qt(r2.x, r2.y, t3), u4.map.texture.name = c5.name + ".shadowMap", u4.camera.updateProjectionMatrix();
              }
              t2.setRenderTarget(u4.map), t2.clear();
              const f3 = u4.getViewportCount();
              for (let t3 = 0; t3 < f3; t3++) {
                const e4 = u4.getViewport(t3);
                a2.set(s2.x * e4.x, s2.y * e4.y, s2.x * e4.z, s2.y * e4.w), p3.viewport(a2), u4.updateMatrices(c5, t3), n2 = u4.getFrustum(), y2(i3, o3, u4.camera, c5, this.type);
              }
              true !== u4.isPointLightShadow && 3 === this.type && x2(u4, o3), u4.needsUpdate = false;
            }
            v2.needsUpdate = false, t2.setRenderTarget(l3, c3, u3);
          };
        }
        function Bs(t2, e2, n2) {
          const r2 = n2.isWebGL2;
          const s2 = new function() {
            let e3 = false;
            const i2 = new $t();
            let n3 = null;
            const r3 = new $t(0, 0, 0, 0);
            return { setMask: function(i3) {
              n3 === i3 || e3 || (t2.colorMask(i3, i3, i3, i3), n3 = i3);
            }, setLocked: function(t3) {
              e3 = t3;
            }, setClear: function(e4, n4, s3, a3, o3) {
              true === o3 && (e4 *= a3, n4 *= a3, s3 *= a3), i2.set(e4, n4, s3, a3), false === r3.equals(i2) && (t2.clearColor(e4, n4, s3, a3), r3.copy(i2));
            }, reset: function() {
              e3 = false, n3 = null, r3.set(-1, 0, 0, 0);
            } };
          }(), a2 = new function() {
            let e3 = false, i2 = null, n3 = null, r3 = null;
            return { setTest: function(t3) {
              t3 ? G2(2929) : V2(2929);
            }, setMask: function(n4) {
              i2 === n4 || e3 || (t2.depthMask(n4), i2 = n4);
            }, setFunc: function(e4) {
              if (n3 !== e4) {
                switch (e4) {
                  case 0:
                    t2.depthFunc(512);
                    break;
                  case 1:
                    t2.depthFunc(519);
                    break;
                  case 2:
                    t2.depthFunc(513);
                    break;
                  case 3:
                  default:
                    t2.depthFunc(515);
                    break;
                  case 4:
                    t2.depthFunc(514);
                    break;
                  case 5:
                    t2.depthFunc(518);
                    break;
                  case 6:
                    t2.depthFunc(516);
                    break;
                  case 7:
                    t2.depthFunc(517);
                }
                n3 = e4;
              }
            }, setLocked: function(t3) {
              e3 = t3;
            }, setClear: function(e4) {
              r3 !== e4 && (t2.clearDepth(e4), r3 = e4);
            }, reset: function() {
              e3 = false, i2 = null, n3 = null, r3 = null;
            } };
          }(), o2 = new function() {
            let e3 = false, i2 = null, n3 = null, r3 = null, s3 = null, a3 = null, o3 = null, l3 = null, c3 = null;
            return { setTest: function(t3) {
              e3 || (t3 ? G2(2960) : V2(2960));
            }, setMask: function(n4) {
              i2 === n4 || e3 || (t2.stencilMask(n4), i2 = n4);
            }, setFunc: function(e4, i3, a4) {
              n3 === e4 && r3 === i3 && s3 === a4 || (t2.stencilFunc(e4, i3, a4), n3 = e4, r3 = i3, s3 = a4);
            }, setOp: function(e4, i3, n4) {
              a3 === e4 && o3 === i3 && l3 === n4 || (t2.stencilOp(e4, i3, n4), a3 = e4, o3 = i3, l3 = n4);
            }, setLocked: function(t3) {
              e3 = t3;
            }, setClear: function(e4) {
              c3 !== e4 && (t2.clearStencil(e4), c3 = e4);
            }, reset: function() {
              e3 = false, i2 = null, n3 = null, r3 = null, s3 = null, a3 = null, o3 = null, l3 = null, c3 = null;
            } };
          }(), l2 = /* @__PURE__ */ new WeakMap(), c2 = /* @__PURE__ */ new WeakMap();
          let h2 = {}, u2 = {}, d2 = /* @__PURE__ */ new WeakMap(), p2 = [], m2 = null, f2 = false, g2 = null, v2 = null, x2 = null, _2 = null, y2 = null, M2 = null, b2 = null, S2 = false, w2 = null, T2 = null, A2 = null, E2 = null, C2 = null;
          const L2 = t2.getParameter(35661);
          let R2 = false, P2 = 0;
          const I2 = t2.getParameter(7938);
          -1 !== I2.indexOf("WebGL") ? (P2 = parseFloat(/^WebGL (\d)/.exec(I2)[1]), R2 = P2 >= 1) : -1 !== I2.indexOf("OpenGL ES") && (P2 = parseFloat(/^OpenGL ES (\d)/.exec(I2)[1]), R2 = P2 >= 2);
          let D2 = null, N2 = {};
          const O2 = t2.getParameter(3088), z2 = t2.getParameter(2978), U2 = new $t().fromArray(O2), B2 = new $t().fromArray(z2);
          function F2(e3, i2, n3) {
            const r3 = new Uint8Array(4), s3 = t2.createTexture();
            t2.bindTexture(e3, s3), t2.texParameteri(e3, 10241, 9728), t2.texParameteri(e3, 10240, 9728);
            for (let e4 = 0; e4 < n3; e4++)
              t2.texImage2D(i2 + e4, 0, 6408, 1, 1, 0, 6408, 5121, r3);
            return s3;
          }
          const k2 = {};
          function G2(e3) {
            true !== h2[e3] && (t2.enable(e3), h2[e3] = true);
          }
          function V2(e3) {
            false !== h2[e3] && (t2.disable(e3), h2[e3] = false);
          }
          k2[3553] = F2(3553, 3553, 1), k2[34067] = F2(34067, 34069, 6), s2.setClear(0, 0, 0, 1), a2.setClear(1), o2.setClear(0), G2(2929), a2.setFunc(3), q2(false), X2(1), G2(2884), j2(0);
          const H2 = { [i]: 32774, 101: 32778, 102: 32779 };
          if (r2)
            H2[103] = 32775, H2[104] = 32776;
          else {
            const t3 = e2.get("EXT_blend_minmax");
            null !== t3 && (H2[103] = t3.MIN_EXT, H2[104] = t3.MAX_EXT);
          }
          const W2 = { 200: 0, 201: 1, 202: 768, 204: 770, 210: 776, 208: 774, 206: 772, 203: 769, 205: 771, 209: 775, 207: 773 };
          function j2(e3, n3, r3, s3, a3, o3, l3, c3) {
            if (0 !== e3) {
              if (false === f2 && (G2(3042), f2 = true), 5 === e3)
                a3 = a3 || n3, o3 = o3 || r3, l3 = l3 || s3, n3 === v2 && a3 === y2 || (t2.blendEquationSeparate(H2[n3], H2[a3]), v2 = n3, y2 = a3), r3 === x2 && s3 === _2 && o3 === M2 && l3 === b2 || (t2.blendFuncSeparate(W2[r3], W2[s3], W2[o3], W2[l3]), x2 = r3, _2 = s3, M2 = o3, b2 = l3), g2 = e3, S2 = null;
              else if (e3 !== g2 || c3 !== S2) {
                if (v2 === i && y2 === i || (t2.blendEquation(32774), v2 = i, y2 = i), c3)
                  switch (e3) {
                    case 1:
                      t2.blendFuncSeparate(1, 771, 1, 771);
                      break;
                    case 2:
                      t2.blendFunc(1, 1);
                      break;
                    case 3:
                      t2.blendFuncSeparate(0, 769, 0, 1);
                      break;
                    case 4:
                      t2.blendFuncSeparate(0, 768, 0, 770);
                      break;
                    default:
                      console.error("THREE.WebGLState: Invalid blending: ", e3);
                  }
                else
                  switch (e3) {
                    case 1:
                      t2.blendFuncSeparate(770, 771, 1, 771);
                      break;
                    case 2:
                      t2.blendFunc(770, 1);
                      break;
                    case 3:
                      t2.blendFuncSeparate(0, 769, 0, 1);
                      break;
                    case 4:
                      t2.blendFunc(0, 768);
                      break;
                    default:
                      console.error("THREE.WebGLState: Invalid blending: ", e3);
                  }
                x2 = null, _2 = null, M2 = null, b2 = null, g2 = e3, S2 = c3;
              }
            } else
              true === f2 && (V2(3042), f2 = false);
          }
          function q2(e3) {
            w2 !== e3 && (e3 ? t2.frontFace(2304) : t2.frontFace(2305), w2 = e3);
          }
          function X2(e3) {
            0 !== e3 ? (G2(2884), e3 !== T2 && (1 === e3 ? t2.cullFace(1029) : 2 === e3 ? t2.cullFace(1028) : t2.cullFace(1032))) : V2(2884), T2 = e3;
          }
          function Y2(e3, i2, n3) {
            e3 ? (G2(32823), E2 === i2 && C2 === n3 || (t2.polygonOffset(i2, n3), E2 = i2, C2 = n3)) : V2(32823);
          }
          return { buffers: { color: s2, depth: a2, stencil: o2 }, enable: G2, disable: V2, bindFramebuffer: function(e3, i2) {
            return u2[e3] !== i2 && (t2.bindFramebuffer(e3, i2), u2[e3] = i2, r2 && (36009 === e3 && (u2[36160] = i2), 36160 === e3 && (u2[36009] = i2)), true);
          }, drawBuffers: function(i2, r3) {
            let s3 = p2, a3 = false;
            if (i2)
              if (s3 = d2.get(r3), void 0 === s3 && (s3 = [], d2.set(r3, s3)), i2.isWebGLMultipleRenderTargets) {
                const t3 = i2.texture;
                if (s3.length !== t3.length || 36064 !== s3[0]) {
                  for (let e3 = 0, i3 = t3.length; e3 < i3; e3++)
                    s3[e3] = 36064 + e3;
                  s3.length = t3.length, a3 = true;
                }
              } else
                36064 !== s3[0] && (s3[0] = 36064, a3 = true);
            else
              1029 !== s3[0] && (s3[0] = 1029, a3 = true);
            a3 && (n2.isWebGL2 ? t2.drawBuffers(s3) : e2.get("WEBGL_draw_buffers").drawBuffersWEBGL(s3));
          }, useProgram: function(e3) {
            return m2 !== e3 && (t2.useProgram(e3), m2 = e3, true);
          }, setBlending: j2, setMaterial: function(t3, e3) {
            2 === t3.side ? V2(2884) : G2(2884);
            let i2 = 1 === t3.side;
            e3 && (i2 = !i2), q2(i2), 1 === t3.blending && false === t3.transparent ? j2(0) : j2(t3.blending, t3.blendEquation, t3.blendSrc, t3.blendDst, t3.blendEquationAlpha, t3.blendSrcAlpha, t3.blendDstAlpha, t3.premultipliedAlpha), a2.setFunc(t3.depthFunc), a2.setTest(t3.depthTest), a2.setMask(t3.depthWrite), s2.setMask(t3.colorWrite);
            const n3 = t3.stencilWrite;
            o2.setTest(n3), n3 && (o2.setMask(t3.stencilWriteMask), o2.setFunc(t3.stencilFunc, t3.stencilRef, t3.stencilFuncMask), o2.setOp(t3.stencilFail, t3.stencilZFail, t3.stencilZPass)), Y2(t3.polygonOffset, t3.polygonOffsetFactor, t3.polygonOffsetUnits), true === t3.alphaToCoverage ? G2(32926) : V2(32926);
          }, setFlipSided: q2, setCullFace: X2, setLineWidth: function(e3) {
            e3 !== A2 && (R2 && t2.lineWidth(e3), A2 = e3);
          }, setPolygonOffset: Y2, setScissorTest: function(t3) {
            t3 ? G2(3089) : V2(3089);
          }, activeTexture: function(e3) {
            void 0 === e3 && (e3 = 33984 + L2 - 1), D2 !== e3 && (t2.activeTexture(e3), D2 = e3);
          }, bindTexture: function(e3, i2, n3) {
            void 0 === n3 && (n3 = null === D2 ? 33984 + L2 - 1 : D2);
            let r3 = N2[n3];
            void 0 === r3 && (r3 = { type: void 0, texture: void 0 }, N2[n3] = r3), r3.type === e3 && r3.texture === i2 || (D2 !== n3 && (t2.activeTexture(n3), D2 = n3), t2.bindTexture(e3, i2 || k2[e3]), r3.type = e3, r3.texture = i2);
          }, unbindTexture: function() {
            const e3 = N2[D2];
            void 0 !== e3 && void 0 !== e3.type && (t2.bindTexture(e3.type, null), e3.type = void 0, e3.texture = void 0);
          }, compressedTexImage2D: function() {
            try {
              t2.compressedTexImage2D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, texImage2D: function() {
            try {
              t2.texImage2D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, texImage3D: function() {
            try {
              t2.texImage3D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, updateUBOMapping: function(e3, i2) {
            let n3 = c2.get(i2);
            void 0 === n3 && (n3 = /* @__PURE__ */ new WeakMap(), c2.set(i2, n3));
            let r3 = n3.get(e3);
            void 0 === r3 && (r3 = t2.getUniformBlockIndex(i2, e3.name), n3.set(e3, r3));
          }, uniformBlockBinding: function(e3, i2) {
            const n3 = c2.get(i2).get(e3);
            l2.get(e3) !== n3 && (t2.uniformBlockBinding(i2, n3, e3.__bindingPointIndex), l2.set(e3, n3));
          }, texStorage2D: function() {
            try {
              t2.texStorage2D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, texStorage3D: function() {
            try {
              t2.texStorage3D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, texSubImage2D: function() {
            try {
              t2.texSubImage2D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, texSubImage3D: function() {
            try {
              t2.texSubImage3D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, compressedTexSubImage2D: function() {
            try {
              t2.compressedTexSubImage2D.apply(t2, arguments);
            } catch (t3) {
              console.error("THREE.WebGLState:", t3);
            }
          }, scissor: function(e3) {
            false === U2.equals(e3) && (t2.scissor(e3.x, e3.y, e3.z, e3.w), U2.copy(e3));
          }, viewport: function(e3) {
            false === B2.equals(e3) && (t2.viewport(e3.x, e3.y, e3.z, e3.w), B2.copy(e3));
          }, reset: function() {
            t2.disable(3042), t2.disable(2884), t2.disable(2929), t2.disable(32823), t2.disable(3089), t2.disable(2960), t2.disable(32926), t2.blendEquation(32774), t2.blendFunc(1, 0), t2.blendFuncSeparate(1, 0, 1, 0), t2.colorMask(true, true, true, true), t2.clearColor(0, 0, 0, 0), t2.depthMask(true), t2.depthFunc(513), t2.clearDepth(1), t2.stencilMask(4294967295), t2.stencilFunc(519, 0, 4294967295), t2.stencilOp(7680, 7680, 7680), t2.clearStencil(0), t2.cullFace(1029), t2.frontFace(2305), t2.polygonOffset(0, 0), t2.activeTexture(33984), t2.bindFramebuffer(36160, null), true === r2 && (t2.bindFramebuffer(36009, null), t2.bindFramebuffer(36008, null)), t2.useProgram(null), t2.lineWidth(1), t2.scissor(0, 0, t2.canvas.width, t2.canvas.height), t2.viewport(0, 0, t2.canvas.width, t2.canvas.height), h2 = {}, D2 = null, N2 = {}, u2 = {}, d2 = /* @__PURE__ */ new WeakMap(), p2 = [], m2 = null, f2 = false, g2 = null, v2 = null, x2 = null, _2 = null, y2 = null, M2 = null, b2 = null, S2 = false, w2 = null, T2 = null, A2 = null, E2 = null, C2 = null, U2.set(0, 0, t2.canvas.width, t2.canvas.height), B2.set(0, 0, t2.canvas.width, t2.canvas.height), s2.reset(), a2.reset(), o2.reset();
          } };
        }
        function Fs(t2, e2, i2, n2, r2, s2, a2) {
          const o2 = r2.isWebGL2, l2 = r2.maxTextures, E2 = r2.maxCubemapSize, C2 = r2.maxTextureSize, L2 = r2.maxSamples, R2 = e2.has("WEBGL_multisampled_render_to_texture") ? e2.get("WEBGL_multisampled_render_to_texture") : null, P2 = /OculusBrowser/g.test(navigator.userAgent), I2 = /* @__PURE__ */ new WeakMap();
          let D2;
          const N2 = /* @__PURE__ */ new WeakMap();
          let O2 = false;
          try {
            O2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
          } catch (t3) {
          }
          function z2(t3, e3) {
            return O2 ? new OffscreenCanvas(t3, e3) : Nt("canvas");
          }
          function U2(t3, e3, i3, n3) {
            let r3 = 1;
            if ((t3.width > n3 || t3.height > n3) && (r3 = n3 / Math.max(t3.width, t3.height)), r3 < 1 || true === e3) {
              if ("undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap) {
                const n4 = e3 ? Tt : Math.floor, s3 = n4(r3 * t3.width), a3 = n4(r3 * t3.height);
                void 0 === D2 && (D2 = z2(s3, a3));
                const o3 = i3 ? z2(s3, a3) : D2;
                o3.width = s3, o3.height = a3;
                return o3.getContext("2d").drawImage(t3, 0, 0, s3, a3), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t3.width + "x" + t3.height + ") to (" + s3 + "x" + a3 + ")."), o3;
              }
              return "data" in t3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t3.width + "x" + t3.height + ")."), t3;
            }
            return t3;
          }
          function B2(t3) {
            return St(t3.width) && St(t3.height);
          }
          function F2(t3, e3) {
            return t3.generateMipmaps && e3 && t3.minFilter !== d && t3.minFilter !== f;
          }
          function k2(e3) {
            t2.generateMipmap(e3);
          }
          function G2(i3, n3, r3, s3, a3 = false) {
            if (false === o2)
              return n3;
            if (null !== i3) {
              if (void 0 !== t2[i3])
                return t2[i3];
              console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i3 + "'");
            }
            let l3 = n3;
            return 6403 === n3 && (5126 === r3 && (l3 = 33326), 5131 === r3 && (l3 = 33325), 5121 === r3 && (l3 = 33321)), 33319 === n3 && (5126 === r3 && (l3 = 33328), 5131 === r3 && (l3 = 33327), 5121 === r3 && (l3 = 33323)), 6408 === n3 && (5126 === r3 && (l3 = 34836), 5131 === r3 && (l3 = 34842), 5121 === r3 && (l3 = s3 === ot && false === a3 ? 35907 : 32856), 32819 === r3 && (l3 = 32854), 32820 === r3 && (l3 = 32855)), 33325 !== l3 && 33326 !== l3 && 33327 !== l3 && 33328 !== l3 && 34842 !== l3 && 34836 !== l3 || e2.get("EXT_color_buffer_float"), l3;
          }
          function V2(t3, e3, i3) {
            return true === F2(t3, i3) || t3.isFramebufferTexture && t3.minFilter !== d && t3.minFilter !== f ? Math.log2(Math.max(e3.width, e3.height)) + 1 : void 0 !== t3.mipmaps && t3.mipmaps.length > 0 ? t3.mipmaps.length : t3.isCompressedTexture && Array.isArray(t3.image) ? e3.mipmaps.length : 1;
          }
          function H2(t3) {
            return t3 === d || t3 === p || t3 === m ? 9728 : 9729;
          }
          function W2(t3) {
            const e3 = t3.target;
            e3.removeEventListener("dispose", W2), function(t4) {
              const e4 = n2.get(t4);
              if (void 0 === e4.__webglInit)
                return;
              const i3 = t4.source, r3 = N2.get(i3);
              if (r3) {
                const n3 = r3[e4.__cacheKey];
                n3.usedTimes--, 0 === n3.usedTimes && q2(t4), 0 === Object.keys(r3).length && N2.delete(i3);
              }
              n2.remove(t4);
            }(e3), e3.isVideoTexture && I2.delete(e3);
          }
          function j2(e3) {
            const i3 = e3.target;
            i3.removeEventListener("dispose", j2), function(e4) {
              const i4 = e4.texture, r3 = n2.get(e4), s3 = n2.get(i4);
              void 0 !== s3.__webglTexture && (t2.deleteTexture(s3.__webglTexture), a2.memory.textures--);
              e4.depthTexture && e4.depthTexture.dispose();
              if (e4.isWebGLCubeRenderTarget)
                for (let e5 = 0; e5 < 6; e5++)
                  t2.deleteFramebuffer(r3.__webglFramebuffer[e5]), r3.__webglDepthbuffer && t2.deleteRenderbuffer(r3.__webglDepthbuffer[e5]);
              else {
                if (t2.deleteFramebuffer(r3.__webglFramebuffer), r3.__webglDepthbuffer && t2.deleteRenderbuffer(r3.__webglDepthbuffer), r3.__webglMultisampledFramebuffer && t2.deleteFramebuffer(r3.__webglMultisampledFramebuffer), r3.__webglColorRenderbuffer)
                  for (let e5 = 0; e5 < r3.__webglColorRenderbuffer.length; e5++)
                    r3.__webglColorRenderbuffer[e5] && t2.deleteRenderbuffer(r3.__webglColorRenderbuffer[e5]);
                r3.__webglDepthRenderbuffer && t2.deleteRenderbuffer(r3.__webglDepthRenderbuffer);
              }
              if (e4.isWebGLMultipleRenderTargets)
                for (let e5 = 0, r4 = i4.length; e5 < r4; e5++) {
                  const r5 = n2.get(i4[e5]);
                  r5.__webglTexture && (t2.deleteTexture(r5.__webglTexture), a2.memory.textures--), n2.remove(i4[e5]);
                }
              n2.remove(i4), n2.remove(e4);
            }(i3);
          }
          function q2(e3) {
            const i3 = n2.get(e3);
            t2.deleteTexture(i3.__webglTexture);
            const r3 = e3.source;
            delete N2.get(r3)[i3.__cacheKey], a2.memory.textures--;
          }
          let X2 = 0;
          function Y2(t3, e3) {
            const r3 = n2.get(t3);
            if (t3.isVideoTexture && function(t4) {
              const e4 = a2.render.frame;
              I2.get(t4) !== e4 && (I2.set(t4, e4), t4.update());
            }(t3), false === t3.isRenderTargetTexture && t3.version > 0 && r3.__version !== t3.version) {
              const i3 = t3.image;
              if (null === i3)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
              else {
                if (false !== i3.complete)
                  return void Q2(r3, t3, e3);
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
              }
            }
            i2.bindTexture(3553, r3.__webglTexture, 33984 + e3);
          }
          const Z2 = { [c]: 10497, [h]: 33071, [u]: 33648 }, J2 = { [d]: 9728, [p]: 9984, [m]: 9986, [f]: 9729, [g]: 9985, [v]: 9987 };
          function K2(i3, s3, a3) {
            if (a3 ? (t2.texParameteri(i3, 10242, Z2[s3.wrapS]), t2.texParameteri(i3, 10243, Z2[s3.wrapT]), 32879 !== i3 && 35866 !== i3 || t2.texParameteri(i3, 32882, Z2[s3.wrapR]), t2.texParameteri(i3, 10240, J2[s3.magFilter]), t2.texParameteri(i3, 10241, J2[s3.minFilter])) : (t2.texParameteri(i3, 10242, 33071), t2.texParameteri(i3, 10243, 33071), 32879 !== i3 && 35866 !== i3 || t2.texParameteri(i3, 32882, 33071), s3.wrapS === h && s3.wrapT === h || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t2.texParameteri(i3, 10240, H2(s3.magFilter)), t2.texParameteri(i3, 10241, H2(s3.minFilter)), s3.minFilter !== d && s3.minFilter !== f && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), true === e2.has("EXT_texture_filter_anisotropic")) {
              const a4 = e2.get("EXT_texture_filter_anisotropic");
              if (s3.type === M && false === e2.has("OES_texture_float_linear"))
                return;
              if (false === o2 && s3.type === b && false === e2.has("OES_texture_half_float_linear"))
                return;
              (s3.anisotropy > 1 || n2.get(s3).__currentAnisotropy) && (t2.texParameterf(i3, a4.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s3.anisotropy, r2.getMaxAnisotropy())), n2.get(s3).__currentAnisotropy = s3.anisotropy);
            }
          }
          function $2(e3, i3) {
            let n3 = false;
            void 0 === e3.__webglInit && (e3.__webglInit = true, i3.addEventListener("dispose", W2));
            const r3 = i3.source;
            let s3 = N2.get(r3);
            void 0 === s3 && (s3 = {}, N2.set(r3, s3));
            const o3 = function(t3) {
              const e4 = [];
              return e4.push(t3.wrapS), e4.push(t3.wrapT), e4.push(t3.magFilter), e4.push(t3.minFilter), e4.push(t3.anisotropy), e4.push(t3.internalFormat), e4.push(t3.format), e4.push(t3.type), e4.push(t3.generateMipmaps), e4.push(t3.premultiplyAlpha), e4.push(t3.flipY), e4.push(t3.unpackAlignment), e4.push(t3.encoding), e4.join();
            }(i3);
            if (o3 !== e3.__cacheKey) {
              void 0 === s3[o3] && (s3[o3] = { texture: t2.createTexture(), usedTimes: 0 }, a2.memory.textures++, n3 = true), s3[o3].usedTimes++;
              const r4 = s3[e3.__cacheKey];
              void 0 !== r4 && (s3[e3.__cacheKey].usedTimes--, 0 === r4.usedTimes && q2(i3)), e3.__cacheKey = o3, e3.__webglTexture = s3[o3].texture;
            }
            return n3;
          }
          function Q2(e3, r3, a3) {
            let l3 = 3553;
            r3.isDataArrayTexture && (l3 = 35866), r3.isData3DTexture && (l3 = 32879);
            const c2 = $2(e3, r3), u2 = r3.source;
            i2.bindTexture(l3, e3.__webglTexture, 33984 + a3);
            const p2 = n2.get(u2);
            if (u2.version !== p2.__version || true === c2) {
              i2.activeTexture(33984 + a3), t2.pixelStorei(37440, r3.flipY), t2.pixelStorei(37441, r3.premultiplyAlpha), t2.pixelStorei(3317, r3.unpackAlignment), t2.pixelStorei(37443, 0);
              const e4 = function(t3) {
                return !o2 && (t3.wrapS !== h || t3.wrapT !== h || t3.minFilter !== d && t3.minFilter !== f);
              }(r3) && false === B2(r3.image);
              let n3 = U2(r3.image, e4, false, C2);
              n3 = st2(r3, n3);
              const m2 = B2(n3) || o2, g2 = s2.convert(r3.format, r3.encoding);
              let v2, x2 = s2.convert(r3.type), b2 = G2(r3.internalFormat, g2, x2, r3.encoding, r3.isVideoTexture);
              K2(l3, r3, m2);
              const E3 = r3.mipmaps, L3 = o2 && true !== r3.isVideoTexture, R3 = void 0 === p2.__version || true === c2, P3 = V2(r3, n3, m2);
              if (r3.isDepthTexture)
                b2 = 6402, o2 ? b2 = r3.type === M ? 36012 : r3.type === y ? 33190 : r3.type === S ? 35056 : 33189 : r3.type === M && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r3.format === T && 6402 === b2 && r3.type !== _ && r3.type !== y && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r3.type = y, x2 = s2.convert(r3.type)), r3.format === A && 6402 === b2 && (b2 = 34041, r3.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r3.type = S, x2 = s2.convert(r3.type))), R3 && (L3 ? i2.texStorage2D(3553, 1, b2, n3.width, n3.height) : i2.texImage2D(3553, 0, b2, n3.width, n3.height, 0, g2, x2, null));
              else if (r3.isDataTexture)
                if (E3.length > 0 && m2) {
                  L3 && R3 && i2.texStorage2D(3553, P3, b2, E3[0].width, E3[0].height);
                  for (let t3 = 0, e5 = E3.length; t3 < e5; t3++)
                    v2 = E3[t3], L3 ? i2.texSubImage2D(3553, t3, 0, 0, v2.width, v2.height, g2, x2, v2.data) : i2.texImage2D(3553, t3, b2, v2.width, v2.height, 0, g2, x2, v2.data);
                  r3.generateMipmaps = false;
                } else
                  L3 ? (R3 && i2.texStorage2D(3553, P3, b2, n3.width, n3.height), i2.texSubImage2D(3553, 0, 0, 0, n3.width, n3.height, g2, x2, n3.data)) : i2.texImage2D(3553, 0, b2, n3.width, n3.height, 0, g2, x2, n3.data);
              else if (r3.isCompressedTexture) {
                L3 && R3 && i2.texStorage2D(3553, P3, b2, E3[0].width, E3[0].height);
                for (let t3 = 0, e5 = E3.length; t3 < e5; t3++)
                  v2 = E3[t3], r3.format !== w ? null !== g2 ? L3 ? i2.compressedTexSubImage2D(3553, t3, 0, 0, v2.width, v2.height, g2, v2.data) : i2.compressedTexImage2D(3553, t3, b2, v2.width, v2.height, 0, v2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : L3 ? i2.texSubImage2D(3553, t3, 0, 0, v2.width, v2.height, g2, x2, v2.data) : i2.texImage2D(3553, t3, b2, v2.width, v2.height, 0, g2, x2, v2.data);
              } else if (r3.isDataArrayTexture)
                L3 ? (R3 && i2.texStorage3D(35866, P3, b2, n3.width, n3.height, n3.depth), i2.texSubImage3D(35866, 0, 0, 0, 0, n3.width, n3.height, n3.depth, g2, x2, n3.data)) : i2.texImage3D(35866, 0, b2, n3.width, n3.height, n3.depth, 0, g2, x2, n3.data);
              else if (r3.isData3DTexture)
                L3 ? (R3 && i2.texStorage3D(32879, P3, b2, n3.width, n3.height, n3.depth), i2.texSubImage3D(32879, 0, 0, 0, 0, n3.width, n3.height, n3.depth, g2, x2, n3.data)) : i2.texImage3D(32879, 0, b2, n3.width, n3.height, n3.depth, 0, g2, x2, n3.data);
              else if (r3.isFramebufferTexture) {
                if (R3)
                  if (L3)
                    i2.texStorage2D(3553, P3, b2, n3.width, n3.height);
                  else {
                    let t3 = n3.width, e5 = n3.height;
                    for (let n4 = 0; n4 < P3; n4++)
                      i2.texImage2D(3553, n4, b2, t3, e5, 0, g2, x2, null), t3 >>= 1, e5 >>= 1;
                  }
              } else if (E3.length > 0 && m2) {
                L3 && R3 && i2.texStorage2D(3553, P3, b2, E3[0].width, E3[0].height);
                for (let t3 = 0, e5 = E3.length; t3 < e5; t3++)
                  v2 = E3[t3], L3 ? i2.texSubImage2D(3553, t3, 0, 0, g2, x2, v2) : i2.texImage2D(3553, t3, b2, g2, x2, v2);
                r3.generateMipmaps = false;
              } else
                L3 ? (R3 && i2.texStorage2D(3553, P3, b2, n3.width, n3.height), i2.texSubImage2D(3553, 0, 0, 0, g2, x2, n3)) : i2.texImage2D(3553, 0, b2, g2, x2, n3);
              F2(r3, m2) && k2(l3), p2.__version = u2.version, r3.onUpdate && r3.onUpdate(r3);
            }
            e3.__version = r3.version;
          }
          function tt2(e3, r3, a3, o3, l3) {
            const c2 = s2.convert(a3.format, a3.encoding), h2 = s2.convert(a3.type), u2 = G2(a3.internalFormat, c2, h2, a3.encoding);
            n2.get(r3).__hasExternalTextures || (32879 === l3 || 35866 === l3 ? i2.texImage3D(l3, 0, u2, r3.width, r3.height, r3.depth, 0, c2, h2, null) : i2.texImage2D(l3, 0, u2, r3.width, r3.height, 0, c2, h2, null)), i2.bindFramebuffer(36160, e3), rt2(r3) ? R2.framebufferTexture2DMultisampleEXT(36160, o3, l3, n2.get(a3).__webglTexture, 0, nt2(r3)) : t2.framebufferTexture2D(36160, o3, l3, n2.get(a3).__webglTexture, 0), i2.bindFramebuffer(36160, null);
          }
          function et2(e3, i3, n3) {
            if (t2.bindRenderbuffer(36161, e3), i3.depthBuffer && !i3.stencilBuffer) {
              let r3 = 33189;
              if (n3 || rt2(i3)) {
                const e4 = i3.depthTexture;
                e4 && e4.isDepthTexture && (e4.type === M ? r3 = 36012 : e4.type === y && (r3 = 33190));
                const n4 = nt2(i3);
                rt2(i3) ? R2.renderbufferStorageMultisampleEXT(36161, n4, r3, i3.width, i3.height) : t2.renderbufferStorageMultisample(36161, n4, r3, i3.width, i3.height);
              } else
                t2.renderbufferStorage(36161, r3, i3.width, i3.height);
              t2.framebufferRenderbuffer(36160, 36096, 36161, e3);
            } else if (i3.depthBuffer && i3.stencilBuffer) {
              const r3 = nt2(i3);
              n3 && false === rt2(i3) ? t2.renderbufferStorageMultisample(36161, r3, 35056, i3.width, i3.height) : rt2(i3) ? R2.renderbufferStorageMultisampleEXT(36161, r3, 35056, i3.width, i3.height) : t2.renderbufferStorage(36161, 34041, i3.width, i3.height), t2.framebufferRenderbuffer(36160, 33306, 36161, e3);
            } else {
              const e4 = true === i3.isWebGLMultipleRenderTargets ? i3.texture : [i3.texture];
              for (let r3 = 0; r3 < e4.length; r3++) {
                const a3 = e4[r3], o3 = s2.convert(a3.format, a3.encoding), l3 = s2.convert(a3.type), c2 = G2(a3.internalFormat, o3, l3, a3.encoding), h2 = nt2(i3);
                n3 && false === rt2(i3) ? t2.renderbufferStorageMultisample(36161, h2, c2, i3.width, i3.height) : rt2(i3) ? R2.renderbufferStorageMultisampleEXT(36161, h2, c2, i3.width, i3.height) : t2.renderbufferStorage(36161, c2, i3.width, i3.height);
              }
            }
            t2.bindRenderbuffer(36161, null);
          }
          function it2(e3) {
            const r3 = n2.get(e3), s3 = true === e3.isWebGLCubeRenderTarget;
            if (e3.depthTexture && !r3.__autoAllocateDepthBuffer) {
              if (s3)
                throw new Error("target.depthTexture not supported in Cube render targets");
              !function(e4, r4) {
                if (r4 && r4.isWebGLCubeRenderTarget)
                  throw new Error("Depth Texture with cube render targets is not supported");
                if (i2.bindFramebuffer(36160, e4), !r4.depthTexture || !r4.depthTexture.isDepthTexture)
                  throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                n2.get(r4.depthTexture).__webglTexture && r4.depthTexture.image.width === r4.width && r4.depthTexture.image.height === r4.height || (r4.depthTexture.image.width = r4.width, r4.depthTexture.image.height = r4.height, r4.depthTexture.needsUpdate = true), Y2(r4.depthTexture, 0);
                const s4 = n2.get(r4.depthTexture).__webglTexture, a3 = nt2(r4);
                if (r4.depthTexture.format === T)
                  rt2(r4) ? R2.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, s4, 0, a3) : t2.framebufferTexture2D(36160, 36096, 3553, s4, 0);
                else {
                  if (r4.depthTexture.format !== A)
                    throw new Error("Unknown depthTexture format");
                  rt2(r4) ? R2.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, s4, 0, a3) : t2.framebufferTexture2D(36160, 33306, 3553, s4, 0);
                }
              }(r3.__webglFramebuffer, e3);
            } else if (s3) {
              r3.__webglDepthbuffer = [];
              for (let n3 = 0; n3 < 6; n3++)
                i2.bindFramebuffer(36160, r3.__webglFramebuffer[n3]), r3.__webglDepthbuffer[n3] = t2.createRenderbuffer(), et2(r3.__webglDepthbuffer[n3], e3, false);
            } else
              i2.bindFramebuffer(36160, r3.__webglFramebuffer), r3.__webglDepthbuffer = t2.createRenderbuffer(), et2(r3.__webglDepthbuffer, e3, false);
            i2.bindFramebuffer(36160, null);
          }
          function nt2(t3) {
            return Math.min(L2, t3.samples);
          }
          function rt2(t3) {
            const i3 = n2.get(t3);
            return o2 && t3.samples > 0 && true === e2.has("WEBGL_multisampled_render_to_texture") && false !== i3.__useRenderToTexture;
          }
          function st2(t3, i3) {
            const n3 = t3.encoding, r3 = t3.format, s3 = t3.type;
            return true === t3.isCompressedTexture || true === t3.isVideoTexture || t3.format === pt || n3 !== at && (n3 === ot ? false === o2 ? true === e2.has("EXT_sRGB") && r3 === w ? (t3.format = pt, t3.minFilter = f, t3.generateMipmaps = false) : i3 = Xt.sRGBToLinear(i3) : r3 === w && s3 === x || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture encoding:", n3)), i3;
          }
          this.allocateTextureUnit = function() {
            const t3 = X2;
            return t3 >= l2 && console.warn("THREE.WebGLTextures: Trying to use " + t3 + " texture units while this GPU supports only " + l2), X2 += 1, t3;
          }, this.resetTextureUnits = function() {
            X2 = 0;
          }, this.setTexture2D = Y2, this.setTexture2DArray = function(t3, e3) {
            const r3 = n2.get(t3);
            t3.version > 0 && r3.__version !== t3.version ? Q2(r3, t3, e3) : i2.bindTexture(35866, r3.__webglTexture, 33984 + e3);
          }, this.setTexture3D = function(t3, e3) {
            const r3 = n2.get(t3);
            t3.version > 0 && r3.__version !== t3.version ? Q2(r3, t3, e3) : i2.bindTexture(32879, r3.__webglTexture, 33984 + e3);
          }, this.setTextureCube = function(e3, r3) {
            const a3 = n2.get(e3);
            e3.version > 0 && a3.__version !== e3.version ? function(e4, r4, a4) {
              if (6 !== r4.image.length)
                return;
              const l3 = $2(e4, r4), c2 = r4.source;
              i2.bindTexture(34067, e4.__webglTexture, 33984 + a4);
              const h2 = n2.get(c2);
              if (c2.version !== h2.__version || true === l3) {
                i2.activeTexture(33984 + a4), t2.pixelStorei(37440, r4.flipY), t2.pixelStorei(37441, r4.premultiplyAlpha), t2.pixelStorei(3317, r4.unpackAlignment), t2.pixelStorei(37443, 0);
                const e5 = r4.isCompressedTexture || r4.image[0].isCompressedTexture, n3 = r4.image[0] && r4.image[0].isDataTexture, u2 = [];
                for (let t3 = 0; t3 < 6; t3++)
                  u2[t3] = e5 || n3 ? n3 ? r4.image[t3].image : r4.image[t3] : U2(r4.image[t3], false, true, E2), u2[t3] = st2(r4, u2[t3]);
                const d2 = u2[0], p2 = B2(d2) || o2, m2 = s2.convert(r4.format, r4.encoding), f2 = s2.convert(r4.type), g2 = G2(r4.internalFormat, m2, f2, r4.encoding), v2 = o2 && true !== r4.isVideoTexture, x2 = void 0 === h2.__version || true === l3;
                let _2, y2 = V2(r4, d2, p2);
                if (K2(34067, r4, p2), e5) {
                  v2 && x2 && i2.texStorage2D(34067, y2, g2, d2.width, d2.height);
                  for (let t3 = 0; t3 < 6; t3++) {
                    _2 = u2[t3].mipmaps;
                    for (let e6 = 0; e6 < _2.length; e6++) {
                      const n4 = _2[e6];
                      r4.format !== w ? null !== m2 ? v2 ? i2.compressedTexSubImage2D(34069 + t3, e6, 0, 0, n4.width, n4.height, m2, n4.data) : i2.compressedTexImage2D(34069 + t3, e6, g2, n4.width, n4.height, 0, n4.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : v2 ? i2.texSubImage2D(34069 + t3, e6, 0, 0, n4.width, n4.height, m2, f2, n4.data) : i2.texImage2D(34069 + t3, e6, g2, n4.width, n4.height, 0, m2, f2, n4.data);
                    }
                  }
                } else {
                  _2 = r4.mipmaps, v2 && x2 && (_2.length > 0 && y2++, i2.texStorage2D(34067, y2, g2, u2[0].width, u2[0].height));
                  for (let t3 = 0; t3 < 6; t3++)
                    if (n3) {
                      v2 ? i2.texSubImage2D(34069 + t3, 0, 0, 0, u2[t3].width, u2[t3].height, m2, f2, u2[t3].data) : i2.texImage2D(34069 + t3, 0, g2, u2[t3].width, u2[t3].height, 0, m2, f2, u2[t3].data);
                      for (let e6 = 0; e6 < _2.length; e6++) {
                        const n4 = _2[e6].image[t3].image;
                        v2 ? i2.texSubImage2D(34069 + t3, e6 + 1, 0, 0, n4.width, n4.height, m2, f2, n4.data) : i2.texImage2D(34069 + t3, e6 + 1, g2, n4.width, n4.height, 0, m2, f2, n4.data);
                      }
                    } else {
                      v2 ? i2.texSubImage2D(34069 + t3, 0, 0, 0, m2, f2, u2[t3]) : i2.texImage2D(34069 + t3, 0, g2, m2, f2, u2[t3]);
                      for (let e6 = 0; e6 < _2.length; e6++) {
                        const n4 = _2[e6];
                        v2 ? i2.texSubImage2D(34069 + t3, e6 + 1, 0, 0, m2, f2, n4.image[t3]) : i2.texImage2D(34069 + t3, e6 + 1, g2, m2, f2, n4.image[t3]);
                      }
                    }
                }
                F2(r4, p2) && k2(34067), h2.__version = c2.version, r4.onUpdate && r4.onUpdate(r4);
              }
              e4.__version = r4.version;
            }(a3, e3, r3) : i2.bindTexture(34067, a3.__webglTexture, 33984 + r3);
          }, this.rebindTextures = function(t3, e3, i3) {
            const r3 = n2.get(t3);
            void 0 !== e3 && tt2(r3.__webglFramebuffer, t3, t3.texture, 36064, 3553), void 0 !== i3 && it2(t3);
          }, this.setupRenderTarget = function(e3) {
            const l3 = e3.texture, c2 = n2.get(e3), h2 = n2.get(l3);
            e3.addEventListener("dispose", j2), true !== e3.isWebGLMultipleRenderTargets && (void 0 === h2.__webglTexture && (h2.__webglTexture = t2.createTexture()), h2.__version = l3.version, a2.memory.textures++);
            const u2 = true === e3.isWebGLCubeRenderTarget, d2 = true === e3.isWebGLMultipleRenderTargets, p2 = B2(e3) || o2;
            if (u2) {
              c2.__webglFramebuffer = [];
              for (let e4 = 0; e4 < 6; e4++)
                c2.__webglFramebuffer[e4] = t2.createFramebuffer();
            } else {
              if (c2.__webglFramebuffer = t2.createFramebuffer(), d2)
                if (r2.drawBuffers) {
                  const i3 = e3.texture;
                  for (let e4 = 0, r3 = i3.length; e4 < r3; e4++) {
                    const r4 = n2.get(i3[e4]);
                    void 0 === r4.__webglTexture && (r4.__webglTexture = t2.createTexture(), a2.memory.textures++);
                  }
                } else
                  console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
              if (o2 && e3.samples > 0 && false === rt2(e3)) {
                const n3 = d2 ? l3 : [l3];
                c2.__webglMultisampledFramebuffer = t2.createFramebuffer(), c2.__webglColorRenderbuffer = [], i2.bindFramebuffer(36160, c2.__webglMultisampledFramebuffer);
                for (let i3 = 0; i3 < n3.length; i3++) {
                  const r3 = n3[i3];
                  c2.__webglColorRenderbuffer[i3] = t2.createRenderbuffer(), t2.bindRenderbuffer(36161, c2.__webglColorRenderbuffer[i3]);
                  const a3 = s2.convert(r3.format, r3.encoding), o3 = s2.convert(r3.type), l4 = G2(r3.internalFormat, a3, o3, r3.encoding, true === e3.isXRRenderTarget), h3 = nt2(e3);
                  t2.renderbufferStorageMultisample(36161, h3, l4, e3.width, e3.height), t2.framebufferRenderbuffer(36160, 36064 + i3, 36161, c2.__webglColorRenderbuffer[i3]);
                }
                t2.bindRenderbuffer(36161, null), e3.depthBuffer && (c2.__webglDepthRenderbuffer = t2.createRenderbuffer(), et2(c2.__webglDepthRenderbuffer, e3, true)), i2.bindFramebuffer(36160, null);
              }
            }
            if (u2) {
              i2.bindTexture(34067, h2.__webglTexture), K2(34067, l3, p2);
              for (let t3 = 0; t3 < 6; t3++)
                tt2(c2.__webglFramebuffer[t3], e3, l3, 36064, 34069 + t3);
              F2(l3, p2) && k2(34067), i2.unbindTexture();
            } else if (d2) {
              const t3 = e3.texture;
              for (let r3 = 0, s3 = t3.length; r3 < s3; r3++) {
                const s4 = t3[r3], a3 = n2.get(s4);
                i2.bindTexture(3553, a3.__webglTexture), K2(3553, s4, p2), tt2(c2.__webglFramebuffer, e3, s4, 36064 + r3, 3553), F2(s4, p2) && k2(3553);
              }
              i2.unbindTexture();
            } else {
              let t3 = 3553;
              (e3.isWebGL3DRenderTarget || e3.isWebGLArrayRenderTarget) && (o2 ? t3 = e3.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), i2.bindTexture(t3, h2.__webglTexture), K2(t3, l3, p2), tt2(c2.__webglFramebuffer, e3, l3, 36064, t3), F2(l3, p2) && k2(t3), i2.unbindTexture();
            }
            e3.depthBuffer && it2(e3);
          }, this.updateRenderTargetMipmap = function(t3) {
            const e3 = B2(t3) || o2, r3 = true === t3.isWebGLMultipleRenderTargets ? t3.texture : [t3.texture];
            for (let s3 = 0, a3 = r3.length; s3 < a3; s3++) {
              const a4 = r3[s3];
              if (F2(a4, e3)) {
                const e4 = t3.isWebGLCubeRenderTarget ? 34067 : 3553, r4 = n2.get(a4).__webglTexture;
                i2.bindTexture(e4, r4), k2(e4), i2.unbindTexture();
              }
            }
          }, this.updateMultisampleRenderTarget = function(e3) {
            if (o2 && e3.samples > 0 && false === rt2(e3)) {
              const r3 = e3.isWebGLMultipleRenderTargets ? e3.texture : [e3.texture], s3 = e3.width, a3 = e3.height;
              let o3 = 16384;
              const l3 = [], c2 = e3.stencilBuffer ? 33306 : 36096, h2 = n2.get(e3), u2 = true === e3.isWebGLMultipleRenderTargets;
              if (u2)
                for (let e4 = 0; e4 < r3.length; e4++)
                  i2.bindFramebuffer(36160, h2.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(36160, 36064 + e4, 36161, null), i2.bindFramebuffer(36160, h2.__webglFramebuffer), t2.framebufferTexture2D(36009, 36064 + e4, 3553, null, 0);
              i2.bindFramebuffer(36008, h2.__webglMultisampledFramebuffer), i2.bindFramebuffer(36009, h2.__webglFramebuffer);
              for (let i3 = 0; i3 < r3.length; i3++) {
                l3.push(36064 + i3), e3.depthBuffer && l3.push(c2);
                const d2 = void 0 !== h2.__ignoreDepthValues && h2.__ignoreDepthValues;
                if (false === d2 && (e3.depthBuffer && (o3 |= 256), e3.stencilBuffer && (o3 |= 1024)), u2 && t2.framebufferRenderbuffer(36008, 36064, 36161, h2.__webglColorRenderbuffer[i3]), true === d2 && (t2.invalidateFramebuffer(36008, [c2]), t2.invalidateFramebuffer(36009, [c2])), u2) {
                  const e4 = n2.get(r3[i3]).__webglTexture;
                  t2.framebufferTexture2D(36009, 36064, 3553, e4, 0);
                }
                t2.blitFramebuffer(0, 0, s3, a3, 0, 0, s3, a3, o3, 9728), P2 && t2.invalidateFramebuffer(36008, l3);
              }
              if (i2.bindFramebuffer(36008, null), i2.bindFramebuffer(36009, null), u2)
                for (let e4 = 0; e4 < r3.length; e4++) {
                  i2.bindFramebuffer(36160, h2.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(36160, 36064 + e4, 36161, h2.__webglColorRenderbuffer[e4]);
                  const s4 = n2.get(r3[e4]).__webglTexture;
                  i2.bindFramebuffer(36160, h2.__webglFramebuffer), t2.framebufferTexture2D(36009, 36064 + e4, 3553, s4, 0);
                }
              i2.bindFramebuffer(36009, h2.__webglMultisampledFramebuffer);
            }
          }, this.setupDepthRenderbuffer = it2, this.setupFrameBufferTexture = tt2, this.useMultisampledRTT = rt2;
        }
        function ks(t2, e2, i2) {
          const n2 = i2.isWebGL2;
          return { convert: function(i3, r2 = null) {
            let s2;
            if (i3 === x)
              return 5121;
            if (1017 === i3)
              return 32819;
            if (1018 === i3)
              return 32820;
            if (1010 === i3)
              return 5120;
            if (1011 === i3)
              return 5122;
            if (i3 === _)
              return 5123;
            if (1013 === i3)
              return 5124;
            if (i3 === y)
              return 5125;
            if (i3 === M)
              return 5126;
            if (i3 === b)
              return n2 ? 5131 : (s2 = e2.get("OES_texture_half_float"), null !== s2 ? s2.HALF_FLOAT_OES : null);
            if (1021 === i3)
              return 6406;
            if (i3 === w)
              return 6408;
            if (1024 === i3)
              return 6409;
            if (1025 === i3)
              return 6410;
            if (i3 === T)
              return 6402;
            if (i3 === A)
              return 34041;
            if (1028 === i3)
              return 6403;
            if (1022 === i3)
              return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"), 6408;
            if (i3 === pt)
              return s2 = e2.get("EXT_sRGB"), null !== s2 ? s2.SRGB_ALPHA_EXT : null;
            if (1029 === i3)
              return 36244;
            if (1030 === i3)
              return 33319;
            if (1031 === i3)
              return 33320;
            if (1033 === i3)
              return 36249;
            if (i3 === E || i3 === C || i3 === L || i3 === R)
              if (r2 === ot) {
                if (s2 = e2.get("WEBGL_compressed_texture_s3tc_srgb"), null === s2)
                  return null;
                if (i3 === E)
                  return s2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                if (i3 === C)
                  return s2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                if (i3 === L)
                  return s2.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                if (i3 === R)
                  return s2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
              } else {
                if (s2 = e2.get("WEBGL_compressed_texture_s3tc"), null === s2)
                  return null;
                if (i3 === E)
                  return s2.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (i3 === C)
                  return s2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (i3 === L)
                  return s2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (i3 === R)
                  return s2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              }
            if (i3 === P || i3 === I || i3 === D || i3 === N) {
              if (s2 = e2.get("WEBGL_compressed_texture_pvrtc"), null === s2)
                return null;
              if (i3 === P)
                return s2.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
              if (i3 === I)
                return s2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
              if (i3 === D)
                return s2.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
              if (i3 === N)
                return s2.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
            }
            if (36196 === i3)
              return s2 = e2.get("WEBGL_compressed_texture_etc1"), null !== s2 ? s2.COMPRESSED_RGB_ETC1_WEBGL : null;
            if (i3 === O || i3 === z) {
              if (s2 = e2.get("WEBGL_compressed_texture_etc"), null === s2)
                return null;
              if (i3 === O)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ETC2 : s2.COMPRESSED_RGB8_ETC2;
              if (i3 === z)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s2.COMPRESSED_RGBA8_ETC2_EAC;
            }
            if (i3 === U || i3 === B || i3 === F || i3 === k || i3 === G || i3 === V || i3 === H || i3 === W || i3 === j || i3 === q || i3 === X || i3 === Y || i3 === Z || i3 === J) {
              if (s2 = e2.get("WEBGL_compressed_texture_astc"), null === s2)
                return null;
              if (i3 === U)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s2.COMPRESSED_RGBA_ASTC_4x4_KHR;
              if (i3 === B)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s2.COMPRESSED_RGBA_ASTC_5x4_KHR;
              if (i3 === F)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s2.COMPRESSED_RGBA_ASTC_5x5_KHR;
              if (i3 === k)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s2.COMPRESSED_RGBA_ASTC_6x5_KHR;
              if (i3 === G)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s2.COMPRESSED_RGBA_ASTC_6x6_KHR;
              if (i3 === V)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s2.COMPRESSED_RGBA_ASTC_8x5_KHR;
              if (i3 === H)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s2.COMPRESSED_RGBA_ASTC_8x6_KHR;
              if (i3 === W)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s2.COMPRESSED_RGBA_ASTC_8x8_KHR;
              if (i3 === j)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s2.COMPRESSED_RGBA_ASTC_10x5_KHR;
              if (i3 === q)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s2.COMPRESSED_RGBA_ASTC_10x6_KHR;
              if (i3 === X)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s2.COMPRESSED_RGBA_ASTC_10x8_KHR;
              if (i3 === Y)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s2.COMPRESSED_RGBA_ASTC_10x10_KHR;
              if (i3 === Z)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s2.COMPRESSED_RGBA_ASTC_12x10_KHR;
              if (i3 === J)
                return r2 === ot ? s2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s2.COMPRESSED_RGBA_ASTC_12x12_KHR;
            }
            if (i3 === K) {
              if (s2 = e2.get("EXT_texture_compression_bptc"), null === s2)
                return null;
              if (i3 === K)
                return r2 === ot ? s2.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s2.COMPRESSED_RGBA_BPTC_UNORM_EXT;
            }
            return i3 === S ? n2 ? 34042 : (s2 = e2.get("WEBGL_depth_texture"), null !== s2 ? s2.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t2[i3] ? t2[i3] : null;
          } };
        }
        class Gs extends an {
          constructor(t2 = []) {
            super(), this.isArrayCamera = true, this.cameras = t2;
          }
        }
        class Vs extends si {
          constructor() {
            super(), this.isGroup = true, this.type = "Group";
          }
        }
        const Hs = { type: "move" };
        class Ws {
          constructor() {
            this._targetRay = null, this._grip = null, this._hand = null;
          }
          getHandSpace() {
            return null === this._hand && (this._hand = new Vs(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
          }
          getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new Vs(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new ne(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new ne()), this._targetRay;
          }
          getGripSpace() {
            return null === this._grip && (this._grip = new Vs(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new ne(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new ne()), this._grip;
          }
          dispatchEvent(t2) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
          }
          disconnect(t2) {
            return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
          }
          update(t2, e2, i2) {
            let n2 = null, r2 = null, s2 = null;
            const a2 = this._targetRay, o2 = this._grip, l2 = this._hand;
            if (t2 && "visible-blurred" !== e2.session.visibilityState) {
              if (l2 && t2.hand) {
                s2 = true;
                for (const n4 of t2.hand.values()) {
                  const t3 = e2.getJointPose(n4, i2);
                  if (void 0 === l2.joints[n4.jointName]) {
                    const t4 = new Vs();
                    t4.matrixAutoUpdate = false, t4.visible = false, l2.joints[n4.jointName] = t4, l2.add(t4);
                  }
                  const r4 = l2.joints[n4.jointName];
                  null !== t3 && (r4.matrix.fromArray(t3.transform.matrix), r4.matrix.decompose(r4.position, r4.rotation, r4.scale), r4.jointRadius = t3.radius), r4.visible = null !== t3;
                }
                const n3 = l2.joints["index-finger-tip"], r3 = l2.joints["thumb-tip"], a3 = n3.position.distanceTo(r3.position), o3 = 0.02, c2 = 5e-3;
                l2.inputState.pinching && a3 > o3 + c2 ? (l2.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !l2.inputState.pinching && a3 <= o3 - c2 && (l2.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
              } else
                null !== o2 && t2.gripSpace && (r2 = e2.getPose(t2.gripSpace, i2), null !== r2 && (o2.matrix.fromArray(r2.transform.matrix), o2.matrix.decompose(o2.position, o2.rotation, o2.scale), r2.linearVelocity ? (o2.hasLinearVelocity = true, o2.linearVelocity.copy(r2.linearVelocity)) : o2.hasLinearVelocity = false, r2.angularVelocity ? (o2.hasAngularVelocity = true, o2.angularVelocity.copy(r2.angularVelocity)) : o2.hasAngularVelocity = false));
              null !== a2 && (n2 = e2.getPose(t2.targetRaySpace, i2), null === n2 && null !== r2 && (n2 = r2), null !== n2 && (a2.matrix.fromArray(n2.transform.matrix), a2.matrix.decompose(a2.position, a2.rotation, a2.scale), n2.linearVelocity ? (a2.hasLinearVelocity = true, a2.linearVelocity.copy(n2.linearVelocity)) : a2.hasLinearVelocity = false, n2.angularVelocity ? (a2.hasAngularVelocity = true, a2.angularVelocity.copy(n2.angularVelocity)) : a2.hasAngularVelocity = false, this.dispatchEvent(Hs)));
            }
            return null !== a2 && (a2.visible = null !== n2), null !== o2 && (o2.visible = null !== r2), null !== l2 && (l2.visible = null !== s2), this;
          }
        }
        class js extends Kt {
          constructor(t2, e2, i2, n2, r2, s2, a2, o2, l2, c2) {
            if ((c2 = void 0 !== c2 ? c2 : T) !== T && c2 !== A)
              throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === i2 && c2 === T && (i2 = y), void 0 === i2 && c2 === A && (i2 = S), super(null, n2, r2, s2, a2, o2, c2, i2, l2), this.isDepthTexture = true, this.image = { width: t2, height: e2 }, this.magFilter = void 0 !== a2 ? a2 : d, this.minFilter = void 0 !== o2 ? o2 : d, this.flipY = false, this.generateMipmaps = false;
          }
        }
        class qs extends mt {
          constructor(t2, e2) {
            super();
            const i2 = this;
            let n2 = null, r2 = 1, s2 = null, a2 = "local-floor", o2 = null, l2 = null, c2 = null, h2 = null, u2 = null, d2 = null;
            const p2 = e2.getContextAttributes();
            let m2 = null, f2 = null;
            const g2 = [], v2 = [], _2 = new an();
            _2.layers.enable(1), _2.viewport = new $t();
            const M2 = new an();
            M2.layers.enable(2), M2.viewport = new $t();
            const b2 = [_2, M2], E2 = new Gs();
            E2.layers.enable(1), E2.layers.enable(2);
            let C2 = null, L2 = null;
            function R2(t3) {
              const e3 = v2.indexOf(t3.inputSource);
              if (-1 === e3)
                return;
              const i3 = g2[e3];
              void 0 !== i3 && i3.dispatchEvent({ type: t3.type, data: t3.inputSource });
            }
            function P2() {
              n2.removeEventListener("select", R2), n2.removeEventListener("selectstart", R2), n2.removeEventListener("selectend", R2), n2.removeEventListener("squeeze", R2), n2.removeEventListener("squeezestart", R2), n2.removeEventListener("squeezeend", R2), n2.removeEventListener("end", P2), n2.removeEventListener("inputsourceschange", I2);
              for (let t3 = 0; t3 < g2.length; t3++) {
                const e3 = v2[t3];
                null !== e3 && (v2[t3] = null, g2[t3].disconnect(e3));
              }
              C2 = null, L2 = null, t2.setRenderTarget(m2), u2 = null, h2 = null, c2 = null, n2 = null, f2 = null, U2.stop(), i2.isPresenting = false, i2.dispatchEvent({ type: "sessionend" });
            }
            function I2(t3) {
              for (let e3 = 0; e3 < t3.removed.length; e3++) {
                const i3 = t3.removed[e3], n3 = v2.indexOf(i3);
                n3 >= 0 && (v2[n3] = null, g2[n3].dispatchEvent({ type: "disconnected", data: i3 }));
              }
              for (let e3 = 0; e3 < t3.added.length; e3++) {
                const i3 = t3.added[e3];
                let n3 = v2.indexOf(i3);
                if (-1 === n3) {
                  for (let t4 = 0; t4 < g2.length; t4++) {
                    if (t4 >= v2.length) {
                      v2.push(i3), n3 = t4;
                      break;
                    }
                    if (null === v2[t4]) {
                      v2[t4] = i3, n3 = t4;
                      break;
                    }
                  }
                  if (-1 === n3)
                    break;
                }
                const r3 = g2[n3];
                r3 && r3.dispatchEvent({ type: "connected", data: i3 });
              }
            }
            this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(t3) {
              let e3 = g2[t3];
              return void 0 === e3 && (e3 = new Ws(), g2[t3] = e3), e3.getTargetRaySpace();
            }, this.getControllerGrip = function(t3) {
              let e3 = g2[t3];
              return void 0 === e3 && (e3 = new Ws(), g2[t3] = e3), e3.getGripSpace();
            }, this.getHand = function(t3) {
              let e3 = g2[t3];
              return void 0 === e3 && (e3 = new Ws(), g2[t3] = e3), e3.getHandSpace();
            }, this.setFramebufferScaleFactor = function(t3) {
              r2 = t3, true === i2.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
            }, this.setReferenceSpaceType = function(t3) {
              a2 = t3, true === i2.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
            }, this.getReferenceSpace = function() {
              return o2 || s2;
            }, this.setReferenceSpace = function(t3) {
              o2 = t3;
            }, this.getBaseLayer = function() {
              return null !== h2 ? h2 : u2;
            }, this.getBinding = function() {
              return c2;
            }, this.getFrame = function() {
              return d2;
            }, this.getSession = function() {
              return n2;
            }, this.setSession = async function(l3) {
              if (n2 = l3, null !== n2) {
                if (m2 = t2.getRenderTarget(), n2.addEventListener("select", R2), n2.addEventListener("selectstart", R2), n2.addEventListener("selectend", R2), n2.addEventListener("squeeze", R2), n2.addEventListener("squeezestart", R2), n2.addEventListener("squeezeend", R2), n2.addEventListener("end", P2), n2.addEventListener("inputsourceschange", I2), true !== p2.xrCompatible && await e2.makeXRCompatible(), void 0 === n2.renderState.layers || false === t2.capabilities.isWebGL2) {
                  const i3 = { antialias: void 0 !== n2.renderState.layers || p2.antialias, alpha: p2.alpha, depth: p2.depth, stencil: p2.stencil, framebufferScaleFactor: r2 };
                  u2 = new XRWebGLLayer(n2, e2, i3), n2.updateRenderState({ baseLayer: u2 }), f2 = new Qt(u2.framebufferWidth, u2.framebufferHeight, { format: w, type: x, encoding: t2.outputEncoding, stencilBuffer: p2.stencil });
                } else {
                  let i3 = null, s3 = null, a3 = null;
                  p2.depth && (a3 = p2.stencil ? 35056 : 33190, i3 = p2.stencil ? A : T, s3 = p2.stencil ? S : y);
                  const o3 = { colorFormat: 32856, depthFormat: a3, scaleFactor: r2 };
                  c2 = new XRWebGLBinding(n2, e2), h2 = c2.createProjectionLayer(o3), n2.updateRenderState({ layers: [h2] }), f2 = new Qt(h2.textureWidth, h2.textureHeight, { format: w, type: x, depthTexture: new js(h2.textureWidth, h2.textureHeight, s3, void 0, void 0, void 0, void 0, void 0, void 0, i3), stencilBuffer: p2.stencil, encoding: t2.outputEncoding, samples: p2.antialias ? 4 : 0 });
                  t2.properties.get(f2).__ignoreDepthValues = h2.ignoreDepthValues;
                }
                f2.isXRRenderTarget = true, this.setFoveation(1), o2 = null, s2 = await n2.requestReferenceSpace(a2), U2.setContext(n2), U2.start(), i2.isPresenting = true, i2.dispatchEvent({ type: "sessionstart" });
              }
            };
            const D2 = new ne(), N2 = new ne();
            function O2(t3, e3) {
              null === e3 ? t3.matrixWorld.copy(t3.matrix) : t3.matrixWorld.multiplyMatrices(e3.matrixWorld, t3.matrix), t3.matrixWorldInverse.copy(t3.matrixWorld).invert();
            }
            this.updateCamera = function(t3) {
              if (null === n2)
                return;
              E2.near = M2.near = _2.near = t3.near, E2.far = M2.far = _2.far = t3.far, C2 === E2.near && L2 === E2.far || (n2.updateRenderState({ depthNear: E2.near, depthFar: E2.far }), C2 = E2.near, L2 = E2.far);
              const e3 = t3.parent, i3 = E2.cameras;
              O2(E2, e3);
              for (let t4 = 0; t4 < i3.length; t4++)
                O2(i3[t4], e3);
              E2.matrixWorld.decompose(E2.position, E2.quaternion, E2.scale), t3.matrix.copy(E2.matrix), t3.matrix.decompose(t3.position, t3.quaternion, t3.scale);
              const r3 = t3.children;
              for (let t4 = 0, e4 = r3.length; t4 < e4; t4++)
                r3[t4].updateMatrixWorld(true);
              2 === i3.length ? function(t4, e4, i4) {
                D2.setFromMatrixPosition(e4.matrixWorld), N2.setFromMatrixPosition(i4.matrixWorld);
                const n3 = D2.distanceTo(N2), r4 = e4.projectionMatrix.elements, s3 = i4.projectionMatrix.elements, a3 = r4[14] / (r4[10] - 1), o3 = r4[14] / (r4[10] + 1), l3 = (r4[9] + 1) / r4[5], c3 = (r4[9] - 1) / r4[5], h3 = (r4[8] - 1) / r4[0], u3 = (s3[8] + 1) / s3[0], d3 = a3 * h3, p3 = a3 * u3, m3 = n3 / (-h3 + u3), f3 = m3 * -h3;
                e4.matrixWorld.decompose(t4.position, t4.quaternion, t4.scale), t4.translateX(f3), t4.translateZ(m3), t4.matrixWorld.compose(t4.position, t4.quaternion, t4.scale), t4.matrixWorldInverse.copy(t4.matrixWorld).invert();
                const g3 = a3 + m3, v3 = o3 + m3, x2 = d3 - f3, _3 = p3 + (n3 - f3), y2 = l3 * o3 / v3 * g3, M3 = c3 * o3 / v3 * g3;
                t4.projectionMatrix.makePerspective(x2, _3, y2, M3, g3, v3);
              }(E2, _2, M2) : E2.projectionMatrix.copy(_2.projectionMatrix);
            }, this.getCamera = function() {
              return E2;
            }, this.getFoveation = function() {
              return null !== h2 ? h2.fixedFoveation : null !== u2 ? u2.fixedFoveation : void 0;
            }, this.setFoveation = function(t3) {
              null !== h2 && (h2.fixedFoveation = t3), null !== u2 && void 0 !== u2.fixedFoveation && (u2.fixedFoveation = t3);
            };
            let z2 = null;
            const U2 = new xn();
            U2.setAnimationLoop(function(e3, i3) {
              if (l2 = i3.getViewerPose(o2 || s2), d2 = i3, null !== l2) {
                const e4 = l2.views;
                null !== u2 && (t2.setRenderTargetFramebuffer(f2, u2.framebuffer), t2.setRenderTarget(f2));
                let i4 = false;
                e4.length !== E2.cameras.length && (E2.cameras.length = 0, i4 = true);
                for (let n3 = 0; n3 < e4.length; n3++) {
                  const r3 = e4[n3];
                  let s3 = null;
                  if (null !== u2)
                    s3 = u2.getViewport(r3);
                  else {
                    const e5 = c2.getViewSubImage(h2, r3);
                    s3 = e5.viewport, 0 === n3 && (t2.setRenderTargetTextures(f2, e5.colorTexture, h2.ignoreDepthValues ? void 0 : e5.depthStencilTexture), t2.setRenderTarget(f2));
                  }
                  let a3 = b2[n3];
                  void 0 === a3 && (a3 = new an(), a3.layers.enable(n3), a3.viewport = new $t(), b2[n3] = a3), a3.matrix.fromArray(r3.transform.matrix), a3.projectionMatrix.fromArray(r3.projectionMatrix), a3.viewport.set(s3.x, s3.y, s3.width, s3.height), 0 === n3 && E2.matrix.copy(a3.matrix), true === i4 && E2.cameras.push(a3);
                }
              }
              for (let t3 = 0; t3 < g2.length; t3++) {
                const e4 = v2[t3], n3 = g2[t3];
                null !== e4 && void 0 !== n3 && n3.update(e4, i3, o2 || s2);
              }
              z2 && z2(e3, i3), d2 = null;
            }), this.setAnimationLoop = function(t3) {
              z2 = t3;
            }, this.dispose = function() {
            };
          }
        }
        function Xs(t2, e2) {
          function i2(i3, n2) {
            i3.opacity.value = n2.opacity, n2.color && i3.diffuse.value.copy(n2.color), n2.emissive && i3.emissive.value.copy(n2.emissive).multiplyScalar(n2.emissiveIntensity), n2.map && (i3.map.value = n2.map), n2.alphaMap && (i3.alphaMap.value = n2.alphaMap), n2.bumpMap && (i3.bumpMap.value = n2.bumpMap, i3.bumpScale.value = n2.bumpScale, 1 === n2.side && (i3.bumpScale.value *= -1)), n2.displacementMap && (i3.displacementMap.value = n2.displacementMap, i3.displacementScale.value = n2.displacementScale, i3.displacementBias.value = n2.displacementBias), n2.emissiveMap && (i3.emissiveMap.value = n2.emissiveMap), n2.normalMap && (i3.normalMap.value = n2.normalMap, i3.normalScale.value.copy(n2.normalScale), 1 === n2.side && i3.normalScale.value.negate()), n2.specularMap && (i3.specularMap.value = n2.specularMap), n2.alphaTest > 0 && (i3.alphaTest.value = n2.alphaTest);
            const r2 = e2.get(n2).envMap;
            if (r2 && (i3.envMap.value = r2, i3.flipEnvMap.value = r2.isCubeTexture && false === r2.isRenderTargetTexture ? -1 : 1, i3.reflectivity.value = n2.reflectivity, i3.ior.value = n2.ior, i3.refractionRatio.value = n2.refractionRatio), n2.lightMap) {
              i3.lightMap.value = n2.lightMap;
              const e3 = true !== t2.physicallyCorrectLights ? Math.PI : 1;
              i3.lightMapIntensity.value = n2.lightMapIntensity * e3;
            }
            let s2, a2;
            n2.aoMap && (i3.aoMap.value = n2.aoMap, i3.aoMapIntensity.value = n2.aoMapIntensity), n2.map ? s2 = n2.map : n2.specularMap ? s2 = n2.specularMap : n2.displacementMap ? s2 = n2.displacementMap : n2.normalMap ? s2 = n2.normalMap : n2.bumpMap ? s2 = n2.bumpMap : n2.roughnessMap ? s2 = n2.roughnessMap : n2.metalnessMap ? s2 = n2.metalnessMap : n2.alphaMap ? s2 = n2.alphaMap : n2.emissiveMap ? s2 = n2.emissiveMap : n2.clearcoatMap ? s2 = n2.clearcoatMap : n2.clearcoatNormalMap ? s2 = n2.clearcoatNormalMap : n2.clearcoatRoughnessMap ? s2 = n2.clearcoatRoughnessMap : n2.iridescenceMap ? s2 = n2.iridescenceMap : n2.iridescenceThicknessMap ? s2 = n2.iridescenceThicknessMap : n2.specularIntensityMap ? s2 = n2.specularIntensityMap : n2.specularColorMap ? s2 = n2.specularColorMap : n2.transmissionMap ? s2 = n2.transmissionMap : n2.thicknessMap ? s2 = n2.thicknessMap : n2.sheenColorMap ? s2 = n2.sheenColorMap : n2.sheenRoughnessMap && (s2 = n2.sheenRoughnessMap), void 0 !== s2 && (s2.isWebGLRenderTarget && (s2 = s2.texture), true === s2.matrixAutoUpdate && s2.updateMatrix(), i3.uvTransform.value.copy(s2.matrix)), n2.aoMap ? a2 = n2.aoMap : n2.lightMap && (a2 = n2.lightMap), void 0 !== a2 && (a2.isWebGLRenderTarget && (a2 = a2.texture), true === a2.matrixAutoUpdate && a2.updateMatrix(), i3.uv2Transform.value.copy(a2.matrix));
          }
          return { refreshFogUniforms: function(t3, e3) {
            t3.fogColor.value.copy(e3.color), e3.isFog ? (t3.fogNear.value = e3.near, t3.fogFar.value = e3.far) : e3.isFogExp2 && (t3.fogDensity.value = e3.density);
          }, refreshMaterialUniforms: function(t3, n2, r2, s2, a2) {
            n2.isMeshBasicMaterial || n2.isMeshLambertMaterial ? i2(t3, n2) : n2.isMeshToonMaterial ? (i2(t3, n2), function(t4, e3) {
              e3.gradientMap && (t4.gradientMap.value = e3.gradientMap);
            }(t3, n2)) : n2.isMeshPhongMaterial ? (i2(t3, n2), function(t4, e3) {
              t4.specular.value.copy(e3.specular), t4.shininess.value = Math.max(e3.shininess, 1e-4);
            }(t3, n2)) : n2.isMeshStandardMaterial ? (i2(t3, n2), function(t4, i3) {
              t4.roughness.value = i3.roughness, t4.metalness.value = i3.metalness, i3.roughnessMap && (t4.roughnessMap.value = i3.roughnessMap);
              i3.metalnessMap && (t4.metalnessMap.value = i3.metalnessMap);
              e2.get(i3).envMap && (t4.envMapIntensity.value = i3.envMapIntensity);
            }(t3, n2), n2.isMeshPhysicalMaterial && function(t4, e3, i3) {
              t4.ior.value = e3.ior, e3.sheen > 0 && (t4.sheenColor.value.copy(e3.sheenColor).multiplyScalar(e3.sheen), t4.sheenRoughness.value = e3.sheenRoughness, e3.sheenColorMap && (t4.sheenColorMap.value = e3.sheenColorMap), e3.sheenRoughnessMap && (t4.sheenRoughnessMap.value = e3.sheenRoughnessMap));
              e3.clearcoat > 0 && (t4.clearcoat.value = e3.clearcoat, t4.clearcoatRoughness.value = e3.clearcoatRoughness, e3.clearcoatMap && (t4.clearcoatMap.value = e3.clearcoatMap), e3.clearcoatRoughnessMap && (t4.clearcoatRoughnessMap.value = e3.clearcoatRoughnessMap), e3.clearcoatNormalMap && (t4.clearcoatNormalScale.value.copy(e3.clearcoatNormalScale), t4.clearcoatNormalMap.value = e3.clearcoatNormalMap, 1 === e3.side && t4.clearcoatNormalScale.value.negate()));
              e3.iridescence > 0 && (t4.iridescence.value = e3.iridescence, t4.iridescenceIOR.value = e3.iridescenceIOR, t4.iridescenceThicknessMinimum.value = e3.iridescenceThicknessRange[0], t4.iridescenceThicknessMaximum.value = e3.iridescenceThicknessRange[1], e3.iridescenceMap && (t4.iridescenceMap.value = e3.iridescenceMap), e3.iridescenceThicknessMap && (t4.iridescenceThicknessMap.value = e3.iridescenceThicknessMap));
              e3.transmission > 0 && (t4.transmission.value = e3.transmission, t4.transmissionSamplerMap.value = i3.texture, t4.transmissionSamplerSize.value.set(i3.width, i3.height), e3.transmissionMap && (t4.transmissionMap.value = e3.transmissionMap), t4.thickness.value = e3.thickness, e3.thicknessMap && (t4.thicknessMap.value = e3.thicknessMap), t4.attenuationDistance.value = e3.attenuationDistance, t4.attenuationColor.value.copy(e3.attenuationColor));
              t4.specularIntensity.value = e3.specularIntensity, t4.specularColor.value.copy(e3.specularColor), e3.specularIntensityMap && (t4.specularIntensityMap.value = e3.specularIntensityMap);
              e3.specularColorMap && (t4.specularColorMap.value = e3.specularColorMap);
            }(t3, n2, a2)) : n2.isMeshMatcapMaterial ? (i2(t3, n2), function(t4, e3) {
              e3.matcap && (t4.matcap.value = e3.matcap);
            }(t3, n2)) : n2.isMeshDepthMaterial ? i2(t3, n2) : n2.isMeshDistanceMaterial ? (i2(t3, n2), function(t4, e3) {
              t4.referencePosition.value.copy(e3.referencePosition), t4.nearDistance.value = e3.nearDistance, t4.farDistance.value = e3.farDistance;
            }(t3, n2)) : n2.isMeshNormalMaterial ? i2(t3, n2) : n2.isLineBasicMaterial ? (function(t4, e3) {
              t4.diffuse.value.copy(e3.color), t4.opacity.value = e3.opacity;
            }(t3, n2), n2.isLineDashedMaterial && function(t4, e3) {
              t4.dashSize.value = e3.dashSize, t4.totalSize.value = e3.dashSize + e3.gapSize, t4.scale.value = e3.scale;
            }(t3, n2)) : n2.isPointsMaterial ? function(t4, e3, i3, n3) {
              t4.diffuse.value.copy(e3.color), t4.opacity.value = e3.opacity, t4.size.value = e3.size * i3, t4.scale.value = 0.5 * n3, e3.map && (t4.map.value = e3.map);
              e3.alphaMap && (t4.alphaMap.value = e3.alphaMap);
              e3.alphaTest > 0 && (t4.alphaTest.value = e3.alphaTest);
              let r3;
              e3.map ? r3 = e3.map : e3.alphaMap && (r3 = e3.alphaMap);
              void 0 !== r3 && (true === r3.matrixAutoUpdate && r3.updateMatrix(), t4.uvTransform.value.copy(r3.matrix));
            }(t3, n2, r2, s2) : n2.isSpriteMaterial ? function(t4, e3) {
              t4.diffuse.value.copy(e3.color), t4.opacity.value = e3.opacity, t4.rotation.value = e3.rotation, e3.map && (t4.map.value = e3.map);
              e3.alphaMap && (t4.alphaMap.value = e3.alphaMap);
              e3.alphaTest > 0 && (t4.alphaTest.value = e3.alphaTest);
              let i3;
              e3.map ? i3 = e3.map : e3.alphaMap && (i3 = e3.alphaMap);
              void 0 !== i3 && (true === i3.matrixAutoUpdate && i3.updateMatrix(), t4.uvTransform.value.copy(i3.matrix));
            }(t3, n2) : n2.isShadowMaterial ? (t3.color.value.copy(n2.color), t3.opacity.value = n2.opacity) : n2.isShaderMaterial && (n2.uniformsNeedUpdate = false);
          } };
        }
        function Ys(t2, e2, i2, n2) {
          let r2 = {}, s2 = {}, a2 = [];
          const o2 = i2.isWebGL2 ? t2.getParameter(35375) : 0;
          function l2(t3, e3, i3) {
            const n3 = t3.value;
            if (void 0 === i3[e3])
              return i3[e3] = "number" == typeof n3 ? n3 : n3.clone(), true;
            if ("number" == typeof n3) {
              if (i3[e3] !== n3)
                return i3[e3] = n3, true;
            } else {
              const t4 = i3[e3];
              if (false === t4.equals(n3))
                return t4.copy(n3), true;
            }
            return false;
          }
          function c2(t3) {
            const e3 = t3.value, i3 = { boundary: 0, storage: 0 };
            return "number" == typeof e3 ? (i3.boundary = 4, i3.storage = 4) : e3.isVector2 ? (i3.boundary = 8, i3.storage = 8) : e3.isVector3 || e3.isColor ? (i3.boundary = 16, i3.storage = 12) : e3.isVector4 ? (i3.boundary = 16, i3.storage = 16) : e3.isMatrix3 ? (i3.boundary = 48, i3.storage = 48) : e3.isMatrix4 ? (i3.boundary = 64, i3.storage = 64) : e3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e3), i3;
          }
          function h2(e3) {
            const i3 = e3.target;
            i3.removeEventListener("dispose", h2);
            const n3 = a2.indexOf(i3.__bindingPointIndex);
            a2.splice(n3, 1), t2.deleteBuffer(r2[i3.id]), delete r2[i3.id], delete s2[i3.id];
          }
          return { bind: function(t3, e3) {
            const i3 = e3.program;
            n2.uniformBlockBinding(t3, i3);
          }, update: function(i3, u2) {
            let d2 = r2[i3.id];
            void 0 === d2 && (!function(t3) {
              const e3 = t3.uniforms;
              let i4 = 0;
              const n3 = 16;
              let r3 = 0;
              for (let t4 = 0, s3 = e3.length; t4 < s3; t4++) {
                const s4 = e3[t4], a3 = c2(s4);
                if (s4.__data = new Float32Array(a3.storage / Float32Array.BYTES_PER_ELEMENT), s4.__offset = i4, t4 > 0) {
                  r3 = i4 % n3;
                  const t5 = n3 - r3;
                  0 !== r3 && t5 - a3.boundary < 0 && (i4 += n3 - r3, s4.__offset = i4);
                }
                i4 += a3.storage;
              }
              r3 = i4 % n3, r3 > 0 && (i4 += n3 - r3);
              t3.__size = i4, t3.__cache = {};
            }(i3), d2 = function(e3) {
              const i4 = function() {
                for (let t3 = 0; t3 < o2; t3++)
                  if (-1 === a2.indexOf(t3))
                    return a2.push(t3), t3;
                return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
              }();
              e3.__bindingPointIndex = i4;
              const n3 = t2.createBuffer(), r3 = e3.__size, s3 = e3.usage;
              return t2.bindBuffer(35345, n3), t2.bufferData(35345, r3, s3), t2.bindBuffer(35345, null), t2.bindBufferBase(35345, i4, n3), n3;
            }(i3), r2[i3.id] = d2, i3.addEventListener("dispose", h2));
            const p2 = u2.program;
            n2.updateUBOMapping(i3, p2);
            const m2 = e2.render.frame;
            s2[i3.id] !== m2 && (!function(e3) {
              const i4 = r2[e3.id], n3 = e3.uniforms, s3 = e3.__cache;
              t2.bindBuffer(35345, i4);
              for (let e4 = 0, i5 = n3.length; e4 < i5; e4++) {
                const i6 = n3[e4];
                if (true === l2(i6, e4, s3)) {
                  const e5 = i6.value, n4 = i6.__offset;
                  "number" == typeof e5 ? (i6.__data[0] = e5, t2.bufferSubData(35345, n4, i6.__data)) : (i6.value.isMatrix3 ? (i6.__data[0] = i6.value.elements[0], i6.__data[1] = i6.value.elements[1], i6.__data[2] = i6.value.elements[2], i6.__data[3] = i6.value.elements[0], i6.__data[4] = i6.value.elements[3], i6.__data[5] = i6.value.elements[4], i6.__data[6] = i6.value.elements[5], i6.__data[7] = i6.value.elements[0], i6.__data[8] = i6.value.elements[6], i6.__data[9] = i6.value.elements[7], i6.__data[10] = i6.value.elements[8], i6.__data[11] = i6.value.elements[0]) : e5.toArray(i6.__data), t2.bufferSubData(35345, n4, i6.__data));
                }
              }
              t2.bindBuffer(35345, null);
            }(i3), s2[i3.id] = m2);
          }, dispose: function() {
            for (const e3 in r2)
              t2.deleteBuffer(r2[e3]);
            a2 = [], r2 = {}, s2 = {};
          } };
        }
        function Zs(t2 = {}) {
          this.isWebGLRenderer = true;
          const e2 = void 0 !== t2.canvas ? t2.canvas : function() {
            const t3 = Nt("canvas");
            return t3.style.display = "block", t3;
          }(), i2 = void 0 !== t2.context ? t2.context : null, n2 = void 0 === t2.depth || t2.depth, r2 = void 0 === t2.stencil || t2.stencil, s2 = void 0 !== t2.antialias && t2.antialias, a2 = void 0 === t2.premultipliedAlpha || t2.premultipliedAlpha, o2 = void 0 !== t2.preserveDrawingBuffer && t2.preserveDrawingBuffer, l2 = void 0 !== t2.powerPreference ? t2.powerPreference : "default", c2 = void 0 !== t2.failIfMajorPerformanceCaveat && t2.failIfMajorPerformanceCaveat;
          let h2;
          h2 = null !== i2 ? i2.getContextAttributes().alpha : void 0 !== t2.alpha && t2.alpha;
          let u2 = null, d2 = null;
          const p2 = [], m2 = [];
          this.domElement = e2, this.debug = { checkShaderErrors: true }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.outputEncoding = at, this.physicallyCorrectLights = false, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, { gammaFactor: { get: function() {
            return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."), 2;
          }, set: function() {
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
          } } });
          const f2 = this;
          let g2 = false, _2 = 0, y2 = 0, S2 = null, T2 = -1, A2 = null;
          const E2 = new $t(), C2 = new $t();
          let L2 = null, R2 = e2.width, P2 = e2.height, I2 = 1, D2 = null, N2 = null;
          const O2 = new $t(0, 0, R2, P2), z2 = new $t(0, 0, R2, P2);
          let U2 = false;
          const B2 = new vn();
          let F2 = false, k2 = false, G2 = null;
          const V2 = new Ne(), H2 = new Lt(), W2 = new ne(), j2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
          function q2() {
            return null === S2 ? I2 : 1;
          }
          let X2, Y2, Z2, J2, K2, $2, Q2, tt2, et2, it2, nt2, rt2, st2, ot2, lt2, ct2, ht2, ut2, dt2, pt2, mt2, ft2, gt2, vt2, xt2 = i2;
          function _t2(t3, i3) {
            for (let n3 = 0; n3 < t3.length; n3++) {
              const r3 = t3[n3], s3 = e2.getContext(r3, i3);
              if (null !== s3)
                return s3;
            }
            return null;
          }
          try {
            const t3 = { alpha: true, depth: n2, stencil: r2, antialias: s2, premultipliedAlpha: a2, preserveDrawingBuffer: o2, powerPreference: l2, failIfMajorPerformanceCaveat: c2 };
            if ("setAttribute" in e2 && e2.setAttribute("data-engine", "three.js r145"), e2.addEventListener("webglcontextlost", bt2, false), e2.addEventListener("webglcontextrestored", St2, false), e2.addEventListener("webglcontextcreationerror", wt2, false), null === xt2) {
              const e3 = ["webgl2", "webgl", "experimental-webgl"];
              if (true === f2.isWebGL1Renderer && e3.shift(), xt2 = _t2(e3, t3), null === xt2)
                throw _t2(e3) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
            }
            void 0 === xt2.getShaderPrecisionFormat && (xt2.getShaderPrecisionFormat = function() {
              return { rangeMin: 1, rangeMax: 1, precision: 1 };
            });
          } catch (t3) {
            throw console.error("THREE.WebGLRenderer: " + t3.message), t3;
          }
          function yt2() {
            X2 = new qn(xt2), Y2 = new En(xt2, X2, t2), X2.init(Y2), ft2 = new ks(xt2, X2, Y2), Z2 = new Bs(xt2, X2, Y2), J2 = new Zn(), K2 = new ws(), $2 = new Fs(xt2, X2, Z2, K2, Y2, ft2, J2), Q2 = new Ln(f2), tt2 = new jn(f2), et2 = new _n(xt2, Y2), gt2 = new Tn(xt2, X2, et2, Y2), it2 = new Xn(xt2, et2, J2, gt2), nt2 = new Qn(xt2, it2, et2, J2), dt2 = new $n(xt2, Y2, $2), ct2 = new Cn(K2), rt2 = new Ss(f2, Q2, tt2, X2, Y2, gt2, ct2), st2 = new Xs(f2, K2), ot2 = new Cs(), lt2 = new Ns(X2, Y2), ut2 = new wn(f2, Q2, Z2, nt2, h2, a2), ht2 = new Us(f2, nt2, Y2), vt2 = new Ys(xt2, J2, Y2, Z2), pt2 = new An(xt2, X2, J2, Y2), mt2 = new Yn(xt2, X2, J2, Y2), J2.programs = rt2.programs, f2.capabilities = Y2, f2.extensions = X2, f2.properties = K2, f2.renderLists = ot2, f2.shadowMap = ht2, f2.state = Z2, f2.info = J2;
          }
          yt2();
          const Mt2 = new qs(f2, xt2);
          function bt2(t3) {
            t3.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), g2 = true;
          }
          function St2() {
            console.log("THREE.WebGLRenderer: Context Restored."), g2 = false;
            const t3 = J2.autoReset, e3 = ht2.enabled, i3 = ht2.autoUpdate, n3 = ht2.needsUpdate, r3 = ht2.type;
            yt2(), J2.autoReset = t3, ht2.enabled = e3, ht2.autoUpdate = i3, ht2.needsUpdate = n3, ht2.type = r3;
          }
          function wt2(t3) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t3.statusMessage);
          }
          function At2(t3) {
            const e3 = t3.target;
            e3.removeEventListener("dispose", At2), function(t4) {
              (function(t5) {
                const e4 = K2.get(t5).programs;
                void 0 !== e4 && (e4.forEach(function(t6) {
                  rt2.releaseProgram(t6);
                }), t5.isShaderMaterial && rt2.releaseShaderCache(t5));
              })(t4), K2.remove(t4);
            }(e3);
          }
          this.xr = Mt2, this.getContext = function() {
            return xt2;
          }, this.getContextAttributes = function() {
            return xt2.getContextAttributes();
          }, this.forceContextLoss = function() {
            const t3 = X2.get("WEBGL_lose_context");
            t3 && t3.loseContext();
          }, this.forceContextRestore = function() {
            const t3 = X2.get("WEBGL_lose_context");
            t3 && t3.restoreContext();
          }, this.getPixelRatio = function() {
            return I2;
          }, this.setPixelRatio = function(t3) {
            void 0 !== t3 && (I2 = t3, this.setSize(R2, P2, false));
          }, this.getSize = function(t3) {
            return t3.set(R2, P2);
          }, this.setSize = function(t3, i3, n3) {
            Mt2.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R2 = t3, P2 = i3, e2.width = Math.floor(t3 * I2), e2.height = Math.floor(i3 * I2), false !== n3 && (e2.style.width = t3 + "px", e2.style.height = i3 + "px"), this.setViewport(0, 0, t3, i3));
          }, this.getDrawingBufferSize = function(t3) {
            return t3.set(R2 * I2, P2 * I2).floor();
          }, this.setDrawingBufferSize = function(t3, i3, n3) {
            R2 = t3, P2 = i3, I2 = n3, e2.width = Math.floor(t3 * n3), e2.height = Math.floor(i3 * n3), this.setViewport(0, 0, t3, i3);
          }, this.getCurrentViewport = function(t3) {
            return t3.copy(E2);
          }, this.getViewport = function(t3) {
            return t3.copy(O2);
          }, this.setViewport = function(t3, e3, i3, n3) {
            t3.isVector4 ? O2.set(t3.x, t3.y, t3.z, t3.w) : O2.set(t3, e3, i3, n3), Z2.viewport(E2.copy(O2).multiplyScalar(I2).floor());
          }, this.getScissor = function(t3) {
            return t3.copy(z2);
          }, this.setScissor = function(t3, e3, i3, n3) {
            t3.isVector4 ? z2.set(t3.x, t3.y, t3.z, t3.w) : z2.set(t3, e3, i3, n3), Z2.scissor(C2.copy(z2).multiplyScalar(I2).floor());
          }, this.getScissorTest = function() {
            return U2;
          }, this.setScissorTest = function(t3) {
            Z2.setScissorTest(U2 = t3);
          }, this.setOpaqueSort = function(t3) {
            D2 = t3;
          }, this.setTransparentSort = function(t3) {
            N2 = t3;
          }, this.getClearColor = function(t3) {
            return t3.copy(ut2.getClearColor());
          }, this.setClearColor = function() {
            ut2.setClearColor.apply(ut2, arguments);
          }, this.getClearAlpha = function() {
            return ut2.getClearAlpha();
          }, this.setClearAlpha = function() {
            ut2.setClearAlpha.apply(ut2, arguments);
          }, this.clear = function(t3 = true, e3 = true, i3 = true) {
            let n3 = 0;
            t3 && (n3 |= 16384), e3 && (n3 |= 256), i3 && (n3 |= 1024), xt2.clear(n3);
          }, this.clearColor = function() {
            this.clear(true, false, false);
          }, this.clearDepth = function() {
            this.clear(false, true, false);
          }, this.clearStencil = function() {
            this.clear(false, false, true);
          }, this.dispose = function() {
            e2.removeEventListener("webglcontextlost", bt2, false), e2.removeEventListener("webglcontextrestored", St2, false), e2.removeEventListener("webglcontextcreationerror", wt2, false), ot2.dispose(), lt2.dispose(), K2.dispose(), Q2.dispose(), tt2.dispose(), nt2.dispose(), gt2.dispose(), vt2.dispose(), rt2.dispose(), Mt2.dispose(), Mt2.removeEventListener("sessionstart", Ct2), Mt2.removeEventListener("sessionend", Rt2), G2 && (G2.dispose(), G2 = null), Pt2.stop();
          }, this.renderBufferDirect = function(t3, e3, i3, n3, r3, s3) {
            null === e3 && (e3 = j2);
            const a3 = r3.isMesh && r3.matrixWorld.determinant() < 0, o3 = function(t4, e4, i4, n4, r4) {
              true !== e4.isScene && (e4 = j2);
              $2.resetTextureUnits();
              const s4 = e4.fog, a4 = n4.isMeshStandardMaterial ? e4.environment : null, o4 = null === S2 ? f2.outputEncoding : true === S2.isXRRenderTarget ? S2.texture.encoding : at, l4 = (n4.isMeshStandardMaterial ? tt2 : Q2).get(n4.envMap || a4), c4 = true === n4.vertexColors && !!i4.attributes.color && 4 === i4.attributes.color.itemSize, h4 = !!n4.normalMap && !!i4.attributes.tangent, u4 = !!i4.morphAttributes.position, p4 = !!i4.morphAttributes.normal, m4 = !!i4.morphAttributes.color, g4 = n4.toneMapped ? f2.toneMapping : 0, v3 = i4.morphAttributes.position || i4.morphAttributes.normal || i4.morphAttributes.color, x3 = void 0 !== v3 ? v3.length : 0, _4 = K2.get(n4), y4 = d2.state.lights;
              if (true === F2 && (true === k2 || t4 !== A2)) {
                const e5 = t4 === A2 && n4.id === T2;
                ct2.setState(n4, t4, e5);
              }
              let M3 = false;
              n4.version === _4.__version ? _4.needsLights && _4.lightsStateVersion !== y4.state.version || _4.outputEncoding !== o4 || r4.isInstancedMesh && false === _4.instancing ? M3 = true : r4.isInstancedMesh || true !== _4.instancing ? r4.isSkinnedMesh && false === _4.skinning ? M3 = true : r4.isSkinnedMesh || true !== _4.skinning ? _4.envMap !== l4 || true === n4.fog && _4.fog !== s4 ? M3 = true : void 0 === _4.numClippingPlanes || _4.numClippingPlanes === ct2.numPlanes && _4.numIntersection === ct2.numIntersection ? (_4.vertexAlphas !== c4 || _4.vertexTangents !== h4 || _4.morphTargets !== u4 || _4.morphNormals !== p4 || _4.morphColors !== m4 || _4.toneMapping !== g4 || true === Y2.isWebGL2 && _4.morphTargetsCount !== x3) && (M3 = true) : M3 = true : M3 = true : M3 = true : (M3 = true, _4.__version = n4.version);
              let b3 = _4.currentProgram;
              true === M3 && (b3 = Ut2(n4, e4, r4));
              let w2 = false, E3 = false, C3 = false;
              const L3 = b3.getUniforms(), R3 = _4.uniforms;
              Z2.useProgram(b3.program) && (w2 = true, E3 = true, C3 = true);
              n4.id !== T2 && (T2 = n4.id, E3 = true);
              if (w2 || A2 !== t4) {
                if (L3.setValue(xt2, "projectionMatrix", t4.projectionMatrix), Y2.logarithmicDepthBuffer && L3.setValue(xt2, "logDepthBufFC", 2 / (Math.log(t4.far + 1) / Math.LN2)), A2 !== t4 && (A2 = t4, E3 = true, C3 = true), n4.isShaderMaterial || n4.isMeshPhongMaterial || n4.isMeshToonMaterial || n4.isMeshStandardMaterial || n4.envMap) {
                  const e5 = L3.map.cameraPosition;
                  void 0 !== e5 && e5.setValue(xt2, W2.setFromMatrixPosition(t4.matrixWorld));
                }
                (n4.isMeshPhongMaterial || n4.isMeshToonMaterial || n4.isMeshLambertMaterial || n4.isMeshBasicMaterial || n4.isMeshStandardMaterial || n4.isShaderMaterial) && L3.setValue(xt2, "isOrthographic", true === t4.isOrthographicCamera), (n4.isMeshPhongMaterial || n4.isMeshToonMaterial || n4.isMeshLambertMaterial || n4.isMeshBasicMaterial || n4.isMeshStandardMaterial || n4.isShaderMaterial || n4.isShadowMaterial || r4.isSkinnedMesh) && L3.setValue(xt2, "viewMatrix", t4.matrixWorldInverse);
              }
              if (r4.isSkinnedMesh) {
                L3.setOptional(xt2, r4, "bindMatrix"), L3.setOptional(xt2, r4, "bindMatrixInverse");
                const t5 = r4.skeleton;
                t5 && (Y2.floatVertexTextures ? (null === t5.boneTexture && t5.computeBoneTexture(), L3.setValue(xt2, "boneTexture", t5.boneTexture, $2), L3.setValue(xt2, "boneTextureSize", t5.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
              }
              const D3 = i4.morphAttributes;
              (void 0 !== D3.position || void 0 !== D3.normal || void 0 !== D3.color && true === Y2.isWebGL2) && dt2.update(r4, i4, n4, b3);
              (E3 || _4.receiveShadow !== r4.receiveShadow) && (_4.receiveShadow = r4.receiveShadow, L3.setValue(xt2, "receiveShadow", r4.receiveShadow));
              n4.isMeshGouraudMaterial && null !== n4.envMap && (R3.envMap.value = l4, R3.flipEnvMap.value = l4.isCubeTexture && false === l4.isRenderTargetTexture ? -1 : 1);
              E3 && (L3.setValue(xt2, "toneMappingExposure", f2.toneMappingExposure), _4.needsLights && (O3 = C3, (N3 = R3).ambientLightColor.needsUpdate = O3, N3.lightProbe.needsUpdate = O3, N3.directionalLights.needsUpdate = O3, N3.directionalLightShadows.needsUpdate = O3, N3.pointLights.needsUpdate = O3, N3.pointLightShadows.needsUpdate = O3, N3.spotLights.needsUpdate = O3, N3.spotLightShadows.needsUpdate = O3, N3.rectAreaLights.needsUpdate = O3, N3.hemisphereLights.needsUpdate = O3), s4 && true === n4.fog && st2.refreshFogUniforms(R3, s4), st2.refreshMaterialUniforms(R3, n4, I2, P2, G2), ns.upload(xt2, _4.uniformsList, R3, $2));
              var N3, O3;
              n4.isShaderMaterial && true === n4.uniformsNeedUpdate && (ns.upload(xt2, _4.uniformsList, R3, $2), n4.uniformsNeedUpdate = false);
              n4.isSpriteMaterial && L3.setValue(xt2, "center", r4.center);
              if (L3.setValue(xt2, "modelViewMatrix", r4.modelViewMatrix), L3.setValue(xt2, "normalMatrix", r4.normalMatrix), L3.setValue(xt2, "modelMatrix", r4.matrixWorld), n4.isShaderMaterial || n4.isRawShaderMaterial) {
                const t5 = n4.uniformsGroups;
                for (let e5 = 0, i5 = t5.length; e5 < i5; e5++)
                  if (Y2.isWebGL2) {
                    const i6 = t5[e5];
                    vt2.update(i6, b3), vt2.bind(i6, b3);
                  } else
                    console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
              }
              return b3;
            }(t3, e3, i3, n3, r3);
            Z2.setMaterial(n3, a3);
            let l3 = i3.index;
            const c3 = i3.attributes.position;
            if (null === l3) {
              if (void 0 === c3 || 0 === c3.count)
                return;
            } else if (0 === l3.count)
              return;
            let h3, u3 = 1;
            true === n3.wireframe && (l3 = it2.getWireframeAttribute(i3), u3 = 2), gt2.setup(r3, n3, o3, i3, l3);
            let p3 = pt2;
            null !== l3 && (h3 = et2.get(l3), p3 = mt2, p3.setIndex(h3));
            const m3 = null !== l3 ? l3.count : c3.count, g3 = i3.drawRange.start * u3, v2 = i3.drawRange.count * u3, x2 = null !== s3 ? s3.start * u3 : 0, _3 = null !== s3 ? s3.count * u3 : 1 / 0, y3 = Math.max(g3, x2), M2 = Math.min(m3, g3 + v2, x2 + _3) - 1, b2 = Math.max(0, M2 - y3 + 1);
            if (0 !== b2) {
              if (r3.isMesh)
                true === n3.wireframe ? (Z2.setLineWidth(n3.wireframeLinewidth * q2()), p3.setMode(1)) : p3.setMode(4);
              else if (r3.isLine) {
                let t4 = n3.linewidth;
                void 0 === t4 && (t4 = 1), Z2.setLineWidth(t4 * q2()), r3.isLineSegments ? p3.setMode(1) : r3.isLineLoop ? p3.setMode(2) : p3.setMode(3);
              } else
                r3.isPoints ? p3.setMode(0) : r3.isSprite && p3.setMode(4);
              if (r3.isInstancedMesh)
                p3.renderInstances(y3, b2, r3.count);
              else if (i3.isInstancedBufferGeometry) {
                const t4 = Math.min(i3.instanceCount, i3._maxInstanceCount);
                p3.renderInstances(y3, b2, t4);
              } else
                p3.render(y3, b2);
            }
          }, this.compile = function(t3, e3) {
            function i3(t4, e4, i4) {
              true === t4.transparent && 2 === t4.side ? (t4.side = 1, t4.needsUpdate = true, Ut2(t4, e4, i4), t4.side = 0, t4.needsUpdate = true, Ut2(t4, e4, i4), t4.side = 2) : Ut2(t4, e4, i4);
            }
            d2 = lt2.get(t3), d2.init(), m2.push(d2), t3.traverseVisible(function(t4) {
              t4.isLight && t4.layers.test(e3.layers) && (d2.pushLight(t4), t4.castShadow && d2.pushShadow(t4));
            }), d2.setupLights(f2.physicallyCorrectLights), t3.traverse(function(e4) {
              const n3 = e4.material;
              if (n3)
                if (Array.isArray(n3))
                  for (let r3 = 0; r3 < n3.length; r3++) {
                    i3(n3[r3], t3, e4);
                  }
                else
                  i3(n3, t3, e4);
            }), m2.pop(), d2 = null;
          };
          let Et2 = null;
          function Ct2() {
            Pt2.stop();
          }
          function Rt2() {
            Pt2.start();
          }
          const Pt2 = new xn();
          function It2(t3, e3, i3, n3) {
            if (false === t3.visible)
              return;
            if (t3.layers.test(e3.layers)) {
              if (t3.isGroup)
                i3 = t3.renderOrder;
              else if (t3.isLOD)
                true === t3.autoUpdate && t3.update(e3);
              else if (t3.isLight)
                d2.pushLight(t3), t3.castShadow && d2.pushShadow(t3);
              else if (t3.isSprite) {
                if (!t3.frustumCulled || B2.intersectsSprite(t3)) {
                  n3 && W2.setFromMatrixPosition(t3.matrixWorld).applyMatrix4(V2);
                  const e4 = nt2.update(t3), r4 = t3.material;
                  r4.visible && u2.push(t3, e4, r4, i3, W2.z, null);
                }
              } else if ((t3.isMesh || t3.isLine || t3.isPoints) && (t3.isSkinnedMesh && t3.skeleton.frame !== J2.render.frame && (t3.skeleton.update(), t3.skeleton.frame = J2.render.frame), !t3.frustumCulled || B2.intersectsObject(t3))) {
                n3 && W2.setFromMatrixPosition(t3.matrixWorld).applyMatrix4(V2);
                const e4 = nt2.update(t3), r4 = t3.material;
                if (Array.isArray(r4)) {
                  const n4 = e4.groups;
                  for (let s3 = 0, a3 = n4.length; s3 < a3; s3++) {
                    const a4 = n4[s3], o3 = r4[a4.materialIndex];
                    o3 && o3.visible && u2.push(t3, e4, o3, i3, W2.z, a4);
                  }
                } else
                  r4.visible && u2.push(t3, e4, r4, i3, W2.z, null);
              }
            }
            const r3 = t3.children;
            for (let t4 = 0, s3 = r3.length; t4 < s3; t4++)
              It2(r3[t4], e3, i3, n3);
          }
          function Dt2(t3, e3, i3, n3) {
            const r3 = t3.opaque, a3 = t3.transmissive, o3 = t3.transparent;
            d2.setupLightsView(i3), a3.length > 0 && function(t4, e4, i4) {
              const n4 = Y2.isWebGL2;
              null === G2 && (G2 = new Qt(1, 1, { generateMipmaps: true, type: X2.has("EXT_color_buffer_half_float") ? b : x, minFilter: v, samples: n4 && true === s2 ? 4 : 0 }));
              f2.getDrawingBufferSize(H2), n4 ? G2.setSize(H2.x, H2.y) : G2.setSize(Tt(H2.x), Tt(H2.y));
              const r4 = f2.getRenderTarget();
              f2.setRenderTarget(G2), f2.clear();
              const a4 = f2.toneMapping;
              f2.toneMapping = 0, Ot2(t4, e4, i4), f2.toneMapping = a4, $2.updateMultisampleRenderTarget(G2), $2.updateRenderTargetMipmap(G2), f2.setRenderTarget(r4);
            }(r3, e3, i3), n3 && Z2.viewport(E2.copy(n3)), r3.length > 0 && Ot2(r3, e3, i3), a3.length > 0 && Ot2(a3, e3, i3), o3.length > 0 && Ot2(o3, e3, i3), Z2.buffers.depth.setTest(true), Z2.buffers.depth.setMask(true), Z2.buffers.color.setMask(true), Z2.setPolygonOffset(false);
          }
          function Ot2(t3, e3, i3) {
            const n3 = true === e3.isScene ? e3.overrideMaterial : null;
            for (let r3 = 0, s3 = t3.length; r3 < s3; r3++) {
              const s4 = t3[r3], a3 = s4.object, o3 = s4.geometry, l3 = null === n3 ? s4.material : n3, c3 = s4.group;
              a3.layers.test(i3.layers) && zt2(a3, e3, i3, o3, l3, c3);
            }
          }
          function zt2(t3, e3, i3, n3, r3, s3) {
            t3.onBeforeRender(f2, e3, i3, n3, r3, s3), t3.modelViewMatrix.multiplyMatrices(i3.matrixWorldInverse, t3.matrixWorld), t3.normalMatrix.getNormalMatrix(t3.modelViewMatrix), r3.onBeforeRender(f2, e3, i3, n3, t3, s3), true === r3.transparent && 2 === r3.side ? (r3.side = 1, r3.needsUpdate = true, f2.renderBufferDirect(i3, e3, n3, r3, t3, s3), r3.side = 0, r3.needsUpdate = true, f2.renderBufferDirect(i3, e3, n3, r3, t3, s3), r3.side = 2) : f2.renderBufferDirect(i3, e3, n3, r3, t3, s3), t3.onAfterRender(f2, e3, i3, n3, r3, s3);
          }
          function Ut2(t3, e3, i3) {
            true !== e3.isScene && (e3 = j2);
            const n3 = K2.get(t3), r3 = d2.state.lights, s3 = d2.state.shadowsArray, a3 = r3.state.version, o3 = rt2.getParameters(t3, r3.state, s3, e3, i3), l3 = rt2.getProgramCacheKey(o3);
            let c3 = n3.programs;
            n3.environment = t3.isMeshStandardMaterial ? e3.environment : null, n3.fog = e3.fog, n3.envMap = (t3.isMeshStandardMaterial ? tt2 : Q2).get(t3.envMap || n3.environment), void 0 === c3 && (t3.addEventListener("dispose", At2), c3 = /* @__PURE__ */ new Map(), n3.programs = c3);
            let h3 = c3.get(l3);
            if (void 0 !== h3) {
              if (n3.currentProgram === h3 && n3.lightsStateVersion === a3)
                return Bt2(t3, o3), h3;
            } else
              o3.uniforms = rt2.getUniforms(t3), t3.onBuild(i3, o3, f2), t3.onBeforeCompile(o3, f2), h3 = rt2.acquireProgram(o3, l3), c3.set(l3, h3), n3.uniforms = o3.uniforms;
            const u3 = n3.uniforms;
            (t3.isShaderMaterial || t3.isRawShaderMaterial) && true !== t3.clipping || (u3.clippingPlanes = ct2.uniform), Bt2(t3, o3), n3.needsLights = function(t4) {
              return t4.isMeshLambertMaterial || t4.isMeshToonMaterial || t4.isMeshPhongMaterial || t4.isMeshStandardMaterial || t4.isShadowMaterial || t4.isShaderMaterial && true === t4.lights;
            }(t3), n3.lightsStateVersion = a3, n3.needsLights && (u3.ambientLightColor.value = r3.state.ambient, u3.lightProbe.value = r3.state.probe, u3.directionalLights.value = r3.state.directional, u3.directionalLightShadows.value = r3.state.directionalShadow, u3.spotLights.value = r3.state.spot, u3.spotLightShadows.value = r3.state.spotShadow, u3.rectAreaLights.value = r3.state.rectArea, u3.ltc_1.value = r3.state.rectAreaLTC1, u3.ltc_2.value = r3.state.rectAreaLTC2, u3.pointLights.value = r3.state.point, u3.pointLightShadows.value = r3.state.pointShadow, u3.hemisphereLights.value = r3.state.hemi, u3.directionalShadowMap.value = r3.state.directionalShadowMap, u3.directionalShadowMatrix.value = r3.state.directionalShadowMatrix, u3.spotShadowMap.value = r3.state.spotShadowMap, u3.spotLightMatrix.value = r3.state.spotLightMatrix, u3.spotLightMap.value = r3.state.spotLightMap, u3.pointShadowMap.value = r3.state.pointShadowMap, u3.pointShadowMatrix.value = r3.state.pointShadowMatrix);
            const p3 = h3.getUniforms(), m3 = ns.seqWithValue(p3.seq, u3);
            return n3.currentProgram = h3, n3.uniformsList = m3, h3;
          }
          function Bt2(t3, e3) {
            const i3 = K2.get(t3);
            i3.outputEncoding = e3.outputEncoding, i3.instancing = e3.instancing, i3.skinning = e3.skinning, i3.morphTargets = e3.morphTargets, i3.morphNormals = e3.morphNormals, i3.morphColors = e3.morphColors, i3.morphTargetsCount = e3.morphTargetsCount, i3.numClippingPlanes = e3.numClippingPlanes, i3.numIntersection = e3.numClipIntersection, i3.vertexAlphas = e3.vertexAlphas, i3.vertexTangents = e3.vertexTangents, i3.toneMapping = e3.toneMapping;
          }
          Pt2.setAnimationLoop(function(t3) {
            Et2 && Et2(t3);
          }), "undefined" != typeof self && Pt2.setContext(self), this.setAnimationLoop = function(t3) {
            Et2 = t3, Mt2.setAnimationLoop(t3), null === t3 ? Pt2.stop() : Pt2.start();
          }, Mt2.addEventListener("sessionstart", Ct2), Mt2.addEventListener("sessionend", Rt2), this.render = function(t3, e3) {
            if (void 0 !== e3 && true !== e3.isCamera)
              return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            if (true === g2)
              return;
            true === t3.matrixWorldAutoUpdate && t3.updateMatrixWorld(), null === e3.parent && true === e3.matrixWorldAutoUpdate && e3.updateMatrixWorld(), true === Mt2.enabled && true === Mt2.isPresenting && (true === Mt2.cameraAutoUpdate && Mt2.updateCamera(e3), e3 = Mt2.getCamera()), true === t3.isScene && t3.onBeforeRender(f2, t3, e3, S2), d2 = lt2.get(t3, m2.length), d2.init(), m2.push(d2), V2.multiplyMatrices(e3.projectionMatrix, e3.matrixWorldInverse), B2.setFromProjectionMatrix(V2), k2 = this.localClippingEnabled, F2 = ct2.init(this.clippingPlanes, k2, e3), u2 = ot2.get(t3, p2.length), u2.init(), p2.push(u2), It2(t3, e3, 0, f2.sortObjects), u2.finish(), true === f2.sortObjects && u2.sort(D2, N2), true === F2 && ct2.beginShadows();
            const i3 = d2.state.shadowsArray;
            if (ht2.render(i3, t3, e3), true === F2 && ct2.endShadows(), true === this.info.autoReset && this.info.reset(), ut2.render(u2, t3), d2.setupLights(f2.physicallyCorrectLights), e3.isArrayCamera) {
              const i4 = e3.cameras;
              for (let e4 = 0, n3 = i4.length; e4 < n3; e4++) {
                const n4 = i4[e4];
                Dt2(u2, t3, n4, n4.viewport);
              }
            } else
              Dt2(u2, t3, e3);
            null !== S2 && ($2.updateMultisampleRenderTarget(S2), $2.updateRenderTargetMipmap(S2)), true === t3.isScene && t3.onAfterRender(f2, t3, e3), gt2.resetDefaultState(), T2 = -1, A2 = null, m2.pop(), d2 = m2.length > 0 ? m2[m2.length - 1] : null, p2.pop(), u2 = p2.length > 0 ? p2[p2.length - 1] : null;
          }, this.getActiveCubeFace = function() {
            return _2;
          }, this.getActiveMipmapLevel = function() {
            return y2;
          }, this.getRenderTarget = function() {
            return S2;
          }, this.setRenderTargetTextures = function(t3, e3, i3) {
            K2.get(t3.texture).__webglTexture = e3, K2.get(t3.depthTexture).__webglTexture = i3;
            const n3 = K2.get(t3);
            n3.__hasExternalTextures = true, n3.__hasExternalTextures && (n3.__autoAllocateDepthBuffer = void 0 === i3, n3.__autoAllocateDepthBuffer || true === X2.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), n3.__useRenderToTexture = false));
          }, this.setRenderTargetFramebuffer = function(t3, e3) {
            const i3 = K2.get(t3);
            i3.__webglFramebuffer = e3, i3.__useDefaultFramebuffer = void 0 === e3;
          }, this.setRenderTarget = function(t3, e3 = 0, i3 = 0) {
            S2 = t3, _2 = e3, y2 = i3;
            let n3 = true;
            if (t3) {
              const e4 = K2.get(t3);
              void 0 !== e4.__useDefaultFramebuffer ? (Z2.bindFramebuffer(36160, null), n3 = false) : void 0 === e4.__webglFramebuffer ? $2.setupRenderTarget(t3) : e4.__hasExternalTextures && $2.rebindTextures(t3, K2.get(t3.texture).__webglTexture, K2.get(t3.depthTexture).__webglTexture);
            }
            let r3 = null, s3 = false, a3 = false;
            if (t3) {
              const i4 = t3.texture;
              (i4.isData3DTexture || i4.isDataArrayTexture) && (a3 = true);
              const n4 = K2.get(t3).__webglFramebuffer;
              t3.isWebGLCubeRenderTarget ? (r3 = n4[e3], s3 = true) : r3 = Y2.isWebGL2 && t3.samples > 0 && false === $2.useMultisampledRTT(t3) ? K2.get(t3).__webglMultisampledFramebuffer : n4, E2.copy(t3.viewport), C2.copy(t3.scissor), L2 = t3.scissorTest;
            } else
              E2.copy(O2).multiplyScalar(I2).floor(), C2.copy(z2).multiplyScalar(I2).floor(), L2 = U2;
            if (Z2.bindFramebuffer(36160, r3) && Y2.drawBuffers && n3 && Z2.drawBuffers(t3, r3), Z2.viewport(E2), Z2.scissor(C2), Z2.setScissorTest(L2), s3) {
              const n4 = K2.get(t3.texture);
              xt2.framebufferTexture2D(36160, 36064, 34069 + e3, n4.__webglTexture, i3);
            } else if (a3) {
              const n4 = K2.get(t3.texture), r4 = e3 || 0;
              xt2.framebufferTextureLayer(36160, 36064, n4.__webglTexture, i3 || 0, r4);
            }
            T2 = -1;
          }, this.readRenderTargetPixels = function(t3, e3, i3, n3, r3, s3, a3) {
            if (!t3 || !t3.isWebGLRenderTarget)
              return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let o3 = K2.get(t3).__webglFramebuffer;
            if (t3.isWebGLCubeRenderTarget && void 0 !== a3 && (o3 = o3[a3]), o3) {
              Z2.bindFramebuffer(36160, o3);
              try {
                const a4 = t3.texture, o4 = a4.format, l3 = a4.type;
                if (o4 !== w && ft2.convert(o4) !== xt2.getParameter(35739))
                  return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                const c3 = l3 === b && (X2.has("EXT_color_buffer_half_float") || Y2.isWebGL2 && X2.has("EXT_color_buffer_float"));
                if (!(l3 === x || ft2.convert(l3) === xt2.getParameter(35738) || l3 === M && (Y2.isWebGL2 || X2.has("OES_texture_float") || X2.has("WEBGL_color_buffer_float")) || c3))
                  return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                e3 >= 0 && e3 <= t3.width - n3 && i3 >= 0 && i3 <= t3.height - r3 && xt2.readPixels(e3, i3, n3, r3, ft2.convert(o4), ft2.convert(l3), s3);
              } finally {
                const t4 = null !== S2 ? K2.get(S2).__webglFramebuffer : null;
                Z2.bindFramebuffer(36160, t4);
              }
            }
          }, this.copyFramebufferToTexture = function(t3, e3, i3 = 0) {
            const n3 = Math.pow(2, -i3), r3 = Math.floor(e3.image.width * n3), s3 = Math.floor(e3.image.height * n3);
            $2.setTexture2D(e3, 0), xt2.copyTexSubImage2D(3553, i3, 0, 0, t3.x, t3.y, r3, s3), Z2.unbindTexture();
          }, this.copyTextureToTexture = function(t3, e3, i3, n3 = 0) {
            const r3 = e3.image.width, s3 = e3.image.height, a3 = ft2.convert(i3.format), o3 = ft2.convert(i3.type);
            $2.setTexture2D(i3, 0), xt2.pixelStorei(37440, i3.flipY), xt2.pixelStorei(37441, i3.premultiplyAlpha), xt2.pixelStorei(3317, i3.unpackAlignment), e3.isDataTexture ? xt2.texSubImage2D(3553, n3, t3.x, t3.y, r3, s3, a3, o3, e3.image.data) : e3.isCompressedTexture ? xt2.compressedTexSubImage2D(3553, n3, t3.x, t3.y, e3.mipmaps[0].width, e3.mipmaps[0].height, a3, e3.mipmaps[0].data) : xt2.texSubImage2D(3553, n3, t3.x, t3.y, a3, o3, e3.image), 0 === n3 && i3.generateMipmaps && xt2.generateMipmap(3553), Z2.unbindTexture();
          }, this.copyTextureToTexture3D = function(t3, e3, i3, n3, r3 = 0) {
            if (f2.isWebGL1Renderer)
              return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
            const s3 = t3.max.x - t3.min.x + 1, a3 = t3.max.y - t3.min.y + 1, o3 = t3.max.z - t3.min.z + 1, l3 = ft2.convert(n3.format), c3 = ft2.convert(n3.type);
            let h3;
            if (n3.isData3DTexture)
              $2.setTexture3D(n3, 0), h3 = 32879;
            else {
              if (!n3.isDataArrayTexture)
                return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
              $2.setTexture2DArray(n3, 0), h3 = 35866;
            }
            xt2.pixelStorei(37440, n3.flipY), xt2.pixelStorei(37441, n3.premultiplyAlpha), xt2.pixelStorei(3317, n3.unpackAlignment);
            const u3 = xt2.getParameter(3314), d3 = xt2.getParameter(32878), p3 = xt2.getParameter(3316), m3 = xt2.getParameter(3315), g3 = xt2.getParameter(32877), v2 = i3.isCompressedTexture ? i3.mipmaps[0] : i3.image;
            xt2.pixelStorei(3314, v2.width), xt2.pixelStorei(32878, v2.height), xt2.pixelStorei(3316, t3.min.x), xt2.pixelStorei(3315, t3.min.y), xt2.pixelStorei(32877, t3.min.z), i3.isDataTexture || i3.isData3DTexture ? xt2.texSubImage3D(h3, r3, e3.x, e3.y, e3.z, s3, a3, o3, l3, c3, v2.data) : i3.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), xt2.compressedTexSubImage3D(h3, r3, e3.x, e3.y, e3.z, s3, a3, o3, l3, v2.data)) : xt2.texSubImage3D(h3, r3, e3.x, e3.y, e3.z, s3, a3, o3, l3, c3, v2), xt2.pixelStorei(3314, u3), xt2.pixelStorei(32878, d3), xt2.pixelStorei(3316, p3), xt2.pixelStorei(3315, m3), xt2.pixelStorei(32877, g3), 0 === r3 && n3.generateMipmaps && xt2.generateMipmap(h3), Z2.unbindTexture();
          }, this.initTexture = function(t3) {
            t3.isCubeTexture ? $2.setTextureCube(t3, 0) : t3.isData3DTexture ? $2.setTexture3D(t3, 0) : t3.isDataArrayTexture ? $2.setTexture2DArray(t3, 0) : $2.setTexture2D(t3, 0), Z2.unbindTexture();
          }, this.resetState = function() {
            _2 = 0, y2 = 0, S2 = null, Z2.reset(), gt2.reset();
          }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
        }
        class Js extends Zs {
        }
        Js.prototype.isWebGL1Renderer = true;
        class Ks {
          constructor(t2, e2 = 25e-5) {
            this.isFogExp2 = true, this.name = "", this.color = new jt(t2), this.density = e2;
          }
          clone() {
            return new Ks(this.color, this.density);
          }
          toJSON() {
            return { type: "FogExp2", color: this.color.getHex(), density: this.density };
          }
        }
        class $s {
          constructor(t2, e2 = 1, i2 = 1e3) {
            this.isFog = true, this.name = "", this.color = new jt(t2), this.near = e2, this.far = i2;
          }
          clone() {
            return new $s(this.color, this.near, this.far);
          }
          toJSON() {
            return { type: "Fog", color: this.color.getHex(), near: this.near, far: this.far };
          }
        }
        class Qs extends si {
          constructor() {
            super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
          }
          copy(t2, e2) {
            return super.copy(t2, e2), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return null !== this.fog && (e2.object.fog = this.fog.toJSON()), e2;
          }
          get autoUpdate() {
            return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
          }
          set autoUpdate(t2) {
            console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = t2;
          }
        }
        class ta {
          constructor(t2, e2) {
            this.isInterleavedBuffer = true, this.array = t2, this.stride = e2, this.count = void 0 !== t2 ? t2.length / e2 : 0, this.usage = ut, this.updateRange = { offset: 0, count: -1 }, this.version = 0, this.uuid = _t();
          }
          onUploadCallback() {
          }
          set needsUpdate(t2) {
            true === t2 && this.version++;
          }
          setUsage(t2) {
            return this.usage = t2, this;
          }
          copy(t2) {
            return this.array = new t2.array.constructor(t2.array), this.count = t2.count, this.stride = t2.stride, this.usage = t2.usage, this;
          }
          copyAt(t2, e2, i2) {
            t2 *= this.stride, i2 *= e2.stride;
            for (let n2 = 0, r2 = this.stride; n2 < r2; n2++)
              this.array[t2 + n2] = e2.array[i2 + n2];
            return this;
          }
          set(t2, e2 = 0) {
            return this.array.set(t2, e2), this;
          }
          clone(t2) {
            void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _t()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
            const e2 = new this.array.constructor(t2.arrayBuffers[this.array.buffer._uuid]), i2 = new this.constructor(e2, this.stride);
            return i2.setUsage(this.usage), i2;
          }
          onUpload(t2) {
            return this.onUploadCallback = t2, this;
          }
          toJSON(t2) {
            return void 0 === t2.arrayBuffers && (t2.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = _t()), void 0 === t2.arrayBuffers[this.array.buffer._uuid] && (t2.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
          }
        }
        const ea = new ne();
        class ia {
          constructor(t2, e2, i2, n2 = false) {
            this.isInterleavedBufferAttribute = true, this.name = "", this.data = t2, this.itemSize = e2, this.offset = i2, this.normalized = true === n2;
          }
          get count() {
            return this.data.count;
          }
          get array() {
            return this.data.array;
          }
          set needsUpdate(t2) {
            this.data.needsUpdate = t2;
          }
          applyMatrix4(t2) {
            for (let e2 = 0, i2 = this.data.count; e2 < i2; e2++)
              ea.fromBufferAttribute(this, e2), ea.applyMatrix4(t2), this.setXYZ(e2, ea.x, ea.y, ea.z);
            return this;
          }
          applyNormalMatrix(t2) {
            for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
              ea.fromBufferAttribute(this, e2), ea.applyNormalMatrix(t2), this.setXYZ(e2, ea.x, ea.y, ea.z);
            return this;
          }
          transformDirection(t2) {
            for (let e2 = 0, i2 = this.count; e2 < i2; e2++)
              ea.fromBufferAttribute(this, e2), ea.transformDirection(t2), this.setXYZ(e2, ea.x, ea.y, ea.z);
            return this;
          }
          setX(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset] = e2, this;
          }
          setY(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 1] = e2, this;
          }
          setZ(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 2] = e2, this;
          }
          setW(t2, e2) {
            return this.normalized && (e2 = Et(e2, this.array)), this.data.array[t2 * this.data.stride + this.offset + 3] = e2, this;
          }
          getX(t2) {
            let e2 = this.data.array[t2 * this.data.stride + this.offset];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          getY(t2) {
            let e2 = this.data.array[t2 * this.data.stride + this.offset + 1];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          getZ(t2) {
            let e2 = this.data.array[t2 * this.data.stride + this.offset + 2];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          getW(t2) {
            let e2 = this.data.array[t2 * this.data.stride + this.offset + 3];
            return this.normalized && (e2 = At(e2, this.array)), e2;
          }
          setXY(t2, e2, i2) {
            return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Et(e2, this.array), i2 = Et(i2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = i2, this;
          }
          setXYZ(t2, e2, i2, n2) {
            return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Et(e2, this.array), i2 = Et(i2, this.array), n2 = Et(n2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = i2, this.data.array[t2 + 2] = n2, this;
          }
          setXYZW(t2, e2, i2, n2, r2) {
            return t2 = t2 * this.data.stride + this.offset, this.normalized && (e2 = Et(e2, this.array), i2 = Et(i2, this.array), n2 = Et(n2, this.array), r2 = Et(r2, this.array)), this.data.array[t2 + 0] = e2, this.data.array[t2 + 1] = i2, this.data.array[t2 + 2] = n2, this.data.array[t2 + 3] = r2, this;
          }
          clone(t2) {
            if (void 0 === t2) {
              console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");
              const t3 = [];
              for (let e2 = 0; e2 < this.count; e2++) {
                const i2 = e2 * this.data.stride + this.offset;
                for (let e3 = 0; e3 < this.itemSize; e3++)
                  t3.push(this.data.array[i2 + e3]);
              }
              return new bi(new this.array.constructor(t3), this.itemSize, this.normalized);
            }
            return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.clone(t2)), new ia(t2.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
          }
          toJSON(t2) {
            if (void 0 === t2) {
              console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");
              const t3 = [];
              for (let e2 = 0; e2 < this.count; e2++) {
                const i2 = e2 * this.data.stride + this.offset;
                for (let e3 = 0; e3 < this.itemSize; e3++)
                  t3.push(this.data.array[i2 + e3]);
              }
              return { itemSize: this.itemSize, type: this.array.constructor.name, array: t3, normalized: this.normalized };
            }
            return void 0 === t2.interleavedBuffers && (t2.interleavedBuffers = {}), void 0 === t2.interleavedBuffers[this.data.uuid] && (t2.interleavedBuffers[this.data.uuid] = this.data.toJSON(t2)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
          }
        }
        class na extends xi {
          constructor(t2) {
            super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new jt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.rotation = t2.rotation, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
          }
        }
        let ra;
        const sa = new ne(), aa = new ne(), oa = new ne(), la = new Lt(), ca = new Lt(), ha = new Ne(), ua = new ne(), da = new ne(), pa = new ne(), ma = new Lt(), fa = new Lt(), ga = new Lt();
        class va extends si {
          constructor(t2) {
            if (super(), this.isSprite = true, this.type = "Sprite", void 0 === ra) {
              ra = new Di();
              const t3 = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), e2 = new ta(t3, 5);
              ra.setIndex([0, 1, 2, 0, 2, 3]), ra.setAttribute("position", new ia(e2, 3, 0, false)), ra.setAttribute("uv", new ia(e2, 2, 3, false));
            }
            this.geometry = ra, this.material = void 0 !== t2 ? t2 : new na(), this.center = new Lt(0.5, 0.5);
          }
          raycast(t2, e2) {
            null === t2.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), aa.setFromMatrixScale(this.matrixWorld), ha.copy(t2.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t2.camera.matrixWorldInverse, this.matrixWorld), oa.setFromMatrixPosition(this.modelViewMatrix), t2.camera.isPerspectiveCamera && false === this.material.sizeAttenuation && aa.multiplyScalar(-oa.z);
            const i2 = this.material.rotation;
            let n2, r2;
            0 !== i2 && (r2 = Math.cos(i2), n2 = Math.sin(i2));
            const s2 = this.center;
            xa(ua.set(-0.5, -0.5, 0), oa, s2, aa, n2, r2), xa(da.set(0.5, -0.5, 0), oa, s2, aa, n2, r2), xa(pa.set(0.5, 0.5, 0), oa, s2, aa, n2, r2), ma.set(0, 0), fa.set(1, 0), ga.set(1, 1);
            let a2 = t2.ray.intersectTriangle(ua, da, pa, false, sa);
            if (null === a2 && (xa(da.set(-0.5, 0.5, 0), oa, s2, aa, n2, r2), fa.set(0, 1), a2 = t2.ray.intersectTriangle(ua, pa, da, false, sa), null === a2))
              return;
            const o2 = t2.ray.origin.distanceTo(sa);
            o2 < t2.near || o2 > t2.far || e2.push({ distance: o2, point: sa.clone(), uv: gi.getUV(sa, ua, da, pa, ma, fa, ga, new Lt()), face: null, object: this });
          }
          copy(t2, e2) {
            return super.copy(t2, e2), void 0 !== t2.center && this.center.copy(t2.center), this.material = t2.material, this;
          }
        }
        function xa(t2, e2, i2, n2, r2, s2) {
          la.subVectors(t2, i2).addScalar(0.5).multiply(n2), void 0 !== r2 ? (ca.x = s2 * la.x - r2 * la.y, ca.y = r2 * la.x + s2 * la.y) : ca.copy(la), t2.copy(e2), t2.x += ca.x, t2.y += ca.y, t2.applyMatrix4(ha);
        }
        const _a = new ne(), ya = new ne();
        class Ma extends si {
          constructor() {
            super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, { levels: { enumerable: true, value: [] }, isLOD: { value: true } }), this.autoUpdate = true;
          }
          copy(t2) {
            super.copy(t2, false);
            const e2 = t2.levels;
            for (let t3 = 0, i2 = e2.length; t3 < i2; t3++) {
              const i3 = e2[t3];
              this.addLevel(i3.object.clone(), i3.distance);
            }
            return this.autoUpdate = t2.autoUpdate, this;
          }
          addLevel(t2, e2 = 0) {
            e2 = Math.abs(e2);
            const i2 = this.levels;
            let n2;
            for (n2 = 0; n2 < i2.length && !(e2 < i2[n2].distance); n2++)
              ;
            return i2.splice(n2, 0, { distance: e2, object: t2 }), this.add(t2), this;
          }
          getCurrentLevel() {
            return this._currentLevel;
          }
          getObjectForDistance(t2) {
            const e2 = this.levels;
            if (e2.length > 0) {
              let i2, n2;
              for (i2 = 1, n2 = e2.length; i2 < n2 && !(t2 < e2[i2].distance); i2++)
                ;
              return e2[i2 - 1].object;
            }
            return null;
          }
          raycast(t2, e2) {
            if (this.levels.length > 0) {
              _a.setFromMatrixPosition(this.matrixWorld);
              const i2 = t2.ray.origin.distanceTo(_a);
              this.getObjectForDistance(i2).raycast(t2, e2);
            }
          }
          update(t2) {
            const e2 = this.levels;
            if (e2.length > 1) {
              _a.setFromMatrixPosition(t2.matrixWorld), ya.setFromMatrixPosition(this.matrixWorld);
              const i2 = _a.distanceTo(ya) / t2.zoom;
              let n2, r2;
              for (e2[0].object.visible = true, n2 = 1, r2 = e2.length; n2 < r2 && i2 >= e2[n2].distance; n2++)
                e2[n2 - 1].object.visible = false, e2[n2].object.visible = true;
              for (this._currentLevel = n2 - 1; n2 < r2; n2++)
                e2[n2].object.visible = false;
            }
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            false === this.autoUpdate && (e2.object.autoUpdate = false), e2.object.levels = [];
            const i2 = this.levels;
            for (let t3 = 0, n2 = i2.length; t3 < n2; t3++) {
              const n3 = i2[t3];
              e2.object.levels.push({ object: n3.object.uuid, distance: n3.distance });
            }
            return e2;
          }
        }
        const ba = new ne(), Sa = new $t(), wa = new $t(), Ta = new ne(), Aa = new Ne();
        class Ea extends Ki {
          constructor(t2, e2) {
            super(t2, e2), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new Ne(), this.bindMatrixInverse = new Ne();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.bindMode = t2.bindMode, this.bindMatrix.copy(t2.bindMatrix), this.bindMatrixInverse.copy(t2.bindMatrixInverse), this.skeleton = t2.skeleton, this;
          }
          bind(t2, e2) {
            this.skeleton = t2, void 0 === e2 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), e2 = this.matrixWorld), this.bindMatrix.copy(e2), this.bindMatrixInverse.copy(e2).invert();
          }
          pose() {
            this.skeleton.pose();
          }
          normalizeSkinWeights() {
            const t2 = new $t(), e2 = this.geometry.attributes.skinWeight;
            for (let i2 = 0, n2 = e2.count; i2 < n2; i2++) {
              t2.fromBufferAttribute(e2, i2);
              const n3 = 1 / t2.manhattanLength();
              n3 !== 1 / 0 ? t2.multiplyScalar(n3) : t2.set(1, 0, 0, 0), e2.setXYZW(i2, t2.x, t2.y, t2.z, t2.w);
            }
          }
          updateMatrixWorld(t2) {
            super.updateMatrixWorld(t2), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
          }
          boneTransform(t2, e2) {
            const i2 = this.skeleton, n2 = this.geometry;
            Sa.fromBufferAttribute(n2.attributes.skinIndex, t2), wa.fromBufferAttribute(n2.attributes.skinWeight, t2), ba.copy(e2).applyMatrix4(this.bindMatrix), e2.set(0, 0, 0);
            for (let t3 = 0; t3 < 4; t3++) {
              const n3 = wa.getComponent(t3);
              if (0 !== n3) {
                const r2 = Sa.getComponent(t3);
                Aa.multiplyMatrices(i2.bones[r2].matrixWorld, i2.boneInverses[r2]), e2.addScaledVector(Ta.copy(ba).applyMatrix4(Aa), n3);
              }
            }
            return e2.applyMatrix4(this.bindMatrixInverse);
          }
        }
        class Ca extends si {
          constructor() {
            super(), this.isBone = true, this.type = "Bone";
          }
        }
        class La extends Kt {
          constructor(t2 = null, e2 = 1, i2 = 1, n2, r2, s2, a2, o2, l2 = 1003, c2 = 1003, h2, u2) {
            super(null, s2, a2, o2, l2, c2, n2, r2, h2, u2), this.isDataTexture = true, this.image = { data: t2, width: e2, height: i2 }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
          }
        }
        const Ra = new Ne(), Pa = new Ne();
        class Ia {
          constructor(t2 = [], e2 = []) {
            this.uuid = _t(), this.bones = t2.slice(0), this.boneInverses = e2, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init();
          }
          init() {
            const t2 = this.bones, e2 = this.boneInverses;
            if (this.boneMatrices = new Float32Array(16 * t2.length), 0 === e2.length)
              this.calculateInverses();
            else if (t2.length !== e2.length) {
              console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
              for (let t3 = 0, e3 = this.bones.length; t3 < e3; t3++)
                this.boneInverses.push(new Ne());
            }
          }
          calculateInverses() {
            this.boneInverses.length = 0;
            for (let t2 = 0, e2 = this.bones.length; t2 < e2; t2++) {
              const e3 = new Ne();
              this.bones[t2] && e3.copy(this.bones[t2].matrixWorld).invert(), this.boneInverses.push(e3);
            }
          }
          pose() {
            for (let t2 = 0, e2 = this.bones.length; t2 < e2; t2++) {
              const e3 = this.bones[t2];
              e3 && e3.matrixWorld.copy(this.boneInverses[t2]).invert();
            }
            for (let t2 = 0, e2 = this.bones.length; t2 < e2; t2++) {
              const e3 = this.bones[t2];
              e3 && (e3.parent && e3.parent.isBone ? (e3.matrix.copy(e3.parent.matrixWorld).invert(), e3.matrix.multiply(e3.matrixWorld)) : e3.matrix.copy(e3.matrixWorld), e3.matrix.decompose(e3.position, e3.quaternion, e3.scale));
            }
          }
          update() {
            const t2 = this.bones, e2 = this.boneInverses, i2 = this.boneMatrices, n2 = this.boneTexture;
            for (let n3 = 0, r2 = t2.length; n3 < r2; n3++) {
              const r3 = t2[n3] ? t2[n3].matrixWorld : Pa;
              Ra.multiplyMatrices(r3, e2[n3]), Ra.toArray(i2, 16 * n3);
            }
            null !== n2 && (n2.needsUpdate = true);
          }
          clone() {
            return new Ia(this.bones, this.boneInverses);
          }
          computeBoneTexture() {
            let t2 = Math.sqrt(4 * this.bones.length);
            t2 = wt(t2), t2 = Math.max(t2, 4);
            const e2 = new Float32Array(t2 * t2 * 4);
            e2.set(this.boneMatrices);
            const i2 = new La(e2, t2, t2, w, M);
            return i2.needsUpdate = true, this.boneMatrices = e2, this.boneTexture = i2, this.boneTextureSize = t2, this;
          }
          getBoneByName(t2) {
            for (let e2 = 0, i2 = this.bones.length; e2 < i2; e2++) {
              const i3 = this.bones[e2];
              if (i3.name === t2)
                return i3;
            }
          }
          dispose() {
            null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null);
          }
          fromJSON(t2, e2) {
            this.uuid = t2.uuid;
            for (let i2 = 0, n2 = t2.bones.length; i2 < n2; i2++) {
              const n3 = t2.bones[i2];
              let r2 = e2[n3];
              void 0 === r2 && (console.warn("THREE.Skeleton: No bone found with UUID:", n3), r2 = new Ca()), this.bones.push(r2), this.boneInverses.push(new Ne().fromArray(t2.boneInverses[i2]));
            }
            return this.init(), this;
          }
          toJSON() {
            const t2 = { metadata: { version: 4.5, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
            t2.uuid = this.uuid;
            const e2 = this.bones, i2 = this.boneInverses;
            for (let n2 = 0, r2 = e2.length; n2 < r2; n2++) {
              const r3 = e2[n2];
              t2.bones.push(r3.uuid);
              const s2 = i2[n2];
              t2.boneInverses.push(s2.toArray());
            }
            return t2;
          }
        }
        class Da extends bi {
          constructor(t2, e2, i2, n2 = 1) {
            super(t2, e2, i2), this.isInstancedBufferAttribute = true, this.meshPerAttribute = n2;
          }
          copy(t2) {
            return super.copy(t2), this.meshPerAttribute = t2.meshPerAttribute, this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.meshPerAttribute = this.meshPerAttribute, t2.isInstancedBufferAttribute = true, t2;
          }
        }
        const Na = new Ne(), Oa = new Ne(), za = [], Ua = new Ki();
        class Ba extends Ki {
          constructor(t2, e2, i2) {
            super(t2, e2), this.isInstancedMesh = true, this.instanceMatrix = new Da(new Float32Array(16 * i2), 16), this.instanceColor = null, this.count = i2, this.frustumCulled = false;
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.instanceMatrix.copy(t2.instanceMatrix), null !== t2.instanceColor && (this.instanceColor = t2.instanceColor.clone()), this.count = t2.count, this;
          }
          getColorAt(t2, e2) {
            e2.fromArray(this.instanceColor.array, 3 * t2);
          }
          getMatrixAt(t2, e2) {
            e2.fromArray(this.instanceMatrix.array, 16 * t2);
          }
          raycast(t2, e2) {
            const i2 = this.matrixWorld, n2 = this.count;
            if (Ua.geometry = this.geometry, Ua.material = this.material, void 0 !== Ua.material)
              for (let r2 = 0; r2 < n2; r2++) {
                this.getMatrixAt(r2, Na), Oa.multiplyMatrices(i2, Na), Ua.matrixWorld = Oa, Ua.raycast(t2, za);
                for (let t3 = 0, i3 = za.length; t3 < i3; t3++) {
                  const i4 = za[t3];
                  i4.instanceId = r2, i4.object = this, e2.push(i4);
                }
                za.length = 0;
              }
          }
          setColorAt(t2, e2) {
            null === this.instanceColor && (this.instanceColor = new Da(new Float32Array(3 * this.instanceMatrix.count), 3)), e2.toArray(this.instanceColor.array, 3 * t2);
          }
          setMatrixAt(t2, e2) {
            e2.toArray(this.instanceMatrix.array, 16 * t2);
          }
          updateMorphTargets() {
          }
          dispose() {
            this.dispatchEvent({ type: "dispose" });
          }
        }
        class Fa extends xi {
          constructor(t2) {
            super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new jt(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.linewidth = t2.linewidth, this.linecap = t2.linecap, this.linejoin = t2.linejoin, this.fog = t2.fog, this;
          }
        }
        const ka = new ne(), Ga = new ne(), Va = new Ne(), Ha = new De(), Wa = new Te();
        class ja extends si {
          constructor(t2 = new Di(), e2 = new Fa()) {
            super(), this.isLine = true, this.type = "Line", this.geometry = t2, this.material = e2, this.updateMorphTargets();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.material = t2.material, this.geometry = t2.geometry, this;
          }
          computeLineDistances() {
            const t2 = this.geometry;
            if (null === t2.index) {
              const e2 = t2.attributes.position, i2 = [0];
              for (let t3 = 1, n2 = e2.count; t3 < n2; t3++)
                ka.fromBufferAttribute(e2, t3 - 1), Ga.fromBufferAttribute(e2, t3), i2[t3] = i2[t3 - 1], i2[t3] += ka.distanceTo(Ga);
              t2.setAttribute("lineDistance", new Ti(i2, 1));
            } else
              console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
          }
          raycast(t2, e2) {
            const i2 = this.geometry, n2 = this.matrixWorld, r2 = t2.params.Line.threshold, s2 = i2.drawRange;
            if (null === i2.boundingSphere && i2.computeBoundingSphere(), Wa.copy(i2.boundingSphere), Wa.applyMatrix4(n2), Wa.radius += r2, false === t2.ray.intersectsSphere(Wa))
              return;
            Va.copy(n2).invert(), Ha.copy(t2.ray).applyMatrix4(Va);
            const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, l2 = new ne(), c2 = new ne(), h2 = new ne(), u2 = new ne(), d2 = this.isLineSegments ? 2 : 1, p2 = i2.index, m2 = i2.attributes.position;
            if (null !== p2) {
              for (let i3 = Math.max(0, s2.start), n3 = Math.min(p2.count, s2.start + s2.count) - 1; i3 < n3; i3 += d2) {
                const n4 = p2.getX(i3), r3 = p2.getX(i3 + 1);
                l2.fromBufferAttribute(m2, n4), c2.fromBufferAttribute(m2, r3);
                if (Ha.distanceSqToSegment(l2, c2, u2, h2) > o2)
                  continue;
                u2.applyMatrix4(this.matrixWorld);
                const s3 = t2.ray.origin.distanceTo(u2);
                s3 < t2.near || s3 > t2.far || e2.push({ distance: s3, point: h2.clone().applyMatrix4(this.matrixWorld), index: i3, face: null, faceIndex: null, object: this });
              }
            } else {
              for (let i3 = Math.max(0, s2.start), n3 = Math.min(m2.count, s2.start + s2.count) - 1; i3 < n3; i3 += d2) {
                l2.fromBufferAttribute(m2, i3), c2.fromBufferAttribute(m2, i3 + 1);
                if (Ha.distanceSqToSegment(l2, c2, u2, h2) > o2)
                  continue;
                u2.applyMatrix4(this.matrixWorld);
                const n4 = t2.ray.origin.distanceTo(u2);
                n4 < t2.near || n4 > t2.far || e2.push({ distance: n4, point: h2.clone().applyMatrix4(this.matrixWorld), index: i3, face: null, faceIndex: null, object: this });
              }
            }
          }
          updateMorphTargets() {
            const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
            if (e2.length > 0) {
              const i2 = t2[e2[0]];
              if (void 0 !== i2) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
                  const e4 = i2[t3].name || String(t3);
                  this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
                }
              }
            }
          }
        }
        const qa = new ne(), Xa = new ne();
        class Ya extends ja {
          constructor(t2, e2) {
            super(t2, e2), this.isLineSegments = true, this.type = "LineSegments";
          }
          computeLineDistances() {
            const t2 = this.geometry;
            if (null === t2.index) {
              const e2 = t2.attributes.position, i2 = [];
              for (let t3 = 0, n2 = e2.count; t3 < n2; t3 += 2)
                qa.fromBufferAttribute(e2, t3), Xa.fromBufferAttribute(e2, t3 + 1), i2[t3] = 0 === t3 ? 0 : i2[t3 - 1], i2[t3 + 1] = i2[t3] + qa.distanceTo(Xa);
              t2.setAttribute("lineDistance", new Ti(i2, 1));
            } else
              console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
            return this;
          }
        }
        class Za extends ja {
          constructor(t2, e2) {
            super(t2, e2), this.isLineLoop = true, this.type = "LineLoop";
          }
        }
        class Ja extends xi {
          constructor(t2) {
            super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new jt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.alphaMap = t2.alphaMap, this.size = t2.size, this.sizeAttenuation = t2.sizeAttenuation, this.fog = t2.fog, this;
          }
        }
        const Ka = new Ne(), $a = new De(), Qa = new Te(), to = new ne();
        class eo extends si {
          constructor(t2 = new Di(), e2 = new Ja()) {
            super(), this.isPoints = true, this.type = "Points", this.geometry = t2, this.material = e2, this.updateMorphTargets();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.material = t2.material, this.geometry = t2.geometry, this;
          }
          raycast(t2, e2) {
            const i2 = this.geometry, n2 = this.matrixWorld, r2 = t2.params.Points.threshold, s2 = i2.drawRange;
            if (null === i2.boundingSphere && i2.computeBoundingSphere(), Qa.copy(i2.boundingSphere), Qa.applyMatrix4(n2), Qa.radius += r2, false === t2.ray.intersectsSphere(Qa))
              return;
            Ka.copy(n2).invert(), $a.copy(t2.ray).applyMatrix4(Ka);
            const a2 = r2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), o2 = a2 * a2, l2 = i2.index, c2 = i2.attributes.position;
            if (null !== l2) {
              for (let i3 = Math.max(0, s2.start), r3 = Math.min(l2.count, s2.start + s2.count); i3 < r3; i3++) {
                const r4 = l2.getX(i3);
                to.fromBufferAttribute(c2, r4), io(to, r4, o2, n2, t2, e2, this);
              }
            } else {
              for (let i3 = Math.max(0, s2.start), r3 = Math.min(c2.count, s2.start + s2.count); i3 < r3; i3++)
                to.fromBufferAttribute(c2, i3), io(to, i3, o2, n2, t2, e2, this);
            }
          }
          updateMorphTargets() {
            const t2 = this.geometry.morphAttributes, e2 = Object.keys(t2);
            if (e2.length > 0) {
              const i2 = t2[e2[0]];
              if (void 0 !== i2) {
                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (let t3 = 0, e3 = i2.length; t3 < e3; t3++) {
                  const e4 = i2[t3].name || String(t3);
                  this.morphTargetInfluences.push(0), this.morphTargetDictionary[e4] = t3;
                }
              }
            }
          }
        }
        function io(t2, e2, i2, n2, r2, s2, a2) {
          const o2 = $a.distanceSqToPoint(t2);
          if (o2 < i2) {
            const i3 = new ne();
            $a.closestPointToPoint(t2, i3), i3.applyMatrix4(n2);
            const l2 = r2.ray.origin.distanceTo(i3);
            if (l2 < r2.near || l2 > r2.far)
              return;
            s2.push({ distance: l2, distanceToRay: Math.sqrt(o2), point: i3, index: e2, face: null, object: a2 });
          }
        }
        class no extends Kt {
          constructor(t2, e2, i2, n2, r2, s2, a2, o2, l2, c2, h2, u2) {
            super(null, s2, a2, o2, l2, c2, n2, r2, h2, u2), this.isCompressedTexture = true, this.image = { width: e2, height: i2 }, this.mipmaps = t2, this.flipY = false, this.generateMipmaps = false;
          }
        }
        class ro {
          constructor() {
            this.type = "Curve", this.arcLengthDivisions = 200;
          }
          getPoint() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null;
          }
          getPointAt(t2, e2) {
            const i2 = this.getUtoTmapping(t2);
            return this.getPoint(i2, e2);
          }
          getPoints(t2 = 5) {
            const e2 = [];
            for (let i2 = 0; i2 <= t2; i2++)
              e2.push(this.getPoint(i2 / t2));
            return e2;
          }
          getSpacedPoints(t2 = 5) {
            const e2 = [];
            for (let i2 = 0; i2 <= t2; i2++)
              e2.push(this.getPointAt(i2 / t2));
            return e2;
          }
          getLength() {
            const t2 = this.getLengths();
            return t2[t2.length - 1];
          }
          getLengths(t2 = this.arcLengthDivisions) {
            if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate)
              return this.cacheArcLengths;
            this.needsUpdate = false;
            const e2 = [];
            let i2, n2 = this.getPoint(0), r2 = 0;
            e2.push(0);
            for (let s2 = 1; s2 <= t2; s2++)
              i2 = this.getPoint(s2 / t2), r2 += i2.distanceTo(n2), e2.push(r2), n2 = i2;
            return this.cacheArcLengths = e2, e2;
          }
          updateArcLengths() {
            this.needsUpdate = true, this.getLengths();
          }
          getUtoTmapping(t2, e2) {
            const i2 = this.getLengths();
            let n2 = 0;
            const r2 = i2.length;
            let s2;
            s2 = e2 || t2 * i2[r2 - 1];
            let a2, o2 = 0, l2 = r2 - 1;
            for (; o2 <= l2; )
              if (n2 = Math.floor(o2 + (l2 - o2) / 2), a2 = i2[n2] - s2, a2 < 0)
                o2 = n2 + 1;
              else {
                if (!(a2 > 0)) {
                  l2 = n2;
                  break;
                }
                l2 = n2 - 1;
              }
            if (n2 = l2, i2[n2] === s2)
              return n2 / (r2 - 1);
            const c2 = i2[n2];
            return (n2 + (s2 - c2) / (i2[n2 + 1] - c2)) / (r2 - 1);
          }
          getTangent(t2, e2) {
            const i2 = 1e-4;
            let n2 = t2 - i2, r2 = t2 + i2;
            n2 < 0 && (n2 = 0), r2 > 1 && (r2 = 1);
            const s2 = this.getPoint(n2), a2 = this.getPoint(r2), o2 = e2 || (s2.isVector2 ? new Lt() : new ne());
            return o2.copy(a2).sub(s2).normalize(), o2;
          }
          getTangentAt(t2, e2) {
            const i2 = this.getUtoTmapping(t2);
            return this.getTangent(i2, e2);
          }
          computeFrenetFrames(t2, e2) {
            const i2 = new ne(), n2 = [], r2 = [], s2 = [], a2 = new ne(), o2 = new Ne();
            for (let e3 = 0; e3 <= t2; e3++) {
              const i3 = e3 / t2;
              n2[e3] = this.getTangentAt(i3, new ne());
            }
            r2[0] = new ne(), s2[0] = new ne();
            let l2 = Number.MAX_VALUE;
            const c2 = Math.abs(n2[0].x), h2 = Math.abs(n2[0].y), u2 = Math.abs(n2[0].z);
            c2 <= l2 && (l2 = c2, i2.set(1, 0, 0)), h2 <= l2 && (l2 = h2, i2.set(0, 1, 0)), u2 <= l2 && i2.set(0, 0, 1), a2.crossVectors(n2[0], i2).normalize(), r2[0].crossVectors(n2[0], a2), s2[0].crossVectors(n2[0], r2[0]);
            for (let e3 = 1; e3 <= t2; e3++) {
              if (r2[e3] = r2[e3 - 1].clone(), s2[e3] = s2[e3 - 1].clone(), a2.crossVectors(n2[e3 - 1], n2[e3]), a2.length() > Number.EPSILON) {
                a2.normalize();
                const t3 = Math.acos(yt(n2[e3 - 1].dot(n2[e3]), -1, 1));
                r2[e3].applyMatrix4(o2.makeRotationAxis(a2, t3));
              }
              s2[e3].crossVectors(n2[e3], r2[e3]);
            }
            if (true === e2) {
              let e3 = Math.acos(yt(r2[0].dot(r2[t2]), -1, 1));
              e3 /= t2, n2[0].dot(a2.crossVectors(r2[0], r2[t2])) > 0 && (e3 = -e3);
              for (let i3 = 1; i3 <= t2; i3++)
                r2[i3].applyMatrix4(o2.makeRotationAxis(n2[i3], e3 * i3)), s2[i3].crossVectors(n2[i3], r2[i3]);
            }
            return { tangents: n2, normals: r2, binormals: s2 };
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            return this.arcLengthDivisions = t2.arcLengthDivisions, this;
          }
          toJSON() {
            const t2 = { metadata: { version: 4.5, type: "Curve", generator: "Curve.toJSON" } };
            return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
          }
          fromJSON(t2) {
            return this.arcLengthDivisions = t2.arcLengthDivisions, this;
          }
        }
        class so extends ro {
          constructor(t2 = 0, e2 = 0, i2 = 1, n2 = 1, r2 = 0, s2 = 2 * Math.PI, a2 = false, o2 = 0) {
            super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e2, this.xRadius = i2, this.yRadius = n2, this.aStartAngle = r2, this.aEndAngle = s2, this.aClockwise = a2, this.aRotation = o2;
          }
          getPoint(t2, e2) {
            const i2 = e2 || new Lt(), n2 = 2 * Math.PI;
            let r2 = this.aEndAngle - this.aStartAngle;
            const s2 = Math.abs(r2) < Number.EPSILON;
            for (; r2 < 0; )
              r2 += n2;
            for (; r2 > n2; )
              r2 -= n2;
            r2 < Number.EPSILON && (r2 = s2 ? 0 : n2), true !== this.aClockwise || s2 || (r2 === n2 ? r2 = -n2 : r2 -= n2);
            const a2 = this.aStartAngle + t2 * r2;
            let o2 = this.aX + this.xRadius * Math.cos(a2), l2 = this.aY + this.yRadius * Math.sin(a2);
            if (0 !== this.aRotation) {
              const t3 = Math.cos(this.aRotation), e3 = Math.sin(this.aRotation), i3 = o2 - this.aX, n3 = l2 - this.aY;
              o2 = i3 * t3 - n3 * e3 + this.aX, l2 = i3 * e3 + n3 * t3 + this.aY;
            }
            return i2.set(o2, l2);
          }
          copy(t2) {
            return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
          }
        }
        class ao extends so {
          constructor(t2, e2, i2, n2, r2, s2) {
            super(t2, e2, i2, i2, n2, r2, s2), this.isArcCurve = true, this.type = "ArcCurve";
          }
        }
        function oo() {
          let t2 = 0, e2 = 0, i2 = 0, n2 = 0;
          function r2(r3, s2, a2, o2) {
            t2 = r3, e2 = a2, i2 = -3 * r3 + 3 * s2 - 2 * a2 - o2, n2 = 2 * r3 - 2 * s2 + a2 + o2;
          }
          return { initCatmullRom: function(t3, e3, i3, n3, s2) {
            r2(e3, i3, s2 * (i3 - t3), s2 * (n3 - e3));
          }, initNonuniformCatmullRom: function(t3, e3, i3, n3, s2, a2, o2) {
            let l2 = (e3 - t3) / s2 - (i3 - t3) / (s2 + a2) + (i3 - e3) / a2, c2 = (i3 - e3) / a2 - (n3 - e3) / (a2 + o2) + (n3 - i3) / o2;
            l2 *= a2, c2 *= a2, r2(e3, i3, l2, c2);
          }, calc: function(r3) {
            const s2 = r3 * r3;
            return t2 + e2 * r3 + i2 * s2 + n2 * (s2 * r3);
          } };
        }
        const lo = new ne(), co = new oo(), ho = new oo(), uo = new oo();
        class po extends ro {
          constructor(t2 = [], e2 = false, i2 = "centripetal", n2 = 0.5) {
            super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e2, this.curveType = i2, this.tension = n2;
          }
          getPoint(t2, e2 = new ne()) {
            const i2 = e2, n2 = this.points, r2 = n2.length, s2 = (r2 - (this.closed ? 0 : 1)) * t2;
            let a2, o2, l2 = Math.floor(s2), c2 = s2 - l2;
            this.closed ? l2 += l2 > 0 ? 0 : (Math.floor(Math.abs(l2) / r2) + 1) * r2 : 0 === c2 && l2 === r2 - 1 && (l2 = r2 - 2, c2 = 1), this.closed || l2 > 0 ? a2 = n2[(l2 - 1) % r2] : (lo.subVectors(n2[0], n2[1]).add(n2[0]), a2 = lo);
            const h2 = n2[l2 % r2], u2 = n2[(l2 + 1) % r2];
            if (this.closed || l2 + 2 < r2 ? o2 = n2[(l2 + 2) % r2] : (lo.subVectors(n2[r2 - 1], n2[r2 - 2]).add(n2[r2 - 1]), o2 = lo), "centripetal" === this.curveType || "chordal" === this.curveType) {
              const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
              let e3 = Math.pow(a2.distanceToSquared(h2), t3), i3 = Math.pow(h2.distanceToSquared(u2), t3), n3 = Math.pow(u2.distanceToSquared(o2), t3);
              i3 < 1e-4 && (i3 = 1), e3 < 1e-4 && (e3 = i3), n3 < 1e-4 && (n3 = i3), co.initNonuniformCatmullRom(a2.x, h2.x, u2.x, o2.x, e3, i3, n3), ho.initNonuniformCatmullRom(a2.y, h2.y, u2.y, o2.y, e3, i3, n3), uo.initNonuniformCatmullRom(a2.z, h2.z, u2.z, o2.z, e3, i3, n3);
            } else
              "catmullrom" === this.curveType && (co.initCatmullRom(a2.x, h2.x, u2.x, o2.x, this.tension), ho.initCatmullRom(a2.y, h2.y, u2.y, o2.y, this.tension), uo.initCatmullRom(a2.z, h2.z, u2.z, o2.z, this.tension));
            return i2.set(co.calc(c2), ho.calc(c2), uo.calc(c2)), i2;
          }
          copy(t2) {
            super.copy(t2), this.points = [];
            for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
              const i3 = t2.points[e2];
              this.points.push(i3.clone());
            }
            return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
          }
          toJSON() {
            const t2 = super.toJSON();
            t2.points = [];
            for (let e2 = 0, i2 = this.points.length; e2 < i2; e2++) {
              const i3 = this.points[e2];
              t2.points.push(i3.toArray());
            }
            return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
          }
          fromJSON(t2) {
            super.fromJSON(t2), this.points = [];
            for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
              const i3 = t2.points[e2];
              this.points.push(new ne().fromArray(i3));
            }
            return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
          }
        }
        function mo(t2, e2, i2, n2, r2) {
          const s2 = 0.5 * (n2 - e2), a2 = 0.5 * (r2 - i2), o2 = t2 * t2;
          return (2 * i2 - 2 * n2 + s2 + a2) * (t2 * o2) + (-3 * i2 + 3 * n2 - 2 * s2 - a2) * o2 + s2 * t2 + i2;
        }
        function fo(t2, e2, i2, n2) {
          return function(t3, e3) {
            const i3 = 1 - t3;
            return i3 * i3 * e3;
          }(t2, e2) + function(t3, e3) {
            return 2 * (1 - t3) * t3 * e3;
          }(t2, i2) + function(t3, e3) {
            return t3 * t3 * e3;
          }(t2, n2);
        }
        function go(t2, e2, i2, n2, r2) {
          return function(t3, e3) {
            const i3 = 1 - t3;
            return i3 * i3 * i3 * e3;
          }(t2, e2) + function(t3, e3) {
            const i3 = 1 - t3;
            return 3 * i3 * i3 * t3 * e3;
          }(t2, i2) + function(t3, e3) {
            return 3 * (1 - t3) * t3 * t3 * e3;
          }(t2, n2) + function(t3, e3) {
            return t3 * t3 * t3 * e3;
          }(t2, r2);
        }
        class vo extends ro {
          constructor(t2 = new Lt(), e2 = new Lt(), i2 = new Lt(), n2 = new Lt()) {
            super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = i2, this.v3 = n2;
          }
          getPoint(t2, e2 = new Lt()) {
            const i2 = e2, n2 = this.v0, r2 = this.v1, s2 = this.v2, a2 = this.v3;
            return i2.set(go(t2, n2.x, r2.x, s2.x, a2.x), go(t2, n2.y, r2.y, s2.y, a2.y)), i2;
          }
          copy(t2) {
            return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
          }
        }
        class xo extends ro {
          constructor(t2 = new ne(), e2 = new ne(), i2 = new ne(), n2 = new ne()) {
            super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = i2, this.v3 = n2;
          }
          getPoint(t2, e2 = new ne()) {
            const i2 = e2, n2 = this.v0, r2 = this.v1, s2 = this.v2, a2 = this.v3;
            return i2.set(go(t2, n2.x, r2.x, s2.x, a2.x), go(t2, n2.y, r2.y, s2.y, a2.y), go(t2, n2.z, r2.z, s2.z, a2.z)), i2;
          }
          copy(t2) {
            return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
          }
        }
        class _o extends ro {
          constructor(t2 = new Lt(), e2 = new Lt()) {
            super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e2;
          }
          getPoint(t2, e2 = new Lt()) {
            const i2 = e2;
            return 1 === t2 ? i2.copy(this.v2) : (i2.copy(this.v2).sub(this.v1), i2.multiplyScalar(t2).add(this.v1)), i2;
          }
          getPointAt(t2, e2) {
            return this.getPoint(t2, e2);
          }
          getTangent(t2, e2) {
            const i2 = e2 || new Lt();
            return i2.copy(this.v2).sub(this.v1).normalize(), i2;
          }
          copy(t2) {
            return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
          }
        }
        class yo extends ro {
          constructor(t2 = new ne(), e2 = new ne()) {
            super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e2;
          }
          getPoint(t2, e2 = new ne()) {
            const i2 = e2;
            return 1 === t2 ? i2.copy(this.v2) : (i2.copy(this.v2).sub(this.v1), i2.multiplyScalar(t2).add(this.v1)), i2;
          }
          getPointAt(t2, e2) {
            return this.getPoint(t2, e2);
          }
          copy(t2) {
            return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
          }
        }
        class Mo extends ro {
          constructor(t2 = new Lt(), e2 = new Lt(), i2 = new Lt()) {
            super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e2, this.v2 = i2;
          }
          getPoint(t2, e2 = new Lt()) {
            const i2 = e2, n2 = this.v0, r2 = this.v1, s2 = this.v2;
            return i2.set(fo(t2, n2.x, r2.x, s2.x), fo(t2, n2.y, r2.y, s2.y)), i2;
          }
          copy(t2) {
            return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
          }
        }
        class bo extends ro {
          constructor(t2 = new ne(), e2 = new ne(), i2 = new ne()) {
            super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e2, this.v2 = i2;
          }
          getPoint(t2, e2 = new ne()) {
            const i2 = e2, n2 = this.v0, r2 = this.v1, s2 = this.v2;
            return i2.set(fo(t2, n2.x, r2.x, s2.x), fo(t2, n2.y, r2.y, s2.y), fo(t2, n2.z, r2.z, s2.z)), i2;
          }
          copy(t2) {
            return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
          }
        }
        class So extends ro {
          constructor(t2 = []) {
            super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
          }
          getPoint(t2, e2 = new Lt()) {
            const i2 = e2, n2 = this.points, r2 = (n2.length - 1) * t2, s2 = Math.floor(r2), a2 = r2 - s2, o2 = n2[0 === s2 ? s2 : s2 - 1], l2 = n2[s2], c2 = n2[s2 > n2.length - 2 ? n2.length - 1 : s2 + 1], h2 = n2[s2 > n2.length - 3 ? n2.length - 1 : s2 + 2];
            return i2.set(mo(a2, o2.x, l2.x, c2.x, h2.x), mo(a2, o2.y, l2.y, c2.y, h2.y)), i2;
          }
          copy(t2) {
            super.copy(t2), this.points = [];
            for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
              const i3 = t2.points[e2];
              this.points.push(i3.clone());
            }
            return this;
          }
          toJSON() {
            const t2 = super.toJSON();
            t2.points = [];
            for (let e2 = 0, i2 = this.points.length; e2 < i2; e2++) {
              const i3 = this.points[e2];
              t2.points.push(i3.toArray());
            }
            return t2;
          }
          fromJSON(t2) {
            super.fromJSON(t2), this.points = [];
            for (let e2 = 0, i2 = t2.points.length; e2 < i2; e2++) {
              const i3 = t2.points[e2];
              this.points.push(new Lt().fromArray(i3));
            }
            return this;
          }
        }
        var wo = Object.freeze({ __proto__: null, ArcCurve: ao, CatmullRomCurve3: po, CubicBezierCurve: vo, CubicBezierCurve3: xo, EllipseCurve: so, LineCurve: _o, LineCurve3: yo, QuadraticBezierCurve: Mo, QuadraticBezierCurve3: bo, SplineCurve: So });
        class To extends ro {
          constructor() {
            super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
          }
          add(t2) {
            this.curves.push(t2);
          }
          closePath() {
            const t2 = this.curves[0].getPoint(0), e2 = this.curves[this.curves.length - 1].getPoint(1);
            t2.equals(e2) || this.curves.push(new _o(e2, t2));
          }
          getPoint(t2, e2) {
            const i2 = t2 * this.getLength(), n2 = this.getCurveLengths();
            let r2 = 0;
            for (; r2 < n2.length; ) {
              if (n2[r2] >= i2) {
                const t3 = n2[r2] - i2, s2 = this.curves[r2], a2 = s2.getLength(), o2 = 0 === a2 ? 0 : 1 - t3 / a2;
                return s2.getPointAt(o2, e2);
              }
              r2++;
            }
            return null;
          }
          getLength() {
            const t2 = this.getCurveLengths();
            return t2[t2.length - 1];
          }
          updateArcLengths() {
            this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
          }
          getCurveLengths() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
              return this.cacheLengths;
            const t2 = [];
            let e2 = 0;
            for (let i2 = 0, n2 = this.curves.length; i2 < n2; i2++)
              e2 += this.curves[i2].getLength(), t2.push(e2);
            return this.cacheLengths = t2, t2;
          }
          getSpacedPoints(t2 = 40) {
            const e2 = [];
            for (let i2 = 0; i2 <= t2; i2++)
              e2.push(this.getPoint(i2 / t2));
            return this.autoClose && e2.push(e2[0]), e2;
          }
          getPoints(t2 = 12) {
            const e2 = [];
            let i2;
            for (let n2 = 0, r2 = this.curves; n2 < r2.length; n2++) {
              const s2 = r2[n2], a2 = s2.isEllipseCurve ? 2 * t2 : s2.isLineCurve || s2.isLineCurve3 ? 1 : s2.isSplineCurve ? t2 * s2.points.length : t2, o2 = s2.getPoints(a2);
              for (let t3 = 0; t3 < o2.length; t3++) {
                const n3 = o2[t3];
                i2 && i2.equals(n3) || (e2.push(n3), i2 = n3);
              }
            }
            return this.autoClose && e2.length > 1 && !e2[e2.length - 1].equals(e2[0]) && e2.push(e2[0]), e2;
          }
          copy(t2) {
            super.copy(t2), this.curves = [];
            for (let e2 = 0, i2 = t2.curves.length; e2 < i2; e2++) {
              const i3 = t2.curves[e2];
              this.curves.push(i3.clone());
            }
            return this.autoClose = t2.autoClose, this;
          }
          toJSON() {
            const t2 = super.toJSON();
            t2.autoClose = this.autoClose, t2.curves = [];
            for (let e2 = 0, i2 = this.curves.length; e2 < i2; e2++) {
              const i3 = this.curves[e2];
              t2.curves.push(i3.toJSON());
            }
            return t2;
          }
          fromJSON(t2) {
            super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
            for (let e2 = 0, i2 = t2.curves.length; e2 < i2; e2++) {
              const i3 = t2.curves[e2];
              this.curves.push(new wo[i3.type]().fromJSON(i3));
            }
            return this;
          }
        }
        class Ao extends To {
          constructor(t2) {
            super(), this.type = "Path", this.currentPoint = new Lt(), t2 && this.setFromPoints(t2);
          }
          setFromPoints(t2) {
            this.moveTo(t2[0].x, t2[0].y);
            for (let e2 = 1, i2 = t2.length; e2 < i2; e2++)
              this.lineTo(t2[e2].x, t2[e2].y);
            return this;
          }
          moveTo(t2, e2) {
            return this.currentPoint.set(t2, e2), this;
          }
          lineTo(t2, e2) {
            const i2 = new _o(this.currentPoint.clone(), new Lt(t2, e2));
            return this.curves.push(i2), this.currentPoint.set(t2, e2), this;
          }
          quadraticCurveTo(t2, e2, i2, n2) {
            const r2 = new Mo(this.currentPoint.clone(), new Lt(t2, e2), new Lt(i2, n2));
            return this.curves.push(r2), this.currentPoint.set(i2, n2), this;
          }
          bezierCurveTo(t2, e2, i2, n2, r2, s2) {
            const a2 = new vo(this.currentPoint.clone(), new Lt(t2, e2), new Lt(i2, n2), new Lt(r2, s2));
            return this.curves.push(a2), this.currentPoint.set(r2, s2), this;
          }
          splineThru(t2) {
            const e2 = [this.currentPoint.clone()].concat(t2), i2 = new So(e2);
            return this.curves.push(i2), this.currentPoint.copy(t2[t2.length - 1]), this;
          }
          arc(t2, e2, i2, n2, r2, s2) {
            const a2 = this.currentPoint.x, o2 = this.currentPoint.y;
            return this.absarc(t2 + a2, e2 + o2, i2, n2, r2, s2), this;
          }
          absarc(t2, e2, i2, n2, r2, s2) {
            return this.absellipse(t2, e2, i2, i2, n2, r2, s2), this;
          }
          ellipse(t2, e2, i2, n2, r2, s2, a2, o2) {
            const l2 = this.currentPoint.x, c2 = this.currentPoint.y;
            return this.absellipse(t2 + l2, e2 + c2, i2, n2, r2, s2, a2, o2), this;
          }
          absellipse(t2, e2, i2, n2, r2, s2, a2, o2) {
            const l2 = new so(t2, e2, i2, n2, r2, s2, a2, o2);
            if (this.curves.length > 0) {
              const t3 = l2.getPoint(0);
              t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
            }
            this.curves.push(l2);
            const c2 = l2.getPoint(1);
            return this.currentPoint.copy(c2), this;
          }
          copy(t2) {
            return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.currentPoint = this.currentPoint.toArray(), t2;
          }
          fromJSON(t2) {
            return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
          }
        }
        class Eo extends Di {
          constructor(t2 = [new Lt(0, -0.5), new Lt(0.5, 0), new Lt(0, 0.5)], e2 = 12, i2 = 0, n2 = 2 * Math.PI) {
            super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e2, phiStart: i2, phiLength: n2 }, e2 = Math.floor(e2), n2 = yt(n2, 0, 2 * Math.PI);
            const r2 = [], s2 = [], a2 = [], o2 = [], l2 = [], c2 = 1 / e2, h2 = new ne(), u2 = new Lt(), d2 = new ne(), p2 = new ne(), m2 = new ne();
            let f2 = 0, g2 = 0;
            for (let e3 = 0; e3 <= t2.length - 1; e3++)
              switch (e3) {
                case 0:
                  f2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -f2, d2.z = 0 * g2, m2.copy(d2), d2.normalize(), o2.push(d2.x, d2.y, d2.z);
                  break;
                case t2.length - 1:
                  o2.push(m2.x, m2.y, m2.z);
                  break;
                default:
                  f2 = t2[e3 + 1].x - t2[e3].x, g2 = t2[e3 + 1].y - t2[e3].y, d2.x = 1 * g2, d2.y = -f2, d2.z = 0 * g2, p2.copy(d2), d2.x += m2.x, d2.y += m2.y, d2.z += m2.z, d2.normalize(), o2.push(d2.x, d2.y, d2.z), m2.copy(p2);
              }
            for (let r3 = 0; r3 <= e2; r3++) {
              const d3 = i2 + r3 * c2 * n2, p3 = Math.sin(d3), m3 = Math.cos(d3);
              for (let i3 = 0; i3 <= t2.length - 1; i3++) {
                h2.x = t2[i3].x * p3, h2.y = t2[i3].y, h2.z = t2[i3].x * m3, s2.push(h2.x, h2.y, h2.z), u2.x = r3 / e2, u2.y = i3 / (t2.length - 1), a2.push(u2.x, u2.y);
                const n3 = o2[3 * i3 + 0] * p3, c3 = o2[3 * i3 + 1], d4 = o2[3 * i3 + 0] * m3;
                l2.push(n3, c3, d4);
              }
            }
            for (let i3 = 0; i3 < e2; i3++)
              for (let e3 = 0; e3 < t2.length - 1; e3++) {
                const n3 = e3 + i3 * t2.length, s3 = n3, a3 = n3 + t2.length, o3 = n3 + t2.length + 1, l3 = n3 + 1;
                r2.push(s3, a3, l3), r2.push(o3, l3, a3);
              }
            this.setIndex(r2), this.setAttribute("position", new Ti(s2, 3)), this.setAttribute("uv", new Ti(a2, 2)), this.setAttribute("normal", new Ti(l2, 3));
          }
          static fromJSON(t2) {
            return new Eo(t2.points, t2.segments, t2.phiStart, t2.phiLength);
          }
        }
        class Co extends Eo {
          constructor(t2 = 1, e2 = 1, i2 = 4, n2 = 8) {
            const r2 = new Ao();
            r2.absarc(0, -e2 / 2, t2, 1.5 * Math.PI, 0), r2.absarc(0, e2 / 2, t2, 0, 0.5 * Math.PI), super(r2.getPoints(i2), n2), this.type = "CapsuleGeometry", this.parameters = { radius: t2, height: e2, capSegments: i2, radialSegments: n2 };
          }
          static fromJSON(t2) {
            return new Co(t2.radius, t2.length, t2.capSegments, t2.radialSegments);
          }
        }
        class Lo extends Di {
          constructor(t2 = 1, e2 = 8, i2 = 0, n2 = 2 * Math.PI) {
            super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e2, thetaStart: i2, thetaLength: n2 }, e2 = Math.max(3, e2);
            const r2 = [], s2 = [], a2 = [], o2 = [], l2 = new ne(), c2 = new Lt();
            s2.push(0, 0, 0), a2.push(0, 0, 1), o2.push(0.5, 0.5);
            for (let r3 = 0, h2 = 3; r3 <= e2; r3++, h2 += 3) {
              const u2 = i2 + r3 / e2 * n2;
              l2.x = t2 * Math.cos(u2), l2.y = t2 * Math.sin(u2), s2.push(l2.x, l2.y, l2.z), a2.push(0, 0, 1), c2.x = (s2[h2] / t2 + 1) / 2, c2.y = (s2[h2 + 1] / t2 + 1) / 2, o2.push(c2.x, c2.y);
            }
            for (let t3 = 1; t3 <= e2; t3++)
              r2.push(t3, t3 + 1, 0);
            this.setIndex(r2), this.setAttribute("position", new Ti(s2, 3)), this.setAttribute("normal", new Ti(a2, 3)), this.setAttribute("uv", new Ti(o2, 2));
          }
          static fromJSON(t2) {
            return new Lo(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
          }
        }
        class Ro extends Di {
          constructor(t2 = 1, e2 = 1, i2 = 1, n2 = 8, r2 = 1, s2 = false, a2 = 0, o2 = 2 * Math.PI) {
            super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e2, height: i2, radialSegments: n2, heightSegments: r2, openEnded: s2, thetaStart: a2, thetaLength: o2 };
            const l2 = this;
            n2 = Math.floor(n2), r2 = Math.floor(r2);
            const c2 = [], h2 = [], u2 = [], d2 = [];
            let p2 = 0;
            const m2 = [], f2 = i2 / 2;
            let g2 = 0;
            function v2(i3) {
              const r3 = p2, s3 = new Lt(), m3 = new ne();
              let v3 = 0;
              const x2 = true === i3 ? t2 : e2, _2 = true === i3 ? 1 : -1;
              for (let t3 = 1; t3 <= n2; t3++)
                h2.push(0, f2 * _2, 0), u2.push(0, _2, 0), d2.push(0.5, 0.5), p2++;
              const y2 = p2;
              for (let t3 = 0; t3 <= n2; t3++) {
                const e3 = t3 / n2 * o2 + a2, i4 = Math.cos(e3), r4 = Math.sin(e3);
                m3.x = x2 * r4, m3.y = f2 * _2, m3.z = x2 * i4, h2.push(m3.x, m3.y, m3.z), u2.push(0, _2, 0), s3.x = 0.5 * i4 + 0.5, s3.y = 0.5 * r4 * _2 + 0.5, d2.push(s3.x, s3.y), p2++;
              }
              for (let t3 = 0; t3 < n2; t3++) {
                const e3 = r3 + t3, n3 = y2 + t3;
                true === i3 ? c2.push(n3, n3 + 1, e3) : c2.push(n3 + 1, n3, e3), v3 += 3;
              }
              l2.addGroup(g2, v3, true === i3 ? 1 : 2), g2 += v3;
            }
            !function() {
              const s3 = new ne(), v3 = new ne();
              let x2 = 0;
              const _2 = (e2 - t2) / i2;
              for (let l3 = 0; l3 <= r2; l3++) {
                const c3 = [], g3 = l3 / r2, x3 = g3 * (e2 - t2) + t2;
                for (let t3 = 0; t3 <= n2; t3++) {
                  const e3 = t3 / n2, r3 = e3 * o2 + a2, l4 = Math.sin(r3), m3 = Math.cos(r3);
                  v3.x = x3 * l4, v3.y = -g3 * i2 + f2, v3.z = x3 * m3, h2.push(v3.x, v3.y, v3.z), s3.set(l4, _2, m3).normalize(), u2.push(s3.x, s3.y, s3.z), d2.push(e3, 1 - g3), c3.push(p2++);
                }
                m2.push(c3);
              }
              for (let t3 = 0; t3 < n2; t3++)
                for (let e3 = 0; e3 < r2; e3++) {
                  const i3 = m2[e3][t3], n3 = m2[e3 + 1][t3], r3 = m2[e3 + 1][t3 + 1], s4 = m2[e3][t3 + 1];
                  c2.push(i3, n3, s4), c2.push(n3, r3, s4), x2 += 6;
                }
              l2.addGroup(g2, x2, 0), g2 += x2;
            }(), false === s2 && (t2 > 0 && v2(true), e2 > 0 && v2(false)), this.setIndex(c2), this.setAttribute("position", new Ti(h2, 3)), this.setAttribute("normal", new Ti(u2, 3)), this.setAttribute("uv", new Ti(d2, 2));
          }
          static fromJSON(t2) {
            return new Ro(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
          }
        }
        class Po extends Ro {
          constructor(t2 = 1, e2 = 1, i2 = 8, n2 = 1, r2 = false, s2 = 0, a2 = 2 * Math.PI) {
            super(0, t2, e2, i2, n2, r2, s2, a2), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e2, radialSegments: i2, heightSegments: n2, openEnded: r2, thetaStart: s2, thetaLength: a2 };
          }
          static fromJSON(t2) {
            return new Po(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
          }
        }
        class Io extends Di {
          constructor(t2 = [], e2 = [], i2 = 1, n2 = 0) {
            super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e2, radius: i2, detail: n2 };
            const r2 = [], s2 = [];
            function a2(t3, e3, i3, n3) {
              const r3 = n3 + 1, s3 = [];
              for (let n4 = 0; n4 <= r3; n4++) {
                s3[n4] = [];
                const a3 = t3.clone().lerp(i3, n4 / r3), o3 = e3.clone().lerp(i3, n4 / r3), l3 = r3 - n4;
                for (let t4 = 0; t4 <= l3; t4++)
                  s3[n4][t4] = 0 === t4 && n4 === r3 ? a3 : a3.clone().lerp(o3, t4 / l3);
              }
              for (let t4 = 0; t4 < r3; t4++)
                for (let e4 = 0; e4 < 2 * (r3 - t4) - 1; e4++) {
                  const i4 = Math.floor(e4 / 2);
                  e4 % 2 == 0 ? (o2(s3[t4][i4 + 1]), o2(s3[t4 + 1][i4]), o2(s3[t4][i4])) : (o2(s3[t4][i4 + 1]), o2(s3[t4 + 1][i4 + 1]), o2(s3[t4 + 1][i4]));
                }
            }
            function o2(t3) {
              r2.push(t3.x, t3.y, t3.z);
            }
            function l2(e3, i3) {
              const n3 = 3 * e3;
              i3.x = t2[n3 + 0], i3.y = t2[n3 + 1], i3.z = t2[n3 + 2];
            }
            function c2(t3, e3, i3, n3) {
              n3 < 0 && 1 === t3.x && (s2[e3] = t3.x - 1), 0 === i3.x && 0 === i3.z && (s2[e3] = n3 / 2 / Math.PI + 0.5);
            }
            function h2(t3) {
              return Math.atan2(t3.z, -t3.x);
            }
            !function(t3) {
              const i3 = new ne(), n3 = new ne(), r3 = new ne();
              for (let s3 = 0; s3 < e2.length; s3 += 3)
                l2(e2[s3 + 0], i3), l2(e2[s3 + 1], n3), l2(e2[s3 + 2], r3), a2(i3, n3, r3, t3);
            }(n2), function(t3) {
              const e3 = new ne();
              for (let i3 = 0; i3 < r2.length; i3 += 3)
                e3.x = r2[i3 + 0], e3.y = r2[i3 + 1], e3.z = r2[i3 + 2], e3.normalize().multiplyScalar(t3), r2[i3 + 0] = e3.x, r2[i3 + 1] = e3.y, r2[i3 + 2] = e3.z;
            }(i2), function() {
              const t3 = new ne();
              for (let i3 = 0; i3 < r2.length; i3 += 3) {
                t3.x = r2[i3 + 0], t3.y = r2[i3 + 1], t3.z = r2[i3 + 2];
                const n3 = h2(t3) / 2 / Math.PI + 0.5, a3 = (e3 = t3, Math.atan2(-e3.y, Math.sqrt(e3.x * e3.x + e3.z * e3.z)) / Math.PI + 0.5);
                s2.push(n3, 1 - a3);
              }
              var e3;
              (function() {
                const t4 = new ne(), e4 = new ne(), i3 = new ne(), n3 = new ne(), a3 = new Lt(), o3 = new Lt(), l3 = new Lt();
                for (let u2 = 0, d2 = 0; u2 < r2.length; u2 += 9, d2 += 6) {
                  t4.set(r2[u2 + 0], r2[u2 + 1], r2[u2 + 2]), e4.set(r2[u2 + 3], r2[u2 + 4], r2[u2 + 5]), i3.set(r2[u2 + 6], r2[u2 + 7], r2[u2 + 8]), a3.set(s2[d2 + 0], s2[d2 + 1]), o3.set(s2[d2 + 2], s2[d2 + 3]), l3.set(s2[d2 + 4], s2[d2 + 5]), n3.copy(t4).add(e4).add(i3).divideScalar(3);
                  const p2 = h2(n3);
                  c2(a3, d2 + 0, t4, p2), c2(o3, d2 + 2, e4, p2), c2(l3, d2 + 4, i3, p2);
                }
              })(), function() {
                for (let t4 = 0; t4 < s2.length; t4 += 6) {
                  const e4 = s2[t4 + 0], i3 = s2[t4 + 2], n3 = s2[t4 + 4], r3 = Math.max(e4, i3, n3), a3 = Math.min(e4, i3, n3);
                  r3 > 0.9 && a3 < 0.1 && (e4 < 0.2 && (s2[t4 + 0] += 1), i3 < 0.2 && (s2[t4 + 2] += 1), n3 < 0.2 && (s2[t4 + 4] += 1));
                }
              }();
            }(), this.setAttribute("position", new Ti(r2, 3)), this.setAttribute("normal", new Ti(r2.slice(), 3)), this.setAttribute("uv", new Ti(s2, 2)), 0 === n2 ? this.computeVertexNormals() : this.normalizeNormals();
          }
          static fromJSON(t2) {
            return new Io(t2.vertices, t2.indices, t2.radius, t2.details);
          }
        }
        class Do extends Io {
          constructor(t2 = 1, e2 = 0) {
            const i2 = (1 + Math.sqrt(5)) / 2, n2 = 1 / i2;
            super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n2, -i2, 0, -n2, i2, 0, n2, -i2, 0, n2, i2, -n2, -i2, 0, -n2, i2, 0, n2, -i2, 0, n2, i2, 0, -i2, 0, -n2, i2, 0, -n2, -i2, 0, n2, i2, 0, n2], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e2), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e2 };
          }
          static fromJSON(t2) {
            return new Do(t2.radius, t2.detail);
          }
        }
        const No = new ne(), Oo = new ne(), zo = new ne(), Uo = new gi();
        class Bo extends Di {
          constructor(t2 = null, e2 = 1) {
            if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e2 }, null !== t2) {
              const i2 = 4, n2 = Math.pow(10, i2), r2 = Math.cos(vt * e2), s2 = t2.getIndex(), a2 = t2.getAttribute("position"), o2 = s2 ? s2.count : a2.count, l2 = [0, 0, 0], c2 = ["a", "b", "c"], h2 = new Array(3), u2 = {}, d2 = [];
              for (let t3 = 0; t3 < o2; t3 += 3) {
                s2 ? (l2[0] = s2.getX(t3), l2[1] = s2.getX(t3 + 1), l2[2] = s2.getX(t3 + 2)) : (l2[0] = t3, l2[1] = t3 + 1, l2[2] = t3 + 2);
                const { a: e3, b: i3, c: o3 } = Uo;
                if (e3.fromBufferAttribute(a2, l2[0]), i3.fromBufferAttribute(a2, l2[1]), o3.fromBufferAttribute(a2, l2[2]), Uo.getNormal(zo), h2[0] = `${Math.round(e3.x * n2)},${Math.round(e3.y * n2)},${Math.round(e3.z * n2)}`, h2[1] = `${Math.round(i3.x * n2)},${Math.round(i3.y * n2)},${Math.round(i3.z * n2)}`, h2[2] = `${Math.round(o3.x * n2)},${Math.round(o3.y * n2)},${Math.round(o3.z * n2)}`, h2[0] !== h2[1] && h2[1] !== h2[2] && h2[2] !== h2[0])
                  for (let t4 = 0; t4 < 3; t4++) {
                    const e4 = (t4 + 1) % 3, i4 = h2[t4], n3 = h2[e4], s3 = Uo[c2[t4]], a3 = Uo[c2[e4]], o4 = `${i4}_${n3}`, p2 = `${n3}_${i4}`;
                    p2 in u2 && u2[p2] ? (zo.dot(u2[p2].normal) <= r2 && (d2.push(s3.x, s3.y, s3.z), d2.push(a3.x, a3.y, a3.z)), u2[p2] = null) : o4 in u2 || (u2[o4] = { index0: l2[t4], index1: l2[e4], normal: zo.clone() });
                  }
              }
              for (const t3 in u2)
                if (u2[t3]) {
                  const { index0: e3, index1: i3 } = u2[t3];
                  No.fromBufferAttribute(a2, e3), Oo.fromBufferAttribute(a2, i3), d2.push(No.x, No.y, No.z), d2.push(Oo.x, Oo.y, Oo.z);
                }
              this.setAttribute("position", new Ti(d2, 3));
            }
          }
        }
        class Fo extends Ao {
          constructor(t2) {
            super(t2), this.uuid = _t(), this.type = "Shape", this.holes = [];
          }
          getPointsHoles(t2) {
            const e2 = [];
            for (let i2 = 0, n2 = this.holes.length; i2 < n2; i2++)
              e2[i2] = this.holes[i2].getPoints(t2);
            return e2;
          }
          extractPoints(t2) {
            return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
          }
          copy(t2) {
            super.copy(t2), this.holes = [];
            for (let e2 = 0, i2 = t2.holes.length; e2 < i2; e2++) {
              const i3 = t2.holes[e2];
              this.holes.push(i3.clone());
            }
            return this;
          }
          toJSON() {
            const t2 = super.toJSON();
            t2.uuid = this.uuid, t2.holes = [];
            for (let e2 = 0, i2 = this.holes.length; e2 < i2; e2++) {
              const i3 = this.holes[e2];
              t2.holes.push(i3.toJSON());
            }
            return t2;
          }
          fromJSON(t2) {
            super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
            for (let e2 = 0, i2 = t2.holes.length; e2 < i2; e2++) {
              const i3 = t2.holes[e2];
              this.holes.push(new Ao().fromJSON(i3));
            }
            return this;
          }
        }
        const ko = function(t2, e2, i2 = 2) {
          const n2 = e2 && e2.length, r2 = n2 ? e2[0] * i2 : t2.length;
          let s2 = Go(t2, 0, r2, i2, true);
          const a2 = [];
          if (!s2 || s2.next === s2.prev)
            return a2;
          let o2, l2, c2, h2, u2, d2, p2;
          if (n2 && (s2 = function(t3, e3, i3, n3) {
            const r3 = [];
            let s3, a3, o3, l3, c3;
            for (s3 = 0, a3 = e3.length; s3 < a3; s3++)
              o3 = e3[s3] * n3, l3 = s3 < a3 - 1 ? e3[s3 + 1] * n3 : t3.length, c3 = Go(t3, o3, l3, n3, false), c3 === c3.next && (c3.steiner = true), r3.push($o(c3));
            for (r3.sort(Yo), s3 = 0; s3 < r3.length; s3++)
              Zo(r3[s3], i3), i3 = Vo(i3, i3.next);
            return i3;
          }(t2, e2, s2, i2)), t2.length > 80 * i2) {
            o2 = c2 = t2[0], l2 = h2 = t2[1];
            for (let e3 = i2; e3 < r2; e3 += i2)
              u2 = t2[e3], d2 = t2[e3 + 1], u2 < o2 && (o2 = u2), d2 < l2 && (l2 = d2), u2 > c2 && (c2 = u2), d2 > h2 && (h2 = d2);
            p2 = Math.max(c2 - o2, h2 - l2), p2 = 0 !== p2 ? 1 / p2 : 0;
          }
          return Ho(s2, a2, i2, o2, l2, p2), a2;
        };
        function Go(t2, e2, i2, n2, r2) {
          let s2, a2;
          if (r2 === function(t3, e3, i3, n3) {
            let r3 = 0;
            for (let s3 = e3, a3 = i3 - n3; s3 < i3; s3 += n3)
              r3 += (t3[a3] - t3[s3]) * (t3[s3 + 1] + t3[a3 + 1]), a3 = s3;
            return r3;
          }(t2, e2, i2, n2) > 0)
            for (s2 = e2; s2 < i2; s2 += n2)
              a2 = ll(s2, t2[s2], t2[s2 + 1], a2);
          else
            for (s2 = i2 - n2; s2 >= e2; s2 -= n2)
              a2 = ll(s2, t2[s2], t2[s2 + 1], a2);
          return a2 && il(a2, a2.next) && (cl(a2), a2 = a2.next), a2;
        }
        function Vo(t2, e2) {
          if (!t2)
            return t2;
          e2 || (e2 = t2);
          let i2, n2 = t2;
          do {
            if (i2 = false, n2.steiner || !il(n2, n2.next) && 0 !== el(n2.prev, n2, n2.next))
              n2 = n2.next;
            else {
              if (cl(n2), n2 = e2 = n2.prev, n2 === n2.next)
                break;
              i2 = true;
            }
          } while (i2 || n2 !== e2);
          return e2;
        }
        function Ho(t2, e2, i2, n2, r2, s2, a2) {
          if (!t2)
            return;
          !a2 && s2 && function(t3, e3, i3, n3) {
            let r3 = t3;
            do {
              null === r3.z && (r3.z = Ko(r3.x, r3.y, e3, i3, n3)), r3.prevZ = r3.prev, r3.nextZ = r3.next, r3 = r3.next;
            } while (r3 !== t3);
            r3.prevZ.nextZ = null, r3.prevZ = null, function(t4) {
              let e4, i4, n4, r4, s3, a3, o3, l3, c3 = 1;
              do {
                for (i4 = t4, t4 = null, s3 = null, a3 = 0; i4; ) {
                  for (a3++, n4 = i4, o3 = 0, e4 = 0; e4 < c3 && (o3++, n4 = n4.nextZ, n4); e4++)
                    ;
                  for (l3 = c3; o3 > 0 || l3 > 0 && n4; )
                    0 !== o3 && (0 === l3 || !n4 || i4.z <= n4.z) ? (r4 = i4, i4 = i4.nextZ, o3--) : (r4 = n4, n4 = n4.nextZ, l3--), s3 ? s3.nextZ = r4 : t4 = r4, r4.prevZ = s3, s3 = r4;
                  i4 = n4;
                }
                s3.nextZ = null, c3 *= 2;
              } while (a3 > 1);
            }(r3);
          }(t2, n2, r2, s2);
          let o2, l2, c2 = t2;
          for (; t2.prev !== t2.next; )
            if (o2 = t2.prev, l2 = t2.next, s2 ? jo(t2, n2, r2, s2) : Wo(t2))
              e2.push(o2.i / i2), e2.push(t2.i / i2), e2.push(l2.i / i2), cl(t2), t2 = l2.next, c2 = l2.next;
            else if ((t2 = l2) === c2) {
              a2 ? 1 === a2 ? Ho(t2 = qo(Vo(t2), e2, i2), e2, i2, n2, r2, s2, 2) : 2 === a2 && Xo(t2, e2, i2, n2, r2, s2) : Ho(Vo(t2), e2, i2, n2, r2, s2, 1);
              break;
            }
        }
        function Wo(t2) {
          const e2 = t2.prev, i2 = t2, n2 = t2.next;
          if (el(e2, i2, n2) >= 0)
            return false;
          let r2 = t2.next.next;
          for (; r2 !== t2.prev; ) {
            if (Qo(e2.x, e2.y, i2.x, i2.y, n2.x, n2.y, r2.x, r2.y) && el(r2.prev, r2, r2.next) >= 0)
              return false;
            r2 = r2.next;
          }
          return true;
        }
        function jo(t2, e2, i2, n2) {
          const r2 = t2.prev, s2 = t2, a2 = t2.next;
          if (el(r2, s2, a2) >= 0)
            return false;
          const o2 = r2.x < s2.x ? r2.x < a2.x ? r2.x : a2.x : s2.x < a2.x ? s2.x : a2.x, l2 = r2.y < s2.y ? r2.y < a2.y ? r2.y : a2.y : s2.y < a2.y ? s2.y : a2.y, c2 = r2.x > s2.x ? r2.x > a2.x ? r2.x : a2.x : s2.x > a2.x ? s2.x : a2.x, h2 = r2.y > s2.y ? r2.y > a2.y ? r2.y : a2.y : s2.y > a2.y ? s2.y : a2.y, u2 = Ko(o2, l2, e2, i2, n2), d2 = Ko(c2, h2, e2, i2, n2);
          let p2 = t2.prevZ, m2 = t2.nextZ;
          for (; p2 && p2.z >= u2 && m2 && m2.z <= d2; ) {
            if (p2 !== t2.prev && p2 !== t2.next && Qo(r2.x, r2.y, s2.x, s2.y, a2.x, a2.y, p2.x, p2.y) && el(p2.prev, p2, p2.next) >= 0)
              return false;
            if (p2 = p2.prevZ, m2 !== t2.prev && m2 !== t2.next && Qo(r2.x, r2.y, s2.x, s2.y, a2.x, a2.y, m2.x, m2.y) && el(m2.prev, m2, m2.next) >= 0)
              return false;
            m2 = m2.nextZ;
          }
          for (; p2 && p2.z >= u2; ) {
            if (p2 !== t2.prev && p2 !== t2.next && Qo(r2.x, r2.y, s2.x, s2.y, a2.x, a2.y, p2.x, p2.y) && el(p2.prev, p2, p2.next) >= 0)
              return false;
            p2 = p2.prevZ;
          }
          for (; m2 && m2.z <= d2; ) {
            if (m2 !== t2.prev && m2 !== t2.next && Qo(r2.x, r2.y, s2.x, s2.y, a2.x, a2.y, m2.x, m2.y) && el(m2.prev, m2, m2.next) >= 0)
              return false;
            m2 = m2.nextZ;
          }
          return true;
        }
        function qo(t2, e2, i2) {
          let n2 = t2;
          do {
            const r2 = n2.prev, s2 = n2.next.next;
            !il(r2, s2) && nl(r2, n2, n2.next, s2) && al(r2, s2) && al(s2, r2) && (e2.push(r2.i / i2), e2.push(n2.i / i2), e2.push(s2.i / i2), cl(n2), cl(n2.next), n2 = t2 = s2), n2 = n2.next;
          } while (n2 !== t2);
          return Vo(n2);
        }
        function Xo(t2, e2, i2, n2, r2, s2) {
          let a2 = t2;
          do {
            let t3 = a2.next.next;
            for (; t3 !== a2.prev; ) {
              if (a2.i !== t3.i && tl(a2, t3)) {
                let o2 = ol(a2, t3);
                return a2 = Vo(a2, a2.next), o2 = Vo(o2, o2.next), Ho(a2, e2, i2, n2, r2, s2), void Ho(o2, e2, i2, n2, r2, s2);
              }
              t3 = t3.next;
            }
            a2 = a2.next;
          } while (a2 !== t2);
        }
        function Yo(t2, e2) {
          return t2.x - e2.x;
        }
        function Zo(t2, e2) {
          if (e2 = function(t3, e3) {
            let i2 = e3;
            const n2 = t3.x, r2 = t3.y;
            let s2, a2 = -1 / 0;
            do {
              if (r2 <= i2.y && r2 >= i2.next.y && i2.next.y !== i2.y) {
                const t4 = i2.x + (r2 - i2.y) * (i2.next.x - i2.x) / (i2.next.y - i2.y);
                if (t4 <= n2 && t4 > a2) {
                  if (a2 = t4, t4 === n2) {
                    if (r2 === i2.y)
                      return i2;
                    if (r2 === i2.next.y)
                      return i2.next;
                  }
                  s2 = i2.x < i2.next.x ? i2 : i2.next;
                }
              }
              i2 = i2.next;
            } while (i2 !== e3);
            if (!s2)
              return null;
            if (n2 === a2)
              return s2;
            const o2 = s2, l2 = s2.x, c2 = s2.y;
            let h2, u2 = 1 / 0;
            i2 = s2;
            do {
              n2 >= i2.x && i2.x >= l2 && n2 !== i2.x && Qo(r2 < c2 ? n2 : a2, r2, l2, c2, r2 < c2 ? a2 : n2, r2, i2.x, i2.y) && (h2 = Math.abs(r2 - i2.y) / (n2 - i2.x), al(i2, t3) && (h2 < u2 || h2 === u2 && (i2.x > s2.x || i2.x === s2.x && Jo(s2, i2))) && (s2 = i2, u2 = h2)), i2 = i2.next;
            } while (i2 !== o2);
            return s2;
          }(t2, e2), e2) {
            const i2 = ol(e2, t2);
            Vo(e2, e2.next), Vo(i2, i2.next);
          }
        }
        function Jo(t2, e2) {
          return el(t2.prev, t2, e2.prev) < 0 && el(e2.next, t2, t2.next) < 0;
        }
        function Ko(t2, e2, i2, n2, r2) {
          return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = 32767 * (t2 - i2) * r2) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - n2) * r2) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) << 1;
        }
        function $o(t2) {
          let e2 = t2, i2 = t2;
          do {
            (e2.x < i2.x || e2.x === i2.x && e2.y < i2.y) && (i2 = e2), e2 = e2.next;
          } while (e2 !== t2);
          return i2;
        }
        function Qo(t2, e2, i2, n2, r2, s2, a2, o2) {
          return (r2 - a2) * (e2 - o2) - (t2 - a2) * (s2 - o2) >= 0 && (t2 - a2) * (n2 - o2) - (i2 - a2) * (e2 - o2) >= 0 && (i2 - a2) * (s2 - o2) - (r2 - a2) * (n2 - o2) >= 0;
        }
        function tl(t2, e2) {
          return t2.next.i !== e2.i && t2.prev.i !== e2.i && !function(t3, e3) {
            let i2 = t3;
            do {
              if (i2.i !== t3.i && i2.next.i !== t3.i && i2.i !== e3.i && i2.next.i !== e3.i && nl(i2, i2.next, t3, e3))
                return true;
              i2 = i2.next;
            } while (i2 !== t3);
            return false;
          }(t2, e2) && (al(t2, e2) && al(e2, t2) && function(t3, e3) {
            let i2 = t3, n2 = false;
            const r2 = (t3.x + e3.x) / 2, s2 = (t3.y + e3.y) / 2;
            do {
              i2.y > s2 != i2.next.y > s2 && i2.next.y !== i2.y && r2 < (i2.next.x - i2.x) * (s2 - i2.y) / (i2.next.y - i2.y) + i2.x && (n2 = !n2), i2 = i2.next;
            } while (i2 !== t3);
            return n2;
          }(t2, e2) && (el(t2.prev, t2, e2.prev) || el(t2, e2.prev, e2)) || il(t2, e2) && el(t2.prev, t2, t2.next) > 0 && el(e2.prev, e2, e2.next) > 0);
        }
        function el(t2, e2, i2) {
          return (e2.y - t2.y) * (i2.x - e2.x) - (e2.x - t2.x) * (i2.y - e2.y);
        }
        function il(t2, e2) {
          return t2.x === e2.x && t2.y === e2.y;
        }
        function nl(t2, e2, i2, n2) {
          const r2 = sl(el(t2, e2, i2)), s2 = sl(el(t2, e2, n2)), a2 = sl(el(i2, n2, t2)), o2 = sl(el(i2, n2, e2));
          return r2 !== s2 && a2 !== o2 || (!(0 !== r2 || !rl(t2, i2, e2)) || (!(0 !== s2 || !rl(t2, n2, e2)) || (!(0 !== a2 || !rl(i2, t2, n2)) || !(0 !== o2 || !rl(i2, e2, n2)))));
        }
        function rl(t2, e2, i2) {
          return e2.x <= Math.max(t2.x, i2.x) && e2.x >= Math.min(t2.x, i2.x) && e2.y <= Math.max(t2.y, i2.y) && e2.y >= Math.min(t2.y, i2.y);
        }
        function sl(t2) {
          return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
        }
        function al(t2, e2) {
          return el(t2.prev, t2, t2.next) < 0 ? el(t2, e2, t2.next) >= 0 && el(t2, t2.prev, e2) >= 0 : el(t2, e2, t2.prev) < 0 || el(t2, t2.next, e2) < 0;
        }
        function ol(t2, e2) {
          const i2 = new hl(t2.i, t2.x, t2.y), n2 = new hl(e2.i, e2.x, e2.y), r2 = t2.next, s2 = e2.prev;
          return t2.next = e2, e2.prev = t2, i2.next = r2, r2.prev = i2, n2.next = i2, i2.prev = n2, s2.next = n2, n2.prev = s2, n2;
        }
        function ll(t2, e2, i2, n2) {
          const r2 = new hl(t2, e2, i2);
          return n2 ? (r2.next = n2.next, r2.prev = n2, n2.next.prev = r2, n2.next = r2) : (r2.prev = r2, r2.next = r2), r2;
        }
        function cl(t2) {
          t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
        }
        function hl(t2, e2, i2) {
          this.i = t2, this.x = e2, this.y = i2, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
        }
        class ul {
          static area(t2) {
            const e2 = t2.length;
            let i2 = 0;
            for (let n2 = e2 - 1, r2 = 0; r2 < e2; n2 = r2++)
              i2 += t2[n2].x * t2[r2].y - t2[r2].x * t2[n2].y;
            return 0.5 * i2;
          }
          static isClockWise(t2) {
            return ul.area(t2) < 0;
          }
          static triangulateShape(t2, e2) {
            const i2 = [], n2 = [], r2 = [];
            dl(t2), pl(i2, t2);
            let s2 = t2.length;
            e2.forEach(dl);
            for (let t3 = 0; t3 < e2.length; t3++)
              n2.push(s2), s2 += e2[t3].length, pl(i2, e2[t3]);
            const a2 = ko(i2, n2);
            for (let t3 = 0; t3 < a2.length; t3 += 3)
              r2.push(a2.slice(t3, t3 + 3));
            return r2;
          }
        }
        function dl(t2) {
          const e2 = t2.length;
          e2 > 2 && t2[e2 - 1].equals(t2[0]) && t2.pop();
        }
        function pl(t2, e2) {
          for (let i2 = 0; i2 < e2.length; i2++)
            t2.push(e2[i2].x), t2.push(e2[i2].y);
        }
        class ml extends Di {
          constructor(t2 = new Fo([new Lt(0.5, 0.5), new Lt(-0.5, 0.5), new Lt(-0.5, -0.5), new Lt(0.5, -0.5)]), e2 = {}) {
            super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e2 }, t2 = Array.isArray(t2) ? t2 : [t2];
            const i2 = this, n2 = [], r2 = [];
            for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) {
              s2(t2[e3]);
            }
            function s2(t3) {
              const s3 = [], a2 = void 0 !== e2.curveSegments ? e2.curveSegments : 12, o2 = void 0 !== e2.steps ? e2.steps : 1, l2 = void 0 !== e2.depth ? e2.depth : 1;
              let c2 = void 0 === e2.bevelEnabled || e2.bevelEnabled, h2 = void 0 !== e2.bevelThickness ? e2.bevelThickness : 0.2, u2 = void 0 !== e2.bevelSize ? e2.bevelSize : h2 - 0.1, d2 = void 0 !== e2.bevelOffset ? e2.bevelOffset : 0, p2 = void 0 !== e2.bevelSegments ? e2.bevelSegments : 3;
              const m2 = e2.extrudePath, f2 = void 0 !== e2.UVGenerator ? e2.UVGenerator : fl;
              let g2, v2, x2, _2, y2, M2 = false;
              m2 && (g2 = m2.getSpacedPoints(o2), M2 = true, c2 = false, v2 = m2.computeFrenetFrames(o2, false), x2 = new ne(), _2 = new ne(), y2 = new ne()), c2 || (p2 = 0, h2 = 0, u2 = 0, d2 = 0);
              const b2 = t3.extractPoints(a2);
              let S2 = b2.shape;
              const w2 = b2.holes;
              if (!ul.isClockWise(S2)) {
                S2 = S2.reverse();
                for (let t4 = 0, e3 = w2.length; t4 < e3; t4++) {
                  const e4 = w2[t4];
                  ul.isClockWise(e4) && (w2[t4] = e4.reverse());
                }
              }
              const T2 = ul.triangulateShape(S2, w2), A2 = S2;
              for (let t4 = 0, e3 = w2.length; t4 < e3; t4++) {
                const e4 = w2[t4];
                S2 = S2.concat(e4);
              }
              function E2(t4, e3, i3) {
                return e3 || console.error("THREE.ExtrudeGeometry: vec does not exist"), e3.clone().multiplyScalar(i3).add(t4);
              }
              const C2 = S2.length, L2 = T2.length;
              function R2(t4, e3, i3) {
                let n3, r3, s4;
                const a3 = t4.x - e3.x, o3 = t4.y - e3.y, l3 = i3.x - t4.x, c3 = i3.y - t4.y, h3 = a3 * a3 + o3 * o3, u3 = a3 * c3 - o3 * l3;
                if (Math.abs(u3) > Number.EPSILON) {
                  const u4 = Math.sqrt(h3), d3 = Math.sqrt(l3 * l3 + c3 * c3), p3 = e3.x - o3 / u4, m3 = e3.y + a3 / u4, f3 = ((i3.x - c3 / d3 - p3) * c3 - (i3.y + l3 / d3 - m3) * l3) / (a3 * c3 - o3 * l3);
                  n3 = p3 + a3 * f3 - t4.x, r3 = m3 + o3 * f3 - t4.y;
                  const g3 = n3 * n3 + r3 * r3;
                  if (g3 <= 2)
                    return new Lt(n3, r3);
                  s4 = Math.sqrt(g3 / 2);
                } else {
                  let t5 = false;
                  a3 > Number.EPSILON ? l3 > Number.EPSILON && (t5 = true) : a3 < -Number.EPSILON ? l3 < -Number.EPSILON && (t5 = true) : Math.sign(o3) === Math.sign(c3) && (t5 = true), t5 ? (n3 = -o3, r3 = a3, s4 = Math.sqrt(h3)) : (n3 = a3, r3 = o3, s4 = Math.sqrt(h3 / 2));
                }
                return new Lt(n3 / s4, r3 / s4);
              }
              const P2 = [];
              for (let t4 = 0, e3 = A2.length, i3 = e3 - 1, n3 = t4 + 1; t4 < e3; t4++, i3++, n3++)
                i3 === e3 && (i3 = 0), n3 === e3 && (n3 = 0), P2[t4] = R2(A2[t4], A2[i3], A2[n3]);
              const I2 = [];
              let D2, N2 = P2.concat();
              for (let t4 = 0, e3 = w2.length; t4 < e3; t4++) {
                const e4 = w2[t4];
                D2 = [];
                for (let t5 = 0, i3 = e4.length, n3 = i3 - 1, r3 = t5 + 1; t5 < i3; t5++, n3++, r3++)
                  n3 === i3 && (n3 = 0), r3 === i3 && (r3 = 0), D2[t5] = R2(e4[t5], e4[n3], e4[r3]);
                I2.push(D2), N2 = N2.concat(D2);
              }
              for (let t4 = 0; t4 < p2; t4++) {
                const e3 = t4 / p2, i3 = h2 * Math.cos(e3 * Math.PI / 2), n3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
                for (let t5 = 0, e4 = A2.length; t5 < e4; t5++) {
                  const e5 = E2(A2[t5], P2[t5], n3);
                  U2(e5.x, e5.y, -i3);
                }
                for (let t5 = 0, e4 = w2.length; t5 < e4; t5++) {
                  const e5 = w2[t5];
                  D2 = I2[t5];
                  for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
                    const r4 = E2(e5[t6], D2[t6], n3);
                    U2(r4.x, r4.y, -i3);
                  }
                }
              }
              const O2 = u2 + d2;
              for (let t4 = 0; t4 < C2; t4++) {
                const e3 = c2 ? E2(S2[t4], N2[t4], O2) : S2[t4];
                M2 ? (_2.copy(v2.normals[0]).multiplyScalar(e3.x), x2.copy(v2.binormals[0]).multiplyScalar(e3.y), y2.copy(g2[0]).add(_2).add(x2), U2(y2.x, y2.y, y2.z)) : U2(e3.x, e3.y, 0);
              }
              for (let t4 = 1; t4 <= o2; t4++)
                for (let e3 = 0; e3 < C2; e3++) {
                  const i3 = c2 ? E2(S2[e3], N2[e3], O2) : S2[e3];
                  M2 ? (_2.copy(v2.normals[t4]).multiplyScalar(i3.x), x2.copy(v2.binormals[t4]).multiplyScalar(i3.y), y2.copy(g2[t4]).add(_2).add(x2), U2(y2.x, y2.y, y2.z)) : U2(i3.x, i3.y, l2 / o2 * t4);
                }
              for (let t4 = p2 - 1; t4 >= 0; t4--) {
                const e3 = t4 / p2, i3 = h2 * Math.cos(e3 * Math.PI / 2), n3 = u2 * Math.sin(e3 * Math.PI / 2) + d2;
                for (let t5 = 0, e4 = A2.length; t5 < e4; t5++) {
                  const e5 = E2(A2[t5], P2[t5], n3);
                  U2(e5.x, e5.y, l2 + i3);
                }
                for (let t5 = 0, e4 = w2.length; t5 < e4; t5++) {
                  const e5 = w2[t5];
                  D2 = I2[t5];
                  for (let t6 = 0, r3 = e5.length; t6 < r3; t6++) {
                    const r4 = E2(e5[t6], D2[t6], n3);
                    M2 ? U2(r4.x, r4.y + g2[o2 - 1].y, g2[o2 - 1].x + i3) : U2(r4.x, r4.y, l2 + i3);
                  }
                }
              }
              function z2(t4, e3) {
                let i3 = t4.length;
                for (; --i3 >= 0; ) {
                  const n3 = i3;
                  let r3 = i3 - 1;
                  r3 < 0 && (r3 = t4.length - 1);
                  for (let t5 = 0, i4 = o2 + 2 * p2; t5 < i4; t5++) {
                    const i5 = C2 * t5, s4 = C2 * (t5 + 1);
                    F2(e3 + n3 + i5, e3 + r3 + i5, e3 + r3 + s4, e3 + n3 + s4);
                  }
                }
              }
              function U2(t4, e3, i3) {
                s3.push(t4), s3.push(e3), s3.push(i3);
              }
              function B2(t4, e3, r3) {
                k2(t4), k2(e3), k2(r3);
                const s4 = n2.length / 3, a3 = f2.generateTopUV(i2, n2, s4 - 3, s4 - 2, s4 - 1);
                G2(a3[0]), G2(a3[1]), G2(a3[2]);
              }
              function F2(t4, e3, r3, s4) {
                k2(t4), k2(e3), k2(s4), k2(e3), k2(r3), k2(s4);
                const a3 = n2.length / 3, o3 = f2.generateSideWallUV(i2, n2, a3 - 6, a3 - 3, a3 - 2, a3 - 1);
                G2(o3[0]), G2(o3[1]), G2(o3[3]), G2(o3[1]), G2(o3[2]), G2(o3[3]);
              }
              function k2(t4) {
                n2.push(s3[3 * t4 + 0]), n2.push(s3[3 * t4 + 1]), n2.push(s3[3 * t4 + 2]);
              }
              function G2(t4) {
                r2.push(t4.x), r2.push(t4.y);
              }
              !function() {
                const t4 = n2.length / 3;
                if (c2) {
                  let t5 = 0, e3 = C2 * t5;
                  for (let t6 = 0; t6 < L2; t6++) {
                    const i3 = T2[t6];
                    B2(i3[2] + e3, i3[1] + e3, i3[0] + e3);
                  }
                  t5 = o2 + 2 * p2, e3 = C2 * t5;
                  for (let t6 = 0; t6 < L2; t6++) {
                    const i3 = T2[t6];
                    B2(i3[0] + e3, i3[1] + e3, i3[2] + e3);
                  }
                } else {
                  for (let t5 = 0; t5 < L2; t5++) {
                    const e3 = T2[t5];
                    B2(e3[2], e3[1], e3[0]);
                  }
                  for (let t5 = 0; t5 < L2; t5++) {
                    const e3 = T2[t5];
                    B2(e3[0] + C2 * o2, e3[1] + C2 * o2, e3[2] + C2 * o2);
                  }
                }
                i2.addGroup(t4, n2.length / 3 - t4, 0);
              }(), function() {
                const t4 = n2.length / 3;
                let e3 = 0;
                z2(A2, e3), e3 += A2.length;
                for (let t5 = 0, i3 = w2.length; t5 < i3; t5++) {
                  const i4 = w2[t5];
                  z2(i4, e3), e3 += i4.length;
                }
                i2.addGroup(t4, n2.length / 3 - t4, 1);
              }();
            }
            this.setAttribute("position", new Ti(n2, 3)), this.setAttribute("uv", new Ti(r2, 2)), this.computeVertexNormals();
          }
          toJSON() {
            const t2 = super.toJSON();
            return function(t3, e2, i2) {
              if (i2.shapes = [], Array.isArray(t3))
                for (let e3 = 0, n2 = t3.length; e3 < n2; e3++) {
                  const n3 = t3[e3];
                  i2.shapes.push(n3.uuid);
                }
              else
                i2.shapes.push(t3.uuid);
              i2.options = Object.assign({}, e2), void 0 !== e2.extrudePath && (i2.options.extrudePath = e2.extrudePath.toJSON());
              return i2;
            }(this.parameters.shapes, this.parameters.options, t2);
          }
          static fromJSON(t2, e2) {
            const i2 = [];
            for (let n3 = 0, r2 = t2.shapes.length; n3 < r2; n3++) {
              const r3 = e2[t2.shapes[n3]];
              i2.push(r3);
            }
            const n2 = t2.options.extrudePath;
            return void 0 !== n2 && (t2.options.extrudePath = new wo[n2.type]().fromJSON(n2)), new ml(i2, t2.options);
          }
        }
        const fl = { generateTopUV: function(t2, e2, i2, n2, r2) {
          const s2 = e2[3 * i2], a2 = e2[3 * i2 + 1], o2 = e2[3 * n2], l2 = e2[3 * n2 + 1], c2 = e2[3 * r2], h2 = e2[3 * r2 + 1];
          return [new Lt(s2, a2), new Lt(o2, l2), new Lt(c2, h2)];
        }, generateSideWallUV: function(t2, e2, i2, n2, r2, s2) {
          const a2 = e2[3 * i2], o2 = e2[3 * i2 + 1], l2 = e2[3 * i2 + 2], c2 = e2[3 * n2], h2 = e2[3 * n2 + 1], u2 = e2[3 * n2 + 2], d2 = e2[3 * r2], p2 = e2[3 * r2 + 1], m2 = e2[3 * r2 + 2], f2 = e2[3 * s2], g2 = e2[3 * s2 + 1], v2 = e2[3 * s2 + 2];
          return Math.abs(o2 - h2) < Math.abs(a2 - c2) ? [new Lt(a2, 1 - l2), new Lt(c2, 1 - u2), new Lt(d2, 1 - m2), new Lt(f2, 1 - v2)] : [new Lt(o2, 1 - l2), new Lt(h2, 1 - u2), new Lt(p2, 1 - m2), new Lt(g2, 1 - v2)];
        } };
        class gl extends Io {
          constructor(t2 = 1, e2 = 0) {
            const i2 = (1 + Math.sqrt(5)) / 2;
            super([-1, i2, 0, 1, i2, 0, -1, -i2, 0, 1, -i2, 0, 0, -1, i2, 0, 1, i2, 0, -1, -i2, 0, 1, -i2, i2, 0, -1, i2, 0, 1, -i2, 0, -1, -i2, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e2), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e2 };
          }
          static fromJSON(t2) {
            return new gl(t2.radius, t2.detail);
          }
        }
        class vl extends Io {
          constructor(t2 = 1, e2 = 0) {
            super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e2), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e2 };
          }
          static fromJSON(t2) {
            return new vl(t2.radius, t2.detail);
          }
        }
        class xl extends Di {
          constructor(t2 = 0.5, e2 = 1, i2 = 8, n2 = 1, r2 = 0, s2 = 2 * Math.PI) {
            super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e2, thetaSegments: i2, phiSegments: n2, thetaStart: r2, thetaLength: s2 }, i2 = Math.max(3, i2);
            const a2 = [], o2 = [], l2 = [], c2 = [];
            let h2 = t2;
            const u2 = (e2 - t2) / (n2 = Math.max(1, n2)), d2 = new ne(), p2 = new Lt();
            for (let t3 = 0; t3 <= n2; t3++) {
              for (let t4 = 0; t4 <= i2; t4++) {
                const n3 = r2 + t4 / i2 * s2;
                d2.x = h2 * Math.cos(n3), d2.y = h2 * Math.sin(n3), o2.push(d2.x, d2.y, d2.z), l2.push(0, 0, 1), p2.x = (d2.x / e2 + 1) / 2, p2.y = (d2.y / e2 + 1) / 2, c2.push(p2.x, p2.y);
              }
              h2 += u2;
            }
            for (let t3 = 0; t3 < n2; t3++) {
              const e3 = t3 * (i2 + 1);
              for (let t4 = 0; t4 < i2; t4++) {
                const n3 = t4 + e3, r3 = n3, s3 = n3 + i2 + 1, o3 = n3 + i2 + 2, l3 = n3 + 1;
                a2.push(r3, s3, l3), a2.push(s3, o3, l3);
              }
            }
            this.setIndex(a2), this.setAttribute("position", new Ti(o2, 3)), this.setAttribute("normal", new Ti(l2, 3)), this.setAttribute("uv", new Ti(c2, 2));
          }
          static fromJSON(t2) {
            return new xl(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
          }
        }
        class _l extends Di {
          constructor(t2 = new Fo([new Lt(0, 0.5), new Lt(-0.5, -0.5), new Lt(0.5, -0.5)]), e2 = 12) {
            super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e2 };
            const i2 = [], n2 = [], r2 = [], s2 = [];
            let a2 = 0, o2 = 0;
            if (false === Array.isArray(t2))
              l2(t2);
            else
              for (let e3 = 0; e3 < t2.length; e3++)
                l2(t2[e3]), this.addGroup(a2, o2, e3), a2 += o2, o2 = 0;
            function l2(t3) {
              const a3 = n2.length / 3, l3 = t3.extractPoints(e2);
              let c2 = l3.shape;
              const h2 = l3.holes;
              false === ul.isClockWise(c2) && (c2 = c2.reverse());
              for (let t4 = 0, e3 = h2.length; t4 < e3; t4++) {
                const e4 = h2[t4];
                true === ul.isClockWise(e4) && (h2[t4] = e4.reverse());
              }
              const u2 = ul.triangulateShape(c2, h2);
              for (let t4 = 0, e3 = h2.length; t4 < e3; t4++) {
                const e4 = h2[t4];
                c2 = c2.concat(e4);
              }
              for (let t4 = 0, e3 = c2.length; t4 < e3; t4++) {
                const e4 = c2[t4];
                n2.push(e4.x, e4.y, 0), r2.push(0, 0, 1), s2.push(e4.x, e4.y);
              }
              for (let t4 = 0, e3 = u2.length; t4 < e3; t4++) {
                const e4 = u2[t4], n3 = e4[0] + a3, r3 = e4[1] + a3, s3 = e4[2] + a3;
                i2.push(n3, r3, s3), o2 += 3;
              }
            }
            this.setIndex(i2), this.setAttribute("position", new Ti(n2, 3)), this.setAttribute("normal", new Ti(r2, 3)), this.setAttribute("uv", new Ti(s2, 2));
          }
          toJSON() {
            const t2 = super.toJSON();
            return function(t3, e2) {
              if (e2.shapes = [], Array.isArray(t3))
                for (let i2 = 0, n2 = t3.length; i2 < n2; i2++) {
                  const n3 = t3[i2];
                  e2.shapes.push(n3.uuid);
                }
              else
                e2.shapes.push(t3.uuid);
              return e2;
            }(this.parameters.shapes, t2);
          }
          static fromJSON(t2, e2) {
            const i2 = [];
            for (let n2 = 0, r2 = t2.shapes.length; n2 < r2; n2++) {
              const r3 = e2[t2.shapes[n2]];
              i2.push(r3);
            }
            return new _l(i2, t2.curveSegments);
          }
        }
        class yl extends Di {
          constructor(t2 = 1, e2 = 32, i2 = 16, n2 = 0, r2 = 2 * Math.PI, s2 = 0, a2 = Math.PI) {
            super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e2, heightSegments: i2, phiStart: n2, phiLength: r2, thetaStart: s2, thetaLength: a2 }, e2 = Math.max(3, Math.floor(e2)), i2 = Math.max(2, Math.floor(i2));
            const o2 = Math.min(s2 + a2, Math.PI);
            let l2 = 0;
            const c2 = [], h2 = new ne(), u2 = new ne(), d2 = [], p2 = [], m2 = [], f2 = [];
            for (let d3 = 0; d3 <= i2; d3++) {
              const g2 = [], v2 = d3 / i2;
              let x2 = 0;
              0 == d3 && 0 == s2 ? x2 = 0.5 / e2 : d3 == i2 && o2 == Math.PI && (x2 = -0.5 / e2);
              for (let i3 = 0; i3 <= e2; i3++) {
                const o3 = i3 / e2;
                h2.x = -t2 * Math.cos(n2 + o3 * r2) * Math.sin(s2 + v2 * a2), h2.y = t2 * Math.cos(s2 + v2 * a2), h2.z = t2 * Math.sin(n2 + o3 * r2) * Math.sin(s2 + v2 * a2), p2.push(h2.x, h2.y, h2.z), u2.copy(h2).normalize(), m2.push(u2.x, u2.y, u2.z), f2.push(o3 + x2, 1 - v2), g2.push(l2++);
              }
              c2.push(g2);
            }
            for (let t3 = 0; t3 < i2; t3++)
              for (let n3 = 0; n3 < e2; n3++) {
                const e3 = c2[t3][n3 + 1], r3 = c2[t3][n3], a3 = c2[t3 + 1][n3], l3 = c2[t3 + 1][n3 + 1];
                (0 !== t3 || s2 > 0) && d2.push(e3, r3, l3), (t3 !== i2 - 1 || o2 < Math.PI) && d2.push(r3, a3, l3);
              }
            this.setIndex(d2), this.setAttribute("position", new Ti(p2, 3)), this.setAttribute("normal", new Ti(m2, 3)), this.setAttribute("uv", new Ti(f2, 2));
          }
          static fromJSON(t2) {
            return new yl(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
          }
        }
        class Ml extends Io {
          constructor(t2 = 1, e2 = 0) {
            super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e2), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e2 };
          }
          static fromJSON(t2) {
            return new Ml(t2.radius, t2.detail);
          }
        }
        class bl extends Di {
          constructor(t2 = 1, e2 = 0.4, i2 = 8, n2 = 6, r2 = 2 * Math.PI) {
            super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e2, radialSegments: i2, tubularSegments: n2, arc: r2 }, i2 = Math.floor(i2), n2 = Math.floor(n2);
            const s2 = [], a2 = [], o2 = [], l2 = [], c2 = new ne(), h2 = new ne(), u2 = new ne();
            for (let s3 = 0; s3 <= i2; s3++)
              for (let d2 = 0; d2 <= n2; d2++) {
                const p2 = d2 / n2 * r2, m2 = s3 / i2 * Math.PI * 2;
                h2.x = (t2 + e2 * Math.cos(m2)) * Math.cos(p2), h2.y = (t2 + e2 * Math.cos(m2)) * Math.sin(p2), h2.z = e2 * Math.sin(m2), a2.push(h2.x, h2.y, h2.z), c2.x = t2 * Math.cos(p2), c2.y = t2 * Math.sin(p2), u2.subVectors(h2, c2).normalize(), o2.push(u2.x, u2.y, u2.z), l2.push(d2 / n2), l2.push(s3 / i2);
              }
            for (let t3 = 1; t3 <= i2; t3++)
              for (let e3 = 1; e3 <= n2; e3++) {
                const i3 = (n2 + 1) * t3 + e3 - 1, r3 = (n2 + 1) * (t3 - 1) + e3 - 1, a3 = (n2 + 1) * (t3 - 1) + e3, o3 = (n2 + 1) * t3 + e3;
                s2.push(i3, r3, o3), s2.push(r3, a3, o3);
              }
            this.setIndex(s2), this.setAttribute("position", new Ti(a2, 3)), this.setAttribute("normal", new Ti(o2, 3)), this.setAttribute("uv", new Ti(l2, 2));
          }
          static fromJSON(t2) {
            return new bl(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
          }
        }
        class Sl extends Di {
          constructor(t2 = 1, e2 = 0.4, i2 = 64, n2 = 8, r2 = 2, s2 = 3) {
            super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e2, tubularSegments: i2, radialSegments: n2, p: r2, q: s2 }, i2 = Math.floor(i2), n2 = Math.floor(n2);
            const a2 = [], o2 = [], l2 = [], c2 = [], h2 = new ne(), u2 = new ne(), d2 = new ne(), p2 = new ne(), m2 = new ne(), f2 = new ne(), g2 = new ne();
            for (let a3 = 0; a3 <= i2; ++a3) {
              const x2 = a3 / i2 * r2 * Math.PI * 2;
              v2(x2, r2, s2, t2, d2), v2(x2 + 0.01, r2, s2, t2, p2), f2.subVectors(p2, d2), g2.addVectors(p2, d2), m2.crossVectors(f2, g2), g2.crossVectors(m2, f2), m2.normalize(), g2.normalize();
              for (let t3 = 0; t3 <= n2; ++t3) {
                const r3 = t3 / n2 * Math.PI * 2, s3 = -e2 * Math.cos(r3), p3 = e2 * Math.sin(r3);
                h2.x = d2.x + (s3 * g2.x + p3 * m2.x), h2.y = d2.y + (s3 * g2.y + p3 * m2.y), h2.z = d2.z + (s3 * g2.z + p3 * m2.z), o2.push(h2.x, h2.y, h2.z), u2.subVectors(h2, d2).normalize(), l2.push(u2.x, u2.y, u2.z), c2.push(a3 / i2), c2.push(t3 / n2);
              }
            }
            for (let t3 = 1; t3 <= i2; t3++)
              for (let e3 = 1; e3 <= n2; e3++) {
                const i3 = (n2 + 1) * (t3 - 1) + (e3 - 1), r3 = (n2 + 1) * t3 + (e3 - 1), s3 = (n2 + 1) * t3 + e3, o3 = (n2 + 1) * (t3 - 1) + e3;
                a2.push(i3, r3, o3), a2.push(r3, s3, o3);
              }
            function v2(t3, e3, i3, n3, r3) {
              const s3 = Math.cos(t3), a3 = Math.sin(t3), o3 = i3 / e3 * t3, l3 = Math.cos(o3);
              r3.x = n3 * (2 + l3) * 0.5 * s3, r3.y = n3 * (2 + l3) * a3 * 0.5, r3.z = n3 * Math.sin(o3) * 0.5;
            }
            this.setIndex(a2), this.setAttribute("position", new Ti(o2, 3)), this.setAttribute("normal", new Ti(l2, 3)), this.setAttribute("uv", new Ti(c2, 2));
          }
          static fromJSON(t2) {
            return new Sl(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
          }
        }
        class wl extends Di {
          constructor(t2 = new bo(new ne(-1, -1, 0), new ne(-1, 1, 0), new ne(1, 1, 0)), e2 = 64, i2 = 1, n2 = 8, r2 = false) {
            super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e2, radius: i2, radialSegments: n2, closed: r2 };
            const s2 = t2.computeFrenetFrames(e2, r2);
            this.tangents = s2.tangents, this.normals = s2.normals, this.binormals = s2.binormals;
            const a2 = new ne(), o2 = new ne(), l2 = new Lt();
            let c2 = new ne();
            const h2 = [], u2 = [], d2 = [], p2 = [];
            function m2(r3) {
              c2 = t2.getPointAt(r3 / e2, c2);
              const l3 = s2.normals[r3], d3 = s2.binormals[r3];
              for (let t3 = 0; t3 <= n2; t3++) {
                const e3 = t3 / n2 * Math.PI * 2, r4 = Math.sin(e3), s3 = -Math.cos(e3);
                o2.x = s3 * l3.x + r4 * d3.x, o2.y = s3 * l3.y + r4 * d3.y, o2.z = s3 * l3.z + r4 * d3.z, o2.normalize(), u2.push(o2.x, o2.y, o2.z), a2.x = c2.x + i2 * o2.x, a2.y = c2.y + i2 * o2.y, a2.z = c2.z + i2 * o2.z, h2.push(a2.x, a2.y, a2.z);
              }
            }
            !function() {
              for (let t3 = 0; t3 < e2; t3++)
                m2(t3);
              m2(false === r2 ? e2 : 0), function() {
                for (let t3 = 0; t3 <= e2; t3++)
                  for (let i3 = 0; i3 <= n2; i3++)
                    l2.x = t3 / e2, l2.y = i3 / n2, d2.push(l2.x, l2.y);
              }(), function() {
                for (let t3 = 1; t3 <= e2; t3++)
                  for (let e3 = 1; e3 <= n2; e3++) {
                    const i3 = (n2 + 1) * (t3 - 1) + (e3 - 1), r3 = (n2 + 1) * t3 + (e3 - 1), s3 = (n2 + 1) * t3 + e3, a3 = (n2 + 1) * (t3 - 1) + e3;
                    p2.push(i3, r3, a3), p2.push(r3, s3, a3);
                  }
              }();
            }(), this.setIndex(p2), this.setAttribute("position", new Ti(h2, 3)), this.setAttribute("normal", new Ti(u2, 3)), this.setAttribute("uv", new Ti(d2, 2));
          }
          toJSON() {
            const t2 = super.toJSON();
            return t2.path = this.parameters.path.toJSON(), t2;
          }
          static fromJSON(t2) {
            return new wl(new wo[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
          }
        }
        class Tl extends Di {
          constructor(t2 = null) {
            if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
              const e2 = [], i2 = /* @__PURE__ */ new Set(), n2 = new ne(), r2 = new ne();
              if (null !== t2.index) {
                const s2 = t2.attributes.position, a2 = t2.index;
                let o2 = t2.groups;
                0 === o2.length && (o2 = [{ start: 0, count: a2.count, materialIndex: 0 }]);
                for (let t3 = 0, l2 = o2.length; t3 < l2; ++t3) {
                  const l3 = o2[t3], c2 = l3.start;
                  for (let t4 = c2, o3 = c2 + l3.count; t4 < o3; t4 += 3)
                    for (let o4 = 0; o4 < 3; o4++) {
                      const l4 = a2.getX(t4 + o4), c3 = a2.getX(t4 + (o4 + 1) % 3);
                      n2.fromBufferAttribute(s2, l4), r2.fromBufferAttribute(s2, c3), true === Al(n2, r2, i2) && (e2.push(n2.x, n2.y, n2.z), e2.push(r2.x, r2.y, r2.z));
                    }
                }
              } else {
                const s2 = t2.attributes.position;
                for (let t3 = 0, a2 = s2.count / 3; t3 < a2; t3++)
                  for (let a3 = 0; a3 < 3; a3++) {
                    const o2 = 3 * t3 + a3, l2 = 3 * t3 + (a3 + 1) % 3;
                    n2.fromBufferAttribute(s2, o2), r2.fromBufferAttribute(s2, l2), true === Al(n2, r2, i2) && (e2.push(n2.x, n2.y, n2.z), e2.push(r2.x, r2.y, r2.z));
                  }
              }
              this.setAttribute("position", new Ti(e2, 3));
            }
          }
        }
        function Al(t2, e2, i2) {
          const n2 = `${t2.x},${t2.y},${t2.z}-${e2.x},${e2.y},${e2.z}`, r2 = `${e2.x},${e2.y},${e2.z}-${t2.x},${t2.y},${t2.z}`;
          return true !== i2.has(n2) && true !== i2.has(r2) && (i2.add(n2), i2.add(r2), true);
        }
        var El = Object.freeze({ __proto__: null, BoxGeometry: Qi, CapsuleGeometry: Co, CircleGeometry: Lo, ConeGeometry: Po, CylinderGeometry: Ro, DodecahedronGeometry: Do, EdgesGeometry: Bo, ExtrudeGeometry: ml, IcosahedronGeometry: gl, LatheGeometry: Eo, OctahedronGeometry: vl, PlaneGeometry: yn, PolyhedronGeometry: Io, RingGeometry: xl, ShapeGeometry: _l, SphereGeometry: yl, TetrahedronGeometry: Ml, TorusGeometry: bl, TorusKnotGeometry: Sl, TubeGeometry: wl, WireframeGeometry: Tl });
        class Cl extends xi {
          constructor(t2) {
            super(), this.isShadowMaterial = true, this.type = "ShadowMaterial", this.color = new jt(0), this.transparent = true, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.fog = t2.fog, this;
          }
        }
        class Ll extends rn {
          constructor(t2) {
            super(t2), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
          }
        }
        class Rl extends xi {
          constructor(t2) {
            super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new jt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.defines = { STANDARD: "" }, this.color.copy(t2.color), this.roughness = t2.roughness, this.metalness = t2.metalness, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.roughnessMap = t2.roughnessMap, this.metalnessMap = t2.metalnessMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapIntensity = t2.envMapIntensity, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
          }
        }
        class Pl extends Rl {
          constructor(t2) {
            super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Lt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
              return yt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
            }, set: function(t3) {
              this.ior = (1 + 0.4 * t3) / (1 - 0.4 * t3);
            } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new jt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new jt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new jt(1, 1, 1), this.specularColorMap = null, this._sheen = 0, this._clearcoat = 0, this._iridescence = 0, this._transmission = 0, this.setValues(t2);
          }
          get sheen() {
            return this._sheen;
          }
          set sheen(t2) {
            this._sheen > 0 != t2 > 0 && this.version++, this._sheen = t2;
          }
          get clearcoat() {
            return this._clearcoat;
          }
          set clearcoat(t2) {
            this._clearcoat > 0 != t2 > 0 && this.version++, this._clearcoat = t2;
          }
          get iridescence() {
            return this._iridescence;
          }
          set iridescence(t2) {
            this._iridescence > 0 != t2 > 0 && this.version++, this._iridescence = t2;
          }
          get transmission() {
            return this._transmission;
          }
          set transmission(t2) {
            this._transmission > 0 != t2 > 0 && this.version++, this._transmission = t2;
          }
          copy(t2) {
            return super.copy(t2), this.defines = { STANDARD: "", PHYSICAL: "" }, this.clearcoat = t2.clearcoat, this.clearcoatMap = t2.clearcoatMap, this.clearcoatRoughness = t2.clearcoatRoughness, this.clearcoatRoughnessMap = t2.clearcoatRoughnessMap, this.clearcoatNormalMap = t2.clearcoatNormalMap, this.clearcoatNormalScale.copy(t2.clearcoatNormalScale), this.ior = t2.ior, this.iridescence = t2.iridescence, this.iridescenceMap = t2.iridescenceMap, this.iridescenceIOR = t2.iridescenceIOR, this.iridescenceThicknessRange = [...t2.iridescenceThicknessRange], this.iridescenceThicknessMap = t2.iridescenceThicknessMap, this.sheen = t2.sheen, this.sheenColor.copy(t2.sheenColor), this.sheenColorMap = t2.sheenColorMap, this.sheenRoughness = t2.sheenRoughness, this.sheenRoughnessMap = t2.sheenRoughnessMap, this.transmission = t2.transmission, this.transmissionMap = t2.transmissionMap, this.thickness = t2.thickness, this.thicknessMap = t2.thicknessMap, this.attenuationDistance = t2.attenuationDistance, this.attenuationColor.copy(t2.attenuationColor), this.specularIntensity = t2.specularIntensity, this.specularIntensityMap = t2.specularIntensityMap, this.specularColor.copy(t2.specularColor), this.specularColorMap = t2.specularColorMap, this;
          }
        }
        class Il extends xi {
          constructor(t2) {
            super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new jt(16777215), this.specular = new jt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.specular.copy(t2.specular), this.shininess = t2.shininess, this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
          }
        }
        class Dl extends xi {
          constructor(t2) {
            super(), this.isMeshToonMaterial = true, this.defines = { TOON: "" }, this.type = "MeshToonMaterial", this.color = new jt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.gradientMap = t2.gradientMap, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.alphaMap = t2.alphaMap, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
          }
        }
        class Nl extends xi {
          constructor(t2) {
            super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.flatShading = t2.flatShading, this;
          }
        }
        class Ol extends xi {
          constructor(t2) {
            super(), this.isMeshLambertMaterial = true, this.type = "MeshLambertMaterial", this.color = new jt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.emissive.copy(t2.emissive), this.emissiveMap = t2.emissiveMap, this.emissiveIntensity = t2.emissiveIntensity, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
          }
        }
        class zl extends xi {
          constructor(t2) {
            super(), this.isMeshMatcapMaterial = true, this.defines = { MATCAP: "" }, this.type = "MeshMatcapMaterial", this.color = new jt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Lt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = false, this.fog = true, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.defines = { MATCAP: "" }, this.color.copy(t2.color), this.matcap = t2.matcap, this.map = t2.map, this.bumpMap = t2.bumpMap, this.bumpScale = t2.bumpScale, this.normalMap = t2.normalMap, this.normalMapType = t2.normalMapType, this.normalScale.copy(t2.normalScale), this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.alphaMap = t2.alphaMap, this.flatShading = t2.flatShading, this.fog = t2.fog, this;
          }
        }
        class Ul extends Fa {
          constructor(t2) {
            super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t2);
          }
          copy(t2) {
            return super.copy(t2), this.scale = t2.scale, this.dashSize = t2.dashSize, this.gapSize = t2.gapSize, this;
          }
        }
        function Bl(t2, e2, i2) {
          return kl(t2) ? new t2.constructor(t2.subarray(e2, void 0 !== i2 ? i2 : t2.length)) : t2.slice(e2, i2);
        }
        function Fl(t2, e2, i2) {
          return !t2 || !i2 && t2.constructor === e2 ? t2 : "number" == typeof e2.BYTES_PER_ELEMENT ? new e2(t2) : Array.prototype.slice.call(t2);
        }
        function kl(t2) {
          return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
        }
        function Gl(t2) {
          const e2 = t2.length, i2 = new Array(e2);
          for (let t3 = 0; t3 !== e2; ++t3)
            i2[t3] = t3;
          return i2.sort(function(e3, i3) {
            return t2[e3] - t2[i3];
          }), i2;
        }
        function Vl(t2, e2, i2) {
          const n2 = t2.length, r2 = new t2.constructor(n2);
          for (let s2 = 0, a2 = 0; a2 !== n2; ++s2) {
            const n3 = i2[s2] * e2;
            for (let i3 = 0; i3 !== e2; ++i3)
              r2[a2++] = t2[n3 + i3];
          }
          return r2;
        }
        function Hl(t2, e2, i2, n2) {
          let r2 = 1, s2 = t2[0];
          for (; void 0 !== s2 && void 0 === s2[n2]; )
            s2 = t2[r2++];
          if (void 0 === s2)
            return;
          let a2 = s2[n2];
          if (void 0 !== a2)
            if (Array.isArray(a2))
              do {
                a2 = s2[n2], void 0 !== a2 && (e2.push(s2.time), i2.push.apply(i2, a2)), s2 = t2[r2++];
              } while (void 0 !== s2);
            else if (void 0 !== a2.toArray)
              do {
                a2 = s2[n2], void 0 !== a2 && (e2.push(s2.time), a2.toArray(i2, i2.length)), s2 = t2[r2++];
              } while (void 0 !== s2);
            else
              do {
                a2 = s2[n2], void 0 !== a2 && (e2.push(s2.time), i2.push(a2)), s2 = t2[r2++];
              } while (void 0 !== s2);
        }
        var Wl = Object.freeze({ __proto__: null, arraySlice: Bl, convertArray: Fl, isTypedArray: kl, getKeyframeOrder: Gl, sortedArray: Vl, flattenJSON: Hl, subclip: function(t2, e2, i2, n2, r2 = 30) {
          const s2 = t2.clone();
          s2.name = e2;
          const a2 = [];
          for (let t3 = 0; t3 < s2.tracks.length; ++t3) {
            const e3 = s2.tracks[t3], o3 = e3.getValueSize(), l2 = [], c2 = [];
            for (let t4 = 0; t4 < e3.times.length; ++t4) {
              const s3 = e3.times[t4] * r2;
              if (!(s3 < i2 || s3 >= n2)) {
                l2.push(e3.times[t4]);
                for (let i3 = 0; i3 < o3; ++i3)
                  c2.push(e3.values[t4 * o3 + i3]);
              }
            }
            0 !== l2.length && (e3.times = Fl(l2, e3.times.constructor), e3.values = Fl(c2, e3.values.constructor), a2.push(e3));
          }
          s2.tracks = a2;
          let o2 = 1 / 0;
          for (let t3 = 0; t3 < s2.tracks.length; ++t3)
            o2 > s2.tracks[t3].times[0] && (o2 = s2.tracks[t3].times[0]);
          for (let t3 = 0; t3 < s2.tracks.length; ++t3)
            s2.tracks[t3].shift(-1 * o2);
          return s2.resetDuration(), s2;
        }, makeClipAdditive: function(t2, e2 = 0, i2 = t2, n2 = 30) {
          n2 <= 0 && (n2 = 30);
          const r2 = i2.tracks.length, s2 = e2 / n2;
          for (let e3 = 0; e3 < r2; ++e3) {
            const n3 = i2.tracks[e3], r3 = n3.ValueTypeName;
            if ("bool" === r3 || "string" === r3)
              continue;
            const a2 = t2.tracks.find(function(t3) {
              return t3.name === n3.name && t3.ValueTypeName === r3;
            });
            if (void 0 === a2)
              continue;
            let o2 = 0;
            const l2 = n3.getValueSize();
            n3.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (o2 = l2 / 3);
            let c2 = 0;
            const h2 = a2.getValueSize();
            a2.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (c2 = h2 / 3);
            const u2 = n3.times.length - 1;
            let d2;
            if (s2 <= n3.times[0]) {
              const t3 = o2, e4 = l2 - o2;
              d2 = Bl(n3.values, t3, e4);
            } else if (s2 >= n3.times[u2]) {
              const t3 = u2 * l2 + o2, e4 = t3 + l2 - o2;
              d2 = Bl(n3.values, t3, e4);
            } else {
              const t3 = n3.createInterpolant(), e4 = o2, i3 = l2 - o2;
              t3.evaluate(s2), d2 = Bl(t3.resultBuffer, e4, i3);
            }
            if ("quaternion" === r3) {
              new ie().fromArray(d2).normalize().conjugate().toArray(d2);
            }
            const p2 = a2.times.length;
            for (let t3 = 0; t3 < p2; ++t3) {
              const e4 = t3 * h2 + c2;
              if ("quaternion" === r3)
                ie.multiplyQuaternionsFlat(a2.values, e4, d2, 0, a2.values, e4);
              else {
                const t4 = h2 - 2 * c2;
                for (let i3 = 0; i3 < t4; ++i3)
                  a2.values[e4 + i3] -= d2[i3];
              }
            }
          }
          return t2.blendMode = st, t2;
        } });
        class jl {
          constructor(t2, e2, i2, n2) {
            this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== n2 ? n2 : new e2.constructor(i2), this.sampleValues = e2, this.valueSize = i2, this.settings = null, this.DefaultSettings_ = {};
          }
          evaluate(t2) {
            const e2 = this.parameterPositions;
            let i2 = this._cachedIndex, n2 = e2[i2], r2 = e2[i2 - 1];
            t: {
              e: {
                let s2;
                i: {
                  n:
                    if (!(t2 < n2)) {
                      for (let s3 = i2 + 2; ; ) {
                        if (void 0 === n2) {
                          if (t2 < r2)
                            break n;
                          return i2 = e2.length, this._cachedIndex = i2, this.copySampleValue_(i2 - 1);
                        }
                        if (i2 === s3)
                          break;
                        if (r2 = n2, n2 = e2[++i2], t2 < n2)
                          break e;
                      }
                      s2 = e2.length;
                      break i;
                    }
                  if (t2 >= r2)
                    break t;
                  {
                    const a2 = e2[1];
                    t2 < a2 && (i2 = 2, r2 = a2);
                    for (let s3 = i2 - 2; ; ) {
                      if (void 0 === r2)
                        return this._cachedIndex = 0, this.copySampleValue_(0);
                      if (i2 === s3)
                        break;
                      if (n2 = r2, r2 = e2[--i2 - 1], t2 >= r2)
                        break e;
                    }
                    s2 = i2, i2 = 0;
                  }
                }
                for (; i2 < s2; ) {
                  const n3 = i2 + s2 >>> 1;
                  t2 < e2[n3] ? s2 = n3 : i2 = n3 + 1;
                }
                if (n2 = e2[i2], r2 = e2[i2 - 1], void 0 === r2)
                  return this._cachedIndex = 0, this.copySampleValue_(0);
                if (void 0 === n2)
                  return i2 = e2.length, this._cachedIndex = i2, this.copySampleValue_(i2 - 1);
              }
              this._cachedIndex = i2, this.intervalChanged_(i2, r2, n2);
            }
            return this.interpolate_(i2, r2, t2, n2);
          }
          getSettings_() {
            return this.settings || this.DefaultSettings_;
          }
          copySampleValue_(t2) {
            const e2 = this.resultBuffer, i2 = this.sampleValues, n2 = this.valueSize, r2 = t2 * n2;
            for (let t3 = 0; t3 !== n2; ++t3)
              e2[t3] = i2[r2 + t3];
            return e2;
          }
          interpolate_() {
            throw new Error("call to abstract method");
          }
          intervalChanged_() {
          }
        }
        class ql extends jl {
          constructor(t2, e2, i2, n2) {
            super(t2, e2, i2, n2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: et, endingEnd: et };
          }
          intervalChanged_(t2, e2, i2) {
            const n2 = this.parameterPositions;
            let r2 = t2 - 2, s2 = t2 + 1, a2 = n2[r2], o2 = n2[s2];
            if (void 0 === a2)
              switch (this.getSettings_().endingStart) {
                case it:
                  r2 = t2, a2 = 2 * e2 - i2;
                  break;
                case nt:
                  r2 = n2.length - 2, a2 = e2 + n2[r2] - n2[r2 + 1];
                  break;
                default:
                  r2 = t2, a2 = i2;
              }
            if (void 0 === o2)
              switch (this.getSettings_().endingEnd) {
                case it:
                  s2 = t2, o2 = 2 * i2 - e2;
                  break;
                case nt:
                  s2 = 1, o2 = i2 + n2[1] - n2[0];
                  break;
                default:
                  s2 = t2 - 1, o2 = e2;
              }
            const l2 = 0.5 * (i2 - e2), c2 = this.valueSize;
            this._weightPrev = l2 / (e2 - a2), this._weightNext = l2 / (o2 - i2), this._offsetPrev = r2 * c2, this._offsetNext = s2 * c2;
          }
          interpolate_(t2, e2, i2, n2) {
            const r2 = this.resultBuffer, s2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, l2 = o2 - a2, c2 = this._offsetPrev, h2 = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (i2 - e2) / (n2 - e2), m2 = p2 * p2, f2 = m2 * p2, g2 = -u2 * f2 + 2 * u2 * m2 - u2 * p2, v2 = (1 + u2) * f2 + (-1.5 - 2 * u2) * m2 + (-0.5 + u2) * p2 + 1, x2 = (-1 - d2) * f2 + (1.5 + d2) * m2 + 0.5 * p2, _2 = d2 * f2 - d2 * m2;
            for (let t3 = 0; t3 !== a2; ++t3)
              r2[t3] = g2 * s2[c2 + t3] + v2 * s2[l2 + t3] + x2 * s2[o2 + t3] + _2 * s2[h2 + t3];
            return r2;
          }
        }
        class Xl extends jl {
          constructor(t2, e2, i2, n2) {
            super(t2, e2, i2, n2);
          }
          interpolate_(t2, e2, i2, n2) {
            const r2 = this.resultBuffer, s2 = this.sampleValues, a2 = this.valueSize, o2 = t2 * a2, l2 = o2 - a2, c2 = (i2 - e2) / (n2 - e2), h2 = 1 - c2;
            for (let t3 = 0; t3 !== a2; ++t3)
              r2[t3] = s2[l2 + t3] * h2 + s2[o2 + t3] * c2;
            return r2;
          }
        }
        class Yl extends jl {
          constructor(t2, e2, i2, n2) {
            super(t2, e2, i2, n2);
          }
          interpolate_(t2) {
            return this.copySampleValue_(t2 - 1);
          }
        }
        class Zl {
          constructor(t2, e2, i2, n2) {
            if (void 0 === t2)
              throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e2 || 0 === e2.length)
              throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
            this.name = t2, this.times = Fl(e2, this.TimeBufferType), this.values = Fl(i2, this.ValueBufferType), this.setInterpolation(n2 || this.DefaultInterpolation);
          }
          static toJSON(t2) {
            const e2 = t2.constructor;
            let i2;
            if (e2.toJSON !== this.toJSON)
              i2 = e2.toJSON(t2);
            else {
              i2 = { name: t2.name, times: Fl(t2.times, Array), values: Fl(t2.values, Array) };
              const e3 = t2.getInterpolation();
              e3 !== t2.DefaultInterpolation && (i2.interpolation = e3);
            }
            return i2.type = t2.ValueTypeName, i2;
          }
          InterpolantFactoryMethodDiscrete(t2) {
            return new Yl(this.times, this.values, this.getValueSize(), t2);
          }
          InterpolantFactoryMethodLinear(t2) {
            return new Xl(this.times, this.values, this.getValueSize(), t2);
          }
          InterpolantFactoryMethodSmooth(t2) {
            return new ql(this.times, this.values, this.getValueSize(), t2);
          }
          setInterpolation(t2) {
            let e2;
            switch (t2) {
              case $:
                e2 = this.InterpolantFactoryMethodDiscrete;
                break;
              case Q:
                e2 = this.InterpolantFactoryMethodLinear;
                break;
              case tt:
                e2 = this.InterpolantFactoryMethodSmooth;
            }
            if (void 0 === e2) {
              const e3 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
              if (void 0 === this.createInterpolant) {
                if (t2 === this.DefaultInterpolation)
                  throw new Error(e3);
                this.setInterpolation(this.DefaultInterpolation);
              }
              return console.warn("THREE.KeyframeTrack:", e3), this;
            }
            return this.createInterpolant = e2, this;
          }
          getInterpolation() {
            switch (this.createInterpolant) {
              case this.InterpolantFactoryMethodDiscrete:
                return $;
              case this.InterpolantFactoryMethodLinear:
                return Q;
              case this.InterpolantFactoryMethodSmooth:
                return tt;
            }
          }
          getValueSize() {
            return this.values.length / this.times.length;
          }
          shift(t2) {
            if (0 !== t2) {
              const e2 = this.times;
              for (let i2 = 0, n2 = e2.length; i2 !== n2; ++i2)
                e2[i2] += t2;
            }
            return this;
          }
          scale(t2) {
            if (1 !== t2) {
              const e2 = this.times;
              for (let i2 = 0, n2 = e2.length; i2 !== n2; ++i2)
                e2[i2] *= t2;
            }
            return this;
          }
          trim(t2, e2) {
            const i2 = this.times, n2 = i2.length;
            let r2 = 0, s2 = n2 - 1;
            for (; r2 !== n2 && i2[r2] < t2; )
              ++r2;
            for (; -1 !== s2 && i2[s2] > e2; )
              --s2;
            if (++s2, 0 !== r2 || s2 !== n2) {
              r2 >= s2 && (s2 = Math.max(s2, 1), r2 = s2 - 1);
              const t3 = this.getValueSize();
              this.times = Bl(i2, r2, s2), this.values = Bl(this.values, r2 * t3, s2 * t3);
            }
            return this;
          }
          validate() {
            let t2 = true;
            const e2 = this.getValueSize();
            e2 - Math.floor(e2) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
            const i2 = this.times, n2 = this.values, r2 = i2.length;
            0 === r2 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
            let s2 = null;
            for (let e3 = 0; e3 !== r2; e3++) {
              const n3 = i2[e3];
              if ("number" == typeof n3 && isNaN(n3)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e3, n3), t2 = false;
                break;
              }
              if (null !== s2 && s2 > n3) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, e3, n3, s2), t2 = false;
                break;
              }
              s2 = n3;
            }
            if (void 0 !== n2 && kl(n2))
              for (let e3 = 0, i3 = n2.length; e3 !== i3; ++e3) {
                const i4 = n2[e3];
                if (isNaN(i4)) {
                  console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e3, i4), t2 = false;
                  break;
                }
              }
            return t2;
          }
          optimize() {
            const t2 = Bl(this.times), e2 = Bl(this.values), i2 = this.getValueSize(), n2 = this.getInterpolation() === tt, r2 = t2.length - 1;
            let s2 = 1;
            for (let a2 = 1; a2 < r2; ++a2) {
              let r3 = false;
              const o2 = t2[a2];
              if (o2 !== t2[a2 + 1] && (1 !== a2 || o2 !== t2[0]))
                if (n2)
                  r3 = true;
                else {
                  const t3 = a2 * i2, n3 = t3 - i2, s3 = t3 + i2;
                  for (let a3 = 0; a3 !== i2; ++a3) {
                    const i3 = e2[t3 + a3];
                    if (i3 !== e2[n3 + a3] || i3 !== e2[s3 + a3]) {
                      r3 = true;
                      break;
                    }
                  }
                }
              if (r3) {
                if (a2 !== s2) {
                  t2[s2] = t2[a2];
                  const n3 = a2 * i2, r4 = s2 * i2;
                  for (let t3 = 0; t3 !== i2; ++t3)
                    e2[r4 + t3] = e2[n3 + t3];
                }
                ++s2;
              }
            }
            if (r2 > 0) {
              t2[s2] = t2[r2];
              for (let t3 = r2 * i2, n3 = s2 * i2, a2 = 0; a2 !== i2; ++a2)
                e2[n3 + a2] = e2[t3 + a2];
              ++s2;
            }
            return s2 !== t2.length ? (this.times = Bl(t2, 0, s2), this.values = Bl(e2, 0, s2 * i2)) : (this.times = t2, this.values = e2), this;
          }
          clone() {
            const t2 = Bl(this.times, 0), e2 = Bl(this.values, 0), i2 = new (0, this.constructor)(this.name, t2, e2);
            return i2.createInterpolant = this.createInterpolant, i2;
          }
        }
        Zl.prototype.TimeBufferType = Float32Array, Zl.prototype.ValueBufferType = Float32Array, Zl.prototype.DefaultInterpolation = Q;
        class Jl extends Zl {
        }
        Jl.prototype.ValueTypeName = "bool", Jl.prototype.ValueBufferType = Array, Jl.prototype.DefaultInterpolation = $, Jl.prototype.InterpolantFactoryMethodLinear = void 0, Jl.prototype.InterpolantFactoryMethodSmooth = void 0;
        class Kl extends Zl {
        }
        Kl.prototype.ValueTypeName = "color";
        class $l extends Zl {
        }
        $l.prototype.ValueTypeName = "number";
        class Ql extends jl {
          constructor(t2, e2, i2, n2) {
            super(t2, e2, i2, n2);
          }
          interpolate_(t2, e2, i2, n2) {
            const r2 = this.resultBuffer, s2 = this.sampleValues, a2 = this.valueSize, o2 = (i2 - e2) / (n2 - e2);
            let l2 = t2 * a2;
            for (let t3 = l2 + a2; l2 !== t3; l2 += 4)
              ie.slerpFlat(r2, 0, s2, l2 - a2, s2, l2, o2);
            return r2;
          }
        }
        class tc extends Zl {
          InterpolantFactoryMethodLinear(t2) {
            return new Ql(this.times, this.values, this.getValueSize(), t2);
          }
        }
        tc.prototype.ValueTypeName = "quaternion", tc.prototype.DefaultInterpolation = Q, tc.prototype.InterpolantFactoryMethodSmooth = void 0;
        class ec extends Zl {
        }
        ec.prototype.ValueTypeName = "string", ec.prototype.ValueBufferType = Array, ec.prototype.DefaultInterpolation = $, ec.prototype.InterpolantFactoryMethodLinear = void 0, ec.prototype.InterpolantFactoryMethodSmooth = void 0;
        class ic extends Zl {
        }
        ic.prototype.ValueTypeName = "vector";
        class nc {
          constructor(t2, e2 = -1, i2, n2 = 2500) {
            this.name = t2, this.tracks = i2, this.duration = e2, this.blendMode = n2, this.uuid = _t(), this.duration < 0 && this.resetDuration();
          }
          static parse(t2) {
            const e2 = [], i2 = t2.tracks, n2 = 1 / (t2.fps || 1);
            for (let t3 = 0, r3 = i2.length; t3 !== r3; ++t3)
              e2.push(rc(i2[t3]).scale(n2));
            const r2 = new this(t2.name, t2.duration, e2, t2.blendMode);
            return r2.uuid = t2.uuid, r2;
          }
          static toJSON(t2) {
            const e2 = [], i2 = t2.tracks, n2 = { name: t2.name, duration: t2.duration, tracks: e2, uuid: t2.uuid, blendMode: t2.blendMode };
            for (let t3 = 0, n3 = i2.length; t3 !== n3; ++t3)
              e2.push(Zl.toJSON(i2[t3]));
            return n2;
          }
          static CreateFromMorphTargetSequence(t2, e2, i2, n2) {
            const r2 = e2.length, s2 = [];
            for (let t3 = 0; t3 < r2; t3++) {
              let a2 = [], o2 = [];
              a2.push((t3 + r2 - 1) % r2, t3, (t3 + 1) % r2), o2.push(0, 1, 0);
              const l2 = Gl(a2);
              a2 = Vl(a2, 1, l2), o2 = Vl(o2, 1, l2), n2 || 0 !== a2[0] || (a2.push(r2), o2.push(o2[0])), s2.push(new $l(".morphTargetInfluences[" + e2[t3].name + "]", a2, o2).scale(1 / i2));
            }
            return new this(t2, -1, s2);
          }
          static findByName(t2, e2) {
            let i2 = t2;
            if (!Array.isArray(t2)) {
              const e3 = t2;
              i2 = e3.geometry && e3.geometry.animations || e3.animations;
            }
            for (let t3 = 0; t3 < i2.length; t3++)
              if (i2[t3].name === e2)
                return i2[t3];
            return null;
          }
          static CreateClipsFromMorphTargetSequences(t2, e2, i2) {
            const n2 = {}, r2 = /^([\w-]*?)([\d]+)$/;
            for (let e3 = 0, i3 = t2.length; e3 < i3; e3++) {
              const i4 = t2[e3], s3 = i4.name.match(r2);
              if (s3 && s3.length > 1) {
                const t3 = s3[1];
                let e4 = n2[t3];
                e4 || (n2[t3] = e4 = []), e4.push(i4);
              }
            }
            const s2 = [];
            for (const t3 in n2)
              s2.push(this.CreateFromMorphTargetSequence(t3, n2[t3], e2, i2));
            return s2;
          }
          static parseAnimation(t2, e2) {
            if (!t2)
              return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            const i2 = function(t3, e3, i3, n3, r3) {
              if (0 !== i3.length) {
                const s3 = [], a3 = [];
                Hl(i3, s3, a3, n3), 0 !== s3.length && r3.push(new t3(e3, s3, a3));
              }
            }, n2 = [], r2 = t2.name || "default", s2 = t2.fps || 30, a2 = t2.blendMode;
            let o2 = t2.length || -1;
            const l2 = t2.hierarchy || [];
            for (let t3 = 0; t3 < l2.length; t3++) {
              const r3 = l2[t3].keys;
              if (r3 && 0 !== r3.length)
                if (r3[0].morphTargets) {
                  const t4 = {};
                  let e3;
                  for (e3 = 0; e3 < r3.length; e3++)
                    if (r3[e3].morphTargets)
                      for (let i3 = 0; i3 < r3[e3].morphTargets.length; i3++)
                        t4[r3[e3].morphTargets[i3]] = -1;
                  for (const i3 in t4) {
                    const t5 = [], s3 = [];
                    for (let n3 = 0; n3 !== r3[e3].morphTargets.length; ++n3) {
                      const n4 = r3[e3];
                      t5.push(n4.time), s3.push(n4.morphTarget === i3 ? 1 : 0);
                    }
                    n2.push(new $l(".morphTargetInfluence[" + i3 + "]", t5, s3));
                  }
                  o2 = t4.length * s2;
                } else {
                  const s3 = ".bones[" + e2[t3].name + "]";
                  i2(ic, s3 + ".position", r3, "pos", n2), i2(tc, s3 + ".quaternion", r3, "rot", n2), i2(ic, s3 + ".scale", r3, "scl", n2);
                }
            }
            if (0 === n2.length)
              return null;
            return new this(r2, o2, n2, a2);
          }
          resetDuration() {
            let t2 = 0;
            for (let e2 = 0, i2 = this.tracks.length; e2 !== i2; ++e2) {
              const i3 = this.tracks[e2];
              t2 = Math.max(t2, i3.times[i3.times.length - 1]);
            }
            return this.duration = t2, this;
          }
          trim() {
            for (let t2 = 0; t2 < this.tracks.length; t2++)
              this.tracks[t2].trim(0, this.duration);
            return this;
          }
          validate() {
            let t2 = true;
            for (let e2 = 0; e2 < this.tracks.length; e2++)
              t2 = t2 && this.tracks[e2].validate();
            return t2;
          }
          optimize() {
            for (let t2 = 0; t2 < this.tracks.length; t2++)
              this.tracks[t2].optimize();
            return this;
          }
          clone() {
            const t2 = [];
            for (let e2 = 0; e2 < this.tracks.length; e2++)
              t2.push(this.tracks[e2].clone());
            return new this.constructor(this.name, this.duration, t2, this.blendMode);
          }
          toJSON() {
            return this.constructor.toJSON(this);
          }
        }
        function rc(t2) {
          if (void 0 === t2.type)
            throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
          const e2 = function(t3) {
            switch (t3.toLowerCase()) {
              case "scalar":
              case "double":
              case "float":
              case "number":
              case "integer":
                return $l;
              case "vector":
              case "vector2":
              case "vector3":
              case "vector4":
                return ic;
              case "color":
                return Kl;
              case "quaternion":
                return tc;
              case "bool":
              case "boolean":
                return Jl;
              case "string":
                return ec;
            }
            throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t3);
          }(t2.type);
          if (void 0 === t2.times) {
            const e3 = [], i2 = [];
            Hl(t2.keys, e3, i2, "value"), t2.times = e3, t2.values = i2;
          }
          return void 0 !== e2.parse ? e2.parse(t2) : new e2(t2.name, t2.times, t2.values, t2.interpolation);
        }
        const sc = { enabled: false, files: {}, add: function(t2, e2) {
          false !== this.enabled && (this.files[t2] = e2);
        }, get: function(t2) {
          if (false !== this.enabled)
            return this.files[t2];
        }, remove: function(t2) {
          delete this.files[t2];
        }, clear: function() {
          this.files = {};
        } };
        class ac {
          constructor(t2, e2, i2) {
            const n2 = this;
            let r2, s2 = false, a2 = 0, o2 = 0;
            const l2 = [];
            this.onStart = void 0, this.onLoad = t2, this.onProgress = e2, this.onError = i2, this.itemStart = function(t3) {
              o2++, false === s2 && void 0 !== n2.onStart && n2.onStart(t3, a2, o2), s2 = true;
            }, this.itemEnd = function(t3) {
              a2++, void 0 !== n2.onProgress && n2.onProgress(t3, a2, o2), a2 === o2 && (s2 = false, void 0 !== n2.onLoad && n2.onLoad());
            }, this.itemError = function(t3) {
              void 0 !== n2.onError && n2.onError(t3);
            }, this.resolveURL = function(t3) {
              return r2 ? r2(t3) : t3;
            }, this.setURLModifier = function(t3) {
              return r2 = t3, this;
            }, this.addHandler = function(t3, e3) {
              return l2.push(t3, e3), this;
            }, this.removeHandler = function(t3) {
              const e3 = l2.indexOf(t3);
              return -1 !== e3 && l2.splice(e3, 2), this;
            }, this.getHandler = function(t3) {
              for (let e3 = 0, i3 = l2.length; e3 < i3; e3 += 2) {
                const i4 = l2[e3], n3 = l2[e3 + 1];
                if (i4.global && (i4.lastIndex = 0), i4.test(t3))
                  return n3;
              }
              return null;
            };
          }
        }
        const oc = new ac();
        class lc {
          constructor(t2) {
            this.manager = void 0 !== t2 ? t2 : oc, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
          }
          load() {
          }
          loadAsync(t2, e2) {
            const i2 = this;
            return new Promise(function(n2, r2) {
              i2.load(t2, n2, e2, r2);
            });
          }
          parse() {
          }
          setCrossOrigin(t2) {
            return this.crossOrigin = t2, this;
          }
          setWithCredentials(t2) {
            return this.withCredentials = t2, this;
          }
          setPath(t2) {
            return this.path = t2, this;
          }
          setResourcePath(t2) {
            return this.resourcePath = t2, this;
          }
          setRequestHeader(t2) {
            return this.requestHeader = t2, this;
          }
        }
        const cc = {};
        class hc extends Error {
          constructor(t2, e2) {
            super(t2), this.response = e2;
          }
        }
        class uc extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            void 0 === t2 && (t2 = ""), void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
            const r2 = sc.get(t2);
            if (void 0 !== r2)
              return this.manager.itemStart(t2), setTimeout(() => {
                e2 && e2(r2), this.manager.itemEnd(t2);
              }, 0), r2;
            if (void 0 !== cc[t2])
              return void cc[t2].push({ onLoad: e2, onProgress: i2, onError: n2 });
            cc[t2] = [], cc[t2].push({ onLoad: e2, onProgress: i2, onError: n2 });
            const s2 = new Request(t2, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a2 = this.mimeType, o2 = this.responseType;
            fetch(s2).then((e3) => {
              if (200 === e3.status || 0 === e3.status) {
                if (0 === e3.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), "undefined" == typeof ReadableStream || void 0 === e3.body || void 0 === e3.body.getReader)
                  return e3;
                const i3 = cc[t2], n3 = e3.body.getReader(), r3 = e3.headers.get("Content-Length"), s3 = r3 ? parseInt(r3) : 0, a3 = 0 !== s3;
                let o3 = 0;
                const l2 = new ReadableStream({ start(t3) {
                  !function e4() {
                    n3.read().then(({ done: n4, value: r4 }) => {
                      if (n4)
                        t3.close();
                      else {
                        o3 += r4.byteLength;
                        const n5 = new ProgressEvent("progress", { lengthComputable: a3, loaded: o3, total: s3 });
                        for (let t4 = 0, e5 = i3.length; t4 < e5; t4++) {
                          const e6 = i3[t4];
                          e6.onProgress && e6.onProgress(n5);
                        }
                        t3.enqueue(r4), e4();
                      }
                    });
                  }();
                } });
                return new Response(l2);
              }
              throw new hc(`fetch for "${e3.url}" responded with ${e3.status}: ${e3.statusText}`, e3);
            }).then((t3) => {
              switch (o2) {
                case "arraybuffer":
                  return t3.arrayBuffer();
                case "blob":
                  return t3.blob();
                case "document":
                  return t3.text().then((t4) => new DOMParser().parseFromString(t4, a2));
                case "json":
                  return t3.json();
                default:
                  if (void 0 === a2)
                    return t3.text();
                  {
                    const e3 = /charset="?([^;"\s]*)"?/i.exec(a2), i3 = e3 && e3[1] ? e3[1].toLowerCase() : void 0, n3 = new TextDecoder(i3);
                    return t3.arrayBuffer().then((t4) => n3.decode(t4));
                  }
              }
            }).then((e3) => {
              sc.add(t2, e3);
              const i3 = cc[t2];
              delete cc[t2];
              for (let t3 = 0, n3 = i3.length; t3 < n3; t3++) {
                const n4 = i3[t3];
                n4.onLoad && n4.onLoad(e3);
              }
            }).catch((e3) => {
              const i3 = cc[t2];
              if (void 0 === i3)
                throw this.manager.itemError(t2), e3;
              delete cc[t2];
              for (let t3 = 0, n3 = i3.length; t3 < n3; t3++) {
                const n4 = i3[t3];
                n4.onError && n4.onError(e3);
              }
              this.manager.itemError(t2);
            }).finally(() => {
              this.manager.itemEnd(t2);
            }), this.manager.itemStart(t2);
          }
          setResponseType(t2) {
            return this.responseType = t2, this;
          }
          setMimeType(t2) {
            return this.mimeType = t2, this;
          }
        }
        class dc extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
            const r2 = this, s2 = sc.get(t2);
            if (void 0 !== s2)
              return r2.manager.itemStart(t2), setTimeout(function() {
                e2 && e2(s2), r2.manager.itemEnd(t2);
              }, 0), s2;
            const a2 = Nt("img");
            function o2() {
              c2(), sc.add(t2, this), e2 && e2(this), r2.manager.itemEnd(t2);
            }
            function l2(e3) {
              c2(), n2 && n2(e3), r2.manager.itemError(t2), r2.manager.itemEnd(t2);
            }
            function c2() {
              a2.removeEventListener("load", o2, false), a2.removeEventListener("error", l2, false);
            }
            return a2.addEventListener("load", o2, false), a2.addEventListener("error", l2, false), "data:" !== t2.slice(0, 5) && void 0 !== this.crossOrigin && (a2.crossOrigin = this.crossOrigin), r2.manager.itemStart(t2), a2.src = t2, a2;
          }
        }
        class pc extends si {
          constructor(t2, e2 = 1) {
            super(), this.isLight = true, this.type = "Light", this.color = new jt(t2), this.intensity = e2;
          }
          dispose() {
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.color.copy(t2.color), this.intensity = t2.intensity, this;
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return e2.object.color = this.color.getHex(), e2.object.intensity = this.intensity, void 0 !== this.groundColor && (e2.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e2.object.distance = this.distance), void 0 !== this.angle && (e2.object.angle = this.angle), void 0 !== this.decay && (e2.object.decay = this.decay), void 0 !== this.penumbra && (e2.object.penumbra = this.penumbra), void 0 !== this.shadow && (e2.object.shadow = this.shadow.toJSON()), e2;
          }
        }
        class mc extends pc {
          constructor(t2, e2, i2) {
            super(t2, i2), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(si.DefaultUp), this.updateMatrix(), this.groundColor = new jt(e2);
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.groundColor.copy(t2.groundColor), this;
          }
        }
        const fc = new Ne(), gc = new ne(), vc = new ne();
        class xc {
          constructor(t2) {
            this.camera = t2, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Lt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ne(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new vn(), this._frameExtents = new Lt(1, 1), this._viewportCount = 1, this._viewports = [new $t(0, 0, 1, 1)];
          }
          getViewportCount() {
            return this._viewportCount;
          }
          getFrustum() {
            return this._frustum;
          }
          updateMatrices(t2) {
            const e2 = this.camera, i2 = this.matrix;
            gc.setFromMatrixPosition(t2.matrixWorld), e2.position.copy(gc), vc.setFromMatrixPosition(t2.target.matrixWorld), e2.lookAt(vc), e2.updateMatrixWorld(), fc.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(fc), i2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i2.multiply(fc);
          }
          getViewport(t2) {
            return this._viewports[t2];
          }
          getFrameExtents() {
            return this._frameExtents;
          }
          dispose() {
            this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
          }
          copy(t2) {
            return this.camera = t2.camera.clone(), this.bias = t2.bias, this.radius = t2.radius, this.mapSize.copy(t2.mapSize), this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
          toJSON() {
            const t2 = {};
            return 0 !== this.bias && (t2.bias = this.bias), 0 !== this.normalBias && (t2.normalBias = this.normalBias), 1 !== this.radius && (t2.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t2.mapSize = this.mapSize.toArray()), t2.camera = this.camera.toJSON(false).object, delete t2.camera.matrix, t2;
          }
        }
        class _c extends xc {
          constructor() {
            super(new an(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
          }
          updateMatrices(t2) {
            const e2 = this.camera, i2 = 2 * xt * t2.angle * this.focus, n2 = this.mapSize.width / this.mapSize.height, r2 = t2.distance || e2.far;
            i2 === e2.fov && n2 === e2.aspect && r2 === e2.far || (e2.fov = i2, e2.aspect = n2, e2.far = r2, e2.updateProjectionMatrix()), super.updateMatrices(t2);
          }
          copy(t2) {
            return super.copy(t2), this.focus = t2.focus, this;
          }
        }
        class yc extends pc {
          constructor(t2, e2, i2 = 0, n2 = Math.PI / 3, r2 = 0, s2 = 1) {
            super(t2, e2), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(si.DefaultUp), this.updateMatrix(), this.target = new si(), this.distance = i2, this.angle = n2, this.penumbra = r2, this.decay = s2, this.map = null, this.shadow = new _c();
          }
          get power() {
            return this.intensity * Math.PI;
          }
          set power(t2) {
            this.intensity = t2 / Math.PI;
          }
          dispose() {
            this.shadow.dispose();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.distance = t2.distance, this.angle = t2.angle, this.penumbra = t2.penumbra, this.decay = t2.decay, this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
          }
        }
        const Mc = new Ne(), bc = new ne(), Sc = new ne();
        class wc extends xc {
          constructor() {
            super(new an(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Lt(4, 2), this._viewportCount = 6, this._viewports = [new $t(2, 1, 1, 1), new $t(0, 1, 1, 1), new $t(3, 1, 1, 1), new $t(1, 1, 1, 1), new $t(3, 0, 1, 1), new $t(1, 0, 1, 1)], this._cubeDirections = [new ne(1, 0, 0), new ne(-1, 0, 0), new ne(0, 0, 1), new ne(0, 0, -1), new ne(0, 1, 0), new ne(0, -1, 0)], this._cubeUps = [new ne(0, 1, 0), new ne(0, 1, 0), new ne(0, 1, 0), new ne(0, 1, 0), new ne(0, 0, 1), new ne(0, 0, -1)];
          }
          updateMatrices(t2, e2 = 0) {
            const i2 = this.camera, n2 = this.matrix, r2 = t2.distance || i2.far;
            r2 !== i2.far && (i2.far = r2, i2.updateProjectionMatrix()), bc.setFromMatrixPosition(t2.matrixWorld), i2.position.copy(bc), Sc.copy(i2.position), Sc.add(this._cubeDirections[e2]), i2.up.copy(this._cubeUps[e2]), i2.lookAt(Sc), i2.updateMatrixWorld(), n2.makeTranslation(-bc.x, -bc.y, -bc.z), Mc.multiplyMatrices(i2.projectionMatrix, i2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Mc);
          }
        }
        class Tc extends pc {
          constructor(t2, e2, i2 = 0, n2 = 1) {
            super(t2, e2), this.isPointLight = true, this.type = "PointLight", this.distance = i2, this.decay = n2, this.shadow = new wc();
          }
          get power() {
            return 4 * this.intensity * Math.PI;
          }
          set power(t2) {
            this.intensity = t2 / (4 * Math.PI);
          }
          dispose() {
            this.shadow.dispose();
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.distance = t2.distance, this.decay = t2.decay, this.shadow = t2.shadow.clone(), this;
          }
        }
        class Ac extends xc {
          constructor() {
            super(new Rn(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
          }
        }
        class Ec extends pc {
          constructor(t2, e2) {
            super(t2, e2), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(si.DefaultUp), this.updateMatrix(), this.target = new si(), this.shadow = new Ac();
          }
          dispose() {
            this.shadow.dispose();
          }
          copy(t2) {
            return super.copy(t2), this.target = t2.target.clone(), this.shadow = t2.shadow.clone(), this;
          }
        }
        class Cc extends pc {
          constructor(t2, e2) {
            super(t2, e2), this.isAmbientLight = true, this.type = "AmbientLight";
          }
        }
        class Lc extends pc {
          constructor(t2, e2, i2 = 10, n2 = 10) {
            super(t2, e2), this.isRectAreaLight = true, this.type = "RectAreaLight", this.width = i2, this.height = n2;
          }
          get power() {
            return this.intensity * this.width * this.height * Math.PI;
          }
          set power(t2) {
            this.intensity = t2 / (this.width * this.height * Math.PI);
          }
          copy(t2) {
            return super.copy(t2), this.width = t2.width, this.height = t2.height, this;
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return e2.object.width = this.width, e2.object.height = this.height, e2;
          }
        }
        class Rc {
          constructor() {
            this.isSphericalHarmonics3 = true, this.coefficients = [];
            for (let t2 = 0; t2 < 9; t2++)
              this.coefficients.push(new ne());
          }
          set(t2) {
            for (let e2 = 0; e2 < 9; e2++)
              this.coefficients[e2].copy(t2[e2]);
            return this;
          }
          zero() {
            for (let t2 = 0; t2 < 9; t2++)
              this.coefficients[t2].set(0, 0, 0);
            return this;
          }
          getAt(t2, e2) {
            const i2 = t2.x, n2 = t2.y, r2 = t2.z, s2 = this.coefficients;
            return e2.copy(s2[0]).multiplyScalar(0.282095), e2.addScaledVector(s2[1], 0.488603 * n2), e2.addScaledVector(s2[2], 0.488603 * r2), e2.addScaledVector(s2[3], 0.488603 * i2), e2.addScaledVector(s2[4], i2 * n2 * 1.092548), e2.addScaledVector(s2[5], n2 * r2 * 1.092548), e2.addScaledVector(s2[6], 0.315392 * (3 * r2 * r2 - 1)), e2.addScaledVector(s2[7], i2 * r2 * 1.092548), e2.addScaledVector(s2[8], 0.546274 * (i2 * i2 - n2 * n2)), e2;
          }
          getIrradianceAt(t2, e2) {
            const i2 = t2.x, n2 = t2.y, r2 = t2.z, s2 = this.coefficients;
            return e2.copy(s2[0]).multiplyScalar(0.886227), e2.addScaledVector(s2[1], 1.023328 * n2), e2.addScaledVector(s2[2], 1.023328 * r2), e2.addScaledVector(s2[3], 1.023328 * i2), e2.addScaledVector(s2[4], 0.858086 * i2 * n2), e2.addScaledVector(s2[5], 0.858086 * n2 * r2), e2.addScaledVector(s2[6], 0.743125 * r2 * r2 - 0.247708), e2.addScaledVector(s2[7], 0.858086 * i2 * r2), e2.addScaledVector(s2[8], 0.429043 * (i2 * i2 - n2 * n2)), e2;
          }
          add(t2) {
            for (let e2 = 0; e2 < 9; e2++)
              this.coefficients[e2].add(t2.coefficients[e2]);
            return this;
          }
          addScaledSH(t2, e2) {
            for (let i2 = 0; i2 < 9; i2++)
              this.coefficients[i2].addScaledVector(t2.coefficients[i2], e2);
            return this;
          }
          scale(t2) {
            for (let e2 = 0; e2 < 9; e2++)
              this.coefficients[e2].multiplyScalar(t2);
            return this;
          }
          lerp(t2, e2) {
            for (let i2 = 0; i2 < 9; i2++)
              this.coefficients[i2].lerp(t2.coefficients[i2], e2);
            return this;
          }
          equals(t2) {
            for (let e2 = 0; e2 < 9; e2++)
              if (!this.coefficients[e2].equals(t2.coefficients[e2]))
                return false;
            return true;
          }
          copy(t2) {
            return this.set(t2.coefficients);
          }
          clone() {
            return new this.constructor().copy(this);
          }
          fromArray(t2, e2 = 0) {
            const i2 = this.coefficients;
            for (let n2 = 0; n2 < 9; n2++)
              i2[n2].fromArray(t2, e2 + 3 * n2);
            return this;
          }
          toArray(t2 = [], e2 = 0) {
            const i2 = this.coefficients;
            for (let n2 = 0; n2 < 9; n2++)
              i2[n2].toArray(t2, e2 + 3 * n2);
            return t2;
          }
          static getBasisAt(t2, e2) {
            const i2 = t2.x, n2 = t2.y, r2 = t2.z;
            e2[0] = 0.282095, e2[1] = 0.488603 * n2, e2[2] = 0.488603 * r2, e2[3] = 0.488603 * i2, e2[4] = 1.092548 * i2 * n2, e2[5] = 1.092548 * n2 * r2, e2[6] = 0.315392 * (3 * r2 * r2 - 1), e2[7] = 1.092548 * i2 * r2, e2[8] = 0.546274 * (i2 * i2 - n2 * n2);
          }
        }
        class Pc extends pc {
          constructor(t2 = new Rc(), e2 = 1) {
            super(void 0, e2), this.isLightProbe = true, this.sh = t2;
          }
          copy(t2) {
            return super.copy(t2), this.sh.copy(t2.sh), this;
          }
          fromJSON(t2) {
            return this.intensity = t2.intensity, this.sh.fromArray(t2.sh), this;
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return e2.object.sh = this.sh.toArray(), e2;
          }
        }
        class Ic extends lc {
          constructor(t2) {
            super(t2), this.textures = {};
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = new uc(r2.manager);
            s2.setPath(r2.path), s2.setRequestHeader(r2.requestHeader), s2.setWithCredentials(r2.withCredentials), s2.load(t2, function(i3) {
              try {
                e2(r2.parse(JSON.parse(i3)));
              } catch (e3) {
                n2 ? n2(e3) : console.error(e3), r2.manager.itemError(t2);
              }
            }, i2, n2);
          }
          parse(t2) {
            const e2 = this.textures;
            function i2(t3) {
              return void 0 === e2[t3] && console.warn("THREE.MaterialLoader: Undefined texture", t3), e2[t3];
            }
            const n2 = Ic.createMaterialFromType(t2.type);
            if (void 0 !== t2.uuid && (n2.uuid = t2.uuid), void 0 !== t2.name && (n2.name = t2.name), void 0 !== t2.color && void 0 !== n2.color && n2.color.setHex(t2.color), void 0 !== t2.roughness && (n2.roughness = t2.roughness), void 0 !== t2.metalness && (n2.metalness = t2.metalness), void 0 !== t2.sheen && (n2.sheen = t2.sheen), void 0 !== t2.sheenColor && (n2.sheenColor = new jt().setHex(t2.sheenColor)), void 0 !== t2.sheenRoughness && (n2.sheenRoughness = t2.sheenRoughness), void 0 !== t2.emissive && void 0 !== n2.emissive && n2.emissive.setHex(t2.emissive), void 0 !== t2.specular && void 0 !== n2.specular && n2.specular.setHex(t2.specular), void 0 !== t2.specularIntensity && (n2.specularIntensity = t2.specularIntensity), void 0 !== t2.specularColor && void 0 !== n2.specularColor && n2.specularColor.setHex(t2.specularColor), void 0 !== t2.shininess && (n2.shininess = t2.shininess), void 0 !== t2.clearcoat && (n2.clearcoat = t2.clearcoat), void 0 !== t2.clearcoatRoughness && (n2.clearcoatRoughness = t2.clearcoatRoughness), void 0 !== t2.iridescence && (n2.iridescence = t2.iridescence), void 0 !== t2.iridescenceIOR && (n2.iridescenceIOR = t2.iridescenceIOR), void 0 !== t2.iridescenceThicknessRange && (n2.iridescenceThicknessRange = t2.iridescenceThicknessRange), void 0 !== t2.transmission && (n2.transmission = t2.transmission), void 0 !== t2.thickness && (n2.thickness = t2.thickness), void 0 !== t2.attenuationDistance && (n2.attenuationDistance = t2.attenuationDistance), void 0 !== t2.attenuationColor && void 0 !== n2.attenuationColor && n2.attenuationColor.setHex(t2.attenuationColor), void 0 !== t2.fog && (n2.fog = t2.fog), void 0 !== t2.flatShading && (n2.flatShading = t2.flatShading), void 0 !== t2.blending && (n2.blending = t2.blending), void 0 !== t2.combine && (n2.combine = t2.combine), void 0 !== t2.side && (n2.side = t2.side), void 0 !== t2.shadowSide && (n2.shadowSide = t2.shadowSide), void 0 !== t2.opacity && (n2.opacity = t2.opacity), void 0 !== t2.transparent && (n2.transparent = t2.transparent), void 0 !== t2.alphaTest && (n2.alphaTest = t2.alphaTest), void 0 !== t2.depthTest && (n2.depthTest = t2.depthTest), void 0 !== t2.depthWrite && (n2.depthWrite = t2.depthWrite), void 0 !== t2.colorWrite && (n2.colorWrite = t2.colorWrite), void 0 !== t2.stencilWrite && (n2.stencilWrite = t2.stencilWrite), void 0 !== t2.stencilWriteMask && (n2.stencilWriteMask = t2.stencilWriteMask), void 0 !== t2.stencilFunc && (n2.stencilFunc = t2.stencilFunc), void 0 !== t2.stencilRef && (n2.stencilRef = t2.stencilRef), void 0 !== t2.stencilFuncMask && (n2.stencilFuncMask = t2.stencilFuncMask), void 0 !== t2.stencilFail && (n2.stencilFail = t2.stencilFail), void 0 !== t2.stencilZFail && (n2.stencilZFail = t2.stencilZFail), void 0 !== t2.stencilZPass && (n2.stencilZPass = t2.stencilZPass), void 0 !== t2.wireframe && (n2.wireframe = t2.wireframe), void 0 !== t2.wireframeLinewidth && (n2.wireframeLinewidth = t2.wireframeLinewidth), void 0 !== t2.wireframeLinecap && (n2.wireframeLinecap = t2.wireframeLinecap), void 0 !== t2.wireframeLinejoin && (n2.wireframeLinejoin = t2.wireframeLinejoin), void 0 !== t2.rotation && (n2.rotation = t2.rotation), 1 !== t2.linewidth && (n2.linewidth = t2.linewidth), void 0 !== t2.dashSize && (n2.dashSize = t2.dashSize), void 0 !== t2.gapSize && (n2.gapSize = t2.gapSize), void 0 !== t2.scale && (n2.scale = t2.scale), void 0 !== t2.polygonOffset && (n2.polygonOffset = t2.polygonOffset), void 0 !== t2.polygonOffsetFactor && (n2.polygonOffsetFactor = t2.polygonOffsetFactor), void 0 !== t2.polygonOffsetUnits && (n2.polygonOffsetUnits = t2.polygonOffsetUnits), void 0 !== t2.dithering && (n2.dithering = t2.dithering), void 0 !== t2.alphaToCoverage && (n2.alphaToCoverage = t2.alphaToCoverage), void 0 !== t2.premultipliedAlpha && (n2.premultipliedAlpha = t2.premultipliedAlpha), void 0 !== t2.visible && (n2.visible = t2.visible), void 0 !== t2.toneMapped && (n2.toneMapped = t2.toneMapped), void 0 !== t2.userData && (n2.userData = t2.userData), void 0 !== t2.vertexColors && ("number" == typeof t2.vertexColors ? n2.vertexColors = t2.vertexColors > 0 : n2.vertexColors = t2.vertexColors), void 0 !== t2.uniforms)
              for (const e3 in t2.uniforms) {
                const r2 = t2.uniforms[e3];
                switch (n2.uniforms[e3] = {}, r2.type) {
                  case "t":
                    n2.uniforms[e3].value = i2(r2.value);
                    break;
                  case "c":
                    n2.uniforms[e3].value = new jt().setHex(r2.value);
                    break;
                  case "v2":
                    n2.uniforms[e3].value = new Lt().fromArray(r2.value);
                    break;
                  case "v3":
                    n2.uniforms[e3].value = new ne().fromArray(r2.value);
                    break;
                  case "v4":
                    n2.uniforms[e3].value = new $t().fromArray(r2.value);
                    break;
                  case "m3":
                    n2.uniforms[e3].value = new Rt().fromArray(r2.value);
                    break;
                  case "m4":
                    n2.uniforms[e3].value = new Ne().fromArray(r2.value);
                    break;
                  default:
                    n2.uniforms[e3].value = r2.value;
                }
              }
            if (void 0 !== t2.defines && (n2.defines = t2.defines), void 0 !== t2.vertexShader && (n2.vertexShader = t2.vertexShader), void 0 !== t2.fragmentShader && (n2.fragmentShader = t2.fragmentShader), void 0 !== t2.glslVersion && (n2.glslVersion = t2.glslVersion), void 0 !== t2.extensions)
              for (const e3 in t2.extensions)
                n2.extensions[e3] = t2.extensions[e3];
            if (void 0 !== t2.size && (n2.size = t2.size), void 0 !== t2.sizeAttenuation && (n2.sizeAttenuation = t2.sizeAttenuation), void 0 !== t2.map && (n2.map = i2(t2.map)), void 0 !== t2.matcap && (n2.matcap = i2(t2.matcap)), void 0 !== t2.alphaMap && (n2.alphaMap = i2(t2.alphaMap)), void 0 !== t2.bumpMap && (n2.bumpMap = i2(t2.bumpMap)), void 0 !== t2.bumpScale && (n2.bumpScale = t2.bumpScale), void 0 !== t2.normalMap && (n2.normalMap = i2(t2.normalMap)), void 0 !== t2.normalMapType && (n2.normalMapType = t2.normalMapType), void 0 !== t2.normalScale) {
              let e3 = t2.normalScale;
              false === Array.isArray(e3) && (e3 = [e3, e3]), n2.normalScale = new Lt().fromArray(e3);
            }
            return void 0 !== t2.displacementMap && (n2.displacementMap = i2(t2.displacementMap)), void 0 !== t2.displacementScale && (n2.displacementScale = t2.displacementScale), void 0 !== t2.displacementBias && (n2.displacementBias = t2.displacementBias), void 0 !== t2.roughnessMap && (n2.roughnessMap = i2(t2.roughnessMap)), void 0 !== t2.metalnessMap && (n2.metalnessMap = i2(t2.metalnessMap)), void 0 !== t2.emissiveMap && (n2.emissiveMap = i2(t2.emissiveMap)), void 0 !== t2.emissiveIntensity && (n2.emissiveIntensity = t2.emissiveIntensity), void 0 !== t2.specularMap && (n2.specularMap = i2(t2.specularMap)), void 0 !== t2.specularIntensityMap && (n2.specularIntensityMap = i2(t2.specularIntensityMap)), void 0 !== t2.specularColorMap && (n2.specularColorMap = i2(t2.specularColorMap)), void 0 !== t2.envMap && (n2.envMap = i2(t2.envMap)), void 0 !== t2.envMapIntensity && (n2.envMapIntensity = t2.envMapIntensity), void 0 !== t2.reflectivity && (n2.reflectivity = t2.reflectivity), void 0 !== t2.refractionRatio && (n2.refractionRatio = t2.refractionRatio), void 0 !== t2.lightMap && (n2.lightMap = i2(t2.lightMap)), void 0 !== t2.lightMapIntensity && (n2.lightMapIntensity = t2.lightMapIntensity), void 0 !== t2.aoMap && (n2.aoMap = i2(t2.aoMap)), void 0 !== t2.aoMapIntensity && (n2.aoMapIntensity = t2.aoMapIntensity), void 0 !== t2.gradientMap && (n2.gradientMap = i2(t2.gradientMap)), void 0 !== t2.clearcoatMap && (n2.clearcoatMap = i2(t2.clearcoatMap)), void 0 !== t2.clearcoatRoughnessMap && (n2.clearcoatRoughnessMap = i2(t2.clearcoatRoughnessMap)), void 0 !== t2.clearcoatNormalMap && (n2.clearcoatNormalMap = i2(t2.clearcoatNormalMap)), void 0 !== t2.clearcoatNormalScale && (n2.clearcoatNormalScale = new Lt().fromArray(t2.clearcoatNormalScale)), void 0 !== t2.iridescenceMap && (n2.iridescenceMap = i2(t2.iridescenceMap)), void 0 !== t2.iridescenceThicknessMap && (n2.iridescenceThicknessMap = i2(t2.iridescenceThicknessMap)), void 0 !== t2.transmissionMap && (n2.transmissionMap = i2(t2.transmissionMap)), void 0 !== t2.thicknessMap && (n2.thicknessMap = i2(t2.thicknessMap)), void 0 !== t2.sheenColorMap && (n2.sheenColorMap = i2(t2.sheenColorMap)), void 0 !== t2.sheenRoughnessMap && (n2.sheenRoughnessMap = i2(t2.sheenRoughnessMap)), n2;
          }
          setTextures(t2) {
            return this.textures = t2, this;
          }
          static createMaterialFromType(t2) {
            return new { ShadowMaterial: Cl, SpriteMaterial: na, RawShaderMaterial: Ll, ShaderMaterial: rn, PointsMaterial: Ja, MeshPhysicalMaterial: Pl, MeshStandardMaterial: Rl, MeshPhongMaterial: Il, MeshToonMaterial: Dl, MeshNormalMaterial: Nl, MeshLambertMaterial: Ol, MeshDepthMaterial: Os, MeshDistanceMaterial: zs, MeshBasicMaterial: _i, MeshMatcapMaterial: zl, LineDashedMaterial: Ul, LineBasicMaterial: Fa, Material: xi }[t2]();
          }
        }
        class Dc {
          static decodeText(t2) {
            if ("undefined" != typeof TextDecoder)
              return new TextDecoder().decode(t2);
            let e2 = "";
            for (let i2 = 0, n2 = t2.length; i2 < n2; i2++)
              e2 += String.fromCharCode(t2[i2]);
            try {
              return decodeURIComponent(escape(e2));
            } catch (t3) {
              return e2;
            }
          }
          static extractUrlBase(t2) {
            const e2 = t2.lastIndexOf("/");
            return -1 === e2 ? "./" : t2.slice(0, e2 + 1);
          }
          static resolveURL(t2, e2) {
            return "string" != typeof t2 || "" === t2 ? "" : (/^https?:\/\//i.test(e2) && /^\//.test(t2) && (e2 = e2.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t2) || /^data:.*,.*$/i.test(t2) || /^blob:.*$/i.test(t2) ? t2 : e2 + t2);
          }
        }
        class Nc extends Di {
          constructor() {
            super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
          }
          copy(t2) {
            return super.copy(t2), this.instanceCount = t2.instanceCount, this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
          toJSON() {
            const t2 = super.toJSON(this);
            return t2.instanceCount = this.instanceCount, t2.isInstancedBufferGeometry = true, t2;
          }
        }
        class Oc extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = new uc(r2.manager);
            s2.setPath(r2.path), s2.setRequestHeader(r2.requestHeader), s2.setWithCredentials(r2.withCredentials), s2.load(t2, function(i3) {
              try {
                e2(r2.parse(JSON.parse(i3)));
              } catch (e3) {
                n2 ? n2(e3) : console.error(e3), r2.manager.itemError(t2);
              }
            }, i2, n2);
          }
          parse(t2) {
            const e2 = {}, i2 = {};
            function n2(t3, n3) {
              if (void 0 !== e2[n3])
                return e2[n3];
              const r3 = t3.interleavedBuffers[n3], s3 = function(t4, e3) {
                if (void 0 !== i2[e3])
                  return i2[e3];
                const n4 = t4.arrayBuffers[e3], r4 = new Uint32Array(n4).buffer;
                return i2[e3] = r4, r4;
              }(t3, r3.buffer), a3 = Dt(r3.type, s3), o3 = new ta(a3, r3.stride);
              return o3.uuid = r3.uuid, e2[n3] = o3, o3;
            }
            const r2 = t2.isInstancedBufferGeometry ? new Nc() : new Di(), s2 = t2.data.index;
            if (void 0 !== s2) {
              const t3 = Dt(s2.type, s2.array);
              r2.setIndex(new bi(t3, 1));
            }
            const a2 = t2.data.attributes;
            for (const e3 in a2) {
              const i3 = a2[e3];
              let s3;
              if (i3.isInterleavedBufferAttribute) {
                const e4 = n2(t2.data, i3.data);
                s3 = new ia(e4, i3.itemSize, i3.offset, i3.normalized);
              } else {
                const t3 = Dt(i3.type, i3.array);
                s3 = new (i3.isInstancedBufferAttribute ? Da : bi)(t3, i3.itemSize, i3.normalized);
              }
              void 0 !== i3.name && (s3.name = i3.name), void 0 !== i3.usage && s3.setUsage(i3.usage), void 0 !== i3.updateRange && (s3.updateRange.offset = i3.updateRange.offset, s3.updateRange.count = i3.updateRange.count), r2.setAttribute(e3, s3);
            }
            const o2 = t2.data.morphAttributes;
            if (o2)
              for (const e3 in o2) {
                const i3 = o2[e3], s3 = [];
                for (let e4 = 0, r3 = i3.length; e4 < r3; e4++) {
                  const r4 = i3[e4];
                  let a3;
                  if (r4.isInterleavedBufferAttribute) {
                    const e5 = n2(t2.data, r4.data);
                    a3 = new ia(e5, r4.itemSize, r4.offset, r4.normalized);
                  } else {
                    const t3 = Dt(r4.type, r4.array);
                    a3 = new bi(t3, r4.itemSize, r4.normalized);
                  }
                  void 0 !== r4.name && (a3.name = r4.name), s3.push(a3);
                }
                r2.morphAttributes[e3] = s3;
              }
            t2.data.morphTargetsRelative && (r2.morphTargetsRelative = true);
            const l2 = t2.data.groups || t2.data.drawcalls || t2.data.offsets;
            if (void 0 !== l2)
              for (let t3 = 0, e3 = l2.length; t3 !== e3; ++t3) {
                const e4 = l2[t3];
                r2.addGroup(e4.start, e4.count, e4.materialIndex);
              }
            const c2 = t2.data.boundingSphere;
            if (void 0 !== c2) {
              const t3 = new ne();
              void 0 !== c2.center && t3.fromArray(c2.center), r2.boundingSphere = new Te(t3, c2.radius);
            }
            return t2.name && (r2.name = t2.name), t2.userData && (r2.userData = t2.userData), r2;
          }
        }
        const zc = { UVMapping: n, CubeReflectionMapping: r, CubeRefractionMapping: s, EquirectangularReflectionMapping: a, EquirectangularRefractionMapping: o, CubeUVReflectionMapping: l }, Uc = { RepeatWrapping: c, ClampToEdgeWrapping: h, MirroredRepeatWrapping: u }, Bc = { NearestFilter: d, NearestMipmapNearestFilter: p, NearestMipmapLinearFilter: m, LinearFilter: f, LinearMipmapNearestFilter: g, LinearMipmapLinearFilter: v };
        let Fc;
        const kc = { getContext: function() {
          return void 0 === Fc && (Fc = new (window.AudioContext || window.webkitAudioContext)()), Fc;
        }, setContext: function(t2) {
          Fc = t2;
        } };
        const Gc = new Ne(), Vc = new Ne(), Hc = new Ne();
        class Wc {
          constructor(t2 = true) {
            this.autoStart = t2, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
          }
          start() {
            this.startTime = jc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
          }
          stop() {
            this.getElapsedTime(), this.running = false, this.autoStart = false;
          }
          getElapsedTime() {
            return this.getDelta(), this.elapsedTime;
          }
          getDelta() {
            let t2 = 0;
            if (this.autoStart && !this.running)
              return this.start(), 0;
            if (this.running) {
              const e2 = jc();
              t2 = (e2 - this.oldTime) / 1e3, this.oldTime = e2, this.elapsedTime += t2;
            }
            return t2;
          }
        }
        function jc() {
          return ("undefined" == typeof performance ? Date : performance).now();
        }
        const qc = new ne(), Xc = new ie(), Yc = new ne(), Zc = new ne();
        class Jc extends si {
          constructor(t2) {
            super(), this.type = "Audio", this.listener = t2, this.context = t2.context, this.gain = this.context.createGain(), this.gain.connect(t2.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
          }
          getOutput() {
            return this.gain;
          }
          setNodeSource(t2) {
            return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = t2, this.connect(), this;
          }
          setMediaElementSource(t2) {
            return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t2), this.connect(), this;
          }
          setMediaStreamSource(t2) {
            return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t2), this.connect(), this;
          }
          setBuffer(t2) {
            return this.buffer = t2, this.sourceType = "buffer", this.autoplay && this.play(), this;
          }
          play(t2 = 0) {
            if (true === this.isPlaying)
              return void console.warn("THREE.Audio: Audio is already playing.");
            if (false === this.hasPlaybackControl)
              return void console.warn("THREE.Audio: this Audio has no playback control.");
            this._startedAt = this.context.currentTime + t2;
            const e2 = this.context.createBufferSource();
            return e2.buffer = this.buffer, e2.loop = this.loop, e2.loopStart = this.loopStart, e2.loopEnd = this.loopEnd, e2.onended = this.onEnded.bind(this), e2.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = e2, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
          }
          pause() {
            if (false !== this.hasPlaybackControl)
              return true === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, true === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
          }
          stop() {
            if (false !== this.hasPlaybackControl)
              return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = false, this;
            console.warn("THREE.Audio: this Audio has no playback control.");
          }
          connect() {
            if (this.filters.length > 0) {
              this.source.connect(this.filters[0]);
              for (let t2 = 1, e2 = this.filters.length; t2 < e2; t2++)
                this.filters[t2 - 1].connect(this.filters[t2]);
              this.filters[this.filters.length - 1].connect(this.getOutput());
            } else
              this.source.connect(this.getOutput());
            return this._connected = true, this;
          }
          disconnect() {
            if (this.filters.length > 0) {
              this.source.disconnect(this.filters[0]);
              for (let t2 = 1, e2 = this.filters.length; t2 < e2; t2++)
                this.filters[t2 - 1].disconnect(this.filters[t2]);
              this.filters[this.filters.length - 1].disconnect(this.getOutput());
            } else
              this.source.disconnect(this.getOutput());
            return this._connected = false, this;
          }
          getFilters() {
            return this.filters;
          }
          setFilters(t2) {
            return t2 || (t2 = []), true === this._connected ? (this.disconnect(), this.filters = t2.slice(), this.connect()) : this.filters = t2.slice(), this;
          }
          setDetune(t2) {
            if (this.detune = t2, void 0 !== this.source.detune)
              return true === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
          }
          getDetune() {
            return this.detune;
          }
          getFilter() {
            return this.getFilters()[0];
          }
          setFilter(t2) {
            return this.setFilters(t2 ? [t2] : []);
          }
          setPlaybackRate(t2) {
            if (false !== this.hasPlaybackControl)
              return this.playbackRate = t2, true === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
          }
          getPlaybackRate() {
            return this.playbackRate;
          }
          onEnded() {
            this.isPlaying = false;
          }
          getLoop() {
            return false === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), false) : this.loop;
          }
          setLoop(t2) {
            if (false !== this.hasPlaybackControl)
              return this.loop = t2, true === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.");
          }
          setLoopStart(t2) {
            return this.loopStart = t2, this;
          }
          setLoopEnd(t2) {
            return this.loopEnd = t2, this;
          }
          getVolume() {
            return this.gain.gain.value;
          }
          setVolume(t2) {
            return this.gain.gain.setTargetAtTime(t2, this.context.currentTime, 0.01), this;
          }
        }
        const Kc = new ne(), $c = new ie(), Qc = new ne(), th = new ne();
        class eh {
          constructor(t2, e2, i2) {
            let n2, r2, s2;
            switch (this.binding = t2, this.valueSize = i2, e2) {
              case "quaternion":
                n2 = this._slerp, r2 = this._slerpAdditive, s2 = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i2), this._workIndex = 5;
                break;
              case "string":
              case "bool":
                n2 = this._select, r2 = this._select, s2 = this._setAdditiveIdentityOther, this.buffer = new Array(5 * i2);
                break;
              default:
                n2 = this._lerp, r2 = this._lerpAdditive, s2 = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i2);
            }
            this._mixBufferRegion = n2, this._mixBufferRegionAdditive = r2, this._setIdentity = s2, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
          }
          accumulate(t2, e2) {
            const i2 = this.buffer, n2 = this.valueSize, r2 = t2 * n2 + n2;
            let s2 = this.cumulativeWeight;
            if (0 === s2) {
              for (let t3 = 0; t3 !== n2; ++t3)
                i2[r2 + t3] = i2[t3];
              s2 = e2;
            } else {
              s2 += e2;
              const t3 = e2 / s2;
              this._mixBufferRegion(i2, r2, 0, t3, n2);
            }
            this.cumulativeWeight = s2;
          }
          accumulateAdditive(t2) {
            const e2 = this.buffer, i2 = this.valueSize, n2 = i2 * this._addIndex;
            0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e2, n2, 0, t2, i2), this.cumulativeWeightAdditive += t2;
          }
          apply(t2) {
            const e2 = this.valueSize, i2 = this.buffer, n2 = t2 * e2 + e2, r2 = this.cumulativeWeight, s2 = this.cumulativeWeightAdditive, a2 = this.binding;
            if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r2 < 1) {
              const t3 = e2 * this._origIndex;
              this._mixBufferRegion(i2, n2, t3, 1 - r2, e2);
            }
            s2 > 0 && this._mixBufferRegionAdditive(i2, n2, this._addIndex * e2, 1, e2);
            for (let t3 = e2, r3 = e2 + e2; t3 !== r3; ++t3)
              if (i2[t3] !== i2[t3 + e2]) {
                a2.setValue(i2, n2);
                break;
              }
          }
          saveOriginalState() {
            const t2 = this.binding, e2 = this.buffer, i2 = this.valueSize, n2 = i2 * this._origIndex;
            t2.getValue(e2, n2);
            for (let t3 = i2, r2 = n2; t3 !== r2; ++t3)
              e2[t3] = e2[n2 + t3 % i2];
            this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
          }
          restoreOriginalState() {
            const t2 = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t2);
          }
          _setAdditiveIdentityNumeric() {
            const t2 = this._addIndex * this.valueSize, e2 = t2 + this.valueSize;
            for (let i2 = t2; i2 < e2; i2++)
              this.buffer[i2] = 0;
          }
          _setAdditiveIdentityQuaternion() {
            this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
          }
          _setAdditiveIdentityOther() {
            const t2 = this._origIndex * this.valueSize, e2 = this._addIndex * this.valueSize;
            for (let i2 = 0; i2 < this.valueSize; i2++)
              this.buffer[e2 + i2] = this.buffer[t2 + i2];
          }
          _select(t2, e2, i2, n2, r2) {
            if (n2 >= 0.5)
              for (let n3 = 0; n3 !== r2; ++n3)
                t2[e2 + n3] = t2[i2 + n3];
          }
          _slerp(t2, e2, i2, n2) {
            ie.slerpFlat(t2, e2, t2, e2, t2, i2, n2);
          }
          _slerpAdditive(t2, e2, i2, n2, r2) {
            const s2 = this._workIndex * r2;
            ie.multiplyQuaternionsFlat(t2, s2, t2, e2, t2, i2), ie.slerpFlat(t2, e2, t2, e2, t2, s2, n2);
          }
          _lerp(t2, e2, i2, n2, r2) {
            const s2 = 1 - n2;
            for (let a2 = 0; a2 !== r2; ++a2) {
              const r3 = e2 + a2;
              t2[r3] = t2[r3] * s2 + t2[i2 + a2] * n2;
            }
          }
          _lerpAdditive(t2, e2, i2, n2, r2) {
            for (let s2 = 0; s2 !== r2; ++s2) {
              const r3 = e2 + s2;
              t2[r3] = t2[r3] + t2[i2 + s2] * n2;
            }
          }
        }
        const ih = "\\[\\]\\.:\\/", nh = new RegExp("[\\[\\]\\.:\\/]", "g"), rh = "[^\\[\\]\\.:\\/]", sh = "[^" + ih.replace("\\.", "") + "]", ah = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", rh) + /(WCOD+)?/.source.replace("WCOD", sh) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", rh) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", rh) + "$"), oh = ["material", "materials", "bones", "map"];
        class lh {
          constructor(t2, e2, i2) {
            this.path = e2, this.parsedPath = i2 || lh.parseTrackName(e2), this.node = lh.findNode(t2, this.parsedPath.nodeName) || t2, this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
          }
          static create(t2, e2, i2) {
            return t2 && t2.isAnimationObjectGroup ? new lh.Composite(t2, e2, i2) : new lh(t2, e2, i2);
          }
          static sanitizeNodeName(t2) {
            return t2.replace(/\s/g, "_").replace(nh, "");
          }
          static parseTrackName(t2) {
            const e2 = ah.exec(t2);
            if (null === e2)
              throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
            const i2 = { nodeName: e2[2], objectName: e2[3], objectIndex: e2[4], propertyName: e2[5], propertyIndex: e2[6] }, n2 = i2.nodeName && i2.nodeName.lastIndexOf(".");
            if (void 0 !== n2 && -1 !== n2) {
              const t3 = i2.nodeName.substring(n2 + 1);
              -1 !== oh.indexOf(t3) && (i2.nodeName = i2.nodeName.substring(0, n2), i2.objectName = t3);
            }
            if (null === i2.propertyName || 0 === i2.propertyName.length)
              throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
            return i2;
          }
          static findNode(t2, e2) {
            if (void 0 === e2 || "" === e2 || "." === e2 || -1 === e2 || e2 === t2.name || e2 === t2.uuid)
              return t2;
            if (t2.skeleton) {
              const i2 = t2.skeleton.getBoneByName(e2);
              if (void 0 !== i2)
                return i2;
            }
            if (t2.children) {
              const i2 = function(t3) {
                for (let n3 = 0; n3 < t3.length; n3++) {
                  const r2 = t3[n3];
                  if (r2.name === e2 || r2.uuid === e2)
                    return r2;
                  const s2 = i2(r2.children);
                  if (s2)
                    return s2;
                }
                return null;
              }, n2 = i2(t2.children);
              if (n2)
                return n2;
            }
            return null;
          }
          _getValue_unavailable() {
          }
          _setValue_unavailable() {
          }
          _getValue_direct(t2, e2) {
            t2[e2] = this.targetObject[this.propertyName];
          }
          _getValue_array(t2, e2) {
            const i2 = this.resolvedProperty;
            for (let n2 = 0, r2 = i2.length; n2 !== r2; ++n2)
              t2[e2++] = i2[n2];
          }
          _getValue_arrayElement(t2, e2) {
            t2[e2] = this.resolvedProperty[this.propertyIndex];
          }
          _getValue_toArray(t2, e2) {
            this.resolvedProperty.toArray(t2, e2);
          }
          _setValue_direct(t2, e2) {
            this.targetObject[this.propertyName] = t2[e2];
          }
          _setValue_direct_setNeedsUpdate(t2, e2) {
            this.targetObject[this.propertyName] = t2[e2], this.targetObject.needsUpdate = true;
          }
          _setValue_direct_setMatrixWorldNeedsUpdate(t2, e2) {
            this.targetObject[this.propertyName] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
          }
          _setValue_array(t2, e2) {
            const i2 = this.resolvedProperty;
            for (let n2 = 0, r2 = i2.length; n2 !== r2; ++n2)
              i2[n2] = t2[e2++];
          }
          _setValue_array_setNeedsUpdate(t2, e2) {
            const i2 = this.resolvedProperty;
            for (let n2 = 0, r2 = i2.length; n2 !== r2; ++n2)
              i2[n2] = t2[e2++];
            this.targetObject.needsUpdate = true;
          }
          _setValue_array_setMatrixWorldNeedsUpdate(t2, e2) {
            const i2 = this.resolvedProperty;
            for (let n2 = 0, r2 = i2.length; n2 !== r2; ++n2)
              i2[n2] = t2[e2++];
            this.targetObject.matrixWorldNeedsUpdate = true;
          }
          _setValue_arrayElement(t2, e2) {
            this.resolvedProperty[this.propertyIndex] = t2[e2];
          }
          _setValue_arrayElement_setNeedsUpdate(t2, e2) {
            this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.needsUpdate = true;
          }
          _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e2) {
            this.resolvedProperty[this.propertyIndex] = t2[e2], this.targetObject.matrixWorldNeedsUpdate = true;
          }
          _setValue_fromArray(t2, e2) {
            this.resolvedProperty.fromArray(t2, e2);
          }
          _setValue_fromArray_setNeedsUpdate(t2, e2) {
            this.resolvedProperty.fromArray(t2, e2), this.targetObject.needsUpdate = true;
          }
          _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e2) {
            this.resolvedProperty.fromArray(t2, e2), this.targetObject.matrixWorldNeedsUpdate = true;
          }
          _getValue_unbound(t2, e2) {
            this.bind(), this.getValue(t2, e2);
          }
          _setValue_unbound(t2, e2) {
            this.bind(), this.setValue(t2, e2);
          }
          bind() {
            let t2 = this.node;
            const e2 = this.parsedPath, i2 = e2.objectName, n2 = e2.propertyName;
            let r2 = e2.propertyIndex;
            if (t2 || (t2 = lh.findNode(this.rootNode, e2.nodeName) || this.rootNode, this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2)
              return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
            if (i2) {
              let n3 = e2.objectIndex;
              switch (i2) {
                case "materials":
                  if (!t2.material)
                    return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  if (!t2.material.materials)
                    return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                  t2 = t2.material.materials;
                  break;
                case "bones":
                  if (!t2.skeleton)
                    return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                  t2 = t2.skeleton.bones;
                  for (let e3 = 0; e3 < t2.length; e3++)
                    if (t2[e3].name === n3) {
                      n3 = e3;
                      break;
                    }
                  break;
                case "map":
                  if ("map" in t2) {
                    t2 = t2.map;
                    break;
                  }
                  if (!t2.material)
                    return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                  if (!t2.material.map)
                    return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                  t2 = t2.material.map;
                  break;
                default:
                  if (void 0 === t2[i2])
                    return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                  t2 = t2[i2];
              }
              if (void 0 !== n3) {
                if (void 0 === t2[n3])
                  return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
                t2 = t2[n3];
              }
            }
            const s2 = t2[n2];
            if (void 0 === s2) {
              const i3 = e2.nodeName;
              return void console.error("THREE.PropertyBinding: Trying to update property for track: " + i3 + "." + n2 + " but it wasn't found.", t2);
            }
            let a2 = this.Versioning.None;
            this.targetObject = t2, void 0 !== t2.needsUpdate ? a2 = this.Versioning.NeedsUpdate : void 0 !== t2.matrixWorldNeedsUpdate && (a2 = this.Versioning.MatrixWorldNeedsUpdate);
            let o2 = this.BindingType.Direct;
            if (void 0 !== r2) {
              if ("morphTargetInfluences" === n2) {
                if (!t2.geometry)
                  return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                if (!t2.geometry.morphAttributes)
                  return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                void 0 !== t2.morphTargetDictionary[r2] && (r2 = t2.morphTargetDictionary[r2]);
              }
              o2 = this.BindingType.ArrayElement, this.resolvedProperty = s2, this.propertyIndex = r2;
            } else
              void 0 !== s2.fromArray && void 0 !== s2.toArray ? (o2 = this.BindingType.HasFromToArray, this.resolvedProperty = s2) : Array.isArray(s2) ? (o2 = this.BindingType.EntireArray, this.resolvedProperty = s2) : this.propertyName = n2;
            this.getValue = this.GetterByBindingType[o2], this.setValue = this.SetterByBindingTypeAndVersioning[o2][a2];
          }
          unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
          }
        }
        lh.Composite = class {
          constructor(t2, e2, i2) {
            const n2 = i2 || lh.parseTrackName(e2);
            this._targetGroup = t2, this._bindings = t2.subscribe_(e2, n2);
          }
          getValue(t2, e2) {
            this.bind();
            const i2 = this._targetGroup.nCachedObjects_, n2 = this._bindings[i2];
            void 0 !== n2 && n2.getValue(t2, e2);
          }
          setValue(t2, e2) {
            const i2 = this._bindings;
            for (let n2 = this._targetGroup.nCachedObjects_, r2 = i2.length; n2 !== r2; ++n2)
              i2[n2].setValue(t2, e2);
          }
          bind() {
            const t2 = this._bindings;
            for (let e2 = this._targetGroup.nCachedObjects_, i2 = t2.length; e2 !== i2; ++e2)
              t2[e2].bind();
          }
          unbind() {
            const t2 = this._bindings;
            for (let e2 = this._targetGroup.nCachedObjects_, i2 = t2.length; e2 !== i2; ++e2)
              t2[e2].unbind();
          }
        }, lh.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, lh.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, lh.prototype.GetterByBindingType = [lh.prototype._getValue_direct, lh.prototype._getValue_array, lh.prototype._getValue_arrayElement, lh.prototype._getValue_toArray], lh.prototype.SetterByBindingTypeAndVersioning = [[lh.prototype._setValue_direct, lh.prototype._setValue_direct_setNeedsUpdate, lh.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [lh.prototype._setValue_array, lh.prototype._setValue_array_setNeedsUpdate, lh.prototype._setValue_array_setMatrixWorldNeedsUpdate], [lh.prototype._setValue_arrayElement, lh.prototype._setValue_arrayElement_setNeedsUpdate, lh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [lh.prototype._setValue_fromArray, lh.prototype._setValue_fromArray_setNeedsUpdate, lh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
        class ch {
          constructor(t2, e2, i2 = null, n2 = e2.blendMode) {
            this._mixer = t2, this._clip = e2, this._localRoot = i2, this.blendMode = n2;
            const r2 = e2.tracks, s2 = r2.length, a2 = new Array(s2), o2 = { endingStart: et, endingEnd: et };
            for (let t3 = 0; t3 !== s2; ++t3) {
              const e3 = r2[t3].createInterpolant(null);
              a2[t3] = e3, e3.settings = o2;
            }
            this._interpolantSettings = o2, this._interpolants = a2, this._propertyBindings = new Array(s2), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = false, this.enabled = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
          }
          play() {
            return this._mixer._activateAction(this), this;
          }
          stop() {
            return this._mixer._deactivateAction(this), this.reset();
          }
          reset() {
            return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
          }
          isRunning() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
          }
          isScheduled() {
            return this._mixer._isActiveAction(this);
          }
          startAt(t2) {
            return this._startTime = t2, this;
          }
          setLoop(t2, e2) {
            return this.loop = t2, this.repetitions = e2, this;
          }
          setEffectiveWeight(t2) {
            return this.weight = t2, this._effectiveWeight = this.enabled ? t2 : 0, this.stopFading();
          }
          getEffectiveWeight() {
            return this._effectiveWeight;
          }
          fadeIn(t2) {
            return this._scheduleFading(t2, 0, 1);
          }
          fadeOut(t2) {
            return this._scheduleFading(t2, 1, 0);
          }
          crossFadeFrom(t2, e2, i2) {
            if (t2.fadeOut(e2), this.fadeIn(e2), i2) {
              const i3 = this._clip.duration, n2 = t2._clip.duration, r2 = n2 / i3, s2 = i3 / n2;
              t2.warp(1, r2, e2), this.warp(s2, 1, e2);
            }
            return this;
          }
          crossFadeTo(t2, e2, i2) {
            return t2.crossFadeFrom(this, e2, i2);
          }
          stopFading() {
            const t2 = this._weightInterpolant;
            return null !== t2 && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t2)), this;
          }
          setEffectiveTimeScale(t2) {
            return this.timeScale = t2, this._effectiveTimeScale = this.paused ? 0 : t2, this.stopWarping();
          }
          getEffectiveTimeScale() {
            return this._effectiveTimeScale;
          }
          setDuration(t2) {
            return this.timeScale = this._clip.duration / t2, this.stopWarping();
          }
          syncWith(t2) {
            return this.time = t2.time, this.timeScale = t2.timeScale, this.stopWarping();
          }
          halt(t2) {
            return this.warp(this._effectiveTimeScale, 0, t2);
          }
          warp(t2, e2, i2) {
            const n2 = this._mixer, r2 = n2.time, s2 = this.timeScale;
            let a2 = this._timeScaleInterpolant;
            null === a2 && (a2 = n2._lendControlInterpolant(), this._timeScaleInterpolant = a2);
            const o2 = a2.parameterPositions, l2 = a2.sampleValues;
            return o2[0] = r2, o2[1] = r2 + i2, l2[0] = t2 / s2, l2[1] = e2 / s2, this;
          }
          stopWarping() {
            const t2 = this._timeScaleInterpolant;
            return null !== t2 && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t2)), this;
          }
          getMixer() {
            return this._mixer;
          }
          getClip() {
            return this._clip;
          }
          getRoot() {
            return this._localRoot || this._mixer._root;
          }
          _update(t2, e2, i2, n2) {
            if (!this.enabled)
              return void this._updateWeight(t2);
            const r2 = this._startTime;
            if (null !== r2) {
              const n3 = (t2 - r2) * i2;
              n3 < 0 || 0 === i2 ? e2 = 0 : (this._startTime = null, e2 = i2 * n3);
            }
            e2 *= this._updateTimeScale(t2);
            const s2 = this._updateTime(e2), a2 = this._updateWeight(t2);
            if (a2 > 0) {
              const t3 = this._interpolants, e3 = this._propertyBindings;
              if (this.blendMode === st)
                for (let i3 = 0, n3 = t3.length; i3 !== n3; ++i3)
                  t3[i3].evaluate(s2), e3[i3].accumulateAdditive(a2);
              else
                for (let i3 = 0, r3 = t3.length; i3 !== r3; ++i3)
                  t3[i3].evaluate(s2), e3[i3].accumulate(n2, a2);
            }
          }
          _updateWeight(t2) {
            let e2 = 0;
            if (this.enabled) {
              e2 = this.weight;
              const i2 = this._weightInterpolant;
              if (null !== i2) {
                const n2 = i2.evaluate(t2)[0];
                e2 *= n2, t2 > i2.parameterPositions[1] && (this.stopFading(), 0 === n2 && (this.enabled = false));
              }
            }
            return this._effectiveWeight = e2, e2;
          }
          _updateTimeScale(t2) {
            let e2 = 0;
            if (!this.paused) {
              e2 = this.timeScale;
              const i2 = this._timeScaleInterpolant;
              if (null !== i2) {
                e2 *= i2.evaluate(t2)[0], t2 > i2.parameterPositions[1] && (this.stopWarping(), 0 === e2 ? this.paused = true : this.timeScale = e2);
              }
            }
            return this._effectiveTimeScale = e2, e2;
          }
          _updateTime(t2) {
            const e2 = this._clip.duration, i2 = this.loop;
            let n2 = this.time + t2, r2 = this._loopCount;
            const s2 = 2202 === i2;
            if (0 === t2)
              return -1 === r2 ? n2 : s2 && 1 == (1 & r2) ? e2 - n2 : n2;
            if (2200 === i2) {
              -1 === r2 && (this._loopCount = 0, this._setEndings(true, true, false));
              t: {
                if (n2 >= e2)
                  n2 = e2;
                else {
                  if (!(n2 < 0)) {
                    this.time = n2;
                    break t;
                  }
                  n2 = 0;
                }
                this.clampWhenFinished ? this.paused = true : this.enabled = false, this.time = n2, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t2 < 0 ? -1 : 1 });
              }
            } else {
              if (-1 === r2 && (t2 >= 0 ? (r2 = 0, this._setEndings(true, 0 === this.repetitions, s2)) : this._setEndings(0 === this.repetitions, true, s2)), n2 >= e2 || n2 < 0) {
                const i3 = Math.floor(n2 / e2);
                n2 -= e2 * i3, r2 += Math.abs(i3);
                const a2 = this.repetitions - r2;
                if (a2 <= 0)
                  this.clampWhenFinished ? this.paused = true : this.enabled = false, n2 = t2 > 0 ? e2 : 0, this.time = n2, this._mixer.dispatchEvent({ type: "finished", action: this, direction: t2 > 0 ? 1 : -1 });
                else {
                  if (1 === a2) {
                    const e3 = t2 < 0;
                    this._setEndings(e3, !e3, s2);
                  } else
                    this._setEndings(false, false, s2);
                  this._loopCount = r2, this.time = n2, this._mixer.dispatchEvent({ type: "loop", action: this, loopDelta: i3 });
                }
              } else
                this.time = n2;
              if (s2 && 1 == (1 & r2))
                return e2 - n2;
            }
            return n2;
          }
          _setEndings(t2, e2, i2) {
            const n2 = this._interpolantSettings;
            i2 ? (n2.endingStart = it, n2.endingEnd = it) : (n2.endingStart = t2 ? this.zeroSlopeAtStart ? it : et : nt, n2.endingEnd = e2 ? this.zeroSlopeAtEnd ? it : et : nt);
          }
          _scheduleFading(t2, e2, i2) {
            const n2 = this._mixer, r2 = n2.time;
            let s2 = this._weightInterpolant;
            null === s2 && (s2 = n2._lendControlInterpolant(), this._weightInterpolant = s2);
            const a2 = s2.parameterPositions, o2 = s2.sampleValues;
            return a2[0] = r2, o2[0] = e2, a2[1] = r2 + t2, o2[1] = i2, this;
          }
        }
        const hh = new Float32Array(1);
        class uh {
          constructor(t2) {
            this.value = t2;
          }
          clone() {
            return new uh(void 0 === this.value.clone ? this.value : this.value.clone());
          }
        }
        let dh = 0;
        function ph(t2, e2) {
          return t2.distance - e2.distance;
        }
        function mh(t2, e2, i2, n2) {
          if (t2.layers.test(e2.layers) && t2.raycast(e2, i2), true === n2) {
            const n3 = t2.children;
            for (let t3 = 0, r2 = n3.length; t3 < r2; t3++)
              mh(n3[t3], e2, i2, true);
          }
        }
        const fh = new Lt();
        const gh = new ne(), vh = new ne();
        const xh = new ne();
        const _h = new ne(), yh = new Ne(), Mh = new Ne();
        function bh(t2) {
          const e2 = [];
          true === t2.isBone && e2.push(t2);
          for (let i2 = 0; i2 < t2.children.length; i2++)
            e2.push.apply(e2, bh(t2.children[i2]));
          return e2;
        }
        const Sh = new ne(), wh = new jt(), Th = new jt();
        const Ah = new ne(), Eh = new ne(), Ch = new ne();
        const Lh = new ne(), Rh = new sn();
        function Ph(t2, e2, i2, n2, r2, s2, a2) {
          Lh.set(r2, s2, a2).unproject(n2);
          const o2 = e2[t2];
          if (void 0 !== o2) {
            const t3 = i2.getAttribute("position");
            for (let e3 = 0, i3 = o2.length; e3 < i3; e3++)
              t3.setXYZ(o2[e3], Lh.x, Lh.y, Lh.z);
          }
        }
        const Ih = new ae();
        const Dh = new ne();
        let Nh, Oh;
        const zh = Uh();
        function Uh() {
          const t2 = new ArrayBuffer(4), e2 = new Float32Array(t2), i2 = new Uint32Array(t2), n2 = new Uint32Array(512), r2 = new Uint32Array(512);
          for (let t3 = 0; t3 < 256; ++t3) {
            const e3 = t3 - 127;
            e3 < -27 ? (n2[t3] = 0, n2[256 | t3] = 32768, r2[t3] = 24, r2[256 | t3] = 24) : e3 < -14 ? (n2[t3] = 1024 >> -e3 - 14, n2[256 | t3] = 1024 >> -e3 - 14 | 32768, r2[t3] = -e3 - 1, r2[256 | t3] = -e3 - 1) : e3 <= 15 ? (n2[t3] = e3 + 15 << 10, n2[256 | t3] = e3 + 15 << 10 | 32768, r2[t3] = 13, r2[256 | t3] = 13) : e3 < 128 ? (n2[t3] = 31744, n2[256 | t3] = 64512, r2[t3] = 24, r2[256 | t3] = 24) : (n2[t3] = 31744, n2[256 | t3] = 64512, r2[t3] = 13, r2[256 | t3] = 13);
          }
          const s2 = new Uint32Array(2048), a2 = new Uint32Array(64), o2 = new Uint32Array(64);
          for (let t3 = 1; t3 < 1024; ++t3) {
            let e3 = t3 << 13, i3 = 0;
            for (; 0 == (8388608 & e3); )
              e3 <<= 1, i3 -= 8388608;
            e3 &= -8388609, i3 += 947912704, s2[t3] = e3 | i3;
          }
          for (let t3 = 1024; t3 < 2048; ++t3)
            s2[t3] = 939524096 + (t3 - 1024 << 13);
          for (let t3 = 1; t3 < 31; ++t3)
            a2[t3] = t3 << 23;
          a2[31] = 1199570944, a2[32] = 2147483648;
          for (let t3 = 33; t3 < 63; ++t3)
            a2[t3] = 2147483648 + (t3 - 32 << 23);
          a2[63] = 3347054592;
          for (let t3 = 1; t3 < 64; ++t3)
            32 !== t3 && (o2[t3] = 1024);
          return { floatView: e2, uint32View: i2, baseTable: n2, shiftTable: r2, mantissaTable: s2, exponentTable: a2, offsetTable: o2 };
        }
        var Bh = Object.freeze({ __proto__: null, toHalfFloat: function(t2) {
          Math.abs(t2) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), t2 = yt(t2, -65504, 65504), zh.floatView[0] = t2;
          const e2 = zh.uint32View[0], i2 = e2 >> 23 & 511;
          return zh.baseTable[i2] + ((8388607 & e2) >> zh.shiftTable[i2]);
        }, fromHalfFloat: function(t2) {
          const e2 = t2 >> 10;
          return zh.uint32View[0] = zh.mantissaTable[zh.offsetTable[e2] + (1023 & t2)] + zh.exponentTable[e2], zh.floatView[0];
        } });
        "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: e } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e), t.ACESFilmicToneMapping = 4, t.AddEquation = i, t.AddOperation = 2, t.AdditiveAnimationBlendMode = st, t.AdditiveBlending = 2, t.AlphaFormat = 1021, t.AlwaysDepth = 1, t.AlwaysStencilFunc = 519, t.AmbientLight = Cc, t.AmbientLightProbe = class extends Pc {
          constructor(t2, e2 = 1) {
            super(void 0, e2), this.isAmbientLightProbe = true;
            const i2 = new jt().set(t2);
            this.sh.coefficients[0].set(i2.r, i2.g, i2.b).multiplyScalar(2 * Math.sqrt(Math.PI));
          }
        }, t.AnimationClip = nc, t.AnimationLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = new uc(this.manager);
            s2.setPath(this.path), s2.setRequestHeader(this.requestHeader), s2.setWithCredentials(this.withCredentials), s2.load(t2, function(i3) {
              try {
                e2(r2.parse(JSON.parse(i3)));
              } catch (e3) {
                n2 ? n2(e3) : console.error(e3), r2.manager.itemError(t2);
              }
            }, i2, n2);
          }
          parse(t2) {
            const e2 = [];
            for (let i2 = 0; i2 < t2.length; i2++) {
              const n2 = nc.parse(t2[i2]);
              e2.push(n2);
            }
            return e2;
          }
        }, t.AnimationMixer = class extends mt {
          constructor(t2) {
            super(), this._root = t2, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
          }
          _bindAction(t2, e2) {
            const i2 = t2._localRoot || this._root, n2 = t2._clip.tracks, r2 = n2.length, s2 = t2._propertyBindings, a2 = t2._interpolants, o2 = i2.uuid, l2 = this._bindingsByRootAndName;
            let c2 = l2[o2];
            void 0 === c2 && (c2 = {}, l2[o2] = c2);
            for (let t3 = 0; t3 !== r2; ++t3) {
              const r3 = n2[t3], l3 = r3.name;
              let h2 = c2[l3];
              if (void 0 !== h2)
                ++h2.referenceCount, s2[t3] = h2;
              else {
                if (h2 = s2[t3], void 0 !== h2) {
                  null === h2._cacheIndex && (++h2.referenceCount, this._addInactiveBinding(h2, o2, l3));
                  continue;
                }
                const n3 = e2 && e2._propertyBindings[t3].binding.parsedPath;
                h2 = new eh(lh.create(i2, l3, n3), r3.ValueTypeName, r3.getValueSize()), ++h2.referenceCount, this._addInactiveBinding(h2, o2, l3), s2[t3] = h2;
              }
              a2[t3].resultBuffer = h2.buffer;
            }
          }
          _activateAction(t2) {
            if (!this._isActiveAction(t2)) {
              if (null === t2._cacheIndex) {
                const e3 = (t2._localRoot || this._root).uuid, i2 = t2._clip.uuid, n2 = this._actionsByClip[i2];
                this._bindAction(t2, n2 && n2.knownActions[0]), this._addInactiveAction(t2, i2, e3);
              }
              const e2 = t2._propertyBindings;
              for (let t3 = 0, i2 = e2.length; t3 !== i2; ++t3) {
                const i3 = e2[t3];
                0 == i3.useCount++ && (this._lendBinding(i3), i3.saveOriginalState());
              }
              this._lendAction(t2);
            }
          }
          _deactivateAction(t2) {
            if (this._isActiveAction(t2)) {
              const e2 = t2._propertyBindings;
              for (let t3 = 0, i2 = e2.length; t3 !== i2; ++t3) {
                const i3 = e2[t3];
                0 == --i3.useCount && (i3.restoreOriginalState(), this._takeBackBinding(i3));
              }
              this._takeBackAction(t2);
            }
          }
          _initMemoryManager() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            const t2 = this;
            this.stats = { actions: { get total() {
              return t2._actions.length;
            }, get inUse() {
              return t2._nActiveActions;
            } }, bindings: { get total() {
              return t2._bindings.length;
            }, get inUse() {
              return t2._nActiveBindings;
            } }, controlInterpolants: { get total() {
              return t2._controlInterpolants.length;
            }, get inUse() {
              return t2._nActiveControlInterpolants;
            } } };
          }
          _isActiveAction(t2) {
            const e2 = t2._cacheIndex;
            return null !== e2 && e2 < this._nActiveActions;
          }
          _addInactiveAction(t2, e2, i2) {
            const n2 = this._actions, r2 = this._actionsByClip;
            let s2 = r2[e2];
            if (void 0 === s2)
              s2 = { knownActions: [t2], actionByRoot: {} }, t2._byClipCacheIndex = 0, r2[e2] = s2;
            else {
              const e3 = s2.knownActions;
              t2._byClipCacheIndex = e3.length, e3.push(t2);
            }
            t2._cacheIndex = n2.length, n2.push(t2), s2.actionByRoot[i2] = t2;
          }
          _removeInactiveAction(t2) {
            const e2 = this._actions, i2 = e2[e2.length - 1], n2 = t2._cacheIndex;
            i2._cacheIndex = n2, e2[n2] = i2, e2.pop(), t2._cacheIndex = null;
            const r2 = t2._clip.uuid, s2 = this._actionsByClip, a2 = s2[r2], o2 = a2.knownActions, l2 = o2[o2.length - 1], c2 = t2._byClipCacheIndex;
            l2._byClipCacheIndex = c2, o2[c2] = l2, o2.pop(), t2._byClipCacheIndex = null;
            delete a2.actionByRoot[(t2._localRoot || this._root).uuid], 0 === o2.length && delete s2[r2], this._removeInactiveBindingsForAction(t2);
          }
          _removeInactiveBindingsForAction(t2) {
            const e2 = t2._propertyBindings;
            for (let t3 = 0, i2 = e2.length; t3 !== i2; ++t3) {
              const i3 = e2[t3];
              0 == --i3.referenceCount && this._removeInactiveBinding(i3);
            }
          }
          _lendAction(t2) {
            const e2 = this._actions, i2 = t2._cacheIndex, n2 = this._nActiveActions++, r2 = e2[n2];
            t2._cacheIndex = n2, e2[n2] = t2, r2._cacheIndex = i2, e2[i2] = r2;
          }
          _takeBackAction(t2) {
            const e2 = this._actions, i2 = t2._cacheIndex, n2 = --this._nActiveActions, r2 = e2[n2];
            t2._cacheIndex = n2, e2[n2] = t2, r2._cacheIndex = i2, e2[i2] = r2;
          }
          _addInactiveBinding(t2, e2, i2) {
            const n2 = this._bindingsByRootAndName, r2 = this._bindings;
            let s2 = n2[e2];
            void 0 === s2 && (s2 = {}, n2[e2] = s2), s2[i2] = t2, t2._cacheIndex = r2.length, r2.push(t2);
          }
          _removeInactiveBinding(t2) {
            const e2 = this._bindings, i2 = t2.binding, n2 = i2.rootNode.uuid, r2 = i2.path, s2 = this._bindingsByRootAndName, a2 = s2[n2], o2 = e2[e2.length - 1], l2 = t2._cacheIndex;
            o2._cacheIndex = l2, e2[l2] = o2, e2.pop(), delete a2[r2], 0 === Object.keys(a2).length && delete s2[n2];
          }
          _lendBinding(t2) {
            const e2 = this._bindings, i2 = t2._cacheIndex, n2 = this._nActiveBindings++, r2 = e2[n2];
            t2._cacheIndex = n2, e2[n2] = t2, r2._cacheIndex = i2, e2[i2] = r2;
          }
          _takeBackBinding(t2) {
            const e2 = this._bindings, i2 = t2._cacheIndex, n2 = --this._nActiveBindings, r2 = e2[n2];
            t2._cacheIndex = n2, e2[n2] = t2, r2._cacheIndex = i2, e2[i2] = r2;
          }
          _lendControlInterpolant() {
            const t2 = this._controlInterpolants, e2 = this._nActiveControlInterpolants++;
            let i2 = t2[e2];
            return void 0 === i2 && (i2 = new Xl(new Float32Array(2), new Float32Array(2), 1, hh), i2.__cacheIndex = e2, t2[e2] = i2), i2;
          }
          _takeBackControlInterpolant(t2) {
            const e2 = this._controlInterpolants, i2 = t2.__cacheIndex, n2 = --this._nActiveControlInterpolants, r2 = e2[n2];
            t2.__cacheIndex = n2, e2[n2] = t2, r2.__cacheIndex = i2, e2[i2] = r2;
          }
          clipAction(t2, e2, i2) {
            const n2 = e2 || this._root, r2 = n2.uuid;
            let s2 = "string" == typeof t2 ? nc.findByName(n2, t2) : t2;
            const a2 = null !== s2 ? s2.uuid : t2, o2 = this._actionsByClip[a2];
            let l2 = null;
            if (void 0 === i2 && (i2 = null !== s2 ? s2.blendMode : rt), void 0 !== o2) {
              const t3 = o2.actionByRoot[r2];
              if (void 0 !== t3 && t3.blendMode === i2)
                return t3;
              l2 = o2.knownActions[0], null === s2 && (s2 = l2._clip);
            }
            if (null === s2)
              return null;
            const c2 = new ch(this, s2, e2, i2);
            return this._bindAction(c2, l2), this._addInactiveAction(c2, a2, r2), c2;
          }
          existingAction(t2, e2) {
            const i2 = e2 || this._root, n2 = i2.uuid, r2 = "string" == typeof t2 ? nc.findByName(i2, t2) : t2, s2 = r2 ? r2.uuid : t2, a2 = this._actionsByClip[s2];
            return void 0 !== a2 && a2.actionByRoot[n2] || null;
          }
          stopAllAction() {
            const t2 = this._actions;
            for (let e2 = this._nActiveActions - 1; e2 >= 0; --e2)
              t2[e2].stop();
            return this;
          }
          update(t2) {
            t2 *= this.timeScale;
            const e2 = this._actions, i2 = this._nActiveActions, n2 = this.time += t2, r2 = Math.sign(t2), s2 = this._accuIndex ^= 1;
            for (let a3 = 0; a3 !== i2; ++a3) {
              e2[a3]._update(n2, t2, r2, s2);
            }
            const a2 = this._bindings, o2 = this._nActiveBindings;
            for (let t3 = 0; t3 !== o2; ++t3)
              a2[t3].apply(s2);
            return this;
          }
          setTime(t2) {
            this.time = 0;
            for (let t3 = 0; t3 < this._actions.length; t3++)
              this._actions[t3].time = 0;
            return this.update(t2);
          }
          getRoot() {
            return this._root;
          }
          uncacheClip(t2) {
            const e2 = this._actions, i2 = t2.uuid, n2 = this._actionsByClip, r2 = n2[i2];
            if (void 0 !== r2) {
              const t3 = r2.knownActions;
              for (let i3 = 0, n3 = t3.length; i3 !== n3; ++i3) {
                const n4 = t3[i3];
                this._deactivateAction(n4);
                const r3 = n4._cacheIndex, s2 = e2[e2.length - 1];
                n4._cacheIndex = null, n4._byClipCacheIndex = null, s2._cacheIndex = r3, e2[r3] = s2, e2.pop(), this._removeInactiveBindingsForAction(n4);
              }
              delete n2[i2];
            }
          }
          uncacheRoot(t2) {
            const e2 = t2.uuid, i2 = this._actionsByClip;
            for (const t3 in i2) {
              const n3 = i2[t3].actionByRoot[e2];
              void 0 !== n3 && (this._deactivateAction(n3), this._removeInactiveAction(n3));
            }
            const n2 = this._bindingsByRootAndName[e2];
            if (void 0 !== n2)
              for (const t3 in n2) {
                const e3 = n2[t3];
                e3.restoreOriginalState(), this._removeInactiveBinding(e3);
              }
          }
          uncacheAction(t2, e2) {
            const i2 = this.existingAction(t2, e2);
            null !== i2 && (this._deactivateAction(i2), this._removeInactiveAction(i2));
          }
        }, t.AnimationObjectGroup = class {
          constructor() {
            this.isAnimationObjectGroup = true, this.uuid = _t(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
            const t2 = {};
            this._indicesByUUID = t2;
            for (let e3 = 0, i2 = arguments.length; e3 !== i2; ++e3)
              t2[arguments[e3].uuid] = e3;
            this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
            const e2 = this;
            this.stats = { objects: { get total() {
              return e2._objects.length;
            }, get inUse() {
              return this.total - e2.nCachedObjects_;
            } }, get bindingsPerObject() {
              return e2._bindings.length;
            } };
          }
          add() {
            const t2 = this._objects, e2 = this._indicesByUUID, i2 = this._paths, n2 = this._parsedPaths, r2 = this._bindings, s2 = r2.length;
            let a2, o2 = t2.length, l2 = this.nCachedObjects_;
            for (let c2 = 0, h2 = arguments.length; c2 !== h2; ++c2) {
              const h3 = arguments[c2], u2 = h3.uuid;
              let d2 = e2[u2];
              if (void 0 === d2) {
                d2 = o2++, e2[u2] = d2, t2.push(h3);
                for (let t3 = 0, e3 = s2; t3 !== e3; ++t3)
                  r2[t3].push(new lh(h3, i2[t3], n2[t3]));
              } else if (d2 < l2) {
                a2 = t2[d2];
                const o3 = --l2, c3 = t2[o3];
                e2[c3.uuid] = d2, t2[d2] = c3, e2[u2] = o3, t2[o3] = h3;
                for (let t3 = 0, e3 = s2; t3 !== e3; ++t3) {
                  const e4 = r2[t3], s3 = e4[o3];
                  let a3 = e4[d2];
                  e4[d2] = s3, void 0 === a3 && (a3 = new lh(h3, i2[t3], n2[t3])), e4[o3] = a3;
                }
              } else
                t2[d2] !== a2 && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
            }
            this.nCachedObjects_ = l2;
          }
          remove() {
            const t2 = this._objects, e2 = this._indicesByUUID, i2 = this._bindings, n2 = i2.length;
            let r2 = this.nCachedObjects_;
            for (let s2 = 0, a2 = arguments.length; s2 !== a2; ++s2) {
              const a3 = arguments[s2], o2 = a3.uuid, l2 = e2[o2];
              if (void 0 !== l2 && l2 >= r2) {
                const s3 = r2++, c2 = t2[s3];
                e2[c2.uuid] = l2, t2[l2] = c2, e2[o2] = s3, t2[s3] = a3;
                for (let t3 = 0, e3 = n2; t3 !== e3; ++t3) {
                  const e4 = i2[t3], n3 = e4[s3], r3 = e4[l2];
                  e4[l2] = n3, e4[s3] = r3;
                }
              }
            }
            this.nCachedObjects_ = r2;
          }
          uncache() {
            const t2 = this._objects, e2 = this._indicesByUUID, i2 = this._bindings, n2 = i2.length;
            let r2 = this.nCachedObjects_, s2 = t2.length;
            for (let a2 = 0, o2 = arguments.length; a2 !== o2; ++a2) {
              const o3 = arguments[a2].uuid, l2 = e2[o3];
              if (void 0 !== l2)
                if (delete e2[o3], l2 < r2) {
                  const a3 = --r2, o4 = t2[a3], c2 = --s2, h2 = t2[c2];
                  e2[o4.uuid] = l2, t2[l2] = o4, e2[h2.uuid] = a3, t2[a3] = h2, t2.pop();
                  for (let t3 = 0, e3 = n2; t3 !== e3; ++t3) {
                    const e4 = i2[t3], n3 = e4[a3], r3 = e4[c2];
                    e4[l2] = n3, e4[a3] = r3, e4.pop();
                  }
                } else {
                  const r3 = --s2, a3 = t2[r3];
                  r3 > 0 && (e2[a3.uuid] = l2), t2[l2] = a3, t2.pop();
                  for (let t3 = 0, e3 = n2; t3 !== e3; ++t3) {
                    const e4 = i2[t3];
                    e4[l2] = e4[r3], e4.pop();
                  }
                }
            }
            this.nCachedObjects_ = r2;
          }
          subscribe_(t2, e2) {
            const i2 = this._bindingsIndicesByPath;
            let n2 = i2[t2];
            const r2 = this._bindings;
            if (void 0 !== n2)
              return r2[n2];
            const s2 = this._paths, a2 = this._parsedPaths, o2 = this._objects, l2 = o2.length, c2 = this.nCachedObjects_, h2 = new Array(l2);
            n2 = r2.length, i2[t2] = n2, s2.push(t2), a2.push(e2), r2.push(h2);
            for (let i3 = c2, n3 = o2.length; i3 !== n3; ++i3) {
              const n4 = o2[i3];
              h2[i3] = new lh(n4, t2, e2);
            }
            return h2;
          }
          unsubscribe_(t2) {
            const e2 = this._bindingsIndicesByPath, i2 = e2[t2];
            if (void 0 !== i2) {
              const n2 = this._paths, r2 = this._parsedPaths, s2 = this._bindings, a2 = s2.length - 1, o2 = s2[a2];
              e2[t2[a2]] = i2, s2[i2] = o2, s2.pop(), r2[i2] = r2[a2], r2.pop(), n2[i2] = n2[a2], n2.pop();
            }
          }
        }, t.AnimationUtils = Wl, t.ArcCurve = ao, t.ArrayCamera = Gs, t.ArrowHelper = class extends si {
          constructor(t2 = new ne(0, 0, 1), e2 = new ne(0, 0, 0), i2 = 1, n2 = 16776960, r2 = 0.2 * i2, s2 = 0.2 * r2) {
            super(), this.type = "ArrowHelper", void 0 === Nh && (Nh = new Di(), Nh.setAttribute("position", new Ti([0, 0, 0, 0, 1, 0], 3)), Oh = new Ro(0, 0.5, 1, 5, 1), Oh.translate(0, -0.5, 0)), this.position.copy(e2), this.line = new ja(Nh, new Fa({ color: n2, toneMapped: false })), this.line.matrixAutoUpdate = false, this.add(this.line), this.cone = new Ki(Oh, new _i({ color: n2, toneMapped: false })), this.cone.matrixAutoUpdate = false, this.add(this.cone), this.setDirection(t2), this.setLength(i2, r2, s2);
          }
          setDirection(t2) {
            if (t2.y > 0.99999)
              this.quaternion.set(0, 0, 0, 1);
            else if (t2.y < -0.99999)
              this.quaternion.set(1, 0, 0, 0);
            else {
              Dh.set(t2.z, 0, -t2.x).normalize();
              const e2 = Math.acos(t2.y);
              this.quaternion.setFromAxisAngle(Dh, e2);
            }
          }
          setLength(t2, e2 = 0.2 * t2, i2 = 0.2 * e2) {
            this.line.scale.set(1, Math.max(1e-4, t2 - e2), 1), this.line.updateMatrix(), this.cone.scale.set(i2, e2, i2), this.cone.position.y = t2, this.cone.updateMatrix();
          }
          setColor(t2) {
            this.line.material.color.set(t2), this.cone.material.color.set(t2);
          }
          copy(t2) {
            return super.copy(t2, false), this.line.copy(t2.line), this.cone.copy(t2.cone), this;
          }
          dispose() {
            this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
          }
        }, t.Audio = Jc, t.AudioAnalyser = class {
          constructor(t2, e2 = 2048) {
            this.analyser = t2.context.createAnalyser(), this.analyser.fftSize = e2, this.data = new Uint8Array(this.analyser.frequencyBinCount), t2.getOutput().connect(this.analyser);
          }
          getFrequencyData() {
            return this.analyser.getByteFrequencyData(this.data), this.data;
          }
          getAverageFrequency() {
            let t2 = 0;
            const e2 = this.getFrequencyData();
            for (let i2 = 0; i2 < e2.length; i2++)
              t2 += e2[i2];
            return t2 / e2.length;
          }
        }, t.AudioContext = kc, t.AudioListener = class extends si {
          constructor() {
            super(), this.type = "AudioListener", this.context = kc.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Wc();
          }
          getInput() {
            return this.gain;
          }
          removeFilter() {
            return null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
          }
          getFilter() {
            return this.filter;
          }
          setFilter(t2) {
            return null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t2, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
          }
          getMasterVolume() {
            return this.gain.gain.value;
          }
          setMasterVolume(t2) {
            return this.gain.gain.setTargetAtTime(t2, this.context.currentTime, 0.01), this;
          }
          updateMatrixWorld(t2) {
            super.updateMatrixWorld(t2);
            const e2 = this.context.listener, i2 = this.up;
            if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(qc, Xc, Yc), Zc.set(0, 0, -1).applyQuaternion(Xc), e2.positionX) {
              const t3 = this.context.currentTime + this.timeDelta;
              e2.positionX.linearRampToValueAtTime(qc.x, t3), e2.positionY.linearRampToValueAtTime(qc.y, t3), e2.positionZ.linearRampToValueAtTime(qc.z, t3), e2.forwardX.linearRampToValueAtTime(Zc.x, t3), e2.forwardY.linearRampToValueAtTime(Zc.y, t3), e2.forwardZ.linearRampToValueAtTime(Zc.z, t3), e2.upX.linearRampToValueAtTime(i2.x, t3), e2.upY.linearRampToValueAtTime(i2.y, t3), e2.upZ.linearRampToValueAtTime(i2.z, t3);
            } else
              e2.setPosition(qc.x, qc.y, qc.z), e2.setOrientation(Zc.x, Zc.y, Zc.z, i2.x, i2.y, i2.z);
          }
        }, t.AudioLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = new uc(this.manager);
            s2.setResponseType("arraybuffer"), s2.setPath(this.path), s2.setRequestHeader(this.requestHeader), s2.setWithCredentials(this.withCredentials), s2.load(t2, function(i3) {
              try {
                const t3 = i3.slice(0);
                kc.getContext().decodeAudioData(t3, function(t4) {
                  e2(t4);
                });
              } catch (e3) {
                n2 ? n2(e3) : console.error(e3), r2.manager.itemError(t2);
              }
            }, i2, n2);
          }
        }, t.AxesHelper = class extends Ya {
          constructor(t2 = 1) {
            const e2 = [0, 0, 0, t2, 0, 0, 0, 0, 0, 0, t2, 0, 0, 0, 0, 0, 0, t2], i2 = new Di();
            i2.setAttribute("position", new Ti(e2, 3)), i2.setAttribute("color", new Ti([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3));
            super(i2, new Fa({ vertexColors: true, toneMapped: false })), this.type = "AxesHelper";
          }
          setColors(t2, e2, i2) {
            const n2 = new jt(), r2 = this.geometry.attributes.color.array;
            return n2.set(t2), n2.toArray(r2, 0), n2.toArray(r2, 3), n2.set(e2), n2.toArray(r2, 6), n2.toArray(r2, 9), n2.set(i2), n2.toArray(r2, 12), n2.toArray(r2, 15), this.geometry.attributes.color.needsUpdate = true, this;
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.BackSide = 1, t.BasicDepthPacking = 3200, t.BasicShadowMap = 0, t.Bone = Ca, t.BooleanKeyframeTrack = Jl, t.Box2 = class {
          constructor(t2 = new Lt(1 / 0, 1 / 0), e2 = new Lt(-1 / 0, -1 / 0)) {
            this.isBox2 = true, this.min = t2, this.max = e2;
          }
          set(t2, e2) {
            return this.min.copy(t2), this.max.copy(e2), this;
          }
          setFromPoints(t2) {
            this.makeEmpty();
            for (let e2 = 0, i2 = t2.length; e2 < i2; e2++)
              this.expandByPoint(t2[e2]);
            return this;
          }
          setFromCenterAndSize(t2, e2) {
            const i2 = fh.copy(e2).multiplyScalar(0.5);
            return this.min.copy(t2).sub(i2), this.max.copy(t2).add(i2), this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
          copy(t2) {
            return this.min.copy(t2.min), this.max.copy(t2.max), this;
          }
          makeEmpty() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
          }
          isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y;
          }
          getCenter(t2) {
            return this.isEmpty() ? t2.set(0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
          }
          getSize(t2) {
            return this.isEmpty() ? t2.set(0, 0) : t2.subVectors(this.max, this.min);
          }
          expandByPoint(t2) {
            return this.min.min(t2), this.max.max(t2), this;
          }
          expandByVector(t2) {
            return this.min.sub(t2), this.max.add(t2), this;
          }
          expandByScalar(t2) {
            return this.min.addScalar(-t2), this.max.addScalar(t2), this;
          }
          containsPoint(t2) {
            return !(t2.x < this.min.x || t2.x > this.max.x || t2.y < this.min.y || t2.y > this.max.y);
          }
          containsBox(t2) {
            return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y;
          }
          getParameter(t2, e2) {
            return e2.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y));
          }
          intersectsBox(t2) {
            return !(t2.max.x < this.min.x || t2.min.x > this.max.x || t2.max.y < this.min.y || t2.min.y > this.max.y);
          }
          clampPoint(t2, e2) {
            return e2.copy(t2).clamp(this.min, this.max);
          }
          distanceToPoint(t2) {
            return fh.copy(t2).clamp(this.min, this.max).sub(t2).length();
          }
          intersect(t2) {
            return this.min.max(t2.min), this.max.min(t2.max), this;
          }
          union(t2) {
            return this.min.min(t2.min), this.max.max(t2.max), this;
          }
          translate(t2) {
            return this.min.add(t2), this.max.add(t2), this;
          }
          equals(t2) {
            return t2.min.equals(this.min) && t2.max.equals(this.max);
          }
        }, t.Box3 = ae, t.Box3Helper = class extends Ya {
          constructor(t2, e2 = 16776960) {
            const i2 = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), n2 = new Di();
            n2.setIndex(new bi(i2, 1)), n2.setAttribute("position", new Ti([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), super(n2, new Fa({ color: e2, toneMapped: false })), this.box = t2, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
          }
          updateMatrixWorld(t2) {
            const e2 = this.box;
            e2.isEmpty() || (e2.getCenter(this.position), e2.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(t2));
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.BoxBufferGeometry = class extends Qi {
          constructor(t2, e2, i2, n2, r2, s2) {
            console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."), super(t2, e2, i2, n2, r2, s2);
          }
        }, t.BoxGeometry = Qi, t.BoxHelper = class extends Ya {
          constructor(t2, e2 = 16776960) {
            const i2 = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), n2 = new Float32Array(24), r2 = new Di();
            r2.setIndex(new bi(i2, 1)), r2.setAttribute("position", new bi(n2, 3)), super(r2, new Fa({ color: e2, toneMapped: false })), this.object = t2, this.type = "BoxHelper", this.matrixAutoUpdate = false, this.update();
          }
          update(t2) {
            if (void 0 !== t2 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && Ih.setFromObject(this.object), Ih.isEmpty())
              return;
            const e2 = Ih.min, i2 = Ih.max, n2 = this.geometry.attributes.position, r2 = n2.array;
            r2[0] = i2.x, r2[1] = i2.y, r2[2] = i2.z, r2[3] = e2.x, r2[4] = i2.y, r2[5] = i2.z, r2[6] = e2.x, r2[7] = e2.y, r2[8] = i2.z, r2[9] = i2.x, r2[10] = e2.y, r2[11] = i2.z, r2[12] = i2.x, r2[13] = i2.y, r2[14] = e2.z, r2[15] = e2.x, r2[16] = i2.y, r2[17] = e2.z, r2[18] = e2.x, r2[19] = e2.y, r2[20] = e2.z, r2[21] = i2.x, r2[22] = e2.y, r2[23] = e2.z, n2.needsUpdate = true, this.geometry.computeBoundingSphere();
          }
          setFromObject(t2) {
            return this.object = t2, this.update(), this;
          }
          copy(t2, e2) {
            return super.copy(t2, e2), this.object = t2.object, this;
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.BufferAttribute = bi, t.BufferGeometry = Di, t.BufferGeometryLoader = Oc, t.ByteType = 1010, t.Cache = sc, t.Camera = sn, t.CameraHelper = class extends Ya {
          constructor(t2) {
            const e2 = new Di(), i2 = new Fa({ color: 16777215, vertexColors: true, toneMapped: false }), n2 = [], r2 = [], s2 = {};
            function a2(t3, e3) {
              o2(t3), o2(e3);
            }
            function o2(t3) {
              n2.push(0, 0, 0), r2.push(0, 0, 0), void 0 === s2[t3] && (s2[t3] = []), s2[t3].push(n2.length / 3 - 1);
            }
            a2("n1", "n2"), a2("n2", "n4"), a2("n4", "n3"), a2("n3", "n1"), a2("f1", "f2"), a2("f2", "f4"), a2("f4", "f3"), a2("f3", "f1"), a2("n1", "f1"), a2("n2", "f2"), a2("n3", "f3"), a2("n4", "f4"), a2("p", "n1"), a2("p", "n2"), a2("p", "n3"), a2("p", "n4"), a2("u1", "u2"), a2("u2", "u3"), a2("u3", "u1"), a2("c", "t"), a2("p", "c"), a2("cn1", "cn2"), a2("cn3", "cn4"), a2("cf1", "cf2"), a2("cf3", "cf4"), e2.setAttribute("position", new Ti(n2, 3)), e2.setAttribute("color", new Ti(r2, 3)), super(e2, i2), this.type = "CameraHelper", this.camera = t2, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t2.matrixWorld, this.matrixAutoUpdate = false, this.pointMap = s2, this.update();
            const l2 = new jt(16755200), c2 = new jt(16711680), h2 = new jt(43775), u2 = new jt(16777215), d2 = new jt(3355443);
            this.setColors(l2, c2, h2, u2, d2);
          }
          setColors(t2, e2, i2, n2, r2) {
            const s2 = this.geometry.getAttribute("color");
            s2.setXYZ(0, t2.r, t2.g, t2.b), s2.setXYZ(1, t2.r, t2.g, t2.b), s2.setXYZ(2, t2.r, t2.g, t2.b), s2.setXYZ(3, t2.r, t2.g, t2.b), s2.setXYZ(4, t2.r, t2.g, t2.b), s2.setXYZ(5, t2.r, t2.g, t2.b), s2.setXYZ(6, t2.r, t2.g, t2.b), s2.setXYZ(7, t2.r, t2.g, t2.b), s2.setXYZ(8, t2.r, t2.g, t2.b), s2.setXYZ(9, t2.r, t2.g, t2.b), s2.setXYZ(10, t2.r, t2.g, t2.b), s2.setXYZ(11, t2.r, t2.g, t2.b), s2.setXYZ(12, t2.r, t2.g, t2.b), s2.setXYZ(13, t2.r, t2.g, t2.b), s2.setXYZ(14, t2.r, t2.g, t2.b), s2.setXYZ(15, t2.r, t2.g, t2.b), s2.setXYZ(16, t2.r, t2.g, t2.b), s2.setXYZ(17, t2.r, t2.g, t2.b), s2.setXYZ(18, t2.r, t2.g, t2.b), s2.setXYZ(19, t2.r, t2.g, t2.b), s2.setXYZ(20, t2.r, t2.g, t2.b), s2.setXYZ(21, t2.r, t2.g, t2.b), s2.setXYZ(22, t2.r, t2.g, t2.b), s2.setXYZ(23, t2.r, t2.g, t2.b), s2.setXYZ(24, e2.r, e2.g, e2.b), s2.setXYZ(25, e2.r, e2.g, e2.b), s2.setXYZ(26, e2.r, e2.g, e2.b), s2.setXYZ(27, e2.r, e2.g, e2.b), s2.setXYZ(28, e2.r, e2.g, e2.b), s2.setXYZ(29, e2.r, e2.g, e2.b), s2.setXYZ(30, e2.r, e2.g, e2.b), s2.setXYZ(31, e2.r, e2.g, e2.b), s2.setXYZ(32, i2.r, i2.g, i2.b), s2.setXYZ(33, i2.r, i2.g, i2.b), s2.setXYZ(34, i2.r, i2.g, i2.b), s2.setXYZ(35, i2.r, i2.g, i2.b), s2.setXYZ(36, i2.r, i2.g, i2.b), s2.setXYZ(37, i2.r, i2.g, i2.b), s2.setXYZ(38, n2.r, n2.g, n2.b), s2.setXYZ(39, n2.r, n2.g, n2.b), s2.setXYZ(40, r2.r, r2.g, r2.b), s2.setXYZ(41, r2.r, r2.g, r2.b), s2.setXYZ(42, r2.r, r2.g, r2.b), s2.setXYZ(43, r2.r, r2.g, r2.b), s2.setXYZ(44, r2.r, r2.g, r2.b), s2.setXYZ(45, r2.r, r2.g, r2.b), s2.setXYZ(46, r2.r, r2.g, r2.b), s2.setXYZ(47, r2.r, r2.g, r2.b), s2.setXYZ(48, r2.r, r2.g, r2.b), s2.setXYZ(49, r2.r, r2.g, r2.b), s2.needsUpdate = true;
          }
          update() {
            const t2 = this.geometry, e2 = this.pointMap;
            Rh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), Ph("c", e2, t2, Rh, 0, 0, -1), Ph("t", e2, t2, Rh, 0, 0, 1), Ph("n1", e2, t2, Rh, -1, -1, -1), Ph("n2", e2, t2, Rh, 1, -1, -1), Ph("n3", e2, t2, Rh, -1, 1, -1), Ph("n4", e2, t2, Rh, 1, 1, -1), Ph("f1", e2, t2, Rh, -1, -1, 1), Ph("f2", e2, t2, Rh, 1, -1, 1), Ph("f3", e2, t2, Rh, -1, 1, 1), Ph("f4", e2, t2, Rh, 1, 1, 1), Ph("u1", e2, t2, Rh, 0.7, 1.1, -1), Ph("u2", e2, t2, Rh, -0.7, 1.1, -1), Ph("u3", e2, t2, Rh, 0, 2, -1), Ph("cf1", e2, t2, Rh, -1, 0, 1), Ph("cf2", e2, t2, Rh, 1, 0, 1), Ph("cf3", e2, t2, Rh, 0, -1, 1), Ph("cf4", e2, t2, Rh, 0, 1, 1), Ph("cn1", e2, t2, Rh, -1, 0, -1), Ph("cn2", e2, t2, Rh, 1, 0, -1), Ph("cn3", e2, t2, Rh, 0, -1, -1), Ph("cn4", e2, t2, Rh, 0, 1, -1), t2.getAttribute("position").needsUpdate = true;
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.CanvasTexture = class extends Kt {
          constructor(t2, e2, i2, n2, r2, s2, a2, o2, l2) {
            super(t2, e2, i2, n2, r2, s2, a2, o2, l2), this.isCanvasTexture = true, this.needsUpdate = true;
          }
        }, t.CapsuleBufferGeometry = class extends Co {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."), super(t2, e2, i2, n2);
          }
        }, t.CapsuleGeometry = Co, t.CatmullRomCurve3 = po, t.CineonToneMapping = 3, t.CircleBufferGeometry = class extends Lo {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."), super(t2, e2, i2, n2);
          }
        }, t.CircleGeometry = Lo, t.ClampToEdgeWrapping = h, t.Clock = Wc, t.Color = jt, t.ColorKeyframeTrack = Kl, t.ColorManagement = Bt, t.CompressedTexture = no, t.CompressedTextureLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = [], a2 = new no(), o2 = new uc(this.manager);
            o2.setPath(this.path), o2.setResponseType("arraybuffer"), o2.setRequestHeader(this.requestHeader), o2.setWithCredentials(r2.withCredentials);
            let l2 = 0;
            function c2(c3) {
              o2.load(t2[c3], function(t3) {
                const i3 = r2.parse(t3, true);
                s2[c3] = { width: i3.width, height: i3.height, format: i3.format, mipmaps: i3.mipmaps }, l2 += 1, 6 === l2 && (1 === i3.mipmapCount && (a2.minFilter = f), a2.image = s2, a2.format = i3.format, a2.needsUpdate = true, e2 && e2(a2));
              }, i2, n2);
            }
            if (Array.isArray(t2))
              for (let e3 = 0, i3 = t2.length; e3 < i3; ++e3)
                c2(e3);
            else
              o2.load(t2, function(t3) {
                const i3 = r2.parse(t3, true);
                if (i3.isCubemap) {
                  const t4 = i3.mipmaps.length / i3.mipmapCount;
                  for (let e3 = 0; e3 < t4; e3++) {
                    s2[e3] = { mipmaps: [] };
                    for (let t5 = 0; t5 < i3.mipmapCount; t5++)
                      s2[e3].mipmaps.push(i3.mipmaps[e3 * i3.mipmapCount + t5]), s2[e3].format = i3.format, s2[e3].width = i3.width, s2[e3].height = i3.height;
                  }
                  a2.image = s2;
                } else
                  a2.image.width = i3.width, a2.image.height = i3.height, a2.mipmaps = i3.mipmaps;
                1 === i3.mipmapCount && (a2.minFilter = f), a2.format = i3.format, a2.needsUpdate = true, e2 && e2(a2);
              }, i2, n2);
            return a2;
          }
        }, t.ConeBufferGeometry = class extends Po {
          constructor(t2, e2, i2, n2, r2, s2, a2) {
            console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."), super(t2, e2, i2, n2, r2, s2, a2);
          }
        }, t.ConeGeometry = Po, t.CubeCamera = ln, t.CubeReflectionMapping = r, t.CubeRefractionMapping = s, t.CubeTexture = cn, t.CubeTextureLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = new cn(), s2 = new dc(this.manager);
            s2.setCrossOrigin(this.crossOrigin), s2.setPath(this.path);
            let a2 = 0;
            function o2(i3) {
              s2.load(t2[i3], function(t3) {
                r2.images[i3] = t3, a2++, 6 === a2 && (r2.needsUpdate = true, e2 && e2(r2));
              }, void 0, n2);
            }
            for (let e3 = 0; e3 < t2.length; ++e3)
              o2(e3);
            return r2;
          }
        }, t.CubeUVReflectionMapping = l, t.CubicBezierCurve = vo, t.CubicBezierCurve3 = xo, t.CubicInterpolant = ql, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.CullFaceNone = 0, t.Curve = ro, t.CurvePath = To, t.CustomBlending = 5, t.CustomToneMapping = 5, t.CylinderBufferGeometry = class extends Ro {
          constructor(t2, e2, i2, n2, r2, s2, a2, o2) {
            console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."), super(t2, e2, i2, n2, r2, s2, a2, o2);
          }
        }, t.CylinderGeometry = Ro, t.Cylindrical = class {
          constructor(t2 = 1, e2 = 0, i2 = 0) {
            return this.radius = t2, this.theta = e2, this.y = i2, this;
          }
          set(t2, e2, i2) {
            return this.radius = t2, this.theta = e2, this.y = i2, this;
          }
          copy(t2) {
            return this.radius = t2.radius, this.theta = t2.theta, this.y = t2.y, this;
          }
          setFromVector3(t2) {
            return this.setFromCartesianCoords(t2.x, t2.y, t2.z);
          }
          setFromCartesianCoords(t2, e2, i2) {
            return this.radius = Math.sqrt(t2 * t2 + i2 * i2), this.theta = Math.atan2(t2, i2), this.y = e2, this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }, t.Data3DTexture = ee, t.DataArrayTexture = te, t.DataTexture = La, t.DataTexture2DArray = class extends te {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."), super(t2, e2, i2, n2);
          }
        }, t.DataTexture3D = class extends ee {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."), super(t2, e2, i2, n2);
          }
        }, t.DataTextureLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = new La(), a2 = new uc(this.manager);
            return a2.setResponseType("arraybuffer"), a2.setRequestHeader(this.requestHeader), a2.setPath(this.path), a2.setWithCredentials(r2.withCredentials), a2.load(t2, function(t3) {
              const i3 = r2.parse(t3);
              i3 && (void 0 !== i3.image ? s2.image = i3.image : void 0 !== i3.data && (s2.image.width = i3.width, s2.image.height = i3.height, s2.image.data = i3.data), s2.wrapS = void 0 !== i3.wrapS ? i3.wrapS : h, s2.wrapT = void 0 !== i3.wrapT ? i3.wrapT : h, s2.magFilter = void 0 !== i3.magFilter ? i3.magFilter : f, s2.minFilter = void 0 !== i3.minFilter ? i3.minFilter : f, s2.anisotropy = void 0 !== i3.anisotropy ? i3.anisotropy : 1, void 0 !== i3.encoding && (s2.encoding = i3.encoding), void 0 !== i3.flipY && (s2.flipY = i3.flipY), void 0 !== i3.format && (s2.format = i3.format), void 0 !== i3.type && (s2.type = i3.type), void 0 !== i3.mipmaps && (s2.mipmaps = i3.mipmaps, s2.minFilter = v), 1 === i3.mipmapCount && (s2.minFilter = f), void 0 !== i3.generateMipmaps && (s2.generateMipmaps = i3.generateMipmaps), s2.needsUpdate = true, e2 && e2(s2, i3));
            }, i2, n2), s2;
          }
        }, t.DataUtils = Bh, t.DecrementStencilOp = 7683, t.DecrementWrapStencilOp = 34056, t.DefaultLoadingManager = oc, t.DepthFormat = T, t.DepthStencilFormat = A, t.DepthTexture = js, t.DirectionalLight = Ec, t.DirectionalLightHelper = class extends si {
          constructor(t2, e2, i2) {
            super(), this.light = t2, this.light.updateMatrixWorld(), this.matrix = t2.matrixWorld, this.matrixAutoUpdate = false, this.color = i2, void 0 === e2 && (e2 = 1);
            let n2 = new Di();
            n2.setAttribute("position", new Ti([-e2, e2, 0, e2, e2, 0, e2, -e2, 0, -e2, -e2, 0, -e2, e2, 0], 3));
            const r2 = new Fa({ fog: false, toneMapped: false });
            this.lightPlane = new ja(n2, r2), this.add(this.lightPlane), n2 = new Di(), n2.setAttribute("position", new Ti([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new ja(n2, r2), this.add(this.targetLine), this.update();
          }
          dispose() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
          }
          update() {
            Ah.setFromMatrixPosition(this.light.matrixWorld), Eh.setFromMatrixPosition(this.light.target.matrixWorld), Ch.subVectors(Eh, Ah), this.lightPlane.lookAt(Eh), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Eh), this.targetLine.scale.z = Ch.length();
          }
        }, t.DiscreteInterpolant = Yl, t.DodecahedronBufferGeometry = class extends Do {
          constructor(t2, e2) {
            console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."), super(t2, e2);
          }
        }, t.DodecahedronGeometry = Do, t.DoubleSide = 2, t.DstAlphaFactor = 206, t.DstColorFactor = 208, t.DynamicCopyUsage = 35050, t.DynamicDrawUsage = 35048, t.DynamicReadUsage = 35049, t.EdgesGeometry = Bo, t.EllipseCurve = so, t.EqualDepth = 4, t.EqualStencilFunc = 514, t.EquirectangularReflectionMapping = a, t.EquirectangularRefractionMapping = o, t.Euler = We, t.EventDispatcher = mt, t.ExtrudeBufferGeometry = class extends ml {
          constructor(t2, e2) {
            console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."), super(t2, e2);
          }
        }, t.ExtrudeGeometry = ml, t.FileLoader = uc, t.Float16BufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Uint16Array(t2), e2, i2), this.isFloat16BufferAttribute = true;
          }
        }, t.Float32BufferAttribute = Ti, t.Float64BufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Float64Array(t2), e2, i2);
          }
        }, t.FloatType = M, t.Fog = $s, t.FogExp2 = Ks, t.FramebufferTexture = class extends Kt {
          constructor(t2, e2, i2) {
            super({ width: t2, height: e2 }), this.isFramebufferTexture = true, this.format = i2, this.magFilter = d, this.minFilter = d, this.generateMipmaps = false, this.needsUpdate = true;
          }
        }, t.FrontSide = 0, t.Frustum = vn, t.GLBufferAttribute = class {
          constructor(t2, e2, i2, n2, r2) {
            this.isGLBufferAttribute = true, this.buffer = t2, this.type = e2, this.itemSize = i2, this.elementSize = n2, this.count = r2, this.version = 0;
          }
          set needsUpdate(t2) {
            true === t2 && this.version++;
          }
          setBuffer(t2) {
            return this.buffer = t2, this;
          }
          setType(t2, e2) {
            return this.type = t2, this.elementSize = e2, this;
          }
          setItemSize(t2) {
            return this.itemSize = t2, this;
          }
          setCount(t2) {
            return this.count = t2, this;
          }
        }, t.GLSL1 = "100", t.GLSL3 = dt, t.GreaterDepth = 6, t.GreaterEqualDepth = 5, t.GreaterEqualStencilFunc = 518, t.GreaterStencilFunc = 516, t.GridHelper = class extends Ya {
          constructor(t2 = 10, e2 = 10, i2 = 4473924, n2 = 8947848) {
            i2 = new jt(i2), n2 = new jt(n2);
            const r2 = e2 / 2, s2 = t2 / e2, a2 = t2 / 2, o2 = [], l2 = [];
            for (let t3 = 0, c3 = 0, h2 = -a2; t3 <= e2; t3++, h2 += s2) {
              o2.push(-a2, 0, h2, a2, 0, h2), o2.push(h2, 0, -a2, h2, 0, a2);
              const e3 = t3 === r2 ? i2 : n2;
              e3.toArray(l2, c3), c3 += 3, e3.toArray(l2, c3), c3 += 3, e3.toArray(l2, c3), c3 += 3, e3.toArray(l2, c3), c3 += 3;
            }
            const c2 = new Di();
            c2.setAttribute("position", new Ti(o2, 3)), c2.setAttribute("color", new Ti(l2, 3));
            super(c2, new Fa({ vertexColors: true, toneMapped: false })), this.type = "GridHelper";
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.Group = Vs, t.HalfFloatType = b, t.HemisphereLight = mc, t.HemisphereLightHelper = class extends si {
          constructor(t2, e2, i2) {
            super(), this.light = t2, this.light.updateMatrixWorld(), this.matrix = t2.matrixWorld, this.matrixAutoUpdate = false, this.color = i2;
            const n2 = new vl(e2);
            n2.rotateY(0.5 * Math.PI), this.material = new _i({ wireframe: true, fog: false, toneMapped: false }), void 0 === this.color && (this.material.vertexColors = true);
            const r2 = n2.getAttribute("position"), s2 = new Float32Array(3 * r2.count);
            n2.setAttribute("color", new bi(s2, 3)), this.add(new Ki(n2, this.material)), this.update();
          }
          dispose() {
            this.children[0].geometry.dispose(), this.children[0].material.dispose();
          }
          update() {
            const t2 = this.children[0];
            if (void 0 !== this.color)
              this.material.color.set(this.color);
            else {
              const e2 = t2.geometry.getAttribute("color");
              wh.copy(this.light.color), Th.copy(this.light.groundColor);
              for (let t3 = 0, i2 = e2.count; t3 < i2; t3++) {
                const n2 = t3 < i2 / 2 ? wh : Th;
                e2.setXYZ(t3, n2.r, n2.g, n2.b);
              }
              e2.needsUpdate = true;
            }
            t2.lookAt(Sh.setFromMatrixPosition(this.light.matrixWorld).negate());
          }
        }, t.HemisphereLightProbe = class extends Pc {
          constructor(t2, e2, i2 = 1) {
            super(void 0, i2), this.isHemisphereLightProbe = true;
            const n2 = new jt().set(t2), r2 = new jt().set(e2), s2 = new ne(n2.r, n2.g, n2.b), a2 = new ne(r2.r, r2.g, r2.b), o2 = Math.sqrt(Math.PI), l2 = o2 * Math.sqrt(0.75);
            this.sh.coefficients[0].copy(s2).add(a2).multiplyScalar(o2), this.sh.coefficients[1].copy(s2).sub(a2).multiplyScalar(l2);
          }
        }, t.IcosahedronBufferGeometry = class extends gl {
          constructor(t2, e2) {
            console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."), super(t2, e2);
          }
        }, t.IcosahedronGeometry = gl, t.ImageBitmapLoader = class extends lc {
          constructor(t2) {
            super(t2), this.isImageBitmapLoader = true, "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
          }
          setOptions(t2) {
            return this.options = t2, this;
          }
          load(t2, e2, i2, n2) {
            void 0 === t2 && (t2 = ""), void 0 !== this.path && (t2 = this.path + t2), t2 = this.manager.resolveURL(t2);
            const r2 = this, s2 = sc.get(t2);
            if (void 0 !== s2)
              return r2.manager.itemStart(t2), setTimeout(function() {
                e2 && e2(s2), r2.manager.itemEnd(t2);
              }, 0), s2;
            const a2 = {};
            a2.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", a2.headers = this.requestHeader, fetch(t2, a2).then(function(t3) {
              return t3.blob();
            }).then(function(t3) {
              return createImageBitmap(t3, Object.assign(r2.options, { colorSpaceConversion: "none" }));
            }).then(function(i3) {
              sc.add(t2, i3), e2 && e2(i3), r2.manager.itemEnd(t2);
            }).catch(function(e3) {
              n2 && n2(e3), r2.manager.itemError(t2), r2.manager.itemEnd(t2);
            }), r2.manager.itemStart(t2);
          }
        }, t.ImageLoader = dc, t.ImageUtils = Xt, t.ImmediateRenderObject = function() {
          console.error("THREE.ImmediateRenderObject has been removed.");
        }, t.IncrementStencilOp = 7682, t.IncrementWrapStencilOp = 34055, t.InstancedBufferAttribute = Da, t.InstancedBufferGeometry = Nc, t.InstancedInterleavedBuffer = class extends ta {
          constructor(t2, e2, i2 = 1) {
            super(t2, e2), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = i2;
          }
          copy(t2) {
            return super.copy(t2), this.meshPerAttribute = t2.meshPerAttribute, this;
          }
          clone(t2) {
            const e2 = super.clone(t2);
            return e2.meshPerAttribute = this.meshPerAttribute, e2;
          }
          toJSON(t2) {
            const e2 = super.toJSON(t2);
            return e2.isInstancedInterleavedBuffer = true, e2.meshPerAttribute = this.meshPerAttribute, e2;
          }
        }, t.InstancedMesh = Ba, t.Int16BufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Int16Array(t2), e2, i2);
          }
        }, t.Int32BufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Int32Array(t2), e2, i2);
          }
        }, t.Int8BufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Int8Array(t2), e2, i2);
          }
        }, t.IntType = 1013, t.InterleavedBuffer = ta, t.InterleavedBufferAttribute = ia, t.Interpolant = jl, t.InterpolateDiscrete = $, t.InterpolateLinear = Q, t.InterpolateSmooth = tt, t.InvertStencilOp = 5386, t.KeepStencilOp = ht, t.KeyframeTrack = Zl, t.LOD = Ma, t.LatheBufferGeometry = class extends Eo {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."), super(t2, e2, i2, n2);
          }
        }, t.LatheGeometry = Eo, t.Layers = je, t.LessDepth = 2, t.LessEqualDepth = 3, t.LessEqualStencilFunc = 515, t.LessStencilFunc = 513, t.Light = pc, t.LightProbe = Pc, t.Line = ja, t.Line3 = class {
          constructor(t2 = new ne(), e2 = new ne()) {
            this.start = t2, this.end = e2;
          }
          set(t2, e2) {
            return this.start.copy(t2), this.end.copy(e2), this;
          }
          copy(t2) {
            return this.start.copy(t2.start), this.end.copy(t2.end), this;
          }
          getCenter(t2) {
            return t2.addVectors(this.start, this.end).multiplyScalar(0.5);
          }
          delta(t2) {
            return t2.subVectors(this.end, this.start);
          }
          distanceSq() {
            return this.start.distanceToSquared(this.end);
          }
          distance() {
            return this.start.distanceTo(this.end);
          }
          at(t2, e2) {
            return this.delta(e2).multiplyScalar(t2).add(this.start);
          }
          closestPointToPointParameter(t2, e2) {
            gh.subVectors(t2, this.start), vh.subVectors(this.end, this.start);
            const i2 = vh.dot(vh);
            let n2 = vh.dot(gh) / i2;
            return e2 && (n2 = yt(n2, 0, 1)), n2;
          }
          closestPointToPoint(t2, e2, i2) {
            const n2 = this.closestPointToPointParameter(t2, e2);
            return this.delta(i2).multiplyScalar(n2).add(this.start);
          }
          applyMatrix4(t2) {
            return this.start.applyMatrix4(t2), this.end.applyMatrix4(t2), this;
          }
          equals(t2) {
            return t2.start.equals(this.start) && t2.end.equals(this.end);
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }, t.LineBasicMaterial = Fa, t.LineCurve = _o, t.LineCurve3 = yo, t.LineDashedMaterial = Ul, t.LineLoop = Za, t.LineSegments = Ya, t.LinearEncoding = at, t.LinearFilter = f, t.LinearInterpolant = Xl, t.LinearMipMapLinearFilter = 1008, t.LinearMipMapNearestFilter = 1007, t.LinearMipmapLinearFilter = v, t.LinearMipmapNearestFilter = g, t.LinearSRGBColorSpace = ct, t.LinearToneMapping = 1, t.Loader = lc, t.LoaderUtils = Dc, t.LoadingManager = ac, t.LoopOnce = 2200, t.LoopPingPong = 2202, t.LoopRepeat = 2201, t.LuminanceAlphaFormat = 1025, t.LuminanceFormat = 1024, t.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, t.Material = xi, t.MaterialLoader = Ic, t.MathUtils = Ct, t.Matrix3 = Rt, t.Matrix4 = Ne, t.MaxEquation = 104, t.Mesh = Ki, t.MeshBasicMaterial = _i, t.MeshDepthMaterial = Os, t.MeshDistanceMaterial = zs, t.MeshLambertMaterial = Ol, t.MeshMatcapMaterial = zl, t.MeshNormalMaterial = Nl, t.MeshPhongMaterial = Il, t.MeshPhysicalMaterial = Pl, t.MeshStandardMaterial = Rl, t.MeshToonMaterial = Dl, t.MinEquation = 103, t.MirroredRepeatWrapping = u, t.MixOperation = 1, t.MultiplyBlending = 4, t.MultiplyOperation = 0, t.NearestFilter = d, t.NearestMipMapLinearFilter = 1005, t.NearestMipMapNearestFilter = 1004, t.NearestMipmapLinearFilter = m, t.NearestMipmapNearestFilter = p, t.NeverDepth = 0, t.NeverStencilFunc = 512, t.NoBlending = 0, t.NoColorSpace = "", t.NoToneMapping = 0, t.NormalAnimationBlendMode = rt, t.NormalBlending = 1, t.NotEqualDepth = 7, t.NotEqualStencilFunc = 517, t.NumberKeyframeTrack = $l, t.Object3D = si, t.ObjectLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = this, s2 = "" === this.path ? Dc.extractUrlBase(t2) : this.path;
            this.resourcePath = this.resourcePath || s2;
            const a2 = new uc(this.manager);
            a2.setPath(this.path), a2.setRequestHeader(this.requestHeader), a2.setWithCredentials(this.withCredentials), a2.load(t2, function(i3) {
              let s3 = null;
              try {
                s3 = JSON.parse(i3);
              } catch (e3) {
                return void 0 !== n2 && n2(e3), void console.error("THREE:ObjectLoader: Can't parse " + t2 + ".", e3.message);
              }
              const a3 = s3.metadata;
              void 0 !== a3 && void 0 !== a3.type && "geometry" !== a3.type.toLowerCase() ? r2.parse(s3, e2) : console.error("THREE.ObjectLoader: Can't load " + t2);
            }, i2, n2);
          }
          async loadAsync(t2, e2) {
            const i2 = "" === this.path ? Dc.extractUrlBase(t2) : this.path;
            this.resourcePath = this.resourcePath || i2;
            const n2 = new uc(this.manager);
            n2.setPath(this.path), n2.setRequestHeader(this.requestHeader), n2.setWithCredentials(this.withCredentials);
            const r2 = await n2.loadAsync(t2, e2), s2 = JSON.parse(r2), a2 = s2.metadata;
            if (void 0 === a2 || void 0 === a2.type || "geometry" === a2.type.toLowerCase())
              throw new Error("THREE.ObjectLoader: Can't load " + t2);
            return await this.parseAsync(s2);
          }
          parse(t2, e2) {
            const i2 = this.parseAnimations(t2.animations), n2 = this.parseShapes(t2.shapes), r2 = this.parseGeometries(t2.geometries, n2), s2 = this.parseImages(t2.images, function() {
              void 0 !== e2 && e2(l2);
            }), a2 = this.parseTextures(t2.textures, s2), o2 = this.parseMaterials(t2.materials, a2), l2 = this.parseObject(t2.object, r2, o2, a2, i2), c2 = this.parseSkeletons(t2.skeletons, l2);
            if (this.bindSkeletons(l2, c2), void 0 !== e2) {
              let t3 = false;
              for (const e3 in s2)
                if (s2[e3].data instanceof HTMLImageElement) {
                  t3 = true;
                  break;
                }
              false === t3 && e2(l2);
            }
            return l2;
          }
          async parseAsync(t2) {
            const e2 = this.parseAnimations(t2.animations), i2 = this.parseShapes(t2.shapes), n2 = this.parseGeometries(t2.geometries, i2), r2 = await this.parseImagesAsync(t2.images), s2 = this.parseTextures(t2.textures, r2), a2 = this.parseMaterials(t2.materials, s2), o2 = this.parseObject(t2.object, n2, a2, s2, e2), l2 = this.parseSkeletons(t2.skeletons, o2);
            return this.bindSkeletons(o2, l2), o2;
          }
          parseShapes(t2) {
            const e2 = {};
            if (void 0 !== t2)
              for (let i2 = 0, n2 = t2.length; i2 < n2; i2++) {
                const n3 = new Fo().fromJSON(t2[i2]);
                e2[n3.uuid] = n3;
              }
            return e2;
          }
          parseSkeletons(t2, e2) {
            const i2 = {}, n2 = {};
            if (e2.traverse(function(t3) {
              t3.isBone && (n2[t3.uuid] = t3);
            }), void 0 !== t2)
              for (let e3 = 0, r2 = t2.length; e3 < r2; e3++) {
                const r3 = new Ia().fromJSON(t2[e3], n2);
                i2[r3.uuid] = r3;
              }
            return i2;
          }
          parseGeometries(t2, e2) {
            const i2 = {};
            if (void 0 !== t2) {
              const n2 = new Oc();
              for (let r2 = 0, s2 = t2.length; r2 < s2; r2++) {
                let s3;
                const a2 = t2[r2];
                switch (a2.type) {
                  case "BufferGeometry":
                  case "InstancedBufferGeometry":
                    s3 = n2.parse(a2);
                    break;
                  default:
                    a2.type in El ? s3 = El[a2.type].fromJSON(a2, e2) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a2.type}"`);
                }
                s3.uuid = a2.uuid, void 0 !== a2.name && (s3.name = a2.name), true === s3.isBufferGeometry && void 0 !== a2.userData && (s3.userData = a2.userData), i2[a2.uuid] = s3;
              }
            }
            return i2;
          }
          parseMaterials(t2, e2) {
            const i2 = {}, n2 = {};
            if (void 0 !== t2) {
              const r2 = new Ic();
              r2.setTextures(e2);
              for (let e3 = 0, s2 = t2.length; e3 < s2; e3++) {
                const s3 = t2[e3];
                void 0 === i2[s3.uuid] && (i2[s3.uuid] = r2.parse(s3)), n2[s3.uuid] = i2[s3.uuid];
              }
            }
            return n2;
          }
          parseAnimations(t2) {
            const e2 = {};
            if (void 0 !== t2)
              for (let i2 = 0; i2 < t2.length; i2++) {
                const n2 = t2[i2], r2 = nc.parse(n2);
                e2[r2.uuid] = r2;
              }
            return e2;
          }
          parseImages(t2, e2) {
            const i2 = this, n2 = {};
            let r2;
            function s2(t3) {
              if ("string" == typeof t3) {
                const e3 = t3;
                return function(t4) {
                  return i2.manager.itemStart(t4), r2.load(t4, function() {
                    i2.manager.itemEnd(t4);
                  }, void 0, function() {
                    i2.manager.itemError(t4), i2.manager.itemEnd(t4);
                  });
                }(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e3) ? e3 : i2.resourcePath + e3);
              }
              return t3.data ? { data: Dt(t3.type, t3.data), width: t3.width, height: t3.height } : null;
            }
            if (void 0 !== t2 && t2.length > 0) {
              const i3 = new ac(e2);
              r2 = new dc(i3), r2.setCrossOrigin(this.crossOrigin);
              for (let e3 = 0, i4 = t2.length; e3 < i4; e3++) {
                const i5 = t2[e3], r3 = i5.url;
                if (Array.isArray(r3)) {
                  const t3 = [];
                  for (let e4 = 0, i6 = r3.length; e4 < i6; e4++) {
                    const i7 = s2(r3[e4]);
                    null !== i7 && (i7 instanceof HTMLImageElement ? t3.push(i7) : t3.push(new La(i7.data, i7.width, i7.height)));
                  }
                  n2[i5.uuid] = new Yt(t3);
                } else {
                  const t3 = s2(i5.url);
                  n2[i5.uuid] = new Yt(t3);
                }
              }
            }
            return n2;
          }
          async parseImagesAsync(t2) {
            const e2 = this, i2 = {};
            let n2;
            async function r2(t3) {
              if ("string" == typeof t3) {
                const i3 = t3, r3 = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(i3) ? i3 : e2.resourcePath + i3;
                return await n2.loadAsync(r3);
              }
              return t3.data ? { data: Dt(t3.type, t3.data), width: t3.width, height: t3.height } : null;
            }
            if (void 0 !== t2 && t2.length > 0) {
              n2 = new dc(this.manager), n2.setCrossOrigin(this.crossOrigin);
              for (let e3 = 0, n3 = t2.length; e3 < n3; e3++) {
                const n4 = t2[e3], s2 = n4.url;
                if (Array.isArray(s2)) {
                  const t3 = [];
                  for (let e4 = 0, i3 = s2.length; e4 < i3; e4++) {
                    const i4 = s2[e4], n5 = await r2(i4);
                    null !== n5 && (n5 instanceof HTMLImageElement ? t3.push(n5) : t3.push(new La(n5.data, n5.width, n5.height)));
                  }
                  i2[n4.uuid] = new Yt(t3);
                } else {
                  const t3 = await r2(n4.url);
                  i2[n4.uuid] = new Yt(t3);
                }
              }
            }
            return i2;
          }
          parseTextures(t2, e2) {
            function i2(t3, e3) {
              return "number" == typeof t3 ? t3 : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t3), e3[t3]);
            }
            const n2 = {};
            if (void 0 !== t2)
              for (let r2 = 0, s2 = t2.length; r2 < s2; r2++) {
                const s3 = t2[r2];
                void 0 === s3.image && console.warn('THREE.ObjectLoader: No "image" specified for', s3.uuid), void 0 === e2[s3.image] && console.warn("THREE.ObjectLoader: Undefined image", s3.image);
                const a2 = e2[s3.image], o2 = a2.data;
                let l2;
                Array.isArray(o2) ? (l2 = new cn(), 6 === o2.length && (l2.needsUpdate = true)) : (l2 = o2 && o2.data ? new La() : new Kt(), o2 && (l2.needsUpdate = true)), l2.source = a2, l2.uuid = s3.uuid, void 0 !== s3.name && (l2.name = s3.name), void 0 !== s3.mapping && (l2.mapping = i2(s3.mapping, zc)), void 0 !== s3.offset && l2.offset.fromArray(s3.offset), void 0 !== s3.repeat && l2.repeat.fromArray(s3.repeat), void 0 !== s3.center && l2.center.fromArray(s3.center), void 0 !== s3.rotation && (l2.rotation = s3.rotation), void 0 !== s3.wrap && (l2.wrapS = i2(s3.wrap[0], Uc), l2.wrapT = i2(s3.wrap[1], Uc)), void 0 !== s3.format && (l2.format = s3.format), void 0 !== s3.type && (l2.type = s3.type), void 0 !== s3.encoding && (l2.encoding = s3.encoding), void 0 !== s3.minFilter && (l2.minFilter = i2(s3.minFilter, Bc)), void 0 !== s3.magFilter && (l2.magFilter = i2(s3.magFilter, Bc)), void 0 !== s3.anisotropy && (l2.anisotropy = s3.anisotropy), void 0 !== s3.flipY && (l2.flipY = s3.flipY), void 0 !== s3.premultiplyAlpha && (l2.premultiplyAlpha = s3.premultiplyAlpha), void 0 !== s3.unpackAlignment && (l2.unpackAlignment = s3.unpackAlignment), void 0 !== s3.userData && (l2.userData = s3.userData), n2[s3.uuid] = l2;
              }
            return n2;
          }
          parseObject(t2, e2, i2, n2, r2) {
            let s2, a2, o2;
            function l2(t3) {
              return void 0 === e2[t3] && console.warn("THREE.ObjectLoader: Undefined geometry", t3), e2[t3];
            }
            function c2(t3) {
              if (void 0 !== t3) {
                if (Array.isArray(t3)) {
                  const e3 = [];
                  for (let n3 = 0, r3 = t3.length; n3 < r3; n3++) {
                    const r4 = t3[n3];
                    void 0 === i2[r4] && console.warn("THREE.ObjectLoader: Undefined material", r4), e3.push(i2[r4]);
                  }
                  return e3;
                }
                return void 0 === i2[t3] && console.warn("THREE.ObjectLoader: Undefined material", t3), i2[t3];
              }
            }
            function h2(t3) {
              return void 0 === n2[t3] && console.warn("THREE.ObjectLoader: Undefined texture", t3), n2[t3];
            }
            switch (t2.type) {
              case "Scene":
                s2 = new Qs(), void 0 !== t2.background && (Number.isInteger(t2.background) ? s2.background = new jt(t2.background) : s2.background = h2(t2.background)), void 0 !== t2.environment && (s2.environment = h2(t2.environment)), void 0 !== t2.fog && ("Fog" === t2.fog.type ? s2.fog = new $s(t2.fog.color, t2.fog.near, t2.fog.far) : "FogExp2" === t2.fog.type && (s2.fog = new Ks(t2.fog.color, t2.fog.density)));
                break;
              case "PerspectiveCamera":
                s2 = new an(t2.fov, t2.aspect, t2.near, t2.far), void 0 !== t2.focus && (s2.focus = t2.focus), void 0 !== t2.zoom && (s2.zoom = t2.zoom), void 0 !== t2.filmGauge && (s2.filmGauge = t2.filmGauge), void 0 !== t2.filmOffset && (s2.filmOffset = t2.filmOffset), void 0 !== t2.view && (s2.view = Object.assign({}, t2.view));
                break;
              case "OrthographicCamera":
                s2 = new Rn(t2.left, t2.right, t2.top, t2.bottom, t2.near, t2.far), void 0 !== t2.zoom && (s2.zoom = t2.zoom), void 0 !== t2.view && (s2.view = Object.assign({}, t2.view));
                break;
              case "AmbientLight":
                s2 = new Cc(t2.color, t2.intensity);
                break;
              case "DirectionalLight":
                s2 = new Ec(t2.color, t2.intensity);
                break;
              case "PointLight":
                s2 = new Tc(t2.color, t2.intensity, t2.distance, t2.decay);
                break;
              case "RectAreaLight":
                s2 = new Lc(t2.color, t2.intensity, t2.width, t2.height);
                break;
              case "SpotLight":
                s2 = new yc(t2.color, t2.intensity, t2.distance, t2.angle, t2.penumbra, t2.decay);
                break;
              case "HemisphereLight":
                s2 = new mc(t2.color, t2.groundColor, t2.intensity);
                break;
              case "LightProbe":
                s2 = new Pc().fromJSON(t2);
                break;
              case "SkinnedMesh":
                a2 = l2(t2.geometry), o2 = c2(t2.material), s2 = new Ea(a2, o2), void 0 !== t2.bindMode && (s2.bindMode = t2.bindMode), void 0 !== t2.bindMatrix && s2.bindMatrix.fromArray(t2.bindMatrix), void 0 !== t2.skeleton && (s2.skeleton = t2.skeleton);
                break;
              case "Mesh":
                a2 = l2(t2.geometry), o2 = c2(t2.material), s2 = new Ki(a2, o2);
                break;
              case "InstancedMesh":
                a2 = l2(t2.geometry), o2 = c2(t2.material);
                const e3 = t2.count, i3 = t2.instanceMatrix, n3 = t2.instanceColor;
                s2 = new Ba(a2, o2, e3), s2.instanceMatrix = new Da(new Float32Array(i3.array), 16), void 0 !== n3 && (s2.instanceColor = new Da(new Float32Array(n3.array), n3.itemSize));
                break;
              case "LOD":
                s2 = new Ma();
                break;
              case "Line":
                s2 = new ja(l2(t2.geometry), c2(t2.material));
                break;
              case "LineLoop":
                s2 = new Za(l2(t2.geometry), c2(t2.material));
                break;
              case "LineSegments":
                s2 = new Ya(l2(t2.geometry), c2(t2.material));
                break;
              case "PointCloud":
              case "Points":
                s2 = new eo(l2(t2.geometry), c2(t2.material));
                break;
              case "Sprite":
                s2 = new va(c2(t2.material));
                break;
              case "Group":
                s2 = new Vs();
                break;
              case "Bone":
                s2 = new Ca();
                break;
              default:
                s2 = new si();
            }
            if (s2.uuid = t2.uuid, void 0 !== t2.name && (s2.name = t2.name), void 0 !== t2.matrix ? (s2.matrix.fromArray(t2.matrix), void 0 !== t2.matrixAutoUpdate && (s2.matrixAutoUpdate = t2.matrixAutoUpdate), s2.matrixAutoUpdate && s2.matrix.decompose(s2.position, s2.quaternion, s2.scale)) : (void 0 !== t2.position && s2.position.fromArray(t2.position), void 0 !== t2.rotation && s2.rotation.fromArray(t2.rotation), void 0 !== t2.quaternion && s2.quaternion.fromArray(t2.quaternion), void 0 !== t2.scale && s2.scale.fromArray(t2.scale)), void 0 !== t2.castShadow && (s2.castShadow = t2.castShadow), void 0 !== t2.receiveShadow && (s2.receiveShadow = t2.receiveShadow), t2.shadow && (void 0 !== t2.shadow.bias && (s2.shadow.bias = t2.shadow.bias), void 0 !== t2.shadow.normalBias && (s2.shadow.normalBias = t2.shadow.normalBias), void 0 !== t2.shadow.radius && (s2.shadow.radius = t2.shadow.radius), void 0 !== t2.shadow.mapSize && s2.shadow.mapSize.fromArray(t2.shadow.mapSize), void 0 !== t2.shadow.camera && (s2.shadow.camera = this.parseObject(t2.shadow.camera))), void 0 !== t2.visible && (s2.visible = t2.visible), void 0 !== t2.frustumCulled && (s2.frustumCulled = t2.frustumCulled), void 0 !== t2.renderOrder && (s2.renderOrder = t2.renderOrder), void 0 !== t2.userData && (s2.userData = t2.userData), void 0 !== t2.layers && (s2.layers.mask = t2.layers), void 0 !== t2.children) {
              const a3 = t2.children;
              for (let t3 = 0; t3 < a3.length; t3++)
                s2.add(this.parseObject(a3[t3], e2, i2, n2, r2));
            }
            if (void 0 !== t2.animations) {
              const e3 = t2.animations;
              for (let t3 = 0; t3 < e3.length; t3++) {
                const i3 = e3[t3];
                s2.animations.push(r2[i3]);
              }
            }
            if ("LOD" === t2.type) {
              void 0 !== t2.autoUpdate && (s2.autoUpdate = t2.autoUpdate);
              const e3 = t2.levels;
              for (let t3 = 0; t3 < e3.length; t3++) {
                const i3 = e3[t3], n3 = s2.getObjectByProperty("uuid", i3.object);
                void 0 !== n3 && s2.addLevel(n3, i3.distance);
              }
            }
            return s2;
          }
          bindSkeletons(t2, e2) {
            0 !== Object.keys(e2).length && t2.traverse(function(t3) {
              if (true === t3.isSkinnedMesh && void 0 !== t3.skeleton) {
                const i2 = e2[t3.skeleton];
                void 0 === i2 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", t3.skeleton) : t3.bind(i2, t3.bindMatrix);
              }
            });
          }
        }, t.ObjectSpaceNormalMap = 1, t.OctahedronBufferGeometry = class extends vl {
          constructor(t2, e2) {
            console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."), super(t2, e2);
          }
        }, t.OctahedronGeometry = vl, t.OneFactor = 201, t.OneMinusDstAlphaFactor = 207, t.OneMinusDstColorFactor = 209, t.OneMinusSrcAlphaFactor = 205, t.OneMinusSrcColorFactor = 203, t.OrthographicCamera = Rn, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.PMREMGenerator = Fn, t.Path = Ao, t.PerspectiveCamera = an, t.Plane = mn, t.PlaneBufferGeometry = class extends yn {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."), super(t2, e2, i2, n2);
          }
        }, t.PlaneGeometry = yn, t.PlaneHelper = class extends ja {
          constructor(t2, e2 = 1, i2 = 16776960) {
            const n2 = i2, r2 = new Di();
            r2.setAttribute("position", new Ti([1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)), r2.computeBoundingSphere(), super(r2, new Fa({ color: n2, toneMapped: false })), this.type = "PlaneHelper", this.plane = t2, this.size = e2;
            const s2 = new Di();
            s2.setAttribute("position", new Ti([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3)), s2.computeBoundingSphere(), this.add(new Ki(s2, new _i({ color: n2, opacity: 0.2, transparent: true, depthWrite: false, toneMapped: false })));
          }
          updateMatrixWorld(t2) {
            this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(t2);
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
          }
        }, t.PointLight = Tc, t.PointLightHelper = class extends Ki {
          constructor(t2, e2, i2) {
            super(new yl(e2, 4, 2), new _i({ wireframe: true, fog: false, toneMapped: false })), this.light = t2, this.light.updateMatrixWorld(), this.color = i2, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = false, this.update();
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
          update() {
            void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
          }
        }, t.Points = eo, t.PointsMaterial = Ja, t.PolarGridHelper = class extends Ya {
          constructor(t2 = 10, e2 = 16, i2 = 8, n2 = 64, r2 = 4473924, s2 = 8947848) {
            r2 = new jt(r2), s2 = new jt(s2);
            const a2 = [], o2 = [];
            if (e2 > 1)
              for (let i3 = 0; i3 < e2; i3++) {
                const n3 = i3 / e2 * (2 * Math.PI), l3 = Math.sin(n3) * t2, c2 = Math.cos(n3) * t2;
                a2.push(0, 0, 0), a2.push(l3, 0, c2);
                const h2 = 1 & i3 ? r2 : s2;
                o2.push(h2.r, h2.g, h2.b), o2.push(h2.r, h2.g, h2.b);
              }
            for (let e3 = 0; e3 < i2; e3++) {
              const l3 = 1 & e3 ? r2 : s2, c2 = t2 - t2 / i2 * e3;
              for (let t3 = 0; t3 < n2; t3++) {
                let e4 = t3 / n2 * (2 * Math.PI), i3 = Math.sin(e4) * c2, r3 = Math.cos(e4) * c2;
                a2.push(i3, 0, r3), o2.push(l3.r, l3.g, l3.b), e4 = (t3 + 1) / n2 * (2 * Math.PI), i3 = Math.sin(e4) * c2, r3 = Math.cos(e4) * c2, a2.push(i3, 0, r3), o2.push(l3.r, l3.g, l3.b);
              }
            }
            const l2 = new Di();
            l2.setAttribute("position", new Ti(a2, 3)), l2.setAttribute("color", new Ti(o2, 3));
            super(l2, new Fa({ vertexColors: true, toneMapped: false })), this.type = "PolarGridHelper";
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.PolyhedronBufferGeometry = class extends Io {
          constructor(t2, e2, i2, n2) {
            console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."), super(t2, e2, i2, n2);
          }
        }, t.PolyhedronGeometry = Io, t.PositionalAudio = class extends Jc {
          constructor(t2) {
            super(t2), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
          }
          disconnect() {
            super.disconnect(), this.panner.disconnect(this.gain);
          }
          getOutput() {
            return this.panner;
          }
          getRefDistance() {
            return this.panner.refDistance;
          }
          setRefDistance(t2) {
            return this.panner.refDistance = t2, this;
          }
          getRolloffFactor() {
            return this.panner.rolloffFactor;
          }
          setRolloffFactor(t2) {
            return this.panner.rolloffFactor = t2, this;
          }
          getDistanceModel() {
            return this.panner.distanceModel;
          }
          setDistanceModel(t2) {
            return this.panner.distanceModel = t2, this;
          }
          getMaxDistance() {
            return this.panner.maxDistance;
          }
          setMaxDistance(t2) {
            return this.panner.maxDistance = t2, this;
          }
          setDirectionalCone(t2, e2, i2) {
            return this.panner.coneInnerAngle = t2, this.panner.coneOuterAngle = e2, this.panner.coneOuterGain = i2, this;
          }
          updateMatrixWorld(t2) {
            if (super.updateMatrixWorld(t2), true === this.hasPlaybackControl && false === this.isPlaying)
              return;
            this.matrixWorld.decompose(Kc, $c, Qc), th.set(0, 0, 1).applyQuaternion($c);
            const e2 = this.panner;
            if (e2.positionX) {
              const t3 = this.context.currentTime + this.listener.timeDelta;
              e2.positionX.linearRampToValueAtTime(Kc.x, t3), e2.positionY.linearRampToValueAtTime(Kc.y, t3), e2.positionZ.linearRampToValueAtTime(Kc.z, t3), e2.orientationX.linearRampToValueAtTime(th.x, t3), e2.orientationY.linearRampToValueAtTime(th.y, t3), e2.orientationZ.linearRampToValueAtTime(th.z, t3);
            } else
              e2.setPosition(Kc.x, Kc.y, Kc.z), e2.setOrientation(th.x, th.y, th.z);
          }
        }, t.PropertyBinding = lh, t.PropertyMixer = eh, t.QuadraticBezierCurve = Mo, t.QuadraticBezierCurve3 = bo, t.Quaternion = ie, t.QuaternionKeyframeTrack = tc, t.QuaternionLinearInterpolant = Ql, t.REVISION = e, t.RGBADepthPacking = 3201, t.RGBAFormat = w, t.RGBAIntegerFormat = 1033, t.RGBA_ASTC_10x10_Format = Y, t.RGBA_ASTC_10x5_Format = j, t.RGBA_ASTC_10x6_Format = q, t.RGBA_ASTC_10x8_Format = X, t.RGBA_ASTC_12x10_Format = Z, t.RGBA_ASTC_12x12_Format = J, t.RGBA_ASTC_4x4_Format = U, t.RGBA_ASTC_5x4_Format = B, t.RGBA_ASTC_5x5_Format = F, t.RGBA_ASTC_6x5_Format = k, t.RGBA_ASTC_6x6_Format = G, t.RGBA_ASTC_8x5_Format = V, t.RGBA_ASTC_8x6_Format = H, t.RGBA_ASTC_8x8_Format = W, t.RGBA_BPTC_Format = K, t.RGBA_ETC2_EAC_Format = z, t.RGBA_PVRTC_2BPPV1_Format = N, t.RGBA_PVRTC_4BPPV1_Format = D, t.RGBA_S3TC_DXT1_Format = C, t.RGBA_S3TC_DXT3_Format = L, t.RGBA_S3TC_DXT5_Format = R, t.RGBFormat = 1022, t.RGB_ETC1_Format = 36196, t.RGB_ETC2_Format = O, t.RGB_PVRTC_2BPPV1_Format = I, t.RGB_PVRTC_4BPPV1_Format = P, t.RGB_S3TC_DXT1_Format = E, t.RGFormat = 1030, t.RGIntegerFormat = 1031, t.RawShaderMaterial = Ll, t.Ray = De, t.Raycaster = class {
          constructor(t2, e2, i2 = 0, n2 = 1 / 0) {
            this.ray = new De(t2, e2), this.near = i2, this.far = n2, this.camera = null, this.layers = new je(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
          }
          set(t2, e2) {
            this.ray.set(t2, e2);
          }
          setFromCamera(t2, e2) {
            e2.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e2.matrixWorld), this.ray.direction.set(t2.x, t2.y, 0.5).unproject(e2).sub(this.ray.origin).normalize(), this.camera = e2) : e2.isOrthographicCamera ? (this.ray.origin.set(t2.x, t2.y, (e2.near + e2.far) / (e2.near - e2.far)).unproject(e2), this.ray.direction.set(0, 0, -1).transformDirection(e2.matrixWorld), this.camera = e2) : console.error("THREE.Raycaster: Unsupported camera type: " + e2.type);
          }
          intersectObject(t2, e2 = true, i2 = []) {
            return mh(t2, this, i2, e2), i2.sort(ph), i2;
          }
          intersectObjects(t2, e2 = true, i2 = []) {
            for (let n2 = 0, r2 = t2.length; n2 < r2; n2++)
              mh(t2[n2], this, i2, e2);
            return i2.sort(ph), i2;
          }
        }, t.RectAreaLight = Lc, t.RedFormat = 1028, t.RedIntegerFormat = 1029, t.ReinhardToneMapping = 2, t.RepeatWrapping = c, t.ReplaceStencilOp = 7681, t.ReverseSubtractEquation = 102, t.RingBufferGeometry = class extends xl {
          constructor(t2, e2, i2, n2, r2, s2) {
            console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."), super(t2, e2, i2, n2, r2, s2);
          }
        }, t.RingGeometry = xl, t.SRGBColorSpace = lt, t.Scene = Qs, t.ShaderChunk = Mn, t.ShaderLib = Sn, t.ShaderMaterial = rn, t.ShadowMaterial = Cl, t.Shape = Fo, t.ShapeBufferGeometry = class extends _l {
          constructor(t2, e2) {
            console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."), super(t2, e2);
          }
        }, t.ShapeGeometry = _l, t.ShapePath = class {
          constructor() {
            this.type = "ShapePath", this.color = new jt(), this.subPaths = [], this.currentPath = null;
          }
          moveTo(t2, e2) {
            return this.currentPath = new Ao(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t2, e2), this;
          }
          lineTo(t2, e2) {
            return this.currentPath.lineTo(t2, e2), this;
          }
          quadraticCurveTo(t2, e2, i2, n2) {
            return this.currentPath.quadraticCurveTo(t2, e2, i2, n2), this;
          }
          bezierCurveTo(t2, e2, i2, n2, r2, s2) {
            return this.currentPath.bezierCurveTo(t2, e2, i2, n2, r2, s2), this;
          }
          splineThru(t2) {
            return this.currentPath.splineThru(t2), this;
          }
          toShapes(t2) {
            function e2(t3, e3) {
              const i3 = e3.length;
              let n3 = false;
              for (let r3 = i3 - 1, s3 = 0; s3 < i3; r3 = s3++) {
                let i4 = e3[r3], a3 = e3[s3], o3 = a3.x - i4.x, l3 = a3.y - i4.y;
                if (Math.abs(l3) > Number.EPSILON) {
                  if (l3 < 0 && (i4 = e3[s3], o3 = -o3, a3 = e3[r3], l3 = -l3), t3.y < i4.y || t3.y > a3.y)
                    continue;
                  if (t3.y === i4.y) {
                    if (t3.x === i4.x)
                      return true;
                  } else {
                    const e4 = l3 * (t3.x - i4.x) - o3 * (t3.y - i4.y);
                    if (0 === e4)
                      return true;
                    if (e4 < 0)
                      continue;
                    n3 = !n3;
                  }
                } else {
                  if (t3.y !== i4.y)
                    continue;
                  if (a3.x <= t3.x && t3.x <= i4.x || i4.x <= t3.x && t3.x <= a3.x)
                    return true;
                }
              }
              return n3;
            }
            const i2 = ul.isClockWise, n2 = this.subPaths;
            if (0 === n2.length)
              return [];
            let r2, s2, a2;
            const o2 = [];
            if (1 === n2.length)
              return s2 = n2[0], a2 = new Fo(), a2.curves = s2.curves, o2.push(a2), o2;
            let l2 = !i2(n2[0].getPoints());
            l2 = t2 ? !l2 : l2;
            const c2 = [], h2 = [];
            let u2, d2, p2 = [], m2 = 0;
            h2[m2] = void 0, p2[m2] = [];
            for (let e3 = 0, a3 = n2.length; e3 < a3; e3++)
              s2 = n2[e3], u2 = s2.getPoints(), r2 = i2(u2), r2 = t2 ? !r2 : r2, r2 ? (!l2 && h2[m2] && m2++, h2[m2] = { s: new Fo(), p: u2 }, h2[m2].s.curves = s2.curves, l2 && m2++, p2[m2] = []) : p2[m2].push({ h: s2, p: u2[0] });
            if (!h2[0])
              return function(t3) {
                const e3 = [];
                for (let i3 = 0, n3 = t3.length; i3 < n3; i3++) {
                  const n4 = t3[i3], r3 = new Fo();
                  r3.curves = n4.curves, e3.push(r3);
                }
                return e3;
              }(n2);
            if (h2.length > 1) {
              let t3 = false, i3 = 0;
              for (let t4 = 0, e3 = h2.length; t4 < e3; t4++)
                c2[t4] = [];
              for (let n3 = 0, r3 = h2.length; n3 < r3; n3++) {
                const r4 = p2[n3];
                for (let s3 = 0; s3 < r4.length; s3++) {
                  const a3 = r4[s3];
                  let o3 = true;
                  for (let r5 = 0; r5 < h2.length; r5++)
                    e2(a3.p, h2[r5].p) && (n3 !== r5 && i3++, o3 ? (o3 = false, c2[r5].push(a3)) : t3 = true);
                  o3 && c2[n3].push(a3);
                }
              }
              i3 > 0 && false === t3 && (p2 = c2);
            }
            for (let t3 = 0, e3 = h2.length; t3 < e3; t3++) {
              a2 = h2[t3].s, o2.push(a2), d2 = p2[t3];
              for (let t4 = 0, e4 = d2.length; t4 < e4; t4++)
                a2.holes.push(d2[t4].h);
            }
            return o2;
          }
        }, t.ShapeUtils = ul, t.ShortType = 1011, t.Skeleton = Ia, t.SkeletonHelper = class extends Ya {
          constructor(t2) {
            const e2 = bh(t2), i2 = new Di(), n2 = [], r2 = [], s2 = new jt(0, 0, 1), a2 = new jt(0, 1, 0);
            for (let t3 = 0; t3 < e2.length; t3++) {
              const i3 = e2[t3];
              i3.parent && i3.parent.isBone && (n2.push(0, 0, 0), n2.push(0, 0, 0), r2.push(s2.r, s2.g, s2.b), r2.push(a2.r, a2.g, a2.b));
            }
            i2.setAttribute("position", new Ti(n2, 3)), i2.setAttribute("color", new Ti(r2, 3));
            super(i2, new Fa({ vertexColors: true, depthTest: false, depthWrite: false, toneMapped: false, transparent: true })), this.isSkeletonHelper = true, this.type = "SkeletonHelper", this.root = t2, this.bones = e2, this.matrix = t2.matrixWorld, this.matrixAutoUpdate = false;
          }
          updateMatrixWorld(t2) {
            const e2 = this.bones, i2 = this.geometry, n2 = i2.getAttribute("position");
            Mh.copy(this.root.matrixWorld).invert();
            for (let t3 = 0, i3 = 0; t3 < e2.length; t3++) {
              const r2 = e2[t3];
              r2.parent && r2.parent.isBone && (yh.multiplyMatrices(Mh, r2.matrixWorld), _h.setFromMatrixPosition(yh), n2.setXYZ(i3, _h.x, _h.y, _h.z), yh.multiplyMatrices(Mh, r2.parent.matrixWorld), _h.setFromMatrixPosition(yh), n2.setXYZ(i3 + 1, _h.x, _h.y, _h.z), i3 += 2);
            }
            i2.getAttribute("position").needsUpdate = true, super.updateMatrixWorld(t2);
          }
          dispose() {
            this.geometry.dispose(), this.material.dispose();
          }
        }, t.SkinnedMesh = Ea, t.Source = Yt, t.Sphere = Te, t.SphereBufferGeometry = class extends yl {
          constructor(t2, e2, i2, n2, r2, s2, a2) {
            console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."), super(t2, e2, i2, n2, r2, s2, a2);
          }
        }, t.SphereGeometry = yl, t.Spherical = class {
          constructor(t2 = 1, e2 = 0, i2 = 0) {
            return this.radius = t2, this.phi = e2, this.theta = i2, this;
          }
          set(t2, e2, i2) {
            return this.radius = t2, this.phi = e2, this.theta = i2, this;
          }
          copy(t2) {
            return this.radius = t2.radius, this.phi = t2.phi, this.theta = t2.theta, this;
          }
          makeSafe() {
            const t2 = 1e-6;
            return this.phi = Math.max(t2, Math.min(Math.PI - t2, this.phi)), this;
          }
          setFromVector3(t2) {
            return this.setFromCartesianCoords(t2.x, t2.y, t2.z);
          }
          setFromCartesianCoords(t2, e2, i2) {
            return this.radius = Math.sqrt(t2 * t2 + e2 * e2 + i2 * i2), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t2, i2), this.phi = Math.acos(yt(e2 / this.radius, -1, 1))), this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }, t.SphericalHarmonics3 = Rc, t.SplineCurve = So, t.SpotLight = yc, t.SpotLightHelper = class extends si {
          constructor(t2, e2) {
            super(), this.light = t2, this.light.updateMatrixWorld(), this.matrix = t2.matrixWorld, this.matrixAutoUpdate = false, this.color = e2;
            const i2 = new Di(), n2 = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
            for (let t3 = 0, e3 = 1, i3 = 32; t3 < i3; t3++, e3++) {
              const r3 = t3 / i3 * Math.PI * 2, s2 = e3 / i3 * Math.PI * 2;
              n2.push(Math.cos(r3), Math.sin(r3), 1, Math.cos(s2), Math.sin(s2), 1);
            }
            i2.setAttribute("position", new Ti(n2, 3));
            const r2 = new Fa({ fog: false, toneMapped: false });
            this.cone = new Ya(i2, r2), this.add(this.cone), this.update();
          }
          dispose() {
            this.cone.geometry.dispose(), this.cone.material.dispose();
          }
          update() {
            this.light.updateMatrixWorld();
            const t2 = this.light.distance ? this.light.distance : 1e3, e2 = t2 * Math.tan(this.light.angle);
            this.cone.scale.set(e2, e2, t2), xh.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(xh), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
          }
        }, t.Sprite = va, t.SpriteMaterial = na, t.SrcAlphaFactor = 204, t.SrcAlphaSaturateFactor = 210, t.SrcColorFactor = 202, t.StaticCopyUsage = 35046, t.StaticDrawUsage = ut, t.StaticReadUsage = 35045, t.StereoCamera = class {
          constructor() {
            this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new an(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = false, this.cameraR = new an(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = false, this._cache = { focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null };
          }
          update(t2) {
            const e2 = this._cache;
            if (e2.focus !== t2.focus || e2.fov !== t2.fov || e2.aspect !== t2.aspect * this.aspect || e2.near !== t2.near || e2.far !== t2.far || e2.zoom !== t2.zoom || e2.eyeSep !== this.eyeSep) {
              e2.focus = t2.focus, e2.fov = t2.fov, e2.aspect = t2.aspect * this.aspect, e2.near = t2.near, e2.far = t2.far, e2.zoom = t2.zoom, e2.eyeSep = this.eyeSep, Hc.copy(t2.projectionMatrix);
              const i2 = e2.eyeSep / 2, n2 = i2 * e2.near / e2.focus, r2 = e2.near * Math.tan(vt * e2.fov * 0.5) / e2.zoom;
              let s2, a2;
              Vc.elements[12] = -i2, Gc.elements[12] = i2, s2 = -r2 * e2.aspect + n2, a2 = r2 * e2.aspect + n2, Hc.elements[0] = 2 * e2.near / (a2 - s2), Hc.elements[8] = (a2 + s2) / (a2 - s2), this.cameraL.projectionMatrix.copy(Hc), s2 = -r2 * e2.aspect - n2, a2 = r2 * e2.aspect - n2, Hc.elements[0] = 2 * e2.near / (a2 - s2), Hc.elements[8] = (a2 + s2) / (a2 - s2), this.cameraR.projectionMatrix.copy(Hc);
            }
            this.cameraL.matrixWorld.copy(t2.matrixWorld).multiply(Vc), this.cameraR.matrixWorld.copy(t2.matrixWorld).multiply(Gc);
          }
        }, t.StreamCopyUsage = 35042, t.StreamDrawUsage = 35040, t.StreamReadUsage = 35041, t.StringKeyframeTrack = ec, t.SubtractEquation = 101, t.SubtractiveBlending = 3, t.TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, t.TangentSpaceNormalMap = 0, t.TetrahedronBufferGeometry = class extends Ml {
          constructor(t2, e2) {
            console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."), super(t2, e2);
          }
        }, t.TetrahedronGeometry = Ml, t.Texture = Kt, t.TextureLoader = class extends lc {
          constructor(t2) {
            super(t2);
          }
          load(t2, e2, i2, n2) {
            const r2 = new Kt(), s2 = new dc(this.manager);
            return s2.setCrossOrigin(this.crossOrigin), s2.setPath(this.path), s2.load(t2, function(t3) {
              r2.image = t3, r2.needsUpdate = true, void 0 !== e2 && e2(r2);
            }, i2, n2), r2;
          }
        }, t.TorusBufferGeometry = class extends bl {
          constructor(t2, e2, i2, n2, r2) {
            console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."), super(t2, e2, i2, n2, r2);
          }
        }, t.TorusGeometry = bl, t.TorusKnotBufferGeometry = class extends Sl {
          constructor(t2, e2, i2, n2, r2, s2) {
            console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."), super(t2, e2, i2, n2, r2, s2);
          }
        }, t.TorusKnotGeometry = Sl, t.Triangle = gi, t.TriangleFanDrawMode = 2, t.TriangleStripDrawMode = 1, t.TrianglesDrawMode = 0, t.TubeBufferGeometry = class extends wl {
          constructor(t2, e2, i2, n2, r2) {
            console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."), super(t2, e2, i2, n2, r2);
          }
        }, t.TubeGeometry = wl, t.UVMapping = n, t.Uint16BufferAttribute = Si, t.Uint32BufferAttribute = wi, t.Uint8BufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Uint8Array(t2), e2, i2);
          }
        }, t.Uint8ClampedBufferAttribute = class extends bi {
          constructor(t2, e2, i2) {
            super(new Uint8ClampedArray(t2), e2, i2);
          }
        }, t.Uniform = uh, t.UniformsGroup = class extends mt {
          constructor() {
            super(), this.isUniformsGroup = true, Object.defineProperty(this, "id", { value: dh++ }), this.name = "", this.usage = ut, this.uniforms = [];
          }
          add(t2) {
            return this.uniforms.push(t2), this;
          }
          remove(t2) {
            const e2 = this.uniforms.indexOf(t2);
            return -1 !== e2 && this.uniforms.splice(e2, 1), this;
          }
          setName(t2) {
            return this.name = t2, this;
          }
          setUsage(t2) {
            return this.usage = t2, this;
          }
          dispose() {
            return this.dispatchEvent({ type: "dispose" }), this;
          }
          copy(t2) {
            this.name = t2.name, this.usage = t2.usage;
            const e2 = t2.uniforms;
            this.uniforms.length = 0;
            for (let t3 = 0, i2 = e2.length; t3 < i2; t3++)
              this.uniforms.push(e2[t3].clone());
            return this;
          }
          clone() {
            return new this.constructor().copy(this);
          }
        }, t.UniformsLib = bn, t.UniformsUtils = nn, t.UnsignedByteType = x, t.UnsignedInt248Type = S, t.UnsignedIntType = y, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShortType = _, t.VSMShadowMap = 3, t.Vector2 = Lt, t.Vector3 = ne, t.Vector4 = $t, t.VectorKeyframeTrack = ic, t.VideoTexture = class extends Kt {
          constructor(t2, e2, i2, n2, r2, s2, a2, o2, l2) {
            super(t2, e2, i2, n2, r2, s2, a2, o2, l2), this.isVideoTexture = true, this.minFilter = void 0 !== s2 ? s2 : f, this.magFilter = void 0 !== r2 ? r2 : f, this.generateMipmaps = false;
            const c2 = this;
            "requestVideoFrameCallback" in t2 && t2.requestVideoFrameCallback(function e3() {
              c2.needsUpdate = true, t2.requestVideoFrameCallback(e3);
            });
          }
          clone() {
            return new this.constructor(this.image).copy(this);
          }
          update() {
            const t2 = this.image;
            false === "requestVideoFrameCallback" in t2 && t2.readyState >= t2.HAVE_CURRENT_DATA && (this.needsUpdate = true);
          }
        }, t.WebGL1Renderer = Js, t.WebGL3DRenderTarget = class extends Qt {
          constructor(t2, e2, i2) {
            super(t2, e2), this.isWebGL3DRenderTarget = true, this.depth = i2, this.texture = new ee(null, t2, e2, i2), this.texture.isRenderTargetTexture = true;
          }
        }, t.WebGLArrayRenderTarget = class extends Qt {
          constructor(t2, e2, i2) {
            super(t2, e2), this.isWebGLArrayRenderTarget = true, this.depth = i2, this.texture = new te(null, t2, e2, i2), this.texture.isRenderTargetTexture = true;
          }
        }, t.WebGLCubeRenderTarget = hn, t.WebGLMultipleRenderTargets = class extends Qt {
          constructor(t2, e2, i2, n2 = {}) {
            super(t2, e2, n2), this.isWebGLMultipleRenderTargets = true;
            const r2 = this.texture;
            this.texture = [];
            for (let t3 = 0; t3 < i2; t3++)
              this.texture[t3] = r2.clone(), this.texture[t3].isRenderTargetTexture = true;
          }
          setSize(t2, e2, i2 = 1) {
            if (this.width !== t2 || this.height !== e2 || this.depth !== i2) {
              this.width = t2, this.height = e2, this.depth = i2;
              for (let n2 = 0, r2 = this.texture.length; n2 < r2; n2++)
                this.texture[n2].image.width = t2, this.texture[n2].image.height = e2, this.texture[n2].image.depth = i2;
              this.dispose();
            }
            return this.viewport.set(0, 0, t2, e2), this.scissor.set(0, 0, t2, e2), this;
          }
          copy(t2) {
            this.dispose(), this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.texture.length = 0;
            for (let e2 = 0, i2 = t2.texture.length; e2 < i2; e2++)
              this.texture[e2] = t2.texture[e2].clone(), this.texture[e2].isRenderTargetTexture = true;
            return this;
          }
        }, t.WebGLMultisampleRenderTarget = class extends Qt {
          constructor(t2, e2, i2) {
            console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'), super(t2, e2, i2), this.samples = 4;
          }
        }, t.WebGLRenderTarget = Qt, t.WebGLRenderer = Zs, t.WebGLUtils = ks, t.WireframeGeometry = Tl, t.WrapAroundEnding = nt, t.ZeroCurvatureEnding = et, t.ZeroFactor = 200, t.ZeroSlopeEnding = it, t.ZeroStencilOp = 0, t._SRGBAFormat = pt, t.sRGBEncoding = ot, Object.defineProperty(t, "__esModule", { value: true });
      });
    }
  });

  // ../scroller/node_modules/@jocabola/math/lib/CachedCurve.js
  var import_three, TMP;
  var init_CachedCurve = __esm({
    "../scroller/node_modules/@jocabola/math/lib/CachedCurve.js"() {
      import_three = __toESM(require_three_min());
      init_MathUtils();
      TMP = new import_three.Vector3();
    }
  });

  // ../scroller/node_modules/@jocabola/math/lib/main.js
  var init_main = __esm({
    "../scroller/node_modules/@jocabola/math/lib/main.js"() {
      init_Random();
      init_MathUtils();
      init_Vector();
      init_CachedCurve();
    }
  });

  // ../scroller/src/Scroller.ts
  var style, Scroller;
  var init_Scroller = __esm({
    "../scroller/src/Scroller.ts"() {
      init_main();
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
	[fil-scroller-section].visible {
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
          this.ease = 0.1;
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
            console.log(section.rect);
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
            }, 100);
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
          this.position.current = MathUtils.lerp(
            this.position.current,
            this.position.target,
            this.ease
          );
        }
        updateSections() {
          const scroll = this.position.target;
          for (let i = 0, len = this.sections.length; i < len; i++) {
            const section = this.sections[i];
            const top = section.rect.top;
            const bottom = section.rect.top + section.rect.height;
            if (scroll + this.wh >= top && scroll <= bottom) {
              section.visible = true;
              section.dom.classList.add("visible");
              section.dom.style.transform = `translateY(${-scroll}px)`;
              continue;
            }
            if (!section.visible)
              continue;
            section.visible = false;
            section.dom.classList.remove("visible");
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
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
