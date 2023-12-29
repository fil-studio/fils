import { el } from '@fils/utils';
import { Page } from "./Page";
import { Location, Utils } from "./utils";
import { NomadEvents } from './partials/NomadEvents';


export interface NomadRoute {
	initialized: boolean,
	id: string,
	template: string,
	page: Page,
	location: Location,
	dom: HTMLElement,
	order: number[]
}

export interface NomadRouteListener {
	onRouteChangeStart?(href:string):void
	onRouteChanged?(route:NomadRoute):void;
	onRouteChangedComplete?(route:NomadRoute):void
}

export interface NomadParameters {
	replace?:boolean
}

// Todo
// Que passa quan fas spam

export class Nomad {
	utils: Utils;

	isPopstate:boolean;
	inProgress:boolean;

	routes:Array<NomadRoute>;
	route: NomadRoute;

	wrapper:HTMLElement;

	createPage: Function;

	// Parameters
	replace: boolean;

	// Partials
	events: NomadEvents;

	currentOrder:number = 0;
	previousRoute: NomadRoute;

	constructor(params:NomadParameters, createPage:Function = (dom: HTMLElement): Page => { return null; }){

		// Default parameters
		this.replace = true;

		// Assign parameters
		if(params){
			Object.assign(this, params)
		}

		// Init Utils
		this.utils = new Utils();

		// Events Handler
		this.events = new NomadEvents(this);

		// Create page function
		this.createPage = createPage;


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

		this.firstRoute();

	}
	addRouteListener(lis:NomadRouteListener) {
		this.events.addRouteListener(lis);
	}
	removeRouteListener(lis:NomadRouteListener) {
		this.events.removeRouteListener(lis);
	}

	// Routes handler
	createRoute(dom:HTMLElement, href:string = window.location.href){

		const location = this.utils.getLocation(href);

		const exists = this.routes.find(x => x.id === location.pathname);
		if(exists){
			this.route = exists;
			this.route.order.push(this.currentOrder);
			return;
		}

		// Thats just the page content, not the whole html
		const pageDom = dom.querySelector('[nomad-template]') as HTMLElement;
		const id = location.pathname;
		const template = pageDom.getAttribute('nomad-template');
		pageDom.setAttribute('nomad-id', id);

		const newRoute = {
			initialized: false,
			id,
			template,
			page: this.createPage(id, template, pageDom) || new Page(id, template, pageDom),
			location,
			dom,
			order: [this.currentOrder]
		}

		this.route = newRoute;
		this.routes.push(this.route);

	}

	// Enters href, returns HTML
	async fetch(href) {

		// Check if dom already exists
		const route = this.routes.find(x => {
			x.location === href
		});
		if (route) return route.dom;

		// Else, fetch it
		const response = await fetch(href, {
			mode: 'same-origin',
			method: 'GET',
			headers: { 'X-Requested-With': 'Nomad' },
			credentials: 'same-origin'
		});

		if (response.status >= 200 && response.status < 300) {
			const content = el('div');
			const html = await response.text();
			content.innerHTML = html;
			return content;
		}

		// Force reload if response fails
		console.log('Fil Nomad - Fetch failed');

		return false;

	}

	firstRoute(){
		const href = window.location.href;
		this.events.onRouteChangeStart(href);
		this.addContent(href, document.documentElement).then(() => {
			this.transitionIn();
		})
	}
	/**
	 * @description Trigger location change
	 * @param {string} href - The new location URL.
	 * @param {string} preloadedHTML - If the HTML has been preloaded add it here and this one will be used instead of a fetch.
	 * @param {boolean} replace - Whether to replace the current URL in the browser history or not.
	 *   If true the user will be responsible for everything. Nomad will only handle page title and template.
	 *   By default, this is set to false.
	 */
	goTo(href){

		if(this.utils.getPathname(href) === this.route.location.pathname){
			console.warn('Nomad - Trying to access current location', this.route.location.pathname);
			return;
		}

		if(this.inProgress){
			console.warn('Nomad - Transition already in progress');
			return;
		}
		this.inProgress = true;

		this.events.onRouteChangeStart(href);

		this.previousRoute = this.route;
		this.currentOrder++;

		this.fetch(href).then(html => {
			if(html){
				// If its replacing content:
				// -- Transition Out
				// -- Replace
				// -- Transition In
				if(this.replace){

					this.transitionOut().then(() => {
						this.addContent(href, html).then(() => {
							this.transitionIn().then(() => {
								this.inProgress = false;
							})
						})
					})

				// If it's not replacing content transition can happen at the same time:
				// -- Add Content
				// -- Transition Out & In
				} else {

					this.addContent(href, html).then(() => {

						this.transitionOut(this.previousRoute)
						this.transitionIn().then(() => {
							this.inProgress = false;
							this.previousRoute.page.dom.setAttribute('nomad-page-state', 'disabled');
							this.route.page.dom.setAttribute('nomad-page-state', 'enabled');
						})
					});

				}
			}
		})
	}

	async addContent(href: string, html: HTMLElement) {

		// Create route
		this.createRoute(html, href);
		this.events.onRouteChanged();

		// Update page title
		const title = html.querySelector('title').textContent;
		document.documentElement.querySelector('title').textContent = title;

		// Update pushState
		window.history.pushState(this.route.location, title, this.route.location.href);

		// Add new content
		if (!this.wrapper.contains(this.route.page.dom)) {
			// If not, append it
			this.wrapper.appendChild(this.route.page.dom);
		}

		if(!this.route.initialized) {
			this.route.initialized = true;
			const initPromise = new Promise((resolve, reject) => {
				this.route.page.init(resolve)
			})
			await initPromise;
		}

		this.events.addLinksListener();


	}

	async transitionOut(route:NomadRoute = this.route){

		const promise = new Promise((resolve, reject) => {
			route.page.transitionOut(resolve)
		})

		await promise;

		// Dispose old page
		route.page.active = false;
		route.page.dispose();

		if (this.replace) {
			// HTML Remove
			const oldPage = this.wrapper.querySelector(`[nomad-id="${route.id}"]`) as HTMLElement;
			oldPage.remove();
		}


	}

	async transitionIn() {

		this.route.page.active = true;
		this.route.page.create();

		// Wait transition IN
		const promise = new Promise((resolve, reject) => {
			this.route.page.transitionIn(resolve)
		})

		await promise;

		this.isPopstate = false;
		this.events.onRouteChangedComplete();

	}

}