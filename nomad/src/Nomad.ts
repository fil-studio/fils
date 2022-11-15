import { Utils } from "./utils";

const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';

export class Nomad {
	utils: Utils;
	constructor(){

		this.utils = new Utils();
		
		this.attachLinks();

	}
	
	attachLinks(){
		const domLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		for(const link of domLinks) {
			link.addEventListener('click', this.navigate.bind(this));
		}

		this.utils.checkActiveLinks(domLinks);
	}

	dettachLinks(){
		const domLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		for(const link of domLinks) {
			link.removeEventListener('click', this.navigate.bind(this));
		}
	}

	navigate(e){
		if (e.metaKey || e.ctrlKey) return;
		
		e.preventDefault();
		
	}

	redirect(href, trigger: string = 'script'){

	}
}