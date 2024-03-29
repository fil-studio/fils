/*
 * io Class
 * Following Singleton TS pattern
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#private-and-protected-constructors
 * 
 */

export class ResponseParams {
	responseType:XMLHttpRequestResponseType = "text"
}

export class io {
	private constructor() {}

	static load(url:string, callback?:Function, errorCallback?:Function, params?:ResponseParams) {
		let r = new XMLHttpRequest();
		r.open( "GET", url, true );

		if ( params != undefined ) r.responseType = params.responseType;

		r.onload = () => {
			if ( r.status >= 400 && errorCallback != undefined ) errorCallback(r);
			if (r.status == 200 && callback != undefined) callback(r.response);
		}

		r.onerror = () => {
			if(errorCallback) {
				errorCallback({
					status: "UNKNOWN",
					response: ""
				});
			}
		}

		r.send();
	}

	static fetchVimeo(url:string, callback:Function) {
		const req = new XMLHttpRequest();
		req.responseType = "json";
		req.onload = () => {
			callback(req.responseURL);
		}
		req.open("GET", url);
		req.send();
	}
}