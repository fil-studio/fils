(()=>{var Mf=Object.create;var ga=Object.defineProperty;var wf=Object.getOwnPropertyDescriptor;var Sf=Object.getOwnPropertyNames;var Tf=Object.getPrototypeOf,Af=Object.prototype.hasOwnProperty;var Ie=(g,M)=>()=>(g&&(M=g(g=0)),M);var Ef=(g,M)=>()=>(M||g((M={exports:{}}).exports,M),M.exports),Cf=(g,M)=>{for(var I in M)ga(g,I,{get:M[I],enumerable:!0})},Iu=(g,M,I,b)=>{if(M&&typeof M=="object"||typeof M=="function")for(let W of Sf(M))!Af.call(g,W)&&W!==I&&ga(g,W,{get:()=>M[W],enumerable:!(b=wf(M,W))||b.enumerable});return g};var Lt=(g,M,I)=>(I=g!=null?Mf(Tf(g)):{},Iu(M||!g||!g.__esModule?ga(I,"default",{value:g,enumerable:!0}):I,g)),Lf=g=>Iu(ga({},"__esModule",{value:!0}),g);var wt=Ef((va,Ou)=>{(function(g,M){typeof va=="object"&&typeof Ou<"u"?M(va):typeof define=="function"&&define.amd?define(["exports"],M):M((g=typeof globalThis<"u"?globalThis:g||self).THREE={})})(va,function(g){"use strict";let M="149",k="srgb",we="srgb-linear",Ft="300 es";class jt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}let pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ti=1234567,Tt=Math.PI/180,or=180/Math.PI;function Yt(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(pt[255&r]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[255&e]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[63&t|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[255&i]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Ga(r,e){return(r%e+e)%e}function lr(r,e,t){return(1-t)*r+t*e}function Va(r){return(r&r-1)==0&&r!==0}function Xl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ti(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Bd=Object.freeze({__proto__:null,DEG2RAD:Tt,RAD2DEG:or,ceilPowerOfTwo:Xl,clamp:lt,damp:function(r,e,t,i){return lr(r,e,1-Math.exp(-t*i))},degToRad:function(r){return r*Tt},denormalize:Ti,euclideanModulo:Ga,floorPowerOfTwo:hs,generateUUID:Yt,inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},isPowerOfTwo:Va,lerp:lr,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},normalize:Qe,pingpong:function(r,e=1){return e-Math.abs(Ga(r,2*e)-e)},radToDeg:function(r){return r*or},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},seededRandom:function(r){r!==void 0&&(ti=r);let e=ti+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*c,l*d,l*u,o*h);break;case"YZY":r.set(l*u,o*c,l*d,o*h);break;case"ZXZ":r.set(l*d,l*u,o*c,o*h);break;case"XZX":r.set(o*c,l*f,l*p,o*h);break;case"YXY":r.set(l*p,o*c,l*f,o*h);break;case"ZYZ":r.set(l*f,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)}});class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],p=i[5],f=i[8],m=n[0],x=n[3],y=n[6],v=n[1],_=n[4],w=n[7],S=n[2],C=n[5],D=n[8];return s[0]=a*m+o*v+l*S,s[3]=a*x+o*_+l*C,s[6]=a*y+o*w+l*D,s[1]=h*m+c*v+d*S,s[4]=h*x+c*_+d*C,s[7]=h*y+c*w+d*D,s[2]=u*m+p*v+f*S,s[5]=u*x+p*_+f*C,s[8]=u*y+p*w+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*s*c+i*o*l+n*s*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*s,p=h*s-a*l,f=t*d+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=d*m,e[1]=(n*h-c*i)*m,e[2]=(o*i-n*a)*m,e[3]=u*m,e[4]=(c*t-n*l)*m,e[5]=(n*s-o*t)*m,e[6]=p*m,e[7]=(i*l-h*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}let Ha=new Ut;function ql(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}let kd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function An(r,e){return new kd[r](e)}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $i(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function cs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let Wa={[k]:{[we]:$i},[we]:{[k]:cs}},Rt={legacyMode:!0,get workingColorSpace(){return we},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Wa[e]&&Wa[e][t]!==void 0){let i=Wa[e][t];return r.r=i(r.r),r.g=i(r.g),r.b=i(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mt={r:0,g:0,b:0},li={h:0,s:0,l:0},us={h:0,s:0,l:0};function ja(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function ds(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=k){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Rt.workingColorSpace){if(e=Ga(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ja(a,s,e+1/3),this.g=ja(a,s,e),this.b=ja(a,s,e-1/3)}return Rt.toWorkingColorSpace(this,n),this}setStyle(e,t=k){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Rt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Rt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let l=parseFloat(s[1])/360,h=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,h,c,t)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Rt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=k){let i=Yl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=k){return Rt.fromWorkingColorSpace(ds(this,mt),e),lt(255*mt.r,0,255)<<16^lt(255*mt.g,0,255)<<8^lt(255*mt.b,0,255)<<0}getHexString(e=k){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(ds(this,mt),t);let i=mt.r,n=mt.g,s=mt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(ds(this,mt),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=k){return Rt.fromWorkingColorSpace(ds(this,mt),e),e!==k?`color(${e} ${mt.r} ${mt.g} ${mt.b})`:`rgb(${255*mt.r|0},${255*mt.g|0},${255*mt.b|0})`}offsetHSL(e,t,i){return this.getHSL(li),li.h+=e,li.s+=t,li.l+=i,this.setHSL(li.h,li.s,li.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(us);let i=lr(li.h,us.h,t),n=lr(li.s,us.s,t),s=lr(li.l,us.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let En;ye.NAMES=Yl;class Xa{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{En===void 0&&(En=hr("canvas")),En.width=e.width,En.height=e.height;let i=En.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=En}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*$i(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*$i(t[i]/255)):t[i]=$i(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ki{constructor(e=null){this.isSource=!0,this.uuid=Yt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(qa(n[a].image)):s.push(qa(n[a]))}else s=qa(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function qa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xa.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class ht extends jt{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,h=ht.DEFAULT_ANISOTROPY,c=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Yt(),this.name="",this.source=new Ki(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ht.DEFAULT_IMAGE=null,ht.DEFAULT_MAPPING=300,ht.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,n=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],p=l[5],f=l[9],m=l[2],x=l[6],y=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-m)<.01&&Math.abs(f-x)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+m)<.1&&Math.abs(f+x)<.1&&Math.abs(h+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(h+1)/2,w=(p+1)/2,S=(y+1)/2,C=(c+u)/4,D=(d+m)/4,N=(f+x)/4;return _>w&&_>S?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=C/i,s=D/i):w>S?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=C/n,s=N/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=D/s,n=N/s),this.set(i,n,s,t),this}let v=Math.sqrt((x-f)*(x-f)+(d-m)*(d-m)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(x-f)/v,this.y=(d-m)/v,this.z=(u-c)/v,this.w=Math.acos((h+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hi extends jt{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let n={width:e,height:t,depth:1};this.texture=new ht(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0&&i.generateMipmaps,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer===void 0||i.depthBuffer,this.stencilBuffer=i.stencilBuffer!==void 0&&i.stencilBuffer,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ki(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends ht{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya extends ht{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3],u=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=m);if(d!==m||l!==u||h!==p||c!==f){let x=1-o,y=l*u+h*p+c*f+d*m,v=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let S=Math.sqrt(_),C=Math.atan2(S,y*v);x=Math.sin(x*C)/S,o=Math.sin(o*C)/S}let w=o*v;if(l=l*x+u*w,h=h*x+p*w,c=c*x+f*w,d=d*x+m*w,x===1-o){let S=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=S,h*=S,c*=S,d*=S}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+c*d+l*p-h*u,e[t+1]=l*f+c*u+h*d-o*p,e[t+2]=h*f+c*p+o*u-l*d,e[t+3]=c*f-o*d-l*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"YXZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"ZXY":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"ZYX":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"YZX":this._x=u*c*d+h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d-u*p*f;break;case"XZY":this._x=u*c*d-h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-h)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(c-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+h)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-h)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-s*l,this._y=n*c+a*l+s*o-i*h,this._z=s*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),d=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=l*t+a*n-o*i,c=l*i+o*t-s*n,d=l*n+s*i-a*t,u=-s*t-a*i-o*n;return this.x=h*l+u*-s+c*-o-d*-a,this.y=c*l+u*-a+d*-s-h*-o,this.z=d*l+u*-o+h*-a-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let Za=new E,Zl=new Xt;class Qi{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.length;l<h;l+=3){let c=e[l],d=e[l+1],u=e[l+2];c<t&&(t=c),d<i&&(i=d),u<n&&(n=u),c>s&&(s=c),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,h=e.count;l<h;l++){let c=e.getX(l),d=e.getY(l),u=e.getZ(l);c<t&&(t=c),d<i&&(i=d),u<n&&(n=u),c>s&&(s=c),d>a&&(a=d),u>o&&(o=u)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)en.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(en)}else i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox),Ja.applyMatrix4(e.matrixWorld),this.union(Ja);let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),ms.subVectors(this.max,cr),Cn.subVectors(e.a,cr),Ln.subVectors(e.b,cr),Rn.subVectors(e.c,cr),Fi.subVectors(Ln,Cn),Ui.subVectors(Rn,Ln),tn.subVectors(Cn,Rn);let t=[0,-Fi.z,Fi.y,0,-Ui.z,Ui.y,0,-tn.z,tn.y,Fi.z,0,-Fi.x,Ui.z,0,-Ui.x,tn.z,0,-tn.x,-Fi.y,Fi.x,0,-Ui.y,Ui.x,0,-tn.y,tn.x,0];return!!$a(t,Cn,Ln,Rn,ms)&&(t=[1,0,0,0,1,0,0,0,1],!!$a(t,Cn,Ln,Rn,ms)&&(fs.crossVectors(Fi,Ui),t=[fs.x,fs.y,fs.z],$a(t,Cn,Ln,Rn,ms)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return en.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(en).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}let Ai=[new E,new E,new E,new E,new E,new E,new E,new E],en=new E,Ja=new Qi,Cn=new E,Ln=new E,Rn=new E,Fi=new E,Ui=new E,tn=new E,cr=new E,ms=new E,fs=new E,nn=new E;function $a(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){nn.fromArray(r,s);let o=n.x*Math.abs(nn.x)+n.y*Math.abs(nn.y)+n.z*Math.abs(nn.z),l=e.dot(nn),h=t.dot(nn),c=i.dot(nn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}let Vd=new Qi,ur=new E,Ka=new E;class rn{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Vd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(ur,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ka)),this.expandByPoint(ur.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}let Ei=new E,Qa=new E,gs=new E,Bi=new E,eo=new E,vs=new E,to=new E;class dr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.direction).multiplyScalar(t).add(this.origin),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Qa.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Qa);let s=.5*e.distanceTo(t),a=-this.direction.dot(gs),o=Bi.dot(this.direction),l=-Bi.dot(gs),h=Bi.lengthSq(),c=Math.abs(1-a*a),d,u,p,f;if(c>0)if(d=a*l-o,u=a*o-l,f=s*c,d>=0)if(u>=-f)if(u<=f){let m=1/c;d*=m,u*=m,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+h):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+h):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+h);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+h;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),n&&n.copy(gs).multiplyScalar(u).add(Qa),p}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let i=Ei.dot(this.direction),n=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),c>=0?(s=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(s=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,n,s){eo.subVectors(t,e),vs.subVectors(i,e),to.crossVectors(eo,vs);let a,o=this.direction.dot(to);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Bi.subVectors(this.origin,e);let l=a*this.direction.dot(vs.crossVectors(Bi,vs));if(l<0)return null;let h=a*this.direction.dot(eo.cross(Bi));if(h<0||l+h>o)return null;let c=-a*Bi.dot(to);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,a,o,l,h,c,d,u,p,f,m,x){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=h,y[6]=c,y[10]=d,y[14]=u,y[3]=p,y[7]=f,y[11]=m,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Pn.setFromMatrixColumn(e,0).length(),s=1/Pn.setFromMatrixColumn(e,1).length(),a=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*c,p=a*d,f=o*c,m=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=p+f*h,t[5]=u-m*h,t[9]=-o*l,t[2]=m-u*h,t[6]=f+p*h,t[10]=a*l}else if(e.order==="YXZ"){let u=l*c,p=l*d,f=h*c,m=h*d;t[0]=u+m*o,t[4]=f*o-p,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=p*o-f,t[6]=m+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*c,p=l*d,f=h*c,m=h*d;t[0]=u-m*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*c,t[9]=m-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*c,p=a*d,f=o*c,m=o*d;t[0]=l*c,t[4]=f*h-p,t[8]=u*h+m,t[1]=l*d,t[5]=m*h+u,t[9]=p*h-f,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*h,f=o*l,m=o*h;t[0]=l*c,t[4]=m-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=p*d+f,t[10]=u-m*d}else if(e.order==="XZY"){let u=a*l,p=a*h,f=o*l,m=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+m,t[5]=a*c,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*c,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hd,e,Wd)}lookAt(e,t,i){let n=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ki.crossVectors(i,Zt),ki.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ki.crossVectors(i,Zt)),ki.normalize(),xs.crossVectors(Zt,ki),n[0]=ki.x,n[4]=xs.x,n[8]=Zt.x,n[1]=ki.y,n[5]=xs.y,n[9]=Zt.y,n[2]=ki.z,n[6]=xs.z,n[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],p=i[13],f=i[2],m=i[6],x=i[10],y=i[14],v=i[3],_=i[7],w=i[11],S=i[15],C=n[0],D=n[4],N=n[8],U=n[12],H=n[1],O=n[5],X=n[9],ie=n[13],K=n[2],ae=n[6],se=n[10],ue=n[14],de=n[3],le=n[7],j=n[11],Z=n[15];return s[0]=a*C+o*H+l*K+h*de,s[4]=a*D+o*O+l*ae+h*le,s[8]=a*N+o*X+l*se+h*j,s[12]=a*U+o*ie+l*ue+h*Z,s[1]=c*C+d*H+u*K+p*de,s[5]=c*D+d*O+u*ae+p*le,s[9]=c*N+d*X+u*se+p*j,s[13]=c*U+d*ie+u*ue+p*Z,s[2]=f*C+m*H+x*K+y*de,s[6]=f*D+m*O+x*ae+y*le,s[10]=f*N+m*X+x*se+y*j,s[14]=f*U+m*ie+x*ue+y*Z,s[3]=v*C+_*H+w*K+S*de,s[7]=v*D+_*O+w*ae+S*le,s[11]=v*N+_*X+w*se+S*j,s[15]=v*U+_*ie+w*ue+S*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-n*h*d-s*o*u+i*h*u+n*o*p-i*l*p)+e[7]*(+t*l*p-t*h*u+s*a*u-n*a*p+n*h*c-s*l*c)+e[11]*(+t*h*d-t*o*p-s*a*d+i*a*p+s*o*c-i*h*c)+e[15]*(-n*o*c-t*l*d+t*o*u+n*a*d-i*a*u+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],p=e[11],f=e[12],m=e[13],x=e[14],y=e[15],v=d*x*h-m*u*h+m*l*p-o*x*p-d*l*y+o*u*y,_=f*u*h-c*x*h-f*l*p+a*x*p+c*l*y-a*u*y,w=c*m*h-f*d*h+f*o*p-a*m*p-c*o*y+a*d*y,S=f*d*l-c*m*l-f*o*u+a*m*u+c*o*x-a*d*x,C=t*v+i*_+n*w+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=v*D,e[1]=(m*u*s-d*x*s-m*n*p+i*x*p+d*n*y-i*u*y)*D,e[2]=(o*x*s-m*l*s+m*n*h-i*x*h-o*n*y+i*l*y)*D,e[3]=(d*l*s-o*u*s-d*n*h+i*u*h+o*n*p-i*l*p)*D,e[4]=_*D,e[5]=(c*x*s-f*u*s+f*n*p-t*x*p-c*n*y+t*u*y)*D,e[6]=(f*l*s-a*x*s-f*n*h+t*x*h+a*n*y-t*l*y)*D,e[7]=(a*u*s-c*l*s+c*n*h-t*u*h-a*n*p+t*l*p)*D,e[8]=w*D,e[9]=(f*d*s-c*m*s-f*i*p+t*m*p+c*i*y-t*d*y)*D,e[10]=(a*m*s-f*o*s+f*i*h-t*m*h-a*i*y+t*o*y)*D,e[11]=(c*o*s-a*d*s-c*i*h+t*d*h+a*i*p-t*o*p)*D,e[12]=S*D,e[13]=(c*m*n-f*d*n+f*i*u-t*m*u-c*i*x+t*d*x)*D,e[14]=(f*o*n-a*m*n-f*i*l+t*m*l+a*i*x-t*o*x)*D,e[15]=(a*d*n-c*o*n+c*i*l-t*d*l-a*i*u+t*o*u)*D,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,h=s+s,c=a+a,d=o+o,u=s*h,p=s*c,f=s*d,m=a*c,x=a*d,y=o*d,v=l*h,_=l*c,w=l*d,S=i.x,C=i.y,D=i.z;return n[0]=(1-(m+y))*S,n[1]=(p+w)*S,n[2]=(f-_)*S,n[3]=0,n[4]=(p-w)*C,n[5]=(1-(u+y))*C,n[6]=(x+v)*C,n[7]=0,n[8]=(f+_)*D,n[9]=(x-v)*D,n[10]=(1-(u+m))*D,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Pn.set(n[0],n[1],n[2]).length(),a=Pn.set(n[4],n[5],n[6]).length(),o=Pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ci.copy(this);let l=1/s,h=1/a,c=1/o;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=c,ci.elements[9]*=c,ci.elements[10]*=c,t.setFromRotationMatrix(ci),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){let o=this.elements,l=2*s/(t-e),h=2*s/(i-n),c=(t+e)/(t-e),d=(i+n)/(i-n),u=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=h,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){let o=this.elements,l=1/(t-e),h=1/(i-n),c=1/(a-s),d=(t+e)*l,u=(i+n)*h,p=(a+s)*c;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*h,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}let Pn=new E,ci=new Oe,Hd=new E(0,0,0),Wd=new E(1,1,1),ki=new E,xs=new E,Zt=new E,Jl=new Oe,$l=new Xt;class pr{constructor(e=0,t=0,i=0,n=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class ys{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let jd=0,Kl=new E,Dn=new Xt,Ci=new Oe,_s=new E,mr=new E,Xd=new E,qd=new Xt,Ql=new E(1,0,0),eh=new E(0,1,0),th=new E(0,0,1),Yd={type:"added"},ih={type:"removed"};class Ye extends jt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();let e=new E,t=new pr,i=new Xt,n=new E(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Ut}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(e,t){return Dn.setFromAxisAngle(e,t),this.quaternion.premultiply(Dn),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(eh,e)}rotateZ(e){return this.rotateOnAxis(th,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(eh,e)}translateZ(e){return this.translateOnAxis(th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(mr,_s,this.up):Ci.lookAt(_s,mr,this.up),this.quaternion.setFromRotationMatrix(Ci),n&&(Ci.extractRotation(n.matrixWorld),Dn.setFromRotationMatrix(Ci),this.quaternion.premultiply(Dn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ih)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(ih)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}}Ye.DEFAULT_UP=new E(0,1,0),Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let ui=new E,Li=new E,io=new E,Ri=new E,In=new E,On=new E,nh=new E,no=new E,ro=new E,so=new E;class ii{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ui.subVectors(e,t),n.cross(ui);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){ui.subVectors(n,t),Li.subVectors(i,t),io.subVectors(e,t);let a=ui.dot(ui),o=ui.dot(Li),l=ui.dot(io),h=Li.dot(Li),c=Li.dot(io),d=a*h-o*o;if(d===0)return s.set(-2,-1,-1);let u=1/d,p=(h*l-o*c)*u,f=(a*c-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ri),Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Ri),l.set(0,0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l}static isFrontFacing(e,t,i,n){return ui.subVectors(i,t),Li.subVectors(e,t),ui.cross(Li).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),.5*ui.cross(Li).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return ii.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;In.subVectors(n,i),On.subVectors(s,i),no.subVectors(e,i);let l=In.dot(no),h=On.dot(no);if(l<=0&&h<=0)return t.copy(i);ro.subVectors(e,n);let c=In.dot(ro),d=On.dot(ro);if(c>=0&&d<=c)return t.copy(n);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(In,a);so.subVectors(e,s);let p=In.dot(so),f=On.dot(so);if(f>=0&&p<=f)return t.copy(s);let m=p*h-l*f;if(m<=0&&h>=0&&f<=0)return o=h/(h-f),t.copy(i).addScaledVector(On,o);let x=c*f-p*d;if(x<=0&&d-c>=0&&p-f>=0)return nh.subVectors(s,n),o=(d-c)/(d-c+(p-f)),t.copy(n).addScaledVector(nh,o);let y=1/(x+m+u);return a=m*y,o=u*y,t.copy(i).addScaledVector(In,a).addScaledVector(On,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Zd=0;class Pt extends jt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gi extends Pt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}let ut=new E,bs=new te;class et{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ao extends et{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class oo extends et{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class be extends et{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jd=0,ni=new Oe,lo=new Ye,Nn=new E,Jt=new Qi,fr=new Qi,_t=new E;class Ue extends jt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ql(e)?oo:ao)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,i){return ni.makeTranslation(e,t,i),this.applyMatrix4(ni),this}scale(e,t,i){return ni.makeScale(e,t,i),this.applyMatrix4(ni),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nn).negate(),this.translate(Nn.x,Nn.y,Nn.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){let i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Jt.min,fr.min),Jt.expandByPoint(_t),_t.addVectors(Jt.max,fr.max),Jt.expandByPoint(_t)):(Jt.expandByPoint(fr.min),Jt.expandByPoint(fr.max))}Jt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)_t.fromBufferAttribute(o,h),l&&(Nn.fromBufferAttribute(e,h),_t.add(Nn)),n=Math.max(n,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new et(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let H=0;H<o;H++)h[H]=new E,c[H]=new E;let d=new E,u=new E,p=new E,f=new te,m=new te,x=new te,y=new E,v=new E;function _(H,O,X){d.fromArray(n,3*H),u.fromArray(n,3*O),p.fromArray(n,3*X),f.fromArray(a,2*H),m.fromArray(a,2*O),x.fromArray(a,2*X),u.sub(d),p.sub(d),m.sub(f),x.sub(f);let ie=1/(m.x*x.y-x.x*m.y);isFinite(ie)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(ie),v.copy(p).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(ie),h[H].add(y),h[O].add(y),h[X].add(y),c[H].add(v),c[O].add(v),c[X].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let H=0,O=w.length;H<O;++H){let X=w[H],ie=X.start;for(let K=ie,ae=ie+X.count;K<ae;K+=3)_(i[K+0],i[K+1],i[K+2])}let S=new E,C=new E,D=new E,N=new E;function U(H){D.fromArray(s,3*H),N.copy(D);let O=h[H];S.copy(O),S.sub(D.multiplyScalar(D.dot(O))).normalize(),C.crossVectors(N,O);let X=C.dot(c[H])<0?-1:1;l[4*H]=S.x,l[4*H+1]=S.y,l[4*H+2]=S.z,l[4*H+3]=X}for(let H=0,O=w.length;H<O;++H){let X=w[H],ie=X.start;for(let K=ie,ae=ie+X.count;K<ae;K+=3)U(i[K+0]),U(i[K+1]),U(i[K+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new et(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new E,s=new E,a=new E,o=new E,l=new E,h=new E,c=new E,d=new E;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),m=e.getX(u+1),x=e.getX(u+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),c.subVectors(a,s),d.subVectors(n,s),c.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),h.fromBufferAttribute(i,x),o.add(c),l.add(c),h.add(c),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,s),d.subVectors(n,s),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,f=0;for(let m=0,x=l.length;m<x;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*c;for(let y=0;y<c;y++)u[f++]=h[p++]}return new et(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ue,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,d=h.length;c<d;c++){let u=e(h[c],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let s=e.morphAttributes;for(let h in s){let c=[],d=s[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}let rh=new Oe,zn=new dr,ho=new rn,gr=new E,vr=new E,xr=new E,co=new E,Ms=new E,ws=new te,Ss=new te,Ts=new te,uo=new E,As=new E;class At extends Ye{constructor(e=new Ue,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Ms.set(0,0,0);for(let l=0,h=s.length;l<h;l++){let c=o[l],d=s[l];c!==0&&(co.fromBufferAttribute(d,e),a?Ms.addScaledVector(co,c):Ms.addScaledVector(co.sub(t),c))}t.add(Ms)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),e.ray.intersectsSphere(ho)===!1)||(rh.copy(s).invert(),zn.copy(e.ray).applyMatrix4(rh),i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1))return;let a,o=i.index,l=i.attributes.position,h=i.attributes.uv,c=i.attributes.uv2,d=i.groups,u=i.drawRange;if(o!==null)if(Array.isArray(n))for(let p=0,f=d.length;p<f;p++){let m=d[p],x=n[m.materialIndex];for(let y=Math.max(m.start,u.start),v=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));y<v;y+=3){let _=o.getX(y),w=o.getX(y+1),S=o.getX(y+2);a=Es(this,x,e,zn,h,c,_,w,S),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else for(let p=Math.max(0,u.start),f=Math.min(o.count,u.start+u.count);p<f;p+=3){let m=o.getX(p),x=o.getX(p+1),y=o.getX(p+2);a=Es(this,n,e,zn,h,c,m,x,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}else if(l!==void 0)if(Array.isArray(n))for(let p=0,f=d.length;p<f;p++){let m=d[p],x=n[m.materialIndex];for(let y=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));y<v;y+=3)a=Es(this,x,e,zn,h,c,y,y+1,y+2),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=m.materialIndex,t.push(a))}else for(let p=Math.max(0,u.start),f=Math.min(l.count,u.start+u.count);p<f;p+=3)a=Es(this,n,e,zn,h,c,p,p+1,p+2),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}function Es(r,e,t,i,n,s,a,o,l){r.getVertexPosition(a,gr),r.getVertexPosition(o,vr),r.getVertexPosition(l,xr);let h=function(c,d,u,p,f,m,x,y){let v;if(v=d.side===1?p.intersectTriangle(x,m,f,!0,y):p.intersectTriangle(f,m,x,d.side===0,y),v===null)return null;As.copy(y),As.applyMatrix4(c.matrixWorld);let _=u.ray.origin.distanceTo(As);return _<u.near||_>u.far?null:{distance:_,point:As.clone(),object:c}}(r,e,t,i,gr,vr,xr,uo);if(h){n&&(ws.fromBufferAttribute(n,a),Ss.fromBufferAttribute(n,o),Ts.fromBufferAttribute(n,l),h.uv=ii.getUV(uo,gr,vr,xr,ws,Ss,Ts,new te)),s&&(ws.fromBufferAttribute(s,a),Ss.fromBufferAttribute(s,o),Ts.fromBufferAttribute(s,l),h.uv2=ii.getUV(uo,gr,vr,xr,ws,Ss,Ts,new te));let c={a,b:o,c:l,normal:new E,materialIndex:0};ii.getNormal(gr,vr,xr,c.normal),h.face=c}return h}class Vi extends Ue{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=0,p=0;function f(m,x,y,v,_,w,S,C,D,N,U){let H=w/D,O=S/N,X=w/2,ie=S/2,K=C/2,ae=D+1,se=N+1,ue=0,de=0,le=new E;for(let j=0;j<se;j++){let Z=j*O-ie;for(let me=0;me<ae;me++){let ge=me*H-X;le[m]=ge*v,le[x]=Z*_,le[y]=K,h.push(le.x,le.y,le.z),le[m]=0,le[x]=0,le[y]=C>0?1:-1,c.push(le.x,le.y,le.z),d.push(me/D),d.push(1-j/N),ue+=1}}for(let j=0;j<N;j++)for(let Z=0;Z<D;Z++){let me=u+Z+ae*j,ge=u+Z+ae*(j+1),oe=u+(Z+1)+ae*(j+1),Le=u+(Z+1)+ae*j;l.push(me,ge,Le),l.push(ge,oe,Le),de+=6}o.addGroup(p,de,U),p+=de,u+=ue}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(d,2))}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Bt(r){let e={};for(let t=0;t<r.length;t++){let i=Fn(r[t]);for(let n in i)e[n]=i[n]}return e}function sh(r){return r.getRenderTarget()===null&&r.outputEncoding===3001?k:we}let ah={clone:Fn,merge:Bt};class yi extends Pt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Cs extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends Cs{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*or*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Tt*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*or*Math.atan(Math.tan(.5*Tt*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Tt*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}let Un=-90;class oh extends Ye{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let n=new Et(Un,1,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);let s=new Et(Un,1,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new Et(Un,1,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let o=new Et(Un,1,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);let l=new Et(Un,1,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let h=new Et(Un,1,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[n,s,a,o,l,h]=this.children,c=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class yr extends ht{constructor(e,t,i,n,s,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:301,i,n,s,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lh extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new yr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Vi(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:Fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new At(n,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new oh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}let po=new E,$d=new E,Kd=new Ut;class Hi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=po.subVectors(i,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(po),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Kd.getNormalMatrix(e),n=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}let Bn=new rn,Ls=new E;class Rs{constructor(e=new Hi,t=new Hi,i=new Hi,n=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],h=i[5],c=i[6],d=i[7],u=i[8],p=i[9],f=i[10],m=i[11],x=i[12],y=i[13],v=i[14],_=i[15];return t[0].setComponents(o-n,d-l,m-u,_-x).normalize(),t[1].setComponents(o+n,d+l,m+u,_+x).normalize(),t[2].setComponents(o+s,d+h,m+p,_+y).normalize(),t[3].setComponents(o-s,d-h,m-p,_-y).normalize(),t[4].setComponents(o-a,d-c,m-f,_-v).normalize(),t[5].setComponents(o+a,d+c,m+f,_+v).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ls.x=n.normal.x>0?e.max.x:e.min.x,Ls.y=n.normal.y>0?e.max.y:e.min.y,Ls.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Qd(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);a===void 0?i.set(n,function(o,l){let h=o.array,c=o.usage,d=r.createBuffer(),u;if(r.bindBuffer(l,d),r.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)u=5126;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");u=5131}else u=5123;else if(h instanceof Int16Array)u=5122;else if(h instanceof Uint32Array)u=5125;else if(h instanceof Int32Array)u=5124;else if(h instanceof Int8Array)u=5120;else if(h instanceof Uint8Array)u=5121;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);u=5121}return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version}}(n,s)):a.version<n.version&&(function(o,l,h){let c=l.array,d=l.updateRange;r.bindBuffer(h,o),d.count===-1?r.bufferSubData(h,0,c):(t?r.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):r.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()}(a.buffer,n,s),a.version=n.version)}}}class kn extends Ue{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,d=e/o,u=t/l,p=[],f=[],m=[],x=[];for(let y=0;y<c;y++){let v=y*u-a;for(let _=0;_<h;_++){let w=_*d-s;f.push(w,-v,0),m.push(0,0,1),x.push(_/o),x.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let _=v+h*y,w=v+h*(y+1),S=v+1+h*(y+1),C=v+1+h*y;p.push(_,w,C),p.push(w,S,C)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(m,3)),this.setAttribute("uv",new be(x,2))}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}let Fe={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ce={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},di={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ye(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};di.physical={uniforms:Bt([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};let Ps={r:0,b:0,g:0};function ep(r,e,t,i,n,s,a){let o=new ye(0),l,h,c=s===!0?0:1,d=null,u=0,p=null;function f(m,x){m.getRGB(Ps,sh(r)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,f(o,c)},render:function(m,x){let y=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v));let _=r.xr,w=_.getSession&&_.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?f(o,c):v&&v.isColor&&(f(v,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===306)?(h===void 0&&(h=new At(new Vi(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Fn(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=v.encoding!==3001,d===v&&u===v.version&&p===r.toneMapping||(h.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new kn(2,2),new yi({name:"BackgroundMaterial",uniforms:Fn(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=v.encoding!==3001,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function tp(r,e,t,i){let n=r.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),h=l,c=!1;function d(S){return i.isWebGL2?r.bindVertexArray(S):s.bindVertexArrayOES(S)}function u(S){return i.isWebGL2?r.deleteVertexArray(S):s.deleteVertexArrayOES(S)}function p(S){let C=[],D=[],N=[];for(let U=0;U<n;U++)C[U]=0,D[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:N,object:S,attributes:{},index:null}}function f(){let S=h.newAttributes;for(let C=0,D=S.length;C<D;C++)S[C]=0}function m(S){x(S,0)}function x(S,C){let D=h.newAttributes,N=h.enabledAttributes,U=h.attributeDivisors;D[S]=1,N[S]===0&&(r.enableVertexAttribArray(S),N[S]=1),U[S]!==C&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,C),U[S]=C)}function y(){let S=h.newAttributes,C=h.enabledAttributes;for(let D=0,N=C.length;D<N;D++)C[D]!==S[D]&&(r.disableVertexAttribArray(D),C[D]=0)}function v(S,C,D,N,U,H){i.isWebGL2!==!0||D!==5124&&D!==5125?r.vertexAttribPointer(S,C,D,N,U,H):r.vertexAttribIPointer(S,C,D,U,H)}function _(){w(),c=!0,h!==l&&(h=l,d(h.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(S,C,D,N,U){let H=!1;if(a){let O=function(X,ie,K){let ae=K.wireframe===!0,se=o[X.id];se===void 0&&(se={},o[X.id]=se);let ue=se[ie.id];ue===void 0&&(ue={},se[ie.id]=ue);let de=ue[ae];return de===void 0&&(de=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),ue[ae]=de),de}(N,D,C);h!==O&&(h=O,d(h.object)),H=function(X,ie,K,ae){let se=h.attributes,ue=ie.attributes,de=0,le=K.getAttributes();for(let j in le)if(le[j].location>=0){let Z=se[j],me=ue[j];if(me===void 0&&(j==="instanceMatrix"&&X.instanceMatrix&&(me=X.instanceMatrix),j==="instanceColor"&&X.instanceColor&&(me=X.instanceColor)),Z===void 0||Z.attribute!==me||me&&Z.data!==me.data)return!0;de++}return h.attributesNum!==de||h.index!==ae}(S,N,D,U),H&&function(X,ie,K,ae){let se={},ue=ie.attributes,de=0,le=K.getAttributes();for(let j in le)if(le[j].location>=0){let Z=ue[j];Z===void 0&&(j==="instanceMatrix"&&X.instanceMatrix&&(Z=X.instanceMatrix),j==="instanceColor"&&X.instanceColor&&(Z=X.instanceColor));let me={};me.attribute=Z,Z&&Z.data&&(me.data=Z.data),se[j]=me,de++}h.attributes=se,h.attributesNum=de,h.index=ae}(S,N,D,U)}else{let O=C.wireframe===!0;h.geometry===N.id&&h.program===D.id&&h.wireframe===O||(h.geometry=N.id,h.program=D.id,h.wireframe=O,H=!0)}U!==null&&t.update(U,34963),(H||c)&&(c=!1,function(O,X,ie,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ae=K.attributes,se=ie.getAttributes(),ue=X.defaultAttributeValues;for(let de in se){let le=se[de];if(le.location>=0){let j=ae[de];if(j===void 0&&(de==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),de==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){let Z=j.normalized,me=j.itemSize,ge=t.get(j);if(ge===void 0)continue;let oe=ge.buffer,Le=ge.type,L=ge.bytesPerElement;if(j.isInterleavedBufferAttribute){let A=j.data,V=A.stride,B=j.offset;if(A.isInstancedInterleavedBuffer){for(let P=0;P<le.locationSize;P++)x(le.location+P,A.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let P=0;P<le.locationSize;P++)m(le.location+P);r.bindBuffer(34962,oe);for(let P=0;P<le.locationSize;P++)v(le.location+P,me/le.locationSize,Le,Z,V*L,(B+me/le.locationSize*P)*L)}else{if(j.isInstancedBufferAttribute){for(let A=0;A<le.locationSize;A++)x(le.location+A,j.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let A=0;A<le.locationSize;A++)m(le.location+A);r.bindBuffer(34962,oe);for(let A=0;A<le.locationSize;A++)v(le.location+A,me/le.locationSize,Le,Z,me*L,me/le.locationSize*A*L)}}else if(ue!==void 0){let Z=ue[de];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(le.location,Z);break;case 3:r.vertexAttrib3fv(le.location,Z);break;case 4:r.vertexAttrib4fv(le.location,Z);break;default:r.vertexAttrib1fv(le.location,Z)}}}}y()}(S,C,D,N),U!==null&&r.bindBuffer(34963,t.get(U).buffer))},reset:_,resetDefaultState:w,dispose:function(){_();for(let S in o){let C=o[S];for(let D in C){let N=C[D];for(let U in N)u(N[U].object),delete N[U];delete C[D]}delete o[S]}},releaseStatesOfGeometry:function(S){if(o[S.id]===void 0)return;let C=o[S.id];for(let D in C){let N=C[D];for(let U in N)u(N[U].object),delete N[U];delete C[D]}delete o[S.id]},releaseStatesOfProgram:function(S){for(let C in o){let D=o[C];if(D[S.id]===void 0)continue;let N=D[S.id];for(let U in N)u(N[U].object),delete N[U];delete D[S.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:y}}function ip(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(n)h=r,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](s,a,o,l),t.update(o,s,l)}}function np(r,e,t){let i;function n(w){if(w==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext,a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=r.getParameter(34930),d=r.getParameter(35660),u=r.getParameter(3379),p=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),x=r.getParameter(36348),y=r.getParameter(36349),v=d>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:v&&_,maxSamples:s?r.getParameter(36183):0}}function rp(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Hi,o=new Ut,l={value:null,needsUpdate:!1};function h(c,d,u,p){let f=c!==null?c.length:0,m=null;if(f!==0){if(m=l.value,p!==!0||m===null){let x=u+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<x)&&(m=new Float32Array(x));for(let v=0,_=u;v!==f;++v,_+=4)a.copy(c[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let u=c.length!==0||d||i!==0||n;return n=d,i=c.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){t=h(c,d,0)},this.setState=function(c,d,u){let p=c.clippingPlanes,f=c.clipIntersection,m=c.clipShadows,x=r.get(c);if(!n||p===null||p.length===0||s&&!m)s?h(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let y=s?0:i,v=4*y,_=x.clippingState||null;l.value=_,_=h(p,d,v,u);for(let w=0;w!==v;++w)_[w]=t[w];x.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function sp(r){let e=new WeakMap;function t(n,s){return s===303?n.mapping=301:s===304&&(n.mapping=302),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){let s=n.mapping;if(s===303||s===304){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new lh(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}class Ds extends Cs{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}let ch=[.125,.215,.35,.446,.526,.582],_r=20,mo=new Ds,uh=new ye,fo=null,sn=(1+Math.sqrt(5))/2,Gn=1/sn,dh=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,sn,Gn),new E(0,sn,-Gn),new E(Gn,0,sn),new E(-Gn,0,sn),new E(sn,Gn,0),new E(-sn,Gn,0)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){fo=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],h=[],c=a,d=a-4+1+ch.length;for(let u=0;u<d;u++){let p=Math.pow(2,c);l.push(p);let f=1/p;u>a-4?f=ch[u-a+4-1]:u===0&&(f=0),h.push(f);let m=1/(p-2),x=-m,y=1+m,v=[x,x,y,x,y,y,x,x,y,y,x,y],_=6,w=6,S=3,C=2,D=1,N=new Float32Array(S*w*_),U=new Float32Array(C*w*_),H=new Float32Array(D*w*_);for(let X=0;X<_;X++){let ie=X%3*2/3-1,K=X>2?0:-1,ae=[ie,K,0,ie+2/3,K,0,ie+2/3,K+1,0,ie,K,0,ie+2/3,K+1,0,ie,K+1,0];N.set(ae,S*w*X),U.set(v,C*w*X);let se=[X,X,X,X,X,X];H.set(se,D*w*X)}let O=new Ue;O.setAttribute("position",new et(N,S)),O.setAttribute("uv",new et(U,C)),O.setAttribute("faceIndex",new et(H,D)),o.push(O),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(s)),this._blurMaterial=function(a,o,l){let h=new Float32Array(_r),c=new E(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,n){let s=new Et(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(uh),l.toneMapping=0,l.autoClear=!1;let d=new Gi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new At(new Vi,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(uh),p=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(s.up.set(0,a[m],0),s.lookAt(o[m],0,0)):x===1?(s.up.set(0,0,a[m]),s.lookAt(0,o[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,o[m]));let y=this._cubeSize;Is(n,x*y,m>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Is(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,mo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=dh[(n-1)%dh.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new At(this._lodPlanes[n],h),d=h.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let x=[],y=0;for(let w=0;w<_r;++w){let S=w/f,C=Math.exp(-S*S/2);x.push(C),w===0?y+=C:w<m&&(y+=2*C)}for(let w=0;w<x.length;w++)x[w]=x[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=x,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let _=this._sizeLods[n];Is(t,3*_*(n>v-4?n-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(c,mo)}}function ph(r,e,t){let i=new hi(r,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function mh(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fh(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ap(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===303||s===304,o=s===301||s===302;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new go(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0,d=6;for(let u=0;u<d;u++)h[u]!==void 0&&c++;return c===d}(l)){t===null&&(t=new go(r));let h=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",i),h.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function op(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function lp(r,e,t,i){let n={},s=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete n[h.id];let c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,d=l.attributes.position,u=0;if(c!==null){let m=c.array;u=c.version;for(let x=0,y=m.length;x<y;x+=3){let v=m[x+0],_=m[x+1],w=m[x+2];h.push(v,_,_,w,w,v)}}else{let m=d.array;u=d.version;for(let x=0,y=m.length/3-1;x<y;x+=3){let v=x+0,_=x+1,w=x+2;h.push(v,_,_,w,w,v)}}let p=new(ql(h)?oo:ao)(h,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let d in h)e.update(h[d],34962);let c=l.morphAttributes;for(let d in c){let u=c[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],34962)}},getWireframeAttribute:function(l){let h=s.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function hp(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){r.drawElements(s,h,a,l*o),t.update(h,s,1)},this.renderInstances=function(l,h,c){if(c===0)return;let d,u;if(n)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,h,a,l*o,c),t.update(h,s,c)}}function cp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case 4:e.triangles+=n*(t/3);break;case 1:e.lines+=n*(t/2);break;case 3:e.lines+=n*(t-1);break;case 2:e.lines+=n*t;break;case 0:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function up(r,e){return r[0]-e[0]}function dp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function pp(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new Je,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c,d){let u=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0,m=s.get(h);if(m===void 0||m.count!==f){let K=function(){X.dispose(),s.delete(h),h.removeEventListener("dispose",K)};m!==void 0&&m.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[],N=0;v===!0&&(N=1),_===!0&&(N=2),w===!0&&(N=3);let U=h.attributes.position.count*N,H=1;U>e.maxTextureSize&&(H=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);let O=new Float32Array(U*H*4*f),X=new ps(O,U,H,f);X.type=1015,X.needsUpdate=!0;let ie=4*N;for(let ae=0;ae<f;ae++){let se=S[ae],ue=C[ae],de=D[ae],le=U*H*4*ae;for(let j=0;j<se.count;j++){let Z=j*ie;v===!0&&(a.fromBufferAttribute(se,j),O[le+Z+0]=a.x,O[le+Z+1]=a.y,O[le+Z+2]=a.z,O[le+Z+3]=0),_===!0&&(a.fromBufferAttribute(ue,j),O[le+Z+4]=a.x,O[le+Z+5]=a.y,O[le+Z+6]=a.z,O[le+Z+7]=0),w===!0&&(a.fromBufferAttribute(de,j),O[le+Z+8]=a.x,O[le+Z+9]=a.y,O[le+Z+10]=a.z,O[le+Z+11]=de.itemSize===4?a.w:1)}}m={count:f,texture:X,size:new te(U,H)},s.set(h,m),h.addEventListener("dispose",K)}let x=0;for(let v=0;v<u.length;v++)x+=u[v];let y=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let p=u===void 0?0:u.length,f=i[h.id];if(f===void 0||f.length!==p){f=[];for(let _=0;_<p;_++)f[_]=[_,0];i[h.id]=f}for(let _=0;_<p;_++){let w=f[_];w[0]=_,w[1]=u[_]}f.sort(dp);for(let _=0;_<8;_++)_<p&&f[_][1]?(o[_][0]=f[_][0],o[_][1]=f[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(up);let m=h.morphAttributes.position,x=h.morphAttributes.normal,y=0;for(let _=0;_<8;_++){let w=o[_],S=w[0],C=w[1];S!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+_)!==m[S]&&h.setAttribute("morphTarget"+_,m[S]),x&&h.getAttribute("morphNormal"+_)!==x[S]&&h.setAttribute("morphNormal"+_,x[S]),n[_]=C,y+=C):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),x&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),n[_]=0)}let v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function mp(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);return n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),h},dispose:function(){n=new WeakMap}}}let gh=new ht,vh=new ps,xh=new Ya,yh=new yr,_h=[],bh=[],Mh=new Float32Array(16),wh=new Float32Array(9),Sh=new Float32Array(4);function Vn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=_h[n];if(s===void 0&&(s=new Float32Array(n),_h[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function ft(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Os(r,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function fp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function vp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function xp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function yp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;Sh.set(i),r.uniformMatrix2fv(this.addr,!1,Sh),gt(t,i)}}function _p(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;wh.set(i),r.uniformMatrix3fv(this.addr,!1,wh),gt(t,i)}}function bp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(ft(t,i))return;Mh.set(i),r.uniformMatrix4fv(this.addr,!1,Mh),gt(t,i)}}function Mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2iv(this.addr,e),gt(t,e)}}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3iv(this.addr,e),gt(t,e)}}function Tp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4iv(this.addr,e),gt(t,e)}}function Ap(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ep(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;r.uniform2uiv(this.addr,e),gt(t,e)}}function Cp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;r.uniform3uiv(this.addr,e),gt(t,e)}}function Lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;r.uniform4uiv(this.addr,e),gt(t,e)}}function Rp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||gh,n)}function Pp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||xh,n)}function Dp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||yh,n)}function Ip(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||vh,n)}function Op(r,e){r.uniform1fv(this.addr,e)}function Np(r,e){let t=Vn(e,this.size,2);r.uniform2fv(this.addr,t)}function zp(r,e){let t=Vn(e,this.size,3);r.uniform3fv(this.addr,t)}function Fp(r,e){let t=Vn(e,this.size,4);r.uniform4fv(this.addr,t)}function Up(r,e){let t=Vn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Bp(r,e){let t=Vn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function kp(r,e){let t=Vn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gp(r,e){r.uniform1iv(this.addr,e)}function Vp(r,e){r.uniform2iv(this.addr,e)}function Hp(r,e){r.uniform3iv(this.addr,e)}function Wp(r,e){r.uniform4iv(this.addr,e)}function jp(r,e){r.uniform1uiv(this.addr,e)}function Xp(r,e){r.uniform2uiv(this.addr,e)}function qp(r,e){r.uniform3uiv(this.addr,e)}function Yp(r,e){r.uniform4uiv(this.addr,e)}function Zp(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||gh,s[a])}function Jp(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||xh,s[a])}function $p(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||yh,s[a])}function Kp(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);ft(i,s)||(r.uniform1iv(this.addr,s),gt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||vh,s[a])}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=function(n){switch(n){case 5126:return fp;case 35664:return gp;case 35665:return vp;case 35666:return xp;case 35674:return yp;case 35675:return _p;case 35676:return bp;case 5124:case 35670:return Mp;case 35667:case 35671:return wp;case 35668:case 35672:return Sp;case 35669:case 35673:return Tp;case 5125:return Ap;case 36294:return Ep;case 36295:return Cp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Ip}}(t.type)}}class em{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Op;case 35664:return Np;case 35665:return zp;case 35666:return Fp;case 35674:return Up;case 35675:return Bp;case 35676:return kp;case 5124:case 35670:return Gp;case 35667:case 35671:return Vp;case 35668:case 35672:return Hp;case 35669:case 35673:return Wp;case 5125:return jp;case 36294:return Xp;case 36295:return qp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}(t.type)}}class tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}}let xo=/(\w+)(\])?(\[|\.)?/g;function Th(r,e){r.seq.push(e),r.map[e.id]=e}function im(r,e,t){let i=r.name,n=i.length;for(xo.lastIndex=0;;){let s=xo.exec(i),a=xo.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){Th(t,h===void 0?new Qp(o,r,e):new em(o,r,e));break}{let c=t.map[o];c===void 0&&(c=new tm(o),Th(t,c)),t=c}}}class Ns{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);im(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}}function Ah(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let nm=0;function Eh(r,e,t){let i=r.getShaderParameter(e,35713),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let h=o.split(`
`),c=[],d=Math.max(l-6,0),u=Math.min(l+6,h.length);for(let p=d;p<u;p++){let f=p+1;c.push(`${f===l?">":" "} ${f}: ${h[p]}`)}return c.join(`
`)}(r.getShaderSource(e),a)}return n}function rm(r,e){let t=function(i){switch(i){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function br(r){return r!==""}function Ch(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}let am=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(r){return r.replace(am,om)}function om(r,e){let t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yo(t)}let lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(r){return r.replace(lm,hm)}function hm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ph(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(N){let U="SHADOWMAP_TYPE_BASIC";return N.shadowMapType===1?U="SHADOWMAP_TYPE_PCF":N.shadowMapType===2?U="SHADOWMAP_TYPE_PCF_SOFT":N.shadowMapType===3&&(U="SHADOWMAP_TYPE_VSM"),U}(t),h=function(N){let U="ENVMAP_TYPE_CUBE";if(N.envMap)switch(N.envMapMode){case 301:case 302:U="ENVMAP_TYPE_CUBE";break;case 306:U="ENVMAP_TYPE_CUBE_UV"}return U}(t),c=function(N){let U="ENVMAP_MODE_REFLECTION";return N.envMap&&N.envMapMode===302&&(U="ENVMAP_MODE_REFRACTION"),U}(t),d=function(N){let U="ENVMAP_BLENDING_NONE";if(N.envMap)switch(N.combine){case 0:U="ENVMAP_BLENDING_MULTIPLY";break;case 1:U="ENVMAP_BLENDING_MIX";break;case 2:U="ENVMAP_BLENDING_ADD"}return U}(t),u=function(N){let U=N.envMapCubeUVHeight;if(U===null)return null;let H=Math.log2(U)-2,O=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:O,maxMip:H}}(t),p=t.isWebGL2?"":function(N){return[N.extensionDerivatives||N.envMapCubeUVHeight||N.bumpMap||N.tangentSpaceNormalMap||N.clearcoatNormalMap||N.flatShading||N.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(N.extensionFragDepth||N.logarithmicDepthBuffer)&&N.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",N.extensionDrawBuffers&&N.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(N.extensionShaderTextureLOD||N.envMap||N.transmission)&&N.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}(t),f=function(N){let U=[];for(let H in N){let O=N[H];O!==!1&&U.push("#define "+H+" "+O)}return U.join(`
`)}(s),m=n.createProgram(),x,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[f].filter(br).join(`
`),x.length>0&&(x+=`
`),y=[p,f].filter(br).join(`
`),y.length>0&&(y+=`
`)):(x=[Ph(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),y=[p,Ph(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Fe.tonemapping_pars_fragment:"",t.toneMapping!==0?sm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,rm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=yo(a),a=Ch(a,t),a=Lh(a,t),o=yo(o),o=Ch(o,t),o=Lh(o,t),a=Rh(a),o=Rh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Ft?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ft?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=v+y+o,w=Ah(n,35633,v+x+a),S=Ah(n,35632,_);if(n.attachShader(m,w),n.attachShader(m,S),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),r.debug.checkShaderErrors){let N=n.getProgramInfoLog(m).trim(),U=n.getShaderInfoLog(w).trim(),H=n.getShaderInfoLog(S).trim(),O=!0,X=!0;if(n.getProgramParameter(m,35714)===!1){O=!1;let ie=Eh(n,w,"vertex"),K=Eh(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+N+`
`+ie+`
`+K)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):U!==""&&H!==""||(X=!1);X&&(this.diagnostics={runnable:O,programLog:N,vertexShader:{log:U,prefix:x},fragmentShader:{log:H,prefix:y}})}let C,D;return n.deleteShader(w),n.deleteShader(S),this.getUniforms=function(){return C===void 0&&(C=new Ns(n,m)),C},this.getAttributes=function(){return D===void 0&&(D=function(N,U){let H={},O=N.getProgramParameter(U,35721);for(let X=0;X<O;X++){let ie=N.getActiveAttrib(U,X),K=ie.name,ae=1;ie.type===35674&&(ae=2),ie.type===35675&&(ae=3),ie.type===35676&&(ae=4),H[K]={type:ie.type,location:N.getAttribLocation(U,K),locationSize:ae}}return H}(n,m)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=S,this}let um=0;class dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new pm(e),t.set(e,i)),i}}class pm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function mm(r,e,t,i,n,s,a){let o=new ys,l=new dm,h=[],c=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(m,x,y,v,_){let w=v.fog,S=_.geometry,C=m.isMeshStandardMaterial?v.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||C),N=D&&D.mapping===306?D.image.height:null,U=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let H=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,O=H!==void 0?H.length:0,X,ie,K,ae,se=0;if(S.morphAttributes.position!==void 0&&(se=1),S.morphAttributes.normal!==void 0&&(se=2),S.morphAttributes.color!==void 0&&(se=3),U){let Z=di[U];X=Z.vertexShader,ie=Z.fragmentShader}else X=m.vertexShader,ie=m.fragmentShader,l.update(m),K=l.getVertexShaderID(m),ae=l.getFragmentShaderID(m);let ue=r.getRenderTarget(),de=m.alphaTest>0,le=m.clearcoat>0,j=m.iridescence>0;return{isWebGL2:c,shaderID:U,shaderName:m.type,vertexShader:X,fragmentShader:ie,defines:m.defines,customVertexShaderID:K,customFragmentShaderID:ae,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,instancing:_.isInstancedMesh===!0,instancingColor:_.isInstancedMesh===!0&&_.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ue===null?r.outputEncoding:ue.isXRRenderTarget===!0?ue.texture.encoding:3e3,map:!!m.map,matcap:!!m.matcap,envMap:!!D,envMapMode:D&&D.mapping,envMapCubeUVHeight:N,lightMap:!!m.lightMap,aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,decodeVideoTexture:!!m.map&&m.map.isVideoTexture===!0&&m.map.encoding===3001,clearcoat:le,clearcoatMap:le&&!!m.clearcoatMap,clearcoatRoughnessMap:le&&!!m.clearcoatRoughnessMap,clearcoatNormalMap:le&&!!m.clearcoatNormalMap,iridescence:j,iridescenceMap:j&&!!m.iridescenceMap,iridescenceThicknessMap:j&&!!m.iridescenceThicknessMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,specularIntensityMap:!!m.specularIntensityMap,specularColorMap:!!m.specularColorMap,opaque:m.transparent===!1&&m.blending===1,alphaMap:!!m.alphaMap,alphaTest:de,gradientMap:!!m.gradientMap,sheen:m.sheen>0,sheenColorMap:!!m.sheenColorMap,sheenRoughnessMap:!!m.sheenRoughnessMap,transmission:m.transmission>0,transmissionMap:!!m.transmissionMap,thicknessMap:!!m.thicknessMap,combine:m.combine,vertexTangents:!!m.normalMap&&!!S.attributes.tangent,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.displacementMap||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheenColorMap||m.sheenRoughnessMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.transmission>0||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheen>0||m.sheenColorMap||m.sheenRoughnessMap||!m.displacementMap),fog:!!w,useFog:m.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:!!m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:se,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&y.length>0,shadowMapType:r.shadowMap.type,toneMapping:m.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:!!m.depthPacking,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let y in m.defines)x.push(y),x.push(m.defines[y]);return m.isRawShaderMaterial===!1&&(function(y,v){y.push(v.precision),y.push(v.outputEncoding),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.combine),y.push(v.vertexUvs),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}(x,m),function(y,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.map&&o.enable(4),v.matcap&&o.enable(5),v.envMap&&o.enable(6),v.lightMap&&o.enable(7),v.aoMap&&o.enable(8),v.emissiveMap&&o.enable(9),v.bumpMap&&o.enable(10),v.normalMap&&o.enable(11),v.objectSpaceNormalMap&&o.enable(12),v.tangentSpaceNormalMap&&o.enable(13),v.clearcoat&&o.enable(14),v.clearcoatMap&&o.enable(15),v.clearcoatRoughnessMap&&o.enable(16),v.clearcoatNormalMap&&o.enable(17),v.iridescence&&o.enable(18),v.iridescenceMap&&o.enable(19),v.iridescenceThicknessMap&&o.enable(20),v.displacementMap&&o.enable(21),v.specularMap&&o.enable(22),v.roughnessMap&&o.enable(23),v.metalnessMap&&o.enable(24),v.gradientMap&&o.enable(25),v.alphaMap&&o.enable(26),v.alphaTest&&o.enable(27),v.vertexColors&&o.enable(28),v.vertexAlphas&&o.enable(29),v.vertexUvs&&o.enable(30),v.vertexTangents&&o.enable(31),v.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.physicallyCorrectLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.specularIntensityMap&&o.enable(15),v.specularColorMap&&o.enable(16),v.transmission&&o.enable(17),v.transmissionMap&&o.enable(18),v.thicknessMap&&o.enable(19),v.sheen&&o.enable(20),v.sheenColorMap&&o.enable(21),v.sheenRoughnessMap&&o.enable(22),v.decodeVideoTexture&&o.enable(23),v.opaque&&o.enable(24),y.push(o.mask)}(x,m),x.push(r.outputEncoding)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=f[m.type],y;if(x){let v=di[x];y=ah.clone(v.uniforms)}else y=m.uniforms;return y},acquireProgram:function(m,x){let y;for(let v=0,_=h.length;v<_;v++){let w=h[v];if(w.cacheKey===x){y=w,++y.usedTimes;break}}return y===void 0&&(y=new cm(r,x,m,s),h.push(y)),y},releaseProgram:function(m){if(--m.usedTimes==0){let x=h.indexOf(m);h[x]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function fm(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ih(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,h,c,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=h,u.renderOrder=a.renderOrder,u.z=c,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||gm),i.length>1&&i.sort(o||Dh),n.length>1&&n.sort(o||Dh)}}}function vm(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Ih,r.set(e,[n])):t>=i.length?(n=new Ih,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function xm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ye};break;case"SpotLight":t={position:new E,direction:new E,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new E,halfWidth:new E,halfHeight:new E}}return r[e.id]=t,t}}}let ym=0;function _m(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bm(r,e){let t=new xm,i=function(){let l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)n.probe.push(new E);let s=new E,a=new Oe,o=new Oe;return{setup:function(l,h){let c=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,f=0,m=0,x=0,y=0,v=0,_=0,w=0,S=0,C=0;l.sort(_m);let D=h!==!0?Math.PI:1;for(let U=0,H=l.length;U<H;U++){let O=l[U],X=O.color,ie=O.intensity,K=O.distance,ae=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)c+=X.r*ie*D,d+=X.g*ie*D,u+=X.b*ie*D;else if(O.isLightProbe)for(let se=0;se<9;se++)n.probe[se].addScaledVector(O.sh.coefficients[se],ie);else if(O.isDirectionalLight){let se=t.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity*D),O.castShadow){let ue=O.shadow,de=i.get(O);de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize=ue.mapSize,n.directionalShadow[p]=de,n.directionalShadowMap[p]=ae,n.directionalShadowMatrix[p]=O.shadow.matrix,v++}n.directional[p]=se,p++}else if(O.isSpotLight){let se=t.get(O);se.position.setFromMatrixPosition(O.matrixWorld),se.color.copy(X).multiplyScalar(ie*D),se.distance=K,se.coneCos=Math.cos(O.angle),se.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),se.decay=O.decay,n.spot[m]=se;let ue=O.shadow;if(O.map&&(n.spotLightMap[S]=O.map,S++,ue.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[m]=ue.matrix,O.castShadow){let de=i.get(O);de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize=ue.mapSize,n.spotShadow[m]=de,n.spotShadowMap[m]=ae,w++}m++}else if(O.isRectAreaLight){let se=t.get(O);se.color.copy(X).multiplyScalar(ie),se.halfWidth.set(.5*O.width,0,0),se.halfHeight.set(0,.5*O.height,0),n.rectArea[x]=se,x++}else if(O.isPointLight){let se=t.get(O);if(se.color.copy(O.color).multiplyScalar(O.intensity*D),se.distance=O.distance,se.decay=O.decay,O.castShadow){let ue=O.shadow,de=i.get(O);de.shadowBias=ue.bias,de.shadowNormalBias=ue.normalBias,de.shadowRadius=ue.radius,de.shadowMapSize=ue.mapSize,de.shadowCameraNear=ue.camera.near,de.shadowCameraFar=ue.camera.far,n.pointShadow[f]=de,n.pointShadowMap[f]=ae,n.pointShadowMatrix[f]=O.shadow.matrix,_++}n.point[f]=se,f++}else if(O.isHemisphereLight){let se=t.get(O);se.skyColor.copy(O.color).multiplyScalar(ie*D),se.groundColor.copy(O.groundColor).multiplyScalar(ie*D),n.hemi[y]=se,y++}}x>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;N.directionalLength===p&&N.pointLength===f&&N.spotLength===m&&N.rectAreaLength===x&&N.hemiLength===y&&N.numDirectionalShadows===v&&N.numPointShadows===_&&N.numSpotShadows===w&&N.numSpotMaps===S||(n.directional.length=p,n.spot.length=m,n.rectArea.length=x,n.point.length=f,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,N.directionalLength=p,N.pointLength=f,N.spotLength=m,N.rectAreaLength=x,N.hemiLength=y,N.numDirectionalShadows=v,N.numPointShadows=_,N.numSpotShadows=w,N.numSpotMaps=S,n.version=ym++)},setupView:function(l,h){let c=0,d=0,u=0,p=0,f=0,m=h.matrixWorldInverse;for(let x=0,y=l.length;x<y;x++){let v=l[x];if(v.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),c++}else if(v.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),_.halfWidth.set(.5*v.width,0,0),_.halfHeight.set(0,.5*v.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[f];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),f++}}},state:n}}function Oh(r,e){let t=new bm(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function Mm(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new Oh(r,e),t.set(i,[a])):n>=s.length?(a=new Oh(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}class _o extends Pt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bo extends Pt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wm(r,e,t){let i=new Rs,n=new te,s=new te,a=new Je,o=new _o({depthPacking:3201}),l=new bo,h={},c=t.maxTextureSize,d={0:1,1:0,2:2},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ue;f.setAttribute("position",new et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new At(f,u),x=this;function y(w,S){let C=e.update(m);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new hi(n.x,n.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,C,u,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,C,p,m,null)}function v(w,S,C,D,N,U){let H=null,O=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)H=O;else if(H=C.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let X=H.uuid,ie=S.uuid,K=h[X];K===void 0&&(K={},h[X]=K);let ae=K[ie];ae===void 0&&(ae=H.clone(),K[ie]=ae),H=ae}return H.visible=S.visible,H.wireframe=S.wireframe,H.side=U===3?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:d[S.side],H.alphaMap=S.alphaMap,H.alphaTest=S.alphaTest,H.map=S.map,H.clipShadows=S.clipShadows,H.clippingPlanes=S.clippingPlanes,H.clipIntersection=S.clipIntersection,H.displacementMap=S.displacementMap,H.displacementScale=S.displacementScale,H.displacementBias=S.displacementBias,H.wireframeLinewidth=S.wireframeLinewidth,H.linewidth=S.linewidth,C.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(C.matrixWorld),H.nearDistance=D,H.farDistance=N),H}function _(w,S,C,D,N){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===3)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let H=e.update(w),O=w.material;if(Array.isArray(O)){let X=H.groups;for(let ie=0,K=X.length;ie<K;ie++){let ae=X[ie],se=O[ae.materialIndex];if(se&&se.visible){let ue=v(w,se,D,C.near,C.far,N);r.renderBufferDirect(C,null,H,ue,w,ae)}}}else if(O.visible){let X=v(w,O,D,C.near,C.far,N);r.renderBufferDirect(C,null,H,X,w,null)}}let U=w.children;for(let H=0,O=U.length;H<O;H++)_(U[H],S,C,D,N)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(w,S,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;let D=r.getRenderTarget(),N=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let O=0,X=w.length;O<X;O++){let ie=w[O],K=ie.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);let ae=K.getFrameExtents();if(n.multiply(ae),s.copy(K.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/ae.x),n.x=s.x*ae.x,K.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/ae.y),n.y=s.y*ae.y,K.mapSize.y=s.y)),K.map===null){let ue=this.type!==3?{minFilter:1003,magFilter:1003}:{};K.map=new hi(n.x,n.y,ue),K.map.texture.name=ie.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();let se=K.getViewportCount();for(let ue=0;ue<se;ue++){let de=K.getViewport(ue);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),H.viewport(a),K.updateMatrices(ie,ue),i=K.getFrustum(),_(S,C,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===3&&y(K,C),K.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(D,N,U)}}function Sm(r,e,t){let i=t.isWebGL2,n=new function(){let T=!1,F=new Je,z=null,J=new Je(0,0,0,0);return{setMask:function(Y){z===Y||T||(r.colorMask(Y,Y,Y,Y),z=Y)},setLocked:function(Y){T=Y},setClear:function(Y,Q,ve,Me,Te){Te===!0&&(Y*=Me,Q*=Me,ve*=Me),F.set(Y,Q,ve,Me),J.equals(F)===!1&&(r.clearColor(Y,Q,ve,Me),J.copy(F))},reset:function(){T=!1,z=null,J.set(-1,0,0,0)}}},s=new function(){let T=!1,F=null,z=null,J=null;return{setTest:function(Y){Y?oe(2929):Le(2929)},setMask:function(Y){F===Y||T||(r.depthMask(Y),F=Y)},setFunc:function(Y){if(z!==Y){switch(Y){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:default:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517)}z=Y}},setLocked:function(Y){T=Y},setClear:function(Y){J!==Y&&(r.clearDepth(Y),J=Y)},reset:function(){T=!1,F=null,z=null,J=null}}},a=new function(){let T=!1,F=null,z=null,J=null,Y=null,Q=null,ve=null,Me=null,Te=null;return{setTest:function(fe){T||(fe?oe(2960):Le(2960))},setMask:function(fe){F===fe||T||(r.stencilMask(fe),F=fe)},setFunc:function(fe,De,ze){z===fe&&J===De&&Y===ze||(r.stencilFunc(fe,De,ze),z=fe,J=De,Y=ze)},setOp:function(fe,De,ze){Q===fe&&ve===De&&Me===ze||(r.stencilOp(fe,De,ze),Q=fe,ve=De,Me=ze)},setLocked:function(fe){T=fe},setClear:function(fe){Te!==fe&&(r.clearStencil(fe),Te=fe)},reset:function(){T=!1,F=null,z=null,J=null,Y=null,Q=null,ve=null,Me=null,Te=null}}},o=new WeakMap,l=new WeakMap,h={},c={},d=new WeakMap,u=[],p=null,f=!1,m=null,x=null,y=null,v=null,_=null,w=null,S=null,C=!1,D=null,N=null,U=null,H=null,O=null,X=r.getParameter(35661),ie=!1,K=0,ae=r.getParameter(7938);ae.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ie=K>=1):ae.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ie=K>=2);let se=null,ue={},de=r.getParameter(3088),le=r.getParameter(2978),j=new Je().fromArray(de),Z=new Je().fromArray(le);function me(T,F,z){let J=new Uint8Array(4),Y=r.createTexture();r.bindTexture(T,Y),r.texParameteri(T,10241,9728),r.texParameteri(T,10240,9728);for(let Q=0;Q<z;Q++)r.texImage2D(F+Q,0,6408,1,1,0,6408,5121,J);return Y}let ge={};function oe(T){h[T]!==!0&&(r.enable(T),h[T]=!0)}function Le(T){h[T]!==!1&&(r.disable(T),h[T]=!1)}ge[3553]=me(3553,3553,1),ge[34067]=me(34067,34069,6),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),oe(2929),s.setFunc(3),B(!1),P(1),oe(2884),V(0);let L={[100]:32774,101:32778,102:32779};if(i)L[103]=32775,L[104]=32776;else{let T=e.get("EXT_blend_minmax");T!==null&&(L[103]=T.MIN_EXT,L[104]=T.MAX_EXT)}let A={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function V(T,F,z,J,Y,Q,ve,Me){if(T!==0){if(f===!1&&(oe(3042),f=!0),T===5)Y=Y||F,Q=Q||z,ve=ve||J,F===x&&Y===_||(r.blendEquationSeparate(L[F],L[Y]),x=F,_=Y),z===y&&J===v&&Q===w&&ve===S||(r.blendFuncSeparate(A[z],A[J],A[Q],A[ve]),y=z,v=J,w=Q,S=ve),m=T,C=!1;else if(T!==m||Me!==C){if(x===100&&_===100||(r.blendEquation(32774),x=100,_=100),Me)switch(T){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}else switch(T){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T)}y=null,v=null,w=null,S=null,m=T,C=Me}}else f===!0&&(Le(3042),f=!1)}function B(T){D!==T&&(T?r.frontFace(2304):r.frontFace(2305),D=T)}function P(T){T!==0?(oe(2884),T!==N&&(T===1?r.cullFace(1029):T===2?r.cullFace(1028):r.cullFace(1032))):Le(2884),N=T}function G(T,F,z){T?(oe(32823),H===F&&O===z||(r.polygonOffset(F,z),H=F,O=z)):Le(32823)}return{buffers:{color:n,depth:s,stencil:a},enable:oe,disable:Le,bindFramebuffer:function(T,F){return c[T]!==F&&(r.bindFramebuffer(T,F),c[T]=F,i&&(T===36009&&(c[36160]=F),T===36160&&(c[36009]=F)),!0)},drawBuffers:function(T,F){let z=u,J=!1;if(T)if(z=d.get(F),z===void 0&&(z=[],d.set(F,z)),T.isWebGLMultipleRenderTargets){let Y=T.texture;if(z.length!==Y.length||z[0]!==36064){for(let Q=0,ve=Y.length;Q<ve;Q++)z[Q]=36064+Q;z.length=Y.length,J=!0}}else z[0]!==36064&&(z[0]=36064,J=!0);else z[0]!==1029&&(z[0]=1029,J=!0);J&&(t.isWebGL2?r.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(T){return p!==T&&(r.useProgram(T),p=T,!0)},setBlending:V,setMaterial:function(T,F){T.side===2?Le(2884):oe(2884);let z=T.side===1;F&&(z=!z),B(z),T.blending===1&&T.transparent===!1?V(0):V(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),n.setMask(T.colorWrite);let J=T.stencilWrite;a.setTest(J),J&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),G(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?oe(32926):Le(32926)},setFlipSided:B,setCullFace:P,setLineWidth:function(T){T!==U&&(ie&&r.lineWidth(T),U=T)},setPolygonOffset:G,setScissorTest:function(T){T?oe(3089):Le(3089)},activeTexture:function(T){T===void 0&&(T=33984+X-1),se!==T&&(r.activeTexture(T),se=T)},bindTexture:function(T,F,z){z===void 0&&(z=se===null?33984+X-1:se);let J=ue[z];J===void 0&&(J={type:void 0,texture:void 0},ue[z]=J),J.type===T&&J.texture===F||(se!==z&&(r.activeTexture(z),se=z),r.bindTexture(T,F||ge[T]),J.type=T,J.texture=F)},unbindTexture:function(){let T=ue[se];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},updateUBOMapping:function(T,F){let z=l.get(F);z===void 0&&(z=new WeakMap,l.set(F,z));let J=z.get(T);J===void 0&&(J=r.getUniformBlockIndex(F,T.name),z.set(T,J))},uniformBlockBinding:function(T,F){let z=l.get(F).get(T);o.get(F)!==z&&(r.uniformBlockBinding(F,z,T.__bindingPointIndex),o.set(F,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}},scissor:function(T){j.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),j.copy(T))},viewport:function(T){Z.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),Z.copy(T))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),i===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},se=null,ue={},c={},d=new WeakMap,u=[],p=null,f=!1,m=null,x=null,y=null,v=null,_=null,w=null,S=null,C=!1,D=null,N=null,U=null,H=null,O=null,j.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Tm(r,e,t,i,n,s,a){let o=n.isWebGL2,l=n.maxTextures,h=n.maxCubemapSize,c=n.maxTextureSize,d=n.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap,m,x=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,A){return y?new OffscreenCanvas(L,A):hr("canvas")}function _(L,A,V,B){let P=1;if((L.width>B||L.height>B)&&(P=B/Math.max(L.width,L.height)),P<1||A===!0){if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let G=A?hs:Math.floor,T=G(P*L.width),F=G(P*L.height);m===void 0&&(m=v(T,F));let z=V?v(T,F):m;return z.width=T,z.height=F,z.getContext("2d").drawImage(L,0,0,T,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+T+"x"+F+")."),z}return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L}return L}function w(L){return Va(L.width)&&Va(L.height)}function S(L,A){return L.generateMipmaps&&A&&L.minFilter!==1003&&L.minFilter!==1006}function C(L){r.generateMipmap(L)}function D(L,A,V,B,P=!1){if(o===!1)return A;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let G=A;return A===6403&&(V===5126&&(G=33326),V===5131&&(G=33325),V===5121&&(G=33321)),A===33319&&(V===5126&&(G=33328),V===5131&&(G=33327),V===5121&&(G=33323)),A===6408&&(V===5126&&(G=34836),V===5131&&(G=34842),V===5121&&(G=B===3001&&P===!1?35907:32856),V===32819&&(G=32854),V===32820&&(G=32855)),G!==33325&&G!==33326&&G!==33327&&G!==33328&&G!==34842&&G!==34836||e.get("EXT_color_buffer_float"),G}function N(L,A,V){return S(L,V)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function U(L){return L===1003||L===1004||L===1005?9728:9729}function H(L){let A=L.target;A.removeEventListener("dispose",H),function(V){let B=i.get(V);if(B.__webglInit===void 0)return;let P=V.source,G=x.get(P);if(G){let T=G[B.__cacheKey];T.usedTimes--,T.usedTimes===0&&X(V),Object.keys(G).length===0&&x.delete(P)}i.remove(V)}(A),A.isVideoTexture&&f.delete(A)}function O(L){let A=L.target;A.removeEventListener("dispose",O),function(V){let B=V.texture,P=i.get(V),G=i.get(B);if(G.__webglTexture!==void 0&&(r.deleteTexture(G.__webglTexture),a.memory.textures--),V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let T=0;T<6;T++)r.deleteFramebuffer(P.__webglFramebuffer[T]),P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[T]);else{if(r.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let T=0;T<P.__webglColorRenderbuffer.length;T++)P.__webglColorRenderbuffer[T]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[T]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(V.isWebGLMultipleRenderTargets)for(let T=0,F=B.length;T<F;T++){let z=i.get(B[T]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(B[T])}i.remove(B),i.remove(V)}(A)}function X(L){let A=i.get(L);r.deleteTexture(A.__webglTexture);let V=L.source;delete x.get(V)[A.__cacheKey],a.memory.textures--}let ie=0;function K(L,A){let V=i.get(L);if(L.isVideoTexture&&function(B){let P=a.render.frame;f.get(B)!==P&&(f.set(B,P),B.update())}(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){let B=L.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(B.complete!==!1)return void le(V,L,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(3553,V.__webglTexture,33984+A)}let ae={[1e3]:10497,[1001]:33071,[1002]:33648},se={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function ue(L,A,V){if(V?(r.texParameteri(L,10242,ae[A.wrapS]),r.texParameteri(L,10243,ae[A.wrapT]),L!==32879&&L!==35866||r.texParameteri(L,32882,ae[A.wrapR]),r.texParameteri(L,10240,se[A.magFilter]),r.texParameteri(L,10241,se[A.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),L!==32879&&L!==35866||r.texParameteri(L,32882,33071),A.wrapS===1001&&A.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,U(A.magFilter)),r.texParameteri(L,10241,U(A.minFilter)),A.minFilter!==1003&&A.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let B=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===1003||A.minFilter!==1005&&A.minFilter!==1008||A.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(r.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function de(L,A){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",H));let B=A.source,P=x.get(B);P===void 0&&(P={},x.set(B,P));let G=function(T){let F=[];return F.push(T.wrapS),F.push(T.wrapT),F.push(T.wrapR||0),F.push(T.magFilter),F.push(T.minFilter),F.push(T.anisotropy),F.push(T.internalFormat),F.push(T.format),F.push(T.type),F.push(T.generateMipmaps),F.push(T.premultiplyAlpha),F.push(T.flipY),F.push(T.unpackAlignment),F.push(T.encoding),F.join()}(A);if(G!==L.__cacheKey){P[G]===void 0&&(P[G]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),P[G].usedTimes++;let T=P[L.__cacheKey];T!==void 0&&(P[L.__cacheKey].usedTimes--,T.usedTimes===0&&X(A)),L.__cacheKey=G,L.__webglTexture=P[G].texture}return V}function le(L,A,V){let B=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(B=35866),A.isData3DTexture&&(B=32879);let P=de(L,A),G=A.source;t.bindTexture(B,L.__webglTexture,33984+V);let T=i.get(G);if(G.version!==T.__version||P===!0){t.activeTexture(33984+V),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);let F=function(Ce){return!o&&(Ce.wrapS!==1001||Ce.wrapT!==1001||Ce.minFilter!==1003&&Ce.minFilter!==1006)}(A)&&w(A.image)===!1,z=_(A.image,F,!1,c);z=Le(A,z);let J=w(z)||o,Y=s.convert(A.format,A.encoding),Q,ve=s.convert(A.type),Me=D(A.internalFormat,Y,ve,A.encoding,A.isVideoTexture);ue(B,A,J);let Te=A.mipmaps,fe=o&&A.isVideoTexture!==!0,De=T.__version===void 0||P===!0,ze=N(A,z,J);if(A.isDepthTexture)Me=6402,o?Me=A.type===1015?36012:A.type===1014?33190:A.type===1020?35056:33189:A.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===1026&&Me===6402&&A.type!==1012&&A.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=1014,ve=s.convert(A.type)),A.format===1027&&Me===6402&&(Me=34041,A.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=1020,ve=s.convert(A.type))),De&&(fe?t.texStorage2D(3553,1,Me,z.width,z.height):t.texImage2D(3553,0,Me,z.width,z.height,0,Y,ve,null));else if(A.isDataTexture)if(Te.length>0&&J){fe&&De&&t.texStorage2D(3553,ze,Me,Te[0].width,Te[0].height);for(let Ce=0,$e=Te.length;Ce<$e;Ce++)Q=Te[Ce],fe?t.texSubImage2D(3553,Ce,0,0,Q.width,Q.height,Y,ve,Q.data):t.texImage2D(3553,Ce,Me,Q.width,Q.height,0,Y,ve,Q.data);A.generateMipmaps=!1}else fe?(De&&t.texStorage2D(3553,ze,Me,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,Y,ve,z.data)):t.texImage2D(3553,0,Me,z.width,z.height,0,Y,ve,z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){fe&&De&&t.texStorage3D(35866,ze,Me,Te[0].width,Te[0].height,z.depth);for(let Ce=0,$e=Te.length;Ce<$e;Ce++)Q=Te[Ce],A.format!==1023?Y!==null?fe?t.compressedTexSubImage3D(35866,Ce,0,0,0,Q.width,Q.height,z.depth,Y,Q.data,0,0):t.compressedTexImage3D(35866,Ce,Me,Q.width,Q.height,z.depth,0,Q.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(35866,Ce,0,0,0,Q.width,Q.height,z.depth,Y,ve,Q.data):t.texImage3D(35866,Ce,Me,Q.width,Q.height,z.depth,0,Y,ve,Q.data)}else{fe&&De&&t.texStorage2D(3553,ze,Me,Te[0].width,Te[0].height);for(let Ce=0,$e=Te.length;Ce<$e;Ce++)Q=Te[Ce],A.format!==1023?Y!==null?fe?t.compressedTexSubImage2D(3553,Ce,0,0,Q.width,Q.height,Y,Q.data):t.compressedTexImage2D(3553,Ce,Me,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(3553,Ce,0,0,Q.width,Q.height,Y,ve,Q.data):t.texImage2D(3553,Ce,Me,Q.width,Q.height,0,Y,ve,Q.data)}else if(A.isDataArrayTexture)fe?(De&&t.texStorage3D(35866,ze,Me,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,Y,ve,z.data)):t.texImage3D(35866,0,Me,z.width,z.height,z.depth,0,Y,ve,z.data);else if(A.isData3DTexture)fe?(De&&t.texStorage3D(32879,ze,Me,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,Y,ve,z.data)):t.texImage3D(32879,0,Me,z.width,z.height,z.depth,0,Y,ve,z.data);else if(A.isFramebufferTexture){if(De)if(fe)t.texStorage2D(3553,ze,Me,z.width,z.height);else{let Ce=z.width,$e=z.height;for(let Kt=0;Kt<ze;Kt++)t.texImage2D(3553,Kt,Me,Ce,$e,0,Y,ve,null),Ce>>=1,$e>>=1}}else if(Te.length>0&&J){fe&&De&&t.texStorage2D(3553,ze,Me,Te[0].width,Te[0].height);for(let Ce=0,$e=Te.length;Ce<$e;Ce++)Q=Te[Ce],fe?t.texSubImage2D(3553,Ce,0,0,Y,ve,Q):t.texImage2D(3553,Ce,Me,Y,ve,Q);A.generateMipmaps=!1}else fe?(De&&t.texStorage2D(3553,ze,Me,z.width,z.height),t.texSubImage2D(3553,0,0,0,Y,ve,z)):t.texImage2D(3553,0,Me,Y,ve,z);S(A,J)&&C(B),T.__version=G.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function j(L,A,V,B,P){let G=s.convert(V.format,V.encoding),T=s.convert(V.type),F=D(V.internalFormat,G,T,V.encoding);i.get(A).__hasExternalTextures||(P===32879||P===35866?t.texImage3D(P,0,F,A.width,A.height,A.depth,0,G,T,null):t.texImage2D(P,0,F,A.width,A.height,0,G,T,null)),t.bindFramebuffer(36160,L),oe(A)?u.framebufferTexture2DMultisampleEXT(36160,B,P,i.get(V).__webglTexture,0,ge(A)):(P===3553||P>=34069&&P<=34074)&&r.framebufferTexture2D(36160,B,P,i.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Z(L,A,V){if(r.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let B=33189;if(V||oe(A)){let P=A.depthTexture;P&&P.isDepthTexture&&(P.type===1015?B=36012:P.type===1014&&(B=33190));let G=ge(A);oe(A)?u.renderbufferStorageMultisampleEXT(36161,G,B,A.width,A.height):r.renderbufferStorageMultisample(36161,G,B,A.width,A.height)}else r.renderbufferStorage(36161,B,A.width,A.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){let B=ge(A);V&&oe(A)===!1?r.renderbufferStorageMultisample(36161,B,35056,A.width,A.height):oe(A)?u.renderbufferStorageMultisampleEXT(36161,B,35056,A.width,A.height):r.renderbufferStorage(36161,34041,A.width,A.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{let B=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let P=0;P<B.length;P++){let G=B[P],T=s.convert(G.format,G.encoding),F=s.convert(G.type),z=D(G.internalFormat,T,F,G.encoding),J=ge(A);V&&oe(A)===!1?r.renderbufferStorageMultisample(36161,J,z,A.width,A.height):oe(A)?u.renderbufferStorageMultisampleEXT(36161,J,z,A.width,A.height):r.renderbufferStorage(36161,z,A.width,A.height)}}r.bindRenderbuffer(36161,null)}function me(L){let A=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");(function(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,B),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(P.depthTexture).__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),K(P.depthTexture,0);let G=i.get(P.depthTexture).__webglTexture,T=ge(P);if(P.depthTexture.format===1026)oe(P)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,G,0,T):r.framebufferTexture2D(36160,36096,3553,G,0);else{if(P.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");oe(P)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,G,0,T):r.framebufferTexture2D(36160,33306,3553,G,0)}})(A.__webglFramebuffer,L)}else if(V){A.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(36160,A.__webglFramebuffer[B]),A.__webglDepthbuffer[B]=r.createRenderbuffer(),Z(A.__webglDepthbuffer[B],L,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),Z(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function ge(L){return Math.min(d,L.samples)}function oe(L){let A=i.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Le(L,A){let V=L.encoding,B=L.format,P=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===1035||V!==3e3&&(V===3001?o===!1?e.has("EXT_sRGB")===!0&&B===1023?(L.format=1035,L.minFilter=1006,L.generateMipmaps=!1):A=Xa.sRGBToLinear(A):B===1023&&P===1009||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),A}this.allocateTextureUnit=function(){let L=ie;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),ie+=1,L},this.resetTextureUnits=function(){ie=0},this.setTexture2D=K,this.setTexture2DArray=function(L,A){let V=i.get(L);L.version>0&&V.__version!==L.version?le(V,L,A):t.bindTexture(35866,V.__webglTexture,33984+A)},this.setTexture3D=function(L,A){let V=i.get(L);L.version>0&&V.__version!==L.version?le(V,L,A):t.bindTexture(32879,V.__webglTexture,33984+A)},this.setTextureCube=function(L,A){let V=i.get(L);L.version>0&&V.__version!==L.version?function(B,P,G){if(P.image.length!==6)return;let T=de(B,P),F=P.source;t.bindTexture(34067,B.__webglTexture,33984+G);let z=i.get(F);if(F.version!==z.__version||T===!0){t.activeTexture(33984+G),r.pixelStorei(37440,P.flipY),r.pixelStorei(37441,P.premultiplyAlpha),r.pixelStorei(3317,P.unpackAlignment),r.pixelStorei(37443,0);let J=P.isCompressedTexture||P.image[0].isCompressedTexture,Y=P.image[0]&&P.image[0].isDataTexture,Q=[];for(let Ae=0;Ae<6;Ae++)Q[Ae]=J||Y?Y?P.image[Ae].image:P.image[Ae]:_(P.image[Ae],!1,!0,h),Q[Ae]=Le(P,Q[Ae]);let ve=Q[0],Me=w(ve)||o,Te=s.convert(P.format,P.encoding),fe=s.convert(P.type),De=D(P.internalFormat,Te,fe,P.encoding),ze=o&&P.isVideoTexture!==!0,Ce=z.__version===void 0||T===!0,$e,Kt=N(P,ve,Me);if(ue(34067,P,Me),J){ze&&Ce&&t.texStorage2D(34067,Kt,De,ve.width,ve.height);for(let Ae=0;Ae<6;Ae++){$e=Q[Ae].mipmaps;for(let tt=0;tt<$e.length;tt++){let it=$e[tt];P.format!==1023?Te!==null?ze?t.compressedTexSubImage2D(34069+Ae,tt,0,0,it.width,it.height,Te,it.data):t.compressedTexImage2D(34069+Ae,tt,De,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+Ae,tt,0,0,it.width,it.height,Te,fe,it.data):t.texImage2D(34069+Ae,tt,De,it.width,it.height,0,Te,fe,it.data)}}}else{$e=P.mipmaps,ze&&Ce&&($e.length>0&&Kt++,t.texStorage2D(34067,Kt,De,Q[0].width,Q[0].height));for(let Ae=0;Ae<6;Ae++)if(Y){ze?t.texSubImage2D(34069+Ae,0,0,0,Q[Ae].width,Q[Ae].height,Te,fe,Q[Ae].data):t.texImage2D(34069+Ae,0,De,Q[Ae].width,Q[Ae].height,0,Te,fe,Q[Ae].data);for(let tt=0;tt<$e.length;tt++){let it=$e[tt].image[Ae].image;ze?t.texSubImage2D(34069+Ae,tt+1,0,0,it.width,it.height,Te,fe,it.data):t.texImage2D(34069+Ae,tt+1,De,it.width,it.height,0,Te,fe,it.data)}}else{ze?t.texSubImage2D(34069+Ae,0,0,0,Te,fe,Q[Ae]):t.texImage2D(34069+Ae,0,De,Te,fe,Q[Ae]);for(let tt=0;tt<$e.length;tt++){let it=$e[tt];ze?t.texSubImage2D(34069+Ae,tt+1,0,0,Te,fe,it.image[Ae]):t.texImage2D(34069+Ae,tt+1,De,Te,fe,it.image[Ae])}}}S(P,Me)&&C(34067),z.__version=F.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}(V,L,A):t.bindTexture(34067,V.__webglTexture,33984+A)},this.rebindTextures=function(L,A,V){let B=i.get(L);A!==void 0&&j(B.__webglFramebuffer,L,L.texture,36064,3553),V!==void 0&&me(L)},this.setupRenderTarget=function(L){let A=L.texture,V=i.get(L),B=i.get(A);L.addEventListener("dispose",O),L.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=r.createTexture()),B.__version=A.version,a.memory.textures++);let P=L.isWebGLCubeRenderTarget===!0,G=L.isWebGLMultipleRenderTargets===!0,T=w(L)||o;if(P){V.__webglFramebuffer=[];for(let F=0;F<6;F++)V.__webglFramebuffer[F]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),G)if(n.drawBuffers){let F=L.texture;for(let z=0,J=F.length;z<J;z++){let Y=i.get(F[z]);Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&oe(L)===!1){let F=G?A:[A];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let z=0;z<F.length;z++){let J=F[z];V.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[z]);let Y=s.convert(J.format,J.encoding),Q=s.convert(J.type),ve=D(J.internalFormat,Y,Q,J.encoding,L.isXRRenderTarget===!0),Me=ge(L);r.renderbufferStorageMultisample(36161,Me,ve,L.width,L.height),r.framebufferRenderbuffer(36160,36064+z,36161,V.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(P){t.bindTexture(34067,B.__webglTexture),ue(34067,A,T);for(let F=0;F<6;F++)j(V.__webglFramebuffer[F],L,A,36064,34069+F);S(A,T)&&C(34067),t.unbindTexture()}else if(G){let F=L.texture;for(let z=0,J=F.length;z<J;z++){let Y=F[z],Q=i.get(Y);t.bindTexture(3553,Q.__webglTexture),ue(3553,Y,T),j(V.__webglFramebuffer,L,Y,36064+z,3553),S(Y,T)&&C(3553)}t.unbindTexture()}else{let F=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?F=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(F,B.__webglTexture),ue(F,A,T),j(V.__webglFramebuffer,L,A,36064,F),S(A,T)&&C(F),t.unbindTexture()}L.depthBuffer&&me(L)},this.updateRenderTargetMipmap=function(L){let A=w(L)||o,V=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let B=0,P=V.length;B<P;B++){let G=V[B];if(S(G,A)){let T=L.isWebGLCubeRenderTarget?34067:3553,F=i.get(G).__webglTexture;t.bindTexture(T,F),C(T),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(L){if(o&&L.samples>0&&oe(L)===!1){let A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],V=L.width,B=L.height,P=16384,G=[],T=L.stencilBuffer?33306:36096,F=i.get(L),z=L.isWebGLMultipleRenderTargets===!0;if(z)for(let J=0;J<A.length;J++)t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+J,36161,null),t.bindFramebuffer(36160,F.__webglFramebuffer),r.framebufferTexture2D(36009,36064+J,3553,null,0);t.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,F.__webglFramebuffer);for(let J=0;J<A.length;J++){G.push(36064+J),L.depthBuffer&&G.push(T);let Y=F.__ignoreDepthValues!==void 0&&F.__ignoreDepthValues;if(Y===!1&&(L.depthBuffer&&(P|=256),L.stencilBuffer&&(P|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,F.__webglColorRenderbuffer[J]),Y===!0&&(r.invalidateFramebuffer(36008,[T]),r.invalidateFramebuffer(36009,[T])),z){let Q=i.get(A[J]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Q,0)}r.blitFramebuffer(0,0,V,B,0,0,V,B,P,9728),p&&r.invalidateFramebuffer(36008,G)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let J=0;J<A.length;J++){t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+J,36161,F.__webglColorRenderbuffer[J]);let Y=i.get(A[J]).__webglTexture;t.bindFramebuffer(36160,F.__webglFramebuffer),r.framebufferTexture2D(36009,36064+J,3553,Y,0)}t.bindFramebuffer(36009,F.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=j,this.useMultisampledRTT=oe}function Nh(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=null){let a;if(n===1009)return 5121;if(n===1017)return 32819;if(n===1018)return 32820;if(n===1010)return 5120;if(n===1011)return 5122;if(n===1012)return 5123;if(n===1013)return 5124;if(n===1014)return 5125;if(n===1015)return 5126;if(n===1016)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return 6406;if(n===1023)return 6408;if(n===1024)return 6409;if(n===1025)return 6410;if(n===1026)return 6402;if(n===1027)return 34041;if(n===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return 6403;if(n===1029)return 36244;if(n===1030)return 33319;if(n===1031)return 33320;if(n===1033)return 36249;if(n===33776||n===33777||n===33778||n===33779)if(s===3001){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===35840||n===35841||n===35842||n===35843){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===37492||n===37496){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===37492)return s===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===37808)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===36492){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===36492)return s===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}if(n===36283||n===36284||n===36285||n===36286){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===1020?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}class zh extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}let Am={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let m of e.hand.values()){let x=t.getJointPose(m,i),y=this._getHandJoint(h,m);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=x.radius),y.visible=x!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,f=.005;h.inputState.pinching&&u>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Am)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fh extends ht{constructor(e,t,i,n,s,a,o,l,h,c){if((c=c!==void 0?c:1026)!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===1026&&(i=1014),i===void 0&&c===1027&&(i=1020),super(null,n,s,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class Em extends jt{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,p=null,f=null,m=t.getContextAttributes(),x=null,y=null,v=[],_=[],w=new Set,S=new Map,C=new Et;C.layers.enable(1),C.viewport=new Je;let D=new Et;D.layers.enable(2),D.viewport=new Je;let N=[C,D],U=new zh;U.layers.enable(1),U.layers.enable(2);let H=null,O=null;function X(j){let Z=_.indexOf(j.inputSource);if(Z===-1)return;let me=v[Z];me!==void 0&&me.dispatchEvent({type:j.type,data:j.inputSource})}function ie(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",ie),n.removeEventListener("inputsourceschange",K);for(let j=0;j<v.length;j++){let Z=_[j];Z!==null&&(_[j]=null,v[j].disconnect(Z))}H=null,O=null,e.setRenderTarget(x),p=null,u=null,d=null,n=null,y=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function K(j){for(let Z=0;Z<j.removed.length;Z++){let me=j.removed[Z],ge=_.indexOf(me);ge>=0&&(_[ge]=null,v[ge].disconnect(me))}for(let Z=0;Z<j.added.length;Z++){let me=j.added[Z],ge=_.indexOf(me);if(ge===-1){for(let Le=0;Le<v.length;Le++){if(Le>=_.length){_.push(me),ge=Le;break}if(_[Le]===null){_[Le]=me,ge=Le;break}}if(ge===-1)break}let oe=v[ge];oe&&oe.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new Mo,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new Mo,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new Mo,v[j]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",ie),n.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:n.renderState.layers!==void 0||m.antialias,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:p}),y=new hi(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let Z=null,me=null,ge=null;m.depth&&(ge=m.stencil?35056:33190,Z=m.stencil?1027:1026,me=m.stencil?1020:1014);let oe={colorFormat:32856,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(oe),n.updateRenderState({layers:[u]}),y=new hi(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Fh(u.textureWidth,u.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),le.setContext(n),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};let ae=new E,se=new E;function ue(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;U.near=D.near=C.near=j.near,U.far=D.far=C.far=j.far,H===U.near&&O===U.far||(n.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,O=U.far);let Z=j.parent,me=U.cameras;ue(U,Z);for(let oe=0;oe<me.length;oe++)ue(me[oe],Z);U.matrixWorld.decompose(U.position,U.quaternion,U.scale),j.matrix.copy(U.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);let ge=j.children;for(let oe=0,Le=ge.length;oe<Le;oe++)ge[oe].updateMatrixWorld(!0);me.length===2?function(oe,Le,L){ae.setFromMatrixPosition(Le.matrixWorld),se.setFromMatrixPosition(L.matrixWorld);let A=ae.distanceTo(se),V=Le.projectionMatrix.elements,B=L.projectionMatrix.elements,P=V[14]/(V[10]-1),G=V[14]/(V[10]+1),T=(V[9]+1)/V[5],F=(V[9]-1)/V[5],z=(V[8]-1)/V[0],J=(B[8]+1)/B[0],Y=P*z,Q=P*J,ve=A/(-z+J),Me=ve*-z;Le.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Me),oe.translateZ(ve),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();let Te=P+ve,fe=G+ve,De=Y-Me,ze=Q+(A-Me),Ce=T*G/fe*Te,$e=F*G/fe*Te;oe.projectionMatrix.makePerspective(De,ze,Ce,$e,Te,fe)}(U,C,D):U.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return U},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return w};let de=null,le=new hh;le.setAnimationLoop(function(j,Z){if(c=Z.getViewerPose(h||a),f=Z,c!==null){let me=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ge=!1;me.length!==U.cameras.length&&(U.cameras.length=0,ge=!0);for(let oe=0;oe<me.length;oe++){let Le=me[oe],L=null;if(p!==null)L=p.getViewport(Le);else{let V=d.getViewSubImage(u,Le);L=V.viewport,oe===0&&(e.setRenderTargetTextures(y,V.colorTexture,u.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(y))}let A=N[oe];A===void 0&&(A=new Et,A.layers.enable(oe),A.viewport=new Je,N[oe]=A),A.matrix.fromArray(Le.transform.matrix),A.projectionMatrix.fromArray(Le.projectionMatrix),A.viewport.set(L.x,L.y,L.width,L.height),oe===0&&U.matrix.copy(A.matrix),ge===!0&&U.cameras.push(A)}}for(let me=0;me<v.length;me++){let ge=_[me],oe=v[me];ge!==null&&oe!==void 0&&oe.update(ge,Z,h||a)}if(de&&de(j,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let me=null;for(let ge of w)Z.detectedPlanes.has(ge)||(me===null&&(me=[]),me.push(ge));if(me!==null)for(let ge of me)w.delete(ge),S.delete(ge),i.dispatchEvent({type:"planeremoved",data:ge});for(let ge of Z.detectedPlanes)if(w.has(ge)){let oe=S.get(ge);ge.lastChangedTime>oe&&(S.set(ge,ge.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ge}))}else w.add(ge),S.set(ge,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ge})}f=null}),this.setAnimationLoop=function(j){de=j},this.dispose=function(){}}}function Cm(r,e){function t(i,n){i.opacity.value=n.opacity,n.color&&i.diffuse.value.copy(n.color),n.emissive&&i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(i.map.value=n.map),n.alphaMap&&(i.alphaMap.value=n.alphaMap),n.bumpMap&&(i.bumpMap.value=n.bumpMap,i.bumpScale.value=n.bumpScale,n.side===1&&(i.bumpScale.value*=-1)),n.displacementMap&&(i.displacementMap.value=n.displacementMap,i.displacementScale.value=n.displacementScale,i.displacementBias.value=n.displacementBias),n.emissiveMap&&(i.emissiveMap.value=n.emissiveMap),n.normalMap&&(i.normalMap.value=n.normalMap,i.normalScale.value.copy(n.normalScale),n.side===1&&i.normalScale.value.negate()),n.specularMap&&(i.specularMap.value=n.specularMap),n.alphaTest>0&&(i.alphaTest.value=n.alphaTest);let s=e.get(n).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=n.reflectivity,i.ior.value=n.ior,i.refractionRatio.value=n.refractionRatio),n.lightMap){i.lightMap.value=n.lightMap;let l=r.physicallyCorrectLights!==!0?Math.PI:1;i.lightMapIntensity.value=n.lightMapIntensity*l}let a,o;n.aoMap&&(i.aoMap.value=n.aoMap,i.aoMapIntensity.value=n.aoMapIntensity),n.map?a=n.map:n.specularMap?a=n.specularMap:n.displacementMap?a=n.displacementMap:n.normalMap?a=n.normalMap:n.bumpMap?a=n.bumpMap:n.roughnessMap?a=n.roughnessMap:n.metalnessMap?a=n.metalnessMap:n.alphaMap?a=n.alphaMap:n.emissiveMap?a=n.emissiveMap:n.clearcoatMap?a=n.clearcoatMap:n.clearcoatNormalMap?a=n.clearcoatNormalMap:n.clearcoatRoughnessMap?a=n.clearcoatRoughnessMap:n.iridescenceMap?a=n.iridescenceMap:n.iridescenceThicknessMap?a=n.iridescenceThicknessMap:n.specularIntensityMap?a=n.specularIntensityMap:n.specularColorMap?a=n.specularColorMap:n.transmissionMap?a=n.transmissionMap:n.thicknessMap?a=n.thicknessMap:n.sheenColorMap?a=n.sheenColorMap:n.sheenRoughnessMap&&(a=n.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),i.uvTransform.value.copy(a.matrix)),n.aoMap?o=n.aoMap:n.lightMap&&(o=n.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),i.uv2Transform.value.copy(o.matrix))}return{refreshFogUniforms:function(i,n){n.color.getRGB(i.fogColor.value,sh(r)),n.isFog?(i.fogNear.value=n.near,i.fogFar.value=n.far):n.isFogExp2&&(i.fogDensity.value=n.density)},refreshMaterialUniforms:function(i,n,s,a,o){n.isMeshBasicMaterial||n.isMeshLambertMaterial?t(i,n):n.isMeshToonMaterial?(t(i,n),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(i,n)):n.isMeshPhongMaterial?(t(i,n),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(i,n)):n.isMeshStandardMaterial?(t(i,n),function(l,h){l.roughness.value=h.roughness,l.metalness.value=h.metalness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(i,n),n.isMeshPhysicalMaterial&&function(l,h,c){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),l.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===1&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=c.texture,l.transmissionSamplerSize.value.set(c.width,c.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap)}(i,n,o)):n.isMeshMatcapMaterial?(t(i,n),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(i,n)):n.isMeshDepthMaterial?t(i,n):n.isMeshDistanceMaterial?(t(i,n),function(l,h){l.referencePosition.value.copy(h.referencePosition),l.nearDistance.value=h.nearDistance,l.farDistance.value=h.farDistance}(i,n)):n.isMeshNormalMaterial?t(i,n):n.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity}(i,n),n.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(i,n)):n.isPointsMaterial?function(l,h,c,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*c,l.scale.value=.5*d,h.map&&(l.map.value=h.map),h.alphaMap&&(l.alphaMap.value=h.alphaMap),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let u;h.map?u=h.map:h.alphaMap&&(u=h.alphaMap),u!==void 0&&(u.matrixAutoUpdate===!0&&u.updateMatrix(),l.uvTransform.value.copy(u.matrix))}(i,n,s,a):n.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map),h.alphaMap&&(l.alphaMap.value=h.alphaMap),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest);let c;h.map?c=h.map:h.alphaMap&&(c=h.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),l.uvTransform.value.copy(c.matrix))}(i,n):n.isShadowMaterial?(i.color.value.copy(n.color),i.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}}}function Lm(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function l(d,u,p){let f=d.value;if(p[u]===void 0){if(typeof f=="number")p[u]=f;else{let m=Array.isArray(f)?f:[f],x=[];for(let y=0;y<m.length;y++)x.push(m[y].clone());p[u]=x}return!0}if(typeof f=="number"){if(p[u]!==f)return p[u]=f,!0}else{let m=Array.isArray(p[u])?p[u]:[p[u]],x=Array.isArray(f)?f:[f];for(let y=0;y<m.length;y++){let v=m[y];if(v.equals(x[y])===!1)return v.copy(x[y]),!0}}return!1}function h(d){let u={boundary:0,storage:0};return typeof d=="number"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&(function(x){let y=x.uniforms,v=0,_=16,w=0;for(let S=0,C=y.length;S<C;S++){let D=y[S],N={boundary:0,storage:0},U=Array.isArray(D.value)?D.value:[D.value];for(let H=0,O=U.length;H<O;H++){let X=h(U[H]);N.boundary+=X.boundary,N.storage+=X.storage}D.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,S>0&&(w=v%_,w!==0&&_-w-N.boundary<0&&(v+=_-w,D.__offset=v)),v+=N.storage}w=v%_,w>0&&(v+=_-w),x.__size=v,x.__cache={}}(d),p=function(x){let y=function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();x.__bindingPointIndex=y;let v=r.createBuffer(),_=x.__size,w=x.usage;return r.bindBuffer(35345,v),r.bufferData(35345,_,w),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,v),v}(d),n[d.id]=p,d.addEventListener("dispose",c));let f=u.program;i.updateUBOMapping(d,f);let m=e.render.frame;s[d.id]!==m&&(function(x){let y=n[x.id],v=x.uniforms,_=x.__cache;r.bindBuffer(35345,y);for(let w=0,S=v.length;w<S;w++){let C=v[w];if(l(C,w,_)===!0){let D=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],U=0;for(let H=0;H<N.length;H++){let O=N[H],X=h(O);typeof O=="number"?(C.__data[0]=O,r.bufferSubData(35345,D+U,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=O.elements[0],C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=O.elements[0],C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=O.elements[0]):(O.toArray(C.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,D,C.__data)}}r.bindBuffer(35345,null)}(d),s[d.id]=m)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}function Uh(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:function(){let R=hr("canvas");return R.style.display="block",R}(),t=r.context!==void 0?r.context:null,i=r.depth===void 0||r.depth,n=r.stencil===void 0||r.stencil,s=r.antialias!==void 0&&r.antialias,a=r.premultipliedAlpha===void 0||r.premultipliedAlpha,o=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,l=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat,c;c=t!==null?t.getContextAttributes().alpha:r.alpha!==void 0&&r.alpha;let d=null,u=null,p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let m=this,x=!1,y=0,v=0,_=null,w=-1,S=null,C=new Je,D=new Je,N=null,U=e.width,H=e.height,O=1,X=null,ie=null,K=new Je(0,0,U,H),ae=new Je(0,0,U,H),se=!1,ue=new Rs,de=!1,le=!1,j=null,Z=new Oe,me=new te,ge=new E,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return _===null?O:1}let L,A,V,B,P,G,T,F,z,J,Y,Q,ve,Me,Te,fe,De,ze,Ce,$e,Kt,Ae,tt,it,pe=t;function yu(R,q){for(let ee=0;ee<R.length;ee++){let $=R[ee],re=e.getContext($,q);if(re!==null)return re}return null}try{let R={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${M}`),e.addEventListener("webglcontextlost",bu,!1),e.addEventListener("webglcontextrestored",Mu,!1),e.addEventListener("webglcontextcreationerror",wu,!1),pe===null){let q=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&q.shift(),pe=yu(q,R),pe===null)throw yu(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}pe.getShaderPrecisionFormat===void 0&&(pe.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function _u(){L=new op(pe),A=new np(pe,L,r),L.init(A),Ae=new Nh(pe,L,A),V=new Sm(pe,L,A),B=new cp,P=new fm,G=new Tm(pe,L,V,P,A,Ae,B),T=new sp(m),F=new ap(m),z=new Qd(pe,A),tt=new tp(pe,L,z,A),J=new lp(pe,z,B,tt),Y=new mp(pe,J,z,B),Ce=new pp(pe,A,G),fe=new rp(P),Q=new mm(m,T,F,L,A,tt,fe),ve=new Cm(m,P),Me=new vm,Te=new Mm(L,A),ze=new ep(m,T,F,V,Y,c,a),De=new wm(m,Y,A),it=new Lm(pe,B,A,V),$e=new ip(pe,L,B,A),Kt=new hp(pe,L,B,A),B.programs=Q.programs,m.capabilities=A,m.extensions=L,m.properties=P,m.renderLists=Me,m.shadowMap=De,m.state=V,m.info=B}_u();let Qt=new Em(m,pe);function bu(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Mu(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let R=B.autoReset,q=De.enabled,ee=De.autoUpdate,$=De.needsUpdate,re=De.type;_u(),B.autoReset=R,De.enabled=q,De.autoUpdate=ee,De.needsUpdate=$,De.type=re}function wu(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Su(R){let q=R.target;q.removeEventListener("dispose",Su),function(ee){(function($){let re=P.get($).programs;re!==void 0&&(re.forEach(function(Se){Q.releaseProgram(Se)}),$.isShaderMaterial&&Q.releaseShaderCache($))})(ee),P.remove(ee)}(q)}this.xr=Qt,this.getContext=function(){return pe},this.getContextAttributes=function(){return pe.getContextAttributes()},this.forceContextLoss=function(){let R=L.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=L.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(U,H,!1))},this.getSize=function(R){return R.set(U,H)},this.setSize=function(R,q,ee){Qt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(U=R,H=q,e.width=Math.floor(R*O),e.height=Math.floor(q*O),ee!==!1&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q))},this.getDrawingBufferSize=function(R){return R.set(U*O,H*O).floor()},this.setDrawingBufferSize=function(R,q,ee){U=R,H=q,O=ee,e.width=Math.floor(R*ee),e.height=Math.floor(q*ee),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,q,ee,$){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,q,ee,$),V.viewport(C.copy(K).multiplyScalar(O).floor())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,q,ee,$){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,q,ee,$),V.scissor(D.copy(ae).multiplyScalar(O).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(R){V.setScissorTest(se=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,q=!0,ee=!0){let $=0;R&&($|=16384),q&&($|=256),ee&&($|=1024),pe.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bu,!1),e.removeEventListener("webglcontextrestored",Mu,!1),e.removeEventListener("webglcontextcreationerror",wu,!1),Me.dispose(),Te.dispose(),P.dispose(),T.dispose(),F.dispose(),Y.dispose(),tt.dispose(),it.dispose(),Q.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",Tu),Qt.removeEventListener("sessionend",Au),j&&(j.dispose(),j=null),yn.stop()},this.renderBufferDirect=function(R,q,ee,$,re,Se){q===null&&(q=oe);let Be=re.isMesh&&re.matrixWorld.determinant()<0,ke=function(Ct,_n,gi,Re,Mt){_n.isScene!==!0&&(_n=oe),G.resetTextureUnits();let ol=_n.fog,uf=Re.isMeshStandardMaterial?_n.environment:null,df=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:3e3,fa=(Re.isMeshStandardMaterial?F:T).get(Re.envMap||uf),pf=Re.vertexColors===!0&&!!gi.attributes.color&&gi.attributes.color.itemSize===4,mf=!!Re.normalMap&&!!gi.attributes.tangent,ff=!!gi.morphAttributes.position,gf=!!gi.morphAttributes.normal,vf=!!gi.morphAttributes.color,xf=Re.toneMapped?m.toneMapping:0,Ru=gi.morphAttributes.position||gi.morphAttributes.normal||gi.morphAttributes.color,yf=Ru!==void 0?Ru.length:0,Ke=P.get(Re),_f=u.state.lights;if(de===!0&&(le===!0||Ct!==S)){let ei=Ct===S&&Re.id===w;fe.setState(Re,Ct,ei)}let Ni=!1;Re.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==_f.state.version||Ke.outputEncoding!==df||Mt.isInstancedMesh&&Ke.instancing===!1?Ni=!0:Mt.isInstancedMesh||Ke.instancing!==!0?Mt.isSkinnedMesh&&Ke.skinning===!1?Ni=!0:Mt.isSkinnedMesh||Ke.skinning!==!0?Ke.envMap!==fa||Re.fog===!0&&Ke.fog!==ol?Ni=!0:Ke.numClippingPlanes===void 0||Ke.numClippingPlanes===fe.numPlanes&&Ke.numIntersection===fe.numIntersection?(Ke.vertexAlphas!==pf||Ke.vertexTangents!==mf||Ke.morphTargets!==ff||Ke.morphNormals!==gf||Ke.morphColors!==vf||Ke.toneMapping!==xf||A.isWebGL2===!0&&Ke.morphTargetsCount!==yf)&&(Ni=!0):Ni=!0:Ni=!0:Ni=!0:(Ni=!0,Ke.__version=Re.version);let bn=Ke.currentProgram;Ni===!0&&(bn=pa(Re,_n,Mt));let Pu=!1,Jr=!1,ll=!1,Ht=bn.getUniforms(),Mn=Ke.uniforms;if(V.useProgram(bn.program)&&(Pu=!0,Jr=!0,ll=!0),Re.id!==w&&(w=Re.id,Jr=!0),Pu||S!==Ct){if(Ht.setValue(pe,"projectionMatrix",Ct.projectionMatrix),A.logarithmicDepthBuffer&&Ht.setValue(pe,"logDepthBufFC",2/(Math.log(Ct.far+1)/Math.LN2)),S!==Ct&&(S=Ct,Jr=!0,ll=!0),Re.isShaderMaterial||Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshStandardMaterial||Re.envMap){let ei=Ht.map.cameraPosition;ei!==void 0&&ei.setValue(pe,ge.setFromMatrixPosition(Ct.matrixWorld))}(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial)&&Ht.setValue(pe,"isOrthographic",Ct.isOrthographicCamera===!0),(Re.isMeshPhongMaterial||Re.isMeshToonMaterial||Re.isMeshLambertMaterial||Re.isMeshBasicMaterial||Re.isMeshStandardMaterial||Re.isShaderMaterial||Re.isShadowMaterial||Mt.isSkinnedMesh)&&Ht.setValue(pe,"viewMatrix",Ct.matrixWorldInverse)}if(Mt.isSkinnedMesh){Ht.setOptional(pe,Mt,"bindMatrix"),Ht.setOptional(pe,Mt,"bindMatrixInverse");let ei=Mt.skeleton;ei&&(A.floatVertexTextures?(ei.boneTexture===null&&ei.computeBoneTexture(),Ht.setValue(pe,"boneTexture",ei.boneTexture,G),Ht.setValue(pe,"boneTextureSize",ei.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let hl=gi.morphAttributes;(hl.position!==void 0||hl.normal!==void 0||hl.color!==void 0&&A.isWebGL2===!0)&&Ce.update(Mt,gi,Re,bn),(Jr||Ke.receiveShadow!==Mt.receiveShadow)&&(Ke.receiveShadow=Mt.receiveShadow,Ht.setValue(pe,"receiveShadow",Mt.receiveShadow)),Re.isMeshGouraudMaterial&&Re.envMap!==null&&(Mn.envMap.value=fa,Mn.flipEnvMap.value=fa.isCubeTexture&&fa.isRenderTargetTexture===!1?-1:1),Jr&&(Ht.setValue(pe,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&(vi=ll,(Mi=Mn).ambientLightColor.needsUpdate=vi,Mi.lightProbe.needsUpdate=vi,Mi.directionalLights.needsUpdate=vi,Mi.directionalLightShadows.needsUpdate=vi,Mi.pointLights.needsUpdate=vi,Mi.pointLightShadows.needsUpdate=vi,Mi.spotLights.needsUpdate=vi,Mi.spotLightShadows.needsUpdate=vi,Mi.rectAreaLights.needsUpdate=vi,Mi.hemisphereLights.needsUpdate=vi),ol&&Re.fog===!0&&ve.refreshFogUniforms(Mn,ol),ve.refreshMaterialUniforms(Mn,Re,O,H,j),Ns.upload(pe,Ke.uniformsList,Mn,G));var Mi,vi;if(Re.isShaderMaterial&&Re.uniformsNeedUpdate===!0&&(Ns.upload(pe,Ke.uniformsList,Mn,G),Re.uniformsNeedUpdate=!1),Re.isSpriteMaterial&&Ht.setValue(pe,"center",Mt.center),Ht.setValue(pe,"modelViewMatrix",Mt.modelViewMatrix),Ht.setValue(pe,"normalMatrix",Mt.normalMatrix),Ht.setValue(pe,"modelMatrix",Mt.matrixWorld),Re.isShaderMaterial||Re.isRawShaderMaterial){let ei=Re.uniformsGroups;for(let cl=0,bf=ei.length;cl<bf;cl++)if(A.isWebGL2){let Du=ei[cl];it.update(Du,bn),it.bind(Du,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}(R,q,ee,$,re);V.setMaterial($,Be);let je=ee.index,nt=1;$.wireframe===!0&&(je=J.getWireframeAttribute(ee),nt=2);let Xe=ee.drawRange,Ve=ee.attributes.position,Dt=Xe.start*nt,fi=(Xe.start+Xe.count)*nt;Se!==null&&(Dt=Math.max(Dt,Se.start*nt),fi=Math.min(fi,(Se.start+Se.count)*nt)),je!==null?(Dt=Math.max(Dt,0),fi=Math.min(fi,je.count)):Ve!=null&&(Dt=Math.max(Dt,0),fi=Math.min(fi,Ve.count));let Vt=fi-Dt;if(Vt<0||Vt===1/0)return;let ma;tt.setup(re,$,ke,ee,je);let bt=$e;if(je!==null&&(ma=z.get(je),bt=Kt,bt.setIndex(ma)),re.isMesh)$.wireframe===!0?(V.setLineWidth($.wireframeLinewidth*Le()),bt.setMode(1)):bt.setMode(4);else if(re.isLine){let Ct=$.linewidth;Ct===void 0&&(Ct=1),V.setLineWidth(Ct*Le()),re.isLineSegments?bt.setMode(1):re.isLineLoop?bt.setMode(2):bt.setMode(3)}else re.isPoints?bt.setMode(0):re.isSprite&&bt.setMode(4);if(re.isInstancedMesh)bt.renderInstances(Dt,Vt,re.count);else if(ee.isInstancedBufferGeometry){let Ct=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,_n=Math.min(ee.instanceCount,Ct);bt.renderInstances(Dt,Vt,_n)}else bt.render(Dt,Vt)},this.compile=function(R,q){function ee($,re,Se){$.transparent===!0&&$.side===2&&$.forceSinglePass===!1?($.side=1,$.needsUpdate=!0,pa($,re,Se),$.side=0,$.needsUpdate=!0,pa($,re,Se),$.side=2):pa($,re,Se)}u=Te.get(R),u.init(),f.push(u),R.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(u.pushLight($),$.castShadow&&u.pushShadow($))}),u.setupLights(m.physicallyCorrectLights),R.traverse(function($){let re=$.material;if(re)if(Array.isArray(re))for(let Se=0;Se<re.length;Se++)ee(re[Se],R,$);else ee(re,R,$)}),f.pop(),u=null};let al=null;function Tu(){yn.stop()}function Au(){yn.start()}let yn=new hh;function Eu(R,q,ee,$){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)u.pushLight(R),R.castShadow&&u.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){$&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);let Se=Y.update(R),Be=R.material;Be.visible&&d.push(R,Se,Be,ee,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==B.render.frame&&(R.skeleton.update(),R.skeleton.frame=B.render.frame),!R.frustumCulled||ue.intersectsObject(R))){$&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Z);let Se=Y.update(R),Be=R.material;if(Array.isArray(Be)){let ke=Se.groups;for(let je=0,nt=ke.length;je<nt;je++){let Xe=ke[je],Ve=Be[Xe.materialIndex];Ve&&Ve.visible&&d.push(R,Se,Ve,ee,ge.z,Xe)}}else Be.visible&&d.push(R,Se,Be,ee,ge.z,null)}}let re=R.children;for(let Se=0,Be=re.length;Se<Be;Se++)Eu(re[Se],q,ee,$)}function Cu(R,q,ee,$){let re=R.opaque,Se=R.transmissive,Be=R.transparent;u.setupLightsView(ee),de===!0&&fe.setGlobalState(m.clippingPlanes,ee),Se.length>0&&function(ke,je,nt){let Xe=A.isWebGL2;j===null&&(j=new hi(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Xe&&s===!0?4:0})),m.getDrawingBufferSize(me),Xe?j.setSize(me.x,me.y):j.setSize(hs(me.x),hs(me.y));let Ve=m.getRenderTarget();m.setRenderTarget(j),m.clear();let Dt=m.toneMapping;m.toneMapping=0,da(ke,je,nt),m.toneMapping=Dt,G.updateMultisampleRenderTarget(j),G.updateRenderTargetMipmap(j),m.setRenderTarget(Ve)}(re,q,ee),$&&V.viewport(C.copy($)),re.length>0&&da(re,q,ee),Se.length>0&&da(Se,q,ee),Be.length>0&&da(Be,q,ee),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function da(R,q,ee){let $=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Se=R.length;re<Se;re++){let Be=R[re],ke=Be.object,je=Be.geometry,nt=$===null?Be.material:$,Xe=Be.group;ke.layers.test(ee.layers)&&cf(ke,q,ee,je,nt,Xe)}}function cf(R,q,ee,$,re,Se){R.onBeforeRender(m,q,ee,$,re,Se),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(m,q,ee,$,R,Se),re.transparent===!0&&re.side===2&&re.forceSinglePass===!1?(re.side=1,re.needsUpdate=!0,m.renderBufferDirect(ee,q,$,re,R,Se),re.side=0,re.needsUpdate=!0,m.renderBufferDirect(ee,q,$,re,R,Se),re.side=2):m.renderBufferDirect(ee,q,$,re,R,Se),R.onAfterRender(m,q,ee,$,re,Se)}function pa(R,q,ee){q.isScene!==!0&&(q=oe);let $=P.get(R),re=u.state.lights,Se=u.state.shadowsArray,Be=re.state.version,ke=Q.getParameters(R,re.state,Se,q,ee),je=Q.getProgramCacheKey(ke),nt=$.programs;$.environment=R.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(R.isMeshStandardMaterial?F:T).get(R.envMap||$.environment),nt===void 0&&(R.addEventListener("dispose",Su),nt=new Map,$.programs=nt);let Xe=nt.get(je);if(Xe!==void 0){if($.currentProgram===Xe&&$.lightsStateVersion===Be)return Lu(R,ke),Xe}else ke.uniforms=Q.getUniforms(R),R.onBuild(ee,ke,m),R.onBeforeCompile(ke,m),Xe=Q.acquireProgram(ke,je),nt.set(je,Xe),$.uniforms=ke.uniforms;let Ve=$.uniforms;(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Ve.clippingPlanes=fe.uniform),Lu(R,ke),$.needsLights=function(Vt){return Vt.isMeshLambertMaterial||Vt.isMeshToonMaterial||Vt.isMeshPhongMaterial||Vt.isMeshStandardMaterial||Vt.isShadowMaterial||Vt.isShaderMaterial&&Vt.lights===!0}(R),$.lightsStateVersion=Be,$.needsLights&&(Ve.ambientLightColor.value=re.state.ambient,Ve.lightProbe.value=re.state.probe,Ve.directionalLights.value=re.state.directional,Ve.directionalLightShadows.value=re.state.directionalShadow,Ve.spotLights.value=re.state.spot,Ve.spotLightShadows.value=re.state.spotShadow,Ve.rectAreaLights.value=re.state.rectArea,Ve.ltc_1.value=re.state.rectAreaLTC1,Ve.ltc_2.value=re.state.rectAreaLTC2,Ve.pointLights.value=re.state.point,Ve.pointLightShadows.value=re.state.pointShadow,Ve.hemisphereLights.value=re.state.hemi,Ve.directionalShadowMap.value=re.state.directionalShadowMap,Ve.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ve.spotShadowMap.value=re.state.spotShadowMap,Ve.spotLightMatrix.value=re.state.spotLightMatrix,Ve.spotLightMap.value=re.state.spotLightMap,Ve.pointShadowMap.value=re.state.pointShadowMap,Ve.pointShadowMatrix.value=re.state.pointShadowMatrix);let Dt=Xe.getUniforms(),fi=Ns.seqWithValue(Dt.seq,Ve);return $.currentProgram=Xe,$.uniformsList=fi,Xe}function Lu(R,q){let ee=P.get(R);ee.outputEncoding=q.outputEncoding,ee.instancing=q.instancing,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}yn.setAnimationLoop(function(R){al&&al(R)}),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(R){al=R,Qt.setAnimationLoop(R),R===null?yn.stop():yn.start()},Qt.addEventListener("sessionstart",Tu),Qt.addEventListener("sessionend",Au),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(q),q=Qt.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,q,_),u=Te.get(R,f.length),u.init(),f.push(u),Z.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ue.setFromProjectionMatrix(Z),le=this.localClippingEnabled,de=fe.init(this.clippingPlanes,le),d=Me.get(R,p.length),d.init(),p.push(d),Eu(R,q,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(X,ie),de===!0&&fe.beginShadows();let ee=u.state.shadowsArray;if(De.render(ee,R,q),de===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ze.render(d,R),u.setupLights(m.physicallyCorrectLights),q.isArrayCamera){let $=q.cameras;for(let re=0,Se=$.length;re<Se;re++){let Be=$[re];Cu(d,R,Be,Be.viewport)}}else Cu(d,R,q);_!==null&&(G.updateMultisampleRenderTarget(_),G.updateRenderTargetMipmap(_)),R.isScene===!0&&R.onAfterRender(m,R,q),tt.resetDefaultState(),w=-1,S=null,f.pop(),u=f.length>0?f[f.length-1]:null,p.pop(),d=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(R,q,ee){P.get(R.texture).__webglTexture=q,P.get(R.depthTexture).__webglTexture=ee;let $=P.get(R);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=ee===void 0,$.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){let ee=P.get(R);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ee=0){_=R,y=q,v=ee;let $=!0,re=null,Se=!1,Be=!1;if(R){let ke=P.get(R);ke.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(36160,null),$=!1):ke.__webglFramebuffer===void 0?G.setupRenderTarget(R):ke.__hasExternalTextures&&G.rebindTextures(R,P.get(R.texture).__webglTexture,P.get(R.depthTexture).__webglTexture);let je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Be=!0);let nt=P.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(re=nt[q],Se=!0):re=A.isWebGL2&&R.samples>0&&G.useMultisampledRTT(R)===!1?P.get(R).__webglMultisampledFramebuffer:nt,C.copy(R.viewport),D.copy(R.scissor),N=R.scissorTest}else C.copy(K).multiplyScalar(O).floor(),D.copy(ae).multiplyScalar(O).floor(),N=se;if(V.bindFramebuffer(36160,re)&&A.drawBuffers&&$&&V.drawBuffers(R,re),V.viewport(C),V.scissor(D),V.setScissorTest(N),Se){let ke=P.get(R.texture);pe.framebufferTexture2D(36160,36064,34069+q,ke.__webglTexture,ee)}else if(Be){let ke=P.get(R.texture),je=q||0;pe.framebufferTextureLayer(36160,36064,ke.__webglTexture,ee||0,je)}w=-1},this.readRenderTargetPixels=function(R,q,ee,$,re,Se,Be){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=P.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){V.bindFramebuffer(36160,ke);try{let je=R.texture,nt=je.format,Xe=je.type;if(nt!==1023&&Ae.convert(nt)!==pe.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ve=Xe===1016&&(L.has("EXT_color_buffer_half_float")||A.isWebGL2&&L.has("EXT_color_buffer_float"));if(!(Xe===1009||Ae.convert(Xe)===pe.getParameter(35738)||Xe===1015&&(A.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float"))||Ve))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=R.width-$&&ee>=0&&ee<=R.height-re&&pe.readPixels(q,ee,$,re,Ae.convert(nt),Ae.convert(Xe),Se)}finally{let je=_!==null?P.get(_).__webglFramebuffer:null;V.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(R,q,ee=0){let $=Math.pow(2,-ee),re=Math.floor(q.image.width*$),Se=Math.floor(q.image.height*$);G.setTexture2D(q,0),pe.copyTexSubImage2D(3553,ee,0,0,R.x,R.y,re,Se),V.unbindTexture()},this.copyTextureToTexture=function(R,q,ee,$=0){let re=q.image.width,Se=q.image.height,Be=Ae.convert(ee.format),ke=Ae.convert(ee.type);G.setTexture2D(ee,0),pe.pixelStorei(37440,ee.flipY),pe.pixelStorei(37441,ee.premultiplyAlpha),pe.pixelStorei(3317,ee.unpackAlignment),q.isDataTexture?pe.texSubImage2D(3553,$,R.x,R.y,re,Se,Be,ke,q.image.data):q.isCompressedTexture?pe.compressedTexSubImage2D(3553,$,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Be,q.mipmaps[0].data):pe.texSubImage2D(3553,$,R.x,R.y,Be,ke,q.image),$===0&&ee.generateMipmaps&&pe.generateMipmap(3553),V.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ee,$,re=0){if(m.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Se=R.max.x-R.min.x+1,Be=R.max.y-R.min.y+1,ke=R.max.z-R.min.z+1,je=Ae.convert($.format),nt=Ae.convert($.type),Xe;if($.isData3DTexture)G.setTexture3D($,0),Xe=32879;else{if(!$.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");G.setTexture2DArray($,0),Xe=35866}pe.pixelStorei(37440,$.flipY),pe.pixelStorei(37441,$.premultiplyAlpha),pe.pixelStorei(3317,$.unpackAlignment);let Ve=pe.getParameter(3314),Dt=pe.getParameter(32878),fi=pe.getParameter(3316),Vt=pe.getParameter(3315),ma=pe.getParameter(32877),bt=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;pe.pixelStorei(3314,bt.width),pe.pixelStorei(32878,bt.height),pe.pixelStorei(3316,R.min.x),pe.pixelStorei(3315,R.min.y),pe.pixelStorei(32877,R.min.z),ee.isDataTexture||ee.isData3DTexture?pe.texSubImage3D(Xe,re,q.x,q.y,q.z,Se,Be,ke,je,nt,bt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),pe.compressedTexSubImage3D(Xe,re,q.x,q.y,q.z,Se,Be,ke,je,bt.data)):pe.texSubImage3D(Xe,re,q.x,q.y,q.z,Se,Be,ke,je,nt,bt),pe.pixelStorei(3314,Ve),pe.pixelStorei(32878,Dt),pe.pixelStorei(3316,fi),pe.pixelStorei(3315,Vt),pe.pixelStorei(32877,ma),re===0&&$.generateMipmaps&&pe.generateMipmap(Xe),V.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?G.setTextureCube(R,0):R.isData3DTexture?G.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?G.setTexture2DArray(R,0):G.setTexture2D(R,0),V.unbindTexture()},this.resetState=function(){y=0,v=0,_=null,V.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Bh extends Uh{}Bh.prototype.isWebGL1Renderer=!0;class zs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new zs(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Fs{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=i}clone(){return new Fs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class kh extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Us{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}let kt=new E;class an{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),n=Qe(n,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new et(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new an(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wo extends Pt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wn,Mr=new E,jn=new E,Xn=new E,qn=new te,wr=new te,Gh=new Oe,Bs=new E,Sr=new E,ks=new E,Vh=new te,So=new te,Hh=new te;class Wh extends Ye{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Wn===void 0){Wn=new Ue;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Us(t,5);Wn.setIndex([0,1,2,0,2,3]),Wn.setAttribute("position",new an(i,3,0,!1)),Wn.setAttribute("uv",new an(i,2,3,!1))}this.geometry=Wn,this.material=e!==void 0?e:new wo,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),jn.setFromMatrixScale(this.matrixWorld),Gh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&jn.multiplyScalar(-Xn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Gs(Bs.set(-.5,-.5,0),Xn,a,jn,n,s),Gs(Sr.set(.5,-.5,0),Xn,a,jn,n,s),Gs(ks.set(.5,.5,0),Xn,a,jn,n,s),Vh.set(0,0),So.set(1,0),Hh.set(1,1);let o=e.ray.intersectTriangle(Bs,Sr,ks,!1,Mr);if(o===null&&(Gs(Sr.set(-.5,.5,0),Xn,a,jn,n,s),So.set(0,1),o=e.ray.intersectTriangle(Bs,ks,Sr,!1,Mr),o===null))return;let l=e.ray.origin.distanceTo(Mr);l<e.near||l>e.far||t.push({distance:l,point:Mr.clone(),uv:ii.getUV(Mr,Bs,Sr,ks,Vh,So,Hh,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gs(r,e,t,i,n,s){qn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(wr.x=s*qn.x-n*qn.y,wr.y=n*qn.x+s*qn.y):wr.copy(qn),r.copy(e),r.x+=wr.x,r.y+=wr.y,r.applyMatrix4(Gh)}let Vs=new E,jh=new E;class Xh extends Ye{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,n=t.length;i<n;i++){let s=t[i];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);let n=this.levels,s;for(s=0;s<n.length&&!(t<n[s].distance);s++);return n.splice(s,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),e<s)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Vs.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Vs);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Vs.setFromMatrixPosition(e.matrixWorld),jh.setFromMatrixPosition(this.matrixWorld);let i=Vs.distanceTo(jh)/e.zoom,n,s;for(t[0].object.visible=!0,n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),!(i>=a))break;t[n-1].object.visible=!1,t[n].object.visible=!0}for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let n=0,s=i.length;n<s;n++){let a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}let qh=new E,Yh=new Je,Zh=new Je,Rm=new E,Jh=new Oe;class $h extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,n=this.geometry;Yh.fromBufferAttribute(n.attributes.skinIndex,e),Zh.fromBufferAttribute(n.attributes.skinWeight,e),qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Zh.getComponent(s);if(a!==0){let o=Yh.getComponent(s);Jh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Rm.copy(qh).applyMatrix4(Jh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class To extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yn extends ht{constructor(e=null,t=1,i=1,n,s,a,o,l,h=1003,c=1003,d,u){super(null,a,o,l,h,c,n,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Kh=new Oe,Pm=new Oe;class Hs{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Oe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Pm;Kh.multiplyMatrices(o,t[s]),Kh.toArray(i,16*s)}n!==null&&(n.needsUpdate=!0)}clone(){return new Hs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=Xl(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Yn(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new To),this.bones.push(a),this.boneInverses.push(new Oe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}}class Zn extends et{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}let Qh=new Oe,ec=new Oe,Ws=[],Dm=new Oe,Tr=new At;class tc extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zn(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,Dm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,Qh),ec.multiplyMatrices(i,Qh),Tr.matrixWorld=ec,Tr.raycast(e,Ws);for(let a=0,o=Ws.length;a<o;a++){let l=Ws[a];l.instanceId=s,l.object=this,t.push(l)}Ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zn(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Gt extends Pt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}let ic=new E,nc=new E,rc=new Oe,Ao=new dr,js=new rn;class Wi extends Ye{constructor(e=new Ue,t=new Gt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)ic.fromBufferAttribute(t,n-1),nc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ic.distanceTo(nc);e.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(n),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;rc.copy(n).invert(),Ao.copy(e.ray).applyMatrix4(rc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=new E,c=new E,d=new E,u=new E,p=this.isLineSegments?2:1,f=i.index,m=i.attributes.position;if(f!==null)for(let x=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;x<y;x+=p){let v=f.getX(x),_=f.getX(x+1);if(h.fromBufferAttribute(m,v),c.fromBufferAttribute(m,_),Ao.distanceSqToSegment(h,c,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}else for(let x=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count)-1;x<y;x+=p){if(h.fromBufferAttribute(m,x),c.fromBufferAttribute(m,x+1),Ao.distanceSqToSegment(h,c,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}let sc=new E,ac=new E;class _i extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)sc.fromBufferAttribute(t,n),ac.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+sc.distanceTo(ac);e.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oc extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Eo extends Pt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let lc=new Oe,Co=new dr,Xs=new rn,qs=new E;class hc extends Ye{constructor(e=new Ue,t=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(n),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;lc.copy(n).invert(),Co.copy(e.ray).applyMatrix4(lc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++){let p=h.getX(d);qs.fromBufferAttribute(c,p),cc(qs,p,l,n,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++)qs.fromBufferAttribute(c,d),cc(qs,d,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function cc(r,e,t,i,n,s,a){let o=Co.distanceSqToPoint(r);if(o<t){let l=new E;Co.closestPointToPoint(r,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Lo extends ht{constructor(e,t,i,n,s,a,o,l,h,c,d,u){super(null,a,o,l,h,c,n,s,d,u),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,h=s-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(s-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new te:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new E,n=[],s=[],a=[],o=new E,l=new Oe;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(lt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ys extends pi{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new te,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=h-this.aY;l=u*c-p*d+this.aX,h=u*d+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class uc extends Ys{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ro(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){n(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,d){let u=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,p*=c,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}let Zs=new E,Po=new Ro,Do=new Ro,Io=new Ro;class dc extends pi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/s)+1)*s:c===0&&h===s-1&&(h=s-2,c=1),this.closed||h>0?o=n[(h-1)%s]:(Zs.subVectors(n[0],n[1]).add(n[0]),o=Zs);let d=n[h%s],u=n[(h+1)%s];if(this.closed||h+2<s?l=n[(h+2)%s]:(Zs.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),x<1e-4&&(x=m),Po.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,m,x),Do.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,m,x),Io.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,m,x)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Do.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),Io.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return i.set(Po.calc(c),Do.calc(c),Io.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Ar(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function Er(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}class Oo extends pi{constructor(e=new te,t=new te,i=new te,n=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,n.x,s.x,a.x,o.x),Er(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mc extends pi{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Er(e,n.x,s.x,a.x,o.x),Er(e,n.y,s.y,a.y,o.y),Er(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Js extends pi{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new te;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends pi{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class No extends pi{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Ar(e,n.x,s.x,a.x),Ar(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zo extends pi{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Ar(e,n.x,s.x,a.x),Ar(e,n.y,s.y,a.y),Ar(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fo extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(pc(o,l.x,h.x,c.x,d.x),pc(o,l.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new te().fromArray(n))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:uc,CatmullRomCurve3:dc,CubicBezierCurve:Oo,CubicBezierCurve3:mc,EllipseCurve:Ys,LineCurve:Js,LineCurve3:fc,QuadraticBezierCurve:No,QuadraticBezierCurve3:zo,SplineCurve:Fo});class gc extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Js(t,e))}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Uo[n.type]().fromJSON(n))}return this}}class Cr extends gc{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Js(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new No(this.currentPoint.clone(),new te(e,t),new te(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Oo(this.currentPoint.clone(),new te(e,t),new te(i,n),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Fo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let h=new Ys(e,t,i,n,s,a,o,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jn extends Ue{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=lt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],h=[],c=1/t,d=new E,u=new te,p=new E,f=new E,m=new E,x=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:x=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-x,p.z=0*y,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:x=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-x,p.z=0*y,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let v=0;v<=t;v++){let _=i+v*c*n,w=Math.sin(_),S=Math.cos(_);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*w,d.y=e[C].y,d.z=e[C].x*S,a.push(d.x,d.y,d.z),u.x=v/t,u.y=C/(e.length-1),o.push(u.x,u.y);let D=l[3*C+0]*w,N=l[3*C+1],U=l[3*C+0]*S;h.push(D,N,U)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let w=_+v*e.length,S=w,C=w+e.length,D=w+e.length+1,N=w+1;s.push(S,C,N),s.push(D,N,C)}this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(h,3))}static fromJSON(e){return new Jn(e.points,e.segments,e.phiStart,e.phiLength)}}class Lr extends Jn{constructor(e=1,t=1,i=4,n=8){let s=new Cr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Lr(e.radius,e.length,e.capSegments,e.radialSegments)}}class Rr extends Ue{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],h=new E,c=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}static fromJSON(e){return new Rr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class on extends Ue{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),s=Math.floor(s);let c=[],d=[],u=[],p=[],f=0,m=[],x=i/2,y=0;function v(_){let w=f,S=new te,C=new E,D=0,N=_===!0?e:t,U=_===!0?1:-1;for(let O=1;O<=n;O++)d.push(0,x*U,0),u.push(0,U,0),p.push(.5,.5),f++;let H=f;for(let O=0;O<=n;O++){let X=O/n*l+o,ie=Math.cos(X),K=Math.sin(X);C.x=N*K,C.y=x*U,C.z=N*ie,d.push(C.x,C.y,C.z),u.push(0,U,0),S.x=.5*ie+.5,S.y=.5*K*U+.5,p.push(S.x,S.y),f++}for(let O=0;O<n;O++){let X=w+O,ie=H+O;_===!0?c.push(ie,ie+1,X):c.push(ie+1,ie,X),D+=3}h.addGroup(y,D,_===!0?1:2),y+=D}(function(){let _=new E,w=new E,S=0,C=(t-e)/i;for(let D=0;D<=s;D++){let N=[],U=D/s,H=U*(t-e)+e;for(let O=0;O<=n;O++){let X=O/n,ie=X*l+o,K=Math.sin(ie),ae=Math.cos(ie);w.x=H*K,w.y=-U*i+x,w.z=H*ae,d.push(w.x,w.y,w.z),_.set(K,C,ae).normalize(),u.push(_.x,_.y,_.z),p.push(X,1-U),N.push(f++)}m.push(N)}for(let D=0;D<n;D++)for(let N=0;N<s;N++){let U=m[N][D],H=m[N+1][D],O=m[N+1][D+1],X=m[N][D+1];c.push(U,H,X),c.push(H,O,X),S+=6}h.addGroup(y,S,0),y+=S})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(p,2))}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends on{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pi extends Ue{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,p,f,m){let x=m+1,y=[];for(let v=0;v<=x;v++){y[v]=[];let _=u.clone().lerp(f,v/x),w=p.clone().lerp(f,v/x),S=x-v;for(let C=0;C<=S;C++)y[v][C]=C===0&&v===x?_:_.clone().lerp(w,C/S)}for(let v=0;v<x;v++)for(let _=0;_<2*(x-v)-1;_++){let w=Math.floor(_/2);_%2==0?(l(y[v][w+1]),l(y[v+1][w]),l(y[v][w])):(l(y[v][w+1]),l(y[v+1][w+1]),l(y[v+1][w]))}}function l(u){s.push(u.x,u.y,u.z)}function h(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function c(u,p,f,m){m<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=m/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new E,f=new E,m=new E;for(let x=0;x<t.length;x+=3)h(t[x+0],p),h(t[x+1],f),h(t[x+2],m),o(p,f,m,u)})(n),function(u){let p=new E;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(i),function(){let u=new E;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let m=d(u)/2/Math.PI+.5,x=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(m,1-x)}var p;(function(){let f=new E,m=new E,x=new E,y=new E,v=new te,_=new te,w=new te;for(let S=0,C=0;S<s.length;S+=9,C+=6){f.set(s[S+0],s[S+1],s[S+2]),m.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),v.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),w.set(a[C+4],a[C+5]),y.copy(f).add(m).add(x).divideScalar(3);let D=d(y);c(v,C+0,f,D),c(_,C+2,m,D),c(w,C+4,x,D)}})(),function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],x=a[f+2],y=a[f+4],v=Math.max(m,x,y),_=Math.min(m,x,y);v>.9&&_<.1&&(m<.2&&(a[f+0]+=1),x<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new Pi(e.vertices,e.indices,e.radius,e.details)}}class Dr extends Pi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dr(e.radius,e.detail)}}let $s=new E,Ks=new E,Bo=new E,Qs=new ii;class vc extends Ue{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Tt*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(h[0]=a.getX(f),h[1]=a.getX(f+1),h[2]=a.getX(f+2)):(h[0]=f,h[1]=f+1,h[2]=f+2);let{a:m,b:x,c:y}=Qs;if(m.fromBufferAttribute(o,h[0]),x.fromBufferAttribute(o,h[1]),y.fromBufferAttribute(o,h[2]),Qs.getNormal(Bo),d[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[1]=`${Math.round(x.x*n)},${Math.round(x.y*n)},${Math.round(x.z*n)}`,d[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let _=(v+1)%3,w=d[v],S=d[_],C=Qs[c[v]],D=Qs[c[_]],N=`${w}_${S}`,U=`${S}_${w}`;U in u&&u[U]?(Bo.dot(u[U].normal)<=s&&(p.push(C.x,C.y,C.z),p.push(D.x,D.y,D.z)),u[U]=null):N in u||(u[N]={index0:h[v],index1:h[_],normal:Bo.clone()})}}for(let f in u)if(u[f]){let{index0:m,index1:x}=u[f];$s.fromBufferAttribute(o,m),Ks.fromBufferAttribute(o,x),p.push($s.x,$s.y,$s.z),p.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new be(p,3))}}}class ln extends Cr{constructor(e){super(e),this.uuid=Yt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Cr().fromJSON(n))}return this}}let Im=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=xc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h,c,d,u,p;if(i&&(s=function(f,m,x,y){let v=[],_,w,S,C,D;for(_=0,w=m.length;_<w;_++)S=m[_]*y,C=_<w-1?m[_+1]*y:f.length,D=xc(f,S,C,y,!1),D===D.next&&(D.steiner=!0),v.push(Gm(D));for(v.sort(Um),_=0;_<v.length;_++)x=Bm(v[_],x);return x}(r,e,s,t)),r.length>80*t){o=h=r[0],l=c=r[1];for(let f=t;f<n;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<l&&(l=u),d>h&&(h=d),u>c&&(c=u);p=Math.max(h-o,c-l),p=p!==0?32767/p:0}return Ir(s,a,t,o,l,p,0),a};function xc(r,e,t,i,n){let s,a;if(n===function(o,l,h,c){let d=0;for(let u=l,p=h-c;u<h;u+=c)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=bc(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=bc(s,r[s],r[s+1],a);return a&&ea(a,a.next)&&(Nr(a),a=a.next),a}function hn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ea(i,i.next)&&rt(i.prev,i,i.next)!==0)i=i.next;else{if(Nr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ir(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(c,d,u,p){let f=c;do f.z===0&&(f.z=ko(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==c);f.prevZ.nextZ=null,f.prevZ=null,function(m){let x,y,v,_,w,S,C,D,N=1;do{for(y=m,m=null,w=null,S=0;y;){for(S++,v=y,C=0,x=0;x<N&&(C++,v=v.nextZ,v);x++);for(D=N;C>0||D>0&&v;)C!==0&&(D===0||!v||y.z<=v.z)?(_=y,y=y.nextZ,C--):(_=v,v=v.nextZ,D--),w?w.nextZ=_:m=_,_.prevZ=w,w=_;y=v}w.nextZ=null,N*=2}while(S>1)}(f)}(r,i,n,s);let o,l,h=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Nm(r,i,n,s):Om(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Nr(r),r=l.next,h=l.next;else if((r=l)===h){a?a===1?Ir(r=zm(hn(r),e,t),e,t,i,n,s,2):a===2&&Fm(r,e,t,i,n,s):Ir(hn(r),e,t,i,n,s,1);break}}function Om(r){let e=r.prev,t=r,i=r.next;if(rt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<s?n<a?n:a:s<a?s:a,d=o<l?o<h?o:h:l<h?l:h,u=n>s?n>a?n:a:s>a?s:a,p=o>l?o>h?o:h:l>h?l:h,f=i.next;for(;f!==e;){if(f.x>=c&&f.x<=u&&f.y>=d&&f.y<=p&&$n(n,o,s,l,a,h,f.x,f.y)&&rt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Nm(r,e,t,i){let n=r.prev,s=r,a=r.next;if(rt(n,s,a)>=0)return!1;let o=n.x,l=s.x,h=a.x,c=n.y,d=s.y,u=a.y,p=o<l?o<h?o:h:l<h?l:h,f=c<d?c<u?c:u:d<u?d:u,m=o>l?o>h?o:h:l>h?l:h,x=c>d?c>u?c:u:d>u?d:u,y=ko(p,f,e,t,i),v=ko(m,x,e,t,i),_=r.prevZ,w=r.nextZ;for(;_&&_.z>=y&&w&&w.z<=v;){if(_.x>=p&&_.x<=m&&_.y>=f&&_.y<=x&&_!==n&&_!==a&&$n(o,c,l,d,h,u,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=p&&w.x<=m&&w.y>=f&&w.y<=x&&w!==n&&w!==a&&$n(o,c,l,d,h,u,w.x,w.y)&&rt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=m&&_.y>=f&&_.y<=x&&_!==n&&_!==a&&$n(o,c,l,d,h,u,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=v;){if(w.x>=p&&w.x<=m&&w.y>=f&&w.y<=x&&w!==n&&w!==a&&$n(o,c,l,d,h,u,w.x,w.y)&&rt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function zm(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!ea(n,s)&&yc(n,i,i.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Nr(i),Nr(i.next),i=r=s),i=i.next}while(i!==r);return hn(i)}function Fm(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vm(a,o)){let l=_c(a,o);return a=hn(a,a.next),l=hn(l,l.next),Ir(a,e,t,i,n,s,0),void Ir(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Um(r,e){return r.x-e.x}function Bm(r,e){let t=function(n,s){let a,o=s,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let x=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(x<=h&&x>l&&(l=x,a=o.x<o.next.x?o:o.next,x===h))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,m=1/0;o=a;do h>=o.x&&o.x>=u&&h!==o.x&&$n(c<p?h:l,c,u,p,c<p?l:h,c,o.x,o.y)&&(f=Math.abs(c-o.y)/(h-o.x),Or(o,n)&&(f<m||f===m&&(o.x>a.x||o.x===a.x&&km(a,o)))&&(a=o,m=f)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let i=_c(t,r);return hn(i,i.next),hn(t,t.next)}function km(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function ko(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $n(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Vm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&yc(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Or(r,e)&&Or(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||ea(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ea(r,e){return r.x===e.x&&r.y===e.y}function yc(r,e,t,i){let n=ia(rt(r,e,t)),s=ia(rt(r,e,i)),a=ia(rt(t,i,r)),o=ia(rt(t,i,e));return n!==s&&a!==o||!(n!==0||!ta(r,t,e))||!(s!==0||!ta(r,i,e))||!(a!==0||!ta(t,r,i))||!(o!==0||!ta(t,e,i))}function ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ia(r){return r>0?1:r<0?-1:0}function Or(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function _c(r,e){let t=new Go(r.i,r.x,r.y),i=new Go(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function bc(r,e,t,i){let n=new Go(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Nr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Go(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class bi{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return bi.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Mc(e),wc(i,e);let a=e.length;t.forEach(Mc);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,wc(i,t[l]);let o=Im(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Mc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function wc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class zr extends Ue{constructor(e=new ln([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Hm,_,w,S,C,D,N=!1;y&&(_=y.getSpacedPoints(c),N=!0,u=!1,w=y.computeFrenetFrames(c,!1),S=new E,C=new E,D=new E),u||(x=0,p=0,f=0,m=0);let U=o.extractPoints(h),H=U.shape,O=U.holes;if(!bi.isClockWise(H)){H=H.reverse();for(let B=0,P=O.length;B<P;B++){let G=O[B];bi.isClockWise(G)&&(O[B]=G.reverse())}}let X=bi.triangulateShape(H,O),ie=H;for(let B=0,P=O.length;B<P;B++){let G=O[B];H=H.concat(G)}function K(B,P,G){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().multiplyScalar(G).add(B)}let ae=H.length,se=X.length;function ue(B,P,G){let T,F,z,J=B.x-P.x,Y=B.y-P.y,Q=G.x-B.x,ve=G.y-B.y,Me=J*J+Y*Y,Te=J*ve-Y*Q;if(Math.abs(Te)>Number.EPSILON){let fe=Math.sqrt(Me),De=Math.sqrt(Q*Q+ve*ve),ze=P.x-Y/fe,Ce=P.y+J/fe,$e=((G.x-ve/De-ze)*ve-(G.y+Q/De-Ce)*Q)/(J*ve-Y*Q);T=ze+J*$e-B.x,F=Ce+Y*$e-B.y;let Kt=T*T+F*F;if(Kt<=2)return new te(T,F);z=Math.sqrt(Kt/2)}else{let fe=!1;J>Number.EPSILON?Q>Number.EPSILON&&(fe=!0):J<-Number.EPSILON?Q<-Number.EPSILON&&(fe=!0):Math.sign(Y)===Math.sign(ve)&&(fe=!0),fe?(T=-Y,F=J,z=Math.sqrt(Me)):(T=J,F=Y,z=Math.sqrt(Me/2))}return new te(T/z,F/z)}let de=[];for(let B=0,P=ie.length,G=P-1,T=B+1;B<P;B++,G++,T++)G===P&&(G=0),T===P&&(T=0),de[B]=ue(ie[B],ie[G],ie[T]);let le=[],j,Z=de.concat();for(let B=0,P=O.length;B<P;B++){let G=O[B];j=[];for(let T=0,F=G.length,z=F-1,J=T+1;T<F;T++,z++,J++)z===F&&(z=0),J===F&&(J=0),j[T]=ue(G[T],G[z],G[J]);le.push(j),Z=Z.concat(j)}for(let B=0;B<x;B++){let P=B/x,G=p*Math.cos(P*Math.PI/2),T=f*Math.sin(P*Math.PI/2)+m;for(let F=0,z=ie.length;F<z;F++){let J=K(ie[F],de[F],T);oe(J.x,J.y,-G)}for(let F=0,z=O.length;F<z;F++){let J=O[F];j=le[F];for(let Y=0,Q=J.length;Y<Q;Y++){let ve=K(J[Y],j[Y],T);oe(ve.x,ve.y,-G)}}}let me=f+m;for(let B=0;B<ae;B++){let P=u?K(H[B],Z[B],me):H[B];N?(C.copy(w.normals[0]).multiplyScalar(P.x),S.copy(w.binormals[0]).multiplyScalar(P.y),D.copy(_[0]).add(C).add(S),oe(D.x,D.y,D.z)):oe(P.x,P.y,0)}for(let B=1;B<=c;B++)for(let P=0;P<ae;P++){let G=u?K(H[P],Z[P],me):H[P];N?(C.copy(w.normals[B]).multiplyScalar(G.x),S.copy(w.binormals[B]).multiplyScalar(G.y),D.copy(_[B]).add(C).add(S),oe(D.x,D.y,D.z)):oe(G.x,G.y,d/c*B)}for(let B=x-1;B>=0;B--){let P=B/x,G=p*Math.cos(P*Math.PI/2),T=f*Math.sin(P*Math.PI/2)+m;for(let F=0,z=ie.length;F<z;F++){let J=K(ie[F],de[F],T);oe(J.x,J.y,d+G)}for(let F=0,z=O.length;F<z;F++){let J=O[F];j=le[F];for(let Y=0,Q=J.length;Y<Q;Y++){let ve=K(J[Y],j[Y],T);N?oe(ve.x,ve.y+_[c-1].y,_[c-1].x+G):oe(ve.x,ve.y,d+G)}}}function ge(B,P){let G=B.length;for(;--G>=0;){let T=G,F=G-1;F<0&&(F=B.length-1);for(let z=0,J=c+2*x;z<J;z++){let Y=ae*z,Q=ae*(z+1);L(P+T+Y,P+F+Y,P+F+Q,P+T+Q)}}}function oe(B,P,G){l.push(B),l.push(P),l.push(G)}function Le(B,P,G){A(B),A(P),A(G);let T=n.length/3,F=v.generateTopUV(i,n,T-3,T-2,T-1);V(F[0]),V(F[1]),V(F[2])}function L(B,P,G,T){A(B),A(P),A(T),A(P),A(G),A(T);let F=n.length/3,z=v.generateSideWallUV(i,n,F-6,F-3,F-2,F-1);V(z[0]),V(z[1]),V(z[3]),V(z[1]),V(z[2]),V(z[3])}function A(B){n.push(l[3*B+0]),n.push(l[3*B+1]),n.push(l[3*B+2])}function V(B){s.push(B.x),s.push(B.y)}(function(){let B=n.length/3;if(u){let P=0,G=ae*P;for(let T=0;T<se;T++){let F=X[T];Le(F[2]+G,F[1]+G,F[0]+G)}P=c+2*x,G=ae*P;for(let T=0;T<se;T++){let F=X[T];Le(F[0]+G,F[1]+G,F[2]+G)}}else{for(let P=0;P<se;P++){let G=X[P];Le(G[2],G[1],G[0])}for(let P=0;P<se;P++){let G=X[P];Le(G[0]+ae*c,G[1]+ae*c,G[2]+ae*c)}}i.addGroup(B,n.length/3-B,0)})(),function(){let B=n.length/3,P=0;ge(ie,P),P+=ie.length;for(let G=0,T=O.length;G<T;G++){let F=O[G];ge(F,P),P+=F.length}i.addGroup(B,n.length/3-B,1)}()}this.setAttribute("position",new be(n,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals()}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Uo[n.type]().fromJSON(n)),new zr(i,e.options)}}let Hm={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new te(s,a),new te(o,l),new te(h,c)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],f=e[3*n+2],m=e[3*s],x=e[3*s+1],y=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new te(a,1-l),new te(h,1-d),new te(u,1-f),new te(m,1-y)]:[new te(o,1-l),new te(c,1-d),new te(p,1-f),new te(x,1-y)]}};class Fr extends Pi{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fr(e.radius,e.detail)}}class Kn extends Pi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kn(e.radius,e.detail)}}class Ur extends Ue{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new E,f=new te;for(let m=0;m<=n;m++){for(let x=0;x<=i;x++){let y=s+x/i*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),l.push(p.x,p.y,p.z),h.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,c.push(f.x,f.y)}d+=u}for(let m=0;m<n;m++){let x=m*(i+1);for(let y=0;y<i;y++){let v=y+x,_=v,w=v+i+1,S=v+i+2,C=v+1;o.push(_,w,C),o.push(w,S,C)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(c,2))}static fromJSON(e){return new Ur(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Br extends Ue{constructor(e=new ln([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let d=n.length/3,u=c.extractPoints(t),p=u.shape,f=u.holes;bi.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,y=f.length;x<y;x++){let v=f[x];bi.isClockWise(v)===!0&&(f[x]=v.reverse())}let m=bi.triangulateShape(p,f);for(let x=0,y=f.length;x<y;x++){let v=f[x];p=p.concat(v)}for(let x=0,y=p.length;x<y;x++){let v=p[x];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let x=0,y=m.length;x<y;x++){let v=m[x],_=v[0]+d,w=v[1]+d,S=v[2]+d;i.push(_,w,S),l+=3}}this.setIndex(i),this.setAttribute("position",new be(n,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(a,2))}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new Br(i,e.curveSegments)}}class Qn extends Ue{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],d=new E,u=new E,p=[],f=[],m=[],x=[];for(let y=0;y<=i;y++){let v=[],_=y/i,w=0;y==0&&a==0?w=.5/t:y==i&&l==Math.PI&&(w=-.5/t);for(let S=0;S<=t;S++){let C=S/t;d.x=-e*Math.cos(n+C*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(n+C*s)*Math.sin(a+_*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),x.push(C+w,1-_),v.push(h++)}c.push(v)}for(let y=0;y<i;y++)for(let v=0;v<t;v++){let _=c[y][v+1],w=c[y][v],S=c[y+1][v],C=c[y+1][v+1];(y!==0||a>0)&&p.push(_,w,C),(y!==i-1||l<Math.PI)&&p.push(w,S,C)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(m,3)),this.setAttribute("uv",new be(x,2))}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kr extends Pi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kr(e.radius,e.detail)}}class Gr extends Ue{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new E,d=new E,u=new E;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let m=f/n*s,x=p/i*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(m),d.y=(e+t*Math.cos(x))*Math.sin(m),d.z=t*Math.sin(x),o.push(d.x,d.y,d.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(f/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let m=(n+1)*p+f-1,x=(n+1)*(p-1)+f-1,y=(n+1)*(p-1)+f,v=(n+1)*p+f;a.push(m,x,v),a.push(x,y,v)}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(h,2))}static fromJSON(e){return new Gr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Vr extends Ue{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],d=new E,u=new E,p=new E,f=new E,m=new E,x=new E,y=new E;for(let _=0;_<=i;++_){let w=_/i*s*Math.PI*2;v(w,s,a,e,p),v(w+.01,s,a,e,f),x.subVectors(f,p),y.addVectors(f,p),m.crossVectors(x,y),y.crossVectors(m,x),m.normalize(),y.normalize();for(let S=0;S<=n;++S){let C=S/n*Math.PI*2,D=-t*Math.cos(C),N=t*Math.sin(C);d.x=p.x+(D*y.x+N*m.x),d.y=p.y+(D*y.y+N*m.y),d.z=p.z+(D*y.z+N*m.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),h.push(u.x,u.y,u.z),c.push(_/i),c.push(S/n)}}for(let _=1;_<=i;_++)for(let w=1;w<=n;w++){let S=(n+1)*(_-1)+(w-1),C=(n+1)*_+(w-1),D=(n+1)*_+w,N=(n+1)*(_-1)+w;o.push(S,C,N),o.push(C,D,N)}function v(_,w,S,C,D){let N=Math.cos(_),U=Math.sin(_),H=S/w*_,O=Math.cos(H);D.x=C*(2+O)*.5*N,D.y=C*(2+O)*U*.5,D.z=C*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(c,2))}static fromJSON(e){return new Vr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Hr extends Ue{constructor(e=new zo(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,h=new te,c=new E,d=[],u=[],p=[],f=[];function m(x){c=e.getPointAt(x/t,c);let y=a.normals[x],v=a.binormals[x];for(let _=0;_<=n;_++){let w=_/n*Math.PI*2,S=Math.sin(w),C=-Math.cos(w);l.x=C*y.x+S*v.x,l.y=C*y.y+S*v.y,l.z=C*y.z+S*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),function(){for(let x=0;x<=t;x++)for(let y=0;y<=n;y++)h.x=x/t,h.y=y/n,p.push(h.x,h.y)}(),function(){for(let x=1;x<=t;x++)for(let y=1;y<=n;y++){let v=(n+1)*(x-1)+(y-1),_=(n+1)*x+(y-1),w=(n+1)*x+y,S=(n+1)*(x-1)+y;f.push(v,_,S),f.push(_,w,S)}}()})(),this.setIndex(f),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(p,2))}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Hr(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Sc extends Ue{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let d=l[h],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let m=0;m<3;m++){let x=o.getX(p+m),y=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,x),s.fromBufferAttribute(a,y),Tc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,d=3*o+(h+1)%3;n.fromBufferAttribute(a,c),s.fromBufferAttribute(a,d),Tc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new be(t,3))}}}function Tc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Ac=Object.freeze({__proto__:null,BoxGeometry:Vi,CapsuleGeometry:Lr,CircleGeometry:Rr,ConeGeometry:Pr,CylinderGeometry:on,DodecahedronGeometry:Dr,EdgesGeometry:vc,ExtrudeGeometry:zr,IcosahedronGeometry:Fr,LatheGeometry:Jn,OctahedronGeometry:Kn,PlaneGeometry:kn,PolyhedronGeometry:Pi,RingGeometry:Ur,ShapeGeometry:Br,SphereGeometry:Qn,TetrahedronGeometry:kr,TorusGeometry:Gr,TorusKnotGeometry:Vr,TubeGeometry:Hr,WireframeGeometry:Sc});class Ec extends Pt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Cc extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vo extends Pt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lc extends Vo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rc extends Pt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pc extends Pt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Dc extends Pt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ic extends Pt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oc extends Pt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nc extends Gt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ri(r,e,t){return Ho(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function cn(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ho(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zc(r){let e=r.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,n){return r[i]-r[n]}),t}function Wo(r,e,t){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function jo(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}var Wm=Object.freeze({__proto__:null,arraySlice:ri,convertArray:cn,flattenJSON:jo,getKeyframeOrder:zc,isTypedArray:Ho,makeClipAdditive:function(r,e=0,t=r,i=30){i<=0&&(i=30);let n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let h=r.tracks.find(function(y){return y.name===o.name&&y.ValueTypeName===l});if(h===void 0)continue;let c=0,d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=d/3);let u=0,p=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);let f=o.times.length-1,m;if(s<=o.times[0]){let y=c,v=d-c;m=ri(o.values,y,v)}else if(s>=o.times[f]){let y=f*d+c,v=y+d-c;m=ri(o.values,y,v)}else{let y=o.createInterpolant(),v=c,_=d-c;y.evaluate(s),m=ri(y.resultBuffer,v,_)}l==="quaternion"&&new Xt().fromArray(m).normalize().conjugate().toArray(m);let x=h.times.length;for(let y=0;y<x;++y){let v=y*p+u;if(l==="quaternion")Xt.multiplyQuaternionsFlat(h.values,v,m,0,h.values,v);else{let _=p-2*u;for(let w=0;w<_;++w)h.values[v+w]-=m[w]}}}return r.blendMode=2501,r},sortedArray:Wo,subclip:function(r,e,t,i,n=30){let s=r.clone();s.name=e;let a=[];for(let l=0;l<s.tracks.length;++l){let h=s.tracks[l],c=h.getValueSize(),d=[],u=[];for(let p=0;p<h.times.length;++p){let f=h.times[p]*n;if(!(f<t||f>=i)){d.push(h.times[p]);for(let m=0;m<c;++m)u.push(h.values[p*c+m])}}d.length!==0&&(h.times=cn(d,h.times.constructor),h.values=cn(u,h.values.constructor),a.push(h))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}});class Wr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Fc extends Wr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-i;break;case 2402:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*i-t;break;case 2402:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=s*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),m=f*f,x=m*f,y=-u*x+2*u*m-u*f,v=(1+u)*x+(-1.5-2*u)*m+(-.5+u)*f+1,_=(-1-p)*x+(1.5+p)*m+.5*f,w=p*x-p*m;for(let S=0;S!==o;++S)s[S]=y*a[c+S]+v*a[h+S]+_*a[l+S]+w*a[d+S];return s}}class Xo extends Wr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),d=1-c;for(let u=0;u!==o;++u)s[u]=a[h+u]*d+a[l+u]*c;return s}}class Uc extends Wr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cn(t,this.TimeBufferType),this.values=cn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:cn(e.times,Array),values:cn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=ri(i,s,a),this.values=ri(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ho(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=ri(this.times),t=ri(this.values),i=this.getValueSize(),n=this.getInterpolation()===2302,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let f=t[c+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=ri(e,0,a),this.values=ri(t,0,a*i)):(this.times=e,this.values=t),this}clone(){let e=ri(this.times,0),t=ri(this.values,0),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array,mi.prototype.ValueBufferType=Float32Array,mi.prototype.DefaultInterpolation=2301;class un extends mi{}un.prototype.ValueTypeName="bool",un.prototype.ValueBufferType=Array,un.prototype.DefaultInterpolation=2300,un.prototype.InterpolantFactoryMethodLinear=void 0,un.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends mi{}qo.prototype.ValueTypeName="color";class jr extends mi{}jr.prototype.ValueTypeName="number";class Bc extends Wr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)Xt.slerpFlat(s,0,a,h-o,a,h,l);return s}}class er extends mi{InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion",er.prototype.DefaultInterpolation=2301,er.prototype.InterpolantFactoryMethodSmooth=void 0;class dn extends mi{}dn.prototype.ValueTypeName="string",dn.prototype.ValueBufferType=Array,dn.prototype.DefaultInterpolation=2300,dn.prototype.InterpolantFactoryMethodLinear=void 0,dn.prototype.InterpolantFactoryMethodSmooth=void 0;class Xr extends mi{}Xr.prototype.ValueTypeName="vector";class qr{constructor(e,t=-1,i,n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(jm(i[a]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(mi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],h=[];l.push((o+s-1)%s,o,(o+1)%s),h.push(0,1,0);let c=zc(l);l=Wo(l,1,c),h=Wo(h,1,c),n||l[0]!==0||(l.push(s),h.push(h[0])),a.push(new jr(".morphTargetInfluences["+t[o].name+"]",l,h).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let h=e[o],c=h.name.match(s);if(c&&c.length>1){let d=c[1],u=n[d];u||(n[d]=u=[]),u.push(h)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(c,d,u,p,f){if(u.length!==0){let m=[],x=[];jo(u,m,x,p),m.length!==0&&f.push(new c(d,m,x))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,h=e.hierarchy||[];for(let c=0;c<h.length;c++){let d=h[c].keys;if(d&&d.length!==0)if(d[0].morphTargets){let u={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let f=0;f<d[p].morphTargets.length;f++)u[d[p].morphTargets[f]]=-1;for(let f in u){let m=[],x=[];for(let y=0;y!==d[p].morphTargets.length;++y){let v=d[p];m.push(v.time),x.push(v.morphTarget===f?1:0)}n.push(new jr(".morphTargetInfluence["+f+"]",m,x))}l=u.length*a}else{let u=".bones["+t[c].name+"]";i(Xr,u+".position",d,"pos",n),i(er,u+".quaternion",d,"rot",n),i(Xr,u+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){let n=this.tracks[t];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return jr;case"vector":case"vector2":case"vector3":case"vector4":return Xr;case"color":return qo;case"quaternion":return er;case"bool":case"boolean":return un;case"string":return dn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){let t=[],i=[];jo(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}let pn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yo{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return s?s(c):c},this.setURLModifier=function(c){return s=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let p=h[d],f=h[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}}let kc=new Yo;class $t{constructor(e){this.manager=e!==void 0?e:kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}let Di={};class Xm extends Error{constructor(e,t){super(e),this.response=t}}class Ii extends $t{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=pn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Di[e]!==void 0)return void Di[e].push({onLoad:t,onProgress:i,onError:n});Di[e]=[],Di[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let c=Di[e],d=h.body.getReader(),u=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),p=u?parseInt(u):0,f=p!==0,m=0,x=new ReadableStream({start(y){(function v(){d.read().then(({done:_,value:w})=>{if(_)y.close();else{m+=w.byteLength;let S=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:p});for(let C=0,D=c.length;C<D;C++){let N=c[C];N.onProgress&&N.onProgress(S)}y.enqueue(w),v()}})})()}});return new Response(x)}throw new Xm(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return h.json();default:if(o===void 0)return h.text();{let c=/charset="?([^;"\s]*)"?/i.exec(o),d=c&&c[1]?c[1].toLowerCase():void 0,u=new TextDecoder(d);return h.arrayBuffer().then(p=>u.decode(p))}}}).then(h=>{pn.add(e,h);let c=Di[e];delete Di[e];for(let d=0,u=c.length;d<u;d++){let p=c[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{let c=Di[e];if(c===void 0)throw this.manager.itemError(e),h;delete Di[e];for(let d=0,u=c.length;d<u;d++){let p=c[d];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yr extends $t{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=pn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=hr("img");function l(){c(),pn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(d){c(),n&&n(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ji extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Gc extends ji{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}let Zo=new Oe,Vc=new E,Hc=new E;class Jo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qm extends Jo{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*or*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Wc extends ji{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new qm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let jc=new Oe,Zr=new E,$o=new E;class Ym extends Jo{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zr),$o.copy(i.position),$o.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($o),i.updateMatrixWorld(),n.makeTranslation(-Zr.x,-Zr.y,-Zr.z),jc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class Xc extends ji{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ym}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zm extends Jo{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Zm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yc extends ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zc extends ji{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Jc{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],i*n*1.092548),t.addScaledVector(a[5],n*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],i*s*1.092548),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*n),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*i),t.addScaledVector(a[4],.858086*i*n),t.addScaledVector(a[5],.858086*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+3*n);return this}toArray(e=[],t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+3*n);return e}static getBasisAt(e,t){let i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}}class na extends ji{constructor(e=new Jc,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ra extends $t{constructor(e){super(e),this.textures={}}load(e,t,i,n){let s=this,a=new Ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let n=ra.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==1&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(n.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let a=e.uniforms[s];switch(n.uniforms[s]={},a.type){case"t":n.uniforms[s].value=i(a.value);break;case"c":n.uniforms[s].value=new ye().setHex(a.value);break;case"v2":n.uniforms[s].value=new te().fromArray(a.value);break;case"v3":n.uniforms[s].value=new E().fromArray(a.value);break;case"v4":n.uniforms[s].value=new Je().fromArray(a.value);break;case"m3":n.uniforms[s].value=new Ut().fromArray(a.value);break;case"m4":n.uniforms[s].value=new Oe().fromArray(a.value);break;default:n.uniforms[s].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)n.extensions[s]=e.extensions[s];if(e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new te().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){return new{ShadowMaterial:Ec,SpriteMaterial:wo,RawShaderMaterial:Cc,ShaderMaterial:yi,PointsMaterial:Eo,MeshPhysicalMaterial:Lc,MeshStandardMaterial:Vo,MeshPhongMaterial:Rc,MeshToonMaterial:Pc,MeshNormalMaterial:Dc,MeshLambertMaterial:Ic,MeshDepthMaterial:_o,MeshDistanceMaterial:bo,MeshBasicMaterial:Gi,MeshMatcapMaterial:Oc,LineDashedMaterial:Nc,LineBasicMaterial:Gt,Material:Pt}[e]}}class Ko{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $c extends Ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Kc extends $t{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Ii(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t={},i={};function n(d,u){if(t[u]!==void 0)return t[u];let p=d.interleavedBuffers[u],f=function(y,v){if(i[v]!==void 0)return i[v];let _=y.arrayBuffers,w=_[v],S=new Uint32Array(w).buffer;return i[v]=S,S}(d,p.buffer),m=An(p.type,f),x=new Us(m,p.stride);return x.uuid=p.uuid,t[u]=x,x}let s=e.isInstancedBufferGeometry?new $c:new Ue,a=e.data.index;if(a!==void 0){let d=An(a.type,a.array);s.setIndex(new et(d,1))}let o=e.data.attributes;for(let d in o){let u=o[d],p;if(u.isInterleavedBufferAttribute){let f=n(e.data,u.data);p=new an(f,u.itemSize,u.offset,u.normalized)}else{let f=An(u.type,u.array);p=new(u.isInstancedBufferAttribute?Zn:et)(f,u.itemSize,u.normalized)}u.name!==void 0&&(p.name=u.name),u.usage!==void 0&&p.setUsage(u.usage),u.updateRange!==void 0&&(p.updateRange.offset=u.updateRange.offset,p.updateRange.count=u.updateRange.count),s.setAttribute(d,p)}let l=e.data.morphAttributes;if(l)for(let d in l){let u=l[d],p=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],y;if(x.isInterleavedBufferAttribute){let v=n(e.data,x.data);y=new an(v,x.itemSize,x.offset,x.normalized)}else{let v=An(x.type,x.array);y=new et(v,x.itemSize,x.normalized)}x.name!==void 0&&(y.name=x.name),p.push(y)}s.morphAttributes[d]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let d=0,u=h.length;d!==u;++d){let p=h[d];s.addGroup(p.start,p.count,p.materialIndex)}let c=e.data.boundingSphere;if(c!==void 0){let d=new E;c.center!==void 0&&d.fromArray(c.center),s.boundingSphere=new rn(d,c.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}let Jm={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},Qc={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},eu={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},sa;class Qo{static getContext(){return sa===void 0&&(sa=new(window.AudioContext||window.webkitAudioContext)),sa}static setContext(e){sa=e}}let tu=new Oe,iu=new Oe,mn=new Oe;class nu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ru(){return(typeof performance>"u"?Date:performance).now()}let fn=new E,su=new Xt,$m=new E,gn=new E;class au extends Ye{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}let vn=new E,ou=new Xt,Km=new E,xn=new E;class lu{constructor(e,t,i){let n,s,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,h=t+t;l!==h;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Xt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let a=this._workIndex*s;Xt.multiplyQuaternionsFlat(e,a,e,t,e,i),Xt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){let a=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}}let el="\\[\\]\\.:\\/",Qm=new RegExp("["+el+"]","g"),tl="[^"+el+"]",ef="[^"+el.replace("\\.","")+"]",tf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",tl)+/(WCOD+)?/.source.replace("WCOD",ef)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl)+"$"),nf=["material","materials","bones","map"];class We{constructor(e,t,i){this.path=t,this.parsedPath=i||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,i):new We(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(e){let t=tf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);nf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=class{constructor(r,e,t){let i=t||We.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray],We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rf{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let h=0;h!==a;++h){let c=s[h].createInterpolant(null);o[h]=c,c.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,h=o.sampleValues;return l[0]=s,l[1]=s+i,h[0]=e/a,h[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,h=this._propertyBindings;if(this.blendMode===2501)for(let c=0,d=l.length;c!==d;++c)l[c].evaluate(a),h[c].accumulateAdditive(o);else for(let c=0,d=l.length;c!==d;++c)l[c].evaluate(a),h[c].accumulate(n,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,a=i===2202;if(e===0)return s===-1?n:a&&(1&s)==1?t-n:n;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else{if(!(n<0)){this.time=n;break e}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(1&s)==1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=2401,n.endingEnd=2401):(n.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,n.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}let sf=new Float32Array(1);class il{constructor(e){this.value=e}clone(){return new il(this.value.clone===void 0?this.value:this.value.clone())}}let af=0;function hu(r,e){return r.distance-e.distance}function nl(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){let n=r.children;for(let s=0,a=n.length;s<a;s++)nl(n[s],e,t,!0)}}let cu=new te,uu=new E,aa=new E,du=new E,Xi=new E,oa=new Oe,rl=new Oe;function pu(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,pu(r.children[t]));return e}let of=new E,mu=new ye,fu=new ye,gu=new E,la=new E,vu=new E,ha=new E,at=new Cs;function ct(r,e,t,i,n,s,a){ha.set(n,s,a).unproject(i);let o=e[r];if(o!==void 0){let l=t.getAttribute("position");for(let h=0,c=o.length;h<c;h++)l.setXYZ(o[h],ha.x,ha.y,ha.z)}}let ca=new Qi,xu=new E,ua,sl,Oi=lf();function lf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var hf=Object.freeze({__proto__:null,fromHalfFloat:function(r){let e=r>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(1023&r)]+Oi.exponentTable[e],Oi.floatView[0]},toHalfFloat:function(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=lt(r,-65504,65504),Oi.floatView[0]=r;let e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((8388607&e)>>Oi.shiftTable[t])}});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:M}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=M),g.ACESFilmicToneMapping=4,g.AddEquation=100,g.AddOperation=2,g.AdditiveAnimationBlendMode=2501,g.AdditiveBlending=2,g.AlphaFormat=1021,g.AlwaysDepth=1,g.AlwaysStencilFunc=519,g.AmbientLight=Yc,g.AmbientLightProbe=class extends na{constructor(r,e=1){super(void 0,e),this.isAmbientLightProbe=!0;let t=new ye().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}},g.AnimationClip=qr,g.AnimationLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=this,s=new Ii(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{e(n.parse(JSON.parse(a)))}catch(o){i?i(o):console.error(o),n.manager.itemError(r)}},t,i)}parse(r){let e=[];for(let t=0;t<r.length;t++){let i=qr.parse(r[t]);e.push(i)}return e}},g.AnimationMixer=class extends jt{constructor(r){super(),this._root=r,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(r,e){let t=r._localRoot||this._root,i=r._clip.tracks,n=i.length,s=r._propertyBindings,a=r._interpolants,o=t.uuid,l=this._bindingsByRootAndName,h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==n;++c){let d=i[c],u=d.name,p=h[u];if(p!==void 0)++p.referenceCount,s[c]=p;else{if(p=s[c],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,u));continue}let f=e&&e._propertyBindings[c].binding.parsedPath;p=new lu(We.create(t,u,f),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,u),s[c]=p}a[c].resultBuffer=p.buffer}}_activateAction(r){if(!this._isActiveAction(r)){if(r._cacheIndex===null){let t=(r._localRoot||this._root).uuid,i=r._clip.uuid,n=this._actionsByClip[i];this._bindAction(r,n&&n.knownActions[0]),this._addInactiveAction(r,i,t)}let e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){let n=e[t];n.useCount++==0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(r)}}_deactivateAction(r){if(this._isActiveAction(r)){let e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){let n=e[t];--n.useCount==0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(r)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let r=this;this.stats={actions:{get total(){return r._actions.length},get inUse(){return r._nActiveActions}},bindings:{get total(){return r._bindings.length},get inUse(){return r._nActiveBindings}},controlInterpolants:{get total(){return r._controlInterpolants.length},get inUse(){return r._nActiveControlInterpolants}}}}_isActiveAction(r){let e=r._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(r,e,t){let i=this._actions,n=this._actionsByClip,s=n[e];if(s===void 0)s={knownActions:[r],actionByRoot:{}},r._byClipCacheIndex=0,n[e]=s;else{let a=s.knownActions;r._byClipCacheIndex=a.length,a.push(r)}r._cacheIndex=i.length,i.push(r),s.actionByRoot[t]=r}_removeInactiveAction(r){let e=this._actions,t=e[e.length-1],i=r._cacheIndex;t._cacheIndex=i,e[i]=t,e.pop(),r._cacheIndex=null;let n=r._clip.uuid,s=this._actionsByClip,a=s[n],o=a.knownActions,l=o[o.length-1],h=r._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),r._byClipCacheIndex=null,delete a.actionByRoot[(r._localRoot||this._root).uuid],o.length===0&&delete s[n],this._removeInactiveBindingsForAction(r)}_removeInactiveBindingsForAction(r){let e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){let n=e[t];--n.referenceCount==0&&this._removeInactiveBinding(n)}}_lendAction(r){let e=this._actions,t=r._cacheIndex,i=this._nActiveActions++,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_takeBackAction(r){let e=this._actions,t=r._cacheIndex,i=--this._nActiveActions,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_addInactiveBinding(r,e,t){let i=this._bindingsByRootAndName,n=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[t]=r,r._cacheIndex=n.length,n.push(r)}_removeInactiveBinding(r){let e=this._bindings,t=r.binding,i=t.rootNode.uuid,n=t.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=r._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[n],Object.keys(a).length===0&&delete s[i]}_lendBinding(r){let e=this._bindings,t=r._cacheIndex,i=this._nActiveBindings++,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_takeBackBinding(r){let e=this._bindings,t=r._cacheIndex,i=--this._nActiveBindings,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_lendControlInterpolant(){let r=this._controlInterpolants,e=this._nActiveControlInterpolants++,t=r[e];return t===void 0&&(t=new Xo(new Float32Array(2),new Float32Array(2),1,sf),t.__cacheIndex=e,r[e]=t),t}_takeBackControlInterpolant(r){let e=this._controlInterpolants,t=r.__cacheIndex,i=--this._nActiveControlInterpolants,n=e[i];r.__cacheIndex=i,e[i]=r,n.__cacheIndex=t,e[t]=n}clipAction(r,e,t){let i=e||this._root,n=i.uuid,s=typeof r=="string"?qr.findByName(i,r):r,a=s!==null?s.uuid:r,o=this._actionsByClip[a],l=null;if(t===void 0&&(t=s!==null?s.blendMode:2500),o!==void 0){let c=o.actionByRoot[n];if(c!==void 0&&c.blendMode===t)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new rf(this,s,e,t);return this._bindAction(h,l),this._addInactiveAction(h,a,n),h}existingAction(r,e){let t=e||this._root,i=t.uuid,n=typeof r=="string"?qr.findByName(t,r):r,s=n?n.uuid:r,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let r=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)r[e].stop();return this}update(r){r*=this.timeScale;let e=this._actions,t=this._nActiveActions,i=this.time+=r,n=Math.sign(r),s=this._accuIndex^=1;for(let l=0;l!==t;++l)e[l]._update(i,r,n,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(r){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(r)}getRoot(){return this._root}uncacheClip(r){let e=this._actions,t=r.uuid,i=this._actionsByClip,n=i[t];if(n!==void 0){let s=n.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let h=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[t]}}uncacheRoot(r){let e=r.uuid,t=this._actionsByClip;for(let n in t){let s=t[n].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[e];if(i!==void 0)for(let n in i){let s=i[n];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(r,e){let t=this.existingAction(r,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}},g.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Yt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let r={};this._indicesByUUID=r;for(let t=0,i=arguments.length;t!==i;++t)r[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let r=this._objects,e=this._indicesByUUID,t=this._paths,i=this._parsedPaths,n=this._bindings,s=n.length,a,o=r.length,l=this.nCachedObjects_;for(let h=0,c=arguments.length;h!==c;++h){let d=arguments[h],u=d.uuid,p=e[u];if(p===void 0){p=o++,e[u]=p,r.push(d);for(let f=0,m=s;f!==m;++f)n[f].push(new We(d,t[f],i[f]))}else if(p<l){a=r[p];let f=--l,m=r[f];e[m.uuid]=p,r[p]=m,e[u]=f,r[f]=d;for(let x=0,y=s;x!==y;++x){let v=n[x],_=v[f],w=v[p];v[p]=_,w===void 0&&(w=new We(d,t[x],i[x])),v[f]=w}}else r[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let r=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length,n=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){let o=arguments[s],l=o.uuid,h=e[l];if(h!==void 0&&h>=n){let c=n++,d=r[c];e[d.uuid]=h,r[h]=d,e[l]=c,r[c]=o;for(let u=0,p=i;u!==p;++u){let f=t[u],m=f[c],x=f[h];f[h]=m,f[c]=x}}}this.nCachedObjects_=n}uncache(){let r=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length,n=this.nCachedObjects_,s=r.length;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a].uuid,h=e[l];if(h!==void 0)if(delete e[l],h<n){let c=--n,d=r[c],u=--s,p=r[u];e[d.uuid]=h,r[h]=d,e[p.uuid]=c,r[c]=p,r.pop();for(let f=0,m=i;f!==m;++f){let x=t[f],y=x[c],v=x[u];x[h]=y,x[c]=v,x.pop()}}else{let c=--s,d=r[c];c>0&&(e[d.uuid]=h),r[h]=d,r.pop();for(let u=0,p=i;u!==p;++u){let f=t[u];f[h]=f[c],f.pop()}}}this.nCachedObjects_=n}subscribe_(r,e){let t=this._bindingsIndicesByPath,i=t[r],n=this._bindings;if(i!==void 0)return n[i];let s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,h=this.nCachedObjects_,c=new Array(l);i=n.length,t[r]=i,s.push(r),a.push(e),n.push(c);for(let d=h,u=o.length;d!==u;++d){let p=o[d];c[d]=new We(p,r,e)}return c}unsubscribe_(r){let e=this._bindingsIndicesByPath,t=e[r];if(t!==void 0){let i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[r[a]]=t,s[t]=o,s.pop(),n[t]=n[a],n.pop(),i[t]=i[a],i.pop()}}},g.AnimationUtils=Wm,g.ArcCurve=uc,g.ArrayCamera=zh,g.ArrowHelper=class extends Ye{constructor(r=new E(0,0,1),e=new E(0,0,0),t=1,i=16776960,n=.2*t,s=.2*n){super(),this.type="ArrowHelper",ua===void 0&&(ua=new Ue,ua.setAttribute("position",new be([0,0,0,0,1,0],3)),sl=new on(0,.5,1,5,1),sl.translate(0,-.5,0)),this.position.copy(e),this.line=new Wi(ua,new Gt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new At(sl,new Gi({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(r),this.setLength(t,n,s)}setDirection(r){if(r.y>.99999)this.quaternion.set(0,0,0,1);else if(r.y<-.99999)this.quaternion.set(1,0,0,0);else{xu.set(r.z,0,-r.x).normalize();let e=Math.acos(r.y);this.quaternion.setFromAxisAngle(xu,e)}}setLength(r,e=.2*r,t=.2*e){this.line.scale.set(1,Math.max(1e-4,r-e),1),this.line.updateMatrix(),this.cone.scale.set(t,e,t),this.cone.position.y=r,this.cone.updateMatrix()}setColor(r){this.line.material.color.set(r),this.cone.material.color.set(r)}copy(r){return super.copy(r,!1),this.line.copy(r.line),this.cone.copy(r.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},g.Audio=au,g.AudioAnalyser=class{constructor(r,e=2048){this.analyser=r.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),r.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let r=0,e=this.getFrequencyData();for(let t=0;t<e.length;t++)r+=e[t];return r/e.length}},g.AudioContext=Qo,g.AudioListener=class extends Ye{constructor(){super(),this.type="AudioListener",this.context=Qo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new nu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(r){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=r,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}updateMatrixWorld(r){super.updateMatrixWorld(r);let e=this.context.listener,t=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(fn,su,$m),gn.set(0,0,-1).applyQuaternion(su),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(fn.x,i),e.positionY.linearRampToValueAtTime(fn.y,i),e.positionZ.linearRampToValueAtTime(fn.z,i),e.forwardX.linearRampToValueAtTime(gn.x,i),e.forwardY.linearRampToValueAtTime(gn.y,i),e.forwardZ.linearRampToValueAtTime(gn.z,i),e.upX.linearRampToValueAtTime(t.x,i),e.upY.linearRampToValueAtTime(t.y,i),e.upZ.linearRampToValueAtTime(t.z,i)}else e.setPosition(fn.x,fn.y,fn.z),e.setOrientation(gn.x,gn.y,gn.z,t.x,t.y,t.z)}},g.AudioLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=this,s=new Ii(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{let o=a.slice(0);Qo.getContext().decodeAudioData(o,function(l){e(l)})}catch(o){i?i(o):console.error(o),n.manager.itemError(r)}},t,i)}},g.AxesHelper=class extends _i{constructor(r=1){let e=[0,0,0,r,0,0,0,0,0,0,r,0,0,0,0,0,0,r],t=new Ue;t.setAttribute("position",new be(e,3)),t.setAttribute("color",new be([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(t,new Gt({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(r,e,t){let i=new ye,n=this.geometry.attributes.color.array;return i.set(r),i.toArray(n,0),i.toArray(n,3),i.set(e),i.toArray(n,6),i.toArray(n,9),i.set(t),i.toArray(n,12),i.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BackSide=1,g.BasicDepthPacking=3200,g.BasicShadowMap=0,g.Bone=To,g.BooleanKeyframeTrack=un,g.Box2=class{constructor(r=new te(1/0,1/0),e=new te(-1/0,-1/0)){this.isBox2=!0,this.min=r,this.max=e}set(r,e){return this.min.copy(r),this.max.copy(e),this}setFromPoints(r){this.makeEmpty();for(let e=0,t=r.length;e<t;e++)this.expandByPoint(r[e]);return this}setFromCenterAndSize(r,e){let t=cu.copy(e).multiplyScalar(.5);return this.min.copy(r).sub(t),this.max.copy(r).add(t),this}clone(){return new this.constructor().copy(this)}copy(r){return this.min.copy(r.min),this.max.copy(r.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(r){return this.isEmpty()?r.set(0,0):r.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(r){return this.isEmpty()?r.set(0,0):r.subVectors(this.max,this.min)}expandByPoint(r){return this.min.min(r),this.max.max(r),this}expandByVector(r){return this.min.sub(r),this.max.add(r),this}expandByScalar(r){return this.min.addScalar(-r),this.max.addScalar(r),this}containsPoint(r){return!(r.x<this.min.x||r.x>this.max.x||r.y<this.min.y||r.y>this.max.y)}containsBox(r){return this.min.x<=r.min.x&&r.max.x<=this.max.x&&this.min.y<=r.min.y&&r.max.y<=this.max.y}getParameter(r,e){return e.set((r.x-this.min.x)/(this.max.x-this.min.x),(r.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(r){return!(r.max.x<this.min.x||r.min.x>this.max.x||r.max.y<this.min.y||r.min.y>this.max.y)}clampPoint(r,e){return e.copy(r).clamp(this.min,this.max)}distanceToPoint(r){return cu.copy(r).clamp(this.min,this.max).sub(r).length()}intersect(r){return this.min.max(r.min),this.max.min(r.max),this}union(r){return this.min.min(r.min),this.max.max(r.max),this}translate(r){return this.min.add(r),this.max.add(r),this}equals(r){return r.min.equals(this.min)&&r.max.equals(this.max)}},g.Box3=Qi,g.Box3Helper=class extends _i{constructor(r,e=16776960){let t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Ue;i.setIndex(new et(t,1)),i.setAttribute("position",new be([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new Gt({color:e,toneMapped:!1})),this.box=r,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(r){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(r))}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BoxBufferGeometry=class extends Vi{constructor(r,e,t,i,n,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(r,e,t,i,n,s)}},g.BoxGeometry=Vi,g.BoxHelper=class extends _i{constructor(r,e=16776960){let t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),n=new Ue;n.setIndex(new et(t,1)),n.setAttribute("position",new et(i,3)),super(n,new Gt({color:e,toneMapped:!1})),this.object=r,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(r){if(r!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ca.setFromObject(this.object),ca.isEmpty())return;let e=ca.min,t=ca.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(r){return this.object=r,this.update(),this}copy(r,e){return super.copy(r,e),this.object=r.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BufferAttribute=et,g.BufferGeometry=Ue,g.BufferGeometryLoader=Kc,g.ByteType=1010,g.Cache=pn,g.Camera=Cs,g.CameraHelper=class extends _i{constructor(r){let e=new Ue,t=new Gt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],n=[],s={};function a(p,f){o(p),o(f)}function o(p){i.push(0,0,0),n.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(i.length/3-1)}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new be(i,3)),e.setAttribute("color",new be(n,3)),super(e,t),this.type="CameraHelper",this.camera=r,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();let l=new ye(16755200),h=new ye(16711680),c=new ye(43775),d=new ye(16777215),u=new ye(3355443);this.setColors(l,h,c,d,u)}setColors(r,e,t,i,n){let s=this.geometry.getAttribute("color");s.setXYZ(0,r.r,r.g,r.b),s.setXYZ(1,r.r,r.g,r.b),s.setXYZ(2,r.r,r.g,r.b),s.setXYZ(3,r.r,r.g,r.b),s.setXYZ(4,r.r,r.g,r.b),s.setXYZ(5,r.r,r.g,r.b),s.setXYZ(6,r.r,r.g,r.b),s.setXYZ(7,r.r,r.g,r.b),s.setXYZ(8,r.r,r.g,r.b),s.setXYZ(9,r.r,r.g,r.b),s.setXYZ(10,r.r,r.g,r.b),s.setXYZ(11,r.r,r.g,r.b),s.setXYZ(12,r.r,r.g,r.b),s.setXYZ(13,r.r,r.g,r.b),s.setXYZ(14,r.r,r.g,r.b),s.setXYZ(15,r.r,r.g,r.b),s.setXYZ(16,r.r,r.g,r.b),s.setXYZ(17,r.r,r.g,r.b),s.setXYZ(18,r.r,r.g,r.b),s.setXYZ(19,r.r,r.g,r.b),s.setXYZ(20,r.r,r.g,r.b),s.setXYZ(21,r.r,r.g,r.b),s.setXYZ(22,r.r,r.g,r.b),s.setXYZ(23,r.r,r.g,r.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,t.r,t.g,t.b),s.setXYZ(33,t.r,t.g,t.b),s.setXYZ(34,t.r,t.g,t.b),s.setXYZ(35,t.r,t.g,t.b),s.setXYZ(36,t.r,t.g,t.b),s.setXYZ(37,t.r,t.g,t.b),s.setXYZ(38,i.r,i.g,i.b),s.setXYZ(39,i.r,i.g,i.b),s.setXYZ(40,n.r,n.g,n.b),s.setXYZ(41,n.r,n.g,n.b),s.setXYZ(42,n.r,n.g,n.b),s.setXYZ(43,n.r,n.g,n.b),s.setXYZ(44,n.r,n.g,n.b),s.setXYZ(45,n.r,n.g,n.b),s.setXYZ(46,n.r,n.g,n.b),s.setXYZ(47,n.r,n.g,n.b),s.setXYZ(48,n.r,n.g,n.b),s.setXYZ(49,n.r,n.g,n.b),s.needsUpdate=!0}update(){let r=this.geometry,e=this.pointMap;at.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),ct("c",e,r,at,0,0,-1),ct("t",e,r,at,0,0,1),ct("n1",e,r,at,-1,-1,-1),ct("n2",e,r,at,1,-1,-1),ct("n3",e,r,at,-1,1,-1),ct("n4",e,r,at,1,1,-1),ct("f1",e,r,at,-1,-1,1),ct("f2",e,r,at,1,-1,1),ct("f3",e,r,at,-1,1,1),ct("f4",e,r,at,1,1,1),ct("u1",e,r,at,.7,1.1,-1),ct("u2",e,r,at,-.7,1.1,-1),ct("u3",e,r,at,0,2,-1),ct("cf1",e,r,at,-1,0,1),ct("cf2",e,r,at,1,0,1),ct("cf3",e,r,at,0,-1,1),ct("cf4",e,r,at,0,1,1),ct("cn1",e,r,at,-1,0,-1),ct("cn2",e,r,at,1,0,-1),ct("cn3",e,r,at,0,-1,-1),ct("cn4",e,r,at,0,1,-1),r.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},g.CanvasTexture=class extends ht{constructor(r,e,t,i,n,s,a,o,l){super(r,e,t,i,n,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},g.CapsuleBufferGeometry=class extends Lr{constructor(r,e,t,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(r,e,t,i)}},g.CapsuleGeometry=Lr,g.CatmullRomCurve3=dc,g.CineonToneMapping=3,g.CircleBufferGeometry=class extends Rr{constructor(r,e,t,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(r,e,t,i)}},g.CircleGeometry=Rr,g.ClampToEdgeWrapping=1001,g.Clock=nu,g.Color=ye,g.ColorKeyframeTrack=qo,g.ColorManagement=Rt,g.CompressedArrayTexture=class extends Lo{constructor(r,e,t,i,n,s){super(r,e,t,n,s),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=1001}},g.CompressedTexture=Lo,g.CompressedTextureLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=this,s=[],a=new Lo,o=new Ii(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(n.withCredentials);let l=0;function h(c){o.load(r[c],function(d){let u=n.parse(d,!0);s[c]={width:u.width,height:u.height,format:u.format,mipmaps:u.mipmaps},l+=1,l===6&&(u.mipmapCount===1&&(a.minFilter=1006),a.image=s,a.format=u.format,a.needsUpdate=!0,e&&e(a))},t,i)}if(Array.isArray(r))for(let c=0,d=r.length;c<d;++c)h(c);else o.load(r,function(c){let d=n.parse(c,!0);if(d.isCubemap){let u=d.mipmaps.length/d.mipmapCount;for(let p=0;p<u;p++){s[p]={mipmaps:[]};for(let f=0;f<d.mipmapCount;f++)s[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+f]),s[p].format=d.format,s[p].width=d.width,s[p].height=d.height}a.image=s}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=1006),a.format=d.format,a.needsUpdate=!0,e&&e(a)},t,i);return a}},g.ConeBufferGeometry=class extends Pr{constructor(r,e,t,i,n,s,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(r,e,t,i,n,s,a)}},g.ConeGeometry=Pr,g.CubeCamera=oh,g.CubeReflectionMapping=301,g.CubeRefractionMapping=302,g.CubeTexture=yr,g.CubeTextureLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=new yr,s=new Yr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(r[l],function(h){n.images[l]=h,a++,a===6&&(n.needsUpdate=!0,e&&e(n))},void 0,i)}for(let l=0;l<r.length;++l)o(l);return n}},g.CubeUVReflectionMapping=306,g.CubicBezierCurve=Oo,g.CubicBezierCurve3=mc,g.CubicInterpolant=Fc,g.CullFaceBack=1,g.CullFaceFront=2,g.CullFaceFrontBack=3,g.CullFaceNone=0,g.Curve=pi,g.CurvePath=gc,g.CustomBlending=5,g.CustomToneMapping=5,g.CylinderBufferGeometry=class extends on{constructor(r,e,t,i,n,s,a,o){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(r,e,t,i,n,s,a,o)}},g.CylinderGeometry=on,g.Cylindrical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.theta=e,this.y=t,this}set(r,e,t){return this.radius=r,this.theta=e,this.y=t,this}copy(r){return this.radius=r.radius,this.theta=r.theta,this.y=r.y,this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+t*t),this.theta=Math.atan2(r,t),this.y=e,this}clone(){return new this.constructor().copy(this)}},g.Data3DTexture=Ya,g.DataArrayTexture=ps,g.DataTexture=Yn,g.DataTextureLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=this,s=new Yn,a=new Ii(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(n.withCredentials),a.load(r,function(o){let l=n.parse(o);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:1001,s.wrapT=l.wrapT!==void 0?l.wrapT:1001,s.magFilter=l.magFilter!==void 0?l.magFilter:1006,s.minFilter=l.minFilter!==void 0?l.minFilter:1006,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=1008),l.mipmapCount===1&&(s.minFilter=1006),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,e&&e(s,l))},t,i),s}},g.DataUtils=hf,g.DecrementStencilOp=7683,g.DecrementWrapStencilOp=34056,g.DefaultLoadingManager=kc,g.DepthFormat=1026,g.DepthStencilFormat=1027,g.DepthTexture=Fh,g.DirectionalLight=qc,g.DirectionalLightHelper=class extends Ye{constructor(r,e,t){super(),this.light=r,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Ue;i.setAttribute("position",new be([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let n=new Gt({fog:!1,toneMapped:!1});this.lightPlane=new Wi(i,n),this.add(this.lightPlane),i=new Ue,i.setAttribute("position",new be([0,0,0,0,0,1],3)),this.targetLine=new Wi(i,n),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),gu.setFromMatrixPosition(this.light.matrixWorld),la.setFromMatrixPosition(this.light.target.matrixWorld),vu.subVectors(la,gu),this.lightPlane.lookAt(la),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(la),this.targetLine.scale.z=vu.length()}},g.DiscreteInterpolant=Uc,g.DodecahedronBufferGeometry=class extends Dr{constructor(r,e){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(r,e)}},g.DodecahedronGeometry=Dr,g.DoubleSide=2,g.DstAlphaFactor=206,g.DstColorFactor=208,g.DynamicCopyUsage=35050,g.DynamicDrawUsage=35048,g.DynamicReadUsage=35049,g.EdgesGeometry=vc,g.EllipseCurve=Ys,g.EqualDepth=4,g.EqualStencilFunc=514,g.EquirectangularReflectionMapping=303,g.EquirectangularRefractionMapping=304,g.Euler=pr,g.EventDispatcher=jt,g.ExtrudeBufferGeometry=class extends zr{constructor(r,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(r,e)}},g.ExtrudeGeometry=zr,g.FileLoader=Ii,g.Float16BufferAttribute=class extends et{constructor(r,e,t){super(new Uint16Array(r),e,t),this.isFloat16BufferAttribute=!0}},g.Float32BufferAttribute=be,g.Float64BufferAttribute=class extends et{constructor(r,e,t){super(new Float64Array(r),e,t)}},g.FloatType=1015,g.Fog=Fs,g.FogExp2=zs,g.FramebufferTexture=class extends ht{constructor(r,e,t){super({width:r,height:e}),this.isFramebufferTexture=!0,this.format=t,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}},g.FrontSide=0,g.Frustum=Rs,g.GLBufferAttribute=class{constructor(r,e,t,i,n){this.isGLBufferAttribute=!0,this.name="",this.buffer=r,this.type=e,this.itemSize=t,this.elementSize=i,this.count=n,this.version=0}set needsUpdate(r){r===!0&&this.version++}setBuffer(r){return this.buffer=r,this}setType(r,e){return this.type=r,this.elementSize=e,this}setItemSize(r){return this.itemSize=r,this}setCount(r){return this.count=r,this}},g.GLSL1="100",g.GLSL3=Ft,g.GreaterDepth=6,g.GreaterEqualDepth=5,g.GreaterEqualStencilFunc=518,g.GreaterStencilFunc=516,g.GridHelper=class extends _i{constructor(r=10,e=10,t=4473924,i=8947848){t=new ye(t),i=new ye(i);let n=e/2,s=r/e,a=r/2,o=[],l=[];for(let c=0,d=0,u=-a;c<=e;c++,u+=s){o.push(-a,0,u,a,0,u),o.push(u,0,-a,u,0,a);let p=c===n?t:i;p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3}let h=new Ue;h.setAttribute("position",new be(o,3)),h.setAttribute("color",new be(l,3)),super(h,new Gt({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},g.Group=Hn,g.HalfFloatType=1016,g.HemisphereLight=Gc,g.HemisphereLightHelper=class extends Ye{constructor(r,e,t){super(),this.light=r,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,this.type="HemisphereLightHelper";let i=new Kn(e);i.rotateY(.5*Math.PI),this.material=new Gi({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let n=i.getAttribute("position"),s=new Float32Array(3*n.count);i.setAttribute("color",new et(s,3)),this.add(new At(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let r=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=r.geometry.getAttribute("color");mu.copy(this.light.color),fu.copy(this.light.groundColor);for(let t=0,i=e.count;t<i;t++){let n=t<i/2?mu:fu;e.setXYZ(t,n.r,n.g,n.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),r.lookAt(of.setFromMatrixPosition(this.light.matrixWorld).negate())}},g.HemisphereLightProbe=class extends na{constructor(r,e,t=1){super(void 0,t),this.isHemisphereLightProbe=!0;let i=new ye().set(r),n=new ye().set(e),s=new E(i.r,i.g,i.b),a=new E(n.r,n.g,n.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}},g.IcosahedronBufferGeometry=class extends Fr{constructor(r,e){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(r,e)}},g.IcosahedronGeometry=Fr,g.ImageBitmapLoader=class extends $t{constructor(r){super(r),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(r){return this.options=r,this}load(r,e,t,i){r===void 0&&(r=""),this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);let n=this,s=pn.get(r);if(s!==void 0)return n.manager.itemStart(r),setTimeout(function(){e&&e(s),n.manager.itemEnd(r)},0),s;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(r,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(o){pn.add(r,o),e&&e(o),n.manager.itemEnd(r)}).catch(function(o){i&&i(o),n.manager.itemError(r),n.manager.itemEnd(r)}),n.manager.itemStart(r)}},g.ImageLoader=Yr,g.ImageUtils=Xa,g.IncrementStencilOp=7682,g.IncrementWrapStencilOp=34055,g.InstancedBufferAttribute=Zn,g.InstancedBufferGeometry=$c,g.InstancedInterleavedBuffer=class extends Us{constructor(r,e,t=1){super(r,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){let e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){let e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},g.InstancedMesh=tc,g.Int16BufferAttribute=class extends et{constructor(r,e,t){super(new Int16Array(r),e,t)}},g.Int32BufferAttribute=class extends et{constructor(r,e,t){super(new Int32Array(r),e,t)}},g.Int8BufferAttribute=class extends et{constructor(r,e,t){super(new Int8Array(r),e,t)}},g.IntType=1013,g.InterleavedBuffer=Us,g.InterleavedBufferAttribute=an,g.Interpolant=Wr,g.InterpolateDiscrete=2300,g.InterpolateLinear=2301,g.InterpolateSmooth=2302,g.InvertStencilOp=5386,g.KeepStencilOp=7680,g.KeyframeTrack=mi,g.LOD=Xh,g.LatheBufferGeometry=class extends Jn{constructor(r,e,t,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(r,e,t,i)}},g.LatheGeometry=Jn,g.Layers=ys,g.LessDepth=2,g.LessEqualDepth=3,g.LessEqualStencilFunc=515,g.LessStencilFunc=513,g.Light=ji,g.LightProbe=na,g.Line=Wi,g.Line3=class{constructor(r=new E,e=new E){this.start=r,this.end=e}set(r,e){return this.start.copy(r),this.end.copy(e),this}copy(r){return this.start.copy(r.start),this.end.copy(r.end),this}getCenter(r){return r.addVectors(this.start,this.end).multiplyScalar(.5)}delta(r){return r.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(r,e){return this.delta(e).multiplyScalar(r).add(this.start)}closestPointToPointParameter(r,e){uu.subVectors(r,this.start),aa.subVectors(this.end,this.start);let t=aa.dot(aa),i=aa.dot(uu)/t;return e&&(i=lt(i,0,1)),i}closestPointToPoint(r,e,t){let i=this.closestPointToPointParameter(r,e);return this.delta(t).multiplyScalar(i).add(this.start)}applyMatrix4(r){return this.start.applyMatrix4(r),this.end.applyMatrix4(r),this}equals(r){return r.start.equals(this.start)&&r.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},g.LineBasicMaterial=Gt,g.LineCurve=Js,g.LineCurve3=fc,g.LineDashedMaterial=Nc,g.LineLoop=oc,g.LineSegments=_i,g.LinearEncoding=3e3,g.LinearFilter=1006,g.LinearInterpolant=Xo,g.LinearMipMapLinearFilter=1008,g.LinearMipMapNearestFilter=1007,g.LinearMipmapLinearFilter=1008,g.LinearMipmapNearestFilter=1007,g.LinearSRGBColorSpace=we,g.LinearToneMapping=1,g.Loader=$t,g.LoaderUtils=Ko,g.LoadingManager=Yo,g.LoopOnce=2200,g.LoopPingPong=2202,g.LoopRepeat=2201,g.LuminanceAlphaFormat=1025,g.LuminanceFormat=1024,g.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},g.Material=Pt,g.MaterialLoader=ra,g.MathUtils=Bd,g.Matrix3=Ut,g.Matrix4=Oe,g.MaxEquation=104,g.Mesh=At,g.MeshBasicMaterial=Gi,g.MeshDepthMaterial=_o,g.MeshDistanceMaterial=bo,g.MeshLambertMaterial=Ic,g.MeshMatcapMaterial=Oc,g.MeshNormalMaterial=Dc,g.MeshPhongMaterial=Rc,g.MeshPhysicalMaterial=Lc,g.MeshStandardMaterial=Vo,g.MeshToonMaterial=Pc,g.MinEquation=103,g.MirroredRepeatWrapping=1002,g.MixOperation=1,g.MultiplyBlending=4,g.MultiplyOperation=0,g.NearestFilter=1003,g.NearestMipMapLinearFilter=1005,g.NearestMipMapNearestFilter=1004,g.NearestMipmapLinearFilter=1005,g.NearestMipmapNearestFilter=1004,g.NeverDepth=0,g.NeverStencilFunc=512,g.NoBlending=0,g.NoColorSpace="",g.NoToneMapping=0,g.NormalAnimationBlendMode=2500,g.NormalBlending=1,g.NotEqualDepth=7,g.NotEqualStencilFunc=517,g.NumberKeyframeTrack=jr,g.Object3D=Ye,g.ObjectLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=this,s=this.path===""?Ko.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||s;let a=new Ii(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(r,function(o){let l=null;try{l=JSON.parse(o)}catch(c){return i!==void 0&&i(c),void console.error("THREE:ObjectLoader: Can't parse "+r+".",c.message)}let h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry")return i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+r)),void console.error("THREE.ObjectLoader: Can't load "+r);n.parse(l,e)},t,i)}async loadAsync(r,e){let t=this.path===""?Ko.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||t;let i=new Ii(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);let n=await i.loadAsync(r,e),s=JSON.parse(n),a=s.metadata;if(a===void 0||a.type===void 0||a.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+r);return await this.parseAsync(s)}parse(r,e){let t=this.parseAnimations(r.animations),i=this.parseShapes(r.shapes),n=this.parseGeometries(r.geometries,i),s=this.parseImages(r.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(r.textures,s),o=this.parseMaterials(r.materials,a),l=this.parseObject(r.object,n,o,a,t),h=this.parseSkeletons(r.skeletons,l);if(this.bindSkeletons(l,h),e!==void 0){let c=!1;for(let d in s)if(s[d].data instanceof HTMLImageElement){c=!0;break}c===!1&&e(l)}return l}async parseAsync(r){let e=this.parseAnimations(r.animations),t=this.parseShapes(r.shapes),i=this.parseGeometries(r.geometries,t),n=await this.parseImagesAsync(r.images),s=this.parseTextures(r.textures,n),a=this.parseMaterials(r.materials,s),o=this.parseObject(r.object,i,a,s,e),l=this.parseSkeletons(r.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(r){let e={};if(r!==void 0)for(let t=0,i=r.length;t<i;t++){let n=new ln().fromJSON(r[t]);e[n.uuid]=n}return e}parseSkeletons(r,e){let t={},i={};if(e.traverse(function(n){n.isBone&&(i[n.uuid]=n)}),r!==void 0)for(let n=0,s=r.length;n<s;n++){let a=new Hs().fromJSON(r[n],i);t[a.uuid]=a}return t}parseGeometries(r,e){let t={};if(r!==void 0){let i=new Kc;for(let n=0,s=r.length;n<s;n++){let a,o=r[n];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(o);break;default:o.type in Ac?a=Ac[o.type].fromJSON(o,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),a.isBufferGeometry===!0&&o.userData!==void 0&&(a.userData=o.userData),t[o.uuid]=a}}return t}parseMaterials(r,e){let t={},i={};if(r!==void 0){let n=new ra;n.setTextures(e);for(let s=0,a=r.length;s<a;s++){let o=r[s];t[o.uuid]===void 0&&(t[o.uuid]=n.parse(o)),i[o.uuid]=t[o.uuid]}}return i}parseAnimations(r){let e={};if(r!==void 0)for(let t=0;t<r.length;t++){let i=r[t],n=qr.parse(i);e[n.uuid]=n}return e}parseImages(r,e){let t=this,i={},n;function s(a){if(typeof a=="string"){let o=a;return function(l){return t.manager.itemStart(l),n.load(l,function(){t.manager.itemEnd(l)},void 0,function(){t.manager.itemError(l),t.manager.itemEnd(l)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o)}return a.data?{data:An(a.type,a.data),width:a.width,height:a.height}:null}if(r!==void 0&&r.length>0){let a=new Yo(e);n=new Yr(a),n.setCrossOrigin(this.crossOrigin);for(let o=0,l=r.length;o<l;o++){let h=r[o],c=h.url;if(Array.isArray(c)){let d=[];for(let u=0,p=c.length;u<p;u++){let f=s(c[u]);f!==null&&(f instanceof HTMLImageElement?d.push(f):d.push(new Yn(f.data,f.width,f.height)))}i[h.uuid]=new Ki(d)}else{let d=s(h.url);i[h.uuid]=new Ki(d)}}}return i}async parseImagesAsync(r){let e=this,t={},i;async function n(s){if(typeof s=="string"){let a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(o)}return s.data?{data:An(s.type,s.data),width:s.width,height:s.height}:null}if(r!==void 0&&r.length>0){i=new Yr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let s=0,a=r.length;s<a;s++){let o=r[s],l=o.url;if(Array.isArray(l)){let h=[];for(let c=0,d=l.length;c<d;c++){let u=l[c],p=await n(u);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Yn(p.data,p.width,p.height)))}t[o.uuid]=new Ki(h)}else{let h=await n(o.url);t[o.uuid]=new Ki(h)}}}return t}parseTextures(r,e){function t(n,s){return typeof n=="number"?n:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",n),s[n])}let i={};if(r!==void 0)for(let n=0,s=r.length;n<s;n++){let a=r[n];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let o=e[a.image],l=o.data,h;Array.isArray(l)?(h=new yr,l.length===6&&(h.needsUpdate=!0)):(h=l&&l.data?new Yn:new ht,l&&(h.needsUpdate=!0)),h.source=o,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=t(a.mapping,Jm)),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=t(a.wrap[0],Qc),h.wrapT=t(a.wrap[1],Qc)),a.format!==void 0&&(h.format=a.format),a.type!==void 0&&(h.type=a.type),a.encoding!==void 0&&(h.encoding=a.encoding),a.minFilter!==void 0&&(h.minFilter=t(a.minFilter,eu)),a.magFilter!==void 0&&(h.magFilter=t(a.magFilter,eu)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(r,e,t,i,n){let s,a,o;function l(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function h(d){if(d!==void 0){if(Array.isArray(d)){let u=[];for(let p=0,f=d.length;p<f;p++){let m=d[p];t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),u.push(t[m])}return u}return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),t[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}switch(r.type){case"Scene":s=new kh,r.background!==void 0&&(Number.isInteger(r.background)?s.background=new ye(r.background):s.background=c(r.background)),r.environment!==void 0&&(s.environment=c(r.environment)),r.fog!==void 0&&(r.fog.type==="Fog"?s.fog=new Fs(r.fog.color,r.fog.near,r.fog.far):r.fog.type==="FogExp2"&&(s.fog=new zs(r.fog.color,r.fog.density))),r.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=r.backgroundBlurriness),r.backgroundIntensity!==void 0&&(s.backgroundIntensity=r.backgroundIntensity);break;case"PerspectiveCamera":s=new Et(r.fov,r.aspect,r.near,r.far),r.focus!==void 0&&(s.focus=r.focus),r.zoom!==void 0&&(s.zoom=r.zoom),r.filmGauge!==void 0&&(s.filmGauge=r.filmGauge),r.filmOffset!==void 0&&(s.filmOffset=r.filmOffset),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"OrthographicCamera":s=new Ds(r.left,r.right,r.top,r.bottom,r.near,r.far),r.zoom!==void 0&&(s.zoom=r.zoom),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"AmbientLight":s=new Yc(r.color,r.intensity);break;case"DirectionalLight":s=new qc(r.color,r.intensity);break;case"PointLight":s=new Xc(r.color,r.intensity,r.distance,r.decay);break;case"RectAreaLight":s=new Zc(r.color,r.intensity,r.width,r.height);break;case"SpotLight":s=new Wc(r.color,r.intensity,r.distance,r.angle,r.penumbra,r.decay);break;case"HemisphereLight":s=new Gc(r.color,r.groundColor,r.intensity);break;case"LightProbe":s=new na().fromJSON(r);break;case"SkinnedMesh":a=l(r.geometry),o=h(r.material),s=new $h(a,o),r.bindMode!==void 0&&(s.bindMode=r.bindMode),r.bindMatrix!==void 0&&s.bindMatrix.fromArray(r.bindMatrix),r.skeleton!==void 0&&(s.skeleton=r.skeleton);break;case"Mesh":a=l(r.geometry),o=h(r.material),s=new At(a,o);break;case"InstancedMesh":a=l(r.geometry),o=h(r.material);let d=r.count,u=r.instanceMatrix,p=r.instanceColor;s=new tc(a,o,d),s.instanceMatrix=new Zn(new Float32Array(u.array),16),p!==void 0&&(s.instanceColor=new Zn(new Float32Array(p.array),p.itemSize));break;case"LOD":s=new Xh;break;case"Line":s=new Wi(l(r.geometry),h(r.material));break;case"LineLoop":s=new oc(l(r.geometry),h(r.material));break;case"LineSegments":s=new _i(l(r.geometry),h(r.material));break;case"PointCloud":case"Points":s=new hc(l(r.geometry),h(r.material));break;case"Sprite":s=new Wh(h(r.material));break;case"Group":s=new Hn;break;case"Bone":s=new To;break;default:s=new Ye}if(s.uuid=r.uuid,r.name!==void 0&&(s.name=r.name),r.matrix!==void 0?(s.matrix.fromArray(r.matrix),r.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=r.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(r.position!==void 0&&s.position.fromArray(r.position),r.rotation!==void 0&&s.rotation.fromArray(r.rotation),r.quaternion!==void 0&&s.quaternion.fromArray(r.quaternion),r.scale!==void 0&&s.scale.fromArray(r.scale)),r.castShadow!==void 0&&(s.castShadow=r.castShadow),r.receiveShadow!==void 0&&(s.receiveShadow=r.receiveShadow),r.shadow&&(r.shadow.bias!==void 0&&(s.shadow.bias=r.shadow.bias),r.shadow.normalBias!==void 0&&(s.shadow.normalBias=r.shadow.normalBias),r.shadow.radius!==void 0&&(s.shadow.radius=r.shadow.radius),r.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(r.shadow.mapSize),r.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(r.shadow.camera))),r.visible!==void 0&&(s.visible=r.visible),r.frustumCulled!==void 0&&(s.frustumCulled=r.frustumCulled),r.renderOrder!==void 0&&(s.renderOrder=r.renderOrder),r.userData!==void 0&&(s.userData=r.userData),r.layers!==void 0&&(s.layers.mask=r.layers),r.children!==void 0){let d=r.children;for(let u=0;u<d.length;u++)s.add(this.parseObject(d[u],e,t,i,n))}if(r.animations!==void 0){let d=r.animations;for(let u=0;u<d.length;u++){let p=d[u];s.animations.push(n[p])}}if(r.type==="LOD"){r.autoUpdate!==void 0&&(s.autoUpdate=r.autoUpdate);let d=r.levels;for(let u=0;u<d.length;u++){let p=d[u],f=s.getObjectByProperty("uuid",p.object);f!==void 0&&s.addLevel(f,p.distance,p.hysteresis)}}return s}bindSkeletons(r,e){Object.keys(e).length!==0&&r.traverse(function(t){if(t.isSkinnedMesh===!0&&t.skeleton!==void 0){let i=e[t.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(i,t.bindMatrix)}})}},g.ObjectSpaceNormalMap=1,g.OctahedronBufferGeometry=class extends Kn{constructor(r,e){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(r,e)}},g.OctahedronGeometry=Kn,g.OneFactor=201,g.OneMinusDstAlphaFactor=207,g.OneMinusDstColorFactor=209,g.OneMinusSrcAlphaFactor=205,g.OneMinusSrcColorFactor=203,g.OrthographicCamera=Ds,g.PCFShadowMap=1,g.PCFSoftShadowMap=2,g.PMREMGenerator=go,g.Path=Cr,g.PerspectiveCamera=Et,g.Plane=Hi,g.PlaneBufferGeometry=class extends kn{constructor(r,e,t,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(r,e,t,i)}},g.PlaneGeometry=kn,g.PlaneHelper=class extends Wi{constructor(r,e=1,t=16776960){let i=t,n=new Ue;n.setAttribute("position",new be([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),n.computeBoundingSphere(),super(n,new Gt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=r,this.size=e;let s=new Ue;s.setAttribute("position",new be([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new At(s,new Gi({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(r){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},g.PointLight=Xc,g.PointLightHelper=class extends At{constructor(r,e,t){super(new Qn(e,4,2),new Gi({wireframe:!0,fog:!1,toneMapped:!1})),this.light=r,this.color=t,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},g.Points=hc,g.PointsMaterial=Eo,g.PolarGridHelper=class extends _i{constructor(r=10,e=16,t=8,i=64,n=4473924,s=8947848){n=new ye(n),s=new ye(s);let a=[],o=[];if(e>1)for(let h=0;h<e;h++){let c=h/e*(2*Math.PI),d=Math.sin(c)*r,u=Math.cos(c)*r;a.push(0,0,0),a.push(d,0,u);let p=1&h?n:s;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let h=0;h<t;h++){let c=1&h?n:s,d=r-r/t*h;for(let u=0;u<i;u++){let p=u/i*(2*Math.PI),f=Math.sin(p)*d,m=Math.cos(p)*d;a.push(f,0,m),o.push(c.r,c.g,c.b),p=(u+1)/i*(2*Math.PI),f=Math.sin(p)*d,m=Math.cos(p)*d,a.push(f,0,m),o.push(c.r,c.g,c.b)}}let l=new Ue;l.setAttribute("position",new be(a,3)),l.setAttribute("color",new be(o,3)),super(l,new Gt({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},g.PolyhedronBufferGeometry=class extends Pi{constructor(r,e,t,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(r,e,t,i)}},g.PolyhedronGeometry=Pi,g.PositionalAudio=class extends au{constructor(r){super(r),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(r){return this.panner.refDistance=r,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(r){return this.panner.rolloffFactor=r,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(r){return this.panner.distanceModel=r,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(r){return this.panner.maxDistance=r,this}setDirectionalCone(r,e,t){return this.panner.coneInnerAngle=r,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=t,this}updateMatrixWorld(r){if(super.updateMatrixWorld(r),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(vn,ou,Km),xn.set(0,0,1).applyQuaternion(ou);let e=this.panner;if(e.positionX){let t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(vn.x,t),e.positionY.linearRampToValueAtTime(vn.y,t),e.positionZ.linearRampToValueAtTime(vn.z,t),e.orientationX.linearRampToValueAtTime(xn.x,t),e.orientationY.linearRampToValueAtTime(xn.y,t),e.orientationZ.linearRampToValueAtTime(xn.z,t)}else e.setPosition(vn.x,vn.y,vn.z),e.setOrientation(xn.x,xn.y,xn.z)}},g.PropertyBinding=We,g.PropertyMixer=lu,g.QuadraticBezierCurve=No,g.QuadraticBezierCurve3=zo,g.Quaternion=Xt,g.QuaternionKeyframeTrack=er,g.QuaternionLinearInterpolant=Bc,g.RED_GREEN_RGTC2_Format=36285,g.RED_RGTC1_Format=36283,g.REVISION=M,g.RGBADepthPacking=3201,g.RGBAFormat=1023,g.RGBAIntegerFormat=1033,g.RGBA_ASTC_10x10_Format=37819,g.RGBA_ASTC_10x5_Format=37816,g.RGBA_ASTC_10x6_Format=37817,g.RGBA_ASTC_10x8_Format=37818,g.RGBA_ASTC_12x10_Format=37820,g.RGBA_ASTC_12x12_Format=37821,g.RGBA_ASTC_4x4_Format=37808,g.RGBA_ASTC_5x4_Format=37809,g.RGBA_ASTC_5x5_Format=37810,g.RGBA_ASTC_6x5_Format=37811,g.RGBA_ASTC_6x6_Format=37812,g.RGBA_ASTC_8x5_Format=37813,g.RGBA_ASTC_8x6_Format=37814,g.RGBA_ASTC_8x8_Format=37815,g.RGBA_BPTC_Format=36492,g.RGBA_ETC2_EAC_Format=37496,g.RGBA_PVRTC_2BPPV1_Format=35843,g.RGBA_PVRTC_4BPPV1_Format=35842,g.RGBA_S3TC_DXT1_Format=33777,g.RGBA_S3TC_DXT3_Format=33778,g.RGBA_S3TC_DXT5_Format=33779,g.RGB_ETC1_Format=36196,g.RGB_ETC2_Format=37492,g.RGB_PVRTC_2BPPV1_Format=35841,g.RGB_PVRTC_4BPPV1_Format=35840,g.RGB_S3TC_DXT1_Format=33776,g.RGFormat=1030,g.RGIntegerFormat=1031,g.RawShaderMaterial=Cc,g.Ray=dr,g.Raycaster=class{constructor(r,e,t=0,i=1/0){this.ray=new dr(r,e),this.near=t,this.far=i,this.camera=null,this.layers=new ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(r,e){this.ray.set(r,e)}setFromCamera(r,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(r.x,r.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(r.x,r.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(r,e=!0,t=[]){return nl(r,this,t,e),t.sort(hu),t}intersectObjects(r,e=!0,t=[]){for(let i=0,n=r.length;i<n;i++)nl(r[i],this,t,e);return t.sort(hu),t}},g.RectAreaLight=Zc,g.RedFormat=1028,g.RedIntegerFormat=1029,g.ReinhardToneMapping=2,g.RepeatWrapping=1e3,g.ReplaceStencilOp=7681,g.ReverseSubtractEquation=102,g.RingBufferGeometry=class extends Ur{constructor(r,e,t,i,n,s){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(r,e,t,i,n,s)}},g.RingGeometry=Ur,g.SIGNED_RED_GREEN_RGTC2_Format=36286,g.SIGNED_RED_RGTC1_Format=36284,g.SRGBColorSpace=k,g.Scene=kh,g.ShaderChunk=Fe,g.ShaderLib=di,g.ShaderMaterial=yi,g.ShadowMaterial=Ec,g.Shape=ln,g.ShapeBufferGeometry=class extends Br{constructor(r,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(r,e)}},g.ShapeGeometry=Br,g.ShapePath=class{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(r,e){return this.currentPath=new Cr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(r,e),this}lineTo(r,e){return this.currentPath.lineTo(r,e),this}quadraticCurveTo(r,e,t,i){return this.currentPath.quadraticCurveTo(r,e,t,i),this}bezierCurveTo(r,e,t,i,n,s){return this.currentPath.bezierCurveTo(r,e,t,i,n,s),this}splineThru(r){return this.currentPath.splineThru(r),this}toShapes(r){function e(m,x){let y=x.length,v=!1;for(let _=y-1,w=0;w<y;_=w++){let S=x[_],C=x[w],D=C.x-S.x,N=C.y-S.y;if(Math.abs(N)>Number.EPSILON){if(N<0&&(S=x[w],D=-D,C=x[_],N=-N),m.y<S.y||m.y>C.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{let U=N*(m.x-S.x)-D*(m.y-S.y);if(U===0)return!0;if(U<0)continue;v=!v}}else{if(m.y!==S.y)continue;if(C.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=C.x)return!0}}return v}let t=bi.isClockWise,i=this.subPaths;if(i.length===0)return[];let n,s,a,o=[];if(i.length===1)return s=i[0],a=new ln,a.curves=s.curves,o.push(a),o;let l=!t(i[0].getPoints());l=r?!l:l;let h=[],c=[],d,u,p=[],f=0;c[f]=void 0,p[f]=[];for(let m=0,x=i.length;m<x;m++)s=i[m],d=s.getPoints(),n=t(d),n=r?!n:n,n?(!l&&c[f]&&f++,c[f]={s:new ln,p:d},c[f].s.curves=s.curves,l&&f++,p[f]=[]):p[f].push({h:s,p:d[0]});if(!c[0])return function(m){let x=[];for(let y=0,v=m.length;y<v;y++){let _=m[y],w=new ln;w.curves=_.curves,x.push(w)}return x}(i);if(c.length>1){let m=!1,x=0;for(let y=0,v=c.length;y<v;y++)h[y]=[];for(let y=0,v=c.length;y<v;y++){let _=p[y];for(let w=0;w<_.length;w++){let S=_[w],C=!0;for(let D=0;D<c.length;D++)e(S.p,c[D].p)&&(y!==D&&x++,C?(C=!1,h[D].push(S)):m=!0);C&&h[y].push(S)}}x>0&&m===!1&&(p=h)}for(let m=0,x=c.length;m<x;m++){a=c[m].s,o.push(a),u=p[m];for(let y=0,v=u.length;y<v;y++)a.holes.push(u[y].h)}return o}},g.ShapeUtils=bi,g.ShortType=1011,g.Skeleton=Hs,g.SkeletonHelper=class extends _i{constructor(r){let e=pu(r),t=new Ue,i=[],n=[],s=new ye(0,0,1),a=new ye(0,1,0);for(let o=0;o<e.length;o++){let l=e[o];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),n.push(s.r,s.g,s.b),n.push(a.r,a.g,a.b))}t.setAttribute("position",new be(i,3)),t.setAttribute("color",new be(n,3)),super(t,new Gt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){let e=this.bones,t=this.geometry,i=t.getAttribute("position");rl.copy(this.root.matrixWorld).invert();for(let n=0,s=0;n<e.length;n++){let a=e[n];a.parent&&a.parent.isBone&&(oa.multiplyMatrices(rl,a.matrixWorld),Xi.setFromMatrixPosition(oa),i.setXYZ(s,Xi.x,Xi.y,Xi.z),oa.multiplyMatrices(rl,a.parent.matrixWorld),Xi.setFromMatrixPosition(oa),i.setXYZ(s+1,Xi.x,Xi.y,Xi.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose()}},g.SkinnedMesh=$h,g.Source=Ki,g.Sphere=rn,g.SphereBufferGeometry=class extends Qn{constructor(r,e,t,i,n,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(r,e,t,i,n,s,a)}},g.SphereGeometry=Qn,g.Spherical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.phi=e,this.theta=t,this}set(r,e,t){return this.radius=r,this.phi=e,this.theta=t,this}copy(r){return this.radius=r.radius,this.phi=r.phi,this.theta=r.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(r,t),this.phi=Math.acos(lt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},g.SphericalHarmonics3=Jc,g.SplineCurve=Fo,g.SpotLight=Wc,g.SpotLightHelper=class extends Ye{constructor(r,e){super(),this.light=r,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let t=new Ue,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){let l=s/o*Math.PI*2,h=a/o*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}t.setAttribute("position",new be(i,3));let n=new Gt({fog:!1,toneMapped:!1});this.cone=new _i(t,n),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);let r=this.light.distance?this.light.distance:1e3,e=r*Math.tan(this.light.angle);this.cone.scale.set(e,e,r),du.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(du),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},g.Sprite=Wh,g.SpriteMaterial=wo,g.SrcAlphaFactor=204,g.SrcAlphaSaturateFactor=210,g.SrcColorFactor=202,g.StaticCopyUsage=35046,g.StaticDrawUsage=35044,g.StaticReadUsage=35045,g.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Et,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Et,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(r){let e=this._cache;if(e.focus!==r.focus||e.fov!==r.fov||e.aspect!==r.aspect*this.aspect||e.near!==r.near||e.far!==r.far||e.zoom!==r.zoom||e.eyeSep!==this.eyeSep){e.focus=r.focus,e.fov=r.fov,e.aspect=r.aspect*this.aspect,e.near=r.near,e.far=r.far,e.zoom=r.zoom,e.eyeSep=this.eyeSep,mn.copy(r.projectionMatrix);let t=e.eyeSep/2,i=t*e.near/e.focus,n=e.near*Math.tan(Tt*e.fov*.5)/e.zoom,s,a;iu.elements[12]=-t,tu.elements[12]=t,s=-n*e.aspect+i,a=n*e.aspect+i,mn.elements[0]=2*e.near/(a-s),mn.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(mn),s=-n*e.aspect-i,a=n*e.aspect-i,mn.elements[0]=2*e.near/(a-s),mn.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(mn)}this.cameraL.matrixWorld.copy(r.matrixWorld).multiply(iu),this.cameraR.matrixWorld.copy(r.matrixWorld).multiply(tu)}},g.StreamCopyUsage=35042,g.StreamDrawUsage=35040,g.StreamReadUsage=35041,g.StringKeyframeTrack=dn,g.SubtractEquation=101,g.SubtractiveBlending=3,g.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g.TangentSpaceNormalMap=0,g.TetrahedronBufferGeometry=class extends kr{constructor(r,e){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(r,e)}},g.TetrahedronGeometry=kr,g.Texture=ht,g.TextureLoader=class extends $t{constructor(r){super(r)}load(r,e,t,i){let n=new ht,s=new Yr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(r,function(a){n.image=a,n.needsUpdate=!0,e!==void 0&&e(n)},t,i),n}},g.TorusBufferGeometry=class extends Gr{constructor(r,e,t,i,n){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(r,e,t,i,n)}},g.TorusGeometry=Gr,g.TorusKnotBufferGeometry=class extends Vr{constructor(r,e,t,i,n,s){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(r,e,t,i,n,s)}},g.TorusKnotGeometry=Vr,g.Triangle=ii,g.TriangleFanDrawMode=2,g.TriangleStripDrawMode=1,g.TrianglesDrawMode=0,g.TubeBufferGeometry=class extends Hr{constructor(r,e,t,i,n){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(r,e,t,i,n)}},g.TubeGeometry=Hr,g.TwoPassDoubleSide=2,g.UVMapping=300,g.Uint16BufferAttribute=ao,g.Uint32BufferAttribute=oo,g.Uint8BufferAttribute=class extends et{constructor(r,e,t){super(new Uint8Array(r),e,t)}},g.Uint8ClampedBufferAttribute=class extends et{constructor(r,e,t){super(new Uint8ClampedArray(r),e,t)}},g.Uniform=il,g.UniformsGroup=class extends jt{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.usage=35044,this.uniforms=[]}add(r){return this.uniforms.push(r),this}remove(r){let e=this.uniforms.indexOf(r);return e!==-1&&this.uniforms.splice(e,1),this}setName(r){return this.name=r,this}setUsage(r){return this.usage=r,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(r){this.name=r.name,this.usage=r.usage;let e=r.uniforms;this.uniforms.length=0;for(let t=0,i=e.length;t<i;t++)this.uniforms.push(e[t].clone());return this}clone(){return new this.constructor().copy(this)}},g.UniformsLib=ce,g.UniformsUtils=ah,g.UnsignedByteType=1009,g.UnsignedInt248Type=1020,g.UnsignedIntType=1014,g.UnsignedShort4444Type=1017,g.UnsignedShort5551Type=1018,g.UnsignedShortType=1012,g.VSMShadowMap=3,g.Vector2=te,g.Vector3=E,g.Vector4=Je,g.VectorKeyframeTrack=Xr,g.VideoTexture=class extends ht{constructor(r,e,t,i,n,s,a,o,l){super(r,e,t,i,n,s,a,o,l),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:1006,this.magFilter=n!==void 0?n:1006,this.generateMipmaps=!1;let h=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(function c(){h.needsUpdate=!0,r.requestVideoFrameCallback(c)})}clone(){return new this.constructor(this.image).copy(this)}update(){let r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},g.WebGL1Renderer=Bh,g.WebGL3DRenderTarget=class extends hi{constructor(r=1,e=1,t=1){super(r,e),this.isWebGL3DRenderTarget=!0,this.depth=t,this.texture=new Ya(null,r,e,t),this.texture.isRenderTargetTexture=!0}},g.WebGLArrayRenderTarget=class extends hi{constructor(r=1,e=1,t=1){super(r,e),this.isWebGLArrayRenderTarget=!0,this.depth=t,this.texture=new ps(null,r,e,t),this.texture.isRenderTargetTexture=!0}},g.WebGLCubeRenderTarget=lh,g.WebGLMultipleRenderTargets=class extends hi{constructor(r=1,e=1,t=1,i={}){super(r,e,i),this.isWebGLMultipleRenderTargets=!0;let n=this.texture;this.texture=[];for(let s=0;s<t;s++)this.texture[s]=n.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(r,e,t=1){if(this.width!==r||this.height!==e||this.depth!==t){this.width=r,this.height=e,this.depth=t;for(let i=0,n=this.texture.length;i<n;i++)this.texture[i].image.width=r,this.texture[i].image.height=e,this.texture[i].image.depth=t;this.dispose()}return this.viewport.set(0,0,r,e),this.scissor.set(0,0,r,e),this}copy(r){this.dispose(),this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,r.depthTexture!==null&&(this.depthTexture=r.depthTexture.clone()),this.texture.length=0;for(let e=0,t=r.texture.length;e<t;e++)this.texture[e]=r.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},g.WebGLRenderTarget=hi,g.WebGLRenderer=Uh,g.WebGLUtils=Nh,g.WireframeGeometry=Sc,g.WrapAroundEnding=2402,g.ZeroCurvatureEnding=2400,g.ZeroFactor=200,g.ZeroSlopeEnding=2401,g.ZeroStencilOp=0,g._SRGBAFormat=1035,g.sRGBEncoding=3001})});var $r,Nu,zu=Ie(()=>{$r=function(){var g=0,M=document.createElement("div");M.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",M.addEventListener("click",function(xe){xe.preventDefault(),b(++g%M.children.length)},!1);function I(xe){return M.appendChild(xe.dom),xe}function b(xe){for(var Ge=0;Ge<M.children.length;Ge++)M.children[Ge].style.display=Ge===xe?"block":"none";g=xe}var W=(performance||Date).now(),ne=W,he=0,_e=I(new $r.Panel("FPS","#0ff","#002")),Ee=I(new $r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var qe=I(new $r.Panel("MB","#f08","#201"));return b(0),{REVISION:16,dom:M,addPanel:I,showPanel:b,begin:function(){W=(performance||Date).now()},end:function(){he++;var xe=(performance||Date).now();if(Ee.update(xe-W,200),xe>=ne+1e3&&(_e.update(he*1e3/(xe-ne),100),ne=xe,he=0,qe)){var Ge=performance.memory;qe.update(Ge.usedJSHeapSize/1048576,Ge.jsHeapSizeLimit/1048576)}return xe},update:function(){W=this.end()},domElement:M,setMode:b}};$r.Panel=function(g,M,I){var b=1/0,W=0,ne=Math.round,he=ne(window.devicePixelRatio||1),_e=80*he,Ee=48*he,qe=3*he,xe=2*he,Ge=3*he,Pe=15*he,st=74*he,vt=30*he,xt=document.createElement("canvas");xt.width=_e,xt.height=Ee,xt.style.cssText="width:80px;height:48px";var He=xt.getContext("2d");return He.font="bold "+9*he+"px Helvetica,Arial,sans-serif",He.textBaseline="top",He.fillStyle=I,He.fillRect(0,0,_e,Ee),He.fillStyle=M,He.fillText(g,qe,xe),He.fillRect(Ge,Pe,st,vt),He.fillStyle=I,He.globalAlpha=.9,He.fillRect(Ge,Pe,st,vt),{dom:xt,update:function(zt,qt){b=Math.min(b,zt),W=Math.max(W,zt),He.fillStyle=I,He.globalAlpha=1,He.fillRect(0,0,_e,Pe),He.fillStyle=M,He.fillText(ne(zt)+" "+g+" ("+ne(b)+"-"+ne(W)+")",qe,xe),He.drawImage(xt,Ge+he,Pe,st-he,vt,Ge,Pe,st-he,vt),He.fillRect(Ge+st-he,Pe,he,vt),He.fillStyle=I,He.globalAlpha=.9,He.fillRect(Ge+st-he,Pe,he,ne((1-zt/qt)*vt))}}};Nu=$r});function dl(g){let M,I;return(M=g.match(/(#|0x)?([a-f0-9]{6})/i))?I=M[2]:(M=g.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(M[1]).toString(16).padStart(2,0)+parseInt(M[2]).toString(16).padStart(2,0)+parseInt(M[3]).toString(16).padStart(2,0):(M=g.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=M[1]+M[1]+M[2]+M[2]+M[3]+M[3]),!!I&&"#"+I}var si,ul,Rf,Qr,Pf,Df,If,pl,Kr,ml,fl,gl,Fu,tr,Uu=Ie(()=>{si=class{constructor(M,I,b,W,ne="div"){this.parent=M,this.object=I,this.property=b,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(W),this.$name=document.createElement("div"),this.$name.classList.add("name"),si.nextNameID=si.nextNameID||0,this.$name.id="lil-gui-name-"+ ++si.nextNameID,this.$widget=document.createElement(ne),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(b)}name(M){return this._name=M,this.$name.innerHTML=M,this}onChange(M){return this._onChange=M,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(M){return this._onFinishChange=M,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(M=!0){return this.disable(!M)}disable(M=!0){return M===this._disabled||(this._disabled=M,this.domElement.classList.toggle("disabled",M),this.$disable.toggleAttribute("disabled",M)),this}show(M=!0){return this._hidden=!M,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(M){let I=this.parent.add(this.object,this.property,M);return I.name(this._name),this.destroy(),I}min(M){return this}max(M){return this}step(M){return this}decimals(M){return this}listen(M=!0){return this._listening=M,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let M=this.save();M!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=M}getValue(){return this.object[this.property]}setValue(M){return this.object[this.property]=M,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(M){return this.setValue(M),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ul=class extends si{constructor(M,I,b){super(M,I,b,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};Rf={isPrimitive:!0,match:g=>typeof g=="string",fromHexString:dl,toHexString:dl},Qr={isPrimitive:!0,match:g=>typeof g=="number",fromHexString:g=>parseInt(g.substring(1),16),toHexString:g=>"#"+g.toString(16).padStart(6,0)},Pf={isPrimitive:!1,match:Array.isArray,fromHexString(g,M,I=1){let b=Qr.fromHexString(g);M[0]=(b>>16&255)/255*I,M[1]=(b>>8&255)/255*I,M[2]=(255&b)/255*I},toHexString:([g,M,I],b=1)=>Qr.toHexString(g*(b=255/b)<<16^M*b<<8^I*b<<0)},Df={isPrimitive:!1,match:g=>Object(g)===g,fromHexString(g,M,I=1){let b=Qr.fromHexString(g);M.r=(b>>16&255)/255*I,M.g=(b>>8&255)/255*I,M.b=(255&b)/255*I},toHexString:({r:g,g:M,b:I},b=1)=>Qr.toHexString(g*(b=255/b)<<16^M*b<<8^I*b<<0)},If=[Rf,Qr,Pf,Df],pl=class extends si{constructor(M,I,b,W){var ne;super(M,I,b,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(ne=this.initialValue,If.find(he=>he.match(ne))),this._rgbScale=W,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let he=dl(this.$text.value);he&&this._setValueFromHexString(he)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(M){if(this._format.isPrimitive){let I=this._format.fromHexString(M);this.setValue(I)}else this._format.fromHexString(M,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(M){return this._setValueFromHexString(M),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Kr=class extends si{constructor(M,I,b){super(M,I,b,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",W=>{W.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}},ml=class extends si{constructor(M,I,b,W,ne,he){super(M,I,b,"number"),this._initInput(),this.min(W),this.max(ne);let _e=he!==void 0;this.step(_e?he:this._getImplicitStep(),_e),this.updateDisplay()}decimals(M){return this._decimals=M,this.updateDisplay(),this}min(M){return this._min=M,this._onUpdateMinMax(),this}max(M){return this._max=M,this._onUpdateMinMax(),this}step(M,I=!0){return this._step=M,this._stepExplicit=I,this}updateDisplay(){let M=this.getValue();if(this._hasSlider){let I=(M-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?M:M.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let M=xe=>{let Ge=parseFloat(this.$input.value);isNaN(Ge)||(this._snapClampSetValue(Ge+xe),this.$input.value=this.getValue())},I,b,W,ne,he,_e=!1,Ee=xe=>{if(_e){let Ge=xe.clientX-I,Pe=xe.clientY-b;Math.abs(Pe)>5?(xe.preventDefault(),this.$input.blur(),_e=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(Ge)>5&&qe()}if(!_e){let Ge=xe.clientY-W;he-=Ge*this._step*this._arrowKeyMultiplier(xe),ne+he>this._max?he=this._max-ne:ne+he<this._min&&(he=this._min-ne),this._snapClampSetValue(ne+he)}W=xe.clientY},qe=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",qe)};this.$input.addEventListener("input",()=>{let xe=parseFloat(this.$input.value);isNaN(xe)||(this._stepExplicit&&(xe=this._snap(xe)),this.setValue(this._clamp(xe)))}),this.$input.addEventListener("keydown",xe=>{xe.code==="Enter"&&this.$input.blur(),xe.code==="ArrowUp"&&(xe.preventDefault(),M(this._step*this._arrowKeyMultiplier(xe))),xe.code==="ArrowDown"&&(xe.preventDefault(),M(this._step*this._arrowKeyMultiplier(xe)*-1))}),this.$input.addEventListener("wheel",xe=>{this._inputFocused&&(xe.preventDefault(),M(this._step*this._normalizeMouseWheel(xe)))},{passive:!1}),this.$input.addEventListener("mousedown",xe=>{I=xe.clientX,b=W=xe.clientY,_e=!0,ne=this.getValue(),he=0,window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",qe)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let M=Pe=>{let st=this.$slider.getBoundingClientRect(),vt=(xt=Pe,He=st.left,zt=st.right,qt=this._min,xi=this._max,(xt-He)/(zt-He)*(xi-qt)+qt);var xt,He,zt,qt,xi;this._snapClampSetValue(vt)},I=Pe=>{M(Pe.clientX)},b=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",b)},W,ne,he=!1,_e=Pe=>{Pe.preventDefault(),this._setDraggingStyle(!0),M(Pe.touches[0].clientX),he=!1},Ee=Pe=>{if(he){let st=Pe.touches[0].clientX-W,vt=Pe.touches[0].clientY-ne;Math.abs(st)>Math.abs(vt)?_e(Pe):(window.removeEventListener("touchmove",Ee),window.removeEventListener("touchend",qe))}else Pe.preventDefault(),M(Pe.touches[0].clientX)},qe=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",Ee),window.removeEventListener("touchend",qe)},xe=this._callOnFinishChange.bind(this),Ge;this.$slider.addEventListener("mousedown",Pe=>{this._setDraggingStyle(!0),M(Pe.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",b)}),this.$slider.addEventListener("touchstart",Pe=>{Pe.touches.length>1||(this._hasScrollBar?(W=Pe.touches[0].clientX,ne=Pe.touches[0].clientY,he=!0):_e(Pe),window.addEventListener("touchmove",Ee,{passive:!1}),window.addEventListener("touchend",qe))},{passive:!1}),this.$slider.addEventListener("wheel",Pe=>{if(Math.abs(Pe.deltaX)<Math.abs(Pe.deltaY)&&this._hasScrollBar)return;Pe.preventDefault();let st=this._normalizeMouseWheel(Pe)*this._step;this._snapClampSetValue(this.getValue()+st),this.$input.value=this.getValue(),clearTimeout(Ge),Ge=setTimeout(xe,400)},{passive:!1})}_setDraggingStyle(M,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",M),document.body.classList.toggle("lil-gui-dragging",M),document.body.classList.toggle("lil-gui-"+I,M)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(M){let{deltaX:I,deltaY:b}=M;return Math.floor(M.deltaY)!==M.deltaY&&M.wheelDelta&&(I=0,b=-M.wheelDelta/120,b*=this._stepExplicit?1:10),I+-b}_arrowKeyMultiplier(M){let I=this._stepExplicit?1:10;return M.shiftKey?I*=10:M.altKey&&(I/=10),I}_snap(M){let I=Math.round(M/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(M){return M<this._min&&(M=this._min),M>this._max&&(M=this._max),M}_snapClampSetValue(M){this.setValue(this._clamp(this._snap(M)))}get _hasScrollBar(){let M=this.parent.root.$children;return M.scrollHeight>M.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},fl=class extends si{constructor(M,I,b,W){super(M,I,b,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(W)?W:Object.values(W),this._names=Array.isArray(W)?W:Object.keys(W),this._names.forEach(ne=>{let he=document.createElement("option");he.innerHTML=ne,this.$select.appendChild(he)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let M=this.getValue(),I=this._values.indexOf(M);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?M:this._names[I],this}},gl=class extends si{constructor(M,I,b){super(M,I,b,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",W=>{W.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},Fu=!1,tr=class{constructor({parent:M,autoPlace:I=M===void 0,container:b,width:W,title:ne="Controls",injectStyles:he=!0,touchStyles:_e=!0}={}){if(this.parent=M,this.root=M?M.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",Ee=>{Ee.code!=="Enter"&&Ee.code!=="Space"||(Ee.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(ne),_e&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Fu&&he&&(function(Ee){let qe=document.createElement("style");qe.innerHTML=Ee;let xe=document.querySelector("head link[rel=stylesheet], head style");xe?document.head.insertBefore(qe,xe):document.head.appendChild(qe)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Fu=!0),b?b.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),W&&this.domElement.style.setProperty("--width",W+"px"),this.domElement.addEventListener("keydown",Ee=>Ee.stopPropagation()),this.domElement.addEventListener("keyup",Ee=>Ee.stopPropagation())}add(M,I,b,W,ne){if(Object(b)===b)return new fl(this,M,I,b);let he=M[I];switch(typeof he){case"number":return new ml(this,M,I,b,W,ne);case"boolean":return new ul(this,M,I);case"string":return new gl(this,M,I);case"function":return new Kr(this,M,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,M,`
	value:`,he)}addColor(M,I,b=1){return new pl(this,M,I,b)}addFolder(M){return new tr({parent:this,title:M})}load(M,I=!0){return M.controllers&&this.controllers.forEach(b=>{b instanceof Kr||b._name in M.controllers&&b.load(M.controllers[b._name])}),I&&M.folders&&this.folders.forEach(b=>{b._title in M.folders&&b.load(M.folders[b._title])}),this}save(M=!0){let I={controllers:{},folders:{}};return this.controllers.forEach(b=>{if(!(b instanceof Kr)){if(b._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${b._name}"`);I.controllers[b._name]=b.save()}}),M&&this.folders.forEach(b=>{if(b._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${b._title}"`);I.folders[b._title]=b.save()}),I}open(M=!0){return this._closed=!M,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(M=!0){return this._hidden=!M,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(M=!0){return this._closed=!M,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");let b=ne=>{ne.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",b))};this.$children.addEventListener("transitionend",b);let W=M?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!M),requestAnimationFrame(()=>{this.$children.style.height=W+"px"})}),this}title(M){return this._title=M,this.$title.innerHTML=M,this}reset(M=!0){return(M?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(M){return this._onChange=M,this}_callOnChange(M){this.parent&&this.parent._callOnChange(M),this._onChange!==void 0&&this._onChange.call(this,{object:M.object,property:M.property,value:M.getValue(),controller:M})}onFinishChange(M){return this._onFinishChange=M,this}_callOnFinishChange(M){this.parent&&this.parent._callOnFinishChange(M),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:M.object,property:M.property,value:M.getValue(),controller:M})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(M=>M.destroy())}controllersRecursive(){let M=Array.from(this.controllers);return this.folders.forEach(I=>{M=M.concat(I.controllersRecursive())}),M}foldersRecursive(){let M=Array.from(this.folders);return this.folders.forEach(I=>{M=M.concat(I.foldersRecursive())}),M}}});var Ne,Bu,vl,ku,xa,Gu=Ie(()=>{Ne=Lt(wt(),1),Bu={type:"change"},vl={type:"start"},ku={type:"end"},xa=class extends Ne.EventDispatcher{constructor(M,I){super(),this.object=M,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Ne.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ne.MOUSE.ROTATE,MIDDLE:Ne.MOUSE.DOLLY,RIGHT:Ne.MOUSE.PAN},this.touches={ONE:Ne.TOUCH.ROTATE,TWO:Ne.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return _e.phi},this.getAzimuthalAngle=function(){return _e.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Fa),this._domElementKeyEvents=k},this.saveState=function(){b.target0.copy(b.target),b.position0.copy(b.object.position),b.zoom0=b.object.zoom},this.reset=function(){b.target.copy(b.target0),b.object.position.copy(b.position0),b.object.zoom=b.zoom0,b.object.updateProjectionMatrix(),b.dispatchEvent(Bu),b.update(),ne=W.NONE},this.update=function(){let k=new Ne.Vector3,we=new Ne.Quaternion().setFromUnitVectors(M.up,new Ne.Vector3(0,1,0)),dt=we.clone().invert(),yt=new Ne.Vector3,Ft=new Ne.Quaternion,Ji=2*Math.PI;return function(){let pt=b.object.position;k.copy(pt).sub(b.target),k.applyQuaternion(we),_e.setFromVector3(k),b.autoRotate&&ne===W.NONE&&Tn(Rl()),b.enableDamping?(_e.theta+=Ee.theta*b.dampingFactor,_e.phi+=Ee.phi*b.dampingFactor):(_e.theta+=Ee.theta,_e.phi+=Ee.phi);let ti=b.minAzimuthAngle,Tt=b.maxAzimuthAngle;return isFinite(ti)&&isFinite(Tt)&&(ti<-Math.PI?ti+=Ji:ti>Math.PI&&(ti-=Ji),Tt<-Math.PI?Tt+=Ji:Tt>Math.PI&&(Tt-=Ji),ti<=Tt?_e.theta=Math.max(ti,Math.min(Tt,_e.theta)):_e.theta=_e.theta>(ti+Tt)/2?Math.max(ti,_e.theta):Math.min(Tt,_e.theta)),_e.phi=Math.max(b.minPolarAngle,Math.min(b.maxPolarAngle,_e.phi)),_e.makeSafe(),_e.radius*=qe,_e.radius=Math.max(b.minDistance,Math.min(b.maxDistance,_e.radius)),b.enableDamping===!0?b.target.addScaledVector(xe,b.dampingFactor):b.target.add(xe),k.setFromSpherical(_e),k.applyQuaternion(dt),pt.copy(b.target).add(k),b.object.lookAt(b.target),b.enableDamping===!0?(Ee.theta*=1-b.dampingFactor,Ee.phi*=1-b.dampingFactor,xe.multiplyScalar(1-b.dampingFactor)):(Ee.set(0,0,0),xe.set(0,0,0)),qe=1,Ge||yt.distanceToSquared(b.object.position)>he||8*(1-Ft.dot(b.object.quaternion))>he?(b.dispatchEvent(Bu),yt.copy(b.object.position),Ft.copy(b.object.quaternion),Ge=!1,!0):!1}}(),this.dispose=function(){b.domElement.removeEventListener("contextmenu",Ua),b.domElement.removeEventListener("pointerdown",Oa),b.domElement.removeEventListener("pointercancel",Na),b.domElement.removeEventListener("wheel",za),b.domElement.removeEventListener("pointermove",as),b.domElement.removeEventListener("pointerup",os),b._domElementKeyEvents!==null&&b._domElementKeyEvents.removeEventListener("keydown",Fa)};let b=this,W={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ne=W.NONE,he=1e-6,_e=new Ne.Spherical,Ee=new Ne.Spherical,qe=1,xe=new Ne.Vector3,Ge=!1,Pe=new Ne.Vector2,st=new Ne.Vector2,vt=new Ne.Vector2,xt=new Ne.Vector2,He=new Ne.Vector2,zt=new Ne.Vector2,qt=new Ne.Vector2,xi=new Ne.Vector2,Sn=new Ne.Vector2,Ze=[],rr={};function Rl(){return 2*Math.PI/60/60*b.autoRotateSpeed}function sr(){return Math.pow(.95,b.zoomSpeed)}function Tn(k){Ee.theta-=k}function ar(k){Ee.phi-=k}let wa=function(){let k=new Ne.Vector3;return function(dt,yt){k.setFromMatrixColumn(yt,0),k.multiplyScalar(-dt),xe.add(k)}}(),Sa=function(){let k=new Ne.Vector3;return function(dt,yt){b.screenSpacePanning===!0?k.setFromMatrixColumn(yt,1):(k.setFromMatrixColumn(yt,0),k.crossVectors(b.object.up,k)),k.multiplyScalar(dt),xe.add(k)}}(),Zi=function(){let k=new Ne.Vector3;return function(dt,yt){let Ft=b.domElement;if(b.object.isPerspectiveCamera){let Ji=b.object.position;k.copy(Ji).sub(b.target);let jt=k.length();jt*=Math.tan(b.object.fov/2*Math.PI/180),wa(2*dt*jt/Ft.clientHeight,b.object.matrix),Sa(2*yt*jt/Ft.clientHeight,b.object.matrix)}else b.object.isOrthographicCamera?(wa(dt*(b.object.right-b.object.left)/b.object.zoom/Ft.clientWidth,b.object.matrix),Sa(yt*(b.object.top-b.object.bottom)/b.object.zoom/Ft.clientHeight,b.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),b.enablePan=!1)}}();function ss(k){b.object.isPerspectiveCamera?qe/=k:b.object.isOrthographicCamera?(b.object.zoom=Math.max(b.minZoom,Math.min(b.maxZoom,b.object.zoom*k)),b.object.updateProjectionMatrix(),Ge=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),b.enableZoom=!1)}function Ta(k){b.object.isPerspectiveCamera?qe*=k:b.object.isOrthographicCamera?(b.object.zoom=Math.max(b.minZoom,Math.min(b.maxZoom,b.object.zoom/k)),b.object.updateProjectionMatrix(),Ge=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),b.enableZoom=!1)}function Aa(k){Pe.set(k.clientX,k.clientY)}function Pl(k){qt.set(k.clientX,k.clientY)}function Ea(k){xt.set(k.clientX,k.clientY)}function Dl(k){st.set(k.clientX,k.clientY),vt.subVectors(st,Pe).multiplyScalar(b.rotateSpeed);let we=b.domElement;Tn(2*Math.PI*vt.x/we.clientHeight),ar(2*Math.PI*vt.y/we.clientHeight),Pe.copy(st),b.update()}function Il(k){xi.set(k.clientX,k.clientY),Sn.subVectors(xi,qt),Sn.y>0?ss(sr()):Sn.y<0&&Ta(sr()),qt.copy(xi),b.update()}function Ol(k){He.set(k.clientX,k.clientY),zt.subVectors(He,xt).multiplyScalar(b.panSpeed),Zi(zt.x,zt.y),xt.copy(He),b.update()}function Nl(k){k.deltaY<0?Ta(sr()):k.deltaY>0&&ss(sr()),b.update()}function zl(k){let we=!1;switch(k.code){case b.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?ar(2*Math.PI*b.rotateSpeed/b.domElement.clientHeight):Zi(0,b.keyPanSpeed),we=!0;break;case b.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?ar(-2*Math.PI*b.rotateSpeed/b.domElement.clientHeight):Zi(0,-b.keyPanSpeed),we=!0;break;case b.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?Tn(2*Math.PI*b.rotateSpeed/b.domElement.clientHeight):Zi(b.keyPanSpeed,0),we=!0;break;case b.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?Tn(-2*Math.PI*b.rotateSpeed/b.domElement.clientHeight):Zi(-b.keyPanSpeed,0),we=!0;break}we&&(k.preventDefault(),b.update())}function Ca(){if(Ze.length===1)Pe.set(Ze[0].pageX,Ze[0].pageY);else{let k=.5*(Ze[0].pageX+Ze[1].pageX),we=.5*(Ze[0].pageY+Ze[1].pageY);Pe.set(k,we)}}function La(){if(Ze.length===1)xt.set(Ze[0].pageX,Ze[0].pageY);else{let k=.5*(Ze[0].pageX+Ze[1].pageX),we=.5*(Ze[0].pageY+Ze[1].pageY);xt.set(k,we)}}function Ra(){let k=Ze[0].pageX-Ze[1].pageX,we=Ze[0].pageY-Ze[1].pageY,dt=Math.sqrt(k*k+we*we);qt.set(0,dt)}function Fl(){b.enableZoom&&Ra(),b.enablePan&&La()}function Ul(){b.enableZoom&&Ra(),b.enableRotate&&Ca()}function Pa(k){if(Ze.length==1)st.set(k.pageX,k.pageY);else{let dt=ls(k),yt=.5*(k.pageX+dt.x),Ft=.5*(k.pageY+dt.y);st.set(yt,Ft)}vt.subVectors(st,Pe).multiplyScalar(b.rotateSpeed);let we=b.domElement;Tn(2*Math.PI*vt.x/we.clientHeight),ar(2*Math.PI*vt.y/we.clientHeight),Pe.copy(st)}function Da(k){if(Ze.length===1)He.set(k.pageX,k.pageY);else{let we=ls(k),dt=.5*(k.pageX+we.x),yt=.5*(k.pageY+we.y);He.set(dt,yt)}zt.subVectors(He,xt).multiplyScalar(b.panSpeed),Zi(zt.x,zt.y),xt.copy(He)}function Ia(k){let we=ls(k),dt=k.pageX-we.x,yt=k.pageY-we.y,Ft=Math.sqrt(dt*dt+yt*yt);xi.set(0,Ft),Sn.set(0,Math.pow(xi.y/qt.y,b.zoomSpeed)),ss(Sn.y),qt.copy(xi)}function Bl(k){b.enableZoom&&Ia(k),b.enablePan&&Da(k)}function kl(k){b.enableZoom&&Ia(k),b.enableRotate&&Pa(k)}function Oa(k){b.enabled!==!1&&(Ze.length===0&&(b.domElement.setPointerCapture(k.pointerId),b.domElement.addEventListener("pointermove",as),b.domElement.addEventListener("pointerup",os)),jl(k),k.pointerType==="touch"?Hl(k):Gl(k))}function as(k){b.enabled!==!1&&(k.pointerType==="touch"?Wl(k):Vl(k))}function os(k){Ba(k),Ze.length===0&&(b.domElement.releasePointerCapture(k.pointerId),b.domElement.removeEventListener("pointermove",as),b.domElement.removeEventListener("pointerup",os)),b.dispatchEvent(ku),ne=W.NONE}function Na(k){Ba(k)}function Gl(k){let we;switch(k.button){case 0:we=b.mouseButtons.LEFT;break;case 1:we=b.mouseButtons.MIDDLE;break;case 2:we=b.mouseButtons.RIGHT;break;default:we=-1}switch(we){case Ne.MOUSE.DOLLY:if(b.enableZoom===!1)return;Pl(k),ne=W.DOLLY;break;case Ne.MOUSE.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(b.enablePan===!1)return;Ea(k),ne=W.PAN}else{if(b.enableRotate===!1)return;Aa(k),ne=W.ROTATE}break;case Ne.MOUSE.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(b.enableRotate===!1)return;Aa(k),ne=W.ROTATE}else{if(b.enablePan===!1)return;Ea(k),ne=W.PAN}break;default:ne=W.NONE}ne!==W.NONE&&b.dispatchEvent(vl)}function Vl(k){switch(ne){case W.ROTATE:if(b.enableRotate===!1)return;Dl(k);break;case W.DOLLY:if(b.enableZoom===!1)return;Il(k);break;case W.PAN:if(b.enablePan===!1)return;Ol(k);break}}function za(k){b.enabled===!1||b.enableZoom===!1||ne!==W.NONE||(k.preventDefault(),b.dispatchEvent(vl),Nl(k),b.dispatchEvent(ku))}function Fa(k){b.enabled===!1||b.enablePan===!1||zl(k)}function Hl(k){switch(ka(k),Ze.length){case 1:switch(b.touches.ONE){case Ne.TOUCH.ROTATE:if(b.enableRotate===!1)return;Ca(),ne=W.TOUCH_ROTATE;break;case Ne.TOUCH.PAN:if(b.enablePan===!1)return;La(),ne=W.TOUCH_PAN;break;default:ne=W.NONE}break;case 2:switch(b.touches.TWO){case Ne.TOUCH.DOLLY_PAN:if(b.enableZoom===!1&&b.enablePan===!1)return;Fl(),ne=W.TOUCH_DOLLY_PAN;break;case Ne.TOUCH.DOLLY_ROTATE:if(b.enableZoom===!1&&b.enableRotate===!1)return;Ul(),ne=W.TOUCH_DOLLY_ROTATE;break;default:ne=W.NONE}break;default:ne=W.NONE}ne!==W.NONE&&b.dispatchEvent(vl)}function Wl(k){switch(ka(k),ne){case W.TOUCH_ROTATE:if(b.enableRotate===!1)return;Pa(k),b.update();break;case W.TOUCH_PAN:if(b.enablePan===!1)return;Da(k),b.update();break;case W.TOUCH_DOLLY_PAN:if(b.enableZoom===!1&&b.enablePan===!1)return;Bl(k),b.update();break;case W.TOUCH_DOLLY_ROTATE:if(b.enableZoom===!1&&b.enableRotate===!1)return;kl(k),b.update();break;default:ne=W.NONE}}function Ua(k){b.enabled!==!1&&k.preventDefault()}function jl(k){Ze.push(k)}function Ba(k){delete rr[k.pointerId];for(let we=0;we<Ze.length;we++)if(Ze[we].pointerId==k.pointerId){Ze.splice(we,1);return}}function ka(k){let we=rr[k.pointerId];we===void 0&&(we=new Ne.Vector2,rr[k.pointerId]=we),we.set(k.pageX,k.pageY)}function ls(k){let we=k.pointerId===Ze[0].pointerId?Ze[1]:Ze[0];return rr[we.pointerId]}b.domElement.addEventListener("contextmenu",Ua),b.domElement.addEventListener("pointerdown",Oa),b.domElement.addEventListener("pointercancel",Na),b.domElement.addEventListener("wheel",za,{passive:!1}),this.update()}}});var Hu,Vu=Ie(()=>{Hu=`#version 300 es

precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

out vec2 vUv;

void main () {
	vec3 pos = position;
	vUv = uv;
	vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
	gl_Position = projectionMatrix * mvPos;
}`});var ju,Wu=Ie(()=>{ju=`#version 300 es

precision highp float;

in vec2 vUv;
uniform sampler2D tBackground;
uniform sampler2D tScene;
uniform sampler2D tGlow;
uniform float exposure;
uniform float gamma;

uniform bool renderBackground;
uniform bool renderGlow;
uniform bool renderScene;

layout (location = 0) out vec4 pcColor;

void main () {
    vec4 bg = renderBackground ? texture(tBackground, vUv) : vec4(0.);
    vec4 scene;
    if(renderScene) {
        scene = texture(tScene, vUv);
    }
    vec4 glow = vec4(0.0);
    if(renderGlow) {
        glow = texture(tGlow, vUv);
        // glow.rgb -= vec3(.2);
    }
    
    float glowA = glow.a;

    float bA = smoothstep(.9, 1., scene.a);

    scene = mix(bg, scene, bA);

    scene.rgb += glow.rgb;

    // scene = mix(bg, scene, scene.a + glowA);
    
    // tone mapping
    vec3 result = scene.rgb * pow(2.0, exposure);
    // also gamma correct while we're at it       
    result = pow(result, vec3(1.0 / gamma));

    pcColor = vec4(result, scene.a + glowA);
    // gl_FragColor = vec4(scene.rgb, scene.a + glow.a);
    // gl_FragColor = glow;
    // gl_FragColor = scene;
}`});var Xu=Ie(()=>{});var Yu,qu=Ie(()=>{Yu=`#version 100
precision lowp float;

uniform sampler2D tInput;
uniform float opacity;

varying vec2 vUv;

void main() {
	gl_FragColor = texture2D(tInput, vUv) * opacity;
}`});var Ju,Zu=Ie(()=>{Ju=`#version 100

precision lowp float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform float time;

varying vec2 vUv;

void main () {
	vec3 pos = position;
	vUv = uv;
	vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
	gl_Position = projectionMatrix * mvPos;
}`});var It,wn,Uf,ya,xl=Ie(()=>{It=Lt(wt());qu();Zu();wn=new It.Vector2,Uf=new It.RawShaderMaterial({vertexShader:Ju,fragmentShader:Yu,uniforms:{tInput:{value:null},opacity:{value:1}}}),ya=class{constructor(){this.camera=new It.OrthographicCamera(-1,1,1,-1,0,1),this.material=Uf;var M=new It.PlaneGeometry(1,1);this.quad=new It.Mesh(M,this.material),this.scene=new It.Scene,this.scene.add(this.quad)}render(M,I,b=0,W=0,ne=0,he=0,_e=1){(ne==0||he==0)&&(ne=M.width,he=M.height),this.drawTexture(M.texture,I,b,W,ne,he,_e)}renderMRT(M,I,b,W=0,ne=0,he=0,_e=0){(he==0||_e==0)&&(he=M.width,_e=M.height),this.drawTexture(M.texture[b],I,W,ne,he,_e)}drawTexture(M,I,b=0,W=0,ne=0,he=0,_e=1){let Ee=new It.Vector2;I.getSize(Ee),this.camera.left=-Ee.width/2,this.camera.right=Ee.width/2,this.camera.top=Ee.height/2,this.camera.bottom=-Ee.height/2,this.camera.updateProjectionMatrix(),this.quad.scale.set(ne,he,1),this.quad.position.set(-Ee.width/2+ne/2+b,Ee.height/2-he/2-W,0),this.quad.material=this.material,this.material.uniforms.tInput.value=M,this.material.transparent=M.format==It.RGBAFormat,this.material.uniforms.opacity.value=_e,I.render(this.scene,this.camera)}renderToTarget(M,I,b){let W=new It.Vector2(M.width,M.height);this.camera.left=-W.width/2,this.camera.right=W.width/2,this.camera.top=W.height/2,this.camera.bottom=-W.height/2,this.camera.updateProjectionMatrix(),this.quad.scale.set(W.width,W.height,1),this.quad.position.set(0,0,0),this.quad.material=b,I.setRenderTarget(M),I.render(this.scene,this.camera),I.setRenderTarget(null)}renderToViewport(M,I){M.getSize(wn),this.camera.left=-wn.x/2,this.camera.right=wn.x/2,this.camera.top=wn.y/2,this.camera.bottom=-wn.y/2,this.camera.updateProjectionMatrix(),this.quad.scale.set(wn.x,wn.y,1),this.quad.position.set(0,0,0),this.quad.material=I,M.setRenderTarget(null),M.render(this.scene,this.camera)}dispose(){this.quad.geometry.dispose()}}});var Ot,ai,$u=Ie(()=>{Ot=Lt(wt());xl();ai=class{static getRenderTarget(M,I,b={},W=!1){let ne=new Ot.WebGLRenderTarget(M,I,{minFilter:b.minFilter!==void 0?b.minFilter:Ot.LinearFilter,magFilter:b.magFilter!==void 0?b.magFilter:Ot.LinearFilter,wrapS:b.wrapS!==void 0?b.wrapS:Ot.ClampToEdgeWrapping,wrapT:b.wrapT!==void 0?b.wrapT:Ot.ClampToEdgeWrapping,format:b.format?b.format:Ot.RGBAFormat,type:b.type!==void 0?b.type:Ot.UnsignedByteType,stencilBuffer:b.stencilBuffer!==void 0?b.stencilBuffer:!0});return W&&(ne.depthTexture=new Ot.DepthTexture(M,I,Ot.UnsignedShortType)),ne}static drawRT(M,I,b=0,W=0,ne=0,he=0,_e=1){ai.helper.render(M,I,b,W,ne,he,_e)}static drawMRT(M,I,b,W=0,ne=0,he=0,_e=0){ai.helper.renderMRT(M,I,b,W,ne,he,_e)}static drawTexture(M,I,b=0,W=0,ne=0,he=0,_e=1){ai.helper.drawTexture(M,I,b,W,ne,he,_e)}static renderToRT(M,I,b){ai.helper.renderToTarget(M,I,b)}static renderToViewport(M,I){ai.helper.renderToViewport(M,I)}};ai.helper=new ya});var _a,yl=Ie(()=>{_a=class{constructor(){this._paused=!1,this._raf=null,this._rafId=-1,this._startTime=0,this._started=!1}get started(){return this._started}start(M=null){if(this._started)return;this._started=!0;let I=()=>{this.update(),this.render(),requestAnimationFrame(I)};return M==null?this._raf=I:this._raf=M,this.addEventListeners(),this._startTime=performance.now(),this._rafId=requestAnimationFrame(this._raf),this._rafId}addEventListeners(){}pause(){this._started&&(this._paused||(this._paused=!0,cancelAnimationFrame(this._rafId)))}resume(){this._started&&this._paused&&(this._paused=!1,this._rafId=requestAnimationFrame(this._raf))}update(){let M=performance.now()-this._startTime;this.manualUpdate(M)}manualUpdate(M){}render(){}}});var oi,ba,Ku=Ie(()=>{oi=Lt(wt());yl();ba=class extends _a{constructor(M=window.innerWidth,I=window.innerHeight,b={},W=!1){super(),this.vrMode=!1,this.size=new oi.Vector2,this.scene=new oi.Scene,b.ortho?this.camera=new oi.OrthographicCamera(-M/2,M/2,I/2,-I/2,b.near!=null?b.near:.1,b.far!=null?b.far:1e3):this.camera=new oi.PerspectiveCamera(b.fov!=null?b.fov:35,M/I,b.near!=null?b.near:.1,b.far!=null?b.far:1e3),this.scene.add(this.camera),this.renderer=new oi.WebGLRenderer({antialias:b.antialias!=null?b.antialias:!0,alpha:b.alpha!=null?b.alpha:!0}),this.renderer.setSize(M,I),W&&this.start()}start(M=null){if(!this.started)return this.clock=new oi.Clock(!0),this.vrMode?(this._started=!0,this._raf=M||(()=>{this.update(),this.render()}),this.renderer.setAnimationLoop(this._raf),1):super.start(M)}pause(){this._started&&(this._paused||(this._paused=!0,this.vrMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this._rafId)))}resume(){this._started&&this._paused&&(this._paused=!1,this.vrMode?this.renderer.setAnimationLoop(this._raf):this._rafId=requestAnimationFrame(this._raf))}get domElement(){return this.renderer.domElement}resize(M,I){M===this.size.x&&I===this.size.y||(this.size.set(M,I),this.renderer.setSize(this.size.x,this.size.y),this.camera.type=="PerspectiveCamera"?this.camera.aspect=this.size.x/this.size.y:(this.camera.left=-M/2,this.camera.right=M/2,this.camera.top=I/2,this.camera.bottom=-I/2),this.camera.updateProjectionMatrix())}render(){this.renderer.render(this.scene,this.camera)}}});var _l,Qu=Ie(()=>{_l=Lt(wt())});var Bf,q0,Y0,ed=Ie(()=>{Bf=Lt(wt()),q0=180/Math.PI,Y0=Math.PI/180});var qi,J0,td=Ie(()=>{qi=Lt(wt()),J0=new qi.SphereGeometry(100,64,64)});var bl=Ie(()=>{Xu();xl();$u();yl();Ku();Qu();ed();td()});var St,Ml,kf,Ma,id=Ie(()=>{St=Lt(wt());ts();Vu();Wu();bl();Ml=new St.RawShaderMaterial({vertexShader:Hu,fragmentShader:ju,uniforms:{tBackground:{value:null},tScene:{value:null},tGlow:{value:null},exposure:{value:1},gamma:{value:1},renderBackground:{value:!0},renderGlow:{value:!0},renderScene:{value:!0}},transparent:!0}),kf={scale:.3,radius:1,iterations:8,quality:0},Ma=class{constructor(M,I,b,W){this.showBackground=!0,this.showGlow=!0,this.showScene=!0,this.exposure=Ml.uniforms.exposure.value,this.gamma=Ml.uniforms.gamma.value,this.shader=Ml.clone(),this.rnd=M;let ne=I*window.devicePixelRatio,he=b*window.devicePixelRatio;this.sceneRT=new St.WebGLMultipleRenderTargets(ne,he,2,{format:St.RGBAFormat,type:St.UnsignedByteType,samples:W&&W.samples?W.samples:4}),this.sceneRT.texture[0].name="diffuse",this.sceneRT.texture[1].name="glow",W.useDepth&&(this.sceneRT.depthTexture=new St.DepthTexture(ne,he,St.FloatType),this.sceneRT.depthTexture.format=St.DepthFormat);let _e=W&&W.glowSettings?W.glowSettings:kf;if(_e.isGlow=!0,this.glow=new es(this.sceneRT.texture[1],ne,he,_e),W&&W.exposure!==void 0&&(this.exposure=W.exposure),W&&W.gamma&&(this.gamma=W.gamma),W.customFargment!==void 0&&(this.shader.vertexShader=W.customFargment,W.customUniforms!==void 0)){let Ee=W.customUniforms;for(let qe in Ee)this.shader.uniforms[qe]=Ee[qe]}this.bgRT=new St.WebGLRenderTarget(I,b),this.bgScene=new St.Scene}get depthTexture(){return this.sceneRT.depthTexture}setSize(M,I){let b=M*window.devicePixelRatio,W=I*window.devicePixelRatio;this.sceneRT.setSize(b,W),this.bgRT.setSize(b,W),this.glow.setSize(b,W)}updateUniforms(){let M=this.shader.uniforms;M.exposure.value=this.exposure,M.gamma.value=this.gamma,M.renderBackground.value=this.showBackground,M.renderGlow.value=this.showGlow,M.renderScene.value=this.showScene,M.tScene.value=this.sceneRT.texture[0],M.tGlow.value=this.glow.texture}render(M,I,b=null){this.rnd.autoClear=!0;let W=M.background;M.background=null,W?(this.rnd.setRenderTarget(this.bgRT),this.bgScene.background=W,this.rnd.render(this.bgScene,I),this.rnd.setRenderTarget(null),this.shader.uniforms.tBackground.value=this.bgRT.texture):this.shader.uniforms.tBackground.value=null,this.rnd.setRenderTarget(this.sceneRT),this.rnd.render(M,I),M.background=W,this.glow.renderInternal(this.rnd),this.rnd.setRenderTarget(null),this.updateUniforms(),b?ai.renderToRT(b,this.rnd,this.shader):ai.renderToViewport(this.rnd,this.shader),this.rnd.setRenderTarget(null)}}});var zi,Yi=Ie(()=>{zi=class{constructor(){this.enabled=!0}render(M,I,b=null){this.enabled&&(M.setRenderTarget(b),I.quad.material=this.shader,this.shader.uniforms.tInput&&(this.shader.uniforms.tInput.value=I.read.texture),this.shader.uniforms.tDepth&&(this.shader.uniforms.tDepth.value=I.depthTexture),M.render(I.scene,I.camera))}setSize(M,I){}}});var wi,ir=Ie(()=>{wi=`#version 100

precision lowp float;

attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform float time;

varying vec2 vUv;

void main () {
	vec3 pos = position;
	vUv = uv;
	vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
	gl_Position = projectionMatrix * mvPos;
}`});var rd,nd=Ie(()=>{rd=`#version 100
precision highp float;

/*
 * Algorithms By Matt DesLauriers: https://github.com/Jam3/glsl-fast-gaussian-blur
 */

vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
	vec4 color = vec4(0.0);
	vec2 off1 = vec2(1.3333333333333333) * direction;
	color += texture2D(image, uv) * 0.29411764705882354;
	color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
	color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
	return color; 
}

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
	vec4 color = vec4(0.0);
	vec2 off1 = vec2(1.3846153846) * direction;
	vec2 off2 = vec2(3.2307692308) * direction;
	color += texture2D(image, uv) * 0.2270270270;
	color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
	color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
	color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
	color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
	return color;
}

vec4 blur13(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
	vec4 color = vec4(0.0);
	vec2 off1 = vec2(1.411764705882353) * direction;
	vec2 off2 = vec2(3.2941176470588234) * direction;
	vec2 off3 = vec2(5.176470588235294) * direction;
	color += texture2D(image, uv) * 0.1964825501511404;
	color += texture2D(image, uv + (off1 / resolution)) * 0.2969069646728344;
	color += texture2D(image, uv - (off1 / resolution)) * 0.2969069646728344;
	color += texture2D(image, uv + (off2 / resolution)) * 0.09447039785044732;
	color += texture2D(image, uv - (off2 / resolution)) * 0.09447039785044732;
	color += texture2D(image, uv + (off3 / resolution)) * 0.010381362401148057;
	color += texture2D(image, uv - (off3 / resolution)) * 0.010381362401148057;
	return color;
}

uniform vec2 resolution;
uniform vec2 direction;
uniform sampler2D tMap;
uniform float scale;
uniform int mode;
uniform bool isGlow;

varying vec2 vUv;

const float threshold = .1;

vec4 blur() {
	if(mode == 0) return blur5(tMap, vUv, resolution*scale, direction);
	else if(mode == 1) return blur9(tMap, vUv, resolution*scale, direction);
	else return blur13(tMap, vUv, resolution*scale, direction);
}

void main () {
	vec4 b = blur();

	/* if(isGlow) {
		if(length(b.rgb) < threshold) discard;
	} */

	gl_FragColor = b;
}`});var Wt,is,es,wl=Ie(()=>{Wt=Lt(wt());Yi();ir();nd();is={scale:1,radius:1,iterations:4,quality:0},es=class extends zi{constructor(M,I,b,W=is){super(),this.radius=2,this.iterations=4,this.quality=0,this.source=M;let ne=W.scale||is.scale,he=W.radius||is.radius,_e=W.iterations||is.iterations,Ee=W.quality||is.quality;this.read=new Wt.WebGLRenderTarget(I,b),this.write=this.read.clone(),this.radius=he,this.iterations=_e,this.scale=ne,this.quality=Ee,this.shader=new Wt.RawShaderMaterial({vertexShader:wi,fragmentShader:rd,uniforms:{resolution:{value:new Wt.Vector2(I,b)},direction:{value:new Wt.Vector2},scale:{value:ne},tMap:{value:null},mode:{value:Ee},isGlow:{value:W.isGlow===!0}}}),this.scene=new Wt.Scene;let qe=ne*I/2,xe=ne*b/2;this.camera=new Wt.OrthographicCamera(-qe,qe,xe,-xe,0,100),this.camera.position.z=1,this.scene.add(this.camera),this.quad=new Wt.Mesh(new Wt.PlaneGeometry(1,1),this.shader),this.quad.scale.set(I*ne,b*ne,1),this.scene.add(this.quad)}swapBuffers(){let M=this.write;this.write=this.read,this.read=M}setSize(M,I){this.read.setSize(M*this.scale,I*this.scale),this.write.setSize(M*this.scale,I*this.scale);let b=this.scale*M/2,W=this.scale*I/2;this.camera.left=-b,this.camera.right=b,this.camera.top=W,this.camera.bottom=-W,this.camera.updateProjectionMatrix(),this.quad.scale.set(M*this.scale,I*this.scale,1),this.shader.uniforms.resolution.value.set(M,I)}blurPass(M,I,b,W,ne){M.setRenderTarget(b),this.shader.uniforms.mode.value=this.quality,this.shader.uniforms.direction.value.set(W,ne),this.shader.uniforms.tMap.value=I,M.render(this.scene,this.camera)}render(M,I,b=null){this.blurPass(M,this.source!=null?this.source:I.read.texture,this.write,this.radius,0),this.swapBuffers();for(let ne=1;ne<this.iterations-1;ne++)this.blurPass(M,this.read.texture,this.write,ne%2==0?this.radius:0,ne%2==0?0:this.radius),this.swapBuffers();let W=this.iterations-1;this.blurPass(M,this.read.texture,b,W%2==0?this.radius:0,W%2==0?0:this.radius)}renderInternal(M){if(this.source==null)return console.warn("Internal rendering needs a source texture!");this.blurPass(M,this.source,this.write,this.radius,0),this.swapBuffers();for(let I=1;I<this.iterations;I++)this.blurPass(M,this.read.texture,this.write,I%2==0?this.radius:0,I%2==0?0:this.radius),this.swapBuffers()}get texture(){return this.read.texture}get target(){return this.read}}});var ad,sd=Ie(()=>{ad=`precision highp float;

varying vec2 vUv;
uniform sampler2D tInput;

uniform float chromatic_aberration;
uniform bool enableCA;

uniform float dither;
uniform bool enableDithering;

uniform bool enableVignette;
uniform float vIntensity;

#include <dithering>

uniform sampler2D lookupTable;
uniform bool enableLut;
// #define LUT_NO_CLAMP
#define LUT_FLIP_Y

#include <lut>

float vignette(vec2 texCoords, float strength) {
    vec2 uv = texCoords;

    uv *=  1.0 - uv.yx;   //vec2(1.0)- uv.yx; -> 1.-u.yx; Thanks FabriceNeyret !

    float vig = uv.x*uv.y * 15.0; // multiply with sth for intensity

    vig = pow(vig, strength);

    return vig;
}

vec4 ca (sampler2D tex, vec2 texCoord, float ca_amount) {
    vec2 red_offset = vec2(ca_amount, 0.0);
    vec2 green_offset = vec2(0.0, 0.0);
    vec2 blue_offset = vec2(-ca_amount, 0.0);

    vec4 red_color = texture2D(tex, texCoord + red_offset);
    vec4 green_color = texture2D(tex, texCoord + green_offset);
    vec4 blue_color = texture2D(tex, texCoord + blue_offset);

    return vec4(red_color.r, green_color.g, blue_color.b, 1.0);
}

void main () {
    vec4 color;
    if(enableCA) {
         color = ca(tInput, vUv, chromatic_aberration);
    } else {
        color = texture2D(tInput, vUv);
    }
    if(enableLut) {
        color = lut(color, lookupTable);
    }
    if(enableDithering) {
        color += dithering(vUv, dither);
    }

    if(enableVignette) {
        color.rgb *= vignette(vUv, vIntensity);
    }
    gl_FragColor = color;
}`});var ld,od=Ie(()=>{ld=`/*
* Implementation from https://github.com/mattdesl/glsl-lut
*/

vec4 lut(in vec4 textureColor, sampler2D lookupTable) {
    #ifndef LUT_NO_CLAMP
        textureColor = clamp(textureColor, 0.0, 1.0);
    #endif

    mediump float blueColor = textureColor.b * 63.0;

    mediump vec2 quad1;
    quad1.y = floor(floor(blueColor) / 8.0);
    quad1.x = floor(blueColor) - (quad1.y * 8.0);

    mediump vec2 quad2;
    quad2.y = floor(ceil(blueColor) / 8.0);
    quad2.x = ceil(blueColor) - (quad2.y * 8.0);

    highp vec2 texPos1;
    texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
    texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);

    #ifdef LUT_FLIP_Y
        texPos1.y = 1.0-texPos1.y;
    #endif

    highp vec2 texPos2;
    texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.r);
    texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * textureColor.g);

    #ifdef LUT_FLIP_Y
        texPos2.y = 1.0-texPos2.y;
    #endif

    lowp vec4 newColor1 = texture2D(lookupTable, texPos1);
    lowp vec4 newColor2 = texture2D(lookupTable, texPos2);

    lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));

    // had to swap r and g to get closer colors to original rendering
    return vec4(newColor.g, newColor.r, newColor.b, 1.0);
}`});var Sl,Tv,hd=Ie(()=>{ir();sd();Yi();Sl=Lt(wt());ts();Tv=new Sl.RawShaderMaterial({vertexShader:wi,fragmentShader:ad,uniforms:{tInput:{value:null},enableCA:{value:!0},chromatic_aberration:{value:.001},enableDithering:{value:!1},dither:{value:10},enableVignette:{value:!1},vIntensity:{value:1},enableLut:{value:!1},lookupTable:{value:null}}})});var ud,cd=Ie(()=>{ud=`#version 100
precision highp float;

#include <depth>

uniform sampler2D tDepth;
uniform sampler2D tInput;
uniform sampler2D tBlur;
uniform bool debug;
varying vec2 vUv;

uniform float aperture;
uniform float focalDistance;

void main () {
	float depth = readDepth (tDepth, vUv);
	vec3 noBlur = texture2D(tInput, vUv).rgb;
	vec3 blur = texture2D(tBlur, vUv).rgb;

	float distanceToCamera = mix(cameraNear, cameraFar, depth);
	
	float CoC = distance(distanceToCamera, focalDistance);
	float st = smoothstep(0.0, aperture, CoC);

	vec3 color = mix(noBlur, blur, st);
	
	if(debug) {
		gl_FragColor = vec4(vec3(1.0-st), 1.0);
	}
	else {
		gl_FragColor = vec4(color, 1.0);
	}
}`});var pd,dd=Ie(()=>{pd=`uniform float cameraNear;
uniform float cameraFar;

#include <packing>

float readDepth (sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
	return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
}

float readZ (sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );

	return viewZ;
}`});var Al,Iv,md=Ie(()=>{Al=Lt(wt());wl();Yi();ir();cd();Iv=new Al.RawShaderMaterial({vertexShader:wi,fragmentShader:ud,uniforms:{tInput:{value:null},tBlur:{value:null},tDepth:{value:null},cameraNear:{value:0},cameraFar:{value:100},aperture:{value:1.5},focalDistance:{value:1},debug:{value:!1}}})});var fd,gd=Ie(()=>{Yi();fd=Lt(wt())});var qf,vd=Ie(()=>{Yi();qf=Lt(wt())});var yd,xd=Ie(()=>{yd=`#version 100
precision highp float;
varying vec2 vUv;

uniform sampler2D tInput;
uniform vec2 resolution;
uniform float gridSize;

uniform bool pixelate;
uniform int dithering;

#include <dither2>

void main () {
    vec2 uvStep = vec2(gridSize / resolution.x, gridSize / resolution.y); 

    // pixelate
    vec2 uv = floor(vUv / uvStep) * uvStep + uvStep * 0.5;
    if(!pixelate) {
        uv = vUv;
    }
    vec4 pixelated = texture2D(tInput, uv);

    if (dithering == 1) {
        pixelated = dither2x2(gl_FragCoord.xy, pixelated);
    } else if (dithering == 2) {
        pixelated = dither4x4(gl_FragCoord.xy, pixelated);
    } else if (dithering == 3) {
        pixelated = dither8x8(gl_FragCoord.xy, pixelated);
    }

    gl_FragColor = pixelated;

}`});var bd,_d=Ie(()=>{bd=`float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}`});var wd,Md=Ie(()=>{wd=`/*
* Implementation from: https://github.com/hughsk/glsl-dither 
*/

#include <luma>

float dither8x8(vec2 position, float brightness) {
  int x = int(mod(position.x, 8.0));
  int y = int(mod(position.y, 8.0));
  int index = x + y * 8;
  float limit = 0.0;

  if (x < 8) {
    if (index == 0) limit = 0.015625;
    if (index == 1) limit = 0.515625;
    if (index == 2) limit = 0.140625;
    if (index == 3) limit = 0.640625;
    if (index == 4) limit = 0.046875;
    if (index == 5) limit = 0.546875;
    if (index == 6) limit = 0.171875;
    if (index == 7) limit = 0.671875;
    if (index == 8) limit = 0.765625;
    if (index == 9) limit = 0.265625;
    if (index == 10) limit = 0.890625;
    if (index == 11) limit = 0.390625;
    if (index == 12) limit = 0.796875;
    if (index == 13) limit = 0.296875;
    if (index == 14) limit = 0.921875;
    if (index == 15) limit = 0.421875;
    if (index == 16) limit = 0.203125;
    if (index == 17) limit = 0.703125;
    if (index == 18) limit = 0.078125;
    if (index == 19) limit = 0.578125;
    if (index == 20) limit = 0.234375;
    if (index == 21) limit = 0.734375;
    if (index == 22) limit = 0.109375;
    if (index == 23) limit = 0.609375;
    if (index == 24) limit = 0.953125;
    if (index == 25) limit = 0.453125;
    if (index == 26) limit = 0.828125;
    if (index == 27) limit = 0.328125;
    if (index == 28) limit = 0.984375;
    if (index == 29) limit = 0.484375;
    if (index == 30) limit = 0.859375;
    if (index == 31) limit = 0.359375;
    if (index == 32) limit = 0.0625;
    if (index == 33) limit = 0.5625;
    if (index == 34) limit = 0.1875;
    if (index == 35) limit = 0.6875;
    if (index == 36) limit = 0.03125;
    if (index == 37) limit = 0.53125;
    if (index == 38) limit = 0.15625;
    if (index == 39) limit = 0.65625;
    if (index == 40) limit = 0.8125;
    if (index == 41) limit = 0.3125;
    if (index == 42) limit = 0.9375;
    if (index == 43) limit = 0.4375;
    if (index == 44) limit = 0.78125;
    if (index == 45) limit = 0.28125;
    if (index == 46) limit = 0.90625;
    if (index == 47) limit = 0.40625;
    if (index == 48) limit = 0.25;
    if (index == 49) limit = 0.75;
    if (index == 50) limit = 0.125;
    if (index == 51) limit = 0.625;
    if (index == 52) limit = 0.21875;
    if (index == 53) limit = 0.71875;
    if (index == 54) limit = 0.09375;
    if (index == 55) limit = 0.59375;
    if (index == 56) limit = 1.0;
    if (index == 57) limit = 0.5;
    if (index == 58) limit = 0.875;
    if (index == 59) limit = 0.375;
    if (index == 60) limit = 0.96875;
    if (index == 61) limit = 0.46875;
    if (index == 62) limit = 0.84375;
    if (index == 63) limit = 0.34375;
  }

  return brightness < limit ? 0.0 : 1.0;
}

vec3 dither8x8(vec2 position, vec3 color) {
  return color * dither8x8(position, luma(color));
}

vec4 dither8x8(vec2 position, vec4 color) {
  return vec4(color.rgb * dither8x8(position, luma(color)), 1.0);
}

float dither4x4(vec2 position, float brightness) {
  int x = int(mod(position.x, 4.0));
  int y = int(mod(position.y, 4.0));
  int index = x + y * 4;
  float limit = 0.0;

  if (x < 8) {
    if (index == 0) limit = 0.0625;
    if (index == 1) limit = 0.5625;
    if (index == 2) limit = 0.1875;
    if (index == 3) limit = 0.6875;
    if (index == 4) limit = 0.8125;
    if (index == 5) limit = 0.3125;
    if (index == 6) limit = 0.9375;
    if (index == 7) limit = 0.4375;
    if (index == 8) limit = 0.25;
    if (index == 9) limit = 0.75;
    if (index == 10) limit = 0.125;
    if (index == 11) limit = 0.625;
    if (index == 12) limit = 1.0;
    if (index == 13) limit = 0.5;
    if (index == 14) limit = 0.875;
    if (index == 15) limit = 0.375;
  }

  return brightness < limit ? 0.0 : 1.0;
}

vec3 dither4x4(vec2 position, vec3 color) {
  return color * dither4x4(position, luma(color));
}

vec4 dither4x4(vec2 position, vec4 color) {
  return vec4(color.rgb * dither4x4(position, luma(color)), 1.0);
}

float dither2x2(vec2 position, float brightness) {
  int x = int(mod(position.x, 2.0));
  int y = int(mod(position.y, 2.0));
  int index = x + y * 2;
  float limit = 0.0;

  if (x < 8) {
    if (index == 0) limit = 0.25;
    if (index == 1) limit = 0.75;
    if (index == 2) limit = 1.00;
    if (index == 3) limit = 0.50;
  }

  return brightness < limit ? 0.0 : 1.0;
}

vec3 dither2x2(vec2 position, vec3 color) {
  return color * dither2x2(position, luma(color));
}

vec4 dither2x2(vec2 position, vec4 color) {
  return vec4(color.rgb * dither2x2(position, luma(color)), 1.0);
}`});var ns,jv,Sd=Ie(()=>{Yi();ir();xd();ns=Lt(wt()),jv=new ns.RawShaderMaterial({vertexShader:wi,fragmentShader:yd,uniforms:{resolution:{value:new ns.Vector2},tInput:{value:null},pixelate:{value:!0},dithering:{value:2},gridSize:{value:5}}})});var Ad,Td=Ie(()=>{Ad=`#version 100
precision lowp float;

uniform sampler2D tInput;
uniform float opacity;

varying vec2 vUv;

void main() {
	gl_FragColor = texture2D(tInput, vUv) * opacity;
}`});var Si,Jv,El=Ie(()=>{Si=Lt(wt());Td();ir();Jv=new Si.RawShaderMaterial({vertexShader:wi,fragmentShader:Ad,uniforms:{tInput:{value:null}}})});var Ed=Ie(()=>{ts();El()});var Ld,Cd=Ie(()=>{Ld=`#include <output_fragment>

oGlow = vec4(totalEmissiveRadiance, 1.0);`});var Pd,Rd=Ie(()=>{Pd=`#include <clipping_planes_pars_fragment>

layout (location = 1) out vec4 oGlow;`});function nr(g,M=!1){if(M){let I=g.fragmentShader;I=I.replace("#include <clipping_planes_pars_fragment>",Pd),I=I.replace("#include <output_fragment>",Ld),g.fragmentShader=I}else{let I=g.fragmentShader;I=I.replace("#include <clipping_planes_pars_fragment>",`#include <clipping_planes_pars_fragment>
    layout(location = 1) out vec4 oGlow;`),I=I.replace("#include <output_fragment>",`#include <output_fragment>
    oGlow = vec4(0.);`),g.fragmentShader=I}}function rs(g){return g.onBeforeCompile=(M,I)=>{nr(M,g.emissive!==void 0)},g}var Cl=Ie(()=>{Cd();Rd()});var Nt,eg,tg,ig,ng,Dd=Ie(()=>{Nt=Lt(wt());Cl();eg={vertexShader:Nt.ShaderLib.basic.vertexShader.split("").join(""),fragmentShader:Nt.ShaderLib.basic.fragmentShader.split("").join(""),uniforms:null};nr(eg,!1);tg={vertexShader:Nt.ShaderLib.phong.vertexShader.split("").join(""),fragmentShader:Nt.ShaderLib.phong.fragmentShader.split("").join(""),uniforms:null};nr(tg,!0);ig={vertexShader:Nt.ShaderLib.standard.vertexShader.split("").join(""),fragmentShader:Nt.ShaderLib.standard.fragmentShader.split("").join(""),uniforms:null};nr(ig,!0);ng={vertexShader:Nt.ShaderLib.physical.vertexShader.split("").join(""),fragmentShader:Nt.ShaderLib.physical.fragmentShader.split("").join(""),uniforms:null};nr(ng,!0)});var Od,Id=Ie(()=>{Od=`vec4 rgbSplit(sampler2D tex, vec2 uv, float strength, vec2 delta, vec2 maxV, bool radial) {
    vec2 dir = radial ? uv - vec2( .5 ) : vec2(1.);
    float d = strength * length( dir );
    normalize( dir );
    vec2 value = d * dir * delta;

    value.x = clamp(value.x, -maxV.x, maxV.x);
    value.y = clamp(value.y, -maxV.y, maxV.y);
    
    vec4 c1 = texture2D( tex, uv - value );
    vec4 c2 = texture2D( tex, uv );
    vec4 c3 = texture2D( tex, uv + value );

    return vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.a );
}`});var zd,Nd=Ie(()=>{zd=`float d_rand(vec2 co){
	return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float dithering(vec2 st,float intensity){
	return mix(-intensity / 255.,intensity / 255.,d_rand(st));
}`});var Tl,ts=Ie(()=>{id();Yi();wl();hd();md();gd();vd();Sd();Ed();El();Cl();Dd();Id();Nd();dd();od();_d();Md();Tl={rgbSplit:Od,dithering:zd,depth:pd,lut:ld,luma:bd,dither2:wd}});var Fd={};Cf(Fd,{App:()=>Ll});var ot,ag,og,lg,hg,Ll,Ud=Ie(()=>{ot=Lt(wt());zu();Uu();Gu();ts();bl();ag=new ot.BoxGeometry(1,1,1),og=new ot.SphereGeometry(1),lg=new ot.CylinderGeometry(.1,.1,1,32,8),hg=new ot.TorusKnotGeometry(10,2,64,32,2,3),Ll=class extends ba{constructor(){super(window.innerWidth,window.innerHeight,{alpha:!1,antialias:!0});this.meshes=[];this.renderer.setClearColor(0,1),document.body.appendChild(this.domElement),this.domElement.className="view",ot.ShaderChunk.rgbSplit=Tl.rgbSplit;let I=new ot.DirectionalLight(16777215,.35);I.position.set(-1,1,1),this.scene.add(I);let b=new ot.Mesh(ag,rs(new ot.MeshPhongMaterial({color:16711680})));b.rotation.set(-.2,.2,.1),b.scale.x=1.5,this.scene.add(b),this.meshes.push(b);let W=new ot.Mesh(og,rs(new ot.MeshPhongMaterial({color:255,emissive:1118719,emissiveIntensity:1.7})));W.position.z=-2,W.position.y=.75,W.scale.setScalar(.75),this.scene.add(W),this.meshes.push(W);let ne=new ot.Mesh(lg,rs(new ot.MeshPhongMaterial({color:65280,emissive:2293538,emissiveIntensity:2.2})));ne.rotation.z=Math.PI/4,ne.position.z=2,ne.scale.y=5,this.scene.add(ne),this.meshes.push(ne);let he=new ot.Mesh(hg,rs(new ot.MeshPhongMaterial({color:0})));he.position.z=4,he.scale.setScalar(.1),this.scene.add(he),this.meshes.push(he),window.addEventListener("resize",Pe=>{this.resize(window.innerWidth,window.innerHeight)}),this.camera.position.z=15,this.customRenderer=new Ma(this.renderer,window.innerWidth,window.innerHeight,{exposure:.1,gamma:1.8,samples:4,glowSettings:{scale:.5,radius:1,iterations:8,quality:2}});let _e=Nu();document.body.appendChild(_e.domElement);let Ee=new xa(this.camera,this.domElement),qe=()=>{requestAnimationFrame(qe),_e.begin(),this.update(),Ee.update(),this.render(),_e.end()},xe=new tr;xe.add(this.customRenderer,"showGlow"),xe.add(this.customRenderer,"showScene"),xe.add(this.customRenderer,"exposure",0,1,.1),xe.add(this.customRenderer,"gamma",1,3.2,.1);let Ge=xe.addFolder("Blur Options");Ge.add(this.customRenderer.glow,"iterations",2,32,1),Ge.add(this.customRenderer.glow,"quality",{BLUR5:0,BLUR9:1,BLUR13:2}),Ge.add(this.customRenderer.glow,"radius",{1:1,"1/2":.5,"1/4":.25}),Ge.add(this.customRenderer.glow,"scale",{"100%":1,"50%":.5,"25%":.25}).onFinishChange(()=>{this.customRenderer.glow.setSize(window.innerWidth,window.innerHeight)}),this.start(qe)}resize(I,b){super.resize(I,b),this.customRenderer.setSize(I,b)}update(){super.update();let I=this.clock.getElapsedTime();this.meshes[3].rotation.set(I*.2,I*.16,0),this.meshes[2].rotation.set(0,0,Math.PI/4-I*.1)}render(){this.customRenderer.render(this.scene,this.camera)}}});var{App:cg}=(Ud(),Lf(Fd)),Ux=new cg;})();
/*! Bundled license information:

three/build/three.min.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/lil-gui.module.min.js:
  (**
   * lil-gui
   * https://lil-gui.georgealways.com
   * @version 0.17.0
   * @author George Michael Brower
   * @license MIT
   *)
*/
