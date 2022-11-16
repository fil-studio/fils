
import { Nomad } from '@fils/nomad';
import { CustomPage } from './NomadPages/CustomPage';

export class NomadDemo {
	constructor(){

		console.log('NomadDemo');

		new Nomad((template, dom) => {
			if(template === 'nomad') return new CustomPage(dom);
			return null;
		});

	}

}