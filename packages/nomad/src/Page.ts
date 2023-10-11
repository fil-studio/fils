

export class Page {
	id: string = '';

	isActive: boolean = false;
	isLoaded: boolean = false;

	dom:HTMLElement;

	constructor(dom:HTMLElement){
		this.dom = dom;

		this.create();
		this.addEventListeners();
	}

	addEventListeners(){}

	create(){
	}
	dispose(){
	}

	async load(resolve){
		resolve();
	}
	loaded(){}

	async transitionIn(resolve){
		resolve();
	}
	async transitionOut(resolve){
		resolve();
	}
}