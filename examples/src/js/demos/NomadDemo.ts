
import { Nomad } from '../../../../nomad/src/Nomad';
import { FadeTransition } from './transitions/FadeTransition';

export class NomadDemo {
	constructor(){
		console.log('NomadDemo');

		const transitions = [
			new FadeTransition()
		]

		new Nomad(transitions);
	}

}