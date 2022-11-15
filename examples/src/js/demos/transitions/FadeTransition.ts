import { Transition } from "../../../../../nomad/src/Transition"

export class FadeTransition extends Transition {
	id: string = 'fade';
	transitionOut(resolve: any, dom) {
		console.log('Entra Out');
		
		setTimeout(() => {
			console.log('Resolve Out');
			resolve();
		}, 5000);
	}
	transitionIn(resolve: any, dom) {
		console.log('Entra In');
		
		setTimeout(() => {
			console.log('Resolve In');
			resolve();
		}, 5000);
	}
}