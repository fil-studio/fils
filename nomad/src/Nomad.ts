import { Location, Utils } from "./utils";
import { el } from '@fils/utils';
import { Transition } from "./Transition";

const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';

export class Nomad {
	utils: Utils;

	transitions:Array<Transition>;

	isPopstate:boolean;
	inProgress:boolean;
	trigger: HTMLLinkElement | string;

	location: Location;

	history:Map<Location, string>;

	wrapper:HTMLElement;
	links:NodeListOf<HTMLLinkElement>;

	constructor(transitions:Array<Transition> = []){

		this.transitions = [new Transition(), ...transitions];
		console.log(this.transitions);
		

		// Init Utils
		this.utils = new Utils();

		// State handlers
		this.isPopstate = false;
		this.inProgress = false;
		this.trigger = null;

		this.location = this.utils.getLocation(window.location.href);

		this.wrapper = document.querySelector('#nomad__wrapper');

		window.addEventListener('popstate', (e) => {
			this.onPopState();
		});

		// Init current page
		this.attachLinks();

	}
	
	attachLinks(){

		this.links = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		for(const link of this.links) {
			
			if(link.hasAttribute('data-nomad')) continue;
			link.setAttribute('data-nomad', 'true');
			
			link.addEventListener('click', (e) => {
				this.onClick(e);
			}, true);
		}

		this.utils.checkActiveLinks(this.links);

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

		 	this.addContent(html).then(() => {
				this.afterFetch();
			});
				
		})
	
		
	}

	async addContent(html: string){

		// Create html
		const content = el('div');
		content.innerHTML = html;

		// Update page title
		const title = content.querySelector('title').textContent;
		document.documentElement.querySelector('title').textContent = title;
		if(!this.isPopstate) window.history.pushState(this.location, title, this.location.href); 

		// Append new page
		const oldPage = this.wrapper.querySelector('[data-template]') as HTMLElement;
		const newPage = content.querySelector('[data-template]') as HTMLElement;

		oldPage.classList.add('nomad__old-page');
		newPage.classList.add('nomad__new-page');

		const tOut = this.transitions.find(x => x.id === (oldPage.hasAttribute('nomad-transition') ? oldPage.getAttribute('nomad-transition') : ''));
		if(tOut) await tOut.transitionOutWrapper(oldPage);

		this.wrapper.appendChild(newPage.cloneNode(true));

		const tIn = this.transitions.find(x => x.id === (newPage.hasAttribute('nomad-transition') ? newPage.getAttribute('nomad-transition') : ''));
		if(tIn) await tIn.transitionInWrapper(newPage);

	}

	beforeFetch(href){

		const fromLocation = this.location;
		this.location = this.utils.getLocation(href);

		this.utils.emitEvent('nomad-before', {
			'from': fromLocation,
			'to': this.location,
			'trigger': this.trigger
		})
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

	afterFetch(){

		// Attach new links
		this.attachLinks();

		this.inProgress = false;
		this.isPopstate = false;
		this.trigger = null;

		this.utils.emitEvent('nomad-after', {
			'location': this.location,
		})

		// Cleanup
		const oldPage = this.wrapper.querySelector('.nomad__old-page');
		oldPage?.remove();
		const newPage = this.wrapper.querySelector('.nomad__new-page');
		newPage?.classList.remove('.nomad__new-page');

	}
}