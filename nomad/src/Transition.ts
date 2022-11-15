export class Transition {
	id: string = '';

	// Transition OUT
	transitionOutStart(){}
	transitionOutEnd(){}
	transitionOut(resolve, dom:HTMLElement){
		return resolve()
	}

	async transitionOutWrapper(dom:HTMLElement){
				
		this.transitionOutStart();

		const promise = new Promise((resolve) => {

			this.transitionOut(resolve, dom);

			this.transitionOutEnd();			

		});

		return await promise;
	}

	// Transition IN
	transitionInStart(){}
	transitionInEnd(){}
	transitionIn(resolve, dom:HTMLElement){
		return resolve()
	}

	async transitionInWrapper(dom:HTMLElement){
		
		this.transitionInStart();

		const promise = new Promise((resolve) => {

			this.transitionIn(resolve, dom);

			this.transitionInEnd();			

		});

		return await promise;
	}
}