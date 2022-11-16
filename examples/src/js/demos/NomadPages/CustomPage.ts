import { Page } from "../../../../../nomad/src/Page";
import { gsap } from 'gsap';

export class CustomPage extends Page {
	async load(resolve){
		console.log('Loading new page');

		const val = { percent: 0 };
		gsap.to(val, {
			duration: 0.2,
			percent: 100,
			onUpdate: () => {
				console.log('Loading...', val.percent);
			},
			onComplete: () => {
				this.isLoaded = true;
				resolve();
			}
		})

	}

	async transitionIn(resolve): Promise<void> {
		console.log('========== Entra in');
		gsap.set(this.dom, {xPercent: 100})
		
		gsap.to(this.dom, {
			xPercent: 0,
			ease: 'power2.inOut',
			duration: 1,
			onComplete: () => {
				console.log('resolve in');
				resolve();
			}
		})
	}

	async transitionOut(resolve): Promise<void> {
		console.log('========== Entra out');
		
		gsap.to(this.dom, {
			xPercent: -100,
			ease: 'power2.inOut',
			duration: 1,
			onComplete: () => {
				console.log('resolve out');
				resolve();
			}
		})
	}

	kill(): void {
		console.log('KILL');
		
		gsap.killTweensOf(this.dom);
	}
}