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

	routes:Array<Route>;
	route: Route;

	wrapper:HTMLElement;
	links:Array<HTMLLinkElement>;

	createPage: Function;

	constructor(createPage:Function = (template: string, dom: HTMLElement): Page => { return null; }){

		this.createPage = createPage;

		// Init Utils
		this.utils = new Utils();

		// State handlers
		this.isPopstate = false;
		this.inProgress = false;

		this.routes = [];
		this.route = null;

		this.wrapper = document.querySelector('[nomad-wrapper]');
		if(!this.wrapper) {
			console.warn("Nomad can't work without warpper element.");
			return;
		}		

		this.links = [];

		// Init current page
		this.addLinksListener();
		window.addEventListener('popstate', (e) => {
			this.onPopState();
		});

		// Create initial route
		const newPage = this.wrapper.querySelector('[template]') as HTMLElement;
		const template = newPage.getAttribute('template');
		let newPageClass = this.createPage(template, newPage);
		if(!newPageClass) newPageClass = new Page(newPage);
		this.createRoute(template, newPageClass);

	}

	// Routes handler
	createRoute(template: string, page:Page, href: string = window.location.href){

		const location = this.utils.getLocation(href);		

		const exists = this.routes.find(x => x.id === location.pathname);				

		this.route = exists !== undefined ? exists : {
			id: location.pathname,
			template,
			page,
			location,
		}
				
		if(exists === undefined) {
			this.routes.push(this.route);
		}
		
	}

	// Events
	addLinksListener(){

		// Prevents double events on links
		const allPageLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		const newLinks = [];

		for(const link of allPageLinks){
			if(this.links.find(x => x === link)) continue;
			this.links.push(link);
			newLinks.push(link);
		}

		for(const link of newLinks) {
			link.addEventListener('click', (e) => {
				this.onClick(e);
			}, true);
		}

		this.utils.checkActiveLinks(allPageLinks);

	}
	onClick(e){
		if (e.metaKey || e.ctrlKey) return;
		e.preventDefault();
		this.lifeCycle(e.currentTarget.href)
	}
	onPopState(){
		this.isPopstate = true;
		this.lifeCycle(window.location.href);
	}

	// Lifecycle
	lifeCycle(href){		

		if(this.inProgress) {
			this.route.page.kill();
			this.route.page.dispose();
			this.route.page.dom.remove();
		}

		this.inProgress = true;

		this.beforeFetch().then(() => {

			this.fetch(href).then((html) => {

				this.addContent(href, html).then(() => {
					
					this.afterFetch();

				})

			})

		})

	}

	async beforeFetch(){

		const promise = new Promise((resolve, reject) => {
			this.route.page.transitionOut(resolve);
		})

		return await promise;

	}

	async addContent(href: string, html: string){

		// Dispose old page
		this.route.page.dispose();
		this.route.page.isActive = false;

		// Create html
		const content = el('div');
		content.innerHTML = html;

		// Create new Page & Route
		const newPage = content.querySelector('[template]') as HTMLElement;
		const template = newPage.getAttribute('template');

		let newPageClass = this.createPage(template, newPage);
		newPageClass = newPageClass ? newPageClass : new Page(newPage);

		this.createRoute(template, newPageClass, href);
		this.route.page.dom = newPage;
		this.route.page.isActive = true;
		if(!this.route.page.isLoaded) {			
			await new Promise((resolve) => {
				this.route.page.load(resolve);
			})
			this.route.page.loaded();
		}

		// Update page title
		const title = content.querySelector('title').textContent;
		document.documentElement.querySelector('title').textContent = title;
		if(!this.isPopstate) window.history.pushState(this.route.location, title, this.route.location.href); 
		this.addLinksListener();

		// HTML Swap
		const oldPage = this.wrapper.querySelector('[template]') as HTMLElement;		
		oldPage?.remove();
		this.wrapper.appendChild(newPage);

		// Wait transition IN
		const promise = new Promise((resolve, reject) => {
			this.route.page.transitionIn(resolve);
		})

		return await promise;

	}

	async fetch(href){

		const response = await fetch(href, {
			mode: 'same-origin',
			method: 'GET',
			headers: { 'X-Requested-With': 'Nomad' },
			credentials: 'same-origin'
		});
		
		if (response.status >= 200 && response.status < 300) {
			return response.text();
		}

		// Force reload if response fails
		window.location.href = href;
		return;

	}

	afterFetch(){		

		this.inProgress = false;
		this.isPopstate = false;

	}
}