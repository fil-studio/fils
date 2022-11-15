/**
 * Some utils inspired by https://github.com/Dogstudio/highway/blob/master/src/helpers.js
 */

export class Utils {

	checkActiveLinks = (links:NodeListOf<HTMLLinkElement>) => {

		const pathname = window.location.pathname;

		for(const link of links){
			link.classList.remove('nomad__active-link')

			if(!link.hasAttribute('href')) continue;

			const href = link.getAttribute('href');
			const location = this.getLocation(href);
			console.log(location);
			
			// if(href.charAt(href.length - 1) !== '/') {
			// 	href += '/';
			// 	link.setAttribute('href', href);
			// }
			
			// if( href === pathname ) link.classList.add('nomad__active-link')
			// else if( href.includes(pathname) ) link.classList.add('nomad__active-parent-link')
			
		}
		
	}

	getLanguage(url){

	}

	getOrigin(url) {
		const match = url.match(/(https?:\/\/[\w\-.]+)/);
		return match ? match[1].replace(/https?:\/\//, '') : null;
	}

	getPathname(url) {
		const match = url.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
		return match ? match[1] : '/';
	}

	getScheme(url) {
		const match = url.match(/^[^:]+(?=:\/\/)/);
		return match ? match[0] : null;
	}

	getAnchor(url) {
		const match = url.match(/(#.*)$/);
		return match ? match[1] : null;
	}

	getParams(url) {
		const match = url.match(/\?([\w_\-.=&]+)/);

		if (!match) {
				return null;
		}

		const search = match[1].split('&');
		const object = {};

		for (let i = 0; i < search.length; i++) {
				const part = search[i].split('=');
				const { 0: key } = part;
				const { 1: value } = part;

				object[key] = value;
		}

		return object;
	}

	// getDOM(page) {
	//   return typeof page === 'string' ? PARSER.parseFromString(page, 'text/html') : page;
	// }

	// getView(page) {
	//   return page.querySelector('[data-router-view]');
	// }

	// getSlug(view) {
	//   return view.getAttribute('data-router-view');
	// }

	getLocation(slug) {

		const url = slug.includes(window.location.origin) ? slug : `${window.location.origin}${slug}`;		
		
		return {
				href: url,
				lang: this.getLanguage(url),
				anchor: this.getAnchor(url),
				origin: this.getOrigin(url),
				params: this.getParams(url),
				pathname: this.getPathname(url),
				scheme: this.getScheme(url)
		};
	}

}



