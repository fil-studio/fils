import { Location, Utils } from "./utils";
import { el } from '@fils/utils';

const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';

export class Nomad {
	utils: Utils;

	isPopstate:boolean;
	inProgress:boolean;
	trigger: HTMLLinkElement | string;

	location: Location;

	history:Map<Location, string>;

	wrapper:HTMLElement;
	links:NodeListOf<HTMLLinkElement>;

	constructor(){

		// Init Utils
		this.utils = new Utils();

		// State handlers
		this.isPopstate = false;
		this.inProgress = false;
		this.trigger = null;

		this.location = this.utils.getLocation(window.location.href);

		this.wrapper = document.querySelector('#nomad__wrapper');
		
		// Init current page
		this.attachLinks();

		window.addEventListener('popstate', () => {
			this.redirect(window.location.href, 'popstate');
		});


		window.addEventListener('nomad-before', (e:CustomEvent) => {
			console.log('nomad-before', e.detail);
		})
		window.addEventListener('nomad-after', (e:CustomEvent) => {
			console.log('nomad-after', e.detail);
		})

	}
	
	attachLinks(){

		this.links = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		for(const link of this.links) {
			
			if(link.hasAttribute('data-nomad')) continue;
			link.setAttribute('data-nomad', 'true');
			
			link.addEventListener('click', (e) => {
				this.navigate(e);
			}, true);
		}

		this.utils.checkActiveLinks(this.links);

	}

	navigate(e){
		
		if (e.metaKey || e.ctrlKey) return;

		e.preventDefault();

		this.redirect(e.currentTarget.href, e.currentTarget)
		
	}

	redirect(href, trigger: string = 'script'){		

		if(this.inProgress) {
			console.log('Page Change inProgress');
			return;
		}

		this.trigger = trigger;

		this.inProgress = true;

		this.beforeFetch(href).then(() => {
			console.log('Before');
			
			this.fetch().then((html) => {
				
				this.addContent(html);
				
				this.afterFetch();

			})
		});
		
	}

	pushState(){
		if(this.isPopstate) return;
    window.history.pushState(this.location, '', this.location.href); 
	}

	addContent(html: string){

		// Create html
		const content = el('div');
		content.innerHTML = html;

		// Update page title
		document.documentElement.querySelector('title').textContent = content.querySelector('title').textContent;

		const oldPage = this.wrapper.querySelector('[data-template]');
		const newPage = content.querySelector('[data-template]');

		oldPage.classList.add('nomad__old-page');
		newPage.classList.add('nomad__new-page');

		this.wrapper.appendChild(newPage.cloneNode(true));

	}

	async beforeFetch(href){
		
		const fromLocation = this.location;
		this.location = this.utils.getLocation(href);

		this.utils.emitEvent('nomad-before', {
			'from': fromLocation,
			'to': this.location,
			'trigger': this.trigger
		})

		this.pushState();

		// Todo await transition
		return 1;
	}

	async fetch(){

		const response = await fetch(this.location.href, {
			mode: 'same-origin',
			method: 'GET',
			headers: { 'X-Requested-With': 'Nomad' },
			credentials: 'same-origin'
		});
		
		if (response.status >= 200 && response.status < 300) {
			return response.text();
		}

		window.location.href = this.location.href;

	}

	async afterFetch(){

		this.attachLinks();

		this.inProgress = false;
		this.trigger = null;

		this.utils.emitEvent('nomad-after', {
			'location': this.location,
		})


		const oldPage = this.wrapper.querySelector('.nomad__old-page');
		oldPage?.remove();
		const newPage = this.wrapper.querySelector('.nomad__new-page');
		newPage?.classList.remove('.nomad__new-page');

		// Todo await transition
		return 1;

	}
}