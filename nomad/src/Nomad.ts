const linkRule = 'a:not([target]):not([href^=\\#]):not([fil-nomad-ignore])';

export default class Nomad {
	constructor(){

		console.log('Entra');
		
		this.attachLinks();

	}
	
	attachLinks(){
		const domLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		for(const link of domLinks) {
			link.addEventListener('click', this.navigate.bind(this));
		}

	}

	dettachLinks(){
		const domLinks = document.querySelectorAll(linkRule) as NodeListOf<HTMLLinkElement>;
		for(const link of domLinks) {
			link.removeEventListener('click', this.navigate.bind(this));
		}
	}

	click(){

	}

	navigate(e){
		if (e.metaKey || e.ctrlKey) return;

		e.preventDefault();

		console.log('Hola', e);
		
	}
}