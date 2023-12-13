

export class Page {

	isActive: boolean = false;
	isLoaded: boolean = false;

	id: string;
	dom:HTMLElement;
	template: string;

	constructor(id:string, template:string, dom:HTMLElement){
		this.dom = dom;
		this.id = template;
		this.template = template;

		this.addEventListeners();
	}

	addEventListeners(){}

	create(){
		this.isActive = true;
	}

	dispose(){
		this.isActive = false;
	}

	async transitionIn(resolve){
		resolve();
	}
	async transitionOut(resolve){
		resolve();
	}
}