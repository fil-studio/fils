

export class Page {

	active: boolean = false;

	id: string;
	dom:HTMLElement;
	template: string;

	constructor(id:string, template:string, dom:HTMLElement){
		this.dom = dom;
		this.id = id;
		this.template = template;
	}

	/**
	 * @description Triggers on class creation, this will be triggered only once, even if the user comes back to this page
	 */
	async init(resolve){
		resolve();
	}

	/**
	 * @description Triggers each time the user comes back to this page
	 */
	create(){
	}

	/**
	 * @description Triggers each time the user leaves this page
	 */
	dispose(){
	}

	async transitionIn(resolve){
		resolve();
	}
	async transitionOut(resolve){
		resolve();
	}
}