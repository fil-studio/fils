(()=>{var Xd=Object.create;var Es=Object.defineProperty;var Yd=Object.getOwnPropertyDescriptor;var Zd=Object.getOwnPropertyNames;var Jd=Object.getPrototypeOf,Kd=Object.prototype.hasOwnProperty;var _n=(g,re)=>()=>(g&&(re=g(g=0)),re);var qc=(g,re)=>()=>(re||g((re={exports:{}}).exports,re),re.exports),$d=(g,re)=>{for(var we in re)Es(g,we,{get:re[we],enumerable:!0})},Xc=(g,re,we,He)=>{if(re&&typeof re=="object"||typeof re=="function")for(let je of Zd(re))!Kd.call(g,je)&&je!==we&&Es(g,je,{get:()=>re[je],enumerable:!(He=Yd(re,je))||He.enumerable});return g};var Yc=(g,re,we)=>(we=g!=null?Xd(Jd(g)):{},Xc(re||!g||!g.__esModule?Es(we,"default",{value:g,enumerable:!0}):we,g)),Qd=g=>Xc(Es({},"__esModule",{value:!0}),g);var Jc=qc(dr=>{function Zc(){var g,re,we,He,je;g=624,re=397,we=2567483615,He=2147483648,je=2147483647;var be=new Array(g),ht=g+1;function Ye(ye){return ye<0?(ye^He)+He:ye}function io(ye,Ue){return ye<Ue?Ye(4294967296-(Ue-ye)&4294967295):ye-Ue}function bi(ye,Ue){return Ye(ye+Ue&4294967295)}function mr(ye,Ue){for(var qe=0,At=0;At<32;++At)ye>>>At&1&&(qe=bi(qe,Ye(Ue<<At)));return qe}this.init_genrand=function(ye){for(be[0]=Ye(ye&4294967295),ht=1;ht<g;ht++)be[ht]=bi(mr(1812433253,Ye(be[ht-1]^be[ht-1]>>>30)),ht),be[ht]=Ye(be[ht]&4294967295)},this.init_by_array=function(ye,Ue){var qe,At,yn;for(this.init_genrand(19650218),qe=1,At=0,yn=g>Ue?g:Ue;yn;yn--)be[qe]=bi(bi(Ye(be[qe]^mr(Ye(be[qe-1]^be[qe-1]>>>30),1664525)),ye[At]),At),be[qe]=Ye(be[qe]&4294967295),qe++,At++,qe>=g&&(be[0]=be[g-1],qe=1),At>=Ue&&(At=0);for(yn=g-1;yn;yn--)be[qe]=io(Ye((dbg=be[qe])^mr(Ye(be[qe-1]^be[qe-1]>>>30),1566083941)),qe),be[qe]=Ye(be[qe]&4294967295),qe++,qe>=g&&(be[0]=be[g-1],qe=1);be[0]=2147483648};var fr=[0,we];this.genrand_int32=function(){var ye;if(ht>=g){var Ue;for(ht==g+1&&this.init_genrand(5489),Ue=0;Ue<g-re;Ue++)ye=Ye(be[Ue]&He|be[Ue+1]&je),be[Ue]=Ye(be[Ue+re]^ye>>>1^fr[ye&1]);for(;Ue<g-1;Ue++)ye=Ye(be[Ue]&He|be[Ue+1]&je),be[Ue]=Ye(be[Ue+(re-g)]^ye>>>1^fr[ye&1]);ye=Ye(be[g-1]&He|be[0]&je),be[g-1]=Ye(be[re-1]^ye>>>1^fr[ye&1]),ht=0}return ye=be[ht++],ye=Ye(ye^ye>>>11),ye=Ye(ye^ye<<7&2636928640),ye=Ye(ye^ye<<15&4022730752),ye=Ye(ye^ye>>>18),ye},this.genrand_int31=function(){return this.genrand_int32()>>>1},this.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},this.genrand_real2=function(){return this.genrand_int32()*(1/4294967296)},this.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},this.genrand_res53=function(){var ye=this.genrand_int32()>>>5,Ue=this.genrand_int32()>>>6;return(ye*67108864+Ue)*(1/9007199254740992)}}dr.MersenneTwister19937=Zc;var Cs=new Zc;Cs.init_genrand(new Date().getTime()%1e9);dr.rand=function(g){return g||(g=32768),Math.floor(Cs.genrand_real2()*g)};dr.seed=function(g){if(typeof g!="number")throw new Error("seed(S) must take numeric argument; is "+typeof g);Cs.init_genrand(g)};dr.seed_array=function(g){if(typeof g!="object")throw new Error("seed_array(A) must take array of numbers; is "+typeof g);Cs.init_by_array(g)}});var ep,Kc=_n(()=>{ep=Yc(Jc())});var jt,Ls=_n(()=>{jt=class{static clamp(re,we,He){return Math.min(He,Math.max(we,re))}static lerp(re,we,He){return re+(we-re)*He}static mix(re,we,He){return jt.lerp(re,we,He)}static smoothstep(re,we,He){return He<re?0:He>we?1:(He-re)/(we-re)}static step(re,we){return we<re?0:1}static map(re,we,He,je,be){return(re-we)*(be-je)/(He-we)+je}static fract(re){return re%1}}});var $c=_n(()=>{Ls()});var eh=qc((Rs,Qc)=>{(function(g,re){typeof Rs=="object"&&typeof Qc<"u"?re(Rs):typeof define=="function"&&define.amd?define(["exports"],re):re((g=typeof globalThis<"u"?globalThis:g||self).THREE={})})(Rs,function(g){"use strict";let re="146",gr="srgb",vr="srgb-linear",Ds="300 es";class qt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}let ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=1234567,Mn=Math.PI/180,Si=180/Math.PI;function _t(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ut[255&r]+ut[r>>8&255]+ut[r>>16&255]+ut[r>>24&255]+"-"+ut[255&e]+ut[e>>8&255]+"-"+ut[e>>16&15|64]+ut[e>>24&255]+"-"+ut[63&t|128]+ut[t>>8&255]+"-"+ut[t>>16&255]+ut[t>>24&255]+ut[255&n]+ut[n>>8&255]+ut[n>>16&255]+ut[n>>24&255]).toLowerCase()}function Ke(r,e,t){return Math.max(e,Math.min(t,r))}function Is(r,e){return(r%e+e)%e}function wi(r,e,t){return(1-t)*r+t*e}function Ns(r){return(r&r-1)==0&&r!==0}function so(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fe(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var lh=Object.freeze({__proto__:null,DEG2RAD:Mn,RAD2DEG:Si,generateUUID:_t,clamp:Ke,euclideanModulo:Is,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:wi,damp:function(r,e,t,n){return wi(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Is(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(ro=r);let e=ro+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Mn},radToDeg:function(r){return r*Si},isPowerOfTwo:Ns,ceilPowerOfTwo:so,floorPowerOfTwo:xr,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Fe,denormalize:Xt});class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],m=i[0],v=i[3],_=i[6],x=i[1],y=i[4],M=i[7],b=i[2],S=i[5],R=i[8];return s[0]=a*m+o*x+l*b,s[3]=a*v+o*y+l*S,s[6]=a*_+o*M+l*R,s[1]=c*m+h*x+u*b,s[4]=c*v+h*y+u*S,s[7]=c*_+h*M+u*R,s[2]=d*m+p*x+f*b,s[5]=d*v+p*y+f*S,s[8]=d*_+p*M+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/f;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(o*n-i*a)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*h,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ao(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}let ch={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function qn(r,e){return new ch[r](e)}function Ti(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function _r(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let Os={[gr]:{[vr]:bn},[vr]:{[gr]:_r}},Et={legacyMode:!0,get workingColorSpace(){return vr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Os[e]&&Os[e][t]!==void 0){let n=Os[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},oo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},It={h:0,s:0,l:0},yr={h:0,s:0,l:0};function zs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function Mr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i="srgb-linear"){return this.r=e,this.g=t,this.b=n,Et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i="srgb-linear"){if(e=Is(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zs(a,s,e+1/3),this.g=zs(a,s,e),this.b=zs(a,s,e-1/3)}return Et.toWorkingColorSpace(this,i),this}setStyle(e,t="srgb"){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Et.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Et.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Et.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Et.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t="srgb"){let n=oo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return Et.fromWorkingColorSpace(Mr(this,et),e),Ke(255*et.r,0,255)<<16^Ke(255*et.g,0,255)<<8^Ke(255*et.b,0,255)<<0}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t="srgb-linear"){Et.fromWorkingColorSpace(Mr(this,et),t);let n=et.r,i=et.g,s=et.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t="srgb-linear"){return Et.fromWorkingColorSpace(Mr(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e="srgb"){return Et.fromWorkingColorSpace(Mr(this,et),e),e!==gr?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${255*et.r|0},${255*et.g|0},${255*et.b|0})`}offsetHSL(e,t,n){return this.getHSL(It),It.h+=e,It.s+=t,It.l+=n,this.setHSL(It.h,It.s,It.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(It),e.getHSL(yr);let n=wi(It.h,yr.h,t),i=wi(It.s,yr.s,t),s=wi(It.l,yr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let Xn;ce.NAMES=oo;class Us{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Ti("canvas")),Xn.width=e.width,Xn.height=e.height;let n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ti("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*bn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*bn(t[n]/255)):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Sn{constructor(e=null){this.isSource=!0,this.uuid=_t(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Bs(i[a].image)):s.push(Bs(i[a]))}else s=Bs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Bs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Us.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class tt extends qt{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=1,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=_t(),this.name="",this.source=new Sn(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tt.DEFAULT_IMAGE=null,tt.DEFAULT_MAPPING=300;class ze{constructor(e=0,t=0,n=0,i=1){ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],m=l[2],v=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(f-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(f+v)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(p+1)/2,b=(_+1)/2,S=(h+d)/4,R=(u+m)/4,P=(f+v)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=S/n,s=R/n):M>b?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=S/i,s=P/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((v-f)*(v-f)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(v-f)/x,this.y=(u-m)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ct extends qt{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:1006,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Sn(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br extends tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],m=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=m);if(u!==m||l!==d||c!==p||h!==f){let v=1-o,_=l*d+c*p+h*f+u*m,x=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){let b=Math.sqrt(y),S=Math.atan2(b,_*x);v=Math.sin(v*S)/b,o=Math.sin(o*S)/b}let M=o*x;if(l=l*v+d*M,c=c*v+p*M,h=h*v+f*M,u=u*v+m*M,v===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let Fs=new T,lo=new xt;class wn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){let h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){let h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Tn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Tn)}else n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox),ks.applyMatrix4(e.matrixWorld),this.union(ks);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Sr.subVectors(this.max,Ei),Yn.subVectors(e.a,Ei),Zn.subVectors(e.b,Ei),Jn.subVectors(e.c,Ei),sn.subVectors(Zn,Yn),an.subVectors(Jn,Zn),An.subVectors(Yn,Jn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-An.z,An.y,sn.z,0,-sn.x,an.z,0,-an.x,An.z,0,-An.x,-sn.y,sn.x,0,-an.y,an.x,0,-An.y,An.x,0];return!!Gs(t,Yn,Zn,Jn,Sr)&&(t=[1,0,0,0,1,0,0,0,1],!!Gs(t,Yn,Zn,Jn,Sr)&&(wr.crossVectors(sn,an),t=[wr.x,wr.y,wr.z],Gs(t,Yn,Zn,Jn,Sr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Tn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Tn).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}let Yt=[new T,new T,new T,new T,new T,new T,new T,new T],Tn=new T,ks=new wn,Yn=new T,Zn=new T,Jn=new T,sn=new T,an=new T,An=new T,Ei=new T,Sr=new T,wr=new T,En=new T;function Gs(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){En.fromArray(r,s);let o=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),h=n.dot(En);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}let uh=new wn,Ci=new T,Vs=new T;class Cn{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):uh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);let t=Ci.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ci,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(Vs)),this.expandByPoint(Ci.copy(e.center).sub(Vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}let Zt=new T,Hs=new T,Tr=new T,on=new T,Ws=new T,Ar=new T,js=new T;class Li{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.direction).multiplyScalar(t).add(this.origin),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hs.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Hs);let s=.5*e.distanceTo(t),a=-this.direction.dot(Tr),o=on.dot(this.direction),l=-on.dot(Tr),c=on.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let m=1/h;u*=m,d*=m,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Tr).multiplyScalar(d).add(Hs),p}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);let n=Zt.dot(this.direction),i=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,i,s){Ws.subVectors(t,e),Ar.subVectors(n,e),js.crossVectors(Ws,Ar);let a,o=this.direction.dot(js);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}on.subVectors(this.origin,e);let l=a*this.direction.dot(Ar.crossVectors(on,Ar));if(l<0)return null;let c=a*this.direction.dot(Ws.cross(on));if(c<0||l+c>o)return null;let h=-a*on.dot(js);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,m,v){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=m,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-m*c,t[9]=-o*l,t[2]=m-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d+m*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=m+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,m=c*u;t[0]=d-m*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=m-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,m=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=m-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-m*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,m=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dh,e,ph)}lookAt(e,t,n){let i=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),ln.crossVectors(n,yt),ln.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),ln.crossVectors(n,yt)),ln.normalize(),Er.crossVectors(yt,ln),i[0]=ln.x,i[4]=Er.x,i[8]=yt.x,i[1]=ln.y,i[5]=Er.y,i[9]=yt.y,i[2]=ln.z,i[6]=Er.z,i[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],m=n[6],v=n[10],_=n[14],x=n[3],y=n[7],M=n[11],b=n[15],S=i[0],R=i[4],P=i[8],U=i[12],F=i[1],D=i[5],Y=i[9],Q=i[13],q=i[2],ie=i[6],ne=i[10],k=i[14],W=i[3],ee=i[7],Z=i[11],J=i[15];return s[0]=a*S+o*F+l*q+c*W,s[4]=a*R+o*D+l*ie+c*ee,s[8]=a*P+o*Y+l*ne+c*Z,s[12]=a*U+o*Q+l*k+c*J,s[1]=h*S+u*F+d*q+p*W,s[5]=h*R+u*D+d*ie+p*ee,s[9]=h*P+u*Y+d*ne+p*Z,s[13]=h*U+u*Q+d*k+p*J,s[2]=f*S+m*F+v*q+_*W,s[6]=f*R+m*D+v*ie+_*ee,s[10]=f*P+m*Y+v*ne+_*Z,s[14]=f*U+m*Q+v*k+_*J,s[3]=x*S+y*F+M*q+b*W,s[7]=x*R+y*D+M*ie+b*ee,s[11]=x*P+y*Y+M*ne+b*Z,s[15]=x*U+y*Q+M*k+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],m=e[13],v=e[14],_=e[15],x=u*v*c-m*d*c+m*l*p-o*v*p-u*l*_+o*d*_,y=f*d*c-h*v*c-f*l*p+a*v*p+h*l*_-a*d*_,M=h*m*c-f*u*c+f*o*p-a*m*p-h*o*_+a*u*_,b=f*u*l-h*m*l-f*o*d+a*m*d+h*o*v-a*u*v,S=t*x+n*y+i*M+s*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=x*R,e[1]=(m*d*s-u*v*s-m*i*p+n*v*p+u*i*_-n*d*_)*R,e[2]=(o*v*s-m*l*s+m*i*c-n*v*c-o*i*_+n*l*_)*R,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*R,e[4]=y*R,e[5]=(h*v*s-f*d*s+f*i*p-t*v*p-h*i*_+t*d*_)*R,e[6]=(f*l*s-a*v*s-f*i*c+t*v*c+a*i*_-t*l*_)*R,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*R,e[8]=M*R,e[9]=(f*u*s-h*m*s-f*n*p+t*m*p+h*n*_-t*u*_)*R,e[10]=(a*m*s-f*o*s+f*n*c-t*m*c-a*n*_+t*o*_)*R,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=b*R,e[13]=(h*m*i-f*u*i+f*n*d-t*m*d-h*n*v+t*u*v)*R,e[14]=(f*o*i-a*m*i-f*n*l+t*m*l+a*n*v-t*o*v)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,m=a*h,v=a*u,_=o*u,x=l*c,y=l*h,M=l*u,b=n.x,S=n.y,R=n.z;return i[0]=(1-(m+_))*b,i[1]=(p+M)*b,i[2]=(f-y)*b,i[3]=0,i[4]=(p-M)*S,i[5]=(1-(d+_))*S,i[6]=(v+x)*S,i[7]=0,i[8]=(f+y)*R,i[9]=(v-x)*R,i[10]=(1-(d+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Kn.set(i[0],i[1],i[2]).length(),a=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Nt.copy(this);let l=1/s,c=1/a,h=1/o;return Nt.elements[0]*=l,Nt.elements[1]*=l,Nt.elements[2]*=l,Nt.elements[4]*=c,Nt.elements[5]*=c,Nt.elements[6]*=c,Nt.elements[8]*=h,Nt.elements[9]*=h,Nt.elements[10]*=h,t.setFromRotationMatrix(Nt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),u=(t+e)*l,d=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}let Kn=new T,Nt=new Me,dh=new T(0,0,0),ph=new T(1,1,1),ln=new T,Er=new T,yt=new T,co=new Me,ho=new xt;class $n{constructor(e=0,t=0,n=0,i=$n.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return co.makeRotationFromQuaternion(e),this.setFromRotationMatrix(co,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ho.setFromEuler(this),this.setFromQuaternion(ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}$n.DefaultOrder="XYZ",$n.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let mh=0,uo=new T,Qn=new xt,Jt=new Me,Lr=new T,Ri=new T,fh=new T,gh=new xt,po=new T(1,0,0),mo=new T(0,1,0),fo=new T(0,0,1),vh={type:"added"},go={type:"removed"};class Ne extends qt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=_t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DefaultUp.clone();let e=new T,t=new $n,n=new xt,i=new T(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new vt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=Ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ne.DefaultMatrixWorldAutoUpdate,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(mo,e)}rotateZ(e){return this.rotateOnAxis(fo,e)}translateOnAxis(e,t){return uo.copy(e).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(mo,e)}translateZ(e){return this.translateOnAxis(fo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Ri,Lr,this.up):Jt.lookAt(Lr,Ri,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(go)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(go)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}}Ne.DefaultUp=new T(0,1,0),Ne.DefaultMatrixAutoUpdate=!0,Ne.DefaultMatrixWorldAutoUpdate=!0;let Ot=new T,Kt=new T,qs=new T,$t=new T,ei=new T,ti=new T,vo=new T,Xs=new T,Ys=new T,Zs=new T;class Lt{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ot.subVectors(i,t),Kt.subVectors(n,t),qs.subVectors(e,t);let a=Ot.dot(Ot),o=Ot.dot(Kt),l=Ot.dot(qs),c=Kt.dot(Kt),h=Kt.dot(qs),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$t),$t.x>=0&&$t.y>=0&&$t.x+$t.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,$t),l.set(0,0),l.addScaledVector(s,$t.x),l.addScaledVector(a,$t.y),l.addScaledVector(o,$t.z),l}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),Kt.subVectors(e,t),Ot.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),.5*Ot.cross(Kt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Lt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;ei.subVectors(i,n),ti.subVectors(s,n),Xs.subVectors(e,n);let l=ei.dot(Xs),c=ti.dot(Xs);if(l<=0&&c<=0)return t.copy(n);Ys.subVectors(e,i);let h=ei.dot(Ys),u=ti.dot(Ys);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ei,a);Zs.subVectors(e,s);let p=ei.dot(Zs),f=ti.dot(Zs);if(f>=0&&p<=f)return t.copy(s);let m=p*c-l*f;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(ti,o);let v=h*f-p*u;if(v<=0&&u-h>=0&&p-f>=0)return vo.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(vo,o);let _=1/(v+m+d);return a=m*_,o=d*_,t.copy(n).addScaledVector(ei,a).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let xh=0;class dt extends qt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=_t(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.")}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cn extends dt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}let Qe=new T,Rr=new $;class ke{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Js extends ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ks extends ke{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class he extends ke{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _h=0,Rt=new Me,$s=new Ne,ni=new T,Mt=new wn,Pi=new wn,rt=new T;class Ee extends qt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=_t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ao(e)?Ks:Js)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new he(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new T,1/0);if(e){let n=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Pi.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Mt.min,Pi.min),Mt.expandByPoint(rt),rt.addVectors(Mt.max,Pi.max),Mt.expandByPoint(rt)):(Mt.expandByPoint(Pi.min),Mt.expandByPoint(Pi.max))}Mt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rt.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(e,c),rt.add(ni)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<o;F++)c[F]=new T,h[F]=new T;let u=new T,d=new T,p=new T,f=new $,m=new $,v=new $,_=new T,x=new T;function y(F,D,Y){u.fromArray(i,3*F),d.fromArray(i,3*D),p.fromArray(i,3*Y),f.fromArray(a,2*F),m.fromArray(a,2*D),v.fromArray(a,2*Y),d.sub(u),p.sub(u),m.sub(f),v.sub(f);let Q=1/(m.x*v.y-v.x*m.y);isFinite(Q)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(Q),x.copy(p).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(Q),c[F].add(_),c[D].add(_),c[Y].add(_),h[F].add(x),h[D].add(x),h[Y].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let F=0,D=M.length;F<D;++F){let Y=M[F],Q=Y.start;for(let q=Q,ie=Q+Y.count;q<ie;q+=3)y(n[q+0],n[q+1],n[q+2])}let b=new T,S=new T,R=new T,P=new T;function U(F){R.fromArray(s,3*F),P.copy(R);let D=c[F];b.copy(D),b.sub(R.multiplyScalar(R.dot(D))).normalize(),S.crossVectors(P,D);let Y=S.dot(h[F])<0?-1:1;l[4*F]=b.x,l[4*F+1]=b.y,l[4*F+2]=b.z,l[4*F+3]=Y}for(let F=0,D=M.length;F<D;++F){let Y=M[F],Q=Y.start;for(let q=Q,ie=Q+Y.count;q<ie;q+=3)U(n[q+0]),U(n[q+1]),U(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),m=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let m=0,v=l.length;m<v;m++){p=o.isInterleavedBufferAttribute?l[m]*o.data.stride+o.offset:l[m]*h;for(let _=0;_<h;_++)d[f++]=c[p++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Ee,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}let xo=new Me,ii=new Li,Qs=new Cn,hn=new T,un=new T,dn=new T,ea=new T,ta=new T,na=new T,Pr=new T,Dr=new T,Ir=new T,Nr=new $,Or=new $,zr=new $,ia=new T,Ur=new T;class ot extends Ne{constructor(e=new Ee,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),e.ray.intersectsSphere(Qs)===!1)||(xo.copy(s).invert(),ii.copy(e.ray).applyMatrix4(xo),n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,p=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){let _=p[m],x=i[_.materialIndex];for(let y=Math.max(_.start,f.start),M=Math.min(o.count,Math.min(_.start+_.count,f.start+f.count));y<M;y+=3){let b=o.getX(y),S=o.getX(y+1),R=o.getX(y+2);a=Br(this,x,e,ii,l,c,h,u,d,b,S,R),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else for(let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);m<v;m+=3){let _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);a=Br(this,i,e,ii,l,c,h,u,d,_,x,y),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}else if(l!==void 0)if(Array.isArray(i))for(let m=0,v=p.length;m<v;m++){let _=p[m],x=i[_.materialIndex];for(let y=Math.max(_.start,f.start),M=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));y<M;y+=3)a=Br(this,x,e,ii,l,c,h,u,d,y,y+1,y+2),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}else for(let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);m<v;m+=3)a=Br(this,i,e,ii,l,c,h,u,d,m,m+1,m+2),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}function Br(r,e,t,n,i,s,a,o,l,c,h,u){hn.fromBufferAttribute(i,c),un.fromBufferAttribute(i,h),dn.fromBufferAttribute(i,u);let d=r.morphTargetInfluences;if(s&&d){Pr.set(0,0,0),Dr.set(0,0,0),Ir.set(0,0,0);for(let f=0,m=s.length;f<m;f++){let v=d[f],_=s[f];v!==0&&(ea.fromBufferAttribute(_,c),ta.fromBufferAttribute(_,h),na.fromBufferAttribute(_,u),a?(Pr.addScaledVector(ea,v),Dr.addScaledVector(ta,v),Ir.addScaledVector(na,v)):(Pr.addScaledVector(ea.sub(hn),v),Dr.addScaledVector(ta.sub(un),v),Ir.addScaledVector(na.sub(dn),v)))}hn.add(Pr),un.add(Dr),dn.add(Ir)}r.isSkinnedMesh&&(r.boneTransform(c,hn),r.boneTransform(h,un),r.boneTransform(u,dn));let p=function(f,m,v,_,x,y,M,b){let S;if(S=m.side===1?_.intersectTriangle(M,y,x,!0,b):_.intersectTriangle(x,y,M,m.side!==2,b),S===null)return null;Ur.copy(b),Ur.applyMatrix4(f.matrixWorld);let R=v.ray.origin.distanceTo(Ur);return R<v.near||R>v.far?null:{distance:R,point:Ur.clone(),object:f}}(r,e,t,n,hn,un,dn,ia);if(p){o&&(Nr.fromBufferAttribute(o,c),Or.fromBufferAttribute(o,h),zr.fromBufferAttribute(o,u),p.uv=Lt.getUV(ia,hn,un,dn,Nr,Or,zr,new $)),l&&(Nr.fromBufferAttribute(l,c),Or.fromBufferAttribute(l,h),zr.fromBufferAttribute(l,u),p.uv2=Lt.getUV(ia,hn,un,dn,Nr,Or,zr,new $));let f={a:c,b:h,c:u,normal:new T,materialIndex:0};Lt.getNormal(hn,un,dn,f.normal),p.face=f}return p}class pn extends Ee{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(m,v,_,x,y,M,b,S,R,P,U){let F=M/R,D=b/P,Y=M/2,Q=b/2,q=S/2,ie=R+1,ne=P+1,k=0,W=0,ee=new T;for(let Z=0;Z<ne;Z++){let J=Z*D-Q;for(let ue=0;ue<ie;ue++){let Ae=ue*F-Y;ee[m]=Ae*x,ee[v]=J*y,ee[_]=q,c.push(ee.x,ee.y,ee.z),ee[m]=0,ee[v]=0,ee[_]=S>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ue/R),u.push(1-Z/P),k+=1}}for(let Z=0;Z<P;Z++)for(let J=0;J<R;J++){let ue=d+J+ie*Z,Ae=d+J+ie*(Z+1),pe=d+(J+1)+ie*(Z+1),Se=d+(J+1)+ie*Z;l.push(ue,Ae,Se),l.push(Ae,pe,Se),W+=6}o.addGroup(p,W,U),p+=W,d+=k}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2))}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ri(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pt(r){let e={};for(let t=0;t<r.length;t++){let n=ri(r[t]);for(let i in n)e[i]=n[i]}return e}let _o={clone:ri,merge:pt};class Gt extends dt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ri(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fr extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class lt extends Fr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Si*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Mn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Si*Math.atan(Math.tan(.5*Mn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Mn*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}let si=90;class yo extends Ne{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new lt(si,1,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);let s=new lt(si,1,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);let a=new lt(si,1,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new T(0,1,0)),this.add(a);let o=new lt(si,1,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new T(0,-1,0)),this.add(o);let l=new lt(si,1,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);let c=new lt(si,1,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=0,e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Di extends tt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends Ct{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Di(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pn(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new ot(i,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new yo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}let ra=new T,yh=new T,Mh=new vt;class mn{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ra.subVectors(n,t).cross(yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mh.getNormalMatrix(e),i=this.coplanarPoint(ra).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}let ai=new Cn,kr=new T;class Gr{constructor(e=new mn,t=new mn,n=new mn,i=new mn,s=new mn,a=new mn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],f=n[10],m=n[11],v=n[12],_=n[13],x=n[14],y=n[15];return t[0].setComponents(o-i,u-l,m-d,y-v).normalize(),t[1].setComponents(o+i,u+l,m+d,y+v).normalize(),t[2].setComponents(o+s,u+c,m+p,y+_).normalize(),t[3].setComponents(o-s,u-c,m-p,y-_).normalize(),t[4].setComponents(o-a,u-h,m-f,y-x).normalize(),t[5].setComponents(o+a,u+h,m+f,y+x).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSprite(e){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bo(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bh(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);a===void 0?n.set(i,function(o,l){let c=o.array,h=o.usage,u=r.createBuffer(),d;if(r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)d=5126;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");d=5131}else d=5123;else if(c instanceof Int16Array)d=5122;else if(c instanceof Uint32Array)d=5125;else if(c instanceof Int32Array)d=5124;else if(c instanceof Int8Array)d=5120;else if(c instanceof Uint8Array)d=5121;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);d=5121}return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version}}(i,s)):a.version<i.version&&(function(o,l,c){let h=l.array,u=l.updateRange;r.bindBuffer(c,o),u.count===-1?r.bufferSubData(c,0,h):(t?r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1)}(a.buffer,i,s),a.version=i.version)}}}class oi extends Ee{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],m=[],v=[];for(let _=0;_<h;_++){let x=_*d-a;for(let y=0;y<c;y++){let M=y*u-s;f.push(M,-x,0),m.push(0,0,1),v.push(y/o),v.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<o;x++){let y=x+c*_,M=x+c*(_+1),b=x+1+c*(_+1),S=x+1+c*_;p.push(y,M,S),p.push(M,b,S)}this.setIndex(p),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(m,3)),this.setAttribute("uv",new he(v,2))}static fromJSON(e){return new oi(e.width,e.height,e.widthSegments,e.heightSegments)}}let Te={alphamap_fragment:`#ifdef USE_ALPHAMAP
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
}`},se={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vt},uv2Transform:{value:new vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}}},zt={basic:{uniforms:pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ce(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:pt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:pt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:pt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ce(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:pt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:pt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:pt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:pt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:pt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:pt([se.common,se.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:pt([se.lights,se.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};function Sh(r,e,t,n,i,s,a){let o=new ce(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m,v){n.buffers.color.setClear(m.r,m.g,m.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),h=v,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,f(o,h)},render:function(m,v){let _=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x));let y=r.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?f(o,h):x&&x.isColor&&(f(x,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(c===void 0&&(c=new ot(new pn(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ri(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u===x&&d===x.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ot(new oi(2,2),new Gt({name:"BackgroundMaterial",uniforms:ri(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function wh(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function u(b){return n.isWebGL2?r.bindVertexArray(b):s.bindVertexArrayOES(b)}function d(b){return n.isWebGL2?r.deleteVertexArray(b):s.deleteVertexArrayOES(b)}function p(b){let S=[],R=[],P=[];for(let U=0;U<i;U++)S[U]=0,R[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:R,attributeDivisors:P,object:b,attributes:{},index:null}}function f(){let b=c.newAttributes;for(let S=0,R=b.length;S<R;S++)b[S]=0}function m(b){v(b,0)}function v(b,S){let R=c.newAttributes,P=c.enabledAttributes,U=c.attributeDivisors;R[b]=1,P[b]===0&&(r.enableVertexAttribArray(b),P[b]=1),U[b]!==S&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,S),U[b]=S)}function _(){let b=c.newAttributes,S=c.enabledAttributes;for(let R=0,P=S.length;R<P;R++)S[R]!==b[R]&&(r.disableVertexAttribArray(R),S[R]=0)}function x(b,S,R,P,U,F){n.isWebGL2!==!0||R!==5124&&R!==5125?r.vertexAttribPointer(b,S,R,P,U,F):r.vertexAttribIPointer(b,S,R,U,F)}function y(){M(),h=!0,c!==l&&(c=l,u(c.object))}function M(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(b,S,R,P,U){let F=!1;if(a){let D=function(Y,Q,q){let ie=q.wireframe===!0,ne=o[Y.id];ne===void 0&&(ne={},o[Y.id]=ne);let k=ne[Q.id];k===void 0&&(k={},ne[Q.id]=k);let W=k[ie];return W===void 0&&(W=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),k[ie]=W),W}(P,R,S);c!==D&&(c=D,u(c.object)),F=function(Y,Q,q,ie){let ne=c.attributes,k=Q.attributes,W=0,ee=q.getAttributes();for(let Z in ee)if(ee[Z].location>=0){let J=ne[Z],ue=k[Z];if(ue===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(ue=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(ue=Y.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;W++}return c.attributesNum!==W||c.index!==ie}(b,P,R,U),F&&function(Y,Q,q,ie){let ne={},k=Q.attributes,W=0,ee=q.getAttributes();for(let Z in ee)if(ee[Z].location>=0){let J=k[Z];J===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(J=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(J=Y.instanceColor));let ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),ne[Z]=ue,W++}c.attributes=ne,c.attributesNum=W,c.index=ie}(b,P,R,U)}else{let D=S.wireframe===!0;c.geometry===P.id&&c.program===R.id&&c.wireframe===D||(c.geometry=P.id,c.program=R.id,c.wireframe=D,F=!0)}U!==null&&t.update(U,34963),(F||h)&&(h=!1,function(D,Y,Q,q){if(n.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ie=q.attributes,ne=Q.getAttributes(),k=Y.defaultAttributeValues;for(let W in ne){let ee=ne[W];if(ee.location>=0){let Z=ie[W];if(Z===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),Z!==void 0){let J=Z.normalized,ue=Z.itemSize,Ae=t.get(Z);if(Ae===void 0)continue;let pe=Ae.buffer,Se=Ae.type,L=Ae.bytesPerElement;if(Z.isInterleavedBufferAttribute){let A=Z.data,B=A.stride,O=Z.offset;if(A.isInstancedInterleavedBuffer){for(let C=0;C<ee.locationSize;C++)v(ee.location+C,A.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let C=0;C<ee.locationSize;C++)m(ee.location+C);r.bindBuffer(34962,pe);for(let C=0;C<ee.locationSize;C++)x(ee.location+C,ue/ee.locationSize,Se,J,B*L,(O+ue/ee.locationSize*C)*L)}else{if(Z.isInstancedBufferAttribute){for(let A=0;A<ee.locationSize;A++)v(ee.location+A,Z.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let A=0;A<ee.locationSize;A++)m(ee.location+A);r.bindBuffer(34962,pe);for(let A=0;A<ee.locationSize;A++)x(ee.location+A,ue/ee.locationSize,Se,J,ue*L,ue/ee.locationSize*A*L)}}else if(k!==void 0){let J=k[W];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ee.location,J);break;case 3:r.vertexAttrib3fv(ee.location,J);break;case 4:r.vertexAttrib4fv(ee.location,J);break;default:r.vertexAttrib1fv(ee.location,J)}}}}_()}(b,S,R,P),U!==null&&r.bindBuffer(34963,t.get(U).buffer))},reset:y,resetDefaultState:M,dispose:function(){y();for(let b in o){let S=o[b];for(let R in S){let P=S[R];for(let U in P)d(P[U].object),delete P[U];delete S[R]}delete o[b]}},releaseStatesOfGeometry:function(b){if(o[b.id]===void 0)return;let S=o[b.id];for(let R in S){let P=S[R];for(let U in P)d(P[U].object),delete P[U];delete S[R]}delete o[b.id]},releaseStatesOfProgram:function(b){for(let S in o){let R=o[S];if(R[b.id]===void 0)continue;let P=R[b.id];for(let U in P)d(P[U].object),delete P[U];delete R[b.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:_}}function Th(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(i)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)}}function Ah(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),u=r.getParameter(35660),d=r.getParameter(3379),p=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),v=r.getParameter(36348),_=r.getParameter(36349),x=u>0,y=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:x&&y,maxSamples:s?r.getParameter(36183):0}}function Eh(r){let e=this,t=null,n=0,i=!1,s=!1,a=new mn,o=new vt,l={value:null,needsUpdate:!1};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,f){let m=u!==null?u.length:0,v=null;if(m!==0){if(v=l.value,f!==!0||v===null){let _=p+4*m,x=d.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<_)&&(v=new Float32Array(_));for(let y=0,M=p;y!==m;++y,M+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(v,M),v[M+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,p){let f=u.length!==0||d||n!==0||i;return i=d,t=h(u,p,0),n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,p){let f=u.clippingPlanes,m=u.clipIntersection,v=u.clipShadows,_=r.get(u);if(!i||f===null||f.length===0||s&&!v)s?h(null):c();else{let x=s?0:n,y=4*x,M=_.clippingState||null;l.value=M,M=h(f,d,y,p);for(let b=0;b!==y;++b)M[b]=t[b];_.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}function Ch(r){let e=new WeakMap;function t(i,s){return s===303?i.mapping=301:s===304&&(i.mapping=302),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture&&i.isRenderTargetTexture===!1){let s=i.mapping;if(s===303||s===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Mo(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}zt.physical={uniforms:pt([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new $(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};class Vr extends Fr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}let So=[.125,.215,.35,.446,.526,.582],Ii=20,sa=new Vr,wo=new ce,aa=null,Ln=(1+Math.sqrt(5))/2,li=1/Ln,To=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Ln,li),new T(0,Ln,-li),new T(li,0,Ln),new T(-li,0,Ln),new T(Ln,li,0),new T(-Ln,li,0)];class oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=Ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,u=a-4+1+So.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=So[d-a+4-1]:d===0&&(f=0),c.push(f);let m=1/(p-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],y=6,M=6,b=3,S=2,R=1,P=new Float32Array(b*M*y),U=new Float32Array(S*M*y),F=new Float32Array(R*M*y);for(let Y=0;Y<y;Y++){let Q=Y%3*2/3-1,q=Y>2?0:-1,ie=[Q,q,0,Q+2/3,q,0,Q+2/3,q+1,0,Q,q,0,Q+2/3,q+1,0,Q,q+1,0];P.set(ie,b*M*Y),U.set(x,S*M*Y);let ne=[Y,Y,Y,Y,Y,Y];F.set(ne,R*M*Y)}let D=new Ee;D.setAttribute("position",new ke(P,b)),D.setAttribute("uv",new ke(U,S)),D.setAttribute("faceIndex",new ke(F,R)),o.push(D),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(Ii),h=new T(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:la(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new ot(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,i){let s=new lt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(wo),l.toneMapping=0,l.autoClear=!1;let u=new cn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new ot(new pn,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(wo),p=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(s.up.set(0,a[m],0),s.lookAt(o[m],0,0)):v===1?(s.up.set(0,0,a[m]),s.lookAt(0,o[m],0)):(s.up.set(0,a[m],0),s.lookAt(0,0,o[m]));let _=this._cubeSize;Hr(i,v*_,m>2?_:0,_,_),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eo());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new ot(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Hr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,sa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=To[(i-1)%To.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ot(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,m=isFinite(s)?1+Math.floor(3*f):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let v=[],_=0;for(let M=0;M<Ii;++M){let b=M/f,S=Math.exp(-b*b/2);v.push(S),M===0?_+=S:M<m&&(_+=2*S)}for(let M=0;M<v.length;M++)v[M]=v[M]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;let y=this._sizeLods[i];Hr(t,3*y*(i>x-4?i-x+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,sa)}}function Ao(r,e,t){let n=new Ct(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Eo(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Co(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function la(){return`

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
	`}function Lh(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===303||s===304,o=s===301||s===302;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let l=e.get(i);return t===null&&(t=new oa(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),e.set(i,l),l.texture}if(e.has(i))return e.get(i).texture;{let l=i.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,u=6;for(let d=0;d<u;d++)c[d]!==void 0&&h++;return h===u}(l)){t===null&&(t=new oa(r));let c=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,c),i.addEventListener("dispose",n),c.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Rh(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ph(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let m=h.array;d=h.version;for(let v=0,_=m.length;v<_;v+=3){let x=m[v+0],y=m[v+1],M=m[v+2];c.push(x,y,y,M,M,x)}}else{let m=u.array;d=u.version;for(let v=0,_=m.length/3-1;v<_;v+=3){let x=v+0,y=v+1,M=v+2;c.push(x,y,y,M,M,x)}}let p=new(ao(c)?Ks:Js)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],34962);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],34962)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Dh(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");u[d](s,c,a,l*o,h),t.update(c,s,h)}}function Ih(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case 4:e.triangles+=i*(t/3);break;case 1:e.lines+=i*(t/2);break;case 3:e.lines+=i*(t-1);break;case 2:e.lines+=i*t;break;case 0:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Nh(r,e){return r[0]-e[0]}function Oh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function zh(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new ze,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=p!==void 0?p.length:0,m=s.get(c);if(m===void 0||m.count!==f){let q=function(){Y.dispose(),s.delete(c),c.removeEventListener("dispose",q)};m!==void 0&&m.texture.dispose();let x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],R=c.morphAttributes.color||[],P=0;x===!0&&(P=1),y===!0&&(P=2),M===!0&&(P=3);let U=c.attributes.position.count*P,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);let D=new Float32Array(U*F*4*f),Y=new Ai(D,U,F,f);Y.type=1015,Y.needsUpdate=!0;let Q=4*P;for(let ie=0;ie<f;ie++){let ne=b[ie],k=S[ie],W=R[ie],ee=U*F*4*ie;for(let Z=0;Z<ne.count;Z++){let J=Z*Q;x===!0&&(a.fromBufferAttribute(ne,Z),D[ee+J+0]=a.x,D[ee+J+1]=a.y,D[ee+J+2]=a.z,D[ee+J+3]=0),y===!0&&(a.fromBufferAttribute(k,Z),D[ee+J+4]=a.x,D[ee+J+5]=a.y,D[ee+J+6]=a.z,D[ee+J+7]=0),M===!0&&(a.fromBufferAttribute(W,Z),D[ee+J+8]=a.x,D[ee+J+9]=a.y,D[ee+J+10]=a.z,D[ee+J+11]=W.itemSize===4?a.w:1)}}m={count:f,texture:Y,size:new $(U,F)},s.set(c,m),c.addEventListener("dispose",q)}let v=0;for(let x=0;x<d.length;x++)v+=d[x];let _=c.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{let p=d===void 0?0:d.length,f=n[c.id];if(f===void 0||f.length!==p){f=[];for(let y=0;y<p;y++)f[y]=[y,0];n[c.id]=f}for(let y=0;y<p;y++){let M=f[y];M[0]=y,M[1]=d[y]}f.sort(Oh);for(let y=0;y<8;y++)y<p&&f[y][1]?(o[y][0]=f[y][0],o[y][1]=f[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Nh);let m=c.morphAttributes.position,v=c.morphAttributes.normal,_=0;for(let y=0;y<8;y++){let M=o[y],b=M[0],S=M[1];b!==Number.MAX_SAFE_INTEGER&&S?(m&&c.getAttribute("morphTarget"+y)!==m[b]&&c.setAttribute("morphTarget"+y,m[b]),v&&c.getAttribute("morphNormal"+y)!==v[b]&&c.setAttribute("morphNormal"+y,v[b]),i[y]=S,_+=S):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),v&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),i[y]=0)}let x=c.morphTargetsRelative?1:1-_;u.getUniforms().setValue(r,"morphTargetBaseInfluence",x),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Uh(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);return i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),c},dispose:function(){i=new WeakMap}}}let Lo=new tt,Ro=new Ai,Po=new br,Do=new Di,Io=[],No=[],Oo=new Float32Array(16),zo=new Float32Array(9),Uo=new Float32Array(4);function ci(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Io[i];if(s===void 0&&(s=new Float32Array(i),Io[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wr(r,e){let t=No[e];t===void 0&&(t=new Int32Array(e),No[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bh(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function kh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function Gh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function Vh(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Uo.set(n),r.uniformMatrix2fv(this.addr,!1,Uo),it(t,n)}}function Hh(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;zo.set(n),r.uniformMatrix3fv(this.addr,!1,zo),it(t,n)}}function Wh(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Oo.set(n),r.uniformMatrix4fv(this.addr,!1,Oo),it(t,n)}}function jh(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function Xh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function Yh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function Zh(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Jh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function Kh(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function $h(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function Qh(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Lo,i)}function eu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Po,i)}function tu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Do,i)}function nu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ro,i)}function iu(r,e){r.uniform1fv(this.addr,e)}function ru(r,e){let t=ci(e,this.size,2);r.uniform2fv(this.addr,t)}function su(r,e){let t=ci(e,this.size,3);r.uniform3fv(this.addr,t)}function au(r,e){let t=ci(e,this.size,4);r.uniform4fv(this.addr,t)}function ou(r,e){let t=ci(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lu(r,e){let t=ci(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cu(r,e){let t=ci(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hu(r,e){r.uniform1iv(this.addr,e)}function uu(r,e){r.uniform2iv(this.addr,e)}function du(r,e){r.uniform3iv(this.addr,e)}function pu(r,e){r.uniform4iv(this.addr,e)}function mu(r,e){r.uniform1uiv(this.addr,e)}function fu(r,e){r.uniform2uiv(this.addr,e)}function gu(r,e){r.uniform3uiv(this.addr,e)}function vu(r,e){r.uniform4uiv(this.addr,e)}function xu(r,e,t){let n=this.cache,i=e.length,s=Wr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lo,s[a])}function _u(r,e,t){let n=this.cache,i=e.length,s=Wr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Po,s[a])}function yu(r,e,t){let n=this.cache,i=e.length,s=Wr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Do,s[a])}function Mu(r,e,t){let n=this.cache,i=e.length,s=Wr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ro,s[a])}class bu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=function(i){switch(i){case 5126:return Bh;case 35664:return Fh;case 35665:return kh;case 35666:return Gh;case 35674:return Vh;case 35675:return Hh;case 35676:return Wh;case 5124:case 35670:return jh;case 35667:case 35671:return qh;case 35668:case 35672:return Xh;case 35669:case 35673:return Yh;case 5125:return Zh;case 36294:return Jh;case 36295:return Kh;case 36296:return $h;case 35678:case 36198:case 36298:case 36306:case 35682:return Qh;case 35679:case 36299:case 36307:return eu;case 35680:case 36300:case 36308:case 36293:return tu;case 36289:case 36303:case 36311:case 36292:return nu}}(t.type)}}class Su{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=function(i){switch(i){case 5126:return iu;case 35664:return ru;case 35665:return su;case 35666:return au;case 35674:return ou;case 35675:return lu;case 35676:return cu;case 5124:case 35670:return hu;case 35667:case 35671:return uu;case 35668:case 35672:return du;case 35669:case 35673:return pu;case 5125:return mu;case 36294:return fu;case 36295:return gu;case 36296:return vu;case 35678:case 36198:case 36298:case 36306:case 35682:return xu;case 35679:case 36299:case 36307:return _u;case 35680:case 36300:case 36308:case 36293:return yu;case 36289:case 36303:case 36311:case 36292:return Mu}}(t.type)}}class wu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}}let ca=/(\w+)(\])?(\[|\.)?/g;function Bo(r,e){r.seq.push(e),r.map[e.id]=e}function Tu(r,e,t){let n=r.name,i=n.length;for(ca.lastIndex=0;;){let s=ca.exec(n),a=ca.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Bo(t,c===void 0?new bu(o,r,e):new Su(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new wu(o),Bo(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Tu(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}}function Fo(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Au=0;function ko(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function Eu(r,e){let t=function(n){switch(n){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cu(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ni(r){return r!==""}function Go(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}let Lu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(r){return r.replace(Lu,Ru)}function Ru(r,e){let t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ha(t)}let Pu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(r){return r.replace(Pu,Du)}function Du(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iu(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(P){let U="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===1?U="SHADOWMAP_TYPE_PCF":P.shadowMapType===2?U="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===3&&(U="SHADOWMAP_TYPE_VSM"),U}(t),c=function(P){let U="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case 301:case 302:U="ENVMAP_TYPE_CUBE";break;case 306:U="ENVMAP_TYPE_CUBE_UV"}return U}(t),h=function(P){let U="ENVMAP_MODE_REFLECTION";return P.envMap&&P.envMapMode===302&&(U="ENVMAP_MODE_REFRACTION"),U}(t),u=function(P){let U="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case 0:U="ENVMAP_BLENDING_MULTIPLY";break;case 1:U="ENVMAP_BLENDING_MIX";break;case 2:U="ENVMAP_BLENDING_ADD"}return U}(t),d=function(P){let U=P.envMapCubeUVHeight;if(U===null)return null;let F=Math.log2(U)-2,D=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,F),112)),texelHeight:D,maxMip:F}}(t),p=t.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUVHeight||P.bumpMap||P.tangentSpaceNormalMap||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}(t),f=function(P){let U=[];for(let F in P){let D=P[F];D!==!1&&U.push("#define "+F+" "+D)}return U.join(`
`)}(s),m=i.createProgram(),v,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[f].filter(Ni).join(`
`),v.length>0&&(v+=`
`),_=[p,f].filter(Ni).join(`
`),_.length>0&&(_+=`
`)):(v=[Wo(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),_=[p,Wo(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Te.tonemapping_pars_fragment:"",t.toneMapping!==0?Cu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Eu("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),a=ha(a),a=Go(a,t),a=Vo(a,t),o=ha(o),o=Go(o,t),o=Vo(o,t),a=Ho(a),o=Ho(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===Ds?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ds?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=x+_+o,M=Fo(i,35633,x+v+a),b=Fo(i,35632,y);if(i.attachShader(m,M),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){let P=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(b).trim(),D=!0,Y=!0;if(i.getProgramParameter(m,35714)===!1){D=!1;let Q=ko(i,M,"vertex"),q=ko(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+P+`
`+Q+`
`+q)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):U!==""&&F!==""||(Y=!1);Y&&(this.diagnostics={runnable:D,programLog:P,vertexShader:{log:U,prefix:v},fragmentShader:{log:F,prefix:_}})}let S,R;return i.deleteShader(M),i.deleteShader(b),this.getUniforms=function(){return S===void 0&&(S=new jr(i,m)),S},this.getAttributes=function(){return R===void 0&&(R=function(P,U){let F={},D=P.getProgramParameter(U,35721);for(let Y=0;Y<D;Y++){let Q=P.getActiveAttrib(U,Y),q=Q.name,ie=1;Q.type===35674&&(ie=2),Q.type===35675&&(ie=3),Q.type===35676&&(ie=4),F[q]={type:Q.type,location:P.getAttribLocation(U,q),locationSize:ie}}return F}(i,m)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Au++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=b,this}let Nu=0;class Ou{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zu(e),t.set(e,n)),n}}class zu{constructor(e){this.id=Nu++,this.code=e,this.usedTimes=0}}function Uu(r,e,t,n,i,s,a){let o=new Cr,l=new Ou,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(m,v,_,x,y){let M=x.fog,b=y.geometry,S=m.isMeshStandardMaterial?x.environment:null,R=(m.isMeshStandardMaterial?t:e).get(m.envMap||S),P=R&&R.mapping===306?R.image.height:null,U=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let F=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,D=F!==void 0?F.length:0,Y,Q,q,ie,ne=0;if(b.morphAttributes.position!==void 0&&(ne=1),b.morphAttributes.normal!==void 0&&(ne=2),b.morphAttributes.color!==void 0&&(ne=3),U){let J=zt[U];Y=J.vertexShader,Q=J.fragmentShader}else Y=m.vertexShader,Q=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),ie=l.getFragmentShaderID(m);let k=r.getRenderTarget(),W=m.alphaTest>0,ee=m.clearcoat>0,Z=m.iridescence>0;return{isWebGL2:h,shaderID:U,shaderName:m.type,vertexShader:Y,fragmentShader:Q,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:ie,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,instancing:y.isInstancedMesh===!0,instancingColor:y.isInstancedMesh===!0&&y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:k===null?r.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:3e3,map:!!m.map,matcap:!!m.matcap,envMap:!!R,envMapMode:R&&R.mapping,envMapCubeUVHeight:P,lightMap:!!m.lightMap,aoMap:!!m.aoMap,emissiveMap:!!m.emissiveMap,bumpMap:!!m.bumpMap,normalMap:!!m.normalMap,objectSpaceNormalMap:m.normalMapType===1,tangentSpaceNormalMap:m.normalMapType===0,decodeVideoTexture:!!m.map&&m.map.isVideoTexture===!0&&m.map.encoding===3001,clearcoat:ee,clearcoatMap:ee&&!!m.clearcoatMap,clearcoatRoughnessMap:ee&&!!m.clearcoatRoughnessMap,clearcoatNormalMap:ee&&!!m.clearcoatNormalMap,iridescence:Z,iridescenceMap:Z&&!!m.iridescenceMap,iridescenceThicknessMap:Z&&!!m.iridescenceThicknessMap,displacementMap:!!m.displacementMap,roughnessMap:!!m.roughnessMap,metalnessMap:!!m.metalnessMap,specularMap:!!m.specularMap,specularIntensityMap:!!m.specularIntensityMap,specularColorMap:!!m.specularColorMap,opaque:m.transparent===!1&&m.blending===1,alphaMap:!!m.alphaMap,alphaTest:W,gradientMap:!!m.gradientMap,sheen:m.sheen>0,sheenColorMap:!!m.sheenColorMap,sheenRoughnessMap:!!m.sheenRoughnessMap,transmission:m.transmission>0,transmissionMap:!!m.transmissionMap,thicknessMap:!!m.thicknessMap,combine:m.combine,vertexTangents:!!m.normalMap&&!!b.attributes.tangent,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUvs:!!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatMap||m.clearcoatRoughnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.displacementMap||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheenColorMap||m.sheenRoughnessMap),uvsVertexOnly:!(m.map||m.bumpMap||m.normalMap||m.specularMap||m.alphaMap||m.emissiveMap||m.roughnessMap||m.metalnessMap||m.clearcoatNormalMap||m.iridescenceMap||m.iridescenceThicknessMap||m.transmission>0||m.transmissionMap||m.thicknessMap||m.specularIntensityMap||m.specularColorMap||m.sheen>0||m.sheenColorMap||m.sheenRoughnessMap||!m.displacementMap),fog:!!M,useFog:m.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:!!m.flatShading,sizeAttenuation:m.sizeAttenuation,logarithmicDepthBuffer:u,skinning:y.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:m.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:!!m.depthPacking,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:m.extensions&&m.extensions.derivatives,extensionFragDepth:m.extensions&&m.extensions.fragDepth,extensionDrawBuffers:m.extensions&&m.extensions.drawBuffers,extensionShaderTextureLOD:m.extensions&&m.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)v.push(_),v.push(m.defines[_]);return m.isRawShaderMaterial===!1&&(function(_,x){_.push(x.precision),_.push(x.outputEncoding),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.combine),_.push(x.vertexUvs),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}(v,m),function(_,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.map&&o.enable(4),x.matcap&&o.enable(5),x.envMap&&o.enable(6),x.lightMap&&o.enable(7),x.aoMap&&o.enable(8),x.emissiveMap&&o.enable(9),x.bumpMap&&o.enable(10),x.normalMap&&o.enable(11),x.objectSpaceNormalMap&&o.enable(12),x.tangentSpaceNormalMap&&o.enable(13),x.clearcoat&&o.enable(14),x.clearcoatMap&&o.enable(15),x.clearcoatRoughnessMap&&o.enable(16),x.clearcoatNormalMap&&o.enable(17),x.iridescence&&o.enable(18),x.iridescenceMap&&o.enable(19),x.iridescenceThicknessMap&&o.enable(20),x.displacementMap&&o.enable(21),x.specularMap&&o.enable(22),x.roughnessMap&&o.enable(23),x.metalnessMap&&o.enable(24),x.gradientMap&&o.enable(25),x.alphaMap&&o.enable(26),x.alphaTest&&o.enable(27),x.vertexColors&&o.enable(28),x.vertexAlphas&&o.enable(29),x.vertexUvs&&o.enable(30),x.vertexTangents&&o.enable(31),x.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.physicallyCorrectLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.specularIntensityMap&&o.enable(15),x.specularColorMap&&o.enable(16),x.transmission&&o.enable(17),x.transmissionMap&&o.enable(18),x.thicknessMap&&o.enable(19),x.sheen&&o.enable(20),x.sheenColorMap&&o.enable(21),x.sheenRoughnessMap&&o.enable(22),x.decodeVideoTexture&&o.enable(23),x.opaque&&o.enable(24),_.push(o.mask)}(v,m),v.push(r.outputEncoding)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=f[m.type],_;if(v){let x=zt[v];_=_o.clone(x.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,v){let _;for(let x=0,y=c.length;x<y;x++){let M=c[x];if(M.cacheKey===v){_=M,++_.usedTimes;break}}return _===void 0&&(_=new Iu(r,v,m,s),c.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){let v=c.indexOf(m);c[v]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function Bu(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Fu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qo(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Fu),n.length>1&&n.sort(o||jo),i.length>1&&i.sort(o||jo)}}}function ku(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new qo,r.set(e,[i])):t>=n.length?(i=new qo,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Gu(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ce};break;case"SpotLight":t={position:new T,direction:new T,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":t={color:new ce,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}let Vu=0;function Hu(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Wu(r,e){let t=new Gu,n=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)i.probe.push(new T);let s=new T,a=new Me,o=new Me;return{setup:function(l,c){let h=0,u=0,d=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,m=0,v=0,_=0,x=0,y=0,M=0,b=0,S=0;l.sort(Hu);let R=c!==!0?Math.PI:1;for(let U=0,F=l.length;U<F;U++){let D=l[U],Y=D.color,Q=D.intensity,q=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=Y.r*Q*R,u+=Y.g*Q*R,d+=Y.b*Q*R;else if(D.isLightProbe)for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(D.sh.coefficients[ne],Q);else if(D.isDirectionalLight){let ne=t.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity*R),D.castShadow){let k=D.shadow,W=n.get(D);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=ie,i.directionalShadowMatrix[p]=D.shadow.matrix,x++}i.directional[p]=ne,p++}else if(D.isSpotLight){let ne=t.get(D);ne.position.setFromMatrixPosition(D.matrixWorld),ne.color.copy(Y).multiplyScalar(Q*R),ne.distance=q,ne.coneCos=Math.cos(D.angle),ne.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ne.decay=D.decay,i.spot[m]=ne;let k=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,k.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[m]=k.matrix,D.castShadow){let W=n.get(D);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,i.spotShadow[m]=W,i.spotShadowMap[m]=ie,M++}m++}else if(D.isRectAreaLight){let ne=t.get(D);ne.color.copy(Y).multiplyScalar(Q),ne.halfWidth.set(.5*D.width,0,0),ne.halfHeight.set(0,.5*D.height,0),i.rectArea[v]=ne,v++}else if(D.isPointLight){let ne=t.get(D);if(ne.color.copy(D.color).multiplyScalar(D.intensity*R),ne.distance=D.distance,ne.decay=D.decay,D.castShadow){let k=D.shadow,W=n.get(D);W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,i.pointShadow[f]=W,i.pointShadowMap[f]=ie,i.pointShadowMatrix[f]=D.shadow.matrix,y++}i.point[f]=ne,f++}else if(D.isHemisphereLight){let ne=t.get(D);ne.skyColor.copy(D.color).multiplyScalar(Q*R),ne.groundColor.copy(D.groundColor).multiplyScalar(Q*R),i.hemi[_]=ne,_++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;P.directionalLength===p&&P.pointLength===f&&P.spotLength===m&&P.rectAreaLength===v&&P.hemiLength===_&&P.numDirectionalShadows===x&&P.numPointShadows===y&&P.numSpotShadows===M&&P.numSpotMaps===b||(i.directional.length=p,i.spot.length=m,i.rectArea.length=v,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+b-S,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=S,P.directionalLength=p,P.pointLength=f,P.spotLength=m,P.rectAreaLength=v,P.hemiLength=_,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=b,i.version=Vu++)},setupView:function(l,c){let h=0,u=0,d=0,p=0,f=0,m=c.matrixWorldInverse;for(let v=0,_=l.length;v<_;v++){let x=l[v];if(x.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(x.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let y=i.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),a.copy(x.matrixWorld),a.premultiply(m),o.extractRotation(a),y.halfWidth.set(.5*x.width,0,0),y.halfHeight.set(0,.5*x.height,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){let y=i.hemi[f];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),f++}}},state:i}}function Xo(r,e){let t=new Wu(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function ju(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new Xo(r,e),t.set(n,[a])):i>=s.length?(a=new Xo(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}class ua extends dt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class da extends dt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function qu(r,e,t){let n=new Gr,i=new $,s=new $,a=new ze,o=new ua({depthPacking:3201}),l=new da,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Ee;f.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ot(f,d),v=this;function _(M,b){let S=e.update(m);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ct(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(b,null,S,d,m,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(b,null,S,p,m,null)}function x(M,b,S,R,P,U){let F=null,D=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F=D!==void 0?D:S.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){let Y=F.uuid,Q=b.uuid,q=c[Y];q===void 0&&(q={},c[Y]=q);let ie=q[Q];ie===void 0&&(ie=F.clone(),q[Q]=ie),F=ie}return F.visible=b.visible,F.wireframe=b.wireframe,F.side=U===3?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:u[b.side],F.alphaMap=b.alphaMap,F.alphaTest=b.alphaTest,F.clipShadows=b.clipShadows,F.clippingPlanes=b.clippingPlanes,F.clipIntersection=b.clipIntersection,F.displacementMap=b.displacementMap,F.displacementScale=b.displacementScale,F.displacementBias=b.displacementBias,F.wireframeLinewidth=b.wireframeLinewidth,F.linewidth=b.linewidth,S.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(S.matrixWorld),F.nearDistance=R,F.farDistance=P),F}function y(M,b,S,R,P){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);let F=e.update(M),D=M.material;if(Array.isArray(D)){let Y=F.groups;for(let Q=0,q=Y.length;Q<q;Q++){let ie=Y[Q],ne=D[ie.materialIndex];if(ne&&ne.visible){let k=x(M,ne,R,S.near,S.far,P);r.renderBufferDirect(S,null,F,k,M,ie)}}}else if(D.visible){let Y=x(M,D,R,S.near,S.far,P);r.renderBufferDirect(S,null,F,Y,M,null)}}let U=M.children;for(let F=0,D=U.length;F<D;F++)y(U[F],b,S,R,P)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(M,b,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;let R=r.getRenderTarget(),P=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),F=r.state;F.setBlending(0),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let D=0,Y=M.length;D<Y;D++){let Q=M[D],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let ie=q.getFrameExtents();if(i.multiply(ie),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,q.mapSize.y=s.y)),q.map===null){let k=this.type!==3?{minFilter:1003,magFilter:1003}:{};q.map=new Ct(i.x,i.y,k),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();let ne=q.getViewportCount();for(let k=0;k<ne;k++){let W=q.getViewport(k);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(a),q.updateMatrices(Q,k),n=q.getFrustum(),y(b,S,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===3&&_(q,S),q.needsUpdate=!1}v.needsUpdate=!1,r.setRenderTarget(R,P,U)}}function Xu(r,e,t){let n=t.isWebGL2,i=new function(){let w=!1,N=new ze,I=null,H=new ze(0,0,0,0);return{setMask:function(V){I===V||w||(r.colorMask(V,V,V,V),I=V)},setLocked:function(V){w=V},setClear:function(V,X,oe,de,ge){ge===!0&&(V*=de,X*=de,oe*=de),N.set(V,X,oe,de),H.equals(N)===!1&&(r.clearColor(V,X,oe,de),H.copy(N))},reset:function(){w=!1,I=null,H.set(-1,0,0,0)}}},s=new function(){let w=!1,N=null,I=null,H=null;return{setTest:function(V){V?pe(2929):Se(2929)},setMask:function(V){N===V||w||(r.depthMask(V),N=V)},setFunc:function(V){if(I!==V){switch(V){case 0:r.depthFunc(512);break;case 1:r.depthFunc(519);break;case 2:r.depthFunc(513);break;case 3:default:r.depthFunc(515);break;case 4:r.depthFunc(514);break;case 5:r.depthFunc(518);break;case 6:r.depthFunc(516);break;case 7:r.depthFunc(517)}I=V}},setLocked:function(V){w=V},setClear:function(V){H!==V&&(r.clearDepth(V),H=V)},reset:function(){w=!1,N=null,I=null,H=null}}},a=new function(){let w=!1,N=null,I=null,H=null,V=null,X=null,oe=null,de=null,ge=null;return{setTest:function(le){w||(le?pe(2960):Se(2960))},setMask:function(le){N===le||w||(r.stencilMask(le),N=le)},setFunc:function(le,xe,Ce){I===le&&H===xe&&V===Ce||(r.stencilFunc(le,xe,Ce),I=le,H=xe,V=Ce)},setOp:function(le,xe,Ce){X===le&&oe===xe&&de===Ce||(r.stencilOp(le,xe,Ce),X=le,oe=xe,de=Ce)},setLocked:function(le){w=le},setClear:function(le){ge!==le&&(r.clearStencil(le),ge=le)},reset:function(){w=!1,N=null,I=null,H=null,V=null,X=null,oe=null,de=null,ge=null}}},o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],p=null,f=!1,m=null,v=null,_=null,x=null,y=null,M=null,b=null,S=!1,R=null,P=null,U=null,F=null,D=null,Y=r.getParameter(35661),Q=!1,q=0,ie=r.getParameter(7938);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=q>=2);let ne=null,k={},W=r.getParameter(3088),ee=r.getParameter(2978),Z=new ze().fromArray(W),J=new ze().fromArray(ee);function ue(w,N,I){let H=new Uint8Array(4),V=r.createTexture();r.bindTexture(w,V),r.texParameteri(w,10241,9728),r.texParameteri(w,10240,9728);for(let X=0;X<I;X++)r.texImage2D(N+X,0,6408,1,1,0,6408,5121,H);return V}let Ae={};function pe(w){c[w]!==!0&&(r.enable(w),c[w]=!0)}function Se(w){c[w]!==!1&&(r.disable(w),c[w]=!1)}Ae[3553]=ue(3553,3553,1),Ae[34067]=ue(34067,34069,6),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(2929),s.setFunc(3),O(!1),C(1),pe(2884),B(0);let L={[100]:32774,101:32778,102:32779};if(n)L[103]=32775,L[104]=32776;else{let w=e.get("EXT_blend_minmax");w!==null&&(L[103]=w.MIN_EXT,L[104]=w.MAX_EXT)}let A={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function B(w,N,I,H,V,X,oe,de){if(w!==0){if(f===!1&&(pe(3042),f=!0),w===5)V=V||N,X=X||I,oe=oe||H,N===v&&V===y||(r.blendEquationSeparate(L[N],L[V]),v=N,y=V),I===_&&H===x&&X===M&&oe===b||(r.blendFuncSeparate(A[I],A[H],A[X],A[oe]),_=I,x=H,M=X,b=oe),m=w,S=null;else if(w!==m||de!==S){if(v===100&&y===100||(r.blendEquation(32774),v=100,y=100),de)switch(w){case 1:r.blendFuncSeparate(1,771,1,771);break;case 2:r.blendFunc(1,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:r.blendFuncSeparate(770,771,1,771);break;case 2:r.blendFunc(770,1);break;case 3:r.blendFuncSeparate(0,769,0,1);break;case 4:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}_=null,x=null,M=null,b=null,m=w,S=de}}else f===!0&&(Se(3042),f=!1)}function O(w){R!==w&&(w?r.frontFace(2304):r.frontFace(2305),R=w)}function C(w){w!==0?(pe(2884),w!==P&&(w===1?r.cullFace(1029):w===2?r.cullFace(1028):r.cullFace(1032))):Se(2884),P=w}function z(w,N,I){w?(pe(32823),F===N&&D===I||(r.polygonOffset(N,I),F=N,D=I)):Se(32823)}return{buffers:{color:i,depth:s,stencil:a},enable:pe,disable:Se,bindFramebuffer:function(w,N){return h[w]!==N&&(r.bindFramebuffer(w,N),h[w]=N,n&&(w===36009&&(h[36160]=N),w===36160&&(h[36009]=N)),!0)},drawBuffers:function(w,N){let I=d,H=!1;if(w)if(I=u.get(N),I===void 0&&(I=[],u.set(N,I)),w.isWebGLMultipleRenderTargets){let V=w.texture;if(I.length!==V.length||I[0]!==36064){for(let X=0,oe=V.length;X<oe;X++)I[X]=36064+X;I.length=V.length,H=!0}}else I[0]!==36064&&(I[0]=36064,H=!0);else I[0]!==1029&&(I[0]=1029,H=!0);H&&(t.isWebGL2?r.drawBuffers(I):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(I))},useProgram:function(w){return p!==w&&(r.useProgram(w),p=w,!0)},setBlending:B,setMaterial:function(w,N){w.side===2?Se(2884):pe(2884);let I=w.side===1;N&&(I=!I),O(I),w.blending===1&&w.transparent===!1?B(0):B(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),i.setMask(w.colorWrite);let H=w.stencilWrite;a.setTest(H),H&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),z(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?pe(32926):Se(32926)},setFlipSided:O,setCullFace:C,setLineWidth:function(w){w!==U&&(Q&&r.lineWidth(w),U=w)},setPolygonOffset:z,setScissorTest:function(w){w?pe(3089):Se(3089)},activeTexture:function(w){w===void 0&&(w=33984+Y-1),ne!==w&&(r.activeTexture(w),ne=w)},bindTexture:function(w,N,I){I===void 0&&(I=ne===null?33984+Y-1:ne);let H=k[I];H===void 0&&(H={type:void 0,texture:void 0},k[I]=H),H.type===w&&H.texture===N||(ne!==I&&(r.activeTexture(I),ne=I),r.bindTexture(w,N||Ae[w]),H.type=w,H.texture=N)},unbindTexture:function(){let w=k[ne];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,N){let I=l.get(N);I===void 0&&(I=new WeakMap,l.set(N,I));let H=I.get(w);H===void 0&&(H=r.getUniformBlockIndex(N,w.name),I.set(w,H))},uniformBlockBinding:function(w,N){let I=l.get(N).get(w);o.get(w)!==I&&(r.uniformBlockBinding(N,I,w.__bindingPointIndex),o.set(w,I))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){Z.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),Z.copy(w))},viewport:function(w){J.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),J.copy(w))},reset:function(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},ne=null,k={},h={},u=new WeakMap,d=[],p=null,f=!1,m=null,v=null,_=null,x=null,y=null,M=null,b=null,S=!1,R=null,P=null,U=null,F=null,D=null,Z.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Yu(r,e,t,n,i,s,a){let o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),f=new WeakMap,m,v=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,A){return _?new OffscreenCanvas(L,A):Ti("canvas")}function y(L,A,B,O){let C=1;if((L.width>O||L.height>O)&&(C=O/Math.max(L.width,L.height)),C<1||A===!0){if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let z=A?xr:Math.floor,w=z(C*L.width),N=z(C*L.height);m===void 0&&(m=x(w,N));let I=B?x(w,N):m;return I.width=w,I.height=N,I.getContext("2d").drawImage(L,0,0,w,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+w+"x"+N+")."),I}return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L}return L}function M(L){return Ns(L.width)&&Ns(L.height)}function b(L,A){return L.generateMipmaps&&A&&L.minFilter!==1003&&L.minFilter!==1006}function S(L){r.generateMipmap(L)}function R(L,A,B,O,C=!1){if(o===!1)return A;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let z=A;return A===6403&&(B===5126&&(z=33326),B===5131&&(z=33325),B===5121&&(z=33321)),A===33319&&(B===5126&&(z=33328),B===5131&&(z=33327),B===5121&&(z=33323)),A===6408&&(B===5126&&(z=34836),B===5131&&(z=34842),B===5121&&(z=O===3001&&C===!1?35907:32856),B===32819&&(z=32854),B===32820&&(z=32855)),z!==33325&&z!==33326&&z!==33327&&z!==33328&&z!==34842&&z!==34836||e.get("EXT_color_buffer_float"),z}function P(L,A,B){return b(L,B)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function U(L){return L===1003||L===1004||L===1005?9728:9729}function F(L){let A=L.target;A.removeEventListener("dispose",F),function(B){let O=n.get(B);if(O.__webglInit===void 0)return;let C=B.source,z=v.get(C);if(z){let w=z[O.__cacheKey];w.usedTimes--,w.usedTimes===0&&Y(B),Object.keys(z).length===0&&v.delete(C)}n.remove(B)}(A),A.isVideoTexture&&f.delete(A)}function D(L){let A=L.target;A.removeEventListener("dispose",D),function(B){let O=B.texture,C=n.get(B),z=n.get(O);if(z.__webglTexture!==void 0&&(r.deleteTexture(z.__webglTexture),a.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let w=0;w<6;w++)r.deleteFramebuffer(C.__webglFramebuffer[w]),C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[w]);else{if(r.deleteFramebuffer(C.__webglFramebuffer),C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let w=0;w<C.__webglColorRenderbuffer.length;w++)C.__webglColorRenderbuffer[w]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[w]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let w=0,N=O.length;w<N;w++){let I=n.get(O[w]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),n.remove(O[w])}n.remove(O),n.remove(B)}(A)}function Y(L){let A=n.get(L);r.deleteTexture(A.__webglTexture);let B=L.source;delete v.get(B)[A.__cacheKey],a.memory.textures--}let Q=0;function q(L,A){let B=n.get(L);if(L.isVideoTexture&&function(O){let C=a.render.frame;f.get(O)!==C&&(f.set(O,C),O.update())}(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){let O=L.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void ee(B,L,A);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(3553,B.__webglTexture,33984+A)}let ie={[1e3]:10497,[1001]:33071,[1002]:33648},ne={[1003]:9728,[1004]:9984,[1005]:9986,[1006]:9729,[1007]:9985,[1008]:9987};function k(L,A,B){if(B?(r.texParameteri(L,10242,ie[A.wrapS]),r.texParameteri(L,10243,ie[A.wrapT]),L!==32879&&L!==35866||r.texParameteri(L,32882,ie[A.wrapR]),r.texParameteri(L,10240,ne[A.magFilter]),r.texParameteri(L,10241,ne[A.minFilter])):(r.texParameteri(L,10242,33071),r.texParameteri(L,10243,33071),L!==32879&&L!==35866||r.texParameteri(L,32882,33071),A.wrapS===1001&&A.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,10240,U(A.magFilter)),r.texParameteri(L,10241,U(A.minFilter)),A.minFilter!==1003&&A.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");if(A.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(r.texParameterf(L,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function W(L,A){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",F));let O=A.source,C=v.get(O);C===void 0&&(C={},v.set(O,C));let z=function(w){let N=[];return N.push(w.wrapS),N.push(w.wrapT),N.push(w.wrapR||0),N.push(w.magFilter),N.push(w.minFilter),N.push(w.anisotropy),N.push(w.internalFormat),N.push(w.format),N.push(w.type),N.push(w.generateMipmaps),N.push(w.premultiplyAlpha),N.push(w.flipY),N.push(w.unpackAlignment),N.push(w.encoding),N.join()}(A);if(z!==L.__cacheKey){C[z]===void 0&&(C[z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),C[z].usedTimes++;let w=C[L.__cacheKey];w!==void 0&&(C[L.__cacheKey].usedTimes--,w.usedTimes===0&&Y(A)),L.__cacheKey=z,L.__webglTexture=C[z].texture}return B}function ee(L,A,B){let O=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(O=35866),A.isData3DTexture&&(O=32879);let C=W(L,A),z=A.source;t.bindTexture(O,L.__webglTexture,33984+B);let w=n.get(z);if(z.version!==w.__version||C===!0){t.activeTexture(33984+B),r.pixelStorei(37440,A.flipY),r.pixelStorei(37441,A.premultiplyAlpha),r.pixelStorei(3317,A.unpackAlignment),r.pixelStorei(37443,0);let N=function(_e){return!o&&(_e.wrapS!==1001||_e.wrapT!==1001||_e.minFilter!==1003&&_e.minFilter!==1006)}(A)&&M(A.image)===!1,I=y(A.image,N,!1,h);I=Se(A,I);let H=M(I)||o,V=s.convert(A.format,A.encoding),X,oe=s.convert(A.type),de=R(A.internalFormat,V,oe,A.encoding,A.isVideoTexture);k(O,A,H);let ge=A.mipmaps,le=o&&A.isVideoTexture!==!0,xe=w.__version===void 0||C===!0,Ce=P(A,I,H);if(A.isDepthTexture)de=6402,o?de=A.type===1015?36012:A.type===1014?33190:A.type===1020?35056:33189:A.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===1026&&de===6402&&A.type!==1012&&A.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=1014,oe=s.convert(A.type)),A.format===1027&&de===6402&&(de=34041,A.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=1020,oe=s.convert(A.type))),xe&&(le?t.texStorage2D(3553,1,de,I.width,I.height):t.texImage2D(3553,0,de,I.width,I.height,0,V,oe,null));else if(A.isDataTexture)if(ge.length>0&&H){le&&xe&&t.texStorage2D(3553,Ce,de,ge[0].width,ge[0].height);for(let _e=0,We=ge.length;_e<We;_e++)X=ge[_e],le?t.texSubImage2D(3553,_e,0,0,X.width,X.height,V,oe,X.data):t.texImage2D(3553,_e,de,X.width,X.height,0,V,oe,X.data);A.generateMipmaps=!1}else le?(xe&&t.texStorage2D(3553,Ce,de,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,V,oe,I.data)):t.texImage2D(3553,0,de,I.width,I.height,0,V,oe,I.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&xe&&t.texStorage3D(35866,Ce,de,ge[0].width,ge[0].height,I.depth);for(let _e=0,We=ge.length;_e<We;_e++)X=ge[_e],A.format!==1023?V!==null?le?t.compressedTexSubImage3D(35866,_e,0,0,0,X.width,X.height,I.depth,V,X.data,0,0):t.compressedTexImage3D(35866,_e,de,X.width,X.height,I.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(35866,_e,0,0,0,X.width,X.height,I.depth,V,oe,X.data):t.texImage3D(35866,_e,de,X.width,X.height,I.depth,0,V,oe,X.data)}else{le&&xe&&t.texStorage2D(3553,Ce,de,ge[0].width,ge[0].height);for(let _e=0,We=ge.length;_e<We;_e++)X=ge[_e],A.format!==1023?V!==null?le?t.compressedTexSubImage2D(3553,_e,0,0,X.width,X.height,V,X.data):t.compressedTexImage2D(3553,_e,de,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(3553,_e,0,0,X.width,X.height,V,oe,X.data):t.texImage2D(3553,_e,de,X.width,X.height,0,V,oe,X.data)}else if(A.isDataArrayTexture)le?(xe&&t.texStorage3D(35866,Ce,de,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,V,oe,I.data)):t.texImage3D(35866,0,de,I.width,I.height,I.depth,0,V,oe,I.data);else if(A.isData3DTexture)le?(xe&&t.texStorage3D(32879,Ce,de,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,V,oe,I.data)):t.texImage3D(32879,0,de,I.width,I.height,I.depth,0,V,oe,I.data);else if(A.isFramebufferTexture){if(xe)if(le)t.texStorage2D(3553,Ce,de,I.width,I.height);else{let _e=I.width,We=I.height;for(let St=0;St<Ce;St++)t.texImage2D(3553,St,de,_e,We,0,V,oe,null),_e>>=1,We>>=1}}else if(ge.length>0&&H){le&&xe&&t.texStorage2D(3553,Ce,de,ge[0].width,ge[0].height);for(let _e=0,We=ge.length;_e<We;_e++)X=ge[_e],le?t.texSubImage2D(3553,_e,0,0,V,oe,X):t.texImage2D(3553,_e,de,V,oe,X);A.generateMipmaps=!1}else le?(xe&&t.texStorage2D(3553,Ce,de,I.width,I.height),t.texSubImage2D(3553,0,0,0,V,oe,I)):t.texImage2D(3553,0,de,V,oe,I);b(A,H)&&S(O),w.__version=z.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Z(L,A,B,O,C){let z=s.convert(B.format,B.encoding),w=s.convert(B.type),N=R(B.internalFormat,z,w,B.encoding);n.get(A).__hasExternalTextures||(C===32879||C===35866?t.texImage3D(C,0,N,A.width,A.height,A.depth,0,z,w,null):t.texImage2D(C,0,N,A.width,A.height,0,z,w,null)),t.bindFramebuffer(36160,L),pe(A)?d.framebufferTexture2DMultisampleEXT(36160,O,C,n.get(B).__webglTexture,0,Ae(A)):(C===3553||C>=34069&&C<=34074)&&r.framebufferTexture2D(36160,O,C,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function J(L,A,B){if(r.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let O=33189;if(B||pe(A)){let C=A.depthTexture;C&&C.isDepthTexture&&(C.type===1015?O=36012:C.type===1014&&(O=33190));let z=Ae(A);pe(A)?d.renderbufferStorageMultisampleEXT(36161,z,O,A.width,A.height):r.renderbufferStorageMultisample(36161,z,O,A.width,A.height)}else r.renderbufferStorage(36161,O,A.width,A.height);r.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){let O=Ae(A);B&&pe(A)===!1?r.renderbufferStorageMultisample(36161,O,35056,A.width,A.height):pe(A)?d.renderbufferStorageMultisampleEXT(36161,O,35056,A.width,A.height):r.renderbufferStorage(36161,34041,A.width,A.height),r.framebufferRenderbuffer(36160,33306,36161,L)}else{let O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let C=0;C<O.length;C++){let z=O[C],w=s.convert(z.format,z.encoding),N=s.convert(z.type),I=R(z.internalFormat,w,N,z.encoding),H=Ae(A);B&&pe(A)===!1?r.renderbufferStorageMultisample(36161,H,I,A.width,A.height):pe(A)?d.renderbufferStorageMultisampleEXT(36161,H,I,A.width,A.height):r.renderbufferStorage(36161,I,A.width,A.height)}}r.bindRenderbuffer(36161,null)}function ue(L){let A=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,O),!C.depthTexture||!C.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(C.depthTexture).__webglTexture&&C.depthTexture.image.width===C.width&&C.depthTexture.image.height===C.height||(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),q(C.depthTexture,0);let z=n.get(C.depthTexture).__webglTexture,w=Ae(C);if(C.depthTexture.format===1026)pe(C)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,z,0,w):r.framebufferTexture2D(36160,36096,3553,z,0);else{if(C.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");pe(C)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,z,0,w):r.framebufferTexture2D(36160,33306,3553,z,0)}})(A.__webglFramebuffer,L)}else if(B){A.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(36160,A.__webglFramebuffer[O]),A.__webglDepthbuffer[O]=r.createRenderbuffer(),J(A.__webglDepthbuffer[O],L,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=r.createRenderbuffer(),J(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ae(L){return Math.min(u,L.samples)}function pe(L){let A=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Se(L,A){let B=L.encoding,O=L.format,C=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===1035||B!==3e3&&(B===3001?o===!1?e.has("EXT_sRGB")===!0&&O===1023?(L.format=1035,L.minFilter=1006,L.generateMipmaps=!1):A=Us.sRGBToLinear(A):O===1023&&C===1009||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),A}this.allocateTextureUnit=function(){let L=Q;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Q+=1,L},this.resetTextureUnits=function(){Q=0},this.setTexture2D=q,this.setTexture2DArray=function(L,A){let B=n.get(L);L.version>0&&B.__version!==L.version?ee(B,L,A):t.bindTexture(35866,B.__webglTexture,33984+A)},this.setTexture3D=function(L,A){let B=n.get(L);L.version>0&&B.__version!==L.version?ee(B,L,A):t.bindTexture(32879,B.__webglTexture,33984+A)},this.setTextureCube=function(L,A){let B=n.get(L);L.version>0&&B.__version!==L.version?function(O,C,z){if(C.image.length!==6)return;let w=W(O,C),N=C.source;t.bindTexture(34067,O.__webglTexture,33984+z);let I=n.get(N);if(N.version!==I.__version||w===!0){t.activeTexture(33984+z),r.pixelStorei(37440,C.flipY),r.pixelStorei(37441,C.premultiplyAlpha),r.pixelStorei(3317,C.unpackAlignment),r.pixelStorei(37443,0);let H=C.isCompressedTexture||C.image[0].isCompressedTexture,V=C.image[0]&&C.image[0].isDataTexture,X=[];for(let fe=0;fe<6;fe++)X[fe]=H||V?V?C.image[fe].image:C.image[fe]:y(C.image[fe],!1,!0,c),X[fe]=Se(C,X[fe]);let oe=X[0],de=M(oe)||o,ge=s.convert(C.format,C.encoding),le=s.convert(C.type),xe=R(C.internalFormat,ge,le,C.encoding),Ce=o&&C.isVideoTexture!==!0,_e=I.__version===void 0||w===!0,We,St=P(C,oe,de);if(k(34067,C,de),H){Ce&&_e&&t.texStorage2D(34067,St,xe,oe.width,oe.height);for(let fe=0;fe<6;fe++){We=X[fe].mipmaps;for(let Ge=0;Ge<We.length;Ge++){let Ve=We[Ge];C.format!==1023?ge!==null?Ce?t.compressedTexSubImage2D(34069+fe,Ge,0,0,Ve.width,Ve.height,ge,Ve.data):t.compressedTexImage2D(34069+fe,Ge,xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+fe,Ge,0,0,Ve.width,Ve.height,ge,le,Ve.data):t.texImage2D(34069+fe,Ge,xe,Ve.width,Ve.height,0,ge,le,Ve.data)}}}else{We=C.mipmaps,Ce&&_e&&(We.length>0&&St++,t.texStorage2D(34067,St,xe,X[0].width,X[0].height));for(let fe=0;fe<6;fe++)if(V){Ce?t.texSubImage2D(34069+fe,0,0,0,X[fe].width,X[fe].height,ge,le,X[fe].data):t.texImage2D(34069+fe,0,xe,X[fe].width,X[fe].height,0,ge,le,X[fe].data);for(let Ge=0;Ge<We.length;Ge++){let Ve=We[Ge].image[fe].image;Ce?t.texSubImage2D(34069+fe,Ge+1,0,0,Ve.width,Ve.height,ge,le,Ve.data):t.texImage2D(34069+fe,Ge+1,xe,Ve.width,Ve.height,0,ge,le,Ve.data)}}else{Ce?t.texSubImage2D(34069+fe,0,0,0,ge,le,X[fe]):t.texImage2D(34069+fe,0,xe,ge,le,X[fe]);for(let Ge=0;Ge<We.length;Ge++){let Ve=We[Ge];Ce?t.texSubImage2D(34069+fe,Ge+1,0,0,ge,le,Ve.image[fe]):t.texImage2D(34069+fe,Ge+1,xe,ge,le,Ve.image[fe])}}}b(C,de)&&S(34067),I.__version=N.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}(B,L,A):t.bindTexture(34067,B.__webglTexture,33984+A)},this.rebindTextures=function(L,A,B){let O=n.get(L);A!==void 0&&Z(O.__webglFramebuffer,L,L.texture,36064,3553),B!==void 0&&ue(L)},this.setupRenderTarget=function(L){let A=L.texture,B=n.get(L),O=n.get(A);L.addEventListener("dispose",D),L.isWebGLMultipleRenderTargets!==!0&&(O.__webglTexture===void 0&&(O.__webglTexture=r.createTexture()),O.__version=A.version,a.memory.textures++);let C=L.isWebGLCubeRenderTarget===!0,z=L.isWebGLMultipleRenderTargets===!0,w=M(L)||o;if(C){B.__webglFramebuffer=[];for(let N=0;N<6;N++)B.__webglFramebuffer[N]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),z)if(i.drawBuffers){let N=L.texture;for(let I=0,H=N.length;I<H;I++){let V=n.get(N[I]);V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&pe(L)===!1){let N=z?A:[A];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let I=0;I<N.length;I++){let H=N[I];B.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,B.__webglColorRenderbuffer[I]);let V=s.convert(H.format,H.encoding),X=s.convert(H.type),oe=R(H.internalFormat,V,X,H.encoding,L.isXRRenderTarget===!0),de=Ae(L);r.renderbufferStorageMultisample(36161,de,oe,L.width,L.height),r.framebufferRenderbuffer(36160,36064+I,36161,B.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),J(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(C){t.bindTexture(34067,O.__webglTexture),k(34067,A,w);for(let N=0;N<6;N++)Z(B.__webglFramebuffer[N],L,A,36064,34069+N);b(A,w)&&S(34067),t.unbindTexture()}else if(z){let N=L.texture;for(let I=0,H=N.length;I<H;I++){let V=N[I],X=n.get(V);t.bindTexture(3553,X.__webglTexture),k(3553,V,w),Z(B.__webglFramebuffer,L,V,36064+I,3553),b(V,w)&&S(3553)}t.unbindTexture()}else{let N=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?N=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(N,O.__webglTexture),k(N,A,w),Z(B.__webglFramebuffer,L,A,36064,N),b(A,w)&&S(N),t.unbindTexture()}L.depthBuffer&&ue(L)},this.updateRenderTargetMipmap=function(L){let A=M(L)||o,B=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let O=0,C=B.length;O<C;O++){let z=B[O];if(b(z,A)){let w=L.isWebGLCubeRenderTarget?34067:3553,N=n.get(z).__webglTexture;t.bindTexture(w,N),S(w),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(L){if(o&&L.samples>0&&pe(L)===!1){let A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],B=L.width,O=L.height,C=16384,z=[],w=L.stencilBuffer?33306:36096,N=n.get(L),I=L.isWebGLMultipleRenderTargets===!0;if(I)for(let H=0;H<A.length;H++)t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+H,36161,null),t.bindFramebuffer(36160,N.__webglFramebuffer),r.framebufferTexture2D(36009,36064+H,3553,null,0);t.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,N.__webglFramebuffer);for(let H=0;H<A.length;H++){z.push(36064+H),L.depthBuffer&&z.push(w);let V=N.__ignoreDepthValues!==void 0&&N.__ignoreDepthValues;if(V===!1&&(L.depthBuffer&&(C|=256),L.stencilBuffer&&(C|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[H]),V===!0&&(r.invalidateFramebuffer(36008,[w]),r.invalidateFramebuffer(36009,[w])),I){let X=n.get(A[H]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,X,0)}r.blitFramebuffer(0,0,B,O,0,0,B,O,C,9728),p&&r.invalidateFramebuffer(36008,z)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let H=0;H<A.length;H++){t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+H,36161,N.__webglColorRenderbuffer[H]);let V=n.get(A[H]).__webglTexture;t.bindFramebuffer(36160,N.__webglFramebuffer),r.framebufferTexture2D(36009,36064+H,3553,V,0)}t.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=pe}function Yo(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=null){let a;if(i===1009)return 5121;if(i===1017)return 32819;if(i===1018)return 32820;if(i===1010)return 5120;if(i===1011)return 5122;if(i===1012)return 5123;if(i===1013)return 5124;if(i===1014)return 5125;if(i===1015)return 5126;if(i===1016)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return 6406;if(i===1023)return 6408;if(i===1024)return 6409;if(i===1025)return 6410;if(i===1026)return 6402;if(i===1027)return 34041;if(i===1028)return 6403;if(i===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===1035)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1029)return 36244;if(i===1030)return 33319;if(i===1031)return 33320;if(i===1033)return 36249;if(i===33776||i===33777||i===33778||i===33779)if(s===3001){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===37492||i===37496){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===37492)return s===3001?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===37496)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===37808)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return s===3001?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===36492){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===36492)return s===3001?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}return i===1020?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}class Zo extends lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hi extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}let Zu={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let m of e.hand.values()){let v=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){let x=new hi;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[m.jointName]=x,c.add(x)}let _=c.joints[m.jointName];v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=v.radius),_.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class Jo extends tt{constructor(e,t,n,i,s,a,o,l,c,h){if((h=h!==void 0?h:1026)!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}class Ju extends qt{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,d=null,p=null,f=t.getContextAttributes(),m=null,v=null,_=[],x=[],y=new lt;y.layers.enable(1),y.viewport=new ze;let M=new lt;M.layers.enable(2),M.viewport=new ze;let b=[y,M],S=new Zo;S.layers.enable(1),S.layers.enable(2);let R=null,P=null;function U(k){let W=x.indexOf(k.inputSource);if(W===-1)return;let ee=_[W];ee!==void 0&&ee.dispatchEvent({type:k.type,data:k.inputSource})}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",D);for(let k=0;k<_.length;k++){let W=x[k];W!==null&&(x[k]=null,_[k].disconnect(W))}R=null,P=null,e.setRenderTarget(m),d=null,u=null,h=null,i=null,v=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}function D(k){for(let W=0;W<k.removed.length;W++){let ee=k.removed[W],Z=x.indexOf(ee);Z>=0&&(x[Z]=null,_[Z].dispatchEvent({type:"disconnected",data:ee}))}for(let W=0;W<k.added.length;W++){let ee=k.added[W],Z=x.indexOf(ee);if(Z===-1){for(let ue=0;ue<_.length;ue++){if(ue>=x.length){x.push(ee),Z=ue;break}if(x[ue]===null){x[ue]=ee,Z=ue;break}}if(Z===-1)break}let J=_[Z];J&&J.dispatchEvent({type:"connected",data:ee})}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let W=_[k];return W===void 0&&(W=new pa,_[k]=W),W.getTargetRaySpace()},this.getControllerGrip=function(k){let W=_[k];return W===void 0&&(W=new pa,_[k]=W),W.getGripSpace()},this.getHand=function(k){let W=_[k];return W===void 0&&(W=new pa,_[k]=W),W.getHandSpace()},this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",D),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let W={antialias:i.renderState.layers!==void 0||f.antialias,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),v=new Ct(d.framebufferWidth,d.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let W=null,ee=null,Z=null;f.depth&&(Z=f.stencil?35056:33190,W=f.stencil?1027:1026,ee=f.stencil?1020:1014);let J={colorFormat:32856,depthFormat:Z,scaleFactor:s};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(J),i.updateRenderState({layers:[u]}),v=new Ct(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new Jo(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0}),e.properties.get(v).__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};let Y=new T,Q=new T;function q(k,W){W===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(W.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;S.near=M.near=y.near=k.near,S.far=M.far=y.far=k.far,R===S.near&&P===S.far||(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,P=S.far);let W=k.parent,ee=S.cameras;q(S,W);for(let J=0;J<ee.length;J++)q(ee[J],W);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),k.matrix.copy(S.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);let Z=k.children;for(let J=0,ue=Z.length;J<ue;J++)Z[J].updateMatrixWorld(!0);ee.length===2?function(J,ue,Ae){Y.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(Ae.matrixWorld);let pe=Y.distanceTo(Q),Se=ue.projectionMatrix.elements,L=Ae.projectionMatrix.elements,A=Se[14]/(Se[10]-1),B=Se[14]/(Se[10]+1),O=(Se[9]+1)/Se[5],C=(Se[9]-1)/Se[5],z=(Se[8]-1)/Se[0],w=(L[8]+1)/L[0],N=A*z,I=A*w,H=pe/(-z+w),V=H*-z;ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(V),J.translateZ(H),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();let X=A+H,oe=B+H,de=N-V,ge=I+(pe-V),le=O*B/oe*X,xe=C*B/oe*X;J.projectionMatrix.makePerspective(de,ge,le,xe,X,oe)}(S,y,M):S.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){return u!==null?u.fixedFoveation:d!==null?d.fixedFoveation:void 0},this.setFoveation=function(k){u!==null&&(u.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let ie=null,ne=new bo;ne.setAnimationLoop(function(k,W){if(c=W.getViewerPose(l||a),p=W,c!==null){let ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Z=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let J=0;J<ee.length;J++){let ue=ee[J],Ae=null;if(d!==null)Ae=d.getViewport(ue);else{let Se=h.getViewSubImage(u,ue);Ae=Se.viewport,J===0&&(e.setRenderTargetTextures(v,Se.colorTexture,u.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(v))}let pe=b[J];pe===void 0&&(pe=new lt,pe.layers.enable(J),pe.viewport=new ze,b[J]=pe),pe.matrix.fromArray(ue.transform.matrix),pe.projectionMatrix.fromArray(ue.projectionMatrix),pe.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),J===0&&S.matrix.copy(pe.matrix),Z===!0&&S.cameras.push(pe)}}for(let ee=0;ee<_.length;ee++){let Z=x[ee],J=_[ee];Z!==null&&J!==void 0&&J.update(Z,W,l||a)}ie&&ie(k,W),p=null}),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}}function Ku(r,e){function t(n,i){n.opacity.value=i.opacity,i.color&&n.diffuse.value.copy(i.color),i.emissive&&n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(n.map.value=i.map),i.alphaMap&&(n.alphaMap.value=i.alphaMap),i.bumpMap&&(n.bumpMap.value=i.bumpMap,n.bumpScale.value=i.bumpScale,i.side===1&&(n.bumpScale.value*=-1)),i.displacementMap&&(n.displacementMap.value=i.displacementMap,n.displacementScale.value=i.displacementScale,n.displacementBias.value=i.displacementBias),i.emissiveMap&&(n.emissiveMap.value=i.emissiveMap),i.normalMap&&(n.normalMap.value=i.normalMap,n.normalScale.value.copy(i.normalScale),i.side===1&&n.normalScale.value.negate()),i.specularMap&&(n.specularMap.value=i.specularMap),i.alphaTest>0&&(n.alphaTest.value=i.alphaTest);let s=e.get(i).envMap;if(s&&(n.envMap.value=s,n.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=i.reflectivity,n.ior.value=i.ior,n.refractionRatio.value=i.refractionRatio),i.lightMap){n.lightMap.value=i.lightMap;let l=r.physicallyCorrectLights!==!0?Math.PI:1;n.lightMapIntensity.value=i.lightMapIntensity*l}let a,o;i.aoMap&&(n.aoMap.value=i.aoMap,n.aoMapIntensity.value=i.aoMapIntensity),i.map?a=i.map:i.specularMap?a=i.specularMap:i.displacementMap?a=i.displacementMap:i.normalMap?a=i.normalMap:i.bumpMap?a=i.bumpMap:i.roughnessMap?a=i.roughnessMap:i.metalnessMap?a=i.metalnessMap:i.alphaMap?a=i.alphaMap:i.emissiveMap?a=i.emissiveMap:i.clearcoatMap?a=i.clearcoatMap:i.clearcoatNormalMap?a=i.clearcoatNormalMap:i.clearcoatRoughnessMap?a=i.clearcoatRoughnessMap:i.iridescenceMap?a=i.iridescenceMap:i.iridescenceThicknessMap?a=i.iridescenceThicknessMap:i.specularIntensityMap?a=i.specularIntensityMap:i.specularColorMap?a=i.specularColorMap:i.transmissionMap?a=i.transmissionMap:i.thicknessMap?a=i.thicknessMap:i.sheenColorMap?a=i.sheenColorMap:i.sheenRoughnessMap&&(a=i.sheenRoughnessMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),a.matrixAutoUpdate===!0&&a.updateMatrix(),n.uvTransform.value.copy(a.matrix)),i.aoMap?o=i.aoMap:i.lightMap&&(o=i.lightMap),o!==void 0&&(o.isWebGLRenderTarget&&(o=o.texture),o.matrixAutoUpdate===!0&&o.updateMatrix(),n.uv2Transform.value.copy(o.matrix))}return{refreshFogUniforms:function(n,i){n.fogColor.value.copy(i.color),i.isFog?(n.fogNear.value=i.near,n.fogFar.value=i.far):i.isFogExp2&&(n.fogDensity.value=i.density)},refreshMaterialUniforms:function(n,i,s,a,o){i.isMeshBasicMaterial||i.isMeshLambertMaterial?t(n,i):i.isMeshToonMaterial?(t(n,i),function(l,c){c.gradientMap&&(l.gradientMap.value=c.gradientMap)}(n,i)):i.isMeshPhongMaterial?(t(n,i),function(l,c){l.specular.value.copy(c.specular),l.shininess.value=Math.max(c.shininess,1e-4)}(n,i)):i.isMeshStandardMaterial?(t(n,i),function(l,c){l.roughness.value=c.roughness,l.metalness.value=c.metalness,c.roughnessMap&&(l.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(l.metalnessMap.value=c.metalnessMap),e.get(c).envMap&&(l.envMapIntensity.value=c.envMapIntensity)}(n,i),i.isMeshPhysicalMaterial&&function(l,c,h){l.ior.value=c.ior,c.sheen>0&&(l.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),l.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(l.sheenColorMap.value=c.sheenColorMap),c.sheenRoughnessMap&&(l.sheenRoughnessMap.value=c.sheenRoughnessMap)),c.clearcoat>0&&(l.clearcoat.value=c.clearcoat,l.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(l.clearcoatMap.value=c.clearcoatMap),c.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap),c.clearcoatNormalMap&&(l.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),l.clearcoatNormalMap.value=c.clearcoatNormalMap,c.side===1&&l.clearcoatNormalScale.value.negate())),c.iridescence>0&&(l.iridescence.value=c.iridescence,l.iridescenceIOR.value=c.iridescenceIOR,l.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(l.iridescenceMap.value=c.iridescenceMap),c.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=c.iridescenceThicknessMap)),c.transmission>0&&(l.transmission.value=c.transmission,l.transmissionSamplerMap.value=h.texture,l.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(l.transmissionMap.value=c.transmissionMap),l.thickness.value=c.thickness,c.thicknessMap&&(l.thicknessMap.value=c.thicknessMap),l.attenuationDistance.value=c.attenuationDistance,l.attenuationColor.value.copy(c.attenuationColor)),l.specularIntensity.value=c.specularIntensity,l.specularColor.value.copy(c.specularColor),c.specularIntensityMap&&(l.specularIntensityMap.value=c.specularIntensityMap),c.specularColorMap&&(l.specularColorMap.value=c.specularColorMap)}(n,i,o)):i.isMeshMatcapMaterial?(t(n,i),function(l,c){c.matcap&&(l.matcap.value=c.matcap)}(n,i)):i.isMeshDepthMaterial?t(n,i):i.isMeshDistanceMaterial?(t(n,i),function(l,c){l.referencePosition.value.copy(c.referencePosition),l.nearDistance.value=c.nearDistance,l.farDistance.value=c.farDistance}(n,i)):i.isMeshNormalMaterial?t(n,i):i.isLineBasicMaterial?(function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity}(n,i),i.isLineDashedMaterial&&function(l,c){l.dashSize.value=c.dashSize,l.totalSize.value=c.dashSize+c.gapSize,l.scale.value=c.scale}(n,i)):i.isPointsMaterial?function(l,c,h,u){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.size.value=c.size*h,l.scale.value=.5*u,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let d;c.map?d=c.map:c.alphaMap&&(d=c.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),l.uvTransform.value.copy(d.matrix))}(n,i,s,a):i.isSpriteMaterial?function(l,c){l.diffuse.value.copy(c.color),l.opacity.value=c.opacity,l.rotation.value=c.rotation,c.map&&(l.map.value=c.map),c.alphaMap&&(l.alphaMap.value=c.alphaMap),c.alphaTest>0&&(l.alphaTest.value=c.alphaTest);let h;c.map?h=c.map:c.alphaMap&&(h=c.alphaMap),h!==void 0&&(h.matrixAutoUpdate===!0&&h.updateMatrix(),l.uvTransform.value.copy(h.matrix))}(n,i):i.isShadowMaterial?(n.color.value.copy(i.color),n.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function $u(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function l(u,d,p){let f=u.value;if(p[d]===void 0)return p[d]=typeof f=="number"?f:f.clone(),!0;if(typeof f=="number"){if(p[d]!==f)return p[d]=f,!0}else{let m=p[d];if(m.equals(f)===!1)return m.copy(f),!0}return!1}function c(u){let d=u.value,p={boundary:0,storage:0};return typeof d=="number"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),p}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(v){let _=v.uniforms,x=0,y=16,M=0;for(let b=0,S=_.length;b<S;b++){let R=_[b],P=c(R);if(R.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,b>0){M=x%y;let U=y-M;M!==0&&U-P.boundary<0&&(x+=y-M,R.__offset=x)}x+=P.storage}M=x%y,M>0&&(x+=y-M),v.__size=x,v.__cache={}}(u),p=function(v){let _=function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();v.__bindingPointIndex=_;let x=r.createBuffer(),y=v.__size,M=v.usage;return r.bindBuffer(35345,x),r.bufferData(35345,y,M),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,x),x}(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let m=e.render.frame;s[u.id]!==m&&(function(v){let _=i[v.id],x=v.uniforms,y=v.__cache;r.bindBuffer(35345,_);for(let M=0,b=x.length;M<b;M++){let S=x[M];if(l(S,M,y)===!0){let R=S.value,P=S.__offset;typeof R=="number"?(S.__data[0]=R,r.bufferSubData(35345,P,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):R.toArray(S.__data),r.bufferSubData(35345,P,S.__data))}}r.bindBuffer(35345,null)}(u),s[u.id]=m)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}function Ko(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:function(){let E=Ti("canvas");return E.style.display="block",E}(),t=r.context!==void 0?r.context:null,n=r.depth===void 0||r.depth,i=r.stencil===void 0||r.stencil,s=r.antialias!==void 0&&r.antialias,a=r.premultipliedAlpha===void 0||r.premultipliedAlpha,o=r.preserveDrawingBuffer!==void 0&&r.preserveDrawingBuffer,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0&&r.failIfMajorPerformanceCaveat,h;h=t!==null?t.getContextAttributes().alpha:r.alpha!==void 0&&r.alpha;let u=null,d=null,p=[],f=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let m=this,v=!1,_=0,x=0,y=null,M=-1,b=null,S=new ze,R=new ze,P=null,U=e.width,F=e.height,D=1,Y=null,Q=null,q=new ze(0,0,U,F),ie=new ze(0,0,U,F),ne=!1,k=new Gr,W=!1,ee=!1,Z=null,J=new Me,ue=new $,Ae=new T,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return y===null?D:1}let L,A,B,O,C,z,w,N,I,H,V,X,oe,de,ge,le,xe,Ce,_e,We,St,fe,Ge,Ve,ae=t;function Dc(E,G){for(let K=0;K<E.length;K++){let j=E[K],te=e.getContext(j,G);if(te!==null)return te}return null}try{let E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r146"),e.addEventListener("webglcontextlost",Nc,!1),e.addEventListener("webglcontextrestored",Oc,!1),e.addEventListener("webglcontextcreationerror",zc,!1),ae===null){let G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),ae=Dc(G,E),ae===null)throw Dc(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ae.getShaderPrecisionFormat===void 0&&(ae.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function Ic(){L=new Rh(ae),A=new Ah(ae,L,r),L.init(A),fe=new Yo(ae,L,A),B=new Xu(ae,L,A),O=new Ih,C=new Bu,z=new Yu(ae,L,B,C,A,fe,O),w=new Ch(m),N=new Lh(m),I=new bh(ae,A),Ge=new wh(ae,L,I,A),H=new Ph(ae,I,O,Ge),V=new Uh(ae,H,I,O),_e=new zh(ae,A,z),le=new Eh(C),X=new Uu(m,w,N,L,A,Ge,le),oe=new Ku(m,C),de=new ku,ge=new ju(L,A),Ce=new Sh(m,w,N,B,V,h,a),xe=new qu(m,V,A),Ve=new $u(ae,O,A,B),We=new Th(ae,L,O,A),St=new Dh(ae,L,O,A),O.programs=X.programs,m.capabilities=A,m.extensions=L,m.properties=C,m.renderLists=de,m.shadowMap=xe,m.state=B,m.info=O}Ic();let wt=new Ju(m,ae);function Nc(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Oc(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let E=O.autoReset,G=xe.enabled,K=xe.autoUpdate,j=xe.needsUpdate,te=xe.type;Ic(),O.autoReset=E,xe.enabled=G,xe.autoUpdate=K,xe.needsUpdate=j,xe.type=te}function zc(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Uc(E){let G=E.target;G.removeEventListener("dispose",Uc),function(K){(function(j){let te=C.get(j).programs;te!==void 0&&(te.forEach(function(me){X.releaseProgram(me)}),j.isShaderMaterial&&X.releaseShaderCache(j))})(K),C.remove(K)}(G)}this.xr=wt,this.getContext=function(){return ae},this.getContextAttributes=function(){return ae.getContextAttributes()},this.forceContextLoss=function(){let E=L.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=L.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(U,F,!1))},this.getSize=function(E){return E.set(U,F)},this.setSize=function(E,G,K){wt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(U=E,F=G,e.width=Math.floor(E*D),e.height=Math.floor(G*D),K!==!1&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G))},this.getDrawingBufferSize=function(E){return E.set(U*D,F*D).floor()},this.setDrawingBufferSize=function(E,G,K){U=E,F=G,D=K,e.width=Math.floor(E*K),e.height=Math.floor(G*K),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,G,K,j){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,G,K,j),B.viewport(S.copy(q).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,G,K,j){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,G,K,j),B.scissor(R.copy(ie).multiplyScalar(D).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){B.setScissorTest(ne=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,G=!0,K=!0){let j=0;E&&(j|=16384),G&&(j|=256),K&&(j|=1024),ae.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nc,!1),e.removeEventListener("webglcontextrestored",Oc,!1),e.removeEventListener("webglcontextcreationerror",zc,!1),de.dispose(),ge.dispose(),C.dispose(),w.dispose(),N.dispose(),V.dispose(),Ge.dispose(),Ve.dispose(),X.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Bc),wt.removeEventListener("sessionend",Fc),Z&&(Z.dispose(),Z=null),Hn.stop()},this.renderBufferDirect=function(E,G,K,j,te,me){G===null&&(G=pe);let Le=te.isMesh&&te.matrixWorld.determinant()<0,Re=function(ct,hr,Ft,ve,at){hr.isScene!==!0&&(hr=pe),z.resetTextureUnits();let $a=hr.fog,zd=ve.isMeshStandardMaterial?hr.environment:null,Ud=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:3e3,As=(ve.isMeshStandardMaterial?N:w).get(ve.envMap||zd),Bd=ve.vertexColors===!0&&!!Ft.attributes.color&&Ft.attributes.color.itemSize===4,Fd=!!ve.normalMap&&!!Ft.attributes.tangent,kd=!!Ft.morphAttributes.position,Gd=!!Ft.morphAttributes.normal,Vd=!!Ft.morphAttributes.color,Hd=ve.toneMapped?m.toneMapping:0,Hc=Ft.morphAttributes.position||Ft.morphAttributes.normal||Ft.morphAttributes.color,Wd=Hc!==void 0?Hc.length:0,Be=C.get(ve),jd=d.state.lights;if(W===!0&&(ee===!0||ct!==b)){let Tt=ct===b&&ve.id===M;le.setState(ve,ct,Tt)}let rn=!1;ve.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==jd.state.version||Be.outputEncoding!==Ud||at.isInstancedMesh&&Be.instancing===!1?rn=!0:at.isInstancedMesh||Be.instancing!==!0?at.isSkinnedMesh&&Be.skinning===!1?rn=!0:at.isSkinnedMesh||Be.skinning!==!0?Be.envMap!==As||ve.fog===!0&&Be.fog!==$a?rn=!0:Be.numClippingPlanes===void 0||Be.numClippingPlanes===le.numPlanes&&Be.numIntersection===le.numIntersection?(Be.vertexAlphas!==Bd||Be.vertexTangents!==Fd||Be.morphTargets!==kd||Be.morphNormals!==Gd||Be.morphColors!==Vd||Be.toneMapping!==Hd||A.isWebGL2===!0&&Be.morphTargetsCount!==Wd)&&(rn=!0):rn=!0:rn=!0:rn=!0:(rn=!0,Be.__version=ve.version);let Wn=Be.currentProgram;rn===!0&&(Wn=Ss(ve,hr,at));let Wc=!1,ur=!1,Qa=!1,gt=Wn.getUniforms(),jn=Be.uniforms;if(B.useProgram(Wn.program)&&(Wc=!0,ur=!0,Qa=!0),ve.id!==M&&(M=ve.id,ur=!0),Wc||b!==ct){if(gt.setValue(ae,"projectionMatrix",ct.projectionMatrix),A.logarithmicDepthBuffer&&gt.setValue(ae,"logDepthBufFC",2/(Math.log(ct.far+1)/Math.LN2)),b!==ct&&(b=ct,ur=!0,Qa=!0),ve.isShaderMaterial||ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshStandardMaterial||ve.envMap){let Tt=gt.map.cameraPosition;Tt!==void 0&&Tt.setValue(ae,Ae.setFromMatrixPosition(ct.matrixWorld))}(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&gt.setValue(ae,"isOrthographic",ct.isOrthographicCamera===!0),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial||ve.isShadowMaterial||at.isSkinnedMesh)&&gt.setValue(ae,"viewMatrix",ct.matrixWorldInverse)}if(at.isSkinnedMesh){gt.setOptional(ae,at,"bindMatrix"),gt.setOptional(ae,at,"bindMatrixInverse");let Tt=at.skeleton;Tt&&(A.floatVertexTextures?(Tt.boneTexture===null&&Tt.computeBoneTexture(),gt.setValue(ae,"boneTexture",Tt.boneTexture,z),gt.setValue(ae,"boneTextureSize",Tt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let eo=Ft.morphAttributes;(eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0&&A.isWebGL2===!0)&&_e.update(at,Ft,ve,Wn),(ur||Be.receiveShadow!==at.receiveShadow)&&(Be.receiveShadow=at.receiveShadow,gt.setValue(ae,"receiveShadow",at.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(jn.envMap.value=As,jn.flipEnvMap.value=As.isCubeTexture&&As.isRenderTargetTexture===!1?-1:1),ur&&(gt.setValue(ae,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&(kt=Qa,(Wt=jn).ambientLightColor.needsUpdate=kt,Wt.lightProbe.needsUpdate=kt,Wt.directionalLights.needsUpdate=kt,Wt.directionalLightShadows.needsUpdate=kt,Wt.pointLights.needsUpdate=kt,Wt.pointLightShadows.needsUpdate=kt,Wt.spotLights.needsUpdate=kt,Wt.spotLightShadows.needsUpdate=kt,Wt.rectAreaLights.needsUpdate=kt,Wt.hemisphereLights.needsUpdate=kt),$a&&ve.fog===!0&&oe.refreshFogUniforms(jn,$a),oe.refreshMaterialUniforms(jn,ve,D,F,Z),jr.upload(ae,Be.uniformsList,jn,z));var Wt,kt;if(ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(jr.upload(ae,Be.uniformsList,jn,z),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&gt.setValue(ae,"center",at.center),gt.setValue(ae,"modelViewMatrix",at.modelViewMatrix),gt.setValue(ae,"normalMatrix",at.normalMatrix),gt.setValue(ae,"modelMatrix",at.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){let Tt=ve.uniformsGroups;for(let to=0,qd=Tt.length;to<qd;to++)if(A.isWebGL2){let jc=Tt[to];Ve.update(jc,Wn),Ve.bind(jc,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}(E,G,K,j,te);B.setMaterial(j,Le);let De=K.index,Xe=K.attributes.position;if(De===null){if(Xe===void 0||Xe.count===0)return}else if(De.count===0)return;let Oe,Pe=1;j.wireframe===!0&&(De=H.getWireframeAttribute(K),Pe=2),Ge.setup(te,j,Re,K,De);let st=We;De!==null&&(Oe=I.get(De),st=St,st.setIndex(Oe));let cr=De!==null?De.count:Xe.count,Dt=K.drawRange.start*Pe,Ka=K.drawRange.count*Pe,xn=me!==null?me.start*Pe:0,Nd=me!==null?me.count*Pe:1/0,ws=Math.max(Dt,xn),Od=Math.min(cr,Dt+Ka,xn+Nd)-1,Ts=Math.max(0,Od-ws+1);if(Ts!==0){if(te.isMesh)j.wireframe===!0?(B.setLineWidth(j.wireframeLinewidth*Se()),st.setMode(1)):st.setMode(4);else if(te.isLine){let ct=j.linewidth;ct===void 0&&(ct=1),B.setLineWidth(ct*Se()),te.isLineSegments?st.setMode(1):te.isLineLoop?st.setMode(2):st.setMode(3)}else te.isPoints?st.setMode(0):te.isSprite&&st.setMode(4);if(te.isInstancedMesh)st.renderInstances(ws,Ts,te.count);else if(K.isInstancedBufferGeometry){let ct=Math.min(K.instanceCount,K._maxInstanceCount);st.renderInstances(ws,Ts,ct)}else st.render(ws,Ts)}},this.compile=function(E,G){function K(j,te,me){j.transparent===!0&&j.side===2?(j.side=1,j.needsUpdate=!0,Ss(j,te,me),j.side=0,j.needsUpdate=!0,Ss(j,te,me),j.side=2):Ss(j,te,me)}d=ge.get(E),d.init(),f.push(d),E.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(d.pushLight(j),j.castShadow&&d.pushShadow(j))}),d.setupLights(m.physicallyCorrectLights),E.traverse(function(j){let te=j.material;if(te)if(Array.isArray(te))for(let me=0;me<te.length;me++)K(te[me],E,j);else K(te,E,j)}),f.pop(),d=null};let Ja=null;function Bc(){Hn.stop()}function Fc(){Hn.start()}let Hn=new bo;function kc(E,G,K,j){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||k.intersectsSprite(E)){j&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);let me=V.update(E),Le=E.material;Le.visible&&u.push(E,me,Le,K,Ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==O.render.frame&&(E.skeleton.update(),E.skeleton.frame=O.render.frame),!E.frustumCulled||k.intersectsObject(E))){j&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);let me=V.update(E),Le=E.material;if(Array.isArray(Le)){let Re=me.groups;for(let De=0,Xe=Re.length;De<Xe;De++){let Oe=Re[De],Pe=Le[Oe.materialIndex];Pe&&Pe.visible&&u.push(E,me,Pe,K,Ae.z,Oe)}}else Le.visible&&u.push(E,me,Le,K,Ae.z,null)}}let te=E.children;for(let me=0,Le=te.length;me<Le;me++)kc(te[me],G,K,j)}function Gc(E,G,K,j){let te=E.opaque,me=E.transmissive,Le=E.transparent;d.setupLightsView(K),me.length>0&&function(Re,De,Xe){let Oe=A.isWebGL2;Z===null&&(Z=new Ct(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Oe&&s===!0?4:0})),m.getDrawingBufferSize(ue),Oe?Z.setSize(ue.x,ue.y):Z.setSize(xr(ue.x),xr(ue.y));let Pe=m.getRenderTarget();m.setRenderTarget(Z),m.clear();let st=m.toneMapping;m.toneMapping=0,bs(Re,De,Xe),m.toneMapping=st,z.updateMultisampleRenderTarget(Z),z.updateRenderTargetMipmap(Z),m.setRenderTarget(Pe)}(te,G,K),j&&B.viewport(S.copy(j)),te.length>0&&bs(te,G,K),me.length>0&&bs(me,G,K),Le.length>0&&bs(Le,G,K),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function bs(E,G,K){let j=G.isScene===!0?G.overrideMaterial:null;for(let te=0,me=E.length;te<me;te++){let Le=E[te],Re=Le.object,De=Le.geometry,Xe=j===null?Le.material:j,Oe=Le.group;Re.layers.test(K.layers)&&Id(Re,G,K,De,Xe,Oe)}}function Id(E,G,K,j,te,me){E.onBeforeRender(m,G,K,j,te,me),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(m,G,K,j,E,me),te.transparent===!0&&te.side===2?(te.side=1,te.needsUpdate=!0,m.renderBufferDirect(K,G,j,te,E,me),te.side=0,te.needsUpdate=!0,m.renderBufferDirect(K,G,j,te,E,me),te.side=2):m.renderBufferDirect(K,G,j,te,E,me),E.onAfterRender(m,G,K,j,te,me)}function Ss(E,G,K){G.isScene!==!0&&(G=pe);let j=C.get(E),te=d.state.lights,me=d.state.shadowsArray,Le=te.state.version,Re=X.getParameters(E,te.state,me,G,K),De=X.getProgramCacheKey(Re),Xe=j.programs;j.environment=E.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(E.isMeshStandardMaterial?N:w).get(E.envMap||j.environment),Xe===void 0&&(E.addEventListener("dispose",Uc),Xe=new Map,j.programs=Xe);let Oe=Xe.get(De);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===Le)return Vc(E,Re),Oe}else Re.uniforms=X.getUniforms(E),E.onBuild(K,Re,m),E.onBeforeCompile(Re,m),Oe=X.acquireProgram(Re,De),Xe.set(De,Oe),j.uniforms=Re.uniforms;let Pe=j.uniforms;(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Pe.clippingPlanes=le.uniform),Vc(E,Re),j.needsLights=function(Dt){return Dt.isMeshLambertMaterial||Dt.isMeshToonMaterial||Dt.isMeshPhongMaterial||Dt.isMeshStandardMaterial||Dt.isShadowMaterial||Dt.isShaderMaterial&&Dt.lights===!0}(E),j.lightsStateVersion=Le,j.needsLights&&(Pe.ambientLightColor.value=te.state.ambient,Pe.lightProbe.value=te.state.probe,Pe.directionalLights.value=te.state.directional,Pe.directionalLightShadows.value=te.state.directionalShadow,Pe.spotLights.value=te.state.spot,Pe.spotLightShadows.value=te.state.spotShadow,Pe.rectAreaLights.value=te.state.rectArea,Pe.ltc_1.value=te.state.rectAreaLTC1,Pe.ltc_2.value=te.state.rectAreaLTC2,Pe.pointLights.value=te.state.point,Pe.pointLightShadows.value=te.state.pointShadow,Pe.hemisphereLights.value=te.state.hemi,Pe.directionalShadowMap.value=te.state.directionalShadowMap,Pe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Pe.spotShadowMap.value=te.state.spotShadowMap,Pe.spotLightMatrix.value=te.state.spotLightMatrix,Pe.spotLightMap.value=te.state.spotLightMap,Pe.pointShadowMap.value=te.state.pointShadowMap,Pe.pointShadowMatrix.value=te.state.pointShadowMatrix);let st=Oe.getUniforms(),cr=jr.seqWithValue(st.seq,Pe);return j.currentProgram=Oe,j.uniformsList=cr,Oe}function Vc(E,G){let K=C.get(E);K.outputEncoding=G.outputEncoding,K.instancing=G.instancing,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}Hn.setAnimationLoop(function(E){Ja&&Ja(E)}),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(E){Ja=E,wt.setAnimationLoop(E),E===null?Hn.stop():Hn.start()},wt.addEventListener("sessionstart",Bc),wt.addEventListener("sessionend",Fc),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(G),G=wt.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,G,y),d=ge.get(E,f.length),d.init(),f.push(d),J.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),k.setFromProjectionMatrix(J),ee=this.localClippingEnabled,W=le.init(this.clippingPlanes,ee,G),u=de.get(E,p.length),u.init(),p.push(u),kc(E,G,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Y,Q),W===!0&&le.beginShadows();let K=d.state.shadowsArray;if(xe.render(K,E,G),W===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(u,E),d.setupLights(m.physicallyCorrectLights),G.isArrayCamera){let j=G.cameras;for(let te=0,me=j.length;te<me;te++){let Le=j[te];Gc(u,E,Le,Le.viewport)}}else Gc(u,E,G);y!==null&&(z.updateMultisampleRenderTarget(y),z.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(m,E,G),Ge.resetDefaultState(),M=-1,b=null,f.pop(),d=f.length>0?f[f.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,G,K){C.get(E.texture).__webglTexture=G,C.get(E.depthTexture).__webglTexture=K;let j=C.get(E);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){let K=C.get(E);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,K=0){y=E,_=G,x=K;let j=!0,te=null,me=!1,Le=!1;if(E){let Re=C.get(E);Re.__useDefaultFramebuffer!==void 0?(B.bindFramebuffer(36160,null),j=!1):Re.__webglFramebuffer===void 0?z.setupRenderTarget(E):Re.__hasExternalTextures&&z.rebindTextures(E,C.get(E.texture).__webglTexture,C.get(E.depthTexture).__webglTexture);let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Le=!0);let Xe=C.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(te=Xe[G],me=!0):te=A.isWebGL2&&E.samples>0&&z.useMultisampledRTT(E)===!1?C.get(E).__webglMultisampledFramebuffer:Xe,S.copy(E.viewport),R.copy(E.scissor),P=E.scissorTest}else S.copy(q).multiplyScalar(D).floor(),R.copy(ie).multiplyScalar(D).floor(),P=ne;if(B.bindFramebuffer(36160,te)&&A.drawBuffers&&j&&B.drawBuffers(E,te),B.viewport(S),B.scissor(R),B.setScissorTest(P),me){let Re=C.get(E.texture);ae.framebufferTexture2D(36160,36064,34069+G,Re.__webglTexture,K)}else if(Le){let Re=C.get(E.texture),De=G||0;ae.framebufferTextureLayer(36160,36064,Re.__webglTexture,K||0,De)}M=-1},this.readRenderTargetPixels=function(E,G,K,j,te,me,Le){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=C.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Re=Re[Le]),Re){B.bindFramebuffer(36160,Re);try{let De=E.texture,Xe=De.format,Oe=De.type;if(Xe!==1023&&fe.convert(Xe)!==ae.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Pe=Oe===1016&&(L.has("EXT_color_buffer_half_float")||A.isWebGL2&&L.has("EXT_color_buffer_float"));if(!(Oe===1009||fe.convert(Oe)===ae.getParameter(35738)||Oe===1015&&(A.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float"))||Pe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=E.width-j&&K>=0&&K<=E.height-te&&ae.readPixels(G,K,j,te,fe.convert(Xe),fe.convert(Oe),me)}finally{let De=y!==null?C.get(y).__webglFramebuffer:null;B.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(E,G,K=0){let j=Math.pow(2,-K),te=Math.floor(G.image.width*j),me=Math.floor(G.image.height*j);z.setTexture2D(G,0),ae.copyTexSubImage2D(3553,K,0,0,E.x,E.y,te,me),B.unbindTexture()},this.copyTextureToTexture=function(E,G,K,j=0){let te=G.image.width,me=G.image.height,Le=fe.convert(K.format),Re=fe.convert(K.type);z.setTexture2D(K,0),ae.pixelStorei(37440,K.flipY),ae.pixelStorei(37441,K.premultiplyAlpha),ae.pixelStorei(3317,K.unpackAlignment),G.isDataTexture?ae.texSubImage2D(3553,j,E.x,E.y,te,me,Le,Re,G.image.data):G.isCompressedTexture?ae.compressedTexSubImage2D(3553,j,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Le,G.mipmaps[0].data):ae.texSubImage2D(3553,j,E.x,E.y,Le,Re,G.image),j===0&&K.generateMipmaps&&ae.generateMipmap(3553),B.unbindTexture()},this.copyTextureToTexture3D=function(E,G,K,j,te=0){if(m.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let me=E.max.x-E.min.x+1,Le=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,De=fe.convert(j.format),Xe=fe.convert(j.type),Oe;if(j.isData3DTexture)z.setTexture3D(j,0),Oe=32879;else{if(!j.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");z.setTexture2DArray(j,0),Oe=35866}ae.pixelStorei(37440,j.flipY),ae.pixelStorei(37441,j.premultiplyAlpha),ae.pixelStorei(3317,j.unpackAlignment);let Pe=ae.getParameter(3314),st=ae.getParameter(32878),cr=ae.getParameter(3316),Dt=ae.getParameter(3315),Ka=ae.getParameter(32877),xn=K.isCompressedTexture?K.mipmaps[0]:K.image;ae.pixelStorei(3314,xn.width),ae.pixelStorei(32878,xn.height),ae.pixelStorei(3316,E.min.x),ae.pixelStorei(3315,E.min.y),ae.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?ae.texSubImage3D(Oe,te,G.x,G.y,G.z,me,Le,Re,De,Xe,xn.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ae.compressedTexSubImage3D(Oe,te,G.x,G.y,G.z,me,Le,Re,De,xn.data)):ae.texSubImage3D(Oe,te,G.x,G.y,G.z,me,Le,Re,De,Xe,xn),ae.pixelStorei(3314,Pe),ae.pixelStorei(32878,st),ae.pixelStorei(3316,cr),ae.pixelStorei(3315,Dt),ae.pixelStorei(32877,Ka),te===0&&j.generateMipmaps&&ae.generateMipmap(Oe),B.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?z.setTextureCube(E,0):E.isData3DTexture?z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?z.setTexture2DArray(E,0):z.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){_=0,x=0,y=null,B.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class $o extends Ko{}$o.prototype.isWebGL1Renderer=!0;class qr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(e),this.density=t}clone(){return new qr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Xr{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ce(e),this.near=t,this.far=n}clone(){return new Xr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Qo extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Yr{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}let mt=new T;class Rn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}setX(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Fe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Fe(t,this.array),n=Fe(n,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ke(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ma extends dt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ui,Oi=new T,di=new T,pi=new T,mi=new $,zi=new $,el=new Me,Zr=new T,Ui=new T,Jr=new T,tl=new $,fa=new $,nl=new $;class il extends Ne{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",ui===void 0){ui=new Ee;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yr(t,5);ui.setIndex([0,1,2,0,2,3]),ui.setAttribute("position",new Rn(n,3,0,!1)),ui.setAttribute("uv",new Rn(n,2,3,!1))}this.geometry=ui,this.material=e!==void 0?e:new ma,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),di.setFromMatrixScale(this.matrixWorld),el.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&di.multiplyScalar(-pi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;Kr(Zr.set(-.5,-.5,0),pi,a,di,i,s),Kr(Ui.set(.5,-.5,0),pi,a,di,i,s),Kr(Jr.set(.5,.5,0),pi,a,di,i,s),tl.set(0,0),fa.set(1,0),nl.set(1,1);let o=e.ray.intersectTriangle(Zr,Ui,Jr,!1,Oi);if(o===null&&(Kr(Ui.set(-.5,.5,0),pi,a,di,i,s),fa.set(0,1),o=e.ray.intersectTriangle(Zr,Jr,Ui,!1,Oi),o===null))return;let l=e.ray.origin.distanceTo(Oi);l<e.near||l>e.far||t.push({distance:l,point:Oi.clone(),uv:Lt.getUV(Oi,Zr,Ui,Jr,tl,fa,nl,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Kr(r,e,t,n,i,s){mi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(zi.x=s*mi.x-i*mi.y,zi.y=i*mi.x+s*mi.y):zi.copy(mi),r.copy(e),r.x+=zi.x,r.y+=zi.y,r.applyMatrix4(el)}let $r=new T,rl=new T;class sl extends Ne{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let s=t[n];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);let n=this.levels,i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){$r.setFromMatrixPosition(this.matrixWorld);let n=e.ray.origin.distanceTo($r);this.getObjectForDistance(n).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){$r.setFromMatrixPosition(e.matrixWorld),rl.setFromMatrixPosition(this.matrixWorld);let n=$r.distanceTo(rl)/e.zoom,i,s;for(t[0].object.visible=!0,i=1,s=t.length;i<s&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<s;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,s=n.length;i<s;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance})}return t}}let al=new T,ol=new ze,ll=new ze,Qu=new T,cl=new Me;class hl extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Me,this.bindMatrixInverse=new Me}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;ol.fromBufferAttribute(i.attributes.skinIndex,e),ll.fromBufferAttribute(i.attributes.skinWeight,e),al.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=ll.getComponent(s);if(a!==0){let o=ol.getComponent(s);cl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qu.copy(al).applyMatrix4(cl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ga extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fi extends tt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ul=new Me,ed=new Me;class Qr{constructor(e=[],t=[]){this.uuid=_t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:ed;ul.multiplyMatrices(o,t[s]),ul.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=so(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fi(t,e,e,1023,1015);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ga),this.bones.push(a),this.boneInverses.push(new Me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}}class gi extends ke{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}let dl=new Me,pl=new Me,es=[],td=new Me,Bi=new ot;class ml extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gi(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,td)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,dl),pl.multiplyMatrices(n,dl),Bi.matrixWorld=pl,Bi.raycast(e,es);for(let a=0,o=es.length;a<o;a++){let l=es[a];l.instanceId=s,l.object=this,t.push(l)}es.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gi(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ft extends dt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}let fl=new T,gl=new T,vl=new Me,va=new Li,ts=new Cn;class fn extends Ne{constructor(e=new Ee,t=new ft){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fl.fromBufferAttribute(t,i-1),gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fl.distanceTo(gl);e.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(i),ts.radius+=s,e.ray.intersectsSphere(ts)===!1)return;vl.copy(i).invert(),va.copy(e.ray).applyMatrix4(vl);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,h=new T,u=new T,d=new T,p=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null)for(let v=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count)-1;v<_;v+=p){let x=f.getX(v),y=f.getX(v+1);if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,y),va.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}else for(let v=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count)-1;v<_;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),va.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}let xl=new T,_l=new T;class Vt extends fn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)xl.fromBufferAttribute(t,i),_l.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+xl.distanceTo(_l);e.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yl extends fn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xa extends dt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ml=new Me,_a=new Li,ns=new Cn,is=new T;class bl extends Ne{constructor(e=new Ee,t=new xa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(i),ns.radius+=s,e.ray.intersectsSphere(ns)===!1)return;Ml.copy(i).invert(),_a.copy(e.ray).applyMatrix4(Ml);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);is.fromBufferAttribute(h,p),Sl(is,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)is.fromBufferAttribute(h,u),Sl(is,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}}function Sl(r,e,t,n,i,s,a){let o=_a.distanceSqToPoint(r);if(o<t){let l=new T;_a.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ya extends tt{constructor(e,t,n,i,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Ut{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new $:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],s=[],a=[],o=new T,l=new Me;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ke(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Ke(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rs extends Ut{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new $,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wl extends rs{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ma(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}let ss=new T,ba=new Ma,Sa=new Ma,wa=new Ma;class Tl extends Ut{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(ss.subVectors(i[0],i[1]).add(i[0]),o=ss);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(ss.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=ss),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(l),p);m<1e-4&&(m=1),f<1e-4&&(f=m),v<1e-4&&(v=m),ba.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,m,v),Sa.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,m,v),wa.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,m,v)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Sa.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),wa.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(ba.calc(h),Sa.calc(h),wa.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Al(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Fi(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function ki(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}class Ta extends Ut{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,i.x,s.x,a.x,o.x),ki(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class El extends Ut{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ki(e,i.x,s.x,a.x,o.x),ki(e,i.y,s.y,a.y,o.y),ki(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class as extends Ut{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new $;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cl extends Ut{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Aa extends Ut{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Fi(e,i.x,s.x,a.x),Fi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ea extends Ut{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Fi(e,i.x,s.x,a.x),Fi(e,i.y,s.y,a.y),Fi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ca extends Ut{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Al(o,l.x,c.x,h.x,u.x),Al(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var La=Object.freeze({__proto__:null,ArcCurve:wl,CatmullRomCurve3:Tl,CubicBezierCurve:Ta,CubicBezierCurve3:El,EllipseCurve:rs,LineCurve:as,LineCurve3:Cl,QuadraticBezierCurve:Aa,QuadraticBezierCurve3:Ea,SplineCurve:Ca});class Ll extends Ut{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new as(t,e))}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new La[i.type]().fromJSON(i))}return this}}class Gi extends Ll{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new as(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Aa(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ta(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new rs(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vi extends Ee{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ke(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new $,p=new T,f=new T,m=new T,v=0,_=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:v=e[x+1].x-e[x].x,_=e[x+1].y-e[x].y,p.x=1*_,p.y=-v,p.z=0*_,m.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:v=e[x+1].x-e[x].x,_=e[x+1].y-e[x].y,p.x=1*_,p.y=-v,p.z=0*_,f.copy(p),p.x+=m.x,p.y+=m.y,p.z+=m.z,p.normalize(),l.push(p.x,p.y,p.z),m.copy(f)}for(let x=0;x<=t;x++){let y=n+x*h*i,M=Math.sin(y),b=Math.cos(y);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*M,u.y=e[S].y,u.z=e[S].x*b,a.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),o.push(d.x,d.y);let R=l[3*S+0]*M,P=l[3*S+1],U=l[3*S+0]*b;c.push(R,P,U)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let M=y+x*e.length,b=M,S=M+e.length,R=M+e.length+1,P=M+1;s.push(b,S,P),s.push(R,P,S)}this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(c,3))}static fromJSON(e){return new vi(e.points,e.segments,e.phiStart,e.phiLength)}}class Vi extends vi{constructor(e=1,t=1,n=4,i=8){let s=new Gi;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Vi(e.radius,e.length,e.capSegments,e.radialSegments)}}class Hi extends Ee{constructor(e=1,t=8,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new T,h=new $;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(o,3)),this.setAttribute("uv",new he(l,2))}static fromJSON(e){return new Hi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pn extends Ee{constructor(e=1,t=1,n=1,i=8,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,m=[],v=n/2,_=0;function x(y){let M=f,b=new $,S=new T,R=0,P=y===!0?e:t,U=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,v*U,0),d.push(0,U,0),p.push(.5,.5),f++;let F=f;for(let D=0;D<=i;D++){let Y=D/i*l+o,Q=Math.cos(Y),q=Math.sin(Y);S.x=P*q,S.y=v*U,S.z=P*Q,u.push(S.x,S.y,S.z),d.push(0,U,0),b.x=.5*Q+.5,b.y=.5*q*U+.5,p.push(b.x,b.y),f++}for(let D=0;D<i;D++){let Y=M+D,Q=F+D;y===!0?h.push(Q,Q+1,Y):h.push(Q+1,Q,Y),R+=3}c.addGroup(_,R,y===!0?1:2),_+=R}(function(){let y=new T,M=new T,b=0,S=(t-e)/n;for(let R=0;R<=s;R++){let P=[],U=R/s,F=U*(t-e)+e;for(let D=0;D<=i;D++){let Y=D/i,Q=Y*l+o,q=Math.sin(Q),ie=Math.cos(Q);M.x=F*q,M.y=-U*n+v,M.z=F*ie,u.push(M.x,M.y,M.z),y.set(q,S,ie).normalize(),d.push(y.x,y.y,y.z),p.push(Y,1-U),P.push(f++)}m.push(P)}for(let R=0;R<i;R++)for(let P=0;P<s;P++){let U=m[P][R],F=m[P+1][R],D=m[P+1][R+1],Y=m[P][R+1];h.push(U,F,Y),h.push(F,D,Y),b+=6}c.addGroup(_,b,0),_+=b})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2))}static fromJSON(e){return new Pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends Pn{constructor(e=1,t=1,n=8,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Wi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qt extends Ee{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,m){let v=m+1,_=[];for(let x=0;x<=v;x++){_[x]=[];let y=d.clone().lerp(f,x/v),M=p.clone().lerp(f,x/v),b=v-x;for(let S=0;S<=b;S++)_[x][S]=S===0&&x===v?y:y.clone().lerp(M,S/b)}for(let x=0;x<v;x++)for(let y=0;y<2*(v-x)-1;y++){let M=Math.floor(y/2);y%2==0?(l(_[x][M+1]),l(_[x+1][M]),l(_[x][M])):(l(_[x][M+1]),l(_[x+1][M+1]),l(_[x+1][M]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,m){m<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=m/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new T,f=new T,m=new T;for(let v=0;v<t.length;v+=3)c(t[v+0],p),c(t[v+1],f),c(t[v+2],m),o(p,f,m,d)})(i),function(d){let p=new T;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let d=new T;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let m=u(d)/2/Math.PI+.5,v=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(m,1-v)}var p;(function(){let f=new T,m=new T,v=new T,_=new T,x=new $,y=new $,M=new $;for(let b=0,S=0;b<s.length;b+=9,S+=6){f.set(s[b+0],s[b+1],s[b+2]),m.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),x.set(a[S+0],a[S+1]),y.set(a[S+2],a[S+3]),M.set(a[S+4],a[S+5]),_.copy(f).add(m).add(v).divideScalar(3);let R=u(_);h(x,S+0,f,R),h(y,S+2,m,R),h(M,S+4,v,R)}})(),function(){for(let f=0;f<a.length;f+=6){let m=a[f+0],v=a[f+2],_=a[f+4],x=Math.max(m,v,_),y=Math.min(m,v,_);x>.9&&y<.1&&(m<.2&&(a[f+0]+=1),v<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new he(s,3)),this.setAttribute("normal",new he(s.slice(),3)),this.setAttribute("uv",new he(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(e){return new Qt(e.vertices,e.indices,e.radius,e.details)}}class ji extends Qt{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ji(e.radius,e.detail)}}let os=new T,ls=new T,Ra=new T,cs=new Lt;class Rl extends Ee{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Mn*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:m,b:v,c:_}=cs;if(m.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),cs.getNormal(Ra),u[0]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let y=(x+1)%3,M=u[x],b=u[y],S=cs[h[x]],R=cs[h[y]],P=`${M}_${b}`,U=`${b}_${M}`;U in d&&d[U]?(Ra.dot(d[U].normal)<=s&&(p.push(S.x,S.y,S.z),p.push(R.x,R.y,R.z)),d[U]=null):P in d||(d[P]={index0:c[x],index1:c[y],normal:Ra.clone()})}}for(let f in d)if(d[f]){let{index0:m,index1:v}=d[f];os.fromBufferAttribute(o,m),ls.fromBufferAttribute(o,v),p.push(os.x,os.y,os.z),p.push(ls.x,ls.y,ls.z)}this.setAttribute("position",new he(p,3))}}}class Dn extends Gi{constructor(e){super(e),this.uuid=_t(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Gi().fromJSON(i))}return this}}let nd=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Pl(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(f,m,v,_){let x=[],y,M,b,S,R;for(y=0,M=m.length;y<M;y++)b=m[y]*_,S=y<M-1?m[y+1]*_:f.length,R=Pl(f,b,S,_,!1),R===R.next&&(R.steiner=!0),x.push(hd(R));for(x.sort(od),y=0;y<x.length;y++)v=ld(x[y],v);return v}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return qi(s,a,t,o,l,p,0),a};function Pl(r,e,t,n,i){let s,a;if(i===function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=Nl(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=Nl(s,r[s],r[s+1],a);return a&&hs(a,a.next)&&(Yi(a),a=a.next),a}function In(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!hs(n,n.next)&&Ze(n.prev,n,n.next)!==0)n=n.next;else{if(Yi(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function qi(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,u,d,p){let f=h;do f.z===0&&(f.z=Pa(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(m){let v,_,x,y,M,b,S,R,P=1;do{for(_=m,m=null,M=null,b=0;_;){for(b++,x=_,S=0,v=0;v<P&&(S++,x=x.nextZ,x);v++);for(R=P;S>0||R>0&&x;)S!==0&&(R===0||!x||_.z<=x.z)?(y=_,_=_.nextZ,S--):(y=x,x=x.nextZ,R--),M?M.nextZ=y:m=y,y.prevZ=M,M=y;_=x}M.nextZ=null,P*=2}while(b>1)}(f)}(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?rd(r,n,i,s):id(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Yi(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?qi(r=sd(In(r),e,t),e,t,n,i,s,2):a===2&&ad(r,e,t,n,i,s):qi(In(r),e,t,n,i,s,1);break}}function id(r){let e=r.prev,t=r,n=r.next;if(Ze(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&xi(i,o,s,l,a,c,f.x,f.y)&&Ze(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function rd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Ze(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,m=o>l?o>c?o:c:l>c?l:c,v=h>u?h>d?h:d:u>d?u:d,_=Pa(p,f,e,t,n),x=Pa(m,v,e,t,n),y=r.prevZ,M=r.nextZ;for(;y&&y.z>=_&&M&&M.z<=x;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=v&&y!==i&&y!==a&&xi(o,h,l,u,c,d,y.x,y.y)&&Ze(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=m&&M.y>=f&&M.y<=v&&M!==i&&M!==a&&xi(o,h,l,u,c,d,M.x,M.y)&&Ze(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=m&&y.y>=f&&y.y<=v&&y!==i&&y!==a&&xi(o,h,l,u,c,d,y.x,y.y)&&Ze(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=x;){if(M.x>=p&&M.x<=m&&M.y>=f&&M.y<=v&&M!==i&&M!==a&&xi(o,h,l,u,c,d,M.x,M.y)&&Ze(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function sd(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!hs(i,s)&&Dl(i,n,n.next,s)&&Xi(i,s)&&Xi(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Yi(n),Yi(n.next),n=r=s),n=n.next}while(n!==r);return In(n)}function ad(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ud(a,o)){let l=Il(a,o);return a=In(a,a.next),l=In(l,l.next),qi(a,e,t,n,i,s,0),void qi(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function od(r,e){return r.x-e.x}function ld(r,e){let t=function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let v=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(v<=c&&v>l&&(l=v,a=o.x<o.next.x?o:o.next,v===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,m=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&xi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Xi(o,i)&&(f<m||f===m&&(o.x>a.x||o.x===a.x&&cd(a,o)))&&(a=o,m=f)),o=o.next;while(o!==u);return a}(r,e);if(!t)return e;let n=Il(t,r);return In(n,n.next),In(t,t.next)}function cd(r,e){return Ze(r.prev,r,e.prev)<0&&Ze(e.next,r,r.next)<0}function Pa(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function hd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function xi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function ud(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Dl(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&(Xi(r,e)&&Xi(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(Ze(r.prev,r,e.prev)||Ze(r,e.prev,e))||hs(r,e)&&Ze(r.prev,r,r.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function hs(r,e){return r.x===e.x&&r.y===e.y}function Dl(r,e,t,n){let i=ds(Ze(r,e,t)),s=ds(Ze(r,e,n)),a=ds(Ze(t,n,r)),o=ds(Ze(t,n,e));return i!==s&&a!==o||!(i!==0||!us(r,t,e))||!(s!==0||!us(r,n,e))||!(a!==0||!us(t,r,n))||!(o!==0||!us(t,e,n))}function us(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ds(r){return r>0?1:r<0?-1:0}function Xi(r,e){return Ze(r.prev,r,r.next)<0?Ze(r,e,r.next)>=0&&Ze(r,r.prev,e)>=0:Ze(r,e,r.prev)<0||Ze(r,r.next,e)<0}function Il(r,e){let t=new Da(r.i,r.x,r.y),n=new Da(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Nl(r,e,t,n){let i=new Da(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Da(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class Ht{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return Ht.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Ol(e),zl(n,e);let a=e.length;t.forEach(Ol);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,zl(n,t[l]);let o=nd(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Ol(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function zl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Zi extends Ee{constructor(e=new Dn([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:dd,y,M,b,S,R,P=!1;_&&(y=_.getSpacedPoints(h),P=!0,d=!1,M=_.computeFrenetFrames(h,!1),b=new T,S=new T,R=new T),d||(v=0,p=0,f=0,m=0);let U=o.extractPoints(c),F=U.shape,D=U.holes;if(!Ht.isClockWise(F)){F=F.reverse();for(let O=0,C=D.length;O<C;O++){let z=D[O];Ht.isClockWise(z)&&(D[O]=z.reverse())}}let Y=Ht.triangulateShape(F,D),Q=F;for(let O=0,C=D.length;O<C;O++){let z=D[O];F=F.concat(z)}function q(O,C,z){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().multiplyScalar(z).add(O)}let ie=F.length,ne=Y.length;function k(O,C,z){let w,N,I,H=O.x-C.x,V=O.y-C.y,X=z.x-O.x,oe=z.y-O.y,de=H*H+V*V,ge=H*oe-V*X;if(Math.abs(ge)>Number.EPSILON){let le=Math.sqrt(de),xe=Math.sqrt(X*X+oe*oe),Ce=C.x-V/le,_e=C.y+H/le,We=((z.x-oe/xe-Ce)*oe-(z.y+X/xe-_e)*X)/(H*oe-V*X);w=Ce+H*We-O.x,N=_e+V*We-O.y;let St=w*w+N*N;if(St<=2)return new $(w,N);I=Math.sqrt(St/2)}else{let le=!1;H>Number.EPSILON?X>Number.EPSILON&&(le=!0):H<-Number.EPSILON?X<-Number.EPSILON&&(le=!0):Math.sign(V)===Math.sign(oe)&&(le=!0),le?(w=-V,N=H,I=Math.sqrt(de)):(w=H,N=V,I=Math.sqrt(de/2))}return new $(w/I,N/I)}let W=[];for(let O=0,C=Q.length,z=C-1,w=O+1;O<C;O++,z++,w++)z===C&&(z=0),w===C&&(w=0),W[O]=k(Q[O],Q[z],Q[w]);let ee=[],Z,J=W.concat();for(let O=0,C=D.length;O<C;O++){let z=D[O];Z=[];for(let w=0,N=z.length,I=N-1,H=w+1;w<N;w++,I++,H++)I===N&&(I=0),H===N&&(H=0),Z[w]=k(z[w],z[I],z[H]);ee.push(Z),J=J.concat(Z)}for(let O=0;O<v;O++){let C=O/v,z=p*Math.cos(C*Math.PI/2),w=f*Math.sin(C*Math.PI/2)+m;for(let N=0,I=Q.length;N<I;N++){let H=q(Q[N],W[N],w);pe(H.x,H.y,-z)}for(let N=0,I=D.length;N<I;N++){let H=D[N];Z=ee[N];for(let V=0,X=H.length;V<X;V++){let oe=q(H[V],Z[V],w);pe(oe.x,oe.y,-z)}}}let ue=f+m;for(let O=0;O<ie;O++){let C=d?q(F[O],J[O],ue):F[O];P?(S.copy(M.normals[0]).multiplyScalar(C.x),b.copy(M.binormals[0]).multiplyScalar(C.y),R.copy(y[0]).add(S).add(b),pe(R.x,R.y,R.z)):pe(C.x,C.y,0)}for(let O=1;O<=h;O++)for(let C=0;C<ie;C++){let z=d?q(F[C],J[C],ue):F[C];P?(S.copy(M.normals[O]).multiplyScalar(z.x),b.copy(M.binormals[O]).multiplyScalar(z.y),R.copy(y[O]).add(S).add(b),pe(R.x,R.y,R.z)):pe(z.x,z.y,u/h*O)}for(let O=v-1;O>=0;O--){let C=O/v,z=p*Math.cos(C*Math.PI/2),w=f*Math.sin(C*Math.PI/2)+m;for(let N=0,I=Q.length;N<I;N++){let H=q(Q[N],W[N],w);pe(H.x,H.y,u+z)}for(let N=0,I=D.length;N<I;N++){let H=D[N];Z=ee[N];for(let V=0,X=H.length;V<X;V++){let oe=q(H[V],Z[V],w);P?pe(oe.x,oe.y+y[h-1].y,y[h-1].x+z):pe(oe.x,oe.y,u+z)}}}function Ae(O,C){let z=O.length;for(;--z>=0;){let w=z,N=z-1;N<0&&(N=O.length-1);for(let I=0,H=h+2*v;I<H;I++){let V=ie*I,X=ie*(I+1);L(C+w+V,C+N+V,C+N+X,C+w+X)}}}function pe(O,C,z){l.push(O),l.push(C),l.push(z)}function Se(O,C,z){A(O),A(C),A(z);let w=i.length/3,N=x.generateTopUV(n,i,w-3,w-2,w-1);B(N[0]),B(N[1]),B(N[2])}function L(O,C,z,w){A(O),A(C),A(w),A(C),A(z),A(w);let N=i.length/3,I=x.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);B(I[0]),B(I[1]),B(I[3]),B(I[1]),B(I[2]),B(I[3])}function A(O){i.push(l[3*O+0]),i.push(l[3*O+1]),i.push(l[3*O+2])}function B(O){s.push(O.x),s.push(O.y)}(function(){let O=i.length/3;if(d){let C=0,z=ie*C;for(let w=0;w<ne;w++){let N=Y[w];Se(N[2]+z,N[1]+z,N[0]+z)}C=h+2*v,z=ie*C;for(let w=0;w<ne;w++){let N=Y[w];Se(N[0]+z,N[1]+z,N[2]+z)}}else{for(let C=0;C<ne;C++){let z=Y[C];Se(z[2],z[1],z[0])}for(let C=0;C<ne;C++){let z=Y[C];Se(z[0]+ie*h,z[1]+ie*h,z[2]+ie*h)}}n.addGroup(O,i.length/3-O,0)})(),function(){let O=i.length/3,C=0;Ae(Q,C),C+=Q.length;for(let z=0,w=D.length;z<w;z++){let N=D[z];Ae(N,C),C+=N.length}n.addGroup(O,i.length/3-O,1)}()}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(s,2)),this.computeVertexNormals()}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new La[i.type]().fromJSON(i)),new Zi(n,e.options)}}let dd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new $(s,a),new $(o,l),new $(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],m=e[3*s],v=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new $(a,1-l),new $(c,1-u),new $(d,1-f),new $(m,1-_)]:[new $(o,1-l),new $(h,1-u),new $(p,1-f),new $(v,1-_)]}};class Ji extends Qt{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ji(e.radius,e.detail)}}class _i extends Qt{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _i(e.radius,e.detail)}}class Ki extends Ee{constructor(e=.5,t=1,n=8,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new T,f=new $;for(let m=0;m<=i;m++){for(let v=0;v<=n;v++){let _=s+v/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let m=0;m<i;m++){let v=m*(n+1);for(let _=0;_<n;_++){let x=_+v,y=x,M=x+n+1,b=x+n+2,S=x+1;o.push(y,M,S),o.push(M,b,S)}}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}static fromJSON(e){return new Ki(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $i extends Ee{constructor(e=new Dn([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Ht.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,_=f.length;v<_;v++){let x=f[v];Ht.isClockWise(x)===!0&&(f[v]=x.reverse())}let m=Ht.triangulateShape(p,f);for(let v=0,_=f.length;v<_;v++){let x=f[v];p=p.concat(x)}for(let v=0,_=p.length;v<_;v++){let x=p[v];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let v=0,_=m.length;v<_;v++){let x=m[v],y=x[0]+u,M=x[1]+u,b=x[2]+u;n.push(y,M,b),l+=3}}this.setIndex(n),this.setAttribute("position",new he(i,3)),this.setAttribute("normal",new he(s,3)),this.setAttribute("uv",new he(a,2))}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new $i(n,e.curveSegments)}}class yi extends Ee{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,p=[],f=[],m=[],v=[];for(let _=0;_<=n;_++){let x=[],y=_/n,M=0;_==0&&a==0?M=.5/t:_==n&&l==Math.PI&&(M=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(i+S*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+S*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),v.push(S+M,1-y),x.push(c++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){let y=h[_][x+1],M=h[_][x],b=h[_+1][x],S=h[_+1][x+1];(_!==0||a>0)&&p.push(y,M,S),(_!==n-1||l<Math.PI)&&p.push(M,b,S)}this.setIndex(p),this.setAttribute("position",new he(f,3)),this.setAttribute("normal",new he(m,3)),this.setAttribute("uv",new he(v,2))}static fromJSON(e){return new yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qi extends Qt{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qi(e.radius,e.detail)}}class er extends Ee{constructor(e=1,t=.4,n=8,i=6,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let m=f/i*s,v=p/n*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(m),u.y=(e+t*Math.cos(v))*Math.sin(m),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let m=(i+1)*p+f-1,v=(i+1)*(p-1)+f-1,_=(i+1)*(p-1)+f,x=(i+1)*p+f;a.push(m,v,x),a.push(v,_,x)}this.setIndex(a),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}static fromJSON(e){return new er(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tr extends Ee{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new T,d=new T,p=new T,f=new T,m=new T,v=new T,_=new T;for(let y=0;y<=n;++y){let M=y/n*s*Math.PI*2;x(M,s,a,e,p),x(M+.01,s,a,e,f),v.subVectors(f,p),_.addVectors(f,p),m.crossVectors(v,_),_.crossVectors(m,v),m.normalize(),_.normalize();for(let b=0;b<=i;++b){let S=b/i*Math.PI*2,R=-t*Math.cos(S),P=t*Math.sin(S);u.x=p.x+(R*_.x+P*m.x),u.y=p.y+(R*_.y+P*m.y),u.z=p.z+(R*_.z+P*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/n),h.push(b/i)}}for(let y=1;y<=n;y++)for(let M=1;M<=i;M++){let b=(i+1)*(y-1)+(M-1),S=(i+1)*y+(M-1),R=(i+1)*y+M,P=(i+1)*(y-1)+M;o.push(b,S,P),o.push(S,R,P)}function x(y,M,b,S,R){let P=Math.cos(y),U=Math.sin(y),F=b/M*y,D=Math.cos(F);R.x=S*(2+D)*.5*P,R.y=S*(2+D)*U*.5,R.z=S*Math.sin(F)*.5}this.setIndex(o),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}static fromJSON(e){return new tr(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class nr extends Ee{constructor(e=new Ea(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new $,h=new T,u=[],d=[],p=[],f=[];function m(v){h=e.getPointAt(v/t,h);let _=a.normals[v],x=a.binormals[v];for(let y=0;y<=i;y++){let M=y/i*Math.PI*2,b=Math.sin(M),S=-Math.cos(M);l.x=S*_.x+b*x.x,l.y=S*_.y+b*x.y,l.z=S*_.z+b*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),function(){for(let v=0;v<=t;v++)for(let _=0;_<=i;_++)c.x=v/t,c.y=_/i,p.push(c.x,c.y)}(),function(){for(let v=1;v<=t;v++)for(let _=1;_<=i;_++){let x=(i+1)*(v-1)+(_-1),y=(i+1)*v+(_-1),M=(i+1)*v+_,b=(i+1)*(v-1)+_;f.push(x,y,b),f.push(y,M,b)}}()})(),this.setIndex(f),this.setAttribute("position",new he(u,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2))}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new nr(new La[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ul extends Ee{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let m=0;m<3;m++){let v=o.getX(p+m),_=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,v),s.fromBufferAttribute(a,_),Bl(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Bl(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new he(t,3))}}}function Bl(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Fl=Object.freeze({__proto__:null,BoxGeometry:pn,CapsuleGeometry:Vi,CircleGeometry:Hi,ConeGeometry:Wi,CylinderGeometry:Pn,DodecahedronGeometry:ji,EdgesGeometry:Rl,ExtrudeGeometry:Zi,IcosahedronGeometry:Ji,LatheGeometry:vi,OctahedronGeometry:_i,PlaneGeometry:oi,PolyhedronGeometry:Qt,RingGeometry:Ki,ShapeGeometry:$i,SphereGeometry:yi,TetrahedronGeometry:Qi,TorusGeometry:er,TorusKnotGeometry:tr,TubeGeometry:nr,WireframeGeometry:Ul});class kl extends dt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ce(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Gl extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ia extends dt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vl extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hl extends dt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wl extends dt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ce(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jl extends dt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ql extends dt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xl extends dt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ce(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yl extends ft{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Pt(r,e,t){return Na(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Nn(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Na(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Zl(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t}function Oa(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function za(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var pd=Object.freeze({__proto__:null,arraySlice:Pt,convertArray:Nn,isTypedArray:Na,getKeyframeOrder:Zl,sortedArray:Oa,flattenJSON:za,subclip:function(r,e,t,n,i=30){let s=r.clone();s.name=e;let a=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let p=0;p<c.times.length;++p){let f=c.times[p]*i;if(!(f<t||f>=n)){u.push(c.times[p]);for(let m=0;m<h;++m)d.push(c.values[p*h+m])}}u.length!==0&&(c.times=Nn(u,c.times.constructor),c.values=Nn(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);let i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(_){return _.name===o.name&&_.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);let f=o.times.length-1,m;if(s<=o.times[0]){let _=h,x=u-h;m=Pt(o.values,_,x)}else if(s>=o.times[f]){let _=f*u+h,x=_+u-h;m=Pt(o.values,_,x)}else{let _=o.createInterpolant(),x=h,y=u-h;_.evaluate(s),m=Pt(_.resultBuffer,x,y)}l==="quaternion"&&new xt().fromArray(m).normalize().conjugate().toArray(m);let v=c.times.length;for(let _=0;_<v;++_){let x=_*p+d;if(l==="quaternion")xt.multiplyQuaternionsFlat(c.values,x,m,0,c.values,x);else{let y=p-2*d;for(let M=0;M<y;++M)c.values[x+M]-=m[M]}}}return r.blendMode=2501,r}});class ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(e>=s)break e;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Jl extends ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*n-t;break;case 2402:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),m=f*f,v=m*f,_=-d*v+2*d*m-d*f,x=(1+d)*v+(-1.5-2*d)*m+(-.5+d)*f+1,y=(-1-p)*v+(1.5+p)*m+.5*f,M=p*v-p*m;for(let b=0;b!==o;++b)s[b]=_*a[h+b]+x*a[c+b]+y*a[l+b]+M*a[u+b];return s}}class Ua extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Kl extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nn(t,this.TimeBufferType),this.values=Nn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nn(e.times,Array),values:Nn(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=Pt(n,s,a),this.values=Pt(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Na(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=Pt(this.times),t=Pt(this.values),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Pt(e,0,a),this.values=Pt(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=Pt(this.times,0),t=Pt(this.values,0),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Bt.prototype.TimeBufferType=Float32Array,Bt.prototype.ValueBufferType=Float32Array,Bt.prototype.DefaultInterpolation=2301;class On extends Bt{}On.prototype.ValueTypeName="bool",On.prototype.ValueBufferType=Array,On.prototype.DefaultInterpolation=2300,On.prototype.InterpolantFactoryMethodLinear=void 0,On.prototype.InterpolantFactoryMethodSmooth=void 0;class Ba extends Bt{}Ba.prototype.ValueTypeName="color";class rr extends Bt{}rr.prototype.ValueTypeName="number";class $l extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)xt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Mi extends Bt{InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}}Mi.prototype.ValueTypeName="quaternion",Mi.prototype.DefaultInterpolation=2301,Mi.prototype.InterpolantFactoryMethodSmooth=void 0;class zn extends Bt{}zn.prototype.ValueTypeName="string",zn.prototype.ValueBufferType=Array,zn.prototype.DefaultInterpolation=2300,zn.prototype.InterpolantFactoryMethodLinear=void 0,zn.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Bt{}sr.prototype.ValueTypeName="vector";class ar{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_t(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(md(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Bt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=Zl(l);l=Oa(l,1,h),c=Oa(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new rr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let m=[],v=[];za(d,m,v,p),m.length!==0&&f.push(new h(u,m,v))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let m=[],v=[];for(let _=0;_!==u[p].morphTargets.length;++_){let x=u[p];m.push(x.time),v.push(x.morphTarget===f?1:0)}i.push(new rr(".morphTargetInfluence["+f+"]",m,v))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(sr,d+".position",u,"pos",i),n(Mi,d+".quaternion",u,"rot",i),n(sr,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function md(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Ba;case"quaternion":return Mi;case"bool":case"boolean":return On;case"string":return zn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){let t=[],n=[];za(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}let Un={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fa{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}}let Ql=new Fa;class bt{constructor(e){this.manager=e!==void 0?e:Ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}let en={};class fd extends Error{constructor(e,t){super(e),this.response=t}}class tn extends bt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Un.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(en[e]!==void 0)return void en[e].push({onLoad:t,onProgress:n,onError:i});en[e]=[],en[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=en[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,m=0,v=new ReadableStream({start(_){(function x(){u.read().then(({done:y,value:M})=>{if(y)_.close();else{m+=M.byteLength;let b=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:p});for(let S=0,R=h.length;S<R;S++){let P=h[S];P.onProgress&&P.onProgress(b)}_.enqueue(M),x()}})})()}});return new Response(v)}throw new fd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Un.add(e,c);let h=en[e];delete en[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=en[e];if(h===void 0)throw this.manager.itemError(e),c;delete en[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class or extends bt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Un.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Ti("img");function l(){h(),Un.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class gn extends Ne{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ec extends gn{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.groundColor=new ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}let ka=new Me,tc=new T,nc=new T;class Ga{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gd extends Ga{constructor(){super(new lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Si*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ic extends gn{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}let rc=new Me,lr=new T,Va=new T;class vd extends Ga{constructor(){super(new lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc)}}class sc extends gn{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vd}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xd extends Ga{constructor(){super(new Vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ac extends gn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DefaultUp),this.updateMatrix(),this.target=new Ne,this.shadow=new xd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oc extends gn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class lc extends gn{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class cc{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*i*1.092548),t.addScaledVector(a[5],i*s*1.092548),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],n*s*1.092548),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*i),t.addScaledVector(a[2],1.023328*s),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*i),t.addScaledVector(a[5],.858086*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],.858086*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+3*i);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+3*i);return e}static getBasisAt(e,t){let n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}class ps extends gn{constructor(e=new cc,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class ms extends bt{constructor(e){super(e),this.textures={}}load(e,t,n,i){let s=this,a=new tn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}let i=ms.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let s in e.uniforms){let a=e.uniforms[s];switch(i.uniforms[s]={},a.type){case"t":i.uniforms[s].value=n(a.value);break;case"c":i.uniforms[s].value=new ce().setHex(a.value);break;case"v2":i.uniforms[s].value=new $().fromArray(a.value);break;case"v3":i.uniforms[s].value=new T().fromArray(a.value);break;case"v4":i.uniforms[s].value=new ze().fromArray(a.value);break;case"m3":i.uniforms[s].value=new vt().fromArray(a.value);break;case"m4":i.uniforms[s].value=new Me().fromArray(a.value);break;default:i.uniforms[s].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let s in e.extensions)i.extensions[s]=e.extensions[s];if(e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),i.normalScale=new $().fromArray(s)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new $().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){return new{ShadowMaterial:kl,SpriteMaterial:ma,RawShaderMaterial:Gl,ShaderMaterial:Gt,PointsMaterial:xa,MeshPhysicalMaterial:Vl,MeshStandardMaterial:Ia,MeshPhongMaterial:Hl,MeshToonMaterial:Wl,MeshNormalMaterial:jl,MeshLambertMaterial:ql,MeshDepthMaterial:ua,MeshDistanceMaterial:da,MeshBasicMaterial:cn,MeshMatcapMaterial:Xl,LineDashedMaterial:Yl,LineBasicMaterial:ft,Material:dt}[e]}}class Ha{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hc extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class uc extends bt{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new tn(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(u,d){if(t[d]!==void 0)return t[d];let p=u.interleavedBuffers[d],f=function(_,x){if(n[x]!==void 0)return n[x];let y=_.arrayBuffers[x],M=new Uint32Array(y).buffer;return n[x]=M,M}(u,p.buffer),m=qn(p.type,f),v=new Yr(m,p.stride);return v.uuid=p.uuid,t[d]=v,v}let s=e.isInstancedBufferGeometry?new hc:new Ee,a=e.data.index;if(a!==void 0){let u=qn(a.type,a.array);s.setIndex(new ke(u,1))}let o=e.data.attributes;for(let u in o){let d=o[u],p;if(d.isInterleavedBufferAttribute){let f=i(e.data,d.data);p=new Rn(f,d.itemSize,d.offset,d.normalized)}else{let f=qn(d.type,d.array);p=new(d.isInstancedBufferAttribute?gi:ke)(f,d.itemSize,d.normalized)}d.name!==void 0&&(p.name=d.name),d.usage!==void 0&&p.setUsage(d.usage),d.updateRange!==void 0&&(p.updateRange.offset=d.updateRange.offset,p.updateRange.count=d.updateRange.count),s.setAttribute(u,p)}let l=e.data.morphAttributes;if(l)for(let u in l){let d=l[u],p=[];for(let f=0,m=d.length;f<m;f++){let v=d[f],_;if(v.isInterleavedBufferAttribute){let x=i(e.data,v.data);_=new Rn(x,v.itemSize,v.offset,v.normalized)}else{let x=qn(v.type,v.array);_=new ke(x,v.itemSize,v.normalized)}v.name!==void 0&&(_.name=v.name),p.push(_)}s.morphAttributes[u]=p}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);let c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let u=0,d=c.length;u!==d;++u){let p=c[u];s.addGroup(p.start,p.count,p.materialIndex)}let h=e.data.boundingSphere;if(h!==void 0){let u=new T;h.center!==void 0&&u.fromArray(h.center),s.boundingSphere=new Cn(u,h.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}let _d={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},dc={RepeatWrapping:1e3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},pc={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008},fs;class Wa{static getContext(){return fs===void 0&&(fs=new(window.AudioContext||window.webkitAudioContext)),fs}static setContext(e){fs=e}}let mc=new Me,fc=new Me,Bn=new Me;class gc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=vc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vc(){return(typeof performance>"u"?Date:performance).now()}let Fn=new T,xc=new xt,yd=new T,kn=new T;class _c extends Ne{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0)return void console.warn("THREE.Audio: Audio is already playing.");if(this.hasPlaybackControl===!1)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}let Gn=new T,yc=new xt,Md=new T,Vn=new T;class Mc{constructor(e,t,n){let i,s,a;switch(this.binding=e,this.valueSize=n,t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*n);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;xt.multiplyQuaternionsFlat(e,a,e,t,e,n),xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}}let bd="\\[\\]\\.:\\/",Sd=new RegExp("[\\[\\]\\.:\\/]","g"),ja="[^\\[\\]\\.:\\/]",wd="[^"+bd.replace("\\.","")+"]",Td=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",ja)+/(WCOD+)?/.source.replace("WCOD",wd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja)+"$"),Ad=["material","materials","bones","map"];class Ie{constructor(e,t,n){this.path=t,this.parsedPath=n||Ie.parseTrackName(t),this.node=Ie.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ie.Composite(e,t,n):new Ie(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sd,"")}static parseTrackName(e){let t=Td.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ad.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Ie.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ie.Composite=class{constructor(r,e,t){let n=t||Ie.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray],Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ed{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled)return void this._updateWeight(e);let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===2501)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===2202;if(e===0)return s===-1?i:a&&(1&s)==1?t-i:i;if(n===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else{if(!(i<0)){this.time=i;break e}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(1&s)==1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=e?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=t?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}let Cd=new Float32Array(1);class qa{constructor(e){this.value=e}clone(){return new qa(this.value.clone===void 0?this.value:this.value.clone())}}let Ld=0;function bc(r,e){return r.distance-e.distance}function Xa(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Xa(i[s],e,t,!0)}}let Sc=new $,wc=new T,gs=new T,Tc=new T,vn=new T,vs=new Me,Ya=new Me;function Ac(r){let e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Ac(r.children[t]));return e}let Rd=new T,Ec=new ce,Cc=new ce,Lc=new T,xs=new T,Rc=new T,_s=new T,Je=new Fr;function $e(r,e,t,n,i,s,a){_s.set(i,s,a).unproject(n);let o=e[r];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],_s.x,_s.y,_s.z)}}let ys=new wn,Pc=new T,Ms,Za,nn=Pd();function Pd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(8388608&c)==0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Dd=Object.freeze({__proto__:null,toHalfFloat:function(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Ke(r,-65504,65504),nn.floatView[0]=r;let e=nn.uint32View[0],t=e>>23&511;return nn.baseTable[t]+((8388607&e)>>nn.shiftTable[t])},fromHalfFloat:function(r){let e=r>>10;return nn.uint32View[0]=nn.mantissaTable[nn.offsetTable[e]+(1023&r)]+nn.exponentTable[e],nn.floatView[0]}});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:re}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=re),g.ACESFilmicToneMapping=4,g.AddEquation=100,g.AddOperation=2,g.AdditiveAnimationBlendMode=2501,g.AdditiveBlending=2,g.AlphaFormat=1021,g.AlwaysDepth=1,g.AlwaysStencilFunc=519,g.AmbientLight=oc,g.AmbientLightProbe=class extends ps{constructor(r,e=1){super(void 0,e),this.isAmbientLightProbe=!0;let t=new ce().set(r);this.sh.coefficients[0].set(t.r,t.g,t.b).multiplyScalar(2*Math.sqrt(Math.PI))}},g.AnimationClip=ar,g.AnimationLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=this,s=new tn(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{e(i.parse(JSON.parse(a)))}catch(o){n?n(o):console.error(o),i.manager.itemError(r)}},t,n)}parse(r){let e=[];for(let t=0;t<r.length;t++){let n=ar.parse(r[t]);e.push(n)}return e}},g.AnimationMixer=class extends qt{constructor(r){super(),this._root=r,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(r,e){let t=r._localRoot||this._root,n=r._clip.tracks,i=n.length,s=r._propertyBindings,a=r._interpolants,o=t.uuid,l=this._bindingsByRootAndName,c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==i;++h){let u=n[h],d=u.name,p=c[d];if(p!==void 0)++p.referenceCount,s[h]=p;else{if(p=s[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,d));continue}let f=e&&e._propertyBindings[h].binding.parsedPath;p=new Mc(Ie.create(t,d,f),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,d),s[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(r){if(!this._isActiveAction(r)){if(r._cacheIndex===null){let t=(r._localRoot||this._root).uuid,n=r._clip.uuid,i=this._actionsByClip[n];this._bindAction(r,i&&i.knownActions[0]),this._addInactiveAction(r,n,t)}let e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){let i=e[t];i.useCount++==0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(r)}}_deactivateAction(r){if(this._isActiveAction(r)){let e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){let i=e[t];--i.useCount==0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(r)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let r=this;this.stats={actions:{get total(){return r._actions.length},get inUse(){return r._nActiveActions}},bindings:{get total(){return r._bindings.length},get inUse(){return r._nActiveBindings}},controlInterpolants:{get total(){return r._controlInterpolants.length},get inUse(){return r._nActiveControlInterpolants}}}}_isActiveAction(r){let e=r._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(r,e,t){let n=this._actions,i=this._actionsByClip,s=i[e];if(s===void 0)s={knownActions:[r],actionByRoot:{}},r._byClipCacheIndex=0,i[e]=s;else{let a=s.knownActions;r._byClipCacheIndex=a.length,a.push(r)}r._cacheIndex=n.length,n.push(r),s.actionByRoot[t]=r}_removeInactiveAction(r){let e=this._actions,t=e[e.length-1],n=r._cacheIndex;t._cacheIndex=n,e[n]=t,e.pop(),r._cacheIndex=null;let i=r._clip.uuid,s=this._actionsByClip,a=s[i],o=a.knownActions,l=o[o.length-1],c=r._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),r._byClipCacheIndex=null,delete a.actionByRoot[(r._localRoot||this._root).uuid],o.length===0&&delete s[i],this._removeInactiveBindingsForAction(r)}_removeInactiveBindingsForAction(r){let e=r._propertyBindings;for(let t=0,n=e.length;t!==n;++t){let i=e[t];--i.referenceCount==0&&this._removeInactiveBinding(i)}}_lendAction(r){let e=this._actions,t=r._cacheIndex,n=this._nActiveActions++,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_takeBackAction(r){let e=this._actions,t=r._cacheIndex,n=--this._nActiveActions,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_addInactiveBinding(r,e,t){let n=this._bindingsByRootAndName,i=this._bindings,s=n[e];s===void 0&&(s={},n[e]=s),s[t]=r,r._cacheIndex=i.length,i.push(r)}_removeInactiveBinding(r){let e=this._bindings,t=r.binding,n=t.rootNode.uuid,i=t.path,s=this._bindingsByRootAndName,a=s[n],o=e[e.length-1],l=r._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[i],Object.keys(a).length===0&&delete s[n]}_lendBinding(r){let e=this._bindings,t=r._cacheIndex,n=this._nActiveBindings++,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_takeBackBinding(r){let e=this._bindings,t=r._cacheIndex,n=--this._nActiveBindings,i=e[n];r._cacheIndex=n,e[n]=r,i._cacheIndex=t,e[t]=i}_lendControlInterpolant(){let r=this._controlInterpolants,e=this._nActiveControlInterpolants++,t=r[e];return t===void 0&&(t=new Ua(new Float32Array(2),new Float32Array(2),1,Cd),t.__cacheIndex=e,r[e]=t),t}_takeBackControlInterpolant(r){let e=this._controlInterpolants,t=r.__cacheIndex,n=--this._nActiveControlInterpolants,i=e[n];r.__cacheIndex=n,e[n]=r,i.__cacheIndex=t,e[t]=i}clipAction(r,e,t){let n=e||this._root,i=n.uuid,s=typeof r=="string"?ar.findByName(n,r):r,a=s!==null?s.uuid:r,o=this._actionsByClip[a],l=null;if(t===void 0&&(t=s!==null?s.blendMode:2500),o!==void 0){let h=o.actionByRoot[i];if(h!==void 0&&h.blendMode===t)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let c=new Ed(this,s,e,t);return this._bindAction(c,l),this._addInactiveAction(c,a,i),c}existingAction(r,e){let t=e||this._root,n=t.uuid,i=typeof r=="string"?ar.findByName(t,r):r,s=i?i.uuid:r,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){let r=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)r[e].stop();return this}update(r){r*=this.timeScale;let e=this._actions,t=this._nActiveActions,n=this.time+=r,i=Math.sign(r),s=this._accuIndex^=1;for(let l=0;l!==t;++l)e[l]._update(n,r,i,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(r){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(r)}getRoot(){return this._root}uncacheClip(r){let e=this._actions,t=r.uuid,n=this._actionsByClip,i=n[t];if(i!==void 0){let s=i.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let c=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,e[c]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete n[t]}}uncacheRoot(r){let e=r.uuid,t=this._actionsByClip;for(let i in t){let s=t[i].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let n=this._bindingsByRootAndName[e];if(n!==void 0)for(let i in n){let s=n[i];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(r,e){let t=this.existingAction(r,e);t!==null&&(this._deactivateAction(t),this._removeInactiveAction(t))}},g.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=_t(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let r={};this._indicesByUUID=r;for(let t=0,n=arguments.length;t!==n;++t)r[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let r=this._objects,e=this._indicesByUUID,t=this._paths,n=this._parsedPaths,i=this._bindings,s=i.length,a,o=r.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){let u=arguments[c],d=u.uuid,p=e[d];if(p===void 0){p=o++,e[d]=p,r.push(u);for(let f=0,m=s;f!==m;++f)i[f].push(new Ie(u,t[f],n[f]))}else if(p<l){a=r[p];let f=--l,m=r[f];e[m.uuid]=p,r[p]=m,e[d]=f,r[f]=u;for(let v=0,_=s;v!==_;++v){let x=i[v],y=x[f],M=x[p];x[p]=y,M===void 0&&(M=new Ie(u,t[v],n[v])),x[f]=M}}else r[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let r=this._objects,e=this._indicesByUUID,t=this._bindings,n=t.length,i=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){let o=arguments[s],l=o.uuid,c=e[l];if(c!==void 0&&c>=i){let h=i++,u=r[h];e[u.uuid]=c,r[c]=u,e[l]=h,r[h]=o;for(let d=0,p=n;d!==p;++d){let f=t[d],m=f[h],v=f[c];f[c]=m,f[h]=v}}}this.nCachedObjects_=i}uncache(){let r=this._objects,e=this._indicesByUUID,t=this._bindings,n=t.length,i=this.nCachedObjects_,s=r.length;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a].uuid,c=e[l];if(c!==void 0)if(delete e[l],c<i){let h=--i,u=r[h],d=--s,p=r[d];e[u.uuid]=c,r[c]=u,e[p.uuid]=h,r[h]=p,r.pop();for(let f=0,m=n;f!==m;++f){let v=t[f],_=v[h],x=v[d];v[c]=_,v[h]=x,v.pop()}}else{let h=--s,u=r[h];h>0&&(e[u.uuid]=c),r[c]=u,r.pop();for(let d=0,p=n;d!==p;++d){let f=t[d];f[c]=f[h],f.pop()}}}this.nCachedObjects_=i}subscribe_(r,e){let t=this._bindingsIndicesByPath,n=t[r],i=this._bindings;if(n!==void 0)return i[n];let s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);n=i.length,t[r]=n,s.push(r),a.push(e),i.push(h);for(let u=c,d=o.length;u!==d;++u){let p=o[u];h[u]=new Ie(p,r,e)}return h}unsubscribe_(r){let e=this._bindingsIndicesByPath,t=e[r];if(t!==void 0){let n=this._paths,i=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[r[a]]=t,s[t]=o,s.pop(),i[t]=i[a],i.pop(),n[t]=n[a],n.pop()}}},g.AnimationUtils=pd,g.ArcCurve=wl,g.ArrayCamera=Zo,g.ArrowHelper=class extends Ne{constructor(r=new T(0,0,1),e=new T(0,0,0),t=1,n=16776960,i=.2*t,s=.2*i){super(),this.type="ArrowHelper",Ms===void 0&&(Ms=new Ee,Ms.setAttribute("position",new he([0,0,0,0,1,0],3)),Za=new Pn(0,.5,1,5,1),Za.translate(0,-.5,0)),this.position.copy(e),this.line=new fn(Ms,new ft({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ot(Za,new cn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(r),this.setLength(t,i,s)}setDirection(r){if(r.y>.99999)this.quaternion.set(0,0,0,1);else if(r.y<-.99999)this.quaternion.set(1,0,0,0);else{Pc.set(r.z,0,-r.x).normalize();let e=Math.acos(r.y);this.quaternion.setFromAxisAngle(Pc,e)}}setLength(r,e=.2*r,t=.2*e){this.line.scale.set(1,Math.max(1e-4,r-e),1),this.line.updateMatrix(),this.cone.scale.set(t,e,t),this.cone.position.y=r,this.cone.updateMatrix()}setColor(r){this.line.material.color.set(r),this.cone.material.color.set(r)}copy(r){return super.copy(r,!1),this.line.copy(r.line),this.cone.copy(r.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},g.Audio=_c,g.AudioAnalyser=class{constructor(r,e=2048){this.analyser=r.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),r.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let r=0,e=this.getFrequencyData();for(let t=0;t<e.length;t++)r+=e[t];return r/e.length}},g.AudioContext=Wa,g.AudioListener=class extends Ne{constructor(){super(),this.type="AudioListener",this.context=Wa.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new gc}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(r){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=r,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(r){return this.gain.gain.setTargetAtTime(r,this.context.currentTime,.01),this}updateMatrixWorld(r){super.updateMatrixWorld(r);let e=this.context.listener,t=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Fn,xc,yd),kn.set(0,0,-1).applyQuaternion(xc),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Fn.x,n),e.positionY.linearRampToValueAtTime(Fn.y,n),e.positionZ.linearRampToValueAtTime(Fn.z,n),e.forwardX.linearRampToValueAtTime(kn.x,n),e.forwardY.linearRampToValueAtTime(kn.y,n),e.forwardZ.linearRampToValueAtTime(kn.z,n),e.upX.linearRampToValueAtTime(t.x,n),e.upY.linearRampToValueAtTime(t.y,n),e.upZ.linearRampToValueAtTime(t.z,n)}else e.setPosition(Fn.x,Fn.y,Fn.z),e.setOrientation(kn.x,kn.y,kn.z,t.x,t.y,t.z)}},g.AudioLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=this,s=new tn(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(r,function(a){try{let o=a.slice(0);Wa.getContext().decodeAudioData(o,function(l){e(l)})}catch(o){n?n(o):console.error(o),i.manager.itemError(r)}},t,n)}},g.AxesHelper=class extends Vt{constructor(r=1){let e=[0,0,0,r,0,0,0,0,0,0,r,0,0,0,0,0,0,r],t=new Ee;t.setAttribute("position",new he(e,3)),t.setAttribute("color",new he([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(t,new ft({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(r,e,t){let n=new ce,i=this.geometry.attributes.color.array;return n.set(r),n.toArray(i,0),n.toArray(i,3),n.set(e),n.toArray(i,6),n.toArray(i,9),n.set(t),n.toArray(i,12),n.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BackSide=1,g.BasicDepthPacking=3200,g.BasicShadowMap=0,g.Bone=ga,g.BooleanKeyframeTrack=On,g.Box2=class{constructor(r=new $(1/0,1/0),e=new $(-1/0,-1/0)){this.isBox2=!0,this.min=r,this.max=e}set(r,e){return this.min.copy(r),this.max.copy(e),this}setFromPoints(r){this.makeEmpty();for(let e=0,t=r.length;e<t;e++)this.expandByPoint(r[e]);return this}setFromCenterAndSize(r,e){let t=Sc.copy(e).multiplyScalar(.5);return this.min.copy(r).sub(t),this.max.copy(r).add(t),this}clone(){return new this.constructor().copy(this)}copy(r){return this.min.copy(r.min),this.max.copy(r.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(r){return this.isEmpty()?r.set(0,0):r.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(r){return this.isEmpty()?r.set(0,0):r.subVectors(this.max,this.min)}expandByPoint(r){return this.min.min(r),this.max.max(r),this}expandByVector(r){return this.min.sub(r),this.max.add(r),this}expandByScalar(r){return this.min.addScalar(-r),this.max.addScalar(r),this}containsPoint(r){return!(r.x<this.min.x||r.x>this.max.x||r.y<this.min.y||r.y>this.max.y)}containsBox(r){return this.min.x<=r.min.x&&r.max.x<=this.max.x&&this.min.y<=r.min.y&&r.max.y<=this.max.y}getParameter(r,e){return e.set((r.x-this.min.x)/(this.max.x-this.min.x),(r.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(r){return!(r.max.x<this.min.x||r.min.x>this.max.x||r.max.y<this.min.y||r.min.y>this.max.y)}clampPoint(r,e){return e.copy(r).clamp(this.min,this.max)}distanceToPoint(r){return Sc.copy(r).clamp(this.min,this.max).sub(r).length()}intersect(r){return this.min.max(r.min),this.max.min(r.max),this}union(r){return this.min.min(r.min),this.max.max(r.max),this}translate(r){return this.min.add(r),this.max.add(r),this}equals(r){return r.min.equals(this.min)&&r.max.equals(this.max)}},g.Box3=wn,g.Box3Helper=class extends Vt{constructor(r,e=16776960){let t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Ee;n.setIndex(new ke(t,1)),n.setAttribute("position",new he([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new ft({color:e,toneMapped:!1})),this.box=r,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(r){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(r))}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BoxBufferGeometry=class extends pn{constructor(r,e,t,n,i,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(r,e,t,n,i,s)}},g.BoxGeometry=pn,g.BoxHelper=class extends Vt{constructor(r,e=16776960){let t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),i=new Ee;i.setIndex(new ke(t,1)),i.setAttribute("position",new ke(n,3)),super(i,new ft({color:e,toneMapped:!1})),this.object=r,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(r){if(r!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ys.setFromObject(this.object),ys.isEmpty())return;let e=ys.min,t=ys.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(r){return this.object=r,this.update(),this}copy(r,e){return super.copy(r,e),this.object=r.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},g.BufferAttribute=ke,g.BufferGeometry=Ee,g.BufferGeometryLoader=uc,g.ByteType=1010,g.Cache=Un,g.Camera=Fr,g.CameraHelper=class extends Vt{constructor(r){let e=new Ee,t=new ft({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],i=[],s={};function a(p,f){o(p),o(f)}function o(p){n.push(0,0,0),i.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(n.length/3-1)}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new he(n,3)),e.setAttribute("color",new he(i,3)),super(e,t),this.type="CameraHelper",this.camera=r,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();let l=new ce(16755200),c=new ce(16711680),h=new ce(43775),u=new ce(16777215),d=new ce(3355443);this.setColors(l,c,h,u,d)}setColors(r,e,t,n,i){let s=this.geometry.getAttribute("color");s.setXYZ(0,r.r,r.g,r.b),s.setXYZ(1,r.r,r.g,r.b),s.setXYZ(2,r.r,r.g,r.b),s.setXYZ(3,r.r,r.g,r.b),s.setXYZ(4,r.r,r.g,r.b),s.setXYZ(5,r.r,r.g,r.b),s.setXYZ(6,r.r,r.g,r.b),s.setXYZ(7,r.r,r.g,r.b),s.setXYZ(8,r.r,r.g,r.b),s.setXYZ(9,r.r,r.g,r.b),s.setXYZ(10,r.r,r.g,r.b),s.setXYZ(11,r.r,r.g,r.b),s.setXYZ(12,r.r,r.g,r.b),s.setXYZ(13,r.r,r.g,r.b),s.setXYZ(14,r.r,r.g,r.b),s.setXYZ(15,r.r,r.g,r.b),s.setXYZ(16,r.r,r.g,r.b),s.setXYZ(17,r.r,r.g,r.b),s.setXYZ(18,r.r,r.g,r.b),s.setXYZ(19,r.r,r.g,r.b),s.setXYZ(20,r.r,r.g,r.b),s.setXYZ(21,r.r,r.g,r.b),s.setXYZ(22,r.r,r.g,r.b),s.setXYZ(23,r.r,r.g,r.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,t.r,t.g,t.b),s.setXYZ(33,t.r,t.g,t.b),s.setXYZ(34,t.r,t.g,t.b),s.setXYZ(35,t.r,t.g,t.b),s.setXYZ(36,t.r,t.g,t.b),s.setXYZ(37,t.r,t.g,t.b),s.setXYZ(38,n.r,n.g,n.b),s.setXYZ(39,n.r,n.g,n.b),s.setXYZ(40,i.r,i.g,i.b),s.setXYZ(41,i.r,i.g,i.b),s.setXYZ(42,i.r,i.g,i.b),s.setXYZ(43,i.r,i.g,i.b),s.setXYZ(44,i.r,i.g,i.b),s.setXYZ(45,i.r,i.g,i.b),s.setXYZ(46,i.r,i.g,i.b),s.setXYZ(47,i.r,i.g,i.b),s.setXYZ(48,i.r,i.g,i.b),s.setXYZ(49,i.r,i.g,i.b),s.needsUpdate=!0}update(){let r=this.geometry,e=this.pointMap;Je.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),$e("c",e,r,Je,0,0,-1),$e("t",e,r,Je,0,0,1),$e("n1",e,r,Je,-1,-1,-1),$e("n2",e,r,Je,1,-1,-1),$e("n3",e,r,Je,-1,1,-1),$e("n4",e,r,Je,1,1,-1),$e("f1",e,r,Je,-1,-1,1),$e("f2",e,r,Je,1,-1,1),$e("f3",e,r,Je,-1,1,1),$e("f4",e,r,Je,1,1,1),$e("u1",e,r,Je,.7,1.1,-1),$e("u2",e,r,Je,-.7,1.1,-1),$e("u3",e,r,Je,0,2,-1),$e("cf1",e,r,Je,-1,0,1),$e("cf2",e,r,Je,1,0,1),$e("cf3",e,r,Je,0,-1,1),$e("cf4",e,r,Je,0,1,1),$e("cn1",e,r,Je,-1,0,-1),$e("cn2",e,r,Je,1,0,-1),$e("cn3",e,r,Je,0,-1,-1),$e("cn4",e,r,Je,0,1,-1),r.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},g.CanvasTexture=class extends tt{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},g.CapsuleBufferGeometry=class extends Vi{constructor(r,e,t,n){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(r,e,t,n)}},g.CapsuleGeometry=Vi,g.CatmullRomCurve3=Tl,g.CineonToneMapping=3,g.CircleBufferGeometry=class extends Hi{constructor(r,e,t,n){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(r,e,t,n)}},g.CircleGeometry=Hi,g.ClampToEdgeWrapping=1001,g.Clock=gc,g.Color=ce,g.ColorKeyframeTrack=Ba,g.ColorManagement=Et,g.CompressedArrayTexture=class extends ya{constructor(r,e,t,n,i,s){super(r,e,t,i,s),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=1001}},g.CompressedTexture=ya,g.CompressedTextureLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=this,s=[],a=new ya,o=new tn(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(i.withCredentials);let l=0;function c(h){o.load(r[h],function(u){let d=i.parse(u,!0);s[h]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},l+=1,l===6&&(d.mipmapCount===1&&(a.minFilter=1006),a.image=s,a.format=d.format,a.needsUpdate=!0,e&&e(a))},t,n)}if(Array.isArray(r))for(let h=0,u=r.length;h<u;++h)c(h);else o.load(r,function(h){let u=i.parse(h,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let p=0;p<d;p++){s[p]={mipmaps:[]};for(let f=0;f<u.mipmapCount;f++)s[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+f]),s[p].format=u.format,s[p].width=u.width,s[p].height=u.height}a.image=s}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=1006),a.format=u.format,a.needsUpdate=!0,e&&e(a)},t,n);return a}},g.ConeBufferGeometry=class extends Wi{constructor(r,e,t,n,i,s,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(r,e,t,n,i,s,a)}},g.ConeGeometry=Wi,g.CubeCamera=yo,g.CubeReflectionMapping=301,g.CubeRefractionMapping=302,g.CubeTexture=Di,g.CubeTextureLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=new Di,s=new or(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(r[l],function(c){i.images[l]=c,a++,a===6&&(i.needsUpdate=!0,e&&e(i))},void 0,n)}for(let l=0;l<r.length;++l)o(l);return i}},g.CubeUVReflectionMapping=306,g.CubicBezierCurve=Ta,g.CubicBezierCurve3=El,g.CubicInterpolant=Jl,g.CullFaceBack=1,g.CullFaceFront=2,g.CullFaceFrontBack=3,g.CullFaceNone=0,g.Curve=Ut,g.CurvePath=Ll,g.CustomBlending=5,g.CustomToneMapping=5,g.CylinderBufferGeometry=class extends Pn{constructor(r,e,t,n,i,s,a,o){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(r,e,t,n,i,s,a,o)}},g.CylinderGeometry=Pn,g.Cylindrical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.theta=e,this.y=t,this}set(r,e,t){return this.radius=r,this.theta=e,this.y=t,this}copy(r){return this.radius=r.radius,this.theta=r.theta,this.y=r.y,this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+t*t),this.theta=Math.atan2(r,t),this.y=e,this}clone(){return new this.constructor().copy(this)}},g.Data3DTexture=br,g.DataArrayTexture=Ai,g.DataTexture=fi,g.DataTexture2DArray=class extends Ai{constructor(r,e,t,n){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(r,e,t,n)}},g.DataTexture3D=class extends br{constructor(r,e,t,n){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(r,e,t,n)}},g.DataTextureLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=this,s=new fi,a=new tn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(i.withCredentials),a.load(r,function(o){let l=i.parse(o);l&&(l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:1001,s.wrapT=l.wrapT!==void 0?l.wrapT:1001,s.magFilter=l.magFilter!==void 0?l.magFilter:1006,s.minFilter=l.minFilter!==void 0?l.minFilter:1006,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(s.encoding=l.encoding),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=1008),l.mipmapCount===1&&(s.minFilter=1006),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,e&&e(s,l))},t,n),s}},g.DataUtils=Dd,g.DecrementStencilOp=7683,g.DecrementWrapStencilOp=34056,g.DefaultLoadingManager=Ql,g.DepthFormat=1026,g.DepthStencilFormat=1027,g.DepthTexture=Jo,g.DirectionalLight=ac,g.DirectionalLightHelper=class extends Ne{constructor(r,e,t){super(),this.light=r,this.light.updateMatrixWorld(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t,e===void 0&&(e=1);let n=new Ee;n.setAttribute("position",new he([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let i=new ft({fog:!1,toneMapped:!1});this.lightPlane=new fn(n,i),this.add(this.lightPlane),n=new Ee,n.setAttribute("position",new he([0,0,0,0,0,1],3)),this.targetLine=new fn(n,i),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Lc.setFromMatrixPosition(this.light.matrixWorld),xs.setFromMatrixPosition(this.light.target.matrixWorld),Rc.subVectors(xs,Lc),this.lightPlane.lookAt(xs),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(xs),this.targetLine.scale.z=Rc.length()}},g.DiscreteInterpolant=Kl,g.DodecahedronBufferGeometry=class extends ji{constructor(r,e){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(r,e)}},g.DodecahedronGeometry=ji,g.DoubleSide=2,g.DstAlphaFactor=206,g.DstColorFactor=208,g.DynamicCopyUsage=35050,g.DynamicDrawUsage=35048,g.DynamicReadUsage=35049,g.EdgesGeometry=Rl,g.EllipseCurve=rs,g.EqualDepth=4,g.EqualStencilFunc=514,g.EquirectangularReflectionMapping=303,g.EquirectangularRefractionMapping=304,g.Euler=$n,g.EventDispatcher=qt,g.ExtrudeBufferGeometry=class extends Zi{constructor(r,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(r,e)}},g.ExtrudeGeometry=Zi,g.FileLoader=tn,g.Float16BufferAttribute=class extends ke{constructor(r,e,t){super(new Uint16Array(r),e,t),this.isFloat16BufferAttribute=!0}},g.Float32BufferAttribute=he,g.Float64BufferAttribute=class extends ke{constructor(r,e,t){super(new Float64Array(r),e,t)}},g.FloatType=1015,g.Fog=Xr,g.FogExp2=qr,g.FramebufferTexture=class extends tt{constructor(r,e,t){super({width:r,height:e}),this.isFramebufferTexture=!0,this.format=t,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}},g.FrontSide=0,g.Frustum=Gr,g.GLBufferAttribute=class{constructor(r,e,t,n,i){this.isGLBufferAttribute=!0,this.buffer=r,this.type=e,this.itemSize=t,this.elementSize=n,this.count=i,this.version=0}set needsUpdate(r){r===!0&&this.version++}setBuffer(r){return this.buffer=r,this}setType(r,e){return this.type=r,this.elementSize=e,this}setItemSize(r){return this.itemSize=r,this}setCount(r){return this.count=r,this}},g.GLSL1="100",g.GLSL3=Ds,g.GreaterDepth=6,g.GreaterEqualDepth=5,g.GreaterEqualStencilFunc=518,g.GreaterStencilFunc=516,g.GridHelper=class extends Vt{constructor(r=10,e=10,t=4473924,n=8947848){t=new ce(t),n=new ce(n);let i=e/2,s=r/e,a=r/2,o=[],l=[];for(let h=0,u=0,d=-a;h<=e;h++,d+=s){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a);let p=h===i?t:n;p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3,p.toArray(l,u),u+=3}let c=new Ee;c.setAttribute("position",new he(o,3)),c.setAttribute("color",new he(l,3)),super(c,new ft({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},g.Group=hi,g.HalfFloatType=1016,g.HemisphereLight=ec,g.HemisphereLightHelper=class extends Ne{constructor(r,e,t){super(),this.light=r,this.light.updateMatrixWorld(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;let n=new _i(e);n.rotateY(.5*Math.PI),this.material=new cn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let i=n.getAttribute("position"),s=new Float32Array(3*i.count);n.setAttribute("color",new ke(s,3)),this.add(new ot(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let r=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=r.geometry.getAttribute("color");Ec.copy(this.light.color),Cc.copy(this.light.groundColor);for(let t=0,n=e.count;t<n;t++){let i=t<n/2?Ec:Cc;e.setXYZ(t,i.r,i.g,i.b)}e.needsUpdate=!0}r.lookAt(Rd.setFromMatrixPosition(this.light.matrixWorld).negate())}},g.HemisphereLightProbe=class extends ps{constructor(r,e,t=1){super(void 0,t),this.isHemisphereLightProbe=!0;let n=new ce().set(r),i=new ce().set(e),s=new T(n.r,n.g,n.b),a=new T(i.r,i.g,i.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}},g.IcosahedronBufferGeometry=class extends Ji{constructor(r,e){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(r,e)}},g.IcosahedronGeometry=Ji,g.ImageBitmapLoader=class extends bt{constructor(r){super(r),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(r){return this.options=r,this}load(r,e,t,n){r===void 0&&(r=""),this.path!==void 0&&(r=this.path+r),r=this.manager.resolveURL(r);let i=this,s=Un.get(r);if(s!==void 0)return i.manager.itemStart(r),setTimeout(function(){e&&e(s),i.manager.itemEnd(r)},0),s;let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(r,a).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(o){Un.add(r,o),e&&e(o),i.manager.itemEnd(r)}).catch(function(o){n&&n(o),i.manager.itemError(r),i.manager.itemEnd(r)}),i.manager.itemStart(r)}},g.ImageLoader=or,g.ImageUtils=Us,g.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},g.IncrementStencilOp=7682,g.IncrementWrapStencilOp=34055,g.InstancedBufferAttribute=gi,g.InstancedBufferGeometry=hc,g.InstancedInterleavedBuffer=class extends Yr{constructor(r,e,t=1){super(r,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=t}copy(r){return super.copy(r),this.meshPerAttribute=r.meshPerAttribute,this}clone(r){let e=super.clone(r);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(r){let e=super.toJSON(r);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},g.InstancedMesh=ml,g.Int16BufferAttribute=class extends ke{constructor(r,e,t){super(new Int16Array(r),e,t)}},g.Int32BufferAttribute=class extends ke{constructor(r,e,t){super(new Int32Array(r),e,t)}},g.Int8BufferAttribute=class extends ke{constructor(r,e,t){super(new Int8Array(r),e,t)}},g.IntType=1013,g.InterleavedBuffer=Yr,g.InterleavedBufferAttribute=Rn,g.Interpolant=ir,g.InterpolateDiscrete=2300,g.InterpolateLinear=2301,g.InterpolateSmooth=2302,g.InvertStencilOp=5386,g.KeepStencilOp=7680,g.KeyframeTrack=Bt,g.LOD=sl,g.LatheBufferGeometry=class extends vi{constructor(r,e,t,n){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(r,e,t,n)}},g.LatheGeometry=vi,g.Layers=Cr,g.LessDepth=2,g.LessEqualDepth=3,g.LessEqualStencilFunc=515,g.LessStencilFunc=513,g.Light=gn,g.LightProbe=ps,g.Line=fn,g.Line3=class{constructor(r=new T,e=new T){this.start=r,this.end=e}set(r,e){return this.start.copy(r),this.end.copy(e),this}copy(r){return this.start.copy(r.start),this.end.copy(r.end),this}getCenter(r){return r.addVectors(this.start,this.end).multiplyScalar(.5)}delta(r){return r.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(r,e){return this.delta(e).multiplyScalar(r).add(this.start)}closestPointToPointParameter(r,e){wc.subVectors(r,this.start),gs.subVectors(this.end,this.start);let t=gs.dot(gs),n=gs.dot(wc)/t;return e&&(n=Ke(n,0,1)),n}closestPointToPoint(r,e,t){let n=this.closestPointToPointParameter(r,e);return this.delta(t).multiplyScalar(n).add(this.start)}applyMatrix4(r){return this.start.applyMatrix4(r),this.end.applyMatrix4(r),this}equals(r){return r.start.equals(this.start)&&r.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},g.LineBasicMaterial=ft,g.LineCurve=as,g.LineCurve3=Cl,g.LineDashedMaterial=Yl,g.LineLoop=yl,g.LineSegments=Vt,g.LinearEncoding=3e3,g.LinearFilter=1006,g.LinearInterpolant=Ua,g.LinearMipMapLinearFilter=1008,g.LinearMipMapNearestFilter=1007,g.LinearMipmapLinearFilter=1008,g.LinearMipmapNearestFilter=1007,g.LinearSRGBColorSpace=vr,g.LinearToneMapping=1,g.Loader=bt,g.LoaderUtils=Ha,g.LoadingManager=Fa,g.LoopOnce=2200,g.LoopPingPong=2202,g.LoopRepeat=2201,g.LuminanceAlphaFormat=1025,g.LuminanceFormat=1024,g.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},g.Material=dt,g.MaterialLoader=ms,g.MathUtils=lh,g.Matrix3=vt,g.Matrix4=Me,g.MaxEquation=104,g.Mesh=ot,g.MeshBasicMaterial=cn,g.MeshDepthMaterial=ua,g.MeshDistanceMaterial=da,g.MeshLambertMaterial=ql,g.MeshMatcapMaterial=Xl,g.MeshNormalMaterial=jl,g.MeshPhongMaterial=Hl,g.MeshPhysicalMaterial=Vl,g.MeshStandardMaterial=Ia,g.MeshToonMaterial=Wl,g.MinEquation=103,g.MirroredRepeatWrapping=1002,g.MixOperation=1,g.MultiplyBlending=4,g.MultiplyOperation=0,g.NearestFilter=1003,g.NearestMipMapLinearFilter=1005,g.NearestMipMapNearestFilter=1004,g.NearestMipmapLinearFilter=1005,g.NearestMipmapNearestFilter=1004,g.NeverDepth=0,g.NeverStencilFunc=512,g.NoBlending=0,g.NoColorSpace="",g.NoToneMapping=0,g.NormalAnimationBlendMode=2500,g.NormalBlending=1,g.NotEqualDepth=7,g.NotEqualStencilFunc=517,g.NumberKeyframeTrack=rr,g.Object3D=Ne,g.ObjectLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=this,s=this.path===""?Ha.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||s;let a=new tn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(r,function(o){let l=null;try{l=JSON.parse(o)}catch(h){return n!==void 0&&n(h),void console.error("THREE:ObjectLoader: Can't parse "+r+".",h.message)}let c=l.metadata;c!==void 0&&c.type!==void 0&&c.type.toLowerCase()!=="geometry"?i.parse(l,e):console.error("THREE.ObjectLoader: Can't load "+r)},t,n)}async loadAsync(r,e){let t=this.path===""?Ha.extractUrlBase(r):this.path;this.resourcePath=this.resourcePath||t;let n=new tn(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);let i=await n.loadAsync(r,e),s=JSON.parse(i),a=s.metadata;if(a===void 0||a.type===void 0||a.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+r);return await this.parseAsync(s)}parse(r,e){let t=this.parseAnimations(r.animations),n=this.parseShapes(r.shapes),i=this.parseGeometries(r.geometries,n),s=this.parseImages(r.images,function(){e!==void 0&&e(l)}),a=this.parseTextures(r.textures,s),o=this.parseMaterials(r.materials,a),l=this.parseObject(r.object,i,o,a,t),c=this.parseSkeletons(r.skeletons,l);if(this.bindSkeletons(l,c),e!==void 0){let h=!1;for(let u in s)if(s[u].data instanceof HTMLImageElement){h=!0;break}h===!1&&e(l)}return l}async parseAsync(r){let e=this.parseAnimations(r.animations),t=this.parseShapes(r.shapes),n=this.parseGeometries(r.geometries,t),i=await this.parseImagesAsync(r.images),s=this.parseTextures(r.textures,i),a=this.parseMaterials(r.materials,s),o=this.parseObject(r.object,n,a,s,e),l=this.parseSkeletons(r.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(r){let e={};if(r!==void 0)for(let t=0,n=r.length;t<n;t++){let i=new Dn().fromJSON(r[t]);e[i.uuid]=i}return e}parseSkeletons(r,e){let t={},n={};if(e.traverse(function(i){i.isBone&&(n[i.uuid]=i)}),r!==void 0)for(let i=0,s=r.length;i<s;i++){let a=new Qr().fromJSON(r[i],n);t[a.uuid]=a}return t}parseGeometries(r,e){let t={};if(r!==void 0){let n=new uc;for(let i=0,s=r.length;i<s;i++){let a,o=r[i];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;default:o.type in Fl?a=Fl[o.type].fromJSON(o,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${o.type}"`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),a.isBufferGeometry===!0&&o.userData!==void 0&&(a.userData=o.userData),t[o.uuid]=a}}return t}parseMaterials(r,e){let t={},n={};if(r!==void 0){let i=new ms;i.setTextures(e);for(let s=0,a=r.length;s<a;s++){let o=r[s];t[o.uuid]===void 0&&(t[o.uuid]=i.parse(o)),n[o.uuid]=t[o.uuid]}}return n}parseAnimations(r){let e={};if(r!==void 0)for(let t=0;t<r.length;t++){let n=r[t],i=ar.parse(n);e[i.uuid]=i}return e}parseImages(r,e){let t=this,n={},i;function s(a){if(typeof a=="string"){let o=a;return function(l){return t.manager.itemStart(l),i.load(l,function(){t.manager.itemEnd(l)},void 0,function(){t.manager.itemError(l),t.manager.itemEnd(l)})}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o)}return a.data?{data:qn(a.type,a.data),width:a.width,height:a.height}:null}if(r!==void 0&&r.length>0){let a=new Fa(e);i=new or(a),i.setCrossOrigin(this.crossOrigin);for(let o=0,l=r.length;o<l;o++){let c=r[o],h=c.url;if(Array.isArray(h)){let u=[];for(let d=0,p=h.length;d<p;d++){let f=s(h[d]);f!==null&&(f instanceof HTMLImageElement?u.push(f):u.push(new fi(f.data,f.width,f.height)))}n[c.uuid]=new Sn(u)}else{let u=s(c.url);n[c.uuid]=new Sn(u)}}}return n}async parseImagesAsync(r){let e=this,t={},n;async function i(s){if(typeof s=="string"){let a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await n.loadAsync(o)}return s.data?{data:qn(s.type,s.data),width:s.width,height:s.height}:null}if(r!==void 0&&r.length>0){n=new or(this.manager),n.setCrossOrigin(this.crossOrigin);for(let s=0,a=r.length;s<a;s++){let o=r[s],l=o.url;if(Array.isArray(l)){let c=[];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=await i(d);p!==null&&(p instanceof HTMLImageElement?c.push(p):c.push(new fi(p.data,p.width,p.height)))}t[o.uuid]=new Sn(c)}else{let c=await i(o.url);t[o.uuid]=new Sn(c)}}}return t}parseTextures(r,e){function t(i,s){return typeof i=="number"?i:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",i),s[i])}let n={};if(r!==void 0)for(let i=0,s=r.length;i<s;i++){let a=r[i];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let o=e[a.image],l=o.data,c;Array.isArray(l)?(c=new Di,l.length===6&&(c.needsUpdate=!0)):(c=l&&l.data?new fi:new tt,l&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=t(a.mapping,_d)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=t(a.wrap[0],dc),c.wrapT=t(a.wrap[1],dc)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=t(a.minFilter,pc)),a.magFilter!==void 0&&(c.magFilter=t(a.magFilter,pc)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.userData!==void 0&&(c.userData=a.userData),n[a.uuid]=c}return n}parseObject(r,e,t,n,i){let s,a,o;function l(u){return e[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),e[u]}function c(u){if(u!==void 0){if(Array.isArray(u)){let d=[];for(let p=0,f=u.length;p<f;p++){let m=u[p];t[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(t[m])}return d}return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),t[u]}}function h(u){return n[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),n[u]}switch(r.type){case"Scene":s=new Qo,r.background!==void 0&&(Number.isInteger(r.background)?s.background=new ce(r.background):s.background=h(r.background)),r.environment!==void 0&&(s.environment=h(r.environment)),r.fog!==void 0&&(r.fog.type==="Fog"?s.fog=new Xr(r.fog.color,r.fog.near,r.fog.far):r.fog.type==="FogExp2"&&(s.fog=new qr(r.fog.color,r.fog.density))),r.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=r.backgroundBlurriness);break;case"PerspectiveCamera":s=new lt(r.fov,r.aspect,r.near,r.far),r.focus!==void 0&&(s.focus=r.focus),r.zoom!==void 0&&(s.zoom=r.zoom),r.filmGauge!==void 0&&(s.filmGauge=r.filmGauge),r.filmOffset!==void 0&&(s.filmOffset=r.filmOffset),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"OrthographicCamera":s=new Vr(r.left,r.right,r.top,r.bottom,r.near,r.far),r.zoom!==void 0&&(s.zoom=r.zoom),r.view!==void 0&&(s.view=Object.assign({},r.view));break;case"AmbientLight":s=new oc(r.color,r.intensity);break;case"DirectionalLight":s=new ac(r.color,r.intensity);break;case"PointLight":s=new sc(r.color,r.intensity,r.distance,r.decay);break;case"RectAreaLight":s=new lc(r.color,r.intensity,r.width,r.height);break;case"SpotLight":s=new ic(r.color,r.intensity,r.distance,r.angle,r.penumbra,r.decay);break;case"HemisphereLight":s=new ec(r.color,r.groundColor,r.intensity);break;case"LightProbe":s=new ps().fromJSON(r);break;case"SkinnedMesh":a=l(r.geometry),o=c(r.material),s=new hl(a,o),r.bindMode!==void 0&&(s.bindMode=r.bindMode),r.bindMatrix!==void 0&&s.bindMatrix.fromArray(r.bindMatrix),r.skeleton!==void 0&&(s.skeleton=r.skeleton);break;case"Mesh":a=l(r.geometry),o=c(r.material),s=new ot(a,o);break;case"InstancedMesh":a=l(r.geometry),o=c(r.material);let u=r.count,d=r.instanceMatrix,p=r.instanceColor;s=new ml(a,o,u),s.instanceMatrix=new gi(new Float32Array(d.array),16),p!==void 0&&(s.instanceColor=new gi(new Float32Array(p.array),p.itemSize));break;case"LOD":s=new sl;break;case"Line":s=new fn(l(r.geometry),c(r.material));break;case"LineLoop":s=new yl(l(r.geometry),c(r.material));break;case"LineSegments":s=new Vt(l(r.geometry),c(r.material));break;case"PointCloud":case"Points":s=new bl(l(r.geometry),c(r.material));break;case"Sprite":s=new il(c(r.material));break;case"Group":s=new hi;break;case"Bone":s=new ga;break;default:s=new Ne}if(s.uuid=r.uuid,r.name!==void 0&&(s.name=r.name),r.matrix!==void 0?(s.matrix.fromArray(r.matrix),r.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=r.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(r.position!==void 0&&s.position.fromArray(r.position),r.rotation!==void 0&&s.rotation.fromArray(r.rotation),r.quaternion!==void 0&&s.quaternion.fromArray(r.quaternion),r.scale!==void 0&&s.scale.fromArray(r.scale)),r.castShadow!==void 0&&(s.castShadow=r.castShadow),r.receiveShadow!==void 0&&(s.receiveShadow=r.receiveShadow),r.shadow&&(r.shadow.bias!==void 0&&(s.shadow.bias=r.shadow.bias),r.shadow.normalBias!==void 0&&(s.shadow.normalBias=r.shadow.normalBias),r.shadow.radius!==void 0&&(s.shadow.radius=r.shadow.radius),r.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(r.shadow.mapSize),r.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(r.shadow.camera))),r.visible!==void 0&&(s.visible=r.visible),r.frustumCulled!==void 0&&(s.frustumCulled=r.frustumCulled),r.renderOrder!==void 0&&(s.renderOrder=r.renderOrder),r.userData!==void 0&&(s.userData=r.userData),r.layers!==void 0&&(s.layers.mask=r.layers),r.children!==void 0){let u=r.children;for(let d=0;d<u.length;d++)s.add(this.parseObject(u[d],e,t,n,i))}if(r.animations!==void 0){let u=r.animations;for(let d=0;d<u.length;d++){let p=u[d];s.animations.push(i[p])}}if(r.type==="LOD"){r.autoUpdate!==void 0&&(s.autoUpdate=r.autoUpdate);let u=r.levels;for(let d=0;d<u.length;d++){let p=u[d],f=s.getObjectByProperty("uuid",p.object);f!==void 0&&s.addLevel(f,p.distance)}}return s}bindSkeletons(r,e){Object.keys(e).length!==0&&r.traverse(function(t){if(t.isSkinnedMesh===!0&&t.skeleton!==void 0){let n=e[t.skeleton];n===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(n,t.bindMatrix)}})}},g.ObjectSpaceNormalMap=1,g.OctahedronBufferGeometry=class extends _i{constructor(r,e){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(r,e)}},g.OctahedronGeometry=_i,g.OneFactor=201,g.OneMinusDstAlphaFactor=207,g.OneMinusDstColorFactor=209,g.OneMinusSrcAlphaFactor=205,g.OneMinusSrcColorFactor=203,g.OrthographicCamera=Vr,g.PCFShadowMap=1,g.PCFSoftShadowMap=2,g.PMREMGenerator=oa,g.Path=Gi,g.PerspectiveCamera=lt,g.Plane=mn,g.PlaneBufferGeometry=class extends oi{constructor(r,e,t,n){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(r,e,t,n)}},g.PlaneGeometry=oi,g.PlaneHelper=class extends fn{constructor(r,e=1,t=16776960){let n=t,i=new Ee;i.setAttribute("position",new he([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),i.computeBoundingSphere(),super(i,new ft({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=r,this.size=e;let s=new Ee;s.setAttribute("position",new he([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computeBoundingSphere(),this.add(new ot(s,new cn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(r){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},g.PointLight=sc,g.PointLightHelper=class extends ot{constructor(r,e,t){super(new yi(e,4,2),new cn({wireframe:!0,fog:!1,toneMapped:!1})),this.light=r,this.light.updateMatrixWorld(),this.color=t,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},g.Points=bl,g.PointsMaterial=xa,g.PolarGridHelper=class extends Vt{constructor(r=10,e=16,t=8,n=64,i=4473924,s=8947848){i=new ce(i),s=new ce(s);let a=[],o=[];if(e>1)for(let c=0;c<e;c++){let h=c/e*(2*Math.PI),u=Math.sin(h)*r,d=Math.cos(h)*r;a.push(0,0,0),a.push(u,0,d);let p=1&c?i:s;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let c=0;c<t;c++){let h=1&c?i:s,u=r-r/t*c;for(let d=0;d<n;d++){let p=d/n*(2*Math.PI),f=Math.sin(p)*u,m=Math.cos(p)*u;a.push(f,0,m),o.push(h.r,h.g,h.b),p=(d+1)/n*(2*Math.PI),f=Math.sin(p)*u,m=Math.cos(p)*u,a.push(f,0,m),o.push(h.r,h.g,h.b)}}let l=new Ee;l.setAttribute("position",new he(a,3)),l.setAttribute("color",new he(o,3)),super(l,new ft({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},g.PolyhedronBufferGeometry=class extends Qt{constructor(r,e,t,n){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(r,e,t,n)}},g.PolyhedronGeometry=Qt,g.PositionalAudio=class extends _c{constructor(r){super(r),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(r){return this.panner.refDistance=r,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(r){return this.panner.rolloffFactor=r,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(r){return this.panner.distanceModel=r,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(r){return this.panner.maxDistance=r,this}setDirectionalCone(r,e,t){return this.panner.coneInnerAngle=r,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=t,this}updateMatrixWorld(r){if(super.updateMatrixWorld(r),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Gn,yc,Md),Vn.set(0,0,1).applyQuaternion(yc);let e=this.panner;if(e.positionX){let t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Gn.x,t),e.positionY.linearRampToValueAtTime(Gn.y,t),e.positionZ.linearRampToValueAtTime(Gn.z,t),e.orientationX.linearRampToValueAtTime(Vn.x,t),e.orientationY.linearRampToValueAtTime(Vn.y,t),e.orientationZ.linearRampToValueAtTime(Vn.z,t)}else e.setPosition(Gn.x,Gn.y,Gn.z),e.setOrientation(Vn.x,Vn.y,Vn.z)}},g.PropertyBinding=Ie,g.PropertyMixer=Mc,g.QuadraticBezierCurve=Aa,g.QuadraticBezierCurve3=Ea,g.Quaternion=xt,g.QuaternionKeyframeTrack=Mi,g.QuaternionLinearInterpolant=$l,g.REVISION=re,g.RGBADepthPacking=3201,g.RGBAFormat=1023,g.RGBAIntegerFormat=1033,g.RGBA_ASTC_10x10_Format=37819,g.RGBA_ASTC_10x5_Format=37816,g.RGBA_ASTC_10x6_Format=37817,g.RGBA_ASTC_10x8_Format=37818,g.RGBA_ASTC_12x10_Format=37820,g.RGBA_ASTC_12x12_Format=37821,g.RGBA_ASTC_4x4_Format=37808,g.RGBA_ASTC_5x4_Format=37809,g.RGBA_ASTC_5x5_Format=37810,g.RGBA_ASTC_6x5_Format=37811,g.RGBA_ASTC_6x6_Format=37812,g.RGBA_ASTC_8x5_Format=37813,g.RGBA_ASTC_8x6_Format=37814,g.RGBA_ASTC_8x8_Format=37815,g.RGBA_BPTC_Format=36492,g.RGBA_ETC2_EAC_Format=37496,g.RGBA_PVRTC_2BPPV1_Format=35843,g.RGBA_PVRTC_4BPPV1_Format=35842,g.RGBA_S3TC_DXT1_Format=33777,g.RGBA_S3TC_DXT3_Format=33778,g.RGBA_S3TC_DXT5_Format=33779,g.RGBFormat=1022,g.RGB_ETC1_Format=36196,g.RGB_ETC2_Format=37492,g.RGB_PVRTC_2BPPV1_Format=35841,g.RGB_PVRTC_4BPPV1_Format=35840,g.RGB_S3TC_DXT1_Format=33776,g.RGFormat=1030,g.RGIntegerFormat=1031,g.RawShaderMaterial=Gl,g.Ray=Li,g.Raycaster=class{constructor(r,e,t=0,n=1/0){this.ray=new Li(r,e),this.near=t,this.far=n,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(r,e){this.ray.set(r,e)}setFromCamera(r,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(r.x,r.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(r.x,r.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(r,e=!0,t=[]){return Xa(r,this,t,e),t.sort(bc),t}intersectObjects(r,e=!0,t=[]){for(let n=0,i=r.length;n<i;n++)Xa(r[n],this,t,e);return t.sort(bc),t}},g.RectAreaLight=lc,g.RedFormat=1028,g.RedIntegerFormat=1029,g.ReinhardToneMapping=2,g.RepeatWrapping=1e3,g.ReplaceStencilOp=7681,g.ReverseSubtractEquation=102,g.RingBufferGeometry=class extends Ki{constructor(r,e,t,n,i,s){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(r,e,t,n,i,s)}},g.RingGeometry=Ki,g.SRGBColorSpace=gr,g.Scene=Qo,g.ShaderChunk=Te,g.ShaderLib=zt,g.ShaderMaterial=Gt,g.ShadowMaterial=kl,g.Shape=Dn,g.ShapeBufferGeometry=class extends $i{constructor(r,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(r,e)}},g.ShapeGeometry=$i,g.ShapePath=class{constructor(){this.type="ShapePath",this.color=new ce,this.subPaths=[],this.currentPath=null}moveTo(r,e){return this.currentPath=new Gi,this.subPaths.push(this.currentPath),this.currentPath.moveTo(r,e),this}lineTo(r,e){return this.currentPath.lineTo(r,e),this}quadraticCurveTo(r,e,t,n){return this.currentPath.quadraticCurveTo(r,e,t,n),this}bezierCurveTo(r,e,t,n,i,s){return this.currentPath.bezierCurveTo(r,e,t,n,i,s),this}splineThru(r){return this.currentPath.splineThru(r),this}toShapes(r){function e(m,v){let _=v.length,x=!1;for(let y=_-1,M=0;M<_;y=M++){let b=v[y],S=v[M],R=S.x-b.x,P=S.y-b.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(b=v[M],R=-R,S=v[y],P=-P),m.y<b.y||m.y>S.y)continue;if(m.y===b.y){if(m.x===b.x)return!0}else{let U=P*(m.x-b.x)-R*(m.y-b.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(m.y!==b.y)continue;if(S.x<=m.x&&m.x<=b.x||b.x<=m.x&&m.x<=S.x)return!0}}return x}let t=Ht.isClockWise,n=this.subPaths;if(n.length===0)return[];let i,s,a,o=[];if(n.length===1)return s=n[0],a=new Dn,a.curves=s.curves,o.push(a),o;let l=!t(n[0].getPoints());l=r?!l:l;let c=[],h=[],u,d,p=[],f=0;h[f]=void 0,p[f]=[];for(let m=0,v=n.length;m<v;m++)s=n[m],u=s.getPoints(),i=t(u),i=r?!i:i,i?(!l&&h[f]&&f++,h[f]={s:new Dn,p:u},h[f].s.curves=s.curves,l&&f++,p[f]=[]):p[f].push({h:s,p:u[0]});if(!h[0])return function(m){let v=[];for(let _=0,x=m.length;_<x;_++){let y=m[_],M=new Dn;M.curves=y.curves,v.push(M)}return v}(n);if(h.length>1){let m=!1,v=0;for(let _=0,x=h.length;_<x;_++)c[_]=[];for(let _=0,x=h.length;_<x;_++){let y=p[_];for(let M=0;M<y.length;M++){let b=y[M],S=!0;for(let R=0;R<h.length;R++)e(b.p,h[R].p)&&(_!==R&&v++,S?(S=!1,c[R].push(b)):m=!0);S&&c[_].push(b)}}v>0&&m===!1&&(p=c)}for(let m=0,v=h.length;m<v;m++){a=h[m].s,o.push(a),d=p[m];for(let _=0,x=d.length;_<x;_++)a.holes.push(d[_].h)}return o}},g.ShapeUtils=Ht,g.ShortType=1011,g.Skeleton=Qr,g.SkeletonHelper=class extends Vt{constructor(r){let e=Ac(r),t=new Ee,n=[],i=[],s=new ce(0,0,1),a=new ce(0,1,0);for(let o=0;o<e.length;o++){let l=e[o];l.parent&&l.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(s.r,s.g,s.b),i.push(a.r,a.g,a.b))}t.setAttribute("position",new he(n,3)),t.setAttribute("color",new he(i,3)),super(t,new ft({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=r,this.bones=e,this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(r){let e=this.bones,t=this.geometry,n=t.getAttribute("position");Ya.copy(this.root.matrixWorld).invert();for(let i=0,s=0;i<e.length;i++){let a=e[i];a.parent&&a.parent.isBone&&(vs.multiplyMatrices(Ya,a.matrixWorld),vn.setFromMatrixPosition(vs),n.setXYZ(s,vn.x,vn.y,vn.z),vs.multiplyMatrices(Ya,a.parent.matrixWorld),vn.setFromMatrixPosition(vs),n.setXYZ(s+1,vn.x,vn.y,vn.z),s+=2)}t.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(r)}dispose(){this.geometry.dispose(),this.material.dispose()}},g.SkinnedMesh=hl,g.Source=Sn,g.Sphere=Cn,g.SphereBufferGeometry=class extends yi{constructor(r,e,t,n,i,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(r,e,t,n,i,s,a)}},g.SphereGeometry=yi,g.Spherical=class{constructor(r=1,e=0,t=0){return this.radius=r,this.phi=e,this.theta=t,this}set(r,e,t){return this.radius=r,this.phi=e,this.theta=t,this}copy(r){return this.radius=r.radius,this.phi=r.phi,this.theta=r.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(r){return this.setFromCartesianCoords(r.x,r.y,r.z)}setFromCartesianCoords(r,e,t){return this.radius=Math.sqrt(r*r+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(r,t),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},g.SphericalHarmonics3=cc,g.SplineCurve=Ca,g.SpotLight=ic,g.SpotLightHelper=class extends Ne{constructor(r,e){super(),this.light=r,this.light.updateMatrixWorld(),this.matrix=r.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;let t=new Ee,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){let l=s/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}t.setAttribute("position",new he(n,3));let i=new ft({fog:!1,toneMapped:!1});this.cone=new Vt(t,i),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();let r=this.light.distance?this.light.distance:1e3,e=r*Math.tan(this.light.angle);this.cone.scale.set(e,e,r),Tc.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Tc),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},g.Sprite=il,g.SpriteMaterial=ma,g.SrcAlphaFactor=204,g.SrcAlphaSaturateFactor=210,g.SrcColorFactor=202,g.StaticCopyUsage=35046,g.StaticDrawUsage=35044,g.StaticReadUsage=35045,g.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new lt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new lt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(r){let e=this._cache;if(e.focus!==r.focus||e.fov!==r.fov||e.aspect!==r.aspect*this.aspect||e.near!==r.near||e.far!==r.far||e.zoom!==r.zoom||e.eyeSep!==this.eyeSep){e.focus=r.focus,e.fov=r.fov,e.aspect=r.aspect*this.aspect,e.near=r.near,e.far=r.far,e.zoom=r.zoom,e.eyeSep=this.eyeSep,Bn.copy(r.projectionMatrix);let t=e.eyeSep/2,n=t*e.near/e.focus,i=e.near*Math.tan(Mn*e.fov*.5)/e.zoom,s,a;fc.elements[12]=-t,mc.elements[12]=t,s=-i*e.aspect+n,a=i*e.aspect+n,Bn.elements[0]=2*e.near/(a-s),Bn.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(Bn),s=-i*e.aspect-n,a=i*e.aspect-n,Bn.elements[0]=2*e.near/(a-s),Bn.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(Bn)}this.cameraL.matrixWorld.copy(r.matrixWorld).multiply(fc),this.cameraR.matrixWorld.copy(r.matrixWorld).multiply(mc)}},g.StreamCopyUsage=35042,g.StreamDrawUsage=35040,g.StreamReadUsage=35041,g.StringKeyframeTrack=zn,g.SubtractEquation=101,g.SubtractiveBlending=3,g.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g.TangentSpaceNormalMap=0,g.TetrahedronBufferGeometry=class extends Qi{constructor(r,e){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(r,e)}},g.TetrahedronGeometry=Qi,g.Texture=tt,g.TextureLoader=class extends bt{constructor(r){super(r)}load(r,e,t,n){let i=new tt,s=new or(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(r,function(a){i.image=a,i.needsUpdate=!0,e!==void 0&&e(i)},t,n),i}},g.TorusBufferGeometry=class extends er{constructor(r,e,t,n,i){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(r,e,t,n,i)}},g.TorusGeometry=er,g.TorusKnotBufferGeometry=class extends tr{constructor(r,e,t,n,i,s){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(r,e,t,n,i,s)}},g.TorusKnotGeometry=tr,g.Triangle=Lt,g.TriangleFanDrawMode=2,g.TriangleStripDrawMode=1,g.TrianglesDrawMode=0,g.TubeBufferGeometry=class extends nr{constructor(r,e,t,n,i){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(r,e,t,n,i)}},g.TubeGeometry=nr,g.UVMapping=300,g.Uint16BufferAttribute=Js,g.Uint32BufferAttribute=Ks,g.Uint8BufferAttribute=class extends ke{constructor(r,e,t){super(new Uint8Array(r),e,t)}},g.Uint8ClampedBufferAttribute=class extends ke{constructor(r,e,t){super(new Uint8ClampedArray(r),e,t)}},g.Uniform=qa,g.UniformsGroup=class extends qt{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Ld++}),this.name="",this.usage=35044,this.uniforms=[]}add(r){return this.uniforms.push(r),this}remove(r){let e=this.uniforms.indexOf(r);return e!==-1&&this.uniforms.splice(e,1),this}setName(r){return this.name=r,this}setUsage(r){return this.usage=r,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(r){this.name=r.name,this.usage=r.usage;let e=r.uniforms;this.uniforms.length=0;for(let t=0,n=e.length;t<n;t++)this.uniforms.push(e[t].clone());return this}clone(){return new this.constructor().copy(this)}},g.UniformsLib=se,g.UniformsUtils=_o,g.UnsignedByteType=1009,g.UnsignedInt248Type=1020,g.UnsignedIntType=1014,g.UnsignedShort4444Type=1017,g.UnsignedShort5551Type=1018,g.UnsignedShortType=1012,g.VSMShadowMap=3,g.Vector2=$,g.Vector3=T,g.Vector4=ze,g.VectorKeyframeTrack=sr,g.VideoTexture=class extends tt{constructor(r,e,t,n,i,s,a,o,l){super(r,e,t,n,i,s,a,o,l),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:1006,this.magFilter=i!==void 0?i:1006,this.generateMipmaps=!1;let c=this;"requestVideoFrameCallback"in r&&r.requestVideoFrameCallback(function h(){c.needsUpdate=!0,r.requestVideoFrameCallback(h)})}clone(){return new this.constructor(this.image).copy(this)}update(){let r=this.image;!("requestVideoFrameCallback"in r)&&r.readyState>=r.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},g.WebGL1Renderer=$o,g.WebGL3DRenderTarget=class extends Ct{constructor(r=1,e=1,t=1){super(r,e),this.isWebGL3DRenderTarget=!0,this.depth=t,this.texture=new br(null,r,e,t),this.texture.isRenderTargetTexture=!0}},g.WebGLArrayRenderTarget=class extends Ct{constructor(r=1,e=1,t=1){super(r,e),this.isWebGLArrayRenderTarget=!0,this.depth=t,this.texture=new Ai(null,r,e,t),this.texture.isRenderTargetTexture=!0}},g.WebGLCubeRenderTarget=Mo,g.WebGLMultipleRenderTargets=class extends Ct{constructor(r=1,e=1,t=1,n={}){super(r,e,n),this.isWebGLMultipleRenderTargets=!0;let i=this.texture;this.texture=[];for(let s=0;s<t;s++)this.texture[s]=i.clone(),this.texture[s].isRenderTargetTexture=!0}setSize(r,e,t=1){if(this.width!==r||this.height!==e||this.depth!==t){this.width=r,this.height=e,this.depth=t;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=r,this.texture[n].image.height=e,this.texture[n].image.depth=t;this.dispose()}return this.viewport.set(0,0,r,e),this.scissor.set(0,0,r,e),this}copy(r){this.dispose(),this.width=r.width,this.height=r.height,this.depth=r.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,r.depthTexture!==null&&(this.depthTexture=r.depthTexture.clone()),this.texture.length=0;for(let e=0,t=r.texture.length;e<t;e++)this.texture[e]=r.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},g.WebGLMultisampleRenderTarget=class extends Ct{constructor(r,e,t){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(r,e,t),this.samples=4}},g.WebGLRenderTarget=Ct,g.WebGLRenderer=Ko,g.WebGLUtils=Yo,g.WireframeGeometry=Ul,g.WrapAroundEnding=2402,g.ZeroCurvatureEnding=2400,g.ZeroFactor=200,g.ZeroSlopeEnding=2401,g.ZeroStencilOp=0,g._SRGBAFormat=1035,g.sRGBEncoding=3001,Object.defineProperty(g,"__esModule",{value:!0})})});var th,Af,nh=_n(()=>{th=Yc(eh());Ls();Af=new th.Vector3});var ih=_n(()=>{Kc();Ls();$c();nh()});var tp,pr,rh=_n(()=>{ih();tp=`
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
`,pr=class{constructor(){this.html={scroller:null,holder:null,container:null,content:null};this.position={current:0,target:0};this.sections=[];this.loaded=!1;this.paused=!1;this.disabled=!1;this.height=0;this.wh=0;this._ease=.1;if(this.position.current=0,this.position.target=0,this.html.scroller=document.querySelector("[fil-scroller]"),!this.html.scroller){console.warn("Fil Scroller - No `fil-scroller` element");return}this.create()}pause(){this.paused=!0}resume(){this.paused=!1}disable(){this.disabled||(this.disabled=!0,this.html.content.style.transform="translate3d(0, 0, 0)",this.html.holder.style.height="auto",this.html.scroller.classList.add("fil-scroller-disabled"))}enable(){!this.disabled||(this.disabled=!1,this.html.scroller.classList.remove("fil-scroller-disabled"))}set ease(re){this._ease=re}get ease(){return this._ease}addStyles(){document.documentElement.setAttribute("fil-scroller-parent","");let re=document.createElement("style");re.textContent=tp,document.head.append(re)}addHTML(){let re=this.html.scroller;this.html.holder=re.querySelector("[fil-scroller-holder]"),this.html.container=re.querySelector("[fil-scroller-container]"),this.html.content=re.querySelector("[fil-scroller-content]"),this.pointerElements=re.querySelectorAll("[fil-scroller-pointer]")}addSections(){let re=this.html.content.querySelectorAll("[fil-scroller-section]");for(let we of re){let He={dom:we,rect:null,visible:!1};this.sections.push(He)}}restore(){for(let re of this.sections)re.dom.classList.remove("visible"),re.dom.style.transform="none",re.rect=re.dom.getBoundingClientRect();this.wh=window.innerHeight}onResize(){this.restore()}addEventListeners(){window.addEventListener("resize",()=>{this.onResize()});let re,we=()=>{re&&clearTimeout(re),document.documentElement.classList.add("scrolling"),re=setTimeout(()=>{document.documentElement.classList.remove("scrolling")},100)};window.addEventListener("wheel",()=>{we()}),window.addEventListener("touchmove",()=>{we()})}create(){this.addStyles(),this.addHTML(),this.addSections(),this.addEventListeners(),this.restore(),"scrollRestoration"in history&&(history.scrollRestoration="manual"),console.log("Fil Scroller - Loaded"),this.loaded=!0}updateTarget(){this.position.target=this.html.scroller.scrollTop,this.paused&&(this.html.scroller.scrollTop=this.position.current)}updateCheckHeight(){this.height=0;for(let re=0,we=this.sections.length;re<we;re++)this.height+=this.sections[re].rect.height;this.disabled||(this.html.holder.style.height=`${this.height}px`)}updateScrollValues(){if(this.disabled){this.position.current=this.position.target;return}this.position.current=jt.lerp(this.position.current,this.position.target,this.ease)}updateSections(){let re=this.position.current;for(let we=0,He=this.sections.length;we<He;we++){let je=this.sections[we],be=je.rect.top,ht=je.rect.top+je.rect.height;if(re+this.wh>=be&&re<=ht){je.visible=!0,je.dom.classList.add("visible"),je.dom.style.transform=`translateY(${-re}px)`;continue}!je.visible||(je.visible=!1,je.dom.classList.remove("visible"),je.dom.style.transform=`translateY(${-this.wh}px)`)}}update(){!this.loaded||(this.updateTarget(),this.updateCheckHeight(),this.updateScrollValues(),this.updateSections())}}});var Ps,sh=_n(()=>{rh();Ps=class{constructor(){this.scroller=new pr,this.scroller.ease=.16}update(){this.scroller.update()}}});var ah={};$d(ah,{App:()=>no});var no,oh=_n(()=>{sh();no=class{constructor(){document.querySelector("main").getAttribute("data-template")==="scroller"&&(this.demo=new Ps);let we=()=>{this.update(),requestAnimationFrame(we)};we()}update(){this.demo.update()}}});var{App:np}=(oh(),Qd(ah)),kf=new np;})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
//# sourceMappingURL=main.js.map
