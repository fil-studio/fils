import { debounce } from "@fils/utils";
import { Nomad, NomadRouteListener } from "../Nomad";

const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore]):not([href^="tel:"])';


export class NomadEvents {
	nomad: Nomad;

	private listeners: NomadRouteListener[] = [];

	links: Array<HTMLLinkElement>;

	constructor(nomad: Nomad){
		this.nomad = nomad;

		this.links = [];

		// Init current page
		this.addLinksListener();
		window.addEventListener('popstate', debounce((e) => {
			console.log('Fil Nomad - Popstate');
			this.onPopState();
		}, 300));

	}

	// Listeners
	addRouteListener(lis: NomadRouteListener) {
		if (this.listeners.indexOf(lis) > -1) return;
		this.listeners.push(lis);
	}
	removeRouteListener(lis: NomadRouteListener) {
		this.listeners.splice(this.listeners.indexOf(lis), 1);
	}
	onRouteChangeStart(href: string) {
		for (const lis of this.listeners) {
			if (lis.onRouteChangeStart) lis.onRouteChangeStart(href);
		}
	}
	onRouteChanged() {
		for (const lis of this.listeners) {
			if (lis.onRouteChanged) lis.onRouteChanged(this.nomad.route);
		}
	}
	onRouteChangedComplete() {
		for (const lis of this.listeners) {
			if (lis.onRouteChangedComplete) lis.onRouteChangedComplete(this.nomad.route);
		}
	}

	// Events
	// Events
	addLinksListener() {

		// Prevents double events on links
		const allPageLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		const newLinks = [];

		for (const link of allPageLinks) {
			if (this.links.find(x => x === link)) continue;
			this.links.push(link);
			newLinks.push(link);
		}

		for (const link of newLinks) {
			link.addEventListener('click', (e) => {
				this.onClick(e);
			}, true);
		}

		this.nomad.utils.checkActiveLinks(allPageLinks);

	}
	onClick(e) {
		if (e.metaKey || e.ctrlKey) return;
		e.preventDefault();
		this.nomad.goTo(e.currentTarget.href)
	}
	onPopState() {
		this.nomad.isPopstate = true;
		this.nomad.goTo(window.location.href);
	}
}