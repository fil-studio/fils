/*
 * Utils
 *
 */
export function $(selector: string, scope?: HTMLElement): HTMLElement | null {
  return (scope || document).querySelector(selector);
}

export function $$(selector: string, scope?: HTMLElement): Array<HTMLElement> {
  return Array.from((scope || document).querySelectorAll(selector));
}

export function el (type:string, className?:string, parent?:HTMLElement):HTMLElement {
	let e = document.createElement(type);
	if (className != undefined) e.className = className;
	if (parent != undefined) parent.appendChild(e);

	return e;
}

export function remove(el:HTMLElement):void {
	removeListeners(el)
	el.remove();
}

export function requestVideoFullscreen(el: HTMLElement) {
  if (el.requestFullscreen) return el.requestFullscreen()
  try {
    //@ts-ignore
    el.webkitEnterFullScreen()
  } catch (e) {
    console.log(e)
  }
}
export function createVideoFullsreen(src: string, onExit:Function = () => {}) {
  const video = el(
		'video',
		'fil-fullscreen-video',
		document.body,
	) as HTMLVideoElement
	video.src = src;
	video.autoplay = true
	requestVideoFullscreen(video)

	function exit() {
		video.remove();
		video.pause();
		video.src = "";
		onExit()
	}

	// Listen to video fullscreen change
	video.addEventListener('fullscreenchange', (event) => {
		if (!document.fullscreenElement) {
			exit();
		}
	})

	video.addEventListener('webkitendfullscreen', (event) => {
		if (!document.fullscreenElement) {
			exit();
		}
	})
}


export function openFullScreen(_el = document.documentElement) {
	const el3 = _el as any;
	if (el3.requestFullscreen) {
		el3.requestFullscreen().catch(error => { console.log(error); });
	} else if (el3.mozRequestFullScreen) {
		el3.mozRequestFullScreen().catch(error => { console.log(error); });
	} else if (el3.webkitRequestFullscreen) {
		el3.webkitRequestFullscreen().catch(error => { console.log(error); });
	} else if (el3.msRequestFullscreen) {
		el3.msRequestFullscreen().catch(error => { console.log(error); });
	}
}

export function closeFullScreen() {
	const doc = document as any;
	if (doc.exitFullscreen) {
		doc.exitFullscreen().catch(error => { console.log(error); });
	} else if (doc.mozCancelFullScreen) { /* Firefox */
		doc.mozCancelFullScreen().catch(error => { console.log(error); });
	} else if (doc.webkitExitFullscreen) { /* Chrome, Safari & Opera */
		doc.webkitExitFullscreen().catch(error => { console.log(error); });
	} else if (doc.msExitFullscreen) { /* IE/Edge */
		doc.msExitFullscreen().catch(error => { console.log(error); });
	}
}

export function removeListeners (el:any):void {
	const eventListeners = Object.keys(el.__events || {});

	Object.keys(eventListeners).forEach(eventType => {
		eventListeners[eventType].forEach(listener => {
			el.removeEventListener(eventType, listener);
		});
	});

	delete(el as any).__events;
}

export function webgl2 ():boolean {
	var canvas = document.createElement("canvas");
	// Get WebGLRenderingContext from canvas element.
	var gl = canvas.getContext("webgl2");
	return (gl != null && gl instanceof WebGL2RenderingContext);
}

export function webgl ():boolean {
	var canvas = document.createElement("canvas");
	// Get WebGLRenderingContext from canvas element.
	var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
	return (gl != null && gl instanceof WebGLRenderingContext);
}

export function getDocumentHeight():number {
	return document.body.clientHeight || window.innerHeight;
}

export function isBrowser(vendor:string):boolean {
	return navigator.userAgent.toLowerCase().indexOf(vendor.toLowerCase()) > -1;
}

export function isSafari():boolean {
	return !isBrowser("Chrome") && isBrowser("Safari");
}

export function getAndroidVersion():number {
	var ua = navigator.userAgent.toLowerCase();
	var match = ua.match(/android\s([0-9\.]*)/);
	return (match != null && match.length > 1) ? parseFloat(match[1]) : -1;
}

export function isIphone():boolean {
	return !!navigator.userAgent.match(/iPhone/i);
}

export function isIpad():boolean {
	let ua = navigator.userAgent.toLowerCase();
	return ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document);
}

export function getIOSVersion():number {
	if (isIphone() || isIpad()) {
		var v = (navigator.userAgent).match(/OS (\d+)_(\d+)_?(\d+)?/);
		if(v != null && v.length > 2) {
			var vf = parseFloat(`${parseInt(v[1], 10)}.${parseInt(v[2], 10)}`);
			return vf;
		}
		return -1;
	}
	return -1;
}

export function isTouchDevice ():boolean {
	return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 );
}

export function isMacOS(): boolean {
  const isMac = /Mac/.test(navigator.userAgent);
  return isMac && !isIOS();
}

export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

export function isWindows(): boolean {
  return /Win/.test(navigator.userAgent);
}

export function isAndroid(): boolean {
  return /Android/.test(navigator.userAgent);
}

export function isLinux(): boolean {
  // Linux but not Android (since Android userAgent also contains "Linux")
  return /Linux/.test(navigator.userAgent) && !isAndroid();
}

// Combined mobile check
export function isMobile(): boolean {
  return isIOS() || isAndroid();
}

// Combined desktop check
export function isDesktop(): boolean {
  return isMacOS() || isWindows() || isLinux();
}

// Get OS name as string
export function getOS(): 'macOS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | 'Unknown' {
  if (isMacOS()) return 'macOS';
  if (isIOS()) return 'iOS';
  if (isWindows()) return 'Windows';
  if (isAndroid()) return 'Android';
  if (isLinux()) return 'Linux';
  return 'Unknown';
}

export function hasGetUserMedia():boolean {
	return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

export function copyToClipboard(str:string):void {
	if(navigator.clipboard && navigator.clipboard.writeText){
		navigator.clipboard.writeText(str)
	}
}

export function slugify(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^a-z0-9-]/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

export function getWorkerURL( url: string ) {
	const content = `importScripts( "${ url }" );`;
	return URL.createObjectURL( new Blob( [ content ], { type: "text/javascript" } ) );
}
export function generateUniqueId(prefix:string = '') {
	return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

// Example:
// window.addEventListener('resize', debounce(function () {
// 	// your code here
// }, 250));

export function debounce(func:Function, delay:number = 250) {
	let timerId;
	return function () {
		clearTimeout(timerId);
		timerId = setTimeout(() => func.apply(this, arguments), delay);
	}
}