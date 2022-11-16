import { el } from '@fils/utils';
import { Page } from "./Page";
import { Location, Utils } from "./utils";

const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';

interface Route {
	id: string,
	template: string,
	page: Page,
	location: Location
}

export class Nomad {
	utils: Utils;

	isPopstate:boolean;
	inProgress:boolean;
	trigger: HTMLLinkElement | string;

	location: Location;

	routes:Array<Route>;

	wrapper:HTMLElement;
	links:Array<HTMLLinkElement>;

	createCallback: Function;

	constructor(callback:Function = (template: string, dom: HTMLElement) => {}){

		this.createCallback = callback;

		// Init Utils
		this.utils = new Utils();

		// State handlers
		this.isPopstate = false;
		this.inProgress = false;
		this.trigger = null;

		this.location = this.utils.getLocation(window.location.href);

		this.wrapper = document.querySelector('[nomad-wrapper]');
		if(!this.wrapper) {
			console.warn("Nomad can't work without warpper element.");
			return;
		}

		console.log('hola');
		

		this.links = [];

		window.addEventListener('popstate', (e) => {
			this.onPopState();
		});

		// Init current page
		this.attachLinks();

	}

	attachLinks(){

		// Prevents double events on links
		const allLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		const newLinks = [];

		for(const link of allLinks){
			if(this.links.find(x => x === link)) continue;
			this.links.push(link);
			newLinks.push(link);
		}

		for(const link of newLinks) {
			link.addEventListener('click', (e) => {
				this.onClick(e);
			}, true);
		}

		this.utils.checkActiveLinks(allLinks);

	}

	onClick(e){
		
		if (e.metaKey || e.ctrlKey) return;

		e.preventDefault();

		this.redirect(e.currentTarget.href, e.currentTarget)
		
	}

	onPopState(){
		this.isPopstate = true;
		this.redirect(window.location.href, 'popstate');
	}

	redirect(href, trigger: string = 'script'){		

		if(this.inProgress) {
			console.log('Page Change inProgress');
			return;
		}

		this.trigger = trigger;

		this.inProgress = true;

		this.beforeFetch(href);

		this.fetch().then((html) => {

		 	this.addContent(html);
			this.afterFetch();
			
		})
	
		
	}

	beforeFetch(href){

		const fromLocation = this.location;
		this.location = this.utils.getLocation(href);

		// this.utils.emitEvent('nomad-before', {
		// 	'from': fromLocation,
		// 	'to': this.location,
		// 	'trigger': this.trigger
		// })
	}

	addContent(html: string){

		// Create html
		const content = el('div');
		content.innerHTML = html;

		// Update page title
		const title = content.querySelector('title').textContent;
		document.documentElement.querySelector('title').textContent = title;
		if(!this.isPopstate) window.history.pushState(this.location, title, this.location.href); 

		// Append new page
		const oldPage = this.wrapper.querySelector('[template]') as HTMLElement;
		console.log(oldPage, this.wrapper);
		
		const newPage = content.querySelector('[template]') as HTMLElement;

		oldPage.classList.add('nomad__old-page');
		newPage.classList.add('nomad__new-page');
		let newClass = this.createCallback(newPage.getAttribute('template'), newPage);
		if(!newClass) newClass = new Page(newPage);
		

		oldPage?.remove();
		this.wrapper.appendChild(newPage);
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

		// Force reload if response fails
		window.location.href = this.location.href;

	}

	afterFetch(){		

		// Attach new links
		this.attachLinks();

		this.inProgress = false;
		this.isPopstate = false;
		this.trigger = null;

		// this.utils.emitEvent('nomad-after', {
		// 	'location': this.location,
		// })

		// Cleanup
		const newPage = this.wrapper.querySelector('.nomad__new-page');
		console.log(newPage);
		
		newPage?.classList.remove('nomad__new-page');

	}
}