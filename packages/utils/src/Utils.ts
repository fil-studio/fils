/*
 * Utils
 *
 */
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

export function isMobile():boolean {
	var check = false;
	(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);// || window.opera);
	return check;
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

export function isDesktop():boolean {
	return !isIpad() && !isIphone() && getAndroidVersion() === -1;
}

export function isTouchDevice ():boolean {
	return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 );
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