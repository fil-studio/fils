(()=>{var Sf=Object.create;var va=Object.defineProperty;var Tf=Object.getOwnPropertyDescriptor;var Af=Object.getOwnPropertyNames;var Ef=Object.getPrototypeOf,Cf=Object.prototype.hasOwnProperty;var Pe=(g,w)=>()=>(g&&(w=g(g=0)),w);var Lf=(g,w)=>()=>(w||g((w={exports:{}}).exports,w),w.exports),Rf=(g,w)=>{for(var I in w)va(g,I,{get:w[I],enumerable:!0})},Du=(g,w,I,M)=>{if(w&&typeof w=="object"||typeof w=="function")for(let W of Af(w))!Cf.call(g,W)&&W!==I&&va(g,W,{get:()=>w[W],enumerable:!(M=Tf(w,W))||M.enumerable});return g};var Lt=(g,w,I)=>(I=g!=null?Sf(Ef(g)):{},Du(w||!g||!g.__esModule?va(I,"default",{value:g,enumerable:!0}):I,g)),Pf=g=>Du(va({},"__esModule",{value:!0}),g);var St=Lf((xa,Iu)=>{(function(g,w){typeof xa=="object"&&typeof Iu<"u"?w(xa):typeof define=="function"&&define.amd?define(["exports"],w):w((g=typeof globalThis<"u"?globalThis:g||self).THREE={})})(xa,function(g){"use strict";let w="146",$i="srgb",Ki="srgb-linear",we="300 es";class et{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}}let Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_i=1234567,Zt=Math.PI/180,Ii=180/Math.PI;function ot(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ke[255&r]+Ke[r>>8&255]+Ke[r>>16&255]+Ke[r>>24&255]+"-"+Ke[255&e]+Ke[e>>8&255]+"-"+Ke[e>>16&15|64]+Ke[e>>24&255]+"-"+Ke[63&t|128]+Ke[t>>8&255]+"-"+Ke[t>>16&255]+Ke[t>>24&255]+Ke[255&i]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function Ga(r,e){return(r%e+e)%e}function or(r,e,t){return(1-t)*r+t*e}function Va(r){return(r&r-1)==0&&r!==0}function Xl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ls(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ud=Object.freeze({__proto__:null,DEG2RAD:Zt,RAD2DEG:Ii,generateUUID:ot,clamp:Je,euclideanModulo:Ga,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:or,damp:function(r,e,t,i){return or(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Ga(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(_i=r);let e=_i+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Zt},radToDeg:function(r){return r*Ii},isPowerOfTwo:Va,ceilPowerOfTwo:Xl,floorPowerOfTwo:ls,setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:tt,denormalize:bi});class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],f=i[8],m=n[0],v=n[3],y=n[6],x=n[1],_=n[4],b=n[7],S=n[2],T=n[5],D=n[8];return s[0]=a*m+o*x+l*S,s[3]=a*v+o*_+l*T,s[6]=a*y+o*b+l*D,s[1]=c*m+h*x+u*S,s[4]=c*v+h*_+u*T,s[7]=c*y+h*b+u*D,s[2]=d*m+p*x+f*S,s[5]=d*v+p*_+f*T,s[8]=d*y+p*b+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+i*d+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(n*c-h*i)*m,e[2]=(o*i-n*a)*m,e[3]=d*m,e[4]=(h*t-n*l)*m,e[5]=(n*s-o*t)*m,e[6]=p*m,e[7]=(i*l-c*t)*m,e[8]=(a*t-i*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),n=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7];return n[0]=t*s+i*l,n[3]=t*a+i*c,n[6]=t*o+i*h,n[1]=-i*s+t*l,n[4]=-i*a+t*c,n[7]=-i*o+t*h,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ql(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}let Bd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function An(r,e){return new Bd[r](e)}function lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function cs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let Ha={[$i]:{[Ki]:Qi},[Ki]:{[$i]:cs}},Jt={legacyMode:!0,get workingColorSpace(){return Ki},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ha[e]&&Ha[e][t]!==void 0){let i=Ha[e][t];return r.r=i(r.r),r.g=i(r.g),r.b=i(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ft={r:0,g:0,b:0},si={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function us(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n="srgb-linear"){return this.r=e,this.g=t,this.b=i,Jt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n="srgb-linear"){if(e=Ga(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Wa(a,s,e+1/3),this.g=Wa(a,s,e),this.b=Wa(a,s,e-1/3)}return Jt.toWorkingColorSpace(this,n),this}setStyle(e,t="srgb"){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Jt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Jt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,h,t)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t="srgb"){let i=Yl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Jt.fromWorkingColorSpace(us(this,ft),e),Je(255*ft.r,0,255)<<16^Je(255*ft.g,0,255)<<8^Je(255*ft.b,0,255)<<0}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t="srgb-linear"){Jt.fromWorkingColorSpace(us(this,ft),t);let i=ft.r,n=ft.g,s=ft.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t="srgb-linear"){return Jt.fromWorkingColorSpace(us(this,ft),t),e.r=ft.r,e.g=ft.g,e.b=ft.b,e}getStyle(e="srgb"){return Jt.fromWorkingColorSpace(us(this,ft),e),e!==$i?`color(${e} ${ft.r} ${ft.g} ${ft.b})`:`rgb(${255*ft.r|0},${255*ft.g|0},${255*ft.b|0})`}offsetHSL(e,t,i){return this.getHSL(si),si.h+=e,si.s+=t,si.l+=i,this.setHSL(si.h,si.s,si.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(hs);let i=or(si.h,hs.h,t),n=or(si.s,hs.s,t),s=or(si.l,hs.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let En;fe.NAMES=Yl;class ja{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{En===void 0&&(En=lr("canvas")),En.width=e.width,En.height=e.height;let i=En.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=En}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Qi(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Qi(t[i]/255)):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class en{constructor(e=null){this.isSource=!0,this.uuid=ot(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Xa(n[a].image)):s.push(Xa(n[a]))}else s=Xa(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ja.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kd=0;class gt extends et{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=1,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=ot(),this.name="",this.source=new en(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gt.DEFAULT_IMAGE=null,gt.DEFAULT_MAPPING=300;class $e{constructor(e=0,t=0,i=0,n=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],v=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+v)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(p+1)/2,S=(y+1)/2,T=(h+d)/4,D=(u+m)/4,O=(f+v)/4;return _>b&&_>S?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=T/i,s=D/i):b>S?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=T/n,s=O/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=D/s,n=O/s),this.set(i,n,s,t),this}let x=Math.sqrt((v-f)*(v-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(v-f)/x,this.y=(u-m)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $t extends et{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let n={width:e,height:t,depth:1};this.texture=new gt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0&&i.generateMipmaps,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer===void 0||i.depthBuffer,this.stencilBuffer=i.stencilBuffer!==void 0&&i.stencilBuffer,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new en(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends gt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds extends gt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=m);if(u!==m||l!==d||c!==p||h!==f){let v=1-o,y=l*d+c*p+h*f+u*m,x=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let S=Math.sqrt(_),T=Math.atan2(S,y*x);v=Math.sin(v*T)/S,o=Math.sin(o*T)/S}let b=o*x;if(l=l*v+d*b,c=c*v+p*b,h=h*v+f*b,u=u*v+m*b,v===1-o){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,i=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*n-o*i,h=l*i+o*t-s*n,u=l*n+s*i-a*t,d=-s*t-a*i-o*n;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let qa=new E,Zl=new Gt;class tn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){let s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)nn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox),Ya.applyMatrix4(e.matrixWorld),this.union(Ya);let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),ps.subVectors(this.max,hr),Cn.subVectors(e.a,hr),Ln.subVectors(e.b,hr),Rn.subVectors(e.c,hr),Oi.subVectors(Ln,Cn),Ni.subVectors(Rn,Ln),rn.subVectors(Cn,Rn);let t=[0,-Oi.z,Oi.y,0,-Ni.z,Ni.y,0,-rn.z,rn.y,Oi.z,0,-Oi.x,Ni.z,0,-Ni.x,rn.z,0,-rn.x,-Oi.y,Oi.x,0,-Ni.y,Ni.x,0,-rn.y,rn.x,0];return!!Za(t,Cn,Ln,Rn,ps)&&(t=[1,0,0,0,1,0,0,0,1],!!Za(t,Cn,Ln,Rn,ps)&&(ms.crossVectors(Oi,Ni),t=[ms.x,ms.y,ms.z],Za(t,Cn,Ln,Rn,ps)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(nn).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}let Mi=[new E,new E,new E,new E,new E,new E,new E,new E],nn=new E,Ya=new tn,Cn=new E,Ln=new E,Rn=new E,Oi=new E,Ni=new E,rn=new E,hr=new E,ps=new E,ms=new E,sn=new E;function Za(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){sn.fromArray(r,s);let o=n.x*Math.abs(sn.x)+n.y*Math.abs(sn.y)+n.z*Math.abs(sn.z),l=e.dot(sn),c=t.dot(sn),h=i.dot(sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}let Gd=new tn,ur=new E,Ja=new E;class an{constructor(e=new E,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(ur,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ja)),this.expandByPoint(ur.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}let wi=new E,$a=new E,fs=new E,zi=new E,Ka=new E,gs=new E,Qa=new E;class dr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.direction).multiplyScalar(t).add(this.origin),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){$a.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),zi.copy(this.origin).sub($a);let s=.5*e.distanceTo(t),a=-this.direction.dot(fs),o=zi.dot(this.direction),l=-zi.dot(fs),c=zi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(fs).multiplyScalar(d).add($a),p}intersectSphere(e,t){wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),n=wi.dot(wi)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,n,s){Ka.subVectors(t,e),gs.subVectors(i,e),Qa.crossVectors(Ka,gs);let a,o=this.direction.dot(Qa);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}zi.subVectors(this.origin,e);let l=a*this.direction.dot(gs.crossVectors(zi,gs));if(l<0)return null;let c=a*this.direction.dot(Ka.cross(zi));if(c<0||l+c>o)return null;let h=-a*zi.dot(Qa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,a,o,l,c,h,u,d,p,f,m,v){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=m,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Pn.setFromMatrixColumn(e,0).length(),s=1/Pn.setFromMatrixColumn(e,1).length(),a=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vd,e,Hd)}lookAt(e,t,i){let n=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Fi.crossVectors(i,Ht),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Fi.crossVectors(i,Ht)),Fi.normalize(),vs.crossVectors(Ht,Fi),n[0]=Fi.x,n[4]=vs.x,n[8]=Ht.x,n[1]=Fi.y,n[5]=vs.y,n[9]=Ht.y,n[2]=Fi.z,n[6]=vs.z,n[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],f=i[2],m=i[6],v=i[10],y=i[14],x=i[3],_=i[7],b=i[11],S=i[15],T=n[0],D=n[4],O=n[8],k=n[12],H=n[1],N=n[5],Q=n[9],re=n[13],$=n[2],ce=n[6],le=n[10],j=n[14],Z=n[3],se=n[7],ee=n[11],te=n[15];return s[0]=a*T+o*H+l*$+c*Z,s[4]=a*D+o*N+l*ce+c*se,s[8]=a*O+o*Q+l*le+c*ee,s[12]=a*k+o*re+l*j+c*te,s[1]=h*T+u*H+d*$+p*Z,s[5]=h*D+u*N+d*ce+p*se,s[9]=h*O+u*Q+d*le+p*ee,s[13]=h*k+u*re+d*j+p*te,s[2]=f*T+m*H+v*$+y*Z,s[6]=f*D+m*N+v*ce+y*se,s[10]=f*O+m*Q+v*le+y*ee,s[14]=f*k+m*re+v*j+y*te,s[3]=x*T+_*H+b*$+S*Z,s[7]=x*D+_*N+b*ce+S*se,s[11]=x*O+_*Q+b*le+S*ee,s[15]=x*k+_*re+b*j+S*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],v=e[14],y=e[15],x=u*v*c-m*d*c+m*l*p-o*v*p-u*l*y+o*d*y,_=f*d*c-h*v*c-f*l*p+a*v*p+h*l*y-a*d*y,b=h*m*c-f*u*c+f*o*p-a*m*p-h*o*y+a*u*y,S=f*u*l-h*m*l-f*o*d+a*m*d+h*o*v-a*u*v,T=t*x+i*_+n*b+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return e[0]=x*D,e[1]=(m*d*s-u*v*s-m*n*p+i*v*p+u*n*y-i*d*y)*D,e[2]=(o*v*s-m*l*s+m*n*c-i*v*c-o*n*y+i*l*y)*D,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*p-i*l*p)*D,e[4]=_*D,e[5]=(h*v*s-f*d*s+f*n*p-t*v*p-h*n*y+t*d*y)*D,e[6]=(f*l*s-a*v*s-f*n*c+t*v*c+a*n*y-t*l*y)*D,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*p+t*l*p)*D,e[8]=b*D,e[9]=(f*u*s-h*m*s-f*i*p+t*m*p+h*i*y-t*u*y)*D,e[10]=(a*m*s-f*o*s+f*i*c-t*m*c-a*i*y+t*o*y)*D,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*p-t*o*p)*D,e[12]=S*D,e[13]=(h*m*n-f*u*n+f*i*d-t*m*d-h*i*v+t*u*v)*D,e[14]=(f*o*n-a*m*n-f*i*l+t*m*l+a*i*v-t*o*v)*D,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,v=a*u,y=o*u,x=l*c,_=l*h,b=l*u,S=i.x,T=i.y,D=i.z;return n[0]=(1-(m+y))*S,n[1]=(p+b)*S,n[2]=(f-_)*S,n[3]=0,n[4]=(p-b)*T,n[5]=(1-(d+y))*T,n[6]=(v+x)*T,n[7]=0,n[8]=(f+_)*D,n[9]=(v-x)*D,n[10]=(1-(d+m))*D,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Pn.set(n[0],n[1],n[2]).length(),a=Pn.set(n[4],n[5],n[6]).length(),o=Pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ai.copy(this);let l=1/s,c=1/a,h=1/o;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=c,ai.elements[5]*=c,ai.elements[6]*=c,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){let o=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){let o=this.elements,l=1/(t-e),c=1/(i-n),h=1/(a-s),u=(t+e)*l,d=(i+n)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}let Pn=new E,ai=new De,Vd=new E(0,0,0),Hd=new E(1,1,1),Fi=new E,vs=new E,Ht=new E,Jl=new De,$l=new Gt;class Dn{constructor(e=0,t=0,i=0,n=Dn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Dn.DefaultOrder="XYZ",Dn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Wd=0,Kl=new E,In=new Gt,Si=new De,ys=new E,pr=new E,jd=new E,Xd=new Gt,Ql=new E(1,0,0),ec=new E(0,1,0),tc=new E(0,0,1),qd={type:"added"},ic={type:"removed"};class qe extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ot(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DefaultUp.clone();let e=new E,t=new Dn,i=new Gt,n=new E(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new De},normalMatrix:{value:new kt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DefaultMatrixWorldAutoUpdate,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(pr,ys,this.up):Si.lookAt(ys,pr,this.up),this.quaternion.setFromRotationMatrix(Si),n&&(Si.extractRotation(n.matrixWorld),In.setFromRotationMatrix(Si),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ic)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(ic)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}}qe.DefaultUp=new E(0,1,0),qe.DefaultMatrixAutoUpdate=!0,qe.DefaultMatrixWorldAutoUpdate=!0;let oi=new E,Ti=new E,eo=new E,Ai=new E,On=new E,Nn=new E,nc=new E,to=new E,io=new E,no=new E;class Kt{constructor(e=new E,t=new E,i=new E){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),oi.subVectors(e,t),n.cross(oi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){oi.subVectors(n,t),Ti.subVectors(i,t),eo.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Ti),l=oi.dot(eo),c=Ti.dot(Ti),h=Ti.dot(eo),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ai),Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Ai),l.set(0,0),l.addScaledVector(s,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l}static isFrontFacing(e,t,i,n){return oi.subVectors(i,t),Ti.subVectors(e,t),oi.cross(Ti).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),.5*oi.cross(Ti).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Kt.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;On.subVectors(n,i),Nn.subVectors(s,i),to.subVectors(e,i);let l=On.dot(to),c=Nn.dot(to);if(l<=0&&c<=0)return t.copy(i);io.subVectors(e,n);let h=On.dot(io),u=Nn.dot(io);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(On,a);no.subVectors(e,s);let p=On.dot(no),f=Nn.dot(no);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Nn,o);let v=h*f-p*u;if(v<=0&&u-h>=0&&p-f>=0)return nc.subVectors(s,n),o=(u-h)/(u-h+(p-f)),t.copy(n).addScaledVector(nc,o);let y=1/(v+m+d);return a=m*y,o=d*y,t.copy(i).addScaledVector(On,a).addScaledVector(Nn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Yd=0;class Rt extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ot(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ui extends Rt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}let pt=new E,_s=new ne;class it{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ro extends it{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class so extends it{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xe extends it{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zd=0,Qt=new De,ao=new qe,zn=new E,Wt=new tn,mr=new tn,bt=new E;class Fe extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ot(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ql(e)?so:ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new kt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new E,1/0);if(e){let i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];mr.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Wt.min,mr.min),Wt.expandByPoint(bt),bt.addVectors(Wt.max,mr.max),Wt.expandByPoint(bt)):(Wt.expandByPoint(mr.min),Wt.expandByPoint(mr.max))}Wt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)bt.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(e,c),bt.add(zn)),n=Math.max(n,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let H=0;H<o;H++)c[H]=new E,h[H]=new E;let u=new E,d=new E,p=new E,f=new ne,m=new ne,v=new ne,y=new E,x=new E;function _(H,N,Q){u.fromArray(n,3*H),d.fromArray(n,3*N),p.fromArray(n,3*Q),f.fromArray(a,2*H),m.fromArray(a,2*N),v.fromArray(a,2*Q),d.sub(u),p.sub(u),m.sub(f),v.sub(f);let re=1/(m.x*v.y-v.x*m.y);isFinite(re)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(re),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(re),c[H].add(y),c[N].add(y),c[Q].add(y),h[H].add(x),h[N].add(x),h[Q].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let H=0,N=b.length;H<N;++H){let Q=b[H],re=Q.start;for(let $=re,ce=re+Q.count;$<ce;$+=3)_(i[$+0],i[$+1],i[$+2])}let S=new E,T=new E,D=new E,O=new E;function k(H){D.fromArray(s,3*H),O.copy(D);let N=c[H];S.copy(N),S.sub(D.multiplyScalar(D.dot(N))).normalize(),T.crossVectors(O,N);let Q=T.dot(h[H])<0?-1:1;l[4*H]=S.x,l[4*H+1]=S.y,l[4*H+2]=S.z,l[4*H+3]=Q}for(let H=0,N=b.length;H<N;++H){let Q=b[H],re=Q.start;for(let $=re,ce=re+Q.count;$<ce;$+=3)k(i[$+0]),k(i[$+1]),k(i[$+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new it(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let n=new E,s=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,v=l.length;m<v;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let y=0;y<h;y++)d[f++]=c[p++]}return new it(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Fe,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}let rc=new De,Fn=new dr,oo=new an,Bi=new E,ki=new E,Gi=new E,lo=new E,co=new E,ho=new E,bs=new E,Ms=new E,ws=new E,Ss=new ne,Ts=new ne,As=new ne,uo=new E,Es=new E;class At extends qe{constructor(e=new Fe,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),e.ray.intersectsSphere(oo)===!1)||(rc.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(rc),i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1))return;let a,o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,p=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(n))for(let m=0,v=p.length;m<v;m++){let y=p[m],x=n[y.materialIndex];for(let _=Math.max(y.start,f.start),b=Math.min(o.count,Math.min(y.start+y.count,f.start+f.count));_<b;_+=3){let S=o.getX(_),T=o.getX(_+1),D=o.getX(_+2);a=Cs(this,x,e,Fn,l,c,h,u,d,S,T,D),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else for(let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);m<v;m+=3){let y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);a=Cs(this,n,e,Fn,l,c,h,u,d,y,x,_),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}else if(l!==void 0)if(Array.isArray(n))for(let m=0,v=p.length;m<v;m++){let y=p[m],x=n[y.materialIndex];for(let _=Math.max(y.start,f.start),b=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));_<b;_+=3)a=Cs(this,x,e,Fn,l,c,h,u,d,_,_+1,_+2),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=y.materialIndex,t.push(a))}else for(let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);m<v;m+=3)a=Cs(this,n,e,Fn,l,c,h,u,d,m,m+1,m+2),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}function Cs(r,e,t,i,n,s,a,o,l,c,h,u){Bi.fromBufferAttribute(n,c),ki.fromBufferAttribute(n,h),Gi.fromBufferAttribute(n,u);let d=r.morphTargetInfluences;if(s&&d){bs.set(0,0,0),Ms.set(0,0,0),ws.set(0,0,0);for(let f=0,m=s.length;f<m;f++){let v=d[f],y=s[f];v!==0&&(lo.fromBufferAttribute(y,c),co.fromBufferAttribute(y,h),ho.fromBufferAttribute(y,u),a?(bs.addScaledVector(lo,v),Ms.addScaledVector(co,v),ws.addScaledVector(ho,v)):(bs.addScaledVector(lo.sub(Bi),v),Ms.addScaledVector(co.sub(ki),v),ws.addScaledVector(ho.sub(Gi),v)))}Bi.add(bs),ki.add(Ms),Gi.add(ws)}r.isSkinnedMesh&&(r.boneTransform(c,Bi),r.boneTransform(h,ki),r.boneTransform(u,Gi));let p=function(f,m,v,y,x,_,b,S){let T;if(T=m.side===1?y.intersectTriangle(b,_,x,!0,S):y.intersectTriangle(x,_,b,m.side!==2,S),T===null)return null;Es.copy(S),Es.applyMatrix4(f.matrixWorld);let D=v.ray.origin.distanceTo(Es);return D<v.near||D>v.far?null:{distance:D,point:Es.clone(),object:f}}(r,e,t,i,Bi,ki,Gi,uo);if(p){o&&(Ss.fromBufferAttribute(o,c),Ts.fromBufferAttribute(o,h),As.fromBufferAttribute(o,u),p.uv=Kt.getUV(uo,Bi,ki,Gi,Ss,Ts,As,new ne)),l&&(Ss.fromBufferAttribute(l,c),Ts.fromBufferAttribute(l,h),As.fromBufferAttribute(l,u),p.uv2=Kt.getUV(uo,Bi,ki,Gi,Ss,Ts,As,new ne));let f={a:c,b:h,c:u,normal:new E,materialIndex:0};Kt.getNormal(Bi,ki,Gi,f.normal),p.face=f}return p}class Vi extends Fe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,v,y,x,_,b,S,T,D,O,k){let H=b/D,N=S/O,Q=b/2,re=S/2,$=T/2,ce=D+1,le=O+1,j=0,Z=0,se=new E;for(let ee=0;ee<le;ee++){let te=ee*N-re;for(let ye=0;ye<ce;ye++){let ze=ye*H-Q;se[m]=ze*x,se[v]=te*_,se[y]=$,c.push(se.x,se.y,se.z),se[m]=0,se[v]=0,se[y]=T>0?1:-1,h.push(se.x,se.y,se.z),u.push(ye/D),u.push(1-ee/O),j+=1}}for(let ee=0;ee<O;ee++)for(let te=0;te<D;te++){let ye=d+te+ce*ee,ze=d+te+ce*(ee+1),be=d+(te+1)+ce*(ee+1),Oe=d+(te+1)+ce*ee;l.push(ye,ze,Oe),l.push(ze,be,Oe),Z+=6}o.addGroup(p,Z,k),p+=Z,d+=j}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(u,2))}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Un(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Nt(r){let e={};for(let t=0;t<r.length;t++){let i=Un(r[t]);for(let n in i)e[n]=i[n]}return e}let sc={clone:Un,merge:Nt};class mi extends Rt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Un(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ls extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Et extends Ls{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ii*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Zt*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ii*Math.atan(Math.tan(.5*Zt*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Zt*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}let Bn=90;class ac extends qe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;let n=new Et(Bn,1,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new E(1,0,0)),this.add(n);let s=new Et(Bn,1,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new E(-1,0,0)),this.add(s);let a=new Et(Bn,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new E(0,1,0)),this.add(a);let o=new Et(Bn,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new E(0,-1,0)),this.add(o);let l=new Et(Bn,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new E(0,0,1)),this.add(l);let c=new Et(Bn,1,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new E(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[n,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class fr extends gt{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:301,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oc extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new fr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Vi(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:Un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new At(n,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new ac(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}let po=new E,Jd=new E,$d=new kt;class Hi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=po.subVectors(i,t).cross(Jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let i=e.delta(po),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$d.getNormalMatrix(e),n=this.coplanarPoint(po).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}let kn=new an,Rs=new E;class Ps{constructor(e=new Hi,t=new Hi,i=new Hi,n=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],p=i[9],f=i[10],m=i[11],v=i[12],y=i[13],x=i[14],_=i[15];return t[0].setComponents(o-n,u-l,m-d,_-v).normalize(),t[1].setComponents(o+n,u+l,m+d,_+v).normalize(),t[2].setComponents(o+s,u+c,m+p,_+y).normalize(),t[3].setComponents(o-s,u-c,m-p,_-y).normalize(),t[4].setComponents(o-a,u-h,m-f,_-x).normalize(),t[5].setComponents(o+a,u+h,m+f,_+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Rs.x=n.normal.x>0?e.max.x:e.min.x,Rs.y=n.normal.y>0?e.max.y:e.min.y,Rs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Kd(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);a===void 0?i.set(n,function(o,l){let c=o.array,h=o.usage,u=r.createBuffer(),d;if(r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)d=5126;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=5131}else d=5123;else if(c instanceof Int16Array)d=5122;else if(c instanceof Uint32Array)d=5125;else if(c instanceof Int32Array)d=5124;else if(c instanceof Int8Array)d=5120;else if(c instanceof Uint8Array)d=5121;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);d=5121}return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}}(n,s)):a.version<n.version&&(function(o,l,c){let h=l.array,u=l.updateRange;r.bindBuffer(c,o),u.count===-1?r.bufferSubData(c,0,h):(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1)}(a.buffer,n,s),a.version=n.version)}}}class Gn extends Fe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],v=[];for(let y=0;y<h;y++){let x=y*d-a;for(let _=0;_<c;_++){let b=_*u-s;f.push(b,-x,0),m.push(0,0,1),v.push(_/o),v.push(1-y/l)}}for(let y=0;y<l;y++)for(let x=0;x<o;x++){let _=x+c*y,b=x+c*(y+1),S=x+1+c*(y+1),T=x+1+c*y;p.push(_,b,T),p.push(b,S,T)}this.setIndex(p),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(m,3)),this.setAttribute("uv",new xe(v,2))}static fromJSON(e){return new Gn(e.width,e.height,e.widthSegments,e.heightSegments)}}let Ne={alphamap_fragment:`#ifdef USE_ALPHAMAP
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
		 3.2404542, -0.9692660,	0.0556434,
		-1.5371385,	1.8760108, -0.2040259,
		-0.4985314,	0.0415560,	1.0572252
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,lights_pars_begin:`uniform bool receiveShadow;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
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
			vec3(		0, 1,		0 ),
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,shadowmap_vertex:`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
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
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
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
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
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
}`},ue={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},li={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};function Qd(r,e,t,i,n,s,a){let o=new fe(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m,v){i.buffers.color.setClear(m.r,m.g,m.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),h=v,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,f(o,h)},render:function(m,v){let y=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x));let _=r.xr,b=_.getSession&&_.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?f(o,h):x&&x.isColor&&(f(x,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(c===void 0&&(c=new At(new Vi(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Un(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u===x&&d===x.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new At(new Gn(2,2),new mi({name:"BackgroundMaterial",uniforms:Un(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function ep(r,e,t,i){let n=r.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(S){return i.isWebGL2?r.bindVertexArray(S):s.bindVertexArrayOES(S)}function d(S){return i.isWebGL2?r.deleteVertexArray(S):s.deleteVertexArrayOES(S)}function p(S){let T=[],D=[],O=[];for(let k=0;k<n;k++)T[k]=0,D[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:O,object:S,attributes:{},index:null}}function f(){let S=c.newAttributes;for(let T=0,D=S.length;T<D;T++)S[T]=0}function m(S){v(S,0)}function v(S,T){let D=c.newAttributes,O=c.enabledAttributes,k=c.attributeDivisors;D[S]=1,O[S]===0&&(r.enableVertexAttribArray(S),O[S]=1),k[S]!==T&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](S,T),k[S]=T)}function y(){let S=c.newAttributes,T=c.enabledAttributes;for(let D=0,O=T.length;D<O;D++)T[D]!==S[D]&&(r.disableVertexAttribArray(D),T[D]=0)}function x(S,T,D,O,k,H){i.isWebGL2!==!0||D!==5124&&D!==5125?r.vertexAttribPointer(S,T,D,O,k,H):r.vertexAttribIPointer(S,T,D,k,H)}function _(){b(),h=!0,c!==l&&(c=l,u(c.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(S,T,D,O,k){let H=!1;if(a){let N=function(Q,re,$){let ce=$.wireframe===!0,le=o[Q.id];le===void 0&&(le={},o[Q.id]=le);let j=le[re.id];j===void 0&&(j={},le[re.id]=j);let Z=j[ce];return Z===void 0&&(Z=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),j[ce]=Z),Z}(O,D,T);c!==N&&(c=N,u(c.object)),H=function(Q,re,$,ce){let le=c.attributes,j=re.attributes,Z=0,se=$.getAttributes();for(let ee in se)if(se[ee].location>=0){let te=le[ee],ye=j[ee];if(ye===void 0&&(ee==="instanceMatrix"&&Q.instanceMatrix&&(ye=Q.instanceMatrix),ee==="instanceColor"&&Q.instanceColor&&(ye=Q.instanceColor)),te===void 0||te.attribute!==ye||ye&&te.data!==ye.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ce}(S,O,D,k),H&&function(Q,re,$,ce){let le={},j=re.attributes,Z=0,se=$.getAttributes();for(let ee in se)if(se[ee].location>=0){let te=j[ee];te===void 0&&(ee==="instanceMatrix"&&Q.instanceMatrix&&(te=Q.instanceMatrix),ee==="instanceColor"&&Q.instanceColor&&(te=Q.instanceColor));let ye={};ye.attribute=te,te&&te.data&&(ye.data=te.data),le[ee]=ye,Z++}c.attributes=le,c.attributesNum=Z,c.index=ce}(S,O,D,k)}else{let N=T.wireframe===!0;c.geometry===O.id&&c.program===D.id&&c.wireframe===N||(c.geometry=O.id,c.program=D.id,c.wireframe=N,H=!0)}k!==null&&t.update(k,34963),(H||h)&&(h=!1,function(N,Q,re,$){if(i.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ce=$.attributes,le=re.getAttributes(),j=Q.defaultAttributeValues;for(let Z in le){let se=le[Z];if(se.location>=0){let ee=ce[Z];if(ee===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){let te=ee.normalized,ye=ee.itemSize,ze=t.get(ee);if(ze===void 0)continue;let be=ze.buffer,Oe=ze.type,P=ze.bytesPerElement;if(ee.isInterleavedBufferAttribute){let C=ee.data,G=C.stride,U=ee.offset;if(C.isInstancedInterleavedBuffer){for(let R=0;R<se.locationSize;R++)v(se.location+R,C.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let R=0;R<se.locationSize;R++)m(se.location+R);r.bindBuffer(34962,be);for(let R=0;R<se.locationSize;R++)x(se.location+R,ye/se.locationSize,Oe,te,G*P,(U+ye/se.locationSize*R)*P)}else{if(ee.isInstancedBufferAttribute){for(let C=0;C<se.locationSize;C++)v(se.location+C,ee.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let C=0;C<se.locationSize;C++)m(se.location+C);r.bindBuffer(34962,be);for(let C=0;C<se.locationSize;C++)x(se.location+C,ye/se.locationSize,Oe,te,ye*P,ye/se.locationSize*C*P)}}else if(j!==void 0){let te=j[Z];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(se.location,te);break;case 3:r.vertexAttrib3fv(se.location,te);break;case 4:r.vertexAttrib4fv(se.location,te);break;default:r.vertexAttrib1fv(se.location,te)}}}}y()}(S,T,D,O),k!==null&&r.bindBuffer(34963,t.get(k).buffer))},reset:_,resetDefaultState:b,dispose:function(){_();for(let S in o){let T=o[S];for(let D in T){let O=T[D];for(let k in O)d(O[k].object),delete O[k];delete T[D]}delete o[S]}},releaseStatesOfGeometry:function(S){if(o[S.id]===void 0)return;let T=o[S.id];for(let D in T){let O=T[D];for(let k in O)d(O[k].object),delete O[k];delete T[D]}delete o[S.id]},releaseStatesOfProgram:function(S){for(let T in o){let D=o[T];if(D[S.id]===void 0)continue;let O=D[S.id];for(let k in O)d(O[k].object),delete O[k];delete D[S.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:y}}function tp(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(n)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)}}function ip(r,e,t){let i;function n(b){if(b==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),p=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),v=r.getParameter(36348),y=r.getParameter(36349),x=u>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:x&&_,maxSamples:s?r.getParameter(36183):0}}function np(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Hi,o=new kt,l={value:null,needsUpdate:!1};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,f){let m=u!==null?u.length:0,v=null;if(m!==0){if(v=l.value,f!==!0||v===null){let y=p+4*m,x=d.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<y)&&(v=new Float32Array(y));for(let _=0,b=p;_!==m;++_,b+=4)a.copy(u[_]).applyMatrix4(x,o),a.normal.toArray(v,b),v[b+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){let f=u.length!==0||d||i!==0||n;return n=d,t=h(u,p,0),i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){let f=u.clippingPlanes,m=u.clipIntersection,v=u.clipShadows,y=r.get(u);if(!n||f===null||f.length===0||s&&!v)s?h(null):c();else{let x=s?0:i,_=4*x,b=y.clippingState||null;l.value=b,b=h(f,d,_,p);for(let S=0;S!==_;++S)b[S]=t[S];y.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}function rp(r){let e=new WeakMap;function t(n,s){return s===303?n.mapping=301:s===304&&(n.mapping=302),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture&&n.isRenderTargetTexture===!1){let s=n.mapping;if(s===303||s===304){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new oc(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}li.physical={uniforms:Nt([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ne(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};class Ds extends Ls{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}let cc=[.125,.215,.35,.446,.526,.582],gr=20,mo=new Ds,hc=new fe,fo=null,on=(1+Math.sqrt(5))/2,Vn=1/on,uc=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,on,Vn),new E(0,on,-Vn),new E(Vn,0,on),new E(-Vn,0,on),new E(on,Vn,0),new E(-on,Vn,0)];class go{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){fo=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo),e.scissorTest=!1,Is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=dc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+cc.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=cc[d-a+4-1]:d===0&&(f=0),c.push(f);let m=1/(p-2),v=-m,y=1+m,x=[v,v,y,v,y,y,v,v,y,y,v,y],_=6,b=6,S=3,T=2,D=1,O=new Float32Array(S*b*_),k=new Float32Array(T*b*_),H=new Float32Array(D*b*_);for(let Q=0;Q<_;Q++){let re=Q%3*2/3-1,$=Q>2?0:-1,ce=[re,$,0,re+2/3,$,0,re+2/3,$+1,0,re,$,0,re+2/3,$+1,0,re,$+1,0];O.set(ce,S*b*Q),k.set(x,T*b*Q);let le=[Q,Q,Q,Q,Q,Q];H.set(le,D*b*Q)}let N=new Fe;N.setAttribute("position",new it(O,S)),N.setAttribute("uv",new it(k,T)),N.setAttribute("faceIndex",new it(H,D)),o.push(N),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(gr),h=new E(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:vo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new At(this._lodPlanes[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,n){let s=new Et(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(hc),l.toneMapping=0,l.autoClear=!1;let u=new Ui({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new At(new Vi,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(hc),p=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(s.up.set(0,a[m],0),s.lookAt(o[m],0,0)):v===1?(s.up.set(0,0,a[m]),s.lookAt(0,o[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,o[m]));let y=this._cubeSize;Is(n,v*y,m>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Is(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,mo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=uc[(n-1)%uc.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new At(this._lodPlanes[n],c),u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],y=0;for(let b=0;b<gr;++b){let S=b/f,T=Math.exp(-S*S/2);v.push(T),b===0?y+=T:b<m&&(y+=2*T)}for(let b=0;b<v.length;b++)v[b]=v[b]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-i;let _=this._sizeLods[n];Is(t,3*_*(n>x-4?n-x+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,mo)}}function dc(r,e,t){let i=new $t(r,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Is(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function pc(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function mc(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

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
	`}function sp(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===303||s===304,o=s===301||s===302;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new go(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new go(r));let c=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,c),n.addEventListener("dispose",i),c.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function ap(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function op(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let m=h.array;d=h.version;for(let v=0,y=m.length;v<y;v+=3){let x=m[v+0],_=m[v+1],b=m[v+2];c.push(x,_,_,b,b,x)}}else{let m=u.array;d=u.version;for(let v=0,y=m.length/3-1;v<y;v+=3){let x=v+0,_=v+1,b=v+2;c.push(x,_,_,b,b,x)}}let p=new(ql(c)?so:ro)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],34962);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function lp(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(n)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)}}function cp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case 4:e.triangles+=n*(t/3);break;case 1:e.lines+=n*(t/2);break;case 3:e.lines+=n*(t-1);break;case 2:e.lines+=n*t;break;case 0:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function hp(r,e){return r[0]-e[0]}function up(r,e){return Math.abs(e[1])-Math.abs(r[1])}function dp(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new $e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=p!==void 0?p.length:0,m=s.get(c);if(m===void 0||m.count!==f){let $=function(){Q.dispose(),s.delete(c),c.removeEventListener("dispose",$)};m!==void 0&&m.texture.dispose();let x=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],D=c.morphAttributes.color||[],O=0;x===!0&&(O=1),_===!0&&(O=2),b===!0&&(O=3);let k=c.attributes.position.count*O,H=1;k>e.maxTextureSize&&(H=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let N=new Float32Array(k*H*4*f),Q=new cr(N,k,H,f);Q.type=1015,Q.needsUpdate=!0;let re=4*O;for(let ce=0;ce<f;ce++){let le=S[ce],j=T[ce],Z=D[ce],se=k*H*4*ce;for(let ee=0;ee<le.count;ee++){let te=ee*re;x===!0&&(a.fromBufferAttribute(le,ee),N[se+te+0]=a.x,N[se+te+1]=a.y,N[se+te+2]=a.z,N[se+te+3]=0),_===!0&&(a.fromBufferAttribute(j,ee),N[se+te+4]=a.x,N[se+te+5]=a.y,N[se+te+6]=a.z,N[se+te+7]=0),b===!0&&(a.fromBufferAttribute(Z,ee),N[se+te+8]=a.x,N[se+te+9]=a.y,N[se+te+10]=a.z,N[se+te+11]=Z.itemSize===4?a.w:1)}}m={count:f,texture:Q,size:new ne(k,H)},s.set(c,m),c.addEventListener("dispose",$)}let v=0;for(let x=0;x<d.length;x++)v+=d[x];let y=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let p=d===void 0?0:d.length,f=i[c.id];if(f===void 0||f.length!==p){f=[];for(let _=0;_<p;_++)f[_]=[_,0];i[c.id]=f}for(let _=0;_<p;_++){let b=f[_];b[0]=_,b[1]=d[_]}f.sort(up);for(let _=0;_<8;_++)_<p&&f[_][1]?(o[_][0]=f[_][0],o[_][1]=f[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(hp);let m=c.morphAttributes.position,v=c.morphAttributes.normal,y=0;for(let _=0;_<8;_++){let b=o[_],S=b[0],T=b[1];S!==Number.MAX_SAFE_INTEGER&&T?(m&&c.getAttribute("morphTarget"+_)!==m[S]&&c.setAttribute("morphTarget"+_,m[S]),v&&c.getAttribute("morphNormal"+_)!==v[S]&&c.setAttribute("morphNormal"+_,v[S]),n[_]=T,y+=T):(m&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),v&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),n[_]=0)}let x=c.morphTargetsRelative?1:1-y;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function pp(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);return n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){n=new WeakMap}}}let fc=new gt,gc=new cr,vc=new ds,xc=new fr,yc=[],_c=[],bc=new Float32Array(16),Mc=new Float32Array(9),wc=new Float32Array(4);function Hn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=yc[n];if(s===void 0&&(s=new Float32Array(n),yc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function vt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Os(r,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function vp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function xp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;wc.set(i),r.uniformMatrix2fv(this.addr,!1,wc),xt(t,i)}}function yp(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;Mc.set(i),r.uniformMatrix3fv(this.addr,!1,Mc),xt(t,i)}}function _p(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,i))return;bc.set(i),r.uniformMatrix4fv(this.addr,!1,bc),xt(t,i)}}function bp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function wp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function Tp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ap(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function Ep(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function Cp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function Lp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||fc,n)}function Rp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||vc,n)}function Pp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||xc,n)}function Dp(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||gc,n)}function Ip(r,e){r.uniform1fv(this.addr,e)}function Op(r,e){let t=Hn(e,this.size,2);r.uniform2fv(this.addr,t)}function Np(r,e){let t=Hn(e,this.size,3);r.uniform3fv(this.addr,t)}function zp(r,e){let t=Hn(e,this.size,4);r.uniform4fv(this.addr,t)}function Fp(r,e){let t=Hn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Up(r,e){let t=Hn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Bp(r,e){let t=Hn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function kp(r,e){r.uniform1iv(this.addr,e)}function Gp(r,e){r.uniform2iv(this.addr,e)}function Vp(r,e){r.uniform3iv(this.addr,e)}function Hp(r,e){r.uniform4iv(this.addr,e)}function Wp(r,e){r.uniform1uiv(this.addr,e)}function jp(r,e){r.uniform2uiv(this.addr,e)}function Xp(r,e){r.uniform3uiv(this.addr,e)}function qp(r,e){r.uniform4uiv(this.addr,e)}function Yp(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||fc,s[a])}function Zp(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||vc,s[a])}function Jp(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||xc,s[a])}function $p(r,e,t){let i=this.cache,n=e.length,s=Os(t,n);vt(i,s)||(r.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||gc,s[a])}class Kp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=function(n){switch(n){case 5126:return mp;case 35664:return fp;case 35665:return gp;case 35666:return vp;case 35674:return xp;case 35675:return yp;case 35676:return _p;case 5124:case 35670:return bp;case 35667:case 35671:return Mp;case 35668:case 35672:return wp;case 35669:case 35673:return Sp;case 5125:return Tp;case 36294:return Ap;case 36295:return Ep;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Dp}}(t.type)}}class Qp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Ip;case 35664:return Op;case 35665:return Np;case 35666:return zp;case 35674:return Fp;case 35675:return Up;case 35676:return Bp;case 5124:case 35670:return kp;case 35667:case 35671:return Gp;case 35668:case 35672:return Vp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return jp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return $p}}(t.type)}}class em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}}let xo=/(\w+)(\])?(\[|\.)?/g;function Sc(r,e){r.seq.push(e),r.map[e.id]=e}function tm(r,e,t){let i=r.name,n=i.length;for(xo.lastIndex=0;;){let s=xo.exec(i),a=xo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){Sc(t,c===void 0?new Kp(o,r,e):new Qp(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new em(o),Sc(t,h)),t=h}}}class Ns{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);tm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}}function Tc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let im=0;function Ac(r,e,t){let i=r.getShaderParameter(e,35713),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function nm(r,e){let t=function(i){switch(i){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vr(r){return r!==""}function Ec(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}let sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(r){return r.replace(sm,am)}function am(r,e){let t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return yo(t)}let om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(r){return r.replace(om,lm)}function lm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Rc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(O){let k="SHADOWMAP_TYPE_BASIC";return O.shadowMapType===1?k="SHADOWMAP_TYPE_PCF":O.shadowMapType===2?k="SHADOWMAP_TYPE_PCF_SOFT":O.shadowMapType===3&&(k="SHADOWMAP_TYPE_VSM"),k}(t),c=function(O){let k="ENVMAP_TYPE_CUBE";if(O.envMap)switch(O.envMapMode){case 301:case 302:k="ENVMAP_TYPE_CUBE";break;case 306:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),h=function(O){let k="ENVMAP_MODE_REFLECTION";return O.envMap&&O.envMapMode===302&&(k="ENVMAP_MODE_REFRACTION"),k}(t),u=function(O){let k="ENVMAP_BLENDING_NONE";if(O.envMap)switch(O.combine){case 0:k="ENVMAP_BLENDING_MULTIPLY";break;case 1:k="ENVMAP_BLENDING_MIX";break;case 2:k="ENVMAP_BLENDING_ADD"}return k}(t),d=function(O){let k=O.envMapCubeUVHeight;if(k===null)return null;let H=Math.log2(k)-2,N=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:N,maxMip:H}}(t),p=t.isWebGL2?"":function(O){return[O.extensionDerivatives||O.envMapCubeUVHeight||O.bumpMap||O.tangentSpaceNormalMap||O.clearcoatNormalMap||O.flatShading||O.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(O.extensionFragDepth||O.logarithmicDepthBuffer)&&O.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",O.extensionDrawBuffers&&O.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(O.extensionShaderTextureLOD||O.envMap||O.transmission)&&O.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vr).join(`
`)}(t),f=function(O){let k=[];for(let H in O){let N=O[H];N!==!1&&k.push("#define "+H+" "+N)}return k.join(`
`)}(s),m=n.createProgram(),v,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[f].filter(vr).join(`
`),v.length>0&&(v+=`
`),y=[p,f].filter(vr).join(`
`),y.length>0&&(y+=`
`)):(v=[Rc(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),y=[p,Rc(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ne.tonemapping_pars_fragment:"",t.toneMapping!==0?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,nm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),a=yo(a),a=Ec(a,t),a=Cc(a,t),o=yo(o),o=Ec(o,t),o=Cc(o,t),a=Lc(a),o=Lc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,y=["#define varying in",t.glslVersion===we?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===we?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let _=x+y+o,b=Tc(n,35633,x+v+a),S=Tc(n,35632,_);if(n.attachShader(m,b),n.attachShader(m,S),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),r.debug.checkShaderErrors){let O=n.getProgramInfoLog(m).trim(),k=n.getShaderInfoLog(b).trim(),H=n.getShaderInfoLog(S).trim(),N=!0,Q=!0;if(n.getProgramParameter(m,35714)===!1){N=!1;let re=Ac(n,b,"vertex"),$=Ac(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+O+`
`+re+`
`+$)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):k!==""&&H!==""||(Q=!1);Q&&(this.diagnostics={runnable:N,programLog:O,vertexShader:{log:k,prefix:v},fragmentShader:{log:H,prefix:y}})}let T,D;return n.deleteShader(b),n.deleteShader(S),this.getUniforms=function(){return T===void 0&&(T=new Ns(n,m)),T},this.getAttributes=function(){return D===void 0&&(D=function(O,k){let H={},N=O.getProgramParameter(k,35721);for(let Q=0;Q<N;Q++){let re=O.getActiveAttrib(k,Q),$=re.name,ce=1;re.type===35674&&(ce=2),re.type===35675&&(ce=3),re.type===35676&&(ce=4),H[$]={type:re.type,location:O.getAttribLocation(k,$),locationSize:ce}}return H}(n,m)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=im++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=S,this}let hm=0;class um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dm(e),t.set(e,i)),i}}class dm{constructor(e){this.id=hm++,this.code=e,this.usedTimes=0}}function pm(r,e,t,i,n,s,a){let o=new xs,l=new um,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(m,v,y,x,_){let b=x.fog,S=_.geometry,T=m.isMeshStandardMaterial?x.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),O=D&&D.mapping===306?D.image.height:null,k=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let H=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,N=H!==void 0?H.length:0,Q,re,$,ce,le=0;if(S.morphAttributes.position!==void 0&&(le=1),S.morphAttributes.normal!==void 0&&(le=2),S.morphAttributes.color!==void 0&&(le=3),k){let te=li[k];Q=te.vertexShader,re=te.fragmentShader}else Q=m.vertexShader,re=m.fragmentShader,l.update(m),$=l.getVertexShaderID(m),ce=l.getFragmentShaderID(m);let j=r.getRenderTarget(),Z=m.alphaTest>0,se=m.clearcoat>0,ee=m.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:m.type,vertexShader:Q,fragmentShader:re,defines:m.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,instancing:_.isInstancedMesh===!0,instancingColor:_.isInstancedMesh===!0&&_.instanceColor!==null,supportsVertexTextures:d,outputEncoding:j===null?r.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:3e3,map:!!m.map,matcap:!!m.matcap,envMap:!!D,envMapMode:D&&D.mapping,envMapCubeUVHeight:O,lightMap:!!m.lightMap,aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,decodeVideoTexture:!!m.map&&m.map.isVideoTexture===!0&&m.map.encoding===3001,clearcoat:se,clearcoatMap:se&&!!m.clearcoatMap,clearcoatRoughnessMap:se&&!!m.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!m.clearcoatNormalMap,iridescence:ee,iridescenceMap:ee&&!!m.iridescenceMap,iridescenceThicknessMap:ee&&!!m.iridescenceThicknessMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,specularIntensityMap:!!m.specularIntensityMap,specularColorMap:!!m.specularColorMap,opaque:m.transparent===!1&&m.blending===1,alphaMap:!!m.alphaMap,alphaTest:Z,gradientMap:!!m.gradientMap,sheen:m.sheen>0,sheenColorMap:!!m.sheenColorMap,sheenRoughnessMap:!!m.sheenRoughnessMap,transmission:m.transmission>0,transmissionMap:!!m.transmissionMap,thicknessMap:!!m.thicknessMap,combine:m.combine,vertexTangents:!!m.normalMap&&!!S.attributes.tangent,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.displacementMap||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheenColorMap||m.sheenRoughnessMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.transmission>0||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheen>0||m.sheenColorMap||m.sheenRoughnessMap||!m.displacementMap),fog:!!b,useFog:m.fog===!0,fogExp2:b&&b.isFogExp2,flatShading:!!m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:u,skinning:_.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&y.length>0,shadowMapType:r.shadowMap.type,toneMapping:m.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:!!m.depthPacking,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let y in m.defines)v.push(y),v.push(m.defines[y]);return m.isRawShaderMaterial===!1&&(function(y,x){y.push(x.precision),y.push(x.outputEncoding),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.combine),y.push(x.vertexUvs),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}(v,m),function(y,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.map&&o.enable(4),x.matcap&&o.enable(5),x.envMap&&o.enable(6),x.lightMap&&o.enable(7),x.aoMap&&o.enable(8),x.emissiveMap&&o.enable(9),x.bumpMap&&o.enable(10),x.normalMap&&o.enable(11),x.objectSpaceNormalMap&&o.enable(12),x.tangentSpaceNormalMap&&o.enable(13),x.clearcoat&&o.enable(14),x.clearcoatMap&&o.enable(15),x.clearcoatRoughnessMap&&o.enable(16),x.clearcoatNormalMap&&o.enable(17),x.iridescence&&o.enable(18),x.iridescenceMap&&o.enable(19),x.iridescenceThicknessMap&&o.enable(20),x.displacementMap&&o.enable(21),x.specularMap&&o.enable(22),x.roughnessMap&&o.enable(23),x.metalnessMap&&o.enable(24),x.gradientMap&&o.enable(25),x.alphaMap&&o.enable(26),x.alphaTest&&o.enable(27),x.vertexColors&&o.enable(28),x.vertexAlphas&&o.enable(29),x.vertexUvs&&o.enable(30),x.vertexTangents&&o.enable(31),x.uvsVertexOnly&&o.enable(32),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.physicallyCorrectLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.specularIntensityMap&&o.enable(15),x.specularColorMap&&o.enable(16),x.transmission&&o.enable(17),x.transmissionMap&&o.enable(18),x.thicknessMap&&o.enable(19),x.sheen&&o.enable(20),x.sheenColorMap&&o.enable(21),x.sheenRoughnessMap&&o.enable(22),x.decodeVideoTexture&&o.enable(23),x.opaque&&o.enable(24),y.push(o.mask)}(v,m),v.push(r.outputEncoding)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=f[m.type],y;if(v){let x=li[v];y=sc.clone(x.uniforms)}else y=m.uniforms;return y},acquireProgram:function(m,v){let y;for(let x=0,_=c.length;x<_;x++){let b=c[x];if(b.cacheKey===v){y=b,++y.usedTimes;break}}return y===void 0&&(y=new cm(r,v,m,s),c.push(y)),y},releaseProgram:function(m){if(--m.usedTimes==0){let v=c.indexOf(m);c[v]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function mm(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function fm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Pc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Dc(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.push(d):l.transparent===!0?n.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?i.unshift(d):l.transparent===!0?n.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||fm),i.length>1&&i.sort(o||Pc),n.length>1&&n.sort(o||Pc)}}}function gm(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new Dc,r.set(e,[n])):t>=i.length?(n=new Dc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function vm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new fe};break;case"SpotLight":t={position:new E,direction:new E,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new E,halfWidth:new E,halfHeight:new E}}return r[e.id]=t,t}}}let xm=0;function ym(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function _m(r,e){let t=new vm,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)n.probe.push(new E);let s=new E,a=new De,o=new De;return{setup:function(l,c){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let p=0,f=0,m=0,v=0,y=0,x=0,_=0,b=0,S=0,T=0;l.sort(ym);let D=c!==!0?Math.PI:1;for(let k=0,H=l.length;k<H;k++){let N=l[k],Q=N.color,re=N.intensity,$=N.distance,ce=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=Q.r*re*D,u+=Q.g*re*D,d+=Q.b*re*D;else if(N.isLightProbe)for(let le=0;le<9;le++)n.probe[le].addScaledVector(N.sh.coefficients[le],re);else if(N.isDirectionalLight){let le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*D),N.castShadow){let j=N.shadow,Z=i.get(N);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=ce,n.directionalShadowMatrix[p]=N.shadow.matrix,x++}n.directional[p]=le,p++}else if(N.isSpotLight){let le=t.get(N);le.position.setFromMatrixPosition(N.matrixWorld),le.color.copy(Q).multiplyScalar(re*D),le.distance=$,le.coneCos=Math.cos(N.angle),le.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),le.decay=N.decay,n.spot[m]=le;let j=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,j.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[m]=j.matrix,N.castShadow){let Z=i.get(N);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.spotShadow[m]=Z,n.spotShadowMap[m]=ce,b++}m++}else if(N.isRectAreaLight){let le=t.get(N);le.color.copy(Q).multiplyScalar(re),le.halfWidth.set(.5*N.width,0,0),le.halfHeight.set(0,.5*N.height,0),n.rectArea[v]=le,v++}else if(N.isPointLight){let le=t.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity*D),le.distance=N.distance,le.decay=N.decay,N.castShadow){let j=N.shadow,Z=i.get(N);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=ce,n.pointShadowMatrix[f]=N.shadow.matrix,_++}n.point[f]=le,f++}else if(N.isHemisphereLight){let le=t.get(N);le.skyColor.copy(N.color).multiplyScalar(re*D),le.groundColor.copy(N.groundColor).multiplyScalar(re*D),n.hemi[y]=le,y++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;O.directionalLength===p&&O.pointLength===f&&O.spotLength===m&&O.rectAreaLength===v&&O.hemiLength===y&&O.numDirectionalShadows===x&&O.numPointShadows===_&&O.numSpotShadows===b&&O.numSpotMaps===S||(n.directional.length=p,n.spot.length=m,n.rectArea.length=v,n.point.length=f,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,O.directionalLength=p,O.pointLength=f,O.spotLength=m,O.rectAreaLength=v,O.hemiLength=y,O.numDirectionalShadows=x,O.numPointShadows=_,O.numSpotShadows=b,O.numSpotMaps=S,n.version=xm++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0,m=c.matrixWorldInverse;for(let v=0,y=l.length;v<y;v++){let x=l[v];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),a.copy(x.matrixWorld),a.premultiply(m),o.extractRotation(a),_.halfWidth.set(.5*x.width,0,0),_.halfHeight.set(0,.5*x.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){let _=n.hemi[f];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),f++}}},state:n}}function Ic(r,e){let t=new _m(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function bm(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new Ic(r,e),t.set(i,[a])):n>=s.length?(a=new Ic(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}class _o extends Rt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bo extends Rt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new E,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Mm(r,e,t){let i=new Ps,n=new ne,s=new ne,a=new $e,o=new _o({depthPacking:3201}),l=new bo,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Fe;f.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new At(f,d),v=this;function y(b,S){let T=e.update(m);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $t(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(S,null,T,d,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(S,null,T,p,m,null)}function x(b,S,T,D,O,k){let H=null,N=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H=N!==void 0?N:T.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){let Q=H.uuid,re=S.uuid,$=c[Q];$===void 0&&($={},c[Q]=$);let ce=$[re];ce===void 0&&(ce=H.clone(),$[re]=ce),H=ce}return H.visible=S.visible,H.wireframe=S.wireframe,H.side=k===3?S.shadowSide!==null?S.shadowSide:S.side:S.shadowSide!==null?S.shadowSide:u[S.side],H.alphaMap=S.alphaMap,H.alphaTest=S.alphaTest,H.clipShadows=S.clipShadows,H.clippingPlanes=S.clippingPlanes,H.clipIntersection=S.clipIntersection,H.displacementMap=S.displacementMap,H.displacementScale=S.displacementScale,H.displacementBias=S.displacementBias,H.wireframeLinewidth=S.wireframeLinewidth,H.linewidth=S.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(H.referencePosition.setFromMatrixPosition(T.matrixWorld),H.nearDistance=D,H.farDistance=O),H}function _(b,S,T,D,O){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&O===3)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let H=e.update(b),N=b.material;if(Array.isArray(N)){let Q=H.groups;for(let re=0,$=Q.length;re<$;re++){let ce=Q[re],le=N[ce.materialIndex];if(le&&le.visible){let j=x(b,le,D,T.near,T.far,O);r.renderBufferDirect(T,null,H,j,b,ce)}}}else if(N.visible){let Q=x(b,N,D,T.near,T.far,O);r.renderBufferDirect(T,null,H,Q,b,null)}}let k=b.children;for(let H=0,N=k.length;H<N;H++)_(k[H],S,T,D,O)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(b,S,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;let D=r.getRenderTarget(),O=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let N=0,Q=b.length;N<Q;N++){let re=b[N],$=re.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;n.copy($.mapSize);let ce=$.getFrameExtents();if(n.multiply(ce),s.copy($.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ce.x),n.x=s.x*ce.x,$.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ce.y),n.y=s.y*ce.y,$.mapSize.y=s.y)),$.map===null){let j=this.type!==3?{minFilter:1003,magFilter:1003}:{};$.map=new $t(n.x,n.y,j),$.map.texture.name=re.name+".shadowMap",$.camera.updateProjectionMatrix()}r.setRenderTarget($.map),r.clear();let le=$.getViewportCount();for(let j=0;j<le;j++){let Z=$.getViewport(j);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),H.viewport(a),$.updateMatrices(re,j),i=$.getFrustum(),_(S,T,$.camera,re,this.type)}$.isPointLightShadow!==!0&&this.type===3&&y($,T),$.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(D,O,k)}}function wm(r,e,t){let i=t.isWebGL2,n=new function(){let A=!1,F=new $e,z=null,Y=new $e(0,0,0,0);return{setMask:function(q){z===q||A||(r.colorMask(q,q,q,q),z=q)},setLocked:function(q){A=q},setClear:function(q,K,pe,_e,Ae){Ae===!0&&(q*=_e,K*=_e,pe*=_e),F.set(q,K,pe,_e),Y.equals(F)===!1&&(r.clearColor(q,K,pe,_e),Y.copy(F))},reset:function(){A=!1,z=null,Y.set(-1,0,0,0)}}},s=new function(){let A=!1,F=null,z=null,Y=null;return{setTest:function(q){q?be(2929):Oe(2929)},setMask:function(q){F===q||A||(r.depthMask(q),F=q)},setFunc:function(q){if(z!==q){switch(q){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:default:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517)}z=q}},setLocked:function(q){A=q},setClear:function(q){Y!==q&&(r.clearDepth(q),Y=q)},reset:function(){A=!1,F=null,z=null,Y=null}}},a=new function(){let A=!1,F=null,z=null,Y=null,q=null,K=null,pe=null,_e=null,Ae=null;return{setTest:function(me){A||(me?be(2960):Oe(2960))},setMask:function(me){F===me||A||(r.stencilMask(me),F=me)},setFunc:function(me,Le,Ue){z===me&&Y===Le&&q===Ue||(r.stencilFunc(me,Le,Ue),z=me,Y=Le,q=Ue)},setOp:function(me,Le,Ue){K===me&&pe===Le&&_e===Ue||(r.stencilOp(me,Le,Ue),K=me,pe=Le,_e=Ue)},setLocked:function(me){A=me},setClear:function(me){Ae!==me&&(r.clearStencil(me),Ae=me)},reset:function(){A=!1,F=null,z=null,Y=null,q=null,K=null,pe=null,_e=null,Ae=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,f=!1,m=null,v=null,y=null,x=null,_=null,b=null,S=null,T=!1,D=null,O=null,k=null,H=null,N=null,Q=r.getParameter(35661),re=!1,$=0,ce=r.getParameter(7938);ce.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ce)[1]),re=$>=1):ce.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),re=$>=2);let le=null,j={},Z=r.getParameter(3088),se=r.getParameter(2978),ee=new $e().fromArray(Z),te=new $e().fromArray(se);function ye(A,F,z){let Y=new Uint8Array(4),q=r.createTexture();r.bindTexture(A,q),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let K=0;K<z;K++)r.texImage2D(F+K,0,6408,1,1,0,6408,5121,Y);return q}let ze={};function be(A){c[A]!==!0&&(r.enable(A),c[A]=!0)}function Oe(A){c[A]!==!1&&(r.disable(A),c[A]=!1)}ze[3553]=ye(3553,3553,1),ze[34067]=ye(34067,34069,6),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),be(2929),s.setFunc(3),U(!1),R(1),be(2884),G(0);let P={[100]:32774,101:32778,102:32779};if(i)P[103]=32775,P[104]=32776;else{let A=e.get("EXT_blend_minmax");A!==null&&(P[103]=A.MIN_EXT,P[104]=A.MAX_EXT)}let C={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function G(A,F,z,Y,q,K,pe,_e){if(A!==0){if(f===!1&&(be(3042),f=!0),A===5)q=q||F,K=K||z,pe=pe||Y,F===v&&q===_||(r.blendEquationSeparate(P[F],P[q]),v=F,_=q),z===y&&Y===x&&K===b&&pe===S||(r.blendFuncSeparate(C[z],C[Y],C[K],C[pe]),y=z,x=Y,b=K,S=pe),m=A,T=null;else if(A!==m||_e!==T){if(v===100&&_===100||(r.blendEquation(32774),v=100,_=100),_e)switch(A){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}else switch(A){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A)}y=null,x=null,b=null,S=null,m=A,T=_e}}else f===!0&&(Oe(3042),f=!1)}function U(A){D!==A&&(A?r.frontFace(2304):r.frontFace(2305),D=A)}function R(A){A!==0?(be(2884),A!==O&&(A===1?r.cullFace(1029):A===2?r.cullFace(1028):r.cullFace(1032))):Oe(2884),O=A}function B(A,F,z){A?(be(32823),H===F&&N===z||(r.polygonOffset(F,z),H=F,N=z)):Oe(32823)}return{buffers:{color:n,depth:s,stencil:a},enable:be,disable:Oe,bindFramebuffer:function(A,F){return h[A]!==F&&(r.bindFramebuffer(A,F),h[A]=F,i&&(A===36009&&(h[36160]=F),A===36160&&(h[36009]=F)),!0)},drawBuffers:function(A,F){let z=d,Y=!1;if(A)if(z=u.get(F),z===void 0&&(z=[],u.set(F,z)),A.isWebGLMultipleRenderTargets){let q=A.texture;if(z.length!==q.length||z[0]!==36064){for(let K=0,pe=q.length;K<pe;K++)z[K]=36064+K;z.length=q.length,Y=!0}}else z[0]!==36064&&(z[0]=36064,Y=!0);else z[0]!==1029&&(z[0]=1029,Y=!0);Y&&(t.isWebGL2?r.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(A){return p!==A&&(r.useProgram(A),p=A,!0)},setBlending:G,setMaterial:function(A,F){A.side===2?Oe(2884):be(2884);let z=A.side===1;F&&(z=!z),U(z),A.blending===1&&A.transparent===!1?G(0):G(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),s.setFunc(A.depthFunc),s.setTest(A.depthTest),s.setMask(A.depthWrite),n.setMask(A.colorWrite);let Y=A.stencilWrite;a.setTest(Y),Y&&(a.setMask(A.stencilWriteMask),a.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),a.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),B(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?be(32926):Oe(32926)},setFlipSided:U,setCullFace:R,setLineWidth:function(A){A!==k&&(re&&r.lineWidth(A),k=A)},setPolygonOffset:B,setScissorTest:function(A){A?be(3089):Oe(3089)},activeTexture:function(A){A===void 0&&(A=33984+Q-1),le!==A&&(r.activeTexture(A),le=A)},bindTexture:function(A,F,z){z===void 0&&(z=le===null?33984+Q-1:le);let Y=j[z];Y===void 0&&(Y={type:void 0,texture:void 0},j[z]=Y),Y.type===A&&Y.texture===F||(le!==z&&(r.activeTexture(z),le=z),r.bindTexture(A,F||ze[A]),Y.type=A,Y.texture=F)},unbindTexture:function(){let A=j[le];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},updateUBOMapping:function(A,F){let z=l.get(F);z===void 0&&(z=new WeakMap,l.set(F,z));let Y=z.get(A);Y===void 0&&(Y=r.getUniformBlockIndex(F,A.name),z.set(A,Y))},uniformBlockBinding:function(A,F){let z=l.get(F).get(A);o.get(A)!==z&&(r.uniformBlockBinding(F,z,A.__bindingPointIndex),o.set(A,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}},scissor:function(A){ee.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),ee.copy(A))},viewport:function(A){te.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),te.copy(A))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),i===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},le=null,j={},h={},u=new WeakMap,d=[],p=null,f=!1,m=null,v=null,y=null,x=null,_=null,b=null,S=null,T=!1,D=null,O=null,k=null,H=null,N=null,ee.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Sm(r,e,t,i,n,s,a){let o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),f=new WeakMap,m,v=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,C){return y?new OffscreenCanvas(P,C):lr("canvas")}function _(P,C,G,U){let R=1;if((P.width>U||P.height>U)&&(R=U/Math.max(P.width,P.height)),R<1||C===!0){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){let B=C?ls:Math.floor,A=B(R*P.width),F=B(R*P.height);m===void 0&&(m=x(A,F));let z=G?x(A,F):m;return z.width=A,z.height=F,z.getContext("2d").drawImage(P,0,0,A,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+A+"x"+F+")."),z}return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P}return P}function b(P){return Va(P.width)&&Va(P.height)}function S(P,C){return P.generateMipmaps&&C&&P.minFilter!==1003&&P.minFilter!==1006}function T(P){r.generateMipmap(P)}function D(P,C,G,U,R=!1){if(o===!1)return C;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let B=C;return C===6403&&(G===5126&&(B=33326),G===5131&&(B=33325),G===5121&&(B=33321)),C===33319&&(G===5126&&(B=33328),G===5131&&(B=33327),G===5121&&(B=33323)),C===6408&&(G===5126&&(B=34836),G===5131&&(B=34842),G===5121&&(B=U===3001&&R===!1?35907:32856),G===32819&&(B=32854),G===32820&&(B=32855)),B!==33325&&B!==33326&&B!==33327&&B!==33328&&B!==34842&&B!==34836||e.get("EXT_color_buffer_float"),B}function O(P,C,G){return S(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==1003&&P.minFilter!==1006?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function k(P){return P===1003||P===1004||P===1005?9728:9729}function H(P){let C=P.target;C.removeEventListener("dispose",H),function(G){let U=i.get(G);if(U.__webglInit===void 0)return;let R=G.source,B=v.get(R);if(B){let A=B[U.__cacheKey];A.usedTimes--,A.usedTimes===0&&Q(G),Object.keys(B).length===0&&v.delete(R)}i.remove(G)}(C),C.isVideoTexture&&f.delete(C)}function N(P){let C=P.target;C.removeEventListener("dispose",N),function(G){let U=G.texture,R=i.get(G),B=i.get(U);if(B.__webglTexture!==void 0&&(r.deleteTexture(B.__webglTexture),a.memory.textures--),G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let A=0;A<6;A++)r.deleteFramebuffer(R.__webglFramebuffer[A]),R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[A]);else{if(r.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let A=0;A<R.__webglColorRenderbuffer.length;A++)R.__webglColorRenderbuffer[A]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[A]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(G.isWebGLMultipleRenderTargets)for(let A=0,F=U.length;A<F;A++){let z=i.get(U[A]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(U[A])}i.remove(U),i.remove(G)}(C)}function Q(P){let C=i.get(P);r.deleteTexture(C.__webglTexture);let G=P.source;delete v.get(G)[C.__cacheKey],a.memory.textures--}let re=0;function $(P,C){let G=i.get(P);if(P.isVideoTexture&&function(U){let R=a.render.frame;f.get(U)!==R&&(f.set(U,R),U.update())}(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){let U=P.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void se(G,P,C);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(3553,G.__webglTexture,33984+C)}let ce={[1e3]:10497,[1001]:33071,[1002]:33648},le={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function j(P,C,G){if(G?(r.texParameteri(P,10242,ce[C.wrapS]),r.texParameteri(P,10243,ce[C.wrapT]),P!==32879&&P!==35866||r.texParameteri(P,32882,ce[C.wrapR]),r.texParameteri(P,10240,le[C.magFilter]),r.texParameteri(P,10241,le[C.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),P!==32879&&P!==35866||r.texParameteri(P,32882,33071),C.wrapS===1001&&C.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,k(C.magFilter)),r.texParameteri(P,10241,k(C.minFilter)),C.minFilter!==1003&&C.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let U=e.get("EXT_texture_filter_anisotropic");if(C.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(r.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function Z(P,C){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",H));let U=C.source,R=v.get(U);R===void 0&&(R={},v.set(U,R));let B=function(A){let F=[];return F.push(A.wrapS),F.push(A.wrapT),F.push(A.wrapR||0),F.push(A.magFilter),F.push(A.minFilter),F.push(A.anisotropy),F.push(A.internalFormat),F.push(A.format),F.push(A.type),F.push(A.generateMipmaps),F.push(A.premultiplyAlpha),F.push(A.flipY),F.push(A.unpackAlignment),F.push(A.encoding),F.join()}(C);if(B!==P.__cacheKey){R[B]===void 0&&(R[B]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),R[B].usedTimes++;let A=R[P.__cacheKey];A!==void 0&&(R[P.__cacheKey].usedTimes--,A.usedTimes===0&&Q(C)),P.__cacheKey=B,P.__webglTexture=R[B].texture}return G}function se(P,C,G){let U=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(U=35866),C.isData3DTexture&&(U=32879);let R=Z(P,C),B=C.source;t.bindTexture(U,P.__webglTexture,33984+G);let A=i.get(B);if(B.version!==A.__version||R===!0){t.activeTexture(33984+G),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);let F=function(Re){return!o&&(Re.wrapS!==1001||Re.wrapT!==1001||Re.minFilter!==1003&&Re.minFilter!==1006)}(C)&&b(C.image)===!1,z=_(C.image,F,!1,h);z=Oe(C,z);let Y=b(z)||o,q=s.convert(C.format,C.encoding),K,pe=s.convert(C.type),_e=D(C.internalFormat,q,pe,C.encoding,C.isVideoTexture);j(U,C,Y);let Ae=C.mipmaps,me=o&&C.isVideoTexture!==!0,Le=A.__version===void 0||R===!0,Ue=O(C,z,Y);if(C.isDepthTexture)_e=6402,o?_e=C.type===1015?36012:C.type===1014?33190:C.type===1020?35056:33189:C.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===1026&&_e===6402&&C.type!==1012&&C.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=1014,pe=s.convert(C.type)),C.format===1027&&_e===6402&&(_e=34041,C.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=1020,pe=s.convert(C.type))),Le&&(me?t.texStorage2D(3553,1,_e,z.width,z.height):t.texImage2D(3553,0,_e,z.width,z.height,0,q,pe,null));else if(C.isDataTexture)if(Ae.length>0&&Y){me&&Le&&t.texStorage2D(3553,Ue,_e,Ae[0].width,Ae[0].height);for(let Re=0,st=Ae.length;Re<st;Re++)K=Ae[Re],me?t.texSubImage2D(3553,Re,0,0,K.width,K.height,q,pe,K.data):t.texImage2D(3553,Re,_e,K.width,K.height,0,q,pe,K.data);C.generateMipmaps=!1}else me?(Le&&t.texStorage2D(3553,Ue,_e,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,q,pe,z.data)):t.texImage2D(3553,0,_e,z.width,z.height,0,q,pe,z.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){me&&Le&&t.texStorage3D(35866,Ue,_e,Ae[0].width,Ae[0].height,z.depth);for(let Re=0,st=Ae.length;Re<st;Re++)K=Ae[Re],C.format!==1023?q!==null?me?t.compressedTexSubImage3D(35866,Re,0,0,0,K.width,K.height,z.depth,q,K.data,0,0):t.compressedTexImage3D(35866,Re,_e,K.width,K.height,z.depth,0,K.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(35866,Re,0,0,0,K.width,K.height,z.depth,q,pe,K.data):t.texImage3D(35866,Re,_e,K.width,K.height,z.depth,0,q,pe,K.data)}else{me&&Le&&t.texStorage2D(3553,Ue,_e,Ae[0].width,Ae[0].height);for(let Re=0,st=Ae.length;Re<st;Re++)K=Ae[Re],C.format!==1023?q!==null?me?t.compressedTexSubImage2D(3553,Re,0,0,K.width,K.height,q,K.data):t.compressedTexImage2D(3553,Re,_e,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(3553,Re,0,0,K.width,K.height,q,pe,K.data):t.texImage2D(3553,Re,_e,K.width,K.height,0,q,pe,K.data)}else if(C.isDataArrayTexture)me?(Le&&t.texStorage3D(35866,Ue,_e,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,q,pe,z.data)):t.texImage3D(35866,0,_e,z.width,z.height,z.depth,0,q,pe,z.data);else if(C.isData3DTexture)me?(Le&&t.texStorage3D(32879,Ue,_e,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,q,pe,z.data)):t.texImage3D(32879,0,_e,z.width,z.height,z.depth,0,q,pe,z.data);else if(C.isFramebufferTexture){if(Le)if(me)t.texStorage2D(3553,Ue,_e,z.width,z.height);else{let Re=z.width,st=z.height;for(let Xt=0;Xt<Ue;Xt++)t.texImage2D(3553,Xt,_e,Re,st,0,q,pe,null),Re>>=1,st>>=1}}else if(Ae.length>0&&Y){me&&Le&&t.texStorage2D(3553,Ue,_e,Ae[0].width,Ae[0].height);for(let Re=0,st=Ae.length;Re<st;Re++)K=Ae[Re],me?t.texSubImage2D(3553,Re,0,0,q,pe,K):t.texImage2D(3553,Re,_e,q,pe,K);C.generateMipmaps=!1}else me?(Le&&t.texStorage2D(3553,Ue,_e,z.width,z.height),t.texSubImage2D(3553,0,0,0,q,pe,z)):t.texImage2D(3553,0,_e,q,pe,z);S(C,Y)&&T(U),A.__version=B.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ee(P,C,G,U,R){let B=s.convert(G.format,G.encoding),A=s.convert(G.type),F=D(G.internalFormat,B,A,G.encoding);i.get(C).__hasExternalTextures||(R===32879||R===35866?t.texImage3D(R,0,F,C.width,C.height,C.depth,0,B,A,null):t.texImage2D(R,0,F,C.width,C.height,0,B,A,null)),t.bindFramebuffer(36160,P),be(C)?d.framebufferTexture2DMultisampleEXT(36160,U,R,i.get(G).__webglTexture,0,ze(C)):(R===3553||R>=34069&&R<=34074)&&r.framebufferTexture2D(36160,U,R,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function te(P,C,G){if(r.bindRenderbuffer(36161,P),C.depthBuffer&&!C.stencilBuffer){let U=33189;if(G||be(C)){let R=C.depthTexture;R&&R.isDepthTexture&&(R.type===1015?U=36012:R.type===1014&&(U=33190));let B=ze(C);be(C)?d.renderbufferStorageMultisampleEXT(36161,B,U,C.width,C.height):r.renderbufferStorageMultisample(36161,B,U,C.width,C.height)}else r.renderbufferStorage(36161,U,C.width,C.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(C.depthBuffer&&C.stencilBuffer){let U=ze(C);G&&be(C)===!1?r.renderbufferStorageMultisample(36161,U,35056,C.width,C.height):be(C)?d.renderbufferStorageMultisampleEXT(36161,U,35056,C.width,C.height):r.renderbufferStorage(36161,34041,C.width,C.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{let U=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let R=0;R<U.length;R++){let B=U[R],A=s.convert(B.format,B.encoding),F=s.convert(B.type),z=D(B.internalFormat,A,F,B.encoding),Y=ze(C);G&&be(C)===!1?r.renderbufferStorageMultisample(36161,Y,z,C.width,C.height):be(C)?d.renderbufferStorageMultisampleEXT(36161,Y,z,C.width,C.height):r.renderbufferStorage(36161,z,C.width,C.height)}}r.bindRenderbuffer(36161,null)}function ye(P){let C=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");(function(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,U),!R.depthTexture||!R.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(R.depthTexture).__webglTexture&&R.depthTexture.image.width===R.width&&R.depthTexture.image.height===R.height||(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),$(R.depthTexture,0);let B=i.get(R.depthTexture).__webglTexture,A=ze(R);if(R.depthTexture.format===1026)be(R)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,A):r.framebufferTexture2D(36160,36096,3553,B,0);else{if(R.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");be(R)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,A):r.framebufferTexture2D(36160,33306,3553,B,0)}})(C.__webglFramebuffer,P)}else if(G){C.__webglDepthbuffer=[];for(let U=0;U<6;U++)t.bindFramebuffer(36160,C.__webglFramebuffer[U]),C.__webglDepthbuffer[U]=r.createRenderbuffer(),te(C.__webglDepthbuffer[U],P,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=r.createRenderbuffer(),te(C.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function ze(P){return Math.min(u,P.samples)}function be(P){let C=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Oe(P,C){let G=P.encoding,U=P.format,R=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===1035||G!==3e3&&(G===3001?o===!1?e.has("EXT_sRGB")===!0&&U===1023?(P.format=1035,P.minFilter=1006,P.generateMipmaps=!1):C=ja.sRGBToLinear(C):U===1023&&R===1009||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),C}this.allocateTextureUnit=function(){let P=re;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),re+=1,P},this.resetTextureUnits=function(){re=0},this.setTexture2D=$,this.setTexture2DArray=function(P,C){let G=i.get(P);P.version>0&&G.__version!==P.version?se(G,P,C):t.bindTexture(35866,G.__webglTexture,33984+C)},this.setTexture3D=function(P,C){let G=i.get(P);P.version>0&&G.__version!==P.version?se(G,P,C):t.bindTexture(32879,G.__webglTexture,33984+C)},this.setTextureCube=function(P,C){let G=i.get(P);P.version>0&&G.__version!==P.version?function(U,R,B){if(R.image.length!==6)return;let A=Z(U,R),F=R.source;t.bindTexture(34067,U.__webglTexture,33984+B);let z=i.get(F);if(F.version!==z.__version||A===!0){t.activeTexture(33984+B),r.pixelStorei(37440,R.flipY),r.pixelStorei(37441,R.premultiplyAlpha),r.pixelStorei(3317,R.unpackAlignment),r.pixelStorei(37443,0);let Y=R.isCompressedTexture||R.image[0].isCompressedTexture,q=R.image[0]&&R.image[0].isDataTexture,K=[];for(let Se=0;Se<6;Se++)K[Se]=Y||q?q?R.image[Se].image:R.image[Se]:_(R.image[Se],!1,!0,c),K[Se]=Oe(R,K[Se]);let pe=K[0],_e=b(pe)||o,Ae=s.convert(R.format,R.encoding),me=s.convert(R.type),Le=D(R.internalFormat,Ae,me,R.encoding),Ue=o&&R.isVideoTexture!==!0,Re=z.__version===void 0||A===!0,st,Xt=O(R,pe,_e);if(j(34067,R,_e),Y){Ue&&Re&&t.texStorage2D(34067,Xt,Le,pe.width,pe.height);for(let Se=0;Se<6;Se++){st=K[Se].mipmaps;for(let nt=0;nt<st.length;nt++){let rt=st[nt];R.format!==1023?Ae!==null?Ue?t.compressedTexSubImage2D(34069+Se,nt,0,0,rt.width,rt.height,Ae,rt.data):t.compressedTexImage2D(34069+Se,nt,Le,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(34069+Se,nt,0,0,rt.width,rt.height,Ae,me,rt.data):t.texImage2D(34069+Se,nt,Le,rt.width,rt.height,0,Ae,me,rt.data)}}}else{st=R.mipmaps,Ue&&Re&&(st.length>0&&Xt++,t.texStorage2D(34067,Xt,Le,K[0].width,K[0].height));for(let Se=0;Se<6;Se++)if(q){Ue?t.texSubImage2D(34069+Se,0,0,0,K[Se].width,K[Se].height,Ae,me,K[Se].data):t.texImage2D(34069+Se,0,Le,K[Se].width,K[Se].height,0,Ae,me,K[Se].data);for(let nt=0;nt<st.length;nt++){let rt=st[nt].image[Se].image;Ue?t.texSubImage2D(34069+Se,nt+1,0,0,rt.width,rt.height,Ae,me,rt.data):t.texImage2D(34069+Se,nt+1,Le,rt.width,rt.height,0,Ae,me,rt.data)}}else{Ue?t.texSubImage2D(34069+Se,0,0,0,Ae,me,K[Se]):t.texImage2D(34069+Se,0,Le,Ae,me,K[Se]);for(let nt=0;nt<st.length;nt++){let rt=st[nt];Ue?t.texSubImage2D(34069+Se,nt+1,0,0,Ae,me,rt.image[Se]):t.texImage2D(34069+Se,nt+1,Le,Ae,me,rt.image[Se])}}}S(R,_e)&&T(34067),z.__version=F.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}(G,P,C):t.bindTexture(34067,G.__webglTexture,33984+C)},this.rebindTextures=function(P,C,G){let U=i.get(P);C!==void 0&&ee(U.__webglFramebuffer,P,P.texture,36064,3553),G!==void 0&&ye(P)},this.setupRenderTarget=function(P){let C=P.texture,G=i.get(P),U=i.get(C);P.addEventListener("dispose",N),P.isWebGLMultipleRenderTargets!==!0&&(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=C.version,a.memory.textures++);let R=P.isWebGLCubeRenderTarget===!0,B=P.isWebGLMultipleRenderTargets===!0,A=b(P)||o;if(R){G.__webglFramebuffer=[];for(let F=0;F<6;F++)G.__webglFramebuffer[F]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),B)if(n.drawBuffers){let F=P.texture;for(let z=0,Y=F.length;z<Y;z++){let q=i.get(F[z]);q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&be(P)===!1){let F=B?C:[C];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let z=0;z<F.length;z++){let Y=F[z];G.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[z]);let q=s.convert(Y.format,Y.encoding),K=s.convert(Y.type),pe=D(Y.internalFormat,q,K,Y.encoding,P.isXRRenderTarget===!0),_e=ze(P);r.renderbufferStorageMultisample(36161,_e,pe,P.width,P.height),r.framebufferRenderbuffer(36160,36064+z,36161,G.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),te(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(R){t.bindTexture(34067,U.__webglTexture),j(34067,C,A);for(let F=0;F<6;F++)ee(G.__webglFramebuffer[F],P,C,36064,34069+F);S(C,A)&&T(34067),t.unbindTexture()}else if(B){let F=P.texture;for(let z=0,Y=F.length;z<Y;z++){let q=F[z],K=i.get(q);t.bindTexture(3553,K.__webglTexture),j(3553,q,A),ee(G.__webglFramebuffer,P,q,36064+z,3553),S(q,A)&&T(3553)}t.unbindTexture()}else{let F=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?F=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(F,U.__webglTexture),j(F,C,A),ee(G.__webglFramebuffer,P,C,36064,F),S(C,A)&&T(F),t.unbindTexture()}P.depthBuffer&&ye(P)},this.updateRenderTargetMipmap=function(P){let C=b(P)||o,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let U=0,R=G.length;U<R;U++){let B=G[U];if(S(B,C)){let A=P.isWebGLCubeRenderTarget?34067:3553,F=i.get(B).__webglTexture;t.bindTexture(A,F),T(A),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(P){if(o&&P.samples>0&&be(P)===!1){let C=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,U=P.height,R=16384,B=[],A=P.stencilBuffer?33306:36096,F=i.get(P),z=P.isWebGLMultipleRenderTargets===!0;if(z)for(let Y=0;Y<C.length;Y++)t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Y,36161,null),t.bindFramebuffer(36160,F.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Y,3553,null,0);t.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,F.__webglFramebuffer);for(let Y=0;Y<C.length;Y++){B.push(36064+Y),P.depthBuffer&&B.push(A);let q=F.__ignoreDepthValues!==void 0&&F.__ignoreDepthValues;if(q===!1&&(P.depthBuffer&&(R|=256),P.stencilBuffer&&(R|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,F.__webglColorRenderbuffer[Y]),q===!0&&(r.invalidateFramebuffer(36008,[A]),r.invalidateFramebuffer(36009,[A])),z){let K=i.get(C[Y]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,K,0)}r.blitFramebuffer(0,0,G,U,0,0,G,U,R,9728),p&&r.invalidateFramebuffer(36008,B)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let Y=0;Y<C.length;Y++){t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Y,36161,F.__webglColorRenderbuffer[Y]);let q=i.get(C[Y]).__webglTexture;t.bindFramebuffer(36160,F.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Y,3553,q,0)}t.bindFramebuffer(36009,F.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=be}function Oc(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=null){let a;if(n===1009)return 5121;if(n===1017)return 32819;if(n===1018)return 32820;if(n===1010)return 5120;if(n===1011)return 5122;if(n===1012)return 5123;if(n===1013)return 5124;if(n===1014)return 5125;if(n===1015)return 5126;if(n===1016)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return 6406;if(n===1023)return 6408;if(n===1024)return 6409;if(n===1025)return 6410;if(n===1026)return 6402;if(n===1027)return 34041;if(n===1028)return 6403;if(n===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1029)return 36244;if(n===1030)return 33319;if(n===1031)return 33320;if(n===1033)return 36249;if(n===33776||n===33777||n===33778||n===33779)if(s===3001){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===35840||n===35841||n===35842||n===35843){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===37492||n===37496){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===37492)return s===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===37808)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===36492){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===36492)return s===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}return n===1020?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}class Nc extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}let Tm={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,i);if(c.joints[m.jointName]===void 0){let x=new Wn;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}let y=c.joints[m.jointName];v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=v.radius),y.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class zc extends gt{constructor(e,t,i,n,s,a,o,l,c,h){if((h=h!==void 0?h:1026)!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1014),i===void 0&&h===1027&&(i=1020),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class Am extends et{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,d=null,p=null,f=t.getContextAttributes(),m=null,v=null,y=[],x=[],_=new Et;_.layers.enable(1),_.viewport=new $e;let b=new Et;b.layers.enable(2),b.viewport=new $e;let S=[_,b],T=new Nc;T.layers.enable(1),T.layers.enable(2);let D=null,O=null;function k(j){let Z=x.indexOf(j.inputSource);if(Z===-1)return;let se=y[Z];se!==void 0&&se.dispatchEvent({type:j.type,data:j.inputSource})}function H(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",N);for(let j=0;j<y.length;j++){let Z=x[j];Z!==null&&(x[j]=null,y[j].disconnect(Z))}D=null,O=null,e.setRenderTarget(m),d=null,u=null,h=null,n=null,v=null,le.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function N(j){for(let Z=0;Z<j.removed.length;Z++){let se=j.removed[Z],ee=x.indexOf(se);ee>=0&&(x[ee]=null,y[ee].dispatchEvent({type:"disconnected",data:se}))}for(let Z=0;Z<j.added.length;Z++){let se=j.added[Z],ee=x.indexOf(se);if(ee===-1){for(let ye=0;ye<y.length;ye++){if(ye>=x.length){x.push(se),ee=ye;break}if(x[ye]===null){x[ye]=se,ee=ye;break}}if(ee===-1)break}let te=y[ee];te&&te.dispatchEvent({type:"connected",data:se})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=y[j];return Z===void 0&&(Z=new Mo,y[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=y[j];return Z===void 0&&(Z=new Mo,y[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=y[j];return Z===void 0&&(Z=new Mo,y[j]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",H),n.addEventListener("inputsourceschange",N),f.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:n.renderState.layers!==void 0||f.antialias,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:d}),v=new $t(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let Z=null,se=null,ee=null;f.depth&&(ee=f.stencil?35056:33190,Z=f.stencil?1027:1026,se=f.stencil?1020:1014);let te={colorFormat:32856,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(te),n.updateRenderState({layers:[u]}),v=new $t(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new zc(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0}),e.properties.get(v).__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(o),le.setContext(n),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};let Q=new E,re=new E;function $(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;T.near=b.near=_.near=j.near,T.far=b.far=_.far=j.far,D===T.near&&O===T.far||(n.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,O=T.far);let Z=j.parent,se=T.cameras;$(T,Z);for(let te=0;te<se.length;te++)$(se[te],Z);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),j.matrix.copy(T.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);let ee=j.children;for(let te=0,ye=ee.length;te<ye;te++)ee[te].updateMatrixWorld(!0);se.length===2?function(te,ye,ze){Q.setFromMatrixPosition(ye.matrixWorld),re.setFromMatrixPosition(ze.matrixWorld);let be=Q.distanceTo(re),Oe=ye.projectionMatrix.elements,P=ze.projectionMatrix.elements,C=Oe[14]/(Oe[10]-1),G=Oe[14]/(Oe[10]+1),U=(Oe[9]+1)/Oe[5],R=(Oe[9]-1)/Oe[5],B=(Oe[8]-1)/Oe[0],A=(P[8]+1)/P[0],F=C*B,z=C*A,Y=be/(-B+A),q=Y*-B;ye.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(q),te.translateZ(Y),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let K=C+Y,pe=G+Y,_e=F-q,Ae=z+(be-q),me=U*G/pe*K,Le=R*G/pe*K;te.projectionMatrix.makePerspective(_e,Ae,me,Le,K,pe)}(T,_,b):T.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){return u!==null?u.fixedFoveation:d!==null?d.fixedFoveation:void 0},this.setFoveation=function(j){u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)};let ce=null,le=new lc;le.setAnimationLoop(function(j,Z){if(c=Z.getViewerPose(l||a),p=Z,c!==null){let se=c.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ee=!1;se.length!==T.cameras.length&&(T.cameras.length=0,ee=!0);for(let te=0;te<se.length;te++){let ye=se[te],ze=null;if(d!==null)ze=d.getViewport(ye);else{let Oe=h.getViewSubImage(u,ye);ze=Oe.viewport,te===0&&(e.setRenderTargetTextures(v,Oe.colorTexture,u.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(v))}let be=S[te];be===void 0&&(be=new Et,be.layers.enable(te),be.viewport=new $e,S[te]=be),be.matrix.fromArray(ye.transform.matrix),be.projectionMatrix.fromArray(ye.projectionMatrix),be.viewport.set(ze.x,ze.y,ze.width,ze.height),te===0&&T.matrix.copy(be.matrix),ee===!0&&T.cameras.push(be)}}for(let se=0;se<y.length;se++){let ee=x[se],te=y[se];ee!==null&&te!==void 0&&te.update(ee,Z,l||a)}ce&&ce(j,Z),p=null}),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}}function Em(r,e){function t(i,n){i.opacity.value=n.opacity,n.color&&i.diffuse.value.copy(n.color),n.emissive&&i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(i.map.value=n.map),n.alphaMap&&(i.alphaMap.value=n.alphaMap),n.bumpMap&&(i.bumpMap.value=n.bumpMap,i.bumpScale.value=n.bumpScale,n.side===1&&(i.bumpScale.value*=-1)),n.displacementMap&&(i.displacementMap.value=n.displacementMap,i.displacementScale.value=n.displacementScale,i.displacementBias.value=n.displacementBias),n.emissiveMap&&(i.emissiveMap.value=n.emissiveMap),n.normalMap&&(i.normalMap.value=n.normalMap,i.normalScale.value.copy(n.normalScale),n.side===1&&i.normalScale.value.negate()),n.specularMap&&(i.specularMap.value=n.specularMap),n.alphaTest>0&&(i.alphaTest.value=n.alphaTest);let s=e.get(n).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=n.reflectivity,i.ior.value=n.ior,i.refractionRatio.value=n.refractionRatio),n.lightMap){i.lightMap.value=n.lightMap;let l=r.physicallyCorrectLights!==!0?Math.PI:1;i.lightMapIntensity.value=n.lightMapIntensity*l}let a,o;n.aoMap&&(i.aoMap.value=n.aoMap,i.aoMapIntensity.value=n.aoMapIntensity),n.map?a=n.map:n.specularMap?a=n.specularMap:n.displacementMap?a=n.displacementMap:n.normalMap?a=n.normalMap:n.bumpMap?a=n.bumpMap:n.roughnessMap?a=n.roughnessMap:n.metalnessMap?a=n.metalnessMap:n.alphaMap?a=n.alphaMap:n.emissiveMap?a=n.emissiveMap:n.clearcoatMap?a=n.clearcoatMap:n.clearcoatNormalMap?a=n.clearcoatNormalMap:n.clearcoatRoughnessMap?a=n.clearcoatRoughnessMap:n.iridescenceMap?a=n.iridescenceMap:n.iridescenceThicknessMap?a=n.iridescenceThicknessMap:n.specularIntensityMap?a=n.specularIntensityMap:n.specularColorMap?a=n.specularColorMap:n.transmissionMap?a=n.transmissionMap:n.thicknessMap?a=n.thicknessMap:n.sheenColorMap?a=n.sheenColorMap:n.sheenRoughnessMap&&(a=n.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),i.uvTransform.value.copy(a.matrix)),n.aoMap?o=n.aoMap:n.lightMap&&(o=n.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),i.uv2Transform.value.copy(o.matrix))}return{refreshFogUniforms:function(i,n){i.fogColor.value.copy(n.color),n.isFog?(i.fogNear.value=n.near,i.fogFar.value=n.far):n.isFogExp2&&(i.fogDensity.value=n.density)},refreshMaterialUniforms:function(i,n,s,a,o){n.isMeshBasicMaterial||n.isMeshLambertMaterial?t(i,n):n.isMeshToonMaterial?(t(i,n),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap)}(i,n)):n.isMeshPhongMaterial?(t(i,n),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4)}(i,n)):n.isMeshStandardMaterial?(t(i,n),function(l,c){l.roughness.value=c.roughness,l.metalness.value=c.metalness,c.roughnessMap&&(l.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(l.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(l.envMapIntensity.value=c.envMapIntensity)}(i,n),n.isMeshPhysicalMaterial&&function(l,c,h){l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),l.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===1&&l.clearcoatNormalScale.value.negate())),c.iridescence>0&&(l.iridescence.value=c.iridescence,l.iridescenceIOR.value=c.iridescenceIOR,l.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(l.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap)}(i,n,o)):n.isMeshMatcapMaterial?(t(i,n),function(l,c){c.matcap&&(l.matcap.value=c.matcap)}(i,n)):n.isMeshDepthMaterial?t(i,n):n.isMeshDistanceMaterial?(t(i,n),function(l,c){l.referencePosition.value.copy(c.referencePosition),l.nearDistance.value=c.nearDistance,l.farDistance.value=c.farDistance}(i,n)):n.isMeshNormalMaterial?t(i,n):n.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity}(i,n),n.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(i,n)):n.isPointsMaterial?function(l,c,h,u){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*u,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let d;c.map?d=c.map:c.alphaMap&&(d=c.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(i,n,s,a):n.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),l.uvTransform.value.copy(h.matrix))}(i,n):n.isShadowMaterial?(i.color.value.copy(n.color),i.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}}}function Cm(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function l(u,d,p){let f=u.value;if(p[d]===void 0)return p[d]=typeof f=="number"?f:f.clone(),!0;if(typeof f=="number"){if(p[d]!==f)return p[d]=f,!0}else{let m=p[d];if(m.equals(f)===!1)return m.copy(f),!0}return!1}function c(u){let d=u.value,p={boundary:0,storage:0};return typeof d=="number"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),p}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[d.id]),delete n[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;i.uniformBlockBinding(u,p)},update:function(u,d){let p=n[u.id];p===void 0&&(function(v){let y=v.uniforms,x=0,_=16,b=0;for(let S=0,T=y.length;S<T;S++){let D=y[S],O=c(D);if(D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,S>0){b=x%_;let k=_-b;b!==0&&k-O.boundary<0&&(x+=_-b,D.__offset=x)}x+=O.storage}b=x%_,b>0&&(x+=_-b),v.__size=x,v.__cache={}}(u),p=function(v){let y=function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();v.__bindingPointIndex=y;let x=r.createBuffer(),_=v.__size,b=v.usage;return r.bindBuffer(35345,x),r.bufferData(35345,_,b),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,x),x}(u),n[u.id]=p,u.addEventListener("dispose",h));let f=d.program;i.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&(function(v){let y=n[v.id],x=v.uniforms,_=v.__cache;r.bindBuffer(35345,y);for(let b=0,S=x.length;b<S;b++){let T=x[b];if(l(T,b,_)===!0){let D=T.value,O=T.__offset;typeof D=="number"?(T.__data[0]=D,r.bufferSubData(35345,O,T.__data)):(T.value.isMatrix3?(T.__data[0]=T.value.elements[0],T.__data[1]=T.value.elements[1],T.__data[2]=T.value.elements[2],T.__data[3]=T.value.elements[0],T.__data[4]=T.value.elements[3],T.__data[5]=T.value.elements[4],T.__data[6]=T.value.elements[5],T.__data[7]=T.value.elements[0],T.__data[8]=T.value.elements[6],T.__data[9]=T.value.elements[7],T.__data[10]=T.value.elements[8],T.__data[11]=T.value.elements[0]):D.toArray(T.__data),r.bufferSubData(35345,O,T.__data))}}r.bindBuffer(35345,null)}(u),s[u.id]=m)},dispose:function(){for(let u in n)r.deleteBuffer(n[u]);a=[],n={},s={}}}}function Fc(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:function(){let L=lr("canvas");return L.style.display="block",L}(),t=r.context!==void 0?r.context:null,i=r.depth===void 0||r.depth,n=r.stencil===void 0||r.stencil,s=r.antialias!==void 0&&r.antialias,a=r.premultipliedAlpha===void 0||r.premultipliedAlpha,o=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat,h;h=t!==null?t.getContextAttributes().alpha:r.alpha!==void 0&&r.alpha;let u=null,d=null,p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let m=this,v=!1,y=0,x=0,_=null,b=-1,S=null,T=new $e,D=new $e,O=null,k=e.width,H=e.height,N=1,Q=null,re=null,$=new $e(0,0,k,H),ce=new $e(0,0,k,H),le=!1,j=new Ps,Z=!1,se=!1,ee=null,te=new De,ye=new ne,ze=new E,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return _===null?N:1}let P,C,G,U,R,B,A,F,z,Y,q,K,pe,_e,Ae,me,Le,Ue,Re,st,Xt,Se,nt,rt,de=t;function xu(L,X){for(let ie=0;ie<L.length;ie++){let J=L[ie],oe=e.getContext(J,X);if(oe!==null)return oe}return null}try{let L={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r146"),e.addEventListener("webglcontextlost",_u,!1),e.addEventListener("webglcontextrestored",bu,!1),e.addEventListener("webglcontextcreationerror",Mu,!1),de===null){let X=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&X.shift(),de=xu(X,L),de===null)throw xu(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}de.getShaderPrecisionFormat===void 0&&(de.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}function yu(){P=new ap(de),C=new ip(de,P,r),P.init(C),Se=new Oc(de,P,C),G=new wm(de,P,C),U=new cp,R=new mm,B=new Sm(de,P,G,R,C,Se,U),A=new rp(m),F=new sp(m),z=new Kd(de,C),nt=new ep(de,P,z,C),Y=new op(de,z,U,nt),q=new pp(de,Y,z,U),Re=new dp(de,C,B),me=new np(R),K=new pm(m,A,F,P,C,nt,me),pe=new Em(m,R),_e=new gm,Ae=new bm(P,C),Ue=new Qd(m,A,F,G,q,h,a),Le=new Mm(m,q,C),rt=new Cm(de,U,C,G),st=new tp(de,P,U,C),Xt=new lp(de,P,U,C),U.programs=K.programs,m.capabilities=C,m.extensions=P,m.properties=R,m.renderLists=_e,m.shadowMap=Le,m.state=G,m.info=U}yu();let qt=new Am(m,de);function _u(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function bu(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let L=U.autoReset,X=Le.enabled,ie=Le.autoUpdate,J=Le.needsUpdate,oe=Le.type;yu(),U.autoReset=L,Le.enabled=X,Le.autoUpdate=ie,Le.needsUpdate=J,Le.type=oe}function Mu(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function wu(L){let X=L.target;X.removeEventListener("dispose",wu),function(ie){(function(J){let oe=R.get(J).programs;oe!==void 0&&(oe.forEach(function(Me){K.releaseProgram(Me)}),J.isShaderMaterial&&K.releaseShaderCache(J))})(ie),R.remove(ie)}(X)}this.xr=qt,this.getContext=function(){return de},this.getContextAttributes=function(){return de.getContextAttributes()},this.forceContextLoss=function(){let L=P.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=P.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(L){L!==void 0&&(N=L,this.setSize(k,H,!1))},this.getSize=function(L){return L.set(k,H)},this.setSize=function(L,X,ie){qt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(k=L,H=X,e.width=Math.floor(L*N),e.height=Math.floor(X*N),ie!==!1&&(e.style.width=L+"px",e.style.height=X+"px"),this.setViewport(0,0,L,X))},this.getDrawingBufferSize=function(L){return L.set(k*N,H*N).floor()},this.setDrawingBufferSize=function(L,X,ie){k=L,H=X,N=ie,e.width=Math.floor(L*ie),e.height=Math.floor(X*ie),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy($)},this.setViewport=function(L,X,ie,J){L.isVector4?$.set(L.x,L.y,L.z,L.w):$.set(L,X,ie,J),G.viewport(T.copy($).multiplyScalar(N).floor())},this.getScissor=function(L){return L.copy(ce)},this.setScissor=function(L,X,ie,J){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,X,ie,J),G.scissor(D.copy(ce).multiplyScalar(N).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(L){G.setScissorTest(le=L)},this.setOpaqueSort=function(L){Q=L},this.setTransparentSort=function(L){re=L},this.getClearColor=function(L){return L.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(L=!0,X=!0,ie=!0){let J=0;L&&(J|=16384),X&&(J|=256),ie&&(J|=1024),de.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_u,!1),e.removeEventListener("webglcontextrestored",bu,!1),e.removeEventListener("webglcontextcreationerror",Mu,!1),_e.dispose(),Ae.dispose(),R.dispose(),A.dispose(),F.dispose(),q.dispose(),nt.dispose(),rt.dispose(),K.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Su),qt.removeEventListener("sessionend",Tu),ee&&(ee.dispose(),ee=null),bn.stop()},this.renderBufferDirect=function(L,X,ie,J,oe,Me){X===null&&(X=be);let Be=oe.isMesh&&oe.matrixWorld.determinant()<0,ke=function(Ct,qr,ui,Ee,wt){qr.isScene!==!0&&(qr=be),B.resetTextureUnits();let ol=qr.fog,pf=Ee.isMeshStandardMaterial?qr.environment:null,mf=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:3e3,ga=(Ee.isMeshStandardMaterial?F:A).get(Ee.envMap||pf),ff=Ee.vertexColors===!0&&!!ui.attributes.color&&ui.attributes.color.itemSize===4,gf=!!Ee.normalMap&&!!ui.attributes.tangent,vf=!!ui.morphAttributes.position,xf=!!ui.morphAttributes.normal,yf=!!ui.morphAttributes.color,_f=Ee.toneMapped?m.toneMapping:0,Lu=ui.morphAttributes.position||ui.morphAttributes.normal||ui.morphAttributes.color,bf=Lu!==void 0?Lu.length:0,Qe=R.get(Ee),Mf=d.state.lights;if(Z===!0&&(se===!0||Ct!==S)){let Yt=Ct===S&&Ee.id===b;me.setState(Ee,Ct,Yt)}let Pi=!1;Ee.version===Qe.__version?Qe.needsLights&&Qe.lightsStateVersion!==Mf.state.version||Qe.outputEncoding!==mf||wt.isInstancedMesh&&Qe.instancing===!1?Pi=!0:wt.isInstancedMesh||Qe.instancing!==!0?wt.isSkinnedMesh&&Qe.skinning===!1?Pi=!0:wt.isSkinnedMesh||Qe.skinning!==!0?Qe.envMap!==ga||Ee.fog===!0&&Qe.fog!==ol?Pi=!0:Qe.numClippingPlanes===void 0||Qe.numClippingPlanes===me.numPlanes&&Qe.numIntersection===me.numIntersection?(Qe.vertexAlphas!==ff||Qe.vertexTangents!==gf||Qe.morphTargets!==vf||Qe.morphNormals!==xf||Qe.morphColors!==yf||Qe.toneMapping!==_f||C.isWebGL2===!0&&Qe.morphTargetsCount!==bf)&&(Pi=!0):Pi=!0:Pi=!0:Pi=!0:(Pi=!0,Qe.__version=Ee.version);let Mn=Qe.currentProgram;Pi===!0&&(Mn=pa(Ee,qr,wt));let Ru=!1,Yr=!1,ll=!1,Ut=Mn.getUniforms(),wn=Qe.uniforms;if(G.useProgram(Mn.program)&&(Ru=!0,Yr=!0,ll=!0),Ee.id!==b&&(b=Ee.id,Yr=!0),Ru||S!==Ct){if(Ut.setValue(de,"projectionMatrix",Ct.projectionMatrix),C.logarithmicDepthBuffer&&Ut.setValue(de,"logDepthBufFC",2/(Math.log(Ct.far+1)/Math.LN2)),S!==Ct&&(S=Ct,Yr=!0,ll=!0),Ee.isShaderMaterial||Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshStandardMaterial||Ee.envMap){let Yt=Ut.map.cameraPosition;Yt!==void 0&&Yt.setValue(de,ze.setFromMatrixPosition(Ct.matrixWorld))}(Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshLambertMaterial||Ee.isMeshBasicMaterial||Ee.isMeshStandardMaterial||Ee.isShaderMaterial)&&Ut.setValue(de,"isOrthographic",Ct.isOrthographicCamera===!0),(Ee.isMeshPhongMaterial||Ee.isMeshToonMaterial||Ee.isMeshLambertMaterial||Ee.isMeshBasicMaterial||Ee.isMeshStandardMaterial||Ee.isShaderMaterial||Ee.isShadowMaterial||wt.isSkinnedMesh)&&Ut.setValue(de,"viewMatrix",Ct.matrixWorldInverse)}if(wt.isSkinnedMesh){Ut.setOptional(de,wt,"bindMatrix"),Ut.setOptional(de,wt,"bindMatrixInverse");let Yt=wt.skeleton;Yt&&(C.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ut.setValue(de,"boneTexture",Yt.boneTexture,B),Ut.setValue(de,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let cl=ui.morphAttributes;(cl.position!==void 0||cl.normal!==void 0||cl.color!==void 0&&C.isWebGL2===!0)&&Re.update(wt,ui,Ee,Mn),(Yr||Qe.receiveShadow!==wt.receiveShadow)&&(Qe.receiveShadow=wt.receiveShadow,Ut.setValue(de,"receiveShadow",wt.receiveShadow)),Ee.isMeshGouraudMaterial&&Ee.envMap!==null&&(wn.envMap.value=ga,wn.flipEnvMap.value=ga.isCubeTexture&&ga.isRenderTargetTexture===!1?-1:1),Yr&&(Ut.setValue(de,"toneMappingExposure",m.toneMappingExposure),Qe.needsLights&&(di=ll,(vi=wn).ambientLightColor.needsUpdate=di,vi.lightProbe.needsUpdate=di,vi.directionalLights.needsUpdate=di,vi.directionalLightShadows.needsUpdate=di,vi.pointLights.needsUpdate=di,vi.pointLightShadows.needsUpdate=di,vi.spotLights.needsUpdate=di,vi.spotLightShadows.needsUpdate=di,vi.rectAreaLights.needsUpdate=di,vi.hemisphereLights.needsUpdate=di),ol&&Ee.fog===!0&&pe.refreshFogUniforms(wn,ol),pe.refreshMaterialUniforms(wn,Ee,N,H,ee),Ns.upload(de,Qe.uniformsList,wn,B));var vi,di;if(Ee.isShaderMaterial&&Ee.uniformsNeedUpdate===!0&&(Ns.upload(de,Qe.uniformsList,wn,B),Ee.uniformsNeedUpdate=!1),Ee.isSpriteMaterial&&Ut.setValue(de,"center",wt.center),Ut.setValue(de,"modelViewMatrix",wt.modelViewMatrix),Ut.setValue(de,"normalMatrix",wt.normalMatrix),Ut.setValue(de,"modelMatrix",wt.matrixWorld),Ee.isShaderMaterial||Ee.isRawShaderMaterial){let Yt=Ee.uniformsGroups;for(let hl=0,wf=Yt.length;hl<wf;hl++)if(C.isWebGL2){let Pu=Yt[hl];rt.update(Pu,Mn),rt.bind(Pu,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}(L,X,ie,J,oe);G.setMaterial(J,Be);let He=ie.index,at=ie.attributes.position;if(He===null){if(at===void 0||at.count===0)return}else if(He.count===0)return;let Ye,Ge=1;J.wireframe===!0&&(He=Y.getWireframeAttribute(ie),Ge=2),nt.setup(oe,J,ke,ie,He);let Mt=st;He!==null&&(Ye=z.get(He),Mt=Xt,Mt.setIndex(Ye));let Xr=He!==null?He.count:at.count,ti=ie.drawRange.start*Ge,al=ie.drawRange.count*Ge,qi=Me!==null?Me.start*Ge:0,uf=Me!==null?Me.count*Ge:1/0,ma=Math.max(ti,qi),df=Math.min(Xr,ti+al,qi+uf)-1,fa=Math.max(0,df-ma+1);if(fa!==0){if(oe.isMesh)J.wireframe===!0?(G.setLineWidth(J.wireframeLinewidth*Oe()),Mt.setMode(1)):Mt.setMode(4);else if(oe.isLine){let Ct=J.linewidth;Ct===void 0&&(Ct=1),G.setLineWidth(Ct*Oe()),oe.isLineSegments?Mt.setMode(1):oe.isLineLoop?Mt.setMode(2):Mt.setMode(3)}else oe.isPoints?Mt.setMode(0):oe.isSprite&&Mt.setMode(4);if(oe.isInstancedMesh)Mt.renderInstances(ma,fa,oe.count);else if(ie.isInstancedBufferGeometry){let Ct=Math.min(ie.instanceCount,ie._maxInstanceCount);Mt.renderInstances(ma,fa,Ct)}else Mt.render(ma,fa)}},this.compile=function(L,X){function ie(J,oe,Me){J.transparent===!0&&J.side===2?(J.side=1,J.needsUpdate=!0,pa(J,oe,Me),J.side=0,J.needsUpdate=!0,pa(J,oe,Me),J.side=2):pa(J,oe,Me)}d=Ae.get(L),d.init(),f.push(d),L.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights(m.physicallyCorrectLights),L.traverse(function(J){let oe=J.material;if(oe)if(Array.isArray(oe))for(let Me=0;Me<oe.length;Me++)ie(oe[Me],L,J);else ie(oe,L,J)}),f.pop(),d=null};let sl=null;function Su(){bn.stop()}function Tu(){bn.start()}let bn=new lc;function Au(L,X,ie,J){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)d.pushLight(L),L.castShadow&&d.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||j.intersectsSprite(L)){J&&ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);let Me=q.update(L),Be=L.material;Be.visible&&u.push(L,Me,Be,ie,ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==U.render.frame&&(L.skeleton.update(),L.skeleton.frame=U.render.frame),!L.frustumCulled||j.intersectsObject(L))){J&&ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(te);let Me=q.update(L),Be=L.material;if(Array.isArray(Be)){let ke=Me.groups;for(let He=0,at=ke.length;He<at;He++){let Ye=ke[He],Ge=Be[Ye.materialIndex];Ge&&Ge.visible&&u.push(L,Me,Ge,ie,ze.z,Ye)}}else Be.visible&&u.push(L,Me,Be,ie,ze.z,null)}}let oe=L.children;for(let Me=0,Be=oe.length;Me<Be;Me++)Au(oe[Me],X,ie,J)}function Eu(L,X,ie,J){let oe=L.opaque,Me=L.transmissive,Be=L.transparent;d.setupLightsView(ie),Me.length>0&&function(ke,He,at){let Ye=C.isWebGL2;ee===null&&(ee=new $t(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Ye&&s===!0?4:0})),m.getDrawingBufferSize(ye),Ye?ee.setSize(ye.x,ye.y):ee.setSize(ls(ye.x),ls(ye.y));let Ge=m.getRenderTarget();m.setRenderTarget(ee),m.clear();let Mt=m.toneMapping;m.toneMapping=0,da(ke,He,at),m.toneMapping=Mt,B.updateMultisampleRenderTarget(ee),B.updateRenderTargetMipmap(ee),m.setRenderTarget(Ge)}(oe,X,ie),J&&G.viewport(T.copy(J)),oe.length>0&&da(oe,X,ie),Me.length>0&&da(Me,X,ie),Be.length>0&&da(Be,X,ie),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function da(L,X,ie){let J=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,Me=L.length;oe<Me;oe++){let Be=L[oe],ke=Be.object,He=Be.geometry,at=J===null?Be.material:J,Ye=Be.group;ke.layers.test(ie.layers)&&hf(ke,X,ie,He,at,Ye)}}function hf(L,X,ie,J,oe,Me){L.onBeforeRender(m,X,ie,J,oe,Me),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),oe.onBeforeRender(m,X,ie,J,L,Me),oe.transparent===!0&&oe.side===2?(oe.side=1,oe.needsUpdate=!0,m.renderBufferDirect(ie,X,J,oe,L,Me),oe.side=0,oe.needsUpdate=!0,m.renderBufferDirect(ie,X,J,oe,L,Me),oe.side=2):m.renderBufferDirect(ie,X,J,oe,L,Me),L.onAfterRender(m,X,ie,J,oe,Me)}function pa(L,X,ie){X.isScene!==!0&&(X=be);let J=R.get(L),oe=d.state.lights,Me=d.state.shadowsArray,Be=oe.state.version,ke=K.getParameters(L,oe.state,Me,X,ie),He=K.getProgramCacheKey(ke),at=J.programs;J.environment=L.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(L.isMeshStandardMaterial?F:A).get(L.envMap||J.environment),at===void 0&&(L.addEventListener("dispose",wu),at=new Map,J.programs=at);let Ye=at.get(He);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Be)return Cu(L,ke),Ye}else ke.uniforms=K.getUniforms(L),L.onBuild(ie,ke,m),L.onBeforeCompile(ke,m),Ye=K.acquireProgram(ke,He),at.set(He,Ye),J.uniforms=ke.uniforms;let Ge=J.uniforms;(L.isShaderMaterial||L.isRawShaderMaterial)&&L.clipping!==!0||(Ge.clippingPlanes=me.uniform),Cu(L,ke),J.needsLights=function(ti){return ti.isMeshLambertMaterial||ti.isMeshToonMaterial||ti.isMeshPhongMaterial||ti.isMeshStandardMaterial||ti.isShadowMaterial||ti.isShaderMaterial&&ti.lights===!0}(L),J.lightsStateVersion=Be,J.needsLights&&(Ge.ambientLightColor.value=oe.state.ambient,Ge.lightProbe.value=oe.state.probe,Ge.directionalLights.value=oe.state.directional,Ge.directionalLightShadows.value=oe.state.directionalShadow,Ge.spotLights.value=oe.state.spot,Ge.spotLightShadows.value=oe.state.spotShadow,Ge.rectAreaLights.value=oe.state.rectArea,Ge.ltc_1.value=oe.state.rectAreaLTC1,Ge.ltc_2.value=oe.state.rectAreaLTC2,Ge.pointLights.value=oe.state.point,Ge.pointLightShadows.value=oe.state.pointShadow,Ge.hemisphereLights.value=oe.state.hemi,Ge.directionalShadowMap.value=oe.state.directionalShadowMap,Ge.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ge.spotShadowMap.value=oe.state.spotShadowMap,Ge.spotLightMatrix.value=oe.state.spotLightMatrix,Ge.spotLightMap.value=oe.state.spotLightMap,Ge.pointShadowMap.value=oe.state.pointShadowMap,Ge.pointShadowMatrix.value=oe.state.pointShadowMatrix);let Mt=Ye.getUniforms(),Xr=Ns.seqWithValue(Mt.seq,Ge);return J.currentProgram=Ye,J.uniformsList=Xr,Ye}function Cu(L,X){let ie=R.get(L);ie.outputEncoding=X.outputEncoding,ie.instancing=X.instancing,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}bn.setAnimationLoop(function(L){sl&&sl(L)}),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(L){sl=L,qt.setAnimationLoop(L),L===null?bn.stop():bn.start()},qt.addEventListener("sessionstart",Su),qt.addEventListener("sessionend",Tu),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(v===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(X),X=qt.getCamera()),L.isScene===!0&&L.onBeforeRender(m,L,X,_),d=Ae.get(L,f.length),d.init(),f.push(d),te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(te),se=this.localClippingEnabled,Z=me.init(this.clippingPlanes,se,X),u=_e.get(L,p.length),u.init(),p.push(u),Au(L,X,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Q,re),Z===!0&&me.beginShadows();let ie=d.state.shadowsArray;if(Le.render(ie,L,X),Z===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ue.render(u,L),d.setupLights(m.physicallyCorrectLights),X.isArrayCamera){let J=X.cameras;for(let oe=0,Me=J.length;oe<Me;oe++){let Be=J[oe];Eu(u,L,Be,Be.viewport)}}else Eu(u,L,X);_!==null&&(B.updateMultisampleRenderTarget(_),B.updateRenderTargetMipmap(_)),L.isScene===!0&&L.onAfterRender(m,L,X),nt.resetDefaultState(),b=-1,S=null,f.pop(),d=f.length>0?f[f.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(L,X,ie){R.get(L.texture).__webglTexture=X,R.get(L.depthTexture).__webglTexture=ie;let J=R.get(L);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ie===void 0,J.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,X){let ie=R.get(L);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,ie=0){_=L,y=X,x=ie;let J=!0,oe=null,Me=!1,Be=!1;if(L){let ke=R.get(L);ke.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(36160,null),J=!1):ke.__webglFramebuffer===void 0?B.setupRenderTarget(L):ke.__hasExternalTextures&&B.rebindTextures(L,R.get(L.texture).__webglTexture,R.get(L.depthTexture).__webglTexture);let He=L.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Be=!0);let at=R.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(oe=at[X],Me=!0):oe=C.isWebGL2&&L.samples>0&&B.useMultisampledRTT(L)===!1?R.get(L).__webglMultisampledFramebuffer:at,T.copy(L.viewport),D.copy(L.scissor),O=L.scissorTest}else T.copy($).multiplyScalar(N).floor(),D.copy(ce).multiplyScalar(N).floor(),O=le;if(G.bindFramebuffer(36160,oe)&&C.drawBuffers&&J&&G.drawBuffers(L,oe),G.viewport(T),G.scissor(D),G.setScissorTest(O),Me){let ke=R.get(L.texture);de.framebufferTexture2D(36160,36064,34069+X,ke.__webglTexture,ie)}else if(Be){let ke=R.get(L.texture),He=X||0;de.framebufferTextureLayer(36160,36064,ke.__webglTexture,ie||0,He)}b=-1},this.readRenderTargetPixels=function(L,X,ie,J,oe,Me,Be){if(!L||!L.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=R.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(ke=ke[Be]),ke){G.bindFramebuffer(36160,ke);try{let He=L.texture,at=He.format,Ye=He.type;if(at!==1023&&Se.convert(at)!==de.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ge=Ye===1016&&(P.has("EXT_color_buffer_half_float")||C.isWebGL2&&P.has("EXT_color_buffer_float"));if(!(Ye===1009||Se.convert(Ye)===de.getParameter(35738)||Ye===1015&&(C.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float"))||Ge))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");X>=0&&X<=L.width-J&&ie>=0&&ie<=L.height-oe&&de.readPixels(X,ie,J,oe,Se.convert(at),Se.convert(Ye),Me)}finally{let He=_!==null?R.get(_).__webglFramebuffer:null;G.bindFramebuffer(36160,He)}}},this.copyFramebufferToTexture=function(L,X,ie=0){let J=Math.pow(2,-ie),oe=Math.floor(X.image.width*J),Me=Math.floor(X.image.height*J);B.setTexture2D(X,0),de.copyTexSubImage2D(3553,ie,0,0,L.x,L.y,oe,Me),G.unbindTexture()},this.copyTextureToTexture=function(L,X,ie,J=0){let oe=X.image.width,Me=X.image.height,Be=Se.convert(ie.format),ke=Se.convert(ie.type);B.setTexture2D(ie,0),de.pixelStorei(37440,ie.flipY),de.pixelStorei(37441,ie.premultiplyAlpha),de.pixelStorei(3317,ie.unpackAlignment),X.isDataTexture?de.texSubImage2D(3553,J,L.x,L.y,oe,Me,Be,ke,X.image.data):X.isCompressedTexture?de.compressedTexSubImage2D(3553,J,L.x,L.y,X.mipmaps[0].width,X.mipmaps[0].height,Be,X.mipmaps[0].data):de.texSubImage2D(3553,J,L.x,L.y,Be,ke,X.image),J===0&&ie.generateMipmaps&&de.generateMipmap(3553),G.unbindTexture()},this.copyTextureToTexture3D=function(L,X,ie,J,oe=0){if(m.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let Me=L.max.x-L.min.x+1,Be=L.max.y-L.min.y+1,ke=L.max.z-L.min.z+1,He=Se.convert(J.format),at=Se.convert(J.type),Ye;if(J.isData3DTexture)B.setTexture3D(J,0),Ye=32879;else{if(!J.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");B.setTexture2DArray(J,0),Ye=35866}de.pixelStorei(37440,J.flipY),de.pixelStorei(37441,J.premultiplyAlpha),de.pixelStorei(3317,J.unpackAlignment);let Ge=de.getParameter(3314),Mt=de.getParameter(32878),Xr=de.getParameter(3316),ti=de.getParameter(3315),al=de.getParameter(32877),qi=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;de.pixelStorei(3314,qi.width),de.pixelStorei(32878,qi.height),de.pixelStorei(3316,L.min.x),de.pixelStorei(3315,L.min.y),de.pixelStorei(32877,L.min.z),ie.isDataTexture||ie.isData3DTexture?de.texSubImage3D(Ye,oe,X.x,X.y,X.z,Me,Be,ke,He,at,qi.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),de.compressedTexSubImage3D(Ye,oe,X.x,X.y,X.z,Me,Be,ke,He,qi.data)):de.texSubImage3D(Ye,oe,X.x,X.y,X.z,Me,Be,ke,He,at,qi),de.pixelStorei(3314,Ge),de.pixelStorei(32878,Mt),de.pixelStorei(3316,Xr),de.pixelStorei(3315,ti),de.pixelStorei(32877,al),oe===0&&J.generateMipmaps&&de.generateMipmap(Ye),G.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?B.setTextureCube(L,0):L.isData3DTexture?B.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?B.setTexture2DArray(L,0):B.setTexture2D(L,0),G.unbindTexture()},this.resetState=function(){y=0,x=0,_=null,G.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Uc extends Fc{}Uc.prototype.isWebGL1Renderer=!0;class zs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new fe(e),this.density=t}clone(){return new zs(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Fs{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=i}clone(){return new Fs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Bc extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Us{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}let zt=new E;class ln{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),i=tt(i,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ln(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wo extends Rt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let jn,xr=new E,Xn=new E,qn=new E,Yn=new ne,yr=new ne,kc=new De,Bs=new E,_r=new E,ks=new E,Gc=new ne,So=new ne,Vc=new ne;class Hc extends qe{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",jn===void 0){jn=new Fe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Us(t,5);jn.setIndex([0,1,2,0,2,3]),jn.setAttribute("position",new ln(i,3,0,!1)),jn.setAttribute("uv",new ln(i,2,3,!1))}this.geometry=jn,this.material=e!==void 0?e:new wo,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xn.setFromMatrixScale(this.matrixWorld),kc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xn.multiplyScalar(-qn.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;Gs(Bs.set(-.5,-.5,0),qn,a,Xn,n,s),Gs(_r.set(.5,-.5,0),qn,a,Xn,n,s),Gs(ks.set(.5,.5,0),qn,a,Xn,n,s),Gc.set(0,0),So.set(1,0),Vc.set(1,1);let o=e.ray.intersectTriangle(Bs,_r,ks,!1,xr);if(o===null&&(Gs(_r.set(-.5,.5,0),qn,a,Xn,n,s),So.set(0,1),o=e.ray.intersectTriangle(Bs,ks,_r,!1,xr),o===null))return;let l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:Kt.getUV(xr,Bs,_r,ks,Gc,So,Vc,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gs(r,e,t,i,n,s){Yn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(yr.x=s*Yn.x-n*Yn.y,yr.y=n*Yn.x+s*Yn.y):yr.copy(Yn),r.copy(e),r.x+=yr.x,r.y+=yr.y,r.applyMatrix4(kc)}let Vs=new E,Wc=new E;class jc extends qe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let i=0,n=t.length;i<n;i++){let s=t[i];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);let i=this.levels,n;for(n=0;n<i.length&&!(t<i[n].distance);n++);return i.splice(n,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n&&!(e<t[i].distance);i++);return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Vs.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Vs);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Vs.setFromMatrixPosition(e.matrixWorld),Wc.setFromMatrixPosition(this.matrixWorld);let i=Vs.distanceTo(Wc)/e.zoom,n,s;for(t[0].object.visible=!0,n=1,s=t.length;n<s&&i>=t[n].distance;n++)t[n-1].object.visible=!1,t[n].object.visible=!0;for(this._currentLevel=n-1;n<s;n++)t[n].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let i=this.levels;for(let n=0,s=i.length;n<s;n++){let a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}}let Xc=new E,qc=new $e,Yc=new $e,Lm=new E,Zc=new De;class Jc extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let i=this.skeleton,n=this.geometry;qc.fromBufferAttribute(n.attributes.skinIndex,e),Yc.fromBufferAttribute(n.attributes.skinWeight,e),Xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Yc.getComponent(s);if(a!==0){let o=qc.getComponent(s);Zc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Lm.copy(Xc).applyMatrix4(Zc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class To extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zn extends gt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let $c=new De,Rm=new De;class Hs{constructor(e=[],t=[]){this.uuid=ot(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new De;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Rm;$c.multiplyMatrices(o,t[s]),$c.toArray(i,16*s)}n!==null&&(n.needsUpdate=!0)}clone(){return new Hs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=Xl(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Zn(t,e,e,1023,1015);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let s=e.bones[i],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new To),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}}class Jn extends it{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}let Kc=new De,Qc=new De,Ws=[],Pm=new De,br=new At;class eh extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jn(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,Pm)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,Kc),Qc.multiplyMatrices(i,Kc),br.matrixWorld=Qc,br.raycast(e,Ws);for(let a=0,o=Ws.length;a<o;a++){let l=Ws[a];l.instanceId=s,l.object=this,t.push(l)}Ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jn(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ft extends Rt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}let th=new E,ih=new E,nh=new De,Ao=new dr,js=new an;class Wi extends qe{constructor(e=new Fe,t=new Ft){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)th.fromBufferAttribute(t,n-1),ih.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=th.distanceTo(ih);e.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(n),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;nh.copy(n).invert(),Ao.copy(e.ray).applyMatrix4(nh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new E,h=new E,u=new E,d=new E,p=this.isLineSegments?2:1,f=i.index,m=i.attributes.position;if(f!==null)for(let v=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;v<y;v+=p){let x=f.getX(v),_=f.getX(v+1);if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,_),Ao.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}else for(let v=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count)-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),Ao.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}let rh=new E,sh=new E;class fi extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)rh.fromBufferAttribute(t,n),sh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+rh.distanceTo(sh);e.setAttribute("lineDistance",new xe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ah extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Eo extends Rt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oh=new De,Co=new dr,Xs=new an,qs=new E;class lh extends qe{constructor(e=new Fe,t=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(n),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;oh.copy(n).invert(),Co.copy(e.ray).applyMatrix4(oh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);qs.fromBufferAttribute(h,p),ch(qs,p,l,n,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)qs.fromBufferAttribute(h,u),ch(qs,u,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function ch(r,e,t,i,n,s,a){let o=Co.distanceSqToPoint(r);if(o<t){let l=new E;Co.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Lo extends gt{constructor(e,t,i,n,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ne:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new E,n=[],s=[],a=[],o=new E,l=new De;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Je(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ys extends ci{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new ne,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hh extends Ys{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ro(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,n(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}let Zs=new E,Po=new Ro,Do=new Ro,Io=new Ro;class uh extends ci{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new E){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(Zs.subVectors(n[0],n[1]).add(n[0]),o=Zs);let u=n[c%s],d=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(Zs.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),v<1e-4&&(v=m),Po.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,v),Do.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,v),Io.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,v)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Do.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Io.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(Po.calc(h),Do.calc(h),Io.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new E().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dh(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Mr(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function wr(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}class Oo extends ci{constructor(e=new ne,t=new ne,i=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(wr(e,n.x,s.x,a.x,o.x),wr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ph extends ci{constructor(e=new E,t=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new E){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(wr(e,n.x,s.x,a.x,o.x),wr(e,n.y,s.y,a.y,o.y),wr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Js extends ci{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new ne;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends ci{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class No extends ci{constructor(e=new ne,t=new ne,i=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ne){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Mr(e,n.x,s.x,a.x),Mr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zo extends ci{constructor(e=new E,t=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new E){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Mr(e,n.x,s.x,a.x),Mr(e,n.y,s.y,a.y),Mr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fo extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(dh(o,l.x,c.x,h.x,u.x),dh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:hh,CatmullRomCurve3:uh,CubicBezierCurve:Oo,CubicBezierCurve3:ph,EllipseCurve:Ys,LineCurve:Js,LineCurve3:mh,QuadraticBezierCurve:No,QuadraticBezierCurve3:zo,SplineCurve:Fo});class fh extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Js(t,e))}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Uo[n.type]().fromJSON(n))}return this}}class Sr extends fh{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Js(this.currentPoint.clone(),new ne(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new No(this.currentPoint.clone(),new ne(e,t),new ne(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Oo(this.currentPoint.clone(),new ne(e,t),new ne(i,n),new ne(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Fo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new Ys(e,t,i,n,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $n extends Fe{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Je(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new ne,p=new E,f=new E,m=new E,v=0,y=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:v=e[x+1].x-e[x].x,y=e[x+1].y-e[x].y,p.x=1*y,p.y=-v,p.z=0*y,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:v=e[x+1].x-e[x].x,y=e[x+1].y-e[x].y,p.x=1*y,p.y=-v,p.z=0*y,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let x=0;x<=t;x++){let _=i+x*h*n,b=Math.sin(_),S=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*b,u.y=e[T].y,u.z=e[T].x*S,a.push(u.x,u.y,u.z),d.x=x/t,d.y=T/(e.length-1),o.push(d.x,d.y);let D=l[3*T+0]*b,O=l[3*T+1],k=l[3*T+0]*S;c.push(D,O,k)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let b=_+x*e.length,S=b,T=b+e.length,D=b+e.length+1,O=b+1;s.push(S,T,O),s.push(D,O,T)}this.setIndex(s),this.setAttribute("position",new xe(a,3)),this.setAttribute("uv",new xe(o,2)),this.setAttribute("normal",new xe(c,3))}static fromJSON(e){return new $n(e.points,e.segments,e.phiStart,e.phiLength)}}class Tr extends $n{constructor(e=1,t=1,i=4,n=8){let s=new Sr;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Tr(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ar extends Fe{constructor(e=1,t=8,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new E,h=new ne;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(o,3)),this.setAttribute("uv",new xe(l,2))}static fromJSON(e){return new Ar(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class cn extends Fe{constructor(e=1,t=1,i=1,n=8,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],v=i/2,y=0;function x(_){let b=f,S=new ne,T=new E,D=0,O=_===!0?e:t,k=_===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,v*k,0),d.push(0,k,0),p.push(.5,.5),f++;let H=f;for(let N=0;N<=n;N++){let Q=N/n*l+o,re=Math.cos(Q),$=Math.sin(Q);T.x=O*$,T.y=v*k,T.z=O*re,u.push(T.x,T.y,T.z),d.push(0,k,0),S.x=.5*re+.5,S.y=.5*$*k+.5,p.push(S.x,S.y),f++}for(let N=0;N<n;N++){let Q=b+N,re=H+N;_===!0?h.push(re,re+1,Q):h.push(re+1,re,Q),D+=3}c.addGroup(y,D,_===!0?1:2),y+=D}(function(){let _=new E,b=new E,S=0,T=(t-e)/i;for(let D=0;D<=s;D++){let O=[],k=D/s,H=k*(t-e)+e;for(let N=0;N<=n;N++){let Q=N/n,re=Q*l+o,$=Math.sin(re),ce=Math.cos(re);b.x=H*$,b.y=-k*i+v,b.z=H*ce,u.push(b.x,b.y,b.z),_.set($,T,ce).normalize(),d.push(_.x,_.y,_.z),p.push(Q,1-k),O.push(f++)}m.push(O)}for(let D=0;D<n;D++)for(let O=0;O<s;O++){let k=m[O][D],H=m[O+1][D],N=m[O+1][D+1],Q=m[O][D+1];h.push(k,H,Q),h.push(H,N,Q),S+=6}c.addGroup(y,S,0),y+=S})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2))}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Er extends cn{constructor(e=1,t=1,i=8,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Er(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ei extends Fe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(d,p,f,m){let v=m+1,y=[];for(let x=0;x<=v;x++){y[x]=[];let _=d.clone().lerp(f,x/v),b=p.clone().lerp(f,x/v),S=v-x;for(let T=0;T<=S;T++)y[x][T]=T===0&&x===v?_:_.clone().lerp(b,T/S)}for(let x=0;x<v;x++)for(let _=0;_<2*(v-x)-1;_++){let b=Math.floor(_/2);_%2==0?(l(y[x][b+1]),l(y[x+1][b]),l(y[x][b])):(l(y[x][b+1]),l(y[x+1][b+1]),l(y[x+1][b]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,m){m<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=m/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,f=new E,m=new E;for(let v=0;v<t.length;v+=3)c(t[v+0],p),c(t[v+1],f),c(t[v+2],m),o(p,f,m,d)})(n),function(d){let p=new E;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(i),function(){let d=new E;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let m=u(d)/2/Math.PI+.5,v=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(m,1-v)}var p;(function(){let f=new E,m=new E,v=new E,y=new E,x=new ne,_=new ne,b=new ne;for(let S=0,T=0;S<s.length;S+=9,T+=6){f.set(s[S+0],s[S+1],s[S+2]),m.set(s[S+3],s[S+4],s[S+5]),v.set(s[S+6],s[S+7],s[S+8]),x.set(a[T+0],a[T+1]),_.set(a[T+2],a[T+3]),b.set(a[T+4],a[T+5]),y.copy(f).add(m).add(v).divideScalar(3);let D=u(y);h(x,T+0,f,D),h(_,T+2,m,D),h(b,T+4,v,D)}})(),function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],v=a[f+2],y=a[f+4],x=Math.max(m,v,y),_=Math.min(m,v,y);x>.9&&_<.1&&(m<.2&&(a[f+0]+=1),v<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new Ei(e.vertices,e.indices,e.radius,e.details)}}class Cr extends Ei{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cr(e.radius,e.detail)}}let $s=new E,Ks=new E,Bo=new E,Qs=new Kt;class gh extends Fe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Zt*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:v,c:y}=Qs;if(m.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Qs.getNormal(Bo),u[0]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[1]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let _=(x+1)%3,b=u[x],S=u[_],T=Qs[h[x]],D=Qs[h[_]],O=`${b}_${S}`,k=`${S}_${b}`;k in d&&d[k]?(Bo.dot(d[k].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(D.x,D.y,D.z)),d[k]=null):O in d||(d[O]={index0:c[x],index1:c[_],normal:Bo.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:v}=d[f];$s.fromBufferAttribute(o,m),Ks.fromBufferAttribute(o,v),p.push($s.x,$s.y,$s.z),p.push(Ks.x,Ks.y,Ks.z)}this.setAttribute("position",new xe(p,3))}}}class hn extends Sr{constructor(e){super(e),this.uuid=ot(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Sr().fromJSON(n))}return this}}let Dm=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=vh(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(i&&(s=function(f,m,v,y){let x=[],_,b,S,T,D;for(_=0,b=m.length;_<b;_++)S=m[_]*y,T=_<b-1?m[_+1]*y:f.length,D=vh(f,S,T,y,!1),D===D.next&&(D.steiner=!0),x.push(km(D));for(x.sort(Fm),_=0;_<x.length;_++)v=Um(x[_],v);return v}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<n;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Lr(s,a,t,o,l,p,0),a};function vh(r,e,t,i,n){let s,a;if(n===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=_h(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=_h(s,r[s],r[s+1],a);return a&&ea(a,a.next)&&(Pr(a),a=a.next),a}function un(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!ea(i,i.next)&&lt(i.prev,i,i.next)!==0)i=i.next;else{if(Pr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Lr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let f=h;do f.z===0&&(f.z=ko(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(m){let v,y,x,_,b,S,T,D,O=1;do{for(y=m,m=null,b=null,S=0;y;){for(S++,x=y,T=0,v=0;v<O&&(T++,x=x.nextZ,x);v++);for(D=O;T>0||D>0&&x;)T!==0&&(D===0||!x||y.z<=x.z)?(_=y,y=y.nextZ,T--):(_=x,x=x.nextZ,D--),b?b.nextZ=_:m=_,_.prevZ=b,b=_;y=x}b.nextZ=null,O*=2}while(S>1)}(f)}(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Om(r,i,n,s):Im(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Pr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Lr(r=Nm(un(r),e,t),e,t,i,n,s,2):a===2&&zm(r,e,t,i,n,s):Lr(un(r),e,t,i,n,s,1);break}}function Im(r){let e=r.prev,t=r,i=r.next;if(lt(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Kn(n,o,s,l,a,c,f.x,f.y)&&lt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Om(r,e,t,i){let n=r.prev,s=r,a=r.next;if(lt(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,m=o>l?o>c?o:c:l>c?l:c,v=h>u?h>d?h:d:u>d?u:d,y=ko(p,f,e,t,i),x=ko(m,v,e,t,i),_=r.prevZ,b=r.nextZ;for(;_&&_.z>=y&&b&&b.z<=x;){if(_.x>=p&&_.x<=m&&_.y>=f&&_.y<=v&&_!==n&&_!==a&&Kn(o,h,l,u,c,d,_.x,_.y)&&lt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=p&&b.x<=m&&b.y>=f&&b.y<=v&&b!==n&&b!==a&&Kn(o,h,l,u,c,d,b.x,b.y)&&lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=m&&_.y>=f&&_.y<=v&&_!==n&&_!==a&&Kn(o,h,l,u,c,d,_.x,_.y)&&lt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=x;){if(b.x>=p&&b.x<=m&&b.y>=f&&b.y<=v&&b!==n&&b!==a&&Kn(o,h,l,u,c,d,b.x,b.y)&&lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Nm(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!ea(n,s)&&xh(n,i,i.next,s)&&Rr(n,s)&&Rr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Pr(i),Pr(i.next),i=r=s),i=i.next}while(i!==r);return un(i)}function zm(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gm(a,o)){let l=yh(a,o);return a=un(a,a.next),l=un(l,l.next),Lr(a,e,t,i,n,s,0),void Lr(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Fm(r,e){return r.x-e.x}function Um(r,e){let t=function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let v=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(v<=c&&v>l&&(l=v,a=o.x<o.next.x?o:o.next,v===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,m=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Kn(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Rr(o,n)&&(f<m||f===m&&(o.x>a.x||o.x===a.x&&Bm(a,o)))&&(a=o,m=f)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;let i=yh(t,r);return un(i,i.next),un(t,t.next)}function Bm(r,e){return lt(r.prev,r,e.prev)<0&&lt(e.next,r,r.next)<0}function ko(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function km(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Kn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Gm(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&xh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Rr(r,e)&&Rr(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(lt(r.prev,r,e.prev)||lt(r,e.prev,e))||ea(r,e)&&lt(r.prev,r,r.next)>0&&lt(e.prev,e,e.next)>0)}function lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ea(r,e){return r.x===e.x&&r.y===e.y}function xh(r,e,t,i){let n=ia(lt(r,e,t)),s=ia(lt(r,e,i)),a=ia(lt(t,i,r)),o=ia(lt(t,i,e));return n!==s&&a!==o||!(n!==0||!ta(r,t,e))||!(s!==0||!ta(r,i,e))||!(a!==0||!ta(t,r,i))||!(o!==0||!ta(t,e,i))}function ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ia(r){return r>0?1:r<0?-1:0}function Rr(r,e){return lt(r.prev,r,r.next)<0?lt(r,e,r.next)>=0&&lt(r,r.prev,e)>=0:lt(r,e,r.prev)<0||lt(r,r.next,e)<0}function yh(r,e){let t=new Go(r.i,r.x,r.y),i=new Go(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function _h(r,e,t,i){let n=new Go(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Pr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Go(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class gi{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return gi.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];bh(e),Mh(i,e);let a=e.length;t.forEach(bh);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Mh(i,t[l]);let o=Dm(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function bh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Mh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Dr extends Fe{constructor(e=new hn([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Vm,_,b,S,T,D,O=!1;y&&(_=y.getSpacedPoints(h),O=!0,d=!1,b=y.computeFrenetFrames(h,!1),S=new E,T=new E,D=new E),d||(v=0,p=0,f=0,m=0);let k=o.extractPoints(c),H=k.shape,N=k.holes;if(!gi.isClockWise(H)){H=H.reverse();for(let U=0,R=N.length;U<R;U++){let B=N[U];gi.isClockWise(B)&&(N[U]=B.reverse())}}let Q=gi.triangulateShape(H,N),re=H;for(let U=0,R=N.length;U<R;U++){let B=N[U];H=H.concat(B)}function $(U,R,B){return R||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().multiplyScalar(B).add(U)}let ce=H.length,le=Q.length;function j(U,R,B){let A,F,z,Y=U.x-R.x,q=U.y-R.y,K=B.x-U.x,pe=B.y-U.y,_e=Y*Y+q*q,Ae=Y*pe-q*K;if(Math.abs(Ae)>Number.EPSILON){let me=Math.sqrt(_e),Le=Math.sqrt(K*K+pe*pe),Ue=R.x-q/me,Re=R.y+Y/me,st=((B.x-pe/Le-Ue)*pe-(B.y+K/Le-Re)*K)/(Y*pe-q*K);A=Ue+Y*st-U.x,F=Re+q*st-U.y;let Xt=A*A+F*F;if(Xt<=2)return new ne(A,F);z=Math.sqrt(Xt/2)}else{let me=!1;Y>Number.EPSILON?K>Number.EPSILON&&(me=!0):Y<-Number.EPSILON?K<-Number.EPSILON&&(me=!0):Math.sign(q)===Math.sign(pe)&&(me=!0),me?(A=-q,F=Y,z=Math.sqrt(_e)):(A=Y,F=q,z=Math.sqrt(_e/2))}return new ne(A/z,F/z)}let Z=[];for(let U=0,R=re.length,B=R-1,A=U+1;U<R;U++,B++,A++)B===R&&(B=0),A===R&&(A=0),Z[U]=j(re[U],re[B],re[A]);let se=[],ee,te=Z.concat();for(let U=0,R=N.length;U<R;U++){let B=N[U];ee=[];for(let A=0,F=B.length,z=F-1,Y=A+1;A<F;A++,z++,Y++)z===F&&(z=0),Y===F&&(Y=0),ee[A]=j(B[A],B[z],B[Y]);se.push(ee),te=te.concat(ee)}for(let U=0;U<v;U++){let R=U/v,B=p*Math.cos(R*Math.PI/2),A=f*Math.sin(R*Math.PI/2)+m;for(let F=0,z=re.length;F<z;F++){let Y=$(re[F],Z[F],A);be(Y.x,Y.y,-B)}for(let F=0,z=N.length;F<z;F++){let Y=N[F];ee=se[F];for(let q=0,K=Y.length;q<K;q++){let pe=$(Y[q],ee[q],A);be(pe.x,pe.y,-B)}}}let ye=f+m;for(let U=0;U<ce;U++){let R=d?$(H[U],te[U],ye):H[U];O?(T.copy(b.normals[0]).multiplyScalar(R.x),S.copy(b.binormals[0]).multiplyScalar(R.y),D.copy(_[0]).add(T).add(S),be(D.x,D.y,D.z)):be(R.x,R.y,0)}for(let U=1;U<=h;U++)for(let R=0;R<ce;R++){let B=d?$(H[R],te[R],ye):H[R];O?(T.copy(b.normals[U]).multiplyScalar(B.x),S.copy(b.binormals[U]).multiplyScalar(B.y),D.copy(_[U]).add(T).add(S),be(D.x,D.y,D.z)):be(B.x,B.y,u/h*U)}for(let U=v-1;U>=0;U--){let R=U/v,B=p*Math.cos(R*Math.PI/2),A=f*Math.sin(R*Math.PI/2)+m;for(let F=0,z=re.length;F<z;F++){let Y=$(re[F],Z[F],A);be(Y.x,Y.y,u+B)}for(let F=0,z=N.length;F<z;F++){let Y=N[F];ee=se[F];for(let q=0,K=Y.length;q<K;q++){let pe=$(Y[q],ee[q],A);O?be(pe.x,pe.y+_[h-1].y,_[h-1].x+B):be(pe.x,pe.y,u+B)}}}function ze(U,R){let B=U.length;for(;--B>=0;){let A=B,F=B-1;F<0&&(F=U.length-1);for(let z=0,Y=h+2*v;z<Y;z++){let q=ce*z,K=ce*(z+1);P(R+A+q,R+F+q,R+F+K,R+A+K)}}}function be(U,R,B){l.push(U),l.push(R),l.push(B)}function Oe(U,R,B){C(U),C(R),C(B);let A=n.length/3,F=x.generateTopUV(i,n,A-3,A-2,A-1);G(F[0]),G(F[1]),G(F[2])}function P(U,R,B,A){C(U),C(R),C(A),C(R),C(B),C(A);let F=n.length/3,z=x.generateSideWallUV(i,n,F-6,F-3,F-2,F-1);G(z[0]),G(z[1]),G(z[3]),G(z[1]),G(z[2]),G(z[3])}function C(U){n.push(l[3*U+0]),n.push(l[3*U+1]),n.push(l[3*U+2])}function G(U){s.push(U.x),s.push(U.y)}(function(){let U=n.length/3;if(d){let R=0,B=ce*R;for(let A=0;A<le;A++){let F=Q[A];Oe(F[2]+B,F[1]+B,F[0]+B)}R=h+2*v,B=ce*R;for(let A=0;A<le;A++){let F=Q[A];Oe(F[0]+B,F[1]+B,F[2]+B)}}else{for(let R=0;R<le;R++){let B=Q[R];Oe(B[2],B[1],B[0])}for(let R=0;R<le;R++){let B=Q[R];Oe(B[0]+ce*h,B[1]+ce*h,B[2]+ce*h)}}i.addGroup(U,n.length/3-U,0)})(),function(){let U=n.length/3,R=0;ze(re,R),R+=re.length;for(let B=0,A=N.length;B<A;B++){let F=N[B];ze(F,R),R+=F.length}i.addGroup(U,n.length/3-U,1)}()}this.setAttribute("position",new xe(n,3)),this.setAttribute("uv",new xe(s,2)),this.computeVertexNormals()}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Uo[n.type]().fromJSON(n)),new Dr(i,e.options)}}let Vm={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new ne(s,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*n],p=e[3*n+1],f=e[3*n+2],m=e[3*s],v=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-u),new ne(d,1-f),new ne(m,1-y)]:[new ne(o,1-l),new ne(h,1-u),new ne(p,1-f),new ne(v,1-y)]}};class Ir extends Ei{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ir(e.radius,e.detail)}}class Qn extends Ei{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qn(e.radius,e.detail)}}class Or extends Fe{constructor(e=.5,t=1,i=8,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(n=Math.max(1,n)),p=new E,f=new ne;for(let m=0;m<=n;m++){for(let v=0;v<=i;v++){let y=s+v/i*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<n;m++){let v=m*(i+1);for(let y=0;y<i;y++){let x=y+v,_=x,b=x+i+1,S=x+i+2,T=x+1;o.push(_,b,T),o.push(b,S,T)}}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}static fromJSON(e){return new Or(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Nr extends Fe{constructor(e=new hn([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=n.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;gi.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,y=f.length;v<y;v++){let x=f[v];gi.isClockWise(x)===!0&&(f[v]=x.reverse())}let m=gi.triangulateShape(p,f);for(let v=0,y=f.length;v<y;v++){let x=f[v];p=p.concat(x)}for(let v=0,y=p.length;v<y;v++){let x=p[v];n.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let v=0,y=m.length;v<y;v++){let x=m[v],_=x[0]+u,b=x[1]+u,S=x[2]+u;i.push(_,b,S),l+=3}}this.setIndex(i),this.setAttribute("position",new xe(n,3)),this.setAttribute("normal",new xe(s,3)),this.setAttribute("uv",new xe(a,2))}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new Nr(i,e.curveSegments)}}class er extends Fe{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],f=[],m=[],v=[];for(let y=0;y<=i;y++){let x=[],_=y/i,b=0;y==0&&a==0?b=.5/t:y==i&&l==Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){let T=S/t;u.x=-e*Math.cos(n+T*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(n+T*s)*Math.sin(a+_*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),v.push(T+b,1-_),x.push(c++)}h.push(x)}for(let y=0;y<i;y++)for(let x=0;x<t;x++){let _=h[y][x+1],b=h[y][x],S=h[y+1][x],T=h[y+1][x+1];(y!==0||a>0)&&p.push(_,b,T),(y!==i-1||l<Math.PI)&&p.push(b,S,T)}this.setIndex(p),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(m,3)),this.setAttribute("uv",new xe(v,2))}static fromJSON(e){return new er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zr extends Ei{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zr(e.radius,e.detail)}}class Fr extends Fe{constructor(e=1,t=.4,i=8,n=6,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let m=f/n*s,v=p/i*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(m),u.y=(e+t*Math.cos(v))*Math.sin(m),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let m=(n+1)*p+f-1,v=(n+1)*(p-1)+f-1,y=(n+1)*(p-1)+f,x=(n+1)*p+f;a.push(m,v,x),a.push(v,y,x)}this.setIndex(a),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(c,2))}static fromJSON(e){return new Fr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ur extends Fe{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,f=new E,m=new E,v=new E,y=new E;for(let _=0;_<=i;++_){let b=_/i*s*Math.PI*2;x(b,s,a,e,p),x(b+.01,s,a,e,f),v.subVectors(f,p),y.addVectors(f,p),m.crossVectors(v,y),y.crossVectors(m,v),m.normalize(),y.normalize();for(let S=0;S<=n;++S){let T=S/n*Math.PI*2,D=-t*Math.cos(T),O=t*Math.sin(T);u.x=p.x+(D*y.x+O*m.x),u.y=p.y+(D*y.y+O*m.y),u.z=p.z+(D*y.z+O*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/i),h.push(S/n)}}for(let _=1;_<=i;_++)for(let b=1;b<=n;b++){let S=(n+1)*(_-1)+(b-1),T=(n+1)*_+(b-1),D=(n+1)*_+b,O=(n+1)*(_-1)+b;o.push(S,T,O),o.push(T,D,O)}function x(_,b,S,T,D){let O=Math.cos(_),k=Math.sin(_),H=S/b*_,N=Math.cos(H);D.x=T*(2+N)*.5*O,D.y=T*(2+N)*k*.5,D.z=T*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(h,2))}static fromJSON(e){return new Ur(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Br extends Fe{constructor(e=new zo(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new ne,h=new E,u=[],d=[],p=[],f=[];function m(v){h=e.getPointAt(v/t,h);let y=a.normals[v],x=a.binormals[v];for(let _=0;_<=n;_++){let b=_/n*Math.PI*2,S=Math.sin(b),T=-Math.cos(b);l.x=T*y.x+S*x.x,l.y=T*y.y+S*x.y,l.z=T*y.z+S*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),function(){for(let v=0;v<=t;v++)for(let y=0;y<=n;y++)c.x=v/t,c.y=y/n,p.push(c.x,c.y)}(),function(){for(let v=1;v<=t;v++)for(let y=1;y<=n;y++){let x=(n+1)*(v-1)+(y-1),_=(n+1)*v+(y-1),b=(n+1)*v+y,S=(n+1)*(v-1)+y;f.push(x,_,S),f.push(_,b,S)}}()})(),this.setIndex(f),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(p,2))}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Br(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wh extends Fe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let v=o.getX(p+m),y=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,v),s.fromBufferAttribute(a,y),Sh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Sh(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new xe(t,3))}}}function Sh(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Th=Object.freeze({__proto__:null,BoxGeometry:Vi,CapsuleGeometry:Tr,CircleGeometry:Ar,ConeGeometry:Er,CylinderGeometry:cn,DodecahedronGeometry:Cr,EdgesGeometry:gh,ExtrudeGeometry:Dr,IcosahedronGeometry:Ir,LatheGeometry:$n,OctahedronGeometry:Qn,PlaneGeometry:Gn,PolyhedronGeometry:Ei,RingGeometry:Or,ShapeGeometry:Nr,SphereGeometry:er,TetrahedronGeometry:zr,TorusGeometry:Fr,TorusKnotGeometry:Ur,TubeGeometry:Br,WireframeGeometry:wh});class Ah extends Rt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Eh extends mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vo extends Rt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ch extends Vo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Lh extends Rt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rh extends Rt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Ph extends Rt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Dh extends Rt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ih extends Rt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oh extends Ft{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function ei(r,e,t){return Ho(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function dn(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ho(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Nh(r){let e=r.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,n){return r[i]-r[n]}),t}function Wo(r,e,t){let i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){let o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function jo(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}var Hm=Object.freeze({__proto__:null,arraySlice:ei,convertArray:dn,isTypedArray:Ho,getKeyframeOrder:Nh,sortedArray:Wo,flattenJSON:jo,subclip:function(r,e,t,i,n=30){let s=r.clone();s.name=e;let a=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*n;if(!(f<t||f>=i)){u.push(c.times[p]);for(let m=0;m<h;++m)d.push(c.values[p*h+m])}}u.length!==0&&(c.times=dn(u,c.times.constructor),c.values=dn(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,i=30){i<=0&&(i=30);let n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(y){return y.name===o.name&&y.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=o.times.length-1,m;if(s<=o.times[0]){let y=h,x=u-h;m=ei(o.values,y,x)}else if(s>=o.times[f]){let y=f*u+h,x=y+u-h;m=ei(o.values,y,x)}else{let y=o.createInterpolant(),x=h,_=u-h;y.evaluate(s),m=ei(y.resultBuffer,x,_)}l==="quaternion"&&new Gt().fromArray(m).normalize().conjugate().toArray(m);let v=c.times.length;for(let y=0;y<v;++y){let x=y*p+d;if(l==="quaternion")Gt.multiplyQuaternionsFlat(c.values,x,m,0,c.values,x);else{let _=p-2*d;for(let b=0;b<_;++b)c.values[x+b]-=m[b]}}}return r.blendMode=2501,r}});class kr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(e>=s)break e;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zh extends kr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-i;break;case 2402:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*i-t;break;case 2402:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),m=f*f,v=m*f,y=-d*v+2*d*m-d*f,x=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*f+1,_=(-1-p)*v+(1.5+p)*m+.5*f,b=p*v-p*m;for(let S=0;S!==o;++S)s[S]=y*a[h+S]+x*a[c+S]+_*a[l+S]+b*a[u+S];return s}}class Xo extends kr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Fh extends kr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dn(t,this.TimeBufferType),this.values=dn(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dn(e.times,Array),values:dn(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=ei(i,s,a),this.values=ei(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ho(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=ei(this.times),t=ei(this.values),i=this.getValueSize(),n=this.getInterpolation()===2302,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ei(e,0,a),this.values=ei(t,0,a*i)):(this.times=e,this.values=t),this}clone(){let e=ei(this.times,0),t=ei(this.values,0),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hi.prototype.TimeBufferType=Float32Array,hi.prototype.ValueBufferType=Float32Array,hi.prototype.DefaultInterpolation=2301;class pn extends hi{}pn.prototype.ValueTypeName="bool",pn.prototype.ValueBufferType=Array,pn.prototype.DefaultInterpolation=2300,pn.prototype.InterpolantFactoryMethodLinear=void 0,pn.prototype.InterpolantFactoryMethodSmooth=void 0;class qo extends hi{}qo.prototype.ValueTypeName="color";class Gr extends hi{}Gr.prototype.ValueTypeName="number";class Uh extends kr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)Gt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class tr extends hi{InterpolantFactoryMethodLinear(e){return new Uh(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion",tr.prototype.DefaultInterpolation=2301,tr.prototype.InterpolantFactoryMethodSmooth=void 0;class mn extends hi{}mn.prototype.ValueTypeName="string",mn.prototype.ValueBufferType=Array,mn.prototype.DefaultInterpolation=2300,mn.prototype.InterpolantFactoryMethodLinear=void 0,mn.prototype.InterpolantFactoryMethodSmooth=void 0;class Vr extends hi{}Vr.prototype.ValueTypeName="vector";class Hr{constructor(e,t=-1,i,n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ot(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Wm(i[a]).scale(n));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(hi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=Nh(l);l=Wo(l,1,h),c=Wo(c,1,h),n||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new Gr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(c)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,u,d,p,f){if(d.length!==0){let m=[],v=[];jo(d,m,v,p),m.length!==0&&f.push(new h(u,m,v))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let m=[],v=[];for(let y=0;y!==u[p].morphTargets.length;++y){let x=u[p];m.push(x.time),v.push(x.morphTarget===f?1:0)}n.push(new Gr(".morphTargetInfluence["+f+"]",m,v))}l=d.length*a}else{let d=".bones["+t[h].name+"]";i(Vr,d+".position",u,"pos",n),i(tr,d+".quaternion",u,"rot",n),i(Vr,d+".scale",u,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){let n=this.tracks[t];e=Math.max(e,n.times[n.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gr;case"vector":case"vector2":case"vector3":case"vector4":return Vr;case"color":return qo;case"quaternion":return tr;case"bool":case"boolean":return pn;case"string":return mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){let t=[],i=[];jo(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}let fn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yo{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}}let Bh=new Yo;class jt{constructor(e){this.manager=e!==void 0?e:Bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}let Ci={};class jm extends Error{constructor(e,t){super(e),this.response=t}}class Li extends jt{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=fn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ci[e]!==void 0)return void Ci[e].push({onLoad:t,onProgress:i,onError:n});Ci[e]=[],Ci[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ci[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,m=0,v=new ReadableStream({start(y){(function x(){u.read().then(({done:_,value:b})=>{if(_)y.close();else{m+=b.byteLength;let S=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:p});for(let T=0,D=h.length;T<D;T++){let O=h[T];O.onProgress&&O.onProgress(S)}y.enqueue(b),x()}})})()}});return new Response(v)}throw new jm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{fn.add(e,c);let h=Ci[e];delete Ci[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Ci[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Wr extends jt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=fn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=lr("img");function l(){h(),fn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ji extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class kh extends ji{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}let Zo=new De,Gh=new E,Vh=new E;class Jo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vh),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xm extends Jo{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=2*Ii*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;i===t.fov&&n===t.aspect&&s===t.far||(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hh extends ji{constructor(e,t,i=0,n=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Xm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let Wh=new De,jr=new E,$o=new E;class qm extends Jo{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),i.position.copy(jr),$o.copy(i.position),$o.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($o),i.updateMatrixWorld(),n.makeTranslation(-jr.x,-jr.y,-jr.z),Wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh)}}class jh extends ji{constructor(e,t,i=0,n=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new qm}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ym extends Jo{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xh extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.shadow=new Ym}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qh extends ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yh extends ji{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Zh{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],i*n*1.092548),t.addScaledVector(a[5],n*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],i*s*1.092548),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){let i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*n),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*i),t.addScaledVector(a[4],.858086*i*n),t.addScaledVector(a[5],.858086*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+3*n);return this}toArray(e=[],t=0){let i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+3*n);return e}static getBasisAt(e,t){let i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}}class na extends ji{constructor(e=new Zh,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ra extends jt{constructor(e){super(e),this.textures={}}load(e,t,i,n){let s=this,a=new Li(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let n=ra.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==1&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let a=e.uniforms[s];switch(n.uniforms[s]={},a.type){case"t":n.uniforms[s].value=i(a.value);break;case"c":n.uniforms[s].value=new fe().setHex(a.value);break;case"v2":n.uniforms[s].value=new ne().fromArray(a.value);break;case"v3":n.uniforms[s].value=new E().fromArray(a.value);break;case"v4":n.uniforms[s].value=new $e().fromArray(a.value);break;case"m3":n.uniforms[s].value=new kt().fromArray(a.value);break;case"m4":n.uniforms[s].value=new De().fromArray(a.value);break;default:n.uniforms[s].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)n.extensions[s]=e.extensions[s];if(e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),n.normalScale=new ne().fromArray(s)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){return new{ShadowMaterial:Ah,SpriteMaterial:wo,RawShaderMaterial:Eh,ShaderMaterial:mi,PointsMaterial:Eo,MeshPhysicalMaterial:Ch,MeshStandardMaterial:Vo,MeshPhongMaterial:Lh,MeshToonMaterial:Rh,MeshNormalMaterial:Ph,MeshLambertMaterial:Dh,MeshDepthMaterial:_o,MeshDistanceMaterial:bo,MeshBasicMaterial:Ui,MeshMatcapMaterial:Ih,LineDashedMaterial:Oh,LineBasicMaterial:Ft,Material:Rt}[e]}}class Ko{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Jh extends Fe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $h extends jt{constructor(e){super(e)}load(e,t,i,n){let s=this,a=new Li(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}parse(e){let t={},i={};function n(u,d){if(t[d]!==void 0)return t[d];let p=u.interleavedBuffers[d],f=function(y,x){if(i[x]!==void 0)return i[x];let _=y.arrayBuffers[x],b=new Uint32Array(_).buffer;return i[x]=b,b}(u,p.buffer),m=An(p.type,f),v=new Us(m,p.stride);return v.uuid=p.uuid,t[d]=v,v}let s=e.isInstancedBufferGeometry?new Jh:new Fe,a=e.data.index;if(a!==void 0){let u=An(a.type,a.array);s.setIndex(new it(u,1))}let o=e.data.attributes;for(let u in o){let d=o[u],p;if(d.isInterleavedBufferAttribute){let f=n(e.data,d.data);p=new ln(f,d.itemSize,d.offset,d.normalized)}else{let f=An(d.type,d.array);p=new(d.isInstancedBufferAttribute?Jn:it)(f,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),d.updateRange!==void 0&&(p.updateRange.offset=d.updateRange.offset,p.updateRange.count=d.updateRange.count),s.setAttribute(u,p)}let l=e.data.morphAttributes;if(l)for(let u in l){let d=l[u],p=[];for(let f=0,m=d.length;f<m;f++){let v=d[f],y;if(v.isInterleavedBufferAttribute){let x=n(e.data,v.data);y=new ln(x,v.itemSize,v.offset,v.normalized)}else{let x=An(v.type,v.array);y=new it(x,v.itemSize,v.normalized)}v.name!==void 0&&(y.name=v.name),p.push(y)}s.morphAttributes[u]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let u=0,d=c.length;u!==d;++u){let p=c[u];s.addGroup(p.start,p.count,p.materialIndex)}let h=e.data.boundingSphere;if(h!==void 0){let u=new E;h.center!==void 0&&u.fromArray(h.center),s.boundingSphere=new an(u,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}let Zm={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},Kh={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Qh={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},sa;class Qo{static getContext(){return sa===void 0&&(sa=new(window.AudioContext||window.webkitAudioContext)),sa}static setContext(e){sa=e}}let eu=new De,tu=new De,gn=new De;class iu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nu(){return(typeof performance>"u"?Date:performance).now()}let vn=new E,ru=new Gt,Jm=new E,xn=new E;class su extends qe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}let yn=new E,au=new Gt,$m=new E,_n=new E;class ou{constructor(e,t,i){let n,s,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,s=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Gt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){let a=this._workIndex*s;Gt.multiplyQuaternionsFlat(e,a,e,t,e,i),Gt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){let a=1-n;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}}let Km="\\[\\]\\.:\\/",Qm=new RegExp("[\\[\\]\\.:\\/]","g"),el="[^\\[\\]\\.:\\/]",ef="[^"+Km.replace("\\.","")+"]",tf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",el)+/(WCOD+)?/.source.replace("WCOD",ef)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el)+"$"),nf=["material","materials","bones","map"];class je{constructor(e,t,i){this.path=t,this.parsedPath=i||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,i):new je(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(e){let t=tf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);nf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=class{constructor(r,e,t){let i=t||je.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray],je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rf{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,s=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,s=this._loopCount,a=i===2202;if(e===0)return s===-1?n:a&&(1&s)==1?t-n:n;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else{if(!(n<0)){this.time=n;break e}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(1&s)==1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=2401,n.endingEnd=2401):(n.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,n.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,i){let n=this._mixer,s=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}let sf=new Float32Array(1);class tl{constructor(e){this.value=e}clone(){return new tl(this.value.clone===void 0?this.value:this.value.clone())}}let af=0;function lu(r,e){return r.distance-e.distance}function il(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){let n=r.children;for(let s=0,a=n.length;s<a;s++)il(n[s],e,t,!0)}}let cu=new ne,hu=new E,aa=new E,uu=new E,Xi=new E,oa=new De,nl=new De;function du(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,du(r.children[t]));return e}let of=new E,pu=new fe,mu=new fe,fu=new E,la=new E,gu=new E,ca=new E,ht=new Ls;function dt(r,e,t,i,n,s,a){ca.set(n,s,a).unproject(i);let o=e[r];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],ca.x,ca.y,ca.z)}}let ha=new tn,vu=new E,ua,rl,Ri=lf();function lf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var cf=Object.freeze({__proto__:null,toHalfFloat:function(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Je(r,-65504,65504),Ri.floatView[0]=r;let e=Ri.uint32View[0],t=e>>23&511;return Ri.baseTable[t]+((8388607&e)>>Ri.shiftTable[t])},fromHalfFloat:function(r){let e=r>>10;return Ri.uint32View[0]=Ri.mantissaTable[Ri.offsetTable[e]+(1023&r)]+Ri.exponentTable[e],Ri.floatView[0]}});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:w}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=w),g.ACESFilmicToneMapping=4,g.AddEquation=100,g.AddOperation=2,g.AdditiveAnimationBlendMode=2501,g.AdditiveBlending=2,g.AlphaFormat=1021,g.AlwaysDepth=1,g.AlwaysStencilFunc=519,g.AmbientLight=qh,g.AmbientLightProbe=class extends na{constructor(r,e=1){super(void 0,e),this.isAmbientLightProbe=!0;let t=new fe().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}},g.AnimationClip=Hr,g.AnimationLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=this,s=new Li(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{e(n.parse(JSON.parse(a)))}catch(o){i?i(o):console.error(o),n.manager.itemError(r)}},t,i)}parse(r){let e=[];for(let t=0;t<r.length;t++){let i=Hr.parse(r[t]);e.push(i)}return e}},g.AnimationMixer=class extends et{constructor(r){super(),this._root=r,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(r,e){let t=r._localRoot||this._root,i=r._clip.tracks,n=i.length,s=r._propertyBindings,a=r._interpolants,o=t.uuid,l=this._bindingsByRootAndName,c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==n;++h){let u=i[h],d=u.name,p=c[d];if(p!==void 0)++p.referenceCount,s[h]=p;else{if(p=s[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,d));continue}let f=e&&e._propertyBindings[h].binding.parsedPath;p=new ou(je.create(t,d,f),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,d),s[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(r){if(!this._isActiveAction(r)){if(r._cacheIndex===null){let t=(r._localRoot||this._root).uuid,i=r._clip.uuid,n=this._actionsByClip[i];this._bindAction(r,n&&n.knownActions[0]),this._addInactiveAction(r,i,t)}let e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){let n=e[t];n.useCount++==0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(r)}}_deactivateAction(r){if(this._isActiveAction(r)){let e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){let n=e[t];--n.useCount==0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(r)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let r=this;this.stats={actions:{get total(){return r._actions.length},get inUse(){return r._nActiveActions}},bindings:{get total(){return r._bindings.length},get inUse(){return r._nActiveBindings}},controlInterpolants:{get total(){return r._controlInterpolants.length},get inUse(){return r._nActiveControlInterpolants}}}}_isActiveAction(r){let e=r._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(r,e,t){let i=this._actions,n=this._actionsByClip,s=n[e];if(s===void 0)s={knownActions:[r],actionByRoot:{}},r._byClipCacheIndex=0,n[e]=s;else{let a=s.knownActions;r._byClipCacheIndex=a.length,a.push(r)}r._cacheIndex=i.length,i.push(r),s.actionByRoot[t]=r}_removeInactiveAction(r){let e=this._actions,t=e[e.length-1],i=r._cacheIndex;t._cacheIndex=i,e[i]=t,e.pop(),r._cacheIndex=null;let n=r._clip.uuid,s=this._actionsByClip,a=s[n],o=a.knownActions,l=o[o.length-1],c=r._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),r._byClipCacheIndex=null,delete a.actionByRoot[(r._localRoot||this._root).uuid],o.length===0&&delete s[n],this._removeInactiveBindingsForAction(r)}_removeInactiveBindingsForAction(r){let e=r._propertyBindings;for(let t=0,i=e.length;t!==i;++t){let n=e[t];--n.referenceCount==0&&this._removeInactiveBinding(n)}}_lendAction(r){let e=this._actions,t=r._cacheIndex,i=this._nActiveActions++,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_takeBackAction(r){let e=this._actions,t=r._cacheIndex,i=--this._nActiveActions,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_addInactiveBinding(r,e,t){let i=this._bindingsByRootAndName,n=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[t]=r,r._cacheIndex=n.length,n.push(r)}_removeInactiveBinding(r){let e=this._bindings,t=r.binding,i=t.rootNode.uuid,n=t.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=r._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[n],Object.keys(a).length===0&&delete s[i]}_lendBinding(r){let e=this._bindings,t=r._cacheIndex,i=this._nActiveBindings++,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_takeBackBinding(r){let e=this._bindings,t=r._cacheIndex,i=--this._nActiveBindings,n=e[i];r._cacheIndex=i,e[i]=r,n._cacheIndex=t,e[t]=n}_lendControlInterpolant(){let r=this._controlInterpolants,e=this._nActiveControlInterpolants++,t=r[e];return t===void 0&&(t=new Xo(new Float32Array(2),new Float32Array(2),1,sf),t.__cacheIndex=e,r[e]=t),t}_takeBackControlInterpolant(r){let e=this._controlInterpolants,t=r.__cacheIndex,i=--this._nActiveControlInterpolants,n=e[i];r.__cacheIndex=i,e[i]=r,n.__cacheIndex=t,e[t]=n}clipAction(r,e,t){let i=e||this._root,n=i.uuid,s=typeof r=="string"?Hr.findByName(i,r):r,a=s!==null?s.uuid:r,o=this._actionsByClip[a],l=null;if(t===void 0&&(t=s!==null?s.blendMode:2500),o!==void 0){let h=o.actionByRoot[n];if(h!==void 0&&h.blendMode===t)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let c=new rf(this,s,e,t);return this._bindAction(c,l),this._addInactiveAction(c,a,n),c}existingAction(r,e){let t=e||this._root,i=t.uuid,n=typeof r=="string"?Hr.findByName(t,r):r,s=n?n.uuid:r,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let r=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)r[e].stop();return this}update(r){r*=this.timeScale;let e=this._actions,t=this._nActiveActions,i=this.time+=r,n=Math.sign(r),s=this._accuIndex^=1;for(let l=0;l!==t;++l)e[l]._update(i,r,n,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(r){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(r)}getRoot(){return this._root}uncacheClip(r){let e=this._actions,t=r.uuid,i=this._actionsByClip,n=i[t];if(n!==void 0){let s=n.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let c=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,e[c]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[t]}}uncacheRoot(r){let e=r.uuid,t=this._actionsByClip;for(let n in t){let s=t[n].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[e];if(i!==void 0)for(let n in i){let s=i[n];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(r,e){let t=this.existingAction(r,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}},g.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ot(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let r={};this._indicesByUUID=r;for(let t=0,i=arguments.length;t!==i;++t)r[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let r=this._objects,e=this._indicesByUUID,t=this._paths,i=this._parsedPaths,n=this._bindings,s=n.length,a,o=r.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){let u=arguments[c],d=u.uuid,p=e[d];if(p===void 0){p=o++,e[d]=p,r.push(u);for(let f=0,m=s;f!==m;++f)n[f].push(new je(u,t[f],i[f]))}else if(p<l){a=r[p];let f=--l,m=r[f];e[m.uuid]=p,r[p]=m,e[d]=f,r[f]=u;for(let v=0,y=s;v!==y;++v){let x=n[v],_=x[f],b=x[p];x[p]=_,b===void 0&&(b=new je(u,t[v],i[v])),x[f]=b}}else r[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let r=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length,n=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){let o=arguments[s],l=o.uuid,c=e[l];if(c!==void 0&&c>=n){let h=n++,u=r[h];e[u.uuid]=c,r[c]=u,e[l]=h,r[h]=o;for(let d=0,p=i;d!==p;++d){let f=t[d],m=f[h],v=f[c];f[c]=m,f[h]=v}}}this.nCachedObjects_=n}uncache(){let r=this._objects,e=this._indicesByUUID,t=this._bindings,i=t.length,n=this.nCachedObjects_,s=r.length;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a].uuid,c=e[l];if(c!==void 0)if(delete e[l],c<n){let h=--n,u=r[h],d=--s,p=r[d];e[u.uuid]=c,r[c]=u,e[p.uuid]=h,r[h]=p,r.pop();for(let f=0,m=i;f!==m;++f){let v=t[f],y=v[h],x=v[d];v[c]=y,v[h]=x,v.pop()}}else{let h=--s,u=r[h];h>0&&(e[u.uuid]=c),r[c]=u,r.pop();for(let d=0,p=i;d!==p;++d){let f=t[d];f[c]=f[h],f.pop()}}}this.nCachedObjects_=n}subscribe_(r,e){let t=this._bindingsIndicesByPath,i=t[r],n=this._bindings;if(i!==void 0)return n[i];let s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);i=n.length,t[r]=i,s.push(r),a.push(e),n.push(h);for(let u=c,d=o.length;u!==d;++u){let p=o[u];h[u]=new je(p,r,e)}return h}unsubscribe_(r){let e=this._bindingsIndicesByPath,t=e[r];if(t!==void 0){let i=this._paths,n=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[r[a]]=t,s[t]=o,s.pop(),n[t]=n[a],n.pop(),i[t]=i[a],i.pop()}}},g.AnimationUtils=Hm,g.ArcCurve=hh,g.ArrayCamera=Nc,g.ArrowHelper=class extends qe{constructor(r=new E(0,0,1),e=new E(0,0,0),t=1,i=16776960,n=.2*t,s=.2*n){super(),this.type="ArrowHelper",ua===void 0&&(ua=new Fe,ua.setAttribute("position",new xe([0,0,0,0,1,0],3)),rl=new cn(0,.5,1,5,1),rl.translate(0,-.5,0)),this.position.copy(e),this.line=new Wi(ua,new Ft({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new At(rl,new Ui({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(r),this.setLength(t,n,s)}setDirection(r){if(r.y>.99999)this.quaternion.set(0,0,0,1);else if(r.y<-.99999)this.quaternion.set(1,0,0,0);else{vu.set(r.z,0,-r.x).normalize();let e=Math.acos(r.y);this.quaternion.setFromAxisAngle(vu,e)}}setLength(r,e=.2*r,t=.2*e){this.line.scale.set(1,Math.max(1e-4,r-e),1),this.line.updateMatrix(),this.cone.scale.set(t,e,t),this.cone.position.y=r,this.cone.updateMatrix()}setColor(r){this.line.material.color.set(r),this.cone.material.color.set(r)}copy(r){return super.copy(r,!1),this.line.copy(r.line),this.cone.copy(r.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},g.Audio=su,g.AudioAnalyser=class{constructor(r,e=2048){this.analyser=r.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),r.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let r=0,e=this.getFrequencyData();for(let t=0;t<e.length;t++)r+=e[t];return r/e.length}},g.AudioContext=Qo,g.AudioListener=class extends qe{constructor(){super(),this.type="AudioListener",this.context=Qo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new iu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(r){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=r,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}updateMatrixWorld(r){super.updateMatrixWorld(r);let e=this.context.listener,t=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vn,ru,Jm),xn.set(0,0,-1).applyQuaternion(ru),e.positionX){let i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(vn.x,i),e.positionY.linearRampToValueAtTime(vn.y,i),e.positionZ.linearRampToValueAtTime(vn.z,i),e.forwardX.linearRampToValueAtTime(xn.x,i),e.forwardY.linearRampToValueAtTime(xn.y,i),e.forwardZ.linearRampToValueAtTime(xn.z,i),e.upX.linearRampToValueAtTime(t.x,i),e.upY.linearRampToValueAtTime(t.y,i),e.upZ.linearRampToValueAtTime(t.z,i)}else e.setPosition(vn.x,vn.y,vn.z),e.setOrientation(xn.x,xn.y,xn.z,t.x,t.y,t.z)}},g.AudioLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=this,s=new Li(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{let o=a.slice(0);Qo.getContext().decodeAudioData(o,function(l){e(l)})}catch(o){i?i(o):console.error(o),n.manager.itemError(r)}},t,i)}},g.AxesHelper=class extends fi{constructor(r=1){let e=[0,0,0,r,0,0,0,0,0,0,r,0,0,0,0,0,0,r],t=new Fe;t.setAttribute("position",new xe(e,3)),t.setAttribute("color",new xe([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(t,new Ft({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(r,e,t){let i=new fe,n=this.geometry.attributes.color.array;return i.set(r),i.toArray(n,0),i.toArray(n,3),i.set(e),i.toArray(n,6),i.toArray(n,9),i.set(t),i.toArray(n,12),i.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BackSide=1,g.BasicDepthPacking=3200,g.BasicShadowMap=0,g.Bone=To,g.BooleanKeyframeTrack=pn,g.Box2=class{constructor(r=new ne(1/0,1/0),e=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=r,this.max=e}set(r,e){return this.min.copy(r),this.max.copy(e),this}setFromPoints(r){this.makeEmpty();for(let e=0,t=r.length;e<t;e++)this.expandByPoint(r[e]);return this}setFromCenterAndSize(r,e){let t=cu.copy(e).multiplyScalar(.5);return this.min.copy(r).sub(t),this.max.copy(r).add(t),this}clone(){return new this.constructor().copy(this)}copy(r){return this.min.copy(r.min),this.max.copy(r.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(r){return this.isEmpty()?r.set(0,0):r.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(r){return this.isEmpty()?r.set(0,0):r.subVectors(this.max,this.min)}expandByPoint(r){return this.min.min(r),this.max.max(r),this}expandByVector(r){return this.min.sub(r),this.max.add(r),this}expandByScalar(r){return this.min.addScalar(-r),this.max.addScalar(r),this}containsPoint(r){return!(r.x<this.min.x||r.x>this.max.x||r.y<this.min.y||r.y>this.max.y)}containsBox(r){return this.min.x<=r.min.x&&r.max.x<=this.max.x&&this.min.y<=r.min.y&&r.max.y<=this.max.y}getParameter(r,e){return e.set((r.x-this.min.x)/(this.max.x-this.min.x),(r.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(r){return!(r.max.x<this.min.x||r.min.x>this.max.x||r.max.y<this.min.y||r.min.y>this.max.y)}clampPoint(r,e){return e.copy(r).clamp(this.min,this.max)}distanceToPoint(r){return cu.copy(r).clamp(this.min,this.max).sub(r).length()}intersect(r){return this.min.max(r.min),this.max.min(r.max),this}union(r){return this.min.min(r.min),this.max.max(r.max),this}translate(r){return this.min.add(r),this.max.add(r),this}equals(r){return r.min.equals(this.min)&&r.max.equals(this.max)}},g.Box3=tn,g.Box3Helper=class extends fi{constructor(r,e=16776960){let t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Fe;i.setIndex(new it(t,1)),i.setAttribute("position",new xe([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(i,new Ft({color:e,toneMapped:!1})),this.box=r,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(r){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(r))}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BoxBufferGeometry=class extends Vi{constructor(r,e,t,i,n,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(r,e,t,i,n,s)}},g.BoxGeometry=Vi,g.BoxHelper=class extends fi{constructor(r,e=16776960){let t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),n=new Fe;n.setIndex(new it(t,1)),n.setAttribute("position",new it(i,3)),super(n,new Ft({color:e,toneMapped:!1})),this.object=r,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(r){if(r!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ha.setFromObject(this.object),ha.isEmpty())return;let e=ha.min,t=ha.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(r){return this.object=r,this.update(),this}copy(r,e){return super.copy(r,e),this.object=r.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BufferAttribute=it,g.BufferGeometry=Fe,g.BufferGeometryLoader=$h,g.ByteType=1010,g.Cache=fn,g.Camera=Ls,g.CameraHelper=class extends fi{constructor(r){let e=new Fe,t=new Ft({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],n=[],s={};function a(p,f){o(p),o(f)}function o(p){i.push(0,0,0),n.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(i.length/3-1)}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new xe(i,3)),e.setAttribute("color",new xe(n,3)),super(e,t),this.type="CameraHelper",this.camera=r,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();let l=new fe(16755200),c=new fe(16711680),h=new fe(43775),u=new fe(16777215),d=new fe(3355443);this.setColors(l,c,h,u,d)}setColors(r,e,t,i,n){let s=this.geometry.getAttribute("color");s.setXYZ(0,r.r,r.g,r.b),s.setXYZ(1,r.r,r.g,r.b),s.setXYZ(2,r.r,r.g,r.b),s.setXYZ(3,r.r,r.g,r.b),s.setXYZ(4,r.r,r.g,r.b),s.setXYZ(5,r.r,r.g,r.b),s.setXYZ(6,r.r,r.g,r.b),s.setXYZ(7,r.r,r.g,r.b),s.setXYZ(8,r.r,r.g,r.b),s.setXYZ(9,r.r,r.g,r.b),s.setXYZ(10,r.r,r.g,r.b),s.setXYZ(11,r.r,r.g,r.b),s.setXYZ(12,r.r,r.g,r.b),s.setXYZ(13,r.r,r.g,r.b),s.setXYZ(14,r.r,r.g,r.b),s.setXYZ(15,r.r,r.g,r.b),s.setXYZ(16,r.r,r.g,r.b),s.setXYZ(17,r.r,r.g,r.b),s.setXYZ(18,r.r,r.g,r.b),s.setXYZ(19,r.r,r.g,r.b),s.setXYZ(20,r.r,r.g,r.b),s.setXYZ(21,r.r,r.g,r.b),s.setXYZ(22,r.r,r.g,r.b),s.setXYZ(23,r.r,r.g,r.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,t.r,t.g,t.b),s.setXYZ(33,t.r,t.g,t.b),s.setXYZ(34,t.r,t.g,t.b),s.setXYZ(35,t.r,t.g,t.b),s.setXYZ(36,t.r,t.g,t.b),s.setXYZ(37,t.r,t.g,t.b),s.setXYZ(38,i.r,i.g,i.b),s.setXYZ(39,i.r,i.g,i.b),s.setXYZ(40,n.r,n.g,n.b),s.setXYZ(41,n.r,n.g,n.b),s.setXYZ(42,n.r,n.g,n.b),s.setXYZ(43,n.r,n.g,n.b),s.setXYZ(44,n.r,n.g,n.b),s.setXYZ(45,n.r,n.g,n.b),s.setXYZ(46,n.r,n.g,n.b),s.setXYZ(47,n.r,n.g,n.b),s.setXYZ(48,n.r,n.g,n.b),s.setXYZ(49,n.r,n.g,n.b),s.needsUpdate=!0}update(){let r=this.geometry,e=this.pointMap;ht.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),dt("c",e,r,ht,0,0,-1),dt("t",e,r,ht,0,0,1),dt("n1",e,r,ht,-1,-1,-1),dt("n2",e,r,ht,1,-1,-1),dt("n3",e,r,ht,-1,1,-1),dt("n4",e,r,ht,1,1,-1),dt("f1",e,r,ht,-1,-1,1),dt("f2",e,r,ht,1,-1,1),dt("f3",e,r,ht,-1,1,1),dt("f4",e,r,ht,1,1,1),dt("u1",e,r,ht,.7,1.1,-1),dt("u2",e,r,ht,-.7,1.1,-1),dt("u3",e,r,ht,0,2,-1),dt("cf1",e,r,ht,-1,0,1),dt("cf2",e,r,ht,1,0,1),dt("cf3",e,r,ht,0,-1,1),dt("cf4",e,r,ht,0,1,1),dt("cn1",e,r,ht,-1,0,-1),dt("cn2",e,r,ht,1,0,-1),dt("cn3",e,r,ht,0,-1,-1),dt("cn4",e,r,ht,0,1,-1),r.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},g.CanvasTexture=class extends gt{constructor(r,e,t,i,n,s,a,o,l){super(r,e,t,i,n,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},g.CapsuleBufferGeometry=class extends Tr{constructor(r,e,t,i){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(r,e,t,i)}},g.CapsuleGeometry=Tr,g.CatmullRomCurve3=uh,g.CineonToneMapping=3,g.CircleBufferGeometry=class extends Ar{constructor(r,e,t,i){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(r,e,t,i)}},g.CircleGeometry=Ar,g.ClampToEdgeWrapping=1001,g.Clock=iu,g.Color=fe,g.ColorKeyframeTrack=qo,g.ColorManagement=Jt,g.CompressedArrayTexture=class extends Lo{constructor(r,e,t,i,n,s){super(r,e,t,n,s),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=1001}},g.CompressedTexture=Lo,g.CompressedTextureLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=this,s=[],a=new Lo,o=new Li(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(n.withCredentials);let l=0;function c(h){o.load(r[h],function(u){let d=n.parse(u,!0);s[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=1006),a.image=s,a.format=d.format,a.needsUpdate=!0,e&&e(a))},t,i)}if(Array.isArray(r))for(let h=0,u=r.length;h<u;++h)c(h);else o.load(r,function(h){let u=n.parse(h,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){s[p]={mipmaps:[]};for(let f=0;f<u.mipmapCount;f++)s[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+f]),s[p].format=u.format,s[p].width=u.width,s[p].height=u.height}a.image=s}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=1006),a.format=u.format,a.needsUpdate=!0,e&&e(a)},t,i);return a}},g.ConeBufferGeometry=class extends Er{constructor(r,e,t,i,n,s,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(r,e,t,i,n,s,a)}},g.ConeGeometry=Er,g.CubeCamera=ac,g.CubeReflectionMapping=301,g.CubeRefractionMapping=302,g.CubeTexture=fr,g.CubeTextureLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=new fr,s=new Wr(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(r[l],function(c){n.images[l]=c,a++,a===6&&(n.needsUpdate=!0,e&&e(n))},void 0,i)}for(let l=0;l<r.length;++l)o(l);return n}},g.CubeUVReflectionMapping=306,g.CubicBezierCurve=Oo,g.CubicBezierCurve3=ph,g.CubicInterpolant=zh,g.CullFaceBack=1,g.CullFaceFront=2,g.CullFaceFrontBack=3,g.CullFaceNone=0,g.Curve=ci,g.CurvePath=fh,g.CustomBlending=5,g.CustomToneMapping=5,g.CylinderBufferGeometry=class extends cn{constructor(r,e,t,i,n,s,a,o){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(r,e,t,i,n,s,a,o)}},g.CylinderGeometry=cn,g.Cylindrical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.theta=e,this.y=t,this}set(r,e,t){return this.radius=r,this.theta=e,this.y=t,this}copy(r){return this.radius=r.radius,this.theta=r.theta,this.y=r.y,this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+t*t),this.theta=Math.atan2(r,t),this.y=e,this}clone(){return new this.constructor().copy(this)}},g.Data3DTexture=ds,g.DataArrayTexture=cr,g.DataTexture=Zn,g.DataTexture2DArray=class extends cr{constructor(r,e,t,i){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(r,e,t,i)}},g.DataTexture3D=class extends ds{constructor(r,e,t,i){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(r,e,t,i)}},g.DataTextureLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=this,s=new Zn,a=new Li(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(n.withCredentials),a.load(r,function(o){let l=n.parse(o);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:1001,s.wrapT=l.wrapT!==void 0?l.wrapT:1001,s.magFilter=l.magFilter!==void 0?l.magFilter:1006,s.minFilter=l.minFilter!==void 0?l.minFilter:1006,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=1008),l.mipmapCount===1&&(s.minFilter=1006),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,e&&e(s,l))},t,i),s}},g.DataUtils=cf,g.DecrementStencilOp=7683,g.DecrementWrapStencilOp=34056,g.DefaultLoadingManager=Bh,g.DepthFormat=1026,g.DepthStencilFormat=1027,g.DepthTexture=zc,g.DirectionalLight=Xh,g.DirectionalLightHelper=class extends qe{constructor(r,e,t){super(),this.light=r,this.light.updateMatrixWorld(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,e===void 0&&(e=1);let i=new Fe;i.setAttribute("position",new xe([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let n=new Ft({fog:!1,toneMapped:!1});this.lightPlane=new Wi(i,n),this.add(this.lightPlane),i=new Fe,i.setAttribute("position",new xe([0,0,0,0,0,1],3)),this.targetLine=new Wi(i,n),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){fu.setFromMatrixPosition(this.light.matrixWorld),la.setFromMatrixPosition(this.light.target.matrixWorld),gu.subVectors(la,fu),this.lightPlane.lookAt(la),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(la),this.targetLine.scale.z=gu.length()}},g.DiscreteInterpolant=Fh,g.DodecahedronBufferGeometry=class extends Cr{constructor(r,e){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(r,e)}},g.DodecahedronGeometry=Cr,g.DoubleSide=2,g.DstAlphaFactor=206,g.DstColorFactor=208,g.DynamicCopyUsage=35050,g.DynamicDrawUsage=35048,g.DynamicReadUsage=35049,g.EdgesGeometry=gh,g.EllipseCurve=Ys,g.EqualDepth=4,g.EqualStencilFunc=514,g.EquirectangularReflectionMapping=303,g.EquirectangularRefractionMapping=304,g.Euler=Dn,g.EventDispatcher=et,g.ExtrudeBufferGeometry=class extends Dr{constructor(r,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(r,e)}},g.ExtrudeGeometry=Dr,g.FileLoader=Li,g.Float16BufferAttribute=class extends it{constructor(r,e,t){super(new Uint16Array(r),e,t),this.isFloat16BufferAttribute=!0}},g.Float32BufferAttribute=xe,g.Float64BufferAttribute=class extends it{constructor(r,e,t){super(new Float64Array(r),e,t)}},g.FloatType=1015,g.Fog=Fs,g.FogExp2=zs,g.FramebufferTexture=class extends gt{constructor(r,e,t){super({width:r,height:e}),this.isFramebufferTexture=!0,this.format=t,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}},g.FrontSide=0,g.Frustum=Ps,g.GLBufferAttribute=class{constructor(r,e,t,i,n){this.isGLBufferAttribute=!0,this.buffer=r,this.type=e,this.itemSize=t,this.elementSize=i,this.count=n,this.version=0}set needsUpdate(r){r===!0&&this.version++}setBuffer(r){return this.buffer=r,this}setType(r,e){return this.type=r,this.elementSize=e,this}setItemSize(r){return this.itemSize=r,this}setCount(r){return this.count=r,this}},g.GLSL1="100",g.GLSL3=we,g.GreaterDepth=6,g.GreaterEqualDepth=5,g.GreaterEqualStencilFunc=518,g.GreaterStencilFunc=516,g.GridHelper=class extends fi{constructor(r=10,e=10,t=4473924,i=8947848){t=new fe(t),i=new fe(i);let n=e/2,s=r/e,a=r/2,o=[],l=[];for(let h=0,u=0,d=-a;h<=e;h++,d+=s){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a);let p=h===n?t:i;p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3}let c=new Fe;c.setAttribute("position",new xe(o,3)),c.setAttribute("color",new xe(l,3)),super(c,new Ft({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},g.Group=Wn,g.HalfFloatType=1016,g.HemisphereLight=kh,g.HemisphereLightHelper=class extends qe{constructor(r,e,t){super(),this.light=r,this.light.updateMatrixWorld(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;let i=new Qn(e);i.rotateY(.5*Math.PI),this.material=new Ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let n=i.getAttribute("position"),s=new Float32Array(3*n.count);i.setAttribute("color",new it(s,3)),this.add(new At(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let r=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=r.geometry.getAttribute("color");pu.copy(this.light.color),mu.copy(this.light.groundColor);for(let t=0,i=e.count;t<i;t++){let n=t<i/2?pu:mu;e.setXYZ(t,n.r,n.g,n.b)}e.needsUpdate=!0}r.lookAt(of.setFromMatrixPosition(this.light.matrixWorld).negate())}},g.HemisphereLightProbe=class extends na{constructor(r,e,t=1){super(void 0,t),this.isHemisphereLightProbe=!0;let i=new fe().set(r),n=new fe().set(e),s=new E(i.r,i.g,i.b),a=new E(n.r,n.g,n.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}},g.IcosahedronBufferGeometry=class extends Ir{constructor(r,e){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(r,e)}},g.IcosahedronGeometry=Ir,g.ImageBitmapLoader=class extends jt{constructor(r){super(r),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(r){return this.options=r,this}load(r,e,t,i){r===void 0&&(r=""),this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);let n=this,s=fn.get(r);if(s!==void 0)return n.manager.itemStart(r),setTimeout(function(){e&&e(s),n.manager.itemEnd(r)},0),s;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(r,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(o){fn.add(r,o),e&&e(o),n.manager.itemEnd(r)}).catch(function(o){i&&i(o),n.manager.itemError(r),n.manager.itemEnd(r)}),n.manager.itemStart(r)}},g.ImageLoader=Wr,g.ImageUtils=ja,g.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},g.IncrementStencilOp=7682,g.IncrementWrapStencilOp=34055,g.InstancedBufferAttribute=Jn,g.InstancedBufferGeometry=Jh,g.InstancedInterleavedBuffer=class extends Us{constructor(r,e,t=1){super(r,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){let e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){let e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},g.InstancedMesh=eh,g.Int16BufferAttribute=class extends it{constructor(r,e,t){super(new Int16Array(r),e,t)}},g.Int32BufferAttribute=class extends it{constructor(r,e,t){super(new Int32Array(r),e,t)}},g.Int8BufferAttribute=class extends it{constructor(r,e,t){super(new Int8Array(r),e,t)}},g.IntType=1013,g.InterleavedBuffer=Us,g.InterleavedBufferAttribute=ln,g.Interpolant=kr,g.InterpolateDiscrete=2300,g.InterpolateLinear=2301,g.InterpolateSmooth=2302,g.InvertStencilOp=5386,g.KeepStencilOp=7680,g.KeyframeTrack=hi,g.LOD=jc,g.LatheBufferGeometry=class extends $n{constructor(r,e,t,i){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(r,e,t,i)}},g.LatheGeometry=$n,g.Layers=xs,g.LessDepth=2,g.LessEqualDepth=3,g.LessEqualStencilFunc=515,g.LessStencilFunc=513,g.Light=ji,g.LightProbe=na,g.Line=Wi,g.Line3=class{constructor(r=new E,e=new E){this.start=r,this.end=e}set(r,e){return this.start.copy(r),this.end.copy(e),this}copy(r){return this.start.copy(r.start),this.end.copy(r.end),this}getCenter(r){return r.addVectors(this.start,this.end).multiplyScalar(.5)}delta(r){return r.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(r,e){return this.delta(e).multiplyScalar(r).add(this.start)}closestPointToPointParameter(r,e){hu.subVectors(r,this.start),aa.subVectors(this.end,this.start);let t=aa.dot(aa),i=aa.dot(hu)/t;return e&&(i=Je(i,0,1)),i}closestPointToPoint(r,e,t){let i=this.closestPointToPointParameter(r,e);return this.delta(t).multiplyScalar(i).add(this.start)}applyMatrix4(r){return this.start.applyMatrix4(r),this.end.applyMatrix4(r),this}equals(r){return r.start.equals(this.start)&&r.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},g.LineBasicMaterial=Ft,g.LineCurve=Js,g.LineCurve3=mh,g.LineDashedMaterial=Oh,g.LineLoop=ah,g.LineSegments=fi,g.LinearEncoding=3e3,g.LinearFilter=1006,g.LinearInterpolant=Xo,g.LinearMipMapLinearFilter=1008,g.LinearMipMapNearestFilter=1007,g.LinearMipmapLinearFilter=1008,g.LinearMipmapNearestFilter=1007,g.LinearSRGBColorSpace=Ki,g.LinearToneMapping=1,g.Loader=jt,g.LoaderUtils=Ko,g.LoadingManager=Yo,g.LoopOnce=2200,g.LoopPingPong=2202,g.LoopRepeat=2201,g.LuminanceAlphaFormat=1025,g.LuminanceFormat=1024,g.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},g.Material=Rt,g.MaterialLoader=ra,g.MathUtils=Ud,g.Matrix3=kt,g.Matrix4=De,g.MaxEquation=104,g.Mesh=At,g.MeshBasicMaterial=Ui,g.MeshDepthMaterial=_o,g.MeshDistanceMaterial=bo,g.MeshLambertMaterial=Dh,g.MeshMatcapMaterial=Ih,g.MeshNormalMaterial=Ph,g.MeshPhongMaterial=Lh,g.MeshPhysicalMaterial=Ch,g.MeshStandardMaterial=Vo,g.MeshToonMaterial=Rh,g.MinEquation=103,g.MirroredRepeatWrapping=1002,g.MixOperation=1,g.MultiplyBlending=4,g.MultiplyOperation=0,g.NearestFilter=1003,g.NearestMipMapLinearFilter=1005,g.NearestMipMapNearestFilter=1004,g.NearestMipmapLinearFilter=1005,g.NearestMipmapNearestFilter=1004,g.NeverDepth=0,g.NeverStencilFunc=512,g.NoBlending=0,g.NoColorSpace="",g.NoToneMapping=0,g.NormalAnimationBlendMode=2500,g.NormalBlending=1,g.NotEqualDepth=7,g.NotEqualStencilFunc=517,g.NumberKeyframeTrack=Gr,g.Object3D=qe,g.ObjectLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=this,s=this.path===""?Ko.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||s;let a=new Li(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(r,function(o){let l=null;try{l=JSON.parse(o)}catch(h){return i!==void 0&&i(h),void console.error("THREE:ObjectLoader: Can't parse "+r+".",h.message)}let c=l.metadata;c!==void 0&&c.type!==void 0&&c.type.toLowerCase()!=="geometry"?n.parse(l,e):console.error("THREE.ObjectLoader: Can't load "+r)},t,i)}async loadAsync(r,e){let t=this.path===""?Ko.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||t;let i=new Li(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials);let n=await i.loadAsync(r,e),s=JSON.parse(n),a=s.metadata;if(a===void 0||a.type===void 0||a.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+r);return await this.parseAsync(s)}parse(r,e){let t=this.parseAnimations(r.animations),i=this.parseShapes(r.shapes),n=this.parseGeometries(r.geometries,i),s=this.parseImages(r.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(r.textures,s),o=this.parseMaterials(r.materials,a),l=this.parseObject(r.object,n,o,a,t),c=this.parseSkeletons(r.skeletons,l);if(this.bindSkeletons(l,c),e!==void 0){let h=!1;for(let u in s)if(s[u].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(l)}return l}async parseAsync(r){let e=this.parseAnimations(r.animations),t=this.parseShapes(r.shapes),i=this.parseGeometries(r.geometries,t),n=await this.parseImagesAsync(r.images),s=this.parseTextures(r.textures,n),a=this.parseMaterials(r.materials,s),o=this.parseObject(r.object,i,a,s,e),l=this.parseSkeletons(r.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(r){let e={};if(r!==void 0)for(let t=0,i=r.length;t<i;t++){let n=new hn().fromJSON(r[t]);e[n.uuid]=n}return e}parseSkeletons(r,e){let t={},i={};if(e.traverse(function(n){n.isBone&&(i[n.uuid]=n)}),r!==void 0)for(let n=0,s=r.length;n<s;n++){let a=new Hs().fromJSON(r[n],i);t[a.uuid]=a}return t}parseGeometries(r,e){let t={};if(r!==void 0){let i=new $h;for(let n=0,s=r.length;n<s;n++){let a,o=r[n];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(o);break;default:o.type in Th?a=Th[o.type].fromJSON(o,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),a.isBufferGeometry===!0&&o.userData!==void 0&&(a.userData=o.userData),t[o.uuid]=a}}return t}parseMaterials(r,e){let t={},i={};if(r!==void 0){let n=new ra;n.setTextures(e);for(let s=0,a=r.length;s<a;s++){let o=r[s];t[o.uuid]===void 0&&(t[o.uuid]=n.parse(o)),i[o.uuid]=t[o.uuid]}}return i}parseAnimations(r){let e={};if(r!==void 0)for(let t=0;t<r.length;t++){let i=r[t],n=Hr.parse(i);e[n.uuid]=n}return e}parseImages(r,e){let t=this,i={},n;function s(a){if(typeof a=="string"){let o=a;return function(l){return t.manager.itemStart(l),n.load(l,function(){t.manager.itemEnd(l)},void 0,function(){t.manager.itemError(l),t.manager.itemEnd(l)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o)}return a.data?{data:An(a.type,a.data),width:a.width,height:a.height}:null}if(r!==void 0&&r.length>0){let a=new Yo(e);n=new Wr(a),n.setCrossOrigin(this.crossOrigin);for(let o=0,l=r.length;o<l;o++){let c=r[o],h=c.url;if(Array.isArray(h)){let u=[];for(let d=0,p=h.length;d<p;d++){let f=s(h[d]);f!==null&&(f instanceof HTMLImageElement?u.push(f):u.push(new Zn(f.data,f.width,f.height)))}i[c.uuid]=new en(u)}else{let u=s(c.url);i[c.uuid]=new en(u)}}}return i}async parseImagesAsync(r){let e=this,t={},i;async function n(s){if(typeof s=="string"){let a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(o)}return s.data?{data:An(s.type,s.data),width:s.width,height:s.height}:null}if(r!==void 0&&r.length>0){i=new Wr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let s=0,a=r.length;s<a;s++){let o=r[s],l=o.url;if(Array.isArray(l)){let c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=await n(d);p!==null&&(p instanceof HTMLImageElement?c.push(p):c.push(new Zn(p.data,p.width,p.height)))}t[o.uuid]=new en(c)}else{let c=await n(o.url);t[o.uuid]=new en(c)}}}return t}parseTextures(r,e){function t(n,s){return typeof n=="number"?n:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",n),s[n])}let i={};if(r!==void 0)for(let n=0,s=r.length;n<s;n++){let a=r[n];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let o=e[a.image],l=o.data,c;Array.isArray(l)?(c=new fr,l.length===6&&(c.needsUpdate=!0)):(c=l&&l.data?new Zn:new gt,l&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=t(a.mapping,Zm)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=t(a.wrap[0],Kh),c.wrapT=t(a.wrap[1],Kh)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=t(a.minFilter,Qh)),a.magFilter!==void 0&&(c.magFilter=t(a.magFilter,Qh)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(c.userData=a.userData),i[a.uuid]=c}return i}parseObject(r,e,t,i,n){let s,a,o;function l(u){return e[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),e[u]}function c(u){if(u!==void 0){if(Array.isArray(u)){let d=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(t[m])}return d}return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),t[u]}}function h(u){return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),i[u]}switch(r.type){case"Scene":s=new Bc,r.background!==void 0&&(Number.isInteger(r.background)?s.background=new fe(r.background):s.background=h(r.background)),r.environment!==void 0&&(s.environment=h(r.environment)),r.fog!==void 0&&(r.fog.type==="Fog"?s.fog=new Fs(r.fog.color,r.fog.near,r.fog.far):r.fog.type==="FogExp2"&&(s.fog=new zs(r.fog.color,r.fog.density))),r.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=r.backgroundBlurriness);break;case"PerspectiveCamera":s=new Et(r.fov,r.aspect,r.near,r.far),r.focus!==void 0&&(s.focus=r.focus),r.zoom!==void 0&&(s.zoom=r.zoom),r.filmGauge!==void 0&&(s.filmGauge=r.filmGauge),r.filmOffset!==void 0&&(s.filmOffset=r.filmOffset),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"OrthographicCamera":s=new Ds(r.left,r.right,r.top,r.bottom,r.near,r.far),r.zoom!==void 0&&(s.zoom=r.zoom),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"AmbientLight":s=new qh(r.color,r.intensity);break;case"DirectionalLight":s=new Xh(r.color,r.intensity);break;case"PointLight":s=new jh(r.color,r.intensity,r.distance,r.decay);break;case"RectAreaLight":s=new Yh(r.color,r.intensity,r.width,r.height);break;case"SpotLight":s=new Hh(r.color,r.intensity,r.distance,r.angle,r.penumbra,r.decay);break;case"HemisphereLight":s=new kh(r.color,r.groundColor,r.intensity);break;case"LightProbe":s=new na().fromJSON(r);break;case"SkinnedMesh":a=l(r.geometry),o=c(r.material),s=new Jc(a,o),r.bindMode!==void 0&&(s.bindMode=r.bindMode),r.bindMatrix!==void 0&&s.bindMatrix.fromArray(r.bindMatrix),r.skeleton!==void 0&&(s.skeleton=r.skeleton);break;case"Mesh":a=l(r.geometry),o=c(r.material),s=new At(a,o);break;case"InstancedMesh":a=l(r.geometry),o=c(r.material);let u=r.count,d=r.instanceMatrix,p=r.instanceColor;s=new eh(a,o,u),s.instanceMatrix=new Jn(new Float32Array(d.array),16),p!==void 0&&(s.instanceColor=new Jn(new Float32Array(p.array),p.itemSize));break;case"LOD":s=new jc;break;case"Line":s=new Wi(l(r.geometry),c(r.material));break;case"LineLoop":s=new ah(l(r.geometry),c(r.material));break;case"LineSegments":s=new fi(l(r.geometry),c(r.material));break;case"PointCloud":case"Points":s=new lh(l(r.geometry),c(r.material));break;case"Sprite":s=new Hc(c(r.material));break;case"Group":s=new Wn;break;case"Bone":s=new To;break;default:s=new qe}if(s.uuid=r.uuid,r.name!==void 0&&(s.name=r.name),r.matrix!==void 0?(s.matrix.fromArray(r.matrix),r.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=r.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(r.position!==void 0&&s.position.fromArray(r.position),r.rotation!==void 0&&s.rotation.fromArray(r.rotation),r.quaternion!==void 0&&s.quaternion.fromArray(r.quaternion),r.scale!==void 0&&s.scale.fromArray(r.scale)),r.castShadow!==void 0&&(s.castShadow=r.castShadow),r.receiveShadow!==void 0&&(s.receiveShadow=r.receiveShadow),r.shadow&&(r.shadow.bias!==void 0&&(s.shadow.bias=r.shadow.bias),r.shadow.normalBias!==void 0&&(s.shadow.normalBias=r.shadow.normalBias),r.shadow.radius!==void 0&&(s.shadow.radius=r.shadow.radius),r.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(r.shadow.mapSize),r.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(r.shadow.camera))),r.visible!==void 0&&(s.visible=r.visible),r.frustumCulled!==void 0&&(s.frustumCulled=r.frustumCulled),r.renderOrder!==void 0&&(s.renderOrder=r.renderOrder),r.userData!==void 0&&(s.userData=r.userData),r.layers!==void 0&&(s.layers.mask=r.layers),r.children!==void 0){let u=r.children;for(let d=0;d<u.length;d++)s.add(this.parseObject(u[d],e,t,i,n))}if(r.animations!==void 0){let u=r.animations;for(let d=0;d<u.length;d++){let p=u[d];s.animations.push(n[p])}}if(r.type==="LOD"){r.autoUpdate!==void 0&&(s.autoUpdate=r.autoUpdate);let u=r.levels;for(let d=0;d<u.length;d++){let p=u[d],f=s.getObjectByProperty("uuid",p.object);f!==void 0&&s.addLevel(f,p.distance)}}return s}bindSkeletons(r,e){Object.keys(e).length!==0&&r.traverse(function(t){if(t.isSkinnedMesh===!0&&t.skeleton!==void 0){let i=e[t.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(i,t.bindMatrix)}})}},g.ObjectSpaceNormalMap=1,g.OctahedronBufferGeometry=class extends Qn{constructor(r,e){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(r,e)}},g.OctahedronGeometry=Qn,g.OneFactor=201,g.OneMinusDstAlphaFactor=207,g.OneMinusDstColorFactor=209,g.OneMinusSrcAlphaFactor=205,g.OneMinusSrcColorFactor=203,g.OrthographicCamera=Ds,g.PCFShadowMap=1,g.PCFSoftShadowMap=2,g.PMREMGenerator=go,g.Path=Sr,g.PerspectiveCamera=Et,g.Plane=Hi,g.PlaneBufferGeometry=class extends Gn{constructor(r,e,t,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(r,e,t,i)}},g.PlaneGeometry=Gn,g.PlaneHelper=class extends Wi{constructor(r,e=1,t=16776960){let i=t,n=new Fe;n.setAttribute("position",new xe([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),n.computeBoundingSphere(),super(n,new Ft({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=r,this.size=e;let s=new Fe;s.setAttribute("position",new xe([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new At(s,new Ui({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(r){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},g.PointLight=jh,g.PointLightHelper=class extends At{constructor(r,e,t){super(new er(e,4,2),new Ui({wireframe:!0,fog:!1,toneMapped:!1})),this.light=r,this.light.updateMatrixWorld(),this.color=t,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},g.Points=lh,g.PointsMaterial=Eo,g.PolarGridHelper=class extends fi{constructor(r=10,e=16,t=8,i=64,n=4473924,s=8947848){n=new fe(n),s=new fe(s);let a=[],o=[];if(e>1)for(let c=0;c<e;c++){let h=c/e*(2*Math.PI),u=Math.sin(h)*r,d=Math.cos(h)*r;a.push(0,0,0),a.push(u,0,d);let p=1&c?n:s;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let c=0;c<t;c++){let h=1&c?n:s,u=r-r/t*c;for(let d=0;d<i;d++){let p=d/i*(2*Math.PI),f=Math.sin(p)*u,m=Math.cos(p)*u;a.push(f,0,m),o.push(h.r,h.g,h.b),p=(d+1)/i*(2*Math.PI),f=Math.sin(p)*u,m=Math.cos(p)*u,a.push(f,0,m),o.push(h.r,h.g,h.b)}}let l=new Fe;l.setAttribute("position",new xe(a,3)),l.setAttribute("color",new xe(o,3)),super(l,new Ft({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},g.PolyhedronBufferGeometry=class extends Ei{constructor(r,e,t,i){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(r,e,t,i)}},g.PolyhedronGeometry=Ei,g.PositionalAudio=class extends su{constructor(r){super(r),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(r){return this.panner.refDistance=r,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(r){return this.panner.rolloffFactor=r,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(r){return this.panner.distanceModel=r,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(r){return this.panner.maxDistance=r,this}setDirectionalCone(r,e,t){return this.panner.coneInnerAngle=r,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=t,this}updateMatrixWorld(r){if(super.updateMatrixWorld(r),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(yn,au,$m),_n.set(0,0,1).applyQuaternion(au);let e=this.panner;if(e.positionX){let t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(yn.x,t),e.positionY.linearRampToValueAtTime(yn.y,t),e.positionZ.linearRampToValueAtTime(yn.z,t),e.orientationX.linearRampToValueAtTime(_n.x,t),e.orientationY.linearRampToValueAtTime(_n.y,t),e.orientationZ.linearRampToValueAtTime(_n.z,t)}else e.setPosition(yn.x,yn.y,yn.z),e.setOrientation(_n.x,_n.y,_n.z)}},g.PropertyBinding=je,g.PropertyMixer=ou,g.QuadraticBezierCurve=No,g.QuadraticBezierCurve3=zo,g.Quaternion=Gt,g.QuaternionKeyframeTrack=tr,g.QuaternionLinearInterpolant=Uh,g.REVISION=w,g.RGBADepthPacking=3201,g.RGBAFormat=1023,g.RGBAIntegerFormat=1033,g.RGBA_ASTC_10x10_Format=37819,g.RGBA_ASTC_10x5_Format=37816,g.RGBA_ASTC_10x6_Format=37817,g.RGBA_ASTC_10x8_Format=37818,g.RGBA_ASTC_12x10_Format=37820,g.RGBA_ASTC_12x12_Format=37821,g.RGBA_ASTC_4x4_Format=37808,g.RGBA_ASTC_5x4_Format=37809,g.RGBA_ASTC_5x5_Format=37810,g.RGBA_ASTC_6x5_Format=37811,g.RGBA_ASTC_6x6_Format=37812,g.RGBA_ASTC_8x5_Format=37813,g.RGBA_ASTC_8x6_Format=37814,g.RGBA_ASTC_8x8_Format=37815,g.RGBA_BPTC_Format=36492,g.RGBA_ETC2_EAC_Format=37496,g.RGBA_PVRTC_2BPPV1_Format=35843,g.RGBA_PVRTC_4BPPV1_Format=35842,g.RGBA_S3TC_DXT1_Format=33777,g.RGBA_S3TC_DXT3_Format=33778,g.RGBA_S3TC_DXT5_Format=33779,g.RGBFormat=1022,g.RGB_ETC1_Format=36196,g.RGB_ETC2_Format=37492,g.RGB_PVRTC_2BPPV1_Format=35841,g.RGB_PVRTC_4BPPV1_Format=35840,g.RGB_S3TC_DXT1_Format=33776,g.RGFormat=1030,g.RGIntegerFormat=1031,g.RawShaderMaterial=Eh,g.Ray=dr,g.Raycaster=class{constructor(r,e,t=0,i=1/0){this.ray=new dr(r,e),this.near=t,this.far=i,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(r,e){this.ray.set(r,e)}setFromCamera(r,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(r.x,r.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(r.x,r.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(r,e=!0,t=[]){return il(r,this,t,e),t.sort(lu),t}intersectObjects(r,e=!0,t=[]){for(let i=0,n=r.length;i<n;i++)il(r[i],this,t,e);return t.sort(lu),t}},g.RectAreaLight=Yh,g.RedFormat=1028,g.RedIntegerFormat=1029,g.ReinhardToneMapping=2,g.RepeatWrapping=1e3,g.ReplaceStencilOp=7681,g.ReverseSubtractEquation=102,g.RingBufferGeometry=class extends Or{constructor(r,e,t,i,n,s){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(r,e,t,i,n,s)}},g.RingGeometry=Or,g.SRGBColorSpace=$i,g.Scene=Bc,g.ShaderChunk=Ne,g.ShaderLib=li,g.ShaderMaterial=mi,g.ShadowMaterial=Ah,g.Shape=hn,g.ShapeBufferGeometry=class extends Nr{constructor(r,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(r,e)}},g.ShapeGeometry=Nr,g.ShapePath=class{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null}moveTo(r,e){return this.currentPath=new Sr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(r,e),this}lineTo(r,e){return this.currentPath.lineTo(r,e),this}quadraticCurveTo(r,e,t,i){return this.currentPath.quadraticCurveTo(r,e,t,i),this}bezierCurveTo(r,e,t,i,n,s){return this.currentPath.bezierCurveTo(r,e,t,i,n,s),this}splineThru(r){return this.currentPath.splineThru(r),this}toShapes(r){function e(m,v){let y=v.length,x=!1;for(let _=y-1,b=0;b<y;_=b++){let S=v[_],T=v[b],D=T.x-S.x,O=T.y-S.y;if(Math.abs(O)>Number.EPSILON){if(O<0&&(S=v[b],D=-D,T=v[_],O=-O),m.y<S.y||m.y>T.y)continue;if(m.y===S.y){if(m.x===S.x)return!0}else{let k=O*(m.x-S.x)-D*(m.y-S.y);if(k===0)return!0;if(k<0)continue;x=!x}}else{if(m.y!==S.y)continue;if(T.x<=m.x&&m.x<=S.x||S.x<=m.x&&m.x<=T.x)return!0}}return x}let t=gi.isClockWise,i=this.subPaths;if(i.length===0)return[];let n,s,a,o=[];if(i.length===1)return s=i[0],a=new hn,a.curves=s.curves,o.push(a),o;let l=!t(i[0].getPoints());l=r?!l:l;let c=[],h=[],u,d,p=[],f=0;h[f]=void 0,p[f]=[];for(let m=0,v=i.length;m<v;m++)s=i[m],u=s.getPoints(),n=t(u),n=r?!n:n,n?(!l&&h[f]&&f++,h[f]={s:new hn,p:u},h[f].s.curves=s.curves,l&&f++,p[f]=[]):p[f].push({h:s,p:u[0]});if(!h[0])return function(m){let v=[];for(let y=0,x=m.length;y<x;y++){let _=m[y],b=new hn;b.curves=_.curves,v.push(b)}return v}(i);if(h.length>1){let m=!1,v=0;for(let y=0,x=h.length;y<x;y++)c[y]=[];for(let y=0,x=h.length;y<x;y++){let _=p[y];for(let b=0;b<_.length;b++){let S=_[b],T=!0;for(let D=0;D<h.length;D++)e(S.p,h[D].p)&&(y!==D&&v++,T?(T=!1,c[D].push(S)):m=!0);T&&c[y].push(S)}}v>0&&m===!1&&(p=c)}for(let m=0,v=h.length;m<v;m++){a=h[m].s,o.push(a),d=p[m];for(let y=0,x=d.length;y<x;y++)a.holes.push(d[y].h)}return o}},g.ShapeUtils=gi,g.ShortType=1011,g.Skeleton=Hs,g.SkeletonHelper=class extends fi{constructor(r){let e=du(r),t=new Fe,i=[],n=[],s=new fe(0,0,1),a=new fe(0,1,0);for(let o=0;o<e.length;o++){let l=e[o];l.parent&&l.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),n.push(s.r,s.g,s.b),n.push(a.r,a.g,a.b))}t.setAttribute("position",new xe(i,3)),t.setAttribute("color",new xe(n,3)),super(t,new Ft({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){let e=this.bones,t=this.geometry,i=t.getAttribute("position");nl.copy(this.root.matrixWorld).invert();for(let n=0,s=0;n<e.length;n++){let a=e[n];a.parent&&a.parent.isBone&&(oa.multiplyMatrices(nl,a.matrixWorld),Xi.setFromMatrixPosition(oa),i.setXYZ(s,Xi.x,Xi.y,Xi.z),oa.multiplyMatrices(nl,a.parent.matrixWorld),Xi.setFromMatrixPosition(oa),i.setXYZ(s+1,Xi.x,Xi.y,Xi.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose()}},g.SkinnedMesh=Jc,g.Source=en,g.Sphere=an,g.SphereBufferGeometry=class extends er{constructor(r,e,t,i,n,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(r,e,t,i,n,s,a)}},g.SphereGeometry=er,g.Spherical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.phi=e,this.theta=t,this}set(r,e,t){return this.radius=r,this.phi=e,this.theta=t,this}copy(r){return this.radius=r.radius,this.phi=r.phi,this.theta=r.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(r,t),this.phi=Math.acos(Je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},g.SphericalHarmonics3=Zh,g.SplineCurve=Fo,g.SpotLight=Hh,g.SpotLightHelper=class extends qe{constructor(r,e){super(),this.light=r,this.light.updateMatrixWorld(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;let t=new Fe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){let l=s/o*Math.PI*2,c=a/o*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}t.setAttribute("position",new xe(i,3));let n=new Ft({fog:!1,toneMapped:!1});this.cone=new fi(t,n),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();let r=this.light.distance?this.light.distance:1e3,e=r*Math.tan(this.light.angle);this.cone.scale.set(e,e,r),uu.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(uu),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},g.Sprite=Hc,g.SpriteMaterial=wo,g.SrcAlphaFactor=204,g.SrcAlphaSaturateFactor=210,g.SrcColorFactor=202,g.StaticCopyUsage=35046,g.StaticDrawUsage=35044,g.StaticReadUsage=35045,g.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Et,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Et,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(r){let e=this._cache;if(e.focus!==r.focus||e.fov!==r.fov||e.aspect!==r.aspect*this.aspect||e.near!==r.near||e.far!==r.far||e.zoom!==r.zoom||e.eyeSep!==this.eyeSep){e.focus=r.focus,e.fov=r.fov,e.aspect=r.aspect*this.aspect,e.near=r.near,e.far=r.far,e.zoom=r.zoom,e.eyeSep=this.eyeSep,gn.copy(r.projectionMatrix);let t=e.eyeSep/2,i=t*e.near/e.focus,n=e.near*Math.tan(Zt*e.fov*.5)/e.zoom,s,a;tu.elements[12]=-t,eu.elements[12]=t,s=-n*e.aspect+i,a=n*e.aspect+i,gn.elements[0]=2*e.near/(a-s),gn.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(gn),s=-n*e.aspect-i,a=n*e.aspect-i,gn.elements[0]=2*e.near/(a-s),gn.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(gn)}this.cameraL.matrixWorld.copy(r.matrixWorld).multiply(tu),this.cameraR.matrixWorld.copy(r.matrixWorld).multiply(eu)}},g.StreamCopyUsage=35042,g.StreamDrawUsage=35040,g.StreamReadUsage=35041,g.StringKeyframeTrack=mn,g.SubtractEquation=101,g.SubtractiveBlending=3,g.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g.TangentSpaceNormalMap=0,g.TetrahedronBufferGeometry=class extends zr{constructor(r,e){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(r,e)}},g.TetrahedronGeometry=zr,g.Texture=gt,g.TextureLoader=class extends jt{constructor(r){super(r)}load(r,e,t,i){let n=new gt,s=new Wr(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(r,function(a){n.image=a,n.needsUpdate=!0,e!==void 0&&e(n)},t,i),n}},g.TorusBufferGeometry=class extends Fr{constructor(r,e,t,i,n){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(r,e,t,i,n)}},g.TorusGeometry=Fr,g.TorusKnotBufferGeometry=class extends Ur{constructor(r,e,t,i,n,s){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(r,e,t,i,n,s)}},g.TorusKnotGeometry=Ur,g.Triangle=Kt,g.TriangleFanDrawMode=2,g.TriangleStripDrawMode=1,g.TrianglesDrawMode=0,g.TubeBufferGeometry=class extends Br{constructor(r,e,t,i,n){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(r,e,t,i,n)}},g.TubeGeometry=Br,g.UVMapping=300,g.Uint16BufferAttribute=ro,g.Uint32BufferAttribute=so,g.Uint8BufferAttribute=class extends it{constructor(r,e,t){super(new Uint8Array(r),e,t)}},g.Uint8ClampedBufferAttribute=class extends it{constructor(r,e,t){super(new Uint8ClampedArray(r),e,t)}},g.Uniform=tl,g.UniformsGroup=class extends et{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.usage=35044,this.uniforms=[]}add(r){return this.uniforms.push(r),this}remove(r){let e=this.uniforms.indexOf(r);return e!==-1&&this.uniforms.splice(e,1),this}setName(r){return this.name=r,this}setUsage(r){return this.usage=r,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(r){this.name=r.name,this.usage=r.usage;let e=r.uniforms;this.uniforms.length=0;for(let t=0,i=e.length;t<i;t++)this.uniforms.push(e[t].clone());return this}clone(){return new this.constructor().copy(this)}},g.UniformsLib=ue,g.UniformsUtils=sc,g.UnsignedByteType=1009,g.UnsignedInt248Type=1020,g.UnsignedIntType=1014,g.UnsignedShort4444Type=1017,g.UnsignedShort5551Type=1018,g.UnsignedShortType=1012,g.VSMShadowMap=3,g.Vector2=ne,g.Vector3=E,g.Vector4=$e,g.VectorKeyframeTrack=Vr,g.VideoTexture=class extends gt{constructor(r,e,t,i,n,s,a,o,l){super(r,e,t,i,n,s,a,o,l),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:1006,this.magFilter=n!==void 0?n:1006,this.generateMipmaps=!1;let c=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(function h(){c.needsUpdate=!0,r.requestVideoFrameCallback(h)})}clone(){return new this.constructor(this.image).copy(this)}update(){let r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},g.WebGL1Renderer=Uc,g.WebGL3DRenderTarget=class extends $t{constructor(r=1,e=1,t=1){super(r,e),this.isWebGL3DRenderTarget=!0,this.depth=t,this.texture=new ds(null,r,e,t),this.texture.isRenderTargetTexture=!0}},g.WebGLArrayRenderTarget=class extends $t{constructor(r=1,e=1,t=1){super(r,e),this.isWebGLArrayRenderTarget=!0,this.depth=t,this.texture=new cr(null,r,e,t),this.texture.isRenderTargetTexture=!0}},g.WebGLCubeRenderTarget=oc,g.WebGLMultipleRenderTargets=class extends $t{constructor(r=1,e=1,t=1,i={}){super(r,e,i),this.isWebGLMultipleRenderTargets=!0;let n=this.texture;this.texture=[];for(let s=0;s<t;s++)this.texture[s]=n.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(r,e,t=1){if(this.width!==r||this.height!==e||this.depth!==t){this.width=r,this.height=e,this.depth=t;for(let i=0,n=this.texture.length;i<n;i++)this.texture[i].image.width=r,this.texture[i].image.height=e,this.texture[i].image.depth=t;this.dispose()}return this.viewport.set(0,0,r,e),this.scissor.set(0,0,r,e),this}copy(r){this.dispose(),this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,r.depthTexture!==null&&(this.depthTexture=r.depthTexture.clone()),this.texture.length=0;for(let e=0,t=r.texture.length;e<t;e++)this.texture[e]=r.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},g.WebGLMultisampleRenderTarget=class extends $t{constructor(r,e,t){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(r,e,t),this.samples=4}},g.WebGLRenderTarget=$t,g.WebGLRenderer=Fc,g.WebGLUtils=Oc,g.WireframeGeometry=wh,g.WrapAroundEnding=2402,g.ZeroCurvatureEnding=2400,g.ZeroFactor=200,g.ZeroSlopeEnding=2401,g.ZeroStencilOp=0,g._SRGBAFormat=1035,g.sRGBEncoding=3001,Object.defineProperty(g,"__esModule",{value:!0})})});var Zr,Ou,Nu=Pe(()=>{Zr=function(){var g=0,w=document.createElement("div");w.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",w.addEventListener("click",function(ge){ge.preventDefault(),M(++g%w.children.length)},!1);function I(ge){return w.appendChild(ge.dom),ge}function M(ge){for(var Ve=0;Ve<w.children.length;Ve++)w.children[Ve].style.display=Ve===ge?"block":"none";g=ge}var W=(performance||Date).now(),ae=W,he=0,ve=I(new Zr.Panel("FPS","#0ff","#002")),Te=I(new Zr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var Xe=I(new Zr.Panel("MB","#f08","#201"));return M(0),{REVISION:16,dom:w,addPanel:I,showPanel:M,begin:function(){W=(performance||Date).now()},end:function(){he++;var ge=(performance||Date).now();if(Te.update(ge-W,200),ge>=ae+1e3&&(ve.update(he*1e3/(ge-ae),100),ae=ge,he=0,Xe)){var Ve=performance.memory;Xe.update(Ve.usedJSHeapSize/1048576,Ve.jsHeapSizeLimit/1048576)}return ge},update:function(){W=this.end()},domElement:w,setMode:M}};Zr.Panel=function(g,w,I){var M=1/0,W=0,ae=Math.round,he=ae(window.devicePixelRatio||1),ve=80*he,Te=48*he,Xe=3*he,ge=2*he,Ve=3*he,Ce=15*he,ct=74*he,yt=30*he,_t=document.createElement("canvas");_t.width=ve,_t.height=Te,_t.style.cssText="width:80px;height:48px";var We=_t.getContext("2d");return We.font="bold "+9*he+"px Helvetica,Arial,sans-serif",We.textBaseline="top",We.fillStyle=I,We.fillRect(0,0,ve,Te),We.fillStyle=w,We.fillText(g,Xe,ge),We.fillRect(Ve,Ce,ct,yt),We.fillStyle=I,We.globalAlpha=.9,We.fillRect(Ve,Ce,ct,yt),{dom:_t,update:function(Ot,Vt){M=Math.min(M,Ot),W=Math.max(W,Ot),We.fillStyle=I,We.globalAlpha=1,We.fillRect(0,0,ve,Ce),We.fillStyle=w,We.fillText(ae(Ot)+" "+g+" ("+ae(M)+"-"+ae(W)+")",Xe,ge),We.drawImage(_t,Ve+he,Ce,ct-he,yt,Ve,Ce,ct-he,yt),We.fillRect(Ve+ct-he,Ce,he,yt),We.fillStyle=I,We.globalAlpha=.9,We.fillRect(Ve+ct-he,Ce,he,ae((1-Ot/Vt)*yt))}}};Ou=Zr});function dl(g){let w,I;return(w=g.match(/(#|0x)?([a-f0-9]{6})/i))?I=w[2]:(w=g.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(w[1]).toString(16).padStart(2,0)+parseInt(w[2]).toString(16).padStart(2,0)+parseInt(w[3]).toString(16).padStart(2,0):(w=g.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=w[1]+w[1]+w[2]+w[2]+w[3]+w[3]),!!I&&"#"+I}var ii,ul,Df,$r,If,Of,Nf,pl,Jr,ml,fl,gl,zu,ir,Fu=Pe(()=>{ii=class{constructor(w,I,M,W,ae="div"){this.parent=w,this.object=I,this.property=M,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(W),this.$name=document.createElement("div"),this.$name.classList.add("name"),ii.nextNameID=ii.nextNameID||0,this.$name.id="lil-gui-name-"+ ++ii.nextNameID,this.$widget=document.createElement(ae),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(M)}name(w){return this._name=w,this.$name.innerHTML=w,this}onChange(w){return this._onChange=w,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(w){return this._onFinishChange=w,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(w=!0){return this.disable(!w)}disable(w=!0){return w===this._disabled||(this._disabled=w,this.domElement.classList.toggle("disabled",w),this.$disable.toggleAttribute("disabled",w)),this}options(w){let I=this.parent.add(this.object,this.property,w);return I.name(this._name),this.destroy(),I}min(w){return this}max(w){return this}step(w){return this}listen(w=!0){return this._listening=w,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(w){return this.object[this.property]=w,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(w){return this.setValue(w),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},ul=class extends ii{constructor(w,I,M){super(w,I,M,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};Df={isPrimitive:!0,match:g=>typeof g=="string",fromHexString:dl,toHexString:dl},$r={isPrimitive:!0,match:g=>typeof g=="number",fromHexString:g=>parseInt(g.substring(1),16),toHexString:g=>"#"+g.toString(16).padStart(6,0)},If={isPrimitive:!1,match:Array.isArray,fromHexString(g,w,I=1){let M=$r.fromHexString(g);w[0]=(M>>16&255)/255*I,w[1]=(M>>8&255)/255*I,w[2]=(255&M)/255*I},toHexString:([g,w,I],M=1)=>$r.toHexString(g*(M=255/M)<<16^w*M<<8^I*M<<0)},Of={isPrimitive:!1,match:g=>Object(g)===g,fromHexString(g,w,I=1){let M=$r.fromHexString(g);w.r=(M>>16&255)/255*I,w.g=(M>>8&255)/255*I,w.b=(255&M)/255*I},toHexString:({r:g,g:w,b:I},M=1)=>$r.toHexString(g*(M=255/M)<<16^w*M<<8^I*M<<0)},Nf=[Df,$r,If,Of],pl=class extends ii{constructor(w,I,M,W){var ae;super(w,I,M,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(ae=this.initialValue,Nf.find(he=>he.match(ae))),this._rgbScale=W,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let he=dl(this.$text.value);he&&this._setValueFromHexString(he)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(w){if(this._format.isPrimitive){let I=this._format.fromHexString(w);this.setValue(I)}else this._format.fromHexString(w,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(w){return this._setValueFromHexString(w),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Jr=class extends ii{constructor(w,I,M){super(w,I,M,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",W=>{W.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}},ml=class extends ii{constructor(w,I,M,W,ae,he){super(w,I,M,"number"),this._initInput(),this.min(W),this.max(ae);let ve=he!==void 0;this.step(ve?he:this._getImplicitStep(),ve),this.updateDisplay()}min(w){return this._min=w,this._onUpdateMinMax(),this}max(w){return this._max=w,this._onUpdateMinMax(),this}step(w,I=!0){return this._step=w,this._stepExplicit=I,this}updateDisplay(){let w=this.getValue();if(this._hasSlider){let I=(w-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=w),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let w=ge=>{let Ve=parseFloat(this.$input.value);isNaN(Ve)||(this._snapClampSetValue(Ve+ge),this.$input.value=this.getValue())},I,M,W,ae,he,ve=!1,Te=ge=>{if(ve){let Ve=ge.clientX-I,Ce=ge.clientY-M;Math.abs(Ce)>5?(ge.preventDefault(),this.$input.blur(),ve=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(Ve)>5&&Xe()}if(!ve){let Ve=ge.clientY-W;he-=Ve*this._step*this._arrowKeyMultiplier(ge),ae+he>this._max?he=this._max-ae:ae+he<this._min&&(he=this._min-ae),this._snapClampSetValue(ae+he)}W=ge.clientY},Xe=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",Te),window.removeEventListener("mouseup",Xe)};this.$input.addEventListener("input",()=>{let ge=parseFloat(this.$input.value);isNaN(ge)||this.setValue(this._clamp(ge))}),this.$input.addEventListener("keydown",ge=>{ge.code==="Enter"&&this.$input.blur(),ge.code==="ArrowUp"&&(ge.preventDefault(),w(this._step*this._arrowKeyMultiplier(ge))),ge.code==="ArrowDown"&&(ge.preventDefault(),w(this._step*this._arrowKeyMultiplier(ge)*-1))}),this.$input.addEventListener("wheel",ge=>{this._inputFocused&&(ge.preventDefault(),w(this._step*this._normalizeMouseWheel(ge)))}),this.$input.addEventListener("mousedown",ge=>{I=ge.clientX,M=W=ge.clientY,ve=!0,ae=this.getValue(),he=0,window.addEventListener("mousemove",Te),window.addEventListener("mouseup",Xe)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let w=Ce=>{let ct=this.$slider.getBoundingClientRect(),yt=(_t=Ce,We=ct.left,Ot=ct.right,Vt=this._min,pi=this._max,(_t-We)/(Ot-We)*(pi-Vt)+Vt);var _t,We,Ot,Vt,pi;this._snapClampSetValue(yt)},I=Ce=>{w(Ce.clientX)},M=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",M)},W,ae,he=!1,ve=Ce=>{Ce.preventDefault(),this._setDraggingStyle(!0),w(Ce.touches[0].clientX),he=!1},Te=Ce=>{if(he){let ct=Ce.touches[0].clientX-W,yt=Ce.touches[0].clientY-ae;Math.abs(ct)>Math.abs(yt)?ve(Ce):(window.removeEventListener("touchmove",Te),window.removeEventListener("touchend",Xe))}else Ce.preventDefault(),w(Ce.touches[0].clientX)},Xe=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",Te),window.removeEventListener("touchend",Xe)},ge=this._callOnFinishChange.bind(this),Ve;this.$slider.addEventListener("mousedown",Ce=>{this._setDraggingStyle(!0),w(Ce.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",M)}),this.$slider.addEventListener("touchstart",Ce=>{Ce.touches.length>1||(this._hasScrollBar?(W=Ce.touches[0].clientX,ae=Ce.touches[0].clientY,he=!0):ve(Ce),window.addEventListener("touchmove",Te),window.addEventListener("touchend",Xe))}),this.$slider.addEventListener("wheel",Ce=>{if(Math.abs(Ce.deltaX)<Math.abs(Ce.deltaY)&&this._hasScrollBar)return;Ce.preventDefault();let ct=this._normalizeMouseWheel(Ce)*this._step;this._snapClampSetValue(this.getValue()+ct),this.$input.value=this.getValue(),clearTimeout(Ve),Ve=setTimeout(ge,400)})}_setDraggingStyle(w,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",w),document.body.classList.toggle("lil-gui-dragging",w),document.body.classList.toggle("lil-gui-"+I,w)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(w){let{deltaX:I,deltaY:M}=w;return Math.floor(w.deltaY)!==w.deltaY&&w.wheelDelta&&(I=0,M=-w.wheelDelta/120,M*=this._stepExplicit?1:10),I+-M}_arrowKeyMultiplier(w){let I=this._stepExplicit?1:10;return w.shiftKey?I*=10:w.altKey&&(I/=10),I}_snap(w){let I=Math.round(w/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(w){return w<this._min&&(w=this._min),w>this._max&&(w=this._max),w}_snapClampSetValue(w){this.setValue(this._clamp(this._snap(w)))}get _hasScrollBar(){let w=this.parent.root.$children;return w.scrollHeight>w.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},fl=class extends ii{constructor(w,I,M,W){super(w,I,M,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(W)?W:Object.values(W),this._names=Array.isArray(W)?W:Object.keys(W),this._names.forEach(ae=>{let he=document.createElement("option");he.innerHTML=ae,this.$select.appendChild(he)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let w=this.getValue(),I=this._values.indexOf(w);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?w:this._names[I],this}},gl=class extends ii{constructor(w,I,M){super(w,I,M,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",W=>{W.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},zu=!1,ir=class{constructor({parent:w,autoPlace:I=w===void 0,container:M,width:W,title:ae="Controls",injectStyles:he=!0,touchStyles:ve=!0}={}){if(this.parent=w,this.root=w?w.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",Te=>{Te.code!=="Enter"&&Te.code!=="Space"||(Te.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(ae),ve&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!zu&&he&&(function(Te){let Xe=document.createElement("style");Xe.innerHTML=Te;let ge=document.querySelector("head link[rel=stylesheet], head style");ge?document.head.insertBefore(Xe,ge):document.head.appendChild(Xe)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),zu=!0),M?M.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),W&&this.domElement.style.setProperty("--width",W+"px"),this.domElement.addEventListener("keydown",Te=>Te.stopPropagation()),this.domElement.addEventListener("keyup",Te=>Te.stopPropagation())}add(w,I,M,W,ae){if(Object(M)===M)return new fl(this,w,I,M);let he=w[I];switch(typeof he){case"number":return new ml(this,w,I,M,W,ae);case"boolean":return new ul(this,w,I);case"string":return new gl(this,w,I);case"function":return new Jr(this,w,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,w,`
	value:`,he)}addColor(w,I,M=1){return new pl(this,w,I,M)}addFolder(w){return new ir({parent:this,title:w})}load(w,I=!0){return w.controllers&&this.controllers.forEach(M=>{M instanceof Jr||M._name in w.controllers&&M.load(w.controllers[M._name])}),I&&w.folders&&this.folders.forEach(M=>{M._title in w.folders&&M.load(w.folders[M._title])}),this}save(w=!0){let I={controllers:{},folders:{}};return this.controllers.forEach(M=>{if(!(M instanceof Jr)){if(M._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${M._name}"`);I.controllers[M._name]=M.save()}}),w&&this.folders.forEach(M=>{if(M._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${M._title}"`);I.folders[M._title]=M.save()}),I}open(w=!0){return this._closed=!w,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(w=!0){return this._hidden=!w,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(w=!0){return this._closed=!w,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");let M=ae=>{ae.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",M))};this.$children.addEventListener("transitionend",M);let W=w?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!w),requestAnimationFrame(()=>{this.$children.style.height=W+"px"})}),this}title(w){return this._title=w,this.$title.innerHTML=w,this}reset(w=!0){return(w?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(w){return this._onChange=w,this}_callOnChange(w){this.parent&&this.parent._callOnChange(w),this._onChange!==void 0&&this._onChange.call(this,{object:w.object,property:w.property,value:w.getValue(),controller:w})}onFinishChange(w){return this._onFinishChange=w,this}_callOnFinishChange(w){this.parent&&this.parent._callOnFinishChange(w),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:w.object,property:w.property,value:w.getValue(),controller:w})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(w=>w.destroy())}controllersRecursive(){let w=Array.from(this.controllers);return this.folders.forEach(I=>{w=w.concat(I.controllersRecursive())}),w}foldersRecursive(){let w=Array.from(this.folders);return this.folders.forEach(I=>{w=w.concat(I.foldersRecursive())}),w}}});var Ie,Uu,vl,Bu,ya,ku=Pe(()=>{Ie=Lt(St(),1),Uu={type:"change"},vl={type:"start"},Bu={type:"end"},ya=class extends Ie.EventDispatcher{constructor(w,I){super(),this.object=w,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Ie.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ie.MOUSE.ROTATE,MIDDLE:Ie.MOUSE.DOLLY,RIGHT:Ie.MOUSE.PAN},this.touches={ONE:Ie.TOUCH.ROTATE,TWO:Ie.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return ve.phi},this.getAzimuthalAngle=function(){return ve.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",Ba),this._domElementKeyEvents=V},this.saveState=function(){M.target0.copy(M.target),M.position0.copy(M.object.position),M.zoom0=M.object.zoom},this.reset=function(){M.target.copy(M.target0),M.object.position.copy(M.position0),M.object.zoom=M.zoom0,M.object.updateProjectionMatrix(),M.dispatchEvent(Uu),M.update(),ae=W.NONE},this.update=function(){let V=new Ie.Vector3,we=new Ie.Quaternion().setFromUnitVectors(w.up,new Ie.Vector3(0,1,0)),mt=we.clone().invert(),et=new Ie.Vector3,Ke=new Ie.Quaternion,_i=2*Math.PI;return function(){let Ii=M.object.position;V.copy(Ii).sub(M.target),V.applyQuaternion(we),ve.setFromVector3(V),M.autoRotate&&ae===W.NONE&&ns(Rl()),M.enableDamping?(ve.theta+=Te.theta*M.dampingFactor,ve.phi+=Te.phi*M.dampingFactor):(ve.theta+=Te.theta,ve.phi+=Te.phi);let ot=M.minAzimuthAngle,Je=M.maxAzimuthAngle;return isFinite(ot)&&isFinite(Je)&&(ot<-Math.PI?ot+=_i:ot>Math.PI&&(ot-=_i),Je<-Math.PI?Je+=_i:Je>Math.PI&&(Je-=_i),ot<=Je?ve.theta=Math.max(ot,Math.min(Je,ve.theta)):ve.theta=ve.theta>(ot+Je)/2?Math.max(ot,ve.theta):Math.min(Je,ve.theta)),ve.phi=Math.max(M.minPolarAngle,Math.min(M.maxPolarAngle,ve.phi)),ve.makeSafe(),ve.radius*=Xe,ve.radius=Math.max(M.minDistance,Math.min(M.maxDistance,ve.radius)),M.enableDamping===!0?M.target.addScaledVector(ge,M.dampingFactor):M.target.add(ge),V.setFromSpherical(ve),V.applyQuaternion(mt),Ii.copy(M.target).add(V),M.object.lookAt(M.target),M.enableDamping===!0?(Te.theta*=1-M.dampingFactor,Te.phi*=1-M.dampingFactor,ge.multiplyScalar(1-M.dampingFactor)):(Te.set(0,0,0),ge.set(0,0,0)),Xe=1,Ve||et.distanceToSquared(M.object.position)>he||8*(1-Ke.dot(M.object.quaternion))>he?(M.dispatchEvent(Uu),et.copy(M.object.position),Ke.copy(M.object.quaternion),Ve=!1,!0):!1}}(),this.dispose=function(){M.domElement.removeEventListener("contextmenu",ka),M.domElement.removeEventListener("pointerdown",za),M.domElement.removeEventListener("pointercancel",Fa),M.domElement.removeEventListener("wheel",Ua),M.domElement.removeEventListener("pointermove",ss),M.domElement.removeEventListener("pointerup",as),M._domElementKeyEvents!==null&&M._domElementKeyEvents.removeEventListener("keydown",Ba)};let M=this,W={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ae=W.NONE,he=1e-6,ve=new Ie.Spherical,Te=new Ie.Spherical,Xe=1,ge=new Ie.Vector3,Ve=!1,Ce=new Ie.Vector2,ct=new Ie.Vector2,yt=new Ie.Vector2,_t=new Ie.Vector2,We=new Ie.Vector2,Ot=new Ie.Vector2,Vt=new Ie.Vector2,pi=new Ie.Vector2,Tn=new Ie.Vector2,Ze=[],sr={};function Rl(){return 2*Math.PI/60/60*M.autoRotateSpeed}function ar(){return Math.pow(.95,M.zoomSpeed)}function ns(V){Te.theta-=V}function Sa(V){Te.phi-=V}let Ta=function(){let V=new Ie.Vector3;return function(mt,et){V.setFromMatrixColumn(et,0),V.multiplyScalar(-mt),ge.add(V)}}(),Aa=function(){let V=new Ie.Vector3;return function(mt,et){M.screenSpacePanning===!0?V.setFromMatrixColumn(et,1):(V.setFromMatrixColumn(et,0),V.crossVectors(M.object.up,V)),V.multiplyScalar(mt),ge.add(V)}}(),Ji=function(){let V=new Ie.Vector3;return function(mt,et){let Ke=M.domElement;if(M.object.isPerspectiveCamera){let _i=M.object.position;V.copy(_i).sub(M.target);let Zt=V.length();Zt*=Math.tan(M.object.fov/2*Math.PI/180),Ta(2*mt*Zt/Ke.clientHeight,M.object.matrix),Aa(2*et*Zt/Ke.clientHeight,M.object.matrix)}else M.object.isOrthographicCamera?(Ta(mt*(M.object.right-M.object.left)/M.object.zoom/Ke.clientWidth,M.object.matrix),Aa(et*(M.object.top-M.object.bottom)/M.object.zoom/Ke.clientHeight,M.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),M.enablePan=!1)}}();function rs(V){M.object.isPerspectiveCamera?Xe/=V:M.object.isOrthographicCamera?(M.object.zoom=Math.max(M.minZoom,Math.min(M.maxZoom,M.object.zoom*V)),M.object.updateProjectionMatrix(),Ve=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),M.enableZoom=!1)}function Ea(V){M.object.isPerspectiveCamera?Xe*=V:M.object.isOrthographicCamera?(M.object.zoom=Math.max(M.minZoom,Math.min(M.maxZoom,M.object.zoom/V)),M.object.updateProjectionMatrix(),Ve=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),M.enableZoom=!1)}function Ca(V){Ce.set(V.clientX,V.clientY)}function Pl(V){Vt.set(V.clientX,V.clientY)}function La(V){_t.set(V.clientX,V.clientY)}function Dl(V){ct.set(V.clientX,V.clientY),yt.subVectors(ct,Ce).multiplyScalar(M.rotateSpeed);let we=M.domElement;ns(2*Math.PI*yt.x/we.clientHeight),Sa(2*Math.PI*yt.y/we.clientHeight),Ce.copy(ct),M.update()}function Il(V){pi.set(V.clientX,V.clientY),Tn.subVectors(pi,Vt),Tn.y>0?rs(ar()):Tn.y<0&&Ea(ar()),Vt.copy(pi),M.update()}function Ol(V){We.set(V.clientX,V.clientY),Ot.subVectors(We,_t).multiplyScalar(M.panSpeed),Ji(Ot.x,Ot.y),_t.copy(We),M.update()}function Nl(V){V.deltaY<0?Ea(ar()):V.deltaY>0&&rs(ar()),M.update()}function zl(V){let we=!1;switch(V.code){case M.keys.UP:Ji(0,M.keyPanSpeed),we=!0;break;case M.keys.BOTTOM:Ji(0,-M.keyPanSpeed),we=!0;break;case M.keys.LEFT:Ji(M.keyPanSpeed,0),we=!0;break;case M.keys.RIGHT:Ji(-M.keyPanSpeed,0),we=!0;break}we&&(V.preventDefault(),M.update())}function Ra(){if(Ze.length===1)Ce.set(Ze[0].pageX,Ze[0].pageY);else{let V=.5*(Ze[0].pageX+Ze[1].pageX),we=.5*(Ze[0].pageY+Ze[1].pageY);Ce.set(V,we)}}function Pa(){if(Ze.length===1)_t.set(Ze[0].pageX,Ze[0].pageY);else{let V=.5*(Ze[0].pageX+Ze[1].pageX),we=.5*(Ze[0].pageY+Ze[1].pageY);_t.set(V,we)}}function Da(){let V=Ze[0].pageX-Ze[1].pageX,we=Ze[0].pageY-Ze[1].pageY,mt=Math.sqrt(V*V+we*we);Vt.set(0,mt)}function Fl(){M.enableZoom&&Da(),M.enablePan&&Pa()}function Ul(){M.enableZoom&&Da(),M.enableRotate&&Ra()}function Ia(V){if(Ze.length==1)ct.set(V.pageX,V.pageY);else{let mt=os(V),et=.5*(V.pageX+mt.x),Ke=.5*(V.pageY+mt.y);ct.set(et,Ke)}yt.subVectors(ct,Ce).multiplyScalar(M.rotateSpeed);let we=M.domElement;ns(2*Math.PI*yt.x/we.clientHeight),Sa(2*Math.PI*yt.y/we.clientHeight),Ce.copy(ct)}function Oa(V){if(Ze.length===1)We.set(V.pageX,V.pageY);else{let we=os(V),mt=.5*(V.pageX+we.x),et=.5*(V.pageY+we.y);We.set(mt,et)}Ot.subVectors(We,_t).multiplyScalar(M.panSpeed),Ji(Ot.x,Ot.y),_t.copy(We)}function Na(V){let we=os(V),mt=V.pageX-we.x,et=V.pageY-we.y,Ke=Math.sqrt(mt*mt+et*et);pi.set(0,Ke),Tn.set(0,Math.pow(pi.y/Vt.y,M.zoomSpeed)),rs(Tn.y),Vt.copy(pi)}function Bl(V){M.enableZoom&&Na(V),M.enablePan&&Oa(V)}function kl(V){M.enableZoom&&Na(V),M.enableRotate&&Ia(V)}function za(V){M.enabled!==!1&&(Ze.length===0&&(M.domElement.setPointerCapture(V.pointerId),M.domElement.addEventListener("pointermove",ss),M.domElement.addEventListener("pointerup",as)),jl(V),V.pointerType==="touch"?Hl(V):Gl(V))}function ss(V){M.enabled!==!1&&(V.pointerType==="touch"?Wl(V):Vl(V))}function as(V){$i(V),Ze.length===0&&(M.domElement.releasePointerCapture(V.pointerId),M.domElement.removeEventListener("pointermove",ss),M.domElement.removeEventListener("pointerup",as)),M.dispatchEvent(Bu),ae=W.NONE}function Fa(V){$i(V)}function Gl(V){let we;switch(V.button){case 0:we=M.mouseButtons.LEFT;break;case 1:we=M.mouseButtons.MIDDLE;break;case 2:we=M.mouseButtons.RIGHT;break;default:we=-1}switch(we){case Ie.MOUSE.DOLLY:if(M.enableZoom===!1)return;Pl(V),ae=W.DOLLY;break;case Ie.MOUSE.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(M.enablePan===!1)return;La(V),ae=W.PAN}else{if(M.enableRotate===!1)return;Ca(V),ae=W.ROTATE}break;case Ie.MOUSE.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(M.enableRotate===!1)return;Ca(V),ae=W.ROTATE}else{if(M.enablePan===!1)return;La(V),ae=W.PAN}break;default:ae=W.NONE}ae!==W.NONE&&M.dispatchEvent(vl)}function Vl(V){switch(ae){case W.ROTATE:if(M.enableRotate===!1)return;Dl(V);break;case W.DOLLY:if(M.enableZoom===!1)return;Il(V);break;case W.PAN:if(M.enablePan===!1)return;Ol(V);break}}function Ua(V){M.enabled===!1||M.enableZoom===!1||ae!==W.NONE||(V.preventDefault(),M.dispatchEvent(vl),Nl(V),M.dispatchEvent(Bu))}function Ba(V){M.enabled===!1||M.enablePan===!1||zl(V)}function Hl(V){switch(Ki(V),Ze.length){case 1:switch(M.touches.ONE){case Ie.TOUCH.ROTATE:if(M.enableRotate===!1)return;Ra(),ae=W.TOUCH_ROTATE;break;case Ie.TOUCH.PAN:if(M.enablePan===!1)return;Pa(),ae=W.TOUCH_PAN;break;default:ae=W.NONE}break;case 2:switch(M.touches.TWO){case Ie.TOUCH.DOLLY_PAN:if(M.enableZoom===!1&&M.enablePan===!1)return;Fl(),ae=W.TOUCH_DOLLY_PAN;break;case Ie.TOUCH.DOLLY_ROTATE:if(M.enableZoom===!1&&M.enableRotate===!1)return;Ul(),ae=W.TOUCH_DOLLY_ROTATE;break;default:ae=W.NONE}break;default:ae=W.NONE}ae!==W.NONE&&M.dispatchEvent(vl)}function Wl(V){switch(Ki(V),ae){case W.TOUCH_ROTATE:if(M.enableRotate===!1)return;Ia(V),M.update();break;case W.TOUCH_PAN:if(M.enablePan===!1)return;Oa(V),M.update();break;case W.TOUCH_DOLLY_PAN:if(M.enableZoom===!1&&M.enablePan===!1)return;Bl(V),M.update();break;case W.TOUCH_DOLLY_ROTATE:if(M.enableZoom===!1&&M.enableRotate===!1)return;kl(V),M.update();break;default:ae=W.NONE}}function ka(V){M.enabled!==!1&&V.preventDefault()}function jl(V){Ze.push(V)}function $i(V){delete sr[V.pointerId];for(let we=0;we<Ze.length;we++)if(Ze[we].pointerId==V.pointerId){Ze.splice(we,1);return}}function Ki(V){let we=sr[V.pointerId];we===void 0&&(we=new Ie.Vector2,sr[V.pointerId]=we),we.set(V.pageX,V.pageY)}function os(V){let we=V.pointerId===Ze[0].pointerId?Ze[1]:Ze[0];return sr[we.pointerId]}M.domElement.addEventListener("contextmenu",ka),M.domElement.addEventListener("pointerdown",za),M.domElement.addEventListener("pointercancel",Fa),M.domElement.addEventListener("wheel",Ua,{passive:!1}),this.update()}}});var Vu,Gu=Pe(()=>{Vu=`#version 300 es

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
}`});var Wu,Hu=Pe(()=>{Wu=`#version 300 es

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
}`});var ju=Pe(()=>{});var qu,Xu=Pe(()=>{qu=`#version 100
precision lowp float;

uniform sampler2D tInput;
uniform float opacity;

varying vec2 vUv;

void main() {
	gl_FragColor = texture2D(tInput, vUv) * opacity;
}`});var Zu,Yu=Pe(()=>{Zu=`#version 100

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
}`});var Pt,Sn,kf,_a,xl=Pe(()=>{Pt=Lt(St());Xu();Yu();Sn=new Pt.Vector2,kf=new Pt.RawShaderMaterial({vertexShader:Zu,fragmentShader:qu,uniforms:{tInput:{value:null},opacity:{value:1}}}),_a=class{constructor(){this.camera=new Pt.OrthographicCamera(-1,1,1,-1,0,1),this.material=kf;var w=new Pt.PlaneGeometry(1,1);this.quad=new Pt.Mesh(w,this.material),this.scene=new Pt.Scene,this.scene.add(this.quad)}render(w,I,M=0,W=0,ae=0,he=0,ve=1){(ae==0||he==0)&&(ae=w.width,he=w.height),this.drawTexture(w.texture,I,M,W,ae,he,ve)}renderMRT(w,I,M,W=0,ae=0,he=0,ve=0){(he==0||ve==0)&&(he=w.width,ve=w.height),this.drawTexture(w.texture[M],I,W,ae,he,ve)}drawTexture(w,I,M=0,W=0,ae=0,he=0,ve=1){let Te=new Pt.Vector2;I.getSize(Te),this.camera.left=-Te.width/2,this.camera.right=Te.width/2,this.camera.top=Te.height/2,this.camera.bottom=-Te.height/2,this.camera.updateProjectionMatrix(),this.quad.scale.set(ae,he,1),this.quad.position.set(-Te.width/2+ae/2+M,Te.height/2-he/2-W,0),this.quad.material=this.material,this.material.uniforms.tInput.value=w,this.material.transparent=w.format==Pt.RGBAFormat,this.material.uniforms.opacity.value=ve,I.render(this.scene,this.camera)}renderToTarget(w,I,M){let W=new Pt.Vector2(w.width,w.height);this.camera.left=-W.width/2,this.camera.right=W.width/2,this.camera.top=W.height/2,this.camera.bottom=-W.height/2,this.camera.updateProjectionMatrix(),this.quad.scale.set(W.width,W.height,1),this.quad.position.set(0,0,0),this.quad.material=M,I.setRenderTarget(w),I.render(this.scene,this.camera),I.setRenderTarget(null)}renderToViewport(w,I){w.getSize(Sn),this.camera.left=-Sn.x/2,this.camera.right=Sn.x/2,this.camera.top=Sn.y/2,this.camera.bottom=-Sn.y/2,this.camera.updateProjectionMatrix(),this.quad.scale.set(Sn.x,Sn.y,1),this.quad.position.set(0,0,0),this.quad.material=I,w.setRenderTarget(null),w.render(this.scene,this.camera)}dispose(){this.quad.geometry.dispose()}}});var Dt,ni,Ju=Pe(()=>{Dt=Lt(St());xl();ni=class{static getRenderTarget(w,I,M={},W=!1){let ae=new Dt.WebGLRenderTarget(w,I,{minFilter:M.minFilter!==void 0?M.minFilter:Dt.LinearFilter,magFilter:M.magFilter!==void 0?M.magFilter:Dt.LinearFilter,wrapS:M.wrapS!==void 0?M.wrapS:Dt.ClampToEdgeWrapping,wrapT:M.wrapT!==void 0?M.wrapT:Dt.ClampToEdgeWrapping,format:M.format?M.format:Dt.RGBAFormat,type:M.type!==void 0?M.type:Dt.UnsignedByteType,stencilBuffer:M.stencilBuffer!==void 0?M.stencilBuffer:!0});return W&&(ae.depthTexture=new Dt.DepthTexture(w,I,Dt.UnsignedShortType)),ae}static drawRT(w,I,M=0,W=0,ae=0,he=0,ve=1){ni.helper.render(w,I,M,W,ae,he,ve)}static drawMRT(w,I,M,W=0,ae=0,he=0,ve=0){ni.helper.renderMRT(w,I,M,W,ae,he,ve)}static drawTexture(w,I,M=0,W=0,ae=0,he=0,ve=1){ni.helper.drawTexture(w,I,M,W,ae,he,ve)}static renderToRT(w,I,M){ni.helper.renderToTarget(w,I,M)}static renderToViewport(w,I){ni.helper.renderToViewport(w,I)}};ni.helper=new _a});var ba,yl=Pe(()=>{ba=class{constructor(){this._paused=!1,this._raf=null,this._rafId=-1,this._startTime=0,this._started=!1}get started(){return this._started}start(w=null){if(this._started)return;this._started=!0;let I=()=>{this.update(),this.render(),requestAnimationFrame(I)};return w==null?this._raf=I:this._raf=w,this.addEventListeners(),this._startTime=performance.now(),this._rafId=requestAnimationFrame(this._raf),this._rafId}addEventListeners(){}pause(){!this._started||this._paused||(this._paused=!0,cancelAnimationFrame(this._rafId))}resume(){!this._started||!this._paused||(this._paused=!1,this._rafId=requestAnimationFrame(this._raf))}update(){let w=performance.now()-this._startTime;this.manualUpdate(w)}manualUpdate(w){}render(){}}});var ri,Ma,$u=Pe(()=>{ri=Lt(St());yl();Ma=class extends ba{constructor(w=window.innerWidth,I=window.innerHeight,M={},W=!1){super(),this.vrMode=!1,this.size=new ri.Vector2,this.scene=new ri.Scene,M.ortho?this.camera=new ri.OrthographicCamera(-w/2,w/2,I/2,-I/2,M.near!=null?M.near:.1,M.far!=null?M.far:1e3):this.camera=new ri.PerspectiveCamera(M.fov!=null?M.fov:35,w/I,M.near!=null?M.near:.1,M.far!=null?M.far:1e3),this.scene.add(this.camera),this.renderer=new ri.WebGLRenderer({antialias:M.antialias!=null?M.antialias:!0,alpha:M.alpha!=null?M.alpha:!0}),this.renderer.setSize(w,I),W&&this.start()}start(w=null){if(!this.started)return this.clock=new ri.Clock(!0),this.vrMode?(this._started=!0,this._raf=w||(()=>{this.update(),this.render()}),this.renderer.setAnimationLoop(this._raf),1):super.start(w)}pause(){!this._started||this._paused||(this._paused=!0,this.vrMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this._rafId))}resume(){!this._started||!this._paused||(this._paused=!1,this.vrMode?this.renderer.setAnimationLoop(this._raf):this._rafId=requestAnimationFrame(this._raf))}get domElement(){return this.renderer.domElement}resize(w,I){w===this.size.x&&I===this.size.y||(this.size.set(w,I),this.renderer.setSize(this.size.x,this.size.y),this.camera.type=="PerspectiveCamera"?this.camera.aspect=this.size.x/this.size.y:(this.camera.left=-w/2,this.camera.right=w/2,this.camera.top=I/2,this.camera.bottom=-I/2),this.camera.updateProjectionMatrix())}render(){this.renderer.render(this.scene,this.camera)}}});var _l,Ku=Pe(()=>{_l=Lt(St())});var Gf,K0,Q0,Qu=Pe(()=>{Gf=Lt(St()),K0=180/Math.PI,Q0=Math.PI/180});var Yi,tv,ed=Pe(()=>{Yi=Lt(St()),tv=new Yi.SphereGeometry(100,64,64)});var bl=Pe(()=>{ju();xl();Ju();yl();$u();Ku();Qu();ed()});var Tt,Ml,Vf,wa,td=Pe(()=>{Tt=Lt(St());Qr();Gu();Hu();bl();Ml=new Tt.RawShaderMaterial({vertexShader:Vu,fragmentShader:Wu,uniforms:{tBackground:{value:null},tScene:{value:null},tGlow:{value:null},exposure:{value:1},gamma:{value:1},renderBackground:{value:!0},renderGlow:{value:!0},renderScene:{value:!0}},transparent:!0}),Vf={scale:.3,radius:1,iterations:8,quality:0},wa=class{constructor(w,I,M,W){this.showBackground=!0,this.showGlow=!0,this.showScene=!0,this.exposure=Ml.uniforms.exposure.value,this.gamma=Ml.uniforms.gamma.value,this.shader=Ml.clone(),this.rnd=w;let ae=I*window.devicePixelRatio,he=M*window.devicePixelRatio;this.sceneRT=new Tt.WebGLMultipleRenderTargets(ae,he,2,{format:Tt.RGBAFormat,type:Tt.UnsignedByteType,samples:W&&W.samples?W.samples:4}),this.sceneRT.texture[0].name="diffuse",this.sceneRT.texture[1].name="glow",W.useDepth&&(this.sceneRT.depthTexture=new Tt.DepthTexture(ae,he,Tt.FloatType),this.sceneRT.depthTexture.format=Tt.DepthFormat);let ve=W&&W.glowSettings?W.glowSettings:Vf;if(ve.isGlow=!0,this.glow=new Kr(this.sceneRT.texture[1],ae,he,ve),W&&W.exposure!==void 0&&(this.exposure=W.exposure),W&&W.gamma&&(this.gamma=W.gamma),W.customFargment!==void 0&&(this.shader.vertexShader=W.customFargment,W.customUniforms!==void 0)){let Te=W.customUniforms;for(let Xe in Te)this.shader.uniforms[Xe]=Te[Xe]}this.bgRT=new Tt.WebGLRenderTarget(I,M),this.bgScene=new Tt.Scene}get depthTexture(){return this.sceneRT.depthTexture}setSize(w,I){let M=w*window.devicePixelRatio,W=I*window.devicePixelRatio;this.sceneRT.setSize(M,W),this.bgRT.setSize(M,W),this.glow.setSize(M,W)}updateUniforms(){let w=this.shader.uniforms;w.exposure.value=this.exposure,w.gamma.value=this.gamma,w.renderBackground.value=this.showBackground,w.renderGlow.value=this.showGlow,w.renderScene.value=this.showScene,w.tScene.value=this.sceneRT.texture[0],w.tGlow.value=this.glow.texture}render(w,I,M=null){this.rnd.autoClear=!0;let W=w.background;w.background=null,W?(this.rnd.setRenderTarget(this.bgRT),this.bgScene.background=W,this.rnd.render(this.bgScene,I),this.rnd.setRenderTarget(null),this.shader.uniforms.tBackground.value=this.bgRT.texture):this.shader.uniforms.tBackground.value=null,this.rnd.setRenderTarget(this.sceneRT),this.rnd.render(w,I),w.background=W,this.glow.renderInternal(this.rnd),this.rnd.setRenderTarget(null),this.updateUniforms(),M?ni.renderToRT(M,this.rnd,this.shader):ni.renderToViewport(this.rnd,this.shader),this.rnd.setRenderTarget(null)}}});var Di,Zi=Pe(()=>{Di=class{constructor(){this.enabled=!0}render(w,I,M=null){!this.enabled||(w.setRenderTarget(M),I.quad.material=this.shader,this.shader.uniforms.tInput&&(this.shader.uniforms.tInput.value=I.read.texture),this.shader.uniforms.tDepth&&(this.shader.uniforms.tDepth.value=I.depthTexture),w.render(I.scene,I.camera))}setSize(w,I){}}});var xi,nr=Pe(()=>{xi=`#version 100

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
}`});var nd,id=Pe(()=>{nd=`#version 100
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
}`});var Bt,es,Kr,wl=Pe(()=>{Bt=Lt(St());Zi();nr();id();es={scale:1,radius:1,iterations:4,quality:0},Kr=class extends Di{constructor(w,I,M,W=es){super(),this.radius=2,this.iterations=4,this.quality=0,this.source=w;let ae=W.scale||es.scale,he=W.radius||es.radius,ve=W.iterations||es.iterations,Te=W.quality||es.quality;this.read=new Bt.WebGLRenderTarget(I,M),this.write=this.read.clone(),this.radius=he,this.iterations=ve,this.scale=ae,this.quality=Te,this.shader=new Bt.RawShaderMaterial({vertexShader:xi,fragmentShader:nd,uniforms:{resolution:{value:new Bt.Vector2(I,M)},direction:{value:new Bt.Vector2},scale:{value:ae},tMap:{value:null},mode:{value:Te},isGlow:{value:W.isGlow===!0}}}),this.scene=new Bt.Scene;let Xe=ae*I/2,ge=ae*M/2;this.camera=new Bt.OrthographicCamera(-Xe,Xe,ge,-ge,0,100),this.camera.position.z=1,this.scene.add(this.camera),this.quad=new Bt.Mesh(new Bt.PlaneGeometry(1,1),this.shader),this.quad.scale.set(I*ae,M*ae,1),this.scene.add(this.quad)}swapBuffers(){let w=this.write;this.write=this.read,this.read=w}setSize(w,I){this.read.setSize(w*this.scale,I*this.scale),this.write.setSize(w*this.scale,I*this.scale);let M=this.scale*w/2,W=this.scale*I/2;this.camera.left=-M,this.camera.right=M,this.camera.top=W,this.camera.bottom=-W,this.camera.updateProjectionMatrix(),this.quad.scale.set(w*this.scale,I*this.scale,1),this.shader.uniforms.resolution.value.set(w,I)}blurPass(w,I,M,W,ae){w.setRenderTarget(M),this.shader.uniforms.mode.value=this.quality,this.shader.uniforms.direction.value.set(W,ae),this.shader.uniforms.tMap.value=I,w.render(this.scene,this.camera)}render(w,I,M=null){this.blurPass(w,this.source!=null?this.source:I.read.texture,this.write,this.radius,0),this.swapBuffers();for(let ae=1;ae<this.iterations-1;ae++)this.blurPass(w,this.read.texture,this.write,ae%2==0?this.radius:0,ae%2==0?0:this.radius),this.swapBuffers();let W=this.iterations-1;this.blurPass(w,this.read.texture,M,W%2==0?this.radius:0,W%2==0?0:this.radius)}renderInternal(w){if(this.source==null)return console.warn("Internal rendering needs a source texture!");this.blurPass(w,this.source,this.write,this.radius,0),this.swapBuffers();for(let I=1;I<this.iterations;I++)this.blurPass(w,this.read.texture,this.write,I%2==0?this.radius:0,I%2==0?0:this.radius),this.swapBuffers()}get texture(){return this.read.texture}get target(){return this.read}}});var sd,rd=Pe(()=>{sd=`precision highp float;

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
}`});var od,ad=Pe(()=>{od=`/*
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
}`});var Sl,Rv,ld=Pe(()=>{nr();rd();Zi();Sl=Lt(St());Qr();Rv=new Sl.RawShaderMaterial({vertexShader:xi,fragmentShader:sd,uniforms:{tInput:{value:null},enableCA:{value:!0},chromatic_aberration:{value:.001},enableDithering:{value:!1},dither:{value:10},enableVignette:{value:!1},vIntensity:{value:1},enableLut:{value:!1},lookupTable:{value:null}}})});var hd,cd=Pe(()=>{hd=`#version 100
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
}`});var dd,ud=Pe(()=>{dd=`uniform float cameraNear;
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
}`});var Al,Uv,pd=Pe(()=>{Al=Lt(St());wl();Zi();nr();cd();Uv=new Al.RawShaderMaterial({vertexShader:xi,fragmentShader:hd,uniforms:{tInput:{value:null},tBlur:{value:null},tDepth:{value:null},cameraNear:{value:0},cameraFar:{value:100},aperture:{value:1.5},focalDistance:{value:1},debug:{value:!1}}})});var md,fd=Pe(()=>{Zi();md=Lt(St())});var Zf,gd=Pe(()=>{Zi();Zf=Lt(St())});var xd,vd=Pe(()=>{xd=`#version 100
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

}`});var _d,yd=Pe(()=>{_d=`float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
  return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}`});var Md,bd=Pe(()=>{Md=`/*
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
}`});var ts,Jv,wd=Pe(()=>{Zi();nr();vd();ts=Lt(St()),Jv=new ts.RawShaderMaterial({vertexShader:xi,fragmentShader:xd,uniforms:{resolution:{value:new ts.Vector2},tInput:{value:null},pixelate:{value:!0},dithering:{value:2},gridSize:{value:5}}})});var Td,Sd=Pe(()=>{Td=`#version 100
precision lowp float;

uniform sampler2D tInput;
uniform float opacity;

varying vec2 vUv;

void main() {
	gl_FragColor = texture2D(tInput, vUv) * opacity;
}`});var yi,tx,El=Pe(()=>{yi=Lt(St());Sd();nr();tx=new yi.RawShaderMaterial({vertexShader:xi,fragmentShader:Td,uniforms:{tInput:{value:null}}})});var Ad=Pe(()=>{Qr();El()});var Cd,Ed=Pe(()=>{Cd=`#include <output_fragment>

oGlow = vec4(totalEmissiveRadiance, 1.0);`});var Rd,Ld=Pe(()=>{Rd=`#include <clipping_planes_pars_fragment>

layout (location = 1) out vec4 oGlow;`});function rr(g,w=!1){if(w){let I=g.fragmentShader;I=I.replace("#include <clipping_planes_pars_fragment>",Rd),I=I.replace("#include <output_fragment>",Cd),g.fragmentShader=I}else{let I=g.fragmentShader;I=I.replace("#include <clipping_planes_pars_fragment>",`#include <clipping_planes_pars_fragment>
    layout(location = 1) out vec4 oGlow;`),I=I.replace("#include <output_fragment>",`#include <output_fragment>
    oGlow = vec4(0.);`),g.fragmentShader=I}}function is(g){return g.onBeforeCompile=(w,I)=>{rr(w,g.emissive!==void 0)},g}var Cl=Pe(()=>{Ed();Ld()});var It,ig,ng,rg,sg,Pd=Pe(()=>{It=Lt(St());Cl();ig={vertexShader:It.ShaderLib.basic.vertexShader.split("").join(""),fragmentShader:It.ShaderLib.basic.fragmentShader.split("").join(""),uniforms:null};rr(ig,!1);ng={vertexShader:It.ShaderLib.phong.vertexShader.split("").join(""),fragmentShader:It.ShaderLib.phong.fragmentShader.split("").join(""),uniforms:null};rr(ng,!0);rg={vertexShader:It.ShaderLib.standard.vertexShader.split("").join(""),fragmentShader:It.ShaderLib.standard.fragmentShader.split("").join(""),uniforms:null};rr(rg,!0);sg={vertexShader:It.ShaderLib.physical.vertexShader.split("").join(""),fragmentShader:It.ShaderLib.physical.fragmentShader.split("").join(""),uniforms:null};rr(sg,!0)});var Id,Dd=Pe(()=>{Id=`vec4 rgbSplit(sampler2D tex, vec2 uv, float strength, vec2 delta, vec2 maxV, bool radial) {
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
}`});var Nd,Od=Pe(()=>{Nd=`float d_rand(vec2 co){
	return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float dithering(vec2 st,float intensity){
	return mix(-intensity / 255.,intensity / 255.,d_rand(st));
}`});var Tl,Qr=Pe(()=>{td();Zi();wl();ld();pd();fd();gd();wd();Ad();El();Cl();Pd();Dd();Od();ud();ad();yd();bd();Tl={rgbSplit:Id,dithering:Nd,depth:dd,lut:od,luma:_d,dither2:Md}});var zd={};Rf(zd,{App:()=>Ll});var ut,lg,cg,hg,ug,Ll,Fd=Pe(()=>{ut=Lt(St());Nu();Fu();ku();Qr();bl();lg=new ut.BoxGeometry(1,1,1),cg=new ut.SphereGeometry(1),hg=new ut.CylinderGeometry(.1,.1,1,32,8),ug=new ut.TorusKnotGeometry(10,2,64,32,2,3),Ll=class extends Ma{constructor(){super(window.innerWidth,window.innerHeight,{alpha:!1,antialias:!0});this.meshes=[];this.renderer.setClearColor(0,1),document.body.appendChild(this.domElement),this.domElement.className="view",ut.ShaderChunk.rgbSplit=Tl.rgbSplit;let I=new ut.DirectionalLight(16777215,.35);I.position.set(-1,1,1),this.scene.add(I);let M=new ut.Mesh(lg,is(new ut.MeshPhongMaterial({color:16711680})));M.rotation.set(-.2,.2,.1),M.scale.x=1.5,this.scene.add(M),this.meshes.push(M);let W=new ut.Mesh(cg,is(new ut.MeshPhongMaterial({color:255,emissive:1118719,emissiveIntensity:1.7})));W.position.z=-2,W.position.y=.75,W.scale.setScalar(.75),this.scene.add(W),this.meshes.push(W);let ae=new ut.Mesh(hg,is(new ut.MeshPhongMaterial({color:65280,emissive:2293538,emissiveIntensity:2.2})));ae.rotation.z=Math.PI/4,ae.position.z=2,ae.scale.y=5,this.scene.add(ae),this.meshes.push(ae);let he=new ut.Mesh(ug,is(new ut.MeshPhongMaterial({color:0})));he.position.z=4,he.scale.setScalar(.1),this.scene.add(he),this.meshes.push(he),window.addEventListener("resize",Ce=>{this.resize(window.innerWidth,window.innerHeight)}),this.camera.position.z=15,this.customRenderer=new wa(this.renderer,window.innerWidth,window.innerHeight,{exposure:.1,gamma:1.8,samples:4,glowSettings:{scale:.5,radius:1,iterations:8,quality:2}});let ve=Ou();document.body.appendChild(ve.domElement);let Te=new ya(this.camera,this.domElement),Xe=()=>{requestAnimationFrame(Xe),ve.begin(),this.update(),Te.update(),this.render(),ve.end()},ge=new ir;ge.add(this.customRenderer,"showGlow"),ge.add(this.customRenderer,"showScene"),ge.add(this.customRenderer,"exposure",0,1,.1),ge.add(this.customRenderer,"gamma",1,3.2,.1);let Ve=ge.addFolder("Blur Options");Ve.add(this.customRenderer.glow,"iterations",2,32,1),Ve.add(this.customRenderer.glow,"quality",{BLUR5:0,BLUR9:1,BLUR13:2}),Ve.add(this.customRenderer.glow,"radius",{1:1,"1/2":.5,"1/4":.25}),Ve.add(this.customRenderer.glow,"scale",{"100%":1,"50%":.5,"25%":.25}).onFinishChange(()=>{this.customRenderer.glow.setSize(window.innerWidth,window.innerHeight)}),this.start(Xe)}resize(I,M){super.resize(I,M),this.customRenderer.setSize(I,M)}update(){super.update();let I=this.clock.getElapsedTime();this.meshes[3].rotation.set(I*.2,I*.16,0),this.meshes[2].rotation.set(0,0,Math.PI/4-I*.1)}render(){this.customRenderer.render(this.scene,this.camera)}}});var{App:dg}=(Fd(),Pf(zd)),Hx=new dg;})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */
