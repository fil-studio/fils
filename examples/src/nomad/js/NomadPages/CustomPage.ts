import { Page } from "@fils/nomad";
import { gsap } from 'gsap';

export class CustomPage extends Page {
	async load(resolve){
		console.log('========== Loading new page');

		const val = { percent: 0 };
		gsap.to(val, {
			duration: 0.2,
			percent: 100,
			onUpdate: () => {
				console.log('========== Loading...', val.percent);
			},
			onComplete: () => {
				this.isLoaded = true;
				resolve();
			}
		})
	}

	async transitionIn(resolve): Promise<void> {
		console.log('========== Init IN');
		gsap.set(this.dom, {xPercent: 100})
		
		gsap.to(this.dom, {
			xPercent: 0,
			ease: 'power2.inOut',
			duration: 1,
			onComplete: () => {
				console.log('========== Resolve IN');
				resolve();
			}
		})
	}

	async transitionOut(resolve): Promise<void> {
		console.log('========== Init OUT');
		
		gsap.to(this.dom, {
			xPercent: -100,
			ease: 'power2.inOut',
			duration: 1,
			onComplete: () => {
				console.log('========== Resolve OUT');
				resolve();
			}
		})
	}

	kill(): void {
		console.log('========== KILL');
		gsap.killTweensOf(this.dom);
	}
}