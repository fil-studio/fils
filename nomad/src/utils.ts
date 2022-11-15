

export const CheckActiveLinks = (links:NodeListOf<HTMLLinkElement>) => {

	const pathname = window.location.pathname;

	for(const link of links){
		link.classList.remove('nomad__active-link')

		if(!link.hasAttribute('href')) continue;

		let href = link.getAttribute('href');
		if(href.charAt(href.length - 1) !== '/') {
			href += '/';
			link.setAttribute('href', href);
		}
		
		if( href === pathname ) link.classList.add('nomad__active-link')
		else if( href.includes(pathname) ) link.classList.add('nomad__active-parent-link')
		
	}
	
}