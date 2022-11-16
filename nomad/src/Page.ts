

export class Page {
	id: string = '';
	
	isActive: boolean = false;
	isLoaded: boolean = false;
	
	dom:HTMLElement;
	constructor(dom:HTMLElement){
		this.dom = dom;
	}

	create(){}
	dispose(){}

	load(){}
	loaded(){}

	transitionIn(){}
	transitionOut(){}
}